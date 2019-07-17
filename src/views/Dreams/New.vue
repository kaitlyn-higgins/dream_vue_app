<template>
  <div class="dreams-new">

    <!-- <h1>Enter a new dream</h1>
    
    {{tagNames}}


    <form v-on:submit.prevent="submit()">

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

      
      <div class="form-group col-md-12">
        <label for="themes">Dream Themes</label><br>

        <span v-for="theme in themes">
          <input type="checkbox" :value="theme.id" v-model="themeIds"> {{ theme.name }}
        </span>
        <br>
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
    </ul> -->






    <div class="ms-hero wrap bg-info">
      <div class="container">
        <div class="text-center color-white mw-800 center-block mb-4">
          <h2 class=" mb-2 wow fadeInDown animation-delay-4">Enter your dream</h2>
          <!-- <p class="lead wow fadeInDown animation-delay-5"> Lorem ipsum dolor sit amet, <span class="">consectetur adipisicing</span> elit. Dolor alias provident excepturi eligendi, nam numquam iusto eum illum, ea quisquam.</p> -->
        </div>
        <div class="row color-dark">

          <div class="col-xl-4 col-lg-6 col-sm-6 center-block">
            <form v-on:submit.prevent="submit()">
            <div class="card card-royal wow fadeInLeft animation-delay-3">
              <div class="text-center card-body">
                <span class="ms-icon ms-icon-circle ms-icon-xxlg color-royal"><i class="zmdi zmdi-cloud-outline"></i></span>
                <h4 class="color-royal">Strands</h4>


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




                <!-- <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                <!-- <a v-on:click="shownInputs++">+</a> -->
                <a v-on:click="shownInputs++" class="btn btn-royal btn-raised">+</a>
              </div>
            </div>
          </form>
          </div>
          <div class="col-xl-4 col-lg-6 col-sm-6 center-block">
            <div class="card card-warning wow fadeInRight animation-delay-3">
              <div class="text-center card-body">
                <span class="ms-icon ms-icon-circle ms-icon-xxlg color-warning"><i class="zmdi zmdi-cloud-outline"></i></span>
                <h4 class="color-warning">Title</h4>
                <p class="lead lead-lg color-warning text-center center-block mt-6 mw-800 text-uppercase fw-300 mb-2">{{newDreamTitle}}</p>
                <input type="text" id="dreamTitle" v-model="newDreamTitle">

                <!-- <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="javascript:void(0)" class="btn btn-warning btn-raised">Action here</a> -->
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-6 col-sm-6 center-block">
            <div class="card card-info wow fadeInRight animation-delay-3">
              <div class="text-center card-body">
                <span class="ms-icon ms-icon-circle ms-icon-xxlg color-info"><i class="zmdi zmdi-cloud-outline"></i></span>
                <h4 class="color-info">Themes</h4>

                <span v-for="theme in themes">
                  <input type="checkbox" :value="theme.id" v-model="themeIds"> {{ theme.name }}
                </span>

                <!-- <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="javascript:void(0)" class="btn btn-info btn-raised">Action here</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="text-center wow fadeInUp animation-delay-7 mt-2">
          <p class="lead lead-lg color-white text-center center-block mt-6 mw-800 text-uppercase fw-300 mb-2">Do tell.</p><br>
          <!-- <a href="javascript:void(0)" class="btn btn-white btn-xlg btn-raised color-info"><i class="zmdi zmdi-email"></i> Contact Us</a> -->
        </div>
      </div> <!-- container -->
    </div>




    <div class="container">
      <div class="card card-hero animated fadeInUp animation-delay-7">
        <div class="card-body">
          <form v-on:submit.prevent="submit()" class="form-horizontal">
            <fieldset class="container">

              <div class="form-group row">
                <label for="textArea" class="col-lg-2 control-label">Contents</label>
                <div class="col-lg-9">
                  <textarea class="form-control" rows="3" id="textArea" placeholder="Details, please!" v-model="newDreamContent"></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail" autocomplete="false" class="col-lg-2 control-label">Image Url</label>
                <div class="col-lg-9">
                  <input type="text" class="form-control" id="inputSubject" placeholder="http://..." v-model="newDreamImageUrl">
                </div>
              </div>

              <div class="form-group row justify-content-end row">
                <div class="col-lg-10">

 
                  <label for="dreamIsPublic">
                      <input type="checkbox" id="dreamIsPublic" v-model="newDreamIsPublic"> Make Dream Public
                  </label>

                  <button type="submit" class="btn btn-raised btn-primary">Submit Dream</button>
              

              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>

                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>



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