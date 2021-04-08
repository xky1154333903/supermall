import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    addCart(context, payload) {
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
        } else {
            payload.count = 1
            // context.state.cartlist.push(payload)
            context.commit(ADD_TO_CART, payload)
        }
    }
}