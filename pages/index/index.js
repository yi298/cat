// pages/search/index.js
import { request } from "../../request/index.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navCatetList: [],
    floorData: []
  },

  // 监听页面加载
  onLoad() {
    // 调用轮播图方法接口
    this.getSwiperList();
    this.getNavCatetList();
    this.getFloorData();
  },

  // 轮播图方法接口
  getSwiperList() {
    request({ url: "/home/swiperdata" }).then(
      result => {
        this.setData({
          swiperList: result
        });
      }
    );
  },

  // 获取首页分类菜单数据
  getNavCatetList() {
    request({ url: "/home/catitems" }).then(
      result => {
        this.setData({
          navCatetList: result
        });
      }
    );
  },

  // 获取楼层数据
  getFloorData() {
    request({ url: "/home/floordata" }).then(
      result => {
        this.setData({
          floorData: result
        });
      }
    );
  }
});
