<template>
  <main class="site_main">
    <div class="container">
      <section class="foodie_journal">
        <div
          class="title_journal d-flex justify-content-center align-items-center"
        >
          <div><hr /></div>
          <h4 class="m-4">FOODIE JOURNAL</h4>
          <div><hr /></div>
        </div>
        <div class="row row-cols-3 text-center p-4">
          <div
            class="col"
            v-for="(journal, index) in journal_contents"
            :key="index"
          >
            <div class="content text-center position-relative">
              <a href="#">
                <img :src="journal.image" alt="" />
                <div
                  class="
                    hidden
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                >
                  <div class="chain p-2">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </div>
                  <a href="#" class="d-flex justify-content-center text-white">
                    <div class="title_hidden_journal">
                      {{ journal.title }}
                    </div>
                  </a>
                </div>
              </a>
            </div>

            <a href="#">
              <h5 class="subtitle mt-3">
                {{ journal.title }}
              </h5>
            </a>
            <div class="main_date">{{ journal.date }}</div>
          </div>
        </div>
        <!-- /.row -->
      </section>
      <!-- /.foodie_journal -->

      <section class="popular_recipes">
        <h5 class="text-center title_popular_recipes mt_5">POPULAR RECIPES</h5>
        <div
          class="
            subtitle_popular_recipes
            d-flex
            justify-content-center
            text-center
            mb_4
          "
        >
          <p class="w-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            laboriosam, eaque reiciendis qui quo repudiandae ipsam
          </p>
        </div>
        <div class="row roe-cols-2">
          <div class="col">
            <div class="card" style="width: 36rem">
              <div class="content text-center position-relative">
                <a href="#">
                  <img
                    src="@/assets/img/Yogurt-Nan-800x527.jpg"
                    class="card-img-top"
                    alt=""
                  />
                  <div
                    class="
                      hidden
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div class="chain p-2">
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </div>
                    <a href="#" class="d-flex justify-content-center">
                      <div class="title_hidden">
                        Lunch Favourite with Salad, Naan and Beans
                      </div>
                    </a>
                  </div>
                </a>
              </div>
              <div class="card-body p-4">
                <a href="#">
                  <h4 class="card-title">
                    Lunch Favourite with Salad, Naan and Beans
                  </h4>
                </a>
                <div class="card_subtitle">
                  Bakery, Featured, Healthly, Latest Recipes, Staff Picks
                </div>
                <hr />
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  veniam laboriosam ullam esse nihil aliquam voluptatem maiores
                  commodi dignissimos nisi harum quibusdam officiis, iure
                  dolorum accusamus iusto impedit vitae tempore. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Numquam quos rem
                  esse aut sequi atque aliquid ex, nihil ab illo ducimus quis,
                  expedita eligendi.
                </p>
                <a href="#" class="btn_food py-2 px-3">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div class="col img_popular_recipes_sx">
            <div
              v-for="(image, index) in popular_recipes_images_sx"
              :key="index"
              class="content text-center position-relative"
            >
              <a href="#">
                <img :src="image.image" alt="" />
                <div
                  class="
                    hidden
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                >
                  <div class="chain p-2">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </div>
                  <div class="title_hidden">
                    {{ image.title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /.img_popular_recipes_sx -->

          <div class="col img_popular_recipes_dx">
            <div
              v-for="(image, index) in popular_recipes_images_dx"
              :key="index"
              class="content text-center position-relative"
            >
              <a href="#">
                <img :src="image.image" alt="" />
                <div
                  class="
                    hidden
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                  "
                >
                  <div class="chain p-2">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </div>
                  <div class="title_hidden">
                    {{ image.title }}
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /.img_popular_recipes_dx -->
        </div>
        <!-- /.row -->
      </section>
      <!-- /.popular_recipes -->

      <section class="culinary_collection">
        <h5 class="text-center title_culinary_collection mt_5">
          CULINARY COLLECTION
        </h5>
        <div
          class="
            subtitle_culinary_collection
            d-flex
            justify-content-center
            text-center
            mb_4
          "
        >
          <p class="w-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            laboriosam, eaque reiciendis qui quo repudiandae ipsam
          </p>
        </div>
        <div class="row row-cols-4 text-center g-4">
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/drinks-recipes.png" alt="drinks" />
              <a href="#">
                <div class="title_img_culinary_collection">DRINKS</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/soups-recipes.png" alt="soups" />
              <a href="#">
                <div class="title_img_culinary_collection">SOUPS</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/baking-recipes.png" alt="bakery" />
              <a href="#">
                <div class="title_img_culinary_collection">BAKERY</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/dinner-recipes.png" alt="dinner" />
              <a href="#">
                <div class="title_img_culinary_collection">DINNER</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/healthy-recipes.png" alt="healthy" />
              <a href="#">
                <div class="title_img_culinary_collection">HEALTHY</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/staff-picks.png" alt="staff picks" />
              <a href="#">
                <div class="title_img_culinary_collection">STAFF PICKS</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/premium-recipes.png" alt="appetisers" />
              <a href="#">
                <div class="title_img_culinary_collection">APPETISERS</div>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="img_culinary_collection">
              <img src="@/assets/img/quick-easy-recipes.png" alt="quick easy" />
              <a href="#">
                <div class="title_img_culinary_collection">QUICK & EASY</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- /.culinary_collection -->

      <section class="farm_to_table">
        <div class="title_farm_to_table mt_5 d-flex justify-content-between">
          <h5>FARM TO TABLE</h5>
          <button class="btn_food px-3 py-2">
            READ OUR BLOG <font-awesome-icon icon="fa-solid fa-book-open" />
          </button>
        </div>
        <p class="subtitle_farm_to_table mb_4 w-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          laboriosam, eaque reiciendis qui quo repudiandae ipsam
        </p>

        <div class="row">
          <div class="col-8">
            <div class="card card_max" style="width: 100%">
              <div class="content position-relative text-center">
                <a href="#">
                  <img
                    src="@/assets/img/single-post-img3-1200x790.jpg"
                    class="card-img-top"
                    alt="food corner"
                  />
                  <div
                    class="
                      hidden
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div class="chain p-2">
                      <font-awesome-icon icon="fa-solid fa-link" />
                    </div>
                    <a
                      href="#"
                      class="d-flex justify-content-center text-white"
                    >
                      <div class="title_hidden">
                        Food Corner: Top Japanase Restaurants for Sushi
                      </div>
                    </a>
                  </div>
                </a>
              </div>
              <div class="card-body p-4">
                <a href="#">
                  <h5 class="card-title">
                    Food Corner: Top Japanase Restaurants for Sushi
                  </h5>
                </a>
                <div class="main_date">By admin | March 25th, 2019</div>
                <hr />
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus impedit sapiente saepe eveniet, veritatis
                  voluptatum. Recusandae at, ab, soluta officia praesentium ea
                  modi corporis expedita voluptatum voluptatibus neque a totam.
                </p>
                <div class="read d-flex justify-content-between my-4">
                  <span class="more">Read More > </span>
                  <span class="comment"
                    ><font-awesome-icon icon="fa-regular fa-comment" /> o</span
                  >
                </div>
              </div>
            </div>
            <!-- /.card -->

            <div class="row">
              <div
                class="col-6"
                v-for="(card, i) in farm_to_table_cards"
                :key="i"
              >
                <div class="card">
                  <div class="content position-relative text-center">
                    <a href="#">
                      <img :src="card.img" class="card-img-top" alt="" />
                    </a>
                    <div
                      class="
                        hidden
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <div class="chain p-2">
                        <font-awesome-icon icon="fa-solid fa-link" />
                      </div>
                      <div class="title_hidden">
                        {{ card.title }}
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ card.title }}
                    </h5>
                    <div class="main_date">{{ card.date }}</div>
                  </div>

                  <!-- /.card -->
                </div>
              </div>
              <!-- /.col-6 -->

              <div class="load">
                <div>LOAD MORE POSTS</div>
              </div>
              <!-- /.load -->
            </div>
            <!-- /.row -->
          </div>
          <div class="col-4">
            <div
              class="
                view_recipers
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="text_view_recipers w-25 text-center">
                VIEW OUR LATEST RECIPES
              </div>
            </div>

            <div class="guide_singapore position-relative">
              <img
                src="@/assets/img/singapore-featured-image-800x527.jpg"
                alt="singapore"
              />
              <div class="city_guide">City Guide: Singapore</div>
              <button class="btn_food rounded-0 view_singapore">
                <font-awesome-icon icon="fa-solid fa-earth-asia" /> VIEW ALL
                CITY GUIDES
              </button>
              <hr class="my_2" />
            </div>
            <!-- /.guide_singapore -->
            <div class="main_search px-3">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              <input class="py-3 ps-2" type="search" placeholder="Search" />
            </div>
            <!-- /.main_search -->

            <div class="follows_us">
              <h6 class="title_follow">Follow Us</h6>
              <div class="icons_follow d-flex">
                <div class="icon_follow">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </div>

                <div class="icon_follow">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </div>

                <div class="icon_follow">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </div>

                <div class="icon_follow">
                  <font-awesome-icon icon="fa-brands fa-youtube" />
                </div>

                <div class="icon_follow">
                  <font-awesome-icon icon="fa-brands fa-pinterest-p" />
                </div>
              </div>
              <!-- /.icons_follow -->
            </div>
            <!-- /.follow_us -->
            <div class="popular_recent d-flex">
              <a href="#">
                <div class="popular">Popular</div>
              </a>
              <a href="#">
                <div class="recent">Recent</div>
              </a>
            </div>
            <!-- /.popular_recent -->

            <div class="img_circle">
              <div class="circle">
                <a href="#">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/single-post-img3-66x66.jpg"
                    alt="food"
                  />
                </a>
                <div class="text_circle">
                  <div class="title_circle">
                    Food Corner: Top Japanese Restaurant for Sushi
                  </div>
                  <div class="date_circle">March 25th, 2019</div>
                </div>
              </div>
              <div class="circle">
                <a href="#">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/singapore-featured-image-66x66.jpg"
                    alt="city"
                  />
                </a>
                <div class="text_circle">
                  <div class="title_circle">City Guide: Singapore</div>
                  <div class="date_circle">February 27th, 2019</div>
                </div>
              </div>
              <div class="circle">
                <a href="#">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/slide1-bg-66x66.jpg"
                    alt="nutritional"
                  />
                </a>
                <div class="text_circle">
                  <div class="title_circle">
                    6 Nutritional Tips ti Help Burn Body Fat
                  </div>
                  <div class="date_circle">February 27th, 2019</div>
                </div>
              </div>
            </div>
            <!-- /.img_circle -->

            <div class="tweets">
              <div class="card" style="width: 100%">
                <div class="card-body p-4">
                  <h5 class="card-title">
                    Tweets
                    <a class="tweets_link" href="#">by @Theme_Fusion</a
                    ><img
                      src="@/assets/img/image.svg"
                      alt="information"
                      width="15"
                      class="float-end"
                    />
                  </h5>
                  <div class="card_logo d-flex">
                    <img
                      width="25"
                      height="25"
                      src="@/assets/img/logo_tweets.png"
                      alt="logo"
                    />
                    <div class="text_card_logo ms-3">
                      <div class="title_card_logo">
                        Theme Fusion
                        <img
                          class="float-end"
                          width="20"
                          src="@/assets/img/image_1.svg"
                          alt="twitter_logo"
                        />
                      </div>
                      <div class="contact">@Theme_Fusion</div>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui inventore vitae repellat dolor magnam sequi porro
                        molestias? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Laborum error corporis ullam
                        perspiciatis voluptates iure velit recusandae porro
                        <a href="#">#avada</a> perferendis, aut officia quam,
                        <a href="#"
                          >accusantium hic quasi, eos ad expedita vel qui</a
                        >
                      </p>

                      <img
                        src="@/assets/img/tweets_img.jpeg"
                        class="card-img-top"
                        alt="price"
                      />
                      <div class="card_icons mt-2">
                        <img
                          width="18"
                          src="@/assets/img/image_2.svg"
                          alt="heart"
                        />
                        <img
                          width="18"
                          class="ms-4"
                          src="@/assets/img/image_3.svg"
                          alt="arrow_right"
                        />
                        <div class="text_icon float-end">
                          21 <span class="text-decoration-underline">h</span>
                        </div>
                      </div>
                      <!-- /.card_icons -->
                    </div>
                    <!-- /.text_card_logo -->
                  </div>
                  <!-- /.card_logo -->
                </div>
              </div>
              <!-- /.card -->
            </div>
            <!-- /.tweets -->
          </div>
          <!-- /.col-4 -->
        </div>
        <!-- /.row -->
      </section>
      <!-- /.farm_to_table -->
    </div>
    <!-- /.container -->

    <section class="subscribe">
      <div class="text_subscribe d-flex flex-column align-items-center">
        <h5 class="title_subscribe">
          Subscribe
          <span>&</span>
          Receive A Free eBook
        </h5>
        <p class="subtitle_subscribe">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          architecto quaerat laudantium suscipit eum tenetur aliquam
          praesentium. Enim, non quis.
        </p>
      </div>
      <!-- /.text_subscribe -->

      <div class="email_subscribe">
        <input type="email" placeholder="Insert your email...*" />
        <button class="btn_food ms-3">SUBSCRIBE</button>
      </div>
      <!-- /.email_subscribe -->

      <div class="cras text-center">
        Cras porttitor pellentesque sem eu pretium.
      </div>

      <div class="row row-cols-4 g-0">
        <div
          class="col"
          v-for="(image, index) in subscribe_images"
          :key="index"
        >
          <div class="content text-center position-relative">
            <a href="#">
              <img :src="image.img" alt="" />
              <div
                class="
                  hidden
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <div class="chain p-2">
                  <font-awesome-icon icon="fa-solid fa-link" />
                </div>
                <div class="title_hidden">
                  {{ image.title }}
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.subscribe -->
  </main>
  <!-- /.site_main -->
