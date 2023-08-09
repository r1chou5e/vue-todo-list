<template>
  <add-item-text-box />
  <div class="container">
    <todo-list />
    <button-list />
    <completed-list />
  </div>
  <edit-modal v-if="getIsShowModal" />
</template>

<script>
import AddItemTextBox from "./components/TextBox/AddItemTextBox.vue";
import ToDoList from "./components/List/TodoList.vue";
import CompletedList from "./components/List/CompletedList.vue";
import ButtonList from "./components/List/ButtonList.vue";
import EditModal from "./components/Modal/EditModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    "add-item-text-box": AddItemTextBox,
    "todo-list": ToDoList,
    "completed-list": CompletedList,
    "button-list": ButtonList,
    "edit-modal": EditModal,
  },
  data() {},
  computed: {
    ...mapGetters(["getIsShowModal"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: space-around;
}
</style>
