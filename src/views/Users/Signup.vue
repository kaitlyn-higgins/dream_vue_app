<template>
  <div class="signup">


      <div class="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div class="mw-500 absolute-center">
          <div class="card color-dark shadow-6dp animated zoomInDown animation-delay-7">
            <div class="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 class="text-center no-m pt-4 pb-4 color-white index-1">Login Form</h2>
            </div>
            <ul class="nav nav-tabs nav-tabs-full nav-tabs-2 nav-tabs-transparent indicator-primary" role="tablist">
              <li class="nav-item" role="presentation"><a href="#ms-login-tab" aria-controls="ms-login-tab" role="tab" data-toggle="tab" class="nav-link withoutripple active"><i class="zmdi zmdi-account"></i> Login</a></li>
              <li class="nav-item" role="presentation"><a href="#ms-register-tab" aria-controls="ms-register-tab" role="tab" data-toggle="tab" class="nav-link withoutripple"><i class="zmdi zmdi-account-add"></i> Register</a></li>
            </ul>
            <div class="card-body">
              <div class="tab-content">


                <div role="tabpanel" class="tab-pane fade active show" id="ms-login-tab">
                  <form v-on:submit.prevent="loginSubmit()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user">Email</label>
                          <input type="email" id="ms-form-user" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" class="form-control" v-model="password">
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-5">
                          <div class="form-group mt-1">
                          </div>
                        </div>
                        <div class="col-7">
                          <button type="submit" value="Submit" class="btn btn-raised btn-primary pull-right">Login</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>



                <div role="tabpanel" class="tab-pane fade" id="ms-register-tab">
                  <form v-on:submit.prevent="registerSubmit()">
                    <fieldset>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-user-r">Username</label>
                          <input type="text" id="ms-form-user-r" class="form-control" v-model="username">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
                          <label class="control-label" for="ms-form-email-r">Email</label>
                          <input type="email" id="ms-form-email-r" class="form-control" v-model="email">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label class="control-label" for="ms-form-zip-code-r">Zip Code</label>
                          <input type="text" id="ms-form-user-r" class="form-control" v-model="zip_code">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-photo"></i></span>
                          <label class="control-label" for="ms-form-photo-r">Photo / Avatar</label>
                          <input type="file" id="ms-form-user-r" class="form-control" v-on:change="setFile($event)" ref="fileInput">
                        </div>
                      </div>
                      {{photo}}
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                          <label>Gender <small>optional</small></label><br>
          
                    
                          <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="male" v-model="gender">  male
                          <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="female" v-model="gender">  female  
                          <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="non_specified" v-model="gender"> prefer not to specify
                          <input type="radio">Other <input type="text" name="gender" value="" v-model="gender"/>


                          <!-- <input type="text" id="ms-form-user-r" class="form-control" v-model="username"> -->
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass-r">Password</label>
                          <input type="password" id="ms-form-pass-r" class="form-control" v-model="password">
                        </div>
                      </div>
                      <div class="form-group label-floating">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="zmdi zmdi-lock"></i></span>
                          <label class="control-label" for="ms-form-pass-retype">Re-type Password</label>
                          <input type="password" id="ms-form-pass-retype" class="form-control" v-model="passwordConfirmation">
                        </div>
                      </div>
                      <button type="submit" value="Submit" class="btn btn-raised btn-block btn-primary">Register Now</button>
                      
                    </fieldset>
                    <!-- <input type="submit" class="btn btn-primary" value="Submit"> -->
                  </form>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center animated fadeInUp animation-delay-7">
            <a href="index.html" class="btn btn-white"><i class="zmdi zmdi-home"></i> Go Home</a>
          </div>
        </div>
      </div>



