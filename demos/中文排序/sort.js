;(function($) {
  var Arrange = function(ele, options) {
    var list = ele.find("li.arrangeLi"); //获取容器下的li集合

    this.dft = { //缺省值
      "titleFontColor": "#fff",
      "titleBgColor": "#adadad",
      "conFontColor": "#000",
      "conBgColor": "#fff",
      "conBgColorHover": "#c2c2c2"
    };
    this.obj = $.extend("", this.dft, options);
    this.obj.str = this.getStr(list);

    //判断首字母数组
    var pinYin = this.executive(this.obj.str); //    得到一串首字母数组
    var arry = [];
    for (var i = 0; i < pinYin.length; i++) {
      arry[i] = pinYin[i];
    }
    var temp;
    var arrangeLi = "";
    for (var i = 0; i < pinYin.length - 1; i++) { //将出现的字符按ascii顺序由小到大存进数组
      for (var j = 0; j < pinYin.length - 1 - i; j++) {
        if (pinYin[j] > pinYin[j + 1]) {
          temp = pinYin[j];
          pinYin[j] = pinYin[j + 1];
          pinYin[j + 1] = temp;
        }
      }
    };
    for (var i = 0; i < pinYin.length; i++) { //生成拥有的字符
      if (pinYin[i] != pinYin[i - 1]) {
        arrangeLi += "<li class='arrangeTitle " + pinYin[i] + "'><b>" + pinYin[i] + "</b></li>";
      }
    };
    ele.html(arrangeLi);
    for (var i = 0; i < this.obj.str.length; i++) { //将各字段放进相应的字符区间
      var li = "<li class='arrangeCon'>" + this.obj.str[i] + "</li>";
      ele.find("." + arry[i] + "").after(li);
    };

    this.setCss(this.obj);
  }
  Arrange.prototype = {
    setCss: function(obj) { //设置样式
      $(".arrangeTitle").css({
        "color": obj.titleFontColor,
        "backgroundColor": obj.titleBgColor
      });
      $(".arrangeCon").css({
        "color": obj.conFontColor,
        "backgroundColor": obj.conBgColor
      });
      $(".arrangeCon").hover(
        function() {
          $(this).css({
            "backgroundColor": obj.conBgColorHover
          });
        },
        function() {
          $(this).css({
            "backgroundColor": obj.conBgColor
          });
        }
      );
    },
    executive: function(str) { //得到一串首字母数组
      var isEnglishOrNum = /^[A-Za-z0-9]+$/; //正则验算是否英文字母或数字
      var arr = []; //存储各字符串首字母
      var j = 0;
      for (var i = 0; i < str.length; i++) {
        if (Object.prototype.toString.call(str[i]) === "[object String]") { //判断是否为字符串
          var sing = str[i].substring(0, 1); //截取字符串首个字符
          var ch = str[i].charCodeAt(0); //获取字符对应Unicode编码值
          if (isEnglishOrNum.test(sing)) { //判断是否为英文字母或数字
            arr[j++] = sing.toUpperCase(); //是则将字符赋值给数组
          } else {

            if (ch < 40869 && ch >= 19968) { //判断字符编码值在19968到40869之间
              arr[j++] = strChineseFirstPY.charAt(ch - 19968); //获取对应表中的字母并赋值到数组        
            } else {
              alert("字符串首字母仅支持字母和数字");
              return false;
            }
          }
        } else {
          alert("请检查您输入的字符串数组是否有误");
          return false;
        }
      }
      return arr;
    },
    getStr: function(obj) { //获取当前对象下数组串
      var str = [];
      obj.each(function() {
        str.push($(this).text());
      })
      return str;
    }

  }
  $.fn.sort = function(options) {
    this.each(function() {
      var arr = new Arrange($(this), options);
    })

  }
})(jQuery);