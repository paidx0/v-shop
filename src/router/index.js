import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";
import login from "@/components/login/Login.vue";
import home from "@/components/home/Home.vue";
import Order from "@/components/order/Order.vue";
import addGood from "@/components/goods/AddGood.vue";
import goods from "@/components/goods/Goods.vue";
import goodCategory from "@/components/goods/GoodCategory.vue";
import managerList from "@/components/shopmanager/ManagerList.vue";
import managerReqList from "@/components/shopmanager/ManagerReqList.vue";
import managerOrder from "@/components/shopmanager/ManagerOrder.vue";
import dataCom from "@/components/data/DataCom.vue";
import tradeInfo from "@/components/financial/TradeInfo.vue";
import tradeList from "@/components/financial/TradeList.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        children: [
            {
                // 0是普通订单 1是秒杀订单
                path: 'order/:type',
                component: Order,
                name: "order"
            },
            {
                // 0是普通商品 1是秒杀商品 2是每日推荐
                path: 'goods/:type',
                component: goods,
                name: "Goods"
            },
            {
                path: 'addGood/:type',
                component: addGood,
                name: "AddGood"
            },
            {
                path: 'category',
                component: goodCategory,
                name: 'GoodCategory'
            },
            {
                path: 'managerList',
                component: managerList,
                name: 'ManagerList'

            },
            {
                path: 'managerReqList',
                component: managerReqList,
                name: 'ManagerReqList'

            },
            {
                path: 'managerOrder',
                component: managerOrder,
                name: 'ManagerOrder'
            },
            {
                path:'data',
                component:dataCom,
                name:'DataCom'
            },
            {
                path:'tradeInfo',
                component:tradeInfo,
                name:'TradeInfo'
            },
            {
                path:'tradeList',
                component:tradeList,
                name:'TradeList'
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((from) => {
    let isLogin = store.getters.isLogin
    if (isLogin || from.name == "login") {
        return true
    }
    return {name: "login"}
})

export default router
