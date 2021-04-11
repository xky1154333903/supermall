<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :itemInfo="item"
        :key="index"
      >
      </cart-list-item>
    </scroll>
    <cart-button />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/scroll";
import CartListItem from "./CartListItem.vue";
import CartButton from "./CartButton.vue";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
    CartButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style  scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  overflow: hidden;
  height: 100%;
}
</style>
