var formObj = {
  status: "1",
  info: {
    pre: {
      id: "6",
      wxappid: "6",
      title: "装修预约",
      intro: "装修给你美丽,美丽因装修不同,一切从装修开始",
      details: "<p>放到了卡斯放四大离开</p>",
      ispay: "0",
      pay_name: "",
      price: "0.00",
      end_value: "1521073970",
      apiece_value: "12",
      today_value: "5",
      sub_value: "55",
      createtime: "0",
      img: "https://wxapi.weiyunyi.com/Uploads/20170715/5969e5c2c9047.jpg",
    },
    forms: {
      text: [
        {
          name: "姓名",
          fieldname: "name",
        },
        {
          name: "手机号",
          fieldname: "phone",
        },
      ],
      radio: [
        {
          name: "装修项目选择",
          fieldname: "type",
          options: [
            {
              name: "type",
              value: "家居",
              checked: true,
            },
            {
              name: "type",
              value: "公司",
            },
            {
              name: "type",
              value: "酒吧",
            },
            {
              name: "type",
              value: "酒店",
            },
            {
              name: "type",
              value: "旅馆",
            },
            {
              name: "type",
              value: "网吧",
            },
            {
              name: "type",
              value: "超市",
            },
            {
              name: "type",
              value: "饭店",
            },
            {
              name: "type",
              value: "银行",
            },
            {
              name: "type",
              value: "政府大楼",
            },
            {
              name: "type",
              value: "健身馆",
            },
            {
              name: "type",
              value: "游泳馆",
            },
          ],
        },
      ],
      textarea: [
        {
          name: "请输入留言",
          fieldname: "message",
        },
      ],
      date: [
        {
          name: "预约日期",
          fieldname: "orderDate",
        },
      ],
    },
  },
};

module.exports = {
  data: formObj,
};
