<template>
  <div>
    <li class="todo-item" @dblclick="handleEdit">
      <input
        v-if="isEdit"
        :value="editValue"
        @blur="handleBlur(data)"
        @input="handleChange"
        type="text"
        ref="inputDom"
        class="edit"
      />
      <div v-else>
        <input type="checkbox" class="toggle" @click="handleToggle(data)" />
        <label :class="{ completed: data.completed }">{{ data.text }}</label>
        <button class="item-delete" @click="handleDelete(data.id)">
          ×
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      isEdit: false,
      editValue: "",
    };
  },
  methods: {
    handleEdit() {
      this.isEdit = true;
      this.editValue = this.data.text;
      this.$nextTick(() => {
        this.$refs.inputDom.focus();
      });
    },
    handleChange(e) {
      this.editValue = e.target.value;
    },
    handleBlur(data) {
      this.isEdit = false;
      this.$emit("blur", { id: data.id, text: this.editValue });
    },
    handleToggle(data) {
      this.$emit("toggle", { id: data.id, completed: !data.completed });
    },
    handleDelete(id) {
      this.$emit("delete", { id });
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
