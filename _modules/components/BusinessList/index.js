"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderingThemeContext = require("../../contexts/OrderingThemeContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);
var BusinessList = exports.BusinessList = function BusinessList(props) {
  var _paginationSettings$p, _configs$advanced_bus, _ref, _orderingTheme$busine, _orderState$options, _configs$unaddressed_, _orderState$options2, _orderState$options20, _orderState$options21, _orderState$options22, _orderState$options23, _orderState$options24, _orderState$options25;
  var UIComponent = props.UIComponent,
    initialBuisnessType = props.initialBuisnessType,
    initialOrderType = props.initialOrderType,
    initialOrderByValue = props.initialOrderByValue,
    initialFilterKey = props.initialFilterKey,
    initialFilterValue = props.initialFilterValue,
    initialPricelevel = props.initialPricelevel,
    isOfferBusinesses = props.isOfferBusinesses,
    isSortByReview = props.isSortByReview,
    isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    isFeatured = props.isFeatured,
    isDoordash = props.isDoordash,
    asDashboard = props.asDashboard,
    paginationSettings = props.paginationSettings,
    customLocation = props.customLocation,
    propsToFetch = props.propsToFetch,
    onBusinessClick = props.onBusinessClick,
    windowPathname = props.windowPathname,
    currentPageParam = props.currentPageParam,
    franchiseId = props.franchiseId,
    businessId = props.businessId,
    cityId = props.cityId,
    actualSlug = props.actualSlug,
    searchValueCustom = props.searchValueCustom,
    isKiosk = props.isKiosk,
    isCustomerMode = props.isCustomerMode;
  var avoidFetchData = !token || isKiosk;
  var _useState = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessesList = _useState2[0],
    setBusinessesList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    paginationProps = _useState4[0],
    setPaginationProps = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    businessTypeSelected = _useState6[0],
    setBusinessTypeSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    priceLevelSelected = _useState8[0],
    setPriceLevelSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timeLimitValue = _useState12[0],
    setTimeLimitValue = _useState12[1];
  var _useState13 = (0, _react.useState)(initialOrderByValue !== null && initialOrderByValue !== void 0 ? initialOrderByValue : null),
    _useState14 = _slicedToArray(_useState13, 2),
    orderByValue = _useState14[0],
    setOrderByValue = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    maxDeliveryFee = _useState16[0],
    setMaxDeliveryFee = _useState16[1];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useOrderingTheme = (0, _OrderingThemeContext.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    token = _useSession2$.token,
    refreshUserInfo = _useSession2[1].refreshUserInfo;
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    requestsState = _useState18[0],
    setRequestsState = _useState18[1];
  var _useState19 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    citiesState = _useState20[0],
    setCitiesState = _useState20[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    franchiseEnabled = _useState22[0],
    setFranchiseEnabled = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    firstLoad = _useState24[0],
    setFirstLoad = _useState24[1];
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  var advancedSearchEnabled = (configs === null || configs === void 0 || (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1';
  var showCities = (_ref = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$busine = orderingTheme.business_listing_view) !== null && _orderingTheme$busine !== void 0 && (_orderingTheme$busine = _orderingTheme$busine.components) !== null && _orderingTheme$busine !== void 0 && (_orderingTheme$busine = _orderingTheme$busine.cities) !== null && _orderingTheme$busine !== void 0 && _orderingTheme$busine.hidden) && (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 2 && !props.disabledCities) !== null && _ref !== void 0 ? _ref : false;
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type);
  var sortBusinesses = function sortBusinesses(array, option) {
    if (option === 'review') {
      return array.sort(function (a, b) {
        return b.reviews.total - a.reviews.total;
      });
    }
    return array;
  };
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, specificPagination, prev) {
      var _configs$location_def, _configs$location_def2, _orderState$options3, _orderState$options4, _orderState$options5, _orderState$options6, _orderState$options11, _orderState$options12, _orderState$options16, defaultLatitude, defaultLongitude, isInvalidDefaultLocation, defaultLocation, parameters, _orderState$options7, _orderState$options8, _orderState$options9, _orderState$options10, paginationParams, _orderState$options13, moment, where, conditions, _orderState$options14, _orderState$options15, searchConditions, isSpecialCharacter, _orderState$options17, _paginationParams, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _result, offerBuesinesses, nextPageItems, remainingItems, businesses, fromIndex, toIndex, element;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true,
              businesses: newFetch ? [] : businessesList.businesses
            }));
            defaultLatitude = Number(configs === null || configs === void 0 || (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
            defaultLongitude = Number(configs === null || configs === void 0 || (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
            isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
            defaultLocation = {
              lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
              lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
            };
            parameters = asDashboard ? {} : {
              location: !customLocation ? isAllowUnaddressOrderType && !((_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3 = _orderState$options3.address) !== null && _orderState$options3 !== void 0 && _orderState$options3.location) ? defaultLocation : "".concat((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.location) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.lat, ",").concat((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.location) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.lng) : "".concat(customLocation.lat, ",").concat(customLocation.lng),
              type: !initialOrderType ? ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type) || 1 : initialOrderType
            };
            if (isCustomerMode) {
              parameters.disabled_business = true;
            }
            if (orderByValue) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                orderBy: orderByValue
              });
            }
            if ((searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 && advancedSearchEnabled) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                term: searchValue,
                order_type_id: orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
                location: JSON.stringify(isAllowUnaddressOrderType && !((_orderState$options8 = orderState.options) !== null && _orderState$options8 !== void 0 && (_orderState$options8 = _orderState$options8.address) !== null && _orderState$options8 !== void 0 && _orderState$options8.location) ? defaultLocation : {
                  lat: (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 || (_orderState$options9 = _orderState$options9.address) === null || _orderState$options9 === void 0 || (_orderState$options9 = _orderState$options9.location) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.lat,
                  lng: (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 || (_orderState$options10 = _orderState$options10.address) === null || _orderState$options10 === void 0 || (_orderState$options10 = _orderState$options10.location) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.lng
                })
              });
            }
            if (!isSortByReview && !isOfferBusinesses) {
              paginationParams = {
                page: newFetch ? 1 : paginationProps.currentPage + 1,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), paginationParams);
            }
            if ((_orderState$options11 = orderState.options) !== null && _orderState$options11 !== void 0 && _orderState$options11.moment && isValidMoment((_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            where = null;
            conditions = [];
            if (initialBuisnessType || businessTypeSelected) {
              conditions.push({
                attribute: 'types',
                conditions: [{
                  attribute: 'id',
                  value: !initialBuisnessType ? businessTypeSelected : initialBuisnessType
                }]
              });
            }
            if (isFeatured) {
              conditions.push({
                attribute: 'featured',
                value: true
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
            if (priceLevelSelected || initialPricelevel) {
              conditions.push({
                attribute: 'price_level',
                value: initialPricelevel !== null && initialPricelevel !== void 0 ? initialPricelevel : priceLevelSelected
              });
            }
            if (businessId) {
              conditions.push({
                attribute: typeof businessId === 'string' ? 'slug' : 'id',
                value: businessId
              });
            }
            if (timeLimitValue) {
              if (((_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.type) === 1) {
                conditions.push({
                  attribute: 'delivery_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
              if (((_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.type) === 2) {
                conditions.push({
                  attribute: 'pickup_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
            }
            if (maxDeliveryFee) {
              conditions.push({
                attribute: 'delivery_price',
                value: {
                  condition: '<=',
                  value: maxDeliveryFee
                }
              });
            }
            if (searchValue) {
              searchConditions = [];
              isSpecialCharacter = rex.test(searchValue);
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (orderState !== null && orderState !== void 0 && (_orderState$options16 = orderState.options) !== null && _orderState$options16 !== void 0 && _orderState$options16.city_id || cityId) {
              conditions.push({
                attribute: 'city_id',
                value: cityId || (orderState === null || orderState === void 0 || (_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.city_id)
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            if (specificPagination || currentPageParam) {
              _paginationParams = {
                page: specificPagination || currentPageParam,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), _paginationParams);
            }
            source = {};
            requestsState.businesses = source;
            setRequestsState(_objectSpread({}, requestsState));
            fetchEndpoint = advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 || !where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters) : where && asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard() : where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where) : ordering.businesses().select(propsToFetch).parameters(parameters).asDashboard();
            _context.next = 31;
            return fetchEndpoint.get({
              cancelToken: source,
              advancedSearch: advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3
            });
          case 31:
            _yield$fetchEndpoint$ = _context.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            pagination = _yield$fetchEndpoint$2.pagination;
            if (!error) {
              if (isSortByReview) {
                _result = sortBusinesses(result, 'review');
                businessesList.businesses = _result;
              } else if (isOfferBusinesses) {
                offerBuesinesses = result.filter(function (_business) {
                  return (_business === null || _business === void 0 ? void 0 : _business.offers.length) > 0;
                });
                businessesList.businesses = offerBuesinesses;
              } else {
                businessesList.businesses = newFetch ? result : prev ? [].concat(_toConsumableArray(result), _toConsumableArray(businessesList.businesses)) : [].concat(_toConsumableArray(businessesList.businesses), _toConsumableArray(result));
              }
              nextPageItems = 0;
              if ((pagination === null || pagination === void 0 ? void 0 : pagination.current_page) !== (pagination === null || pagination === void 0 ? void 0 : pagination.total_pages)) {
                remainingItems = pagination.total - businessesList.businesses.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.total_pages,
                totalItems: pagination === null || pagination === void 0 ? void 0 : pagination.total,
                nextPageItems: nextPageItems
              }));
            }
            businesses = businessesList.businesses;
            if (actualSlug) {
              fromIndex = businesses.findIndex(function (business) {
                return business.slug === actualSlug;
              });
              toIndex = 0;
              if (fromIndex !== toIndex) {
                element = businesses.splice(fromIndex, 1)[0];
                businesses.splice(toIndex, 0, element);
              }
            }
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: error,
              businesses: businesses,
              result: result,
              fetched: true
            }));
            setFirstLoad(true);
            _context.next = 46;
            break;
          case 43:
            _context.prev = 43;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_context.t0.message]
              }));
              setFirstLoad(true);
            }
          case 46:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 43]]);
    }));
    return function getBusinesses(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Get franchise info from API
   */
  var getFranchise = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setFranchiseEnabled(false);
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises/").concat(franchiseId);
            _context2.next = 6;
            return fetch(functionFetch, requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            _yield$response$json = _context2.sent;
            result = _yield$response$json.result;
            if (result !== null && result !== void 0 && result.enabled) setFranchiseEnabled(result === null || result === void 0 ? void 0 : result.enabled);else setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function getFranchise() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
              loading: true
            }));
            _context3.next = 4;
            return fetch("".concat(ordering.root, "/countries"), requestOptions);
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            pagination = _yield$response$json2.pagination;
            if (!error) {
              setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
                loading: false,
                cities: result === null || result === void 0 ? void 0 : result.map(function (country) {
                  return country === null || country === void 0 ? void 0 : country.cities;
                }).flat(),
                pagination: pagination
              }));
            }
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getCities() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Cancel businesses request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);

  /**
   * Listening order option and filter changes
   */
  (0, _react.useEffect)(function () {
    var _orderState$options18, _orderState$options19;
    if (orderState.loading || !((_orderState$options18 = orderState.options) !== null && _orderState$options18 !== void 0 && (_orderState$options18 = _orderState$options18.address) !== null && _orderState$options18 !== void 0 && _orderState$options18.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation || auth && !(orderState !== null && orderState !== void 0 && (_orderState$options19 = orderState.options) !== null && _orderState$options19 !== void 0 && _orderState$options19.user_id)) return;
    if (!isDoordash && !franchiseId) {
      getBusinesses(true, currentPageParam);
    }
  }, [(_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.type, (_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.moment, (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.city_id, (_orderState$options23 = orderState.options) === null || _orderState$options23 === void 0 ? void 0 : _orderState$options23.address_id, (_orderState$options24 = orderState.options) === null || _orderState$options24 === void 0 || (_orderState$options24 = _orderState$options24.address) === null || _orderState$options24 === void 0 ? void 0 : _orderState$options24.address, JSON.stringify((_orderState$options25 = orderState.options) === null || _orderState$options25 === void 0 || (_orderState$options25 = _orderState$options25.address) === null || _orderState$options25 === void 0 ? void 0 : _orderState$options25.location), ordering === null || ordering === void 0 ? void 0 : ordering.countryCode, orderState.loading, businessTypeSelected, priceLevelSelected, searchValue, initialPricelevel, initialBuisnessType, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useEffect)(function () {
    var _orderState$options26;
    if (orderState.loading || !((_orderState$options26 = orderState.options) !== null && _orderState$options26 !== void 0 && (_orderState$options26 = _orderState$options26.address) !== null && _orderState$options26 !== void 0 && _orderState$options26.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
      return;
    }
    if (isDoordash || franchiseEnabled) {
      getBusinesses(true);
    }
  }, [JSON.stringify(orderState.options), orderState.loading, franchiseEnabled, businessTypeSelected, searchValue, priceLevelSelected, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useLayoutEffect)(function () {
    if (isDoordash) {
      getBusinesses(true);
    }
  }, [windowPathname]);
  (0, _react.useEffect)(function () {
    if (franchiseId) {
      getFranchise();
    }
  }, [franchiseId]);

  /**
   * Listening initial filter
   */
  (0, _react.useEffect)(function () {
    if (!initialFilterKey && !initialFilterValue) return;
    switch (initialFilterKey) {
      case 'category':
        handleChangeBusinessType(initialFilterValue);
        break;
      case 'timeLimit':
        handleChangeTimeLimit(initialFilterValue);
        break;
      case 'search':
        handleChangeSearch(initialFilterValue);
        break;
      case 'orderBy':
        handleChangeOrderBy(initialFilterValue);
        break;
      case 'maxDeliveryFee':
        handleChangeMaxDeliveryFee(initialFilterValue);
        break;
    }
  }, [initialFilterKey, initialFilterValue]);
  (0, _react.useEffect)(function () {
    if (citiesState.loading) return;
    if (showCities) {
      getCities();
    }
  }, [showCities]);
  (0, _react.useEffect)(function () {
    if (firstLoad) {
      handleChangeSearch(searchValueCustom);
    }
  }, [searchValueCustom]);

  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */
  var handleBusinessClick = function handleBusinessClick(business) {
    onBusinessClick && onBusinessClick(business);
  };

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };

  /**
   * Change price level
   * @param {string} priceLevel price level
   */
  var handleChangePriceLevel = function handleChangePriceLevel(priceLevel) {
    if (priceLevel === priceLevelSelected) {
      setPriceLevelSelected(null);
      return;
    }
    setPriceLevelSelected(priceLevel);
  };

  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    if (!!search !== !!searchValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    if (search !== undefined) {
      setSearchValue(search);
    }
  };

  /**
   * Change time limt value
   * @param {string} time time limt value (for example: 0:30)
   */
  var handleChangeTimeLimit = function handleChangeTimeLimit(time) {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setTimeLimitValue(time);
  };

  /**
   * Change orderBy value
   * @param {string} orderBy orderBy value
   */
  var handleChangeOrderBy = function handleChangeOrderBy(orderBy) {
    if (orderBy !== orderByValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setOrderByValue(orderBy);
  };

  /**
   * Change max delivery fee
   * @param {number} deliveryFee max delivery fee
   */
  var handleChangeMaxDeliveryFee = function handleChangeMaxDeliveryFee(deliveryFee) {
    if (maxDeliveryFee !== deliveryFee) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setMaxDeliveryFee(deliveryFee);
  };

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
      businesses: updatedBusinesses
    }));
  };
  (0, _react.useEffect)(function () {
    if (avoidFetchData) return;
    refreshUserInfo();
  }, [auth]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    paginationProps: paginationProps,
    searchValue: searchValue,
    timeLimitValue: timeLimitValue,
    businessTypeSelected: businessTypeSelected,
    orderByValue: orderByValue,
    maxDeliveryFee: maxDeliveryFee,
    priceLevelSelected: priceLevelSelected,
    handleChangePriceLevel: handleChangePriceLevel,
    getBusinesses: getBusinesses,
    handleChangeSearch: handleChangeSearch,
    handleChangeTimeLimit: handleChangeTimeLimit,
    handleChangeOrderBy: handleChangeOrderBy,
    handleBusinessClick: handleBusinessClick,
    handleChangeBusinessType: handleChangeBusinessType,
    handleChangeMaxDeliveryFee: handleChangeMaxDeliveryFee,
    franchiseEnabled: franchiseEnabled,
    handleUpdateBusinessList: handleUpdateBusinessList,
    getCities: getCities,
    setPaginationProps: setPaginationProps,
    citiesState: citiesState
  })));
};
BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Function to get business clicked
   */
  onBusinessClick: _propTypes.default.func
};
BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};