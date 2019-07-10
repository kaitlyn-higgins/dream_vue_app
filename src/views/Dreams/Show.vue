<template>
  <div class="dreams-show">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h2>{{ dream.title }}</h2>
    <h5><router-link v-bind:to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link>{{  }}</h5>
    <li v-for="theme in dream.themes">{{ theme.name }}</li>
    <div><img v-bind:src="dream.image_url" alt=""></div>
    <p>{{ dream.content }}</p>

    <div v-for="tag in dream.tags">
      <h4>
      <ul>
        <li><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
      </ul>
      </h4>
    </div> 
    
    <div>
      <button>
       <router-link v-bind:to="'/dreams/' + dream.id + '/edit'">Update Dream</router-link>
     </button>
    </div>

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
      dream: {},
      tags: [],
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/dreams/" + this.$route.params.id).then(response => {
      this.dream = response.data;
      console.log(this.dream);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
  }
};
</script>