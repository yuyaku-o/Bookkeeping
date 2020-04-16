const api = require('../../http/api')

Page({
  data: {
    todaymoney: '1000',
    in: '0',
    out: '0',
    list: [
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/gift.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/cloths.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/dailyNecessities.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/electronic.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/food.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/office.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/shop.png'
      },
      {
        price: '10.00',
        title: '11111',
        desc: '2019-10-20 15:53',
        thumb: '/images/home/towel.png'
      }
    ]
  },
  onShow: function () {
    api.login({"userid":3,"username":"user2","password":"123","createtime":"158767525"}).then((res) => {
      // this.data.todaymoney = res[0].userid
    })
  }
})
