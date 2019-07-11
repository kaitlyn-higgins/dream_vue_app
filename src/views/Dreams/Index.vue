<template>
  <div class="dreams-index">


    <h1>Dreams Index</h1>
    
    <!-- filter search bar -->
    <div>
      <label for="dream-filter">Search dreams</label>
      <input type="text" placeholder="Enter search term" v-model="dreamFilter">
    </div>

    <label for="dream-filter">Find dreams by theme</label>
    <span v-for="theme in themes">
      <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
    </span>

    <!-- sorting buttons -->
<!-- 
    <div>
      <button v-on:click="setSortAttribute('updated_at')">Sort by Date</button>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>

        <button v-on:click="setSortAttribute('themes')">Sort by Theme</button>
          <i v-if="sortAttribute === 'themes' && sortAscending === 1">^</i>
          <i v-if="sortAttribute === 'themes' && sortAscending === -1"></i>
    </div> -->

<!--     <div v-for="dream in dreams"> -->
    <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)">
      <h2 class="title"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <h5 class="username"><router-link :to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link></h5>
      <h6>Dream Themes: </h6>
      <li v-for="theme in dream.themes">{{ theme.name }}</li>
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
      themes: [],
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/dreams").then(response => {
      this.dreams = response.data;
      // console.log(this.dreams);
    });
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      console.log(this.themes);
    });
  },
  methods: {
    // setSortAttribute: function(attribute) {
    //   if (this.sortAttribute === attribute) {
    //     this.sortAscending = this.sortAscending * -1;
    //   } else {
    //     this.sortAscending = 1;
    //   }
    //   this.sortAttribute = attribute;
    // },
  }
};

</script>