
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/DeviceInformation.vue') }
    ]
  },
  {
    path: '/device',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/device', component: () => import('pages/Device.vue') }
    ]
  },
  {
    path: '/archive',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/archive', component: () => import('pages/Archive.vue') }
    ]
  },
  {
    path: '/cli',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/cli', component: () => import('pages/Cli.vue') }
    ]
  },
  {
    path: '/remote-cli',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/remote-cli', component: () => import('pages/RemoteCli.vue') }
    ]
  },
  {
    path: '/paint',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/paint', component: () => import('pages/Paint.vue') }
    ]
  },
  {
    path: '/pulse-plotter',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/pulse-plotter', component: () => import('pages/Pulseplot.vue') }
    ]
  },
  {
    path: '/nfc-tools',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/nfc-tools', component: () => import('pages/NfcTools.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
