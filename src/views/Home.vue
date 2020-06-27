<template>
  <div class="home">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.createdAt"
      >{{ todo }}</li>
    </ul>
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
import { todosCollection, arbCollection } from '../firebase';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      todos: [],
      newToDo: ''
    }
  },
  firestore () {
    return {
      todos: todosCollection.orderBy('createdAt', 'desc'),
      arbs: arbCollection.orderBy('createdAt', 'desc')
    }
  }
}
</script>
<style lang="sass" scoped>
#logo
  max-width: 15%
</style>