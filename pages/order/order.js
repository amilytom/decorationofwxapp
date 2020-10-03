var form = require("../../utils/form.js");
var app = getApp();
Page({
  data: {
    pre: "",
    picker: "",
    date: "",
    start: new Date(),
    type: "家居",
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      pre: form.data.info.forms.text,
      picker: form.data.info.forms.date,
      radio: form.data.info.forms.radio,
      textarea: form.data.info.forms.textarea,
    });
  },
  bindFormSubmit: function (e) {
    if (!e.detail.value.name) {
      wx.showToast({
        title: "请填写姓名!",
        icon: "none",
      });
      return;
    }
    if (!e.detail.value.phone) {
      wx.showToast({
        title: "请填写手机号!",
        icon: "none",
      });
      return;
    }
    if (!e.detail.value.type) {
      wx.showToast({
        title: "请选择装修项目!",
        icon: "none",
      });
      return;
    }
    if (!e.detail.value.orderDate) {
      wx.showToast({
        title: "请选择预约日期!",
        icon: "none",
      });
      return;
    }

    wx.request({
      url: app.globalData.API_HOST + "/order",
      method: "POST",
      data: e.detail.value,
      success: function (res) {
        wx.showToast({
          title: "提交成功!",
        });
      },
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
    });
  },
});
