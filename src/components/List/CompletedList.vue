<template>
  <!-- Giao diện component -->
  <div class="completed-list">
    <h2>Completed tasks</h2>
    <list-item
      v-for="(item, index) in getCompletedList"
      :key="index"
      :itemText="item.name"
      :itemCompleted="item.completed"
      :itemIndex="index"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../Item/ListItem.vue";

export default {
  // Dữ liệu và logic của component
  components: {
    "list-item": ListItem,
  },
  computed: {
    ...mapGetters(["getCompletedList"]),
  },
  methods: {},
};
</script>

<style>
/* CSS của component */
.completed-list {
  margin: 16px;
  width: 100%;
}
</style>
