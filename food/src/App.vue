<template>
  <div id="app">
    <SiteHeader :nav_links="nav_links" />

    <SiteMain
      :journal_contents="journal_contents"
      :popular_recipes_images_sx="popular_recipes_images_sx"
      :popular_recipes_images_dx="popular_recipes_images_dx"
      :farm_to_table_cards="farm_to_table_cards"
      :subscribe_images="subscribe_images"
    />

    <SiteFooter :footer_links="footer_links" />
  </div>
</template>

<script>
import SiteHeader from "@/components/HeaderComponent.vue";
import SiteMain from "@/components/MainComponent.vue";
import SiteFooter from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },

  data() {
    return {
      nav_links: [
        {
          link_name: "Home",
        },
        {
          link_name: "Recipes",
        },
        {
          link_name: "Places",
        },
        {
          link_name: "Blog",
        },
        {
          link_name: "About",
        },
        {
          link_name: "Contact",
        },
      ],
      footer_links: [
        {
          link_name: "Recipes",
        },
        {
          link_name: "Places",
        },
        {
          link_name: "Blog",
        },
        {
          link_name: "About",
        },
        {
          link_name: "Contact",
        },
      ],
      journal_contents: [
        {
          image: require("@/assets/img/single-post-img3-800x527.jpg"),
          title: "Food Corner: Top Japanese Restaurants for Sushi",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/fi-roundup-800x527.jpg"),
          title: "Roundup: My New Favourite Recipes For Healthly Living",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/fi-toasts-800x527.jpg"),
          title: "Why These Toasts with Tea are My New Favourite",
          date: "By admin March 25th, 2019",
        },
      ],
      popular_recipes_images_sx: [
        {
          image: require("@/assets/img/Mixed-fruits-800x527.jpg"),
          title: "Fruit Platter with Banana, Mango, Berries and Orange",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/r-michelle-tsang-500721-unsplash-min-800x527.jpg"),
          title: "Ice Cream Heaven With Vanilla, Chocolate, And Pistachio",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg"),
          title: "Ketogenic Diet Recipe with Avocado",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/fi2x-6-460x295.jpg"),
          title: "Summer Cheese Platter with Berries, Crackers and Wine",
          date: "By admin March 25th, 2019",
        },
      ],
      popular_recipes_images_dx: [
        {
          image: require("@/assets/img/r-rachel-park-366508-unsplash-min-800x527.jpg"),
          title: "Breakfast Delight With Sreawberry, Egg And Fruits",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/quick-summer-drink-460x295.jpg"),
          title: "Video Recipe: How to Make a Cool Summer Drink",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/perfect-cosmopolitan-460x295.jpg"),
          title: "Video Recipe: The Perfect Cosmopolitan",
          date: "By admin March 25th, 2019",
        },
        {
          image: require("@/assets/img/r-brooke-lark-96398-unsplash-min-460x295.jpg"),
          title: "Strawberry Fruit Pies Served With Tea",
          date: "By admin March 25th, 2019",
        },
      ],
      farm_to_table_cards: [
        {
          img: require("@/assets/img/fi-roundup-800x527.jpg"),
          title: "Roundup: My New Favourite Recipes For Heathly Living",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/fi-korean-food-800x527.jpg"),
          title: "Meal Prep: Korean Bibimbap with Kimchi",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/fi-toasts-800x527.jpg"),
          title: "Why These Toasts with Tea are My New Favourite",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/fi-street-food-800x527.jpg"),
          title: "Exploring Street Food in Bangkok",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/fi-organic-breakfast-800x527.jpg"),
          title: "Organic Choices For Healthier Living",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/fi-water-side-rest-800x527.jpg"),
          title: "5 Waterside Reastaurants in Istanbul for Special Events",
          date: "By admin March 25th, 2019",
        },
      ],
      subscribe_images: [
        {
          img: require("@/assets/img/Yogurt-Nan-800x527.jpg"),
          title: "Lunch Favourite with Salad, Naan And Beans",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/Mixed-fruits-800x527.jpg"),
          title: "Fruit Platter with Banana, Mango, Berries and Orange",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/r-rachel-park-366508-unsplash-min-800x527.jpg"),
          title: "Breakfast Delight With Strawberry, Egg And Fruit",
          date: "By admin March 25th, 2019",
        },
        {
          img: require("@/assets/img/r-michelle-tsang-500721-unsplash-min-800x527.jpg"),
          title: "Ice Cream Heaven With Vanilla, Chocolate And Pistachio",
          date: "By admin March 25th, 2019",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
