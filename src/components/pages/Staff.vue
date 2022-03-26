<template>
  <div>
    <article class="article">
      <h1 id="le-bureau">Le bureau</h1>
    </article>
    <article class="article">
      <div class="staff" v-for="staff in staffs" :key="staff.name">
        <div class="staff-intro">
          <p class="name">{{ staff["name"] }}</p>
          <p class="role">{{ staff["role"] }}</p>
          <p class="description">{{ staff["description"] }}</p>
        </div>
        <div class="hex">
          <div class="hex-background">
            <img :src="staff['photo']" />
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <polygon
              points=".41,.02 .59,.02
                       .91,.16 1,.33
                       1,.66 .91,.83 
                       .59,.98 .41,.98 
                       .09,.83 0,.66
                       0,.33 .09,.16
                       "
            />

            <circle cx=".5" cy=".2" r=".2" />
            <!-- top -->
            <circle cx=".5" cy=".8" r=".2" />
            <!-- bottom -->
            <circle cx=".8" cy=".33" r=".2" />
            <!-- right top -->
            <circle cx=".8" cy=".66" r=".2" />
            <!-- right bottom -->
            <circle cx=".2" cy=".33" r=".2" />
            <!-- left top -->
            <circle cx=".2" cy=".66" r=".2" />
            <!-- left bottom -->
          </clipPath>
        </defs>
      </svg>
    </article>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iure, dolorum officiis, fuga velit itaque laboriosam consequatur eveniet modi ipsam sint rem omnis commodi provident molestiae iste adipisci nesciunt vero.",
      staffs: [
        {
          name: "Laura Turquet",
          role: "Présidente",
          description:
            "Ecocitoyenne dunkerquoise engagée, accro' à la course à pied, à la musique et à ses petits chats",
          photo: require("../../assets/images/laura.png"),
        },
        {
          name: "Hanaa Derrem",
          role: "Trésorière",
          description:
            "Dunkerquoise de cœur, passionnée par le sport et la nature, désireuse de bouger et faire bouger les autres pour l'écologie",
          photo: require("../../assets/images/hanaa.png"),
        },
        {
          name: "Anne-Sophie Deblock",
          role: "Secrétaire",
          description:
            "Maman dunkerquoise de 3 tempêtes, sensible aux enjeux du développement durable à affronter en famille et collectivement",
          photo: require("../../assets/images/annesophie.png"),
        },
      ],
    };
  },
};
</script>