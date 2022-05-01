<template>
  <div id="page">
    <HeaderElement />
    <router-view></router-view>
    <FooterElement />
  </div>
</template>

<script>
import HeaderElement from "@/components/HeaderElement.vue";
import FooterElement from "@/components/FooterElement.vue";
export default {
  components: {
    HeaderElement,
    FooterElement,
  },
  created() {
    document.title = "J'agis à mon échelle";
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>