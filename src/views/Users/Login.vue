<template>
  <div class="login">


    <div class="bg-full-page bg-primary back-fixed">
      <div class="mw-500 absolute-center">
        <div class="card color-dark animated zoomInDown animation-delay-5">
          <div class="card-body">
            <h1 class="color-primary">Login</h1>
            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
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


                  <!-- login button -->
                </div>
                <div class="row ">
                  <div class="col-md-6">
                    <button type="submit" value="Submit" class="btn btn-raised btn-primary btn-block">Login <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></button>
                  </div>

                  <!-- router link to sign up  -->
                  <div class="col-md-6">
                    <router-link to="/signup" class="btn btn-primary btn-block">Sign Up<i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i></router-link>
              
                  </div>
                </div>
              </fieldset>
            </form>
            
          </div>
        </div>
        <div class="text-center animated fadeInUp animation-delay-7">
          <a href="index.html" class="btn btn-white"><i class="zmdi zmdi-home"></i> Go Home</a>
          <a href="javascript:void(0)" class="btn btn-white"><i class="zmdi zmdi-key"></i> Recovery Pass</a>
        </div>
      </div>
    </div>


    <!-- <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div> -->



  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
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