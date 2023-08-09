export default {
  addItem(state, item) {
    state.itemList.push(item);
  },

  selectItem(state, index) {
    state.selectedIndex.push(index);
  },

  unselectItem(state, index) {
    state.selectedIndex = state.selectedIndex.filter((item) => item !== index);
  },

  completeSelectedItem(state) {
    for (let i = 0; i < state.itemList.length; i++) {
      state.selectedIndex.forEach((element) => {
        if (element === i) {
          state.itemList[i].completed = true;
        }
      });
    }
  },

  unselectAllItem(state) {
    state.selectedIndex = [];
  },

  showEditModal(state) {
    state.isShowModal = true;
  },

  closeEditModal(state) {
    state.isShowModal = false;
  },

  setEdit(state, payload) {
    state.edit = payload;
  },

  updateName(state, payload) {
    state.itemList[payload.index].name = payload.name;
  },

  deleteSelectedItem(state) {
    state.itemList = state.itemList.filter(
      (item, index) => !state.selectedIndex.includes(index)
    );

    state.selectedIndex = [];
  },
};
