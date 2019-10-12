// components/slide-item/slide-item.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    _start: 0,
    _leftTxt: '0px',
    _leftBt: '0px',
    scrollFlag: false
  },
  //按下事件
  _touchstart(e) {
    this.setData({
      _start: e.changedTouches[0].pageX
    })
  },
  //按下结束事件
  _touchend(e) {
    let _end = e.changedTouches[0].pageX;
    if (_end > this.data._start) {
      console.log("右滑");
      if (_end - this.data._start <= 10) {
        console.log("右滑幅度小，不触发事件");
      } else {
        if (this.data.scrollFlag) { //当删除出现时进行复原
          console.log("右滑事件触发,并且进行复原");
          this.setData({
            _leftTxt: "0px",
            _leftBt: "0px"
          })
        }
      }
    } else {
      if (this.data._start - _end <= 10) {
        console.log("左滑幅度小，不触发事件");
      } else {
        console.log("左滑事件触发");
        this.setData({
          _leftTxt: "-80px",
          _leftBt: "80px",
          scrollFlag: true
        })
      }
    }
  },
  shanchu() {
    wx.showToast({
      title: '删除',
      icon: 'success',
      duration: 2000
    })
  }

})