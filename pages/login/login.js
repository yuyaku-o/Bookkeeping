// pages/login/login.js
const config = require('./../../config/config.js');
const utils = require('./../../utils/util.js');
const api = require('./../../http/api.js');

Page({
    data: {
        flg_loginbtn: true,
        users: {
            username: '',
            pwd: ''
        }
    },

    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '家庭记账系统-登录',
        })
    },

    /**
     * 监听手机号输入框
     */
    watchUsername: function (e) {
        this.handleWatch({
            e,
            type: 'username'
        });
    },
    /**
     * 监听密码输入框
     */
    watchPwd: function (e) {
        this.handleWatch({
            e,
            type: 'pwd'
        });
    },
    /**
     * 公共监听处理input
     */
    handleWatch: function ({ e, type }) {
        const data = this.data;
        const users = data.users;
        const val = e.detail.value;
        let flg_loginbtn = true;
        let key = '';

        if (type === 'pwd') {
            key = 'username';
        }
        if (type === 'username') {
            key = 'pwd';
        }

        users[type] = val;

        (data.users[key] !== '' && val !== '') ? (flg_loginbtn = false) : (flg_loginbtn = true);

        this.setData({
            users,
            flg_loginbtn
        });
    },
    _login: function (data) {
        api.login(data)
            .then((res) => {
                let user = res[0];
                getApp().globalData.users = user;
                getApp().globalData.isLogin = true;

                wx.switchTab({
                    url: '../home/index',
                })
            })
            .catch((errMsg) => {
                console.log(errMsg);
                wx.showToast({
                    title: errMsg,
                    icon: 'none',
                    duration: 2000
                })
            });
    },
    /**
     * 登录
     */
    handleLogin: function (e) {
        wx.showLoading({
            title: '正在登录...',
        });
        // 获取 token
        getApp().getToken().then(function () {
            console.log('token')
            this._login(this.data.users)
        })
    },
});