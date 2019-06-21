import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import UsersNew from './views/UsersNew.vue';
import DreamsIndex from './views/Dreams/Index.vue';
import DreamsNew from './views/Dreams/New.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users/new',
      name: 'users-new',
      component: UsersNew
    },
    {
      path: '/dreams/index',
      name: 'dreams-index',
      component: DreamsIndex
    },
    {
      path: '/dreams/new',
      name: 'dreams-new',
      component: DreamsNew
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
