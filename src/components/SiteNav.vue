<template>
  <b-navbar type="light" variant="light" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Dashboard</b-nav-item>
        <b-nav-item to="/settings">Settings</b-nav-item>
        <b-nav-item
          ><b-button variant="secondary" @click="logout"
            >Logout</b-button
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
