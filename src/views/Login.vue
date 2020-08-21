<template>
  <b-container class="mt-4">
    <b-row>
      <div class="extras">
        <a href="#" @click="togglePasswordReset()">Forgot Password</a>
      </div>
      <PasswordReset
        v-if="showPasswordReset"
        @close="togglePasswordReset()"
      ></PasswordReset>
      <b-col
        v-if="showLoginForm"
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4"
      >
        <h2>Sign up</h2>
        <a href="#" @click="toggleForm">Back to login</a>
        <b-form @submit.prevent="signup">
          <b-form-group label="Name">
            <b-form-input
              v-model.trim="signupForm.name"
              type="text"
              placeholder="Full Name"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Title">
            <b-form-input
              v-model.trim="signupForm.title"
              type="text"
              placeholder="Title"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Email">
            <b-form-input
              v-model.trim="signupForm.email"
              type="email"
              placeholder="Email"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              v-model.trim="signupForm.password"
              type="password"
              placeholder="Password"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group v-if="error" class="text-danger">
            <small>{{ error }}</small>
          </b-form-group>
          <b-button type="submit" variant="primary">Sign up</b-button>
        </b-form>
      </b-col>
      <b-col
        v-else
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4"
      >
        <h2>Sign in</h2>
        <a href="#" @click="toggleForm">Create an account</a>
        <b-form @submit.prevent="login">
          <b-form-group label="Email">
            <b-form-input
              v-model.trim="loginForm.email"
              type="email"
              placeholder="Email"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="Password"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group v-if="error" class="text-danger">
            <small>{{ error }}</small>
          </b-form-group>
          <b-button type="submit" variant="primary">Log In</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";

export default {
  name: "Login",
  components: {
    PasswordReset,
  },
  data() {
    return {
      showLoginForm: true,
      showPasswordReset: false,
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: "",
        error: "",
      },
      loginForm: {
        email: "",
        password: "",
        error: "",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      });
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
  },
};
</script>
