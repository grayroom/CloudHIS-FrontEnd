import VueRouter from 'vue-router';

const route = [
  // path별 component를 추가한다.
  { path: '/emr', component: () => import('@/components/MainPage') },
  {
    path: '/emr/template',
    component: () => import('@/components/TemplateEditor'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: route,
});

export default router;
