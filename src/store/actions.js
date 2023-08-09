export default {
  addItem(context, name) {
    context.commit("addItem", { name, completed: false });
  },

  selectItem(context, index) {
    context.commit("selectItem", index);
  },

  unselectItem(context, index) {
    context.commit("unselectItem", index);
  },

  completeSelectedItem(context) {
    context.commit("completeSelectedItem");
  },

  unselectAllItem(context) {
    context.commit("unselectAllItem");
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
