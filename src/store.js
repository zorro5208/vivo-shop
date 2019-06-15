import Vue from 'vue'
import Vuex from 'vuex'
import {
    MessageBox
} from 'mint-ui';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isShowHeader: true,
        isShowFooter: true,
        isTitle: 'vivo',
        checkedCartData: {},
        cartData: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
        //缓存中有商品总价就读取,否则设置初始值为：0
        priceTotal: localStorage.priceTotal != undefined ? localStorage.priceTotal : 0,
        isLogin: 0,
        token: '',
        status: 0
    },
    mutations: {
        setCart(state, data) {
            // console.log(data)
            state.cartData = localStorage.carts != undefined ? JSON.parse(localStorage.carts) : [];
            state.priceTotal = parseFloat(localStorage.priceTotal).toFixed(2);
            if (data.id != '' && data.id > 0) {
                let existGid = false,
                    priceTotal = 0
                for (let i = 0; i < state.cartData.length; i++) {
                    //如果购物车商品有重复修改数量和价格
                    if (data.id == state.cartData[i].id) {
                        state.cartData[i].value++;
                        state.cartData[i].price++;
                        existGid = true;
                        break;
                    }
                }
                //增加购物车商品
                if (existGid == false) {
                    state.cartData.push(data);
                }
                //计算总价
                for (let i = 0; i < state.cartData.length; i++) {
                    priceTotal += (state.cartData[i].price * state.cartData[i].value);
                }
                state.priceTotal = priceTotal.toFixed(2);
                localStorage.carts = JSON.stringify(state.cartData);
                localStorage.priceTotal = priceTotal.toFixed(2);
            }
        },
        //数量加
        add(state, index) {
            console.log(state.cartData)
            state.cartData[index].value++
        },
        //数量减
        reduce(state, index) {
            state.cartData[index].value == 1 ? state.cartData[index].value = 1 : state.cartData[index].value--
        },
        //购物车删除
        shanchu: (state, index) => {
            MessageBox.confirm('确定删除该商品么？').then(action => {
                state.cartData.splice(index, 1)
                localStorage.setItem("carts", JSON.stringify(state.cartData));
                state.isShowFooter = true
            })
        },
        settlement: (state, data) => {
            state.cartData = [];
            localStorage.setItem("carts", JSON.stringify(state.cartData));
        },
        // 登录状态
        changeLogin(state, status) {
            state.isLogin = status
            localStorage.setItem('isLogin', status)
        },
        // 登录账号
        getToken(state, status) {
            state.token = status
            localStorage.setItem('token', status)
        },
    },

})