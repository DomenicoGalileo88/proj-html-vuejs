<template>
  <header class="site_header">
    <div class="header_top">
      <div class="container">
        <div class="p-3 row row-cols-2">
          <div class="col d-flex align-items-center">
            <div class="download_app d-flex align-items-center">
              <div class="download me-2">Download App</div>
              <button class="ios btn_food">IOS</button>
              <div class="advertise ms-4">Advertise with us</div>
            </div>
          </div>
          <!-- /.col -->
          <div class="col">
            <div class="header_icons d-flex justify-content-end">
              <a href="#"><font-awesome-icon class="ms-4" icon="fa-brands fa-facebook-f" /></a>
              <a href="#"><font-awesome-icon class="ms-4" icon="fa-brands fa-instagram" /></a>
              <a href="#"><font-awesome-icon class="ms-4" icon="fa-brands fa-twitter" /></a>
              <a href="#"><font-awesome-icon class="ms-4" icon="fa-brands fa-youtube" /></a>
            </div>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.header_icon -->

    <div class="header_logo text-center">
      <a href="#"><img src="@/assets/img/avada-food-logo.png" alt="logo" /></a>
    </div>
    <!-- /.header_logo -->

    <nav class="navbar_food">
      <div class="container">
        <ul class="d-flex justify-content-center mt-4">
          <li v-for="(link, index) in nav_links" :key="index">
            <a href="#">{{ link.link_name }}</a>
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
            /></a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /.navbar_food -->

    <div class="header_jumbotron">
      <div class="title_jumbo">
        <button class="btn_food btn_jumbo">TODAY'S PICK</button>
        <a href="#"><h1>Food Corner: Top Japanese Restaurants for Sushi</h1></a>
        <div class="date">March 25, 2019</div>
      </div>
    </div>
    <!-- /.header_jumbotron -->
  </header>
  <!-- /.site_header -->
</template>

<script>
export default {
  name: "SiteHeader",

  props: {
    nav_links: Array,
  },
};
</script>

<style lang="scss" scoped>
header {
  .header_top {
    color: $cube_nevada;
    font-size: 10px;
    font-family: sans-serif;
    .download {
      &:hover {
        color: $cube_orange;
      }
    }
      .advertise {
        &:hover {
          color: $cube_orange;
        }
      }
      .header_icons{
        .ms-4{
          padding: 1rem;
          border-radius: 0.3rem;
          &:hover{
            background-color: white;
          }
        }
      }
  }

  nav {
    font-family: sans-serif;
    li {
      margin-left: 4rem;
      font-weight: 400;
      cursor: pointer;
      a {
        padding-bottom: 0.5rem;
        &:hover {
          color: $cube_orange !important;
          border-bottom: 2px solid $cube_orange;
        }
      }
    }
  }

  .header_jumbotron {
    h1{
      &:hover{
        color: $cube_orange;
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
    background-image: url("@/assets/img/single-post-img3-1200x790.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .title_jumbo {
      position: relative;
      text-align: center;
      padding: 2rem 3rem;
      width: 40%;
      background-color: white;
      border-radius: 0.5rem;
      &:hover{
        color: $cube_orange;
      }
      .btn_jumbo {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 11px 2px $cube_silver_chalice;
      }
    }
  }
}
</style>