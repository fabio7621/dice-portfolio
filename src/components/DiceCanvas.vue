<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import * as THREE from "three";
import { gsap } from "gsap";
import { useDiceStore } from "../stores/dice";

const canvasRef = ref(null);
const diceStore = useDiceStore();

const FACE_ROTATIONS = {
  1: { x: 0, y: 0 },
  2: { x: 0, y: Math.PI / 2 },
  3: { x: -Math.PI / 2, y: 0 },
  4: { x: Math.PI / 2, y: 0 },
  5: { x: 0, y: -Math.PI / 2 },
  6: { x: Math.PI, y: 0 },
};

const FACE_COLORS = [
  "#fbd000",
  "#d40000",
  "#ffffff",
  "#00a800",
  "#5c94fc",
  "#ffea66",
];
const FACE_SYMBOLS = ["?", "M", "★", "1UP", "!", "🍄"];

function makeFaceTexture(bg, symbol) {
  const size = 256;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, size, 18);
  ctx.fillRect(0, size - 18, size, 18);
  ctx.fillRect(0, 0, 18, size);
  ctx.fillRect(size - 18, 0, 18, size);
  ctx.fillRect(28, 28, 16, 16);
  ctx.fillRect(size - 44, 28, 16, 16);
  ctx.fillRect(28, size - 44, 16, 16);
  ctx.fillRect(size - 44, size - 44, 16, 16);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(18, 18, size - 36, 8);
  ctx.fillRect(18, 18, 8, size - 36);
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(18, size - 26, size - 36, 8);
  ctx.fillRect(size - 26, 18, 8, size - 36);
  ctx.fillStyle = "#000";
  ctx.font = 'bold 130px "Press Start 2P", monospace';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbol, size / 2 + 4, size / 2 + 8);
  ctx.fillStyle = "#fff";
  ctx.fillText(symbol, size / 2, size / 2);
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

let scene, camera, renderer, dice, frameId, resizeHandler;
let pointerDown = false;
let lastX = 0,
  lastY = 0;
let isDragging = false;

// 比較兩個 Euler 旋轉之間的「面方向距離」：用 quaternion dot 比較
function findClosestFace(rotX, rotY) {
  const tmp = new THREE.Euler(rotX, rotY, 0, "XYZ");
  const qCurrent = new THREE.Quaternion().setFromEuler(tmp);
  let best = 1;
  let bestDot = -Infinity;
  for (const [face, r] of Object.entries(FACE_ROTATIONS)) {
    const qFace = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(r.x, r.y, 0, "XYZ"),
    );
    const dot = Math.abs(qCurrent.dot(qFace)); // 1 = 完全一致
    if (dot > bestDot) {
      bestDot = dot;
      best = Number(face);
    }
  }
  return best;
}

// RWD：依視窗寬度調整骰子位置與相機距離
function applyResponsiveLayout() {
  if (!camera || !dice) return;
  const w = window.innerWidth;
  const isMobile = w < 768;
  if (isMobile) {
    dice.position.x = 0;
    dice.position.y = 1.6;
    dice.scale.setScalar(0.75);
    camera.position.z = 7;
  } else {
    dice.position.x = -1.8;
    dice.position.y = 0;
    dice.scale.setScalar(1);
    camera.position.z = 6;
  }
  camera.aspect = w / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(w, window.innerHeight);
}

onMounted(() => {
  const canvas = canvasRef.value;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 6);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const materials = FACE_COLORS.map(
    (color, i) =>
      new THREE.MeshStandardMaterial({
        map: makeFaceTexture(color, FACE_SYMBOLS[i]),
        roughness: 0.55,
        metalness: 0.1,
      }),
  );
  dice = new THREE.Mesh(geometry, materials);
  scene.add(dice);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const dir = new THREE.DirectionalLight(0xffffff, 1.1);
  dir.position.set(5, 5, 5);
  scene.add(dir);

  applyResponsiveLayout();

  const animate = () => {
    if (!diceStore.isAnimating && !isDragging) {
      dice.rotation.y += 0.0025;
      dice.rotation.x += 0.0012;
    }
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };
  animate();

  resizeHandler = applyResponsiveLayout;
  window.addEventListener("resize", resizeHandler);

  // ===== Pointer drag =====
  const onPointerDown = (e) => {
    if (diceStore.isAnimating) return;
    pointerDown = true;
    isDragging = false;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!pointerDown) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 2) isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    dice.rotation.y += dx * 0.01;
    dice.rotation.x += dy * 0.01;
  };
  const onPointerUp = (e) => {
    if (!pointerDown) return;
    pointerDown = false;
    canvas.releasePointerCapture?.(e.pointerId);
    if (!isDragging) return;
    isDragging = false;
    const face = findClosestFace(dice.rotation.x, dice.rotation.y);
    if (face === diceStore.currentFace) {
      // 已經是當前面 → 直接吸附回正
      diceStore.isAnimating = true;
      const t = FACE_ROTATIONS[face];
      gsap.to(dice.rotation, {
        x: t.x,
        y: t.y,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => diceStore.finishAnimation(),
      });
    } else {
      diceStore.goToFace(face); // 觸發 watch → GSAP 動畫 + router
    }
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  canvas.style.touchAction = "none";
  canvas.style.cursor = "grab";

  // 暫存以便清理
  canvas._cleanup = () => {
    canvas.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };
});

watch(
  () => diceStore.currentFace,
  (newFace) => {
    if (!dice) return;
    const target = FACE_ROTATIONS[newFace];
    // 為了走最短路徑，把當前 rotation 規約到最接近 target 的 2π 倍數
    const shortest = (current, t) => {
      const diff = t - current;
      const wrapped = Math.atan2(Math.sin(diff), Math.cos(diff));
      return current + wrapped;
    };
    gsap.to(dice.rotation, {
      x: shortest(dice.rotation.x, target.x),
      y: shortest(dice.rotation.y, target.y),
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        dice.rotation.x = target.x;
        dice.rotation.y = target.y;
        diceStore.finishAnimation();
      },
    });
  },
);

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId);
  window.removeEventListener("resize", resizeHandler);
  canvasRef.value?._cleanup?.();
  renderer?.dispose();
});
</script>

<template>
  <canvas ref="canvasRef" class="dice-canvas" />
</template>
