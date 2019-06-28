<template>
  <div class="tags-index">


    <h1>Tags Index</h1>

    <!-- filter search bar -->
    <div>
      <label for="tag-filter">Search Tags</label>
      <input type="text" placeholder="Enter search term" v-model="tagFilter" list="tags">
    </div>


    <!-- autocompletion -->
    <datalist id="tags">
      <option v-for="tag in tags">{{ tag.name }}</option>
    </datalist>


    <!-- tag list with filter enabled -->
    <div v-for="tag in filterBy(tags, tagFilter, 'name')">
    <!-- <div v-for="tag in tags"> -->
      <h2 class="name"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></h2>

       
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
      tags: [],
      user: {},
      tagFilter: ""
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