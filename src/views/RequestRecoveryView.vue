<template>
  <div class="form">
    <h1>Recuperer votre mot de passe!</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          type="text"
          v-model="email"
          placeholder="E-mail"
          name="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button class="btn">Récuperer son compte via email</button>
      </div>
      <div class="alert" v-if="errors.length">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </div>
      <div class="alert" v-if="successMessage">{{ successMessage }}</div>
    </form>
  </div>
</template>

<script>
import { userService } from "@/services";
import { mapState, mapActions } from "vuex";

function ValidateEmail(email) {
  // eslint-disable-next-line
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      successMessage: "",
    };
  },
  computed: {
    ...mapState("account", ["errors", "status"]),
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      this.errors = [];
      if (!ValidateEmail(this.email)) {
        this.errors.push("L'e-mail n'est pas au bon format.");
      }
      if (this.errors.length > 0) return;
      userService.requestRecovery(this.email).then(() => {
        this.successMessage = "Si l'email est enregistré, un email est envoyé";
      });
    },
  },
};
</script>
