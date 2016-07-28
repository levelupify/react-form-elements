'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./styles.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _formsyReact = require('formsy-react');

var _reactFontAwesome = require('react-font-awesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchableDropdown = function (_Component) {
  _inherits(SearchableDropdown, _Component);

  function SearchableDropdown(props) {
    _classCallCheck(this, SearchableDropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchableDropdown).call(this, props));

    _this.state = {
      open: false,
      filter: null,
      dropdownIndex: null,
      closedByBlur: false
    };

    _this.handleInputClick = function () {
      if (!_this.state.open) {
        _this.setState({ open: true, closedByBlur: false, filter: null, dropdownIndex: null });
      }
    };

    _this.handleToggleClick = function () {
      if (!_this.state.open && !_this.state.closedByBlur) {
        _this.setState({ open: true, closedByBlur: false, filter: null, dropdownIndex: null }, function () {
          _this.refs.input.focus();
        });
      }
    };

    _this.handleBlur = function (ev) {
      _this.setState({ closedByBlur: true }, function () {
        setTimeout(function () {
          _this.setState({ open: false, filter: null, dropdownIndex: null });
          if (_this.props.onBlur) _this.props.onBlur(ev);
          setTimeout(function () {
            _this.setState({ closedByBlur: false });
          }, 200);
        }, 10);
      });
    };

    _this.handleChange = function (ev) {
      var value = ev.target.value;
      // this.props.setValue(value);
      _this.setState({ filter: value, open: true, dropdownIndex: 0 });
      if (_this.props.onChange) _this.props.onChange(value, _this.props.dataSource);
    };

    _this.handleItemClick = function (item, ev) {
      _this.selectItem(item);
      ev.preventDefault();
    };

    _this.selectItem = function (item, closedByBlur, callback) {
      // eslint-disable-line no-unused-vars
      if (typeof closedByBlur === 'function') {
        callback = closedByBlur;
        closedByBlur = false;
      }
      _this.setState({ open: false, closedByBlur: closedByBlur, filter: null, dropdownIndex: null }, function () {
        _this.props.setValue(item.value);
        if (_this.props.onSelect) _this.props.onSelect(item);
        if (typeof callback === 'function') {
          callback();
        }
      });
    };

    _this.filter = function (dataSource) {
      if (_this.state.filter) {
        var _ret = function () {
          var re = new RegExp(_this.state.filter, 'i');
          return {
            v: dataSource.filter(function (i) {
              return re.test(i.text);
            })
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } else {
        return dataSource;
      }
    };

    _this.handleKeyDown = function (ev) {
      var key = (0, _keycode2.default)(ev);
      var items = void 0;
      if (key === 'enter') {
        items = _this.filter(_this.props.dataSource);
        var item = items[_this.state.dropdownIndex];
        _this.selectItem(item);
        ev.preventDefault();
      } else if (key === 'up') {
        if (_this.state.dropdownIndex) {
          _this.setState({ dropdownIndex: _this.state.dropdownIndex - 1, open: true });
        }
        ev.preventDefault();
      } else if (key === 'down') {
        items = _this.filter(_this.props.dataSource);
        var newIndex = _this.state.dropdownIndex === null ? 0 : _this.state.dropdownIndex + 1;
        if (_this.state.dropdownIndex === null || _this.state.dropdownIndex < items.length - 1) {
          _this.setState({ dropdownIndex: newIndex, open: true });
        }
        ev.preventDefault();
      } else if (key === 'esc') {
        _this.refs.input.blur();
        ev.preventDefault();
      }
      if (_this.props.onKeyDown) _this.props.onKeyDown(ev, ev.currentTarget.value);
    };

    return _this;
  }

  _createClass(SearchableDropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setValue(this.props.defaultValue || this.props.value || '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        filter: null,
        dropdownIndex: null
      });
    }

    // XXX: This is run before the blur logic, since blur has a timeout, but the blur is REGISTERED, 
    // so it will still fire later, thereby always closing it even if it was opened here

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dropdownItems = this.filter(this.props.dataSource).map(function (item, i) {
        var classes = _this2.state.dropdownIndex === i ? 'active' : '';
        return _react2.default.createElement(
          'div',
          { className: classes, key: i, onClick: _this2.handleItemClick.bind(_this2, item) },
          item.text
        );
      });

      var classes = 'lvlp-searchable-dropdown';
      if (this.state.open) {
        classes += ' open';
      }

      var currentItem = this.props.dataSource.find(function (s) {
        return s.value === _this2.props.getValue();
      });
      var title = this.state.filter === null ? currentItem ? currentItem.text : '' : this.state.filter;

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: 'input-container' },
          _react2.default.createElement('input', { ref: 'input',
            type: 'text',
            value: title,
            placeholder: this.props.placeholder,
            onBlur: this.handleBlur,
            onClick: this.handleInputClick,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange }),
          _react2.default.createElement(
            'span',
            { onClick: this.handleToggleClick },
            _react2.default.createElement(_reactFontAwesome.Icon, { type: 'angle-down', fixedWidth: true })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'dropdown' },
          dropdownItems
        )
      );
    }
  }]);

  return SearchableDropdown;
}(_react.Component);

exports.default = (0, _formsyReact.HOC)(SearchableDropdown);