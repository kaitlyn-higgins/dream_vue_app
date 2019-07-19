<template>
  <div class="users-edit">

<!--     <h1>Edit Account</h1>

    <form v-on:submit.prevent="submit()">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email">
      </div>
      <div>
        <label for="zip_code">Zip Code</label>
        <input type="number" id="zip_code" v-model="user.zip_code">
      </div>
      <div>
        <label for="photo">Photo / Avatar</label>
        <input type="file" id="photo" class="form-control"  v-on:change="setFile($event)" ref="fileInput">
      </div>
      {{photo}}
      <div>
        <label for="gender">Gender <small> optional</small></label><br>
        <input type="radio" name="gender" value="male" v-model="user.gender">  male
        <input type="radio" name="gender" value="female" v-model="user.gender">  female  
        <input type="radio" name="gender" value="non_specified" v-model="user.gender"> prefer not to specify
        <input type="radio">Other<input type="text" name="gender" value="" v-model="user.gender"/><br>
      </div> -->

      <!-- password change -->
<!--       <div>
        <h5>Password and confirmation are <strong>required</strong></h5>
        <h6>You may change it at this time if you would like, but you may also continue to use your current password.</h6>
        <label for="password">New Password:</label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <div>
        <label for="new_password">New Password confirmation:</label>
        <input type="password" id="new_password" v-model="user.password_confirmation">
      </div>

      <button type="submit">Update</button>
    </form> -->


<!--       <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul> -->

      <!-- Button trigger modal -->
<!--       <button type="button" data-toggle="modal" data-target="#exampleModal">
        Delete Account
      </button> -->

      <!-- Modal -->
<!--       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Warning: this action is irreversible</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <h3>Are you sure you want to permanently delete your account?</h3>
             </div>
            </div>
            <div class="modal-footer">
              <button v-on:click="destroyUser()" type="button" class="btn btn-secondary" data-dismiss="modal">Delete Account</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div> -->
    


      
        <div class="ms-hero-page-override ms-hero-img-coffee ms-hero-bg-primary-dark">
          <!-- Modal -->
          <div class="ms-hero-page-override ms-bg-fixed">
            <div class="container">
              <div class="text-center">
                <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Modify Account Info</h1>
                <!-- <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Do not wait more register now! Access our great community and benefit from <span class="color-info">exclusive membership</span> conditions.</p> -->
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card card-primary card-hero animated fadeInUp animation-delay-7">
              <div class="card-body">
                <form v-on:submit.prevent="submit()" class="form-horizontal">
                  <fieldset>

                    <div class="row form-group">
                      <label for="inputUser" class="col-md-2 control-label">Username</label>
                      <div class="col-md-9">
                        <input type="text" class="form-control" id="inputUser" v-model="user.username">
                      </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputEmail" class="col-md-2 control-label">Email</label>
                      <div class="col-md-9">
                        <input type="email" class="form-control" id="inputEmail" v-model="user.email">
                      </div>
                    </div>



                    <div class="row form-group">
                      <label for="inputName" class="col-md-2 control-label">Zip Code</label>
                      <div class="col-md-9">
                        <input type="number" class="form-control" id="inputName" v-model="user.zip_code">
                      </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputLast" class="col-md-2 control-label">Photo / Avatar</label>
                     <!--  <div class="col-md-9">
                        <input type="file" class="form-control" id="photo" v-on:change="setFile($event)" ref="fileInput">
                        <button type="button" class="btn btn-fab btn-fab-mini" v-on:click="photoChanged = true">
                          <i class="material-icons">attach_file</i>
                        </button>
                      </div> -->
                      <div>
                        <label for="photo">Photo / Avatar</label>
                        <input type="text" id="photo" class="form-control"  v-model="user.photo">
                      </div>
                      {{photo}}
                    </div>
    



                    <div class="row form-group">
                      <label for="gender" class="col-md-2 control-label">Gender <small>optional</small></label>
                      <div class="col-md-9">
                        <label for="male">male</label>
                        <input type="radio" name="gender" class="form-control" value="male" v-model="user.gender">
                        <label for="male">female</label>
                        <input type="radio" name="gender" class="form-control" value="female" v-model="user.gender">
                        <label for="male">prefer not to specify</label>
                        <input type="radio" name="gender" class="form-control" value="non_specified" v-model="user.gender">
                        <label for="male">other</label>
                        <input type="radio" name="gender" class="form-control" value="other" v-model="user.gender">
                      </div>
                    </div>

                      

                        <!-- <span>
                        <label> male</label>
                        <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="male" v-model="user.gender">
                        <label> female</label>
                        <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="female" v-model="user.gender">
                        <label> prefer not to specify</label> 
                        <input type="radio" id="ms-form-user-r" name="gender" class="form-control" value="non_specified" v-model="user.gender">
                        <label> other</label>
                        <input type="radio">Other <input type="text" name="gender" value="" v-model="user.gender"/>
                        </span> -->

                        <!-- <input type="text" id="ms-form-user-r" class="form-control" v-model="username"> -->
                      
                    




