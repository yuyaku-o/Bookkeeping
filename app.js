//app.js
var utils = require('./utils/util.js');
var config = require('./config/config.js');
App({
    globalData: {
        text: '1111',
        users: {
            username: '18921483103',
            pwd: '',
            nickname: '小熊熊',
            avatarUrl: '',
        },
        c_out: [{
            text: '餐饮',
            icon: '../../images/main/zc_1.svg'
        },
        {
            text: '交通',
            icon: '../../images/main/zc_2.svg'
        },
        {
            text: '住房',
            icon: '../../images/main/zc_3.svg'
        },
        {
            text: '美容',
            icon: '../../images/main/zc_4.svg'
        },
        {
            text: '服饰',
            icon: '../../images/main/zc_5.svg'
        },
        {
            text: '运动',
            icon: '../../images/main/zc_6.svg'
        },
        {
            text: '旅游',
            icon: '../../images/main/zc_7.svg'
        },
        {
            text: '娱乐',
            icon: '../../images/main/zc_8.svg'
        },
        {
            text: '生活',
            icon: '../../images/main/zc_9.svg'
        },
        {
            text: '医疗',
            icon: '../../images/main/zc_10.svg'
        },
        {
            text: '通讯',
            icon: '../../images/main/zc_11.svg'
        },
        {
            text: '学习',
            icon: '../../images/main/zc_12.svg'
        },
        {
            text: '礼物',
            icon: '../../images/main/zc_13.svg'
        },
        {
            text: '母婴',
            icon: '../../images/main/zc_14.svg'
        },
        {
            text: '数码',
            icon: '../../images/main/zc_15.svg'
        },
        {
            text: '零食',
            icon: '../../images/main/zc_16.svg'
        },
        {
            text: '购物',
            icon: '../../images/main/zc_17.svg'
        },
        {
            text: '其它',
            icon: '../../images/main/zc_18.svg'
        }
        ],
        c_in: [{
            text: '工资',
            icon: '../../images/main/sr_1.svg'
        },
        {
            text: '兼职',
            icon: '../../images/main/sr_2.svg'
        },
        {
            text: '礼金',
            icon: '../../images/main/sr_3.svg'
        },
        {
            text: '奖金',
            icon: '../../images/main/sr_4.svg'
        },
        {
            text: '其它',
            icon: '../../images/main/sr_5.svg'
        }
        ]
    },
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    getToken() {
        return new Promise((resolve, reject) => {
            // 登录
            wx.login({
                success: res => {
                    console.log('code:' + res.code)
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    if (res.code) {
                        //发送res.code 到后台
                        wx.request({
                            url: 'http://' + config.host + '/api/users/code',
                            method: 'POST',
                            data: {
                                code: res.code
                            },
                            success(res) {
                                //成功返回数据后，将token值存储到localStorage中
                                wx.setStorage({
                                    key: 'yerlLocalToken',
                                    data: res.data.token
                                });
                                var resArg = res.data.token;
                                resolve()
                            },
                            fail() {
                                reject();
                            }
                        })
                    } else {
                        wx.showToast({
                            title: '获取用户登录态失败！' + res.errMsg,
                        })
                    }
                },
                fail: err => {
                    wx.showToast({
                        title: '启用wx.login函数，失败！',
                    })
                },
                complete: com => {
                    wx.showToast({
                        title: '已启用wx.login函数',
                    })
                }
            })
        })
    }
})
