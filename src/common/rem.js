// @basefont 设为32px
// 20 640/32=20
export default  function () {
    // 基于设计图是宽度750px （网易的移动端解决方案）
    var deviceWidth = document.body.clientWidth;
    if(deviceWidth > 750) {
        deviceWidth = 750;
    }
    document.documentElement.style.fontSize = deviceWidth/7.5  + 'px';
}
