<template>
  <section class="culinary_collection">
    <h5 class="text-center title_culinary_collection mt_5 font_serif">
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
      <p class="w-50 font_serif">
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
</template>

<script>
export default {
    name: 'MainCulinary',
};
</script>

<style lang="scss" scoped>
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
    transition: all 0.6s;
    &:hover {
      background-color: $cube_orange;
      color: white;
    }
  }
}
</style>