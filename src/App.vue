<template>
  <div id="app" class="ms-site-container">
    


    <header class="ms-header ms-header-primary ms-site-container">
      <!--ms-header-primary-->
      <div class="container container-full">
        <div class="ms-title">
          <a href="index.html">
            <!-- <img src="assets/img/demo/logo-header.png" alt=""> -->
            <span class="ms-logo animated zoomInDown animation-delay-5">I</span>
            <h1 class="animated fadeInRight animation-delay-6">Indra's <span>Web</span></h1>
          </a>
        </div>
        <div class="header-right">
          <div v-if="!isLoggedIn()" class="share-menu">
            <router-link to="/signup" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7"><label for="sign-up"></label><small>Sign Up</small></router-link>
          </div>
          <div v-if="!isLoggedIn()" class="share-menu">
            <router-link to="/login" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7"><label for="sign-up"></label><small>Log In</small></router-link>
          </div>
          <div v-if="isLoggedIn()" class="share-menu">
            <router-link to="/logout" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7"><label for="sign-up"></label><small>Log Out</small></router-link>
          </div>
  <!--         <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal"><i class="zmdi zmdi-account"></i></a>
          <form class="search-form animated zoomInDown animation-delay-9">
            <input id="search-box" type="text" class="search-input" placeholder="Search..." name="q" />
            <label for="search-box"><i class="zmdi zmdi-search"></i></label>
          </form>
          <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10"><i class="zmdi zmdi-menu"></i></a> -->
        </div>
      </div>
    </header>


    <nav class="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-primary">
      <div class="container container-full">
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">
            <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> -->
            <span class="ms-logo ms-logo-sm">M</span>
            <span class="ms-title">Material <strong>Style</strong></span>
          </a>
        </div>

        <div class="collapse navbar-collapse" id="ms-navbar">
          <ul class="navbar-nav">
            <li class="nav-item dropdown active">
              <router-link to="/" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="home">Home <i class="zmdi zmdi-chevron-down"></i></router-link>
              <ul class="dropdown-menu">

              </ul>
            </li>
            <li v-if="isLoggedIn()" class="nav-item dropdown">
              <router-link v-bind:to="'/users/' + getUserId() " class="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="page">My Dream Web<i class="zmdi zmdi-chevron-down"></i></router-link>
            </li>
            <li class="nav-item dropdown dropdown-megamenu-container">
              <router-link to="/dreams" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="component">Collective Dream Web <i class="zmdi zmdi-chevron-down"></i></router-link>

            </li>
            <li class="nav-item dropdown">
              <router-link to="/tags" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="blog">Strands <i class="zmdi zmdi-chevron-down"></i></router-link>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0)" class="ms-toggle-left btn-navbar-menu"><i class="zmdi zmdi-menu"></i></a>
      </div> <!-- container -->
    </nav>


    <router-view :key="$route.path"/>
    
    <!-- <footer class="ms-footer ms-footer-dark">
      <div class="container">
        <p>Copyright &copy; Material Style 2017</p>
      </div>
    </footer> -->


  </div>
<!--     <UsersShow :key="UsersShow.user"/>
 -->


</template>

<style>


</style>

<script>
import axios from "axios";
  
export default {
  data: function() {
    return {
      // userid: localStorage.getItem('user_id'),
      // dream: {},
      // tags: [],

    };
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function() {
      return localStorage.getItem('user_id');
    }
  }
};

</script>
