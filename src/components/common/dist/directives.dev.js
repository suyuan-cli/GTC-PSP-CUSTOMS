"use strict";

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// v-dialogDrag: 弹窗拖拽属性
_vue["default"].directive('dialogDrag', {
  bind: function bind(el, binding, vnode, oldVnode) {
    var dialogHeaderEl = el.querySelector('.el-dialog__header');
    var dragDom = el.querySelector('.el-dialog');
    dialogHeaderEl.style.cssText += ';cursor:move;';
    dragDom.style.cssText += ';top:0px;'; // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);

    var sty = function () {
      if (window.document.currentStyle) {
        return function (dom, attr) {
          return dom.currentStyle[attr];
        };
      } else {
        return function (dom, attr) {
          return getComputedStyle(dom, false)[attr];
        };
      }
    }();

    dialogHeaderEl.onmousedown = function (e) {
      // 鼠标按下，计算当前元素距离可视区的距离
      var disX = e.clientX - dialogHeaderEl.offsetLeft;
      var disY = e.clientY - dialogHeaderEl.offsetTop;
      var screenWidth = document.body.clientWidth; // body当前宽度

      var screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取) 

      var dragDomWidth = dragDom.offsetWidth; // 对话框宽度

      var dragDomheight = dragDom.offsetHeight; // 对话框高度

      var minDragDomLeft = dragDom.offsetLeft;
      var maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
      var minDragDomTop = dragDom.offsetTop;
      var maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight; // 获取到的值带px 正则匹配替换

      var styL = sty(dragDom, 'left');
      var styT = sty(dragDom, 'top'); // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px

      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      ;

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离 
        var left = e.clientX - disX;
        var top = e.clientY - disY; // 边界处理

        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        } // 移动当前元素  


        dragDom.style.cssText += ";left:".concat(left + styL, "px;top:").concat(top + styT, "px;");
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});