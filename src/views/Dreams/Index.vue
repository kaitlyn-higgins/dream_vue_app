<template>
  <div class="dreams-index">


    <h1>Dreams Index</h1>

    <div v-for="dream in dreams">
      <h2 class="title">{{ dream.title }}</h2>
      <h5 class="username">{{ dream.user.username }}</h5>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>
      <p class="content">{{ dream.content }}</p>

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
      dreams: [],
      tags: [],
      user: {}
    };
  },
  created: function() {
    axios.get("/api/dreams").then(response => {
      this.dreams = response.data;
      console.log(this.dreams);
    });
  }
};

</script>