<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"> </detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

import Scroll from "components/common/scroll/scroll";

export default {
  name: "Detail",
  components: {
    DetailBaseInfo,
    DetailSwiper,
    DetailNavBar,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },

  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      // this.getThemeTopY();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
.content {
  height: calc(100% - 44px);
}
</style>
