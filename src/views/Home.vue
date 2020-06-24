<template>
  <div class="home">
    <img
      id="logo"
      alt="Vue logo"
      src="../assets/vuefire-logo.svg"
    >
    <HelloWorld msg="VueFire ToDo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="sass" scoped>
#logo
  max-width: 15%
</style>