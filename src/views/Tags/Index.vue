<template>
  <div class="tags-index">


    <h1>Tags Index</h1>

    <div v-for="tag in tags">
      <h2 class="name"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></h2>

       
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tags: [],
      user: {}
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.tags = response.data;
      console.log(this.tags);
    });
  }
};

</script>