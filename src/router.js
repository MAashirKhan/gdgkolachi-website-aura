import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue'),
    },
    {
      name: 'events',
      path: '/events',
      component: () => import('./views/Events/Page.vue'),
      children: [
        {
          path: '/',
          name: 'event-list',
          component: () => import('./views/Events/EventsList.vue'),
        },
        {
          path: 'details/:eventId',
          name: 'event',
          component: () => import('./views/Events/Event.vue'),
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
});
