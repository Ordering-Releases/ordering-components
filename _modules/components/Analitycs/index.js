"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EventContext = require("../../contexts/EventContext");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Analytics = exports.Analytics = function Analytics(props) {
  var trackId = props.trackId,
    children = props.children;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    analyticsReady = _useState2[0],
    setAnalyticsReady = _useState2[1];
  (0, _react.useEffect)(function () {
    var _window;
    if (!trackId) {
      return;
    }
    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true);
      }
      return;
    }
    var js = window.document.createElement('script');
    js.id = 'google-analytics-sdk';
    js.async = true;
    js.defer = true;
    js.src = 'https://www.google-analytics.com/analytics.js';
    js.onload = ((_window = window) === null || _window === void 0 ? void 0 : _window.ga) && function () {
      setAnalyticsReady(true);
      window.ga('create', trackId);
      window.ga('require', 'ec');
      window.ga('set', 'page', window.location.pathname);
      window.ga('send', 'pageview');
    };
    window.document.body.appendChild(js);
    return function () {
      js.onload = null;
    };
  }, [trackId]);

  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */
  var handlechangeView = function handlechangeView(pageName) {
    window.ga('set', 'page', pageName === null || pageName === void 0 ? void 0 : pageName.page);
    window.ga('send', 'pageview');
  };
  var handleClickProduct = function handleClickProduct(product) {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    });
    window.ga('ec:setAction', 'click');
    window.ga('send', 'event', 'UI', 'click', 'add to cart');
  };
  var handleProductAdded = function handleProductAdded(product) {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
    window.ga('ec:setAction', 'add');
    window.ga('send', 'event', 'UI', 'click', 'add to cart');
  };
  var handleLogin = function handleLogin(data) {
    window.ga('set', 'userId', data.id);
  };
  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _order$business;
    window.ga('ec:setAction', 'purchase', {
      // Transaction details are provided in an actionFieldObject.
      id: order.id,
      // (Required) Transaction id (string).
      affiliation: (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name,
      // Affiliation (string).
      revenue: order.total,
      // Revenue (number).
      tax: order.tax_total,
      // Tax (number).
      shipping: order.delivery_zone_price // Shipping (number).
    });
  };
  (0, _react.useEffect)(function () {
    console.log('Analytic Ready');
    if (analyticsReady && window.ga) {
      events.on('change_view', handlechangeView);
      events.on('userLogin', handleLogin);
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('order_placed', handleOrderPlaced);
    }
    return function () {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView);
        events.off('userLogin', handleLogin);
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('order_placed', handleOrderPlaced);
      }
    };
  }, [analyticsReady]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
Analytics.propTypes = {
  /**
   * Your Google Analytics trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: _propTypes.default.string.isRequired
};
Analytics.defaultProps = {};