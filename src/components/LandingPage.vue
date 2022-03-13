<template>
  <section>
    <Front />
    <Blog />
  </section>
</template>

<script>
import Front from "./pages/Front.vue";
import Blog from "./pages/Blog.vue";
export default {
  components: {
    Front,
    Blog,
  },
};
</script>