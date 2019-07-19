<template>
  <div class="dreams-index">

    <!-- search bar  -->
        <!-- <div class="ms-hero-page-override ms-hero-img-city ms-hero-bg-royal">
          <div class="container">
            <div class="text-center">
              <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Collective Dream Web</span></h1>
              <form class="mw-500 center-block animated fadeInUp">
                <input type="text" placeholder="Search for dreams" v-model="dreamFilter" class="form-control color-white">
                <button type="button" class="btn btn-raised btn-primary btn-block"><i class="zmdi zmdi-search"></i> Search</button>
              </form>
              <label for="dream-filter">Find dreams by theme</label>
              <span v-for="theme in themes">
                <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
              </span>
            </div>
          </div>
        </div>


        <div class="container"> -->
    <!-- masonry cards -->
          <!-- <div class="row">
            <div class="col">
              <div class="row masonry-container">


                <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)" class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
                  <div class="card">
                    <figure class="ms-thumbnail ms-thumbnail-horizontal">
                      <img v-bind:src="dream.image_url" alt="" class="img-fluid">
                      <figcaption class="ms-thumbnail-caption text-center">
                        <div class="ms-thumbnail-caption-content">
                          <h4 class="ms-thumbnail-caption-title mb-2">{{dream.title}}</h4>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                        </div>
                      </figcaption>
                    </figure>
                    <div class="card-body overflow-hidden text-center">
                      <ul class="row">
                        <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                          <span v-for="theme in dream.themes">
                            <a v-if="theme.name === 'Lucid'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-success wow zoomInDown mix"><i class="zmdi zmdi-eye"></i></a>

                            <a v-if="theme.name === 'Nightmare'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-dark wow zoomInDown mix"><i class="zmdi zmdi-flash"></i></a>

                            <a v-if="theme.name === 'Memory'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-primary wow zoomInDown mix"><i class="zmdi zmdi-flare"></i></a>

                            <a v-if="theme.name === 'Adventure'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger wow zoomInDown mix"><i class="zmdi zmdi-landscape"></i></a>

                            <a v-if="theme.name === 'Recurring'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-info wow zoomInDown mix"><i class="zmdi zmdi-repeat"></i></a>

                            <a v-if="theme.name === 'Healing'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-light wow zoomInDown mix"><i class="zmdi zmdi-flower-alt"></i></a>

                            <a v-if="theme.name === 'inspiration'" href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-warning wow zoomInDown mix"><i class="zmdi zmdi-brush"></i></a>
                          </span>
                        </div>
                      </ul>

                      <h4 class="color-royal"><router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link></h4>
                      <div v-for="tag in dream.tags">
                        <p class="tag_name">
                        <ul>
                          <li><p><router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link></p></li>
                        </ul>
                        </p>
                      </div>
                      <router-link :to="'/users/' + dream.user.id" class="btn btn-royal"><i class="zmdi zmdi-star"></i>{{dream.user.username}}</router-link>
                      <router-link :to="'/dreams/' + dream.id" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i> See Dream Content</router-link>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div> -->




    <div class="ms-site-containerbg-full-page bg-primary-dark"> 
<!-- top bar -->

      <div class="ms-hero-page ms-hero-img-keyboard ms-hero-bg-primary mb-6">
        <div class="container">
          <div class="text-center">
            <!-- <span class="ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5">I</span> -->
            <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Collective Dream Web</h1>

<!-- filter / search -->

            <form class="mw-500 center-block animated fadeInUp">
              <input type="text" placeholder="Search for dreams" v-model="dreamFilter" class="form-control color-white">
              <button type="button" class="btn btn-raised btn-primary btn-block"><i class="zmdi zmdi-search"></i> Search</button>
            </form>
            <label for="dream-filter">Find dreams by theme</label>
            <span v-for="theme in themes">
              <input type="radio" id="theme.name" :value="theme.name" v-model="dreamFilter"> {{ theme.name }}
            </span>


            <!-- <p class="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Collective <span class="colorStar">Dream</span> Web <span class="colorStar"></span>.</p> -->
          </div>
        </div>
      </div>

