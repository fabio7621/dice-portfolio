<template>
  <section class="projects">
    <h1>作品集</h1>

    <article v-for="p in projects" :key="p.title" class="project">
      <div class="preview">
        <img :src="p.image" :alt="p.title" />
      </div>
      <h2>{{ p.title }}</h2>
      <p>{{ p.description }}</p>
      <p v-if="p.stack">
        <em>{{ p.stack }}</em>
      </p>
      <div class="links">
        <a v-if="p.site" :href="p.site" target="_blank" rel="noopener"
          >前往網站</a
        >
        <a
          v-if="p.repo"
          :href="p.repo"
          target="_blank"
          rel="noopener"
          aria-label="GitHub Repository"
          class="github"
        >
          <svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </a>
      </div>
    </article>
  </section>
</template>

<script setup>
import helmentImg from "@/assets/images/helment.png";
import musicImg from "@/assets/images/music-react.png";
import dadongImg from "@/assets/images/dadongam.webp";
import tenImg from "@/assets/images/ten.webp";

const projects = [
  {
    title: "HelmentShop",
    description:
      "安全帽電商網站前後台 Vue3 option api + Vite + Pinia + Router，RESTful API 串接。",
    stack: "Vue 3 · Vite · Pinia",
    image: helmentImg,
    site: "https://fabio7621.github.io/HelmentShop/#/",
    repo: "https://github.com/fabio7621/HelmentShop",
  },
  {
    title: "MusicShop",
    description: "React.js + Vite + chart.js（音樂商店 mix 儀錶板）。",
    stack: "React · Vite · chart.js",
    image: musicImg,
    site: "https://fabio7621.github.io/musicstore-react/",
    repo: "https://github.com/fabio7621/musicstore-react",
  },
  {
    title: "大東洋（靜態切版）",
    description: "服務案例",
    stack: "Html + CSS",
    image: dadongImg,
    site: "https://www.freshlife.com.tw/",
    repo: "",
  },
  {
    title: "蔡教練",
    description: "服務案例",
    stack: "Html + CSS",
    image: tenImg,
    site: "https://fabio7621.github.io/tsai-coach/",
    repo: "https://github.com/fabio7621/tsai-coach",
  },
];
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.project {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.preview {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  background: #f2f2f2;
}
.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.links {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.25rem;
}
.links a {
  color: inherit;
  text-decoration: none;
}
.links a:not(.github) {
  padding: 0.35rem 0.75rem;
  border: 1px solid currentColor;
  border-radius: 4px;
  font-size: 0.9rem;
}
.github {
  display: inline-flex;
  align-items: center;
}
</style>
