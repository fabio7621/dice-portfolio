import { createRouter, createWebHashHistory } from 'vue-router'
import FaceHero from '../views/FaceHero.vue'
import FaceSkills from '../views/FaceSkills.vue'
import FaceProjects from '../views/FaceProjects.vue'
import FaceExperience from '../views/FaceExperience.vue'
import FaceAbout from '../views/FaceAbout.vue'
import FaceContact from '../views/FaceContact.vue'

export const FACE_ROUTES = {
  1: '/',
  2: '/skills',
  3: '/projects',
  4: '/experience',
  5: '/about',
  6: '/contact',
}

const routes = [
  { path: '/', component: FaceHero, meta: { face: 1 } },
  { path: '/skills', component: FaceSkills, meta: { face: 2 } },
  { path: '/projects', component: FaceProjects, meta: { face: 3 } },
  { path: '/experience', component: FaceExperience, meta: { face: 4 } },
  { path: '/about', component: FaceAbout, meta: { face: 5 } },
  { path: '/contact', component: FaceContact, meta: { face: 6 } },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
