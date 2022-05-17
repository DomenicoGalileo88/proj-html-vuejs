<template>
  <footer class="site_footer">
      <div class="container footer_top">
        <div class="row row-cols-5">
          <div class="col"></div>
          <!-- /.col -->

          <div class="col avada_food">
            <div class="logo_footer">
              <img
                src="@/assets/img/avada-food-logo-mob-2x-200x87.png"
                alt="logo"
              />
            </div>
            <!-- /.logo_footer -->
            <div class="icons_footer">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
              <font-awesome-icon class="ms-4" icon="fa-brands fa-instagram" />
              <font-awesome-icon class="ms-4" icon="fa-brands fa-twitter" />
              <font-awesome-icon class="ms-4" icon="fa-brands fa-youtube" />
            </div>
            <!-- /.icons_footer -->
          </div>
          <!-- /.avada_food -->
          <div class="col links_utyls">
            <ul>
              <li v-for="(link, index) in footer_links" :key="index"><a href="#">{{link.link_name}}</a></li>
            </ul>
          </div>
          <!-- /.links_utyls -->
          <div class="col contact">
            <div class="title_contact">CONTACT</div>

            <div class="contact_utyls">
              <div class="location d-flex mb-3">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <div class="location_text ms-4">
                  775 New York Ave, Brooklyn, Kings, New York 11203
                </div>
              </div>
              <!-- /.location -->

              <div class="phone d-flex mb-3">
                <font-awesome-icon icon="fa-solid fa-phone-flip" />
                <div class="phone_text ms-4">
                  + 0100-505-0000
                </div>
              </div>
              <!-- /.phone -->

              <div class="envelope d-flex">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <div class="envelope_text ms-4">
                  info@your-domain.com
                </div>
              </div>
              <!-- /.envelope -->
            </div>
          </div>
          <!-- /.contact -->
          <div class="col app_footer">
            <div class="title_app_footer">
              GET OUR APP!
            </div>
            <div class="img_app mb-3">
              <img src="@/assets/img/download-android-200x66.png" alt="google play">
            </div>
            <div class="img_app">
              <img src="@/assets/img/download-app-store-200x66.png" alt="app store">
            </div>
          </div>
          <!-- /.app_footer -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->

      <div class="footer_bottom">
        &#169; Copyright 2012 - 2020 | Avada Therme by ThermeFusion | All Rights Reserved | Powered by WordPress
      </div>
    </footer>
    <!-- /.site_footer -->
</template>

<script>
export default {
    name: 'SiteFooter',

    props: {
      footer_links: Object,
    }
}
</script>

<style lang="scss" scoped>
footer {
  .row {
    padding-top: 3rem;
    padding-bottom: 3rem;

    .avada_food,
    .links_utyls,
    .contact {
      border-right: 1px dashed $design_brandy;
    }

    .icons_footer {
      color: $cube_nevada;
      margin-top: 2rem;
    }

    .links_utyls {
      a{
        &:hover{
          color: $cube_orange !important;
        }
      }
      ul {
        line-height: 2.5;
      }
    }

    .contact {
      color: $cube_nevada;
      .title_contact {
        color: $cube_orange;
        margin-bottom: 1.5rem;
      }
    }

    .app_footer{
      .title_app_footer{
      color: $cube_orange;
      margin-bottom: 2rem;
    }
    }

    
  }

  .footer_bottom{
    background-color: $cube_spring_wood;
    color: $cube_nevada;
    text-align: center;
    padding-top: 2rem ;
    padding-bottom: 2rem ;
  }
    .envelope_text, .phone_text{
      &:hover{
        color: $cube_orange;
      }
    }
}
</style>