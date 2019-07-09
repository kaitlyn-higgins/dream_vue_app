<template>
  <div class="dreams-edit">

    <h1>Edit a dream</h1>

    {{tag_names}}

    <form v-on:submit.prevent="submit()">
      <div id="tag-names">
        <label for="dreamTags">Tags</label>
        <input type="text" id="tag0" v-model="tag_names[0]">
        <input v-if="shownInputs > 0" type="text" id="tag1" v-model="tag_names[1]">
        <input v-if="shownInputs > 1" type="text" id="tag2" v-model="tag_names[2]">
        <input v-if="shownInputs > 2" type="text" id="tag3" v-model="tag_names[3]">
        <input v-if="shownInputs > 3" type="text" id="tag4" v-model="tag_names[4]">
        <input v-if="shownInputs > 4" type="text" id="tag5" v-model="tag_names[5]">
        <input v-if="shownInputs > 5" type="text" id="tag6" v-model="tag_names[6]">
        <input v-if="shownInputs > 6" type="text" id="tag7" v-model="tag_names[7]">
        <input v-if="shownInputs > 7" type="text" id="tag8" v-model="tag_names[8]">
        <input v-if="shownInputs > 8" type="text" id="tag9" v-model="tag_names[9]">
        <input v-if="shownInputs > 9" type="text" id="tag10" v-model="tag_names[10]">
        <a v-on:click="shownInputs++">+</a>

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
    
<!--     <div v-if="status">
      {{error.response.data.errors}}
    </div> -->

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
      tag_names: [],
      dream: {},
      errors: [],
      status: "", 
      shownInputs: 0
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
        // tag_names: this.dream.tag_names,
        tag_names: this.tag_names,
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
        console.log(error.response.data.errors);
        // this.status = error.response.status;
      });
    }
  }
};
</script>