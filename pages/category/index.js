import { request } from "../../request/index.js";

Page({
  data: {
    // 左侧
    leftList: [],
    // 右侧
    rightList: [],
    // 当前选中标签索引
    currentIndex: 0,
    // 右侧滚动条距离顶部的位置
    scrollTop:0
  },
  // 接口的返回值
  Cates: [],
  
  // 监听页面加载
  onLoad() {
    this.getCategoryList();
  },

  // 获取分类页面接口数据
  getCategoryList() {
    request({ url: "/categories" }).then(result => {
      // 把接口的数据赋值给全局变量
      this.Cates = result;
      const leftList = this.Cates.map(v => ({
        cat_id: v.cat_id,
        cat_name: v.cat_name
      }));
      const rightList = this.Cates[0].children;
      this.setData({
        leftList,
        rightList
      });
    });
  },

  // 左侧菜单点击事件
  handleMenuChange(e) {
    console.log(e,'点击左边菜单栏数据');
    const { index } = e.currentTarget.dataset;
    const rightList = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightList,
      // 控制右侧滚动条的滚动距离
      scrollTop:0
    })
  }
});
