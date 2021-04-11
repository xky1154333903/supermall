import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // let oldProduct = null;
            // for (let itme of state.cartlist) {
            //   if (itme.iid === payload.iid) {
            //     oldProduct = item
            //   }
            // }

            let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
            if (oldProduct) {
                // oldProduct.count += 1
                context.commit(ADD_COUNTER, oldProduct)
                resolve('当前的商品数量+1')
            } else {
                payload.count = 1
                // context.state.cartlist.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('添加一个新商品')
            }
        })
    }
}