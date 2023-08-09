<template>
  <!-- Giao diện component -->
  <button class="delete-button" @click="deleteItem">
    <i class="fa-solid fa-trash"></i>
  </button>
</template>

<script>
export default {
  // Dữ liệu và logic của component
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteSelectedItem");
    },
  },
};
</script>

<style scoped>
/* CSS của component */
.delete-button {
  background-color: #c2c2c2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 12px;
  color: white;
  transition: background-color 0.3s, transform 0.2s;
  margin: 10px 0;
}

.delete-button:hover {
  background-color: #c2c2c2;
  transform: translateY(-2px);
}

.delete-button:active {
  background-color: #8b8b8b;
  transform: translateY(1px);
}
</style>
