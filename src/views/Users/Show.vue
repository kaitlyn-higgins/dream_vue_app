<template>
  <div class="users-show">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

<!-- current user options / views -->

    <div v-if="isCurrentUser()">
      <h2>Welcome back, {{ user.username }}</h2>

      <button><router-link to="/dreams/new">Enter a new dream</router-link></button>
     
      <button> <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit Account Info</router-link></button>
    </div>


<!-- dream strand text -->

    <div>
      <h2 v-if="isCurrentUser()">Your dream strand</h2>
      <h2 v-else>{{user.username}}'s dream strand</h2>

    </div>


    <!-- filter search bar -->

    <div>
      <label for="dream-filter" v-if="isCurrentUser()">Search your dreams</label>
      <label for="dream-filter" v-else>Search {{user.username}}'s dreams</label>
      <input type="text" placeholder="Enter search term" v-model="dreamFilter" list="titles">
    </div>


    <label for="dream-filter">Find dreams by theme</label>
    <span v-for="theme in themes">
      <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
    </span>

    <!-- autocompletion -->

    <datalist id="titles">
      <option v-for="dream in user.dreams">{{ dream.title }}</option>
    </datalist>


    <!-- sorting buttons -->

    <div>
      <button v-on:click="setSortAttribute('updated_at')">Sort by Date</button>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === 1">^</i>
        <i v-if="sortAttribute === 'updated_at' && sortAscending === -1"></i>
    </div>


    <!-- main content w/ filter enabled -->
   
    <div v-for="dream in orderBy(filterBy(user.dreams, dreamFilter, 'title', 'content', 'tags', 'themes'), sortAttribute, sortAscending)">  

      <h2 class="title"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <p class="date">Posted / updated: {{ formattedDate(dream.updated_at) }}</p>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
        </ul>
        </h4>
      </div> 

    </div>





<!--     <h2>{{ dream.title }}</h2>
    <h5>{{ dream.user.username }}</h5>
    <div><img v-bind:src="dream.image_url" alt=""></div>
    <p>{{ dream.content }}</p>

    <div v-for="tag in dream.tags">
      <h4>
      <ul>
        <li>{{ tag.name }}</li>
      </ul>
      </h4>
    </div> 
    
    <div>
      <button>
       <router-link v-bind:to="'/dreams/' + dream.id + '/edit'">Update Dream</router-link>
     </button>
    </div> -->

<!--     <div>
      <button v-on:click="destroyProduct()">Destroy Product</button>
    </div>
 -->

  </div>
</template>


<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import moment from 'moment';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      // dream: {},
      // tags: [],
      user: [],
      current_user: [],
      dreams: [],
      tags: [],
      errors: [],
      dreamFilter: "",
      sortAttribute: "updated_at",
      sortAscending: 1,
      themes: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
      // console.log(this.user.dreams.tags);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      console.log(this.themes);
    });
  },
  methods: {
    setSortAttribute: function(attribute) {
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    },
    isCurrentUser: function() {
      console.log(typeof localStorage.getItem("user_id"));
      console.log(typeof this.user.id);
      if (localStorage.getItem("user_id") == this.user.id) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },

    formattedDate: function(date) {
      return moment(date).format('LLLL');
    }
  }
};
</script>