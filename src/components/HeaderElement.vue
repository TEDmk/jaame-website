<template>
  <header>
    <div id="header-logo">
      <router-link to="/"
        ><img src="../assets/images/logo.png" alt="MDN logo"
      /></router-link>
    </div>
    <div id="header-nav">
      <ul class="topnav">
        <li><router-link class="active" to="/">Accueil</router-link></li>
        <li><router-link class="active" to="/news">Actualités</router-link></li>
        <!-- <li>
          <router-link class="active" to="/">Recettes & Tutos</router-link>
        </li> -->
        <li>
          <a
            target="_blank"
            href="https://www.helloasso.com/associations/j-agis-a-mon-echelle"
            >Adhérer</a
          >
        </li>
        <li><router-link class="active" to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <div id="header-login">
      <!-- <ul class="topnav">
        <li v-if="account.user" class="user dropdown">
          <router-link class="active" to="/me" id="user"
            ><font-awesome-icon icon="user" />
            {{ account.user.firstname }}</router-link
          >
        </li>
        <li v-else>
          <router-link class="active" to="/login">Se Connecter</router-link> |
          <router-link class="active" to="/register">S'inscrire</router-link>
        </li>
      </ul> -->
    </div>

    <div id="header-login-mobile">
      <ul class="topnav">
        <!-- <li v-if="account.user">
          <router-link class="active" to="/me" id="user"
            ><font-awesome-icon icon="user" size="3x"
          /></router-link>
        </li>
        <li v-else>
          <router-link class="active noborder" to="/login">
            <font-awesome-icon icon="user-plus" size="3x" />
          </router-link>
        </li> -->
        <li>
          <font-awesome-icon icon="bars" size="3x" @click="toggleMenu" />
        </li>
      </ul>
    </div>
    <div
      id="mobile-menu"
      v-click-outside="hideIfToggled"
      :class="menu.toggle ? 'slide-in' : 'slide-out'"
    >
      <ul>
        <li><router-link class="active" to="/">Accueil</router-link></li>
        <li><router-link class="active" to="/news">Actualités</router-link></li>
        <li>
          <router-link class="active" to="/">Recettes & Tutos</router-link>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.helloasso.com/associations/j-agis-a-mon-echelle"
            >Adhérer</a
          >
        </li>
        <li><router-link class="active" to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      account: (state) => state.account,
      menu: (state) => state.menu,
    }),
  },
  methods: {
    ...mapActions("menu", ["toggle", "hide", "makeHideable"]),
    hideIfToggled() {
      if (this.menu.hideable) {
        this.hide();
      }
    },
    toggleMenu() {
      this.toggle();
      setTimeout(() => {
        this.makeHideable();
      }, 1000);
    },
  },
};
</script>
