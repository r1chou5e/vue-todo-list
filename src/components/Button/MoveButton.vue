<template>
  <!-- Giao diện component -->
  <button class="move-button" @click="handleButtonClick">
    <i :class="iconClass"></i>
  </button>
</template>

<script>
export default {
  // Dữ liệu và logic của component
  props: {
    direction: String,
  },
  computed: {
    iconClass() {
      switch (this.direction) {
        case "up":
          return "fas fa-arrow-up";
        case "down":
          return "fas fa-arrow-down";
        case "left":
          return "fas fa-arrow-left";
        case "right":
          return "fas fa-arrow-right";
        default:
          return "";
      }
    },
  },
  methods: {
    handleButtonClick() {
      // Xử lý sự kiện tương ứng với hướng di chuyển
      switch (this.direction) {
        case "up":
          this.moveUp();
          break;
        case "down":
          this.moveDown();
          break;
        case "left":
          this.moveLeft();
          break;
        case "right":
          this.completeSelectedItem();
          break;
        default:
          break;
      }
    },
    moveUp() {
      // Xử lý khi nút "Up" được nhấn
      console.log("Move Up");
      // Thêm logic xử lý tại đây
    },
    moveDown() {
      // Xử lý khi nút "Down" được nhấn
      console.log("Move Down");
      // Thêm logic xử lý tại đây
    },
    moveLeft() {
      // Xử lý khi nút "Left" được nhấn
      console.log("Move Left");
      // Thêm logic xử lý tại đây
    },
    completeSelectedItem() {
      this.$store.dispatch("completeSelectedItem");
      console.log(this.$store.state);
      this.$store.dispatch("unselectAllItem");
      console.log(this.$store.state);
    },
  },
};
</script>

<style scoped>
/* CSS của component */
.move-button {
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

.move-button:hover {
  background-color: #c2c2c2;
  transform: translateY(-2px);
}

.move-button:active {
  background-color: #8b8b8b;
  transform: translateY(1px);
}
</style>