</template>

<script>
export default {
  name: "SiteMain",

  props: {
    journal_contents: Array,
    popular_recipes_images_sx: Array,
    popular_recipes_images_dx: Array,
    farm_to_table_cards: Array,
    subscribe_images: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  .card-title {
    &:hover {
      color: $cube_orange;
    }
  }

  img {
    max-width: 100%;
  }

  .main_date {
    font-size: 0.8rem;
    color: $cube_nevada;
  }

  .foodie_journal {
    background-color: white;
    box-shadow: 0 0 5px $cube_silver_chalice;
    position: relative;
    bottom: 80px;
    .content {
      &:hover .hidden {
        visibility: visible;
      }
      .hidden {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(
          rgba(252, 37, 37, 0.826),
          rgba(252, 117, 37, 1)
        );
        visibility: hidden;
        color: white;
        .chain {
          background-color: white;
          border-radius: 50%;
          color: rgba(252, 117, 37, 1);
        }
        .title_hidden_journal {
          width: 70%;
          margin-top: 1rem;
          font-size: 1.2rem;
        }
      }
    }
    .title_journal {
      hr {
        width: 400px;
        height: 1px;
      }
    }
    .subtitle {
      &:hover {
        color: $cube_orange;
      }
    }
  }

  .popular_recipes {
    .card_subtitle,
    .card-text {
      color: $cube_nevada;
    }

    .card {
      background-color: $cube_spring_wood;
      .content {
        &:hover .title_hidden {
          color: white;
          text-align: center;
          font-size: 1.2rem !important;
        }
      }
    }

    .card-text {
      line-height: 2;
    }

    .img_popular_recipes_sx,
    .img_popular_recipes_dx {
      .content {
        margin-bottom: 2rem;
      }
    }

    .subtitle_popular_recipes {
      color: $cube_nevada;
    }
  }

  .culinary_collection {
    .subtitle_culinary_collection {
      color: $cube_nevada;
    }

    .img_culinary_collection {
      background-color: white;
      box-shadow: 0 0 5px $cube_silver_chalice;
      padding-top: 1.5rem;
      img {
        max-width: 30%;
      }
    }

    .title_img_culinary_collection {
      padding-top: 1rem;
      padding-bottom: 0.5rem;
      &:hover {
        background-color: $cube_orange;
        color: white;
      }
    }
  }

  .farm_to_table {
    .title_hidden {
      width: 70%;
      margin-top: 1rem;
      font-size: 1.2rem !important;
    }

    .subtitle_farm_to_table,
    .card-text,
    .read {
      color: $cube_nevada;
    }

    .view_recipers {
      background-image: url("@/assets/img/pizza-burger.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 400px;
      margin-bottom: 2rem;
    }

    .text_view_recipers {
      margin-top: 4rem;
    }

    .view_singapore {
      width: 100%;
      border: none;
      background-color: $cube_orange;
      color: $cube_spring_wood;
      padding: 0.7rem;
    }

    .city_guide {
      background-color: rgba(0, 0, 0, 0.678);
      padding: 0.7rem;
      color: $cube_spring_wood;
      position: absolute;
      left: 0;
      bottom: 30%;
      font-size: 1.2rem;
    }

    .main_search {
      color: $median_cape_cod;
      background-color: $cube_spring_wood;
      input {
        border: none;
        background-color: $cube_spring_wood;
        width: 80%;
        &:focus-visible {
          outline: none;
        }
      }
    }

    .card_max {
      margin-bottom: 2rem;
      .more,
      .comment {
        &:hover {
          color: $cube_orange;
        }
      }
    }

    .col-6 {
      margin-bottom: 2rem;
      .card-body {
        padding: 2rem;
      }
    }

    .title_follow {
      color: $cube_orange;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .icon_follow {
      background-color: rgba(211, 211, 211, 0.493);
      border-radius: 0.3rem;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.7rem;
    }

    .popular_recent {
      margin-top: 3rem;
    }

    .popular,
    .recent {
      color: $median_cape_cod;
      padding: 0.5rem 3rem;
      border: 1px solid #d3d3d385;
    }

    .popular {
      background-color: white;
    }

    .circle {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      .text_circle {
        line-height: 2;
        margin-left: 1rem;
        .title_circle {
          font-size: 1rem;
        }
        .date_circle {
          font-size: 0.8rem;
          color: $cube_nevada;
        }
      }
    }

    .tweets {
      margin-top: 3rem;
      .tweets_link {
        font-size: 0.8rem;
      }
      a {
        color: $cube_bondi_blue !important;
        text-decoration: none;
      }

      .card-text {
        font-size: 0.8rem;
      }

      .contact {
        font-size: 0.8rem;
        color: $cube_nevada;
      }

      .card-img-top {
        border-radius: 0.3rem;
      }

      .card_icons {
        color: $cube_nevada;
      }

      .card_logo {
        &:hover {
          background-color: #afafaf26;
        }
      }
    }

    .load {
      div {
        padding: 0.5rem;
      }
      color: $cube_nevada;
      background-color: $cube_load;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: $cube_nevada;
        color: white;
      }
    }
  }

  .subscribe {
    background-image: url("https://avada.theme-fusion.com/food/wp-content/uploads/sites/118/2019/03/subscribe-sec-bg.png");
    background-repeat: no-repeat;
    background-size: contain;

    .title_hidden {
      width: 70%;
      margin-top: 1rem;
      font-size: 1.2rem !important;
    }

    .text_subscribe {
      margin-top: 4rem;
      padding-top: 5rem;
      span {
        color: $cube_orange;
      }
      .subtitle_subscribe {
        color: $cube_nevada;
        font-size: 0.8rem;
        width: 45%;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }

    .email_subscribe {
      display: flex;
      justify-content: center;
      input {
        padding: 0.5rem;
        border: none;
        background-color: $cube_spring_wood;
        width: 30%;
        border-radius: 0.3rem;
        border: 1px solid transparent;
        &:hover {
          border: 1px solid $cube_orange;
        }
        &:focus-visible {
          outline: none;
        }
      }
      button {
        padding: 0.5rem 3rem !important;
      }
    }
    .cras {
      font-size: 0.8rem;
      color: $cube_nevada;
      padding-bottom: 10rem;
      padding-top: 2rem;
    }
  }
}
</style>