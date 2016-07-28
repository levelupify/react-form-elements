'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./styles.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textfield = function (_Component) {
  _inherits(Textfield, _Component);

  function Textfield() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Textfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Textfield)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (ev) {
      var value = ev.target.value;
      _this.props.setValue(value);
      if (_this.props.onChange) _this.props.onChange(value);
    }, _this.handleBlur = function (ev) {
      if (_this.props.onBlur) _this.props.onBlur(ev);
    }, _this.handleClick = function (ev) {
      if (_this.props.onClick) _this.props.onClick(ev);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textfield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.props, {
        value: this.props.value,
        placeholder: this.props.placeholder,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onChange: this.handleChange }));
    }
  }]);

  return Textfield;
}(_react.Component);

exports.default = (0, _formsyReact.HOC)(Textfield);