<template>
  <div class="users-new">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Create an Account</h1>
    <div>
      Email: <input type="text" v-model="newUserEmail">
      Username: <input type="text" v-model="newUserUsername">
      Zip Code: <input type="text" v-model="newUserZipCode">
      Gender (optional): <input type="text" v-model="newUserGender">

      <button v-on:click="createUser()">Create Account</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      newUserEmail: "",
      newUserUsername: "",
      newUserZipCode: "",
      newUserGender: ""
    };
  },
  methods: {
    createUser: function() {
      var params = {
        email: this.newUserEmail,
        username: this.newUserUsername,
        zip_code: this.newUserZipCode,
        gender: this.newUserGender
      };
      axios.post("/api/users", params).then(response => {
        this.$router.push("/");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};



</script>