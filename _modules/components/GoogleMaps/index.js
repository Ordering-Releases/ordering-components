"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMapsMap = exports.GoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
var _EventContext = require("../../contexts/EventContext");
var _UtilsContext = require("../../contexts/UtilsContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GoogleMaps = exports.GoogleMaps = function GoogleMaps(props) {
  var googleReady = props.googleReady,
    locations = props.locations,
    mapControls = props.mapControls,
    setErrors = props.setErrors,
    isSetInputs = props.isSetInputs,
    fixedLocation = props.fixedLocation,
    handleChangeAddressMap = props.handleChangeAddressMap,
    maxLimitLocation = props.maxLimitLocation,
    businessMap = props.businessMap,
    onBusinessClick = props.onBusinessClick,
    setNearBusinessList = props.setNearBusinessList,
    noDistanceValidation = props.noDistanceValidation,
    businessZones = props.businessZones,
    fillStyle = props.fillStyle,
    useMapWithBusinessZones = props.useMapWithBusinessZones,
    deactiveAlerts = props.deactiveAlerts,
    fallbackIcon = props.fallbackIcon,
    manualZoom = props.manualZoom,
    avoidFitBounds = props.avoidFitBounds;
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var divRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    googleMap = _useState2[0],
    setGoogleMap = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    markers = _useState4[0],
    setMarkers = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    googleMapMarker = _useState6[0],
    setGoogleMapMarker = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    boundMap = _useState8[0],
    setBoundMap = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    userActivity = _useState10[0],
    setUserActivity = _useState10[1];
  var markerRef = (0, _react.useRef)();
  var location = fixedLocation || props.location;
  var center = {
    lat: location === null || location === void 0 ? void 0 : location.lat,
    lng: location === null || location === void 0 ? void 0 : location.lng
  };
  var units = {
    mi: 1609,
    km: 1000
  };

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  var generateMarkers = function generateMarkers(map) {
    var bounds = new window.google.maps.LatLngBounds();
    var businessesNear = 0;
    var locationMarkers = [];
    var _loop = function _loop(i) {
      var _locations$i2, _locations$i3, _locations$i4, _locations$i5;
      var formatUrl = null;
      if (i === 1 || businessMap) {
        var _locations$i;
        formatUrl = optimizeImage((_locations$i = locations[i]) === null || _locations$i === void 0 ? void 0 : _locations$i.icon, 'r_max');
      }
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng((_locations$i2 = locations[i]) === null || _locations$i2 === void 0 ? void 0 : _locations$i2.lat, (_locations$i3 = locations[i]) === null || _locations$i3 === void 0 ? void 0 : _locations$i3.lng),
        map: map,
        title: (_locations$i4 = locations[i]) === null || _locations$i4 === void 0 ? void 0 : _locations$i4.slug,
        icon: {
          url: formatUrl || ((_locations$i5 = locations[i]) === null || _locations$i5 === void 0 ? void 0 : _locations$i5.icon) || fallbackIcon,
          scaledSize: new window.google.maps.Size(35, 35)
        }
      });
      if (businessMap && !noDistanceValidation) {
        var isNear = validateResult(googleMap, marker, marker.getPosition());
        if (isNear) {
          var _locations$;
          if (i === 0 && (_locations$ = locations[0]) !== null && _locations$ !== void 0 && _locations$.markerPopup) {
            var _locations$2;
            var infowindow = new window.google.maps.InfoWindow();
            infowindow.setContent((_locations$2 = locations[0]) === null || _locations$2 === void 0 ? void 0 : _locations$2.markerPopup);
            infowindow.open(map, marker);
            markerRef.current = infowindow;
          }
          marker.addListener('click', function () {
            var _locations$i6;
            if ((_locations$i6 = locations[i]) !== null && _locations$i6 !== void 0 && _locations$i6.markerPopup) {
              var _locations$i7;
              var _infowindow = new window.google.maps.InfoWindow();
              _infowindow.setContent((_locations$i7 = locations[i]) === null || _locations$i7 === void 0 ? void 0 : _locations$i7.markerPopup);
              _infowindow.open(map, marker);
            } else {
              var _locations$i8;
              onBusinessClick((_locations$i8 = locations[i]) === null || _locations$i8 === void 0 ? void 0 : _locations$i8.slug);
            }
          });
          bounds.extend(marker.position);
          locationMarkers.push(marker);
          businessesNear = businessesNear + 1;
        } else {
          marker.setMap(null);
        }
      } else {
        marker.addListener('click', function () {
          var _locations$i9;
          onBusinessClick && onBusinessClick((_locations$i9 = locations[i]) === null || _locations$i9 === void 0 ? void 0 : _locations$i9.slug);
        });
        bounds.extend(marker.position);
        locationMarkers.push(marker);
      }
    };
    for (var i = 0; i < locations.length; i++) {
      _loop(i);
    }
    if (locationMarkers.length > 0) {
      setMarkers(locationMarkers);
    }
    if (setNearBusinessList) {
      var franchiseSlugs = [];
      var _iterator = _createForOfIteratorHelper(locationMarkers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var locationMarker = _step.value;
          franchiseSlugs.push(locationMarker === null || locationMarker === void 0 ? void 0 : locationMarker.title);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setNearBusinessList(franchiseSlugs);
    }
    if (!deactiveAlerts) {
      businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES');
    }
    if (useMapWithBusinessZones) {
      bounds.extend(center);
    }
    if (!avoidFitBounds) {
      map.fitBounds(bounds);
    }
    setBoundMap(bounds);
  };
  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  var geocodePosition = function geocodePosition(pos) {
    if (isSetInputs) {
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({
        latLng: pos
      }, function (results) {
        var _results$;
        var zipcode = null;
        if (results && results.length > 0 && results !== null && results !== void 0 && (_results$ = results[0]) !== null && _results$ !== void 0 && _results$.address_components) {
          var _address$location, _address$location2;
          var _iterator2 = _createForOfIteratorHelper(results[0].address_components),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var component = _step2.value;
              var addressType = component.types[0];
              if (addressType === 'postal_code') {
                zipcode = component.short_name;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var address = {
            address: results[0].formatted_address,
            location: {
              lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
              lng: pos === null || pos === void 0 ? void 0 : pos.lng()
            }
          };
          if (zipcode) address.zipcode = zipcode;
          handleChangeAddressMap && handleChangeAddressMap(address);
          center.lat = (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat;
          center.lng = (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng;
        } else {
          googleMapMarker && googleMapMarker.setPosition(center);
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS');
        }
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      });
    } else {
      var _location = {
        lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
        lng: pos === null || pos === void 0 ? void 0 : pos.lng()
      };
      handleChangeAddressMap && handleChangeAddressMap({
        location: _location
      });
      center.lat = _location === null || _location === void 0 ? void 0 : _location.lat;
      center.lng = _location === null || _location === void 0 ? void 0 : _location.lng;
      googleMap && googleMap.panTo(new window.google.maps.LatLng(_location === null || _location === void 0 ? void 0 : _location.lat, _location === null || _location === void 0 ? void 0 : _location.lng));
    }
  };

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  var validateResult = function validateResult(map, marker, curPos) {
    var loc1 = new window.google.maps.LatLng(curPos === null || curPos === void 0 ? void 0 : curPos.lat(), curPos === null || curPos === void 0 ? void 0 : curPos.lng());
    var loc2 = new window.google.maps.LatLng(location === null || location === void 0 ? void 0 : location.lat, location === null || location === void 0 ? void 0 : location.lng);
    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2);
    if (businessMap) {
      var minimumBusinessDistance = 20000;
      if (distance <= minimumBusinessDistance) return true;
      return false;
    }
    if (!maxLimitLocation) {
      geocodePosition(curPos);
      return;
    }
    if (distance <= maxLimitLocation) {
      geocodePosition(curPos);
    } else {
      marker.setPosition(center);
      map.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION');
    }
  };
  var createDeliveryZone = function createDeliveryZone(deliveryZone, map, bounds) {
    var _deliveryZone$data, _deliveryZone$data2, _deliveryZone$data3;
    if (deliveryZone.type === 1 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data = deliveryZone.data) !== null && _deliveryZone$data !== void 0 && _deliveryZone$data.center && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data2 = deliveryZone.data) !== null && _deliveryZone$data2 !== void 0 && _deliveryZone$data2.radio) {
      var newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
        editable: false,
        center: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.center,
        radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.radio) * 1000
      }));
      newCircleZone.setMap(map);
      bounds.union(newCircleZone.getBounds());
    }
    if (deliveryZone.type === 5 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data3 = deliveryZone.data) !== null && _deliveryZone$data3 !== void 0 && _deliveryZone$data3.distance) {
      var _deliveryZone$data4;
      var _newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
        editable: false,
        center: center,
        radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.distance) * units[deliveryZone === null || deliveryZone === void 0 || (_deliveryZone$data4 = deliveryZone.data) === null || _deliveryZone$data4 === void 0 ? void 0 : _deliveryZone$data4.unit]
      }));
      _newCircleZone.setMap(map);
      bounds.union(_newCircleZone.getBounds());
    }
    if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.type) === 2 && Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
      var newPolygonZone = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
        editable: false,
        paths: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data
      }));
      newPolygonZone.setMap(map);
      if (Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
        var _iterator3 = _createForOfIteratorHelper(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var position = _step3.value;
            bounds.extend(position);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (googleReady) {
      var _location$zoom;
      var map = new window.google.maps.Map(divRef.current, {
        zoom: (_location$zoom = location === null || location === void 0 ? void 0 : location.zoom) !== null && _location$zoom !== void 0 ? _location$zoom : mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      setGoogleMap(map);
      var marker = null;
      if (locations) {
        if (locations.length > 0) {
          generateMarkers(map);
        }
        if (businessMap) {
          marker = new window.google.maps.Marker(_objectSpread({
            position: new window.google.maps.LatLng(center.lat, center.lng),
            map: map
          }, (location === null || location === void 0 ? void 0 : location.hideicon) && {
            icon: {
              url: 'https://picsum.photos/10',
              size: new window.google.maps.Size(1, 1)
            }
          }));
          map.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
        } else {
          var _locations$3;
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
            map: map,
            draggable: useMapWithBusinessZones,
            zIndex: 9999,
            icon: useMapWithBusinessZones ? undefined : {
              url: (_locations$3 = locations[0]) === null || _locations$3 === void 0 ? void 0 : _locations$3.icon,
              scaledSize: new window.google.maps.Size(35, 35)
            }
          });
        }
        setGoogleMapMarker(marker);
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
          map: map,
          draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
        });
        setGoogleMapMarker(marker);
      }
      if ((businessZones === null || businessZones === void 0 ? void 0 : businessZones.length) > 0) {
        var bounds = new window.google.maps.LatLngBounds();
        var _iterator4 = _createForOfIteratorHelper(businessZones),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var deliveryZone = _step4.value;
            if (deliveryZone !== null && deliveryZone !== void 0 && deliveryZone.id) {
              createDeliveryZone(deliveryZone, map, bounds);
            } else if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.length) > 0) {
              var _iterator5 = _createForOfIteratorHelper(deliveryZone),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var deliveryZoneBusiness = _step5.value;
                  createDeliveryZone(deliveryZoneBusiness, map, bounds);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, [googleReady, JSON.stringify(businessZones)]);
  (0, _react.useEffect)(function () {
    if (!googleMap || (markers === null || markers === void 0 ? void 0 : markers.length) > 0 || googleMapMarker || useMapWithBusinessZones) return;
    var marker = null;
    if (locations) {
      if (locations.length > 0) {
        generateMarkers(googleMap);
      }
      if (businessMap) {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center.lat, center.lng),
          googleMap: googleMap
        });
        googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      } else {
        var _locations$4;
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
          googleMap: googleMap,
          draggable: useMapWithBusinessZones,
          zIndex: 9999,
          icon: useMapWithBusinessZones ? undefined : {
            url: (_locations$4 = locations[0]) === null || _locations$4 === void 0 ? void 0 : _locations$4.icon,
            scaledSize: new window.google.maps.Size(35, 35)
          }
        });
      }
      setGoogleMapMarker(marker);
    } else {
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
        googleMap: googleMap,
        draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
      });
      setGoogleMapMarker(marker);
    }
  }, [googleMap, locations]);
  (0, _react.useEffect)(function () {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', function () {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition());
        });
        window.google.maps.event.addListener(googleMapMarker, 'drag', function () {
          events.emit('map_is_dragging', true);
        });
        if (mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable && !useMapWithBusinessZones) {
          window.google.maps.event.addListener(googleMap, 'drag', function () {
            googleMapMarker.setPosition(googleMap.getCenter());
            events.emit('map_is_dragging', true);
          });
          window.google.maps.event.addListener(googleMap, 'dragend', function () {
            googleMapMarker.setPosition(googleMap.getCenter());
            validateResult(googleMap, googleMapMarker, googleMap.getCenter());
          });
        }
        return function () {
          window.google.maps.event.clearListeners(googleMapMarker, 'dragend');
          window.google.maps.event.clearListeners(googleMap, 'drag');
          window.google.maps.event.clearListeners(googleMap, 'dragend');
        };
      }
    }
  }, [googleMapMarker, googleMap, location]);
  (0, _react.useEffect)(function () {
    if (googleReady && location) {
      if (businessMap && googleMap) {
        if (markerRef !== null && markerRef !== void 0 && markerRef.current) {
          var _markerRef$current;
          (markerRef === null || markerRef === void 0 || (_markerRef$current = markerRef.current) === null || _markerRef$current === void 0 ? void 0 : _markerRef$current.close) && markerRef.current.close();
        }
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        generateMarkers(googleMap);
      }
      center.lat = location === null || location === void 0 ? void 0 : location.lat;
      center.lng = location === null || location === void 0 ? void 0 : location.lng;
      var newPos = new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng);
      googleMapMarker && googleMapMarker.setPosition(newPos);
      !useMapWithBusinessZones && (markers === null || markers === void 0 ? void 0 : markers[0]) && markers[0].setPosition(newPos);
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
    }
  }, [location, JSON.stringify(locations)]);
  (0, _react.useEffect)(function () {
    if (!businessMap && !manualZoom) {
      var interval = setInterval(function () {
        if (googleReady && !userActivity) {
          var driverLocation = useMapWithBusinessZones ? center : locations === null || locations === void 0 ? void 0 : locations[0];
          if (driverLocation) {
            var newLocation = new window.google.maps.LatLng(driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lat, driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lng);
            useMapWithBusinessZones ? boundMap.extend(newLocation) : (markers === null || markers === void 0 ? void 0 : markers[0]) && markers[0].setPosition(newLocation);
            (markers === null || markers === void 0 ? void 0 : markers.length) > 0 && markers.forEach(function (marker) {
              return boundMap.extend(marker.position);
            });
            if (!avoidFitBounds) {
              googleMap.fitBounds(boundMap);
            }
          }
        }
        setUserActivity(false);
      }, 5000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, [JSON.stringify(locations), userActivity]);
  (0, _react.useEffect)(function () {
    if (boundMap && businessMap) {
      boundMap.extend(center);
      googleMap.fitBounds(boundMap);
    }
  }, [boundMap]);
  (0, _react.useEffect)(function () {
    if (boundMap && businessMap) {
      boundMap.extend(center);
      googleMap.fitBounds(boundMap);
    }
  }, [boundMap]);
  return googleReady && /*#__PURE__*/_react.default.createElement("div", {
    onMouseOver: function onMouseOver() {
      return setUserActivity(true);
    },
    id: "map",
    ref: divRef,
    style: {
      width: '70%',
      height: '50%',
      position: 'absolute'
    }
  });
};
GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: _propTypes.default.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var GoogleMapsMap = exports.GoogleMapsMap = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GoogleMaps);
GoogleMapsMap.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: _propTypes.default.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};