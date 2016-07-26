(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Reaginate"] = factory(require("react"));
	else
		root["Reaginate"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/reaginate.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Reaginate = function (_Component) {
	    _inherits(Reaginate, _Component);
	
	    function Reaginate(props) {
	        _classCallCheck(this, Reaginate);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Reaginate).call(this, props));
	    }
	
	    _createClass(Reaginate, [{
	        key: "isFirstPage",
	        value: function isFirstPage() {
	            var currentPage = this.props.currentPage;
	
	            return currentPage === 1;
	        }
	    }, {
	        key: "isLastPage",
	        value: function isLastPage() {
	            var _props = this.props;
	            var currentPage = _props.currentPage;
	            var totalPages = _props.totalPages;
	
	            return currentPage === totalPages;
	        }
	    }, {
	        key: "renderFirstPageButton",
	        value: function renderFirstPageButton() {
	            if (this.isFirstPage()) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement(
	                        "a",
	                        { className: "pager-btn pager-btn-disabled" },
	                        _react2.default.createElement("i", { className: "fa fa-angle-double-left", "aria-hidden": "true" })
	                    )
	                );
	            }
	            var onFirstPage = this.props.onFirstPage;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement(
	                    "a",
	                    { className: "pager-btn", onClick: onFirstPage },
	                    _react2.default.createElement("i", { className: "fa fa-angle-double-left", "aria-hidden": "true" })
	                )
	            );
	        }
	    }, {
	        key: "renderPreviousPageButton",
	        value: function renderPreviousPageButton() {
	            if (this.isFirstPage()) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement(
	                        "a",
	                        { className: "pager-btn pager-btn-disabled" },
	                        _react2.default.createElement("i", { className: "fa fa-angle-left", "aria-hidden": "true" })
	                    )
	                );
	            }
	            var onPreviousPage = this.props.onPreviousPage;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement(
	                    "a",
	                    { className: "pager-btn", onClick: onPreviousPage },
	                    _react2.default.createElement("i", { className: "fa fa-angle-left", "aria-hidden": "true" })
	                )
	            );
	        }
	    }, {
	        key: "renderNextPageButton",
	        value: function renderNextPageButton() {
	            if (this.isLastPage()) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement(
	                        "a",
	                        { className: "pager-btn pager-btn-disabled" },
	                        _react2.default.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })
	                    )
	                );
	            }
	            var onNextPage = this.props.onNextPage;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement(
	                    "a",
	                    { className: "pager-btn", onClick: onNextPage },
	                    _react2.default.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })
	                )
	            );
	        }
	    }, {
	        key: "renderLastPageButton",
	        value: function renderLastPageButton() {
	            if (this.isLastPage()) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement(
	                        "a",
	                        { className: "pager-btn pager-btn-disabled" },
	                        _react2.default.createElement("i", { className: "fa fa-angle-double-right", "aria-hidden": "true" })
	                    )
	                );
	            }
	            var onLastPage = this.props.onLastPage;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement(
	                    "a",
	                    { className: "pager-btn", onClick: onLastPage },
	                    _react2.default.createElement("i", { className: "fa fa-angle-double-right", "aria-hidden": "true" })
	                )
	            );
	        }
	    }, {
	        key: "renderDisplayLabel",
	        value: function renderDisplayLabel() {
	            var displayLabel = this.props.displayLabel;
	
	            if (displayLabel) {
	                return _react2.default.createElement(
	                    "div",
	                    { className: "pager-item pager-item-right" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "pager-text-item" },
	                        displayLabel
	                    )
	                );
	            }
	        }
	    }, {
	        key: "renderTotalPages",
	        value: function renderTotalPages() {
	            var totalPages = this.props.totalPages;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "pager-text-item" },
	                    "of ",
	                    totalPages
	                )
	            );
	        }
	    }, {
	        key: "handleCurrentPageOnEnter",
	        value: function handleCurrentPageOnEnter(event) {
	            if (event.key === 'Enter') {
	                var value = event.target.value;
	                if (!/^\d+$/.test(value)) {
	                    // this.refs.currentPage.value = "1999";
	                }
	            }
	        }
	    }, {
	        key: "renderCurrentPage",
	        value: function renderCurrentPage() {
	            var currentPage = this.props.currentPage;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "pager-item" },
	                _react2.default.createElement("input", { className: "pager-text-box", ref: "currentPage", type: "text", onKeyPress: this.handleCurrentPageOnEnter.bind(this), defaultValue: currentPage })
	            );
	        }
	    }, {
	        key: "renderRefresh",
	        value: function renderRefresh() {
	            var onRefresh = this.props.onRefresh;
	
	            if (onRefresh) {
	                return _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "pager-item" },
	                        _react2.default.createElement("div", { className: "pager-separator" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "pager-item" },
	                        _react2.default.createElement(
	                            "a",
	                            { className: "pager-btn", onClick: onRefresh },
	                            "Refresh"
	                        )
	                    )
	                );
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "pager" },
	                this.renderFirstPageButton(),
	                this.renderPreviousPageButton(),
	                _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement("div", { className: "pager-separator" })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "pager-text-item" },
	                        "Page"
	                    )
	                ),
	                this.renderCurrentPage(),
	                this.renderTotalPages(),
	                _react2.default.createElement(
	                    "div",
	                    { className: "pager-item" },
	                    _react2.default.createElement("div", { className: "pager-separator" })
	                ),
	                this.renderNextPageButton(),
	                this.renderLastPageButton(),
	                this.renderRefresh(),
	                this.renderDisplayLabel()
	            );
	        }
	    }]);
	
	    return Reaginate;
	}(_react.Component);
	
	Reaginate.propTypes = {
	    currentPage: _react.PropTypes.number.isRequired,
	    totalPages: _react.PropTypes.number.isRequired,
	    onRefresh: _react.PropTypes.func,
	    onFirstPage: _react.PropTypes.func.isRequired,
	    onPreviousPage: _react.PropTypes.func.isRequired,
	    onNextPage: _react.PropTypes.func.isRequired,
	    onLastPage: _react.PropTypes.func.isRequired,
	    onPageNumberEnter: _react.PropTypes.func,
	    displayLabel: _react.PropTypes.string
	};
	Reaginate.defaultProps = {
	    onPageNumberEnter: function onPageNumberEnter() {
	        return null;
	    }
	};
	exports.default = Reaginate;

/***/ },
/* 1 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reaginate.js.map