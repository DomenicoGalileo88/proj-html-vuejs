<template>
  <header class="site_header">
    <HeaderTop />
    <HeaderLogo />
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
    <HeaderJumbo />
  </header>
  <!-- /.site_header -->
</template>

<script>
import HeaderTop from '@/components/HeaderTopComponent.vue';
import HeaderLogo from '@/components/HeaderLogoComponent.vue';
import HeaderJumbo from '@/components/HeaderJumboComponent.vue';
export default {
  name: "SiteHeader",

  components: {
    HeaderTop,
    HeaderLogo,
    HeaderJumbo,
  },

  props: {
    nav_links: Array,
  },
};
</script>

<style lang="scss" scoped>
header {

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

}
</style>