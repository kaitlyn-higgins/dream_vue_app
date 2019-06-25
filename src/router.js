import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import UsersNew from './views/UsersNew.vue';
import DreamsIndex from './views/Dreams/Index.vue';
import DreamsNew from './views/Dreams/New.vue';
import DreamsShow from './views/Dreams/Show.vue';
import DreamsEdit from './views/Dreams/Edit.vue';
import TagsIndex from './views/Tags/Index.vue';
import TagsShow from './views/Tags/Show.vue';

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
    // {
    //   path: '/users/new',
    //   name: 'users-new',
    //   component: UsersNew
    // },
    {
      path: '/dreams',
      name: 'dreams-index',
      component: DreamsIndex
    },
    {
      path: '/dreams/new',
      name: 'dreams-new',
      component: DreamsNew
    },
    {
      path: '/dreams/:id',
      name: 'dreams-show',
      component: DreamsShow
    },
    {
      path: '/dreams/:id/edit',
      name: 'dreams-edit',
      component: DreamsEdit
    },
    {
      path: '/tags',
      name: 'tags-index',
      component: TagsIndex
    },
    {
      path: '/tags/:id',
      name: 'tags-show',
      component: TagsShow
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
