import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import { FILTERS } from "../constants/filter";
import { ACTION_TYPES } from "../constants/actionTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    filter: FILTERS.all,
  },
  getters: {
    filterTodoList(state) {
      if (state.filter === FILTERS.active) {
        return state.todoList.filter((item) => !item.completed);
      } else if (state.filter === FILTERS.completed) {
        return state.todoList.filter((item) => item.completed);
      } else {
        return state.todoList;
      }
    },
    completedTodo(state) {
      return state.todoList.filter((todo) => todo.completed);
    },
    todoListLength(state) {
      return state.todoList.length;
    },
    completedTodoLength(state, getters) {
      return getters.completedTodo.length;
    },
    unCompletedTodoLength(state) {
      return state.todoList.filter((todo) => !todo.completed).length;
    },
  },
  mutations: {
    [ACTION_TYPES.LOAD](state, payload) {
      state.todoList = payload;
    },
    [ACTION_TYPES.ADD_TODO](state, payload) {
      state.todoList.push({
        id: uuidv4(),
        text: payload,
        completed: false,
      });
    },
    [ACTION_TYPES.DELETE_TODO](state, { id }) {
      state.todoList = state.todoList.filter((todo) => todo.id !== id);
    },
    [ACTION_TYPES.UPDATE_TODO](state, payload) {
      state.todoList = state.todoList.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    },
    [ACTION_TYPES.TOGGLE_TODO](state, payload) {
      state.todoList = state.todoList.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    },
    [ACTION_TYPES.CLEAR_COMPLETED](state) {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },
    [ACTION_TYPES.CHANGE_FILTER](state, { key }) {
      state.filter = key;
    },
    [ACTION_TYPES.CHANGE_ALL_COMPLETED](state) {
      state.todoList = state.todoList.map((todo) => ({
        ...todo,
        ...{ completed: true },
      }));
    },
  },
  actions: {
    onLoad({ commit }, payload) {
      commit(ACTION_TYPES.LOAD, payload);
    },
    onCreate({ commit }, payload) {
      commit(ACTION_TYPES.ADD_TODO, payload);
    },
    onDelete({ commit }, payload) {
      commit(ACTION_TYPES.DELETE_TODO, payload);
    },
    onUpdate({ commit }, payload) {
      commit(ACTION_TYPES.UPDATE_TODO, payload);
    },
    onToggleTodo({ commit }, payload) {
      commit(ACTION_TYPES.TOGGLE_TODO, payload);
    },
    onClear({ commit }) {
      commit(ACTION_TYPES.CLEAR_COMPLETED);
    },
    onChangeFilter({ commit }, payload) {
      commit(ACTION_TYPES.CHANGE_FILTER, payload);
    },
    onCompletedAll({ commit }) {
      commit(ACTION_TYPES.CHANGE_ALL_COMPLETED);
    },
  },
  modules: {},
});
