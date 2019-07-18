<template>
  <div id="app" class="ms-site-container">
    
    <!-- <div class="modal modal-primary" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog animated zoomIn animated-3x" role="document">
        <div class="modal-content">
          <div class="modal-header d-block shadow-2dp no-pb">
            <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
            <div class="modal-title text-center">
              <span class="ms-logo ms-logo-white ms-logo-sm mr-1">M</span>
              <h3 class="no-m ms-site-title">Material<span>Style</span></h3>
            </div>
            <div class="modal-header-tabs">
              <ul class="nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-primary" role="tablist">
                <li class="nav-item" role="presentation"><a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" class="nav-link active withoutripple"><i class="zmdi zmdi-account"></i> Login</a></li>
                <li class="nav-item" role="presentation"><a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="zmdi zmdi-account-add"></i> Register</a></li>
                <li class="nav-item" role="presentation"><a href="#ms-recovery-tab" aria-controls="ms-recovery-tab" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="zmdi zmdi-key"></i> Recovery Pass</a></li>
              </ul>
            </div>
          </div>
          <div class="modal-body">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab">
                <form autocomplete="off">
                  <fieldset>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                        <label class="control-label" for="ms-form-user">Username</label>
                        <input type="text" id="ms-form-user" class="form-control">
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                        <label class="control-label" for="ms-form-pass">Password</label>
                        <input type="password" id="ms-form-pass" class="form-control">
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-6">
                        <div class="form-group no-mt">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> Remember Me </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <button class="btn btn-raised btn-primary pull-right">Login</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
                <div class="text-center">
                  <h3>Login with</h3>
                  <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-facebook"><i class="zmdi zmdi-facebook"></i> Facebook</a>
                  <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-twitter"><i class="zmdi zmdi-twitter"></i> Twitter</a>
                  <a href="javascript:void(0)" class="wave-effect-light btn btn-raised btn-google"><i class="zmdi zmdi-google"></i> Google</a>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="ms-register-tab">
                <form>
                  <fieldset>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                        <label class="control-label" for="ms-form-user-r">Username</label>
                        <input type="text" id="ms-form-user-r" class="form-control">
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
                        <label class="control-label" for="ms-form-email-r">Email</label>
                        <input type="email" id="ms-form-email-r" class="form-control">
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                        <label class="control-label" for="ms-form-pass-r">Password</label>
                        <input type="password" id="ms-form-pass-r" class="form-control">
                      </div>
                    </div>
                    <div class="form-group label-floating">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                        <label class="control-label" for="ms-form-pass-rn">Re-type Password</label>
                        <input type="password" id="ms-form-pass-rn" class="form-control">
                      </div>
                    </div>
                    <button class="btn btn-raised btn-block btn-primary">Register Now</button>
                  </fieldset>
                </form>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="ms-recovery-tab">
                <fieldset>
                  <div class="form-group label-floating">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                      <label class="control-label" for="ms-form-user-re">Username</label>
                      <input type="text" id="ms-form-user-re" class="form-control">
                    </div>
                  </div>
                  <div class="form-group label-floating">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
                      <label class="control-label" for="ms-form-email-re">Email</label>
                      <input type="email" id="ms-form-email-re" class="form-control">
                    </div>
                  </div>
                  <button class="btn btn-raised btn-block btn-primary">Send Password</button>
                </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <header class="ms-header ms-header-primary ms-site-container">
      <!--ms-header-primary-->
      <div class="container container-full">
        <div class="ms-title">
          <router-link to="/">
            <img src="assets/img/demo/logo-header.png" alt="">
            <span class="ms-logo animated zoomInDown animation-delay-5">I</span>
            <h1 class="animated fadeInRight animation-delay-6">Indra's <span>Web</span></h1>
          </router-link>
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
       <!--    <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal"><i class="zmdi zmdi-account"></i></a>
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
<!-- nav ends -->
<!-- slidebar begins -->
    <div class="ms-slidebar sb-slidebar sb-left sb-style-overlay" id="ms-slidebar">
      <div class="sb-slidebar-container">
        <header class="ms-slidebar-header">
          <div class="ms-slidebar-login">
            <a href="javascript:void(0)" class="withripple"><i class="zmdi zmdi-account"></i> Login</a>
            <a href="javascript:void(0)" class="withripple"><i class="zmdi zmdi-account-add"></i> Register</a>
          </div>
          <div class="ms-slidebar-title">
            <form class="search-form">
              <input id="search-box-slidebar" type="text" class="search-input" placeholder="Search..." name="q" />
              <label for="search-box-slidebar"><i class="zmdi zmdi-search"></i></label>
            </form>
            <div class="ms-slidebar-t">
              <span class="ms-logo ms-logo-sm">M</span>
              <h3>Material<span>Style</span></h3>
            </div>
          </div>
        </header>
        <ul class="ms-slidebar-menu" id="slidebar-menu" role="tablist" aria-multiselectable="true">
          <li class="card" role="tab" id="sch1">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc1" aria-expanded="false" aria-controls="sc1">
              <i class="zmdi zmdi-home"></i> Home </a>
            <ul id="sc1" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch1" data-parent="#slidebar-menu">
              <li><a href="index.html">Default Home</a></li>
              <li><a href="home-generic-2.html">Home Black Slider</a></li>
              <li><a href="home-landing.html">Home Landing Intro</a></li>
              <li><a href="home-landing3.html">Home Landing Video</a></li>
              <li><a href="home-shop.html">Home Shop 1</a></li>
            </ul>
          </li>
          <li class="card" role="tab" id="sch2">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc2" aria-expanded="false" aria-controls="sc2">
              <i class="zmdi zmdi-desktop-mac"></i> Pages </a>
            <ul id="sc2" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch2" data-parent="#slidebar-menu">
              <li><a href="page-about.html">About US</a></li>
              <li><a href="page-team.html">Our Team</a></li>
              <li><a href="page-product.html">Products</a></li>
              <li><a href="page-services.html">Services</a></li>
              <li><a href="page-faq.html">FAQ</a></li>
              <li><a href="page-timeline_left.html">Timeline</a></li>
              <li><a href="page-contact.html">Contact Option</a></li>
              <li><a href="page-login.html">Login</a></li>
              <li><a href="page-pricing.html">Pricing</a></li>
              <li><a href="page-coming.html">Coming Soon</a></li>
            </ul>
          </li>
          <li class="card" role="tab" id="sch4">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc4" aria-expanded="false" aria-controls="sc4">
              <i class="zmdi zmdi-edit"></i> Blog </a>
            <ul id="sc4" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch4" data-parent="#slidebar-menu">
              <li><a href="blog-sidebar.html">Blog Sidebar 1</a></li>
              <li><a href="blog-sidebar2.html">Blog Sidebar 2</a></li>
              <li><a href="blog-masonry.html">Blog Masonry 1</a></li>
              <li><a href="blog-masonry2.html">Blog Masonry 2</a></li>
              <li><a href="blog-full.html">Blog Full Page 1</a></li>
              <li><a href="blog-full2.html">Blog Full Page 2</a></li>
              <li><a href="blog-post.html">Blog Post 1</a></li>
              <li><a href="blog-post2.html">Blog Post 2</a></li>
            </ul>
          </li>
          <li class="card" role="tab" id="sch5">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc5" aria-expanded="false" aria-controls="sc5">
              <i class="zmdi zmdi-shopping-basket"></i> E-Commerce </a>
            <ul id="sc5" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch5" data-parent="#slidebar-menu">
              <li><a href="ecommerce-filters.html">E-Commerce Sidebar</a></li>
              <li><a href="ecommerce-filters-full.html">E-Commerce Sidebar Full</a></li>
              <li><a href="ecommerce-filters-full2.html">E-Commerce Topbar Full</a></li>
              <li><a href="ecommerce-item.html">E-Commerce Item</a></li>
              <li><a href="ecommerce-cart.html">E-Commerce Cart</a></li>
            </ul>
          </li>
          <li class="card" role="tab" id="sch6">
            <a class="collapsed" role="button" data-toggle="collapse" href="#sc6" aria-expanded="false" aria-controls="sc6">
              <i class="zmdi zmdi-collection-image-o"></i> Portfolio </a>
            <ul id="sc6" class="card-collapse collapse" role="tabpanel" aria-labelledby="sch6" data-parent="#slidebar-menu">
              <li><a href="portfolio-filters_sidebar.html">Portfolio Sidebar Filters</a></li>
              <li><a href="portfolio-filters_topbar.html">Portfolio Topbar Filters</a></li>
              <li><a href="portfolio-filters_sidebar_fluid.html">Portfolio Sidebar Fluid</a></li>
              <li><a href="portfolio-filters_topbar_fluid.html">Portfolio Topbar Fluid</a></li>
              <li><a href="portfolio-cards.html">Porfolio Cards</a></li>
              <li><a href="portfolio-masonry.html">Porfolio Masonry</a></li>
              <li><a href="portfolio-item.html">Portfolio Item 1</a></li>
              <li><a href="portfolio-item2.html">Portfolio Item 2</a></li>
            </ul>
          </li>
          <li>
            <a class="link" href="component-typography.html"><i class="zmdi zmdi-view-compact"></i> UI Elements</a>
          </li>
          <li>
            <a class="link" href="page-all.html"><i class="zmdi zmdi-link"></i> All Pages</a>
          </li>
        </ul>
        <div class="ms-slidebar-social ms-slidebar-block">
          <h4 class="ms-slidebar-block-title">Social Links</h4>
          <div class="ms-slidebar-social">
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-facebook"><i class="zmdi zmdi-facebook"></i> <span class="badge-pill badge-pill-pink">12</span>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-twitter"><i class="zmdi zmdi-twitter"></i> <span class="badge-pill badge-pill-pink">4</span>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-google"><i class="zmdi zmdi-google"></i>
              <div class="ripple-container"></div>
            </a>
            <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-instagram"><i class="zmdi zmdi-instagram"></i>
              <div class="ripple-container"></div>
            </a>
          </div>
        </div>
      </div>
    </div>


    <router-view :key="$route.path"/>

    
    <!-- <footer class="ms-footer ms-footer-dark">
      <div class="container">
        <p>Copyright &copy; Material Style 2017</p>
      </div>
    </footer> -->

<!--     <vue-particles color="#dedede"></vue-particles>
 -->  </div>
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
