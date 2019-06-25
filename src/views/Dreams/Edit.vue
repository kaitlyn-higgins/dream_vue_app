<template>
  <div class="dreams-edit">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Edit a dream</h1>

    <form v-on:submit.prevent="submit()">
      <div>
        <label for="dreamTags">Tags</label>
        <input type="text" id="tag1" placeholder="dinosaur" v-model="dream.tag1">
        <input type="text" id="tag2" placeholder="skiing" v-model="dream.tag2">
        <input type="text" id="tag3" placeholder="volcano" v-model="dream.tag3">

      </div>
      <div>
        <label for="dreamTitle">Title</label>
        <input type="text" id="dreamTitle" placeholder="Talented Dinosaur" v-model="dream.title">
      </div>
      <div>
        <label for="dreamContent">Content</label>
        <input type="text" id="dreamContent" placeholder="A volcano erupted, and with it came a t-rex wearing blazing gold skis, skiing down the lava. " v-model="dream.content">
      </div>
      <div>
        <label for="dreamImageUrl">Image Url</label>
        <input type="text" id="dreamImageUrl" placeholder="https://i.ytimg.com/vi/1vMBqDt0s0I/hqdefault.jpg" v-model="dream.image_url">
      </div>
      <div>
        <label for="dreamIsPublic">Dream is Public?<small>True or False</small></label>
        <input type="text" id="dreamIsPublic" placeholder="true" v-model="dream.is_public">
      </div>

      <button type="submit">Save Dream</button>
      
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      dream: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/dreams/" + this.$route.params.id).then(response => {
      this.dream = response.data;
      console.log(this.dream);
    });
  },
  methods: {
    submit: function() {
      var params = {
        tag1: this.dream.tag1,
        tag2: this.dream.tag2,
        tag3: this.dream.tag3,
        title: this.dream.title,
        content: this.dream.content,
        image_url: this.dream.image_url,
        is_public: this.dream.is_public,
      };
      axios.patch("/api/dreams/" + this.dream.id, params).then(response => {
        console.log("success", response.data);
        this.$router.push("/dreams/" + response.data.id ); //change this to dreams show page once made
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>