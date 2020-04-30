<template>
  <div class="todo-input-wrapper">
    <label
      :class="{ 'all-check': allCheck }"
      @click="onCompletedAll"
      v-if="todoListLength"
      class="tiw-toggle-all"
    ></label>
    <input
      v-model="value"
      @keyup.enter="onAdd"
      placeholder="What needs to be done?"
      type="text"
      class="tiw-input"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState(["todoList"]),
    ...mapGetters(["todoListLength"]),
    allCheck() {
      return (
        this.todoList.length && this.todoList.every((todo) => todo.completed)
      );
    },
  },
  methods: {
    ...mapActions(["onCreate", "onCompletedAll"]),
    onAdd() {
      this.onCreate(this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-input-wrapper {
  position: relative;
  .tiw-toggle-all {
    position: absolute;
    transform: rotate(90deg);
    top: 20px;
    left: -10px;
  }
  .tiw-toggle-all::before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
    cursor: pointer;
  }
  .all-check::before {
    color: #1daf7a;
  }
  .tiw-input {
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  input::placeholder {
    font-style: italic;
    font-weight: 300;
  }
}
</style>
