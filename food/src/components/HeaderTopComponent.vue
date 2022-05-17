<template>
  <div class="header_top">
    <div class="container">
      <div class="p-3 row row-cols-2">
        <div class="col d-flex align-items-center">
          <div class="download_app d-flex align-items-center">
            <a href="#">
              <div class="download me-2">Download App</div>
            </a>
            <button class="ios btn_food">IOS</button>
            <a href="#">
              <div class="advertise ms-4">Advertise with us</div>
            </a>
          </div>
        </div>
        <!-- /.col -->
        <div class="col">
          <div class="header_icons d-flex justify-content-end">
            <a href="#"
              ><font-awesome-icon class="ms-4" icon="fa-brands fa-facebook-f"
            /></a>
            <a href="#"
              ><font-awesome-icon class="ms-4" icon="fa-brands fa-instagram"
            /></a>
            <a href="#"
              ><font-awesome-icon class="ms-4" icon="fa-brands fa-twitter"
            /></a>
            <a href="#"
              ><font-awesome-icon class="ms-4" icon="fa-brands fa-youtube"
            /></a>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.header_top -->
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style lang="scss" scoped>
.header_top {
  color: $cube_nevada;
  font-size: 12px;
  font-family: sans-serif;
  .download {
    transition: all 0.8s;
    &:hover {
      color: $cube_orange;
    }
  }
  .advertise {
    transition: all 0.8s;
    &:hover {
      color: $cube_orange;
    }
  }
  .header_icons {
    .ms-4 {
      padding: 1rem;
      border-radius: 0.3rem;
      &:hover {
        background-color: white;
      }
    }
  }
}
</style>