const { default: myStorage } = require("./myStorage")

// 根据tabBar的名称获取tab的索引，如果name不存在则返回 0
const getTabBarIndex = name => {
  let index = 0;
  let tabList = myStorage.getItem("tabList");
  if (tabList instanceof Array) {
    // for循环
    for (let idx = 0; idx < tabList.length; idx++) {
      const item = tabList[idx];
      if (item.pagePath == name) {
        index = idx;
        break;
      }
    }
  }
  return index
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  getTabBarIndex
}
