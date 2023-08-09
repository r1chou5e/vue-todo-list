<template>
  <div class="list-item">
    <span>
      <input type="checkbox" v-model="isSelected" class="item-checkbox" />
      {{ itemText + " - " + itemIndex }}
    </span>
    <span class="edit-icon" @click="showEditModal">
      <i class="fa-solid fa-pencil"></i>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    itemText: String,
    itemCompleted: Boolean,
    itemIndex: Int16Array,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  computed: {
    ...mapGetters(["getItemList"]),
    itemList() {
      return this.getItemList;
    },
  },
  watch: {
    isSelected(checked) {
      if (checked) {
        this.$store.dispatch("selectItem", this.itemIndex);
      } else {
        this.$store.dispatch("unselectItem", this.itemIndex);
      }
      console.log(this.$store.state.selectedIndex);
    },
    itemList() {
      console.log(this.itemText);
    },
  },
  methods: {
    uncheckCheckbox() {
      this.isSelected = false;
    },

    showEditModal() {
      this.$store.dispatch("setEdit", {
        editName: this.itemText,
        editIndex: this.itemIndex,
      });
      this.$store.dispatch("showEditModal");
      console.log(this.$store.state.edit);
    },
  },
};
</script>

<style>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-icon {
  cursor: pointer;
  font-size: 15px;
  color: #337ab7; /* Màu xanh cho liên kết thường */
}

.item-checkbox {
  margin-right: 10px; /* Khoảng cách giữa checkbox và văn bản */
}
</style>
