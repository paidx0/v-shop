import mockjs from 'mockjs';

// todo 使用mockjs来模拟生成随机数据

const Mock = {
    // 模拟订单数据
    // 订单类型 0为普通订单 1为秒杀订单
    getOrder(type) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': type == 0 ? '普通商品' : "秒杀商品" + i,
                'price': mockjs.Random.integer(20, 500) + '元',
                'buyer': mockjs.Random.cname(),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'role': mockjs.Random.boolean(),
                'state': mockjs.Random.boolean(),
                'payType': mockjs.Random.boolean(),
                'source': mockjs.Random.url(),
                'phone': mockjs.mock(/\d{11}/)
            }))
        }
        return array;
    },
    // 模拟获取商品数据
    // type: 商品类型 1为普通订单 2为秒杀订单 3为今日推荐
    getGoods(type) {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': (type == 0 ? '普通商品 ' : type == 1 ? "秒杀商品" : "今日推荐") + i,
                'img': mockjs.Random.dataImage('80x100', '商品示例图'),
                'price': mockjs.Random.integer(20, 500) + '元',
                'sellCount': mockjs.Random.integer(10, 100),
                'count': mockjs.Random.integer(10, 100),
                'back': mockjs.Random.integer(10, 100),
                'backPrice': mockjs.Random.integer(0, 5000) + '元',
                'owner': mockjs.Random.cname(),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'state': mockjs.Random.boolean()
            }))
        }
        return array;
    },
    // 模拟店长列表
    getManagerList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'people': `${mockjs.Random.province()}-${mockjs.Random.city()}-${mockjs.Random.county()}-${mockjs.Random.cname()}`,
                'weixin': mockjs.Random.string(7, 10),
                'state': mockjs.Random.boolean(),
                'income': mockjs.Random.integer(0, 500000) + '元',
                'back': mockjs.Random.integer(0, 1000) + '元',
                'backPrice': mockjs.Random.integer(0, 5000) + '元',
                'source': mockjs.Random.boolean(),
                'customer': mockjs.Random.integer(0, 50),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    // 模拟店长申请列表
    getManagerReqList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'people': `${mockjs.Random.province()}-${mockjs.Random.city()}-${mockjs.Random.county()}-${mockjs.Random.cname()}`,
                'state': mockjs.Random.boolean(),
                'reqTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    // 模拟店长订单
    getManagerOrder() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'state': '店长订单',
                'name': mockjs.Random.csentence(4),
                'id': mockjs.Random.string(11),
                'manager': `${mockjs.Random.province()}-${mockjs.Random.city()}-${mockjs.Random.county()}-${mockjs.Random.cname()}`,
                'count': mockjs.Random.integer(20, 500),
                'price': mockjs.Random.integer(20000, 50000000) + '元',
                'coin': mockjs.Random.integer(2000, 50000) + '元',
                'payTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'sendTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array;
    },
    // 模拟效率数据
    getChartsData() {
        let array = [];
        for (let i = 0; i < 6; i++) {
            array.push(mockjs.Random.integer(0, 1000))
        }
        return array;
    },
    // 模拟交易额
    getTradeData() {
        return mockjs.mock({
            'allTra': mockjs.Random.integer(10000, 50000),
            'speTra': mockjs.Random.integer(0, 5000),
            'norTra': mockjs.Random.integer(0, 5000),
            'userCount': mockjs.Random.integer(0, 1000),
            'managerCount': mockjs.Random.integer(0, 1000),
            'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        })
    },
    // 模拟财务数据
    getTradeInfo() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': mockjs.Random.csentence(4),
                'id': mockjs.Random.string(11),
                'user': `${mockjs.Random.province()}-${mockjs.Random.city()}-${mockjs.Random.county()}-${mockjs.Random.cname()}`,
                'payType': mockjs.Random.boolean() ? '网络支付' : '线下支付',
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    // 模拟财务账单
    getTradeList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'info': mockjs.Random.csentence(),
                'income': mockjs.Random.integer(0, 5000) + '元',
                'expend': mockjs.Random.integer(0, 5000) + '元',
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
}

export default Mock;