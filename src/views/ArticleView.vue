<template>
  <section><ArticleSection :article="getArticle()" /></section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import ArticleSection from "@/components/ArticleSection.vue";
export default {
  props: ["id"],
  components: {
    ArticleSection,
  },
  created() {
    this.getAll();
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.indexedArticles,
    }),
  },
  methods: {
    ...mapActions("article", {
      getAll: "getAll",
    }),
    getArticle() {
      return this.articles[this.id];
    },
  },
};
</script>
