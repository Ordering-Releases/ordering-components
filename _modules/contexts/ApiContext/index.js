"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApi = exports.ApiProvider = exports.ApiContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingApiSdk = require("ordering-api-sdk");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Create ApiContext
 * Context to use Ordering API on the app
 */
var ApiContext = exports.ApiContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Api provider to manage api request
 * @param {props} props
 */
var ApiProvider = exports.ApiProvider = function ApiProvider(_ref) {
  var settings = _ref.settings,
    children = _ref.children;
  var _useState = (0, _react.useState)(new _orderingApiSdk.Ordering(settings)),
    _useState2 = _slicedToArray(_useState, 2),
    ordering = _useState2[0],
    setOrdering = _useState2[1];
  var _useState3 = (0, _react.useState)(settings.language),
    _useState4 = _slicedToArray(_useState3, 2),
    language = _useState4[0],
    setLanguage = _useState4[1];
  var _setLanguage = function _setLanguage(languageCode) {
    if (languageCode === language) return;
    setLanguage(languageCode);
  };
  var _setOrderingState = function _setOrderingState(values) {
    setOrdering(new _orderingApiSdk.Ordering(_objectSpread({}, values)));
  };
  (0, _react.useEffect)(function () {
    if (ordering.language === language) return;
    var _ordering = new _orderingApiSdk.Ordering(_objectSpread(_objectSpread(_objectSpread({}, settings), ordering), {}, {
      language: language
    }));
    setOrdering(_ordering);
  }, [language]);
  (0, _react.useEffect)(function () {
    _setOrderingState(settings);
  }, [settings === null || settings === void 0 ? void 0 : settings.project]);
  var functions = {
    setLanguage: _setLanguage,
    setOrdering: _setOrderingState
  };
  return /*#__PURE__*/_react.default.createElement(ApiContext.Provider, {
    value: [ordering, functions]
  }, children);
};

/**
 * Hook to get api state
 */
var useApi = exports.useApi = function useApi() {
  var apiManager = (0, _react.useContext)(ApiContext);
  return apiManager || [{}];
};