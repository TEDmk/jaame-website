<template>
  <section>
    <Front />
    <Introduction />
    <Staff />
    <News />
  </section>
</template>

<script>
import Front from "./pages/Front.vue";
import Staff from "./pages/Staff.vue";
import Introduction from "./pages/Introduction.vue";
import News from "./pages/News.vue";
export default {
  components: {
    Front,
    Introduction,
    Staff,
    News,
  },
};
</script>