var WxParse = require("../../wxParse/wxParse.js");
var app = getApp();
Page({
  data: {
    title: "",
    cover: "",
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: app.globalData.API_HOST + "/article/" + id,
      success: function (res) {
        WxParse.wxParse("article", "html", res.data.data.content, that, 5);
        that.setData({
          title: res.data.data.title,
          cover: res.data.data.cover,
        });
      },
    });
  },
});
