<template>
  <div id="app">
    <div id="nav">
<!--       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | -->
      <div><router-link to="/dreams">Dreams Index</router-link></div>
      <div><router-link to="/tags">Tags Index</router-link></div>
      <div v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link></div>
      <div v-if="!isLoggedIn()"><router-link to="/login">Login</router-link></div>
      <div v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></div>
      <div v-if="isLoggedIn()"><router-link v-bind:to="'/users/' + user.id ">My Dreams</router-link></div>
      <!-- <router-link to="/users/:id">My Dreams</router-link> -->

    </div>
    <router-view :key="$route.path"/>
<!--     <UsersShow :key="UsersShow.user"/>
 -->  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#container {
  min-width: 320px;
  max-width: 800px;
  margin: 0 auto;
}
</style>

<script>
import axios from "axios";
  
export default {
  data: function() {
    return {
      // userid: localStorage.getItem('user_id'),
      // dream: {},
      // tags: [],
      user: {},

    };
  },
  created: function() {
    axios.get("/api/users/" + localStorage.getItem('user_id')).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    forceRerender() {
      this.user += 1;
    }
  }
};

</script>
