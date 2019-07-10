<template>
  <div class="dreams-new">

    <h1>Enter a new dream</h1>
    
    {{tagNames}}


    <form v-on:submit.prevent="submit()">
<!--       make 3 tags  -->
      <div id="tag-names">
        <label for="dreamTags">Tags</label>
        <input type="text" id="tag0" v-model="tagNames[0]">
        <input v-if="shownInputs > 0" type="text" id="tag1" v-model="tagNames[1]">
        <input v-if="shownInputs > 1" type="text" id="tag2" v-model="tagNames[2]">
        <input v-if="shownInputs > 2" type="text" id="tag3" v-model="tagNames[3]">
        <input v-if="shownInputs > 3" type="text" id="tag4" v-model="tagNames[4]">
        <input v-if="shownInputs > 4" type="text" id="tag5" v-model="tagNames[5]">
        <input v-if="shownInputs > 5" type="text" id="tag6" v-model="tagNames[6]">
        <input v-if="shownInputs > 6" type="text" id="tag7" v-model="tagNames[7]">
        <input v-if="shownInputs > 7" type="text" id="tag8" v-model="tagNames[8]">
        <input v-if="shownInputs > 8" type="text" id="tag9" v-model="tagNames[9]">
        <input v-if="shownInputs > 9" type="text" id="tag10" v-model="tagNames[10]">
        <a v-on:click="shownInputs++">+</a>
      </div>

      <!-- theme checkboxes -->
      <div class="form-group col-md-12">
        <label for="themes">Dream Themes</label><br>

        <span v-for="theme in themes">
          <input type="checkbox" :value="theme.id" v-model="themeIds"> {{ theme.name }}
        </span>
        <br>
<!--         <span>themeIds: {{ themeIds }}</span>
 -->
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

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

<!--     <div v-if="status">
      {{error.response.data.errors}}
    </div> -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tagNames: [],
      newDreamTitle: "",
      newDreamContent: "",
      newDreamImageUrl: "",
      newDreamIsPublic: "",
      shownInputs: 0,
      errors: [],
      themes: [],
      themeIds: []
    };
  },
  created: function() {
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      console.log(this.themes);
    });
  },
  methods: {
    submit: function() {
      var params = {
        tag_names: this.tagNames,
        title: this.newDreamTitle,
        content: this.newDreamContent,
        image_url: this.newDreamImageUrl,
        is_public: this.newDreamIsPublic,
        theme_ids: this.themeIds
      };
      axios.post("/api/dreams", params).then(response => {
        console.log("success", response.data);
        this.$router.push("/dreams/" + response.data.id ); //change this to dreams show page once made
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },
    // addInput: function() {
    //   var tagsDiv = document.getElementById("tag-names"); // finds element by id and 
    //   var newInput = document.createElement("input");
    //   newInput.setAttribute("type", "text");
    //   // typeAttr.value = "text";
    //   var vModelAttr = document.createAttribute("v-model");
    //   vModelAttr.value = this.tagNames[this.tagNames.length];
    //   newInput.setAttributeNode(vModelAttr); // targeting div create input element, create type attr = , attaching
    //   tagsDiv.appendChild(newInput);
    //   //creating a new input element, create attribute on input. 1. text type 2. v-model of a thing
    // }
  }
};
</script>