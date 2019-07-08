import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signup from "./views/Users/Signup.vue";
import Login from "./views/Users/Login.vue";
import Logout from "./views/Users/Logout.vue";
import UsersShow from "./views/Users/Show.vue";
import UsersEdit from "./views/Users/Edit.vue";
// import UsersNew from './views/UsersNew.vue';
import DreamsIndex from './views/Dreams/Index.vue';
import DreamsNew from './views/Dreams/New.vue';
import DreamsShow from './views/Dreams/Show.vue';
import DreamsEdit from './views/Dreams/Edit.vue';
import TagsIndex from './views/Tags/Index.vue';
import TagsShow from './views/Tags/Show.vue';
import Bubblechart from './views/Tags/Bubblechart.vue';

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
      path: '/signup',
      name: 'signup',
      component: Signup // this is users create
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
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
      path: '/users/:id',
      name: 'users-show',
      component: UsersShow
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      component: UsersEdit
    },
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
    },
    {
      path: '/bubblechart',
      name: 'bubblechart',
      component: Bubblechart
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
