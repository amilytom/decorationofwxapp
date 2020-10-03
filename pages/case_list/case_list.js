var app = getApp();
Page({
  data: {
    list: [],
    articleTwo: [],
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: app.globalData.API_HOST + "/case",
      method: "GET",
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          list: res.data.data.list,
        });
      },
    });

    // wx.request({
    //   url: con.hospital_gettype,
    //   method: 'GET',
    //   data: { wxappid: con.wyy_user_wxappid },
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   success: function (res) {
    //     // console.log(res.data.info);
    //     that.setData({
    //       type: res.data.info
    //     })
    //   }

    // });
  },
  toDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/case/case?id=" + id,
    });
  },
});
