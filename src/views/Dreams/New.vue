<template>
  <div class="dreams-new">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Enter a new dream</h1>

    <form v-on:submit.prevent="submit()">
<!--       make 3 tags  -->
      <div>
        <label for="dreamTags">Tags</label>
        <input type="text" id="tag1" v-model="newDreamTag1">
        <input type="text" id="tag2" v-model="newDreamTag2">
        <input type="text" id="tag3" v-model="newDreamTag3">

      </div>
      <div>
        <label for="dreamTitle">Title</label>
        <input type="text" id="dreamTitle" v-model="newDreamTitle">
      </div>
      <div>
        <label for="dreamContent">Content</label>
        <input type="text" id="dreamContent" v-model="newDreamContent">
      </div>
      <div>
        <label for="dreamImageUrl">Image Url</label>
        <input type="text" id="dreamImageUrl" v-model="newDreamImageUrl">
      </div>
      <div>
        <label for="dreamIsPublic">Dream is Public?<small>True or False</small></label>
        <input type="text" id="dreamIsPublic" v-model="newDreamIsPublic">
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
      newDreamTag1: "",
      newDreamTag2: "",
      newDreamTag3: "",
      newDreamTitle: "",
      newDreamContent: "",
      newDreamImageUrl: "",
      newDreamIsPublic: "",
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
        tag1: this.newDreamTag1,
        tag2: this.newDreamTag2,
        tag3: this.newDreamTag3,
        title: this.newDreamTitle,
        content: this.newDreamContent,
        image_url: this.newDreamImageUrl,
        is_public: this.newDreamIsPublic,
      };
      axios.post("/api/dreams", params).then(response => {
        console.log("success", response.data);
        this.$router.push("/"); //change this to dreams show page once made
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>