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
        <label for="gender">Gender</label>
        <input type="text" id="gender" v-model="user.gender">
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

      <div>
        <button v-on:click="destroyUser()">Delete Account</button>
      </div>

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    
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