<!-- cards -->

      <div class="container">
        <div class="row masonry-container">


          <div v-for="dream in orderBy(filterBy(dreams, dreamFilter, 'title', 'content', 'tags', 'themes'),sortAttribute, sortAscending)" class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-info mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img v-bind:src="dream.image_url" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">{{dream.title}}</h3>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                    <div class="mt-2">

             <!--          <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a> -->
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><router-link :to="'/dreams/' + dream.id">{{dream.title}}</router-link></h2>

                <p class="mb-4 theme-name">
                  <span v-for="theme in filterBy(dream.themes, themeFilter, 'name')">
                    <a v-if="theme.name === 'Lucid'" class="btn btn-raised btn-success">{{ theme.name }}</a>

                    <a v-if="theme.name === 'Nightmare'" class="btn btn-raised btn-default">{{ theme.name }}</a>

                    <a v-if="theme.name === 'Memory'" class="btn btn-raised btn-primary">{{ theme.name }}</a>

                    <a v-if="theme.name === 'Adventure'" class="btn btn-raised btn-danger">{{ theme.name }}</a>

                    <a v-if="theme.name === 'Recurring'" class="btn btn-raised btn-info">{{ theme.name }}</a>

                    <a v-if="theme.name === 'Healing'" class="btn btn-raised btn-white">{{ theme.name }}</a>

                    <a v-if="theme.name === 'inspiration'" class="btn btn-raised btn-warning">{{ theme.name }}</a>

                  </span>
                </p>
                <div  class="text-center center-block mw-200">
                  <span v-for="tag in dream.tags" class="ms-tag ms-tag-light color-primary">
                  <router-link :to="'/tags/' + tag.id">{{ tag.name }}</router-link>
                  </span>
                </div>

      <!--           <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> -->
                <div>
                  <div class="card-body overflow-hidden text-center">
                    <div class="mt-05">
                      <router-link :to="'/users/' + dream.user.id" class="btn btn-royal"><i class="zmdi zmdi-star"></i>{{dream.user.username}}</router-link>
                      <router-link :to="'/dreams/' + dream.id" class="btn btn-royal btn-raised"><i class="zmdi zmdi-globe"></i>See Dream Content</router-link>
                    </div>
                  </div>
                 
                </div>
              </div>
            </article>
          </div>







<!--           <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-royal mb-4 wow materialUp animation-delay-5">
              <div class="js-player" data-plyr-provider="vimeo" data-plyr-embed-id="94747106"></div>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-royal">Resources</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-success mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/p3.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-success">Multimedia</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card mb-4 wow materialUp animation-delay-5">
              <div class="js-player" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-danger mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/post5.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-danger">Productivity</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-info mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/post4.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-info mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/post2.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-info mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/p2.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-danger mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/post3.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-danger">Productivity</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-royal mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/p5.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-royal">Resources</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-success mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/p4.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-success">Multimedia</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="col-lg-4 col-md-6 masonry-item wow fadeInUp animation-delay-2">
            <article class="card card-info mb-4 wow materialUp animation-delay-5">
              <figure class="ms-thumbnail ms-thumbnail-left">
                <img src="assets/img/demo/post1.jpg" alt="" class="img-fluid">
                <figcaption class="ms-thumbnail-caption text-center">
                  <div class="ms-thumbnail-caption-content">
                    <h3 class="ms-thumbnail-caption-title">Lorem ipsum dolor sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="mt-2">
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm mr-1 btn-circle-white color-danger"><i class="zmdi zmdi-favorite"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 mr-1 btn-circle-white color-warning"><i class="zmdi zmdi-star"></i></a>
                      <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-sm ml-1 btn-circle-white color-success"><i class="zmdi zmdi-share"></i></a>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="card-body">
                <h2><a href=javascript:void(0)>Lorem ipsum Minim in nulla labore sint</a></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error nesciunt voluptas sit voluptatem accusantium doloremque laudantium eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="row">
                  <div class="col-lg-6 col-md-4">
                    <div class="mt-05">
                      <a href="javascript:void(0)" class="ms-tag ms-tag-info">Design</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8">
                    <a href="javascript:void(0)" class="btn btn-primary btn-sm btn-block animate-icon">Read more <i class="ml-1 no-mr zmdi zmdi-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </article>
          </div> -->
        </div>
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
      themeFilter: "",
      themes: [],
      sortAttribute: "",
      sortAscending: 1
    };
  },
  created: function() {
    axios.get("/api/dreams").then(response => {
      this.dreams = response.data;
      console.log(this.dreams);
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