<!-- 
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>Signup</h1>
          
          <div class="form-group">
            <label>Username:</label> 
            <input type="text" class="form-control" v-model="username">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Zip Code:</label> 
            <input type="number" class="form-control" v-model="zip_code">
          </div>
          <div>
            <label>Gender:<small> optional</small></label><br>
            <input type="radio" name="gender" value="male" v-model="gender">  male
            <input type="radio" name="gender" value="female" v-model="gender">  female  
            <input type="radio" name="gender" value="non_specified" v-model="gender"> prefer not to specify<br>
            <input type="radio">Other <input type="text" name="gender" value="" v-model="gender"/>
          </div>
          <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Why do we ask?" data-content="One of our main goals is to share dream data with the scientific community studying sleep and dreams. Gender could prove useful in pattern analyzation, so we give you the option of providing yours.">?</button>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <label>Password confirmation:</label>
            <input type="password" class="form-control" v-model="passwordConfirmation">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>

        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

      </div> -->


      <!-- <div class="ms-site-container">

        <div class="ms-hero-page-override ms-hero-img-airplane ms-bg-fixed ms-hero-bg-dark-light">
          <div class="container">
            <div class="text-center">
              <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Register</h1>
              <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Do not wait more register now! Access our great community and benefit from <span class="color-info">exclusive membership</span> conditions.</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card card-primary card-hero animated fadeInUp animation-delay-7">
            <div class="card-body">
              <form class="form-horizontal">
                <fieldset>
                  <div class="row form-group">
                    <label for="inputUser" class="col-md-2 control-label">Username</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" id="inputUser" placeholder="Username">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputEmail" class="col-md-2 control-label">Email</label>
                    <div class="col-md-9">
                      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputPassword" class="col-md-2 control-label">Password</label>
                    <div class="col-md-9">
                      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputPassword2" class="col-md-2 control-label">Again</label>
                    <div class="col-md-9">
                      <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputName" class="col-md-2 control-label">First Name</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" id="inputName" placeholder="First Name">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputLast" class="col-md-2 control-label">Last Name</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" id="inputLast" placeholder="Last Name">
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputGen" class="col-md-2 control-label">Gender</label>
                    <div class="col-md-9">
                      <select id="inputGen" class="form-control selectpicker">
                        <option>Male</option>
                        <option>Female </option>
                      </select>
                    </div>
                  </div>
                  <div class="row form-group">
                    <label for="inputDate" class="col-md-2 control-label">Bithday</label>
                    <div class="col-md-9">
                      <input id="datePicker" type="text" class="form-control" placeholder="mm/dd/yy">
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="offset-lg-2 col-lg-6">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> <span class="ml-2">I agree to the terms and conditions.</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <button class="btn btn-raised btn-primary btn-block">Register Now</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div> 

        <div class="btn-back-top">
          <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
        </div>
      </div> 
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
 -->

























  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      username: "",
      email: "",
      zip_code: "",
      gender: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      photo: ""
    };
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.photo = event.target.files[0];
      }
    },
    registerSubmit: function() {
      var formData = new FormData();
      formData.append("username", this.username);
      formData.append("email", this.email);
      formData.append("zip_code", this.zip_code);
      formData.append("photo", this.photo);
      formData.append("gender", this.gender);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.passwordConfirmation);
      // var params = {
      //   username: this.username,
      //   email: this.email,
      //   zip_code: this.zip_code,
      //   image: this.image,
      //   gender: this.gender,
      //   password: this.password,
      //   password_confirmation: this.passwordConfirmation
      // };
      axios.post("/api/users", formData).then(response => {
        this.$router.push("/login");
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },
    loginSubmit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios.post("/api/sessions", params).then(response => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("username", response.data.username);
        // console.log(response.data);
        // location.href = '/users/' + response.data.user_id;
        this.$router.push("/users/" + response.data.user_id);
      }).catch(error => {
        this.errors = ["Invalid email or password."];
        this.email = "";
        this.password = "";
      });
    }
  }
};
</script>

<!-- username: params[:username],
      zip_code: params[:zip_code],
      gender: params[:gender],
      password: params[:password],
      password_confirmation: params[:password_confirmation] -->