
const baseUrl="http://rap2api.taobao.org/app/mock/320908"
const myRequest = (url, data, callback) => {
  wx.request({
    url: baseUrl+url, //仅为示例，并非真实的接口地址
    data: data??{},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) {
      console.log(res.data)
      if( typeof callback === "function" ){
        callback(res.data);
      }
    }
  })
}

module.exports = {
  myRequest
}

