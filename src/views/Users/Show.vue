<template>
  <div class="users-show">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>


<!--   <div v-if="current_user.id === user.id">
 -->
    <h2>Welcome back, {{ user.username }}</h2>

    <button><router-link to="/dreams/new">Enter a new dream</router-link></button>
   
    <button><router-link v-bind:to="'/users/' + user.id + '/edit'">Edit Account Info</router-link></button>
    


    <div v-for="dream in user.dreams">
      <h2 class="title"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <p>Posted / updated: {{dream.updated_at}}</p>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
        </ul>
        </h4>
      </div> 

    </div>





<!--     <h2>{{ dream.title }}</h2>
    <h5>{{ dream.user.username }}</h5>
    <div><img v-bind:src="dream.image_url" alt=""></div>
    <p>{{ dream.content }}</p>

    <div v-for="tag in dream.tags">
      <h4>
      <ul>
        <li>{{ tag.name }}</li>
      </ul>
      </h4>
    </div> 
    
    <div>
      <button>
       <router-link v-bind:to="'/dreams/' + dream.id + '/edit'">Update Dream</router-link>
     </button>
    </div> -->

<!--     <div>
      <button v-on:click="destroyProduct()">Destroy Product</button>
    </div>
 -->

  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      // dream: {},
      // tags: [],
      user: [],
      current_user: [],
      dreams: [],
      tags: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
      // console.log(this.user.dreams.tags);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
  }
};
</script>