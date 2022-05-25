<template>
  <section>
    <article class="article">
      <h1 id="Section1">{{ article.title }}</h1>
      <p class="credits">
        par {{ article.author.firstname }} {{ article.author.lastname }} le
        {{ new Date(article.created_at).toLocaleDateString() }}
      </p>
      <img style="width: 100%" :src="article.img" />
      <p class="description" v-html="article.fullContent"></p>
    </article>
  </section>
</template>
<script>
export default {
  props: ["article"],
  //   data() {
  //     return {
  //       article: {
  //         id: 1,
  //         title: "C'est reparti en 2022!",
  //         author: {
  //           firstname: "Laura",
  //           lastname: "Turquet",
  //         },
  //         img: require("@/assets/images/news/1.png"),
  //         created_at: new Date(2022, 5, 24),
  //         content:
  //           "Du 30 juillet au 10 août, Laura, présidente de l'association J'agis à mon échelle, s'élancera pour une nouvelle éco-aventure, un tour du Nord-Pas-de-Calais en courant à la rencontre des initiatives éco-positives.",
  //         fullContent:
  //           "Du 30 juillet au 10 août, Laura, présidente de l'association J'agis à mon échelle, s'élancera pour une nouvelle éco-aventure, un tour du Nord-Pas-de-Calais en courant à la rencontre des initiatives éco-positives.<br /><br />En décembre 2021, elle se lançait le défi de courir 8 marathons en 8 jours dans le but de sensibiliser les plus jeunes aux enjeux environnementaux. Course le matin, interventions dans les écoles l'après-midi, logement chez l'habitant le soir, cette semaine folle fût une aventure enrichissante humainement, émotionnellement et sportivement.<br /><br />C'est pour ces raisons qu'elle décide de profiter de nouveau de ses congés pour se lancer dans une nouvelle aventure, 12 marathons en 12 jours pour partir à la rencontre des initiatives éco-positives, les promouvoir et aider d'autres porteurs de projets à s'en inspirer.<br /><br />Elle partira de Dunkerque, sa ville natale, le 30 juillet pour une boucle de plus de 450 kilomètres dans les départements du Nord et du Pas-de-Calais.<br /><br />Comme pour sa première aventure, elle est à la recherche de logements chez l'habitant dans ses villes étapes mais aussi d'un maximum d'accompagnateurs coureurs ou cyclistes pour l'accompagner lors des étapes. <br /><br />N'hésitez pas à nous contacter si vous êtes intéressés.<br />Préparons nos guiboles, bientôt plus de pétrôle !",
  //       },
  //     };
  //   },
};
</script>