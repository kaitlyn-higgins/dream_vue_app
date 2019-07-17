<template>
  <div class="tags-show">

    <!-- <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>Dreams with {{ tag.name }} tags</h1>

    <div v-for="dream in tag.associated_dreams">
      <h2 class="title"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h2>
      <h5 class="username"><router-link v-bind:to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link></h5>
      <div class="image_url"><img v-bind:src="dream.image_url" alt=""></div>
      <p class="content">{{ dream.content }}</p>

      <p class="modified">
        <label for="updated_at">Last updated:</label>
        {{ dream.updated_at }}
      </p>

      <div v-for="tag in dream.tags">
        <h4 class="tag_name">
        <ul>
          <li><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></li>
        </ul>
        </h4>
      </div>   
    </div> -->
    


      <div class="ms-site-container">
        
        <div class="material-background"></div>
        <div class="container text-center mb-6">
          <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Dreams with {{ tag.name }} tags</h1>
          <!-- <p class="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Follow our blog and discover the latest content and trends in the market. In addition you will discover the best <span class="colorStar">tricks</span> and <span class="colorStar">discounts</span>.</p> -->
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <article v-for="dream in tag.associated_dreams" class="card card-primary wow zoomInRight animation-delay-5 mb-4">
                <div class="card-body overflow-hidden card-body-big">
                  <div class="row">
                    <div class="col-xl-6">
                      <img v-bind:src="dream.image_url" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-xl-6 mb-4">
                      <h3 class="no-mt"><router-link v-bind:to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h3>

                      <p class="mb-4 tag-name">
                        <span v-for="tag in dream.tags" class="ms-tag ms-tag-light color-primary"><router-link v-bind:to="'/tags/' + tag.id">{{ tag.name }}</router-link></span>
                      </p>

                      <p class="mb-4 theme-name">
                        <span v-for="theme in dream.themes">
                          <a v-if="theme.name === 'Lucid'" class="ms-tag ms-tag-success">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Nightmare'" class="ms-tag ms-tag-dark">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Memory'" cclass="ms-tag ms-tag-primary">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Adventure'" class="ms-tag ms-tag-danger">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Recurring'" class="ms-tag ms-tag-info">{{ theme.name }}</a>

                          <a v-if="theme.name === 'Healing'" class="ms-tag ms-tag-light">{{ theme.name }}</a>

                          <a v-if="theme.name === 'inspiration'" class="ms-tag ms-tag-warning">{{ theme.name }}</a>

                        </span>
                      </p>

                      <!-- <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem in, ipsum. Ducimus culpa rerum in illo, enim quas voluptas, aliquid similique repudiandae amet car voluptatum suscipit..</p>
                      <p>iste deserunt officia tempore laboriosam eos exercitationem excepturi? Porro animi mollitia molestias voluptatem recusandae, cum nulla hic possimus ad illum.</p> -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                       By <router-link v-bind:to="'/users/' + dream.user.id">{{ dream.user.username }}</router-link> in <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">Posted / updated: {{ formattedDate(dream.updated_at) }}</span></span>
                    </div>

                    <div class="col-lg-4 text-right">
                      <router-link v-bind:to="'/dreams/' + dream.id" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></router-link>
                    </div>

                  </div>
                </div>
              </article>

<!--               <article class="card card-primary wow zoomInRight animation-delay-5 mb-4">
                <div class="card-body overflow-hidden card-body-big">
                  <div class="row">
                    <div class="col-xl-6">
                      <img src="assets/img/demo/post5.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-xl-6 mb-4">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem in, ipsum. Ducimus culpa rerum in illo, enim quas voluptas, aliquid similique repudiandae amet car voluptatum suscipit..</p>
                      <p>iste deserunt officia tempore laboriosam eos exercitationem excepturi? Porro animi mollitia molestias voluptatem recusandae, cum nulla hic possimus ad illum.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-warning">Graphics</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">January 27, 2016</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="card card-primary wow zoomInRight animation-delay-5 mb-4">
                <div class="card-body overflow-hidden card-body-big">
                  <div class="row">
                    <div class="col-xl-6">
                      <img src="assets/img/demo/post2.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-xl-6 mb-4">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem in, ipsum. Ducimus culpa rerum in illo, enim quas voluptas, aliquid similique repudiandae amet car voluptatum suscipit..</p>
                      <p>iste deserunt officia tempore laboriosam eos exercitationem excepturi? Porro animi mollitia molestias voluptatem recusandae, cum nulla hic possimus ad illum.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-royal">Productivity</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">Aufust 18, 2015</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="card card-primary wow zoomInRight animation-delay-5 mb-4">
                <div class="card-body overflow-hidden card-body-big">
                  <div class="row">
                    <div class="col-xl-6">
                      <img src="assets/img/demo/post3.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-xl-6 mb-4">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem in, ipsum. Ducimus culpa rerum in illo, enim quas voluptas, aliquid similique repudiandae amet car voluptatum suscipit..</p>
                      <p>iste deserunt officia tempore laboriosam eos exercitationem excepturi? Porro animi mollitia molestias voluptatem recusandae, cum nulla hic possimus ad illum.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-warning">Graphics</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">January 27, 2016</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article>
              <article class="card card-primary wow zoomInRight animation-delay-5 mb-4">
                <div class="card-body overflow-hidden card-body-big">
                  <div class="row">
                    <div class="col-xl-6">
                      <img src="assets/img/demo/post1.jpg" alt="" class="img-fluid mb-4">
                    </div>
                    <div class="col-xl-6 mb-4">
                      <h3 class="no-mt"><a href="javascript:void(0)">Earum delectus libero ipsa temporibus in minus</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudianda beatae magni es repudiandae beatae magni magnam autem natuse inse on voluptates elit sit molestias.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem in, ipsum. Ducimus culpa rerum in illo, enim quas voluptas, aliquid similique repudiandae amet car voluptatum suscipit..</p>
                      <p>iste deserunt officia tempore laboriosam eos exercitationem excepturi? Porro animi mollitia molestias voluptatem recusandae, cum nulla hic possimus ad illum.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8">
                      <img src="assets/img/demo/avatar50.jpg" alt="..." class="rounded-circle mr-1"> by <a href="javascript:void(0)">Victoria</a> in <a href="javascript:void(0)" class="ms-tag ms-tag-success">Multimedia</a>
                      <span class="ml-1 d-none d-sm-inline"><i class="zmdi zmdi-time mr-05 color-info"></i> <span class="color-medium-dark">January 27, 2016</span></span>
                    </div>
                    <div class="col-lg-4 text-right">
                      <a href="javascript:void(0)" class="btn btn-primary btn-raised btn-block animate-icon">Read More <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </article> -->
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)">4</a></li>
                  <li class="page-item">
                    <a class="page-link" href="javascript:void(0)" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
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
      tag: {},
      tags: [],
      associated_dreams: [],
      dreams: [],
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/tags/" + this.$route.params.id).then(response => {
      this.tag = response.data;
      console.log(this.tag);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
    formattedDate: function(date) {
      return moment(date).format('LLLL');
    }
  }
};
</script>