<!--                     <div class="row form-group filters">
                      <label for="inputGen" class="col-md-2 control-label">Gender<small> optional</small></label>
                      <div class="col-md-9">
                        <select id="inputGen" class="form-control selectpicker" v-model="user.gender">
                          <option>Male</option>
                          <option>Female </option>
                          <option>Other </option>
                          <option>Prefer not to specify </option>
                        </select>
                      </div>
                      <div class="result">
                        <label>Previous Answer: <strong>{{user.gender}}</strong></label>
                      </div>
                    </div> -->



  



                    <div class="row form-group">
                      <label for="inputPassword" class="col-md-2 control-label">New Password</label>
                      <div class="col-md-9">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password">
                      </div>
                    </div>
                    <div class="row form-group">
                      <label for="inputPassword2" class="col-md-2 control-label">New Password Confirmation</label>
                      <div class="col-md-9">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" v-model="user.password_confirmation">
                      </div>
                    </div>
                    
                    <div class="row mt-2">
                      <!-- <div class="offset-lg-2 col-lg-6">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox"> <span class="ml-2">I agree to the terms and conditions.</span>
                          </label>
                        </div>
                      </div> -->
                      <div class="col-lg-3">
                        <button type="submit" class="btn btn-raised btn-primary btn-block">Save Changes</button>
                      </div>
                      <div class="col-lg-3">
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-raised btn-primary btn-block">Delete Account</button>
                      </div>
                    </div>
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </fieldset>
                </form>
                <div>
                  <h5>Password and confirmation are <strong>required.</strong></h5>
                  <h6>You may change it at this time if you would like, but you may also continue to use your current password.</h6>
                </div>
              </div>
            </div>
          </div> <!-- container -->
          
          <div class="btn-back-top">
            <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
          </div>
        </div> <!-- ms-site-container -->





              <!-- Button trigger modal -->
        <!--       <button type="button" data-toggle="modal" data-target="#exampleModal">
                Delete Account
              </button> -->

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Warning: this action is irreversible</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <h3>Are you sure you want to permanently delete your account?</h3>
                     </div>
                    </div>
                    <div class="modal-footer">
                      <button v-on:click="destroyUser()" type="button" class="btn btn-secondary" data-dismiss="modal">Delete Account</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
        





  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: [],
      photo: "",
      photoChanged: false,
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      // console.log(this.user);
    });
  },
  methods: {
    // setFile: function(event) {
    //   if (event.target.files.length > 0) {
    //     this.photo = event.target.files[0];
    //   }
    // },
    submit: function() {
      var formData = new FormData();
      formData.append("username", this.user.username);
      formData.append("email", this.user.email);
      formData.append("zip_code", this.user.zip_code);
      formData.append("photo", this.user.photo);
      formData.append("gender", this.user.gender);
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);
      // var params = {
      //   username: this.user.username,
      //   email: this.user.email,
      //   zip_code: this.user.zip_code,
      //   photo: this.user.photo,
      //   gender: this.user.gender,
      //   password: this.user.password,
      //   password_confirmation: this.user.password_confirmation
      // };
      // if (this.photoChanged) {
      //   formData.append("photo", this.photo);
      // }
      axios.patch("/api/users/" + this.user.id, formData).then(response => {
        console.log("success", response.data);
        console.log(response.data);
        // console.log(this.user.id);
        this.$router.push("/users/" + this.user.id ); //change this to dreams show page once made
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },
    destroyUser: function() {
      // if (confirm("Are you sure you want to permenantly delete your account?")) // incorporate are you sure message
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Account deleted", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>