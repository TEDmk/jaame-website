<template>
  <div id="page">
    <HeaderElement />
    <router-view></router-view>
  </div>
  <FooterElement />
</template>

<script>
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions({
      clearErrors: "account/clearErrors",
      hideMenu: "menu/hide",
    }),
  },
  watch: {
    $route(to, from) {
      if (to.path != "/login") this.clearErrors();
      this.hideMenu();
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>