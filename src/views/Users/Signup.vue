<template>
  <div class="signup">
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
          <input type="radio" name="gender" value="other" v-model="gender"> other
<!--           <input v-if="value =='other'" type="text" name="gender" v-model="gender" placeholder="specify (optional)"> -->
          <input type="radio" name="gender" value="non_specified" v-model="gender"> prefer not to specify<br>
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

    </div>
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
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        username: this.username,
        email: this.email,
        zip_code: this.zip_code,
        gender: this.gender,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
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