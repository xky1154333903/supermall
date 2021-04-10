<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  computed: {
    //...mapGetters(["cartlist", "cartLength"]),
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 700;
}
</style>
