<template>
  <main class="todo-main">
    <AddInput></AddInput>
    <TodoList></TodoList>
    <FilterFooter></FilterFooter>
  </main>
</template>

<script>
import { TodoLocal } from "../todo-local";
import AddInput from "./addInput";
import FilterFooter from "./filterFooter";
import TodoList from "./list";
import { mapState, mapActions } from "vuex";

export default {
  components: { AddInput, FilterFooter, TodoList },
  watch: {
    todoList() {
      TodoLocal.storeTodos(this.todoList);
    },
  },
  computed: {
    ...mapState(["todoList"]),
  },
  methods: {
    ...mapActions(["onLoad"]),
  },
  beforeMount() {
    this.onLoad(TodoLocal.loadTodos());
  },
};
</script>

<style lang="scss" scoped>
.todo-main {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>
