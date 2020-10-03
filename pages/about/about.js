var WxParse = require("../../wxParse/wxParse.js");
var app = getApp();
Page({
  data: {
    longitude: {},
    latitude: {},
    markers: [],
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: app.globalData.API_HOST + "/company",
      method: "GET",
      success: function (res) {
        let data = res.data.data;
        WxParse.wxParse("intro", "html", data.intro, that, 5);
        that.setData({
          name: data.name,
          address: data.address,
          tel: data.tel,
          longitude: data.longitude,
          latitude: data.latitude,
          markers: [
            {
              longitude: data.longitude,
              latitude: data.latitude,
              iconPath: "../../../images/map/map.png",
              title: data.name,
              address: data.address,
              alpha: 1,
              width: 40,
              height: 30,
            },
          ],
        });
      },
    });
  },
  bindgothere: function (e) {
    wx.openLocation({
      latitude: Number(this.data.latitude),
      longitude: Number(this.data.longitude),
      name: this.data.name,
      address: this.data.address,
    });
  },
});
