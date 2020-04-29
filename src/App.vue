<template>
  <div id="app">
    <div class="main">
      <header>
        <h1>todo</h1>
      </header>
      <main class="todo-main">
        <div class="todo-input-wrapper">
          <label
            class="tiw-toggle-all"
            :class="{ 'all-check': allCheck }"
            @click="handleToogleAll"
          ></label>
          <input
            v-model="value"
            placeholder="What needs to be done?"
            @keyup.enter="handleAdd"
            type="text"
            class="tiw-input"
          />
        </div>
        <ul class="todo-list">
          <li
            class="todo-item"
            v-for="(item, index) in todosFilter"
            :key="index"
            @dblclick="handleEdit(item, index)"
          >
            <input
              v-if="editId === item.id"
              :value="editValue"
              @blur="handleBlur"
              @input="handleChange"
              type="text"
              ref="inputDom"
              class="edit"
            />
            <div v-else>
              <input
                type="checkbox"
                class="toggle"
                @click="handleToggle(item)"
              />
              <label :class="{ completed: item.completed }">{{
                item.text
              }}</label>
              <button class="item-delete" @click="handleDelete(item.id)">
                ×
              </button>
            </div>
          </li>
        </ul>
        <footer class="todo-footer-wrapper" v-if="todos.length !== 0">
          <span class="tfw-count">
            <span>{{ unCompletedLength }} {{ itemText }} left</span></span
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
          <button class="tfw-clear" @click="handleClear" v-show="someClear">
            Clear completed
          </button>
        </footer>
      </main>
      <footer class="todo-footer">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/blacksonic/">blacksonic</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { TodoLocal } from "./todo-local";

export default {
  text: "App",
  data() {
    return {
      value: "",
      editValue: "",
      todos: [],
      filterTitle: [
        { key: "all", text: "All" },
        { key: "active", text: "Active" },
        { key: "completed", text: "Completed" },
      ],
      filter: "all",
      editId: "",
    };
  },
  methods: {
    handleAdd() {
      if (!this.value) return;
      const todo = {
        id: uuidv4(),
        text: this.value,
        completed: false,
      };
      this.todos.push(todo);
      this.value = "";
    },
    handleToogleAll() {
      this.todos.forEach((item) => (item.completed = true));
    },
    handleToggle(item) {
      item.completed = !item.completed;
    },
    handleFilter(filter) {
      this.filter = filter;
    },
    handleClear() {
      this.todos = this.todos.filter((item) => !item.completed);
    },
    handleDelete(id) {
      const index = this.todos.findIndex((item) => item.id === id);
      this.todos.splice(index, 1);
    },
    handleEdit(item, index) {
      this.editId = item.id;
      this.editValue = item.text;
      this.$nextTick(() => {
        this.$refs.inputDom[index].focus();
      });
    },
    handleBlur() {
      this.editId = "";
    },
    handleChange(e) {
      this.todos.forEach((item) => {
        if (item.id === this.editId) {
          item.text = e.target.value;
        }
      });
    },
  },
  computed: {
    unCompletedLength() {
      return this.todos.filter((item) => item.completed === false).length;
    },
    todosFilter() {
      if (this.filter === "active") {
        return this.todos.filter((item) => !item.completed);
      } else if (this.filter === "completed") {
        return this.todos.filter((item) => item.completed);
      } else {
        return this.todos;
      }
    },
    itemText() {
      return this.unCompletedLength === 0 || this.unCompletedLength === 1
        ? "item"
        : "items";
    },
    someClear() {
      return this.todos.some((item) => item.completed);
    },
    allCheck() {
      return (
        this.todos.every((item) => item.completed) && this.todos.length !== 0
      );
    },
  },
  watch: {
    todos() {
      TodoLocal.storeTodos(this.todos);
    },
  },
  beforeMount() {
    this.todos = TodoLocal.loadTodos();
  },
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.main {
  width: 550px;
  margin: 0 auto;
}
.todo-main {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
header {
  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    color: #1daf7a;
    margin: 20px 0;
    text-transform: uppercase;
  }
}
input[type="text"] {
  padding: 16px 16px 16px 60px;
  border: none;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  line-height: 1.4em;
  box-sizing: border-box;
}
input:focus {
  outline: none;
}
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
.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;
  .todo-item {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    position: relative;
    height: 65px;
    box-sizing: border-box;
    .toggle {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 40px;
      height: 40px;
      background: none;
      margin: auto 0;
      border: none;
      opacity: 0;
    }
    label {
      display: block;
      height: 65px;
      box-sizing: border-box;
      word-break: break-all;
      padding: 15px 15px 15px 60px;
      line-height: 1.4em;
      font-weight: 400;
      color: #4d4d4d;
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center left;
    }
    label.completed {
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
      color: #cdcdcd;
      text-decoration: line-through;
      transition: all 0.5s;
    }
    .item-delete {
      display: none;
    }
    .edit {
      outline: 1px solid #1daf7a;
      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
      margin-left: 44px;
      padding-left: 16px;
      box-sizing: border-box;
      width: calc(100% - 43px);
    }
  }
  .todo-item:hover {
    .item-delete {
      display: block;
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      width: 30px;
      height: 30px;
      margin: auto 0;
      font-size: 30px;
      line-height: 30px;
      color: #1daf7a;
      cursor: pointer;
    }
    button {
      padding: 0;
      margin: 0;
      border: 0;
      background: none;
      vertical-align: baseline;
      font-family: inherit;
      font-weight: inherit;
      appearance: none;
    }
    button:focus {
      outline: none;
    }
  }
}
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
.todo-footer {
  margin: 65px auto 0;
  color: #4d4d4d;
  font-size: 11px;
  text-align: center;
  font-weight: 300;
  p {
    line-height: 1em;
    a {
      color: inherit;
      text-decoration: none;
      font-weight: 400;
    }
  }
}
</style>
