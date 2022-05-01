<template>
  <div class="form">
    <h2>Connectez-vous!</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button class="btn">Connexion</button>
      </div>
      <div class="link-group">
        <router-link to="/register">Inscrivez-vous</router-link><br />
        <router-link to="/forgot-password">Mot de passe oublié</router-link>
      </div>
    </form>
  </div>
</template>