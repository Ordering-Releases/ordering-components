"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
var MultiCheckout = exports.MultiCheckout = function MultiCheckout(props) {
  var _cartGroup$result, _cartGroup$result2, _openCarts$filter;
  var UIComponent = props.UIComponent,
    onPlaceOrderClick = props.onPlaceOrderClick,
    cartUuid = props.cartUuid,
    userId = props.userId,
    actionsBeforePlace = props.actionsBeforePlace;
  var qParams = userId ? "?user_id=".concat(userId) : '';
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Session content
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    placeMultiCarts = _useOrder2[1].placeMultiCarts;
  /**
  * Toast state
  */
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  /**
  * Delivery Instructions options
  */
  var _useState = (0, _react.useState)({
      loading: false,
      result: [{
        id: null,
        enabled: true,
        name: t('EITHER_WAY', 'Either way')
      }],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    instructionsOptions = _useState2[0],
    setInstructionsOptions = _useState2[1];
  /**
  * Delivery instructions selected
  */
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    deliveryOptionSelected = _useState4[0],
    setDeliveryOptionSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      result: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    loyaltyPlansState = _useState6[0],
    setLoyaltyPlansState = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    placing = _useState8[0],
    setPlacing = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    paymethodSelected = _useState10[0],
    setPaymethodSelected = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: true,
      error: null,
      result: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    cartGroup = _useState12[0],
    setCartGroup = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    walletState = _useState14[0],
    setWalletState = _useState14[1];
  var _useState15 = (0, _react.useState)({
      fields: [],
      loading: false,
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    checkoutFieldsState = _useState16[0],
    setCheckoutFieldsState = _useState16[1];
  var openCarts = (cartGroup === null || cartGroup === void 0 || (_cartGroup$result = cartGroup.result) === null || _cartGroup$result === void 0 || (_cartGroup$result = _cartGroup$result.carts) === null || _cartGroup$result === void 0 ? void 0 : _cartGroup$result.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.business_id);
  })) || null || [];
  var cartsInvalid = (cartGroup === null || cartGroup === void 0 || (_cartGroup$result2 = cartGroup.result) === null || _cartGroup$result2 === void 0 || (_cartGroup$result2 = _cartGroup$result2.carts) === null || _cartGroup$result2 === void 0 ? void 0 : _cartGroup$result2.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1;
  })) || null || [];
  var totalCartsPrice = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && openCarts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var totalCartsFee = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && (openCarts === null || openCarts === void 0 || (_openCarts$filter = openCarts.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.valid);
  })) === null || _openCarts$filter === void 0 ? void 0 : _openCarts$filter.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount);
  }, 0));
  var handleGroupPlaceOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(confirmPayment) {
      var _paymethodSelected$pa, _cartGroup$result3, _result$paymethod_dat;
      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMultiCart, error, result, _result$payment_event, _paymentEvent$data, paymentEvent, _paymentEvent$data2, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!placing) {
              _context.next = 3;
              break;
            }
            showToast(_ToastContext.ToastType.Info, t('CART_IN_PROGRESS', 'Cart in progress'));
            return _context.abrupt("return");
          case 3:
            paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway)) {
              paymethodData = JSON.stringify({
                source_id: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa2 = paymethodSelected.paymethod_data) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id
              });
            }
            payload = {
              amount: cartGroup === null || cartGroup === void 0 || (_cartGroup$result3 = cartGroup.result) === null || _cartGroup$result3 === void 0 ? void 0 : _cartGroup$result3.balance
            };
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_id: (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa3 = paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.id) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id)
              });
            }
            if (paymethodData) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_data: paymethodData
              });
            }
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                wallet_id: paymethodSelected.wallet_id,
                wallet_data: paymethodSelected.wallet_data
              });
            }
            setPlacing(true);
            _context.next = 12;
            return placeMultiCarts(payload, cartUuid);
          case 12:
            _yield$placeMultiCart = _context.sent;
            error = _yield$placeMultiCart.error;
            result = _yield$placeMultiCart.result;
            if (!error) {
              _context.next = 18;
              break;
            }
            setPlacing(false);
            return _context.abrupt("return");
          case 18:
            if (!((result === null || result === void 0 || (_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.status) === 2 && actionsBeforePlace)) {
              _context.next = 21;
              break;
            }
            _context.next = 21;
            return actionsBeforePlace(paymethodSelected, result);
          case 21:
            if (!(confirmPayment && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'global_apple_pay')) {
              _context.next = 31;
              break;
            }
            paymentEvent = result === null || result === void 0 || (_result$payment_event = result.payment_events) === null || _result$payment_event === void 0 ? void 0 : _result$payment_event.find(function (event) {
              var _event$data;
              return event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 || (_event$data = _event$data.extra) === null || _event$data === void 0 ? void 0 : _event$data.client_secret;
            });
            if (!(paymentEvent !== null && paymentEvent !== void 0 && (_paymentEvent$data = paymentEvent.data) !== null && _paymentEvent$data !== void 0 && (_paymentEvent$data = _paymentEvent$data.extra) !== null && _paymentEvent$data !== void 0 && _paymentEvent$data.client_secret)) {
              _context.next = 29;
              break;
            }
            _context.next = 26;
            return confirmPayment(paymentEvent === null || paymentEvent === void 0 || (_paymentEvent$data2 = paymentEvent.data) === null || _paymentEvent$data2 === void 0 || (_paymentEvent$data2 = _paymentEvent$data2.extra) === null || _paymentEvent$data2 === void 0 ? void 0 : _paymentEvent$data2.client_secret);
          case 26:
            _yield$confirmPayment = _context.sent;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.message || confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.localizedMessage) {
              showToast(_ToastContext.ToastType.Error, (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.message) || (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.localizedMessage));
            }
          case 29:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 31:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleGroupPlaceOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSelectPaymethod = function handleSelectPaymethod(paymethod) {
    setPaymethodSelected(paymethod === null ? {} : _objectSpread(_objectSpread(_objectSpread({}, paymethodSelected), paymethod), {}, {
      paymethod_data: paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_data
    }));
  };
  var handleSelectWallet = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isChecked, wallet) {
      var _cartGroup$result4, _cartGroup$result5;
      var url, response, _yield$response$json, error, result, _err$message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: true,
              error: null
            }));
            url = isChecked ? "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result4 = cartGroup.result) === null || _cartGroup$result4 === void 0 ? void 0 : _cartGroup$result4.uuid, "/wallets") : "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result5 = cartGroup.result) === null || _cartGroup$result5 === void 0 ? void 0 : _cartGroup$result5.uuid, "/wallets/").concat(wallet.id);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url, _objectSpread({
              method: isChecked ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            }, isChecked && {
              body: JSON.stringify({
                wallet_id: wallet.id
              })
            }));
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                result: _objectSpread(_objectSpread({}, cartGroup.result), {}, {
                  wallets: result === null || result === void 0 ? void 0 : result.wallets,
                  payment_events: result === null || result === void 0 ? void 0 : result.payment_events,
                  balance: result === null || result === void 0 ? void 0 : result.balance
                })
              }));
            }
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: error ? result : null,
              result: error ? null : result
            }));
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](2);
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: (_err$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _err$message !== void 0 ? _err$message : _context2.t0
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 15]]);
    }));
    return function handleSelectWallet(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
      paymethod_data: data
    }));
  };
  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(ordering.root, "/delivery_options").concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context3.next = 12;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context3.abrupt("return");
          case 12:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_ToastContext.ToastType.Error, result);
            _context3.next = 20;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _context3.t0.message
            });
            showToast(_ToastContext.ToastType.Error, _context3.t0.message);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref3.apply(this, arguments);
    };
  }();
  var multiHandleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(value, cartUuidArr) {
      var allPromise;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            allPromise = cartUuidArr.map(function (cartId) {
              return new Promise( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
                  var body, response, _yield$response$json3, result, error;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        body = {
                          delivery_option_id: value
                        };
                        if (userId) body.user_id = userId;
                        _context4.next = 4;
                        return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: "bearer ".concat(token),
                            'X-App-X': ordering.appId,
                            'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                          },
                          body: JSON.stringify(body)
                        });
                      case 4:
                        response = _context4.sent;
                        _context4.next = 7;
                        return response.json();
                      case 7:
                        _yield$response$json3 = _context4.sent;
                        result = _yield$response$json3.result;
                        error = _yield$response$json3.error;
                        if (!error && (result === null || result === void 0 ? void 0 : result.delivery_option_id) === value) {
                          resolve(result);
                        } else {
                          reject(false);
                        }
                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x6, _x7) {
                  return _ref5.apply(this, arguments);
                };
              }());
            });
            _context5.next = 4;
            return Promise.all(allPromise);
          case 4:
            _context5.t0 = _context5.sent;
            if (!_context5.t0) {
              _context5.next = 7;
              break;
            }
            setDeliveryOptionSelected(value);
          case 7:
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t1 = _context5["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context5.t1.message);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    return function multiHandleChangeDeliveryOption(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
      var cartUuidArr;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            cartUuidArr = openCarts.map(function (cart) {
              return cart === null || cart === void 0 ? void 0 : cart.uuid;
            });
            multiHandleChangeDeliveryOption(value, cartUuidArr);
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function handleChangeDeliveryOption(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getMultiCart = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response, _yield$response$json4, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (cartUuid) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return");
          case 3:
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: true
            }));
            _context7.next = 6;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid).concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 6:
            response = _context7.sent;
            _context7.next = 9;
            return response.json();
          case 9:
            _yield$response$json4 = _context7.sent;
            result = _yield$response$json4.result;
            error = _yield$response$json4.error;
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              result: result,
              error: error
            }));
            _context7.next = 18;
            break;
          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](0);
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              error: _context7.t0.message
            }));
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 15]]);
    }));
    return function getMultiCart() {
      return _ref7.apply(this, arguments);
    };
  }();
  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _result$find$accumula, _result$find, req, _yield$req$json, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return fetch("".concat(ordering.root, "/loyalty_plans"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            req = _context8.sent;
            _context8.next = 6;
            return req.json();
          case 6:
            _yield$req$json = _context8.sent;
            error = _yield$req$json.error;
            result = _yield$req$json.result;
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: error ? [] : result,
              rewardRate: (_result$find$accumula = result === null || result === void 0 || (_result$find = result.find(function (loyal) {
                return loyal.type === 'credit_point';
              })) === null || _result$find === void 0 ? void 0 : _result$find.accumulation_rate) !== null && _result$find$accumula !== void 0 ? _result$find$accumula : 0
            }));
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: []
            }));
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function getLoyaltyPlans() {
      return _ref8.apply(this, arguments);
    };
  }();
  var getValidationFieldOrderTypes = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context9.next = 5;
            return fetch("".concat(ordering.root, "/validation_field_order_types"), requestOptions);
          case 5:
            response = _context9.sent;
            _context9.next = 8;
            return response.json();
          case 8:
            content = _context9.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              setCheckoutFieldsState({
                fields: content === null || content === void 0 ? void 0 : content.result,
                loading: false
              });
            } else {
              setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              }));
            }
            _context9.next = 15;
            break;
          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: false,
              error: [_context9.t0.message]
            }));
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 12]]);
    }));
    return function getValidationFieldOrderTypes() {
      return _ref9.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null);
    }
  }, [instructionsOptions]);
  (0, _react.useEffect)(function () {
    Promise.any([getDeliveryOptions(), getLoyaltyPlans()]);
    getValidationFieldOrderTypes();
  }, []);
  (0, _react.useEffect)(function () {
    getMultiCart();
  }, [JSON.stringify(carts)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    placing: placing,
    openCarts: openCarts,
    rewardRate: loyaltyPlansState === null || loyaltyPlansState === void 0 ? void 0 : loyaltyPlansState.rewardRate,
    loyaltyPlansState: loyaltyPlansState,
    totalCartsPrice: totalCartsPrice,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleGroupPlaceOrder: handleGroupPlaceOrder,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    deliveryOptionSelected: deliveryOptionSelected,
    instructionsOptions: instructionsOptions,
    cartGroup: cartGroup,
    walletState: walletState,
    totalCartsFee: totalCartsFee,
    cartsInvalid: cartsInvalid,
    checkoutFieldsState: checkoutFieldsState
  })));
};
MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};