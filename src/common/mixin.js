import { debounce } from "common/utils.js";
import Scroll from "components/common/scroll/scroll";
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        //1.监听img图片加载完成
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImgListener = () => {
            refresh();
        };
        this.$bus.$on("itemImgLoad", () => {
            this.itemImgListener()
        });
    }
}