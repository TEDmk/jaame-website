<template>
  <div id="page">
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LandingPage from "./components/LandingPage.vue";
export default {
  components: {
    Header,
    Footer,
    LandingPage,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>