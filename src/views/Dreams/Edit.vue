<template>
  <div class="dreams-edit">

    <!-- <h1>Edit a dream</h1>

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
      </div> -->

      <!-- theme checkboxes -->
      <!-- <div class="form-group col-md-12">
        <label for="themes">Dream Themes</label><br>

        <span v-for="theme in themes">
          <input type="checkbox" :value="theme.id" v-model="themeIds"> {{ theme.name }}
        </span>
        <br>
        <span>theme Ids: {{ themeIds }}</span>

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
      
    </form> -->
    
<!--     <div v-if="status">
      {{error.response.data.errors}}
    </div> -->

    <!-- <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul> -->





          <div class="ms-site-container">
     
            <div class="ms-hero-page mb-6 ms-hero-bg-primary ms-hero-img-coffee">
              <h2 class="text-center no-m pt-4 pb-4 color-white index-1">{{ dream.title }}</h2>

              <div class="lead color-white index-1 text-center">
              <span v-for="tag in dream.tags">
                <router-link v-bind:to="'/tags/' + tag.id" class=" btn btn-warning btn-xlg btn-raised animated flipInX animation-delay-16"> {{ tag.name }}</router-link>
              </span>
              <button type="button" data-toggle="modal" data-target="#tagsModal" class="btn btn-raised btn-success btn-block">Edit Tags</button>
            </div>


            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="card">
                    <div id="carousel-example-generic" class="ms-carousel carousel slide" data-ride="carousel">
                      <!-- Indicators -->
                      <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <!-- <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li> -->
                      </ol>

                      <!-- Wrapper for slides -->
                      <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                          <img class="d-block img-fluid" v-bind:src="dream.image_url" alt="">
                          <div class="carousel-caption">
                            <h3>{{dream.title}}</h3>
                            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                          </div>
                        </div>
                        <!-- <div class="carousel-item">
                          <img class="d-block img-fluid" src="assets/img/demo/port2.jpg" alt="...">
                          <div class="carousel-caption">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img class="d-block img-fluid" src="assets/img/demo/port3.jpg" alt="...">
                          <div class="carousel-caption">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div> -->
                      </div>



                      <!-- <span v-for="theme in dream.themes" class="btn btn-royal">{{ theme.name }}</span> -->
                      


                      <!-- Controls -->
                      <!-- <a href="#carousel-example-generic" class="btn-circle btn-circle-xs btn-circle-raised btn-circle-primary left carousel-control-prev" role="button" data-slide="prev"><i class="zmdi zmdi-chevron-left"></i></a>
                      <a href="#carousel-example-generic" class="btn-circle btn-circle-xs btn-circle-raised btn-circle-primary right carousel-control-next" role="button" data-slide="next"><i class="zmdi zmdi-chevron-right"></i></a> -->
                    </div>
                  </div>
                  <div class="card-footer">
                    <h3 v-for="theme in dream.themes" href="#" class="btn btn-royal">{{theme.name}}</h3>
                  </div>
                  <!-- <button type="button" data-toggle="modal" data-target="#themePhotoModal" class="btn btn-raised btn-primary btn-block">Edit Themes & Photo</button> -->
                </div>
      
               
               <!-- <div class="row">
               <div class="col-lg-8">
                <h3 v-for="theme in dream.themes" href="#" class="btn btn-royal">{{theme.name}}</h3>
                </div>
              </div> -->


                <div class="col-lg-4">
                  <div class="card">
                    <div class="ms-hero-bg-primary ms-hero-img-mountain">
                      <h2 class="text-center no-m pt-4 pb-4 color-white index-1">Item Info</h2>
                    </div>
                    <div class="card-body">
                      <h3 class="color-primary no-mt">Dream Details</h3>
                      <ul class="list-unstyled">
                        <li><strong>Dreamer: </strong>  <router-link v-bind:to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link></li>
                        <li><strong>Posted / Updated: </strong> {{ formattedDate(dream.updated_at) }}</li>
    <!--                     <li><strong>Author:</strong> Andrew Ryan</li>
                        <li><strong>Year:</strong> 2014</li> -->
                      </ul>
                      <h3 class="color-primary">Description</h3>
                      <p>{{ dream.content }}</p>
                      
                        <!-- <p class="text-center"><router-link v-bind:to="'/dreams/' + dream.id + '/edit'" class="btn btn-raised btn-primary">Edit Description</router-link></p> -->
                        <button type="button" data-toggle="modal" data-target="#descriptionModal" class="btn btn-raised btn-primary btn-block">Edit Description</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            <!--   <h2 class="right-line mt-6">Related Works</h2>
              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <a href="javascript:void(0)">
                      <img src="assets/img/demo/port4.jpg" alt="..." class="img-fluid">
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <a href="javascript:void(0)">
                      <img src="assets/img/demo/port7.jpg" alt="..." class="img-fluid">
                    </a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <a href="javascript:void(0)">
                      <img src="assets/img/demo/port9.jpg" alt="..." class="img-fluid">
                    </a>
                  </div>
                </div>
              </div> -->
            </div> <!-- container -->

            <div class="btn-back-top">
              <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
            </div>
          </div> <!-- ms-site-container -->



<!-- button for modal  -->
         <!--  <button type="button" data-toggle="modal" data-target="#descriptionModal" class="btn btn-raised btn-primary btn-block">Delete Account</button> -->



