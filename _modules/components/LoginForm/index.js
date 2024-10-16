"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _EventContext = require("../../contexts/EventContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
 * Component to manage login behavior without UI component
 */
var LoginForm = exports.LoginForm = function LoginForm(props) {
  var _configs$phone_passwo, _configs$opt_email_en, _configs$otp_cellphon, _configs$email_passwo, _configs$spoonity_ena, _configs$device_code_;
  var UIComponent = props.UIComponent,
    handleButtonLoginClick = props.handleButtonLoginClick,
    handleSuccessLogin = props.handleSuccessLogin,
    useDefualtSessionManager = props.useDefualtSessionManager,
    urlToRedirect = props.urlToRedirect,
    allowedLevels = props.allowedLevels,
    handleCustomLogin = props.handleCustomLogin,
    notificationState = props.notificationState,
    isGuest = props.isGuest;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var defaultLoginTab = props.defaultLoginTab;
  var _useState = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      email: '',
      cellphone: '',
      password: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    credentials = _useState4[0],
    setCredentials = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    verifyPhoneState = _useState6[0],
    setVerifyPhoneState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    checkPhoneCodeState = _useState8[0],
    setCheckPhoneCodeState = _useState8[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState9 = (0, _react.useState)({
      code: '',
      version: ''
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    reCaptchaValue = _useState10[0],
    setReCaptchaValue = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isReCaptchaEnable = _useState12[0],
    setIsReCaptchaEnable = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    cellphoneStartZero = _useState14[0],
    setCellphoneStartZero = _useState14[1];
  var useLoginByCellphone = (configs === null || configs === void 0 || (_configs$phone_passwo = configs.phone_password_login_enabled) === null || _configs$phone_passwo === void 0 ? void 0 : _configs$phone_passwo.value) === '1';
  var useLoginOtpEmail = (configs === null || configs === void 0 || (_configs$opt_email_en = configs.opt_email_enabled) === null || _configs$opt_email_en === void 0 ? void 0 : _configs$opt_email_en.value) === '1';
  var useLoginOtpCellphone = (configs === null || configs === void 0 || (_configs$otp_cellphon = configs.otp_cellphone_enabled) === null || _configs$otp_cellphon === void 0 ? void 0 : _configs$otp_cellphon.value) === '1';
  var useLoginByEmail = useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone ? (configs === null || configs === void 0 || (_configs$email_passwo = configs.email_password_login_enabled) === null || _configs$email_passwo === void 0 ? void 0 : _configs$email_passwo.value) === '1' : true;
  var useLoginSpoonity = (configs === null || configs === void 0 || (_configs$spoonity_ena = configs.spoonity_enabled) === null || _configs$spoonity_ena === void 0 ? void 0 : _configs$spoonity_ena.value) === '1';
  var useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone;
  var isDeviceLoginEnabled = (configs === null || configs === void 0 || (_configs$device_code_ = configs.device_code_login_enabled) === null || _configs$device_code_ === void 0 ? void 0 : _configs$device_code_.value) === '1';
  defaultLoginTab = useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp';
  var _useState15 = (0, _react.useState)(defaultLoginTab),
    _useState16 = _slicedToArray(_useState15, 2),
    loginTab = _useState16[0],
    setLoginTab = _useState16[1];
  var _useState17 = (0, _react.useState)(!useLoginOtpEmail && useLoginOtpCellphone ? 'cellphone' : 'email'),
    _useState18 = _slicedToArray(_useState17, 2),
    otpType = _useState18[0],
    setOtpType = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    otpState = _useState20[0],
    setOtpState = _useState20[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    user = _useSession2[0].user,
    _useSession2$ = _useSession2[1],
    login = _useSession2$.login,
    logout = _useSession2$.logout;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  var handleLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _credentials4, _window, _credentials, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, level, session, accessToken, _yield$ordering$setAc, logoutResp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!handleCustomLogin) {
              _context.next = 3;
              break;
            }
            handleCustomLogin(values || credentials, loginTab);
            return _context.abrupt("return");
          case 3:
            _context.prev = 3;
            if (isDeviceLoginEnabled && values !== null && values !== void 0 && values.device_code) {
              _credentials = {
                device_code: values === null || values === void 0 ? void 0 : values.device_code
              };
            } else if (loginTab === 'otp') {
              _credentials = _defineProperty(_defineProperty({}, otpType, values && values[otpType] || credentials[otpType]), "one_time_password", values && (values === null || values === void 0 ? void 0 : values.code) || otpState);
              if (otpType === 'cellphone') {
                _credentials = _objectSpread(_objectSpread({}, _credentials), {}, {
                  country_phone_code: values && ((values === null || values === void 0 ? void 0 : values.country_phone_code) || (credentials === null || credentials === void 0 ? void 0 : credentials.country_phone_code))
                });
              }
            } else {
              _credentials = _defineProperty(_defineProperty({}, loginTab, values && values[loginTab] || credentials[loginTab]), "password", values && (values === null || values === void 0 ? void 0 : values.password) || credentials.password);
            }
            if (!isReCaptchaEnable) {
              _context.next = 13;
              break;
            }
            if (!((reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code) === '')) {
              _context.next = 11;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
              },
              loading: false
            });
            return _context.abrupt("return");
          case 11:
            _credentials.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            _credentials.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 13:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            if ((_credentials4 = _credentials) !== null && _credentials4 !== void 0 && (_credentials4 = _credentials4.cellphone) !== null && _credentials4 !== void 0 && _credentials4.includes('+')) {
              parsedNumber = (0, _libphonenumberJs.default)(_credentials.cellphone);
              cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
              _credentials.cellphone = cellphone;
              if (cellphoneStartZero) {
                _credentials.cellphone = cellphoneStartZero;
              }
            }
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              _credentials.notification_app = notificationState.notification_app;
              _credentials.notification_token = notificationState.notification_token;
            }
            if (isGuest && user !== null && user !== void 0 && user.guest_id) _credentials.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
            _context.next = 19;
            return ordering.users().auth(_credentials);
          case 19:
            _yield$ordering$users = _context.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            if (isReCaptchaEnable && (_window = window) !== null && _window !== void 0 && _window.grecaptcha) {
              _credentials.recaptcha_type === 'v2' && window.grecaptcha.reset();
              setReCaptchaValue({
                code: '',
                version: ''
              });
            }
            if (error) {
              _context.next = 48;
              break;
            }
            if (!useDefualtSessionManager) {
              _context.next = 44;
              break;
            }
            if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
              _context.next = 43;
              break;
            }
            level = result.level, session = result.session;
            accessToken = session === null || session === void 0 ? void 0 : session.access_token;
            if (allowedLevels.includes(level)) {
              _context.next = 43;
              break;
            }
            _context.prev = 30;
            _context.next = 33;
            return ordering.setAccessToken(accessToken).users().logout();
          case 33:
            _yield$ordering$setAc = _context.sent;
            logoutResp = _yield$ordering$setAc.content;
            if (!logoutResp.error) {
              logout();
            }
            setFormState({
              result: {
                error: true,
                result: [t('YOU_DO_NOT_HAVE_PERMISSION', 'Your session have been closed')]
              },
              loading: false
            });
            _context.next = 42;
            break;
          case 39:
            _context.prev = 39;
            _context.t0 = _context["catch"](30);
            setFormState({
              result: {
                error: true,
                result: _context.t0.message
              },
              loading: false
            });
          case 42:
            return _context.abrupt("return");
          case 43:
            login(_objectSpread({
              user: result,
              token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
            }, (values === null || values === void 0 ? void 0 : values.device_code) && {
              device_code: values === null || values === void 0 ? void 0 : values.device_code
            }));
          case 44:
            events.emit('userLogin', result);
            if (handleSuccessLogin) {
              handleSuccessLogin(result);
            }
            if (urlToRedirect) {
              window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
            }
            return _context.abrupt("return", true);
          case 48:
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            return _context.abrupt("return", false);
          case 52:
            _context.prev = 52;
            _context.t1 = _context["catch"](3);
            setFormState({
              result: {
                error: true,
                result: _context.t1.message
              },
              loading: false
            });
          case 55:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 52], [30, 39]]);
    }));
    return function handleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _configs$security_rec;
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 || (_configs$security_rec = configs.security_recaptcha_auth) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');
    setOtpType(!useLoginOtpEmail && useLoginOtpCellphone ? 'cellphone' : 'email');
    setLoginTab(useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp');
  }, [configs]);

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  var handleChangeTab = function handleChangeTab(tab) {
    setLoginTab(tab);
  };

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var response, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: false
              }
            }));
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context2.next = 5;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                cellphone: cellphoneStartZero || values.cellphone,
                country_phone_code: "+".concat(values.country_phone_code)
              })
            });
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            res = _context2.sent;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _context2.t0.message
              }
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function sendVerifyPhoneCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, _res$result, response, res, _res$result2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            body = _objectSpread({}, values);
            _context3.prev = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            res = _context3.sent;
            if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
              login({
                user: res === null || res === void 0 ? void 0 : res.result,
                token: res === null || res === void 0 || (_res$result2 = res.result) === null || _res$result2 === void 0 || (_res$result2 = _res$result2.session) === null || _res$result2 === void 0 ? void 0 : _res$result2.access_token
              });
              if (handleSuccessLogin) {
                handleSuccessLogin(res === null || res === void 0 ? void 0 : res.result);
              }
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: res
            }));
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context3.t0.message
              }
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 14]]);
    }));
    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            body = {
              type: 4,
              channel: otpType === 'email' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
            cellphone = cellphoneStartZero || (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.countryPhoneCode) || (values === null || values === void 0 ? void 0 : values.country_phone_code) || credentials.country_phone_code;
            _context4.prev = 4;
            if (otpType === 'cellphone') {
              body.country_phone_code = countryPhoneCode;
              body.cellphone = cellphone;
              setCredentials({
                cellphone: cellphone,
                country_phone_code: countryPhoneCode
              });
            } else {
              body.email = email;
              setCredentials({
                email: email
              });
            }
            _context4.next = 8;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 8:
            response = _context4.sent;
            _context4.next = 11;
            return response.json();
          case 11:
            _yield$response$json = _context4.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context4.next = 17;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                result: result,
                error: null
              }
            }));
            return _context4.abrupt("return");
          case 17:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: result
              }
            }));
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](4);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: _context4.t0.message
              }
            }));
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[4, 20]]);
    }));
    return function generateOtpCode(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleLoginSpoonity = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _result$session2, response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context5.next = 4;
            return fetch("".concat(ordering.root, "/auth/spoonity"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
              })
            });
          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context5.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (!error) {
              _context5.next = 13;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: result
              },
              loading: false
            });
            return _context5.abrupt("return");
          case 13:
            login({
              user: result,
              token: result === null || result === void 0 || (_result$session2 = result.session) === null || _result$session2 === void 0 ? void 0 : _result$session2.access_token
            });
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            setFormState({
              result: {
                error: true,
                result: _context5.t0.message
              },
              loading: false
            });
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 17]]);
    }));
    return function handleLoginSpoonity() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    loginTab: loginTab,
    credentials: credentials,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonLoginClick: handleButtonLoginClick || handleLoginClick,
    handleChangeTab: handleChangeTab,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptchaValue,
    useLoginOtp: useLoginOtp,
    setOtpType: setOtpType,
    otpType: otpType,
    generateOtpCode: generateOtpCode,
    setOtpState: setOtpState,
    otpState: otpState,
    useLoginByEmail: useLoginByEmail,
    useLoginByCellphone: useLoginByCellphone,
    useLoginOtpEmail: useLoginOtpEmail,
    useLoginOtpCellphone: useLoginOtpCellphone,
    useLoginSpoonity: useLoginSpoonity,
    handleLoginSpoonity: handleLoginSpoonity,
    setCellphoneStartZero: setCellphoneStartZero
  })));
};
LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: _propTypes.default.func,
  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: _propTypes.default.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: _propTypes.default.bool,
  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: _propTypes.default.bool,
  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: _propTypes.default.string,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: _propTypes.default.string,
  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: _propTypes.default.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: _propTypes.default.element,
  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: _propTypes.default.element
};
LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};