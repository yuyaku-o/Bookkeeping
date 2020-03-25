Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#FDD835",
    list: [{
      pagePath: "/pages/home/index",
      iconPath: "/images/order.png",
      selectedIconPath: "/images/order_HL.png",
      text: "首页"
    }, {
      pagePath: "/pages/statistics/index",
      iconPath: "/images/statistics.png",
      selectedIconPath: "/images/statistics_HL.png",
      text: "统计"
    },{
      pagePath: "/pages/bookkeeping/index",
      iconPath: "/images/bookkeeping.png",
      selectedIconPath: "/images/bookkeeping_HL.png",
      text: "记帐"
    }, {
      pagePath: "/pages/chart/index",
      iconPath: "/images/chart.png",
      selectedIconPath: "/images/chart_HL.png",
      text: "图表"
    },{
      pagePath: "/pages/person/index",
      iconPath: "/images/me.png",
      selectedIconPath: "/images/me_HL.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})