<!-- Description & Title Modal-->
          <div class="modal modal-warning" id="descriptionModal" tabindex="-1" role="dialog" aria-labelledby="descriptionModalLabel">
              <div class="modal-dialog animated zoomIn animated-3x" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h3 class="modal-title color-primary" id="myModalLabel">Modify Dream Description</h3>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                      </div>
                      <div class="modal-body">
                          
                        <form v-on:submit.prevent="submit()">
                          <fieldset>
                            <div class="form-group has-success">
                              <label for="dreamTitle">Title</label>
                              <input type="text" id="dreamTitle" class="form-control" placeholder="Talented Dinosaur" v-model="dream.title">
                            </div>
                            <div class="form-group has-success">
                              <label for="dreamContent">Content</label>
                              <input type="textarea" id="dreamContent" class="form-control" v-model="dream.content">
                            </div>

                            <button type="submit" class="btn  btn-primary">Save Dream</button>
                          </fieldset>
                        </form>

                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Return to Edit Page</button>
                          <!-- <button type="button" class="btn  btn-primary">Save changes</button> -->
                      </div>
                  </div>
              </div>
          </div>



<!-- tags modal -->
          <div class="modal modal-warning" id="tagsModal" tabindex="-1" role="dialog" aria-labelledby="descriptionModalLabel">
              <div class="modal-dialog animated zoomIn animated-3x" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h3 class="modal-title color-primary" id="myModalLabel">Modify Strands</h3>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                      </div>
                      <div class="modal-body">
                          
                        <form v-on:submit.prevent="submit()">
                          <fieldset>
                            <div class="form-group has-success">
                              <label for="dreamTags">Strands</label>
                              <div v-for="tag in dream.tags">
                                <input type="text" class="form-control" v-model="tag.name">
                              </div>
                             
                            </div>
                                {{dream.tags}}
                                {{dream.tags.length}}
                            <button type="submit" class="btn  btn-primary" v-on:click="tagsChanged = true">Save Dream</button>
                          </fieldset>
                        </form>
                        {{tagsChanged}}
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Return to Edit Page</button>
                          <!-- <button type="button" class="btn  btn-primary">Save changes</button> -->
                      </div>
                  </div>
              </div>
          </div>


<!-- photo & themes modal -->
          <div class="modal modal-warning" id="themePhotoModal" tabindex="-1" role="dialog" aria-labelledby="descriptionModalLabel">
              <div class="modal-dialog animated zoomIn animated-3x" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h3 class="modal-title color-primary" id="myModalLabel">Modify Strands</h3>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="zmdi zmdi-close"></i></span></button>
                      </div>
                      <div class="modal-body">
                          
                        <form v-on:submit.prevent="submit()">
                          <fieldset>
                            <div class="form-group has-success">
                              <label for="themes">Dream Themes</label>
                              <div v-for="theme in themes">
                                
                                <input type="checkbox" class="form-control" v-model="theme.id"> {{theme.name}}
                              
                                
                              </div>
                             
                            </div>
                                {{dream.themes}}
                                {{dream.theme}}
                               <!--  {{theme.name}}
                                {{theme.id}} -->
                            <button type="submit" class="btn  btn-primary" v-on:click="themesChanged = true">Save Dream</button>
                          </fieldset>
                        </form>
                        {{tagsChanged}}
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Return to Edit Page</button>
                          <!-- <button type="button" class="btn  btn-primary">Save changes</button> -->
                      </div>
                  </div>
              </div>
          </div>


<!--           <div class="form-group col-md-12">
            <label for="themes">Dream Themes</label><br>

            <span v-for="theme in themes">
              <input type="checkbox" :value="theme.id" v-model="themeIds"> {{ theme.name }}
            </span>
            <br>
            <span>theme Ids: {{ themeIds }}</span>

          </div>


          <div>
            <label for="dreamImageUrl">Image Url</label>
            <input type="text" id="dreamImageUrl" placeholder="https://i.ytimg.com/vi/1vMBqDt0s0I/hqdefault.jpg" v-model="dream.image_url">
          </div>
 -->


  </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';


export default {
  data: function() {
    return {
      dream: {},
      errors: [],
      status: "", 
      shownInputs: 0,
      themes: [],
      themeIds: [],
      tagsChanged: false,
      themesChanged: false,
      theme: {}
      // dreamThemeIds: [this.themes]
    };
  },
  created: function() {
    axios.get("/api/dreams/" + this.$route.params.id).then(response => {
      this.dream = response.data;
      this.dream.themes = response.data.themes;
      // console.log(this.dream);
      // console.log(this.dream.themes);
      this.themeIds = this.dream.themes.map(theme => theme.id);
      // console.log(this.themeIds);

    });
    axios.get("/api/themes").then(response => {
      this.themes = response.data;
      // console.log(this.themes);
    });

  },
  methods: {
    submit: function() {
      var params = {
        // tag_names: this.dream.tag_names,
        title: this.dream.title,
        content: this.dream.content,
        image_url: this.dream.image_url,
        is_public: this.dream.is_public,
        // theme_ids: this.themeIds
      };

      console.log(this.tagsChanged);
      if (this.tagsChanged) {
        var tagNames = this.dream.tags.map(tag => tag.name);
        params.tag_names = tagNames;
      }

      if (this.themesChanged) {
        var dreamThemeIds = this.dream.themes.map(theme => theme.id);
        console.log(this.dream.themes);
        params.theme_ids = dreamThemeIds;
      }

      axios.patch("/api/dreams/" + this.dream.id, params).then(response => {
        console.log("success", response.data);
        $("#tagsModal").modal("hide");
        $("#descriptionModal").modal("hide");
        $("#themePhotoModal").modal("hide");
        this.$router.push("/dreams/" + response.data.id ); //change this to dreams show page once made
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
        // this.status = error.response.status;
      });
    },
    formattedDate: function(date) {
      return moment(date).format('LLLL');
    },
  }
};
</script>