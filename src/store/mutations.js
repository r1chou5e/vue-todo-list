export default {
  addItem(state, item) {
    state.todoList.push(item);
  },

  selectItem(state, payload) {
    state.selectedList.push(payload);
    console.log(state.selectedList);
  },

  unselectItem(state, index) {
    state.selectedList = state.selectedList.filter(
      (item) => item.index !== index
    );
    console.log(state.selectedList);
  },

  completeSelectedItem(state) {
    state.selectedList = state.selectedList.filter(
      (selectedItem) => !selectedItem.completed
    );

    state.selectedList.map((selectedItem) => (selectedItem.completed = true));

    state.completedList = state.completedList.concat(
      state.selectedList.map((item) => {
        const { name, completed } = item;
        return { name, completed };
      })
    );

    state.todoList = state.todoList.filter((todoItem, i) => {
      return !state.selectedList.some(
        (selectedItem) => selectedItem.index === i
      );
    });

    state.selectedList = [];
  },

  uncompleteSelectedItem(state) {
    state.selectedList = state.selectedList.filter(
      (selectedItem) => selectedItem.completed
    );

    state.selectedList.map((selectedItem) => (selectedItem.completed = false));

    state.todoList = state.todoList.concat(
      state.selectedList.map((item) => {
        const { name, completed } = item;
        return { name, completed };
      })
    );

    state.completedList = state.completedList.filter((completedItem, i) => {
      return !state.selectedList.some(
        (selectedItem) => selectedItem.index === i
      );
    });

    state.selectedList = [];
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
    console.log(state, payload);
    if (!payload.completed) {
      state.todoList[payload.index].name = payload.name;
    } else {
      state.completedList[payload.index].name = payload.name;
    }
  },

  deleteSelectedItem(state) {
    state.itemList = state.itemList.filter(
      (item, index) => !state.selectedIndex.includes(index)
    );

    state.selectedIndex = [];
  },
};
