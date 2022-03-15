<template>
  <article class="article">
    <h1 id="Section1">Dernières actualités</h1>
    <div class="news" v-for="news in newsList" :key="news.name">
      <div class="thumbnail"><img :src="news['thumbnail']" /></div>
      <div class="info">
        <p class="title">{{ news["title"] }}</p>
        <p class="credits">{{ news["credits"] }}</p>
        <p class="description">{{ news["description"] }}</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data: function () {
    return {
      newsList: [
        {
          title: "Ma news",
          credits: "Laura Turquet, le 02/02/2022",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae repudiandae consectetur, obcaecati neque a rerum laborum cum labore quaerat. Officiis doloribus ducimus, dicta quod beatae ea minima autem consequatur reprehenderit.",
          thumbnail: "https://via.placeholder.com/300.png",
        },
        {
          title: "Ma news",
          credits: "Laura Turquet, le 02/02/2022",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae repudiandae consectetur, obcaecati neque a rerum laborum cum labore quaerat. Officiis doloribus ducimus, dicta quod beatae ea minima autem consequatur reprehenderit.",
          thumbnail: "https://via.placeholder.com/300.png",
        },
        {
          title: "Ma news",
          credits: "Laura Turquet, le 02/02/2022",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae repudiandae consectetur, obcaecati neque a rerum laborum cum labore quaerat. Officiis doloribus ducimus, dicta quod beatae ea minima autem consequatur reprehenderit.",
          thumbnail: "https://via.placeholder.com/300.png",
        },
      ],
    };
  },
};
</script>