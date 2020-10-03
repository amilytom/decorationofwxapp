var app = getApp();
Page({
  data: {
    artItem: [],
  },
  onLoad: function (options) {
    var id = options.id;
    var name = options.name;
    var that = this;
    wx.request({
      url: app.globalData.API_HOST + "/cate/" + id,
      method: "GET",
      data: { page: 1, rows: 15 },
      success: function (res) {
        that.setData({
          list: res.data.data.list,
          name: name,
        });
      },
    });
  },
  goDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/article/article?id=" + id,
    });
  },
});
