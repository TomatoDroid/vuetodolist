<template>
  <ul class="todo-list">
    <ListItem
      v-for="(item, index) in filterTodoList"
      :key="index"
      :data="item"
      @blur="onBlur"
      @toggle="onToggle"
      @delete="handleDelete"
    ></ListItem>
  </ul>
</template>

<script>
import ListItem from "./listItem";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ListItem },
  computed: {
    ...mapGetters(["filterTodoList"]),
  },
  methods: {
    ...mapActions(["onUpdate", "onToggleTodo", "onDelete"]),
    onBlur(todo) {
      this.onUpdate(todo);
    },
    onToggle(id) {
      this.onToggleTodo(id);
    },
    handleDelete(id) {
      this.onDelete(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
