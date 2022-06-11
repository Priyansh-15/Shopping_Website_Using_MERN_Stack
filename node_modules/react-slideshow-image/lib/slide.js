"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _tween = _interopRequireDefault(require("@tweenjs/tween.js"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _props = require("./props");

var _helpers = require("./helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Slideshow =
/*#__PURE__*/
function (_Component) {
  _inherits(Slideshow, _Component);

  function Slideshow(props) {
    var _this;

    _classCallCheck(this, Slideshow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slideshow).call(this));
    _this.state = {
      slidesToShow: props.slidesToShow || 1,
      index: props.defaultIndex && props.defaultIndex < props.children.length ? props.defaultIndex : 0
    };
    _this.width = 0;
    _this.dragging = false;
    _this.imageContainer = null;
    _this.wrapper = null;
    _this.timeout = null;
    _this.moveSlides = _this.moveSlides.bind(_assertThisInitialized(_this));
    _this.pauseSlides = _this.pauseSlides.bind(_assertThisInitialized(_this));
    _this.startSlides = _this.startSlides.bind(_assertThisInitialized(_this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.initResizeObserver = _this.initResizeObserver.bind(_assertThisInitialized(_this));
    _this.reactSlideshowWrapper = (0, _react.createRef)();
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized(_this));
    _this.tweenGroup = new _tween["default"].Group();
    _this.startSwipe = _this.startSwipe.bind(_assertThisInitialized(_this));
    _this.endSwipe = _this.endSwipe.bind(_assertThisInitialized(_this));
    _this.swipe = _this.swipe.bind(_assertThisInitialized(_this));
    _this.distanceSwiped = 0;
    return _this;
  }

  _createClass(Slideshow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setWidth();
      this.initResizeObserver();
      (0, _props.validatePropTypes)(this.props);

      var _getProps = (0, _props.getProps)(this.props),
          autoplay = _getProps.autoplay,
          duration = _getProps.duration;

      if (autoplay) {
        this.timeout = setTimeout(function () {
          return _this2.goNext();
        }, duration);
      }
    }
  }, {
    key: "initResizeObserver",
    value: function initResizeObserver() {
      var _this3 = this;

      this.resizeObserver = new _resizeObserverPolyfill["default"](function (entries) {
        if (!entries) return;

        _this3.handleResize();
      });

      if (this.reactSlideshowWrapper.current) {
        this.resizeObserver.observe(this.reactSlideshowWrapper.current);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.willUnmount = true;
      clearTimeout(this.timeout);
      this.removeResizeObserver();
    }
  }, {
    key: "startSwipe",
    value: function startSwipe(e) {
      var _getProps2 = (0, _props.getProps)(this.props),
          canSwipe = _getProps2.canSwipe;

      if (canSwipe) {
        this.startingClientX = e.touches ? e.touches[0].pageX : e.clientX;
        clearTimeout(this.timeout);
        this.dragging = true;
      }
    }
  }, {
    key: "endSwipe",
    value: function endSwipe() {
      var _getProps3 = (0, _props.getProps)(this.props),
          canSwipe = _getProps3.canSwipe;

      if (canSwipe) {
        this.dragging = false;

        if (Math.abs(this.distanceSwiped) / this.width > 0.2) {
          if (this.distanceSwiped < 0) {
            this.goNext();
          } else {
            this.goBack();
          }
        } else {
          if (Math.abs(this.distanceSwiped) > 0) {
            this.slideImages(this.state.index, 300);
          }
        }
      }
    }
  }, {
    key: "swipe",
    value: function swipe(e) {
      var _getProps4 = (0, _props.getProps)(this.props),
          canSwipe = _getProps4.canSwipe,
          slidesToShow = _getProps4.slidesToShow,
          children = _getProps4.children,
          infinite = _getProps4.infinite,
          slidesToScroll = _getProps4.slidesToScroll;

      if (canSwipe) {
        var clientX = e.touches ? e.touches[0].pageX : e.clientX;

        if (this.dragging) {
          var translateValue = this.width * (this.state.index + this.getOffset(infinite, slidesToShow));
          var distance = clientX - this.startingClientX;

          if (!infinite && this.state.index === children.length - slidesToScroll && distance < 0) {
            // if it is the last and infinite is false and you're swiping left
            // then nothing happens
            return;
          }

          if (!infinite && this.state.index === 0 && distance > 0) {
            // if it is the first and infinite is false and you're swiping right
            // then nothing happens
            return;
          }

          this.distanceSwiped = distance;
          translateValue -= this.distanceSwiped;
          this.imageContainer.style.transform = "translate(-".concat(translateValue, "px)");
        }
      }
    }
  }, {
    key: "removeResizeObserver",
    value: function removeResizeObserver() {
      if (this.resizeObserver && this.reactSlideshowWrapper && this.reactSlideshowWrapper.current) {
        this.resizeObserver.unobserve(this.reactSlideshowWrapper.current);
      }
    }
  }, {
    key: "setWidth",
    value: function setWidth() {
      // the .slice.call was needed to support ie11
      this.allImages = this.wrapper && Array.prototype.slice.call(this.wrapper.querySelectorAll(".images-wrap > div"), 0) || [];

      var _getProps5 = (0, _props.getProps)(this.props),
          slidesToShow = _getProps5.slidesToShow,
          infinite = _getProps5.infinite;

      if (this.state.slidesToShow !== slidesToShow) {
        this.setState({
          slidesToShow: slidesToShow,
          index: 0
        });
      }

      this.width = (this.wrapper && this.wrapper.clientWidth || 0) / slidesToShow;

      var numberOfSlides = _react["default"].Children.count(this.props.children);

      var fullwidth = this.width * (numberOfSlides + slidesToShow * 2);

      if (this.imageContainer) {
        this.imageContainer.style.width = "".concat(fullwidth, "px");
        this.imageContainer.style.transform = "translate(-".concat(this.width * (this.state.index + this.getOffset(infinite, slidesToShow)), "px)");
      }

      this.applySlideStyle();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props) {
      var _this4 = this;

      var _getProps6 = (0, _props.getProps)(this.props),
          autoplay = _getProps6.autoplay,
          duration = _getProps6.duration,
          children = _getProps6.children;

      var newProps = (0, _props.getProps)(props);

      if (autoplay !== newProps.autoplay) {
        if (autoplay) {
          this.timeout = setTimeout(function () {
            return _this4.goNext();
          }, duration);
        } else {
          clearTimeout(this.timeout);
        }
      }

      if (children.length != newProps.children.length) {
        this.setWidth();
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
          return _this4.goNext();
        }, duration);
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.setWidth();
    }
  }, {
    key: "applySlideStyle",
    value: function applySlideStyle() {
      var _this5 = this;

      this.allImages.forEach(function (eachImage, index) {
        eachImage.style.width = "".concat(_this5.width, "px");
      });
    }
  }, {
    key: "pauseSlides",
    value: function pauseSlides() {
      if ((0, _props.getProps)(this.props).pauseOnHover) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "startSlides",
    value: function startSlides() {
      var _this6 = this;

      var _getProps7 = (0, _props.getProps)(this.props),
          pauseOnHover = _getProps7.pauseOnHover,
          autoplay = _getProps7.autoplay,
          duration = _getProps7.duration;

      if (this.dragging) {
        this.endSwipe();
      } else {
        if (pauseOnHover && autoplay) {
          this.timeout = setTimeout(function () {
            return _this6.goNext();
          }, duration);
        }
      }
    }
  }, {
    key: "moveSlides",
    value: function moveSlides(_ref) {
      var dataset = _ref.currentTarget.dataset;

      if (dataset.type === 'next') {
        this.goNext();
      } else {
        this.goBack();
      }
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(_ref2) {
      var currentTarget = _ref2.currentTarget;

      var _getProps8 = (0, _props.getProps)(this.props),
          slidesToScroll = _getProps8.slidesToScroll;

      this.goTo(parseInt(currentTarget.dataset.key * slidesToScroll));
    }
  }, {
    key: "goTo",
    value: function goTo(index) {
      this.slideImages(this.calculateIndex(index));
    }
  }, {
    key: "calculateIndex",
    value: function calculateIndex(nextIndex) {
      var _getProps9 = (0, _props.getProps)(this.props),
          children = _getProps9.children,
          slidesToScroll = _getProps9.slidesToScroll;

      if (nextIndex < children.length && nextIndex + slidesToScroll > children.length) {
        if ((children.length - slidesToScroll) % slidesToScroll) {
          return children.length - slidesToScroll;
        }

        return nextIndex;
      }

      return nextIndex;
    }
  }, {
    key: "goNext",
    value: function goNext() {
      var index = this.state.index;

      var _getProps10 = (0, _props.getProps)(this.props),
          children = _getProps10.children,
          infinite = _getProps10.infinite,
          slidesToScroll = _getProps10.slidesToScroll;

      if (!infinite && index === children.length - slidesToScroll) {
        return;
      }

      var nextIndex = this.calculateIndex(index + slidesToScroll);
      this.slideImages(nextIndex);
    }
  }, {
    key: "goBack",
    value: function goBack() {
      var index = this.state.index;

      var _getProps11 = (0, _props.getProps)(this.props),
          infinite = _getProps11.infinite,
          slidesToScroll = _getProps11.slidesToScroll;

      if (!infinite && index === 0) {
        return;
      }

      var previousIndex = index - slidesToScroll;

      if (previousIndex % slidesToScroll) {
        previousIndex = Math.ceil(previousIndex / slidesToScroll) * slidesToScroll;
      }

      this.slideImages(previousIndex);
    }
  }, {
    key: "isSlideActive",
    value: function isSlideActive(key) {
      var _getProps12 = (0, _props.getProps)(this.props),
          slidesToShow = _getProps12.slidesToShow;

      return key < this.state.index + slidesToShow && key >= this.state.index;
    }
  }, {
    key: "renderPreceedingSlides",
    value: function renderPreceedingSlides(children, slidesToShow) {
      return children.slice(-slidesToShow).map(function (each, index) {
        return _react["default"].createElement("div", {
          "data-index": index - slidesToShow,
          "aria-roledescription": "slide",
          "aria-hidden": "true",
          key: index - slidesToShow
        }, each);
      });
    }
  }, {
    key: "renderTrailingSlides",
    value: function renderTrailingSlides() {
      var _getProps13 = (0, _props.getProps)(this.props),
          children = _getProps13.children,
          slidesToShow = _getProps13.slidesToShow,
          slidesToScroll = _getProps13.slidesToScroll,
          infinite = _getProps13.infinite;

      if (!infinite && slidesToShow === slidesToScroll) {
        return;
      }

      return children.slice(0, slidesToShow).map(function (each, index) {
        return _react["default"].createElement("div", {
          "data-index": children.length + index,
          "aria-roledescription": "slide",
          "aria-hidden": "true",
          key: children.length + index
        }, each);
      });
    }
  }, {
    key: "getOffset",
    value: function getOffset(infinite, slidesToShow) {
      if (!infinite) {
        return 0;
      }

      return slidesToShow;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _getProps14 = (0, _props.getProps)(this.props),
          children = _getProps14.children,
          indicators = _getProps14.indicators,
          arrows = _getProps14.arrows,
          cssClass = _getProps14.cssClass,
          slidesToShow = _getProps14.slidesToShow,
          infinite = _getProps14.infinite;

      var unhandledProps = (0, _helpers.getUnhandledProps)(_props.propTypes, this.props);
      var index = this.state.index;
      var style = {
        transform: "translate(-".concat((index + this.getOffset(infinite, slidesToShow)) * this.width, "px)")
      };
      return _react["default"].createElement("div", _extends({
        dir: "ltr",
        "aria-roledescription": "carousel"
      }, unhandledProps), _react["default"].createElement("div", {
        className: "react-slideshow-container",
        onMouseEnter: this.pauseSlides,
        onMouseOver: this.pauseSlides,
        onMouseLeave: this.startSlides,
        onMouseDown: this.startSwipe,
        onMouseUp: this.endSwipe,
        onMouseMove: this.swipe,
        onTouchStart: this.startSwipe,
        onTouchEnd: this.endSwipe,
        onTouchCancel: this.endSwipe,
        onTouchMove: this.swipe,
        ref: this.reactSlideshowWrapper
      }, arrows && (0, _helpers.showPreviousArrow)((0, _props.getProps)(this.props), this.state.index, this.moveSlides), _react["default"].createElement("div", {
        className: "react-slideshow-wrapper slide ".concat(cssClass),
        ref: function ref(_ref4) {
          return _this7.wrapper = _ref4;
        }
      }, _react["default"].createElement("div", {
        className: "images-wrap",
        style: style,
        ref: function ref(_ref3) {
          return _this7.imageContainer = _ref3;
        }
      }, infinite ? this.renderPreceedingSlides(children, slidesToShow) : '', children.map(function (each, key) {
        var isSlideActive = _this7.isSlideActive(key);

        return _react["default"].createElement("div", {
          "data-index": key,
          key: key,
          className: isSlideActive ? 'active' : '',
          "aria-roledescription": "slide",
          "aria-hidden": isSlideActive ? 'false' : 'true'
        }, each);
      }), this.renderTrailingSlides())), arrows && (0, _helpers.showNextArrow)((0, _props.getProps)(this.props), this.state.index, this.moveSlides)), indicators && (0, _helpers.showIndicators)((0, _props.getProps)(this.props), this.state.index, this.goToSlide));
    }
  }, {
    key: "slideImages",
    value: function slideImages(index, animationDuration) {
      var _this8 = this;

      var _getProps15 = (0, _props.getProps)(this.props),
          children = _getProps15.children,
          transitionDuration = _getProps15.transitionDuration,
          autoplay = _getProps15.autoplay,
          infinite = _getProps15.infinite,
          duration = _getProps15.duration,
          onChange = _getProps15.onChange,
          easing = _getProps15.easing,
          slidesToShow = _getProps15.slidesToShow,
          slidesToScroll = _getProps15.slidesToScroll;

      transitionDuration = animationDuration || transitionDuration;
      var existingTweens = this.tweenGroup.getAll();

      if (!existingTweens.length) {
        clearTimeout(this.timeout);
        var value = {
          margin: -this.width * (this.state.index + this.getOffset(infinite, slidesToShow)) + this.distanceSwiped
        };
        var tween = new _tween["default"].Tween(value, this.tweenGroup).to({
          margin: -this.width * (index + this.getOffset(infinite, slidesToShow))
        }, transitionDuration).onUpdate(function (value) {
          if (_this8.imageContainer) {
            _this8.imageContainer.style.transform = "translate(".concat(value.margin, "px)");
          }
        }).start();
        tween.easing((0, _helpers.getEasing)(easing));

        var animate = function animate() {
          if (_this8.willUnmount) {
            _this8.tweenGroup.removeAll();

            return;
          }

          requestAnimationFrame(animate);

          _this8.tweenGroup.update();
        };

        animate();
        tween.onComplete(function () {
          if (_this8.willUnmount) {
            return;
          }

          _this8.distanceSwiped = 0;
          var newIndex = index;

          if (newIndex < 0) {
            newIndex = children.length - slidesToScroll;
          } else if (newIndex >= children.length) {
            newIndex = 0;
          }

          if (typeof onChange === 'function') {
            onChange(_this8.state.index, newIndex);
          }

          _this8.setState({
            index: newIndex
          }, function () {
            if (autoplay && (infinite || _this8.state.index < children.length)) {
              clearTimeout(_this8.timeout);
              _this8.timeout = setTimeout(function () {
                return _this8.goNext();
              }, duration);
            }
          });
        });
      }
    }
  }]);

  return Slideshow;
}(_react.Component);

var _default = Slideshow;
exports["default"] = _default;