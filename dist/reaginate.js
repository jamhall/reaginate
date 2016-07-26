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

	'use strict';
	
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
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Reaginate).call(this, props));
	
	        _this.state = {
	            currentPage: _this.props.currentPage
	        };
	        return _this;
	    }
	
	    _createClass(Reaginate, [{
	        key: 'isFirstPage',
	        value: function isFirstPage() {
	            var currentPage = this.state.currentPage;
	
	            return currentPage === 1;
	        }
	    }, {
	        key: 'isLastPage',
	        value: function isLastPage() {
	            var currentPage = this.state.currentPage;
	            var totalPages = this.props.totalPages;
	
	            return currentPage === totalPages;
	        }
	    }, {
	        key: 'handleOnPageChange',
	        value: function handleOnPageChange() {
	            var page = this.state.currentPage;
	            if (/^\d+$/.test(page)) {
	                var _props = this.props;
	                var currentPage = _props.currentPage;
	                var totalPages = _props.totalPages;
	
	                var convertedPage = parseInt(page);
	                if (convertedPage >= 1 & convertedPage <= totalPages) {
	                    this.setState({
	                        currentPage: convertedPage
	                    });
	                    this.props.onPageChange(convertedPage);
	                    return;
	                }
	            }
	            this.updateCurrentPage(this.props.currentPage, false);
	        }
	    }, {
	        key: 'handleCurrentPageOnBlur',
	        value: function handleCurrentPageOnBlur() {
	            var currentPage = this.props.currentPage;
	
	            this.updateCurrentPage(currentPage, false);
	        }
	    }, {
	        key: 'updateCurrentPage',
	        value: function updateCurrentPage(page) {
	            var notify = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	            this.setState({
	                currentPage: page
	            });
	            if (notify) {
	                this.props.onPageChange(page);
	            }
	        }
	    }, {
	        key: 'onNextPageClick',
	        value: function onNextPageClick() {
	            var currentPage = this.state.currentPage;
	
	            var newCurrentPage = currentPage + 1;
	            this.updateCurrentPage(newCurrentPage);
	        }
	    }, {
	        key: 'onPreviousPageClick',
	        value: function onPreviousPageClick() {
	            var currentPage = this.state.currentPage;
	
	            var newCurrentPage = currentPage - 1;
	            this.updateCurrentPage(newCurrentPage);
	        }
	    }, {
	        key: 'onFirstPageClick',
	        value: function onFirstPageClick() {
	            this.updateCurrentPage(1);
	        }
	    }, {
	        key: 'onLastPageClick',
	        value: function onLastPageClick() {
	            var totalPages = this.props.totalPages;
	
	            this.updateCurrentPage(totalPages);
	        }
	    }, {
	        key: 'handleCurrentPageOnEnter',
	        value: function handleCurrentPageOnEnter(event) {
	            if (event.key === 'Enter') {
	                this.handleOnPageChange();
	            }
	        }
	    }, {
	        key: 'handleCurrentPageOnChange',
	        value: function handleCurrentPageOnChange(event) {
	            var page = event.target.value;
	            this.updateCurrentPage(page, false);
	        }
	    }, {
	        key: 'renderFirstPageButton',
	        value: function renderFirstPageButton() {
	            if (this.isFirstPage()) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'pager-btn pager-btn-disabled' },
	                        _react2.default.createElement('i', { className: 'fa fa-angle-double-left', 'aria-hidden': 'true' })
	                    )
	                );
	            }
	            var onFirstPage = this.props.onFirstPage;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'pager-btn', onClick: this.onFirstPageClick.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-angle-double-left', 'aria-hidden': 'true' })
	                )
	            );
	        }
	    }, {
	        key: 'renderPreviousPageButton',
	        value: function renderPreviousPageButton() {
	            if (this.isFirstPage()) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'pager-btn pager-btn-disabled' },
	                        _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true' })
	                    )
	                );
	            }
	            var onPreviousPage = this.props.onPreviousPage;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'pager-btn', onClick: this.onPreviousPageClick.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-angle-left', 'aria-hidden': 'true' })
	                )
	            );
	        }
	    }, {
	        key: 'renderNextPageButton',
	        value: function renderNextPageButton() {
	            if (this.isLastPage()) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'pager-btn pager-btn-disabled' },
	                        _react2.default.createElement('i', { className: 'fa fa-angle-right', 'aria-hidden': 'true' })
	                    )
	                );
	            }
	            var onNextPage = this.props.onNextPage;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'pager-btn', onClick: this.onNextPageClick.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-angle-right', 'aria-hidden': 'true' })
	                )
	            );
	        }
	    }, {
	        key: 'renderLastPageButton',
	        value: function renderLastPageButton() {
	            if (this.isLastPage()) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'pager-btn pager-btn-disabled' },
	                        _react2.default.createElement('i', { className: 'fa fa-angle-double-right', 'aria-hidden': 'true' })
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'pager-btn', onClick: this.onLastPageClick.bind(this) },
	                    _react2.default.createElement('i', { className: 'fa fa-angle-double-right', 'aria-hidden': 'true' })
	                )
	            );
	        }
	    }, {
	        key: 'renderDisplayLabel',
	        value: function renderDisplayLabel() {
	            var displayLabel = this.props.displayLabel;
	
	            if (displayLabel) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item pager-item-right' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pager-text-item' },
	                        displayLabel
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'renderTotalPages',
	        value: function renderTotalPages() {
	            var totalPages = this.props.totalPages;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pager-text-item' },
	                    'of ',
	                    totalPages
	                )
	            );
	        }
	    }, {
	        key: 'renderCurrentPage',
	        value: function renderCurrentPage() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager-item' },
	                _react2.default.createElement('input', { className: 'pager-text-box',
	                    ref: 'currentPage',
	                    type: 'text',
	                    onChange: this.handleCurrentPageOnChange.bind(this),
	                    onBlur: this.handleCurrentPageOnBlur.bind(this),
	                    value: this.state.currentPage,
	                    onKeyPress: this.handleCurrentPageOnEnter.bind(this) })
	            );
	        }
	    }, {
	        key: 'renderRefresh',
	        value: function renderRefresh() {
	            var onRefresh = this.props.onRefresh;
	
	            if (onRefresh) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pager-item' },
	                        _react2.default.createElement('div', { className: 'pager-separator' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pager-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'pager-btn', onClick: onRefresh },
	                            'Refresh'
	                        )
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'pager' },
	                this.renderFirstPageButton(),
	                this.renderPreviousPageButton(),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement('div', { className: 'pager-separator' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pager-text-item' },
	                        'Page'
	                    )
	                ),
	                this.renderCurrentPage(),
	                this.renderTotalPages(),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pager-item' },
	                    _react2.default.createElement('div', { className: 'pager-separator' })
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
	    onPageChange: _react.PropTypes.func.isRequired,
	    displayLabel: _react.PropTypes.string
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