<template>
  <section>
    <NewsSection :articles="articles" />
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import NewsSection from "@/components/NewsSection.vue";
export default {
  components: {
    NewsSection,
  },
  created() {
    this.getAll();
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.articles,
    }),
  },
  methods: {
    ...mapActions("article", {
      getAll: "getAll",
    }),
  },
};
</script>
