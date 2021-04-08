import { debounce } from "common/utils.js";
import Scroll from "components/common/scroll/scroll";
import BackTop from "components/content/backTop/backTop";
import { BACK_POSITION } from "common/const";
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
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > BACK_POSITION
        }
    },
}