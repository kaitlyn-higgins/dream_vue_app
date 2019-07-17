<template>
  <div class="dreams-show">

    <!-- <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h2>{{ dream.title }}</h2>
    <h5><router-link v-bind:to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link>{{  }}</h5>
    <li v-for="theme in dream.themes">{{ theme.name }}</li>
    <div><img v-bind:src="dream.image_url" alt=""></div>
    <p>{{ dream.content }}</p>

    <div v-for="tag in dream.tags">
      <h4>
      <ul>
        <li><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
      </ul>
      </h4>
    </div> 
    
    <div>
      <button>
       <router-link v-bind:to="'/dreams/' + dream.id + '/edit'">Update Dream</router-link>
     </button>
    </div> -->



      <div class="ms-site-container">
 
        <div class="ms-hero-page mb-6 ms-hero-bg-primary ms-hero-img-coffee">
          <h2 class="text-center no-m pt-4 pb-4 color-white index-1">{{ dream.title }}</h2>

          <div class="lead color-white index-1 text-center">
          <span v-for="tag in dream.tags">
            <router-link v-bind:to="'/tags/' + tag.id" class=" btn btn-warning btn-xlg btn-raised animated flipInX animation-delay-16"> {{ tag.name }}</router-link>
          </span>
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
                  
                    <p v-if="isCurrentUser()" class="text-center"><router-link v-bind:to="'/dreams/' + dream.id + '/edit'" class="btn btn-raised btn-primary">Edit Dream</router-link></p>
                  
                </div>
              </div>
            </div>
          </div>
          <h2 class="right-line mt-6">Related Works</h2>
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
          </div>
        </div> <!-- container -->

        <div class="btn-back-top">
          <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised "><i class="zmdi zmdi-long-arrow-up"></i></a>
        </div>
      </div> <!-- ms-site-container -->




  </div>
</template>


<script>
import axios from "axios";
import moment from 'moment';

export default {
  data: function() {
    return {
      dream: {},
      tags: [],
      user: [],
      errors: [],
      current_user: [],
    };
  },
  created: function() {
    axios.get("/api/dreams/" + this.$route.params.id).then(response => {
      this.dream = response.data;
      console.log(this.dream);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
      // console.log(this.user.dreams.tags);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
    formattedDate: function(date) {
      return moment(date).format('LLLL');
    },
    isCurrentUser: function() {
      console.log(typeof localStorage.getItem("user_id"));
      console.log(typeof this.user.id);
      if (localStorage.getItem("user_id") == this.dream.user.id) {
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    },
  },
};
</script>