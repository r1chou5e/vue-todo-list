<template>
  <!-- Giao diện component -->
  <div class="button-list">
    <move-button direction="up" />
    <move-button direction="down" />
    <move-button direction="left" />
    <move-button direction="right" />
    <delete-button />
  </div>
</template>

<script>
import MoveButton from "../Button/MoveButton.vue";
import DeleteButton from "../Button/DeleteButton.vue";

export default {
  // Dữ liệu và logic của component
  components: {
    "move-button": MoveButton,
    "delete-button": DeleteButton,
  },
};
</script>

<style>
/* CSS của component */
.button-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 20px;
}
</style>
