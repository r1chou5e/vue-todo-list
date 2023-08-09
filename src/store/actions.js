export default {
  addItem(context, name) {
    context.commit("addItem", { name, completed: false });
  },

  selectItem(context, payload) {
    context.commit("selectItem", payload);
  },

  unselectItem(context, index) {
    context.commit("unselectItem", index);
  },

  completeSelectedItem(context) {
    context.commit("completeSelectedItem");
  },

  uncompleteSelectedItem(context) {
    context.commit("uncompleteSelectedItem");
  },

  showEditModal(context) {
    context.commit("showEditModal");
  },

  closeEditModal(context) {
    context.commit("closeEditModal");
  },

  setEdit(context, payload) {
    context.commit("setEdit", payload);
  },

  updateName(context, payload) {
    context.commit("updateName", payload);
  },

  deleteSelectedItem(context) {
    context.commit("deleteSelectedItem");
  },
};
