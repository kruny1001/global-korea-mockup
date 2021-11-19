
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'intro', path: 'intro/:id', component: () => import('pages/intro.vue') },
      { name: 'signUp', path: 'signUp', component: () => import('pages/signUp.vue') },
      { name: 'info', path: 'info', component: () => import('pages/Info.vue') },
      { name: 'content', path: 'content', component: () => import('pages/Info.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
