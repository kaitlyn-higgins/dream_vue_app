<template>
  <div class="users-edit">

    <h1>Edit Account</h1>

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
        <input type="number" id="zip_code"  v-model="user.zip_code">
      </div>
      <div>
        <label for="gender">Gender <small> optional</small></label><br>
        <input type="radio" id="gender" name="gender" value="male" v-model="user.gender">  male
        <input type="radio" id="gender" name="gender" value="female" v-model="user.gender">  female  
        <input type="radio" id="gender" name="gender" value="non_specified" v-model="user.gender"> prefer not to specify
        <input type="radio">Other<input type="text" name="gender" value="" v-model="user.gender"/>
      </div>
      <div>
        <label for="password">New Password:</label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <div>
        <label for="new_password">New Password confirmation:</label>
        <input type="password" id="new_password" v-model="user.password_confirmation">
      </div>

      <button type="submit">Update</button>
    </form>


      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <!-- Button trigger modal -->
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        Delete Account
      </button>

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
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    submit: function() {
      var params = {
        username: this.user.username,
        email: this.user.email,
        zip_code: this.user.zip_code,
        gender: this.user.gender,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      };
      axios.patch("/api/users/" + this.user.id, params).then(response => {
        console.log("success", response.data);
        this.$router.push("/users/" + response.data.id ); //change this to dreams show page once made
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