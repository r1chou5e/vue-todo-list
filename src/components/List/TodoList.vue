<template>
  <!-- Giao diện component -->
  <div class="todo-list">
    <h2>Todo tasks</h2>
    <list-item
      v-for="(item, index) in getTodoList"
      :key="index"
      :itemText="item.name"
      :itemCompleted="item.completed"
      :itemIndex="index"
      :length="todoListLength"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../Item/ListItem.vue";

export default {
  // Dữ liệu và logic của component
  data() {
    return {};
  },
  components: {
    "list-item": ListItem,
  },
  computed: {
    ...mapGetters(["getTodoList"]),
    todoListLength() {
      return this.getTodoList.length;
    },
  },
};
</script>

<style>
/* CSS của component */
.todo-list {
  margin: 16px;
  width: 100%;
}
</style>
