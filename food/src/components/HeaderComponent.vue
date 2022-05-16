<template>
  <header class="site_header">
      <div class="header_top">
        <div class="container">
          <div class="p-3 row row-cols-2">
            <div class="col d-flex">
              <div class="download_app">
                Download App <button class="ios btn_food">iOS</button>
              </div>
              <div class="advertise ms-4">Advertise with us</div>
            </div>
            <!-- /.col -->
            <div class="col">
              <div class="header_icons d-flex justify-content-end">
                <font-awesome-icon
                  class="ms-4"
                  icon="fa-brands fa-facebook-f"
                />
                <font-awesome-icon class="ms-4" icon="fa-brands fa-instagram" />
                <font-awesome-icon class="ms-4" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="ms-4" icon="fa-brands fa-youtube" />
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
        <img src="@/assets/img/avada-food-logo.png" alt="logo" />
      </div>
      <!-- /.header_logo -->

      <nav class="navbar_food">
        <div class="container">
          <ul class="d-flex justify-content-center mt-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </li>
          </ul>
        </div>
      </nav>
      <!-- /.navbar_food -->

      <div class="demos">
        <div class="avada">
          <a href="#">
            <img
              height="10"
              src="@/assets/img/avada-logo.svg"
              alt="avada-logo"
            />
          </a>
        </div>
        <div class="demos_title">Demos</div>
      </div>
      <!-- /.domos -->

      <div class="sale">
        <div class="price"><small>$</small>39</div>
        <div class="sale_title">On sale</div>
      </div>
      <!-- /.sale -->

      <div class="header_jumbotron">
        <div class="title_jumbo">
          <button class="btn_food btn_jumbo">TODAY'S PICK</button>
          <h1>Food Corner: Top Japanese Restaurants for Sushi</h1>
          <div class="date">March 25, 2019</div>
        </div>
      </div>
      <!-- /.header_jumbotron -->
    </header>
    <!-- /.site_header -->
</template>

<script>
export default {
    name: 'SiteHeader',
}
</script>

<style lang="scss" scoped>
header {
  .header_top {
    color: $cube_nevada;
    font-size: 10px;
  }

  nav {
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
      .btn_jumbo {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 11px 2px $cube_silver_chalice;
      }
    }
  }

  .demos,
  .sale {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 0.3rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: $median_cape_cod;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 11px 2px $cube_silver_chalice;
  }

  .demos {
    top: 38%;
    right: 1%;
    .avada {
      text-align: center;
      width: 30px;
      height: 25px;
      background-color: $median_cape_cod;
      border-radius: 0.3rem;
      padding: 0.3rem;
      font-size: 0.5rem;
      img {
        filter: grayscale(1);
      }
    }

    .demos_title {
      font-size: 0.7rem;
    }
  }

  .sale {
    top: 51%;
    right: 1%;
    font-size: 0.6rem;
    .price {
      font-size: 0.9rem;
      color: $cube_forest_green;
      font-weight: bold;
    }
  }
}
</style>