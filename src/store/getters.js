export default {
  getItemList: (state) => state.itemList,
  getTodoList: (state) => state.itemList.filter((item) => !item.completed),
  getCompletedList: (state) => state.itemList.filter((item) => item.completed),
  getSelectedItemList: (state) => state.selectedItemList,
  getIsShowModal: (state) => state.isShowModal,
  getEditName: (state) => state.edit.editName,
  getEditIndex: (state) => state.edit.editIndex,
};
