import { createRouter, createWebHistory } from 'vue-router';
import CertificateGeneratorPlugin from '../components/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CertificateGeneratorPlugin,
    },
  ],
});

export default router;