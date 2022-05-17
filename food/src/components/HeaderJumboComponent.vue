<template>
  <div class="header_jumbotron">
    <div class="title_jumbo">
      <button class="btn_food btn_jumbo">TODAY'S PICK</button>
      <a href="#"><h1>Food Corner: Top Japanese Restaurants for Sushi</h1></a>
      <div class="date">March 25, 2019</div>
    </div>
  </div>
  <!-- /.header_jumbotron -->
</template>

<script>
export default {
  name: "HeaderJumbo",
};
</script>

<style lang="scss" scoped>
.header_jumbotron {
  h1 {
    transition: all 0.8s;
    &:hover {
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
    transition: all 0.8s;
    &:hover {
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
</style>