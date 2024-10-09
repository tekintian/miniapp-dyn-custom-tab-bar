// pages/login/login.js
import myStorage from '../../utils/myStorage';
import { myRequest } from '../../utils/myRequest';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "123456"
  },
  doLogin(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // 通过e.detail.value获取表单数据
    let data = e.detail.value;
    // 用户名验证正则 只能是 admin 或者 test
    let reUsername = /^(admin|test)$/
    // 数据验证
    if (!reUsername.test(data.username)) {
      wx.showModal({
        title: '用户名验证未通过',
        content: '用户名只能是admin或者test',
        showCancel: false
      })
      return false
    }

    myRequest("/loginTabDemo",data,(res)=>{
      let tabList=[];
      // 如果当前用户是admin这显示admin的tabBar菜单
      if(data.username=="admin"){
        tabList= res.admin.tabList;
      }else{
        tabList= res.test.tabList;
      }
      // 保存用户的tabList
      myStorage.setItem("tabList",tabList);
      myStorage.setItem("loginName",data.username)

      // 跳转到tab页面 这里的跳转页面也可以从API接口中返回后跳转
      wx.switchTab({
        url: '/pages/index/index',
      })

    });

  },
  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      username: '',
      password:""
    })
  }

})