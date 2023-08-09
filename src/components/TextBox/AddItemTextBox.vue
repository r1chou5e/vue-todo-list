<template>
  <!-- Giao diện component -->
  <div>
    <input
      v-model="newName"
      class="item-input"
      placeholder="Write your task..."
      @keyup.enter="addItem"
    />
    <button @click="addItem" class="add-button">Add</button>
  </div>
</template>

<script>
export default {
  // Dữ liệu và logic của component
  data() {
    return {
      newName: "",
    };
  },
  methods: {
    addItem() {
      if (this.newName.trim() !== "") {
        this.$store.dispatch("addItem", this.newName.trim());
      }
      this.newName = "";
    },
  },
};
</script>

<style>
/* CSS của component */
.item-input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 300px;
  outline: none;
  transition: border-color 0.2s;
}

.item-input:focus {
  border-color: #3498db;
}

.add-button {
  margin: 12px;
  padding: 12px 16px;
  background-color: #337ab7;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
