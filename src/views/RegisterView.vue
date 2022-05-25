<template>
  <div class="form">
    <h1>Inscrivez-vous!</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          placeholder="E-mail"
          type="text"
          v-model="email"
          name="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Prénom"
          type="text"
          v-model="firstname"
          name="firstname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Nom de famille"
          type="text"
          v-model="lastname"
          name="lastname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          placeholder="Mot de passe"
          type="password"
          v-model="password"
          name="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label htmlFor="password-retyped"></label>
        <input
          placeholder="Retaper le mot de passe"
          type="password"
          v-model="passwordRetyped"
          name="password-retyped"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button class="btn">Inscription</button>
        <img
          v-show="submitted"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        <div class="alert" v-if="errors.length">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { userService } from "@/services";

function ValidateEmail(email) {
  // eslint-disable-next-line
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      passwordRetyped: "",
      submitted: false,
      errors: [],
    };
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["logout", "login"]),
    handleSubmit() {
      this.errors = [];
      if (!ValidateEmail(this.email)) {
        this.errors.push("L'e-mail n'est pas au bon format.");
      }
      if (this.firstname == "") {
        this.errors.push("Le prénom ne peut etre vide.");
      }
      if (this.lastname == "") {
        this.errors.push("Le nom de famille ne peut etre vide.");
      }
      if (this.password == "") {
        this.errors.push("Le mot de passe ne peut etre vide.");
      } else if (this.password.length < 8) {
        this.errors.push("Le mot de passe doit faire plus de 7 caractères.");
      }
      if (this.password != this.passwordRetyped) {
        this.errors.push("Les mots de passe sont differents.");
      }
      if (this.errors.length > 0) return;
      this.submitted = true;
      userService
        .register(this.email, this.firstname, this.lastname, this.password)
        .then(
          (_) => {
            this.login({ email: this.email, password: this.password });
          },
          (_) => {}
        );
    },
  },
};
</script>
