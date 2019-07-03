<template>
  <div class="dreams-index">


    <h1>Dreams Index</h1>

    
    <!-- filter search bar -->
    <div>
      <label for="dream-filter">Search dreams</label>
      <input type="text" placeholder="Enter search term" v-model="dreamFilter">
    </div>


<!--     <div v-for="dream in dreams"> -->
    <div v-for="dream in filterBy(dreams, dreamFilter, 'title', 'content', 'tags')">
      <h2 class="title"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <h5 class="username"><router-link :to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link></h5>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>
      <p class="content">{{ dream.content }}</p>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
          <!-- <li><router-link to="{ name: 'tags-show', params: { tagId: tag.id}}">{{ tag.name }}</router-link></li> -->
        </ul>
        </h4>
      </div> 

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      dreams: [],
      tags: [],
      user: {},
      dreamFilter: "",
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