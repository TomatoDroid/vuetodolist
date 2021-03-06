<template>
  <footer class="todo-footer-wrapper" v-if="todoListLength !== 0">
    <span class="tfw-count">
      <span>{{ unCompletedTodoLength }} {{ itemText }} left</span></span
    >
    <ul class="tfw-filter">
      <li v-for="(item, index) in filterTitle" :key="index">
        <a
          href="#"
          :class="{ selected: item.key === filter }"
          @click="handleFilter(item.key)"
          >{{ item.text }}</a
        >
      </li>
    </ul>
    <button class="tfw-clear" @click="onClear" v-show="completedTodoLength">
      Clear completed
    </button>
  </footer>
</template>

<script>
import { FILTERS } from "../constants/filter";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      filterTitle: [
        { key: FILTERS.all, text: "All" },
        { key: FILTERS.active, text: "Active" },
        { key: FILTERS.completed, text: "Completed" },
      ],
    };
  },
  computed: {
    ...mapState(["filter"]),
    ...mapGetters([
      "completedTodo",
      "completedTodoLength",
      "todoListLength",
      "unCompletedTodoLength",
    ]),
    itemText() {
      return this.unCompletedTodoLength === 0 ||
        this.unCompletedTodoLength === 1
        ? "item"
        : "items";
    },
  },
  methods: {
    ...mapActions(["onChangeFilter", "onClear"]),
    handleFilter(key) {
      this.onChangeFilter({ key });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-footer-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  height: 50px;
  padding: 10px;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
  position: relative;
  font-weight: 300;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
  .tfw-count {
    width: 80px;
  }
  .tfw-filter {
    list-style: none;
    display: flex;
    justify-content: center;
    width: 300px;
    li {
      a {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
      }
      a:hover {
        border-color: rgba($color: #1daf7a, $alpha: 0.5);
      }
      a.selected {
        border-color: rgba($color: #1daf7a, $alpha: 1);
      }
    }
  }
  .tfw-clear {
    flex: 0 0 auto;
    cursor: pointer;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
  }
  button:hover {
    text-decoration: underline;
  }
  button:focus {
    outline: none;
  }
}
</style>
