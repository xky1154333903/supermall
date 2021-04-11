<template>
  <div class="buttom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="total-price">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartButton",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      let price = 0;
      for (let i in this.$store.state.cartlist) {
        let item = this.$store.state.cartlist[i];
        if (item.checked) {
          price += item.price * item.count;
        }
      }
      return price.toFixed(2);
    },
    checkLength() {
      let length = 0;
      for (let i in this.$store.state.cartlist) {
        let item = this.$store.state.cartlist[i];
        if (item.checked) {
          length += item.count;
        }
      }
      return length;
    },
    isSelectAll() {
      if (this.$store.state.cartlist.length === 0) {
        return false;
      } else {
        return !this.$store.state.cartlist.find((item) => !item.checked);
      }
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartlist.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartlist.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
};
</script>

<style>
.buttom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
  font-size: 16px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  height: 20px;
  width: 22px;
  line-height: 20px;
}
.total-price {
  margin-left: 25px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>