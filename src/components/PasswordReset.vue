<template>
  <b-card no-body>
    <b-card-header
      ><b-button @click="$emit('close')" type="sm">close</b-button>
      <h3>Reset Password</h3></b-card-header
    >
    <b-card-body>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <b-form @submit.prevent="resetPassword">
          <b-input
            v-model.trim="email"
            type="email"
            placeholder="you@email.com"
          />
        </b-form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <b-button @click="resetPassword()" variant="primary" class="mt-3"
          >Reset</b-button
        >
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </b-card-body>
  </b-card>
</template>
<script>
import { auth } from "@/plugins/firebase";

export default {
  data() {
    return {
      email: "",
      showSuccess: false,
      errorMsg: "",
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = "";

      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    },
  },
};
</script>
