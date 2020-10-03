var app = getApp();
Page({
  data: {
    type: [],
    list: [],
    caseList: [],
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: app.globalData.API_HOST + "/event",
      method: "GET",
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          list: res.data.data.list,
        });
      },
    });
    wx.request({
      url: app.globalData.API_HOST + "/cate",
      method: "GET",
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          type: res.data.data.list,
        });
      },
    });
    wx.request({
      url: app.globalData.API_HOST + "/case",
      method: "GET",
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          caseList: res.data.data.list,
        });
      },
    });
  },
  onShow() {},
  bindType: function (e) {
    // console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: "/pages/article_list/article_list?id=" + id + "&name=" + name,
    });
  },
  goCase: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/case/case?id=" + id,
    });
  },
});
