var model1 = 'https://unpkg.com/live2d-widget-model-miku/assets/miku.model.json';  // 初音未来
var model2 = 'https://unpkg.com/live2d-widget-model-chitose/assets/chitose.model.json';  // 高大男生
var model3 = 'https://unpkg.com/live2d-widget-model-tororo/assets/tororo.model.json';  // 白猫
var model4 = 'https://unpkg.com/live2d-widget-model-unitychan/assets/unitychan.model.json';  // 布娃娃
var model5 = 'https://unpkg.com/live2d-widget-model-tsumiki/assets/tsumiki.model.json'; // 小女孩
var model6 = 'https://unpkg.com/live2d-widget-model-izumi/assets/izumi.model.json';  // 红衣女孩
var model7 = 'https://unpkg.com/live2d-widget-model-z16/assets/z16.model.json';  // 大眼睛女孩



L2Dwidget.init({
  model: {
    jsonPath: model7,
    scale: 1
  },
  display: {
    position: "right",
    width: 150,
    height: 300,
    hOffset: 0,
    vOffset: -20
  },
  mobile: {
    show: true,
    scale: 0.5
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 0.2
  }
});