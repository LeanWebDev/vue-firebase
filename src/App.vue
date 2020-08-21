<template>
  <div>
    <site-nav v-if="showNav"></site-nav>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav";

export default {
  components: {
    SiteNav,
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>
<style lang="scss"></style>
