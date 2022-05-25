<template>
  <section>
    <article class="article">
      <h1 id="Section1">Mon compte {{ account.user.firstname }}</h1>
      <router-link to="/login" v-slot="{ navigate }"
        ><button @keypress.enter="navigate" class="btn">Déconnexion</button>
      </router-link>
    </article>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
    }),
  },
};
</script>
