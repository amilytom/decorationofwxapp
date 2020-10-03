var WxParse = require("../../wxParse/wxParse.js");
var app = getApp();
Page({
  data: {
    title: "",
    img: "",
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: app.globalData.API_HOST + "/case/" + id,
      success: function (res) {
        WxParse.wxParse("article", "html", res.data.data.content, that, 0);
        that.setData({
          title: res.data.data.name,
          img: res.data.data.img,
        });
      },
    });
  },
});
