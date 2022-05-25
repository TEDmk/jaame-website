<template>
  <article class="article">
    <h1 id="Section1">Dernières actualités</h1>
    <div class="news" v-for="article in articles" :key="article['id']">
      <div class="info">
        <img style="width: 100%" :src="article.img" />
        <p class="title">
          <router-link :to="'/news/' + article.id">{{
            article.title
          }}</router-link>
        </p>
        <p class="credits">
          par {{ article.author.firstname }} {{ article.author.lastname }} le
          {{ new Date(article.created_at).toLocaleDateString() }}
        </p>
        <p class="description" v-html="article.content"></p>
        <p class="button-more">
          <router-link :to="'/news/' + article.id" v-slot="{ navigate }">
            <button @keypress.enter="navigate">Lire l'article</button>
          </router-link>
        </p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ["articles"],
};
</script>