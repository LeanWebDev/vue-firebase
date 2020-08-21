<template>
  <b-row>
    <b-col>
      <b-card-group columns>
        <b-card v-for="(todo, index) in todos" :key="index" no-body>
          <b-card-header>{{ todo.id }}</b-card-header>
          <b-card-body>{{ todo.text }}</b-card-body>
          <b-card-footer>
            <b-badge v-if="todo.completed == false" variant="danger"
              >Incomplete</b-badge
            >
            <b-badge v-if="todo.completed !== false" variant="positive"
              >Complete</b-badge
            >
          </b-card-footer>
        </b-card>
      </b-card-group>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
      </ul>
      <img id="logo" alt="Vue logo" src="../assets/vuefire-logo.svg" />
      <HelloWorld msg="VueFire ToDo" />
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { todosCollection, arbCollection } from "../plugins/firebase";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      todos: [],
      newToDo: "",
    };
  },
  firestore() {
    return {
      todos: todosCollection.orderBy("createdAt", "desc"),
      arbs: arbCollection.orderBy("createdAt", "desc"),
    };
  },
};
</script>
<style lang="sass" scoped>
#logo
  max-width: 15%

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

body
  margin: 0
  padding: 0

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0
  padding: 0

h1,
h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

a
  color: #42b983

.page-header
  padding: 5rem 0
  width: 100%
  background: #ff33ae

.wrapper
  max-width: 500px
  margin: 0 auto
  padding: 0 1rem

.new-todo-form
  display: flex
  align-items: flex-end
  justify-content: space-between
  padding: 1rem
  border-radius: 3px
  border: 1px solid #fafafa
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15)
  margin-top: -3rem
  background: white

.new-todo-label
  display: flex
  flex-direction: column
  width: 80%
  justify-content: flex-start
  text-align: left
  font-weight: bold

.new-todo-input
  padding: 0.5rem
  border-radius: 3px
  border: 1px solid lightgrey
  font-size: 1rem
  margin-top: 0.5rem
  font-weight: normal

.new-todo-button
  font-size: 1rem
  padding: 0.5rem 0.7rem
  border-radius: 3px
  color: white
  font-weight: bold
  background: #ff33ae
  flex: 1
  margin-left: 1rem
  border: 1px solid #ff33ae

.todo-item
  display: flex
  align-items: center
  border-top: 1px solid lightgrey
  border-left: 1px solid lightgrey
  border-right: 1px solid lightgrey
  &:first-of-type
    border-radius: 3px 3px 0 0

  &:last-of-type
    border-bottom: 1px solid lightgrey
    border-radius: 0 0 3px 3px

  &-label
    cursor: pointer
    padding: 1rem

  &__checkbox
    margin-right: 1rem

.todo-list
  max-width: 100%
  margin: 2rem auto
</style>
