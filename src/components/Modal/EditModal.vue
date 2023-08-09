<template>
  <!-- Giao diện component -->
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">Edit this task</div>
        <div class="modal-body">
          <input
            type="text"
            :value="this.getEdit.editName"
            class="styled-input"
            ref="editInput"
          />
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="closeEditModal">Cancel</button>
          <button class="save-btn" @click="updateItemName">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // Dữ liệu và logic của component
  computed: {
    ...mapGetters(["getEdit"]),
  },
  methods: {
    closeEditModal() {
      this.$store.dispatch("closeEditModal");
    },
    updateItemName() {
      const newName = this.$refs.editInput.value;
      this.$store.dispatch("updateName", {
        name: newName,
        index: this.getEdit.editIndex,
        completed: this.getEdit.editCompleted,
      });
      this.$store.dispatch("closeEditModal");
    },
  },
};
</script>

<style>
/* CSS của component */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.fade {
  transition: opacity 0.15s linear;
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: auto;
  height: 100%;
  pointer-events: none;
}

.modal .fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-content .bg-purple {
  background-color: purple;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}

.cancel-btn {
  background-color: #f8f9fa;
  color: #343a40;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.save-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
}

.styled-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #f8f8f8;
  color: #333;
  width: 50%;
  transition: border-color 0.2s ease;
}

.styled-input:focus {
  border-color: #007bff;
  outline: none;
}
</style>
