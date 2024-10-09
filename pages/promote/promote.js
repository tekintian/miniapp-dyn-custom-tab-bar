// pages/promote/promote.js
import {getTabBarIndex} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBarIdx: 1 // 默认当前的tabBar索引
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取当前tabBar页面在list中对应的下标
    this.tabBarIdx = getTabBarIndex("/pages/promote/promote");

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
        selected: this.tabBarIdx // 选中效果 当前tabBar页面在list中对应的下标， 
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