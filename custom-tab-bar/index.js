import myStorage from "../utils/myStorage"
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: []
  },
  attached() {
    let tabList = myStorage.getItem("tabList");
    // 如果本地存储的tabList获取失败，则使用默认的
    if(!tabList){
      const app = getApp()
      tabList = app.globalData.tabBarList
    }
   // 设置tab列表
    this.setData({
      list: tabList
    })
  },
  methods: {
    // 处理tab切换
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})