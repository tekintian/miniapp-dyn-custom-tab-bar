// app.js
// import { myRequest } from "./utils/myRequest"
// import myStorage from "./utils/myStorage"
App({
  onLaunch() {
    // wx登录 这个地方是在小程序一打开时就会被执行
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // myRequest('/loginTabDemo',{code:res.code}, (data)=>{
        //   myStorage.setItem("userData",data)
        // })
      }
    })
  },
  globalData: {
    userInfo: null,
    // 默认的tabBar
    tabBarList:[
      {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/images/home.png",
          "selectedIconPath": "/images/home_select.png"
        }
      ]
  }
})
