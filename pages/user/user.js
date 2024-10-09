// pages/user/user.js
import {getTabBarIndex} from '../../utils/util'
import myStorage from "../../utils/myStorage";
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBarIdx: 0,
    loginName: ""
  },

  logout() {
    //清理本地缓
    myStorage.clear();
    app.globalData.userInfo={};
   
    // 退出时必须重新加载一下否则新的tabBar不生效
    wx.reLaunch({
      url: '../login/login',
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      tabBarIdx: getTabBarIndex("/pages/user/user"),
      loginName: myStorage.getItem("loginName")
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: this.tabBarIdx //选中效果 当前tabBar页面在list中对应的下标， 
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})