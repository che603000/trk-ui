webpackHotUpdate(0,{

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(206);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactOnsenui = __webpack_require__(359);
	
	var _SecondPage = __webpack_require__(363);
	
	var _SecondPage2 = _interopRequireDefault(_SecondPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MainPage = function (_React$Component) {
	  _inherits(MainPage, _React$Component);
	
	  function MainPage() {
	    _classCallCheck(this, MainPage);
	
	    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
	  }
	
	  _createClass(MainPage, [{
	    key: 'pushPage',
	    value: function pushPage() {
	      this.props.navigator.pushPage({ component: _SecondPage2.default });
	    }
	  }, {
	    key: 'renderToolbar',
	    value: function renderToolbar() {
	      return _react2.default.createElement(
	        _reactOnsenui.Toolbar,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'center' },
	          'Navigator !!!'
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactOnsenui.Page,
	        { renderToolbar: this.renderToolbar },
	        _react2.default.createElement(
	          'p',
	          { style: { textAlign: 'center' } },
	          _react2.default.createElement(
	            _reactOnsenui.Button,
	            { onClick: this.pushPage.bind(this) },
	            'Push page'
	          )
	        )
	      );
	    }
	  }]);
	
	  return MainPage;
	}(_react2.default.Component);
	
	var _default = MainPage;
	exports.default = _default;
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(MainPage, 'MainPage', 'E:/projects/trk-ui/src/MainPage.jsx');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'E:/projects/trk-ui/src/MainPage.jsx');
	})();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFpblBhZ2UuanN4PzAzODEiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCJwcm9wcyIsIm5hdmlnYXRvciIsInB1c2hQYWdlIiwiY29tcG9uZW50IiwicmVuZGVyVG9vbGJhciIsInRleHRBbGlnbiIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztLQUVxQkEsUTs7Ozs7Ozs7Ozs7Z0NBQ1I7QUFDVCxZQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLFFBQXJCLENBQThCLEVBQUNDLCtCQUFELEVBQTlCO0FBQ0Q7OztxQ0FFZTtBQUNkLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxRQUFmO0FBQUE7QUFBQTtBQURGLFFBREY7QUFLRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBTSxlQUFlLEtBQUtDLGFBQTFCO0FBQ0U7QUFBQTtBQUFBLGFBQUcsT0FBTyxFQUFDQyxXQUFXLFFBQVosRUFBVjtBQUNFO0FBQUE7QUFBQSxlQUFRLFNBQVMsS0FBS0gsUUFBTCxDQUFjSSxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUE7QUFBQTtBQURGO0FBREYsUUFERjtBQU9EOzs7O0dBckJtQyxnQkFBTUMsUzs7Z0JBQXZCUixROzs7Ozs7Ozs7aUNBQUFBLFEiLCJmaWxlIjoiMC4zMGIzZmI2NDNhMTFjMWI3ZmY1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtUb29sYmFyLCBQYWdlLCBCdXR0b259IGZyb20gJ3JlYWN0LW9uc2VudWknO1xuXG5pbXBvcnQgU2Vjb25kUGFnZSBmcm9tICcuL1NlY29uZFBhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcHVzaFBhZ2UoKSB7XG4gICAgdGhpcy5wcm9wcy5uYXZpZ2F0b3IucHVzaFBhZ2Uoe2NvbXBvbmVudDogU2Vjb25kUGFnZX0pO1xuICB9XG5cbiAgcmVuZGVyVG9vbGJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+TmF2aWdhdG9yICEhITwvZGl2PlxuICAgICAgPC9Ub29sYmFyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIHJlbmRlclRvb2xiYXI9e3RoaXMucmVuZGVyVG9vbGJhcn0+XG4gICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wdXNoUGFnZS5iaW5kKHRoaXMpfT5QdXNoIHBhZ2U8L0J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9NYWluUGFnZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9