export const request = params => {
  // 设置基准路径
  const baseUrl="https://api.zbztb.cn/api/public/v1"
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success: result => {
        resolve(result.data.message);
      },
      fail: err => {
        reject(err);
      }
    });
  });
};
