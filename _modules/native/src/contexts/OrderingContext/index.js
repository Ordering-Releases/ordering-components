"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../../../../src/contexts/ConfigContext");
var _SessionContext = require("../../../../src/contexts/SessionContext");
var _WebsocketContext = require("../../../../src/contexts/WebsocketContext");
var _OrderContext = require("../../../../src/contexts/OrderContext");
var _BusinessContext = require("../../../../src/contexts/BusinessContext");
var _LanguageContext = require("../../../../src/contexts/LanguageContext");
var _ApiContext = require("../../../../src/contexts/ApiContext");
var _EventContext = require("../../../../src/contexts/EventContext");
var _UtilsContext = require("../../../../src/contexts/UtilsContext");
var _ValidationsFieldsContext = require("../../../../src/contexts/ValidationsFieldsContext");
var _ToastContext = require("../../../../src/contexts/ToastContext");
var _CustomerContext = require("../../../../src/contexts/CustomerContext");
var _OptimizationLoadContext = require("../../../../src/contexts/OptimizationLoadContext");
var _OrderingThemeContext = require("../../../../src/contexts/OrderingThemeContext");
var _NativeStrategy = require("../../NativeStrategy");
var _SiteContext = require("../../../../src/contexts/SiteContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = exports.OrderingContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
var OrderingProvider = exports.OrderingProvider = function OrderingProvider(_ref) {
  var _settings$franchiseSl, _settings$businessSlu;
  var Alert = _ref.Alert,
    settings = _ref.settings,
    children = _ref.children,
    isDisableToast = _ref.isDisableToast,
    isDisabledDefaultOpts = _ref.isDisabledDefaultOpts;
  var nativeStrategy = new _NativeStrategy.NativeStrategy();
  var restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    use_root_point: settings.use_root_point,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings === null || settings === void 0 ? void 0 : settings.useOptimizeLoad,
    force_update_lang: settings === null || settings === void 0 ? void 0 : settings.force_update_lang
  };
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_OptimizationLoadContext.OptimizationLoadProvider, {
    strategy: nativeStrategy,
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    strategy: nativeStrategy,
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderingThemeContext.OrderingThemeProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_SiteContext.SiteProvider, {
    appId: settings.app_id
  }, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_ToastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_ValidationsFieldsContext.ValidationFieldsProvider, {
    appId: settings.app_id
  }, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    strategy: nativeStrategy,
    settings: Object.assign(settings.socket, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_CustomerContext.CustomerProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    isDisabledDefaultOpts: isDisabledDefaultOpts,
    strategy: nativeStrategy,
    Alert: Alert,
    isDisableToast: isDisableToast,
    franchiseId: (_settings$franchiseSl = settings === null || settings === void 0 ? void 0 : settings.franchiseSlug) !== null && _settings$franchiseSl !== void 0 ? _settings$franchiseSl : settings === null || settings === void 0 ? void 0 : settings.franchiseId,
    businessSlug: settings === null || settings === void 0 ? void 0 : settings.businessSlug,
    userAgent: settings === null || settings === void 0 ? void 0 : settings.userAgent
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, {
    businessId: (_settings$businessSlu = settings === null || settings === void 0 ? void 0 : settings.businessSlug) !== null && _settings$businessSlu !== void 0 ? _settings$businessSlu : settings === null || settings === void 0 ? void 0 : settings.businessId
  }, children))))))))))))))));
};