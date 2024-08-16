import { createRouter, createWebHistory } from 'vue-router';
import CertificateTemplate from '../components/CertificateTemplate.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CertificateTemplate,
    },
  ],
});

export default router;