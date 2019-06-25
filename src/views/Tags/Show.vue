<template>
  <div class="tags-show">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Dreams with {{ tag.name }} tags</h1>
<!--     <h5>{{ tag.associated_dreams }}</h5>
 --><!--     <div><img v-bind:src="tag.image_url" alt=""></div>
    <p>{{ tag.content }}</p> -->

    <div v-for="dream in tag.associated_dreams">
      <h2 class="title">{{ dream.title }}</h2>
<!--       <h5 class="username">{{ dream.user.username }}</h5>
 -->      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>
      <p class="content">{{ dream.content }}</p>

      <p class="modified">
        <label for="updated_at">Last updated:</label>
        {{ dream.updated_at }}
      </p>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li>{{ tag.name }}</li>
        </ul>
        </h4>
      </div> 
       
    </div>
    

  </div>
</template>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tag: {},
      tags: [],
      associated_dreams: [],
      dreams: [],
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/tags/" + this.$route.params.id).then(response => {
      this.tag = response.data;
      console.log(this.tag);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
  }
};
</script>