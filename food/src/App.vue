<template>
  <div id="app">
    <SiteHeader :nav_links="nav_links" />

    <SiteMain />

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/HeaderComponent.vue';
import SiteMain from '@/components/MainComponent.vue';
import SiteFooter from '@/components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },

  data(){
    return {
      nav_links: [
        {
          link_name: 'Home',
        },
        {
          link_name: 'Recipes',
        },
        {
          link_name: 'Places',
        },
        {
          link_name: 'Blog',
        },
        {
          link_name: 'About',
        },
        {
          link_name: 'Contact',
        },
      ]
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
