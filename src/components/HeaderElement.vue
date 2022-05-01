<template>
  <header>
    <div id="header-logo">
      <img src="../assets/images/logo.png" alt="MDN logo" />
    </div>
    <div id="header-nav">
      <ul class="topnav">
        <li><router-link class="active" to="/">Accueil</router-link></li>
        <!-- <li><router-link class="active" to="/news">Actualités</router-link></li>
        <li>
          <router-link class="active" to="/">Recettes & Tutos</router-link>
        </li> -->
        <li><router-link class="active" to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </header>
</template>