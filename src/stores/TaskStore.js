import { defineStore } from "pinia";

export const useTaskStore=defineStore("task", {
  state: () => ({
    count: 0,
    task: [],
    taskFav: [],
  }),
  actions: {
    increaseCount() {
      this.$state.count++;
    },
    decreaseCount() {
      this.$state.count--;
    },
    addTask(task) {
      this.$state.task.push(task);
    },
    deleteTask(index) {
      this.$state.task.splice(index, 1);
    },
    addFavourite(fav) {
      const updateTasks = [...this.$state.task, fav];
      //   this.$state.task = updateTasks;
      this.$state.task = updateTasks;
    },
  },

  getters: {
    //Getters in Pinia allow you to compute and derive values from the state of your store in a reactive manner. They are similar to computed properties in Vue components but are defined within the store to encapsulate logic related to state transformations or computed values.
  },
});
