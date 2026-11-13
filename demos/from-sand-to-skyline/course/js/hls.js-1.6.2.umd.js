(function __HLS_WORKER_BUNDLE__(__IN_WORKER__){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Hls = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelperLoose(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (t) return (t = t.call(r)).next.bind(t);
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var o = 0;
      return function () {
        return o >= r.length ? {
          done: true
        } : {
          done: false,
          value: r[o++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  /**
   * Generate a random v4 UUID
   *
   * @returns A random v4 UUID
   *
   * @group Utils
   *
   * @beta
   */
  function uuid() {
    try {
      return crypto.randomUUID();
    } catch (error) {
      try {
        var url = URL.createObjectURL(new Blob());
        var _uuid = url.toString();
        URL.revokeObjectURL(url);
        return _uuid.slice(_uuid.lastIndexOf('/') + 1);
      } catch (error) {
        var dt = new Date().getTime();
        var _uuid2 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return _uuid2;
      }
    }
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var eventemitter3 = {exports: {}};

  var hasRequiredEventemitter3;

  function requireEventemitter3 () {
  	if (hasRequiredEventemitter3) return eventemitter3.exports;
  	hasRequiredEventemitter3 = 1;
  	(function (module) {

  		var has = Object.prototype.hasOwnProperty
  		  , prefix = '~';

  		/**
  		 * Constructor to create a storage for our `EE` objects.
  		 * An `Events` instance is a plain object whose properties are event names.
  		 *
  		 * @constructor
  		 * @private
  		 */
  		function Events() {}

  		//
  		// We try to not inherit from `Object.prototype`. In some engines creating an
  		// instance in this way is faster than calling `Object.create(null)` directly.
  		// If `Object.create(null)` is not supported we prefix the event names with a
  		// character to make sure that the built-in object properties are not
  		// overridden or used as an attack vector.
  		//
  		if (Object.create) {
  		  Events.prototype = Object.create(null);

  		  //
  		  // This hack is needed because the `__proto__` property is still inherited in
  		  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  		  //
  		  if (!new Events().__proto__) prefix = false;
  		}

  		/**
  		 * Representation of a single event listener.
  		 *
  		 * @param {Function} fn The listener function.
  		 * @param {*} context The context to invoke the listener with.
  		 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
  		 * @constructor
  		 * @private
  		 */
  		function EE(fn, context, once) {
  		  this.fn = fn;
  		  this.context = context;
  		  this.once = once || false;
  		}

  		/**
  		 * Add a listener for a given event.
  		 *
  		 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  		 * @param {(String|Symbol)} event The event name.
  		 * @param {Function} fn The listener function.
  		 * @param {*} context The context to invoke the listener with.
  		 * @param {Boolean} once Specify if the listener is a one-time listener.
  		 * @returns {EventEmitter}
  		 * @private
  		 */
  		function addListener(emitter, event, fn, context, once) {
  		  if (typeof fn !== 'function') {
  		    throw new TypeError('The listener must be a function');
  		  }

  		  var listener = new EE(fn, context || emitter, once)
  		    , evt = prefix ? prefix + event : event;

  		  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  		  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  		  else emitter._events[evt] = [emitter._events[evt], listener];

  		  return emitter;
  		}

  		/**
  		 * Clear event by name.
  		 *
  		 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  		 * @param {(String|Symbol)} evt The Event name.
  		 * @private
  		 */
  		function clearEvent(emitter, evt) {
  		  if (--emitter._eventsCount === 0) emitter._events = new Events();
  		  else delete emitter._events[evt];
  		}

  		/**
  		 * Minimal `EventEmitter` interface that is molded against the Node.js
  		 * `EventEmitter` interface.
  		 *
  		 * @constructor
  		 * @public
  		 */
  		function EventEmitter() {
  		  this._events = new Events();
  		  this._eventsCount = 0;
  		}

  		/**
  		 * Return an array listing the events for which the emitter has registered
  		 * listeners.
  		 *
  		 * @returns {Array}
  		 * @public
  		 */
  		EventEmitter.prototype.eventNames = function eventNames() {
  		  var names = []
  		    , events
  		    , name;

  		  if (this._eventsCount === 0) return names;

  		  for (name in (events = this._events)) {
  		    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  		  }

  		  if (Object.getOwnPropertySymbols) {
  		    return names.concat(Object.getOwnPropertySymbols(events));
  		  }

  		  return names;
  		};

  		/**
  		 * Return the listeners registered for a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @returns {Array} The registered listeners.
  		 * @public
  		 */
  		EventEmitter.prototype.listeners = function listeners(event) {
  		  var evt = prefix ? prefix + event : event
  		    , handlers = this._events[evt];

  		  if (!handlers) return [];
  		  if (handlers.fn) return [handlers.fn];

  		  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
  		    ee[i] = handlers[i].fn;
  		  }

  		  return ee;
  		};

  		/**
  		 * Return the number of listeners listening to a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @returns {Number} The number of listeners.
  		 * @public
  		 */
  		EventEmitter.prototype.listenerCount = function listenerCount(event) {
  		  var evt = prefix ? prefix + event : event
  		    , listeners = this._events[evt];

  		  if (!listeners) return 0;
  		  if (listeners.fn) return 1;
  		  return listeners.length;
  		};

  		/**
  		 * Calls each of the listeners registered for a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @returns {Boolean} `true` if the event had listeners, else `false`.
  		 * @public
  		 */
  		EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  		  var evt = prefix ? prefix + event : event;

  		  if (!this._events[evt]) return false;

  		  var listeners = this._events[evt]
  		    , len = arguments.length
  		    , args
  		    , i;

  		  if (listeners.fn) {
  		    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

  		    switch (len) {
  		      case 1: return listeners.fn.call(listeners.context), true;
  		      case 2: return listeners.fn.call(listeners.context, a1), true;
  		      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
  		      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
  		      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
  		      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
  		    }

  		    for (i = 1, args = new Array(len -1); i < len; i++) {
  		      args[i - 1] = arguments[i];
  		    }

  		    listeners.fn.apply(listeners.context, args);
  		  } else {
  		    var length = listeners.length
  		      , j;

  		    for (i = 0; i < length; i++) {
  		      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

  		      switch (len) {
  		        case 1: listeners[i].fn.call(listeners[i].context); break;
  		        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
  		        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
  		        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
  		        default:
  		          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
  		            args[j - 1] = arguments[j];
  		          }

  		          listeners[i].fn.apply(listeners[i].context, args);
  		      }
  		    }
  		  }

  		  return true;
  		};

  		/**
  		 * Add a listener for a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @param {Function} fn The listener function.
  		 * @param {*} [context=this] The context to invoke the listener with.
  		 * @returns {EventEmitter} `this`.
  		 * @public
  		 */
  		EventEmitter.prototype.on = function on(event, fn, context) {
  		  return addListener(this, event, fn, context, false);
  		};

  		/**
  		 * Add a one-time listener for a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @param {Function} fn The listener function.
  		 * @param {*} [context=this] The context to invoke the listener with.
  		 * @returns {EventEmitter} `this`.
  		 * @public
  		 */
  		EventEmitter.prototype.once = function once(event, fn, context) {
  		  return addListener(this, event, fn, context, true);
  		};

  		/**
  		 * Remove the listeners of a given event.
  		 *
  		 * @param {(String|Symbol)} event The event name.
  		 * @param {Function} fn Only remove the listeners that match this function.
  		 * @param {*} context Only remove the listeners that have this context.
  		 * @param {Boolean} once Only remove one-time listeners.
  		 * @returns {EventEmitter} `this`.
  		 * @public
  		 */
  		EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  		  var evt = prefix ? prefix + event : event;

  		  if (!this._events[evt]) return this;
  		  if (!fn) {
  		    clearEvent(this, evt);
  		    return this;
  		  }

  		  var listeners = this._events[evt];

  		  if (listeners.fn) {
  		    if (
  		      listeners.fn === fn &&
  		      (!once || listeners.once) &&
  		      (!context || listeners.context === context)
  		    ) {
  		      clearEvent(this, evt);
  		    }
  		  } else {
  		    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
  		      if (
  		        listeners[i].fn !== fn ||
  		        (once && !listeners[i].once) ||
  		        (context && listeners[i].context !== context)
  		      ) {
  		        events.push(listeners[i]);
  		      }
  		    }

  		    //
  		    // Reset the array, or remove it completely if we have no more listeners.
  		    //
  		    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
  		    else clearEvent(this, evt);
  		  }

  		  return this;
  		};

  		/**
  		 * Remove all listeners, or those of the specified event.
  		 *
  		 * @param {(String|Symbol)} [event] The event name.
  		 * @returns {EventEmitter} `this`.
  		 * @public
  		 */
  		EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  		  var evt;

  		  if (event) {
  		    evt = prefix ? prefix + event : event;
  		    if (this._events[evt]) clearEvent(this, evt);
  		  } else {
  		    this._events = new Events();
  		    this._eventsCount = 0;
  		  }

  		  return this;
  		};

  		//
  		// Alias methods names because people roll like that.
  		//
  		EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  		EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  		//
  		// Expose the prefix.
  		//
  		EventEmitter.prefixed = prefix;

  		//
  		// Allow `EventEmitter` to be imported as module namespace.
  		//
  		EventEmitter.EventEmitter = EventEmitter;

  		//
  		// Expose the module.
  		//
  		{
  		  module.exports = EventEmitter;
  		} 
  	} (eventemitter3));
  	return eventemitter3.exports;
  }

  var eventemitter3Exports = requireEventemitter3();
  var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

  var urlToolkit = {exports: {}};

  var hasRequiredUrlToolkit;

  function requireUrlToolkit () {
  	if (hasRequiredUrlToolkit) return urlToolkit.exports;
  	hasRequiredUrlToolkit = 1;
  	(function (module, exports) {
  		// see https://tools.ietf.org/html/rfc1808

  		(function (root) {
  		  var URL_REGEX =
  		    /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
  		  var FIRST_SEGMENT_REGEX = /^(?=([^\/?#]*))\1([^]*)$/;
  		  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  		  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;

  		  var URLToolkit = {
  		    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
  		    // E.g
  		    // With opts.alwaysNormalize = false (default, spec compliant)
  		    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
  		    // With opts.alwaysNormalize = true (not spec compliant)
  		    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
  		    buildAbsoluteURL: function (baseURL, relativeURL, opts) {
  		      opts = opts || {};
  		      // remove any remaining space and CRLF
  		      baseURL = baseURL.trim();
  		      relativeURL = relativeURL.trim();
  		      if (!relativeURL) {
  		        // 2a) If the embedded URL is entirely empty, it inherits the
  		        // entire base URL (i.e., is set equal to the base URL)
  		        // and we are done.
  		        if (!opts.alwaysNormalize) {
  		          return baseURL;
  		        }
  		        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
  		        if (!basePartsForNormalise) {
  		          throw new Error('Error trying to parse base URL.');
  		        }
  		        basePartsForNormalise.path = URLToolkit.normalizePath(
  		          basePartsForNormalise.path
  		        );
  		        return URLToolkit.buildURLFromParts(basePartsForNormalise);
  		      }
  		      var relativeParts = URLToolkit.parseURL(relativeURL);
  		      if (!relativeParts) {
  		        throw new Error('Error trying to parse relative URL.');
  		      }
  		      if (relativeParts.scheme) {
  		        // 2b) If the embedded URL starts with a scheme name, it is
  		        // interpreted as an absolute URL and we are done.
  		        if (!opts.alwaysNormalize) {
  		          return relativeURL;
  		        }
  		        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
  		        return URLToolkit.buildURLFromParts(relativeParts);
  		      }
  		      var baseParts = URLToolkit.parseURL(baseURL);
  		      if (!baseParts) {
  		        throw new Error('Error trying to parse base URL.');
  		      }
  		      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
  		        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
  		        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
  		        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
  		        baseParts.netLoc = pathParts[1];
  		        baseParts.path = pathParts[2];
  		      }
  		      if (baseParts.netLoc && !baseParts.path) {
  		        baseParts.path = '/';
  		      }
  		      var builtParts = {
  		        // 2c) Otherwise, the embedded URL inherits the scheme of
  		        // the base URL.
  		        scheme: baseParts.scheme,
  		        netLoc: relativeParts.netLoc,
  		        path: null,
  		        params: relativeParts.params,
  		        query: relativeParts.query,
  		        fragment: relativeParts.fragment,
  		      };
  		      if (!relativeParts.netLoc) {
  		        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
  		        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
  		        // (if any) of the base URL.
  		        builtParts.netLoc = baseParts.netLoc;
  		        // 4) If the embedded URL path is preceded by a slash "/", the
  		        // path is not relative and we skip to Step 7.
  		        if (relativeParts.path[0] !== '/') {
  		          if (!relativeParts.path) {
  		            // 5) If the embedded URL path is empty (and not preceded by a
  		            // slash), then the embedded URL inherits the base URL path
  		            builtParts.path = baseParts.path;
  		            // 5a) if the embedded URL's <params> is non-empty, we skip to
  		            // step 7; otherwise, it inherits the <params> of the base
  		            // URL (if any) and
  		            if (!relativeParts.params) {
  		              builtParts.params = baseParts.params;
  		              // 5b) if the embedded URL's <query> is non-empty, we skip to
  		              // step 7; otherwise, it inherits the <query> of the base
  		              // URL (if any) and we skip to step 7.
  		              if (!relativeParts.query) {
  		                builtParts.query = baseParts.query;
  		              }
  		            }
  		          } else {
  		            // 6) The last segment of the base URL's path (anything
  		            // following the rightmost slash "/", or the entire path if no
  		            // slash is present) is removed and the embedded URL's path is
  		            // appended in its place.
  		            var baseURLPath = baseParts.path;
  		            var newPath =
  		              baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) +
  		              relativeParts.path;
  		            builtParts.path = URLToolkit.normalizePath(newPath);
  		          }
  		        }
  		      }
  		      if (builtParts.path === null) {
  		        builtParts.path = opts.alwaysNormalize
  		          ? URLToolkit.normalizePath(relativeParts.path)
  		          : relativeParts.path;
  		      }
  		      return URLToolkit.buildURLFromParts(builtParts);
  		    },
  		    parseURL: function (url) {
  		      var parts = URL_REGEX.exec(url);
  		      if (!parts) {
  		        return null;
  		      }
  		      return {
  		        scheme: parts[1] || '',
  		        netLoc: parts[2] || '',
  		        path: parts[3] || '',
  		        params: parts[4] || '',
  		        query: parts[5] || '',
  		        fragment: parts[6] || '',
  		      };
  		    },
  		    normalizePath: function (path) {
  		      // The following operations are
  		      // then applied, in order, to the new path:
  		      // 6a) All occurrences of "./", where "." is a complete path
  		      // segment, are removed.
  		      // 6b) If the path ends with "." as a complete path segment,
  		      // that "." is removed.
  		      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
  		      // 6c) All occurrences of "<segment>/../", where <segment> is a
  		      // complete path segment not equal to "..", are removed.
  		      // Removal of these path segments is performed iteratively,
  		      // removing the leftmost matching pattern on each iteration,
  		      // until no matching pattern remains.
  		      // 6d) If the path ends with "<segment>/..", where <segment> is a
  		      // complete path segment not equal to "..", that
  		      // "<segment>/.." is removed.
  		      while (
  		        path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length
  		      ) {}
  		      return path.split('').reverse().join('');
  		    },
  		    buildURLFromParts: function (parts) {
  		      return (
  		        parts.scheme +
  		        parts.netLoc +
  		        parts.path +
  		        parts.params +
  		        parts.query +
  		        parts.fragment
  		      );
  		    },
  		  };

  		  module.exports = URLToolkit;
  		})(); 
  	} (urlToolkit));
  	return urlToolkit.exports;
  }

  var urlToolkitExports = requireUrlToolkit();

  // https://caniuse.com/mdn-javascript_builtins_number_isfinite
  var isFiniteNumber = Number.isFinite || function (value) {
    return typeof value === 'number' && isFinite(value);
  };

  // https://caniuse.com/mdn-javascript_builtins_number_issafeinteger
  var isSafeInteger = Number.isSafeInteger || function (value) {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
  };
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

  var ErrorTypes = /*#__PURE__*/function (ErrorTypes) {
    // Identifier for a network error (loading error / timeout ...)
    ErrorTypes["NETWORK_ERROR"] = "networkError";
    // Identifier for a media Error (video/parsing/mediasource error)
    ErrorTypes["MEDIA_ERROR"] = "mediaError";
    // EME (encrypted media extensions) errors
    ErrorTypes["KEY_SYSTEM_ERROR"] = "keySystemError";
    // Identifier for a mux Error (demuxing/remuxing)
    ErrorTypes["MUX_ERROR"] = "muxError";
    // Identifier for all other errors
    ErrorTypes["OTHER_ERROR"] = "otherError";
    return ErrorTypes;
  }({});
  var ErrorDetails = /*#__PURE__*/function (ErrorDetails) {
    ErrorDetails["KEY_SYSTEM_NO_KEYS"] = "keySystemNoKeys";
    ErrorDetails["KEY_SYSTEM_NO_ACCESS"] = "keySystemNoAccess";
    ErrorDetails["KEY_SYSTEM_NO_SESSION"] = "keySystemNoSession";
    ErrorDetails["KEY_SYSTEM_NO_CONFIGURED_LICENSE"] = "keySystemNoConfiguredLicense";
    ErrorDetails["KEY_SYSTEM_LICENSE_REQUEST_FAILED"] = "keySystemLicenseRequestFailed";
    ErrorDetails["KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED"] = "keySystemServerCertificateRequestFailed";
    ErrorDetails["KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED"] = "keySystemServerCertificateUpdateFailed";
    ErrorDetails["KEY_SYSTEM_SESSION_UPDATE_FAILED"] = "keySystemSessionUpdateFailed";
    ErrorDetails["KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED"] = "keySystemStatusOutputRestricted";
    ErrorDetails["KEY_SYSTEM_STATUS_INTERNAL_ERROR"] = "keySystemStatusInternalError";
    ErrorDetails["KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR"] = "keySystemDestroyMediaKeysError";
    ErrorDetails["KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR"] = "keySystemDestroyCloseSessionError";
    ErrorDetails["KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR"] = "keySystemDestroyRemoveSessionError";
    // Identifier for a manifest load error - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["MANIFEST_LOAD_ERROR"] = "manifestLoadError";
    // Identifier for a manifest load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["MANIFEST_LOAD_TIMEOUT"] = "manifestLoadTimeOut";
    // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
    ErrorDetails["MANIFEST_PARSING_ERROR"] = "manifestParsingError";
    // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
    ErrorDetails["MANIFEST_INCOMPATIBLE_CODECS_ERROR"] = "manifestIncompatibleCodecsError";
    // Identifier for a level which contains no fragments - data: { url: faulty URL, reason: "no fragments found in level", level: index of the bad level }
    ErrorDetails["LEVEL_EMPTY_ERROR"] = "levelEmptyError";
    // Identifier for a level load error - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["LEVEL_LOAD_ERROR"] = "levelLoadError";
    // Identifier for a level load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["LEVEL_LOAD_TIMEOUT"] = "levelLoadTimeOut";
    // Identifier for a level parse error - data: { url : faulty URL, error: Error, reason: error message }
    ErrorDetails["LEVEL_PARSING_ERROR"] = "levelParsingError";
    // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
    ErrorDetails["LEVEL_SWITCH_ERROR"] = "levelSwitchError";
    // Identifier for an audio track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["AUDIO_TRACK_LOAD_ERROR"] = "audioTrackLoadError";
    // Identifier for an audio track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["AUDIO_TRACK_LOAD_TIMEOUT"] = "audioTrackLoadTimeOut";
    // Identifier for a subtitle track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["SUBTITLE_LOAD_ERROR"] = "subtitleTrackLoadError";
    // Identifier for a subtitle track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
    ErrorDetails["SUBTITLE_TRACK_LOAD_TIMEOUT"] = "subtitleTrackLoadTimeOut";
    // Identifier for fragment load error - data: { frag : fragment object, response : { code: error code, text: error text }}
    ErrorDetails["FRAG_LOAD_ERROR"] = "fragLoadError";
    // Identifier for fragment load timeout error - data: { frag : fragment object}
    ErrorDetails["FRAG_LOAD_TIMEOUT"] = "fragLoadTimeOut";
    // Identifier for a fragment decryption error event - data: {id : demuxer Id,frag: fragment object, reason : parsing error description }
    ErrorDetails["FRAG_DECRYPT_ERROR"] = "fragDecryptError";
    // Identifier for a fragment parsing error event - data: { id : demuxer Id, reason : parsing error description }
    // will be renamed DEMUX_PARSING_ERROR and switched to MUX_ERROR in the next major release
    ErrorDetails["FRAG_PARSING_ERROR"] = "fragParsingError";
    // Identifier for a fragment or part load skipped because of a GAP tag or attribute
    ErrorDetails["FRAG_GAP"] = "fragGap";
    // Identifier for a remux alloc error event - data: { id : demuxer Id, frag : fragment object, bytes : nb of bytes on which allocation failed , reason : error text }
    ErrorDetails["REMUX_ALLOC_ERROR"] = "remuxAllocError";
    // Identifier for decrypt key load error - data: { frag : fragment object, response : { code: error code, text: error text }}
    ErrorDetails["KEY_LOAD_ERROR"] = "keyLoadError";
    // Identifier for decrypt key load timeout error - data: { frag : fragment object}
    ErrorDetails["KEY_LOAD_TIMEOUT"] = "keyLoadTimeOut";
    // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : { error : exception , mimeType : mimeType }
    ErrorDetails["BUFFER_ADD_CODEC_ERROR"] = "bufferAddCodecError";
    // Triggered when source buffer(s) could not be created using level (manifest CODECS attribute), parsed media, or best guess codec(s) - data: { reason : error reason }
    ErrorDetails["BUFFER_INCOMPATIBLE_CODECS_ERROR"] = "bufferIncompatibleCodecsError";
    // Identifier for a buffer append error - data: append error description
    ErrorDetails["BUFFER_APPEND_ERROR"] = "bufferAppendError";
    // Identifier for a buffer appending error event - data: appending error description
    ErrorDetails["BUFFER_APPENDING_ERROR"] = "bufferAppendingError";
    // Identifier for a buffer stalled error event
    ErrorDetails["BUFFER_STALLED_ERROR"] = "bufferStalledError";
    // Identifier for a buffer full event
    ErrorDetails["BUFFER_FULL_ERROR"] = "bufferFullError";
    // Identifier for a buffer seek over hole event
    ErrorDetails["BUFFER_SEEK_OVER_HOLE"] = "bufferSeekOverHole";
    // Identifier for a buffer nudge on stall (playback is stuck although currentTime is in a buffered area)
    ErrorDetails["BUFFER_NUDGE_ON_STALL"] = "bufferNudgeOnStall";
    // Identifier for a Interstitial Asset List load error - data: { url: faulty URL, response: { code: error code, text: error text } }
    ErrorDetails["ASSET_LIST_LOAD_ERROR"] = "assetListLoadError";
    // Identifier for a Interstitial Asset List load timeout - data: { url: faulty URL, response: { code: error code, text: error text } }
    ErrorDetails["ASSET_LIST_LOAD_TIMEOUT"] = "assetListLoadTimeout";
    // Identifier for a Interstitial Asset List parsing error - data: { url : faulty URL, reason : error reason, response : { code: error code, text: error text }}
    ErrorDetails["ASSET_LIST_PARSING_ERROR"] = "assetListParsingError";
    // Identifier for a Interstitial Asset List parsing error - data: { url : faulty URL, reason : error reason, response : { code: error code, text: error text }}
    ErrorDetails["INTERSTITIAL_ASSET_ITEM_ERROR"] = "interstitialAssetItemError";
    // Identifier for an internal exception happening inside hls.js while handling an event
    ErrorDetails["INTERNAL_EXCEPTION"] = "internalException";
    // Identifier for an internal call to abort a loader
    ErrorDetails["INTERNAL_ABORTED"] = "aborted";
    // Triggered when attachMedia fails
    ErrorDetails["ATTACH_MEDIA_ERROR"] = "attachMediaError";
    // Uncategorized error
    ErrorDetails["UNKNOWN"] = "unknown";
    return ErrorDetails;
  }({});

  var Events = /*#__PURE__*/function (Events) {
    // Fired before MediaSource is attaching to media element
    Events["MEDIA_ATTACHING"] = "hlsMediaAttaching";
    // Fired when MediaSource has been successfully attached to media element
    Events["MEDIA_ATTACHED"] = "hlsMediaAttached";
    // Fired before detaching MediaSource from media element
    Events["MEDIA_DETACHING"] = "hlsMediaDetaching";
    // Fired when MediaSource has been detached from media element
    Events["MEDIA_DETACHED"] = "hlsMediaDetached";
    // Fired when HTMLMediaElement dispatches "ended" event, or stalls at end of VOD program
    Events["MEDIA_ENDED"] = "hlsMediaEnded";
    // Fired after playback stall is resolved with playing, seeked, or ended event following BUFFER_STALLED_ERROR
    Events["STALL_RESOLVED"] = "hlsStallResolved";
    // Fired when the buffer is going to be reset
    Events["BUFFER_RESET"] = "hlsBufferReset";
    // Fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
    Events["BUFFER_CODECS"] = "hlsBufferCodecs";
    // fired when sourcebuffers have been created - data: { tracks : tracks }
    Events["BUFFER_CREATED"] = "hlsBufferCreated";
    // fired when we append a segment to the buffer - data: { segment: segment object }
    Events["BUFFER_APPENDING"] = "hlsBufferAppending";
    // fired when we are done with appending a media segment to the buffer - data : { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent}
    Events["BUFFER_APPENDED"] = "hlsBufferAppended";
    // fired when the stream is finished and we want to notify the media buffer that there will be no more data - data: { }
    Events["BUFFER_EOS"] = "hlsBufferEos";
    // fired when all buffers are full to the end of the program, after calling MediaSource.endOfStream() (unless restricted)
    Events["BUFFERED_TO_END"] = "hlsBufferedToEnd";
    // fired when the media buffer should be flushed - data { startOffset, endOffset }
    Events["BUFFER_FLUSHING"] = "hlsBufferFlushing";
    // fired when the media buffer has been flushed - data: { }
    Events["BUFFER_FLUSHED"] = "hlsBufferFlushed";
    // fired to signal that a manifest loading starts - data: { url : manifestURL}
    Events["MANIFEST_LOADING"] = "hlsManifestLoading";
    // fired after manifest has been loaded - data: { levels : [available quality levels], audioTracks : [ available audio tracks ], url : manifestURL, stats : LoaderStats }
    Events["MANIFEST_LOADED"] = "hlsManifestLoaded";
    // fired after manifest has been parsed - data: { levels : [available quality levels], firstLevel : index of first quality level appearing in Manifest}
    Events["MANIFEST_PARSED"] = "hlsManifestParsed";
    // fired when a level switch is requested - data: { level : id of new level }
    Events["LEVEL_SWITCHING"] = "hlsLevelSwitching";
    // fired when a level switch is effective - data: { level : id of new level }
    Events["LEVEL_SWITCHED"] = "hlsLevelSwitched";
    // fired when a level playlist loading starts - data: { url : level URL, level : id of level being loaded}
    Events["LEVEL_LOADING"] = "hlsLevelLoading";
    // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : LoaderStats }
    Events["LEVEL_LOADED"] = "hlsLevelLoaded";
    // fired when a level's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, level : id of updated level }
    Events["LEVEL_UPDATED"] = "hlsLevelUpdated";
    // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
    Events["LEVEL_PTS_UPDATED"] = "hlsLevelPtsUpdated";
    // fired to notify that levels have changed after removing a level - data: { levels : [available quality levels] }
    Events["LEVELS_UPDATED"] = "hlsLevelsUpdated";
    // fired to notify that audio track lists has been updated - data: { audioTracks : audioTracks }
    Events["AUDIO_TRACKS_UPDATED"] = "hlsAudioTracksUpdated";
    // fired when an audio track switching is requested - data: { id : audio track id }
    Events["AUDIO_TRACK_SWITCHING"] = "hlsAudioTrackSwitching";
    // fired when an audio track switch actually occurs - data: { id : audio track id }
    Events["AUDIO_TRACK_SWITCHED"] = "hlsAudioTrackSwitched";
    // fired when an audio track loading starts - data: { url : audio track URL, id : audio track id }
    Events["AUDIO_TRACK_LOADING"] = "hlsAudioTrackLoading";
    // fired when an audio track loading finishes - data: { details : levelDetails object, id : audio track id, stats : LoaderStats }
    Events["AUDIO_TRACK_LOADED"] = "hlsAudioTrackLoaded";
    // fired when an audio tracks's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, id : track id }
    Events["AUDIO_TRACK_UPDATED"] = "hlsAudioTrackUpdated";
    // fired to notify that subtitle track lists has been updated - data: { subtitleTracks : subtitleTracks }
    Events["SUBTITLE_TRACKS_UPDATED"] = "hlsSubtitleTracksUpdated";
    // fired to notify that subtitle tracks were cleared as a result of stopping the media
    Events["SUBTITLE_TRACKS_CLEARED"] = "hlsSubtitleTracksCleared";
    // fired when an subtitle track switch occurs - data: { id : subtitle track id }
    Events["SUBTITLE_TRACK_SWITCH"] = "hlsSubtitleTrackSwitch";
    // fired when a subtitle track loading starts - data: { url : subtitle track URL, id : subtitle track id }
    Events["SUBTITLE_TRACK_LOADING"] = "hlsSubtitleTrackLoading";
    // fired when a subtitle track loading finishes - data: { details : levelDetails object, id : subtitle track id, stats : LoaderStats }
    Events["SUBTITLE_TRACK_LOADED"] = "hlsSubtitleTrackLoaded";
    // fired when a subtitle  racks's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, id : track id }
    Events["SUBTITLE_TRACK_UPDATED"] = "hlsSubtitleTrackUpdated";
    // fired when a subtitle fragment has been processed - data: { success : boolean, frag : the processed frag }
    Events["SUBTITLE_FRAG_PROCESSED"] = "hlsSubtitleFragProcessed";
    // fired when a set of VTTCues to be managed externally has been parsed - data: { type: string, track: string, cues: [ VTTCue ] }
    Events["CUES_PARSED"] = "hlsCuesParsed";
    // fired when a text track to be managed externally is found - data: { tracks: [ { label: string, kind: string, default: boolean } ] }
    Events["NON_NATIVE_TEXT_TRACKS_FOUND"] = "hlsNonNativeTextTracksFound";
    // fired when the first timestamp is found - data: { id : demuxer id, initPTS: initPTS, timescale: timescale, frag : fragment object }
    Events["INIT_PTS_FOUND"] = "hlsInitPtsFound";
    // fired when a fragment loading starts - data: { frag : fragment object }
    Events["FRAG_LOADING"] = "hlsFragLoading";
    // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded } }
    // FRAG_LOAD_PROGRESS = 'hlsFragLoadProgress',
    // Identifier for fragment load aborting for emergency switch down - data: { frag : fragment object }
    Events["FRAG_LOAD_EMERGENCY_ABORTED"] = "hlsFragLoadEmergencyAborted";
    // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : LoaderStats }
    Events["FRAG_LOADED"] = "hlsFragLoaded";
    // fired when a fragment has finished decrypting - data: { id : demuxer id, frag: fragment object, payload : fragment payload, stats : { tstart, tdecrypt } }
    Events["FRAG_DECRYPTED"] = "hlsFragDecrypted";
    // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, frag: fragment object, moov : moov MP4 box, codecs : codecs found while parsing fragment }
    Events["FRAG_PARSING_INIT_SEGMENT"] = "hlsFragParsingInitSegment";
    // fired when parsing sei text is completed - data: { id : demuxer id, frag: fragment object, samples : [ sei samples pes ] }
    Events["FRAG_PARSING_USERDATA"] = "hlsFragParsingUserdata";
    // fired when parsing id3 is completed - data: { id : demuxer id, frag: fragment object, samples : [ id3 samples pes ] }
    Events["FRAG_PARSING_METADATA"] = "hlsFragParsingMetadata";
    // fired when data have been extracted from fragment - data: { id : demuxer id, frag: fragment object, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
    // FRAG_PARSING_DATA = 'hlsFragParsingData',
    // fired when fragment parsing is completed - data: { id : demuxer id, frag: fragment object }
    Events["FRAG_PARSED"] = "hlsFragParsed";
    // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id, frag : fragment object, stats : LoaderStats }
    Events["FRAG_BUFFERED"] = "hlsFragBuffered";
    // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
    Events["FRAG_CHANGED"] = "hlsFragChanged";
    // Identifier for a FPS drop event - data: { currentDropped, currentDecoded, totalDroppedFrames }
    Events["FPS_DROP"] = "hlsFpsDrop";
    // triggered when FPS drop triggers auto level capping - data: { level, droppedLevel }
    Events["FPS_DROP_LEVEL_CAPPING"] = "hlsFpsDropLevelCapping";
    // triggered when maxAutoLevel changes - data { autoLevelCapping, levels, maxAutoLevel, minAutoLevel, maxHdcpLevel }
    Events["MAX_AUTO_LEVEL_UPDATED"] = "hlsMaxAutoLevelUpdated";
    // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data }
    Events["ERROR"] = "hlsError";
    // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example - data: { }
    Events["DESTROYING"] = "hlsDestroying";
    // fired when a decrypt key loading starts - data: { frag : fragment object }
    Events["KEY_LOADING"] = "hlsKeyLoading";
    // fired when a decrypt key loading is completed - data: { frag : fragment object, keyInfo : KeyLoaderInfo }
    Events["KEY_LOADED"] = "hlsKeyLoaded";
    // deprecated; please use BACK_BUFFER_REACHED - data : { bufferEnd: number }
    Events["LIVE_BACK_BUFFER_REACHED"] = "hlsLiveBackBufferReached";
    // fired when the back buffer is reached as defined by the backBufferLength config option - data : { bufferEnd: number }
    Events["BACK_BUFFER_REACHED"] = "hlsBackBufferReached";
    // fired after steering manifest has been loaded - data: { steeringManifest: SteeringManifest object, url: steering manifest URL }
    Events["STEERING_MANIFEST_LOADED"] = "hlsSteeringManifestLoaded";
    // fired when asset list has begun loading
    Events["ASSET_LIST_LOADING"] = "hlsAssetListLoading";
    // fired when a valid asset list is loaded
    Events["ASSET_LIST_LOADED"] = "hlsAssetListLoaded";
    // fired when the list of Interstitial Events and Interstitial Schedule is updated
    Events["INTERSTITIALS_UPDATED"] = "hlsInterstitialsUpdated";
    // fired when the buffer reaches an Interstitial Schedule boundary (both Primary segments and Interstitial Assets)
    Events["INTERSTITIALS_BUFFERED_TO_BOUNDARY"] = "hlsInterstitialsBufferedToBoundary";
    // fired when a player instance for an Interstitial Asset has been created
    Events["INTERSTITIAL_ASSET_PLAYER_CREATED"] = "hlsInterstitialAssetPlayerCreated";
    // Interstitial playback started
    Events["INTERSTITIAL_STARTED"] = "hlsInterstitialStarted";
    // InterstitialAsset playback started
    Events["INTERSTITIAL_ASSET_STARTED"] = "hlsInterstitialAssetStarted";
    // InterstitialAsset playback ended
    Events["INTERSTITIAL_ASSET_ENDED"] = "hlsInterstitialAssetEnded";
    // InterstitialAsset playback errored
    Events["INTERSTITIAL_ASSET_ERROR"] = "hlsInterstitialAssetError";
    // Interstitial playback ended
    Events["INTERSTITIAL_ENDED"] = "hlsInterstitialEnded";
    // Interstitial schedule resumed primary playback
    Events["INTERSTITIALS_PRIMARY_RESUMED"] = "hlsInterstitialsPrimaryResumed";
    // Interstitial players dispatch this event when playout limit is reached
    Events["PLAYOUT_LIMIT_REACHED"] = "hlsPlayoutLimitReached";
    // Event DateRange cue "enter" event dispatched
    Events["EVENT_CUE_ENTER"] = "hlsEventCueEnter";
    return Events;
  }({});

  /**
   * Defines each Event type and payload by Event name. Used in {@link hls.js#HlsEventEmitter} to strongly type the event listener API.
   */

  var PlaylistContextType = {
    MANIFEST: "manifest",
    LEVEL: "level",
    AUDIO_TRACK: "audioTrack",
    SUBTITLE_TRACK: "subtitleTrack"
  };
  var PlaylistLevelType = {
    MAIN: "main",
    AUDIO: "audio",
    SUBTITLE: "subtitle"
  };

  /*
   * compute an Exponential Weighted moving average
   * - https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
   *  - heavily inspired from shaka-player
   */
  var EWMA = /*#__PURE__*/function () {
    //  About half of the estimated value will be from the last |halfLife| samples by weight.
    function EWMA(halfLife, estimate, weight) {
      if (estimate === void 0) {
        estimate = 0;
      }
      if (weight === void 0) {
        weight = 0;
      }
      this.halfLife = void 0;
      this.alpha_ = void 0;
      this.estimate_ = void 0;
      this.totalWeight_ = void 0;
      this.halfLife = halfLife;
      // Larger values of alpha expire historical data more slowly.
      this.alpha_ = halfLife ? Math.exp(Math.log(0.5) / halfLife) : 0;
      this.estimate_ = estimate;
      this.totalWeight_ = weight;
    }
    var _proto = EWMA.prototype;
    _proto.sample = function sample(weight, value) {
      var adjAlpha = Math.pow(this.alpha_, weight);
      this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_;
      this.totalWeight_ += weight;
    };
    _proto.getTotalWeight = function getTotalWeight() {
      return this.totalWeight_;
    };
    _proto.getEstimate = function getEstimate() {
      if (this.alpha_) {
        var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
        if (zeroFactor) {
          return this.estimate_ / zeroFactor;
        }
      }
      return this.estimate_;
    };
    return EWMA;
  }();

  var EwmaBandWidthEstimator = /*#__PURE__*/function () {
    function EwmaBandWidthEstimator(slow, fast, defaultEstimate, defaultTTFB) {
      if (defaultTTFB === void 0) {
        defaultTTFB = 100;
      }
      this.defaultEstimate_ = void 0;
      this.minWeight_ = void 0;
      this.minDelayMs_ = void 0;
      this.slow_ = void 0;
      this.fast_ = void 0;
      this.defaultTTFB_ = void 0;
      this.ttfb_ = void 0;
      this.defaultEstimate_ = defaultEstimate;
      this.minWeight_ = 0.001;
      this.minDelayMs_ = 50;
      this.slow_ = new EWMA(slow);
      this.fast_ = new EWMA(fast);
      this.defaultTTFB_ = defaultTTFB;
      this.ttfb_ = new EWMA(slow);
    }
    var _proto = EwmaBandWidthEstimator.prototype;
    _proto.update = function update(slow, fast) {
      var slow_ = this.slow_,
        fast_ = this.fast_,
        ttfb_ = this.ttfb_;
      if (slow_.halfLife !== slow) {
        this.slow_ = new EWMA(slow, slow_.getEstimate(), slow_.getTotalWeight());
      }
      if (fast_.halfLife !== fast) {
        this.fast_ = new EWMA(fast, fast_.getEstimate(), fast_.getTotalWeight());
      }
      if (ttfb_.halfLife !== slow) {
        this.ttfb_ = new EWMA(slow, ttfb_.getEstimate(), ttfb_.getTotalWeight());
      }
    };
    _proto.sample = function sample(durationMs, numBytes) {
      durationMs = Math.max(durationMs, this.minDelayMs_);
      var numBits = 8 * numBytes;
      // weight is duration in seconds
      var durationS = durationMs / 1000;
      // value is bandwidth in bits/s
      var bandwidthInBps = numBits / durationS;
      this.fast_.sample(durationS, bandwidthInBps);
      this.slow_.sample(durationS, bandwidthInBps);
    };
    _proto.sampleTTFB = function sampleTTFB(ttfb) {
      // weight is frequency curve applied to TTFB in seconds
      // (longer times have less weight with expected input under 1 second)
      var seconds = ttfb / 1000;
      var weight = Math.sqrt(2) * Math.exp(-Math.pow(seconds, 2) / 2);
      this.ttfb_.sample(weight, Math.max(ttfb, 5));
    };
    _proto.canEstimate = function canEstimate() {
      return this.fast_.getTotalWeight() >= this.minWeight_;
    };
    _proto.getEstimate = function getEstimate() {
      if (this.canEstimate()) {
        // console.log('slow estimate:'+ Math.round(this.slow_.getEstimate()));
        // console.log('fast estimate:'+ Math.round(this.fast_.getEstimate()));
        // Take the minimum of these two estimates.  This should have the effect of
        // adapting down quickly, but up more slowly.
        return Math.min(this.fast_.getEstimate(), this.slow_.getEstimate());
      } else {
        return this.defaultEstimate_;
      }
    };
    _proto.getEstimateTTFB = function getEstimateTTFB() {
      if (this.ttfb_.getTotalWeight() >= this.minWeight_) {
        return this.ttfb_.getEstimate();
      } else {
        return this.defaultTTFB_;
      }
    };
    _proto.destroy = function destroy() {};
    return _createClass(EwmaBandWidthEstimator, [{
      key: "defaultEstimate",
      get: function get() {
        return this.defaultEstimate_;
      }
    }]);
  }();

  var Logger = function Logger(label, logger) {
    this.trace = void 0;
    this.debug = void 0;
    this.log = void 0;
    this.warn = void 0;
    this.info = void 0;
    this.error = void 0;
    var lb = "[" + label + "]:";
    this.trace = noop;
    this.debug = logger.debug.bind(null, lb);
    this.log = logger.log.bind(null, lb);
    this.warn = logger.warn.bind(null, lb);
    this.info = logger.info.bind(null, lb);
    this.error = logger.error.bind(null, lb);
  };
  var noop = function noop() {};
  var fakeLogger = {
    trace: noop,
    debug: noop,
    log: noop,
    warn: noop,
    info: noop,
    error: noop
  };
  function createLogger() {
    return _extends({}, fakeLogger);
  }

  // let lastCallTime;
  // function formatMsgWithTimeInfo(type, msg) {
  //   const now = Date.now();
  //   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
  //   lastCallTime = now;
  //   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
  //   return msg;
  // }

  function consolePrintFn(type, id) {
    var func = self.console[type];
    return func ? func.bind(self.console, (id ? '[' + id + '] ' : '') + "[" + type + "] >") : noop;
  }
  function getLoggerFn(key, debugConfig, id) {
    return debugConfig[key] ? debugConfig[key].bind(debugConfig) : consolePrintFn(key, id);
  }
  var exportedLogger = createLogger();
  function enableLogs(debugConfig, context, id) {
    // check that console is available
    var newLogger = createLogger();
    if (typeof console === 'object' && debugConfig === true || typeof debugConfig === 'object') {
      var keys = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      'debug', 'log', 'info', 'warn', 'error'];
      keys.forEach(function (key) {
        newLogger[key] = getLoggerFn(key, debugConfig, id);
      });
      // Some browsers don't allow to use bind on console object anyway
      // fallback to default if needed
      try {
        newLogger.log("Debug logs enabled for \"" + context + "\" in hls.js version " + "1.6.2");
      } catch (e) {
        /* log fn threw an exception. All logger methods are no-ops. */
        return createLogger();
      }
      // global exported logger uses the same functions as new logger without `id`
      keys.forEach(function (key) {
        exportedLogger[key] = getLoggerFn(key, debugConfig);
      });
    } else {
      // Reset global exported logger
      _extends(exportedLogger, newLogger);
    }
    return newLogger;
  }
  var logger = exportedLogger;

  function getMediaSource(preferManagedMediaSource) {
    if (preferManagedMediaSource === void 0) {
      preferManagedMediaSource = true;
    }
    if (typeof self === 'undefined') return undefined;
    var mms = (preferManagedMediaSource || !self.MediaSource) && self.ManagedMediaSource;
    return mms || self.MediaSource || self.WebKitMediaSource;
  }
  function isManagedMediaSource(source) {
    return typeof self !== 'undefined' && source === self.ManagedMediaSource;
  }
  function isCompatibleTrackChange(currentTracks, requiredTracks) {
    var trackNames = Object.keys(currentTracks);
    var requiredTrackNames = Object.keys(requiredTracks);
    var trackCount = trackNames.length;
    var requiredTrackCount = requiredTrackNames.length;
    return !trackCount || !requiredTrackCount || trackCount === requiredTrackCount && !trackNames.some(function (name) {
      return requiredTrackNames.indexOf(name) === -1;
    });
  }

  // http://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript/22373197
  // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
  /* utf.js - UTF-8 <=> UTF-16 convertion
   *
   * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
   * Version: 1.0
   * LastModified: Dec 25 1999
   * This library is free.  You can redistribute it and/or modify it.
   */
  /**
   * Converts a UTF-8 array to a string.
   *
   * @param array - The UTF-8 array to convert
   *
   * @returns The string
   *
   * @group Utils
   *
   * @beta
   */
  function utf8ArrayToStr(array, exitOnNull) {
    if (exitOnNull === void 0) {
      exitOnNull = false;
    }
    if (typeof TextDecoder !== 'undefined') {
      var decoder = new TextDecoder('utf-8');
      var decoded = decoder.decode(array);
      if (exitOnNull) {
        // grab up to the first null
        var idx = decoded.indexOf('\0');
        return idx !== -1 ? decoded.substring(0, idx) : decoded;
      }
      // remove any null characters
      return decoded.replace(/\0/g, '');
    }
    var len = array.length;
    var c;
    var char2;
    var char3;
    var out = '';
    var i = 0;
    while (i < len) {
      c = array[i++];
      if (c === 0x00 && exitOnNull) {
        return out;
      } else if (c === 0x00 || c === 0x03) {
        // If the character is 3 (END_OF_TEXT) or 0 (NULL) then skip it
        continue;
      }
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          out += String.fromCharCode(c);
          break;
        case 12:
        case 13:
          // 110x xxxx   10xx xxxx
          char2 = array[i++];
          out += String.fromCharCode((c & 0x1f) << 6 | char2 & 0x3f);
          break;
        case 14:
          // 1110 xxxx  10xx xxxx  10xx xxxx
          char2 = array[i++];
          char3 = array[i++];
          out += String.fromCharCode((c & 0x0f) << 12 | (char2 & 0x3f) << 6 | (char3 & 0x3f) << 0);
          break;
      }
    }
    return out;
  }

  /**
   *  hex dump helper class
   */

  var Hex = {
    hexDump: function hexDump(array) {
      var str = '';
      for (var i = 0; i < array.length; i++) {
        var h = array[i].toString(16);
        if (h.length < 2) {
          h = '0' + h;
        }
        str += h;
      }
      return str;
    }
  };

  var LoadStats = function LoadStats() {
    this.aborted = false;
    this.loaded = 0;
    this.retry = 0;
    this.total = 0;
    this.chunkCount = 0;
    this.bwEstimate = 0;
    this.loading = {
      start: 0,
      first: 0,
      end: 0
    };
    this.parsing = {
      start: 0,
      end: 0
    };
    this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  };

  var ElementaryStreamTypes = {
    AUDIO: "audio",
    VIDEO: "video",
    AUDIOVIDEO: "audiovideo"
  };
  var BaseSegment = /*#__PURE__*/function () {
    function BaseSegment(base) {
      this._byteRange = null;
      this._url = null;
      this._stats = null;
      this._streams = null;
      // baseurl is the URL to the playlist
      this.base = void 0;
      // relurl is the portion of the URL that comes from inside the playlist.
      this.relurl = void 0;
      if (typeof base === 'string') {
        base = {
          url: base
        };
      }
      this.base = base;
      makeEnumerable(this, 'stats');
    }

    // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
    var _proto = BaseSegment.prototype;
    _proto.setByteRange = function setByteRange(value, previous) {
      var params = value.split('@', 2);
      var start;
      if (params.length === 1) {
        start = (previous == null ? void 0 : previous.byteRangeEndOffset) || 0;
      } else {
        start = parseInt(params[1]);
      }
      this._byteRange = [start, parseInt(params[0]) + start];
    };
    _proto.clearElementaryStreamInfo = function clearElementaryStreamInfo() {
      var elementaryStreams = this.elementaryStreams;
      elementaryStreams[ElementaryStreamTypes.AUDIO] = null;
      elementaryStreams[ElementaryStreamTypes.VIDEO] = null;
      elementaryStreams[ElementaryStreamTypes.AUDIOVIDEO] = null;
    };
    return _createClass(BaseSegment, [{
      key: "baseurl",
      get: function get() {
        return this.base.url;
      }
    }, {
      key: "byteRange",
      get: function get() {
        if (this._byteRange === null) {
          return [];
        }
        return this._byteRange;
      }
    }, {
      key: "byteRangeStartOffset",
      get: function get() {
        return this.byteRange[0];
      }
    }, {
      key: "byteRangeEndOffset",
      get: function get() {
        return this.byteRange[1];
      }
    }, {
      key: "elementaryStreams",
      get: function get() {
        if (this._streams === null) {
          var _this$_streams;
          this._streams = (_this$_streams = {}, _this$_streams[ElementaryStreamTypes.AUDIO] = null, _this$_streams[ElementaryStreamTypes.VIDEO] = null, _this$_streams[ElementaryStreamTypes.AUDIOVIDEO] = null, _this$_streams);
        }
        return this._streams;
      },
      set: function set(value) {
        this._streams = value;
      }
    }, {
      key: "hasStats",
      get: function get() {
        return this._stats !== null;
      }
    }, {
      key: "hasStreams",
      get: function get() {
        return this._streams !== null;
      }
    }, {
      key: "stats",
      get: function get() {
        if (this._stats === null) {
          this._stats = new LoadStats();
        }
        return this._stats;
      },
      set: function set(value) {
        this._stats = value;
      }
    }, {
      key: "url",
      get: function get() {
        if (!this._url && this.baseurl && this.relurl) {
          this._url = urlToolkitExports.buildAbsoluteURL(this.baseurl, this.relurl, {
            alwaysNormalize: true
          });
        }
        return this._url || '';
      },
      set: function set(value) {
        this._url = value;
      }
    }]);
  }();
  function isMediaFragment(frag) {
    return frag.sn !== 'initSegment';
  }

  /**
   * Object representing parsed data from an HLS Segment. Found in {@link hls.js#LevelDetails.fragments}.
   */
  var Fragment = /*#__PURE__*/function (_BaseSegment2) {
    function Fragment(type, base) {
      var _this;
      _this = _BaseSegment2.call(this, base) || this;
      _this._decryptdata = null;
      _this._programDateTime = null;
      _this._ref = null;
      // Approximate bit rate of the fragment expressed in bits per second (bps) as indicated by the last EXT-X-BITRATE (kbps) tag
      _this._bitrate = void 0;
      _this.rawProgramDateTime = null;
      _this.tagList = [];
      // EXTINF has to be present for a m3u8 to be considered valid
      _this.duration = 0;
      // sn notates the sequence number for a segment, and if set to a string can be 'initSegment'
      _this.sn = 0;
      // levelkeys are the EXT-X-KEY tags that apply to this segment for decryption
      // core difference from the private field _decryptdata is the lack of the initialized IV
      // _decryptdata will set the IV for this segment based on the segment number in the fragment
      _this.levelkeys = void 0;
      // A string representing the fragment type
      _this.type = void 0;
      // A reference to the loader. Set while the fragment is loading, and removed afterwards. Used to abort fragment loading
      _this.loader = null;
      // A reference to the key loader. Set while the key is loading, and removed afterwards. Used to abort key loading
      _this.keyLoader = null;
      // The level/track index to which the fragment belongs
      _this.level = -1;
      // The continuity counter of the fragment
      _this.cc = 0;
      // The starting Presentation Time Stamp (PTS) of the fragment. Set after transmux complete.
      _this.startPTS = void 0;
      // The ending Presentation Time Stamp (PTS) of the fragment. Set after transmux complete.
      _this.endPTS = void 0;
      // The starting Decode Time Stamp (DTS) of the fragment. Set after transmux complete.
      _this.startDTS = void 0;
      // The ending Decode Time Stamp (DTS) of the fragment. Set after transmux complete.
      _this.endDTS = void 0;
      // The start time of the fragment, as listed in the manifest. Updated after transmux complete.
      _this.start = 0;
      // The offset time (seconds) of the fragment from the start of the Playlist
      _this.playlistOffset = 0;
      // Set by `updateFragPTSDTS` in level-helper
      _this.deltaPTS = void 0;
      // The maximum starting Presentation Time Stamp (audio/video PTS) of the fragment. Set after transmux complete.
      _this.maxStartPTS = void 0;
      // The minimum ending Presentation Time Stamp (audio/video PTS) of the fragment. Set after transmux complete.
      _this.minEndPTS = void 0;
      // Init Segment bytes (unset for media segments)
      _this.data = void 0;
      // A flag indicating whether the segment was downloaded in order to test bitrate, and was not buffered
      _this.bitrateTest = false;
      // #EXTINF  segment title
      _this.title = null;
      // The Media Initialization Section for this segment
      _this.initSegment = null;
      // Fragment is the last fragment in the media playlist
      _this.endList = void 0;
      // Fragment is marked by an EXT-X-GAP tag indicating that it does not contain media data and should not be loaded
      _this.gap = void 0;
      // Deprecated
      _this.urlId = 0;
      _this.type = type;
      return _this;
    }
    _inheritsLoose(Fragment, _BaseSegment2);
    var _proto2 = Fragment.prototype;
    _proto2.addStart = function addStart(value) {
      this.setStart(this.start + value);
    };
    _proto2.setStart = function setStart(value) {
      this.start = value;
      if (this._ref) {
        this._ref.start = value;
      }
    };
    _proto2.setDuration = function setDuration(value) {
      this.duration = value;
      if (this._ref) {
        this._ref.duration = value;
      }
    };
    _proto2.setKeyFormat = function setKeyFormat(keyFormat) {
      if (this.levelkeys) {
        var key = this.levelkeys[keyFormat];
        if (key && !this._decryptdata) {
          this._decryptdata = key.getDecryptData(this.sn);
        }
      }
    };
    _proto2.abortRequests = function abortRequests() {
      var _this$loader, _this$keyLoader;
      (_this$loader = this.loader) == null ? void 0 : _this$loader.abort();
      (_this$keyLoader = this.keyLoader) == null ? void 0 : _this$keyLoader.abort();
    };
    _proto2.setElementaryStreamInfo = function setElementaryStreamInfo(type, startPTS, endPTS, startDTS, endDTS, partial) {
      if (partial === void 0) {
        partial = false;
      }
      var elementaryStreams = this.elementaryStreams;
      var info = elementaryStreams[type];
      if (!info) {
        elementaryStreams[type] = {
          startPTS: startPTS,
          endPTS: endPTS,
          startDTS: startDTS,
          endDTS: endDTS,
          partial: partial
        };
        return;
      }
      info.startPTS = Math.min(info.startPTS, startPTS);
      info.endPTS = Math.max(info.endPTS, endPTS);
      info.startDTS = Math.min(info.startDTS, startDTS);
      info.endDTS = Math.max(info.endDTS, endDTS);
    };
    return _createClass(Fragment, [{
      key: "byteLength",
      get: function get() {
        if (this.hasStats) {
          var total = this.stats.total;
          if (total) {
            return total;
          }
        }
        if (this.byteRange) {
          var start = this.byteRange[0];
          var end = this.byteRange[1];
          if (isFiniteNumber(start) && isFiniteNumber(end)) {
            return end - start;
          }
        }
        return null;
      }
    }, {
      key: "bitrate",
      get: function get() {
        if (this.byteLength) {
          return this.byteLength * 8 / this.duration;
        }
        if (this._bitrate) {
          return this._bitrate;
        }
        return null;
      },
      set: function set(value) {
        this._bitrate = value;
      }
    }, {
      key: "decryptdata",
      get: function get() {
        var levelkeys = this.levelkeys;
        if (!levelkeys && !this._decryptdata) {
          return null;
        }
        if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
          var key = this.levelkeys.identity;
          if (key) {
            this._decryptdata = key.getDecryptData(this.sn);
          } else {
            var keyFormats = Object.keys(this.levelkeys);
            if (keyFormats.length === 1) {
              return this._decryptdata = this.levelkeys[keyFormats[0]].getDecryptData(this.sn);
            }
          }
        }
        return this._decryptdata;
      }
    }, {
      key: "end",
      get: function get() {
        return this.start + this.duration;
      }
    }, {
      key: "endProgramDateTime",
      get: function get() {
        if (this.programDateTime === null) {
          return null;
        }
        var duration = !isFiniteNumber(this.duration) ? 0 : this.duration;
        return this.programDateTime + duration * 1000;
      }
    }, {
      key: "encrypted",
      get: function get() {
        var _this$_decryptdata;
        // At the m3u8-parser level we need to add support for manifest signalled keyformats
        // when we want the fragment to start reporting that it is encrypted.
        // Currently, keyFormat will only be set for identity keys
        if ((_this$_decryptdata = this._decryptdata) != null && _this$_decryptdata.encrypted) {
          return true;
        } else if (this.levelkeys) {
          var keyFormats = Object.keys(this.levelkeys);
          var len = keyFormats.length;
          if (len > 1 || len === 1 && this.levelkeys[keyFormats[0]].encrypted) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "programDateTime",
      get: function get() {
        if (this._programDateTime === null && this.rawProgramDateTime) {
          this.programDateTime = Date.parse(this.rawProgramDateTime);
        }
        return this._programDateTime;
      },
      set: function set(value) {
        if (!isFiniteNumber(value)) {
          this._programDateTime = this.rawProgramDateTime = null;
          return;
        }
        this._programDateTime = value;
      }
    }, {
      key: "ref",
      get: function get() {
        if (!isMediaFragment(this)) {
          return null;
        }
        if (!this._ref) {
          this._ref = {
            base: this.base,
            start: this.start,
            duration: this.duration,
            sn: this.sn,
            programDateTime: this.programDateTime
          };
        }
        return this._ref;
      }
    }]);
  }(BaseSegment);

  /**
   * Object representing parsed data from an HLS Partial Segment. Found in {@link hls.js#LevelDetails.partList}.
   */
  var Part = /*#__PURE__*/function (_BaseSegment3) {
    function Part(partAttrs, frag, base, index, previous) {
      var _this2;
      _this2 = _BaseSegment3.call(this, base) || this;
      _this2.fragOffset = 0;
      _this2.duration = 0;
      _this2.gap = false;
      _this2.independent = false;
      _this2.relurl = void 0;
      _this2.fragment = void 0;
      _this2.index = void 0;
      _this2.duration = partAttrs.decimalFloatingPoint('DURATION');
      _this2.gap = partAttrs.bool('GAP');
      _this2.independent = partAttrs.bool('INDEPENDENT');
      _this2.relurl = partAttrs.enumeratedString('URI');
      _this2.fragment = frag;
      _this2.index = index;
      var byteRange = partAttrs.enumeratedString('BYTERANGE');
      if (byteRange) {
        _this2.setByteRange(byteRange, previous);
      }
      if (previous) {
        _this2.fragOffset = previous.fragOffset + previous.duration;
      }
      return _this2;
    }
    _inheritsLoose(Part, _BaseSegment3);
    return _createClass(Part, [{
      key: "start",
      get: function get() {
        return this.fragment.start + this.fragOffset;
      }
    }, {
      key: "end",
      get: function get() {
        return this.start + this.duration;
      }
    }, {
      key: "loaded",
      get: function get() {
        var elementaryStreams = this.elementaryStreams;
        return !!(elementaryStreams.audio || elementaryStreams.video || elementaryStreams.audiovideo);
      }
    }]);
  }(BaseSegment);
  function getOwnPropertyDescriptorFromPrototypeChain(object, property) {
    var prototype = Object.getPrototypeOf(object);
    if (prototype) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, property);
      if (propertyDescriptor) {
        return propertyDescriptor;
      }
      return getOwnPropertyDescriptorFromPrototypeChain(prototype, property);
    }
  }
  function makeEnumerable(object, property) {
    var d = getOwnPropertyDescriptorFromPrototypeChain(object, property);
    if (d) {
      d.enumerable = true;
      Object.defineProperty(object, property, d);
    }
  }

  var UINT32_MAX$1 = Math.pow(2, 32) - 1;
  var push = [].push;

  // We are using fixed track IDs for driving the MP4 remuxer
  // instead of following the TS PIDs.
  // There is no reason not to do this and some browsers/SourceBuffer-demuxers
  // may not like if there are TrackID "switches"
  // See https://github.com/video-dev/hls.js/issues/1331
  // Here we are mapping our internal track types to constant MP4 track IDs
  // With MSE currently one can only have one track of each, and we are muxing
  // whatever video/audio rendition in them.
  var RemuxerTrackIdConfig = {
    video: 1,
    audio: 2,
    id3: 3,
    text: 4
  };
  function bin2str(data) {
    return String.fromCharCode.apply(null, data);
  }
  function readUint16(buffer, offset) {
    var val = buffer[offset] << 8 | buffer[offset + 1];
    return val < 0 ? 65536 + val : val;
  }
  function readUint32(buffer, offset) {
    var val = readSint32(buffer, offset);
    return val < 0 ? 4294967296 + val : val;
  }
  function readUint64(buffer, offset) {
    var result = readUint32(buffer, offset);
    result *= Math.pow(2, 32);
    result += readUint32(buffer, offset + 4);
    return result;
  }
  function readSint32(buffer, offset) {
    return buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
  }
  function writeUint32(buffer, offset, value) {
    buffer[offset] = value >> 24;
    buffer[offset + 1] = value >> 16 & 0xff;
    buffer[offset + 2] = value >> 8 & 0xff;
    buffer[offset + 3] = value & 0xff;
  }

  // Find "moof" box
  function hasMoofData(data) {
    var end = data.byteLength;
    for (var i = 0; i < end;) {
      var size = readUint32(data, i);
      if (size > 8 && data[i + 4] === 0x6d && data[i + 5] === 0x6f && data[i + 6] === 0x6f && data[i + 7] === 0x66) {
        return true;
      }
      i = size > 1 ? i + size : end;
    }
    return false;
  }

  // Find the data for a box specified by its path
  function findBox(data, path) {
    var results = [];
    if (!path.length) {
      // short-circuit the search for empty paths
      return results;
    }
    var end = data.byteLength;
    for (var i = 0; i < end;) {
      var size = readUint32(data, i);
      var type = bin2str(data.subarray(i + 4, i + 8));
      var endbox = size > 1 ? i + size : end;
      if (type === path[0]) {
        if (path.length === 1) {
          // this is the end of the path and we've found the box we were
          // looking for
          results.push(data.subarray(i + 8, endbox));
        } else {
          // recursively search for the next box along the path
          var subresults = findBox(data.subarray(i + 8, endbox), path.slice(1));
          if (subresults.length) {
            push.apply(results, subresults);
          }
        }
      }
      i = endbox;
    }

    // we've finished searching all of data
    return results;
  }
  function parseSegmentIndex(sidx) {
    var references = [];
    var version = sidx[0];

    // set initial offset, we skip the reference ID (not needed)
    var index = 8;
    var timescale = readUint32(sidx, index);
    index += 4;
    var earliestPresentationTime = 0;
    var firstOffset = 0;
    if (version === 0) {
      earliestPresentationTime = readUint32(sidx, index);
      firstOffset = readUint32(sidx, index + 4);
      index += 8;
    } else {
      earliestPresentationTime = readUint64(sidx, index);
      firstOffset = readUint64(sidx, index + 8);
      index += 16;
    }

    // skip reserved
    index += 2;
    var startByte = sidx.length + firstOffset;
    var referencesCount = readUint16(sidx, index);
    index += 2;
    for (var i = 0; i < referencesCount; i++) {
      var referenceIndex = index;
      var referenceInfo = readUint32(sidx, referenceIndex);
      referenceIndex += 4;
      var referenceSize = referenceInfo & 0x7fffffff;
      var referenceType = (referenceInfo & 0x80000000) >>> 31;
      if (referenceType === 1) {
        logger.warn('SIDX has hierarchical references (not supported)');
        return null;
      }
      var subsegmentDuration = readUint32(sidx, referenceIndex);
      referenceIndex += 4;
      references.push({
        referenceSize: referenceSize,
        subsegmentDuration: subsegmentDuration,
        // unscaled
        info: {
          duration: subsegmentDuration / timescale,
          start: startByte,
          end: startByte + referenceSize - 1
        }
      });
      startByte += referenceSize;

      // Skipping 1 bit for |startsWithSap|, 3 bits for |sapType|, and 28 bits
      // for |sapDelta|.
      referenceIndex += 4;

      // skip to next ref
      index = referenceIndex;
    }
    return {
      earliestPresentationTime: earliestPresentationTime,
      timescale: timescale,
      version: version,
      referencesCount: referencesCount,
      references: references
    };
  }

  /**
   * Parses an MP4 initialization segment and extracts stream type and
   * timescale values for any declared tracks. Timescale values indicate the
   * number of clock ticks per second to assume for time-based values
   * elsewhere in the MP4.
   *
   * To determine the start time of an MP4, you need two pieces of
   * information: the timescale unit and the earliest base media decode
   * time. Multiple timescales can be specified within an MP4 but the
   * base media decode time is always expressed in the timescale from
   * the media header box for the track:
   * ```
   * moov > trak > mdia > mdhd.timescale
   * moov > trak > mdia > hdlr
   * ```
   * @param initSegment the bytes of the init segment
   * @returns a hash of track type to timescale values or null if
   * the init segment is malformed.
   */

  function parseInitSegment(initSegment) {
    var result = [];
    var traks = findBox(initSegment, ['moov', 'trak']);
    for (var i = 0; i < traks.length; i++) {
      var trak = traks[i];
      var tkhd = findBox(trak, ['tkhd'])[0];
      if (tkhd) {
        var version = tkhd[0];
        var trackId = readUint32(tkhd, version === 0 ? 12 : 20);
        var mdhd = findBox(trak, ['mdia', 'mdhd'])[0];
        if (mdhd) {
          version = mdhd[0];
          var timescale = readUint32(mdhd, version === 0 ? 12 : 20);
          var hdlr = findBox(trak, ['mdia', 'hdlr'])[0];
          if (hdlr) {
            var hdlrType = bin2str(hdlr.subarray(8, 12));
            var type = {
              soun: ElementaryStreamTypes.AUDIO,
              vide: ElementaryStreamTypes.VIDEO
            }[hdlrType];
            // Parse codec details
            var stsdBox = findBox(trak, ['mdia', 'minf', 'stbl', 'stsd'])[0];
            var stsd = parseStsd(stsdBox);
            if (type) {
              // Add 'audio', 'video', and 'audiovideo' track records that will map to SourceBuffers
              result[trackId] = {
                timescale: timescale,
                type: type,
                stsd: stsd
              };
              result[type] = _objectSpread2({
                timescale: timescale,
                id: trackId
              }, stsd);
            } else {
              // Add 'meta' and other track records required by `offsetStartDTS`
              result[trackId] = {
                timescale: timescale,
                type: hdlrType,
                stsd: stsd
              };
            }
          }
        }
      }
    }
    var trex = findBox(initSegment, ['moov', 'mvex', 'trex']);
    trex.forEach(function (trex) {
      var trackId = readUint32(trex, 4);
      var track = result[trackId];
      if (track) {
        track.default = {
          duration: readUint32(trex, 12),
          flags: readUint32(trex, 20)
        };
      }
    });
    return result;
  }
  function parseStsd(stsd) {
    var sampleEntries = stsd.subarray(8);
    var sampleEntriesEnd = sampleEntries.subarray(8 + 78);
    var fourCC = bin2str(sampleEntries.subarray(4, 8));
    var codec = fourCC;
    var supplemental;
    var encrypted = fourCC === 'enca' || fourCC === 'encv';
    if (encrypted) {
      var encBox = findBox(sampleEntries, [fourCC])[0];
      var encBoxChildren = encBox.subarray(fourCC === 'enca' ? 28 : 78);
      var sinfs = findBox(encBoxChildren, ['sinf']);
      sinfs.forEach(function (sinf) {
        var schm = findBox(sinf, ['schm'])[0];
        if (schm) {
          var scheme = bin2str(schm.subarray(4, 8));
          if (scheme === 'cbcs' || scheme === 'cenc') {
            var frma = findBox(sinf, ['frma'])[0];
            if (frma) {
              // for encrypted content codec fourCC will be in frma
              codec = bin2str(frma);
            }
          }
        }
      });
    }
    var codecFourCC = codec;
    switch (codec) {
      case 'avc1':
      case 'avc2':
      case 'avc3':
      case 'avc4':
        {
          // extract profile + compatibility + level out of avcC box
          var avcCBox = findBox(sampleEntriesEnd, ['avcC'])[0];
          if (avcCBox && avcCBox.length > 3) {
            codec += '.' + toHex(avcCBox[1]) + toHex(avcCBox[2]) + toHex(avcCBox[3]);
            supplemental = parseSupplementalDoViCodec(codecFourCC === 'avc1' ? 'dva1' : 'dvav', sampleEntriesEnd);
          }
          break;
        }
      case 'mp4a':
        {
          var codecBox = findBox(sampleEntries, [fourCC])[0];
          var esdsBox = findBox(codecBox.subarray(28), ['esds'])[0];
          if (esdsBox && esdsBox.length > 7) {
            var i = 4;
            // ES Descriptor tag
            if (esdsBox[i++] !== 0x03) {
              break;
            }
            i = skipBERInteger(esdsBox, i);
            i += 2; // skip es_id;
            var flags = esdsBox[i++];
            if (flags & 0x80) {
              i += 2; // skip dependency es_id
            }
            if (flags & 0x40) {
              i += esdsBox[i++]; // skip URL
            }
            // Decoder config descriptor
            if (esdsBox[i++] !== 0x04) {
              break;
            }
            i = skipBERInteger(esdsBox, i);
            var objectType = esdsBox[i++];
            if (objectType === 0x40) {
              codec += '.' + toHex(objectType);
            } else {
              break;
            }
            i += 12;
            // Decoder specific info
            if (esdsBox[i++] !== 0x05) {
              break;
            }
            i = skipBERInteger(esdsBox, i);
            var firstByte = esdsBox[i++];
            var audioObjectType = (firstByte & 0xf8) >> 3;
            if (audioObjectType === 31) {
              audioObjectType += 1 + ((firstByte & 0x7) << 3) + ((esdsBox[i] & 0xe0) >> 5);
            }
            codec += '.' + audioObjectType;
          }
          break;
        }
      case 'hvc1':
      case 'hev1':
        {
          var hvcCBox = findBox(sampleEntriesEnd, ['hvcC'])[0];
          if (hvcCBox && hvcCBox.length > 12) {
            var profileByte = hvcCBox[1];
            var profileSpace = ['', 'A', 'B', 'C'][profileByte >> 6];
            var generalProfileIdc = profileByte & 0x1f;
            var profileCompat = readUint32(hvcCBox, 2);
            var tierFlag = (profileByte & 0x20) >> 5 ? 'H' : 'L';
            var levelIDC = hvcCBox[12];
            var constraintIndicator = hvcCBox.subarray(6, 12);
            codec += '.' + profileSpace + generalProfileIdc;
            codec += '.' + profileCompat.toString(16).toUpperCase();
            codec += '.' + tierFlag + levelIDC;
            var constraintString = '';
            for (var _i = constraintIndicator.length; _i--;) {
              var _byte = constraintIndicator[_i];
              if (_byte || constraintString) {
                var encodedByte = _byte.toString(16).toUpperCase();
                constraintString = '.' + encodedByte + constraintString;
              }
            }
            codec += constraintString;
          }
          supplemental = parseSupplementalDoViCodec(codecFourCC == 'hev1' ? 'dvhe' : 'dvh1', sampleEntriesEnd);
          break;
        }
      case 'dvh1':
      case 'dvhe':
      case 'dvav':
      case 'dva1':
      case 'dav1':
        {
          codec = parseSupplementalDoViCodec(codec, sampleEntriesEnd) || codec;
          break;
        }
      case 'vp09':
        {
          var vpcCBox = findBox(sampleEntriesEnd, ['vpcC'])[0];
          if (vpcCBox && vpcCBox.length > 6) {
            var profile = vpcCBox[4];
            var level = vpcCBox[5];
            var bitDepth = vpcCBox[6] >> 4 & 0x0f;
            codec += '.' + addLeadingZero(profile) + '.' + addLeadingZero(level) + '.' + addLeadingZero(bitDepth);
          }
          break;
        }
      case 'av01':
        {
          var av1CBox = findBox(sampleEntriesEnd, ['av1C'])[0];
          if (av1CBox && av1CBox.length > 2) {
            var _profile = av1CBox[1] >>> 5;
            var _level = av1CBox[1] & 0x1f;
            var _tierFlag = av1CBox[2] >>> 7 ? 'H' : 'M';
            var highBitDepth = (av1CBox[2] & 0x40) >> 6;
            var twelveBit = (av1CBox[2] & 0x20) >> 5;
            var _bitDepth = _profile === 2 && highBitDepth ? twelveBit ? 12 : 10 : highBitDepth ? 10 : 8;
            var monochrome = (av1CBox[2] & 0x10) >> 4;
            var chromaSubsamplingX = (av1CBox[2] & 0x08) >> 3;
            var chromaSubsamplingY = (av1CBox[2] & 0x04) >> 2;
            var chromaSamplePosition = av1CBox[2] & 0x03;
            // TODO: parse color_description_present_flag
            // default it to BT.709/limited range for now
            // more info https://aomediacodec.github.io/av1-isobmff/#av1codecconfigurationbox-syntax
            var colorPrimaries = 1;
            var transferCharacteristics = 1;
            var matrixCoefficients = 1;
            var videoFullRangeFlag = 0;
            codec += '.' + _profile + '.' + addLeadingZero(_level) + _tierFlag + '.' + addLeadingZero(_bitDepth) + '.' + monochrome + '.' + chromaSubsamplingX + chromaSubsamplingY + chromaSamplePosition + '.' + addLeadingZero(colorPrimaries) + '.' + addLeadingZero(transferCharacteristics) + '.' + addLeadingZero(matrixCoefficients) + '.' + videoFullRangeFlag;
            supplemental = parseSupplementalDoViCodec('dav1', sampleEntriesEnd);
          }
          break;
        }
    }
    return {
      codec: codec,
      encrypted: encrypted,
      supplemental: supplemental
    };
  }
  function parseSupplementalDoViCodec(fourCC, sampleEntriesEnd) {
    var dvvCResult = findBox(sampleEntriesEnd, ['dvvC']); // used by DoVi Profile 8 to 10
    var dvXCBox = dvvCResult.length ? dvvCResult[0] : findBox(sampleEntriesEnd, ['dvcC'])[0]; // used by DoVi Profiles up to 7 and 20
    if (dvXCBox) {
      var doViProfile = dvXCBox[2] >> 1 & 0x7f;
      var doViLevel = dvXCBox[2] << 5 & 0x20 | dvXCBox[3] >> 3 & 0x1f;
      return fourCC + '.' + addLeadingZero(doViProfile) + '.' + addLeadingZero(doViLevel);
    }
  }
  function skipBERInteger(bytes, i) {
    var limit = i + 5;
    while (bytes[i++] & 0x80 && i < limit) {
      /* do nothing */
    }
    return i;
  }
  function toHex(x) {
    return ('0' + x.toString(16).toUpperCase()).slice(-2);
  }
  function addLeadingZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  function patchEncyptionData(initSegment, decryptdata) {
    if (!initSegment || !decryptdata) {
      return initSegment;
    }
    var keyId = decryptdata.keyId;
    if (keyId && decryptdata.isCommonEncryption) {
      var traks = findBox(initSegment, ['moov', 'trak']);
      traks.forEach(function (trak) {
        var stsd = findBox(trak, ['mdia', 'minf', 'stbl', 'stsd'])[0];

        // skip the sample entry count
        var sampleEntries = stsd.subarray(8);
        var encBoxes = findBox(sampleEntries, ['enca']);
        var isAudio = encBoxes.length > 0;
        if (!isAudio) {
          encBoxes = findBox(sampleEntries, ['encv']);
        }
        encBoxes.forEach(function (enc) {
          var encBoxChildren = isAudio ? enc.subarray(28) : enc.subarray(78);
          var sinfBoxes = findBox(encBoxChildren, ['sinf']);
          sinfBoxes.forEach(function (sinf) {
            var tenc = parseSinf(sinf);
            if (tenc) {
              // Look for default key id (keyID offset is always 8 within the tenc box):
              var tencKeyId = tenc.subarray(8, 24);
              if (!tencKeyId.some(function (b) {
                return b !== 0;
              })) {
                logger.log("[eme] Patching keyId in 'enc" + (isAudio ? 'a' : 'v') + ">sinf>>tenc' box: " + Hex.hexDump(tencKeyId) + " -> " + Hex.hexDump(keyId));
                tenc.set(keyId, 8);
              }
            }
          });
        });
      });
    }
    return initSegment;
  }
  function parseSinf(sinf) {
    var schm = findBox(sinf, ['schm'])[0];
    if (schm) {
      var scheme = bin2str(schm.subarray(4, 8));
      if (scheme === 'cbcs' || scheme === 'cenc') {
        return findBox(sinf, ['schi', 'tenc'])[0];
      }
    }
    return null;
  }

  /**
   * Determine the base media decode start time, in seconds, for an MP4
   * fragment. If multiple fragments are specified, the earliest time is
   * returned.
   *
   * The base media decode time can be parsed from track fragment
   * metadata:
   * ```
   * moof > traf > tfdt.baseMediaDecodeTime
   * ```
   * It requires the timescale value from the mdhd to interpret.
   *
   * @param initData - a hash of track type to timescale values
   * @param fmp4 - the bytes of the mp4 fragment
   * @returns the earliest base media decode start time for the
   * fragment, in seconds
   */
  function getStartDTS(initData, fmp4) {
    // we need info from two children of each track fragment box
    return findBox(fmp4, ['moof', 'traf']).reduce(function (result, traf) {
      var tfdt = findBox(traf, ['tfdt'])[0];
      var version = tfdt[0];
      var start = findBox(traf, ['tfhd']).reduce(function (result, tfhd) {
        // get the track id from the tfhd
        var id = readUint32(tfhd, 4);
        var track = initData[id];
        if (track) {
          var baseTime = readUint32(tfdt, 4);
          if (version === 1) {
            // If value is too large, assume signed 64-bit. Negative track fragment decode times are invalid, but they exist in the wild.
            // This prevents large values from being used for initPTS, which can cause playlist sync issues.
            // https://github.com/video-dev/hls.js/issues/5303
            if (baseTime === UINT32_MAX$1) {
              logger.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time");
              return result;
            }
            baseTime *= UINT32_MAX$1 + 1;
            baseTime += readUint32(tfdt, 8);
          }
          // assume a 90kHz clock if no timescale was specified
          var scale = track.timescale || 90e3;
          // convert base time to seconds
          var startTime = baseTime / scale;
          if (isFiniteNumber(startTime) && (result === null || startTime < result)) {
            return startTime;
          }
        }
        return result;
      }, null);
      if (start !== null && isFiniteNumber(start) && (result === null || start < result)) {
        return start;
      }
      return result;
    }, null);
  }

  /*
    For Reference:
    aligned(8) class TrackFragmentHeaderBox
             extends FullBox(â€˜tfhdâ€™, 0, tf_flags){
       unsigned int(32)  track_ID;
       // all the following are optional fields
       unsigned int(64)  base_data_offset;
       unsigned int(32)  sample_description_index;
       unsigned int(32)  default_sample_duration;
       unsigned int(32)  default_sample_size;
       unsigned int(32)  default_sample_flags
    }
   */
  function getDuration(data, initData) {
    var rawDuration = 0;
    var videoDuration = 0;
    var audioDuration = 0;
    var trafs = findBox(data, ['moof', 'traf']);
    for (var i = 0; i < trafs.length; i++) {
      var traf = trafs[i];
      // There is only one tfhd & trun per traf
      // This is true for CMAF style content, and we should perhaps check the ftyp
      // and only look for a single trun then, but for ISOBMFF we should check
      // for multiple track runs.
      var tfhd = findBox(traf, ['tfhd'])[0];
      // get the track id from the tfhd
      var id = readUint32(tfhd, 4);
      var track = initData[id];
      if (!track) {
        continue;
      }
      var trackDefault = track.default;
      var tfhdFlags = readUint32(tfhd, 0) | (trackDefault == null ? void 0 : trackDefault.flags);
      var sampleDuration = trackDefault == null ? void 0 : trackDefault.duration;
      if (tfhdFlags & 0x000008) {
        // 0x000008 indicates the presence of the default_sample_duration field
        if (tfhdFlags & 0x000002) {
          // 0x000002 indicates the presence of the sample_description_index field, which precedes default_sample_duration
          // If present, the default_sample_duration exists at byte offset 12
          sampleDuration = readUint32(tfhd, 12);
        } else {
          // Otherwise, the duration is at byte offset 8
          sampleDuration = readUint32(tfhd, 8);
        }
      }
      // assume a 90kHz clock if no timescale was specified
      var timescale = track.timescale || 90e3;
      var truns = findBox(traf, ['trun']);
      for (var j = 0; j < truns.length; j++) {
        rawDuration = computeRawDurationFromSamples(truns[j]);
        if (!rawDuration && sampleDuration) {
          var sampleCount = readUint32(truns[j], 4);
          rawDuration = sampleDuration * sampleCount;
        }
        if (track.type === ElementaryStreamTypes.VIDEO) {
          videoDuration += rawDuration / timescale;
        } else if (track.type === ElementaryStreamTypes.AUDIO) {
          audioDuration += rawDuration / timescale;
        }
      }
    }
    if (videoDuration === 0 && audioDuration === 0) {
      // If duration samples are not available in the traf use sidx subsegment_duration
      var sidxMinStart = Infinity;
      var sidxMaxEnd = 0;
      var sidxDuration = 0;
      var sidxs = findBox(data, ['sidx']);
      for (var _i2 = 0; _i2 < sidxs.length; _i2++) {
        var sidx = parseSegmentIndex(sidxs[_i2]);
        if (sidx != null && sidx.references) {
          sidxMinStart = Math.min(sidxMinStart, sidx.earliestPresentationTime / sidx.timescale);
          var subSegmentDuration = sidx.references.reduce(function (dur, ref) {
            return dur + ref.info.duration || 0;
          }, 0);
          sidxMaxEnd = Math.max(sidxMaxEnd, subSegmentDuration + sidx.earliestPresentationTime / sidx.timescale);
          sidxDuration = sidxMaxEnd - sidxMinStart;
        }
      }
      if (sidxDuration && isFiniteNumber(sidxDuration)) {
        return sidxDuration;
      }
    }
    if (videoDuration) {
      return videoDuration;
    }
    return audioDuration;
  }

  /*
    For Reference:
    aligned(8) class TrackRunBox
             extends FullBox(â€˜trunâ€™, version, tr_flags) {
       unsigned int(32)  sample_count;
       // the following are optional fields
       signed int(32) data_offset;
       unsigned int(32)  first_sample_flags;
       // all fields in the following array are optional
       {
          unsigned int(32)  sample_duration;
          unsigned int(32)  sample_size;
          unsigned int(32)  sample_flags
          if (version == 0)
             { unsigned int(32)
          else
             { signed int(32)
       }[ sample_count ]
    }
   */
  function computeRawDurationFromSamples(trun) {
    var flags = readUint32(trun, 0);
    // Flags are at offset 0, non-optional sample_count is at offset 4. Therefore we start 8 bytes in.
    // Each field is an int32, which is 4 bytes
    var offset = 8;
    // data-offset-present flag
    if (flags & 0x000001) {
      offset += 4;
    }
    // first-sample-flags-present flag
    if (flags & 0x000004) {
      offset += 4;
    }
    var duration = 0;
    var sampleCount = readUint32(trun, 4);
    for (var i = 0; i < sampleCount; i++) {
      // sample-duration-present flag
      if (flags & 0x000100) {
        var sampleDuration = readUint32(trun, offset);
        duration += sampleDuration;
        offset += 4;
      }
      // sample-size-present flag
      if (flags & 0x000200) {
        offset += 4;
      }
      // sample-flags-present flag
      if (flags & 0x000400) {
        offset += 4;
      }
      // sample-composition-time-offsets-present flag
      if (flags & 0x000800) {
        offset += 4;
      }
    }
    return duration;
  }

  // TODO: Remove `offsetStartDTS` in favor of using `timestampOffset` (issue #5715)
  function offsetStartDTS(initData, fmp4, timeOffset) {
    findBox(fmp4, ['moof', 'traf']).forEach(function (traf) {
      findBox(traf, ['tfhd']).forEach(function (tfhd) {
        // get the track id from the tfhd
        var id = readUint32(tfhd, 4);
        var track = initData[id];
        if (!track) {
          return;
        }
        // assume a 90kHz clock if no timescale was specified
        var timescale = track.timescale || 90e3;
        // get the base media decode time from the tfdt
        findBox(traf, ['tfdt']).forEach(function (tfdt) {
          var version = tfdt[0];
          var offset = timeOffset * timescale;
          if (offset) {
            var baseMediaDecodeTime = readUint32(tfdt, 4);
            if (version === 0) {
              baseMediaDecodeTime -= offset;
              baseMediaDecodeTime = Math.max(baseMediaDecodeTime, 0);
              writeUint32(tfdt, 4, baseMediaDecodeTime);
            } else {
              baseMediaDecodeTime *= Math.pow(2, 32);
              baseMediaDecodeTime += readUint32(tfdt, 8);
              baseMediaDecodeTime -= offset;
              baseMediaDecodeTime = Math.max(baseMediaDecodeTime, 0);
              var upper = Math.floor(baseMediaDecodeTime / (UINT32_MAX$1 + 1));
              var lower = Math.floor(baseMediaDecodeTime % (UINT32_MAX$1 + 1));
              writeUint32(tfdt, 4, upper);
              writeUint32(tfdt, 8, lower);
            }
          }
        });
      });
    });
  }

  // TODO: Check if the last moof+mdat pair is part of the valid range
  function segmentValidRange(data) {
    var segmentedRange = {
      valid: null,
      remainder: null
    };
    var moofs = findBox(data, ['moof']);
    if (moofs.length < 2) {
      segmentedRange.remainder = data;
      return segmentedRange;
    }
    var last = moofs[moofs.length - 1];
    // Offset by 8 bytes; findBox offsets the start by as much
    segmentedRange.valid = data.slice(0, last.byteOffset - 8);
    segmentedRange.remainder = data.slice(last.byteOffset - 8);
    return segmentedRange;
  }
  function appendUint8Array(data1, data2) {
    var temp = new Uint8Array(data1.length + data2.length);
    temp.set(data1);
    temp.set(data2, data1.length);
    return temp;
  }
  function parseSamples(timeOffset, track) {
    var seiSamples = [];
    var videoData = track.samples;
    var timescale = track.timescale;
    var trackId = track.id;
    var isHEVCFlavor = false;
    var moofs = findBox(videoData, ['moof']);
    moofs.map(function (moof) {
      var moofOffset = moof.byteOffset - 8;
      var trafs = findBox(moof, ['traf']);
      trafs.map(function (traf) {
        // get the base media decode time from the tfdt
        var baseTime = findBox(traf, ['tfdt']).map(function (tfdt) {
          var version = tfdt[0];
          var result = readUint32(tfdt, 4);
          if (version === 1) {
            result *= Math.pow(2, 32);
            result += readUint32(tfdt, 8);
          }
          return result / timescale;
        })[0];
        if (baseTime !== undefined) {
          timeOffset = baseTime;
        }
        return findBox(traf, ['tfhd']).map(function (tfhd) {
          var id = readUint32(tfhd, 4);
          var tfhdFlags = readUint32(tfhd, 0) & 0xffffff;
          var baseDataOffsetPresent = (tfhdFlags & 0x000001) !== 0;
          var sampleDescriptionIndexPresent = (tfhdFlags & 0x000002) !== 0;
          var defaultSampleDurationPresent = (tfhdFlags & 0x000008) !== 0;
          var defaultSampleDuration = 0;
          var defaultSampleSizePresent = (tfhdFlags & 0x000010) !== 0;
          var defaultSampleSize = 0;
          var defaultSampleFlagsPresent = (tfhdFlags & 0x000020) !== 0;
          var tfhdOffset = 8;
          if (id === trackId) {
            if (baseDataOffsetPresent) {
              tfhdOffset += 8;
            }
            if (sampleDescriptionIndexPresent) {
              tfhdOffset += 4;
            }
            if (defaultSampleDurationPresent) {
              defaultSampleDuration = readUint32(tfhd, tfhdOffset);
              tfhdOffset += 4;
            }
            if (defaultSampleSizePresent) {
              defaultSampleSize = readUint32(tfhd, tfhdOffset);
              tfhdOffset += 4;
            }
            if (defaultSampleFlagsPresent) {
              tfhdOffset += 4;
            }
            if (track.type === 'video') {
              isHEVCFlavor = isHEVC(track.codec);
            }
            findBox(traf, ['trun']).map(function (trun) {
              var version = trun[0];
              var flags = readUint32(trun, 0) & 0xffffff;
              var dataOffsetPresent = (flags & 0x000001) !== 0;
              var dataOffset = 0;
              var firstSampleFlagsPresent = (flags & 0x000004) !== 0;
              var sampleDurationPresent = (flags & 0x000100) !== 0;
              var sampleDuration = 0;
              var sampleSizePresent = (flags & 0x000200) !== 0;
              var sampleSize = 0;
              var sampleFlagsPresent = (flags & 0x000400) !== 0;
              var sampleCompositionOffsetsPresent = (flags & 0x000800) !== 0;
              var compositionOffset = 0;
              var sampleCount = readUint32(trun, 4);
              var trunOffset = 8; // past version, flags, and sample count

              if (dataOffsetPresent) {
                dataOffset = readUint32(trun, trunOffset);
                trunOffset += 4;
              }
              if (firstSampleFlagsPresent) {
                trunOffset += 4;
              }
              var sampleOffset = dataOffset + moofOffset;
              for (var ix = 0; ix < sampleCount; ix++) {
                if (sampleDurationPresent) {
                  sampleDuration = readUint32(trun, trunOffset);
                  trunOffset += 4;
                } else {
                  sampleDuration = defaultSampleDuration;
                }
                if (sampleSizePresent) {
                  sampleSize = readUint32(trun, trunOffset);
                  trunOffset += 4;
                } else {
                  sampleSize = defaultSampleSize;
                }
                if (sampleFlagsPresent) {
                  trunOffset += 4;
                }
                if (sampleCompositionOffsetsPresent) {
                  if (version === 0) {
                    compositionOffset = readUint32(trun, trunOffset);
                  } else {
                    compositionOffset = readSint32(trun, trunOffset);
                  }
                  trunOffset += 4;
                }
                if (track.type === ElementaryStreamTypes.VIDEO) {
                  var naluTotalSize = 0;
                  while (naluTotalSize < sampleSize) {
                    var naluSize = readUint32(videoData, sampleOffset);
                    sampleOffset += 4;
                    if (isSEIMessage(isHEVCFlavor, videoData[sampleOffset])) {
                      var data = videoData.subarray(sampleOffset, sampleOffset + naluSize);
                      parseSEIMessageFromNALu(data, isHEVCFlavor ? 2 : 1, timeOffset + compositionOffset / timescale, seiSamples);
                    }
                    sampleOffset += naluSize;
                    naluTotalSize += naluSize + 4;
                  }
                }
                timeOffset += sampleDuration / timescale;
              }
            });
          }
        });
      });
    });
    return seiSamples;
  }
  function isHEVC(codec) {
    if (!codec) {
      return false;
    }
    var baseCodec = codec.substring(0, 4);
    return baseCodec === 'hvc1' || baseCodec === 'hev1' ||
    // Dolby Vision
    baseCodec === 'dvh1' || baseCodec === 'dvhe';
  }
  function isSEIMessage(isHEVCFlavor, naluHeader) {
    if (isHEVCFlavor) {
      var naluType = naluHeader >> 1 & 0x3f;
      return naluType === 39 || naluType === 40;
    } else {
      var _naluType = naluHeader & 0x1f;
      return _naluType === 6;
    }
  }
  function parseSEIMessageFromNALu(unescapedData, headerSize, pts, samples) {
    var data = discardEPB(unescapedData);
    var seiPtr = 0;
    // skip nal header
    seiPtr += headerSize;
    var payloadType = 0;
    var payloadSize = 0;
    var b = 0;
    while (seiPtr < data.length) {
      payloadType = 0;
      do {
        if (seiPtr >= data.length) {
          break;
        }
        b = data[seiPtr++];
        payloadType += b;
      } while (b === 0xff);

      // Parse payload size.
      payloadSize = 0;
      do {
        if (seiPtr >= data.length) {
          break;
        }
        b = data[seiPtr++];
        payloadSize += b;
      } while (b === 0xff);
      var leftOver = data.length - seiPtr;
      // Create a variable to process the payload
      var payPtr = seiPtr;

      // Increment the seiPtr to the end of the payload
      if (payloadSize < leftOver) {
        seiPtr += payloadSize;
      } else if (payloadSize > leftOver) {
        // Some type of corruption has happened?
        logger.error("Malformed SEI payload. " + payloadSize + " is too small, only " + leftOver + " bytes left to parse.");
        // We might be able to parse some data, but let's be safe and ignore it.
        break;
      }
      if (payloadType === 4) {
        var countryCode = data[payPtr++];
        if (countryCode === 181) {
          var providerCode = readUint16(data, payPtr);
          payPtr += 2;
          if (providerCode === 49) {
            var userStructure = readUint32(data, payPtr);
            payPtr += 4;
            if (userStructure === 0x47413934) {
              var userDataType = data[payPtr++];

              // Raw CEA-608 bytes wrapped in CEA-708 packet
              if (userDataType === 3) {
                var firstByte = data[payPtr++];
                var totalCCs = 0x1f & firstByte;
                var enabled = 0x40 & firstByte;
                var totalBytes = enabled ? 2 + totalCCs * 3 : 0;
                var byteArray = new Uint8Array(totalBytes);
                if (enabled) {
                  byteArray[0] = firstByte;
                  for (var i = 1; i < totalBytes; i++) {
                    byteArray[i] = data[payPtr++];
                  }
                }
                samples.push({
                  type: userDataType,
                  payloadType: payloadType,
                  pts: pts,
                  bytes: byteArray
                });
              }
            }
          }
        }
      } else if (payloadType === 5) {
        if (payloadSize > 16) {
          var uuidStrArray = [];
          for (var _i3 = 0; _i3 < 16; _i3++) {
            var _b = data[payPtr++].toString(16);
            uuidStrArray.push(_b.length == 1 ? '0' + _b : _b);
            if (_i3 === 3 || _i3 === 5 || _i3 === 7 || _i3 === 9) {
              uuidStrArray.push('-');
            }
          }
          var length = payloadSize - 16;
          var userDataBytes = new Uint8Array(length);
          for (var _i4 = 0; _i4 < length; _i4++) {
            userDataBytes[_i4] = data[payPtr++];
          }
          samples.push({
            payloadType: payloadType,
            pts: pts,
            uuid: uuidStrArray.join(''),
            userData: utf8ArrayToStr(userDataBytes),
            userDataBytes: userDataBytes
          });
        }
      }
    }
  }

  /**
   * remove Emulation Prevention bytes from a RBSP
   */
  function discardEPB(data) {
    var length = data.byteLength;
    var EPBPositions = [];
    var i = 1;

    // Find all `Emulation Prevention Bytes`
    while (i < length - 2) {
      if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
        EPBPositions.push(i + 2);
        i += 2;
      } else {
        i++;
      }
    }

    // If no Emulation Prevention Bytes were found just return the original
    // array
    if (EPBPositions.length === 0) {
      return data;
    }

    // Create a new array to hold the NAL unit data
    var newLength = length - EPBPositions.length;
    var newData = new Uint8Array(newLength);
    var sourceIndex = 0;
    for (i = 0; i < newLength; sourceIndex++, i++) {
      if (sourceIndex === EPBPositions[0]) {
        // Skip this byte
        sourceIndex++;
        // Remove this position index
        EPBPositions.shift();
      }
      newData[i] = data[sourceIndex];
    }
    return newData;
  }
  function parseEmsg(data) {
    var version = data[0];
    var schemeIdUri = '';
    var value = '';
    var timeScale = 0;
    var presentationTimeDelta = 0;
    var presentationTime = 0;
    var eventDuration = 0;
    var id = 0;
    var offset = 0;
    if (version === 0) {
      while (bin2str(data.subarray(offset, offset + 1)) !== '\0') {
        schemeIdUri += bin2str(data.subarray(offset, offset + 1));
        offset += 1;
      }
      schemeIdUri += bin2str(data.subarray(offset, offset + 1));
      offset += 1;
      while (bin2str(data.subarray(offset, offset + 1)) !== '\0') {
        value += bin2str(data.subarray(offset, offset + 1));
        offset += 1;
      }
      value += bin2str(data.subarray(offset, offset + 1));
      offset += 1;
      timeScale = readUint32(data, 12);
      presentationTimeDelta = readUint32(data, 16);
      eventDuration = readUint32(data, 20);
      id = readUint32(data, 24);
      offset = 28;
    } else if (version === 1) {
      offset += 4;
      timeScale = readUint32(data, offset);
      offset += 4;
      var leftPresentationTime = readUint32(data, offset);
      offset += 4;
      var rightPresentationTime = readUint32(data, offset);
      offset += 4;
      presentationTime = Math.pow(2, 32) * leftPresentationTime + rightPresentationTime;
      if (!isSafeInteger(presentationTime)) {
        presentationTime = Number.MAX_SAFE_INTEGER;
        logger.warn('Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box');
      }
      eventDuration = readUint32(data, offset);
      offset += 4;
      id = readUint32(data, offset);
      offset += 4;
      while (bin2str(data.subarray(offset, offset + 1)) !== '\0') {
        schemeIdUri += bin2str(data.subarray(offset, offset + 1));
        offset += 1;
      }
      schemeIdUri += bin2str(data.subarray(offset, offset + 1));
      offset += 1;
      while (bin2str(data.subarray(offset, offset + 1)) !== '\0') {
        value += bin2str(data.subarray(offset, offset + 1));
        offset += 1;
      }
      value += bin2str(data.subarray(offset, offset + 1));
      offset += 1;
    }
    var payload = data.subarray(offset, data.byteLength);
    return {
      schemeIdUri: schemeIdUri,
      value: value,
      timeScale: timeScale,
      presentationTime: presentationTime,
      presentationTimeDelta: presentationTimeDelta,
      eventDuration: eventDuration,
      id: id,
      payload: payload
    };
  }
  function mp4Box(type) {
    for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      payload[_key - 1] = arguments[_key];
    }
    var len = payload.length;
    var size = 8;
    var i = len;
    while (i--) {
      size += payload[i].byteLength;
    }
    var result = new Uint8Array(size);
    result[0] = size >> 24 & 0xff;
    result[1] = size >> 16 & 0xff;
    result[2] = size >> 8 & 0xff;
    result[3] = size & 0xff;
    result.set(type, 4);
    for (i = 0, size = 8; i < len; i++) {
      result.set(payload[i], size);
      size += payload[i].byteLength;
    }
    return result;
  }
  function mp4pssh(systemId, keyids, data) {
    if (systemId.byteLength !== 16) {
      throw new RangeError('Invalid system id');
    }
    var version;
    var kids;
    {
      version = 0;
      kids = new Uint8Array();
    }
    var kidCount;
    if (version > 0) {
      kidCount = new Uint8Array(4);
      if (keyids.length > 0) {
        new DataView(kidCount.buffer).setUint32(0, keyids.length, false);
      }
    } else {
      kidCount = new Uint8Array();
    }
    var dataSize = new Uint8Array(4);
    if (data && data.byteLength > 0) {
      new DataView(dataSize.buffer).setUint32(0, data.byteLength, false);
    }
    return mp4Box([112, 115, 115, 104], new Uint8Array([version, 0x00, 0x00, 0x00 // Flags
    ]), systemId,
    // 16 bytes
    kidCount, kids, dataSize, data || new Uint8Array());
  }
  function parseMultiPssh(initData) {
    var results = [];
    if (initData instanceof ArrayBuffer) {
      var length = initData.byteLength;
      var offset = 0;
      while (offset + 32 < length) {
        var view = new DataView(initData, offset);
        var pssh = parsePssh(view);
        results.push(pssh);
        offset += pssh.size;
      }
    }
    return results;
  }
  function parsePssh(view) {
    var size = view.getUint32(0);
    var offset = view.byteOffset;
    var length = view.byteLength;
    if (length < size) {
      return {
        offset: offset,
        size: length
      };
    }
    var type = view.getUint32(4);
    if (type !== 0x70737368) {
      return {
        offset: offset,
        size: size
      };
    }
    var version = view.getUint32(8) >>> 24;
    if (version !== 0 && version !== 1) {
      return {
        offset: offset,
        size: size
      };
    }
    var buffer = view.buffer;
    var systemId = Hex.hexDump(new Uint8Array(buffer, offset + 12, 16));
    var dataSizeOrKidCount = view.getUint32(28);
    var kids = null;
    var data = null;
    if (version === 0) {
      if (size - 32 < dataSizeOrKidCount || dataSizeOrKidCount < 22) {
        return {
          offset: offset,
          size: size
        };
      }
      data = new Uint8Array(buffer, offset + 32, dataSizeOrKidCount);
    } else if (version === 1) {
      if (!dataSizeOrKidCount || length < offset + 32 + dataSizeOrKidCount * 16 + 16) {
        return {
          offset: offset,
          size: size
        };
      }
      kids = [];
      for (var i = 0; i < dataSizeOrKidCount; i++) {
        kids.push(new Uint8Array(buffer, offset + 32 + i * 16, 16));
      }
    }
    return {
      version: version,
      systemId: systemId,
      kids: kids,
      data: data,
      offset: offset,
      size: size
    };
  }

  var userAgentHevcSupportIsInaccurate = function userAgentHevcSupportIsInaccurate() {
    return /\(Windows.+Firefox\//i.test(navigator.userAgent);
  };

  // from http://mp4ra.org/codecs.html
  // values indicate codec selection preference (lower is higher priority)
  var sampleEntryCodesISO = {
    audio: {
      a3ds: 1,
      'ac-3': 0.95,
      'ac-4': 1,
      alac: 0.9,
      alaw: 1,
      dra1: 1,
      'dts+': 1,
      'dts-': 1,
      dtsc: 1,
      dtse: 1,
      dtsh: 1,
      'ec-3': 0.9,
      enca: 1,
      fLaC: 0.9,
      // MP4-RA listed codec entry for FLAC
      flac: 0.9,
      // legacy browser codec name for FLAC
      FLAC: 0.9,
      // some manifests may list "FLAC" with Apple's tools
      g719: 1,
      g726: 1,
      m4ae: 1,
      mha1: 1,
      mha2: 1,
      mhm1: 1,
      mhm2: 1,
      mlpa: 1,
      mp4a: 1,
      'raw ': 1,
      Opus: 1,
      opus: 1,
      // browsers expect this to be lowercase despite MP4RA says 'Opus'
      samr: 1,
      sawb: 1,
      sawp: 1,
      sevc: 1,
      sqcp: 1,
      ssmv: 1,
      twos: 1,
      ulaw: 1
    },
    video: {
      avc1: 1,
      avc2: 1,
      avc3: 1,
      avc4: 1,
      avcp: 1,
      av01: 0.8,
      dav1: 0.8,
      drac: 1,
      dva1: 1,
      dvav: 1,
      dvh1: 0.7,
      dvhe: 0.7,
      encv: 1,
      hev1: 0.75,
      hvc1: 0.75,
      mjp2: 1,
      mp4v: 1,
      mvc1: 1,
      mvc2: 1,
      mvc3: 1,
      mvc4: 1,
      resv: 1,
      rv60: 1,
      s263: 1,
      svc1: 1,
      svc2: 1,
      'vc-1': 1,
      vp08: 1,
      vp09: 0.9
    },
    text: {
      stpp: 1,
      wvtt: 1
    }
  };
  function isCodecType(codec, type) {
    var typeCodes = sampleEntryCodesISO[type];
    return !!typeCodes && !!typeCodes[codec.slice(0, 4)];
  }
  function areCodecsMediaSourceSupported(codecs, type, preferManagedMediaSource) {
    if (preferManagedMediaSource === void 0) {
      preferManagedMediaSource = true;
    }
    return !codecs.split(',').some(function (codec) {
      return !isCodecMediaSourceSupported(codec, type, preferManagedMediaSource);
    });
  }
  function isCodecMediaSourceSupported(codec, type, preferManagedMediaSource) {
    var _MediaSource$isTypeSu;
    if (preferManagedMediaSource === void 0) {
      preferManagedMediaSource = true;
    }
    var MediaSource = getMediaSource(preferManagedMediaSource);
    return (_MediaSource$isTypeSu = MediaSource == null ? void 0 : MediaSource.isTypeSupported(mimeTypeForCodec(codec, type))) != null ? _MediaSource$isTypeSu : false;
  }
  function mimeTypeForCodec(codec, type) {
    return type + "/mp4;codecs=" + codec;
  }
  function videoCodecPreferenceValue(videoCodec) {
    if (videoCodec) {
      var fourCC = videoCodec.substring(0, 4);
      return sampleEntryCodesISO.video[fourCC];
    }
    return 2;
  }
  function codecsSetSelectionPreferenceValue(codecSet) {
    var limitedHevcSupport = userAgentHevcSupportIsInaccurate();
    return codecSet.split(',').reduce(function (num, fourCC) {
      var lowerPriority = limitedHevcSupport && isHEVC(fourCC);
      var preferenceValue = lowerPriority ? 9 : sampleEntryCodesISO.video[fourCC];
      if (preferenceValue) {
        return (preferenceValue * 2 + num) / (num ? 3 : 2);
      }
      return (sampleEntryCodesISO.audio[fourCC] + num) / (num ? 2 : 1);
    }, 0);
  }
  var CODEC_COMPATIBLE_NAMES = {};
  function getCodecCompatibleNameLower(lowerCaseCodec, preferManagedMediaSource) {
    if (preferManagedMediaSource === void 0) {
      preferManagedMediaSource = true;
    }
    if (CODEC_COMPATIBLE_NAMES[lowerCaseCodec]) {
      return CODEC_COMPATIBLE_NAMES[lowerCaseCodec];
    }
    var codecsToCheck = {
      // Idealy fLaC and Opus would be first (spec-compliant) but
      // some browsers will report that fLaC is supported then fail.
      // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
      flac: ['flac', 'fLaC', 'FLAC'],
      opus: ['opus', 'Opus'],
      // Replace audio codec info if browser does not support mp4a.40.34,
      // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
      'mp4a.40.34': ['mp3']
    }[lowerCaseCodec];
    for (var i = 0; i < codecsToCheck.length; i++) {
      var _getMediaSource;
      if (isCodecMediaSourceSupported(codecsToCheck[i], 'audio', preferManagedMediaSource)) {
        CODEC_COMPATIBLE_NAMES[lowerCaseCodec] = codecsToCheck[i];
        return codecsToCheck[i];
      } else if (codecsToCheck[i] === 'mp3' && (_getMediaSource = getMediaSource(preferManagedMediaSource)) != null && _getMediaSource.isTypeSupported('audio/mpeg')) {
        return '';
      }
    }
    return lowerCaseCodec;
  }
  var AUDIO_CODEC_REGEXP = /flac|opus|mp4a\.40\.34/i;
  function getCodecCompatibleName(codec, preferManagedMediaSource) {
    if (preferManagedMediaSource === void 0) {
      preferManagedMediaSource = true;
    }
    return codec.replace(AUDIO_CODEC_REGEXP, function (m) {
      return getCodecCompatibleNameLower(m.toLowerCase(), preferManagedMediaSource);
    });
  }
  function replaceVideoCodec(originalCodecs, newVideoCodec) {
    var codecs = [];
    if (originalCodecs) {
      var allCodecs = originalCodecs.split(',');
      for (var i = 0; i < allCodecs.length; i++) {
        if (!isCodecType(allCodecs[i], 'video')) {
          codecs.push(allCodecs[i]);
        }
      }
    }
    if (newVideoCodec) {
      codecs.push(newVideoCodec);
    }
    return codecs.join(',');
  }
  function pickMostCompleteCodecName(parsedCodec, levelCodec) {
    // Parsing of mp4a codecs strings in mp4-tools from media is incomplete as of d8c6c7a
    // so use level codec is parsed codec is unavailable or incomplete
    if (parsedCodec && (parsedCodec.length > 4 || ['ac-3', 'ec-3', 'alac', 'fLaC', 'Opus'].indexOf(parsedCodec) !== -1)) {
      return parsedCodec;
    }
    if (levelCodec) {
      var levelCodecs = levelCodec.split(',');
      if (levelCodecs.length > 1) {
        if (parsedCodec) {
          for (var i = levelCodecs.length; i--;) {
            if (levelCodecs[i].substring(0, 4) === parsedCodec.substring(0, 4)) {
              return levelCodecs[i];
            }
          }
        }
        return levelCodecs[0];
      }
    }
    return levelCodec || parsedCodec;
  }
  function convertAVC1ToAVCOTI(videoCodecs) {
    // Convert avc1 codec string from RFC-4281 to RFC-6381 for MediaSource.isTypeSupported
    // Examples: avc1.66.30 to avc1.42001e and avc1.77.30,avc1.66.30 to avc1.4d001e,avc1.42001e.
    var codecs = videoCodecs.split(',');
    for (var i = 0; i < codecs.length; i++) {
      var avcdata = codecs[i].split('.');
      if (avcdata.length > 2) {
        var result = avcdata.shift() + '.';
        result += parseInt(avcdata.shift()).toString(16);
        result += ('000' + parseInt(avcdata.shift()).toString(16)).slice(-4);
        codecs[i] = result;
      }
    }
    return codecs.join(',');
  }
  function fillInMissingAV01Params(videoCodec) {
    // Used to fill in incomplete AV1 playlist CODECS strings for mediaCapabilities.decodingInfo queries
    if (videoCodec.startsWith('av01.')) {
      var av1params = videoCodec.split('.');
      var placeholders = ['0', '111', '01', '01', '01', '0'];
      for (var i = av1params.length; i > 4 && i < 10; i++) {
        av1params[i] = placeholders[i - 4];
      }
      return av1params.join('.');
    }
    return videoCodec;
  }
  function getM2TSSupportedAudioTypes(preferManagedMediaSource) {
    var MediaSource = getMediaSource(preferManagedMediaSource) || {
      isTypeSupported: function isTypeSupported() {
        return false;
      }
    };
    return {
      mpeg: MediaSource.isTypeSupported('audio/mpeg'),
      mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"'),
      ac3: MediaSource.isTypeSupported('audio/mp4; codecs="ac-3"') 
    };
  }
  function getCodecsForMimeType(mimeType) {
    return mimeType.replace(/^.+codecs=["']?([^"']+).*$/, '$1');
  }

  var SUPPORTED_INFO_DEFAULT = {
    supported: true,
    configurations: [],
    decodingInfoResults: [{
      supported: true,
      powerEfficient: true,
      smooth: true
    }]
  };
  function getUnsupportedResult(error, configurations) {
    return {
      supported: false,
      configurations: configurations,
      decodingInfoResults: [{
        supported: false,
        smooth: false,
        powerEfficient: false
      }],
      error: error
    };
  }
  var SUPPORTED_INFO_CACHE = {};
  function requiresMediaCapabilitiesDecodingInfo(level, audioTracksByGroup, currentVideoRange, currentFrameRate, currentBw, audioPreference) {
    // Only test support when configuration is exceeds minimum options
    var audioGroups = level.audioCodec ? level.audioGroups : null;
    var audioCodecPreference = audioPreference == null ? void 0 : audioPreference.audioCodec;
    var channelsPreference = audioPreference == null ? void 0 : audioPreference.channels;
    var maxChannels = channelsPreference ? parseInt(channelsPreference) : audioCodecPreference ? Infinity : 2;
    var audioChannels = null;
    if (audioGroups != null && audioGroups.length) {
      try {
        if (audioGroups.length === 1 && audioGroups[0]) {
          audioChannels = audioTracksByGroup.groups[audioGroups[0]].channels;
        } else {
          audioChannels = audioGroups.reduce(function (acc, groupId) {
            if (groupId) {
              var audioTrackGroup = audioTracksByGroup.groups[groupId];
              if (!audioTrackGroup) {
                throw new Error("Audio track group " + groupId + " not found");
              }
              // Sum all channel key values
              Object.keys(audioTrackGroup.channels).forEach(function (key) {
                acc[key] = (acc[key] || 0) + audioTrackGroup.channels[key];
              });
            }
            return acc;
          }, {
            2: 0
          });
        }
      } catch (error) {
        return true;
      }
    }
    return level.videoCodec !== undefined && (level.width > 1920 && level.height > 1088 || level.height > 1920 && level.width > 1088 || level.frameRate > Math.max(currentFrameRate, 30) || level.videoRange !== 'SDR' && level.videoRange !== currentVideoRange || level.bitrate > Math.max(currentBw, 8e6)) || !!audioChannels && isFiniteNumber(maxChannels) && Object.keys(audioChannels).some(function (channels) {
      return parseInt(channels) > maxChannels;
    });
  }
  function getMediaDecodingInfoPromise(level, audioTracksByGroup, mediaCapabilities) {
    var videoCodecs = level.videoCodec;
    var audioCodecs = level.audioCodec;
    if (!videoCodecs && !audioCodecs || !mediaCapabilities) {
      return Promise.resolve(SUPPORTED_INFO_DEFAULT);
    }
    var configurations = [];
    if (videoCodecs) {
      var baseVideoConfiguration = {
        width: level.width,
        height: level.height,
        bitrate: Math.ceil(Math.max(level.bitrate * 0.9, level.averageBitrate)),
        // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
        framerate: level.frameRate || 30
      };
      var videoRange = level.videoRange;
      if (videoRange !== 'SDR') {
        baseVideoConfiguration.transferFunction = videoRange.toLowerCase();
      }
      var videoCodecsArray = videoCodecs.split(',');
      // Override Windows Firefox HEVC MediaCapabilities result (https://github.com/video-dev/hls.js/issues/7046)
      var ua = navigator.userAgent;
      if (videoCodecsArray.some(function (videoCodec) {
        return isHEVC(videoCodec);
      }) && userAgentHevcSupportIsInaccurate()) {
        return Promise.resolve(getUnsupportedResult(new Error("Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent sting: (" + ua + ")"), configurations));
      }
      configurations.push.apply(configurations, videoCodecsArray.map(function (videoCodec) {
        return {
          type: 'media-source',
          video: _objectSpread2(_objectSpread2({}, baseVideoConfiguration), {}, {
            contentType: mimeTypeForCodec(fillInMissingAV01Params(videoCodec), 'video')
          })
        };
      }));
    }
    if (audioCodecs && level.audioGroups) {
      level.audioGroups.forEach(function (audioGroupId) {
        var _audioTracksByGroup$g;
        if (!audioGroupId) {
          return;
        }
        (_audioTracksByGroup$g = audioTracksByGroup.groups[audioGroupId]) == null ? void 0 : _audioTracksByGroup$g.tracks.forEach(function (audioTrack) {
          if (audioTrack.groupId === audioGroupId) {
            var channels = audioTrack.channels || '';
            var channelsNumber = parseFloat(channels);
            if (isFiniteNumber(channelsNumber) && channelsNumber > 2) {
              configurations.push.apply(configurations, audioCodecs.split(',').map(function (audioCodec) {
                return {
                  type: 'media-source',
                  audio: {
                    contentType: mimeTypeForCodec(audioCodec, 'audio'),
                    channels: '' + channelsNumber
                    // spatialRendering:
                    //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
                  }
                };
              }));
            }
          }
        });
      });
    }
    return Promise.all(configurations.map(function (configuration) {
      // Cache MediaCapabilities promises
      var decodingInfoKey = getMediaDecodingInfoKey(configuration);
      return SUPPORTED_INFO_CACHE[decodingInfoKey] || (SUPPORTED_INFO_CACHE[decodingInfoKey] = mediaCapabilities.decodingInfo(configuration));
    })).then(function (decodingInfoResults) {
      return {
        supported: !decodingInfoResults.some(function (info) {
          return !info.supported;
        }),
        configurations: configurations,
        decodingInfoResults: decodingInfoResults
      };
    }).catch(function (error) {
      return {
        supported: false,
        configurations: configurations,
        decodingInfoResults: [],
        error: error
      };
    });
  }
  function getMediaDecodingInfoKey(config) {
    var audio = config.audio,
      video = config.video;
    var mediaConfig = video || audio;
    if (mediaConfig) {
      var codec = getCodecsForMimeType(mediaConfig.contentType);
      if (video) {
        return "r" + video.height + "x" + video.width + "f" + Math.ceil(video.framerate) + (video.transferFunction || 'sd') + "_" + codec + "_" + Math.ceil(video.bitrate / 1e5);
      }
      if (audio) {
        return "c" + audio.channels + (audio.spatialRendering ? 's' : 'n') + "_" + codec;
      }
    }
    return '';
  }

  var HdcpLevels = ['NONE', 'TYPE-0', 'TYPE-1', null];
  function isHdcpLevel(value) {
    return HdcpLevels.indexOf(value) > -1;
  }
  var VideoRangeValues = ['SDR', 'PQ', 'HLG'];
  function isVideoRange(value) {
    return !!value && VideoRangeValues.indexOf(value) > -1;
  }
  var HlsSkip = {
    No: "",
    Yes: "YES",
    v2: "v2"
  };
  function getSkipValue(details) {
    var canSkipUntil = details.canSkipUntil,
      canSkipDateRanges = details.canSkipDateRanges,
      age = details.age;
    // A Client SHOULD NOT request a Playlist Delta Update unless it already
    // has a version of the Playlist that is no older than one-half of the Skip Boundary.
    // @see: https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis#section-6.3.7
    var playlistRecentEnough = age < canSkipUntil / 2;
    if (canSkipUntil && playlistRecentEnough) {
      if (canSkipDateRanges) {
        return HlsSkip.v2;
      }
      return HlsSkip.Yes;
    }
    return HlsSkip.No;
  }
  var HlsUrlParameters = /*#__PURE__*/function () {
    function HlsUrlParameters(msn, part, skip) {
      this.msn = void 0;
      this.part = void 0;
      this.skip = void 0;
      this.msn = msn;
      this.part = part;
      this.skip = skip;
    }
    var _proto = HlsUrlParameters.prototype;
    _proto.addDirectives = function addDirectives(uri) {
      var url = new self.URL(uri);
      if (this.msn !== undefined) {
        url.searchParams.set('_HLS_msn', this.msn.toString());
      }
      if (this.part !== undefined) {
        url.searchParams.set('_HLS_part', this.part.toString());
      }
      if (this.skip) {
        url.searchParams.set('_HLS_skip', this.skip);
      }
      return url.href;
    };
    return HlsUrlParameters;
  }();
  var Level = /*#__PURE__*/function () {
    function Level(data) {
      this._attrs = void 0;
      this.audioCodec = void 0;
      this.bitrate = void 0;
      this.codecSet = void 0;
      this.url = void 0;
      this.frameRate = void 0;
      this.height = void 0;
      this.id = void 0;
      this.name = void 0;
      this.supplemental = void 0;
      this.videoCodec = void 0;
      this.width = void 0;
      this.details = void 0;
      this.fragmentError = 0;
      this.loadError = 0;
      this.loaded = void 0;
      this.realBitrate = 0;
      this.supportedPromise = void 0;
      this.supportedResult = void 0;
      this._avgBitrate = 0;
      this._audioGroups = void 0;
      this._subtitleGroups = void 0;
      // Deprecated (retained for backwards compatibility)
      this._urlId = 0;
      this.url = [data.url];
      this._attrs = [data.attrs];
      this.bitrate = data.bitrate;
      if (data.details) {
        this.details = data.details;
      }
      this.id = data.id || 0;
      this.name = data.name;
      this.width = data.width || 0;
      this.height = data.height || 0;
      this.frameRate = data.attrs.optionalFloat('FRAME-RATE', 0);
      this._avgBitrate = data.attrs.decimalInteger('AVERAGE-BANDWIDTH');
      this.audioCodec = data.audioCodec;
      this.videoCodec = data.videoCodec;
      this.codecSet = [data.videoCodec, data.audioCodec].filter(function (c) {
        return !!c;
      }).map(function (s) {
        return s.substring(0, 4);
      }).join(',');
      if ('supplemental' in data) {
        var _data$supplemental;
        this.supplemental = data.supplemental;
        var supplementalVideo = (_data$supplemental = data.supplemental) == null ? void 0 : _data$supplemental.videoCodec;
        if (supplementalVideo && supplementalVideo !== data.videoCodec) {
          this.codecSet += "," + supplementalVideo.substring(0, 4);
        }
      }
      this.addGroupId('audio', data.attrs.AUDIO);
      this.addGroupId('text', data.attrs.SUBTITLES);
    }
    var _proto2 = Level.prototype;
    _proto2.hasAudioGroup = function hasAudioGroup(groupId) {
      return hasGroup(this._audioGroups, groupId);
    };
    _proto2.hasSubtitleGroup = function hasSubtitleGroup(groupId) {
      return hasGroup(this._subtitleGroups, groupId);
    };
    _proto2.addGroupId = function addGroupId(type, groupId) {
      if (!groupId) {
        return;
      }
      if (type === 'audio') {
        var audioGroups = this._audioGroups;
        if (!audioGroups) {
          audioGroups = this._audioGroups = [];
        }
        if (audioGroups.indexOf(groupId) === -1) {
          audioGroups.push(groupId);
        }
      } else if (type === 'text') {
        var subtitleGroups = this._subtitleGroups;
        if (!subtitleGroups) {
          subtitleGroups = this._subtitleGroups = [];
        }
        if (subtitleGroups.indexOf(groupId) === -1) {
          subtitleGroups.push(groupId);
        }
      }
    }

    // Deprecated methods (retained for backwards compatibility)
    ;
    _proto2.addFallback = function addFallback() {};
    return _createClass(Level, [{
      key: "maxBitrate",
      get: function get() {
        return Math.max(this.realBitrate, this.bitrate);
      }
    }, {
      key: "averageBitrate",
      get: function get() {
        return this._avgBitrate || this.realBitrate || this.bitrate;
      }
    }, {
      key: "attrs",
      get: function get() {
        return this._attrs[0];
      }
    }, {
      key: "codecs",
      get: function get() {
        return this.attrs.CODECS || '';
      }
    }, {
      key: "pathwayId",
      get: function get() {
        return this.attrs['PATHWAY-ID'] || '.';
      }
    }, {
      key: "videoRange",
      get: function get() {
        return this.attrs['VIDEO-RANGE'] || 'SDR';
      }
    }, {
      key: "score",
      get: function get() {
        return this.attrs.optionalFloat('SCORE', 0);
      }
    }, {
      key: "uri",
      get: function get() {
        return this.url[0] || '';
      }
    }, {
      key: "audioGroups",
      get: function get() {
        return this._audioGroups;
      }
    }, {
      key: "subtitleGroups",
      get: function get() {
        return this._subtitleGroups;
      }
    }, {
      key: "urlId",
      get: function get() {
        return 0;
      },
      set: function set(value) {}
    }, {
      key: "audioGroupIds",
      get: function get() {
        return this.audioGroups ? [this.audioGroupId] : undefined;
      }
    }, {
      key: "textGroupIds",
      get: function get() {
        return this.subtitleGroups ? [this.textGroupId] : undefined;
      }
    }, {
      key: "audioGroupId",
      get: function get() {
        var _this$audioGroups;
        return (_this$audioGroups = this.audioGroups) == null ? void 0 : _this$audioGroups[0];
      }
    }, {
      key: "textGroupId",
      get: function get() {
        var _this$subtitleGroups;
        return (_this$subtitleGroups = this.subtitleGroups) == null ? void 0 : _this$subtitleGroups[0];
      }
    }]);
  }();
  function hasGroup(groups, groupId) {
    if (!groupId || !groups) {
      return false;
    }
    return groups.indexOf(groupId) !== -1;
  }

  /**
   * @returns Whether we can detect and validate HDR capability within the window context
   */
  function isHdrSupported() {
    if (typeof matchMedia === 'function') {
      var mediaQueryList = matchMedia('(dynamic-range: high)');
      var badQuery = matchMedia('bad query');
      if (mediaQueryList.media !== badQuery.media) {
        return mediaQueryList.matches === true;
      }
    }
    return false;
  }

  /**
   * Sanitizes inputs to return the active video selection options for HDR/SDR.
   * When both inputs are null:
   *
   *    `{ preferHDR: false, allowedVideoRanges: [] }`
   *
   * When `currentVideoRange` non-null, maintain the active range:
   *
   *    `{ preferHDR: currentVideoRange !== 'SDR', allowedVideoRanges: [currentVideoRange] }`
   *
   * When VideoSelectionOption non-null:
   *
   *  - Allow all video ranges if `allowedVideoRanges` unspecified.
   *  - If `preferHDR` is non-null use the value to filter `allowedVideoRanges`.
   *  - Else check window for HDR support and set `preferHDR` to the result.
   *
   * @param currentVideoRange
   * @param videoPreference
   */
  function getVideoSelectionOptions(currentVideoRange, videoPreference) {
    var preferHDR = false;
    var allowedVideoRanges = [];
    if (currentVideoRange) {
      preferHDR = currentVideoRange !== 'SDR';
      allowedVideoRanges = [currentVideoRange];
    }
    if (videoPreference) {
      allowedVideoRanges = videoPreference.allowedVideoRanges || VideoRangeValues.slice(0);
      var allowAutoPreferHDR = allowedVideoRanges.join('') !== 'SDR' && !videoPreference.videoCodec;
      preferHDR = videoPreference.preferHDR !== undefined ? videoPreference.preferHDR : allowAutoPreferHDR && isHdrSupported();
      if (!preferHDR) {
        allowedVideoRanges = ['SDR'];
      }
    }
    return {
      preferHDR: preferHDR,
      allowedVideoRanges: allowedVideoRanges
    };
  }

  var omitCircularRefsReplacer = function omitCircularRefsReplacer(replacer) {
    var known = new WeakSet();
    return function (_, value) {
      if (replacer) {
        value = replacer(_, value);
      }
      if (typeof value === 'object' && value !== null) {
        if (known.has(value)) {
          return;
        }
        known.add(value);
      }
      return value;
    };
  };
  var stringify = function stringify(object, replacer) {
    return JSON.stringify(object, omitCircularRefsReplacer(replacer));
  };

  function getStartCodecTier(codecTiers, currentVideoRange, currentBw, audioPreference, videoPreference) {
    var codecSets = Object.keys(codecTiers);
    var channelsPreference = audioPreference == null ? void 0 : audioPreference.channels;
    var audioCodecPreference = audioPreference == null ? void 0 : audioPreference.audioCodec;
    var videoCodecPreference = videoPreference == null ? void 0 : videoPreference.videoCodec;
    var preferStereo = channelsPreference && parseInt(channelsPreference) === 2;
    // Use first level set to determine stereo, and minimum resolution and framerate
    var hasStereo = false;
    var hasCurrentVideoRange = false;
    var minHeight = Infinity;
    var minFramerate = Infinity;
    var minBitrate = Infinity;
    var minIndex = Infinity;
    var selectedScore = 0;
    var videoRanges = [];
    var _getVideoSelectionOpt = getVideoSelectionOptions(currentVideoRange, videoPreference),
      preferHDR = _getVideoSelectionOpt.preferHDR,
      allowedVideoRanges = _getVideoSelectionOpt.allowedVideoRanges;
    var _loop = function _loop() {
      var tier = codecTiers[codecSets[i]];
      hasStereo || (hasStereo = tier.channels[2] > 0);
      minHeight = Math.min(minHeight, tier.minHeight);
      minFramerate = Math.min(minFramerate, tier.minFramerate);
      minBitrate = Math.min(minBitrate, tier.minBitrate);
      var matchingVideoRanges = allowedVideoRanges.filter(function (range) {
        return tier.videoRanges[range] > 0;
      });
      if (matchingVideoRanges.length > 0) {
        hasCurrentVideoRange = true;
      }
    };
    for (var i = codecSets.length; i--;) {
      _loop();
    }
    minHeight = isFiniteNumber(minHeight) ? minHeight : 0;
    minFramerate = isFiniteNumber(minFramerate) ? minFramerate : 0;
    var maxHeight = Math.max(1080, minHeight);
    var maxFramerate = Math.max(30, minFramerate);
    minBitrate = isFiniteNumber(minBitrate) ? minBitrate : currentBw;
    currentBw = Math.max(minBitrate, currentBw);
    // If there are no variants with matching preference, set currentVideoRange to undefined
    if (!hasCurrentVideoRange) {
      currentVideoRange = undefined;
    }
    var hasMultipleSets = codecSets.length > 1;
    var codecSet = codecSets.reduce(function (selected, candidate) {
      // Remove candiates which do not meet bitrate, default audio, stereo or channels preference, 1080p or lower, 30fps or lower, or SDR/HDR selection if present
      var candidateTier = codecTiers[candidate];
      if (candidate === selected) {
        return selected;
      }
      videoRanges = hasCurrentVideoRange ? allowedVideoRanges.filter(function (range) {
        return candidateTier.videoRanges[range] > 0;
      }) : [];
      if (hasMultipleSets) {
        if (candidateTier.minBitrate > currentBw) {
          logStartCodecCandidateIgnored(candidate, "min bitrate of " + candidateTier.minBitrate + " > current estimate of " + currentBw);
          return selected;
        }
        if (!candidateTier.hasDefaultAudio) {
          logStartCodecCandidateIgnored(candidate, "no renditions with default or auto-select sound found");
          return selected;
        }
        if (audioCodecPreference && candidate.indexOf(audioCodecPreference.substring(0, 4)) % 5 !== 0) {
          logStartCodecCandidateIgnored(candidate, "audio codec preference \"" + audioCodecPreference + "\" not found");
          return selected;
        }
        if (channelsPreference && !preferStereo) {
          if (!candidateTier.channels[channelsPreference]) {
            logStartCodecCandidateIgnored(candidate, "no renditions with " + channelsPreference + " channel sound found (channels options: " + Object.keys(candidateTier.channels) + ")");
            return selected;
          }
        } else if ((!audioCodecPreference || preferStereo) && hasStereo && candidateTier.channels['2'] === 0) {
          logStartCodecCandidateIgnored(candidate, "no renditions with stereo sound found");
          return selected;
        }
        if (candidateTier.minHeight > maxHeight) {
          logStartCodecCandidateIgnored(candidate, "min resolution of " + candidateTier.minHeight + " > maximum of " + maxHeight);
          return selected;
        }
        if (candidateTier.minFramerate > maxFramerate) {
          logStartCodecCandidateIgnored(candidate, "min framerate of " + candidateTier.minFramerate + " > maximum of " + maxFramerate);
          return selected;
        }
        if (!videoRanges.some(function (range) {
          return candidateTier.videoRanges[range] > 0;
        })) {
          logStartCodecCandidateIgnored(candidate, "no variants with VIDEO-RANGE of " + stringify(videoRanges) + " found");
          return selected;
        }
        if (videoCodecPreference && candidate.indexOf(videoCodecPreference.substring(0, 4)) % 5 !== 0) {
          logStartCodecCandidateIgnored(candidate, "video codec preference \"" + videoCodecPreference + "\" not found");
          return selected;
        }
        if (candidateTier.maxScore < selectedScore) {
          logStartCodecCandidateIgnored(candidate, "max score of " + candidateTier.maxScore + " < selected max of " + selectedScore);
          return selected;
        }
      }
      // Remove candiates with less preferred codecs or more errors
      if (selected && (codecsSetSelectionPreferenceValue(candidate) >= codecsSetSelectionPreferenceValue(selected) || candidateTier.fragmentError > codecTiers[selected].fragmentError)) {
        return selected;
      }
      minIndex = candidateTier.minIndex;
      selectedScore = candidateTier.maxScore;
      return candidate;
    }, undefined);
    return {
      codecSet: codecSet,
      videoRanges: videoRanges,
      preferHDR: preferHDR,
      minFramerate: minFramerate,
      minBitrate: minBitrate,
      minIndex: minIndex
    };
  }
  function logStartCodecCandidateIgnored(codeSet, reason) {
    logger.log("[abr] start candidates with \"" + codeSet + "\" ignored because " + reason);
  }
  function getAudioTracksByGroup(allAudioTracks) {
    return allAudioTracks.reduce(function (audioTracksByGroup, track) {
      var trackGroup = audioTracksByGroup.groups[track.groupId];
      if (!trackGroup) {
        trackGroup = audioTracksByGroup.groups[track.groupId] = {
          tracks: [],
          channels: {
            2: 0
          },
          hasDefault: false,
          hasAutoSelect: false
        };
      }
      trackGroup.tracks.push(track);
      var channelsKey = track.channels || '2';
      trackGroup.channels[channelsKey] = (trackGroup.channels[channelsKey] || 0) + 1;
      trackGroup.hasDefault = trackGroup.hasDefault || track.default;
      trackGroup.hasAutoSelect = trackGroup.hasAutoSelect || track.autoselect;
      if (trackGroup.hasDefault) {
        audioTracksByGroup.hasDefaultAudio = true;
      }
      if (trackGroup.hasAutoSelect) {
        audioTracksByGroup.hasAutoSelectAudio = true;
      }
      return audioTracksByGroup;
    }, {
      hasDefaultAudio: false,
      hasAutoSelectAudio: false,
      groups: {}
    });
  }
  function getCodecTiers(levels, audioTracksByGroup, minAutoLevel, maxAutoLevel) {
    return levels.slice(minAutoLevel, maxAutoLevel + 1).reduce(function (tiers, level, index) {
      if (!level.codecSet) {
        return tiers;
      }
      var audioGroups = level.audioGroups;
      var tier = tiers[level.codecSet];
      if (!tier) {
        tiers[level.codecSet] = tier = {
          minBitrate: Infinity,
          minHeight: Infinity,
          minFramerate: Infinity,
          minIndex: index,
          maxScore: 0,
          videoRanges: {
            SDR: 0
          },
          channels: {
            '2': 0
          },
          hasDefaultAudio: !audioGroups,
          fragmentError: 0
        };
      }
      tier.minBitrate = Math.min(tier.minBitrate, level.bitrate);
      var lesserWidthOrHeight = Math.min(level.height, level.width);
      tier.minHeight = Math.min(tier.minHeight, lesserWidthOrHeight);
      tier.minFramerate = Math.min(tier.minFramerate, level.frameRate);
      tier.minIndex = Math.min(tier.minIndex, index);
      tier.maxScore = Math.max(tier.maxScore, level.score);
      tier.fragmentError += level.fragmentError;
      tier.videoRanges[level.videoRange] = (tier.videoRanges[level.videoRange] || 0) + 1;
      if (audioGroups) {
        audioGroups.forEach(function (audioGroupId) {
          if (!audioGroupId) {
            return;
          }
          var audioGroup = audioTracksByGroup.groups[audioGroupId];
          if (!audioGroup) {
            return;
          }
          // Default audio is any group with DEFAULT=YES, or if missing then any group with AUTOSELECT=YES, or all variants
          tier.hasDefaultAudio = tier.hasDefaultAudio || audioTracksByGroup.hasDefaultAudio ? audioGroup.hasDefault : audioGroup.hasAutoSelect || !audioTracksByGroup.hasDefaultAudio && !audioTracksByGroup.hasAutoSelectAudio;
          Object.keys(audioGroup.channels).forEach(function (channels) {
            tier.channels[channels] = (tier.channels[channels] || 0) + audioGroup.channels[channels];
          });
        });
      }
      return tiers;
    }, {});
  }
  function getBasicSelectionOption(option) {
    if (!option) {
      return option;
    }
    var _ref = option,
      lang = _ref.lang,
      assocLang = _ref.assocLang,
      characteristics = _ref.characteristics,
      channels = _ref.channels,
      audioCodec = _ref.audioCodec;
    return {
      lang: lang,
      assocLang: assocLang,
      characteristics: characteristics,
      channels: channels,
      audioCodec: audioCodec
    };
  }
  function findMatchingOption(option, tracks, matchPredicate) {
    if ('attrs' in option) {
      var index = tracks.indexOf(option);
      if (index !== -1) {
        return index;
      }
    }
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      if (matchesOption(option, track, matchPredicate)) {
        return i;
      }
    }
    return -1;
  }
  function matchesOption(option, track, matchPredicate) {
    var groupId = option.groupId,
      name = option.name,
      lang = option.lang,
      assocLang = option.assocLang,
      isDefault = option.default;
    var forced = option.forced;
    return (groupId === undefined || track.groupId === groupId) && (name === undefined || track.name === name) && (lang === undefined || languagesMatch(lang, track.lang)) && (lang === undefined || track.assocLang === assocLang) && (isDefault === undefined || track.default === isDefault) && (forced === undefined || track.forced === forced) && (!('characteristics' in option) || characteristicsMatch(option.characteristics || '', track.characteristics)) && (matchPredicate === undefined || matchPredicate(option, track));
  }
  function languagesMatch(languageA, languageB) {
    if (languageB === void 0) {
      languageB = '--';
    }
    if (languageA.length === languageB.length) {
      return languageA === languageB;
    }
    return languageA.startsWith(languageB) || languageB.startsWith(languageA);
  }
  function characteristicsMatch(characteristicsA, characteristicsB) {
    if (characteristicsB === void 0) {
      characteristicsB = '';
    }
    var arrA = characteristicsA.split(',');
    var arrB = characteristicsB.split(',');
    // Expects each item to be unique:
    return arrA.length === arrB.length && !arrA.some(function (el) {
      return arrB.indexOf(el) === -1;
    });
  }
  function audioMatchPredicate(option, track) {
    var audioCodec = option.audioCodec,
      channels = option.channels;
    return (audioCodec === undefined || (track.audioCodec || '').substring(0, 4) === audioCodec.substring(0, 4)) && (channels === undefined || channels === (track.channels || '2'));
  }
  function findClosestLevelWithAudioGroup(option, levels, allAudioTracks, searchIndex, matchPredicate) {
    var currentLevel = levels[searchIndex];
    // Are there variants with same URI as current level?
    // If so, find a match that does not require any level URI change
    var variants = levels.reduce(function (variantMap, level, index) {
      var uri = level.uri;
      var renditions = variantMap[uri] || (variantMap[uri] = []);
      renditions.push(index);
      return variantMap;
    }, {});
    var renditions = variants[currentLevel.uri];
    if (renditions.length > 1) {
      searchIndex = Math.max.apply(Math, renditions);
    }
    // Find best match
    var currentVideoRange = currentLevel.videoRange;
    var currentFrameRate = currentLevel.frameRate;
    var currentVideoCodec = currentLevel.codecSet.substring(0, 4);
    var matchingVideo = searchDownAndUpList(levels, searchIndex, function (level) {
      if (level.videoRange !== currentVideoRange || level.frameRate !== currentFrameRate || level.codecSet.substring(0, 4) !== currentVideoCodec) {
        return false;
      }
      var audioGroups = level.audioGroups;
      var tracks = allAudioTracks.filter(function (track) {
        return !audioGroups || audioGroups.indexOf(track.groupId) !== -1;
      });
      return findMatchingOption(option, tracks, matchPredicate) > -1;
    });
    if (matchingVideo > -1) {
      return matchingVideo;
    }
    return searchDownAndUpList(levels, searchIndex, function (level) {
      var audioGroups = level.audioGroups;
      var tracks = allAudioTracks.filter(function (track) {
        return !audioGroups || audioGroups.indexOf(track.groupId) !== -1;
      });
      return findMatchingOption(option, tracks, matchPredicate) > -1;
    });
  }
  function searchDownAndUpList(arr, searchIndex, predicate) {
    for (var i = searchIndex; i > -1; i--) {
      if (predicate(arr[i])) {
        return i;
      }
    }
    for (var _i = searchIndex + 1; _i < arr.length; _i++) {
      if (predicate(arr[_i])) {
        return _i;
      }
    }
    return -1;
  }
  function useAlternateAudio(audioTrackUrl, hls) {
    var _hls$loadLevelObj;
    return !!audioTrackUrl && audioTrackUrl !== ((_hls$loadLevelObj = hls.loadLevelObj) == null ? void 0 : _hls$loadLevelObj.uri);
  }

  var AbrController = /*#__PURE__*/function (_Logger) {
    function AbrController(_hls) {
      var _this;
      _this = _Logger.call(this, 'abr', _hls.logger) || this;
      _this.hls = void 0;
      _this.lastLevelLoadSec = 0;
      _this.lastLoadedFragLevel = -1;
      _this.firstSelection = -1;
      _this._nextAutoLevel = -1;
      _this.nextAutoLevelKey = '';
      _this.audioTracksByGroup = null;
      _this.codecTiers = null;
      _this.timer = -1;
      _this.fragCurrent = null;
      _this.partCurrent = null;
      _this.bitrateTestDelay = 0;
      _this.rebufferNotice = -1;
      _this.bwEstimator = void 0;
      /*
          This method monitors the download rate of the current fragment, and will downswitch if that fragment will not load
          quickly enough to prevent underbuffering
        */
      _this._abandonRulesCheck = function (levelLoaded) {
        var _ref;
        var _this2 = _this,
          frag = _this2.fragCurrent,
          part = _this2.partCurrent,
          hls = _this2.hls;
        var autoLevelEnabled = hls.autoLevelEnabled,
          media = hls.media;
        if (!frag || !media) {
          return;
        }
        var now = performance.now();
        var stats = part ? part.stats : frag.stats;
        var duration = part ? part.duration : frag.duration;
        var timeLoading = now - stats.loading.start;
        var minAutoLevel = hls.minAutoLevel;
        var loadingFragForLevel = frag.level;
        var currentAutoLevel = _this._nextAutoLevel;
        // If frag loading is aborted, complete, or from lowest level, stop timer and return
        if (stats.aborted || stats.loaded && stats.loaded === stats.total || loadingFragForLevel <= minAutoLevel) {
          _this.clearTimer();
          // reset forced auto level value so that next level will be selected
          _this._nextAutoLevel = -1;
          return;
        }

        // This check only runs if we're in ABR mode
        if (!autoLevelEnabled) {
          return;
        }

        // Must be loading/loaded a new level or be in a playing state
        var fragBlockingSwitch = currentAutoLevel > -1 && currentAutoLevel !== loadingFragForLevel;
        var levelChange = !!levelLoaded || fragBlockingSwitch;
        if (!levelChange && (media.paused || !media.playbackRate || !media.readyState)) {
          return;
        }
        var bufferInfo = hls.mainForwardBufferInfo;
        if (!levelChange && bufferInfo === null) {
          return;
        }
        var ttfbEstimate = _this.bwEstimator.getEstimateTTFB();
        var playbackRate = Math.abs(media.playbackRate);
        // To maintain stable adaptive playback, only begin monitoring frag loading after half or more of its playback duration has passed
        if (timeLoading <= Math.max(ttfbEstimate, 1000 * (duration / (playbackRate * 2)))) {
          return;
        }

        // bufferStarvationDelay is an estimate of the amount time (in seconds) it will take to exhaust the buffer
        var bufferStarvationDelay = bufferInfo ? bufferInfo.len / playbackRate : 0;
        var ttfb = stats.loading.first ? stats.loading.first - stats.loading.start : -1;
        var loadedFirstByte = stats.loaded && ttfb > -1;
        var bwEstimate = _this.getBwEstimate();
        var levels = hls.levels;
        var level = levels[loadingFragForLevel];
        var expectedLen = Math.max(stats.loaded, Math.round(duration * (frag.bitrate || level.averageBitrate) / 8));
        var timeStreaming = loadedFirstByte ? timeLoading - ttfb : timeLoading;
        if (timeStreaming < 1 && loadedFirstByte) {
          timeStreaming = Math.min(timeLoading, stats.loaded * 8 / bwEstimate);
        }
        var loadRate = loadedFirstByte ? stats.loaded * 1000 / timeStreaming : 0;
        // fragLoadDelay is an estimate of the time (in seconds) it will take to buffer the remainder of the fragment
        var ttfbSeconds = ttfbEstimate / 1000;
        var fragLoadedDelay = loadRate ? (expectedLen - stats.loaded) / loadRate : expectedLen * 8 / bwEstimate + ttfbSeconds;
        // Only downswitch if the time to finish loading the current fragment is greater than the amount of buffer left
        if (fragLoadedDelay <= bufferStarvationDelay) {
          return;
        }
        var bwe = loadRate ? loadRate * 8 : bwEstimate;
        var live = ((_ref = (levelLoaded == null ? void 0 : levelLoaded.details) || _this.hls.latestLevelDetails) == null ? void 0 : _ref.live) === true;
        var abrBandWidthUpFactor = _this.hls.config.abrBandWidthUpFactor;
        var fragLevelNextLoadedDelay = Number.POSITIVE_INFINITY;
        var nextLoadLevel;
        // Iterate through lower level and try to find the largest one that avoids rebuffering
        for (nextLoadLevel = loadingFragForLevel - 1; nextLoadLevel > minAutoLevel; nextLoadLevel--) {
          // compute time to load next fragment at lower level
          // 8 = bits per byte (bps/Bps)
          var levelNextBitrate = levels[nextLoadLevel].maxBitrate;
          var requiresLevelLoad = !levels[nextLoadLevel].details || live;
          fragLevelNextLoadedDelay = _this.getTimeToLoadFrag(ttfbSeconds, bwe, duration * levelNextBitrate, requiresLevelLoad);
          if (fragLevelNextLoadedDelay < Math.min(bufferStarvationDelay, duration + ttfbSeconds)) {
            break;
          }
        }
        // Only emergency switch down if it takes less time to load a new fragment at lowest level instead of continuing
        // to load the current one
        if (fragLevelNextLoadedDelay >= fragLoadedDelay) {
          return;
        }

        // if estimated load time of new segment is completely unreasonable, ignore and do not emergency switch down
        if (fragLevelNextLoadedDelay > duration * 10) {
          return;
        }
        if (loadedFirstByte) {
          // If there has been loading progress, sample bandwidth using loading time offset by minimum TTFB time
          _this.bwEstimator.sample(timeLoading - Math.min(ttfbEstimate, ttfb), stats.loaded);
        } else {
          // If there has been no loading progress, sample TTFB
          _this.bwEstimator.sampleTTFB(timeLoading);
        }
        var nextLoadLevelBitrate = levels[nextLoadLevel].maxBitrate;
        if (_this.getBwEstimate() * abrBandWidthUpFactor > nextLoadLevelBitrate) {
          _this.resetEstimator(nextLoadLevelBitrate);
        }
        var bestSwitchLevel = _this.findBestLevel(nextLoadLevelBitrate, minAutoLevel, nextLoadLevel, 0, bufferStarvationDelay, 1, 1);
        if (bestSwitchLevel > -1) {
          nextLoadLevel = bestSwitchLevel;
        }
        _this.warn("Fragment " + frag.sn + (part ? ' part ' + part.index : '') + " of level " + loadingFragForLevel + " is loading too slowly;\n      Fragment duration: " + frag.duration.toFixed(3) + "\n      Time to underbuffer: " + bufferStarvationDelay.toFixed(3) + " s\n      Estimated load time for current fragment: " + fragLoadedDelay.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + fragLevelNextLoadedDelay.toFixed(3) + " s\n      TTFB estimate: " + (ttfb | 0) + " ms\n      Current BW estimate: " + (isFiniteNumber(bwEstimate) ? bwEstimate | 0 : 'Unknown') + " bps\n      New BW estimate: " + (_this.getBwEstimate() | 0) + " bps\n      Switching to level " + nextLoadLevel + " @ " + (nextLoadLevelBitrate | 0) + " bps");
        hls.nextLoadLevel = hls.nextAutoLevel = nextLoadLevel;
        _this.clearTimer();
        var abortAndSwitch = function abortAndSwitch() {
          // Are nextLoadLevel details available or is stream-controller still in "WAITING_LEVEL" state?
          _this.clearTimer();
          if (_this.fragCurrent === frag && _this.hls.loadLevel === nextLoadLevel && nextLoadLevel > 0) {
            var _bufferStarvationDelay = _this.getStarvationDelay();
            _this.warn("Aborting inflight request " + (nextLoadLevel > 0 ? 'and switching down' : '') + "\n      Fragment duration: " + frag.duration.toFixed(3) + " s\n      Time to underbuffer: " + _bufferStarvationDelay.toFixed(3) + " s");
            frag.abortRequests();
            _this.fragCurrent = _this.partCurrent = null;
            if (nextLoadLevel > minAutoLevel) {
              var lowestSwitchLevel = _this.findBestLevel(_this.hls.levels[minAutoLevel].bitrate, minAutoLevel, nextLoadLevel, 0, _bufferStarvationDelay, 1, 1);
              if (lowestSwitchLevel === -1) {
                lowestSwitchLevel = minAutoLevel;
              }
              _this.hls.nextLoadLevel = _this.hls.nextAutoLevel = lowestSwitchLevel;
              _this.resetEstimator(_this.hls.levels[lowestSwitchLevel].bitrate);
            }
          }
        };
        if (fragBlockingSwitch || fragLoadedDelay > fragLevelNextLoadedDelay * 2) {
          abortAndSwitch();
        } else {
          _this.timer = self.setInterval(abortAndSwitch, fragLevelNextLoadedDelay * 1000);
        }
        hls.trigger(Events.FRAG_LOAD_EMERGENCY_ABORTED, {
          frag: frag,
          part: part,
          stats: stats
        });
      };
      _this.hls = _hls;
      _this.bwEstimator = _this.initEstimator();
      _this.registerListeners();
      return _this;
    }
    _inheritsLoose(AbrController, _Logger);
    var _proto = AbrController.prototype;
    _proto.resetEstimator = function resetEstimator(abrEwmaDefaultEstimate) {
      if (abrEwmaDefaultEstimate) {
        this.log("setting initial bwe to " + abrEwmaDefaultEstimate);
        this.hls.config.abrEwmaDefaultEstimate = abrEwmaDefaultEstimate;
      }
      this.firstSelection = -1;
      this.bwEstimator = this.initEstimator();
    };
    _proto.initEstimator = function initEstimator() {
      var config = this.hls.config;
      return new EwmaBandWidthEstimator(config.abrEwmaSlowVoD, config.abrEwmaFastVoD, config.abrEwmaDefaultEstimate);
    };
    _proto.registerListeners = function registerListeners() {
      var hls = this.hls;
      hls.on(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.on(Events.FRAG_LOADING, this.onFragLoading, this);
      hls.on(Events.FRAG_LOADED, this.onFragLoaded, this);
      hls.on(Events.FRAG_BUFFERED, this.onFragBuffered, this);
      hls.on(Events.LEVEL_SWITCHING, this.onLevelSwitching, this);
      hls.on(Events.LEVEL_LOADED, this.onLevelLoaded, this);
      hls.on(Events.LEVELS_UPDATED, this.onLevelsUpdated, this);
      hls.on(Events.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this);
      hls.on(Events.ERROR, this.onError, this);
    };
    _proto.unregisterListeners = function unregisterListeners() {
      var hls = this.hls;
      if (!hls) {
        return;
      }
      hls.off(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.off(Events.FRAG_LOADING, this.onFragLoading, this);
      hls.off(Events.FRAG_LOADED, this.onFragLoaded, this);
      hls.off(Events.FRAG_BUFFERED, this.onFragBuffered, this);
      hls.off(Events.LEVEL_SWITCHING, this.onLevelSwitching, this);
      hls.off(Events.LEVEL_LOADED, this.onLevelLoaded, this);
      hls.off(Events.LEVELS_UPDATED, this.onLevelsUpdated, this);
      hls.off(Events.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this);
      hls.off(Events.ERROR, this.onError, this);
    };
    _proto.destroy = function destroy() {
      this.unregisterListeners();
      this.clearTimer();
      // @ts-ignore
      this.hls = this._abandonRulesCheck = null;
      this.fragCurrent = this.partCurrent = null;
    };
    _proto.onManifestLoading = function onManifestLoading(event, data) {
      this.lastLoadedFragLevel = -1;
      this.firstSelection = -1;
      this.lastLevelLoadSec = 0;
      this.fragCurrent = this.partCurrent = null;
      this.onLevelsUpdated();
      this.clearTimer();
    };
    _proto.onLevelsUpdated = function onLevelsUpdated() {
      if (this.lastLoadedFragLevel > -1 && this.fragCurrent) {
        this.lastLoadedFragLevel = this.fragCurrent.level;
      }
      this._nextAutoLevel = -1;
      this.onMaxAutoLevelUpdated();
      this.codecTiers = null;
      this.audioTracksByGroup = null;
    };
    _proto.onMaxAutoLevelUpdated = function onMaxAutoLevelUpdated() {
      this.firstSelection = -1;
      this.nextAutoLevelKey = '';
    };
    _proto.onFragLoading = function onFragLoading(event, data) {
      var frag = data.frag;
      if (this.ignoreFragment(frag)) {
        return;
      }
      if (!frag.bitrateTest) {
        var _data$part;
        this.fragCurrent = frag;
        this.partCurrent = (_data$part = data.part) != null ? _data$part : null;
      }
      this.clearTimer();
      this.timer = self.setInterval(this._abandonRulesCheck, 100);
    };
    _proto.onLevelSwitching = function onLevelSwitching(event, data) {
      this.clearTimer();
    };
    _proto.onError = function onError(event, data) {
      if (data.fatal) {
        return;
      }
      switch (data.details) {
        case ErrorDetails.BUFFER_ADD_CODEC_ERROR:
        case ErrorDetails.BUFFER_APPEND_ERROR:
          // Reset last loaded level so that a new selection can be made after calling recoverMediaError
          this.lastLoadedFragLevel = -1;
          this.firstSelection = -1;
          break;
        case ErrorDetails.FRAG_LOAD_TIMEOUT:
          {
            var frag = data.frag;
            var fragCurrent = this.fragCurrent,
              part = this.partCurrent;
            if (frag && fragCurrent && frag.sn === fragCurrent.sn && frag.level === fragCurrent.level) {
              var now = performance.now();
              var stats = part ? part.stats : frag.stats;
              var timeLoading = now - stats.loading.start;
              var ttfb = stats.loading.first ? stats.loading.first - stats.loading.start : -1;
              var loadedFirstByte = stats.loaded && ttfb > -1;
              if (loadedFirstByte) {
                var ttfbEstimate = this.bwEstimator.getEstimateTTFB();
                this.bwEstimator.sample(timeLoading - Math.min(ttfbEstimate, ttfb), stats.loaded);
              } else {
                this.bwEstimator.sampleTTFB(timeLoading);
              }
            }
            break;
          }
      }
    };
    _proto.getTimeToLoadFrag = function getTimeToLoadFrag(timeToFirstByteSec, bandwidth, fragSizeBits, isSwitch) {
      var fragLoadSec = timeToFirstByteSec + fragSizeBits / bandwidth;
      var playlistLoadSec = isSwitch ? timeToFirstByteSec + this.lastLevelLoadSec : 0;
      return fragLoadSec + playlistLoadSec;
    };
    _proto.onLevelLoaded = function onLevelLoaded(event, data) {
      var config = this.hls.config;
      var loading = data.stats.loading;
      var timeLoadingMs = loading.end - loading.first;
      if (isFiniteNumber(timeLoadingMs)) {
        this.lastLevelLoadSec = timeLoadingMs / 1000;
      }
      if (data.details.live) {
        this.bwEstimator.update(config.abrEwmaSlowLive, config.abrEwmaFastLive);
      } else {
        this.bwEstimator.update(config.abrEwmaSlowVoD, config.abrEwmaFastVoD);
      }
      if (this.timer > -1) {
        this._abandonRulesCheck(data.levelInfo);
      }
    };
    _proto.onFragLoaded = function onFragLoaded(event, _ref2) {
      var frag = _ref2.frag,
        part = _ref2.part;
      var stats = part ? part.stats : frag.stats;
      if (frag.type === PlaylistLevelType.MAIN) {
        this.bwEstimator.sampleTTFB(stats.loading.first - stats.loading.start);
      }
      if (this.ignoreFragment(frag)) {
        return;
      }
      // stop monitoring bw once frag loaded
      this.clearTimer();
      // reset forced auto level value so that next level will be selected
      if (frag.level === this._nextAutoLevel) {
        this._nextAutoLevel = -1;
      }
      this.firstSelection = -1;

      // compute level average bitrate
      if (this.hls.config.abrMaxWithRealBitrate) {
        var duration = part ? part.duration : frag.duration;
        var level = this.hls.levels[frag.level];
        var loadedBytes = (level.loaded ? level.loaded.bytes : 0) + stats.loaded;
        var loadedDuration = (level.loaded ? level.loaded.duration : 0) + duration;
        level.loaded = {
          bytes: loadedBytes,
          duration: loadedDuration
        };
        level.realBitrate = Math.round(8 * loadedBytes / loadedDuration);
      }
      if (frag.bitrateTest) {
        var fragBufferedData = {
          stats: stats,
          frag: frag,
          part: part,
          id: frag.type
        };
        this.onFragBuffered(Events.FRAG_BUFFERED, fragBufferedData);
        frag.bitrateTest = false;
      } else {
        // store level id after successful fragment load for playback
        this.lastLoadedFragLevel = frag.level;
      }
    };
    _proto.onFragBuffered = function onFragBuffered(event, data) {
      var frag = data.frag,
        part = data.part;
      var stats = part != null && part.stats.loaded ? part.stats : frag.stats;
      if (stats.aborted) {
        return;
      }
      if (this.ignoreFragment(frag)) {
        return;
      }
      // Use the difference between parsing and request instead of buffering and request to compute fragLoadingProcessing;
      // rationale is that buffer appending only happens once media is attached. This can happen when config.startFragPrefetch
      // is used. If we used buffering in that case, our BW estimate sample will be very large.
      var processingMs = stats.parsing.end - stats.loading.start - Math.min(stats.loading.first - stats.loading.start, this.bwEstimator.getEstimateTTFB());
      this.bwEstimator.sample(processingMs, stats.loaded);
      stats.bwEstimate = this.getBwEstimate();
      if (frag.bitrateTest) {
        this.bitrateTestDelay = processingMs / 1000;
      } else {
        this.bitrateTestDelay = 0;
      }
    };
    _proto.ignoreFragment = function ignoreFragment(frag) {
      // Only count non-alt-audio frags which were actually buffered in our BW calculations
      return frag.type !== PlaylistLevelType.MAIN || frag.sn === 'initSegment';
    };
    _proto.clearTimer = function clearTimer() {
      if (this.timer > -1) {
        self.clearInterval(this.timer);
        this.timer = -1;
      }
    };
    _proto.getAutoLevelKey = function getAutoLevelKey() {
      return this.getBwEstimate() + "_" + this.getStarvationDelay().toFixed(2);
    };
    _proto.getNextABRAutoLevel = function getNextABRAutoLevel() {
      var fragCurrent = this.fragCurrent,
        partCurrent = this.partCurrent,
        hls = this.hls;
      if (hls.levels.length <= 1) {
        return hls.loadLevel;
      }
      var maxAutoLevel = hls.maxAutoLevel,
        config = hls.config,
        minAutoLevel = hls.minAutoLevel;
      var currentFragDuration = partCurrent ? partCurrent.duration : fragCurrent ? fragCurrent.duration : 0;
      var avgbw = this.getBwEstimate();
      // bufferStarvationDelay is the wall-clock time left until the playback buffer is exhausted.
      var bufferStarvationDelay = this.getStarvationDelay();
      var bwFactor = config.abrBandWidthFactor;
      var bwUpFactor = config.abrBandWidthUpFactor;

      // First, look to see if we can find a level matching with our avg bandwidth AND that could also guarantee no rebuffering at all
      if (bufferStarvationDelay) {
        var _bestLevel = this.findBestLevel(avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, 0, bwFactor, bwUpFactor);
        if (_bestLevel >= 0) {
          this.rebufferNotice = -1;
          return _bestLevel;
        }
      }
      // not possible to get rid of rebuffering... try to find level that will guarantee less than maxStarvationDelay of rebuffering
      var maxStarvationDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxStarvationDelay) : config.maxStarvationDelay;
      if (!bufferStarvationDelay) {
        // in case buffer is empty, let's check if previous fragment was loaded to perform a bitrate test
        var bitrateTestDelay = this.bitrateTestDelay;
        if (bitrateTestDelay) {
          // if it is the case, then we need to adjust our max starvation delay using maxLoadingDelay config value
          // max video loading delay used in  automatic start level selection :
          // in that mode ABR controller will ensure that video loading time (ie the time to fetch the first fragment at lowest quality level +
          // the time to fetch the fragment at the appropriate quality level is less than ```maxLoadingDelay``` )
          // cap maxLoadingDelay and ensure it is not bigger 'than bitrate test' frag duration
          var maxLoadingDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxLoadingDelay) : config.maxLoadingDelay;
          maxStarvationDelay = maxLoadingDelay - bitrateTestDelay;
          this.info("bitrate test took " + Math.round(1000 * bitrateTestDelay) + "ms, set first fragment max fetchDuration to " + Math.round(1000 * maxStarvationDelay) + " ms");
          // don't use conservative factor on bitrate test
          bwFactor = bwUpFactor = 1;
        }
      }
      var bestLevel = this.findBestLevel(avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, maxStarvationDelay, bwFactor, bwUpFactor);
      if (this.rebufferNotice !== bestLevel) {
        this.rebufferNotice = bestLevel;
        this.info((bufferStarvationDelay ? 'rebuffering expected' : 'buffer is empty') + ", optimal quality level " + bestLevel);
      }
      if (bestLevel > -1) {
        return bestLevel;
      }
      // If no matching level found, see if min auto level would be a better option
      var minLevel = hls.levels[minAutoLevel];
      var autoLevel = hls.loadLevelObj;
      if (autoLevel && (minLevel == null ? void 0 : minLevel.bitrate) < autoLevel.bitrate) {
        return minAutoLevel;
      }
      // or if bitrate is not lower, continue to use loadLevel
      return hls.loadLevel;
    };
    _proto.getStarvationDelay = function getStarvationDelay() {
      var hls = this.hls;
      var media = hls.media;
      if (!media) {
        return Infinity;
      }
      // playbackRate is the absolute value of the playback rate; if media.playbackRate is 0, we use 1 to load as
      // if we're playing back at the normal rate.
      var playbackRate = media && media.playbackRate !== 0 ? Math.abs(media.playbackRate) : 1.0;
      var bufferInfo = hls.mainForwardBufferInfo;
      return (bufferInfo ? bufferInfo.len : 0) / playbackRate;
    };
    _proto.getBwEstimate = function getBwEstimate() {
      return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
    };
    _proto.findBestLevel = function findBestLevel(currentBw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, maxStarvationDelay, bwFactor, bwUpFactor) {
      var _this$hls$latestLevel,
        _this3 = this;
      var maxFetchDuration = bufferStarvationDelay + maxStarvationDelay;
      var lastLoadedFragLevel = this.lastLoadedFragLevel;
      var selectionBaseLevel = lastLoadedFragLevel === -1 ? this.hls.firstLevel : lastLoadedFragLevel;
      var fragCurrent = this.fragCurrent,
        partCurrent = this.partCurrent;
      var _this$hls = this.hls,
        levels = _this$hls.levels,
        allAudioTracks = _this$hls.allAudioTracks,
        loadLevel = _this$hls.loadLevel,
        config = _this$hls.config;
      if (levels.length === 1) {
        return 0;
      }
      var level = levels[selectionBaseLevel];
      var live = !!((_this$hls$latestLevel = this.hls.latestLevelDetails) != null && _this$hls$latestLevel.live);
      var firstSelection = loadLevel === -1 || lastLoadedFragLevel === -1;
      var currentCodecSet;
      var currentVideoRange = 'SDR';
      var currentFrameRate = (level == null ? void 0 : level.frameRate) || 0;
      var audioPreference = config.audioPreference,
        videoPreference = config.videoPreference;
      var audioTracksByGroup = this.audioTracksByGroup || (this.audioTracksByGroup = getAudioTracksByGroup(allAudioTracks));
      var minStartIndex = -1;
      if (firstSelection) {
        if (this.firstSelection !== -1) {
          return this.firstSelection;
        }
        var codecTiers = this.codecTiers || (this.codecTiers = getCodecTiers(levels, audioTracksByGroup, minAutoLevel, maxAutoLevel));
        var startTier = getStartCodecTier(codecTiers, currentVideoRange, currentBw, audioPreference, videoPreference);
        var codecSet = startTier.codecSet,
          videoRanges = startTier.videoRanges,
          minFramerate = startTier.minFramerate,
          minBitrate = startTier.minBitrate,
          minIndex = startTier.minIndex,
          preferHDR = startTier.preferHDR;
        minStartIndex = minIndex;
        currentCodecSet = codecSet;
        currentVideoRange = preferHDR ? videoRanges[videoRanges.length - 1] : videoRanges[0];
        currentFrameRate = minFramerate;
        currentBw = Math.max(currentBw, minBitrate);
        this.log("picked start tier " + stringify(startTier));
      } else {
        currentCodecSet = level == null ? void 0 : level.codecSet;
        currentVideoRange = level == null ? void 0 : level.videoRange;
      }
      var currentFragDuration = partCurrent ? partCurrent.duration : fragCurrent ? fragCurrent.duration : 0;
      var ttfbEstimateSec = this.bwEstimator.getEstimateTTFB() / 1000;
      var levelsSkipped = [];
      var _loop = function _loop() {
          var _levelInfo$supportedR;
          var levelInfo = levels[i];
          var upSwitch = i > selectionBaseLevel;
          if (!levelInfo) {
            return 0; // continue
          }
          if (config.useMediaCapabilities && !levelInfo.supportedResult && !levelInfo.supportedPromise) {
            var mediaCapabilities = navigator.mediaCapabilities;
            if (typeof (mediaCapabilities == null ? void 0 : mediaCapabilities.decodingInfo) === 'function' && (requiresMediaCapabilitiesDecodingInfo(levelInfo, audioTracksByGroup, currentVideoRange, currentFrameRate, currentBw, audioPreference) || isHEVC(levelInfo.videoCodec)) // Force media capabilities check for HEVC to avoid failure on Windows
            ) {
              levelInfo.supportedPromise = getMediaDecodingInfoPromise(levelInfo, audioTracksByGroup, mediaCapabilities);
              levelInfo.supportedPromise.then(function (decodingInfo) {
                if (!_this3.hls) {
                  return;
                }
                levelInfo.supportedResult = decodingInfo;
                var levels = _this3.hls.levels;
                var index = levels.indexOf(levelInfo);
                if (decodingInfo.error) {
                  _this3.warn("MediaCapabilities decodingInfo error: \"" + decodingInfo.error + "\" for level " + index + " " + stringify(decodingInfo));
                } else if (!decodingInfo.supported) {
                  _this3.warn("Unsupported MediaCapabilities decodingInfo result for level " + index + " " + stringify(decodingInfo));
                  if (index > -1 && levels.length > 1) {
                    _this3.log("Removing unsupported level " + index);
                    _this3.hls.removeLevel(index);
                    if (_this3.hls.loadLevel === -1) {
                      _this3.hls.nextLoadLevel = 0;
                    }
                  }
                }
              });
            } else {
              levelInfo.supportedResult = SUPPORTED_INFO_DEFAULT;
            }
          }

          // skip candidates which change codec-family or video-range,
          // and which decrease or increase frame-rate for up and down-switch respectfully
          if (currentCodecSet && levelInfo.codecSet !== currentCodecSet || currentVideoRange && levelInfo.videoRange !== currentVideoRange || upSwitch && currentFrameRate > levelInfo.frameRate || !upSwitch && currentFrameRate > 0 && currentFrameRate < levelInfo.frameRate || levelInfo.supportedResult && !((_levelInfo$supportedR = levelInfo.supportedResult.decodingInfoResults) != null && _levelInfo$supportedR[0].smooth)) {
            if (!firstSelection || i !== minStartIndex) {
              levelsSkipped.push(i);
              return 0; // continue
            }
          }
          var levelDetails = levelInfo.details;
          var avgDuration = (partCurrent ? levelDetails == null ? void 0 : levelDetails.partTarget : levelDetails == null ? void 0 : levelDetails.averagetargetduration) || currentFragDuration;
          var adjustedbw;
          // follow algorithm captured from stagefright :
          // https://android.googlesource.com/platform/frameworks/av/+/master/media/libstagefright/httplive/LiveSession.cpp
          // Pick the highest bandwidth stream below or equal to estimated bandwidth.
          // consider only 80% of the available bandwidth, but if we are switching up,
          // be even more conservative (70%) to avoid overestimating and immediately
          // switching back.
          if (!upSwitch) {
            adjustedbw = bwFactor * currentBw;
          } else {
            adjustedbw = bwUpFactor * currentBw;
          }

          // Use average bitrate when starvation delay (buffer length) is gt or eq two segment durations and rebuffering is not expected (maxStarvationDelay > 0)
          var bitrate = currentFragDuration && bufferStarvationDelay >= currentFragDuration * 2 && maxStarvationDelay === 0 ? levelInfo.averageBitrate : levelInfo.maxBitrate;
          var fetchDuration = _this3.getTimeToLoadFrag(ttfbEstimateSec, adjustedbw, bitrate * avgDuration, levelDetails === undefined);
          var canSwitchWithinTolerance =
          // if adjusted bw is greater than level bitrate AND
          adjustedbw >= bitrate && (
          // no level change, or new level has no error history
          i === lastLoadedFragLevel || levelInfo.loadError === 0 && levelInfo.fragmentError === 0) && (
          // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
          // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
          // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
          fetchDuration <= ttfbEstimateSec || !isFiniteNumber(fetchDuration) || live && !_this3.bitrateTestDelay || fetchDuration < maxFetchDuration);
          if (canSwitchWithinTolerance) {
            var forcedAutoLevel = _this3.forcedAutoLevel;
            if (i !== loadLevel && (forcedAutoLevel === -1 || forcedAutoLevel !== loadLevel)) {
              if (levelsSkipped.length) {
                _this3.trace("Skipped level(s) " + levelsSkipped.join(',') + " of " + maxAutoLevel + " max with CODECS and VIDEO-RANGE:\"" + levels[levelsSkipped[0]].codecs + "\" " + levels[levelsSkipped[0]].videoRange + "; not compatible with \"" + currentCodecSet + "\" " + currentVideoRange);
              }
              _this3.info("switch candidate:" + selectionBaseLevel + "->" + i + " adjustedbw(" + Math.round(adjustedbw) + ")-bitrate=" + Math.round(adjustedbw - bitrate) + " ttfb:" + ttfbEstimateSec.toFixed(1) + " avgDuration:" + avgDuration.toFixed(1) + " maxFetchDuration:" + maxFetchDuration.toFixed(1) + " fetchDuration:" + fetchDuration.toFixed(1) + " firstSelection:" + firstSelection + " codecSet:" + levelInfo.codecSet + " videoRange:" + levelInfo.videoRange + " hls.loadLevel:" + loadLevel);
            }
            if (firstSelection) {
              _this3.firstSelection = i;
            }
            // as we are looping from highest to lowest, this will return the best achievable quality level
            return {
              v: i
            };
          }
        },
        _ret;
      for (var i = maxAutoLevel; i >= minAutoLevel; i--) {
        _ret = _loop();
        if (_ret === 0) continue;
        if (_ret) return _ret.v;
      }
      // not enough time budget even with quality level 0 ... rebuffering might happen
      return -1;
    };
    _proto.deriveNextAutoLevel = function deriveNextAutoLevel(nextLevel) {
      var _this$hls2 = this.hls,
        maxAutoLevel = _this$hls2.maxAutoLevel,
        minAutoLevel = _this$hls2.minAutoLevel;
      return Math.min(Math.max(nextLevel, minAutoLevel), maxAutoLevel);
    };
    return _createClass(AbrController, [{
      key: "firstAutoLevel",
      get: function get() {
        var _this$hls3 = this.hls,
          maxAutoLevel = _this$hls3.maxAutoLevel,
          minAutoLevel = _this$hls3.minAutoLevel;
        var bwEstimate = this.getBwEstimate();
        var maxStartDelay = this.hls.config.maxStarvationDelay;
        var abrAutoLevel = this.findBestLevel(bwEstimate, minAutoLevel, maxAutoLevel, 0, maxStartDelay, 1, 1);
        if (abrAutoLevel > -1) {
          return abrAutoLevel;
        }
        var firstLevel = this.hls.firstLevel;
        var clamped = Math.min(Math.max(firstLevel, minAutoLevel), maxAutoLevel);
        this.warn("Could not find best starting auto level. Defaulting to first in playlist " + firstLevel + " clamped to " + clamped);
        return clamped;
      }
    }, {
      key: "forcedAutoLevel",
      get: function get() {
        if (this.nextAutoLevelKey) {
          return -1;
        }
        return this._nextAutoLevel;
      }

      // return next auto level
    }, {
      key: "nextAutoLevel",
      get: function get() {
        var forcedAutoLevel = this.forcedAutoLevel;
        var bwEstimator = this.bwEstimator;
        var useEstimate = bwEstimator.canEstimate();
        var loadedFirstFrag = this.lastLoadedFragLevel > -1;
        // in case next auto level has been forced, and bw not available or not reliable, return forced value
        if (forcedAutoLevel !== -1 && (!useEstimate || !loadedFirstFrag || this.nextAutoLevelKey === this.getAutoLevelKey())) {
          return forcedAutoLevel;
        }

        // compute next level using ABR logic
        var nextABRAutoLevel = useEstimate && loadedFirstFrag ? this.getNextABRAutoLevel() : this.firstAutoLevel;

        // use forced auto level while it hasn't errored more than ABR selection
        if (forcedAutoLevel !== -1) {
          var levels = this.hls.levels;
          if (levels.length > Math.max(forcedAutoLevel, nextABRAutoLevel) && levels[forcedAutoLevel].loadError <= levels[nextABRAutoLevel].loadError) {
            return forcedAutoLevel;
          }
        }

        // save result until state has changed
        this._nextAutoLevel = nextABRAutoLevel;
        this.nextAutoLevelKey = this.getAutoLevelKey();
        return nextABRAutoLevel;
      },
      set: function set(nextLevel) {
        var value = this.deriveNextAutoLevel(nextLevel);
        if (this._nextAutoLevel !== value) {
          this.nextAutoLevelKey = '';
          this._nextAutoLevel = value;
        }
      }
    }]);
  }(Logger);

  var BinarySearch = {
    /**
     * Searches for an item in an array which matches a certain condition.
     * This requires the condition to only match one item in the array,
     * and for the array to be ordered.
     *
     * @param list The array to search.
     * @param comparisonFn
     *      Called and provided a candidate item as the first argument.
     *      Should return:
     *          > -1 if the item should be located at a lower index than the provided item.
     *          > 1 if the item should be located at a higher index than the provided item.
     *          > 0 if the item is the item you're looking for.
     *
     * @returns the object if found, otherwise returns null
     */
    search: function search(list, comparisonFn) {
      var minIndex = 0;
      var maxIndex = list.length - 1;
      var currentIndex = null;
      var currentElement = null;
      while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = list[currentIndex];
        var comparisonResult = comparisonFn(currentElement);
        if (comparisonResult > 0) {
          minIndex = currentIndex + 1;
        } else if (comparisonResult < 0) {
          maxIndex = currentIndex - 1;
        } else {
          return currentElement;
        }
      }
      return null;
    }
  };

  /**
   * Returns first fragment whose endPdt value exceeds the given PDT, or null.
   * @param fragments - The array of candidate fragments
   * @param PDTValue - The PDT value which must be exceeded
   * @param maxFragLookUpTolerance - The amount of time that a fragment's start/end can be within in order to be considered contiguous
   */
  function findFragmentByPDT(fragments, PDTValue, maxFragLookUpTolerance) {
    if (PDTValue === null || !Array.isArray(fragments) || !fragments.length || !isFiniteNumber(PDTValue)) {
      return null;
    }

    // if less than start
    var startPDT = fragments[0].programDateTime;
    if (PDTValue < (startPDT || 0)) {
      return null;
    }
    var endPDT = fragments[fragments.length - 1].endProgramDateTime;
    if (PDTValue >= (endPDT || 0)) {
      return null;
    }
    maxFragLookUpTolerance = maxFragLookUpTolerance || 0;
    for (var seg = 0; seg < fragments.length; ++seg) {
      var frag = fragments[seg];
      if (pdtWithinToleranceTest(PDTValue, maxFragLookUpTolerance, frag)) {
        return frag;
      }
    }
    return null;
  }

  /**
   * Finds a fragment based on the SN of the previous fragment; or based on the needs of the current buffer.
   * This method compensates for small buffer gaps by applying a tolerance to the start of any candidate fragment, thus
   * breaking any traps which would cause the same fragment to be continuously selected within a small range.
   * @param fragPrevious - The last frag successfully appended
   * @param fragments - The array of candidate fragments
   * @param bufferEnd - The end of the contiguous buffered range the playhead is currently within
   * @param maxFragLookUpTolerance - The amount of time that a fragment's start/end can be within in order to be considered contiguous
   * @returns a matching fragment or null
   */
  function findFragmentByPTS(fragPrevious, fragments, bufferEnd, maxFragLookUpTolerance, nextFragLookupTolerance) {
    if (bufferEnd === void 0) {
      bufferEnd = 0;
    }
    if (maxFragLookUpTolerance === void 0) {
      maxFragLookUpTolerance = 0;
    }
    if (nextFragLookupTolerance === void 0) {
      nextFragLookupTolerance = 0.005;
    }
    var fragNext = null;
    if (fragPrevious) {
      fragNext = fragments[1 + fragPrevious.sn - fragments[0].sn] || null;
      // check for buffer-end rounding error
      var bufferEdgeError = fragPrevious.endDTS - bufferEnd;
      if (bufferEdgeError > 0 && bufferEdgeError < 0.0000015) {
        bufferEnd += 0.0000015;
      }
      if (fragNext && fragPrevious.level !== fragNext.level && fragNext.end <= fragPrevious.end) {
        fragNext = fragments[2 + fragPrevious.sn - fragments[0].sn] || null;
      }
    } else if (bufferEnd === 0 && fragments[0].start === 0) {
      fragNext = fragments[0];
    }
    // Prefer the next fragment if it's within tolerance
    if (fragNext && ((!fragPrevious || fragPrevious.level === fragNext.level) && fragmentWithinToleranceTest(bufferEnd, maxFragLookUpTolerance, fragNext) === 0 || fragmentWithinFastStartSwitch(fragNext, fragPrevious, Math.min(nextFragLookupTolerance, maxFragLookUpTolerance)))) {
      return fragNext;
    }
    // We might be seeking past the tolerance so find the best match
    var foundFragment = BinarySearch.search(fragments, fragmentWithinToleranceTest.bind(null, bufferEnd, maxFragLookUpTolerance));
    if (foundFragment && (foundFragment !== fragPrevious || !fragNext)) {
      return foundFragment;
    }
    // If no match was found return the next fragment after fragPrevious, or null
    return fragNext;
  }
  function fragmentWithinFastStartSwitch(fragNext, fragPrevious, nextFragLookupTolerance) {
    if (fragPrevious && fragPrevious.start === 0 && fragPrevious.level < fragNext.level && (fragPrevious.endPTS || 0) > 0) {
      var firstDuration = fragPrevious.tagList.reduce(function (duration, tag) {
        if (tag[0] === 'INF') {
          duration += parseFloat(tag[1]);
        }
        return duration;
      }, nextFragLookupTolerance);
      return fragNext.start <= firstDuration;
    }
    return false;
  }

  /**
   * The test function used by the findFragmentBySn's BinarySearch to look for the best match to the current buffer conditions.
   * @param candidate - The fragment to test
   * @param bufferEnd - The end of the current buffered range the playhead is currently within
   * @param maxFragLookUpTolerance - The amount of time that a fragment's start can be within in order to be considered contiguous
   * @returns 0 if it matches, 1 if too low, -1 if too high
   */
  function fragmentWithinToleranceTest(bufferEnd, maxFragLookUpTolerance, candidate) {
    if (bufferEnd === void 0) {
      bufferEnd = 0;
    }
    if (maxFragLookUpTolerance === void 0) {
      maxFragLookUpTolerance = 0;
    }
    // eagerly accept an accurate match (no tolerance)
    if (candidate.start <= bufferEnd && candidate.start + candidate.duration > bufferEnd) {
      return 0;
    }
    // offset should be within fragment boundary - config.maxFragLookUpTolerance
    // this is to cope with situations like
    // bufferEnd = 9.991
    // frag[Ã˜] : [0,10]
    // frag[1] : [10,20]
    // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
    //              frag start               frag start+duration
    //                  |-----------------------------|
    //              <--->                         <--->
    //  ...--------><-----------------------------><---------....
    // previous frag         matching fragment         next frag
    //  return -1             return 0                 return 1
    // logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
    // Set the lookup tolerance to be small enough to detect the current segment - ensures we don't skip over very small segments
    var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration + (candidate.deltaPTS ? candidate.deltaPTS : 0));
    if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) {
      return 1;
    } else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) {
      // if maxFragLookUpTolerance will have negative value then don't return -1 for first element
      return -1;
    }
    return 0;
  }

  /**
   * The test function used by the findFragmentByPdt's BinarySearch to look for the best match to the current buffer conditions.
   * This function tests the candidate's program date time values, as represented in Unix time
   * @param candidate - The fragment to test
   * @param pdtBufferEnd - The Unix time representing the end of the current buffered range
   * @param maxFragLookUpTolerance - The amount of time that a fragment's start can be within in order to be considered contiguous
   * @returns true if contiguous, false otherwise
   */
  function pdtWithinToleranceTest(pdtBufferEnd, maxFragLookUpTolerance, candidate) {
    var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration + (candidate.deltaPTS ? candidate.deltaPTS : 0)) * 1000;

    // endProgramDateTime can be null, default to zero
    var endProgramDateTime = candidate.endProgramDateTime || 0;
    return endProgramDateTime - candidateLookupTolerance > pdtBufferEnd;
  }
  function findFragWithCC(fragments, cc) {
    return BinarySearch.search(fragments, function (candidate) {
      if (candidate.cc < cc) {
        return 1;
      } else if (candidate.cc > cc) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  function findNearestWithCC(details, cc, fragment) {
    if (details) {
      if (details.startCC <= cc && details.endCC >= cc) {
        var start = fragment.start;
        var end = fragment.end;
        var fragments = details.fragments;
        if (!fragment.relurl) {
          var fragmentHint = details.fragmentHint;
          if (fragmentHint) {
            fragments = fragments.concat(fragmentHint);
          }
        }
        return BinarySearch.search(fragments, function (candidate) {
          if (candidate.cc < cc || candidate.end <= start) {
            return 1;
          } else if (candidate.cc > cc || candidate.start >= end) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
    return null;
  }

  function isTimeoutError(error) {
    switch (error.details) {
      case ErrorDetails.FRAG_LOAD_TIMEOUT:
      case ErrorDetails.KEY_LOAD_TIMEOUT:
      case ErrorDetails.LEVEL_LOAD_TIMEOUT:
      case ErrorDetails.MANIFEST_LOAD_TIMEOUT:
        return true;
    }
    return false;
  }
  function getRetryConfig(loadPolicy, error) {
    var isTimeout = isTimeoutError(error);
    return loadPolicy.default[(isTimeout ? 'timeout' : 'error') + "Retry"];
  }
  function getRetryDelay(retryConfig, retryCount) {
    // exponential backoff capped to max retry delay
    var backoffFactor = retryConfig.backoff === 'linear' ? 1 : Math.pow(2, retryCount);
    return Math.min(backoffFactor * retryConfig.retryDelayMs, retryConfig.maxRetryDelayMs);
  }
  function getLoaderConfigWithoutReties(loderConfig) {
    return _objectSpread2(_objectSpread2({}, loderConfig), {
      errorRetry: null,
      timeoutRetry: null
    });
  }
  function shouldRetry(retryConfig, retryCount, isTimeout, loaderResponse) {
    if (!retryConfig) {
      return false;
    }
    var httpStatus = loaderResponse == null ? void 0 : loaderResponse.code;
    var retry = retryCount < retryConfig.maxNumRetry && (retryForHttpStatus(httpStatus) || !!isTimeout);
    return retryConfig.shouldRetry ? retryConfig.shouldRetry(retryConfig, retryCount, isTimeout, loaderResponse, retry) : retry;
  }
  function retryForHttpStatus(httpStatus) {
    // Do not retry on status 4xx, status 0 (CORS error), or undefined (decrypt/gap/parse error)
    return httpStatus === 0 && navigator.onLine === false || !!httpStatus && (httpStatus < 400 || httpStatus > 499);
  }

  var NetworkErrorAction = {
    DoNothing: 0,
    SendAlternateToPenaltyBox: 2,
    RemoveAlternatePermanently: 3,
    RetryRequest: 5
  };
  var ErrorActionFlags = {
    None: 0,
    MoveAllAlternatesMatchingHost: 1,
    MoveAllAlternatesMatchingHDCP: 2};
  var ErrorController = /*#__PURE__*/function (_Logger) {
    function ErrorController(hls) {
      var _this;
      _this = _Logger.call(this, 'error-controller', hls.logger) || this;
      _this.hls = void 0;
      _this.playlistError = 0;
      _this.penalizedRenditions = {};
      _this.hls = hls;
      _this.registerListeners();
      return _this;
    }
    _inheritsLoose(ErrorController, _Logger);
    var _proto = ErrorController.prototype;
    _proto.registerListeners = function registerListeners() {
      var hls = this.hls;
      hls.on(Events.ERROR, this.onError, this);
      hls.on(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.on(Events.LEVEL_UPDATED, this.onLevelUpdated, this);
    };
    _proto.unregisterListeners = function unregisterListeners() {
      var hls = this.hls;
      if (!hls) {
        return;
      }
      hls.off(Events.ERROR, this.onError, this);
      hls.off(Events.ERROR, this.onErrorOut, this);
      hls.off(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.off(Events.LEVEL_UPDATED, this.onLevelUpdated, this);
    };
    _proto.destroy = function destroy() {
      this.unregisterListeners();
      // @ts-ignore
      this.hls = null;
      this.penalizedRenditions = {};
    };
    _proto.startLoad = function startLoad(startPosition) {};
    _proto.stopLoad = function stopLoad() {
      this.playlistError = 0;
    };
    _proto.getVariantLevelIndex = function getVariantLevelIndex(frag) {
      return (frag == null ? void 0 : frag.type) === PlaylistLevelType.MAIN ? frag.level : this.hls.loadLevel;
    };
    _proto.onManifestLoading = function onManifestLoading() {
      this.playlistError = 0;
      this.penalizedRenditions = {};
    };
    _proto.onLevelUpdated = function onLevelUpdated() {
      this.playlistError = 0;
    };
    _proto.onError = function onError(event, data) {
      var _data$frag;
      if (data.fatal) {
        return;
      }
      var hls = this.hls;
      var context = data.context;
      switch (data.details) {
        case ErrorDetails.FRAG_LOAD_ERROR:
        case ErrorDetails.FRAG_LOAD_TIMEOUT:
        case ErrorDetails.KEY_LOAD_ERROR:
        case ErrorDetails.KEY_LOAD_TIMEOUT:
          data.errorAction = this.getFragRetryOrSwitchAction(data);
          return;
        case ErrorDetails.FRAG_PARSING_ERROR:
          // ignore empty segment errors marked as gap
          if ((_data$frag = data.frag) != null && _data$frag.gap) {
            data.errorAction = createDoNothingErrorAction();
            return;
          }
        // falls through
        case ErrorDetails.FRAG_GAP:
        case ErrorDetails.FRAG_DECRYPT_ERROR:
          {
            // Switch level if possible, otherwise allow retry count to reach max error retries
            data.errorAction = this.getFragRetryOrSwitchAction(data);
            data.errorAction.action = NetworkErrorAction.SendAlternateToPenaltyBox;
            return;
          }
        case ErrorDetails.LEVEL_EMPTY_ERROR:
        case ErrorDetails.LEVEL_PARSING_ERROR:
          {
            var _data$context, _data$context$levelDe;
            // Only retry when empty and live
            var levelIndex = data.parent === PlaylistLevelType.MAIN ? data.level : hls.loadLevel;
            if (data.details === ErrorDetails.LEVEL_EMPTY_ERROR && !!((_data$context = data.context) != null && (_data$context$levelDe = _data$context.levelDetails) != null && _data$context$levelDe.live)) {
              data.errorAction = this.getPlaylistRetryOrSwitchAction(data, levelIndex);
            } else {
              // Escalate to fatal if not retrying or switching
              data.levelRetry = false;
              data.errorAction = this.getLevelSwitchAction(data, levelIndex);
            }
          }
          return;
        case ErrorDetails.LEVEL_LOAD_ERROR:
        case ErrorDetails.LEVEL_LOAD_TIMEOUT:
          if (typeof (context == null ? void 0 : context.level) === 'number') {
            data.errorAction = this.getPlaylistRetryOrSwitchAction(data, context.level);
          }
          return;
        case ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
        case ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
        case ErrorDetails.SUBTITLE_LOAD_ERROR:
        case ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:
          if (context) {
            var level = hls.loadLevelObj;
            if (level && (context.type === PlaylistContextType.AUDIO_TRACK && level.hasAudioGroup(context.groupId) || context.type === PlaylistContextType.SUBTITLE_TRACK && level.hasSubtitleGroup(context.groupId))) {
              // Perform Pathway switch or Redundant failover if possible for fastest recovery
              // otherwise allow playlist retry count to reach max error retries
              data.errorAction = this.getPlaylistRetryOrSwitchAction(data, hls.loadLevel);
              data.errorAction.action = NetworkErrorAction.SendAlternateToPenaltyBox;
              data.errorAction.flags = ErrorActionFlags.MoveAllAlternatesMatchingHost;
              return;
            }
          }
          return;
        case ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
          {
            var _level = hls.loadLevelObj;
            var restrictedHdcpLevel = _level == null ? void 0 : _level.attrs['HDCP-LEVEL'];
            if (restrictedHdcpLevel) {
              data.errorAction = {
                action: NetworkErrorAction.SendAlternateToPenaltyBox,
                flags: ErrorActionFlags.MoveAllAlternatesMatchingHDCP,
                hdcpLevel: restrictedHdcpLevel
              };
            } else {
              this.keySystemError(data);
            }
          }
          return;
        case ErrorDetails.BUFFER_ADD_CODEC_ERROR:
        case ErrorDetails.REMUX_ALLOC_ERROR:
        case ErrorDetails.BUFFER_APPEND_ERROR:
          // Buffer-controller can set errorAction when append errors can be ignored or resolved locally
          if (!data.errorAction) {
            var _data$level;
            data.errorAction = this.getLevelSwitchAction(data, (_data$level = data.level) != null ? _data$level : hls.loadLevel);
          }
          return;
        case ErrorDetails.INTERNAL_EXCEPTION:
        case ErrorDetails.BUFFER_APPENDING_ERROR:
        case ErrorDetails.BUFFER_FULL_ERROR:
        case ErrorDetails.LEVEL_SWITCH_ERROR:
        case ErrorDetails.BUFFER_STALLED_ERROR:
        case ErrorDetails.BUFFER_SEEK_OVER_HOLE:
        case ErrorDetails.BUFFER_NUDGE_ON_STALL:
          data.errorAction = createDoNothingErrorAction();
          return;
      }
      if (data.type === ErrorTypes.KEY_SYSTEM_ERROR) {
        this.keySystemError(data);
      }
    };
    _proto.keySystemError = function keySystemError(data) {
      var levelIndex = this.getVariantLevelIndex(data.frag);
      // Do not retry level. Escalate to fatal if switching levels fails.
      data.levelRetry = false;
      data.errorAction = this.getLevelSwitchAction(data, levelIndex);
    };
    _proto.getPlaylistRetryOrSwitchAction = function getPlaylistRetryOrSwitchAction(data, levelIndex) {
      var hls = this.hls;
      var retryConfig = getRetryConfig(hls.config.playlistLoadPolicy, data);
      var retryCount = this.playlistError++;
      var retry = shouldRetry(retryConfig, retryCount, isTimeoutError(data), data.response);
      if (retry) {
        return {
          action: NetworkErrorAction.RetryRequest,
          flags: ErrorActionFlags.None,
          retryConfig: retryConfig,
          retryCount: retryCount
        };
      }
      var errorAction = this.getLevelSwitchAction(data, levelIndex);
      if (retryConfig) {
        errorAction.retryConfig = retryConfig;
        errorAction.retryCount = retryCount;
      }
      return errorAction;
    };
    _proto.getFragRetryOrSwitchAction = function getFragRetryOrSwitchAction(data) {
      var hls = this.hls;
      // Share fragment error count accross media options (main, audio, subs)
      // This allows for level based rendition switching when media option assets fail
      var variantLevelIndex = this.getVariantLevelIndex(data.frag);
      var level = hls.levels[variantLevelIndex];
      var _hls$config = hls.config,
        fragLoadPolicy = _hls$config.fragLoadPolicy,
        keyLoadPolicy = _hls$config.keyLoadPolicy;
      var retryConfig = getRetryConfig(data.details.startsWith('key') ? keyLoadPolicy : fragLoadPolicy, data);
      var fragmentErrors = hls.levels.reduce(function (acc, level) {
        return acc + level.fragmentError;
      }, 0);
      // Switch levels when out of retried or level index out of bounds
      if (level) {
        if (data.details !== ErrorDetails.FRAG_GAP) {
          level.fragmentError++;
        }
        var retry = shouldRetry(retryConfig, fragmentErrors, isTimeoutError(data), data.response);
        if (retry) {
          return {
            action: NetworkErrorAction.RetryRequest,
            flags: ErrorActionFlags.None,
            retryConfig: retryConfig,
            retryCount: fragmentErrors
          };
        }
      }
      // Reach max retry count, or Missing level reference
      // Switch to valid index
      var errorAction = this.getLevelSwitchAction(data, variantLevelIndex);
      // Add retry details to allow skipping of FRAG_PARSING_ERROR
      if (retryConfig) {
        errorAction.retryConfig = retryConfig;
        errorAction.retryCount = fragmentErrors;
      }
      return errorAction;
    };
    _proto.getLevelSwitchAction = function getLevelSwitchAction(data, levelIndex) {
      var hls = this.hls;
      if (levelIndex === null || levelIndex === undefined) {
        levelIndex = hls.loadLevel;
      }
      var level = this.hls.levels[levelIndex];
      if (level) {
        var _data$frag2, _data$context2;
        var errorDetails = data.details;
        level.loadError++;
        if (errorDetails === ErrorDetails.BUFFER_APPEND_ERROR) {
          level.fragmentError++;
        }
        // Search for next level to retry
        var nextLevel = -1;
        var levels = hls.levels,
          loadLevel = hls.loadLevel,
          minAutoLevel = hls.minAutoLevel,
          maxAutoLevel = hls.maxAutoLevel;
        if (!hls.autoLevelEnabled) {
          hls.loadLevel = -1;
        }
        var fragErrorType = (_data$frag2 = data.frag) == null ? void 0 : _data$frag2.type;
        // Find alternate audio codec if available on audio codec error
        var isAudioCodecError = fragErrorType === PlaylistLevelType.AUDIO && errorDetails === ErrorDetails.FRAG_PARSING_ERROR || data.sourceBufferName === 'audio' && (errorDetails === ErrorDetails.BUFFER_ADD_CODEC_ERROR || errorDetails === ErrorDetails.BUFFER_APPEND_ERROR);
        var findAudioCodecAlternate = isAudioCodecError && levels.some(function (_ref) {
          var audioCodec = _ref.audioCodec;
          return level.audioCodec !== audioCodec;
        });
        // Find alternate video codec if available on video codec error
        var isVideoCodecError = data.sourceBufferName === 'video' && (errorDetails === ErrorDetails.BUFFER_ADD_CODEC_ERROR || errorDetails === ErrorDetails.BUFFER_APPEND_ERROR);
        var findVideoCodecAlternate = isVideoCodecError && levels.some(function (_ref2) {
          var codecSet = _ref2.codecSet,
            audioCodec = _ref2.audioCodec;
          return level.codecSet !== codecSet && level.audioCodec === audioCodec;
        });
        var _ref3 = (_data$context2 = data.context) != null ? _data$context2 : {},
          playlistErrorType = _ref3.type,
          playlistErrorGroupId = _ref3.groupId;
        var _loop = function _loop() {
            var candidate = (i + loadLevel) % levels.length;
            if (candidate !== loadLevel && candidate >= minAutoLevel && candidate <= maxAutoLevel && levels[candidate].loadError === 0) {
              var _level$audioGroups, _level$subtitleGroups;
              var levelCandidate = levels[candidate];
              // Skip level switch if GAP tag is found in next level at same position
              if (errorDetails === ErrorDetails.FRAG_GAP && fragErrorType === PlaylistLevelType.MAIN && data.frag) {
                var levelDetails = levels[candidate].details;
                if (levelDetails) {
                  var fragCandidate = findFragmentByPTS(data.frag, levelDetails.fragments, data.frag.start);
                  if (fragCandidate != null && fragCandidate.gap) {
                    return 0; // continue
                  }
                }
              } else if (playlistErrorType === PlaylistContextType.AUDIO_TRACK && levelCandidate.hasAudioGroup(playlistErrorGroupId) || playlistErrorType === PlaylistContextType.SUBTITLE_TRACK && levelCandidate.hasSubtitleGroup(playlistErrorGroupId)) {
                // For audio/subs playlist errors find another group ID or fallthrough to redundant fail-over
                return 0; // continue
              } else if (fragErrorType === PlaylistLevelType.AUDIO && (_level$audioGroups = level.audioGroups) != null && _level$audioGroups.some(function (groupId) {
                return levelCandidate.hasAudioGroup(groupId);
              }) || fragErrorType === PlaylistLevelType.SUBTITLE && (_level$subtitleGroups = level.subtitleGroups) != null && _level$subtitleGroups.some(function (groupId) {
                return levelCandidate.hasSubtitleGroup(groupId);
              }) || findAudioCodecAlternate && level.audioCodec === levelCandidate.audioCodec || !findAudioCodecAlternate && level.audioCodec !== levelCandidate.audioCodec || findVideoCodecAlternate && level.codecSet === levelCandidate.codecSet) {
                // For video/audio/subs frag errors find another group ID or fallthrough to redundant fail-over
                return 0; // continue
              }
              nextLevel = candidate;
              return 1; // break
            }
          },
          _ret;
        for (var i = levels.length; i--;) {
          _ret = _loop();
          if (_ret === 0) continue;
          if (_ret === 1) break;
        }
        if (nextLevel > -1 && hls.loadLevel !== nextLevel) {
          data.levelRetry = true;
          this.playlistError = 0;
          return {
            action: NetworkErrorAction.SendAlternateToPenaltyBox,
            flags: ErrorActionFlags.None,
            nextAutoLevel: nextLevel
          };
        }
      }
      // No levels to switch / Manual level selection / Level not found
      // Resolve with Pathway switch, Redundant fail-over, or stay on lowest Level
      return {
        action: NetworkErrorAction.SendAlternateToPenaltyBox,
        flags: ErrorActionFlags.MoveAllAlternatesMatchingHost
      };
    };
    _proto.onErrorOut = function onErrorOut(event, data) {
      var _data$errorAction;
      switch ((_data$errorAction = data.errorAction) == null ? void 0 : _data$errorAction.action) {
        case NetworkErrorAction.DoNothing:
          break;
        case NetworkErrorAction.SendAlternateToPenaltyBox:
          this.sendAlternateToPenaltyBox(data);
          if (!data.errorAction.resolved && data.details !== ErrorDetails.FRAG_GAP) {
            data.fatal = true;
          } else if (/MediaSource readyState: ended/.test(data.error.message)) {
            this.warn("MediaSource ended after \"" + data.sourceBufferName + "\" sourceBuffer append error. Attempting to recover from media error.");
            this.hls.recoverMediaError();
          }
          break;
      }
      if (data.fatal) {
        this.hls.stopLoad();
        return;
      }
    };
    _proto.sendAlternateToPenaltyBox = function sendAlternateToPenaltyBox(data) {
      var hls = this.hls;
      var errorAction = data.errorAction;
      if (!errorAction) {
        return;
      }
      var flags = errorAction.flags,
        hdcpLevel = errorAction.hdcpLevel,
        nextAutoLevel = errorAction.nextAutoLevel;
      switch (flags) {
        case ErrorActionFlags.None:
          this.switchLevel(data, nextAutoLevel);
          break;
        case ErrorActionFlags.MoveAllAlternatesMatchingHDCP:
          if (hdcpLevel) {
            hls.maxHdcpLevel = HdcpLevels[HdcpLevels.indexOf(hdcpLevel) - 1];
            errorAction.resolved = true;
          }
          this.warn("Restricting playback to HDCP-LEVEL of \"" + hls.maxHdcpLevel + "\" or lower");
          break;
      }
      // If not resolved by previous actions try to switch to next level
      if (!errorAction.resolved) {
        this.switchLevel(data, nextAutoLevel);
      }
    };
    _proto.switchLevel = function switchLevel(data, levelIndex) {
      if (levelIndex !== undefined && data.errorAction) {
        this.warn("switching to level " + levelIndex + " after " + data.details);
        this.hls.nextAutoLevel = levelIndex;
        data.errorAction.resolved = true;
        // Stream controller is responsible for this but won't switch on false start
        this.hls.nextLoadLevel = this.hls.nextAutoLevel;
        if (data.details === ErrorDetails.BUFFER_ADD_CODEC_ERROR && data.mimeType && data.sourceBufferName !== 'audiovideo') {
          var codec = getCodecsForMimeType(data.mimeType);
          var levels = this.hls.levels;
          for (var i = levels.length; i--;) {
            if (levels[i][data.sourceBufferName + "Codec"] === codec) {
              this.hls.removeLevel(i);
            }
          }
        }
      }
    };
    return ErrorController;
  }(Logger);
  function createDoNothingErrorAction(resolved) {
    var errorAction = {
      action: NetworkErrorAction.DoNothing,
      flags: ErrorActionFlags.None
    };
    if (resolved) {
      errorAction.resolved = true;
    }
    return errorAction;
  }

  var FragmentState = {
    NOT_LOADED: "NOT_LOADED",
    APPENDING: "APPENDING",
    PARTIAL: "PARTIAL",
    OK: "OK"
  };
  var FragmentTracker = /*#__PURE__*/function () {
    function FragmentTracker(hls) {
      this.activePartLists = Object.create(null);
      this.endListFragments = Object.create(null);
      this.fragments = Object.create(null);
      this.timeRanges = Object.create(null);
      this.bufferPadding = 0.2;
      this.hls = void 0;
      this.hasGaps = false;
      this.hls = hls;
      this._registerListeners();
    }
    var _proto = FragmentTracker.prototype;
    _proto._registerListeners = function _registerListeners() {
      var hls = this.hls;
      hls.on(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.on(Events.BUFFER_APPENDED, this.onBufferAppended, this);
      hls.on(Events.FRAG_BUFFERED, this.onFragBuffered, this);
      hls.on(Events.FRAG_LOADED, this.onFragLoaded, this);
    };
    _proto._unregisterListeners = function _unregisterListeners() {
      var hls = this.hls;
      hls.off(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.off(Events.BUFFER_APPENDED, this.onBufferAppended, this);
      hls.off(Events.FRAG_BUFFERED, this.onFragBuffered, this);
      hls.off(Events.FRAG_LOADED, this.onFragLoaded, this);
    };
    _proto.destroy = function destroy() {
      this._unregisterListeners();
      // @ts-ignore
      this.fragments =
      // @ts-ignore
      this.activePartLists =
      // @ts-ignore
      this.endListFragments = this.timeRanges = null;
    }

    /**
     * Return a Fragment or Part with an appended range that matches the position and levelType
     * Otherwise, return null
     */;
    _proto.getAppendedFrag = function getAppendedFrag(position, levelType) {
      var activeParts = this.activePartLists[levelType];
      if (activeParts) {
        for (var i = activeParts.length; i--;) {
          var activePart = activeParts[i];
          if (!activePart) {
            break;
          }
          var appendedPTS = activePart.end;
          if (activePart.start <= position && appendedPTS !== null && position <= appendedPTS) {
            return activePart;
          }
        }
      }
      return this.getBufferedFrag(position, levelType);
    }

    /**
     * Return a buffered Fragment that matches the position and levelType.
     * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
     * If not found any Fragment, return null
     */;
    _proto.getBufferedFrag = function getBufferedFrag(position, levelType) {
      return this.getFragAtPos(position, levelType, true);
    };
    _proto.getFragAtPos = function getFragAtPos(position, levelType, buffered) {
      var fragments = this.fragments;
      var keys = Object.keys(fragments);
      for (var i = keys.length; i--;) {
        var fragmentEntity = fragments[keys[i]];
        if ((fragmentEntity == null ? void 0 : fragmentEntity.body.type) === levelType && (!buffered || fragmentEntity.buffered)) {
          var frag = fragmentEntity.body;
          if (frag.start <= position && position <= frag.end) {
            return frag;
          }
        }
      }
      return null;
    }

    /**
     * Partial fragments effected by coded frame eviction will be removed
     * The browser will unload parts of the buffer to free up memory for new buffer data
     * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
     */;
    _proto.detectEvictedFragments = function detectEvictedFragments(elementaryStream, timeRange, playlistType, appendedPart, removeAppending) {
      var _this = this;
      if (this.timeRanges) {
        this.timeRanges[elementaryStream] = timeRange;
      }
      // Check if any flagged fragments have been unloaded
      // excluding anything newer than appendedPartSn
      var appendedPartSn = (appendedPart == null ? void 0 : appendedPart.fragment.sn) || -1;
      Object.keys(this.fragments).forEach(function (key) {
        var fragmentEntity = _this.fragments[key];
        if (!fragmentEntity) {
          return;
        }
        if (appendedPartSn >= fragmentEntity.body.sn) {
          return;
        }
        if (!fragmentEntity.buffered && (!fragmentEntity.loaded || removeAppending)) {
          if (fragmentEntity.body.type === playlistType) {
            _this.removeFragment(fragmentEntity.body);
          }
          return;
        }
        var esData = fragmentEntity.range[elementaryStream];
        if (!esData) {
          return;
        }
        if (esData.time.length === 0) {
          _this.removeFragment(fragmentEntity.body);
          return;
        }
        esData.time.some(function (time) {
          var isNotBuffered = !_this.isTimeBuffered(time.startPTS, time.endPTS, timeRange);
          if (isNotBuffered) {
            // Unregister partial fragment as it needs to load again to be reused
            _this.removeFragment(fragmentEntity.body);
          }
          return isNotBuffered;
        });
      });
    }

    /**
     * Checks if the fragment passed in is loaded in the buffer properly
     * Partially loaded fragments will be registered as a partial fragment
     */;
    _proto.detectPartialFragments = function detectPartialFragments(data) {
      var _this2 = this;
      var timeRanges = this.timeRanges;
      if (!timeRanges || data.frag.sn === 'initSegment') {
        return;
      }
      var frag = data.frag;
      var fragKey = getFragmentKey(frag);
      var fragmentEntity = this.fragments[fragKey];
      if (!fragmentEntity || fragmentEntity.buffered && frag.gap) {
        return;
      }
      var isFragHint = !frag.relurl;
      Object.keys(timeRanges).forEach(function (elementaryStream) {
        var streamInfo = frag.elementaryStreams[elementaryStream];
        if (!streamInfo) {
          return;
        }
        var timeRange = timeRanges[elementaryStream];
        var partial = isFragHint || streamInfo.partial === true;
        fragmentEntity.range[elementaryStream] = _this2.getBufferedTimes(frag, data.part, partial, timeRange);
      });
      fragmentEntity.loaded = null;
      if (Object.keys(fragmentEntity.range).length) {
        fragmentEntity.buffered = true;
        var endList = fragmentEntity.body.endList = frag.endList || fragmentEntity.body.endList;
        if (endList) {
          this.endListFragments[fragmentEntity.body.type] = fragmentEntity;
        }
        if (!isPartial(fragmentEntity)) {
          // Remove older fragment parts from lookup after frag is tracked as buffered
          this.removeParts(frag.sn - 1, frag.type);
        }
      } else {
        // remove fragment if nothing was appended
        this.removeFragment(fragmentEntity.body);
      }
    };
    _proto.removeParts = function removeParts(snToKeep, levelType) {
      var activeParts = this.activePartLists[levelType];
      if (!activeParts) {
        return;
      }
      this.activePartLists[levelType] = filterParts(activeParts, function (part) {
        return part.fragment.sn >= snToKeep;
      });
    };
    _proto.fragBuffered = function fragBuffered(frag, force) {
      var fragKey = getFragmentKey(frag);
      var fragmentEntity = this.fragments[fragKey];
      if (!fragmentEntity && force) {
        fragmentEntity = this.fragments[fragKey] = {
          body: frag,
          appendedPTS: null,
          loaded: null,
          buffered: false,
          range: Object.create(null)
        };
        if (frag.gap) {
          this.hasGaps = true;
        }
      }
      if (fragmentEntity) {
        fragmentEntity.loaded = null;
        fragmentEntity.buffered = true;
      }
    };
    _proto.getBufferedTimes = function getBufferedTimes(fragment, part, partial, timeRange) {
      var buffered = {
        time: [],
        partial: partial
      };
      var startPTS = fragment.start;
      var endPTS = fragment.end;
      var minEndPTS = fragment.minEndPTS || endPTS;
      var maxStartPTS = fragment.maxStartPTS || startPTS;
      for (var i = 0; i < timeRange.length; i++) {
        var startTime = timeRange.start(i) - this.bufferPadding;
        var endTime = timeRange.end(i) + this.bufferPadding;
        if (maxStartPTS >= startTime && minEndPTS <= endTime) {
          // Fragment is entirely contained in buffer
          // No need to check the other timeRange times since it's completely playable
          buffered.time.push({
            startPTS: Math.max(startPTS, timeRange.start(i)),
            endPTS: Math.min(endPTS, timeRange.end(i))
          });
          break;
        } else if (startPTS < endTime && endPTS > startTime) {
          var start = Math.max(startPTS, timeRange.start(i));
          var end = Math.min(endPTS, timeRange.end(i));
          if (end > start) {
            buffered.partial = true;
            // Check for intersection with buffer
            // Get playable sections of the fragment
            buffered.time.push({
              startPTS: start,
              endPTS: end
            });
          }
        } else if (endPTS <= startTime) {
          // No need to check the rest of the timeRange as it is in order
          break;
        }
      }
      return buffered;
    }

    /**
     * Gets the partial fragment for a certain time
     */;
    _proto.getPartialFragment = function getPartialFragment(time) {
      var bestFragment = null;
      var timePadding;
      var startTime;
      var endTime;
      var bestOverlap = 0;
      var bufferPadding = this.bufferPadding,
        fragments = this.fragments;
      Object.keys(fragments).forEach(function (key) {
        var fragmentEntity = fragments[key];
        if (!fragmentEntity) {
          return;
        }
        if (isPartial(fragmentEntity)) {
          startTime = fragmentEntity.body.start - bufferPadding;
          endTime = fragmentEntity.body.end + bufferPadding;
          if (time >= startTime && time <= endTime) {
            // Use the fragment that has the most padding from start and end time
            timePadding = Math.min(time - startTime, endTime - time);
            if (bestOverlap <= timePadding) {
              bestFragment = fragmentEntity.body;
              bestOverlap = timePadding;
            }
          }
        }
      });
      return bestFragment;
    };
    _proto.isEndListAppended = function isEndListAppended(type) {
      var lastFragmentEntity = this.endListFragments[type];
      return lastFragmentEntity !== undefined && (lastFragmentEntity.buffered || isPartial(lastFragmentEntity));
    };
    _proto.getState = function getState(fragment) {
      var fragKey = getFragmentKey(fragment);
      var fragmentEntity = this.fragments[fragKey];
      if (fragmentEntity) {
        if (!fragmentEntity.buffered) {
          return FragmentState.APPENDING;
        } else if (isPartial(fragmentEntity)) {
          return FragmentState.PARTIAL;
        } else {
          return FragmentState.OK;
        }
      }
      return FragmentState.NOT_LOADED;
    };
    _proto.isTimeBuffered = function isTimeBuffered(startPTS, endPTS, timeRange) {
      var startTime;
      var endTime;
      for (var i = 0; i < timeRange.length; i++) {
        startTime = timeRange.start(i) - this.bufferPadding;
        endTime = timeRange.end(i) + this.bufferPadding;
        if (startPTS >= startTime && endPTS <= endTime) {
          return true;
        }
        if (endPTS <= startTime) {
          // No need to check the rest of the timeRange as it is in order
          return false;
        }
      }
      return false;
    };
    _proto.onManifestLoading = function onManifestLoading() {
      this.removeAllFragments();
    };
    _proto.onFragLoaded = function onFragLoaded(event, data) {
      // don't track initsegment (for which sn is not a number)
      // don't track frags used for bitrateTest, they're irrelevant.
      if (data.frag.sn === 'initSegment' || data.frag.bitrateTest) {
        return;
      }
      var frag = data.frag;
      // Fragment entity `loaded` FragLoadedData is null when loading parts
      var loaded = data.part ? null : data;
      var fragKey = getFragmentKey(frag);
      this.fragments[fragKey] = {
        body: frag,
        appendedPTS: null,
        loaded: loaded,
        buffered: false,
        range: Object.create(null)
      };
    };
    _proto.onBufferAppended = function onBufferAppended(event, data) {
      var frag = data.frag,
        part = data.part,
        timeRanges = data.timeRanges,
        type = data.type;
      if (frag.sn === 'initSegment') {
        return;
      }
      var playlistType = frag.type;
      if (part) {
        var activeParts = this.activePartLists[playlistType];
        if (!activeParts) {
          this.activePartLists[playlistType] = activeParts = [];
        }
        activeParts.push(part);
      }
      // Store the latest timeRanges loaded in the buffer
      this.timeRanges = timeRanges;
      var timeRange = timeRanges[type];
      this.detectEvictedFragments(type, timeRange, playlistType, part);
    };
    _proto.onFragBuffered = function onFragBuffered(event, data) {
      this.detectPartialFragments(data);
    };
    _proto.hasFragment = function hasFragment(fragment) {
      var fragKey = getFragmentKey(fragment);
      return !!this.fragments[fragKey];
    };
    _proto.hasFragments = function hasFragments(type) {
      var fragments = this.fragments;
      var keys = Object.keys(fragments);
      if (!type) {
        return keys.length > 0;
      }
      for (var i = keys.length; i--;) {
        var fragmentEntity = fragments[keys[i]];
        if ((fragmentEntity == null ? void 0 : fragmentEntity.body.type) === type) {
          return true;
        }
      }
      return false;
    };
    _proto.hasParts = function hasParts(type) {
      var _this$activePartLists;
      return !!((_this$activePartLists = this.activePartLists[type]) != null && _this$activePartLists.length);
    };
    _proto.removeFragmentsInRange = function removeFragmentsInRange(start, end, playlistType, withGapOnly, unbufferedOnly) {
      var _this3 = this;
      if (withGapOnly && !this.hasGaps) {
        return;
      }
      Object.keys(this.fragments).forEach(function (key) {
        var fragmentEntity = _this3.fragments[key];
        if (!fragmentEntity) {
          return;
        }
        var frag = fragmentEntity.body;
        if (frag.type !== playlistType || withGapOnly && !frag.gap) {
          return;
        }
        if (frag.start < end && frag.end > start && (fragmentEntity.buffered || unbufferedOnly)) {
          _this3.removeFragment(frag);
        }
      });
    };
    _proto.removeFragment = function removeFragment(fragment) {
      var fragKey = getFragmentKey(fragment);
      fragment.clearElementaryStreamInfo();
      var activeParts = this.activePartLists[fragment.type];
      if (activeParts) {
        var snToRemove = fragment.sn;
        this.activePartLists[fragment.type] = filterParts(activeParts, function (part) {
          return part.fragment.sn !== snToRemove;
        });
      }
      delete this.fragments[fragKey];
      if (fragment.endList) {
        delete this.endListFragments[fragment.type];
      }
    };
    _proto.removeAllFragments = function removeAllFragments() {
      var _this$hls, _this$hls$latestLevel;
      this.fragments = Object.create(null);
      this.endListFragments = Object.create(null);
      this.activePartLists = Object.create(null);
      this.hasGaps = false;
      var partlist = (_this$hls = this.hls) == null ? void 0 : (_this$hls$latestLevel = _this$hls.latestLevelDetails) == null ? void 0 : _this$hls$latestLevel.partList;
      if (partlist) {
        partlist.forEach(function (part) {
          return part.clearElementaryStreamInfo();
        });
      }
    };
    return FragmentTracker;
  }();
  function isPartial(fragmentEntity) {
    var _fragmentEntity$range, _fragmentEntity$range2, _fragmentEntity$range3;
    return fragmentEntity.buffered && (fragmentEntity.body.gap || ((_fragmentEntity$range = fragmentEntity.range.video) == null ? void 0 : _fragmentEntity$range.partial) || ((_fragmentEntity$range2 = fragmentEntity.range.audio) == null ? void 0 : _fragmentEntity$range2.partial) || ((_fragmentEntity$range3 = fragmentEntity.range.audiovideo) == null ? void 0 : _fragmentEntity$range3.partial));
  }
  function getFragmentKey(fragment) {
    return fragment.type + "_" + fragment.level + "_" + fragment.sn;
  }
  function filterParts(partList, predicate) {
    return partList.filter(function (part) {
      var keep = predicate(part);
      if (!keep) {
        part.clearElementaryStreamInfo();
      }
      return keep;
    });
  }

  var DecrypterAesMode = {
    cbc: 0,
    ctr: 1
  };

  var AESCrypto = /*#__PURE__*/function () {
    function AESCrypto(subtle, iv, aesMode) {
      this.subtle = void 0;
      this.aesIV = void 0;
      this.aesMode = void 0;
      this.subtle = subtle;
      this.aesIV = iv;
      this.aesMode = aesMode;
    }
    var _proto = AESCrypto.prototype;
    _proto.decrypt = function decrypt(data, key) {
      switch (this.aesMode) {
        case DecrypterAesMode.cbc:
          return this.subtle.decrypt({
            name: 'AES-CBC',
            iv: this.aesIV
          }, key, data);
        case DecrypterAesMode.ctr:
          return this.subtle.decrypt({
            name: 'AES-CTR',
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          key, data);
        default:
          throw new Error("[AESCrypto] invalid aes mode " + this.aesMode);
      }
    };
    return AESCrypto;
  }();

  // PKCS7
  function removePadding(array) {
    var outputBytes = array.byteLength;
    var paddingBytes = outputBytes && new DataView(array.buffer).getUint8(outputBytes - 1);
    if (paddingBytes) {
      return array.slice(0, outputBytes - paddingBytes);
    }
    return array;
  }
  var AESDecryptor = /*#__PURE__*/function () {
    function AESDecryptor() {
      this.rcon = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
      this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
      this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
      this.sBox = new Uint32Array(256);
      this.invSBox = new Uint32Array(256);
      this.key = new Uint32Array(0);
      this.ksRows = 0;
      this.keySize = 0;
      this.keySchedule = void 0;
      this.invKeySchedule = void 0;
      this.initTable();
    }

    // Using view.getUint32() also swaps the byte order.
    var _proto = AESDecryptor.prototype;
    _proto.uint8ArrayToUint32Array_ = function uint8ArrayToUint32Array_(arrayBuffer) {
      var view = new DataView(arrayBuffer);
      var newArray = new Uint32Array(4);
      for (var i = 0; i < 4; i++) {
        newArray[i] = view.getUint32(i * 4);
      }
      return newArray;
    };
    _proto.initTable = function initTable() {
      var sBox = this.sBox;
      var invSBox = this.invSBox;
      var subMix = this.subMix;
      var subMix0 = subMix[0];
      var subMix1 = subMix[1];
      var subMix2 = subMix[2];
      var subMix3 = subMix[3];
      var invSubMix = this.invSubMix;
      var invSubMix0 = invSubMix[0];
      var invSubMix1 = invSubMix[1];
      var invSubMix2 = invSubMix[2];
      var invSubMix3 = invSubMix[3];
      var d = new Uint32Array(256);
      var x = 0;
      var xi = 0;
      var i = 0;
      for (i = 0; i < 256; i++) {
        if (i < 128) {
          d[i] = i << 1;
        } else {
          d[i] = i << 1 ^ 0x11b;
        }
      }
      for (i = 0; i < 256; i++) {
        var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
        sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
        sBox[x] = sx;
        invSBox[sx] = x;

        // Compute multiplication
        var x2 = d[x];
        var x4 = d[x2];
        var x8 = d[x4];

        // Compute sub/invSub bytes, mix columns tables
        var t = d[sx] * 0x101 ^ sx * 0x1010100;
        subMix0[x] = t << 24 | t >>> 8;
        subMix1[x] = t << 16 | t >>> 16;
        subMix2[x] = t << 8 | t >>> 24;
        subMix3[x] = t;

        // Compute inv sub bytes, inv mix columns tables
        t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
        invSubMix0[sx] = t << 24 | t >>> 8;
        invSubMix1[sx] = t << 16 | t >>> 16;
        invSubMix2[sx] = t << 8 | t >>> 24;
        invSubMix3[sx] = t;

        // Compute next counter
        if (!x) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
    };
    _proto.expandKey = function expandKey(keyBuffer) {
      // convert keyBuffer to Uint32Array
      var key = this.uint8ArrayToUint32Array_(keyBuffer);
      var sameKey = true;
      var offset = 0;
      while (offset < key.length && sameKey) {
        sameKey = key[offset] === this.key[offset];
        offset++;
      }
      if (sameKey) {
        return;
      }
      this.key = key;
      var keySize = this.keySize = key.length;
      if (keySize !== 4 && keySize !== 6 && keySize !== 8) {
        throw new Error('Invalid aes key size=' + keySize);
      }
      var ksRows = this.ksRows = (keySize + 6 + 1) * 4;
      var ksRow;
      var invKsRow;
      var keySchedule = this.keySchedule = new Uint32Array(ksRows);
      var invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows);
      var sbox = this.sBox;
      var rcon = this.rcon;
      var invSubMix = this.invSubMix;
      var invSubMix0 = invSubMix[0];
      var invSubMix1 = invSubMix[1];
      var invSubMix2 = invSubMix[2];
      var invSubMix3 = invSubMix[3];
      var prev;
      var t;
      for (ksRow = 0; ksRow < ksRows; ksRow++) {
        if (ksRow < keySize) {
          prev = keySchedule[ksRow] = key[ksRow];
          continue;
        }
        t = prev;
        if (ksRow % keySize === 0) {
          // Rot word
          t = t << 8 | t >>> 24;

          // Sub word
          t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff];

          // Mix Rcon
          t ^= rcon[ksRow / keySize | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          // Sub word
          t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 0xff] << 16 | sbox[t >>> 8 & 0xff] << 8 | sbox[t & 0xff];
        }
        keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0;
      }
      for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
        ksRow = ksRows - invKsRow;
        if (invKsRow & 3) {
          t = keySchedule[ksRow];
        } else {
          t = keySchedule[ksRow - 4];
        }
        if (invKsRow < 4 || ksRow <= 4) {
          invKeySchedule[invKsRow] = t;
        } else {
          invKeySchedule[invKsRow] = invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[t >>> 16 & 0xff]] ^ invSubMix2[sbox[t >>> 8 & 0xff]] ^ invSubMix3[sbox[t & 0xff]];
        }
        invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
      }
    }

    // Adding this as a method greatly improves performance.
    ;
    _proto.networkToHostOrderSwap = function networkToHostOrderSwap(word) {
      return word << 24 | (word & 0xff00) << 8 | (word & 0xff0000) >> 8 | word >>> 24;
    };
    _proto.decrypt = function decrypt(inputArrayBuffer, offset, aesIV) {
      var nRounds = this.keySize + 6;
      var invKeySchedule = this.invKeySchedule;
      var invSBOX = this.invSBox;
      var invSubMix = this.invSubMix;
      var invSubMix0 = invSubMix[0];
      var invSubMix1 = invSubMix[1];
      var invSubMix2 = invSubMix[2];
      var invSubMix3 = invSubMix[3];
      var initVector = this.uint8ArrayToUint32Array_(aesIV);
      var initVector0 = initVector[0];
      var initVector1 = initVector[1];
      var initVector2 = initVector[2];
      var initVector3 = initVector[3];
      var inputInt32 = new Int32Array(inputArrayBuffer);
      var outputInt32 = new Int32Array(inputInt32.length);
      var t0, t1, t2, t3;
      var s0, s1, s2, s3;
      var inputWords0, inputWords1, inputWords2, inputWords3;
      var ksRow, i;
      var swapWord = this.networkToHostOrderSwap;
      while (offset < inputInt32.length) {
        inputWords0 = swapWord(inputInt32[offset]);
        inputWords1 = swapWord(inputInt32[offset + 1]);
        inputWords2 = swapWord(inputInt32[offset + 2]);
        inputWords3 = swapWord(inputInt32[offset + 3]);
        s0 = inputWords0 ^ invKeySchedule[0];
        s1 = inputWords3 ^ invKeySchedule[1];
        s2 = inputWords2 ^ invKeySchedule[2];
        s3 = inputWords1 ^ invKeySchedule[3];
        ksRow = 4;

        // Iterate through the rounds of decryption
        for (i = 1; i < nRounds; i++) {
          t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[s1 >> 16 & 0xff] ^ invSubMix2[s2 >> 8 & 0xff] ^ invSubMix3[s3 & 0xff] ^ invKeySchedule[ksRow];
          t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[s2 >> 16 & 0xff] ^ invSubMix2[s3 >> 8 & 0xff] ^ invSubMix3[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
          t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[s3 >> 16 & 0xff] ^ invSubMix2[s0 >> 8 & 0xff] ^ invSubMix3[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
          t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[s0 >> 16 & 0xff] ^ invSubMix2[s1 >> 8 & 0xff] ^ invSubMix3[s2 & 0xff] ^ invKeySchedule[ksRow + 3];
          // Update state
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
          ksRow = ksRow + 4;
        }

        // Shift rows, sub bytes, add round key
        t0 = invSBOX[s0 >>> 24] << 24 ^ invSBOX[s1 >> 16 & 0xff] << 16 ^ invSBOX[s2 >> 8 & 0xff] << 8 ^ invSBOX[s3 & 0xff] ^ invKeySchedule[ksRow];
        t1 = invSBOX[s1 >>> 24] << 24 ^ invSBOX[s2 >> 16 & 0xff] << 16 ^ invSBOX[s3 >> 8 & 0xff] << 8 ^ invSBOX[s0 & 0xff] ^ invKeySchedule[ksRow + 1];
        t2 = invSBOX[s2 >>> 24] << 24 ^ invSBOX[s3 >> 16 & 0xff] << 16 ^ invSBOX[s0 >> 8 & 0xff] << 8 ^ invSBOX[s1 & 0xff] ^ invKeySchedule[ksRow + 2];
        t3 = invSBOX[s3 >>> 24] << 24 ^ invSBOX[s0 >> 16 & 0xff] << 16 ^ invSBOX[s1 >> 8 & 0xff] << 8 ^ invSBOX[s2 & 0xff] ^ invKeySchedule[ksRow + 3];

        // Write
        outputInt32[offset] = swapWord(t0 ^ initVector0);
        outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
        outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
        outputInt32[offset + 3] = swapWord(t1 ^ initVector3);

        // reset initVector to last 4 unsigned int
        initVector0 = inputWords0;
        initVector1 = inputWords1;
        initVector2 = inputWords2;
        initVector3 = inputWords3;
        offset = offset + 4;
      }
      return outputInt32.buffer;
    };
    return AESDecryptor;
  }();

  var FastAESKey = /*#__PURE__*/function () {
    function FastAESKey(subtle, key, aesMode) {
      this.subtle = void 0;
      this.key = void 0;
      this.aesMode = void 0;
      this.subtle = subtle;
      this.key = key;
      this.aesMode = aesMode;
    }
    var _proto = FastAESKey.prototype;
    _proto.expandKey = function expandKey() {
      var subtleAlgoName = getSubtleAlgoName(this.aesMode);
      return this.subtle.importKey('raw', this.key, {
        name: subtleAlgoName
      }, false, ['encrypt', 'decrypt']);
    };
    return FastAESKey;
  }();
  function getSubtleAlgoName(aesMode) {
    switch (aesMode) {
      case DecrypterAesMode.cbc:
        return 'AES-CBC';
      case DecrypterAesMode.ctr:
        return 'AES-CTR';
      default:
        throw new Error("[FastAESKey] invalid aes mode " + aesMode);
    }
  }

  var CHUNK_SIZE = 16; // 16 bytes, 128 bits
  var Decrypter = /*#__PURE__*/function () {
    function Decrypter(config, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$removePKCS7Paddi = _ref.removePKCS7Padding,
        removePKCS7Padding = _ref$removePKCS7Paddi === void 0 ? true : _ref$removePKCS7Paddi;
      this.logEnabled = true;
      this.removePKCS7Padding = void 0;
      this.subtle = null;
      this.softwareDecrypter = null;
      this.key = null;
      this.fastAesKey = null;
      this.remainderData = null;
      this.currentIV = null;
      this.currentResult = null;
      this.useSoftware = void 0;
      this.enableSoftwareAES = void 0;
      this.enableSoftwareAES = config.enableSoftwareAES;
      this.removePKCS7Padding = removePKCS7Padding;
      // built in decryptor expects PKCS7 padding
      if (removePKCS7Padding) {
        try {
          var browserCrypto = self.crypto;
          if (browserCrypto) {
            this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
          }
        } catch (e) {
          /* no-op */
        }
      }
      this.useSoftware = !this.subtle;
    }
    var _proto = Decrypter.prototype;
    _proto.destroy = function destroy() {
      this.subtle = null;
      this.softwareDecrypter = null;
      this.key = null;
      this.fastAesKey = null;
      this.remainderData = null;
      this.currentIV = null;
      this.currentResult = null;
    };
    _proto.isSync = function isSync() {
      return this.useSoftware;
    };
    _proto.flush = function flush() {
      var currentResult = this.currentResult,
        remainderData = this.remainderData;
      if (!currentResult || remainderData) {
        this.reset();
        return null;
      }
      var data = new Uint8Array(currentResult);
      this.reset();
      if (this.removePKCS7Padding) {
        return removePadding(data);
      }
      return data;
    };
    _proto.reset = function reset() {
      this.currentResult = null;
      this.currentIV = null;
      this.remainderData = null;
      if (this.softwareDecrypter) {
        this.softwareDecrypter = null;
      }
    };
    _proto.decrypt = function decrypt(data, key, iv, aesMode) {
      var _this = this;
      if (this.useSoftware) {
        return new Promise(function (resolve, reject) {
          var dataView = ArrayBuffer.isView(data) ? data : new Uint8Array(data);
          _this.softwareDecrypt(dataView, key, iv, aesMode);
          var decryptResult = _this.flush();
          if (decryptResult) {
            resolve(decryptResult.buffer);
          } else {
            reject(new Error('[softwareDecrypt] Failed to decrypt data'));
          }
        });
      }
      return this.webCryptoDecrypt(new Uint8Array(data), key, iv, aesMode);
    }

    // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
    // data is handled in the flush() call
    ;
    _proto.softwareDecrypt = function softwareDecrypt(data, key, iv, aesMode) {
      var currentIV = this.currentIV,
        currentResult = this.currentResult,
        remainderData = this.remainderData;
      if (aesMode !== DecrypterAesMode.cbc || key.byteLength !== 16) {
        logger.warn('SoftwareDecrypt: can only handle AES-128-CBC');
        return null;
      }
      this.logOnce('JS AES decrypt');
      // The output is staggered during progressive parsing - the current result is cached, and emitted on the next call
      // This is done in order to strip PKCS7 padding, which is found at the end of each segment. We only know we've reached
      // the end on flush(), but by that time we have already received all bytes for the segment.
      // Progressive decryption does not work with WebCrypto

      if (remainderData) {
        data = appendUint8Array(remainderData, data);
        this.remainderData = null;
      }

      // Byte length must be a multiple of 16 (AES-128 = 128 bit blocks = 16 bytes)
      var currentChunk = this.getValidChunk(data);
      if (!currentChunk.length) {
        return null;
      }
      if (currentIV) {
        iv = currentIV;
      }
      var softwareDecrypter = this.softwareDecrypter;
      if (!softwareDecrypter) {
        softwareDecrypter = this.softwareDecrypter = new AESDecryptor();
      }
      softwareDecrypter.expandKey(key);
      var result = currentResult;
      this.currentResult = softwareDecrypter.decrypt(currentChunk.buffer, 0, iv);
      this.currentIV = currentChunk.slice(-16).buffer;
      if (!result) {
        return null;
      }
      return result;
    };
    _proto.webCryptoDecrypt = function webCryptoDecrypt(data, key, iv, aesMode) {
      var _this2 = this;
      if (this.key !== key || !this.fastAesKey) {
        if (!this.subtle) {
          return Promise.resolve(this.onWebCryptoError(data, key, iv, aesMode));
        }
        this.key = key;
        this.fastAesKey = new FastAESKey(this.subtle, key, aesMode);
      }
      return this.fastAesKey.expandKey().then(function (aesKey) {
        // decrypt using web crypto
        if (!_this2.subtle) {
          return Promise.reject(new Error('web crypto not initialized'));
        }
        _this2.logOnce('WebCrypto AES decrypt');
        var crypto = new AESCrypto(_this2.subtle, new Uint8Array(iv), aesMode);
        return crypto.decrypt(data.buffer, aesKey);
      }).catch(function (err) {
        logger.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + err.name + ": " + err.message);
        return _this2.onWebCryptoError(data, key, iv, aesMode);
      });
    };
    _proto.onWebCryptoError = function onWebCryptoError(data, key, iv, aesMode) {
      var enableSoftwareAES = this.enableSoftwareAES;
      if (enableSoftwareAES) {
        this.useSoftware = true;
        this.logEnabled = true;
        this.softwareDecrypt(data, key, iv, aesMode);
        var decryptResult = this.flush();
        if (decryptResult) {
          return decryptResult.buffer;
        }
      }
      throw new Error('WebCrypto' + (enableSoftwareAES ? ' and softwareDecrypt' : '') + ': failed to decrypt data');
    };
    _proto.getValidChunk = function getValidChunk(data) {
      var currentChunk = data;
      var splitPoint = data.length - data.length % CHUNK_SIZE;
      if (splitPoint !== data.length) {
        currentChunk = data.slice(0, splitPoint);
        this.remainderData = data.slice(splitPoint);
      }
      return currentChunk;
    };
    _proto.logOnce = function logOnce(msg) {
      if (!this.logEnabled) {
        return;
      }
      logger.log("[decrypter]: " + msg);
      this.logEnabled = false;
    };
    return Decrypter;
  }();

  var MIN_CHUNK_SIZE = Math.pow(2, 17); // 128kb
  var FragmentLoader = /*#__PURE__*/function () {
    function FragmentLoader(config) {
      this.config = void 0;
      this.loader = null;
      this.partLoadTimeout = -1;
      this.config = config;
    }
    var _proto = FragmentLoader.prototype;
    _proto.destroy = function destroy() {
      if (this.loader) {
        this.loader.destroy();
        this.loader = null;
      }
    };
    _proto.abort = function abort() {
      if (this.loader) {
        // Abort the loader for current fragment. Only one may load at any given time
        this.loader.abort();
      }
    };
    _proto.load = function load(frag, onProgress) {
      var _this = this;
      var url = frag.url;
      if (!url) {
        return Promise.reject(new LoadError({
          type: ErrorTypes.NETWORK_ERROR,
          details: ErrorDetails.FRAG_LOAD_ERROR,
          fatal: false,
          frag: frag,
          error: new Error("Fragment does not have a " + (url ? 'part list' : 'url')),
          networkDetails: null
        }));
      }
      this.abort();
      var config = this.config;
      var FragmentILoader = config.fLoader;
      var DefaultILoader = config.loader;
      return new Promise(function (resolve, reject) {
        if (_this.loader) {
          _this.loader.destroy();
        }
        if (frag.gap) {
          if (frag.tagList.some(function (tags) {
            return tags[0] === 'GAP';
          })) {
            reject(createGapLoadError(frag));
            return;
          } else {
            // Reset temporary treatment as GAP tag
            frag.gap = false;
          }
        }
        var loader = _this.loader = FragmentILoader ? new FragmentILoader(config) : new DefaultILoader(config);
        var loaderContext = createLoaderContext(frag);
        frag.loader = loader;
        var loadPolicy = getLoaderConfigWithoutReties(config.fragLoadPolicy.default);
        var loaderConfig = {
          loadPolicy: loadPolicy,
          timeout: loadPolicy.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: frag.sn === 'initSegment' ? Infinity : MIN_CHUNK_SIZE
        };
        // Assign frag stats to the loader's stats reference
        frag.stats = loader.stats;
        var callbacks = {
          onSuccess: function onSuccess(response, stats, context, networkDetails) {
            _this.resetLoader(frag, loader);
            var payload = response.data;
            if (context.resetIV && frag.decryptdata) {
              frag.decryptdata.iv = new Uint8Array(payload.slice(0, 16));
              payload = payload.slice(16);
            }
            resolve({
              frag: frag,
              part: null,
              payload: payload,
              networkDetails: networkDetails
            });
          },
          onError: function onError(response, context, networkDetails, stats) {
            _this.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.FRAG_LOAD_ERROR,
              fatal: false,
              frag: frag,
              response: _objectSpread2({
                url: url,
                data: undefined
              }, response),
              error: new Error("HTTP Error " + response.code + " " + response.text),
              networkDetails: networkDetails,
              stats: stats
            }));
          },
          onAbort: function onAbort(stats, context, networkDetails) {
            _this.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.INTERNAL_ABORTED,
              fatal: false,
              frag: frag,
              error: new Error('Aborted'),
              networkDetails: networkDetails,
              stats: stats
            }));
          },
          onTimeout: function onTimeout(stats, context, networkDetails) {
            _this.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.FRAG_LOAD_TIMEOUT,
              fatal: false,
              frag: frag,
              error: new Error("Timeout after " + loaderConfig.timeout + "ms"),
              networkDetails: networkDetails,
              stats: stats
            }));
          }
        };
        if (onProgress) {
          callbacks.onProgress = function (stats, context, data, networkDetails) {
            return onProgress({
              frag: frag,
              part: null,
              payload: data,
              networkDetails: networkDetails
            });
          };
        }
        loader.load(loaderContext, loaderConfig, callbacks);
      });
    };
    _proto.loadPart = function loadPart(frag, part, onProgress) {
      var _this2 = this;
      this.abort();
      var config = this.config;
      var FragmentILoader = config.fLoader;
      var DefaultILoader = config.loader;
      return new Promise(function (resolve, reject) {
        if (_this2.loader) {
          _this2.loader.destroy();
        }
        if (frag.gap || part.gap) {
          reject(createGapLoadError(frag, part));
          return;
        }
        var loader = _this2.loader = FragmentILoader ? new FragmentILoader(config) : new DefaultILoader(config);
        var loaderContext = createLoaderContext(frag, part);
        frag.loader = loader;
        // Should we define another load policy for parts?
        var loadPolicy = getLoaderConfigWithoutReties(config.fragLoadPolicy.default);
        var loaderConfig = {
          loadPolicy: loadPolicy,
          timeout: loadPolicy.maxLoadTimeMs,
          maxRetry: 0,
          retryDelay: 0,
          maxRetryDelay: 0,
          highWaterMark: MIN_CHUNK_SIZE
        };
        // Assign part stats to the loader's stats reference
        part.stats = loader.stats;
        loader.load(loaderContext, loaderConfig, {
          onSuccess: function onSuccess(response, stats, context, networkDetails) {
            _this2.resetLoader(frag, loader);
            _this2.updateStatsFromPart(frag, part);
            var partLoadedData = {
              frag: frag,
              part: part,
              payload: response.data,
              networkDetails: networkDetails
            };
            onProgress(partLoadedData);
            resolve(partLoadedData);
          },
          onError: function onError(response, context, networkDetails, stats) {
            _this2.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.FRAG_LOAD_ERROR,
              fatal: false,
              frag: frag,
              part: part,
              response: _objectSpread2({
                url: loaderContext.url,
                data: undefined
              }, response),
              error: new Error("HTTP Error " + response.code + " " + response.text),
              networkDetails: networkDetails,
              stats: stats
            }));
          },
          onAbort: function onAbort(stats, context, networkDetails) {
            frag.stats.aborted = part.stats.aborted;
            _this2.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.INTERNAL_ABORTED,
              fatal: false,
              frag: frag,
              part: part,
              error: new Error('Aborted'),
              networkDetails: networkDetails,
              stats: stats
            }));
          },
          onTimeout: function onTimeout(stats, context, networkDetails) {
            _this2.resetLoader(frag, loader);
            reject(new LoadError({
              type: ErrorTypes.NETWORK_ERROR,
              details: ErrorDetails.FRAG_LOAD_TIMEOUT,
              fatal: false,
              frag: frag,
              part: part,
              error: new Error("Timeout after " + loaderConfig.timeout + "ms"),
              networkDetails: networkDetails,
              stats: stats
            }));
          }
        });
      });
    };
    _proto.updateStatsFromPart = function updateStatsFromPart(frag, part) {
      var fragStats = frag.stats;
      var partStats = part.stats;
      var partTotal = partStats.total;
      fragStats.loaded += partStats.loaded;
      if (partTotal) {
        var estTotalParts = Math.round(frag.duration / part.duration);
        var estLoadedParts = Math.min(Math.round(fragStats.loaded / partTotal), estTotalParts);
        var estRemainingParts = estTotalParts - estLoadedParts;
        var estRemainingBytes = estRemainingParts * Math.round(fragStats.loaded / estLoadedParts);
        fragStats.total = fragStats.loaded + estRemainingBytes;
      } else {
        fragStats.total = Math.max(fragStats.loaded, fragStats.total);
      }
      var fragLoading = fragStats.loading;
      var partLoading = partStats.loading;
      if (fragLoading.start) {
        // add to fragment loader latency
        fragLoading.first += partLoading.first - partLoading.start;
      } else {
        fragLoading.start = partLoading.start;
        fragLoading.first = partLoading.first;
      }
      fragLoading.end = partLoading.end;
    };
    _proto.resetLoader = function resetLoader(frag, loader) {
      frag.loader = null;
      if (this.loader === loader) {
        self.clearTimeout(this.partLoadTimeout);
        this.loader = null;
      }
      loader.destroy();
    };
    return FragmentLoader;
  }();
  function createLoaderContext(frag, part) {
    if (part === void 0) {
      part = null;
    }
    var segment = part || frag;
    var loaderContext = {
      frag: frag,
      part: part,
      responseType: 'arraybuffer',
      url: segment.url,
      headers: {},
      rangeStart: 0,
      rangeEnd: 0
    };
    var start = segment.byteRangeStartOffset;
    var end = segment.byteRangeEndOffset;
    if (isFiniteNumber(start) && isFiniteNumber(end)) {
      var _frag$decryptdata;
      var byteRangeStart = start;
      var byteRangeEnd = end;
      if (frag.sn === 'initSegment' && isMethodFullSegmentAesCbc((_frag$decryptdata = frag.decryptdata) == null ? void 0 : _frag$decryptdata.method)) {
        // MAP segment encrypted with method 'AES-128' or 'AES-256' (cbc), when served with HTTP Range,
        // has the unencrypted size specified in the range.
        // Ref: https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-08#section-6.3.6
        var fragmentLen = end - start;
        if (fragmentLen % 16) {
          byteRangeEnd = end + (16 - fragmentLen % 16);
        }
        if (start !== 0) {
          loaderContext.resetIV = true;
          byteRangeStart = start - 16;
        }
      }
      loaderContext.rangeStart = byteRangeStart;
      loaderContext.rangeEnd = byteRangeEnd;
    }
    return loaderContext;
  }
  function createGapLoadError(frag, part) {
    var error = new Error("GAP " + (frag.gap ? 'tag' : 'attribute') + " found");
    var errorData = {
      type: ErrorTypes.MEDIA_ERROR,
      details: ErrorDetails.FRAG_GAP,
      fatal: false,
      frag: frag,
      error: error,
      networkDetails: null
    };
    if (part) {
      errorData.part = part;
    }
    (part ? part : frag).stats.aborted = true;
    return new LoadError(errorData);
  }
  function isMethodFullSegmentAesCbc(method) {
    return method === 'AES-128' || method === 'AES-256';
  }
  var LoadError = /*#__PURE__*/function (_Error) {
    function LoadError(data) {
      var _this3;
      _this3 = _Error.call(this, data.error.message) || this;
      _this3.data = void 0;
      _this3.data = data;
      return _this3;
    }
    _inheritsLoose(LoadError, _Error);
    return LoadError;
  }(/*#__PURE__*/_wrapNativeSuper(Error));

  /**
   * @ignore
   * Sub-class specialization of EventHandler base class.
   *
   * TaskLoop allows to schedule a task function being called (optionnaly repeatedly) on the main loop,
   * scheduled asynchroneously, avoiding recursive calls in the same tick.
   *
   * The task itself is implemented in `doTick`. It can be requested and called for single execution
   * using the `tick` method.
   *
   * It will be assured that the task execution method (`tick`) only gets called once per main loop "tick",
   * no matter how often it gets requested for execution. Execution in further ticks will be scheduled accordingly.
   *
   * If further execution requests have already been scheduled on the next tick, it can be checked with `hasNextTick`,
   * and cancelled with `clearNextTick`.
   *
   * The task can be scheduled as an interval repeatedly with a period as parameter (see `setInterval`, `clearInterval`).
   *
   * Sub-classes need to implement the `doTick` method which will effectively have the task execution routine.
   *
   * Further explanations:
   *
   * The baseclass has a `tick` method that will schedule the doTick call. It may be called synchroneously
   * only for a stack-depth of one. On re-entrant calls, sub-sequent calls are scheduled for next main loop ticks.
   *
   * When the task execution (`tick` method) is called in re-entrant way this is detected and
   * we are limiting the task execution per call stack to exactly one, but scheduling/post-poning further
   * task processing on the next main loop iteration (also known as "next tick" in the Node/JS runtime lingo).
   */
  var TaskLoop = /*#__PURE__*/function (_Logger) {
    function TaskLoop(label, logger) {
      var _this;
      _this = _Logger.call(this, label, logger) || this;
      _this._boundTick = void 0;
      _this._tickTimer = null;
      _this._tickInterval = null;
      _this._tickCallCount = 0;
      _this._boundTick = _this.tick.bind(_this);
      return _this;
    }
    _inheritsLoose(TaskLoop, _Logger);
    var _proto = TaskLoop.prototype;
    _proto.destroy = function destroy() {
      this.onHandlerDestroying();
      this.onHandlerDestroyed();
    };
    _proto.onHandlerDestroying = function onHandlerDestroying() {
      // clear all timers before unregistering from event bus
      this.clearNextTick();
      this.clearInterval();
    };
    _proto.onHandlerDestroyed = function onHandlerDestroyed() {};
    _proto.hasInterval = function hasInterval() {
      return !!this._tickInterval;
    };
    _proto.hasNextTick = function hasNextTick() {
      return !!this._tickTimer;
    }

    /**
     * @param millis - Interval time (ms)
     * @eturns True when interval has been scheduled, false when already scheduled (no effect)
     */;
    _proto.setInterval = function setInterval(millis) {
      if (!this._tickInterval) {
        this._tickCallCount = 0;
        this._tickInterval = self.setInterval(this._boundTick, millis);
        return true;
      }
      return false;
    }

    /**
     * @returns True when interval was cleared, false when none was set (no effect)
     */;
    _proto.clearInterval = function clearInterval() {
      if (this._tickInterval) {
        self.clearInterval(this._tickInterval);
        this._tickInterval = null;
        return true;
      }
      return false;
    }

    /**
     * @returns True when timeout was cleared, false when none was set (no effect)
     */;
    _proto.clearNextTick = function clearNextTick() {
      if (this._tickTimer) {
        self.clearTimeout(this._tickTimer);
        this._tickTimer = null;
        return true;
      }
      return false;
    }

    /**
     * Will call the subclass doTick implementation in this main loop tick
     * or in the next one (via setTimeout(,0)) in case it has already been called
     * in this tick (in case this is a re-entrant call).
     */;
    _proto.tick = function tick() {
      this._tickCallCount++;
      if (this._tickCallCount === 1) {
        this.doTick();
        // re-entrant call to tick from previous doTick call stack
        // -> schedule a call on the next main loop iteration to process this task processing request
        if (this._tickCallCount > 1) {
          // make sure only one timer exists at any time at max
          this.tickImmediate();
        }
        this._tickCallCount = 0;
      }
    };
    _proto.tickImmediate = function tickImmediate() {
      this.clearNextTick();
      this._tickTimer = self.setTimeout(this._boundTick, 0);
    }

    /**
     * For subclass to implement task logic
     * @abstract
     */;
    _proto.doTick = function doTick() {};
    return TaskLoop;
  }(Logger);

  var ChunkMetadata = function ChunkMetadata(level, sn, id, size, part, partial) {
    if (size === void 0) {
      size = 0;
    }
    if (part === void 0) {
      part = -1;
    }
    if (partial === void 0) {
      partial = false;
    }
    this.level = void 0;
    this.sn = void 0;
    this.part = void 0;
    this.id = void 0;
    this.size = void 0;
    this.partial = void 0;
    this.transmuxing = getNewPerformanceTiming();
    this.buffering = {
      audio: getNewPerformanceTiming(),
      video: getNewPerformanceTiming(),
      audiovideo: getNewPerformanceTiming()
    };
    this.level = level;
    this.sn = sn;
    this.id = id;
    this.size = size;
    this.part = part;
    this.partial = partial;
  };
  function getNewPerformanceTiming() {
    return {
      start: 0,
      executeStart: 0,
      executeEnd: 0,
      end: 0
    };
  }

  /**
   * Provides methods dealing with buffer length retrieval for example.
   *
   * In general, a helper around HTML5 MediaElement TimeRanges gathered from `buffered` property.
   *
   * Also @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered
   */

  var noopBuffered = {
    length: 0,
    start: function start() {
      return 0;
    },
    end: function end() {
      return 0;
    }
  };
  var BufferHelper = /*#__PURE__*/function () {
    function BufferHelper() {}
    /**
     * Return true if `media`'s buffered include `position`
     */
    BufferHelper.isBuffered = function isBuffered(media, position) {
      if (media) {
        var buffered = BufferHelper.getBuffered(media);
        for (var i = buffered.length; i--;) {
          if (position >= buffered.start(i) && position <= buffered.end(i)) {
            return true;
          }
        }
      }
      return false;
    };
    BufferHelper.bufferedRanges = function bufferedRanges(media) {
      if (media) {
        var timeRanges = BufferHelper.getBuffered(media);
        return BufferHelper.timeRangesToArray(timeRanges);
      }
      return [];
    };
    BufferHelper.timeRangesToArray = function timeRangesToArray(timeRanges) {
      var buffered = [];
      for (var i = 0; i < timeRanges.length; i++) {
        buffered.push({
          start: timeRanges.start(i),
          end: timeRanges.end(i)
        });
      }
      return buffered;
    };
    BufferHelper.bufferInfo = function bufferInfo(media, pos, maxHoleDuration) {
      if (media) {
        var buffered = BufferHelper.bufferedRanges(media);
        if (buffered.length) {
          return BufferHelper.bufferedInfo(buffered, pos, maxHoleDuration);
        }
      }
      return {
        len: 0,
        start: pos,
        end: pos,
        bufferedIndex: -1
      };
    };
    BufferHelper.bufferedInfo = function bufferedInfo(buffered, pos, maxHoleDuration) {
      pos = Math.max(0, pos);
      // sort on buffer.start/smaller end (IE does not always return sorted buffered range)
      if (buffered.length > 1) {
        buffered.sort(function (a, b) {
          return a.start - b.start || b.end - a.end;
        });
      }
      var bufferedIndex = -1;
      var buffered2 = [];
      if (maxHoleDuration) {
        // there might be some small holes between buffer time range
        // consider that holes smaller than maxHoleDuration are irrelevant and build another
        // buffer time range representations that discards those holes
        for (var i = 0; i < buffered.length; i++) {
          if (pos >= buffered[i].start && pos <= buffered[i].end) {
            bufferedIndex = i;
          }
          var buf2len = buffered2.length;
          if (buf2len) {
            var buf2end = buffered2[buf2len - 1].end;
            // if small hole (value between 0 or maxHoleDuration ) or overlapping (negative)
            if (buffered[i].start - buf2end < maxHoleDuration) {
              // merge overlapping time ranges
              // update lastRange.end only if smaller than item.end
              // e.g.  [ 1, 15] with  [ 2,8] => [ 1,15] (no need to modify lastRange.end)
              // whereas [ 1, 8] with  [ 2,15] => [ 1,15] ( lastRange should switch from [1,8] to [1,15])
              if (buffered[i].end > buf2end) {
                buffered2[buf2len - 1].end = buffered[i].end;
              }
            } else {
              // big hole
              buffered2.push(buffered[i]);
            }
          } else {
            // first value
            buffered2.push(buffered[i]);
          }
        }
      } else {
        buffered2 = buffered;
      }
      var bufferLen = 0;
      var nextStart;

      // bufferStart and bufferEnd are buffer boundaries around current playback position (pos)
      var bufferStart = pos;
      var bufferEnd = pos;
      for (var _i = 0; _i < buffered2.length; _i++) {
        var start = buffered2[_i].start;
        var end = buffered2[_i].end;
        // logger.log('buf start/end:' + buffered.start(i) + '/' + buffered.end(i));
        if (bufferedIndex === -1 && pos >= start && pos <= end) {
          bufferedIndex = _i;
        }
        if (pos + maxHoleDuration >= start && pos < end) {
          // play position is inside this buffer TimeRange, retrieve end of buffer position and buffer length
          bufferStart = start;
          bufferEnd = end;
          bufferLen = bufferEnd - pos;
        } else if (pos + maxHoleDuration < start) {
          nextStart = start;
          break;
        }
      }
      return {
        len: bufferLen,
        start: bufferStart || 0,
        end: bufferEnd || 0,
        nextStart: nextStart,
        buffered: buffered,
        bufferedIndex: bufferedIndex
      };
    }

    /**
     * Safe method to get buffered property.
     * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
     */;
    BufferHelper.getBuffered = function getBuffered(media) {
      try {
        return media.buffered || noopBuffered;
      } catch (e) {
        logger.log('failed to get media.buffered', e);
        return noopBuffered;
      }
    };
    return BufferHelper;
  }();

  var VARIABLE_REPLACEMENT_REGEX = /\{\$([a-zA-Z0-9-_]+)\}/g;
  function hasVariableReferences(str) {
    return VARIABLE_REPLACEMENT_REGEX.test(str);
  }
  function substituteVariables(parsed, value) {
    if (parsed.variableList !== null || parsed.hasVariableRefs) {
      var variableList = parsed.variableList;
      return value.replace(VARIABLE_REPLACEMENT_REGEX, function (variableReference) {
        var variableName = variableReference.substring(2, variableReference.length - 1);
        var variableValue = variableList == null ? void 0 : variableList[variableName];
        if (variableValue === undefined) {
          parsed.playlistParsingError || (parsed.playlistParsingError = new Error("Missing preceding EXT-X-DEFINE tag for Variable Reference: \"" + variableName + "\""));
          return variableReference;
        }
        return variableValue;
      });
    }
    return value;
  }
  function addVariableDefinition(parsed, attr, parentUrl) {
    var variableList = parsed.variableList;
    if (!variableList) {
      parsed.variableList = variableList = {};
    }
    var NAME;
    var VALUE;
    if ('QUERYPARAM' in attr) {
      NAME = attr.QUERYPARAM;
      try {
        var searchParams = new self.URL(parentUrl).searchParams;
        if (searchParams.has(NAME)) {
          VALUE = searchParams.get(NAME);
        } else {
          throw new Error("\"" + NAME + "\" does not match any query parameter in URI: \"" + parentUrl + "\"");
        }
      } catch (error) {
        parsed.playlistParsingError || (parsed.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + error.message));
      }
    } else {
      NAME = attr.NAME;
      VALUE = attr.VALUE;
    }
    if (NAME in variableList) {
      parsed.playlistParsingError || (parsed.playlistParsingError = new Error("EXT-X-DEFINE duplicate Variable Name declarations: \"" + NAME + "\""));
    } else {
      variableList[NAME] = VALUE || '';
    }
  }
  function importVariableDefinition(parsed, attr, sourceVariableList) {
    var IMPORT = attr.IMPORT;
    if (sourceVariableList && IMPORT in sourceVariableList) {
      var variableList = parsed.variableList;
      if (!variableList) {
        parsed.variableList = variableList = {};
      }
      variableList[IMPORT] = sourceVariableList[IMPORT];
    } else {
      parsed.playlistParsingError || (parsed.playlistParsingError = new Error("EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: \"" + IMPORT + "\""));
    }
  }

  var DECIMAL_RESOLUTION_REGEX = /^(\d+)x(\d+)$/;
  var ATTR_LIST_REGEX = /(.+?)=(".*?"|.*?)(?:,|$)/g;

  // adapted from https://github.com/kanongil/node-m3u8parse/blob/master/attrlist.js
  var AttrList = /*#__PURE__*/function () {
    function AttrList(attrs, parsed) {
      if (typeof attrs === 'string') {
        attrs = AttrList.parseAttrList(attrs, parsed);
      }
      _extends(this, attrs);
    }
    var _proto = AttrList.prototype;
    _proto.decimalInteger = function decimalInteger(attrName) {
      var intValue = parseInt(this[attrName], 10);
      if (intValue > Number.MAX_SAFE_INTEGER) {
        return Infinity;
      }
      return intValue;
    };
    _proto.hexadecimalInteger = function hexadecimalInteger(attrName) {
      if (this[attrName]) {
        var stringValue = (this[attrName] || '0x').slice(2);
        stringValue = (stringValue.length & 1 ? '0' : '') + stringValue;
        var value = new Uint8Array(stringValue.length / 2);
        for (var i = 0; i < stringValue.length / 2; i++) {
          value[i] = parseInt(stringValue.slice(i * 2, i * 2 + 2), 16);
        }
        return value;
      }
      return null;
    };
    _proto.hexadecimalIntegerAsNumber = function hexadecimalIntegerAsNumber(attrName) {
      var intValue = parseInt(this[attrName], 16);
      if (intValue > Number.MAX_SAFE_INTEGER) {
        return Infinity;
      }
      return intValue;
    };
    _proto.decimalFloatingPoint = function decimalFloatingPoint(attrName) {
      return parseFloat(this[attrName]);
    };
    _proto.optionalFloat = function optionalFloat(attrName, defaultValue) {
      var value = this[attrName];
      return value ? parseFloat(value) : defaultValue;
    };
    _proto.enumeratedString = function enumeratedString(attrName) {
      return this[attrName];
    };
    _proto.enumeratedStringList = function enumeratedStringList(attrName, dict) {
      var attrValue = this[attrName];
      return (attrValue ? attrValue.split(/[ ,]+/) : []).reduce(function (result, identifier) {
        result[identifier.toLowerCase()] = true;
        return result;
      }, dict);
    };
    _proto.bool = function bool(attrName) {
      return this[attrName] === 'YES';
    };
    _proto.decimalResolution = function decimalResolution(attrName) {
      var res = DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
      if (res === null) {
        return undefined;
      }
      return {
        width: parseInt(res[1], 10),
        height: parseInt(res[2], 10)
      };
    };
    AttrList.parseAttrList = function parseAttrList(input, parsed) {
      var match;
      var attrs = {};
      var quote = '"';
      ATTR_LIST_REGEX.lastIndex = 0;
      while ((match = ATTR_LIST_REGEX.exec(input)) !== null) {
        var name = match[1].trim();
        var value = match[2];
        var quotedString = value.indexOf(quote) === 0 && value.lastIndexOf(quote) === value.length - 1;
        var hexadecimalSequence = false;
        if (quotedString) {
          value = value.slice(1, -1);
        } else {
          switch (name) {
            case 'IV':
            case 'SCTE35-CMD':
            case 'SCTE35-IN':
            case 'SCTE35-OUT':
              hexadecimalSequence = true;
          }
        }
        if (parsed && (quotedString || hexadecimalSequence)) {
          {
            value = substituteVariables(parsed, value);
          }
        } else if (!hexadecimalSequence && !quotedString) {
          switch (name) {
            case 'CLOSED-CAPTIONS':
              if (value === 'NONE') {
                break;
              }
            // falls through
            case 'ALLOWED-CPC':
            case 'CLASS':
            case 'ASSOC-LANGUAGE':
            case 'AUDIO':
            case 'BYTERANGE':
            case 'CHANNELS':
            case 'CHARACTERISTICS':
            case 'CODECS':
            case 'DATA-ID':
            case 'END-DATE':
            case 'GROUP-ID':
            case 'ID':
            case 'IMPORT':
            case 'INSTREAM-ID':
            case 'KEYFORMAT':
            case 'KEYFORMATVERSIONS':
            case 'LANGUAGE':
            case 'NAME':
            case 'PATHWAY-ID':
            case 'QUERYPARAM':
            case 'RECENTLY-REMOVED-DATERANGES':
            case 'SERVER-URI':
            case 'STABLE-RENDITION-ID':
            case 'STABLE-VARIANT-ID':
            case 'START-DATE':
            case 'SUBTITLES':
            case 'SUPPLEMENTAL-CODECS':
            case 'URI':
            case 'VALUE':
            case 'VIDEO':
            case 'X-ASSET-LIST':
            case 'X-ASSET-URI':
              // Since we are not checking tag:attribute combination, just warn rather than ignoring attribute
              logger.warn(input + ": attribute " + name + " is missing quotes");
            // continue;
          }
        }
        attrs[name] = value;
      }
      return attrs;
    };
    return _createClass(AttrList, [{
      key: "clientAttrs",
      get: function get() {
        return Object.keys(this).filter(function (attr) {
          return attr.substring(0, 2) === 'X-';
        });
      }
    }]);
  }();

  // Avoid exporting const enum so that these values can be inlined

  var CLASS_INTERSTITIAL = 'com.apple.hls.interstitial';
  function isDateRangeCueAttribute(attrName) {
    return attrName !== "ID" && attrName !== "CLASS" && attrName !== "CUE" && attrName !== "START-DATE" && attrName !== "DURATION" && attrName !== "END-DATE" && attrName !== "END-ON-NEXT";
  }
  function isSCTE35Attribute(attrName) {
    return attrName === "SCTE35-OUT" || attrName === "SCTE35-IN" || attrName === "SCTE35-CMD";
  }
  var DateRange = /*#__PURE__*/function () {
    function DateRange(dateRangeAttr, dateRangeWithSameId, tagCount) {
      var _dateRangeWithSameId$;
      if (tagCount === void 0) {
        tagCount = 0;
      }
      this.attr = void 0;
      this.tagAnchor = void 0;
      this.tagOrder = void 0;
      this._startDate = void 0;
      this._endDate = void 0;
      this._dateAtEnd = void 0;
      this._cue = void 0;
      this._badValueForSameId = void 0;
      this.tagAnchor = (dateRangeWithSameId == null ? void 0 : dateRangeWithSameId.tagAnchor) || null;
      this.tagOrder = (_dateRangeWithSameId$ = dateRangeWithSameId == null ? void 0 : dateRangeWithSameId.tagOrder) != null ? _dateRangeWithSameId$ : tagCount;
      if (dateRangeWithSameId) {
        var previousAttr = dateRangeWithSameId.attr;
        for (var key in previousAttr) {
          if (Object.prototype.hasOwnProperty.call(dateRangeAttr, key) && dateRangeAttr[key] !== previousAttr[key]) {
            logger.warn("DATERANGE tag attribute: \"" + key + "\" does not match for tags with ID: \"" + dateRangeAttr.ID + "\"");
            this._badValueForSameId = key;
            break;
          }
        }
        // Merge DateRange tags with the same ID
        dateRangeAttr = _extends(new AttrList({}), previousAttr, dateRangeAttr);
      }
      this.attr = dateRangeAttr;
      if (dateRangeWithSameId) {
        this._startDate = dateRangeWithSameId._startDate;
        this._cue = dateRangeWithSameId._cue;
        this._endDate = dateRangeWithSameId._endDate;
        this._dateAtEnd = dateRangeWithSameId._dateAtEnd;
      } else {
        this._startDate = new Date(dateRangeAttr["START-DATE"]);
      }
      if ("END-DATE" in this.attr) {
        var endDate = (dateRangeWithSameId == null ? void 0 : dateRangeWithSameId.endDate) || new Date(this.attr["END-DATE"]);
        if (isFiniteNumber(endDate.getTime())) {
          this._endDate = endDate;
        }
      }
    }
    return _createClass(DateRange, [{
      key: "id",
      get: function get() {
        return this.attr.ID;
      }
    }, {
      key: "class",
      get: function get() {
        return this.attr.CLASS;
      }
    }, {
      key: "cue",
      get: function get() {
        var _cue = this._cue;
        if (_cue === undefined) {
          return this._cue = this.attr.enumeratedStringList(this.attr.CUE ? 'CUE' : 'X-CUE', {
            pre: false,
            post: false,
            once: false
          });
        }
        return _cue;
      }
    }, {
      key: "startTime",
      get: function get() {
        var tagAnchor = this.tagAnchor;
        // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
        if (tagAnchor === null || tagAnchor.programDateTime === null) {
          logger.warn("Expected tagAnchor Fragment with PDT set for DateRange \"" + this.id + "\": " + tagAnchor);
          return NaN;
        }
        return tagAnchor.start + (this.startDate.getTime() - tagAnchor.programDateTime) / 1000;
      }
    }, {
      key: "startDate",
      get: function get() {
        return this._startDate;
      }
    }, {
      key: "endDate",
      get: function get() {
        var dateAtEnd = this._endDate || this._dateAtEnd;
        if (dateAtEnd) {
          return dateAtEnd;
        }
        var duration = this.duration;
        if (duration !== null) {
          return this._dateAtEnd = new Date(this._startDate.getTime() + duration * 1000);
        }
        return null;
      }
    }, {
      key: "duration",
      get: function get() {
        if ("DURATION" in this.attr) {
          var duration = this.attr.decimalFloatingPoint("DURATION");
          if (isFiniteNumber(duration)) {
            return duration;
          }
        } else if (this._endDate) {
          return (this._endDate.getTime() - this._startDate.getTime()) / 1000;
        }
        return null;
      }
    }, {
      key: "plannedDuration",
      get: function get() {
        if ("PLANNED-DURATION" in this.attr) {
          return this.attr.decimalFloatingPoint("PLANNED-DURATION");
        }
        return null;
      }
    }, {
      key: "endOnNext",
      get: function get() {
        return this.attr.bool("END-ON-NEXT");
      }
    }, {
      key: "isInterstitial",
      get: function get() {
        return this.class === CLASS_INTERSTITIAL;
      }
    }, {
      key: "isValid",
      get: function get() {
        return !!this.id && !this._badValueForSameId && isFiniteNumber(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || 'X-ASSET-URI' in this.attr || 'X-ASSET-LIST' in this.attr);
      }
    }]);
  }();

  var DEFAULT_TARGET_DURATION = 10;

  /**
   * Object representing parsed data from an HLS Media Playlist. Found in {@link hls.js#Level.details}.
   */
  var LevelDetails = /*#__PURE__*/function () {
    function LevelDetails(baseUrl) {
      this.PTSKnown = false;
      this.alignedSliding = false;
      this.averagetargetduration = void 0;
      this.endCC = 0;
      this.endSN = 0;
      this.fragments = void 0;
      this.fragmentHint = void 0;
      this.partList = null;
      this.dateRanges = void 0;
      this.dateRangeTagCount = 0;
      this.live = true;
      this.requestScheduled = -1;
      this.ageHeader = 0;
      this.advancedDateTime = void 0;
      this.updated = true;
      this.advanced = true;
      this.misses = 0;
      this.startCC = 0;
      this.startSN = 0;
      this.startTimeOffset = null;
      this.targetduration = 0;
      this.totalduration = 0;
      this.type = null;
      this.url = void 0;
      this.m3u8 = '';
      this.version = null;
      this.canBlockReload = false;
      this.canSkipUntil = 0;
      this.canSkipDateRanges = false;
      this.skippedSegments = 0;
      this.recentlyRemovedDateranges = void 0;
      this.partHoldBack = 0;
      this.holdBack = 0;
      this.partTarget = 0;
      this.preloadHint = void 0;
      this.renditionReports = void 0;
      this.tuneInGoal = 0;
      this.deltaUpdateFailed = void 0;
      this.driftStartTime = 0;
      this.driftEndTime = 0;
      this.driftStart = 0;
      this.driftEnd = 0;
      this.encryptedFragments = void 0;
      this.playlistParsingError = null;
      this.variableList = null;
      this.hasVariableRefs = false;
      this.appliedTimelineOffset = void 0;
      this.fragments = [];
      this.encryptedFragments = [];
      this.dateRanges = {};
      this.url = baseUrl;
    }
    var _proto = LevelDetails.prototype;
    _proto.reloaded = function reloaded(previous) {
      if (!previous) {
        this.advanced = true;
        this.updated = true;
        return;
      }
      var partSnDiff = this.lastPartSn - previous.lastPartSn;
      var partIndexDiff = this.lastPartIndex - previous.lastPartIndex;
      this.updated = this.endSN !== previous.endSN || !!partIndexDiff || !!partSnDiff || !this.live;
      this.advanced = this.endSN > previous.endSN || partSnDiff > 0 || partSnDiff === 0 && partIndexDiff > 0;
      if (this.updated || this.advanced) {
        this.misses = Math.floor(previous.misses * 0.6);
      } else {
        this.misses = previous.misses + 1;
      }
    };
    return _createClass(LevelDetails, [{
      key: "hasProgramDateTime",
      get: function get() {
        if (this.fragments.length) {
          return isFiniteNumber(this.fragments[this.fragments.length - 1].programDateTime);
        }
        return false;
      }
    }, {
      key: "levelTargetDuration",
      get: function get() {
        return this.averagetargetduration || this.targetduration || DEFAULT_TARGET_DURATION;
      }
    }, {
      key: "drift",
      get: function get() {
        var runTime = this.driftEndTime - this.driftStartTime;
        if (runTime > 0) {
          var runDuration = this.driftEnd - this.driftStart;
          return runDuration * 1000 / runTime;
        }
        return 1;
      }
    }, {
      key: "edge",
      get: function get() {
        return this.partEnd || this.fragmentEnd;
      }
    }, {
      key: "partEnd",
      get: function get() {
        var _this$partList;
        if ((_this$partList = this.partList) != null && _this$partList.length) {
          return this.partList[this.partList.length - 1].end;
        }
        return this.fragmentEnd;
      }
    }, {
      key: "fragmentEnd",
      get: function get() {
        var _this$fragments;
        if ((_this$fragments = this.fragments) != null && _this$fragments.length) {
          return this.fragments[this.fragments.length - 1].end;
        }
        return 0;
      }
    }, {
      key: "fragmentStart",
      get: function get() {
        var _this$fragments2;
        if ((_this$fragments2 = this.fragments) != null && _this$fragments2.length) {
          return this.fragments[0].start;
        }
        return 0;
      }
    }, {
      key: "age",
      get: function get() {
        if (this.advancedDateTime) {
          return Math.max(Date.now() - this.advancedDateTime, 0) / 1000;
        }
        return 0;
      }
    }, {
      key: "lastPartIndex",
      get: function get() {
        var _this$partList2;
        if ((_this$partList2 = this.partList) != null && _this$partList2.length) {
          return this.partList[this.partList.length - 1].index;
        }
        return -1;
      }
    }, {
      key: "maxPartIndex",
      get: function get() {
        var partList = this.partList;
        if (partList) {
          var lastIndex = this.lastPartIndex;
          if (lastIndex !== -1) {
            for (var i = partList.length; i--;) {
              if (partList[i].index > lastIndex) {
                return partList[i].index;
              }
            }
            return lastIndex;
          }
        }
        return 0;
      }
    }, {
      key: "lastPartSn",
      get: function get() {
        var _this$partList3;
        if ((_this$partList3 = this.partList) != null && _this$partList3.length) {
          return this.partList[this.partList.length - 1].fragment.sn;
        }
        return this.endSN;
      }
    }, {
      key: "expired",
      get: function get() {
        if (this.live && this.age && this.misses < 3) {
          var playlistWindowDuration = this.partEnd - this.fragmentStart;
          return this.age > Math.max(playlistWindowDuration, this.totalduration) + this.levelTargetDuration;
        }
        return false;
      }
    }]);
  }();

  function isFullSegmentEncryption(method) {
    return method === 'AES-128' || method === 'AES-256' || method === 'AES-256-CTR';
  }
  function getAesModeFromFullSegmentMethod(method) {
    switch (method) {
      case 'AES-128':
      case 'AES-256':
        return DecrypterAesMode.cbc;
      case 'AES-256-CTR':
        return DecrypterAesMode.ctr;
      default:
        throw new Error("invalid full segment method " + method);
    }
  }

  function base64Decode(base64encodedStr) {
    return Uint8Array.from(atob(base64encodedStr), function (c) {
      return c.charCodeAt(0);
    });
  }

  // breaking up those two types in order to clarify what is happening in the decoding path.

  // http://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript/22373197
  // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt
  /* utf.js - UTF-8 <=> UTF-16 convertion
   *
   * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
   * Version: 1.0
   * LastModified: Dec 25 1999
   * This library is free.  You can redistribute it and/or modify it.
   */

  function strToUtf8array(str) {
    return Uint8Array.from(unescape(encodeURIComponent(str)), function (c) {
      return c.charCodeAt(0);
    });
  }

  function getKeyIdBytes(str) {
    var keyIdbytes = strToUtf8array(str).subarray(0, 16);
    var paddedkeyIdbytes = new Uint8Array(16);
    paddedkeyIdbytes.set(keyIdbytes, 16 - keyIdbytes.length);
    return paddedkeyIdbytes;
  }
  function changeEndianness(keyId) {
    var swap = function swap(array, from, to) {
      var cur = array[from];
      array[from] = array[to];
      array[to] = cur;
    };
    swap(keyId, 0, 3);
    swap(keyId, 1, 2);
    swap(keyId, 4, 5);
    swap(keyId, 6, 7);
  }
  function convertDataUriToArrayBytes(uri) {
    // data:[<media type][;attribute=value][;base64],<data>
    var colonsplit = uri.split(':');
    var keydata = null;
    if (colonsplit[0] === 'data' && colonsplit.length === 2) {
      var semicolonsplit = colonsplit[1].split(';');
      var commasplit = semicolonsplit[semicolonsplit.length - 1].split(',');
      if (commasplit.length === 2) {
        var isbase64 = commasplit[0] === 'base64';
        var data = commasplit[1];
        if (isbase64) {
          semicolonsplit.splice(-1, 1); // remove from processing
          keydata = base64Decode(data);
        } else {
          keydata = getKeyIdBytes(data);
        }
      }
    }
    return keydata;
  }

  /** returns `undefined` is `self` is missing, e.g. in node */
  var optionalSelf = typeof self !== 'undefined' ? self : undefined;

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/requestMediaKeySystemAccess
   */
  var KeySystems = {
    CLEARKEY: "org.w3.clearkey",
    FAIRPLAY: "com.apple.fps",
    PLAYREADY: "com.microsoft.playready",
    WIDEVINE: "com.widevine.alpha"
  };

  // Playlist #EXT-X-KEY KEYFORMAT values
  var KeySystemFormats = {
    CLEARKEY: "org.w3.clearkey",
    FAIRPLAY: "com.apple.streamingkeydelivery",
    PLAYREADY: "com.microsoft.playready",
    WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
  };
  function keySystemFormatToKeySystemDomain(format) {
    switch (format) {
      case KeySystemFormats.FAIRPLAY:
        return KeySystems.FAIRPLAY;
      case KeySystemFormats.PLAYREADY:
        return KeySystems.PLAYREADY;
      case KeySystemFormats.WIDEVINE:
        return KeySystems.WIDEVINE;
      case KeySystemFormats.CLEARKEY:
        return KeySystems.CLEARKEY;
    }
  }

  // System IDs for which we can extract a key ID from "encrypted" event PSSH
  var KeySystemIds = {
    CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
    CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
    PLAYREADY: "9a04f07998404286ab92e65be0885f95",
    WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
  };
  function keySystemIdToKeySystemDomain(systemId) {
    if (systemId === KeySystemIds.WIDEVINE) {
      return KeySystems.WIDEVINE;
    } else if (systemId === KeySystemIds.PLAYREADY) {
      return KeySystems.PLAYREADY;
    } else if (systemId === KeySystemIds.CENC || systemId === KeySystemIds.CLEARKEY) {
      return KeySystems.CLEARKEY;
    }
  }
  function keySystemDomainToKeySystemFormat(keySystem) {
    switch (keySystem) {
      case KeySystems.FAIRPLAY:
        return KeySystemFormats.FAIRPLAY;
      case KeySystems.PLAYREADY:
        return KeySystemFormats.PLAYREADY;
      case KeySystems.WIDEVINE:
        return KeySystemFormats.WIDEVINE;
      case KeySystems.CLEARKEY:
        return KeySystemFormats.CLEARKEY;
    }
  }
  function getKeySystemsForConfig(config) {
    var drmSystems = config.drmSystems,
      widevineLicenseUrl = config.widevineLicenseUrl;
    var keySystemsToAttempt = drmSystems ? [KeySystems.FAIRPLAY, KeySystems.WIDEVINE, KeySystems.PLAYREADY, KeySystems.CLEARKEY].filter(function (keySystem) {
      return !!drmSystems[keySystem];
    }) : [];
    if (!keySystemsToAttempt[KeySystems.WIDEVINE] && widevineLicenseUrl) {
      keySystemsToAttempt.push(KeySystems.WIDEVINE);
    }
    return keySystemsToAttempt;
  }
  var requestMediaKeySystemAccess = function (_optionalSelf$navigat) {
    if (optionalSelf != null && (_optionalSelf$navigat = optionalSelf.navigator) != null && _optionalSelf$navigat.requestMediaKeySystemAccess) {
      return self.navigator.requestMediaKeySystemAccess.bind(self.navigator);
    } else {
      return null;
    }
  }();

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemConfiguration
   */
  function getSupportedMediaKeySystemConfigurations(keySystem, audioCodecs, videoCodecs, drmSystemOptions) {
    var initDataTypes;
    switch (keySystem) {
      case KeySystems.FAIRPLAY:
        initDataTypes = ['cenc', 'sinf'];
        break;
      case KeySystems.WIDEVINE:
      case KeySystems.PLAYREADY:
        initDataTypes = ['cenc'];
        break;
      case KeySystems.CLEARKEY:
        initDataTypes = ['cenc', 'keyids'];
        break;
      default:
        throw new Error("Unknown key-system: " + keySystem);
    }
    return createMediaKeySystemConfigurations(initDataTypes, audioCodecs, videoCodecs, drmSystemOptions);
  }
  function createMediaKeySystemConfigurations(initDataTypes, audioCodecs, videoCodecs, drmSystemOptions) {
    var baseConfig = {
      initDataTypes: initDataTypes,
      persistentState: drmSystemOptions.persistentState || 'optional',
      distinctiveIdentifier: drmSystemOptions.distinctiveIdentifier || 'optional',
      sessionTypes: drmSystemOptions.sessionTypes || [drmSystemOptions.sessionType || 'temporary'],
      audioCapabilities: audioCodecs.map(function (codec) {
        return {
          contentType: "audio/mp4; codecs=" + codec,
          robustness: drmSystemOptions.audioRobustness || '',
          encryptionScheme: drmSystemOptions.audioEncryptionScheme || null
        };
      }),
      videoCapabilities: videoCodecs.map(function (codec) {
        return {
          contentType: "video/mp4; codecs=" + codec,
          robustness: drmSystemOptions.videoRobustness || '',
          encryptionScheme: drmSystemOptions.videoEncryptionScheme || null
        };
      })
    };
    return [baseConfig];
  }
  function isPersistentSessionType(drmSystemOptions) {
    var _drmSystemOptions$ses;
    return drmSystemOptions.sessionType === 'persistent-license' || !!((_drmSystemOptions$ses = drmSystemOptions.sessionTypes) != null && _drmSystemOptions$ses.some(function (type) {
      return type === 'persistent-license';
    }));
  }
  function parsePlayReadyWRM(keyBytes) {
    var keyBytesUtf16 = new Uint16Array(keyBytes.buffer, keyBytes.byteOffset, keyBytes.byteLength / 2);
    var keyByteStr = String.fromCharCode.apply(null, Array.from(keyBytesUtf16));

    // Parse Playready WRMHeader XML
    var xmlKeyBytes = keyByteStr.substring(keyByteStr.indexOf('<'), keyByteStr.length);
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlKeyBytes, 'text/xml');
    var keyData = xmlDoc.getElementsByTagName('KID')[0];
    if (keyData) {
      var keyId = keyData.childNodes[0] ? keyData.childNodes[0].nodeValue : keyData.getAttribute('VALUE');
      if (keyId) {
        var keyIdArray = base64Decode(keyId).subarray(0, 16);
        // KID value in PRO is a base64-encoded little endian GUID interpretation of UUID
        // KID value in â€˜tencâ€™ is a big endian UUID GUID interpretation of UUID
        changeEndianness(keyIdArray);
        return keyIdArray;
      }
    }
    return null;
  }

  var keyUriToKeyIdMap = {};
  var LevelKey = /*#__PURE__*/function () {
    function LevelKey(method, uri, format, formatversions, iv) {
      if (formatversions === void 0) {
        formatversions = [1];
      }
      if (iv === void 0) {
        iv = null;
      }
      this.uri = void 0;
      this.method = void 0;
      this.keyFormat = void 0;
      this.keyFormatVersions = void 0;
      this.encrypted = void 0;
      this.isCommonEncryption = void 0;
      this.iv = null;
      this.key = null;
      this.keyId = null;
      this.pssh = null;
      this.method = method;
      this.uri = uri;
      this.keyFormat = format;
      this.keyFormatVersions = formatversions;
      this.iv = iv;
      this.encrypted = method ? method !== 'NONE' : false;
      this.isCommonEncryption = this.encrypted && !isFullSegmentEncryption(method);
    }
    LevelKey.clearKeyUriToKeyIdMap = function clearKeyUriToKeyIdMap() {
      keyUriToKeyIdMap = {};
    };
    var _proto = LevelKey.prototype;
    _proto.isSupported = function isSupported() {
      // If it's Segment encryption or No encryption, just select that key system
      if (this.method) {
        if (isFullSegmentEncryption(this.method) || this.method === 'NONE') {
          return true;
        }
        if (this.keyFormat === 'identity') {
          // Maintain support for clear SAMPLE-AES with MPEG-3 TS
          return this.method === 'SAMPLE-AES';
        } else {
          switch (this.keyFormat) {
            case KeySystemFormats.FAIRPLAY:
            case KeySystemFormats.WIDEVINE:
            case KeySystemFormats.PLAYREADY:
            case KeySystemFormats.CLEARKEY:
              return ['ISO-23001-7', 'SAMPLE-AES', 'SAMPLE-AES-CENC', 'SAMPLE-AES-CTR'].indexOf(this.method) !== -1;
          }
        }
      }
      return false;
    };
    _proto.getDecryptData = function getDecryptData(sn) {
      if (!this.encrypted || !this.uri) {
        return null;
      }
      if (isFullSegmentEncryption(this.method) && this.uri && !this.iv) {
        if (typeof sn !== 'number') {
          // We are fetching decryption data for a initialization segment
          // If the segment was encrypted with AES-128/256
          // It must have an IV defined. We cannot substitute the Segment Number in.
          logger.warn("missing IV for initialization segment with method=\"" + this.method + "\" - compliance issue");

          // Explicitly set sn to resulting value from implicit conversions 'initSegment' values for IV generation.
          sn = 0;
        }
        var iv = createInitializationVector(sn);
        var decryptdata = new LevelKey(this.method, this.uri, 'identity', this.keyFormatVersions, iv);
        return decryptdata;
      }

      // Initialize keyId if possible
      var keyBytes = convertDataUriToArrayBytes(this.uri);
      if (keyBytes) {
        switch (this.keyFormat) {
          case KeySystemFormats.WIDEVINE:
            // Setting `pssh` on this LevelKey/DecryptData allows HLS.js to generate a session using
            // the playlist-key before the "encrypted" event. (Comment out to only use "encrypted" path.)
            this.pssh = keyBytes;
            // In case of widevine keyID is embedded in PSSH box. Read Key ID.
            if (keyBytes.length >= 22) {
              this.keyId = keyBytes.subarray(keyBytes.length - 22, keyBytes.length - 6);
            }
            break;
          case KeySystemFormats.PLAYREADY:
            {
              var PlayReadyKeySystemUUID = new Uint8Array([0x9a, 0x04, 0xf0, 0x79, 0x98, 0x40, 0x42, 0x86, 0xab, 0x92, 0xe6, 0x5b, 0xe0, 0x88, 0x5f, 0x95]);

              // Setting `pssh` on this LevelKey/DecryptData allows HLS.js to generate a session using
              // the playlist-key before the "encrypted" event. (Comment out to only use "encrypted" path.)
              this.pssh = mp4pssh(PlayReadyKeySystemUUID, null, keyBytes);
              this.keyId = parsePlayReadyWRM(keyBytes);
              break;
            }
          default:
            {
              var keydata = keyBytes.subarray(0, 16);
              if (keydata.length !== 16) {
                var padded = new Uint8Array(16);
                padded.set(keydata, 16 - keydata.length);
                keydata = padded;
              }
              this.keyId = keydata;
              break;
            }
        }
      }

      // Default behavior: assign a new keyId for each uri
      if (!this.keyId || this.keyId.byteLength !== 16) {
        var keyId = keyUriToKeyIdMap[this.uri];
        if (!keyId) {
          var val = Object.keys(keyUriToKeyIdMap).length % Number.MAX_SAFE_INTEGER;
          keyId = new Uint8Array(16);
          var dv = new DataView(keyId.buffer, 12, 4); // Just set the last 4 bytes
          dv.setUint32(0, val);
          keyUriToKeyIdMap[this.uri] = keyId;
        }
        this.keyId = keyId;
      }
      return this;
    };
    return LevelKey;
  }();
  function createInitializationVector(segmentNumber) {
    var uint8View = new Uint8Array(16);
    for (var i = 12; i < 16; i++) {
      uint8View[i] = segmentNumber >> 8 * (15 - i) & 0xff;
    }
    return uint8View;
  }

  var MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g;
  var MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g;
  var IS_MEDIA_PLAYLIST = /^#EXT(?:INF|-X-TARGETDURATION):/m; // Handle empty Media Playlist (first EXTINF not signaled, but TARGETDURATION present)

  var LEVEL_PLAYLIST_REGEX_FAST = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#.*/.source // All other non-segment oriented tags will match with all groups empty
  ].join('|'), 'g');
  var LEVEL_PLAYLIST_REGEX_SLOW = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join('|'));
  var M3U8Parser = /*#__PURE__*/function () {
    function M3U8Parser() {}
    M3U8Parser.findGroup = function findGroup(groups, mediaGroupId) {
      for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        if (group.id === mediaGroupId) {
          return group;
        }
      }
    };
    M3U8Parser.resolve = function resolve(url, baseUrl) {
      return urlToolkitExports.buildAbsoluteURL(baseUrl, url, {
        alwaysNormalize: true
      });
    };
    M3U8Parser.isMediaPlaylist = function isMediaPlaylist(str) {
      return IS_MEDIA_PLAYLIST.test(str);
    };
    M3U8Parser.parseMasterPlaylist = function parseMasterPlaylist(string, baseurl) {
      var hasVariableRefs = hasVariableReferences(string) ;
      var parsed = {
        contentSteering: null,
        levels: [],
        playlistParsingError: null,
        sessionData: null,
        sessionKeys: null,
        startTimeOffset: null,
        variableList: null,
        hasVariableRefs: hasVariableRefs
      };
      var levelsWithKnownCodecs = [];
      MASTER_PLAYLIST_REGEX.lastIndex = 0;
      var result;
      while ((result = MASTER_PLAYLIST_REGEX.exec(string)) != null) {
        if (result[1]) {
          var _level$unknownCodecs;
          // '#EXT-X-STREAM-INF' is found, parse level tag  in group 1
          var attrs = new AttrList(result[1], parsed);
          var uri = substituteVariables(parsed, result[2]) ;
          var level = {
            attrs: attrs,
            bitrate: attrs.decimalInteger('BANDWIDTH') || attrs.decimalInteger('AVERAGE-BANDWIDTH'),
            name: attrs.NAME,
            url: M3U8Parser.resolve(uri, baseurl)
          };
          var resolution = attrs.decimalResolution('RESOLUTION');
          if (resolution) {
            level.width = resolution.width;
            level.height = resolution.height;
          }
          setCodecs(attrs.CODECS, level);
          var supplementalCodecs = attrs['SUPPLEMENTAL-CODECS'];
          if (supplementalCodecs) {
            level.supplemental = {};
            setCodecs(supplementalCodecs, level.supplemental);
          }
          if (!((_level$unknownCodecs = level.unknownCodecs) != null && _level$unknownCodecs.length)) {
            levelsWithKnownCodecs.push(level);
          }
          parsed.levels.push(level);
        } else if (result[3]) {
          var tag = result[3];
          var attributes = result[4];
          switch (tag) {
            case 'SESSION-DATA':
              {
                // #EXT-X-SESSION-DATA
                var sessionAttrs = new AttrList(attributes, parsed);
                var dataId = sessionAttrs['DATA-ID'];
                if (dataId) {
                  if (parsed.sessionData === null) {
                    parsed.sessionData = {};
                  }
                  parsed.sessionData[dataId] = sessionAttrs;
                }
                break;
              }
            case 'SESSION-KEY':
              {
                // #EXT-X-SESSION-KEY
                var sessionKey = parseKey(attributes, baseurl, parsed);
                if (sessionKey.encrypted && sessionKey.isSupported()) {
                  if (parsed.sessionKeys === null) {
                    parsed.sessionKeys = [];
                  }
                  parsed.sessionKeys.push(sessionKey);
                } else {
                  logger.warn("[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: \"" + attributes + "\"");
                }
                break;
              }
            case 'DEFINE':
              {
                // #EXT-X-DEFINE
                {
                  var variableAttributes = new AttrList(attributes, parsed);
                  addVariableDefinition(parsed, variableAttributes, baseurl);
                }
                break;
              }
            case 'CONTENT-STEERING':
              {
                // #EXT-X-CONTENT-STEERING
                var contentSteeringAttributes = new AttrList(attributes, parsed);
                parsed.contentSteering = {
                  uri: M3U8Parser.resolve(contentSteeringAttributes['SERVER-URI'], baseurl),
                  pathwayId: contentSteeringAttributes['PATHWAY-ID'] || '.'
                };
                break;
              }
            case 'START':
              {
                // #EXT-X-START
                parsed.startTimeOffset = parseStartTimeOffset(attributes);
                break;
              }
          }
        }
      }
      // Filter out levels with unknown codecs if it does not remove all levels
      var stripUnknownCodecLevels = levelsWithKnownCodecs.length > 0 && levelsWithKnownCodecs.length < parsed.levels.length;
      parsed.levels = stripUnknownCodecLevels ? levelsWithKnownCodecs : parsed.levels;
      if (parsed.levels.length === 0) {
        parsed.playlistParsingError = new Error('no levels found in manifest');
      }
      return parsed;
    };
    M3U8Parser.parseMasterPlaylistMedia = function parseMasterPlaylistMedia(string, baseurl, parsed) {
      var result;
      var results = {};
      var levels = parsed.levels;
      var groupsByType = {
        AUDIO: levels.map(function (level) {
          return {
            id: level.attrs.AUDIO,
            audioCodec: level.audioCodec
          };
        }),
        SUBTITLES: levels.map(function (level) {
          return {
            id: level.attrs.SUBTITLES,
            textCodec: level.textCodec
          };
        }),
        'CLOSED-CAPTIONS': []
      };
      var id = 0;
      MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0;
      while ((result = MASTER_PLAYLIST_MEDIA_REGEX.exec(string)) !== null) {
        var attrs = new AttrList(result[1], parsed);
        var type = attrs.TYPE;
        if (type) {
          var groups = groupsByType[type];
          var medias = results[type] || [];
          results[type] = medias;
          var lang = attrs.LANGUAGE;
          var assocLang = attrs['ASSOC-LANGUAGE'];
          var channels = attrs.CHANNELS;
          var characteristics = attrs.CHARACTERISTICS;
          var instreamId = attrs['INSTREAM-ID'];
          var media = {
            attrs: attrs,
            bitrate: 0,
            id: id++,
            groupId: attrs['GROUP-ID'] || '',
            name: attrs.NAME || lang || '',
            type: type,
            default: attrs.bool('DEFAULT'),
            autoselect: attrs.bool('AUTOSELECT'),
            forced: attrs.bool('FORCED'),
            lang: lang,
            url: attrs.URI ? M3U8Parser.resolve(attrs.URI, baseurl) : ''
          };
          if (assocLang) {
            media.assocLang = assocLang;
          }
          if (channels) {
            media.channels = channels;
          }
          if (characteristics) {
            media.characteristics = characteristics;
          }
          if (instreamId) {
            media.instreamId = instreamId;
          }
          if (groups != null && groups.length) {
            // If there are audio or text groups signalled in the manifest, let's look for a matching codec string for this track
            // If we don't find the track signalled, lets use the first audio groups codec we have
            // Acting as a best guess
            var groupCodec = M3U8Parser.findGroup(groups, media.groupId) || groups[0];
            assignCodec(media, groupCodec, 'audioCodec');
            assignCodec(media, groupCodec, 'textCodec');
          }
          medias.push(media);
        }
      }
      return results;
    };
    M3U8Parser.parseLevelPlaylist = function parseLevelPlaylist(string, baseurl, id, type, levelUrlId, multivariantVariableList) {
      var _LEVEL_PLAYLIST_REGEX;
      var base = {
        url: baseurl
      };
      var level = new LevelDetails(baseurl);
      var fragments = level.fragments;
      var programDateTimes = [];
      // The most recent init segment seen (applies to all subsequent segments)
      var currentInitSegment = null;
      var currentSN = 0;
      var currentPart = 0;
      var totalduration = 0;
      var discontinuityCounter = 0;
      var currentBitrate = 0;
      var prevFrag = null;
      var frag = new Fragment(type, base);
      var result;
      var i;
      var levelkeys;
      var firstPdtIndex = -1;
      var createNextFrag = false;
      var nextByteRange = null;
      var serverControlAttrs;
      LEVEL_PLAYLIST_REGEX_FAST.lastIndex = 0;
      level.m3u8 = string;
      level.hasVariableRefs = hasVariableReferences(string) ;
      if (((_LEVEL_PLAYLIST_REGEX = LEVEL_PLAYLIST_REGEX_FAST.exec(string)) == null ? void 0 : _LEVEL_PLAYLIST_REGEX[0]) !== '#EXTM3U') {
        level.playlistParsingError = new Error('Missing format identifier #EXTM3U');
        return level;
      }
      while ((result = LEVEL_PLAYLIST_REGEX_FAST.exec(string)) !== null) {
        if (createNextFrag) {
          createNextFrag = false;
          frag = new Fragment(type, base);
          // setup the next fragment for part loading
          frag.playlistOffset = totalduration;
          frag.start = totalduration;
          frag.sn = currentSN;
          frag.cc = discontinuityCounter;
          if (currentBitrate) {
            frag.bitrate = currentBitrate;
          }
          frag.level = id;
          if (currentInitSegment) {
            frag.initSegment = currentInitSegment;
            if (currentInitSegment.rawProgramDateTime) {
              frag.rawProgramDateTime = currentInitSegment.rawProgramDateTime;
              currentInitSegment.rawProgramDateTime = null;
            }
            if (nextByteRange) {
              frag.setByteRange(nextByteRange);
              nextByteRange = null;
            }
          }
        }
        var duration = result[1];
        if (duration) {
          // INF
          frag.duration = parseFloat(duration);
          // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
          var title = (' ' + result[2]).slice(1);
          frag.title = title || null;
          frag.tagList.push(title ? ['INF', duration, title] : ['INF', duration]);
        } else if (result[3]) {
          // url
          if (isFiniteNumber(frag.duration)) {
            frag.playlistOffset = totalduration;
            frag.start = totalduration;
            if (levelkeys) {
              setFragLevelKeys(frag, levelkeys, level);
            }
            frag.sn = currentSN;
            frag.level = id;
            frag.cc = discontinuityCounter;
            fragments.push(frag);
            // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
            var uri = (' ' + result[3]).slice(1);
            frag.relurl = substituteVariables(level, uri) ;
            assignProgramDateTime(frag, prevFrag, programDateTimes);
            prevFrag = frag;
            totalduration += frag.duration;
            currentSN++;
            currentPart = 0;
            createNextFrag = true;
          }
        } else {
          result = result[0].match(LEVEL_PLAYLIST_REGEX_SLOW);
          if (!result) {
            logger.warn('No matches on slow regex match for level playlist!');
            continue;
          }
          for (i = 1; i < result.length; i++) {
            if (result[i] !== undefined) {
              break;
            }
          }

          // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
          var tag = (' ' + result[i]).slice(1);
          var value1 = (' ' + result[i + 1]).slice(1);
          var value2 = result[i + 2] ? (' ' + result[i + 2]).slice(1) : null;
          switch (tag) {
            case 'BYTERANGE':
              if (prevFrag) {
                frag.setByteRange(value1, prevFrag);
              } else {
                frag.setByteRange(value1);
              }
              break;
            case 'PROGRAM-DATE-TIME':
              // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
              frag.rawProgramDateTime = value1;
              frag.tagList.push(['PROGRAM-DATE-TIME', value1]);
              if (firstPdtIndex === -1) {
                firstPdtIndex = fragments.length;
              }
              break;
            case 'PLAYLIST-TYPE':
              if (level.type) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              }
              level.type = value1.toUpperCase();
              break;
            case 'MEDIA-SEQUENCE':
              if (level.startSN !== 0) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              } else if (fragments.length > 0) {
                assignMustAppearBeforeSegmentsError(level, tag, result);
              }
              currentSN = level.startSN = parseInt(value1);
              break;
            case 'SKIP':
              {
                if (level.skippedSegments) {
                  assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
                }
                var skipAttrs = new AttrList(value1, level);
                var skippedSegments = skipAttrs.decimalInteger('SKIPPED-SEGMENTS');
                if (isFiniteNumber(skippedSegments)) {
                  level.skippedSegments += skippedSegments;
                  // This will result in fragments[] containing undefined values, which we will fill in with `mergeDetails`
                  for (var _i = skippedSegments; _i--;) {
                    fragments.push(null);
                  }
                  currentSN += skippedSegments;
                }
                var recentlyRemovedDateranges = skipAttrs.enumeratedString('RECENTLY-REMOVED-DATERANGES');
                if (recentlyRemovedDateranges) {
                  level.recentlyRemovedDateranges = (level.recentlyRemovedDateranges || []).concat(recentlyRemovedDateranges.split('\t'));
                }
                break;
              }
            case 'TARGETDURATION':
              if (level.targetduration !== 0) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              }
              level.targetduration = Math.max(parseInt(value1), 1);
              break;
            case 'VERSION':
              if (level.version !== null) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              }
              level.version = parseInt(value1);
              break;
            case 'INDEPENDENT-SEGMENTS':
              break;
            case 'ENDLIST':
              if (!level.live) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              }
              level.live = false;
              break;
            case '#':
              if (value1 || value2) {
                frag.tagList.push(value2 ? [value1, value2] : [value1]);
              }
              break;
            case 'DISCONTINUITY':
              discontinuityCounter++;
              frag.tagList.push(['DIS']);
              break;
            case 'GAP':
              frag.gap = true;
              frag.tagList.push([tag]);
              break;
            case 'BITRATE':
              frag.tagList.push([tag, value1]);
              currentBitrate = parseInt(value1) * 1000;
              if (isFiniteNumber(currentBitrate)) {
                frag.bitrate = currentBitrate;
              } else {
                currentBitrate = 0;
              }
              break;
            case 'DATERANGE':
              {
                var dateRangeAttr = new AttrList(value1, level);
                var dateRange = new DateRange(dateRangeAttr, level.dateRanges[dateRangeAttr.ID], level.dateRangeTagCount);
                level.dateRangeTagCount++;
                if (dateRange.isValid || level.skippedSegments) {
                  level.dateRanges[dateRange.id] = dateRange;
                } else {
                  logger.warn("Ignoring invalid DATERANGE tag: \"" + value1 + "\"");
                }
                // Add to fragment tag list for backwards compatibility (< v1.2.0)
                frag.tagList.push(['EXT-X-DATERANGE', value1]);
                break;
              }
            case 'DEFINE':
              {
                {
                  var variableAttributes = new AttrList(value1, level);
                  if ('IMPORT' in variableAttributes) {
                    importVariableDefinition(level, variableAttributes, multivariantVariableList);
                  } else {
                    addVariableDefinition(level, variableAttributes, baseurl);
                  }
                }
                break;
              }
            case 'DISCONTINUITY-SEQUENCE':
              if (level.startCC !== 0) {
                assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
              } else if (fragments.length > 0) {
                assignMustAppearBeforeSegmentsError(level, tag, result);
              }
              level.startCC = discontinuityCounter = parseInt(value1);
              break;
            case 'KEY':
              {
                var levelKey = parseKey(value1, baseurl, level);
                if (levelKey.isSupported()) {
                  if (levelKey.method === 'NONE') {
                    levelkeys = undefined;
                    break;
                  }
                  if (!levelkeys) {
                    levelkeys = {};
                  }
                  if (levelkeys[levelKey.keyFormat]) {
                    levelkeys = _extends({}, levelkeys);
                  }
                  levelkeys[levelKey.keyFormat] = levelKey;
                } else {
                  logger.warn("[Keys] Ignoring invalid EXT-X-KEY tag: \"" + value1 + "\"");
                }
                break;
              }
            case 'START':
              level.startTimeOffset = parseStartTimeOffset(value1);
              break;
            case 'MAP':
              {
                var mapAttrs = new AttrList(value1, level);
                if (frag.duration) {
                  // Initial segment tag is after segment duration tag.
                  //   #EXTINF: 6.0
                  //   #EXT-X-MAP:URI="init.mp4
                  var init = new Fragment(type, base);
                  setInitSegment(init, mapAttrs, id, levelkeys);
                  currentInitSegment = init;
                  frag.initSegment = currentInitSegment;
                  if (currentInitSegment.rawProgramDateTime && !frag.rawProgramDateTime) {
                    frag.rawProgramDateTime = currentInitSegment.rawProgramDateTime;
                  }
                } else {
                  // Initial segment tag is before segment duration tag
                  // Handle case where EXT-X-MAP is declared after EXT-X-BYTERANGE
                  var end = frag.byteRangeEndOffset;
                  if (end) {
                    var start = frag.byteRangeStartOffset;
                    nextByteRange = end - start + "@" + start;
                  } else {
                    nextByteRange = null;
                  }
                  setInitSegment(frag, mapAttrs, id, levelkeys);
                  currentInitSegment = frag;
                  createNextFrag = true;
                }
                currentInitSegment.cc = discontinuityCounter;
                break;
              }
            case 'SERVER-CONTROL':
              {
                if (serverControlAttrs) {
                  assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
                }
                serverControlAttrs = new AttrList(value1);
                level.canBlockReload = serverControlAttrs.bool('CAN-BLOCK-RELOAD');
                level.canSkipUntil = serverControlAttrs.optionalFloat('CAN-SKIP-UNTIL', 0);
                level.canSkipDateRanges = level.canSkipUntil > 0 && serverControlAttrs.bool('CAN-SKIP-DATERANGES');
                level.partHoldBack = serverControlAttrs.optionalFloat('PART-HOLD-BACK', 0);
                level.holdBack = serverControlAttrs.optionalFloat('HOLD-BACK', 0);
                break;
              }
            case 'PART-INF':
              {
                if (level.partTarget) {
                  assignMultipleMediaPlaylistTagOccuranceError(level, tag, result);
                }
                var partInfAttrs = new AttrList(value1);
                level.partTarget = partInfAttrs.decimalFloatingPoint('PART-TARGET');
                break;
              }
            case 'PART':
              {
                var partList = level.partList;
                if (!partList) {
                  partList = level.partList = [];
                }
                var previousFragmentPart = currentPart > 0 ? partList[partList.length - 1] : undefined;
                var index = currentPart++;
                var partAttrs = new AttrList(value1, level);
                var part = new Part(partAttrs, frag, base, index, previousFragmentPart);
                partList.push(part);
                frag.duration += part.duration;
                break;
              }
            case 'PRELOAD-HINT':
              {
                var preloadHintAttrs = new AttrList(value1, level);
                level.preloadHint = preloadHintAttrs;
                break;
              }
            case 'RENDITION-REPORT':
              {
                var renditionReportAttrs = new AttrList(value1, level);
                level.renditionReports = level.renditionReports || [];
                level.renditionReports.push(renditionReportAttrs);
                break;
              }
            default:
              logger.warn("line parsed but not handled: " + result);
              break;
          }
        }
      }
      if (prevFrag && !prevFrag.relurl) {
        fragments.pop();
        totalduration -= prevFrag.duration;
        if (level.partList) {
          level.fragmentHint = prevFrag;
        }
      } else if (level.partList) {
        assignProgramDateTime(frag, prevFrag, programDateTimes);
        frag.cc = discontinuityCounter;
        level.fragmentHint = frag;
        if (levelkeys) {
          setFragLevelKeys(frag, levelkeys, level);
        }
      }
      if (!level.targetduration) {
        level.playlistParsingError = new Error("#EXT-X-TARGETDURATION is required");
      }
      var fragmentLength = fragments.length;
      var firstFragment = fragments[0];
      var lastFragment = fragments[fragmentLength - 1];
      totalduration += level.skippedSegments * level.targetduration;
      if (totalduration > 0 && fragmentLength && lastFragment) {
        level.averagetargetduration = totalduration / fragmentLength;
        var lastSn = lastFragment.sn;
        level.endSN = lastSn !== 'initSegment' ? lastSn : 0;
        if (!level.live) {
          lastFragment.endList = true;
        }
        if (firstFragment && level.startCC === undefined) {
          level.startCC = firstFragment.cc;
        }
        /**
         * Backfill any missing PDT values
         * "If the first EXT-X-PROGRAM-DATE-TIME tag in a Playlist appears after
         * one or more Media Segment URIs, the client SHOULD extrapolate
         * backward from that tag (using EXTINF durations and/or media
         * timestamps) to associate dates with those segments."
         * We have already extrapolated forward, but all fragments up to the first instance of PDT do not have their PDTs
         * computed.
         */
        if (firstPdtIndex > 0) {
          backfillProgramDateTimes(fragments, firstPdtIndex);
          if (firstFragment) {
            programDateTimes.unshift(firstFragment);
          }
        }
      } else {
        level.endSN = 0;
        level.startCC = 0;
      }
      if (level.fragmentHint) {
        totalduration += level.fragmentHint.duration;
      }
      level.totalduration = totalduration;
      if (programDateTimes.length && level.dateRangeTagCount && firstFragment) {
        mapDateRanges(programDateTimes, level);
      }
      level.endCC = discontinuityCounter;
      return level;
    };
    return M3U8Parser;
  }();
  function mapDateRanges(programDateTimes, details) {
    // Make sure DateRanges are mapped to a ProgramDateTime tag that applies a date to a segment that overlaps with its start date
    var programDateTimeCount = programDateTimes.length;
    var lastProgramDateTime = programDateTimes[programDateTimeCount - 1];
    var playlistEnd = details.live ? Infinity : details.totalduration;
    var dateRangeIds = Object.keys(details.dateRanges);
    for (var i = dateRangeIds.length; i--;) {
      var dateRange = details.dateRanges[dateRangeIds[i]];
      var startDateTime = dateRange.startDate.getTime();
      dateRange.tagAnchor = lastProgramDateTime.ref;
      for (var j = programDateTimeCount; j--;) {
        var fragIndex = findFragmentWithStartDate(details, startDateTime, programDateTimes, j, playlistEnd);
        if (fragIndex !== -1) {
          dateRange.tagAnchor = details.fragments[fragIndex].ref;
          break;
        }
      }
    }
  }
  function findFragmentWithStartDate(details, startDateTime, programDateTimes, index, endTime) {
    var pdtFragment = programDateTimes[index];
    if (pdtFragment) {
      // find matching range between PDT tags
      var pdtStart = pdtFragment.programDateTime;
      if (startDateTime >= pdtStart || index === 0) {
        var _programDateTimes;
        var durationBetweenPdt = (((_programDateTimes = programDateTimes[index + 1]) == null ? void 0 : _programDateTimes.start) || endTime) - pdtFragment.start;
        if (startDateTime <= pdtStart + durationBetweenPdt * 1000) {
          // map to fragment with date-time range
          var startIndex = programDateTimes[index].sn - details.startSN;
          var fragments = details.fragments;
          if (fragments.length > programDateTimes.length) {
            var endSegment = programDateTimes[index + 1] || fragments[fragments.length - 1];
            var endIndex = endSegment.sn - details.startSN;
            for (var i = endIndex; i > startIndex; i--) {
              var fragStartDateTime = fragments[i].programDateTime;
              if (startDateTime >= fragStartDateTime && startDateTime < fragStartDateTime + fragments[i].duration * 1000) {
                return i;
              }
            }
          }
          return startIndex;
        }
      }
    }
    return -1;
  }
  function parseKey(keyTagAttributes, baseurl, parsed) {
    var _keyAttrs$METHOD, _keyAttrs$KEYFORMAT;
    // https://tools.ietf.org/html/rfc8216#section-4.3.2.4
    var keyAttrs = new AttrList(keyTagAttributes, parsed);
    var decryptmethod = (_keyAttrs$METHOD = keyAttrs.METHOD) != null ? _keyAttrs$METHOD : '';
    var decrypturi = keyAttrs.URI;
    var decryptiv = keyAttrs.hexadecimalInteger('IV');
    var decryptkeyformatversions = keyAttrs.KEYFORMATVERSIONS;
    // From RFC: This attribute is OPTIONAL; its absence indicates an implicit value of "identity".
    var decryptkeyformat = (_keyAttrs$KEYFORMAT = keyAttrs.KEYFORMAT) != null ? _keyAttrs$KEYFORMAT : 'identity';
    if (decrypturi && keyAttrs.IV && !decryptiv) {
      logger.error("Invalid IV: " + keyAttrs.IV);
    }
    // If decrypturi is a URI with a scheme, then baseurl will be ignored
    // No uri is allowed when METHOD is NONE
    var resolvedUri = decrypturi ? M3U8Parser.resolve(decrypturi, baseurl) : '';
    var keyFormatVersions = (decryptkeyformatversions ? decryptkeyformatversions : '1').split('/').map(Number).filter(Number.isFinite);
    return new LevelKey(decryptmethod, resolvedUri, decryptkeyformat, keyFormatVersions, decryptiv);
  }
  function parseStartTimeOffset(startAttributes) {
    var startAttrs = new AttrList(startAttributes);
    var startTimeOffset = startAttrs.decimalFloatingPoint('TIME-OFFSET');
    if (isFiniteNumber(startTimeOffset)) {
      return startTimeOffset;
    }
    return null;
  }
  function setCodecs(codecsAttributeValue, level) {
    var codecs = (codecsAttributeValue || '').split(/[ ,]+/).filter(function (c) {
      return c;
    });
    ['video', 'audio', 'text'].forEach(function (type) {
      var filtered = codecs.filter(function (codec) {
        return isCodecType(codec, type);
      });
      if (filtered.length) {
        // Comma separated list of all codecs for type
        level[type + "Codec"] = filtered.map(function (c) {
          return c.split('/')[0];
        }).join(',');
        // Remove known codecs so that only unknownCodecs are left after iterating through each type
        codecs = codecs.filter(function (codec) {
          return filtered.indexOf(codec) === -1;
        });
      }
    });
    level.unknownCodecs = codecs;
  }
  function assignCodec(media, groupItem, codecProperty) {
    var codecValue = groupItem[codecProperty];
    if (codecValue) {
      media[codecProperty] = codecValue;
    }
  }
  function backfillProgramDateTimes(fragments, firstPdtIndex) {
    var fragPrev = fragments[firstPdtIndex];
    for (var i = firstPdtIndex; i--;) {
      var frag = fragments[i];
      // Exit on delta-playlist skipped segments
      if (!frag) {
        return;
      }
      frag.programDateTime = fragPrev.programDateTime - frag.duration * 1000;
      fragPrev = frag;
    }
  }
  function assignProgramDateTime(frag, prevFrag, programDateTimes) {
    if (frag.rawProgramDateTime) {
      programDateTimes.push(frag);
    } else if (prevFrag != null && prevFrag.programDateTime) {
      frag.programDateTime = prevFrag.endProgramDateTime;
    }
  }
  function setInitSegment(frag, mapAttrs, id, levelkeys) {
    frag.relurl = mapAttrs.URI;
    if (mapAttrs.BYTERANGE) {
      frag.setByteRange(mapAttrs.BYTERANGE);
    }
    frag.level = id;
    frag.sn = 'initSegment';
    if (levelkeys) {
      frag.levelkeys = levelkeys;
    }
    frag.initSegment = null;
  }
  function setFragLevelKeys(frag, levelkeys, level) {
    frag.levelkeys = levelkeys;
    var encryptedFragments = level.encryptedFragments;
    if ((!encryptedFragments.length || encryptedFragments[encryptedFragments.length - 1].levelkeys !== levelkeys) && Object.keys(levelkeys).some(function (format) {
      return levelkeys[format].isCommonEncryption;
    })) {
      encryptedFragments.push(frag);
    }
  }
  function assignMultipleMediaPlaylistTagOccuranceError(level, tag, result) {
    level.playlistParsingError = new Error("#EXT-X-" + tag + " must not appear more than once (" + result[0] + ")");
  }
  function assignMustAppearBeforeSegmentsError(level, tag, result) {
    level.playlistParsingError = new Error("#EXT-X-" + tag + " must appear before the first Media Segment (" + result[0] + ")");
  }

  function updateFromToPTS(fragFrom, fragTo) {
    var fragToPTS = fragTo.startPTS;
    // if we know startPTS[toIdx]
    if (isFiniteNumber(fragToPTS)) {
      // update fragment duration.
      // it helps to fix drifts between playlist reported duration and fragment real duration
      var duration = 0;
      var frag;
      if (fragTo.sn > fragFrom.sn) {
        duration = fragToPTS - fragFrom.start;
        frag = fragFrom;
      } else {
        duration = fragFrom.start - fragToPTS;
        frag = fragTo;
      }
      if (frag.duration !== duration) {
        frag.setDuration(duration);
      }
      // we dont know startPTS[toIdx]
    } else if (fragTo.sn > fragFrom.sn) {
      var contiguous = fragFrom.cc === fragTo.cc;
      // TODO: With part-loading end/durations we need to confirm the whole fragment is loaded before using (or setting) minEndPTS
      if (contiguous && fragFrom.minEndPTS) {
        fragTo.setStart(fragFrom.start + (fragFrom.minEndPTS - fragFrom.start));
      } else {
        fragTo.setStart(fragFrom.start + fragFrom.duration);
      }
    } else {
      fragTo.setStart(Math.max(fragFrom.start - fragTo.duration, 0));
    }
  }
  function updateFragPTSDTS(details, frag, startPTS, endPTS, startDTS, endDTS) {
    var parsedMediaDuration = endPTS - startPTS;
    if (parsedMediaDuration <= 0) {
      logger.warn('Fragment should have a positive duration', frag);
      endPTS = startPTS + frag.duration;
      endDTS = startDTS + frag.duration;
    }
    var maxStartPTS = startPTS;
    var minEndPTS = endPTS;
    var fragStartPts = frag.startPTS;
    var fragEndPts = frag.endPTS;
    if (isFiniteNumber(fragStartPts)) {
      // delta PTS between audio and video
      var deltaPTS = Math.abs(fragStartPts - startPTS);
      if (!isFiniteNumber(frag.deltaPTS)) {
        frag.deltaPTS = deltaPTS;
      } else {
        frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS);
      }
      maxStartPTS = Math.max(startPTS, fragStartPts);
      startPTS = Math.min(startPTS, fragStartPts);
      startDTS = Math.min(startDTS, frag.startDTS);
      minEndPTS = Math.min(endPTS, fragEndPts);
      endPTS = Math.max(endPTS, fragEndPts);
      endDTS = Math.max(endDTS, frag.endDTS);
    }
    var drift = startPTS - frag.start;
    if (frag.start !== 0) {
      frag.setStart(startPTS);
    }
    frag.setDuration(endPTS - frag.start);
    frag.startPTS = startPTS;
    frag.maxStartPTS = maxStartPTS;
    frag.startDTS = startDTS;
    frag.endPTS = endPTS;
    frag.minEndPTS = minEndPTS;
    frag.endDTS = endDTS;
    var sn = frag.sn;
    // exit if sn out of range
    if (!details || sn < details.startSN || sn > details.endSN) {
      return 0;
    }
    var i;
    var fragIdx = sn - details.startSN;
    var fragments = details.fragments;
    // update frag reference in fragments array
    // rationale is that fragments array might not contain this frag object.
    // this will happen if playlist has been refreshed between frag loading and call to updateFragPTSDTS()
    // if we don't update frag, we won't be able to propagate PTS info on the playlist
    // resulting in invalid sliding computation
    fragments[fragIdx] = frag;
    // adjust fragment PTS/duration from seqnum-1 to frag 0
    for (i = fragIdx; i > 0; i--) {
      updateFromToPTS(fragments[i], fragments[i - 1]);
    }

    // adjust fragment PTS/duration from seqnum to last frag
    for (i = fragIdx; i < fragments.length - 1; i++) {
      updateFromToPTS(fragments[i], fragments[i + 1]);
    }
    if (details.fragmentHint) {
      updateFromToPTS(fragments[fragments.length - 1], details.fragmentHint);
    }
    details.PTSKnown = details.alignedSliding = true;
    return drift;
  }
  function mergeDetails(oldDetails, newDetails) {
    if (oldDetails === newDetails) {
      return;
    }
    // Track the last initSegment processed. Initialize it to the last one on the timeline.
    var currentInitSegment = null;
    var oldFragments = oldDetails.fragments;
    for (var i = oldFragments.length - 1; i >= 0; i--) {
      var oldInit = oldFragments[i].initSegment;
      if (oldInit) {
        currentInitSegment = oldInit;
        break;
      }
    }
    if (oldDetails.fragmentHint) {
      // prevent PTS and duration from being adjusted on the next hint
      delete oldDetails.fragmentHint.endPTS;
    }
    // check if old/new playlists have fragments in common
    // loop through overlapping SN and update startPTS, cc, and duration if any found
    var PTSFrag;
    mapFragmentIntersection(oldDetails, newDetails, function (oldFrag, newFrag, newFragIndex, newFragments) {
      if (!newDetails.startCC && newFrag.cc !== oldFrag.cc) {
        var _getFragmentWithSN$cc, _getFragmentWithSN;
        var ccOffset = oldFrag.cc - newFrag.cc;
        for (var _i = newFragIndex; _i < newFragments.length; _i++) {
          newFragments[_i].cc += ccOffset;
        }
        newDetails.startCC = (_getFragmentWithSN$cc = (_getFragmentWithSN = getFragmentWithSN(oldDetails, newDetails.startSN - 1)) == null ? void 0 : _getFragmentWithSN.cc) != null ? _getFragmentWithSN$cc : newFragments[0].cc;
        newDetails.endCC = newFragments[newFragments.length - 1].cc;
      }
      if (isFiniteNumber(oldFrag.startPTS) && isFiniteNumber(oldFrag.endPTS)) {
        newFrag.setStart(newFrag.startPTS = oldFrag.startPTS);
        newFrag.startDTS = oldFrag.startDTS;
        newFrag.maxStartPTS = oldFrag.maxStartPTS;
        newFrag.endPTS = oldFrag.endPTS;
        newFrag.endDTS = oldFrag.endDTS;
        newFrag.minEndPTS = oldFrag.minEndPTS;
        newFrag.setDuration(oldFrag.endPTS - oldFrag.startPTS);
        if (newFrag.duration) {
          PTSFrag = newFrag;
        }

        // PTS is known when any segment has startPTS and endPTS
        newDetails.PTSKnown = newDetails.alignedSliding = true;
      }
      if (oldFrag.hasStreams) {
        newFrag.elementaryStreams = oldFrag.elementaryStreams;
      }
      newFrag.loader = oldFrag.loader;
      if (oldFrag.hasStats) {
        newFrag.stats = oldFrag.stats;
      }
      if (oldFrag.initSegment) {
        newFrag.initSegment = oldFrag.initSegment;
        currentInitSegment = oldFrag.initSegment;
      }
    });
    var newFragments = newDetails.fragments;
    var fragmentsToCheck = newDetails.fragmentHint ? newFragments.concat(newDetails.fragmentHint) : newFragments;
    if (currentInitSegment) {
      fragmentsToCheck.forEach(function (frag) {
        var _currentInitSegment;
        if (frag && (!frag.initSegment || frag.initSegment.relurl === ((_currentInitSegment = currentInitSegment) == null ? void 0 : _currentInitSegment.relurl))) {
          frag.initSegment = currentInitSegment;
        }
      });
    }
    if (newDetails.skippedSegments) {
      newDetails.deltaUpdateFailed = newFragments.some(function (frag) {
        return !frag;
      });
      if (newDetails.deltaUpdateFailed) {
        logger.warn('[level-helper] Previous playlist missing segments skipped in delta playlist');
        for (var _i2 = newDetails.skippedSegments; _i2--;) {
          newFragments.shift();
        }
        newDetails.startSN = newFragments[0].sn;
      } else {
        newDetails.endCC = newFragments[newFragments.length - 1].cc;
        if (newDetails.canSkipDateRanges) {
          newDetails.dateRanges = mergeDateRanges(oldDetails.dateRanges, newDetails);
        }
        var programDateTimes = oldDetails.fragments.filter(function (frag) {
          return frag.rawProgramDateTime;
        });
        if (oldDetails.hasProgramDateTime && !newDetails.hasProgramDateTime) {
          for (var _i3 = 1; _i3 < fragmentsToCheck.length; _i3++) {
            if (fragmentsToCheck[_i3].programDateTime === null) {
              assignProgramDateTime(fragmentsToCheck[_i3], fragmentsToCheck[_i3 - 1], programDateTimes);
            }
          }
        }
        mapDateRanges(programDateTimes, newDetails);
      }
    }

    // Merge parts
    mapPartIntersection(oldDetails.partList, newDetails.partList, function (oldPart, newPart) {
      newPart.elementaryStreams = oldPart.elementaryStreams;
      newPart.stats = oldPart.stats;
    });

    // if at least one fragment contains PTS info, recompute PTS information for all fragments
    if (PTSFrag) {
      updateFragPTSDTS(newDetails, PTSFrag, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS);
    } else {
      // ensure that delta is within oldFragments range
      // also adjust sliding in case delta is 0 (we could have old=[50-60] and new=old=[50-61])
      // in that case we also need to adjust start offset of all fragments
      adjustSliding(oldDetails, newDetails);
    }
    if (newFragments.length) {
      newDetails.totalduration = newDetails.edge - newFragments[0].start;
    }
    newDetails.driftStartTime = oldDetails.driftStartTime;
    newDetails.driftStart = oldDetails.driftStart;
    var advancedDateTime = newDetails.advancedDateTime;
    if (newDetails.advanced && advancedDateTime) {
      var edge = newDetails.edge;
      if (!newDetails.driftStart) {
        newDetails.driftStartTime = advancedDateTime;
        newDetails.driftStart = edge;
      }
      newDetails.driftEndTime = advancedDateTime;
      newDetails.driftEnd = edge;
    } else {
      newDetails.driftEndTime = oldDetails.driftEndTime;
      newDetails.driftEnd = oldDetails.driftEnd;
      newDetails.advancedDateTime = oldDetails.advancedDateTime;
    }
    if (newDetails.requestScheduled === -1) {
      newDetails.requestScheduled = oldDetails.requestScheduled;
    }
  }
  function mergeDateRanges(oldDateRanges, newDetails) {
    var deltaDateRanges = newDetails.dateRanges,
      recentlyRemovedDateranges = newDetails.recentlyRemovedDateranges;
    var dateRanges = _extends({}, oldDateRanges);
    if (recentlyRemovedDateranges) {
      recentlyRemovedDateranges.forEach(function (id) {
        delete dateRanges[id];
      });
    }
    var mergeIds = Object.keys(dateRanges);
    var mergeCount = mergeIds.length;
    if (mergeCount) {
      Object.keys(deltaDateRanges).forEach(function (id) {
        var mergedDateRange = dateRanges[id];
        var dateRange = new DateRange(deltaDateRanges[id].attr, mergedDateRange);
        if (dateRange.isValid) {
          dateRanges[id] = dateRange;
          if (!mergedDateRange) {
            dateRange.tagOrder += mergeCount;
          }
        } else {
          logger.warn("Ignoring invalid Playlist Delta Update DATERANGE tag: \"" + stringify(deltaDateRanges[id].attr) + "\"");
        }
      });
    }
    return dateRanges;
  }
  function mapPartIntersection(oldParts, newParts, intersectionFn) {
    if (oldParts && newParts) {
      var delta = 0;
      for (var i = 0, len = oldParts.length; i <= len; i++) {
        var _oldPart = oldParts[i];
        var _newPart = newParts[i + delta];
        if (_oldPart && _newPart && _oldPart.index === _newPart.index && _oldPart.fragment.sn === _newPart.fragment.sn) {
          intersectionFn(_oldPart, _newPart);
        } else {
          delta--;
        }
      }
    }
  }
  function mapFragmentIntersection(oldDetails, newDetails, intersectionFn) {
    var skippedSegments = newDetails.skippedSegments;
    var start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN;
    var end = (oldDetails.fragmentHint ? 1 : 0) + (skippedSegments ? newDetails.endSN : Math.min(oldDetails.endSN, newDetails.endSN)) - newDetails.startSN;
    var delta = newDetails.startSN - oldDetails.startSN;
    var newFrags = newDetails.fragmentHint ? newDetails.fragments.concat(newDetails.fragmentHint) : newDetails.fragments;
    var oldFrags = oldDetails.fragmentHint ? oldDetails.fragments.concat(oldDetails.fragmentHint) : oldDetails.fragments;
    for (var i = start; i <= end; i++) {
      var _oldFrag = oldFrags[delta + i];
      var _newFrag = newFrags[i];
      if (skippedSegments && !_newFrag && _oldFrag) {
        // Fill in skipped segments in delta playlist
        _newFrag = newDetails.fragments[i] = _oldFrag;
      }
      if (_oldFrag && _newFrag) {
        intersectionFn(_oldFrag, _newFrag, i, newFrags);
        if (_oldFrag.url && _oldFrag.url !== _newFrag.url) {
          newDetails.playlistParsingError = getSequenceError("media sequence mismatch " + _newFrag.sn + ":", oldDetails, newDetails, _oldFrag, _newFrag);
          return;
        } else if (_oldFrag.cc !== _newFrag.cc) {
          newDetails.playlistParsingError = getSequenceError("discontinuity sequence mismatch (" + _oldFrag.cc + "!=" + _newFrag.cc + ")", oldDetails, newDetails, _oldFrag, _newFrag);
          return;
        }
      }
    }
  }
  function getSequenceError(message, oldDetails, newDetails, oldFrag, newFrag) {
    return new Error(message + " " + newFrag.url + "\nPlaylist starting @" + oldDetails.startSN + "\n" + oldDetails.m3u8 + "\n\nPlaylist starting @" + newDetails.startSN + "\n" + newDetails.m3u8);
  }
  function adjustSliding(oldDetails, newDetails, matchingStableVariantOrRendition) {
    if (matchingStableVariantOrRendition === void 0) {
      matchingStableVariantOrRendition = true;
    }
    var delta = newDetails.startSN + newDetails.skippedSegments - oldDetails.startSN;
    var oldFragments = oldDetails.fragments;
    var advancedOrStable = delta >= 0;
    var sliding = 0;
    if (advancedOrStable && delta < oldFragments.length) {
      sliding = oldFragments[delta].start;
    } else if (advancedOrStable && newDetails.startSN === oldDetails.endSN + 1) {
      sliding = oldDetails.fragmentEnd;
    } else if (advancedOrStable && matchingStableVariantOrRendition) {
      // align with expected position (updated playlist start sequence is past end sequence of last update)
      sliding = oldDetails.fragmentStart + delta * newDetails.levelTargetDuration;
    } else if (!newDetails.skippedSegments && newDetails.fragmentStart === 0) {
      // align new start with old (playlist switch has a sequence with no overlap and should not be used for alignment)
      sliding = oldDetails.fragmentStart;
    } else {
      // new details already has a sliding offset or has skipped segments
      return;
    }
    addSliding(newDetails, sliding);
  }
  function addSliding(details, sliding) {
    if (sliding) {
      var fragments = details.fragments;
      for (var i = details.skippedSegments; i < fragments.length; i++) {
        fragments[i].addStart(sliding);
      }
      if (details.fragmentHint) {
        details.fragmentHint.addStart(sliding);
      }
    }
  }
  function computeReloadInterval(newDetails, distanceToLiveEdgeMs) {
    if (distanceToLiveEdgeMs === void 0) {
      distanceToLiveEdgeMs = Infinity;
    }
    var reloadInterval = 1000 * newDetails.targetduration;
    if (newDetails.updated) {
      // Use last segment duration when shorter than target duration and near live edge
      var fragments = newDetails.fragments;
      var liveEdgeMaxTargetDurations = 4;
      if (fragments.length && reloadInterval * liveEdgeMaxTargetDurations > distanceToLiveEdgeMs) {
        var lastSegmentDuration = fragments[fragments.length - 1].duration * 1000;
        if (lastSegmentDuration < reloadInterval) {
          reloadInterval = lastSegmentDuration;
        }
      }
    } else {
      // estimate = 'miss half average';
      // follow HLS Spec, If the client reloads a Playlist file and finds that it has not
      // changed then it MUST wait for a period of one-half the target
      // duration before retrying.
      reloadInterval /= 2;
    }
    return Math.round(reloadInterval);
  }
  function getFragmentWithSN(details, sn, fragCurrent) {
    if (!details) {
      return null;
    }
    var fragment = details.fragments[sn - details.startSN];
    if (fragment) {
      return fragment;
    }
    fragment = details.fragmentHint;
    if (fragment && fragment.sn === sn) {
      return fragment;
    }
    if (sn < details.startSN && fragCurrent && fragCurrent.sn === sn) {
      return fragCurrent;
    }
    return null;
  }
  function getPartWith(details, sn, partIndex) {
    if (!details) {
      return null;
    }
    return findPart(details.partList, sn, partIndex);
  }
  function findPart(partList, sn, partIndex) {
    if (partList) {
      for (var i = partList.length; i--;) {
        var part = partList[i];
        if (part.index === partIndex && part.fragment.sn === sn) {
          return part;
        }
      }
    }
    return null;
  }
  function reassignFragmentLevelIndexes(levels) {
    levels.forEach(function (level, index) {
      var _level$details;
      (_level$details = level.details) == null ? void 0 : _level$details.fragments.forEach(function (fragment) {
        fragment.level = index;
        if (fragment.initSegment) {
          fragment.initSegment.level = index;
        }
      });
    });
  }

  function findFirstFragWithCC(fragments, cc) {
    for (var i = 0, len = fragments.length; i < len; i++) {
      var _fragments$i;
      if (((_fragments$i = fragments[i]) == null ? void 0 : _fragments$i.cc) === cc) {
        return fragments[i];
      }
    }
    return null;
  }
  function shouldAlignOnDiscontinuities(refDetails, details) {
    if (refDetails) {
      if (details.startCC < refDetails.endCC && details.endCC > refDetails.startCC) {
        return true;
      }
    }
    return false;
  }
  function adjustFragmentStart(frag, sliding) {
    if (frag) {
      var start = frag.start + sliding;
      frag.start = frag.startPTS = start;
      frag.endPTS = start + frag.duration;
    }
  }
  function adjustSlidingStart(sliding, details) {
    // Update segments
    var fragments = details.fragments;
    for (var i = 0, len = fragments.length; i < len; i++) {
      adjustFragmentStart(fragments[i], sliding);
    }
    // Update LL-HLS parts at the end of the playlist
    if (details.fragmentHint) {
      adjustFragmentStart(details.fragmentHint, sliding);
    }
    details.alignedSliding = true;
  }

  /**
   * Using the parameters of the last level, this function computes PTS' of the new fragments so that they form a
   * contiguous stream with the last fragments.
   * The PTS of a fragment lets Hls.js know where it fits into a stream - by knowing every PTS, we know which fragment to
   * download at any given time. PTS is normally computed when the fragment is demuxed, so taking this step saves us time
   * and an extra download.
   * @param lastLevel
   * @param details
   */
  function alignStream(switchDetails, details) {
    if (!switchDetails) {
      return;
    }
    alignDiscontinuities(details, switchDetails);
    if (!details.alignedSliding && switchDetails) {
      // If the PTS wasn't figured out via discontinuity sequence that means there was no CC increase within the level.
      // Aligning via Program Date Time should therefore be reliable, since PDT should be the same within the same
      // discontinuity sequence.
      alignMediaPlaylistByPDT(details, switchDetails);
    }
    if (!details.alignedSliding && switchDetails && !details.skippedSegments) {
      // Try to align on sn so that we pick a better start fragment.
      // Do not perform this on playlists with delta updates as this is only to align levels on switch
      // and adjustSliding only adjusts fragments after skippedSegments.
      adjustSliding(switchDetails, details, false);
    }
  }

  /**
   * Ajust the start of fragments in `details` by the difference in time between fragments of the latest
   * shared discontinuity sequence change.
   * @param lastLevel - The details of the last loaded level
   * @param details - The details of the new level
   */
  function alignDiscontinuities(details, refDetails) {
    if (!shouldAlignOnDiscontinuities(refDetails, details)) {
      return;
    }
    var targetCC = Math.min(refDetails.endCC, details.endCC);
    var refFrag = findFirstFragWithCC(refDetails.fragments, targetCC);
    var frag = findFirstFragWithCC(details.fragments, targetCC);
    if (!refFrag || !frag) {
      return;
    }
    logger.log("Aligning playlist at start of dicontinuity sequence " + targetCC);
    var delta = refFrag.start - frag.start;
    adjustSlidingStart(delta, details);
  }

  /**
   * Ensures appropriate time-alignment between renditions based on PDT.
   * This function assumes the timelines represented in `refDetails` are accurate, including the PDTs
   * for the last discontinuity sequence number shared by both playlists when present,
   * and uses the "wallclock"/PDT timeline as a cross-reference to `details`, adjusting the presentation
   * times/timelines of `details` accordingly.
   * Given the asynchronous nature of fetches and initial loads of live `main` and audio/subtitle tracks,
   * the primary purpose of this function is to ensure the "local timelines" of audio/subtitle tracks
   * are aligned to the main/video timeline, using PDT as the cross-reference/"anchor" that should
   * be consistent across playlists, per the HLS spec.
   * @param details - The details of the rendition you'd like to time-align (e.g. an audio rendition).
   * @param refDetails - The details of the reference rendition with start and PDT times for alignment.
   */
  function alignMediaPlaylistByPDT(details, refDetails) {
    if (!details.hasProgramDateTime || !refDetails.hasProgramDateTime) {
      return;
    }
    var fragments = details.fragments;
    var refFragments = refDetails.fragments;
    if (!fragments.length || !refFragments.length) {
      return;
    }

    // Calculate a delta to apply to all fragments according to the delta in PDT times and start times
    // of a fragment in the reference details, and a fragment in the target details of the same discontinuity.
    // If a fragment of the same discontinuity was not found use the middle fragment of both.
    var refFrag;
    var frag;
    var targetCC = Math.min(refDetails.endCC, details.endCC);
    if (refDetails.startCC < targetCC && details.startCC < targetCC) {
      refFrag = findFirstFragWithCC(refFragments, targetCC);
      frag = findFirstFragWithCC(fragments, targetCC);
    }
    if (!refFrag || !frag) {
      refFrag = refFragments[Math.floor(refFragments.length / 2)];
      frag = findFirstFragWithCC(fragments, refFrag.cc) || fragments[Math.floor(fragments.length / 2)];
    }
    var refPDT = refFrag.programDateTime;
    var targetPDT = frag.programDateTime;
    if (!refPDT || !targetPDT) {
      return;
    }
    var delta = (targetPDT - refPDT) / 1000 - (frag.start - refFrag.start);
    adjustSlidingStart(delta, details);
  }

  /**
   *  TimeRanges to string helper
   */

  var TimeRanges = {
    toString: function toString(r) {
      var log = '';
      var len = r.length;
      for (var i = 0; i < len; i++) {
        log += "[" + r.start(i).toFixed(3) + "-" + r.end(i).toFixed(3) + "]";
      }
      return log;
    }
  };

  var State = {
    STOPPED: 'STOPPED',
    IDLE: 'IDLE',
    KEY_LOADING: 'KEY_LOADING',
    FRAG_LOADING: 'FRAG_LOADING',
    FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
    WAITING_TRACK: 'WAITING_TRACK',
    PARSING: 'PARSING',
    PARSED: 'PARSED',
    ENDED: 'ENDED',
    ERROR: 'ERROR',
    WAITING_INIT_PTS: 'WAITING_INIT_PTS',
    WAITING_LEVEL: 'WAITING_LEVEL'
  };
  var BaseStreamController = /*#__PURE__*/function (_TaskLoop) {
    function BaseStreamController(hls, fragmentTracker, keyLoader, logPrefix, playlistType) {
      var _this;
      _this = _TaskLoop.call(this, logPrefix, hls.logger) || this;
      _this.hls = void 0;
      _this.fragPrevious = null;
      _this.fragCurrent = null;
      _this.fragmentTracker = void 0;
      _this.transmuxer = null;
      _this._state = State.STOPPED;
      _this.playlistType = void 0;
      _this.media = null;
      _this.mediaBuffer = null;
      _this.config = void 0;
      _this.bitrateTest = false;
      _this.lastCurrentTime = 0;
      _this.nextLoadPosition = 0;
      _this.startPosition = 0;
      _this.startTimeOffset = null;
      _this.retryDate = 0;
      _this.levels = null;
      _this.fragmentLoader = void 0;
      _this.keyLoader = void 0;
      _this.levelLastLoaded = null;
      _this.startFragRequested = false;
      _this.decrypter = void 0;
      _this.initPTS = [];
      _this.buffering = true;
      _this.loadingParts = false;
      _this.loopSn = void 0;
      _this.onMediaSeeking = function () {
        var _this2 = _this,
          config = _this2.config,
          fragCurrent = _this2.fragCurrent,
          media = _this2.media,
          mediaBuffer = _this2.mediaBuffer,
          state = _this2.state;
        var currentTime = media ? media.currentTime : 0;
        var bufferInfo = BufferHelper.bufferInfo(mediaBuffer ? mediaBuffer : media, currentTime, config.maxBufferHole);
        _this.log("media seeking to " + (isFiniteNumber(currentTime) ? currentTime.toFixed(3) : currentTime) + ", state: " + state);
        if (_this.state === State.ENDED) {
          _this.resetLoadingState();
        } else if (fragCurrent) {
          // Seeking while frag load is in progress
          var tolerance = config.maxFragLookUpTolerance;
          var fragStartOffset = fragCurrent.start - tolerance;
          var fragEndOffset = fragCurrent.start + fragCurrent.duration + tolerance;
          // if seeking out of buffered range or into new one
          if (!bufferInfo.len || fragEndOffset < bufferInfo.start || fragStartOffset > bufferInfo.end) {
            var pastFragment = currentTime > fragEndOffset;
            // if the seek position is outside the current fragment range
            if (currentTime < fragStartOffset || pastFragment) {
              if (pastFragment && fragCurrent.loader) {
                _this.log('seeking outside of buffer while fragment load in progress, cancel fragment load');
                fragCurrent.abortRequests();
                _this.resetLoadingState();
              }
              _this.fragPrevious = null;
            }
          }
        }
        if (media) {
          // Remove gap fragments
          _this.fragmentTracker.removeFragmentsInRange(currentTime, Infinity, _this.playlistType, true);

          // Don't set lastCurrentTime with backward seeks (allows for frag selection with strict tolerances)
          var lastCurrentTime = _this.lastCurrentTime;
          if (currentTime > lastCurrentTime) {
            _this.lastCurrentTime = currentTime;
          }
          if (!_this.loadingParts) {
            var bufferEnd = Math.max(bufferInfo.end, currentTime);
            var shouldLoadParts = _this.shouldLoadParts(_this.getLevelDetails(), bufferEnd);
            if (shouldLoadParts) {
              _this.log("LL-Part loading ON after seeking to " + currentTime.toFixed(2) + " with buffer @" + bufferEnd.toFixed(2));
              _this.loadingParts = shouldLoadParts;
            }
          }
        }

        // in case seeking occurs although no media buffered, adjust startPosition and nextLoadPosition to seek target
        if (!_this.hls.hasEnoughToStart && !bufferInfo.len) {
          _this.log("setting startPosition to " + currentTime + " because of seek before start");
          _this.nextLoadPosition = _this.startPosition = currentTime;
        }

        // Async tick to speed up processing
        _this.tickImmediate();
      };
      _this.onMediaEnded = function () {
        // reset startPosition and lastCurrentTime to restart playback @ stream beginning
        _this.log("setting startPosition to 0 because media ended");
        _this.startPosition = _this.lastCurrentTime = 0;
      };
      _this.playlistType = playlistType;
      _this.hls = hls;
      _this.fragmentLoader = new FragmentLoader(hls.config);
      _this.keyLoader = keyLoader;
      _this.fragmentTracker = fragmentTracker;
      _this.config = hls.config;
      _this.decrypter = new Decrypter(hls.config);
      return _this;
    }
    _inheritsLoose(BaseStreamController, _TaskLoop);
    var _proto = BaseStreamController.prototype;
    _proto.registerListeners = function registerListeners() {
      var hls = this.hls;
      hls.on(Events.MEDIA_ATTACHED, this.onMediaAttached, this);
      hls.on(Events.MEDIA_DETACHING, this.onMediaDetaching, this);
      hls.on(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.on(Events.MANIFEST_LOADED, this.onManifestLoaded, this);
      hls.on(Events.ERROR, this.onError, this);
    };
    _proto.unregisterListeners = function unregisterListeners() {
      var hls = this.hls;
      hls.off(Events.MEDIA_ATTACHED, this.onMediaAttached, this);
      hls.off(Events.MEDIA_DETACHING, this.onMediaDetaching, this);
      hls.off(Events.MANIFEST_LOADING, this.onManifestLoading, this);
      hls.off(Events.MANIFEST_LOADED, this.onManifestLoaded, this);
      hls.off(Events.ERROR, this.onError, this);
    };
    _proto.doTick = function doTick() {
      this.onTickEnd();
    };
    _proto.onTickEnd = function onTickEnd() {};
    _proto.startLoad = function startLoad(startPosition) {};
    _proto.stopLoad = function stopLoad() {
      if (this.state === State.STOPPED) {
        return;
      }
      this.fragmentLoader.abort();
      this.keyLoader.abort(this.playlistType);
      var frag = this.fragCurrent;
      if (frag != null && frag.loader) {
        frag.abortRequests();
        this.fragmentTracker.removeFragment(frag);
      }
      this.resetTransmuxer();
      this.fragCurrent = null;
      this.fragPrevious = null;
      this.clearInterval();
      this.clearNextTick();
      this.state = State.STOPPED;
    };
    _proto.pauseBuffering = function pauseBuffering() {
      this.buffering = false;
    };
    _proto.resumeBuffering = function resumeBuffering() {
      this.buffering = true;
    };
    _proto._streamEnded = function _streamEnded(bufferInfo, levelDetails) {
      // Stream is never "ended" when playlist is live or media is detached
      if (levelDetails.live || !this.media) {
        return false;
      }
      // Stream is not "ended" when nothing is buffered past the start
      var bufferEnd = bufferInfo.end || 0;
      var timelineStart = this.config.timelineOffset || 0;
      if (bufferEnd <= timelineStart) {
        return false;
      }
      // Stream is not "ended" when there is a second buffered range starting before the end of the playlist
      var nextStart = bufferInfo.nextStart;
      var hasSecondBufferedRange = nextStart && nextStart > timelineStart && nextStart < levelDetails.edge;
      if (hasSecondBufferedRange) {
        return false;
      }
      // Playhead is in unbuffered region. Marking EoS now could result in Safari failing to dispatch "ended" event following seek on start.
      if (this.media.currentTime < bufferInfo.start) {
        return false;
      }
      var partList = levelDetails.partList;
      // Since the last part isn't guaranteed to correspond to the last playlist segment for Low-Latency HLS,
      // check instead if the last part is buffered.
      if (partList != null && partList.length) {
        var lastPart = partList[partList.length - 1];

        // Checking the midpoint of the part for potential margin of error and related issues.
        // NOTE: Technically I believe parts could yield content that is < the computed duration (including potential a duration of 0)
        // and still be spec-compliant, so there may still be edge cases here. Likewise, there could be issues in end of stream
        // part mismatches for independent audio and video playlists/segments.
        var lastPartBuffered = BufferHelper.isBuffered(this.media, lastPart.start + lastPart.duration / 2);
        return lastPartBuffered;
      }
      var playlistType = levelDetails.fragments[levelDetails.fragments.length - 1].type;
      return this.fragmentTracker.isEndListAppended(playlistType);
    };
    _proto.getLevelDetails = function getLevelDetails() {
      if (this.levels && this.levelLastLoaded !== null) {
        var _this$levelLastLoaded;
        return (_this$levelLastLoaded = this.levelLastLoaded) == null ? void 0 : _this$levelLastLoaded.details;
      }
    };
    _proto.onMediaAttached = function onMediaAttached(event, data) {
      var media = this.media = this.mediaBuffer = data.media;
      media.removeEventListener('seeking', this.onMediaSeeking);
      media.removeEventListener('ended', this.onMediaEnded);
      media.addEventListener('seeking', this.onMediaSeeking);
      media.addEventListener('ended', this.onMediaEnded);
      var config = this.config;
      if (this.levels && config.autoStartLoad && this.state === State.STOPPED) {
        this.startLoad(config.startPosition);
      }
    };
    _proto.onMediaDetaching = function onMediaDetaching(event, data) {
      var transferringMedia = !!data.transferMedia;
      var media = this.media;
      if (media === null) {
        return;
      }
      if (media.ended) {
        this.log('MSE detaching and video ended, reset startPosition');
        this.startPosition = this.lastCurrentTime = 0;
      }

      // remove video listeners
      media.removeEventListener('seeking', this.onMediaSeeking);
      media.removeEventListener('ended', this.onMediaEnded);
      if (this.keyLoader && !transferringMedia) {
        this.keyLoader.detach();
      }
      this.media = this.mediaBuffer = null;
      this.loopSn = undefined;
      if (transferringMedia) {
        this.resetLoadingState();
        this.resetTransmuxer();
        return;
      }
      this.loadingParts = false;
      this.fragmentTracker.removeAllFragments();
      this.stopLoad();
    };
    _proto.onManifestLoading = function onManifestLoading() {
      this.initPTS = [];
      this.levels = this.levelLastLoaded = this.fragCurrent = null;
      this.lastCurrentTime = this.startPosition = 0;
      this.startFragRequested = false;
    };
    _proto.onError = function onError(event, data) {};
    _proto.onManifestLoaded = function onManifestLoaded(event, data) {
      this.startTimeOffset = data.startTimeOffset;
    };
    _proto.onHandlerDestroying = function onHandlerDestroying() {
      this.stopLoad();
      if (this.transmuxer) {
        this.transmuxer.destroy();
        this.transmuxer = null;
      }
      _TaskLoop.prototype.onHandlerDestroying.call(this);
      // @ts-ignore
      this.hls = this.onMediaSeeking = this.onMediaEnded = null;
    };
    _proto.onHandlerDestroyed = function onHandlerDestroyed() {
      this.state = State.STOPPED;
      if (this.fragmentLoader) {
        this.fragmentLoader.destroy();
      }
      if (this.keyLoader) {
        this.keyLoader.destroy();
      }
      if (this.decrypter) {
        this.decrypter.destroy();
      }
      this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null;
      _TaskLoop.prototype.onHandlerDestroyed.call(this);
    };
    _proto.loadFragment = function loadFragment(frag, level, targetBufferTime) {
      this.startFragRequested = true;
      this._loadFragForPlayback(frag, level, targetBufferTime);
    };
    _proto._loadFragForPlayback = function _loadFragForPlayback(fragment, level, targetBufferTime) {
      var _this3 = this;
      var progressCallback = function progressCallback(data) {
        var frag = data.frag;
        if (_this3.fragContextChanged(frag)) {
          _this3.warn(frag.type + " sn: " + frag.sn + (data.part ? ' part: ' + data.part.index : '') + " of " + _this3.fragInfo(frag, false, data.part) + ") was dropped during download.");
          _this3.fragmentTracker.removeFragment(frag);
          return;
        }
        frag.stats.chunkCount++;
        _this3._handleFragmentLoadProgress(data);
      };
      this._doFragLoad(fragment, level, targetBufferTime, progressCallback).then(function (data) {
        if (!data) {
          // if we're here we probably needed to backtrack or are waiting for more parts
          return;
        }
        var state = _this3.state;
        var frag = data.frag;
        if (_this3.fragContextChanged(frag)) {
          if (state === State.FRAG_LOADING || !_this3.fragCurrent && state === State.PARSING) {
            _this3.fragmentTracker.removeFragment(frag);
            _this3.state = State.IDLE;
          }
          return;
        }
        if ('payload' in data) {
          _this3.log("Loaded " + frag.type + " sn: " + frag.sn + " of " + _this3.playlistLabel() + " " + frag.level);
          _this3.hls.trigger(Events.FRAG_LOADED, data);
        }

        // Pass through the whole payload; controllers not implementing progressive loading receive data from this callback
        _this3._handleFragmentLoadComplete(data);
      }).catch(function (reason) {
        if (_this3.state === State.STOPPED || _this3.state === State.ERROR) {
          return;
        }
        _this3.warn("Frag error: " + ((reason == null ? void 0 : reason.message) || reason));
        _this3.resetFragmentLoading(fragment);
      });
    };
    _proto.clearTrackerIfNeeded = function clearTrackerIfNeeded(frag) {
      var _this$mediaBuffer;
      var fragmentTracker = this.fragmentTracker;
      var fragState = fragmentTracker.getState(frag);
      if (fragState === FragmentState.APPENDING) {
        // Lower the max buffer length and try again
        var playlistType = frag.type;
        var bufferedInfo = this.getFwdBufferInfo(this.mediaBuffer, playlistType);
        var minForwardBufferLength = Math.max(frag.duration, bufferedInfo ? bufferedInfo.len : this.config.maxBufferLength);
        // If backtracking, always remove from the tracker without reducing max buffer length
        var backtrackFragment = this.backtrackFragment;
        var backtracked = backtrackFragment ? frag.sn - backtrackFragment.sn : 0;
        if (backtracked === 1 || this.reduceMaxBufferLength(minForwardBufferLength, frag.duration)) {
          fragmentTracker.removeFragment(frag);
        }
      } else if (((_this$mediaBuffer = this.mediaBuffer) == null ? void 0 : _this$mediaBuffer.buffered.length) === 0) {
        // Stop gap for bad tracker / buffer flush behavior
        fragmentTracker.removeAllFragments();
      } else if (fragmentTracker.hasParts(frag.type)) {
        // In low latency mode, remove fragments for which only some parts were buffered
        fragmentTracker.detectPartialFragments({
          frag: frag,
          part: null,
          stats: frag.stats,
          id: frag.type
        });
        if (fragmentTracker.getState(frag) === FragmentState.PARTIAL) {
          fragmentTracker.removeFragment(frag);
        }
      }
    };
    _proto.checkLiveUpdate = function checkLiveUpdate(details) {
      if (details.updated && !details.live) {
        // Live stream ended, update fragment tracker
        var lastFragment = details.fragments[details.fragments.length - 1];
        this.fragmentTracker.detectPartialFragments({
          frag: lastFragment,
          part: null,
          stats: lastFragment.stats,
          id: lastFragment.type
        });
      }
      if (!details.fragments[0]) {
        details.deltaUpdateFailed = true;
      }
    };
    _proto.waitForLive = function waitForLive(levelInfo) {
      var details = levelInfo.details;
      return (details == null ? void 0 : details.live) && details.type !== 'EVENT' && (this.levelLastLoaded !== levelInfo || details.expired);
    };
    _proto.flushMainBuffer = function flushMainBuffer(startOffset, endOffset, type) {
      if (type === void 0) {
        type = null;
      }
      if (!(startOffset - endOffset)) {
        return;
      }
      // When alternate audio is playing, the audio-stream-controller is responsible for the audio buffer. Otherwise,
      // passing a null type flushes both buffers
      var flushScope = {
        startOffset: startOffset,
        endOffset: endOffset,
        type: type
      };
      this.hls.trigger(Events.BUFFER_FLUSHING, flushScope);
    };
    _proto._loadInitSegment = function _loadInitSegment(fragment, level) {
      var _this4 = this;
      this._doFragLoad(fragment, level).then(function (data) {
        var frag = data == null ? void 0 : data.frag;
        if (!frag || _this4.fragContextChanged(frag) || !_this4.levels) {
          throw new Error('init load aborted');
        }
        return data;
      }).then(function (data) {
        var hls = _this4.hls;
        var frag = data.frag,
          payload = data.payload;
        var decryptData = frag.decryptdata;

        // check to see if the payload needs to be decrypted
        if (payload && payload.byteLength > 0 && decryptData != null && decryptData.key && decryptData.iv && isFullSegmentEncryption(decryptData.method)) {
          var startTime = self.performance.now();
          // decrypt init segment data
          return _this4.decrypter.decrypt(new Uint8Array(payload), decryptData.key.buffer, decryptData.iv.buffer, getAesModeFromFullSegmentMethod(decryptData.method)).catch(function (err) {
            hls.trigger(Events.ERROR, {
              type: ErrorTypes.MEDIA_ERROR,
              details: ErrorDetails.FRAG_DECRYPT_ERROR,
              fatal: false,
              error: err,
              reason: err.message,
              frag: frag
            });
            throw err;
          }).then(function (decryptedData) {
            var endTime = self.performance.now();
            hls.trigger(Events.FRAG_DECRYPTED, {
              frag: frag,
              payload: decryptedData,
              stats: {
                tstart: startTime,
                tdecrypt: endTime
              }
            });
            data.payload = decryptedData;
            return _this4.completeInitSegmentLoad(data);
          });
        }
        return _this4.completeInitSegmentLoad(data);
      }).catch(function (reason) {
        if (_this4.state === State.STOPPED || _this4.state === State.ERROR) {
          return;
        }
        _this4.warn(reason);
        _this4.resetFragmentLoading(fragment);
      });
    };
    _proto.completeInitSegmentLoad = function completeInitSegmentLoad(data) {
      var levels = this.levels;
      if (!levels) {
        throw new Error('init load aborted, missing levels');
      }
      var stats = data.frag.stats;
      if (this.state !== State.STOPPED) {
        this.state = State.IDLE;
      }
      data.frag.data = new Uint8Array(data.payload);
      stats.parsing.start = stats.buffering.start = self.performance.now();
      stats.parsing.end = stats.buffering.end = self.performance.now();
      this.tick();
    };
    _proto.fragContextChanged = function fragContextChanged(frag) {
      var fragCurrent = this.fragCurrent;
      return !frag || !fragCurrent || frag.sn !== fragCurrent.sn || frag.level !== fragCurrent.level;
    };
    _proto.fragBufferedComplete = function fragBufferedComplete(frag, part) {
      var media = this.mediaBuffer ? this.mediaBuffer : this.media;
      this.log("Buffered " + frag.type + " sn: " + frag.sn + (part ? ' part: ' + part.index : '') + " of " + this.fragInfo(frag, false, part) + " > buffer:" + (media ? TimeRanges.toString(BufferHelper.getBuffered(media)) : '(detached)') + ")");
      if (isMediaFragment(frag)) {
        var _this$levels;
        if (frag.type !== PlaylistLevelType.SUBTITLE) {
          var el = frag.elementaryStreams;
          if (!Object.keys(el).some(function (type) {
            return !!el[type];
          })) {
            // empty segment
            this.state = State.IDLE;
            return;
          }
        }
        var level = (_this$levels = this.levels) == null ? void 0 : _this$levels[frag.level];
        if (level != null && level.fragmentError) {
          this.log("Resetting level fragment error count of " + level.fragmentError + " on frag buffered");
          level.fragmentError = 0;
        }
      }
      this.state = State.IDLE;
    };
    _proto._handleFragmentLoadComplete = function _handleFragmentLoadComplete(fragLoadedEndData) {
      var transmuxer = this.transmuxer;
      if (!transmuxer) {
        return;
      }
      var frag = fragLoadedEndData.frag,
        part = fragLoadedEndData.part,
        partsLoaded = fragLoadedEndData.partsLoaded;
      // If we did not load parts, or loaded all parts, we have complete (not partial) fragment data
      var complete = !partsLoaded || partsLoaded.length === 0 || partsLoaded.some(function (fragLoaded) {
        return !fragLoaded;
      });
      var chunkMeta = new ChunkMetadata(frag.level, frag.sn, frag.stats.chunkCount + 1, 0, part ? part.index : -1, !complete);
      transmuxer.flush(chunkMeta);
    };
    _proto._handleFragmentLoadProgress = function _handleFragmentLoadProgress(frag) {};
    _proto._doFragLoad = function _doFragLoad(frag, level, targetBufferTime, progressCallback) {
      var _frag$decryptdata,
        _this5 = this;
      if (targetBufferTime === void 0) {
        targetBufferTime = null;
      }
      this.fragCurrent = frag;
      var details = level == null ? void 0 : level.details;
      if (!this.levels || !details) {
        throw new Error("frag load aborted, missing level" + (details ? '' : ' detail') + "s");
      }
      var keyLoadingPromise = null;
      if (frag.encrypted && !((_frag$decryptdata = frag.decryptdata) != null && _frag$decryptdata.key)) {
        this.log("Loading key for " + frag.sn + " of [" + details.startSN + "-" + details.endSN + "], " + this.playlistLabel() + " " + frag.level);
        this.state = State.KEY_LOADING;
        this.fragCurrent = frag;
        keyLoadingPromise = this.keyLoader.load(frag).then(function (keyLoadedData) {
          if (!_this5.fragContextChanged(keyLoadedData.frag)) {
            _this5.hls.trigger(Events.KEY_LOADED, keyLoadedData);
            if (_this5.state === State.KEY_LOADING) {
              _this5.state = State.IDLE;
            }
            return keyLoadedData;
          }
        });
        this.hls.trigger(Events.KEY_LOADING, {
          frag: frag
        });
        if (this.fragCurrent === null) {
          keyLoadingPromise = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING"));
        }
      } else if (!frag.encrypted && details.encryptedFragments.length) {
        this.keyLoader.loadClear(frag, details.encryptedFragments);
      }
      var fragPrevious = this.fragPrevious;
      if (isMediaFragment(frag) && (!fragPrevious || frag.sn !== fragPrevious.sn)) {
        var shouldLoadParts = this.shouldLoadParts(level.details, frag.end);
        if (shouldLoadParts !== this.loadingParts) {
          this.log("LL-Part loading " + (shouldLoadParts ? 'ON' : 'OFF') + " loading sn " + (fragPrevious == null ? void 0 : fragPrevious.sn) + "->" + frag.sn);
          this.loadingParts = shouldLoadParts;
        }
      }
      targetBufferTime = Math.max(frag.start, targetBufferTime || 0);
      if (this.loadingParts && isMediaFragment(frag)) {
        var partList = details.partList;
        if (partList && progressCallback) {
          if (targetBufferTime > frag.end && details.fragmentHint) {
            frag = details.fragmentHint;
          }
          var partIndex = this.getNextPart(partList, frag, targetBufferTime);
          if (partIndex > -1) {
            var part = partList[partIndex];
            frag = this.fragCurrent = part.fragment;
            this.log("Loading " + frag.type + " sn: " + frag.sn + " part: " + part.index + " (" + partIndex + "/" + (partList.length - 1) + ") of " + this.fragInfo(frag, false, part) + ") cc: " + frag.cc + " [" + details.startSN + "-" + details.endSN + "], target: " + parseFloat(targetBufferTime.toFixed(3)));
            this.nextLoadPosition = part.start + part.duration;
            this.state = State.FRAG_LOADING;
            var _result;
            if (keyLoadingPromise) {
              _result = keyLoadingPromise.then(function (keyLoadedData) {
                if (!keyLoadedData || _this5.fragContextChanged(keyLoadedData.frag)) {
                  return null;
                }
                return _this5.doFragPartsLoad(frag, part, level, progressCallback);
              }).catch(function (error) {
                return _this5.handleFragLoadError(error);
              });
            } else {
              _result = this.doFragPartsLoad(frag, part, level, progressCallback).catch(function (error) {
                return _this5.handleFragLoadError(error);
              });
            }
            this.hls.trigger(Events.FRAG_LOADING, {
              frag: frag,
              part: part,
              targetBufferTime: targetBufferTime
            });
            if (this.fragCurrent === null) {
              return Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts"));
            }
            return _result;
          } else if (!frag.url || this.loadedEndOfParts(partList, targetBufferTime)) {
            // Fragment hint has no parts
            return Promise.resolve(null);
          }
        }
      }
      if (isMediaFragment(frag) && this.loadingParts) {
        this.log("LL-Part loading OFF after next part miss @" + targetBufferTime.toFixed(2));
        this.loadingParts = false;
      } else if (!frag.url) {
        // Selected fragment hint for part but not loading parts
        return Promise.resolve(null);
      }
      this.log("Loading " + frag.type + " sn: " + frag.sn + " of " + this.fragInfo(frag, false) + ") cc: " + frag.cc + " " + (details ? '[' + details.startSN + '-' + details.endSN + ']' : '') + ", target: " + parseFloat(targetBufferTime.toFixed(3)));
      // Don't update nextLoadPosition for fragments which are not buffered
      if (isFiniteNumber(frag.sn) && !this.bitrateTest) {
        this.nextLoadPosition = frag.start + frag.duration;
      }
      this.state = State.FRAG_LOADING;

      // Load key before streaming fragment data
      var dataOnProgress = this.config.progressive;
      var result;
      if (dataOnProgress && keyLoadingPromise) {
        result = keyLoadingPromise.then(function (keyLoadedData) {
          if (!keyLoadedData || _this5.fragContextChanged(keyLoadedData == null ? void 0 : keyLoadedData.frag)) {
            return null;
          }
          return _this5.fragmentLoader.load(frag, progressCallback);
        }).catch(function (error) {
          return _this5.handleFragLoadError(error);
        });
      } else {
        // load unencrypted fragment data with progress event,
        // or handle fragment result after key and fragment are finished loading
        result = Promise.all([this.fragmentLoader.load(frag, dataOnProgress ? progressCallback : undefined), keyLoadingPromise]).then(function (_ref) {
          var fragLoadedData = _ref[0];
          if (!dataOnProgress && fragLoadedData && progressCallback) {
            progressCallback(fragLoadedData);
          }
          return fragLoadedData;
        }).catch(function (error) {
          return _this5.handleFragLoadError(error);
        });
      }
      this.hls.trigger(Events.FRAG_LOADING, {
        frag: frag,
        targetBufferTime: targetBufferTime
      });
      if (this.fragCurrent === null) {
        return Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING"));
      }
      return result;
    };
    _proto.doFragPartsLoad = function doFragPartsLoad(frag, fromPart, level, progressCallback) {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        var _level$details;
        var partsLoaded = [];
        var initialPartList = (_level$details = level.details) == null ? void 0 : _level$details.partList;
        var _loadPart = function loadPart(part) {
          _this6.fragmentLoader.loadPart(frag, part, progressCallback).then(function (partLoadedData) {
            partsLoaded[part.index] = partLoadedData;
            var loadedPart = partLoadedData.part;
            _this6.hls.trigger(Events.FRAG_LOADED, partLoadedData);
            var nextPart = getPartWith(level.details, frag.sn, part.index + 1) || findPart(initialPartList, frag.sn, part.index + 1);
            if (nextPart) {
              _loadPart(nextPart);
            } else {
              return resolve({
                frag: frag,
                part: loadedPart,
                partsLoaded: partsLoaded
              });
            }
          }).catch(reject);
        };
        _loadPart(fromPart);
      });
    };
    _proto.handleFragLoadError = function handleFragLoadError(error) {
      if ('data' in error) {
        var data = error.data;
        if (error.data && data.details === ErrorDetails.INTERNAL_ABORTED) {
          this.handleFragLoadAborted(data.frag, data.part);
        } else {
          this.hls.trigger(Events.ERROR, data);
        }
      } else {
        this.hls.trigger(Events.ERROR, {
          type: ErrorTypes.OTHER_ERROR,
          details: ErrorDetails.INTERNAL_EXCEPTION,
          err: error,
          error: error,
          fatal: true
        });
      }
      return null;
    };
    _proto._handleTransmuxerFlush = function _handleTransmuxerFlush(chunkMeta) {
      var context = this.getCurrentContext(chunkMeta);
      if (!context || this.state !== State.PARSING) {
        if (!this.fragCurrent && this.state !== State.STOPPED && this.state !== State.ERROR) {
          this.state = State.IDLE;
        }
        return;
      }
      var frag = context.frag,
        part = context.part,
        level = context.level;
      var now = self.performance.now();
      frag.stats.parsing.end = now;
      if (part) {
        part.stats.parsing.end = now;
      }
      // See if part loading should be disabled/enabled based on buffer and playback position.
      var levelDetails = this.getLevelDetails();
      var loadingPartsAtEdge = levelDetails && frag.sn > levelDetails.endSN;
      var shouldLoadParts = loadingPartsAtEdge || this.shouldLoadParts(levelDetails, frag.end);
      if (shouldLoadParts !== this.loadingParts) {
        this.log("LL-Part loading " ó{×vòµë(š+myÔ™Õ¹Ñ¥½¸½¹ÍÍ•Ñ1¥ÍÑ1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥Ìä€ôÑ¡¥Ì°(€€€€€€€}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´ì(€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…°€ô‘…Ñ„¹•Ù•¹Ðì(€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±%€ô¥¹Ñ•ÉÍÑ¥Ñ¥…°¹¥‘•¹Ñ¥™¥•Èì(€€€€€Ù…È…ÍÍ•ÑÌ€ô‘…Ñ„¹…ÍÍ•Ñ1¥ÍÑI•ÍÁ½¹Í”¹MMQLì(€€€€€¥˜€ …Ñ¡¥Ì¹Í¡•‘Õ±”¹¡…ÍÙ•¹Ð¡¥¹Ñ•ÉÍÑ¥Ñ¥…±%¤¤ì(€€€€€€€€¼¼%¹Ñ•ÉÍÑ¥Ñ¥…°Ý¥Ñ ¥Ý…ÌÉ•µ½Ù•(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È•Ù•¹ÑMÑ…ÉÐ€ô¥¹Ñ•ÉÍÑ¥Ñ¥…°¹Ñ¥µ•±¥¹•MÑ…ÉÐì(€€€€€Ù…ÈÁÉ•Ù¥½ÕÍÕÉ…Ñ¥½¸€ô¥¹Ñ•ÉÍÑ¥Ñ¥…°¹‘ÕÉ…Ñ¥½¸ì(€€€€€Ù…ÈÍÕµÕÉ…Ñ¥½¸€ô€Àì(€€€€€…ÍÍ•ÑÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡…ÍÍ•Ð°…ÍÍ•Ñ1¥ÍÑ%¹‘•à¤ì(€€€€€€€Ù…È‘ÕÉ…Ñ¥½¸€ôÁ…ÉÍ•±½…Ð¡…ÍÍ•Ð¹UIQ%=8¤ì(€€€€€€€}Ñ¡¥Ìä¹É•…Ñ•ÍÍ•Ð¡¥¹Ñ•ÉÍÑ¥Ñ¥…°°…ÍÍ•Ñ1¥ÍÑ%¹‘•à°ÍÕµÕÉ…Ñ¥½¸°•Ù•¹ÑMÑ…ÉÐ€¬ÍÕµÕÉ…Ñ¥½¸°‘ÕÉ…Ñ¥½¸°…ÍÍ•Ð¹UI$¤ì(€€€€€€€ÍÕµÕÉ…Ñ¥½¸€¬ô‘ÕÉ…Ñ¥½¸ì(€€€€€ô¤ì(€€€€€¥¹Ñ•ÉÍÑ¥Ñ¥…°¹‘ÕÉ…Ñ¥½¸€ôÍÕµÕÉ…Ñ¥½¸ì(€€€€€Ñ¡¥Ì¹±½œ ‰1½…‘•…ÍÍ•Ðµ±¥ÍÐÝ¥Ñ ‘ÕÉ…Ñ¥½¸è€ˆ€¬ÍÕµÕÉ…Ñ¥½¸€¬€ˆ€¡Ý…Ìè€ˆ€¬ÁÉ•Ù¥½ÕÍÕÉ…Ñ¥½¸€¬€ˆ¤€ˆ€¬¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€Ù…ÈÝ…¥Ñ¥¹%Ñ•´€ôÑ¡¥Ì¹Ý…¥Ñ¥¹%Ñ•´ì(€€€€€Ù…ÈÝ…¥Ñ¥¹½É%Ñ•´€ô€¡Ý…¥Ñ¥¹%Ñ•´€ôô¹Õ±°€üÙ½¥€À€èÝ…¥Ñ¥¹%Ñ•´¹•Ù•¹Ð¹¥‘•¹Ñ¥™¥•È¤€ôôô¥¹Ñ•ÉÍÑ¥Ñ¥…±%ì((€€€€€€¼¼UÁ‘…Ñ”Í¡•‘Õ±”¹½ÜÑ¡…Ð…ÍÍ•Ð¹UIQ%=8¡Ì¤…É”Á…ÉÍ•(€€€€€Ñ¡¥Ì¹ÕÁ‘…Ñ•M¡•‘Õ±” ¤ì(€€€€€Ù…È‰Õ™™•É¥¹Ù•¹Ð€ô€¡}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´€ôÑ¡¥Ì¹‰Õ™™•É¥¹%Ñ•´¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´¹•Ù•¹Ðì((€€€€€€¼¼%˜‰Õ™™•ÈÉ•…¡•%¹Ñ•ÉÍÑ¥Ñ¥…°°ÍÑ…ÉÐ‰Õ™™•É¥¹œ™¥ÉÍÐ…ÍÍ•Ð(€€€€€¥˜€¡Ý…¥Ñ¥¹½É%Ñ•´¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘Í¡•‘Õ±”‘¥Ñ•µÌÌì(€€€€€€€€¼¼‘Ù…¹”Í¡•‘Õ±”Ý¡•¸Ý…¥Ñ¥¹œ™½È…ÍÍ•Ð±¥ÍÐ‘…Ñ„Ñ¼Á±…ä(€€€€€€€Ù…ÈÍ¡•‘Õ±•%¹‘•à€ôÑ¡¥Ì¹Í¡•‘Õ±”¹™¥¹‘Ù•¹Ñ%¹‘•à¡¥¹Ñ•ÉÍÑ¥Ñ¥…±%¤ì(€€€€€€€Ù…È¥Ñ•´€ô€¡}Ñ¡¥Ì‘Í¡•‘Õ±”‘¥Ñ•µÌÌ€ôÑ¡¥Ì¹Í¡•‘Õ±”¹¥Ñ•µÌ¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘Í¡•‘Õ±”‘¥Ñ•µÌÍmÍ¡•‘Õ±•%¹‘•átì(€€€€€€€¥˜€¡¥Ñ•´¤ì(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹Á±…å¥¹%Ñ•´€˜˜Ñ¡¥Ì¹Ñ¥µ•±¥¹•A½Ì€ø¥Ñ•´¹•¹¤ì(€€€€€€€€€€€€¼¼‰…¹‘½¸¥˜¹•Ü‘ÕÉ…Ñ¥½¸¥ÌÉ•‘Õ••¹½Õ Ñ¼±…¹Á±…å‰…¬¥¸ÁÉ¥µ…ÉäÍÑ…ÉÐ(€€€€€€€€€€€Ù…È¥¹‘•à€ôÑ¡¥Ì¹Í¡•‘Õ±”¹™¥¹‘%Ñ•µ%¹‘•áÑQ¥µ”¡Ñ¡¥Ì¹Ñ¥µ•±¥¹•A½Ì¤ì(€€€€€€€€€€€¥˜€¡¥¹‘•à€„ôôÍ¡•‘Õ±•%¹‘•à¤ì(€€€€€€€€€€€€€¥¹Ñ•ÉÍÑ¥Ñ¥…°¹•ÉÉ½È€ô¹•ÜÉÉ½È ‰%¹Ñ•ÉÍÑ¥Ñ¥…°¹¼±½¹•ÈÝ¥Ñ¡¥¸Á±…å‰…¬É…¹”€ˆ€¬Ñ¡¥Ì¹Ñ¥µ•±¥¹•A½Ì€¬€ˆ€ˆ€¬¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÁÉ¥µ…Éå…±±‰…¬¡¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹Í•Ñ	Õ™™•É¥¹%Ñ•´¡¥Ñ•´¤ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹Í•ÑM¡•‘Õ±•A½Í¥Ñ¥½¸¡Í¡•‘Õ±•%¹‘•à¤ì(€€€€€ô•±Í”¥˜€ ¡‰Õ™™•É¥¹Ù•¹Ð€ôô¹Õ±°€üÙ½¥€À€è‰Õ™™•É¥¹Ù•¹Ð¹¥‘•¹Ñ¥™¥•È¤€ôôô¥¹Ñ•ÉÍÑ¥Ñ¥…±%€˜˜‰Õ™™•É¥¹Ù•¹Ð¹…ÁÁ•¹‘%¹A±…”¤ì(€€€€€€€€¼¼%˜‰Õ™™•É¥¹œ€¡‰ÕÐ¹½ÐÁ±…å‰…¬¤¡…ÌÉ•…¡•Ñ¡¥Ì¥Ñ•´ÑÉ…¹Í™•Èµ•‘¥„µÍ½ÕÉ”(€€€€€€€Ù…È…ÍÍ•Ñ%Ñ•´€ô¥¹Ñ•ÉÍÑ¥Ñ¥…°¹…ÍÍ•Ñ1¥ÍÑlÁtì(€€€€€€€Ù…ÈÁ±…å•È€ôÑ¡¥Ì¹•ÑÍÍ•ÑA±…å•È¡…ÍÍ•Ñ%Ñ•´¹¥‘•¹Ñ¥™¥•È¤ì(€€€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹ÁÉ¥µ…Éå5•‘¥„ì(€€€€€€€¥˜€¡…ÍÍ•Ñ%Ñ•´€˜˜Á±…å•È€˜˜µ•‘¥„¤ì(€€€€€€€€€Ñ¡¥Ì¹‰Õ™™•ÉÍÍ•ÑA±…å•È¡Á±…å•È°µ•‘¥„¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€ÍÝ¥Ñ €¡‘…Ñ„¹‘•Ñ…¥±Ì¤ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹MMQ}1%MQ}AIM%9}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹MMQ}1%MQ}1=}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹MMQ}1%MQ}1=}Q%5=UPè(€€€€€€€€€ì(€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…°€ô‘…Ñ„¹¥¹Ñ•ÉÍÑ¥Ñ¥…°ì(€€€€€€€€€€€¥˜€¡¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÁÉ¥µ…Éå…±±‰…¬¡¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹	UI}MQ11}II=Hè(€€€€€€€€€ì(€€€€€€€€€€€Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ” ¤ì(€€€€€€€€€€€Ñ¡¥Ì¹¡•­	Õ™™•È¡ÑÉÕ”¤ì(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡%¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰¥¹Ñ•ÉÍÑ¥Ñ¥…±Í5…¹…•Èˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹µ…¹…•È¤ì(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€€€ô(€€€€€€€€€Ù…ÈŒ€ôÑ¡¥Ìì(€€€€€€€€€Ù…È•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´€ô™Õ¹Ñ¥½¸•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´ ¤ì(€€€€€€€€€€€É•ÑÕÉ¸Œ¹‰Õ™™•É¥¹%Ñ•´ñðŒ¹Ý…¥Ñ¥¹%Ñ•´ì(€€€€€€€€€ôì(€€€€€€€€€Ù…È•ÑÍÍ•ÑA±…å•È€ô™Õ¹Ñ¥½¸•ÑÍÍ•ÑA±…å•È¡…ÍÍ•Ð¤ì(€€€€€€€€€€€É•ÑÕÉ¸…ÍÍ•Ð€üŒ¹•ÑÍÍ•ÑA±…å•È¡…ÍÍ•Ð¹¥‘•¹Ñ¥™¥•È¤€è…ÍÍ•Ðì(€€€€€€€€€ôì(€€€€€€€€€Ù…È•Ñ5…ÁÁ•‘Q¥µ”€ô™Õ¹Ñ¥½¸•Ñ5…ÁÁ•‘Q¥µ”¡¥Ñ•´°Ñ¥µ•±¥¹•QåÁ”°…ÍÍ•Ð°½¹ÑÉ½±±•É¥•±°…ÍÍ•ÑA±…å•É¥•±¤ì(€€€€€€€€€€€¥˜€¡¥Ñ•´¤ì(€€€€€€€€€€€€€Ù…ÈÑ¥µ”€ô¥Ñ•µmÑ¥µ•±¥¹•QåÁ•t¹ÍÑ…ÉÐì(€€€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…°€ô¥Ñ•´¹•Ù•¹Ðì(€€€€€€€€€€€€€¥˜€¡¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€€€€€¥˜€¡Ñ¥µ•±¥¹•QåÁ”€ôôô€Á±…å½ÕÐœñð¥¹Ñ•ÉÍÑ¥Ñ¥…°¹Ñ¥µ•±¥¹•=ÕÁ…¹ä€„ôôQ¥µ•±¥¹•=ÕÁ…¹ä¹A½¥¹Ð¤ì(€€€€€€€€€€€€€€€€€Ù…È…ÍÍ•ÑA±…å•È€ô•ÑÍÍ•ÑA±…å•È¡…ÍÍ•Ð¤ì(€€€€€€€€€€€€€€€€€¥˜€ ¡…ÍÍ•ÑA±…å•È€ôô¹Õ±°€üÙ½¥€À€è…ÍÍ•ÑA±…å•È¹¥¹Ñ•ÉÍÑ¥Ñ¥…°¤€ôôô¥¹Ñ•ÉÍÑ¥Ñ¥…°¤ì(€€€€€€€€€€€€€€€€€€€Ñ¥µ”€¬ô…ÍÍ•ÑA±…å•È¹…ÍÍ•Ñ%Ñ•´¹ÍÑ…ÉÑ=™™Í•Ð€¬…ÍÍ•ÑA±…å•Ém…ÍÍ•ÑA±…å•É¥•±‘tì(€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€€€Ù…ÈÙ…±Õ”€ô½¹ÑÉ½±±•É¥•±€ôôô€‰Õ™™•É•‘A½Ìœ€ü•Ñ	Õ™™•É•‘¹ ¤€èm½¹ÑÉ½±±•É¥•±‘tì(€€€€€€€€€€€€€€€Ñ¥µ”€¬ôÙ…±Õ”€´¥Ñ•´¹ÍÑ…ÉÐì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸Ñ¥µ”ì(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€ôì(€€€€€€€€€Ù…È™¥¹‘5…ÁÁ•‘Q¥µ”€ô™Õ¹Ñ¥½¸™¥¹‘5…ÁÁ•‘Q¥µ”¡ÁÉ¥µ…ÉåQ¥µ”°Ñ¥µ•±¥¹•QåÁ”¤ì(€€€€€€€€€€€¥˜€¡ÁÉ¥µ…ÉåQ¥µ”€„ôô€À€˜˜Ñ¥µ•±¥¹•QåÁ”€„ôô€ÁÉ¥µ…Éäœ€˜˜Œ¹Í¡•‘Õ±”¹±•¹Ñ ¤ì(€€€€€€€€€€€€€Ù…È}Œ‘Í¡•‘Õ±”‘¥Ñ•µÌì(€€€€€€€€€€€€€Ù…È¥¹‘•à€ôŒ¹Í¡•‘Õ±”¹™¥¹‘%Ñ•µ%¹‘•áÑQ¥µ”¡ÁÉ¥µ…ÉåQ¥µ”¤ì(€€€€€€€€€€€€€Ù…È¥Ñ•´€ô€¡}Œ‘Í¡•‘Õ±”‘¥Ñ•µÌ€ôŒ¹Í¡•‘Õ±”¹¥Ñ•µÌ¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘Í¡•‘Õ±”‘¥Ñ•µÍm¥¹‘•átì(€€€€€€€€€€€€€¥˜€¡¥Ñ•´¤ì(€€€€€€€€€€€€€€€Ù…È‘¥™˜€ô¥Ñ•µmÑ¥µ•±¥¹•QåÁ•t¹ÍÑ…ÉÐ€´¥Ñ•´¹ÍÑ…ÉÐì(€€€€€€€€€€€€€€€É•ÑÕÉ¸ÁÉ¥µ…ÉåQ¥µ”€¬‘¥™˜ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸ÁÉ¥µ…ÉåQ¥µ”ì(€€€€€€€€€ôì(€€€€€€€€€Ù…È•Ñ	Õ™™•É•‘¹€ô™Õ¹Ñ¥½¸•Ñ	Õ™™•É•‘¹ ¤ì(€€€€€€€€€€€Ù…ÈÙ…±Õ”€ôŒ¹‰Õ™™•É•‘A½Ìì(€€€€€€€€€€€¥˜€¡Ù…±Õ”€ôôô9Õµ‰•È¹5a}Y1U¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘ÕÉ…Ñ¥½¸ ÁÉ¥µ…Éäœ¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸5…Ñ ¹µ…à¡Ù…±Õ”°€À¤ì(€€€€€€€€€ôì(€€€€€€€€€Ù…È•Ñ5…ÁÁ•‘ÕÉ…Ñ¥½¸€ô™Õ¹Ñ¥½¸•Ñ5…ÁÁ•‘ÕÉ…Ñ¥½¸¡Ñ¥µ•±¥¹•QåÁ”¤ì(€€€€€€€€€€€Ù…È}Œ‘ÁÉ¥µ…Éå•Ñ…¥±Ìì(€€€€€€€€€€€¥˜€ ¡}Œ‘ÁÉ¥µ…Éå•Ñ…¥±Ì€ôŒ¹ÁÉ¥µ…Éå•Ñ…¥±Ì¤€„ô¹Õ±°€˜˜}Œ‘ÁÉ¥µ…Éå•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€€€€€€€€¼¼É•ÑÕÉ¸•¹½˜±…ÍÐ•Ù•¹Ð¥Ñ•´½ÈÁ±…å±¥ÍÐ(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹ÁÉ¥µ…Éå•Ñ…¥±Ì¹•‘”ì(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸Œ¹Í¡•‘Õ±”¹‘ÕÉ…Ñ¥½¹ÍmÑ¥µ•±¥¹•QåÁ•tì(€€€€€€€€€ôì(€€€€€€€€€Ù…ÈÍ••­Q¼€ô™Õ¹Ñ¥½¸Í••­Q¼¡Ñ¥µ”°Ñ¥µ•±¥¹•QåÁ”¤ì(€€€€€€€€€€€Ù…È}¥Ñ•´‘•Ù•¹Ð°}Œ‘Í¡•‘Õ±”‘¥Ñ•µÌÈì(€€€€€€€€€€€Ù…È¥Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€¥˜€¡¥Ñ•´€„ô¹Õ±°€˜˜€¡}¥Ñ•´‘•Ù•¹Ð€ô¥Ñ•´¹•Ù•¹Ð¤€„ô¹Õ±°€˜˜}¥Ñ•´‘•Ù•¹Ð¹É•ÍÑÉ¥Ñ¥½¹Ì¹Í­¥À¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€ô(€€€€€€€€€€€Œ¹±½œ ‰Í••¬Ñ¼€ˆ€¬Ñ¥µ”€¬€ˆpˆˆ€¬Ñ¥µ•±¥¹•QåÁ”€¬€‰pˆˆ¤ì(€€€€€€€€€€€Ù…ÈÁ±…å¥¹%Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€Ù…ÈÑ…É•Ñ%¹‘•à€ôŒ¹Í¡•‘Õ±”¹™¥¹‘%Ñ•µ%¹‘•áÑQ¥µ”¡Ñ¥µ”°Ñ¥µ•±¥¹•QåÁ”¤ì(€€€€€€€€€€€Ù…ÈÑ…É•Ñ%Ñ•´€ô€¡}Œ‘Í¡•‘Õ±”‘¥Ñ•µÌÈ€ôŒ¹Í¡•‘Õ±”¹¥Ñ•µÌ¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘Í¡•‘Õ±”‘¥Ñ•µÌÉmÑ…É•Ñ%¹‘•átì(€€€€€€€€€€€Ù…È‰Õ™™•É¥¹A±…å•È€ôŒ¹•Ñ	Õ™™•É¥¹A±…å•È ¤ì(€€€€€€€€€€€Ù…È‰Õ™™•É¥¹%¹Ñ•ÉÍÑ¥Ñ¥…°€ô‰Õ™™•É¥¹A±…å•È€ôô¹Õ±°€üÙ½¥€À€è‰Õ™™•É¥¹A±…å•È¹¥¹Ñ•ÉÍÑ¥Ñ¥…°ì(€€€€€€€€€€€Ù…È…ÁÁ•¹‘%¹A±…”€ô‰Õ™™•É¥¹%¹Ñ•ÉÍÑ¥Ñ¥…°€ôô¹Õ±°€üÙ½¥€À€è‰Õ™™•É¥¹%¹Ñ•ÉÍÑ¥Ñ¥…°¹…ÁÁ•¹‘%¹A±…”ì(€€€€€€€€€€€Ù…ÈÍ••­%¹%Ñ•´€ôÁ±…å¥¹%Ñ•´€˜˜Œ¹¥Ñ•µÍ5…Ñ ¡Á±…å¥¹%Ñ•´°Ñ…É•Ñ%Ñ•´¤ì(€€€€€€€€€€€¥˜€¡Á±…å¥¹%Ñ•´€˜˜€¡…ÁÁ•¹‘%¹A±…”ñðÍ••­%¹%Ñ•´¤¤ì(€€€€€€€€€€€€€€¼¼Í••¬¥¸…ÍÍ•ÐÁ±…å•È½ÈÁÉ¥µ…Éäµ•‘¥„€¡…ÁÁ•¹‘%¹A±…”¤(€€€€€€€€€€€€€Ù…È…ÍÍ•ÑA±…å•È€ô•ÑÍÍ•ÑA±…å•È¡Œ¹Á±…å¥¹ÍÍ•Ð¤ì(€€€€€€€€€€€€€Ù…Èµ•‘¥„€ô€¡…ÍÍ•ÑA±…å•È€ôô¹Õ±°€üÙ½¥€À€è…ÍÍ•ÑA±…å•È¹µ•‘¥„¤ñðŒ¹ÁÉ¥µ…Éå5•‘¥„ì(€€€€€€€€€€€€€¥˜€¡µ•‘¥„¤ì(€€€€€€€€€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôÑ¥µ•±¥¹•QåÁ”€ôôô€ÁÉ¥µ…Éäœ€üµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€è•Ñ5…ÁÁ•‘Q¥µ”¡Á±…å¥¹%Ñ•´°Ñ¥µ•±¥¹•QåÁ”°Œ¹Á±…å¥¹ÍÍ•Ð°€Ñ¥µ•±¥¹•A½Ìœ°€ÕÉÉ•¹ÑQ¥µ”œ¤ì(€€€€€€€€€€€€€€€Ù…È‘¥™˜€ôÑ¥µ”€´ÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€€€€€€€€€Ù…ÈÍ••­Q½Q¥µ”€ô€¡…ÁÁ•¹‘%¹A±…”€üÕÉÉ•¹ÑQ¥µ”€èµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”¤€¬‘¥™˜ì(€€€€€€€€€€€€€€€¥˜€¡Í••­Q½Q¥µ”€øô€À€˜˜€ ……ÍÍ•ÑA±…å•Èñð…ÁÁ•¹‘%¹A±…”ñðÍ••­Q½Q¥µ”€ðô…ÍÍ•ÑA±…å•È¹‘ÕÉ…Ñ¥½¸¤¤ì(€€€€€€€€€€€€€€€€€µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ôÍ••­Q½Q¥µ”ì(€€€€€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€€¼¼Í••¬½ÕÐ½˜¥Ñ•´½È…ÍÍ•Ð(€€€€€€€€€€€¥˜€¡Ñ…É•Ñ%Ñ•´¤ì(€€€€€€€€€€€€€Ù…È}Í••­Q½Q¥µ”€ôÑ¥µ”ì(€€€€€€€€€€€€€¥˜€¡Ñ¥µ•±¥¹•QåÁ”€„ôô€ÁÉ¥µ…Éäœ¤ì(€€€€€€€€€€€€€€€Ù…ÈÁÉ¥µ…ÉåM•µ•¹ÑMÑ…ÉÐ€ôÑ…É•Ñ%Ñ•µmÑ¥µ•±¥¹•QåÁ•t¹ÍÑ…ÉÐì(€€€€€€€€€€€€€€€Ù…È}‘¥™˜€ôÑ¥µ”€´ÁÉ¥µ…ÉåM•µ•¹ÑMÑ…ÉÐì(€€€€€€€€€€€€€€€}Í••­Q½Q¥µ”€ôÑ…É•Ñ%Ñ•´¹ÍÑ…ÉÐ€¬}‘¥™˜ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€Ù…ÈÑ…É•Ñ%ÍAÉ¥µ…Éä€ô€…Œ¹¥Í%¹Ñ•ÉÍÑ¥Ñ¥…°¡Ñ…É•Ñ%Ñ•´¤ì(€€€€€€€€€€€€€¥˜€  …Œ¹¥Í%¹Ñ•ÉÍÑ¥Ñ¥…°¡Á±…å¥¹%Ñ•´¤ñðÁ±…å¥¹%Ñ•´¹•Ù•¹Ð¹…ÁÁ•¹‘%¹A±…”¤€˜˜€¡Ñ…É•Ñ%ÍAÉ¥µ…ÉäñðÑ…É•Ñ%Ñ•´¹•Ù•¹Ð¹…ÁÁ•¹‘%¹A±…”¤¤ì(€€€€€€€€€€€€€€€Ù…È}µ•‘¥„È€ôŒ¹µ•‘¥„ñð€¡…ÁÁ•¹‘%¹A±…”€ü‰Õ™™•É¥¹A±…å•È€ôô¹Õ±°€üÙ½¥€À€è‰Õ™™•É¥¹A±…å•È¹µ•‘¥„€è¹Õ±°¤ì(€€€€€€€€€€€€€€€¥˜€¡}µ•‘¥„È¤ì(€€€€€€€€€€€€€€€€€}µ•‘¥„È¹ÕÉÉ•¹ÑQ¥µ”€ô}Í••­Q½Q¥µ”ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô•±Í”¥˜€¡Á±…å¥¹%Ñ•´¤ì(€€€€€€€€€€€€€€€€¼¼¡•¬¥˜…¸%¹Ñ•ÉÍÑ¥Ñ¥…°‰•ÑÝ••¸Ñ¡”ÕÉÉ•¹Ð¥Ñ•´…¹Ñ…É•Ð¥Ñ•´¡…Ì…¸`µIMQI%P)U5@É•ÍÑÉ¥Ñ¥½¸(€€€€€€€€€€€€€€€Ù…ÈÁ±…å¥¹%¹‘•à€ôŒ¹™¥¹‘%Ñ•µ%¹‘•à¡Á±…å¥¹%Ñ•´¤ì(€€€€€€€€€€€€€€€¥˜€¡Ñ…É•Ñ%¹‘•à€øÁ±…å¥¹%¹‘•à¤ì(€€€€€€€€€€€€€€€€€Ù…È©ÕµÁ%¹‘•à€ôŒ¹Í¡•‘Õ±”¹™¥¹‘)ÕµÁI•ÍÑÉ¥Ñ•‘%¹‘•à¡Á±…å¥¹%¹‘•à€¬€Ä°Ñ…É•Ñ%¹‘•à¤ì(€€€€€€€€€€€€€€€€€¥˜€¡©ÕµÁ%¹‘•à€øÁ±…å¥¹%¹‘•à¤ì(€€€€€€€€€€€€€€€€€€€Œ¹Í•ÑM¡•‘Õ±•A½Í¥Ñ¥½¸¡©ÕµÁ%¹‘•à¤ì(€€€€€€€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€Ù…È…ÍÍ•Ñ%¹‘•à€ô€Àì(€€€€€€€€€€€€€€€¥˜€¡Ñ…É•Ñ%ÍAÉ¥µ…Éä¤ì(€€€€€€€€€€€€€€€€€Œ¹Ñ¥µ•±¥¹•A½Ì€ô}Í••­Q½Q¥µ”ì(€€€€€€€€€€€€€€€€€Œ¹¡•­	Õ™™•È ¤ì(€€€€€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€€€€€Ù…È}Ñ…É•Ñ%Ñ•´‘•Ù•¹Ðì(€€€€€€€€€€€€€€€€€Ù…È…ÍÍ•Ñ1¥ÍÐ€ôÑ…É•Ñ%Ñ•´€ôô¹Õ±°€üÙ½¥€À€è€¡}Ñ…É•Ñ%Ñ•´‘•Ù•¹Ð€ôÑ…É•Ñ%Ñ•´¹•Ù•¹Ð¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ…É•Ñ%Ñ•´‘•Ù•¹Ð¹…ÍÍ•Ñ1¥ÍÐì(€€€€€€€€€€€€€€€€€¥˜€¡…ÍÍ•Ñ1¥ÍÐ¤ì(€€€€€€€€€€€€€€€€€€€Ù…È•Ù•¹ÑQ¥µ”€ôÑ¥µ”€´€¡Ñ…É•Ñ%Ñ•µmÑ¥µ•±¥¹•QåÁ•tñðÑ…É•Ñ%Ñ•´¤¹ÍÑ…ÉÐì(€€€€€€€€€€€€€€€€€€€™½È€¡Ù…È¤€ô…ÍÍ•Ñ1¥ÍÐ¹±•¹Ñ ì¤´´ì¤ì(€€€€€€€€€€€€€€€€€€€€€Ù…È…ÍÍ•Ð€ô…ÍÍ•Ñ1¥ÍÑm¥tì(€€€€€€€€€€€€€€€€€€€€€¥˜€¡…ÍÍ•Ð¹‘ÕÉ…Ñ¥½¸€˜˜•Ù•¹ÑQ¥µ”€øô…ÍÍ•Ð¹ÍÑ…ÉÑ=™™Í•Ð€˜˜•Ù•¹ÑQ¥µ”€ð…ÍÍ•Ð¹ÍÑ…ÉÑ=™™Í•Ð€¬…ÍÍ•Ð¹‘ÕÉ…Ñ¥½¸¤ì(€€€€€€€€€€€€€€€€€€€€€€€…ÍÍ•Ñ%¹‘•à€ô¤ì(€€€€€€€€€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€Œ¹Í•ÑM¡•‘Õ±•A½Í¥Ñ¥½¸¡Ñ…É•Ñ%¹‘•à°…ÍÍ•Ñ%¹‘•à¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ôì(€€€€€€€€€Ù…È•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…°€ô™Õ¹Ñ¥½¸•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤ì(€€€€€€€€€€€Ù…ÈÁ±…å¥¹%Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€¥˜€¡Œ¹¥Í%¹Ñ•ÉÍÑ¥Ñ¥…°¡Á±…å¥¹%Ñ•´¤¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Á±…å¥¹%Ñ•´ì(€€€€€€€€€€€ô(€€€€€€€€€€€Ù…È‰Õ™™•É¥¹%Ñ•´€ô•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´ ¤ì(€€€€€€€€€€€¥˜€¡Œ¹¥Í%¹Ñ•ÉÍÑ¥Ñ¥…°¡‰Õ™™•É¥¹%Ñ•´¤¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸‰Õ™™•É¥¹%Ñ•´ì(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€€€ôì(€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±A±…å•È€ôì(€€€€€€€€€€€•ÐÕÉÉ•¹ÑQ¥µ” ¤ì(€€€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´€ô•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤ì(€€€€€€€€€€€€€Ù…ÈÁ±…å¥¹%Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€€€¥˜€¡Á±…å¥¹%Ñ•´€˜˜Á±…å¥¹%Ñ•´€ôôô¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘Q¥µ”¡Á±…å¥¹%Ñ•´°€Á±…å½ÕÐœ°Œ¹•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ð°€Ñ¥µ•±¥¹•A½Ìœ°€ÕÉÉ•¹ÑQ¥µ”œ¤€´Á±…å¥¹%Ñ•´¹Á±…å½ÕÐ¹ÍÑ…ÉÐì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€€€ô°(€€€€€€€€€€€Í•ÐÕÉÉ•¹ÑQ¥µ”¡Ñ¥µ”¤ì(€€€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´€ô•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤ì(€€€€€€€€€€€€€Ù…ÈÁ±…å¥¹%Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€€€¥˜€¡Á±…å¥¹%Ñ•´€˜˜Á±…å¥¹%Ñ•´€ôôô¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´¤ì(€€€€€€€€€€€€€€€Í••­Q¼¡Ñ¥µ”€¬Á±…å¥¹%Ñ•´¹Á±…å½ÕÐ¹ÍÑ…ÉÐ°€Á±…å½ÕÐœ¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð‘ÕÉ…Ñ¥½¸ ¤ì(€€€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´€ô•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤ì(€€€€€€€€€€€€€¥˜€¡¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´¹Á±…å½ÕÐ¹•¹€´¥¹Ñ•ÉÍÑ¥Ñ¥…±%Ñ•´¹Á±…å½ÕÐ¹ÍÑ…ÉÐì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð…ÍÍ•ÑA±…å•ÉÌ ¤ì(€€€€€€€€€€€€€Ù…È}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„ì(€€€€€€€€€€€€€Ù…È…ÍÍ•Ñ1¥ÍÐ€ô€¡}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„€ô•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤¤€ôô¹Õ±°€üÙ½¥€À€è}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„¹•Ù•¹Ð¹…ÍÍ•Ñ1¥ÍÐì(€€€€€€€€€€€€€¥˜€¡…ÍÍ•Ñ1¥ÍÐ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸…ÍÍ•Ñ1¥ÍÐ¹µ…À¡™Õ¹Ñ¥½¸€¡…ÍÍ•Ð¤ì(€€€€€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹•ÑÍÍ•ÑA±…å•È¡…ÍÍ•Ð¹¥‘•¹Ñ¥™¥•È¤ì(€€€€€€€€€€€€€€€ô¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸mtì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÁ±…å¥¹%¹‘•à ¤ì(€€€€€€€€€€€€€Ù…È}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„Èì(€€€€€€€€€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…°€ô€¡}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„È€ô•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤¤€ôô¹Õ±°€üÙ½¥€À€è}•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥„È¹•Ù•¹Ðì(€€€€€€€€€€€€€¥˜€¡¥¹Ñ•ÉÍÑ¥Ñ¥…°€˜˜Œ¹•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ð¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸¥¹Ñ•ÉÍÑ¥Ñ¥…°¹™¥¹‘ÍÍ•Ñ%¹‘•à¡Œ¹•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ð¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸€´Äì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÍ¡•‘Õ±•%Ñ•´ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤ì(€€€€€€€€€€€ô(€€€€€€€€€ôì(€€€€€€€€€Ñ¡¥Ì¹µ…¹…•È€ôì(€€€€€€€€€€€•Ð•Ù•¹ÑÌ ¤ì(€€€€€€€€€€€€€Ù…È}Œ‘Í¡•‘Õ±”°}Œ‘Í¡•‘Õ±”‘•Ù•¹ÑÌì(€€€€€€€€€€€€€É•ÑÕÉ¸€ ¡}Œ‘Í¡•‘Õ±”€ôŒ¹Í¡•‘Õ±”¤€ôô¹Õ±°€üÙ½¥€À€è€¡}Œ‘Í¡•‘Õ±”‘•Ù•¹ÑÌ€ô}Œ‘Í¡•‘Õ±”¹•Ù•¹ÑÌ¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘Í¡•‘Õ±”‘•Ù•¹ÑÌ¹Í±¥” À¤¤ñðmtì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÍ¡•‘Õ±” ¤ì(€€€€€€€€€€€€€Ù…È}Œ‘Í¡•‘Õ±”È°}Œ‘Í¡•‘Õ±”È‘¥Ñ•µÌì(€€€€€€€€€€€€€É•ÑÕÉ¸€ ¡}Œ‘Í¡•‘Õ±”È€ôŒ¹Í¡•‘Õ±”¤€ôô¹Õ±°€üÙ½¥€À€è€¡}Œ‘Í¡•‘Õ±”È‘¥Ñ•µÌ€ô}Œ‘Í¡•‘Õ±”È¹¥Ñ•µÌ¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘Í¡•‘Õ±”È‘¥Ñ•µÌ¹Í±¥” À¤¤ñðmtì(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð¥¹Ñ•ÉÍÑ¥Ñ¥…±A±…å•È ¤ì(€€€€€€€€€€€€€¥˜€¡•ÑÑ¥Ù•%¹Ñ•ÉÍÑ¥Ñ¥…° ¤¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸¥¹Ñ•ÉÍÑ¥Ñ¥…±A±…å•Èì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÁ±…å•ÉEÕ•Õ” ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹Á±…å•ÉEÕ•Õ”¹Í±¥” À¤ì(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð‰Õ™™•É¥¹ÍÍ•Ð ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹‰Õ™™•É¥¹ÍÍ•Ðì(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð‰Õ™™•É¥¹%Ñ•´ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´ ¤ì(€€€€€€€€€€€ô°(€€€€€€€€€€€•Ð‰Õ™™•É¥¹%¹‘•à ¤ì(€€€€€€€€€€€€€Ù…È¥Ñ•´€ô•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹™¥¹‘%Ñ•µ%¹‘•à¡¥Ñ•´¤ì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÁ±…å¥¹ÍÍ•Ð ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ðì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÁ±…å¥¹%Ñ•´ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€ô°(€€€€€€€€€€€•ÐÁ±…å¥¹%¹‘•à ¤ì(€€€€€€€€€€€€€Ù…È¥Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€€€É•ÑÕÉ¸Œ¹™¥¹‘%Ñ•µ%¹‘•à¡¥Ñ•´¤ì(€€€€€€€€€€€ô°(€€€€€€€€€€€ÁÉ¥µ…Éäèì(€€€€€€€€€€€€€•Ð‰Õ™™•É•‘¹ ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ	Õ™™•É•‘¹ ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•ÐÕÉÉ•¹ÑQ¥µ” ¤ì(€€€€€€€€€€€€€€€Ù…ÈÑ¥µ•±¥¹•A½Ì€ôŒ¹Ñ¥µ•±¥¹•A½Ìì(€€€€€€€€€€€€€€€É•ÑÕÉ¸Ñ¥µ•±¥¹•A½Ì€ø€À€üÑ¥µ•±¥¹•A½Ì€è€Àì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€Í•ÐÕÉÉ•¹ÑQ¥µ”¡Ñ¥µ”¤ì(€€€€€€€€€€€€€€€Í••­Q¼¡Ñ¥µ”°€ÁÉ¥µ…Éäœ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•Ð‘ÕÉ…Ñ¥½¸ ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘ÕÉ…Ñ¥½¸ ÁÉ¥µ…Éäœ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•ÐÍ••­…‰±•MÑ…ÉÐ ¤ì(€€€€€€€€€€€€€€€Ù…È}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÈì(€€€€€€€€€€€€€€€É•ÑÕÉ¸€ ¡}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÈ€ôŒ¹ÁÉ¥µ…Éå•Ñ…¥±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÈ¹™É…µ•¹ÑMÑ…ÉÐ¤ñð€Àì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô°(€€€€€€€€€€€¥¹Ñ•É…Ñ•èì(€€€€€€€€€€€€€•Ð‰Õ™™•É•‘¹ ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘Q¥µ”¡•™™•Ñ¥Ù•	Õ™™•É¥¹%Ñ•´ ¤°€¥¹Ñ•É…Ñ•œ°Œ¹‰Õ™™•É¥¹ÍÍ•Ð°€‰Õ™™•É•‘A½Ìœ°€‰Õ™™•É•‘¹œ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•ÐÕÉÉ•¹ÑQ¥µ” ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘Q¥µ”¡Œ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´°€¥¹Ñ•É…Ñ•œ°Œ¹•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ð°€Ñ¥µ•±¥¹•A½Ìœ°€ÕÉÉ•¹ÑQ¥µ”œ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€Í•ÐÕÉÉ•¹ÑQ¥µ”¡Ñ¥µ”¤ì(€€€€€€€€€€€€€€€Í••­Q¼¡Ñ¥µ”°€¥¹Ñ•É…Ñ•œ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•Ð‘ÕÉ…Ñ¥½¸ ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸•Ñ5…ÁÁ•‘ÕÉ…Ñ¥½¸ ¥¹Ñ•É…Ñ•œ¤ì(€€€€€€€€€€€€€ô°(€€€€€€€€€€€€€•ÐÍ••­…‰±•MÑ…ÉÐ ¤ì(€€€€€€€€€€€€€€€Ù…È}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÌì(€€€€€€€€€€€€€€€É•ÑÕÉ¸™¥¹‘5…ÁÁ•‘Q¥µ”  ¡}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÌ€ôŒ¹ÁÉ¥µ…Éå•Ñ…¥±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Œ‘ÁÉ¥µ…Éå•Ñ…¥±ÌÌ¹™É…µ•¹ÑMÑ…ÉÐ¤ñð€À°€¥¹Ñ•É…Ñ•œ¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô°(€€€€€€€€€€€Í­¥Àè™Õ¹Ñ¥½¸Í­¥À ¤ì(€€€€€€€€€€€€€Ù…È¥Ñ•´€ôŒ¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ì(€€€€€€€€€€€€€Ù…È•Ù•¹Ð€ô¥Ñ•´€ôô¹Õ±°€üÙ½¥€À€è¥Ñ•´¹•Ù•¹Ðì(€€€€€€€€€€€€€¥˜€¡•Ù•¹Ð€˜˜€…•Ù•¹Ð¹É•ÍÑÉ¥Ñ¥½¹Ì¹Í­¥À¤ì(€€€€€€€€€€€€€€€Ù…È¥¹‘•à€ôŒ¹™¥¹‘%Ñ•µ%¹‘•à¡¥Ñ•´¤ì(€€€€€€€€€€€€€€€¥˜€¡•Ù•¹Ð¹…ÁÁ•¹‘%¹A±…”¤ì(€€€€€€€€€€€€€€€€€Ù…ÈÑ¥µ”€ô¥Ñ•´¹Á±…å½ÕÐ¹ÍÑ…ÉÐ€¬¥Ñ•´¹•Ù•¹Ð¹‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€€€€€€€€€Í••­Q¼¡Ñ¥µ”€¬€À¸ÀÀÄ°€Á±…å½ÕÐœ¤ì(€€€€€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€€€€€Œ¹…‘Ù…¹•™Ñ•ÉÍÍ•Ñ¹‘•¡•Ù•¹Ð°¥¹‘•à°%¹™¥¹¥Ñä¤ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ôì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹µ…¹…•Èì(€€€€€ô((€€€€€€¼¼M¡•‘Õ±”•ÑÑ•ÉÌ(€€€ô°ì(€€€€€­•äè€‰•™™•Ñ¥Ù•A±…å¥¹%Ñ•´ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹Ý…¥Ñ¥¹%Ñ•´ñðÑ¡¥Ì¹Á±…å¥¹%Ñ•´ñðÑ¡¥Ì¹•¹‘•‘%Ñ•´ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰•™™•Ñ¥Ù•A±…å¥¹ÍÍ•Ðˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹Á±…å¥¹ÍÍ•ÐñðÑ¡¥Ì¹•¹‘•‘ÍÍ•Ðì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Á±…å¥¹1…ÍÑ%Ñ•´ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘Í¡•‘Õ±”ì(€€€€€€€Ù…ÈÁ±…å¥¹%Ñ•´€ôÑ¡¥Ì¹Á±…å¥¹%Ñ•´ì(€€€€€€€Ù…È¥Ñ•µÌ€ô€¡}Ñ¡¥Ì‘Í¡•‘Õ±”€ôÑ¡¥Ì¹Í¡•‘Õ±”¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘Í¡•‘Õ±”¹¥Ñ•µÌì(€€€€€€€¥˜€ …Ñ¡¥Ì¹Á±…å‰…­MÑ…ÉÑ•ñð€…Á±…å¥¹%Ñ•´ñð€…¥Ñ•µÌ¤ì(€€€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™¥¹‘%Ñ•µ%¹‘•à¡Á±…å¥¹%Ñ•´¤€ôôô¥Ñ•µÌ¹±•¹Ñ €´€Äì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Á±…å‰…­MÑ…ÉÑ•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•™™•Ñ¥Ù•A±…å¥¹%Ñ•´€„ôô¹Õ±°ì(€€€€€ô((€€€€€€¼¼5•‘¥„•ÑÑ•ÉÌ…¹•Ù•¹Ð…±±‰…­Ì(€€€ô°ì(€€€€€­•äè€‰ÕÉÉ•¹ÑQ¥µ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È°}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È°}µ•‘¥„Ìì(€€€€€€€¥˜€¡Ñ¡¥Ì¹µ•‘¥…M•±•Ñ¥½¸€ôôô¹Õ±°¤ì(€€€€€€€€€€¼¼¼¹½Ð…‘Ù…¹”‰•™½É”Í¡•‘Õ±”¥Ì­¹½Ý¸(€€€€€€€€€É•ÑÕÉ¸Õ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€€€€¼¼%¹½É”ÕÉÉ•¹ÑQ¥µ”Ý¡•¸‘•Ñ…¡•™½È%¹Ñ•ÉÍÑ¥Ñ¥…°Á±…å‰…¬Ý¥Ñ Í½ÕÉ”É•Í•Ð(€€€€€€€Ù…ÈÅÕ•Õ•‘½ÉA±…å‰…¬€ôÑ¡¥Ì¹Ý…¥Ñ¥¹%Ñ•´ñðÑ¡¥Ì¹Á±…å¥¹%Ñ•´ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹¥Í%¹Ñ•ÉÍÑ¥Ñ¥…°¡ÅÕ•Õ•‘½ÉA±…å‰…¬¤€˜˜€…ÅÕ•Õ•‘½ÉA±…å‰…¬¹•Ù•¹Ð¹…ÁÁ•¹‘%¹A±…”¤ì(€€€€€€€€€É•ÑÕÉ¸Õ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€¥˜€ …µ•‘¥„€˜˜€¡}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È€ôÑ¡¥Ì¹‰Õ™™•É¥¹%Ñ•´¤€„ô¹Õ±°€˜˜€¡}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È€ô}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È¹•Ù•¹Ð¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘‰Õ™™•É¥¹%Ñ•´È¹…ÁÁ•¹‘%¹A±…”¤ì(€€€€€€€€€€¼¼=‰Í•ÉÙ”‘•Ñ…¡•µ•‘¥„ÕÉÉ•¹ÑQ¥µ”Ý¡•¸…ÁÁ•¹‘¥¹œ¥¸Á±…”(€€€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹ÁÉ¥µ…Éå5•‘¥„ì(€€€€€€€ô(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ô€¡}µ•‘¥„Ì€ôµ•‘¥„¤€ôô¹Õ±°€üÙ½¥€À€è}µ•‘¥„Ì¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€¥˜€¡ÕÉÉ•¹ÑQ¥µ”€ôôôÕ¹‘•™¥¹•ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€É•ÑÕÉ¸Õ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ÕÉÉ•¹ÑQ¥µ”ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÁÉ¥µ…Éå5•‘¥„ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘‘•Ñ…¡•‘…Ñ„Ôì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹µ•‘¥„ñð€ ¡}Ñ¡¥Ì‘‘•Ñ…¡•‘…Ñ„Ô€ôÑ¡¥Ì¹‘•Ñ…¡•‘…Ñ„¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘‘•Ñ…¡•‘…Ñ„Ô¹µ•‘¥„¤ñð¹Õ±°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Á±…å‰…­¥Í…‰±•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹•¹…‰±•%¹Ñ•ÉÍÑ¥Ñ¥…±A±…å‰…¬€ôôô™…±Í”ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÁÉ¥µ…Éå•Ñ…¥±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸°}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸ì(€€€€€€€É•ÑÕÉ¸€¡}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸€ôÑ¡¥Ì¹µ•‘¥…M•±•Ñ¥½¸¤€ôô¹Õ±°€üÙ½¥€À€è€¡}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸€ô}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸¹µ…¥¸¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘µ•‘¥…M•±•Ñ¥½¸¹‘•Ñ…¥±Ìì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÁÉ¥µ…Éå1¥Ù”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘ÁÉ¥µ…Éå•Ñ…¥±Ìì(€€€€€€€É•ÑÕÉ¸€„„ ¡}Ñ¡¥Ì‘ÁÉ¥µ…Éå•Ñ…¥±Ì€ôÑ¡¥Ì¹ÁÉ¥µ…Éå•Ñ…¥±Ì¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘ÁÉ¥µ…Éå•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€ô(€€€õt¤ì(€ô¡1½•È¤ì((€Ù…ÈQ%-}%9QIY0È€ô€ÔÀÀì€¼¼¡½Ü½™Ñ•¸Ñ¼Ñ¥¬¥¸µÌ((€Ù…ÈMÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€™Õ¹Ñ¥½¸MÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È¡¡±Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È¤ì(€€€€€Ù…È}Ñ¡¥Ìì(€€€€€}Ñ¡¥Ì€ô}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹…±°¡Ñ¡¥Ì°¡±Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È°€ÍÕ‰Ñ¥Ñ±”µÍÑÉ•…´µ½¹ÑÉ½±±•Èœ°A±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%€ô€´Äì(€€€€€}Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•€ômtì(€€€€€}Ñ¡¥Ì¹µ…¥¹•Ñ…¥±Ì€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€É•ÑÕÉ¸}Ñ¡¥Ìì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡MÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È°}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€Ù…È}ÁÉ½Ñ¼€ôMÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹½¹!…¹‘±•É•ÍÑÉ½å¥¹œ€ô™Õ¹Ñ¥½¸½¹!…¹‘±•É•ÍÑÉ½å¥¹œ ¤ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹!…¹‘±•É•ÍÑÉ½å¥¹œ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ñ¡¥Ì¹µ…¥¹•Ñ…¥±Ì€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}UAQ°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}M]%Q °Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­MÝ¥Ñ °Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•É…AÉ½•ÍÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}UAQ°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}M]%Q °Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­MÝ¥Ñ °Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•É…AÉ½•ÍÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÑ…ÉÑ1½…€ô™Õ¹Ñ¥½¸ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸°Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€Ñ¡¥Ì¹ÍÑ½Á1½… ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÙ…°¡Q%-}%9QIY0È¤ì(€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ôÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”€ôÍÑ…ÉÑA½Í¥Ñ¥½¸€¬Ñ¡¥Ì¹Ñ¥µ•±¥¹•=™™Í•Ðì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑA½Í¥Ñ¥½¸€ôÍ­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸€ü€´Ä€èÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ñ¡¥Ì¹µ…¥¹•Ñ…¥±Ì€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•€ômtì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹5•‘¥…•Ñ…¡¥¹œ¹…±°¡Ñ¡¥Ì°•Ù•¹Ð°‘…Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘•€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹µ…¥¹•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ìì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•É…AÉ½•ÍÍ•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•É…AÉ½•ÍÍ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€ÍÕ•ÍÌ€ô‘…Ñ„¹ÍÕ•ÍÌì(€€€€€¥˜€¡¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤¤ì(€€€€€€€Ñ¡¥Ì¹™É…AÉ•Ù¥½ÕÌ€ô™É…œì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€¥˜€ …ÍÕ•ÍÌ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È‰Õ™™•É•€ôÑ¡¥Ì¹ÑÉ…­Í	Õ™™•É•‘mÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%‘tì(€€€€€¥˜€ …‰Õ™™•É•¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼É•…Ñ”½ÕÁ‘…Ñ”„‰Õ™™•É•…ÉÉ…äµ…Ñ¡¥¹œÑ¡”¥¹Ñ•É™…”ÕÍ•‰ä	Õ™™•É!•±Á•È¹‰Õ™™•É•‘%¹™¼(€€€€€€¼¼Í¼Ý”…¸É”µÕÍ”Ñ¡”±½¥ŒÕÍ•Ñ¼‘•Ñ•Ð¡½ÜµÕ ¡…Ì‰••¸‰Õ™™•É•(€€€€€Ù…ÈÑ¥µ•I…¹”ì(€€€€€Ù…È™É…MÑ…ÉÐ€ô™É…œ¹ÍÑ…ÉÐì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð‰Õ™™•É•¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€¥˜€¡™É…MÑ…ÉÐ€øô‰Õ™™•É•‘m¥t¹ÍÑ…ÉÐ€˜˜™É…MÑ…ÉÐ€ðô‰Õ™™•É•‘m¥t¹•¹¤ì(€€€€€€€€€Ñ¥µ•I…¹”€ô‰Õ™™•É•‘m¥tì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€€€Ù…È™É…¹€ô™É…œ¹ÍÑ…ÉÐ€¬™É…œ¹‘ÕÉ…Ñ¥½¸ì(€€€€€¥˜€¡Ñ¥µ•I…¹”¤ì(€€€€€€€Ñ¥µ•I…¹”¹•¹€ô™É…¹ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¥µ•I…¹”€ôì(€€€€€€€€€ÍÑ…ÉÐè™É…MÑ…ÉÐ°(€€€€€€€€€•¹è™É…¹(€€€€€€€ôì(€€€€€€€‰Õ™™•É•¹ÁÕÍ ¡Ñ¥µ•I…¹”¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹™É…	Õ™™•É•¡™É…œ¤ì(€€€€€Ñ¡¥Ì¹™É…	Õ™™•É•‘½µÁ±•Ñ”¡™É…œ°¹Õ±°¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•É±ÕÍ¡¥¹œ€ô™Õ¹Ñ¥½¸½¹	Õ™™•É±ÕÍ¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…ÈÍÑ…ÉÑ=™™Í•Ð€ô‘…Ñ„¹ÍÑ…ÉÑ=™™Í•Ð°(€€€€€€€•¹‘=™™Í•Ð€ô‘…Ñ„¹•¹‘=™™Í•Ðì(€€€€€¥˜€¡ÍÑ…ÉÑ=™™Í•Ð€ôôô€À€˜˜•¹‘=™™Í•Ð€„ôô9Õµ‰•È¹A=M%Q%Y}%9%9%Qd¤ì(€€€€€€€Ù…È•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì€ô•¹‘=™™Í•Ð€´€Äì(€€€€€€€¥˜€¡•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì€ðô€À¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€‘…Ñ„¹•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì€ô5…Ñ ¹µ…à À°•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì¤ì(€€€€€€€Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•¹™½É… ¡™Õ¹Ñ¥½¸€¡‰Õ™™•É•¤ì(€€€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð‰Õ™™•É•¹±•¹Ñ ì¤ì(€€€€€€€€€€€¥˜€¡‰Õ™™•É•‘m¥t¹•¹€ðô•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì¤ì(€€€€€€€€€€€€€‰Õ™™•É•¹Í¡¥™Ð ¤ì(€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€ô•±Í”¥˜€¡‰Õ™™•É•‘m¥t¹ÍÑ…ÉÐ€ð•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì¤ì(€€€€€€€€€€€€€‰Õ™™•É•‘m¥t¹ÍÑ…ÉÐ€ô•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ìì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€ô(€€€€€€€€€€€¤¬¬ì(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹ÑÍ%¹I…¹”¡ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì°A±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ì(€€€€€ô(€€€ô((€€€€¼¼%˜Í½µ•Ñ¡¥¹œ½•ÌÝÉ½¹œ°ÁÉ½••Ñ¼¹•áÐ™É…œ°¥˜Ý”Ý•É”ÁÉ½•ÍÍ¥¹œ½¹”¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œì(€€€€€¥˜€ ¡™É…œ€ôô¹Õ±°€üÙ½¥€À€è™É…œ¹ÑåÁ”¤€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ì(€€€€€€€¥˜€¡‘…Ñ„¹‘•Ñ…¥±Ì€ôôôÉÉ½É•Ñ…¥±Ì¹I}@¤ì(€€€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹™É…	Õ™™•É•¡™É…œ°ÑÉÕ”¤ì(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð¤ì(€€€€€€€€€Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð¹…‰½ÉÑI•ÅÕ•ÍÑÌ ¤ì(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€„ôôMÑ…Ñ”¹MQ=AA¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€ô(€€€€€ô(€€€ô((€€€€¼¼½Ð…±°¹•ÜÍÕ‰Ñ¥Ñ±”±•Ù•±Ì¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•¡•Ù•¹Ð°}É•˜¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­Ì€ô}É•˜¹ÍÕ‰Ñ¥Ñ±•QÉ…­Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹±•Ù•±Ì€˜˜ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¹Í%‘•¹Ñ¥…°¡Ñ¡¥Ì¹±•Ù•±Ì°ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¤¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±Ì€ôÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹µ…À¡™Õ¹Ñ¥½¸€¡µ•‘¥…A±…å±¥ÍÐ¤ì(€€€€€€€€€É•ÑÕÉ¸¹•Ü1•Ù•°¡µ•‘¥…A±…å±¥ÍÐ¤ì(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•€ômtì(€€€€€Ñ¡¥Ì¹±•Ù•±Ì€ôÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹µ…À¡™Õ¹Ñ¥½¸€¡µ•‘¥…A±…å±¥ÍÐ¤ì(€€€€€€€Ù…È±•Ù•°€ô¹•Ü1•Ù•°¡µ•‘¥…A±…å±¥ÍÐ¤ì(€€€€€€€}Ñ¡¥ÌÈ¹ÑÉ…­Í	Õ™™•É•‘m±•Ù•°¹¥‘t€ômtì(€€€€€€€É•ÑÕÉ¸±•Ù•°ì(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹ÑÍ%¹I…¹” À°9Õµ‰•È¹A=M%Q%Y}%9%9%Qd°A±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ì(€€€€€Ñ¡¥Ì¹™É…AÉ•Ù¥½ÕÌ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­MÝ¥Ñ €ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­MÝ¥Ñ ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥Ì‘±•Ù•±Ìì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%€ô‘…Ñ„¹¥ì(€€€€€¥˜€ „ ¡}Ñ¡¥Ì‘±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘±•Ù•±Ì¹±•¹Ñ ¤ñðÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%€ôôô€´Ä¤ì(€€€€€€€Ñ¡¥Ì¹±•…É%¹Ñ•ÉÙ…° ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼¡•¬¥˜ÑÉ…¬¡…ÌÑ¡”¹••ÍÍ…Éä‘•Ñ…¥±ÌÑ¼±½…™É…µ•¹ÑÌ(€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹±•Ù•±ÍmÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%‘tì(€€€€€¥˜€¡ÕÉÉ•¹ÑQÉ…¬€„ô¹Õ±°€˜˜ÕÉÉ•¹ÑQÉ…¬¹‘•Ñ…¥±Ì¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôÑ¡¥Ì¹µ•‘¥…	Õ™™•ÉQ¥µ•I…¹•Ìì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ô¹Õ±°ì(€€€€€ô(€€€€€¥˜€¡ÕÉÉ•¹ÑQÉ…¬€˜˜Ñ¡¥Ì¹ÍÑ…Ñ”€„ôôMÑ…Ñ”¹MQ=AA¤ì(€€€€€€€Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÙ…°¡Q%-}%9QIY0È¤ì(€€€€€ô(€€€ô((€€€€¼¼½Ð„¹•ÜÍ•Ð½˜ÍÕ‰Ñ¥Ñ±”™É…µ•¹ÑÌ¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}ÑÉ…¬‘‘•Ñ…¥±Ìì(€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…­%€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%°(€€€€€€€±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ìì(€€€€€Ù…È¹•Ý•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ì°(€€€€€€€ÑÉ…­%€ô‘…Ñ„¹¥ì(€€€€€¥˜€ …±•Ù•±Ì¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰MÕ‰Ñ¥Ñ±”ÑÉ…­ÌÝ•É”É•Í•ÐÝ¡¥±”±½…‘¥¹œ±•Ù•°€ˆ€¬ÑÉ…­%¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑÉ…¬€ô±•Ù•±ÍmÑÉ…­%‘tì(€€€€€¥˜€¡ÑÉ…­%€øô±•Ù•±Ì¹±•¹Ñ ñð€…ÑÉ…¬¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½œ ‰MÕ‰Ñ¥Ñ±”ÑÉ…¬€ˆ€¬ÑÉ…­%€¬€ˆ±½…‘•lˆ€¬¹•Ý•Ñ…¥±Ì¹ÍÑ…ÉÑM8€¬€ˆ°ˆ€¬¹•Ý•Ñ…¥±Ì¹•¹‘M8€¬€‰tˆ€¬€¡¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑM¸€ü€‰mÁ…ÉÐ´ˆ€¬¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑM¸€¬€ˆ´ˆ€¬¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑ%¹‘•à€¬€‰tˆ€è€œœ¤€¬€ˆ±‘ÕÉ…Ñ¥½¸èˆ€¬¹•Ý•Ñ…¥±Ì¹Ñ½Ñ…±‘ÕÉ…Ñ¥½¸¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôÑ¡¥Ì¹µ•‘¥…	Õ™™•ÉQ¥µ•I…¹•Ìì(€€€€€Ù…ÈÍ±¥‘¥¹œ€ô€Àì(€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹±¥Ù”ñð€¡}ÑÉ…¬‘‘•Ñ…¥±Ì€ôÑÉ…¬¹‘•Ñ…¥±Ì¤€„ô¹Õ±°€˜˜}ÑÉ…¬‘‘•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€Ù…Èµ…¥¹•Ñ…¥±Ì€ôÑ¡¥Ì¹µ…¥¹•Ñ…¥±Ìì(€€€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹‘•±Ñ…UÁ‘…Ñ•…¥±•ñð€…µ…¥¹•Ñ…¥±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…Èµ…¥¹M±¥‘¥¹MÑ…ÉÑÉ…µ•¹Ð€ôµ…¥¹•Ñ…¥±Ì¹™É…µ•¹ÑÍlÁtì(€€€€€€€¥˜€ …ÑÉ…¬¹‘•Ñ…¥±Ì¤ì(€€€€€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹¡…ÍAÉ½É…µ…Ñ•Q¥µ”€˜˜µ…¥¹•Ñ…¥±Ì¹¡…ÍAÉ½É…µ…Ñ•Q¥µ”¤ì(€€€€€€€€€€€…±¥¹5•‘¥…A±…å±¥ÍÑ	åAP¡¹•Ý•Ñ…¥±Ì°µ…¥¹•Ñ…¥±Ì¤ì(€€€€€€€€€€€Í±¥‘¥¹œ€ô¹•Ý•Ñ…¥±Ì¹™É…µ•¹ÑMÑ…ÉÐì(€€€€€€€€€ô•±Í”¥˜€¡µ…¥¹M±¥‘¥¹MÑ…ÉÑÉ…µ•¹Ð¤ì(€€€€€€€€€€€€¼¼±¥¹”ÕÀ±¥Ù”Á±…å±¥ÍÐÝ¥Ñ µ…¥¸Í¼Ñ¡…Ð™É…µ•¹ÑÌ¥¸É…¹”…É”±½…‘•(€€€€€€€€€€€Í±¥‘¥¹œ€ôµ…¥¹M±¥‘¥¹MÑ…ÉÑÉ…µ•¹Ð¹ÍÑ…ÉÐì(€€€€€€€€€€€…‘‘M±¥‘¥¹œ¡¹•Ý•Ñ…¥±Ì°Í±¥‘¥¹œ¤ì(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€Ù…È}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•ì(€€€€€€€€€Í±¥‘¥¹œ€ôÑ¡¥Ì¹…±¥¹A±…å±¥ÍÑÌ¡¹•Ý•Ñ…¥±Ì°ÑÉ…¬¹‘•Ñ…¥±Ì°€¡}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•€ôÑ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•¹‘•Ñ…¥±Ì¤ì(€€€€€€€€€¥˜€¡Í±¥‘¥¹œ€ôôô€À€˜˜µ…¥¹M±¥‘¥¹MÑ…ÉÑÉ…µ•¹Ð¤ì(€€€€€€€€€€€€¼¼É•…±¥¸Ý¥Ñ µ…¥¸Ý¡•¸Ñ¡•É”¥Ì¹¼½Ù•É±…ÀÝ¥Ñ ±…ÍÐÉ•™É•Í (€€€€€€€€€€€Í±¥‘¥¹œ€ôµ…¥¹M±¥‘¥¹MÑ…ÉÑÉ…µ•¹Ð¹ÍÑ…ÉÐì(€€€€€€€€€€€…‘‘M±¥‘¥¹œ¡¹•Ý•Ñ…¥±Ì°Í±¥‘¥¹œ¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€ÑÉ…¬¹‘•Ñ…¥±Ì€ô¹•Ý•Ñ…¥±Ìì(€€€€€Ñ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•€ôÑÉ…¬ì(€€€€€¥˜€¡ÑÉ…­%€„ôôÕÉÉ•¹ÑQÉ…­%¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}UAQ°ì(€€€€€€€‘•Ñ…¥±Ìè¹•Ý•Ñ…¥±Ì°(€€€€€€€¥èÑÉ…­%°(€€€€€€€É½ÕÁ%è‘…Ñ„¹É½ÕÁ%(€€€€€ô¤ì((€€€€€€¼¼ÑÉ¥•È¡…¹‘±•ÈÉ¥¡Ð¹½Ü(€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì((€€€€€€¼¼%˜Á±…å±¥ÍÐ¥Ìµ¥Í…±¥¹•‰•…ÕÍ”½˜‰…AP½È‘É¥™Ð°‘•±•Ñ”‘•Ñ…¥±ÌÑ¼É•Íå¹ŒÝ¥Ñ µ…¥¸½¸É•±½…(€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹±¥Ù”€˜˜€…Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð€˜˜Ñ¡¥Ì¹µ•‘¥„€˜˜Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹%1¤ì(€€€€€€€Ù…È™½Õ¹‘É…œ€ô™¥¹‘É…µ•¹Ñ	åAQL¡¹Õ±°°¹•Ý•Ñ…¥±Ì¹™É…µ•¹ÑÌ°Ñ¡¥Ì¹µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”°€À¤ì(€€€€€€€¥˜€ …™½Õ¹‘É…œ¤ì(€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ MÕ‰Ñ¥Ñ±”Á±…å±¥ÍÐ¹½Ð…±¥¹•Ý¥Ñ Á±…å‰…¬œ¤ì(€€€€€€€€€ÑÉ…¬¹‘•Ñ…¥±Ì€ôÕ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}¡…¹‘±•É…µ•¹Ñ1½…‘½µÁ±•Ñ”€ô™Õ¹Ñ¥½¸}¡…¹‘±•É…µ•¹Ñ1½…‘½µÁ±•Ñ”¡™É…1½…‘•‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€Ù…È™É…œ€ô™É…1½…‘•‘…Ñ„¹™É…œ°(€€€€€€€Á…å±½…€ô™É…1½…‘•‘…Ñ„¹Á…å±½…ì(€€€€€Ù…È‘•ÉåÁÑ…Ñ„€ô™É…œ¹‘•ÉåÁÑ‘…Ñ„ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹™É…½¹Ñ•áÑ¡…¹•¡™É…œ¤¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€€¼¼¡•¬Ñ¼Í•”¥˜Ñ¡”Á…å±½…¹••‘ÌÑ¼‰”‘•ÉåÁÑ•(€€€€€¥˜€¡Á…å±½…€˜˜Á…å±½…¹‰åÑ•1•¹Ñ €ø€À€˜˜‘•ÉåÁÑ…Ñ„€„ô¹Õ±°€˜˜‘•ÉåÁÑ…Ñ„¹­•ä€˜˜‘•ÉåÁÑ…Ñ„¹¥Ø€˜˜¥ÍÕ±±M•µ•¹Ñ¹ÉåÁÑ¥½¸¡‘•ÉåÁÑ…Ñ„¹µ•Ñ¡½¤¤ì(€€€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€€¼¼‘•ÉåÁÐÑ¡”ÍÕ‰Ñ¥Ñ±•Ì(€€€€€€€Ñ¡¥Ì¹‘•ÉåÁÑ•È¹‘•ÉåÁÐ¡¹•ÜU¥¹ÐáÉÉ…ä¡Á…å±½…¤°‘•ÉåÁÑ…Ñ„¹­•ä¹‰Õ™™•È°‘•ÉåÁÑ…Ñ„¹¥Ø¹‰Õ™™•È°•Ñ•Í5½‘•É½µÕ±±M•µ•¹Ñ5•Ñ¡½¡‘•ÉåÁÑ…Ñ„¹µ•Ñ¡½¤¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÈ¤ì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹I}IeAQ}II=H°(€€€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€€€•ÉÉ½Èè•ÉÈ°(€€€€€€€€€€€É•…Í½¸è•ÉÈ¹µ•ÍÍ…”°(€€€€€€€€€€€™É…œè™É…œ(€€€€€€€€€ô¤ì(€€€€€€€€€Ñ¡É½Ü•ÉÈì(€€€€€€€ô¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡‘•ÉåÁÑ•‘…Ñ„¤ì(€€€€€€€€€Ù…È•¹‘Q¥µ”€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}IeAQ°ì(€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€Á…å±½…è‘•ÉåÁÑ•‘…Ñ„°(€€€€€€€€€€€ÍÑ…ÑÌèì(€€€€€€€€€€€€€ÑÍÑ…ÉÐèÍÑ…ÉÑQ¥µ”°(€€€€€€€€€€€€€Ñ‘•ÉåÁÐè•¹‘Q¥µ”(€€€€€€€€€€€ô(€€€€€€€€€ô¤ì(€€€€€€€ô¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÈ¤ì(€€€€€€€€€}Ñ¡¥ÌÌ¹Ý…É¸¡•ÉÈ¹¹…µ”€¬€ˆè€ˆ€¬•ÉÈ¹µ•ÍÍ…”¤ì(€€€€€€€€€}Ñ¡¥ÌÌ¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹‘½Q¥¬€ô™Õ¹Ñ¥½¸‘½Q¥¬ ¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹%1¤ì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…­%€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%°(€€€€€€€€€±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ìì(€€€€€€€Ù…ÈÑÉ…¬€ô±•Ù•±Ì€ôô¹Õ±°€üÙ½¥€À€è±•Ù•±ÍmÕÉÉ•¹ÑQÉ…­%‘tì(€€€€€€€¥˜€ …ÑÉ…¬ñð€…±•Ù•±Ì¹±•¹Ñ ñð€…ÑÉ…¬¹‘•Ñ…¥±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹Ý…¥Ñ½É1¥Ù”¡ÑÉ…¬¤¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôÑ¡¥Ì¹•Ñ1½…‘A½Í¥Ñ¥½¸ ¤ì(€€€€€€€Ù…È‰Õ™™•É•‘%¹™¼€ô	Õ™™•É!•±Á•È¹‰Õ™™•É•‘%¹™¼¡Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•‘mÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%‘tñðmt°ÕÉÉ•¹ÑQ¥µ”°½¹™¥œ¹µ…á	Õ™™•É!½±”¤ì(€€€€€€€Ù…ÈÑ…É•Ñ	Õ™™•ÉQ¥µ”€ô‰Õ™™•É•‘%¹™¼¹•¹°(€€€€€€€€€‰Õ™™•É1•¸€ô‰Õ™™•É•‘%¹™¼¹±•¸ì(€€€€€€€Ù…ÈÑÉ…­•Ñ…¥±Ì€ôÑÉ…¬¹‘•Ñ…¥±Ìì(€€€€€€€Ù…Èµ…á	Õ™1•¸€ôÑ¡¥Ì¹¡±Ì¹µ…á	Õ™™•É1•¹Ñ €¬ÑÉ…­•Ñ…¥±Ì¹±•Ù•±Q…É•ÑÕÉ…Ñ¥½¸ì(€€€€€€€¥˜€¡‰Õ™™•É1•¸€øµ…á	Õ™1•¸¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È™É…µ•¹ÑÌ€ôÑÉ…­•Ñ…¥±Ì¹™É…µ•¹ÑÌì(€€€€€€€Ù…È™É…1•¸€ô™É…µ•¹ÑÌ¹±•¹Ñ ì(€€€€€€€Ù…È•¹€ôÑÉ…­•Ñ…¥±Ì¹•‘”ì(€€€€€€€Ù…È™½Õ¹‘É…œ€ô¹Õ±°ì(€€€€€€€Ù…È™É…AÉ•Ù¥½ÕÌ€ôÑ¡¥Ì¹™É…AÉ•Ù¥½ÕÌì(€€€€€€€¥˜€¡Ñ…É•Ñ	Õ™™•ÉQ¥µ”€ð•¹¤ì(€€€€€€€€€Ù…ÈÑ½±•É…¹”€ô½¹™¥œ¹µ…áÉ…1½½­UÁQ½±•É…¹”ì(€€€€€€€€€Ù…È±½½­ÕÁQ½±•É…¹”€ôÑ…É•Ñ	Õ™™•ÉQ¥µ”€ø•¹€´Ñ½±•É…¹”€ü€À€èÑ½±•É…¹”ì(€€€€€€€€€™½Õ¹‘É…œ€ô™¥¹‘É…µ•¹Ñ	åAQL¡™É…AÉ•Ù¥½ÕÌ°™É…µ•¹ÑÌ°5…Ñ ¹µ…à¡™É…µ•¹ÑÍlÁt¹ÍÑ…ÉÐ°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤°±½½­ÕÁQ½±•É…¹”¤ì(€€€€€€€€€¥˜€ …™½Õ¹‘É…œ€˜˜™É…AÉ•Ù¥½ÕÌ€˜˜™É…AÉ•Ù¥½ÕÌ¹ÍÑ…ÉÐ€ð™É…µ•¹ÑÍlÁt¹ÍÑ…ÉÐ¤ì(€€€€€€€€€€€™½Õ¹‘É…œ€ô™É…µ•¹ÑÍlÁtì(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€™½Õ¹‘É…œ€ô™É…µ•¹ÑÍm™É…1•¸€´€Åtì(€€€€€€€ô(€€€€€€€™½Õ¹‘É…œ€ôÑ¡¥Ì¹™¥±Ñ•ÉI•Á±…•‘AÉ¥µ…Éä¡™½Õ¹‘É…œ°ÑÉ…¬¹‘•Ñ…¥±Ì¤ì(€€€€€€€¥˜€ …™½Õ¹‘É…œ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼1½…•…É±¥•È™É…µ•¹Ð¥¸Í…µ”‘¥Í½¹Ñ¥¹Õ¥ÑäÑ¼µ…­”ÕÀ™½Èµ¥Í…±¥¹•Á±…å±¥ÍÑÌ…¹Õ•ÌÑ¡…Ð•áÑ•¹‰•å½¹•¹½˜Í•µ•¹Ð(€€€€€€€Ù…ÈÕÉM9%‘à€ô™½Õ¹‘É…œ¹Í¸€´ÑÉ…­•Ñ…¥±Ì¹ÍÑ…ÉÑM8ì(€€€€€€€Ù…ÈÁÉ•ÙÉ…œ€ô™É…µ•¹ÑÍmÕÉM9%‘à€´€Åtì(€€€€€€€¥˜€¡ÁÉ•ÙÉ…œ€˜˜ÁÉ•ÙÉ…œ¹Œ€ôôô™½Õ¹‘É…œ¹Œ€˜˜Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•ÑMÑ…Ñ”¡ÁÉ•ÙÉ…œ¤€ôôôÉ…µ•¹ÑMÑ…Ñ”¹9=Q}1=¤ì(€€€€€€€€€™½Õ¹‘É…œ€ôÁÉ•ÙÉ…œì(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•ÑMÑ…Ñ”¡™½Õ¹‘É…œ¤€ôôôÉ…µ•¹ÑMÑ…Ñ”¹9=Q}1=¤ì(€€€€€€€€€€¼¼½¹±ä±½…¥˜™É…µ•¹Ð¥Ì¹½Ð±½…‘•(€€€€€€€€€Ù…È™É…Q½1½…€ôÑ¡¥Ì¹µ…ÁQ½%¹¥ÑÉ…]¡•¹I•ÅÕ¥É•¡™½Õ¹‘É…œ¤ì(€€€€€€€€€¥˜€¡™É…Q½1½…¤ì(€€€€€€€€€€€Ñ¡¥Ì¹±½…‘É…µ•¹Ð¡™É…Q½1½…°ÑÉ…¬°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘É…µ•¹Ð€ô™Õ¹Ñ¥½¸±½…‘É…µ•¹Ð¡™É…œ°±•Ù•°°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€€€¥˜€ …¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤¤ì(€€€€€€€Ñ¡¥Ì¹}±½…‘%¹¥ÑM•µ•¹Ð¡™É…œ°±•Ù•°¤ì(€€€€€ô•±Í”ì(€€€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹±½…‘É…µ•¹Ð¹…±°¡Ñ¡¥Ì°™É…œ°±•Ù•°°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡MÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰µ•‘¥…	Õ™™•ÉQ¥µ•I…¹•Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸¹•Ü	Õ™™•É…‰±•%¹ÍÑ…¹”¡Ñ¡¥Ì¹ÑÉ…­Í	Õ™™•É•‘mÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…­%‘tñðmt¤ì(€€€€€ô(€€€õt¤ì(€ô¡	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€Ù…È	Õ™™•É…‰±•%¹ÍÑ…¹”€ô™Õ¹Ñ¥½¸	Õ™™•É…‰±•%¹ÍÑ…¹”¡Ñ¥µ•É…¹•Ì¤ì(€€€Ñ¡¥Ì¹‰Õ™™•É•€ôÙ½¥€Àì(€€€Ù…È•ÑI…¹”€ô™Õ¹Ñ¥½¸•ÑI…¹”¡¹…µ”°¥¹‘•à°±•¹Ñ ¤ì(€€€€€¥¹‘•à€ô¥¹‘•à€øøø€Àì(€€€€€¥˜€¡¥¹‘•à€ø±•¹Ñ €´€Ä¤ì(€€€€€€€Ñ¡É½Ü¹•Ü=5á•ÁÑ¥½¸ ‰…¥±•Ñ¼•á•ÕÑ”€œˆ€¬¹…µ”€¬€ˆœ½¸€Q¥µ•I…¹•ÌœèQ¡”¥¹‘•àÁÉ½Ù¥‘•€ ˆ€¬¥¹‘•à€¬€ˆ¤¥ÌÉ•…Ñ•ÈÑ¡…¸Ñ¡”µ…á¥µÕ´‰½Õ¹€ ˆ€¬±•¹Ñ €¬€ˆ¤ˆ¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¥µ•É…¹•Ím¥¹‘•áum¹…µ•tì(€€€ôì(€€€Ñ¡¥Ì¹‰Õ™™•É•€ôì(€€€€€•Ð±•¹Ñ  ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¥µ•É…¹•Ì¹±•¹Ñ ì(€€€€€ô°(€€€€€•¹è™Õ¹Ñ¥½¸•¹¡¥¹‘•à¤ì(€€€€€€€É•ÑÕÉ¸•ÑI…¹” •¹œ°¥¹‘•à°Ñ¥µ•É…¹•Ì¹±•¹Ñ ¤ì(€€€€€ô°(€€€€€ÍÑ…ÉÐè™Õ¹Ñ¥½¸ÍÑ…ÉÐ¡¥¹‘•à¤ì(€€€€€€€É•ÑÕÉ¸•ÑI…¹” ÍÑ…ÉÐœ°¥¹‘•à°Ñ¥µ•É…¹•Ì¹±•¹Ñ ¤ì(€€€€€ô(€€€ôì(€ôì((€™Õ¹Ñ¥½¸Í•¹‘‘‘QÉ…­Ù•¹Ð¡ÑÉ…¬°Ù¥‘•½°¤ì(€€€Ù…È•Ù•¹Ðì(€€€ÑÉäì(€€€€€•Ù•¹Ð€ô¹•ÜÙ•¹Ð …‘‘ÑÉ…¬œ¤ì(€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€€¼¼™½È%ÄÄ(€€€€€•Ù•¹Ð€ô‘½Õµ•¹Ð¹É•…Ñ•Ù•¹Ð Ù•¹Ðœ¤ì(€€€€€•Ù•¹Ð¹¥¹¥ÑÙ•¹Ð …‘‘ÑÉ…¬œ°™…±Í”°™…±Í”¤ì(€€€ô(€€€•Ù•¹Ð¹ÑÉ…¬€ôÑÉ…¬ì(€€€Ù¥‘•½°¹‘¥ÍÁ…Ñ¡Ù•¹Ð¡•Ù•¹Ð¤ì(€ô(€™Õ¹Ñ¥½¸…‘‘Õ•Q½QÉ…¬¡ÑÉ…¬°Õ”¤ì(€€€€¼¼M½µ•Ñ¥µ•ÌÑ¡•É”…É”Õ”½Ù•É±…ÁÌ½¸Í•µ•¹Ñ•ÙÑÑÌÍ¼Ñ¡”Í…µ”(€€€€¼¼Õ”…¸…ÁÁ•…Èµ½É”Ñ¡…¸½¹”¥¸‘¥™™•É•¹ÐÙÑÐ™¥±•Ì¸(€€€€¼¼Q¡¥Ì…Ù½¥Í¡½Ý¥¹œ‘ÕÁ±¥…Ñ•Õ•ÌÝ¥Ñ Í…µ”Ñ¥µ•½‘”…¹Ñ•áÐ¸(€€€Ù…Èµ½‘”€ôÑÉ…¬¹µ½‘”ì(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ô€¡¥‘‘•¸œì(€€€ô(€€€¥˜€¡ÑÉ…¬¹Õ•Ì€˜˜€…ÑÉ…¬¹Õ•Ì¹•ÑÕ•	å%¡Õ”¹¥¤¤ì(€€€€€ÑÉäì(€€€€€€€ÑÉ…¬¹…‘‘Õ”¡Õ”¤ì(€€€€€€€¥˜€ …ÑÉ…¬¹Õ•Ì¹•ÑÕ•	å%¡Õ”¹¥¤¤ì(€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È ‰…‘‘Õ”¥Ì™…¥±•™½Èè€ˆ€¬Õ”¤ì(€€€€€€€ô(€€€€€ô…Ñ €¡•ÉÈ¤ì(€€€€€€€±½•È¹‘•‰Õœ ‰mÑ•áÑÑÉ…¬µÕÑ¥±Ítè€ˆ€¬•ÉÈ¤ì(€€€€€€€ÑÉäì(€€€€€€€€€Ù…ÈÑ•áÑQÉ…­Õ”€ô¹•ÜÍ•±˜¹Q•áÑQÉ…­Õ”¡Õ”¹ÍÑ…ÉÑQ¥µ”°Õ”¹•¹‘Q¥µ”°Õ”¹Ñ•áÐ¤ì(€€€€€€€€€Ñ•áÑQÉ…­Õ”¹¥€ôÕ”¹¥ì(€€€€€€€€€ÑÉ…¬¹…‘‘Õ”¡Ñ•áÑQÉ…­Õ”¤ì(€€€€€€€ô…Ñ €¡•ÉÈÈ¤ì(€€€€€€€€€±½•È¹‘•‰Õœ ‰mÑ•áÑÑÉ…¬µÕÑ¥±Ítè1•…äQ•áÑQÉ…­Õ”™…±±‰…¬™…¥±•è€ˆ€¬•ÉÈÈ¤ì(€€€€€€€ô(€€€€€ô(€€€ô(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ôµ½‘”ì(€€€ô(€ô(€™Õ¹Ñ¥½¸±•…ÉÕÉÉ•¹ÑÕ•Ì¡ÑÉ…¬°•¹Ñ•É!…¹‘±•È¤ì(€€€€¼¼]¡•¸ÑÉ…¬¹µ½‘”¥Ì‘¥Í…‰±•°ÑÉ…¬¹Õ•ÌÝ¥±°‰”¹Õ±°¸(€€€€¼¼Q¼Õ…É…¹Ñ•”Ñ¡”É•µ½Ù…°½˜Õ•Ì°Ý”¹••Ñ¼Ñ•µÁ½É…É¥±ä(€€€€¼¼¡…¹”Ñ¡”µ½‘”Ñ¼¡¥‘‘•¸(€€€Ù…Èµ½‘”€ôÑÉ…¬¹µ½‘”ì(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ô€¡¥‘‘•¸œì(€€€ô(€€€¥˜€¡ÑÉ…¬¹Õ•Ì¤ì(€€€€€™½È€¡Ù…È¤€ôÑÉ…¬¹Õ•Ì¹±•¹Ñ ì¤´´ì¤ì(€€€€€€€¥˜€¡•¹Ñ•É!…¹‘±•È¤ì(€€€€€€€€€ÑÉ…¬¹Õ•Ím¥t¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È •¹Ñ•Èœ°•¹Ñ•É!…¹‘±•È¤ì(€€€€€€€ô(€€€€€€€ÑÉ…¬¹É•µ½Ù•Õ”¡ÑÉ…¬¹Õ•Ím¥t¤ì(€€€€€ô(€€€ô(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ôµ½‘”ì(€€€ô(€ô(€™Õ¹Ñ¥½¸É•µ½Ù•Õ•Í%¹I…¹”¡ÑÉ…¬°ÍÑ…ÉÐ°•¹°ÁÉ•‘¥…Ñ”¤ì(€€€Ù…Èµ½‘”€ôÑÉ…¬¹µ½‘”ì(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ô€¡¥‘‘•¸œì(€€€ô(€€€¥˜€¡ÑÉ…¬¹Õ•Ì€˜˜ÑÉ…¬¹Õ•Ì¹±•¹Ñ €ø€À¤ì(€€€€€Ù…ÈÕ•Ì€ô•ÑÕ•Í%¹I…¹”¡ÑÉ…¬¹Õ•Ì°ÍÑ…ÉÐ°•¹¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÕ•Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€¥˜€ …ÁÉ•‘¥…Ñ”ñðÁÉ•‘¥…Ñ”¡Õ•Ím¥t¤¤ì(€€€€€€€€€ÑÉ…¬¹É•µ½Ù•Õ”¡Õ•Ím¥t¤ì(€€€€€€€ô(€€€€€ô(€€€ô(€€€¥˜€¡µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€ÑÉ…¬¹µ½‘”€ôµ½‘”ì(€€€ô(€ô((€€¼¼¥¹™¥ÉÍÐÕ”ÍÑ…ÉÑ¥¹œ…Ð½È…™Ñ•È¥Ù•¸Ñ¥µ”¸(€€¼¼5½‘¥™¥•Ù•ÉÍ¥½¸½˜‰¥¹…ÉäÍ•…É <¡±½œ¡¸¤¤¸(€™Õ¹Ñ¥½¸•Ñ¥ÉÍÑÕ•%¹‘•áÉ½µQ¥µ”¡Õ•Ì°Ñ¥µ”¤ì(€€€€¼¼%˜™¥ÉÍÐÕ”ÍÑ…ÉÑÌ…Ð½È…™Ñ•ÈÑ¥µ”°ÍÑ…ÉÐÑ¡•É”(€€€¥˜€¡Ñ¥µ”€ðôÕ•ÍlÁt¹ÍÑ…ÉÑQ¥µ”¤ì(€€€€€É•ÑÕÉ¸€Àì(€€€ô(€€€€¼¼%˜Ñ¡”±…ÍÐÕ”•¹‘Ì‰•™½É”Ñ¥µ”Ñ¡•É”¥Ì¹¼½Ù•É±…À(€€€Ù…È±•¸€ôÕ•Ì¹±•¹Ñ €´€Äì(€€€¥˜€¡Ñ¥µ”€øÕ•Ím±•¹t¹•¹‘Q¥µ”¤ì(€€€€€É•ÑÕÉ¸€´Äì(€€€ô(€€€Ù…È±•™Ð€ô€Àì(€€€Ù…ÈÉ¥¡Ð€ô±•¸ì(€€€Ù…Èµ¥ì(€€€Ý¡¥±”€¡±•™Ð€ðôÉ¥¡Ð¤ì(€€€€€µ¥€ô5…Ñ ¹™±½½È ¡É¥¡Ð€¬±•™Ð¤€¼€È¤ì(€€€€€¥˜€¡Ñ¥µ”€ðÕ•Ímµ¥‘t¹ÍÑ…ÉÑQ¥µ”¤ì(€€€€€€€É¥¡Ð€ôµ¥€´€Äì(€€€€€ô•±Í”¥˜€¡Ñ¥µ”€øÕ•Ímµ¥‘t¹ÍÑ…ÉÑQ¥µ”€˜˜±•™Ð€ð±•¸¤ì(€€€€€€€±•™Ð€ôµ¥€¬€Äì(€€€€€ô•±Í”ì(€€€€€€€€¼¼%˜¥ÐÌ¹½Ð±½Ý•È½È¡¥¡•È°¥ÐµÕÍÐ‰”•ÅÕ…°¸(€€€€€€€É•ÑÕÉ¸µ¥ì(€€€€€ô(€€€ô(€€€€¼¼ÐÑ¡¥ÌÁ½¥¹Ð°±•™Ð…¹É¥¡Ð¡…Ù”ÍÝ…ÁÁ•¸(€€€€¼¼9¼‘¥É•Ðµ…Ñ Ý…Ì™½Õ¹°±•™Ð½ÈÉ¥¡Ð•±•µ•¹ÐµÕÍÐ‰”Ñ¡”±½Í•ÍÐ¸¡•¬Ý¡¥ ½¹”¡…ÌÑ¡”Íµ…±±•ÍÐ‘¥™˜¸(€€€É•ÑÕÉ¸Õ•Ím±•™Ñt¹ÍÑ…ÉÑQ¥µ”€´Ñ¥µ”€ðÑ¥µ”€´Õ•ÍmÉ¥¡Ñt¹ÍÑ…ÉÑQ¥µ”€ü±•™Ð€èÉ¥¡Ðì(€ô(€™Õ¹Ñ¥½¸•ÑÕ•Í%¹I…¹”¡Õ•Ì°ÍÑ…ÉÐ°•¹¤ì(€€€Ù…ÈÕ•Í½Õ¹€ômtì(€€€Ù…È™¥ÉÍÑÕ•%¹I…¹”€ô•Ñ¥ÉÍÑÕ•%¹‘•áÉ½µQ¥µ”¡Õ•Ì°ÍÑ…ÉÐ¤ì(€€€¥˜€¡™¥ÉÍÑÕ•%¹I…¹”€ø€´Ä¤ì(€€€€€™½È€¡Ù…È¤€ô™¥ÉÍÑÕ•%¹I…¹”°±•¸€ôÕ•Ì¹±•¹Ñ ì¤€ð±•¸ì¤¬¬¤ì(€€€€€€€Ù…ÈÕ”€ôÕ•Ím¥tì(€€€€€€€¥˜€¡Õ”¹ÍÑ…ÉÑQ¥µ”€øôÍÑ…ÉÐ€˜˜Õ”¹•¹‘Q¥µ”€ðô•¹¤ì(€€€€€€€€€Õ•Í½Õ¹¹ÁÕÍ ¡Õ”¤ì(€€€€€€€ô•±Í”¥˜€¡Õ”¹ÍÑ…ÉÑQ¥µ”€ø•¹¤ì(€€€€€€€€€É•ÑÕÉ¸Õ•Í½Õ¹ì(€€€€€€€ô(€€€€€ô(€€€ô(€€€É•ÑÕÉ¸Õ•Í½Õ¹ì(€ô(€™Õ¹Ñ¥½¸™¥±Ñ•ÉMÕ‰Ñ¥Ñ±•QÉ…­Ì¡Ñ•áÑQÉ…­1¥ÍÐ¤ì(€€€Ù…ÈÑÉ…­Ì€ômtì(€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ•áÑQÉ…­1¥ÍÐ¹±•¹Ñ ì¤¬¬¤ì(€€€€€Ù…ÈÑÉ…¬€ôÑ•áÑQÉ…­1¥ÍÑm¥tì(€€€€€€¼¼‘”…‘‘Ì„ÑÉ…¬Ý¥Ñ¡½ÕÐ„±…‰•°ìÝ”‘½¸ÐÝ…¹ÐÑ¼ÕÍ”¥Ð(€€€€€¥˜€ ¡ÑÉ…¬¹­¥¹€ôôô€ÍÕ‰Ñ¥Ñ±•ÌœñðÑÉ…¬¹­¥¹€ôôô€…ÁÑ¥½¹Ìœ¤€˜˜ÑÉ…¬¹±…‰•°¤ì(€€€€€€€ÑÉ…­Ì¹ÁÕÍ ¡Ñ•áÑQÉ…­1¥ÍÑm¥t¤ì(€€€€€ô(€€€ô(€€€É•ÑÕÉ¸ÑÉ…­Ìì(€ô((€Ù…ÈMÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¤ì(€€€™Õ¹Ñ¥½¸MÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¡¡±Ì¤ì(€€€€€Ù…È}Ñ¡¥Ìì(€€€€€}Ñ¡¥Ì€ô}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹…±°¡Ñ¡¥Ì°¡±Ì°€ÍÕ‰Ñ¥Ñ±”µÑÉ…¬µ½¹ÑÉ½±±•Èœ¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹ÑÉ…­Ì€ômtì(€€€€€}Ñ¡¥Ì¹É½ÕÁ%‘Ì€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ€ômtì(€€€€€}Ñ¡¥Ì¹ÑÉ…­%€ô€´Äì(€€€€€}Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ôÑÉÕ”ì(€€€€€}Ñ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬€ô€´Äì(€€€€€}Ñ¡¥Ì¹ÕÍ•Q•áÑQÉ…­A½±±¥¹œ€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•A½±±¥¹%¹Ñ•ÉÙ…°€ô€´Äì(€€€€€}Ñ¡¥Ì¹}ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…ä€ôÑÉÕ”ì(€€€€€}Ñ¡¥Ì¹…Íå¹A½±±QÉ…­¡…¹”€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸}Ñ¡¥Ì¹Á½±±QÉ…­¡…¹” À¤ì(€€€€€ôì(€€€€€}Ñ¡¥Ì¹½¹Q•áÑQÉ…­Í¡…¹•€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€¥˜€ …}Ñ¡¥Ì¹ÕÍ•Q•áÑQÉ…­A½±±¥¹œ¤ì(€€€€€€€€€Í•±˜¹±•…É%¹Ñ•ÉÙ…°¡}Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•A½±±¥¹%¹Ñ•ÉÙ…°¤ì(€€€€€€€ô(€€€€€€€€¼¼5•‘¥„¥ÌÕ¹‘•™¥¹•Ý¡•¸ÍÝ¥Ñ¡¥¹œÍÑÉ•…µÌÙ¥„±½…‘M½ÕÉ” ¤(€€€€€€€¥˜€ …}Ñ¡¥Ì¹µ•‘¥„ñð€…}Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…ÈÑ•áÑQÉ…¬€ô¹Õ±°ì(€€€€€€€Ù…ÈÑÉ…­Ì€ô™¥±Ñ•ÉMÕ‰Ñ¥Ñ±•QÉ…­Ì¡}Ñ¡¥Ì¹µ•‘¥„¹Ñ•áÑQÉ…­Ì¤ì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€¥˜€¡ÑÉ…­Ím¥t¹µ½‘”€ôôô€¡¥‘‘•¸œ¤ì(€€€€€€€€€€€€¼¼¼¹½Ð‰É•…¬¥¸…Í”Ñ¡•É”¥Ì„™½±±½Ý¥¹œÑÉ…¬Ý¥Ñ Í¡½Ý¥¹œ¸(€€€€€€€€€€€Ñ•áÑQÉ…¬€ôÑÉ…­Ím¥tì(€€€€€€€€€ô•±Í”¥˜€¡ÑÉ…­Ím¥t¹µ½‘”€ôôô€Í¡½Ý¥¹œœ¤ì(€€€€€€€€€€€Ñ•áÑQÉ…¬€ôÑÉ…­Ím¥tì(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€€€ô((€€€€€€€€¼¼¥¹¥¹Ñ•É¹…°ÑÉ…¬¥¹‘•à™½ÈQ•áÑQÉ…¬(€€€€€€€Ù…ÈÑÉ…­%€ô}Ñ¡¥Ì¹™¥¹‘QÉ…­½ÉQ•áÑQÉ…¬¡Ñ•áÑQÉ…¬¤ì(€€€€€€€¥˜€¡}Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…¬€„ôôÑÉ…­%¤ì(€€€€€€€€€}Ñ¡¥Ì¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬¡ÑÉ…­%¤ì(€€€€€€€ô(€€€€€ôì(€€€€€}Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€É•ÑÕÉ¸}Ñ¡¥Ìì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡MÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È°}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¤ì(€€€Ù…È}ÁÉ½Ñ¼€ôMÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ €ô€Àì(€€€€€Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ¹±•¹Ñ €ô€Àì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬€ô¹Õ±°ì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹½¹Q•áÑQÉ…­Í¡…¹•€ôÑ¡¥Ì¹…Íå¹A½±±QÉ…­¡…¹”€ô¹Õ±°ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹‘•ÍÑÉ½ä¹…±°¡Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}AIM°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑA…ÉÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=%9°Ñ¡¥Ì¹½¹1•Ù•±1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}M]%Q!%9°Ñ¡¥Ì¹½¹1•Ù•±MÝ¥Ñ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}AIM°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑA…ÉÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}1=%9°Ñ¡¥Ì¹½¹1•Ù•±1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}M]%Q!%9°Ñ¡¥Ì¹½¹1•Ù•±MÝ¥Ñ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ô((€€€€¼¼1¥ÍÑ•¸™½ÈÍÕ‰Ñ¥Ñ±”ÑÉ…¬¡…¹”°Ñ¡•¸•áÑÉ…ÐÑ¡”ÕÉÉ•¹ÐÑÉ…¬%¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡•€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬€ø€´Ä¤ì(€€€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…¬€ôÑ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬ì(€€€€€€€Ñ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬€ô€´Äì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÕÍ•Q•áÑQÉ…­A½±±¥¹œ€ô€„¡Ñ¡¥Ì¹µ•‘¥„¹Ñ•áÑQÉ…­Ì€˜˜€½¹¡…¹”œ¥¸Ñ¡¥Ì¹µ•‘¥„¹Ñ•áÑQÉ…­Ì¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹ÕÍ•Q•áÑQÉ…­A½±±¥¹œ¤ì(€€€€€€€Ñ¡¥Ì¹Á½±±QÉ…­¡…¹” ÔÀÀ¤ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥„¹Ñ•áÑQÉ…­Ì¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°Ñ¡¥Ì¹…Íå¹A½±±QÉ…­¡…¹”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹Á½±±QÉ…­¡…¹”€ô™Õ¹Ñ¥½¸Á½±±QÉ…­¡…¹”¡Ñ¥µ•½ÕÐ¤ì(€€€€€Í•±˜¹±•…É%¹Ñ•ÉÙ…°¡Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•A½±±¥¹%¹Ñ•ÉÙ…°¤ì(€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•A½±±¥¹%¹Ñ•ÉÙ…°€ôÍ•±˜¹Í•Ñ%¹Ñ•ÉÙ…°¡Ñ¡¥Ì¹½¹Q•áÑQÉ…­Í¡…¹•°Ñ¥µ•½ÕÐ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑÉ…¹Í™•ÉÉ¥¹5•‘¥„€ô€„…‘…Ñ„¹ÑÉ…¹Í™•É5•‘¥„ì(€€€€€Í•±˜¹±•…É%¹Ñ•ÉÙ…°¡Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•A½±±¥¹%¹Ñ•ÉÙ…°¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹ÕÍ•Q•áÑQÉ…­A½±±¥¹œ¤ì(€€€€€€€µ•‘¥„¹Ñ•áÑQÉ…­Ì¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È ¡…¹”œ°Ñ¡¥Ì¹…Íå¹A½±±QÉ…­¡…¹”¤ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹ÑÉ…­%€ø€´Ä¤ì(€€€€€€€Ñ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬€ôÑ¡¥Ì¹ÑÉ…­%ì(€€€€€ô((€€€€€€¼¼¥Í…‰±”…±°ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì‰•™½É”‘•Ñ…¡µ•¹ÐÍ¼Ý¡•¸É•…ÑÑ…¡•½¹±äÑÉ…­Ì¥¸Ñ¡…Ð½¹Ñ•¹Ð…É”•¹…‰±•¸(€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…¬€ô€´Äì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€¥˜€¡ÑÉ…¹Í™•ÉÉ¥¹5•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑ•áÑQÉ…­Ì€ô™¥±Ñ•ÉMÕ‰Ñ¥Ñ±•QÉ…­Ì¡µ•‘¥„¹Ñ•áÑQÉ…­Ì¤ì(€€€€€€¼¼±•…È±½…‘•Õ•Ì½¸µ•‘¥„‘•Ñ…¡µ•¹Ð™É½´ÑÉ…­Ì(€€€€€Ñ•áÑQÉ…­Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡ÑÉ…¬¤ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹É½ÕÁ%‘Ì€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ€ômtì(€€€€€Ñ¡¥Ì¹ÑÉ…­%€ô€´Äì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ôÑÉÕ”ì(€€€ô((€€€€¼¼¥É•Ý¡•¹•Ù•È„¹•Üµ…¹¥™•ÍÐ¥Ì±½…‘•¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑA…ÉÍ•€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑA…ÉÍ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ô‘…Ñ„¹ÍÕ‰Ñ¥Ñ±•QÉ…­Ìì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È¥€ô‘…Ñ„¹¥°(€€€€€€€É½ÕÁ%€ô‘…Ñ„¹É½ÕÁ%°(€€€€€€€‘•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ìì(€€€€€Ù…ÈÑÉ…­%¹Ñ¥Ù•É½ÕÀ€ôÑ¡¥Ì¹ÑÉ…­Í%¹É½ÕÁm¥‘tì(€€€€€¥˜€ …ÑÉ…­%¹Ñ¥Ù•É½ÕÀñðÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹É½ÕÁ%€„ôôÉ½ÕÁ%¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰MÕ‰Ñ¥Ñ±”ÑÉ…¬Ý¥Ñ ¥èˆ€¬¥€¬€ˆ…¹É½ÕÀèˆ€¬É½ÕÁ%€¬€ˆ¹½Ð™½Õ¹¥¸…Ñ¥Ù”É½ÕÀ€ˆ€¬€¡ÑÉ…­%¹Ñ¥Ù•É½ÕÀ€ôô¹Õ±°€üÙ½¥€À€èÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹É½ÕÁ%¤¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÕÉ•Ñ…¥±Ì€ôÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹‘•Ñ…¥±Ìì(€€€€€ÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹‘•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ìì(€€€€€Ñ¡¥Ì¹±½œ ‰MÕ‰Ñ¥Ñ±”ÑÉ…¬€ˆ€¬¥€¬€ˆpˆˆ€¬ÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹¹…µ”€¬€‰pˆ±…¹œèˆ€¬ÑÉ…­%¹Ñ¥Ù•É½ÕÀ¹±…¹œ€¬€ˆÉ½ÕÀèˆ€¬É½ÕÁ%€¬€ˆ±½…‘•lˆ€¬‘•Ñ…¥±Ì¹ÍÑ…ÉÑM8€¬€ˆ´ˆ€¬‘•Ñ…¥±Ì¹•¹‘M8€¬€‰tˆ¤ì(€€€€€¥˜€¡¥€ôôôÑ¡¥Ì¹ÑÉ…­%¤ì(€€€€€€€Ñ¡¥Ì¹Á±…å±¥ÍÑ1½…‘•¡¥°‘…Ñ„°ÕÉ•Ñ…¥±Ì¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÍÝ¥Ñ¡1•Ù•°¡‘…Ñ„¹±•Ù•°¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±MÝ¥Ñ¡¥¹œ€ô™Õ¹Ñ¥½¸½¹1•Ù•±MÝ¥Ñ¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÍÝ¥Ñ¡1•Ù•°¡‘…Ñ„¹±•Ù•°¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÝ¥Ñ¡1•Ù•°€ô™Õ¹Ñ¥½¸ÍÝ¥Ñ¡1•Ù•°¡±•Ù•±%¹‘•à¤ì(€€€€€Ù…È±•Ù•±%¹™¼€ôÑ¡¥Ì¹¡±Ì¹±•Ù•±Ím±•Ù•±%¹‘•átì(€€€€€¥˜€ …±•Ù•±%¹™¼¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•É½ÕÁÌ€ô±•Ù•±%¹™¼¹ÍÕ‰Ñ¥Ñ±•É½ÕÁÌñð¹Õ±°ì(€€€€€Ù…ÈÕÉÉ•¹ÑÉ½ÕÁÌ€ôÑ¡¥Ì¹É½ÕÁ%‘Ìì(€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬ì(€€€€€¥˜€ …ÍÕ‰Ñ¥Ñ±•É½ÕÁÌñð€¡ÕÉÉ•¹ÑÉ½ÕÁÌ€ôô¹Õ±°€üÙ½¥€À€èÕÉÉ•¹ÑÉ½ÕÁÌ¹±•¹Ñ ¤€„ôô€¡ÍÕ‰Ñ¥Ñ±•É½ÕÁÌ€ôô¹Õ±°€üÙ½¥€À€èÍÕ‰Ñ¥Ñ±•É½ÕÁÌ¹±•¹Ñ ¤ñðÍÕ‰Ñ¥Ñ±•É½ÕÁÌ€„ô¹Õ±°€˜˜ÍÕ‰Ñ¥Ñ±•É½ÕÁÌ¹Í½µ”¡™Õ¹Ñ¥½¸€¡É½ÕÁ%¤ì(€€€€€€€É•ÑÕÉ¸€¡ÕÉÉ•¹ÑÉ½ÕÁÌ€ôô¹Õ±°€üÙ½¥€À€èÕÉÉ•¹ÑÉ½ÕÁÌ¹¥¹‘•á=˜¡É½ÕÁ%¤¤€ôôô€´Äì(€€€€€ô¤¤ì(€€€€€€€Ñ¡¥Ì¹É½ÕÁ%‘Ì€ôÍÕ‰Ñ¥Ñ±•É½ÕÁÌì(€€€€€€€Ñ¡¥Ì¹ÑÉ…­%€ô€´Äì(€€€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬€ô¹Õ±°ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€€€É•ÑÕÉ¸€…ÍÕ‰Ñ¥Ñ±•É½ÕÁÌñðÍÕ‰Ñ¥Ñ±•É½ÕÁÌ¹¥¹‘•á=˜¡ÑÉ…¬¹É½ÕÁ%¤€„ôô€´Äì(€€€€€€€ô¤ì(€€€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€€€¼¼¥Í…‰±”Í•±•Ñ•™…Õ±ÑQÉ…¬¥˜Ñ¡•É”…É”¹¼‘•™…Õ±ÐÑÉ…­Ì(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€˜˜€…ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹Í½µ”¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€€€€€É•ÑÕÉ¸ÑÉ…¬¹‘•™…Õ±Ðì(€€€€€€€€€ô¤¤ì(€€€€€€€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ô™…±Í”ì(€€€€€€€€€ô(€€€€€€€€€€¼¼ÑÉ…¬¹¥Í¡½Õ±µ…Ñ ¡±Ì¹…Õ‘¥½QÉ…­Ì¥¹‘•à(€€€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…¬°¤¤ì(€€€€€€€€€€€ÑÉ…¬¹¥€ô¤ì(€€€€€€€€€ô¤ì(€€€€€€€ô•±Í”¥˜€ …ÕÉÉ•¹ÑQÉ…¬€˜˜€…Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ¹±•¹Ñ ¤ì(€€€€€€€€€€¼¼¼¹½Ð‘¥ÍÁ…Ñ MU	Q%Q1}QI-M}UAQÝ¡•¸Ñ¡•É”Ý•É”…¹…É”¹¼ÑÉ…­Ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ€ôÍÕ‰Ñ¥Ñ±•QÉ…­Ìì((€€€€€€€€¼¼¥¹ÁÉ•™•ÉÉ•ÑÉ…¬(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”ì(€€€€€€€¥˜€ …ÕÉÉ•¹ÑQÉ…¬€˜˜ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”¤ì(€€€€€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ô™…±Í”ì(€€€€€€€€€Ù…ÈÉ½ÕÁ%¹‘•à€ô™¥¹‘5…Ñ¡¥¹=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”°ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¤ì(€€€€€€€€€¥˜€¡É½ÕÁ%¹‘•à€ø€´Ä¤ì(€€€€€€€€€€€ÕÉÉ•¹ÑQÉ…¬€ôÍÕ‰Ñ¥Ñ±•QÉ…­ÍmÉ½ÕÁ%¹‘•átì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€Ù…È…±±%¹‘•à€ô™¥¹‘5…Ñ¡¥¹=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”°Ñ¡¥Ì¹ÑÉ…­Ì¤ì(€€€€€€€€€€€ÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹ÑÉ…­Ím…±±%¹‘•átì(€€€€€€€€€ô(€€€€€€€ô((€€€€€€€€¼¼M•±•Ð¥¹¥Ñ¥…°ÑÉ…¬(€€€€€€€Ù…ÈÑÉ…­%€ôÑ¡¥Ì¹™¥¹‘QÉ…­%¡ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€¥˜€¡ÑÉ…­%€ôôô€´Ä€˜˜ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€€€ÑÉ…­%€ôÑ¡¥Ì¹™¥¹‘QÉ…­%¡¹Õ±°¤ì(€€€€€€€ô((€€€€€€€€¼¼¥ÍÁ…Ñ •Ù•¹ÑÌ…¹±½…ÑÉ…¬¥˜¹••‘•(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•€ôì(€€€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­ÌèÍÕ‰Ñ¥Ñ±•QÉ…­Ì(€€€€€€€ôì(€€€€€€€Ñ¡¥Ì¹±½œ ‰UÁ‘…Ñ¥¹œÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì°€ˆ€¬ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¹±•¹Ñ €¬€ˆÑÉ…¬¡Ì¤™½Õ¹¥¸pˆˆ€¬€¡ÍÕ‰Ñ¥Ñ±•É½ÕÁÌ€ôô¹Õ±°€üÙ½¥€À€èÍÕ‰Ñ¥Ñ±•É½ÕÁÌ¹©½¥¸ œ°œ¤¤€¬€‰pˆÉ½ÕÀµ¥ˆ¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}UAQ°ÍÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•¤ì(€€€€€€€¥˜€¡ÑÉ…­%€„ôô€´Ä€˜˜Ñ¡¥Ì¹ÑÉ…­%€ôôô€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬¡ÑÉ…­%¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹™¥¹‘QÉ…­%€ô™Õ¹Ñ¥½¸™¥¹‘QÉ…­%¡ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€Ù…ÈÑÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀì(€€€€€Ù…ÈÍ•±•Ñ•™…Õ±Ð€ôÑ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…ÈÑÉ…¬€ôÑÉ…­Ím¥tì(€€€€€€€¥˜€¡Í•±•Ñ•™…Õ±Ð€˜˜€…ÑÉ…¬¹‘•™…Õ±Ðñð€…Í•±•Ñ•™…Õ±Ð€˜˜€…ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€ô(€€€€€€€¥˜€ …ÕÉÉ•¹ÑQÉ…¬ñðµ…Ñ¡•Í=ÁÑ¥½¸¡ÑÉ…¬°ÕÉÉ•¹ÑQÉ…¬¤¤ì(€€€€€€€€€É•ÑÕÉ¸¤ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€™½È€¡Ù…È}¤€ô€Àì}¤€ðÑÉ…­Ì¹±•¹Ñ ì}¤¬¬¤ì(€€€€€€€€€Ù…È}ÑÉ…¬€ôÑÉ…­Ím}¥tì(€€€€€€€€€¥˜€¡µ•‘¥…ÑÑÉ¥‰ÕÑ•Í%‘•¹Ñ¥…°¡ÕÉÉ•¹ÑQÉ…¬¹…ÑÑÉÌ°}ÑÉ…¬¹…ÑÑÉÌ°l19Uœ°€MM=µ19Uœ°€!IQI%MQ%Lt¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸}¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€™½È€¡Ù…È}¤È€ô€Àì}¤È€ðÑÉ…­Ì¹±•¹Ñ ì}¤È¬¬¤ì(€€€€€€€€€Ù…È}ÑÉ…¬È€ôÑÉ…­Ím}¤Étì(€€€€€€€€€¥˜€¡µ•‘¥…ÑÑÉ¥‰ÕÑ•Í%‘•¹Ñ¥…°¡ÕÉÉ•¹ÑQÉ…¬¹…ÑÑÉÌ°}ÑÉ…¬È¹…ÑÑÉÌ°l19Ut¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸}¤Èì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸€´Äì(€€€ôì(€€€}ÁÉ½Ñ¼¹™¥¹‘QÉ…­½ÉQ•áÑQÉ…¬€ô™Õ¹Ñ¥½¸™¥¹‘QÉ…­½ÉQ•áÑQÉ…¬¡Ñ•áÑQÉ…¬¤ì(€€€€€¥˜€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€Ù…ÈÑÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€Ù…ÈÑÉ…¬€ôÑÉ…­Ím¥tì(€€€€€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•QÉ…­5…Ñ¡•ÍQ•áÑQÉ…¬¡ÑÉ…¬°Ñ•áÑQÉ…¬¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸€´Äì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€¡‘…Ñ„¹™…Ñ…°ñð€…‘…Ñ„¹½¹Ñ•áÐ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡‘…Ñ„¹½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,€˜˜‘…Ñ„¹½¹Ñ•áÐ¹¥€ôôôÑ¡¥Ì¹ÑÉ…­%€˜˜€ …Ñ¡¥Ì¹É½ÕÁ%‘ÌñðÑ¡¥Ì¹É½ÕÁ%‘Ì¹¥¹‘•á=˜¡‘…Ñ„¹½¹Ñ•áÐ¹É½ÕÁ%¤€„ôô€´Ä¤¤ì(€€€€€€€Ñ¡¥Ì¹¡•­I•ÑÉä¡‘…Ñ„¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹Í•ÑMÕ‰Ñ¥Ñ±•=ÁÑ¥½¸€ô™Õ¹Ñ¥½¸Í•ÑMÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹”€ôÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸ì(€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¤ì(€€€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¹¥€ôôô€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬ ´Ä¤ì(€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€ô(€€€€€€€Ù…È…±±MÕ‰Ñ¥Ñ±•QÉ…­Ì€ôÑ¡¥Ì¹…±±MÕ‰Ñ¥Ñ±•QÉ…­Ìì(€€€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ô™…±Í”ì(€€€€€€€¥˜€¡…±±MÕ‰Ñ¥Ñ±•QÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€€€¼¼¥ÉÍÐÍ•”¥˜ÕÉÉ•¹Ð½ÁÑ¥½¸µ…Ñ¡•Ì€¡¹¼ÍÝ¥Ñ ½À¤(€€€€€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬ì(€€€€€€€€€¥˜€¡ÕÉÉ•¹ÑQÉ…¬€˜˜µ…Ñ¡•Í=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸°ÕÉÉ•¹ÑQÉ…¬¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸ÕÉÉ•¹ÑQÉ…¬ì(€€€€€€€€€ô(€€€€€€€€€€¼¼¥¹½ÁÑ¥½¸¥¸ÕÉÉ•¹ÐÉ½ÕÀ(€€€€€€€€€Ù…ÈÉ½ÕÁ%¹‘•à€ô™¥¹‘5…Ñ¡¥¹=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸°Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀ¤ì(€€€€€€€€€¥˜€¡É½ÕÁ%¹‘•à€ø€´Ä¤ì(€€€€€€€€€€€Ù…ÈÑÉ…¬€ôÑ¡¥Ì¹ÑÉ…­Í%¹É½ÕÁmÉ½ÕÁ%¹‘•átì(€€€€€€€€€€€Ñ¡¥Ì¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬¡É½ÕÁ%¹‘•à¤ì(€€€€€€€€€€€É•ÑÕÉ¸ÑÉ…¬ì(€€€€€€€€€ô•±Í”¥˜€¡ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€€€€€€¼¼%˜Ñ¡¥Ì¥Ì¹½ÐÑ¡”¥¹¥Ñ¥…°Í•±•Ñ¥½¸É•ÑÕÉ¸¹Õ±°(€€€€€€€€€€€€¼¼½ÁÑ¥½¸Í¡½Õ±¡…Ù”µ…Ñ¡•½¹”¥¸…Ñ¥Ù”É½ÕÀ(€€€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€¼¼¥¹Ñ¡”½ÁÑ¥½¸¥¸…±°ÑÉ…­Ì™½È¥¹¥Ñ¥…°Í•±•Ñ¥½¸(€€€€€€€€€€€Ù…È…±±%¹‘•à€ô™¥¹‘5…Ñ¡¥¹=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸°…±±MÕ‰Ñ¥Ñ±•QÉ…­Ì¤ì(€€€€€€€€€€€¥˜€¡…±±%¹‘•à€ø€´Ä¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸…±±MÕ‰Ñ¥Ñ±•QÉ…­Ím…±±%¹‘•átì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘A±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸±½…‘A±…å±¥ÍÐ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹±½…‘A±…å±¥ÍÐ¹…±°¡Ñ¡¥Ì¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹Í¡½Õ±‘1½…‘A±…å±¥ÍÐ¡Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬¤¤ì(€€€€€€€Ñ¡¥Ì¹Í¡•‘Õ±•1½…‘¥¹œ¡Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘¥¹A±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸±½…‘¥¹A±…å±¥ÍÐ¡ÕÉÉ•¹ÑQÉ…¬°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹±½…‘¥¹A±…å±¥ÍÐ¹…±°¡Ñ¡¥Ì°ÕÉÉ•¹ÑQÉ…¬°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€Ù…È¥€ôÕÉÉ•¹ÑQÉ…¬¹¥ì(€€€€€Ù…ÈÉ½ÕÁ%€ôÕÉÉ•¹ÑQÉ…¬¹É½ÕÁ%ì(€€€€€Ù…ÈÕÉ°€ôÑ¡¥Ì¹•ÑUÉ±]¥Ñ¡¥É•Ñ¥Ù•Ì¡ÕÉÉ•¹ÑQÉ…¬¹ÕÉ°°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€Ù…È‘•Ñ…¥±Ì€ôÕÉÉ•¹ÑQÉ…¬¹‘•Ñ…¥±Ìì(€€€€€Ù…È…”€ô‘•Ñ…¥±Ì€ôô¹Õ±°€üÙ½¥€À€è‘•Ñ…¥±Ì¹…”ì(€€€€€Ñ¡¥Ì¹±½œ ‰1½…‘¥¹œÍÕ‰Ñ¥Ñ±”€ˆ€¬¥€¬€ˆpˆˆ€¬ÕÉÉ•¹ÑQÉ…¬¹¹…µ”€¬€‰pˆ±…¹œèˆ€¬ÕÉÉ•¹ÑQÉ…¬¹±…¹œ€¬€ˆÉ½ÕÀèˆ€¬É½ÕÁ%€¬€ ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ€ôô¹Õ±°€üÙ½¥€À€è¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹µÍ¸¤€„ôôÕ¹‘•™¥¹•€ü€œ…ÐÍ¸€œ€¬¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹µÍ¸€¬€œÁ…ÉÐ€œ€¬¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹Á…ÉÐ€è€œœ¤€¬€¡…”€˜˜‘•Ñ…¥±Ì¹±¥Ù”€ü€œ…”€œ€¬…”¹Ñ½¥á• Ä¤€¬€¡‘•Ñ…¥±Ì¹ÑåÁ”€ü€œ€œ€¬‘•Ñ…¥±Ì¹ÑåÁ”ñð€œœ€è€œœ¤€è€œœ¤€¬€ˆ€ˆ€¬ÕÉ°¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=%9°ì(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€¥è¥°(€€€€€€€É½ÕÁ%èÉ½ÕÁ%°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè¡±ÍUÉ±A…É…µ•Ñ•ÉÌñð¹Õ±°°(€€€€€€€ÑÉ…¬èÕÉÉ•¹ÑQÉ…¬(€€€€€ô¤ì(€€€ô((€€€€¼¨¨(€€€€€¨¥Í…‰±•ÌÑ¡”½±ÍÕ‰Ñ¥Ñ±•QÉ…¬…¹Í•ÑÌÕÉÉ•¹Ðµ½‘”½¸Ñ¡”¹•áÐÍÕ‰Ñ¥Ñ±•QÉ…¬¸(€€€€€¨Q¡¥Ì½Á•É…Ñ•Ì½¸Ñ¡”=4Ñ•áÑQÉ…­Ì¸(€€€€€¨Ù…±Õ”½˜€´ÄÝ¥±°‘¥Í…‰±”…±°ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Ñ½±•QÉ…­5½‘•Ì€ô™Õ¹Ñ¥½¸Ñ½±•QÉ…­5½‘•Ì ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑ•áÑQÉ…­Ì€ô™¥±Ñ•ÉMÕ‰Ñ¥Ñ±•QÉ…­Ì¡µ•‘¥„¹Ñ•áÑQÉ…­Ì¤ì(€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬ì(€€€€€Ù…È¹•áÑQÉ…¬ì(€€€€€¥˜€¡ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€¹•áÑQÉ…¬€ôÑ•áÑQÉ…­Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€É•ÑÕÉ¸ÍÕ‰Ñ¥Ñ±•QÉ…­5…Ñ¡•ÍQ•áÑQÉ…¬¡ÕÉÉ•¹ÑQÉ…¬°Ñ•áÑQÉ…¬¤ì(€€€€€€€ô¥lÁtì(€€€€€€€¥˜€ …¹•áÑQÉ…¬¤ì(€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰U¹…‰±”Ñ¼™¥¹ÍÕ‰Ñ¥Ñ±”Q•áÑQÉ…¬Ý¥Ñ ¹…µ”pˆˆ€¬ÕÉÉ•¹ÑQÉ…¬¹¹…µ”€¬€‰pˆ…¹±…¹Õ…”pˆˆ€¬ÕÉÉ•¹ÑQÉ…¬¹±…¹œ€¬€‰pˆˆ¤ì(€€€€€€€ô(€€€€€ô(€€€€€mt¹Í±¥”¹…±°¡Ñ•áÑQÉ…­Ì¤¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€¥˜€¡ÑÉ…¬¹µ½‘”€„ôô€‘¥Í…‰±•œ€˜˜ÑÉ…¬€„ôô¹•áÑQÉ…¬¤ì(€€€€€€€€€ÑÉ…¬¹µ½‘”€ô€‘¥Í…‰±•œì(€€€€€€€ô(€€€€€ô¤ì(€€€€€¥˜€¡¹•áÑQÉ…¬¤ì(€€€€€€€Ù…Èµ½‘”€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…ä€ü€Í¡½Ý¥¹œœ€è€¡¥‘‘•¸œì(€€€€€€€¥˜€¡¹•áÑQÉ…¬¹µ½‘”€„ôôµ½‘”¤ì(€€€€€€€€€¹•áÑQÉ…¬¹µ½‘”€ôµ½‘”ì(€€€€€€€ô(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨Q¡¥Ìµ•Ñ¡½¥ÌÉ•ÍÁ½¹Í¥‰±”™½ÈÙ…±¥‘…Ñ¥¹œÑ¡”ÍÕ‰Ñ¥Ñ±”¥¹‘•à…¹Á•É¥½‘¥…±±äÉ•±½…‘¥¹œ¥˜±¥Ù”¸(€€€€€¨¥ÍÁ…Ñ¡•ÌÑ¡”MU	Q%Q1}QI-}M]%Q •Ù•¹Ð°Ý¡¥ ¥¹ÍÑÉÕÑÌÑ¡”ÍÕ‰Ñ¥Ñ±”µÍÑÉ•…´µ½¹ÑÉ½±±•ÈÑ¼±½…Ñ¡”Í•±•Ñ•ÑÉ…¬¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬€ô™Õ¹Ñ¥½¸Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬¡¹•Ý%¤ì(€€€€€Ù…ÈÑÉ…­Ì€ôÑ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀì((€€€€€€¼¼Í•ÑÑ¥¹œÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…¬Ý¥±°ÑÉ¥•È¥¹Ñ•É¹…°±½¥Œ(€€€€€€¼¼¥˜µ•‘¥„¡…Ì¹½Ð‰••¸…ÑÑ…¡•å•Ð°¥ÐÝ¥±°™…¥°(€€€€€€¼¼Ý”­••À„É•™•É•¹”Ñ¼Ñ¡”‘•™…Õ±ÐÑÉ…¬¥(€€€€€€¼¼…¹Ý”±°Í•ÐÍÕ‰Ñ¥Ñ±•QÉ…¬Ý¡•¸½¹5•‘¥…ÑÑ…¡•¥ÌÑÉ¥•É•(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹ÅÕ•Õ•‘•™…Õ±ÑQÉ…¬€ô¹•Ý%ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼•á¥Ð¥˜ÑÉ…¬¥…Ì…±É•…‘äÍ•Ð½È¥¹Ù…±¥(€€€€€¥˜€¡¹•Ý%€ð€´Äñð¹•Ý%€øôÑÉ…­Ì¹±•¹Ñ ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡¹•Ý%¤¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰%¹Ù…±¥ÍÕ‰Ñ¥Ñ±”ÑÉ…¬¥è€ˆ€¬¹•Ý%¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ô™…±Í”ì(€€€€€Ù…È±…ÍÑQÉ…¬€ôÑ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬ì(€€€€€Ù…ÈÑÉ…¬€ôÑÉ…­Ím¹•Ý%‘tñð¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÑÉ…­%€ô¹•Ý%ì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQÉ…¬€ôÑÉ…¬ì(€€€€€Ñ¡¥Ì¹Ñ½±•QÉ…­5½‘•Ì ¤ì(€€€€€¥˜€ …ÑÉ…¬¤ì(€€€€€€€€¼¼ÍÝ¥Ñ Ñ¼€´Ä(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}M]%Q °ì(€€€€€€€€€¥è¹•Ý%(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑÉ…­1½…‘•€ô€„…ÑÉ…¬¹‘•Ñ…¥±Ì€˜˜€…ÑÉ…¬¹‘•Ñ…¥±Ì¹±¥Ù”ì(€€€€€¥˜€¡¹•Ý%€ôôôÑ¡¥Ì¹ÑÉ…­%€˜˜ÑÉ…¬€ôôô±…ÍÑQÉ…¬€˜˜ÑÉ…­1½…‘•¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½œ ‰MÝ¥Ñ¡¥¹œÑ¼ÍÕ‰Ñ¥Ñ±”µÑÉ…¬€ˆ€¬¹•Ý%€¬€¡ÑÉ…¬€ü€ˆpˆˆ€¬ÑÉ…¬¹¹…µ”€¬€‰pˆ±…¹œèˆ€¬ÑÉ…¬¹±…¹œ€¬€ˆÉ½ÕÀèˆ€¬ÑÉ…¬¹É½ÕÁ%€è€œœ¤¤ì(€€€€€Ù…È¥€ôÑÉ…¬¹¥°(€€€€€€€}ÑÉ…¬‘É½ÕÁ%€ôÑÉ…¬¹É½ÕÁ%°(€€€€€€€É½ÕÁ%€ô}ÑÉ…¬‘É½ÕÁ%€ôôôÙ½¥€À€ü€œœ€è}ÑÉ…¬‘É½ÕÁ%°(€€€€€€€¹…µ”€ôÑÉ…¬¹¹…µ”°(€€€€€€€ÑåÁ”€ôÑÉ…¬¹ÑåÁ”°(€€€€€€€ÕÉ°€ôÑÉ…¬¹ÕÉ°ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}M]%Q °ì(€€€€€€€¥è¥°(€€€€€€€É½ÕÁ%èÉ½ÕÁ%°(€€€€€€€¹…µ”è¹…µ”°(€€€€€€€ÑåÁ”èÑåÁ”°(€€€€€€€ÕÉ°èÕÉ°(€€€€€ô¤ì(€€€€€Ù…È¡±ÍUÉ±A…É…µ•Ñ•ÉÌ€ôÑ¡¥Ì¹ÍÝ¥Ñ¡A…É…µÌ¡ÑÉ…¬¹ÕÉ°°±…ÍÑQÉ…¬€ôô¹Õ±°€üÙ½¥€À€è±…ÍÑQÉ…¬¹‘•Ñ…¥±Ì°ÑÉ…¬¹‘•Ñ…¥±Ì¤ì(€€€€€Ñ¡¥Ì¹±½…‘A±…å±¥ÍÐ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡MÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…äì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€Ñ¡¥Ì¹}ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…ä€ôÙ…±Õ”ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÑÉ…­%€ø€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹Ñ½±•QÉ…­5½‘•Ì ¤ì(€€€€€€€ô(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰…±±MÕ‰Ñ¥Ñ±•QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÑÉ…­Ìì(€€€€€ô((€€€€€€¼¨¨•Ð…±Ñ•É¹…Ñ”ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì±¥ÍÐ™É½´Á±…å±¥ÍÐ€¨¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÑÉ…­Í%¹É½ÕÀì(€€€€€ô((€€€€€€¼¨¨•Ð½Í•Ð¥¹‘•à½˜Ñ¡”Í•±•Ñ•ÍÕ‰Ñ¥Ñ±”ÑÉ…¬€¡‰…Í•½¸¥¹‘•à¥¸ÍÕ‰Ñ¥Ñ±”ÑÉ…¬±¥ÍÑÌ¤€¨¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•QÉ…¬ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÑÉ…­%ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý%¤ì(€€€€€€€Ñ¡¥Ì¹Í•±•Ñ•™…Õ±ÑQÉ…¬€ô™…±Í”ì(€€€€€€€Ñ¡¥Ì¹Í•ÑMÕ‰Ñ¥Ñ±•QÉ…¬¡¹•Ý%¤ì(€€€€€ô(€€€õt¤ì(€ô¡	…Í•A±…å±¥ÍÑ½¹ÑÉ½±±•È¤ì((€€¼¨¨(€€€¨(€€€¨Q¡¥Ì½‘”Ý…ÌÁ½ÉÑ•™É½´Ñ¡”‘…Í ¹©ÌÁÉ½©•Ð…Ðè(€€€¨€€¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½…Í µ%¹‘ÕÍÑÉäµ½ÉÕ´½‘…Í ¹©Ì½‰±½ˆ½‘•Ù•±½Áµ•¹Ð½•áÑ•É¹…±Ì½•„ØÀàµÁ…ÉÍ•È¹©Ì(€€€¨€€¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½…Í µ%¹‘ÕÍÑÉäµ½ÉÕ´½‘…Í ¹©Ì½½µµ¥Ð¼àÈØåˆÈÙ„ÜØÅ”ÀàÔÍ‰ˆÈÅÜàÜàÁ•äÐÔÄÐÑ•‘Ñ‘¥™˜´ÜÅ‰ŒÈäÕ„ÉÙˆÙˆÜÀäÍ„ÅÌÈäÁÔÍ„ÑˆÈ(€€€¨(€€€¨Q¡”½É¥¥¹…°½ÁåÉ¥¡Ð…ÁÁ•…ÉÌ‰•±½Üè(€€€¨(€€€¨Q¡”½ÁåÉ¥¡Ð¥¸Ñ¡¥ÌÍ½™ÑÝ…É”¥Ì‰•¥¹œµ…‘”…Ù…¥±…‰±”Õ¹‘•ÈÑ¡”	M1¥•¹Í”°(€€€¨¥¹±Õ‘•‰•±½Ü¸Q¡¥ÌÍ½™ÑÝ…É”µ…ä‰”ÍÕ‰©•ÐÑ¼½Ñ¡•ÈÑ¡¥ÉÁ…ÉÑä…¹½¹ÑÉ¥‰ÕÑ½È(€€€¨É¥¡ÑÌ°¥¹±Õ‘¥¹œÁ…Ñ•¹ÐÉ¥¡ÑÌ°…¹¹¼ÍÕ É¥¡ÑÌ…É”É…¹Ñ•Õ¹‘•ÈÑ¡¥Ì±¥•¹Í”¸(€€€¨(€€€¨½ÁåÉ¥¡Ð€¡Œ¤€ÈÀÄÔ´ÈÀÄØ°M %¹‘ÕÍÑÉä½ÉÕ´¸(€€€¨±°É¥¡ÑÌÉ•Í•ÉÙ•¸(€€€¨(€€€¨I•‘¥ÍÑÉ¥‰ÕÑ¥½¸…¹ÕÍ”¥¸Í½ÕÉ”…¹‰¥¹…Éä™½ÉµÌ°Ý¥Ñ ½ÈÝ¥Ñ¡½ÕÐµ½‘¥™¥…Ñ¥½¸°(€€€¨…É”Á•Éµ¥ÑÑ•ÁÉ½Ù¥‘•Ñ¡…ÐÑ¡”™½±±½Ý¥¹œ½¹‘¥Ñ¥½¹Ì…É”µ•Ðè(€€€¨€€Ä¸I•‘¥ÍÑÉ¥‰ÕÑ¥½¹Ì½˜Í½ÕÉ”½‘”µÕÍÐÉ•Ñ…¥¸Ñ¡”…‰½Ù”½ÁåÉ¥¡Ð¹½Ñ¥”°Ñ¡¥Ì(€€€¨€±¥ÍÐ½˜½¹‘¥Ñ¥½¹Ì…¹Ñ¡”™½±±½Ý¥¹œ‘¥Í±…¥µ•È¸(€€€¨€€¨I•‘¥ÍÑÉ¥‰ÕÑ¥½¹Ì¥¸‰¥¹…Éä™½É´µÕÍÐÉ•ÁÉ½‘Õ”Ñ¡”…‰½Ù”½ÁåÉ¥¡Ð¹½Ñ¥”°(€€€¨€Ñ¡¥Ì±¥ÍÐ½˜½¹‘¥Ñ¥½¹Ì…¹Ñ¡”™½±±½Ý¥¹œ‘¥Í±…¥µ•È¥¸Ñ¡”‘½Õµ•¹Ñ…Ñ¥½¸…¹½½È(€€€¨€½Ñ¡•Èµ…Ñ•É¥…±ÌÁÉ½Ù¥‘•Ý¥Ñ Ñ¡”‘¥ÍÑÉ¥‰ÕÑ¥½¸¸(€€€¨€€È¸9•¥Ñ¡•ÈÑ¡”¹…µ”½˜…Í %¹‘ÕÍÑÉä½ÉÕ´¹½ÈÑ¡”¹…µ•Ì½˜¥ÑÌ(€€€¨€½¹ÑÉ¥‰ÕÑ½ÉÌµ…ä‰”ÕÍ•Ñ¼•¹‘½ÉÍ”½ÈÁÉ½µ½Ñ”ÁÉ½‘ÕÑÌ‘•É¥Ù•™É½´Ñ¡¥ÌÍ½™ÑÝ…É”(€€€¨€Ý¥Ñ¡½ÕÐÍÁ•¥™¥ŒÁÉ¥½ÈÝÉ¥ÑÑ•¸Á•Éµ¥ÍÍ¥½¸¸(€€€¨(€€€¨€Q!%LM=Q]I%LAI=Y%	dQ!=AeI%!P!=1IL9=9QI%	UQ=ILL%L99d(€€€¨€aAIML=H%5A1%]II9Q%L°%91U%9°	UP9=P1%5%QQ<°Q!%5A1%(€€€¨€]II9Q%L=5I!9Q	%1%Qd9%Q9ML=HAIQ%U1HAUIA=MI%M1%5¸(€€€¨€%89<Y9PM!10Q!=AeI%!P!=1H=H=9QI%	UQ=IL	1%	1=H9d%IP°(€€€¨€%9%IP°%9%9Q0°MA%0°a5A1Id°=H=9MEU9Q%05L€¡%91U%9°	UP(€€€¨€9=P1%5%QQ<°AI=UI59P=MU	MQ%QUQ==L=HMIY%Lì1=ML=UM°Q°=H(€€€¨€AI=%QLì=H	UM%9ML%9QIIUAQ%=8¤!=]YHUM9=89dQ!=Id=1%	%1%Qd°(€€€¨€]!Q!H%8=9QIP°MQI%P1%	%1%Qd°=HQ=IP€¡%91U%991%9=H=Q!I]%M¤(€€€¨€I%M%9%89d]d=UP=Q!UM=Q!%LM=Q]I°Y8%Y%M=Q!(€€€¨€A=MM%	%1%Qd=MU 5¸(€€€¨¼(€€¼¨¨(€€€¨€á•ÁÑ¥½¹Ì™É½´É•Õ±…ÈM%$¸½‘•A½¥¹ÑÌ…É”µ…ÁÁ•Ñ¼UQ´ÄØ½‘•Ì(€€€¨¼((€Ù…ÈÍÁ•¥…±•„ØÀá¡…ÉÍ½‘•Ì€ôì(€€€€ÁàÉ„è€Áá”Ä°(€€€€¼¼±½Ý•É…Í”„°…ÕÑ”…•¹Ð(€€€€ÁàÕŒè€Áá”ä°(€€€€¼¼±½Ý•É…Í””°…ÕÑ”…•¹Ð(€€€€ÁàÕ”è€Áá•°(€€€€¼¼±½Ý•É…Í”¤°…ÕÑ”…•¹Ð(€€€€ÁàÕ˜è€Áá˜Ì°(€€€€¼¼±½Ý•É…Í”¼°…ÕÑ”…•¹Ð(€€€€ÁàØÀè€Áá™„°(€€€€¼¼±½Ý•É…Í”Ô°…ÕÑ”…•¹Ð(€€€€ÁàÝˆè€Áá”Ü°(€€€€¼¼±½Ý•É…Í”ŒÝ¥Ñ •‘¥±±„(€€€€ÁàÝŒè€Áá˜Ü°(€€€€¼¼‘¥Ù¥Í¥½¸Íåµ‰½°(€€€€ÁàÝè€ÁáÄ°(€€€€¼¼ÕÁÁ•É…Í”8Ñ¥±‘”(€€€€ÁàÝ”è€Áá˜Ä°(€€€€¼¼±½Ý•É…Í”¸Ñ¥±‘”(€€€€ÁàÝ˜è€ÁàÈÔàà°(€€€€¼¼Õ±°‰±½¬(€€€€¼¼Q!%L	1=,%91ULQ!€ÄØaQ9€¡Q]<µ	eQ¤1%9€ÈÄ!IQIL(€€€€¼¼Q!P=5I=4!$	eQôÁàÄÄ91=\	Q]8€ÁàÌÀ9€ÁàÍ(€€€€¼¼Q!%L59LQ!PqàÔÀ5UMP	Q<Q!Y1UL(€€€€ÁààÀè€Áá…”°(€€€€¼¼I•¥ÍÑ•É•Íåµ‰½°€¡H¤(€€€€ÁààÄè€ÁáˆÀ°(€€€€¼¼‘•É•”Í¥¸(€€€€ÁààÈè€Áá‰°(€€€€¼¼€Ä¼ÈÍåµ‰½°(€€€€ÁààÌè€Áá‰˜°(€€€€¼¼%¹Ù•ÉÑ•€¡½Á•¸¤ÅÕ•ÍÑ¥½¸µ…É¬(€€€€ÁààÐè€ÁàÈÄÈÈ°(€€€€¼¼QÉ…‘•µ…É¬Íåµ‰½°€¡Q4¤(€€€€ÁààÔè€Áá„È°(€€€€¼¼•¹ÑÌÍåµ‰½°(€€€€ÁààØè€Áá„Ì°(€€€€¼¼A½Õ¹‘ÌÍÑ•É±¥¹œ(€€€€ÁààÜè€ÁàÈØÙ„°(€€€€¼¼5ÕÍ¥Œ€àÑ ¹½Ñ”(€€€€Áàààè€Áá”À°(€€€€¼¼±½Ý•É…Í”„°É…Ù”…•¹Ð(€€€€Áààäè€ÁàÈÀ°(€€€€¼¼ÑÉ…¹ÍÁ…É•¹ÐÍÁ…”€¡É•Õ±…È¤(€€€€Áàá„è€Áá”à°(€€€€¼¼±½Ý•É…Í””°É…Ù”…•¹Ð(€€€€Áàáˆè€Áá”È°(€€€€¼¼±½Ý•É…Í”„°¥ÉÕµ™±•à…•¹Ð(€€€€ÁàáŒè€Áá•„°(€€€€¼¼±½Ý•É…Í””°¥ÉÕµ™±•à…•¹Ð(€€€€Áàáè€Áá•”°(€€€€¼¼±½Ý•É…Í”¤°¥ÉÕµ™±•à…•¹Ð(€€€€Áàá”è€Áá˜Ð°(€€€€¼¼±½Ý•É…Í”¼°¥ÉÕµ™±•à…•¹Ð(€€€€Áàá˜è€Áá™ˆ°(€€€€¼¼±½Ý•É…Í”Ô°¥ÉÕµ™±•à…•¹Ð(€€€€¼¼Q!%L	1=,%91ULQ!€ÌÈaQ9€¡Q]<µ	eQ¤1%9€ÈÄ!IQIL(€€€€¼¼Q!P=5I=4!$	eQôÁàÄÈ91=\	Q]8€ÁàÈÀ9€ÁàÍ(€€€€ÁàäÀè€ÁáŒÄ°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•ÈÝ¥Ñ …ÕÑ”(€€€€ÁàäÄè€ÁáŒä°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•ÈÝ¥Ñ …ÕÑ”(€€€€ÁàäÈè€ÁáÌ°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•È<Ý¥Ñ …ÕÑ”(€€€€ÁàäÌè€Áá‘„°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•ÈTÝ¥Ñ …ÕÑ”(€€€€ÁàäÐè€Áá‘Œ°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•ÈTÝ¥Ñ ‘¥…É•Í¥Ì(€€€€ÁàäÔè€Áá™Œ°(€€€€¼¼±½Ý•É…Í”±•ÑÑ•ÈTÝ¥Ñ ‘¥…•É•Í¥Ì(€€€€ÁàäØè€ÁàÈÀÄà°(€€€€¼¼½Á•¹¥¹œÍ¥¹±”ÅÕ½Ñ”(€€€€ÁàäÜè€Áá„Ä°(€€€€¼¼¥¹Ù•ÉÑ••á±…µ…Ñ¥½¸µ…É¬(€€€€Áàäàè€ÁàÉ„°(€€€€¼¼…ÍÑ•É¥Í¬(€€€€Áàääè€ÁàÈÀÄä°(€€€€¼¼±½Í¥¹œÍ¥¹±”ÅÕ½Ñ”(€€€€Áàå„è€ÁàÈÔÀÄ°(€€€€¼¼‰½à‘É…Ý¥¹Ì¡•…Ùä¡½É¥é½¹Ñ…°(€€€€Áàåˆè€Áá„ä°(€€€€¼¼½ÁåÉ¥¡ÐÍ¥¸(€€€€ÁàåŒè€ÁàÈÄÈÀ°(€€€€¼¼M•ÉÙ¥”µ…É¬(€€€€Áàåè€ÁàÈÀÈÈ°(€€€€¼¼€¡É½Õ¹¤‰Õ±±•Ð(€€€€Áàå”è€ÁàÈÀÅŒ°(€€€€¼¼1•™Ð‘½Õ‰±”ÅÕ½Ñ…Ñ¥½¸µ…É¬(€€€€Áàå˜è€ÁàÈÀÅ°(€€€€¼¼I¥¡Ð‘½Õ‰±”ÅÕ½Ñ…Ñ¥½¸µ…É¬(€€€€Áá„Àè€ÁáŒÀ°(€€€€¼¼ÕÁÁ•É…Í”°É…Ù”…•¹Ð(€€€€Áá„Äè€ÁáŒÈ°(€€€€¼¼ÕÁÁ•É…Í”°¥ÉÕµ™±•à(€€€€Áá„Èè€ÁáŒÜ°(€€€€¼¼ÕÁÁ•É…Í”Ý¥Ñ •‘¥±±„(€€€€Áá„Ìè€ÁáŒà°(€€€€¼¼ÕÁÁ•É…Í”°É…Ù”…•¹Ð(€€€€Áá„Ðè€Áá„°(€€€€¼¼ÕÁÁ•É…Í”°¥ÉÕµ™±•à(€€€€Áá„Ôè€Ááˆ°(€€€€¼¼…Á¥Ñ…°±•ÑÑ•ÈÝ¥Ñ ‘¥…É•Í¥Ì(€€€€Áá„Øè€Áá•ˆ°(€€€€¼¼±½Ý•É…Í”±•ÑÑ•È”Ý¥Ñ ‘¥…É•Í¥Ì(€€€€Áá„Üè€Áá”°(€€€€¼¼ÕÁÁ•É…Í”$°¥ÉÕµ™±•à(€€€€Áá„àè€Áá˜°(€€€€¼¼ÕÁÁ•É…Í”$°Ý¥Ñ ‘¥…É•Í¥Ì(€€€€Áá„äè€Áá•˜°(€€€€¼¼±½Ý•É…Í”¤°Ý¥Ñ ‘¥…É•Í¥Ì(€€€€Áá…„è€ÁáÐ°(€€€€¼¼ÕÁÁ•É…Í”<°¥ÉÕµ™±•à(€€€€Áá…ˆè€Ááä°(€€€€¼¼ÕÁÁ•É…Í”T°É…Ù”…•¹Ð(€€€€Áá…Œè€Áá˜ä°(€€€€¼¼±½Ý•É…Í”Ô°É…Ù”…•¹Ð(€€€€Áá…è€Áá‘ˆ°(€€€€¼¼ÕÁÁ•É…Í”T°¥ÉÕµ™±•à(€€€€Áá…”è€Áá…ˆ°(€€€€¼¼±•™ÐµÁ½¥¹Ñ¥¹œ‘½Õ‰±”…¹±”ÅÕ½Ñ…Ñ¥½¸µ…É¬(€€€€Áá…˜è€Áá‰ˆ°(€€€€¼¼É¥¡ÐµÁ½¥¹Ñ¥¹œ‘½Õ‰±”…¹±”ÅÕ½Ñ…Ñ¥½¸µ…É¬(€€€€¼¼Q!%L	1=,%91ULQ!€ÌÈaQ9€¡Q]<µ	eQ¤1%9€ÈÄ!IQIL(€€€€¼¼Q!P=5I=4!$	eQôÁàÄÌ91=\	Q]8€ÁàÈÀ9€ÁàÍ(€€€€ÁáˆÀè€ÁáŒÌ°(€€€€¼¼UÁÁ•É…Í”°Ñ¥±‘”(€€€€ÁáˆÄè€Áá”Ì°(€€€€¼¼1½Ý•É…Í”„°Ñ¥±‘”(€€€€ÁáˆÈè€Áá°(€€€€¼¼UÁÁ•É…Í”$°…ÕÑ”…•¹Ð(€€€€ÁáˆÌè€ÁáŒ°(€€€€¼¼UÁÁ•É…Í”$°É…Ù”…•¹Ð(€€€€ÁáˆÐè€Áá•Œ°(€€€€¼¼1½Ý•É…Í”¤°É…Ù”…•¹Ð(€€€€ÁáˆÔè€ÁáÈ°(€€€€¼¼UÁÁ•É…Í”<°É…Ù”…•¹Ð(€€€€ÁáˆØè€Áá˜È°(€€€€¼¼1½Ý•É…Í”¼°É…Ù”…•¹Ð(€€€€ÁáˆÜè€ÁáÔ°(€€€€¼¼UÁÁ•É…Í”<°Ñ¥±‘”(€€€€Ááˆàè€Áá˜Ô°(€€€€¼¼1½Ý•É…Í”¼°Ñ¥±‘”(€€€€Ááˆäè€ÁàÝˆ°(€€€€¼¼=Á•¸ÕÉ±ä‰É…”(€€€€Áá‰„è€ÁàÝ°(€€€€¼¼±½Í¥¹œÕÉ±ä‰É…”(€€€€Áá‰ˆè€ÁàÕŒ°(€€€€¼¼	…­Í±…Í (€€€€Áá‰Œè€ÁàÕ”°(€€€€¼¼…É•Ð(€€€€Áá‰è€ÁàÕ˜°(€€€€¼¼U¹‘•ÉÍ½É”(€€€€Áá‰”è€ÁàÝŒ°(€€€€¼¼A¥Á”€¡Ù•ÉÑ¥…°±¥¹”¤(€€€€Áá‰˜è€ÁàÈÈÍŒ°(€€€€¼¼Q¥±‘”½Á•É…Ñ½È(€€€€ÁáŒÀè€ÁáŒÐ°(€€€€¼¼UÁÁ•É…Í”°Õµ±…ÕÐ(€€€€ÁáŒÄè€Áá”Ð°(€€€€¼¼1½Ý•É…Í”°Õµ±…ÕÐ(€€€€ÁáŒÈè€ÁáØ°(€€€€¼¼UÁÁ•É…Í”<°Õµ±…ÕÐ(€€€€ÁáŒÌè€Áá˜Ø°(€€€€¼¼1½Ý•É…Í”¼°Õµ±…ÕÐ(€€€€ÁáŒÐè€Áá‘˜°(€€€€¼¼ÍÍé•ÑÐ€¡Í¡…ÉÀL¤(€€€€ÁáŒÔè€Áá„Ô°(€€€€¼¼e•¸Íåµ‰½°(€€€€ÁáŒØè€Áá„Ð°(€€€€¼¼•¹•É¥ŒÕÉÉ•¹äÍ¥¸(€€€€ÁáŒÜè€ÁàÈÔÀÌ°(€€€€¼¼	½à‘É…Ý¥¹Ì¡•…ÙäÙ•ÉÑ¥…°(€€€€ÁáŒàè€ÁáŒÔ°(€€€€¼¼UÁÁ•É…Í”°É¥¹œ(€€€€ÁáŒäè€Áá”Ô°(€€€€¼¼1½Ý•É…Í”°É¥¹œ(€€€€Áá„è€Ááà°(€€€€¼¼UÁÁ•É…Í”<°ÍÑÉ½­”(€€€€Ááˆè€Áá˜à°(€€€€¼¼1½Ý•É…Í”¼°ÍÑÉ½¬(€€€€ÁáŒè€ÁàÈÔÁ˜°(€€€€¼¼	½à‘É…Ý¥¹Ì¡•…Ùä‘½Ý¸…¹É¥¡Ð(€€€€Ááè€ÁàÈÔÄÌ°(€€€€¼¼	½à‘É…Ý¥¹Ì¡•…Ùä‘½Ý¸…¹±•™Ð(€€€€Áá”è€ÁàÈÔÄÜ°(€€€€¼¼	½à‘É…Ý¥¹Ì¡•…ÙäÕÀ…¹É¥¡Ð(€€€€Áá˜è€ÁàÈÔÅˆ€¼¼	½à‘É…Ý¥¹Ì¡•…ÙäÕÀ…¹±•™Ð(€ôì((€€¼¨¨(€€€¨UÑ¥±Ì(€€€¨¼(€Ù…È•Ñ¡…É½É	åÑ”€ô™Õ¹Ñ¥½¸•Ñ¡…É½É	åÑ”¡}‰åÑ”¤ì(€€€É•ÑÕÉ¸MÑÉ¥¹œ¹™É½µ¡…É½‘”¡ÍÁ•¥…±•„ØÀá¡…ÉÍ½‘•Ím}‰åÑ•tñð}‰åÑ”¤ì(€ôì(€Ù…È9I}I=]L€ô€ÄÔì(€Ù…È9I}=1L€ô€ÄÀÀì(€€¼¼Q…‰±•ÌÑ¼±½½¬ÕÀÉ½Ü™É½´A‘…Ñ„(€Ù…ÈÉ½ÝÍ1½Ý Ä€ôì(€€€€ÁàÄÄè€Ä°(€€€€ÁàÄÈè€Ì°(€€€€ÁàÄÔè€Ô°(€€€€ÁàÄØè€Ü°(€€€€ÁàÄÜè€ä°(€€€€ÁàÄÀè€ÄÄ°(€€€€ÁàÄÌè€ÄÈ°(€€€€ÁàÄÐè€ÄÐ(€ôì(€Ù…ÈÉ½ÝÍ!¥¡ Ä€ôì(€€€€ÁàÄÄè€È°(€€€€ÁàÄÈè€Ð°(€€€€ÁàÄÔè€Ø°(€€€€ÁàÄØè€à°(€€€€ÁàÄÜè€ÄÀ°(€€€€ÁàÄÌè€ÄÌ°(€€€€ÁàÄÐè€ÄÔ(€ôì(€Ù…ÈÉ½ÝÍ1½Ý È€ôì(€€€€ÁàÄäè€Ä°(€€€€ÁàÅ„è€Ì°(€€€€ÁàÅè€Ô°(€€€€ÁàÅ”è€Ü°(€€€€ÁàÅ˜è€ä°(€€€€ÁàÄàè€ÄÄ°(€€€€ÁàÅˆè€ÄÈ°(€€€€ÁàÅŒè€ÄÐ(€ôì(€Ù…ÈÉ½ÝÍ!¥¡ È€ôì(€€€€ÁàÄäè€È°(€€€€ÁàÅ„è€Ð°(€€€€ÁàÅè€Ø°(€€€€ÁàÅ”è€à°(€€€€ÁàÅ˜è€ÄÀ°(€€€€ÁàÅˆè€ÄÌ°(€€€€ÁàÅŒè€ÄÔ(€ôì(€Ù…È‰…­É½Õ¹‘½±½ÉÌ€ôlÝ¡¥Ñ”œ°€É••¸œ°€‰±Õ”œ°€å…¸œ°€É•œ°€å•±±½Üœ°€µ…•¹Ñ„œ°€‰±…¬œ°€ÑÉ…¹ÍÁ…É•¹Ðtì(€Ù…È…ÁÑ¥½¹Í1½•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸…ÁÑ¥½¹Í1½•È ¤ì(€€€€€Ñ¡¥Ì¹Ñ¥µ”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Ù•É‰½Í•1•Ù•°€ô€Àì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô…ÁÑ¥½¹Í1½•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹±½œ€ô™Õ¹Ñ¥½¸±½œ¡Í•Ù•É¥Ñä°µÍœ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹Ù•É‰½Í•1•Ù•°€øôÍ•Ù•É¥Ñä¤ì(€€€€€€€Ù…È´€ôÑåÁ•½˜µÍœ€ôôô€™Õ¹Ñ¥½¸œ€üµÍœ ¤€èµÍœì(€€€€€€€±½•È¹±½œ¡Ñ¡¥Ì¹Ñ¥µ”€¬€ˆlˆ€¬Í•Ù•É¥Ñä€¬€‰t€ˆ€¬´¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸…ÁÑ¥½¹Í1½•Èì(€ô ¤ì(€Ù…È¹ÕµÉÉ…åQ½!•áÉÉ…ä€ô™Õ¹Ñ¥½¸¹ÕµÉÉ…åQ½!•áÉÉ…ä¡¹ÕµÉÉ…ä¤ì(€€€Ù…È¡•áÉÉ…ä€ômtì(€€€™½È€¡Ù…È¨€ô€Àì¨€ð¹ÕµÉÉ…ä¹±•¹Ñ ì¨¬¬¤ì(€€€€€¡•áÉÉ…ä¹ÁÕÍ ¡¹ÕµÉÉ…åm©t¹Ñ½MÑÉ¥¹œ ÄØ¤¤ì(€€€ô(€€€É•ÑÕÉ¸¡•áÉÉ…äì(€ôì(€Ù…ÈA•¹MÑ…Ñ”€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸A•¹MÑ…Ñ” ¤ì(€€€€€Ñ¡¥Ì¹™½É•É½Õ¹€ô€Ý¡¥Ñ”œì(€€€€€Ñ¡¥Ì¹Õ¹‘•É±¥¹”€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹¥Ñ…±¥Ì€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹‰…­É½Õ¹€ô€‰±…¬œì(€€€€€Ñ¡¥Ì¹™±…Í €ô™…±Í”ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼È€ôA•¹MÑ…Ñ”¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼È¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹™½É•É½Õ¹€ô€Ý¡¥Ñ”œì(€€€€€Ñ¡¥Ì¹Õ¹‘•É±¥¹”€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹¥Ñ…±¥Ì€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹‰…­É½Õ¹€ô€‰±…¬œì(€€€€€Ñ¡¥Ì¹™±…Í €ô™…±Í”ì(€€€ôì(€€€}ÁÉ½Ñ¼È¹Í•ÑMÑå±•Ì€ô™Õ¹Ñ¥½¸Í•ÑMÑå±•Ì¡ÍÑå±•Ì¤ì(€€€€€Ù…È…ÑÑÉ¥‰Ì€ôl™½É•É½Õ¹œ°€Õ¹‘•É±¥¹”œ°€¥Ñ…±¥Ìœ°€‰…­É½Õ¹œ°€™±…Í tì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð…ÑÑÉ¥‰Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…ÈÍÑå±”€ô…ÑÑÉ¥‰Ím¥tì(€€€€€€€¥˜€¡ÍÑå±•Ì¹¡…Í=Ý¹AÉ½Á•ÉÑä¡ÍÑå±”¤¤ì(€€€€€€€€€Ñ¡¥ÍmÍÑå±•t€ôÍÑå±•ÍmÍÑå±•tì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼È¹¥Í•™…Õ±Ð€ô™Õ¹Ñ¥½¸¥Í•™…Õ±Ð ¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™½É•É½Õ¹€ôôô€Ý¡¥Ñ”œ€˜˜€…Ñ¡¥Ì¹Õ¹‘•É±¥¹”€˜˜€…Ñ¡¥Ì¹¥Ñ…±¥Ì€˜˜Ñ¡¥Ì¹‰…­É½Õ¹€ôôô€‰±…¬œ€˜˜€…Ñ¡¥Ì¹™±…Í ì(€€€ôì(€€€}ÁÉ½Ñ¼È¹•ÅÕ…±Ì€ô™Õ¹Ñ¥½¸•ÅÕ…±Ì¡½Ñ¡•È¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™½É•É½Õ¹€ôôô½Ñ¡•È¹™½É•É½Õ¹€˜˜Ñ¡¥Ì¹Õ¹‘•É±¥¹”€ôôô½Ñ¡•È¹Õ¹‘•É±¥¹”€˜˜Ñ¡¥Ì¹¥Ñ…±¥Ì€ôôô½Ñ¡•È¹¥Ñ…±¥Ì€˜˜Ñ¡¥Ì¹‰…­É½Õ¹€ôôô½Ñ¡•È¹‰…­É½Õ¹€˜˜Ñ¡¥Ì¹™±…Í €ôôô½Ñ¡•È¹™±…Í ì(€€€ôì(€€€}ÁÉ½Ñ¼È¹½Áä€ô™Õ¹Ñ¥½¸½Áä¡¹•ÝA•¹MÑ…Ñ”¤ì(€€€€€Ñ¡¥Ì¹™½É•É½Õ¹€ô¹•ÝA•¹MÑ…Ñ”¹™½É•É½Õ¹ì(€€€€€Ñ¡¥Ì¹Õ¹‘•É±¥¹”€ô¹•ÝA•¹MÑ…Ñ”¹Õ¹‘•É±¥¹”ì(€€€€€Ñ¡¥Ì¹¥Ñ…±¥Ì€ô¹•ÝA•¹MÑ…Ñ”¹¥Ñ…±¥Ìì(€€€€€Ñ¡¥Ì¹‰…­É½Õ¹€ô¹•ÝA•¹MÑ…Ñ”¹‰…­É½Õ¹ì(€€€€€Ñ¡¥Ì¹™±…Í €ô¹•ÝA•¹MÑ…Ñ”¹™±…Í ì(€€€ôì(€€€}ÁÉ½Ñ¼È¹Ñ½MÑÉ¥¹œ€ô™Õ¹Ñ¥½¸Ñ½MÑÉ¥¹œ ¤ì(€€€€€É•ÑÕÉ¸€½±½Èôœ€¬Ñ¡¥Ì¹™½É•É½Õ¹€¬€œ°Õ¹‘•É±¥¹”ôœ€¬Ñ¡¥Ì¹Õ¹‘•É±¥¹”€¬€œ°¥Ñ…±¥Ìôœ€¬Ñ¡¥Ì¹¥Ñ…±¥Ì€¬€œ°‰…­É½Õ¹ôœ€¬Ñ¡¥Ì¹‰…­É½Õ¹€¬€œ°™±…Í ôœ€¬Ñ¡¥Ì¹™±…Í ì(€€€ôì(€€€É•ÑÕÉ¸A•¹MÑ…Ñ”ì(€ô ¤ì(€€¼¨¨(€€€¨U¹¥½‘”¡…É…Ñ•ÈÝ¥Ñ ÍÑå±¥¹œ…¹‰…­É½Õ¹¸(€€€¨½¹ÍÑÉÕÑ½È(€€€¨¼(€Ù…ÈMÑå±•‘U¹¥½‘•¡…È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸MÑå±•‘U¹¥½‘•¡…È ¤ì(€€€€€Ñ¡¥Ì¹Õ¡…È€ô€œ€œì(€€€€€Ñ¡¥Ì¹Á•¹MÑ…Ñ”€ô¹•ÜA•¹MÑ…Ñ” ¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ì€ôMÑå±•‘U¹¥½‘•¡…È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ì¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹Õ¡…È€ô€œ€œì(€€€€€Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹É•Í•Ð ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹Í•Ñ¡…È€ô™Õ¹Ñ¥½¸Í•Ñ¡…È¡Õ¡…È°¹•ÝA•¹MÑ…Ñ”¤ì(€€€€€Ñ¡¥Ì¹Õ¡…È€ôÕ¡…Èì(€€€€€Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹½Áä¡¹•ÝA•¹MÑ…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹Í•ÑA•¹MÑ…Ñ”€ô™Õ¹Ñ¥½¸Í•ÑA•¹MÑ…Ñ”¡¹•ÝA•¹MÑ…Ñ”¤ì(€€€€€Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹½Áä¡¹•ÝA•¹MÑ…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹•ÅÕ…±Ì€ô™Õ¹Ñ¥½¸•ÅÕ…±Ì¡½Ñ¡•È¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹Õ¡…È€ôôô½Ñ¡•È¹Õ¡…È€˜˜Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹•ÅÕ…±Ì¡½Ñ¡•È¹Á•¹MÑ…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹½Áä€ô™Õ¹Ñ¥½¸½Áä¡¹•Ý¡…È¤ì(€€€€€Ñ¡¥Ì¹Õ¡…È€ô¹•Ý¡…È¹Õ¡…Èì(€€€€€Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹½Áä¡¹•Ý¡…È¹Á•¹MÑ…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹¥ÍµÁÑä€ô™Õ¹Ñ¥½¸¥ÍµÁÑä ¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹Õ¡…È€ôôô€œ€œ€˜˜Ñ¡¥Ì¹Á•¹MÑ…Ñ”¹¥Í•™…Õ±Ð ¤ì(€€€ôì(€€€É•ÑÕÉ¸MÑå±•‘U¹¥½‘•¡…Èì(€ô ¤ì(€€¼¨¨(€€€¨´ØÀàÉ½Ü½¹Í¥ÍÑ¥¹œ½˜9I}=1L¥¹ÍÑ…¹•Ì½˜MÑå±•‘U¹¥½‘•¡…È¸(€€€¨½¹ÍÑÉÕÑ½È(€€€¨¼(€Ù…ÈI½Ü€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸I½Ü¡±½•È¤ì(€€€€€Ñ¡¥Ì¹¡…ÉÌ€ômtì(€€€€€Ñ¡¥Ì¹Á½Ì€ô€Àì(€€€€€Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”€ô¹•ÜA•¹MÑ…Ñ” ¤ì(€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±½•È€ôÙ½¥€Àì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹¡…ÉÌ¹ÁÕÍ ¡¹•ÜMÑå±•‘U¹¥½‘•¡…È ¤¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È€ô±½•Èì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ð€ôI½Ü¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ð¹•ÅÕ…±Ì€ô™Õ¹Ñ¥½¸•ÅÕ…±Ì¡½Ñ¡•È¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹¡…ÉÍm¥t¹•ÅÕ…±Ì¡½Ñ¡•È¹¡…ÉÍm¥t¤¤ì(€€€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹½Áä€ô™Õ¹Ñ¥½¸½Áä¡½Ñ¡•È¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹¡…ÉÍm¥t¹½Áä¡½Ñ¡•È¹¡…ÉÍm¥t¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹¥ÍµÁÑä€ô™Õ¹Ñ¥½¸¥ÍµÁÑä ¤ì(€€€€€Ù…È•µÁÑä€ôÑÉÕ”ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹¡…ÉÍm¥t¹¥ÍµÁÑä ¤¤ì(€€€€€€€€€•µÁÑä€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸•µÁÑäì(€€€ô((€€€€¼¨¨(€€€€€¨€M•ÐÑ¡”ÕÉÍ½ÈÑ¼„Ù…±¥½±Õµ¸¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ð¹Í•ÑÕÉÍ½È€ô™Õ¹Ñ¥½¸Í•ÑÕÉÍ½È¡…‰ÍA½Ì¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹Á½Ì€„ôô…‰ÍA½Ì¤ì(€€€€€€€Ñ¡¥Ì¹Á½Ì€ô…‰ÍA½Ìì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹Á½Ì€ð€À¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ì°€9•…Ñ¥Ù”ÕÉÍ½ÈÁ½Í¥Ñ¥½¸€œ€¬Ñ¡¥Ì¹Á½Ì¤ì(€€€€€€€Ñ¡¥Ì¹Á½Ì€ô€Àì(€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹Á½Ì€ø9I}=1L¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ì°€Q½¼±…É”ÕÉÍ½ÈÁ½Í¥Ñ¥½¸€œ€¬Ñ¡¥Ì¹Á½Ì¤ì(€€€€€€€Ñ¡¥Ì¹Á½Ì€ô9I}=1Lì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨5½Ù”Ñ¡”ÕÉÍ½ÈÉ•±…Ñ¥Ù”Ñ¼ÕÉÉ•¹ÐÁ½Í¥Ñ¥½¸¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ð¹µ½Ù•ÕÉÍ½È€ô™Õ¹Ñ¥½¸µ½Ù•ÕÉÍ½È¡É•±A½Ì¤ì(€€€€€Ù…È¹•ÝA½Ì€ôÑ¡¥Ì¹Á½Ì€¬É•±A½Ìì(€€€€€¥˜€¡É•±A½Ì€ø€Ä¤ì(€€€€€€€™½È€¡Ù…È¤€ôÑ¡¥Ì¹Á½Ì€¬€Äì¤€ð¹•ÝA½Ì€¬€Äì¤¬¬¤ì(€€€€€€€€€Ñ¡¥Ì¹¡…ÉÍm¥t¹Í•ÑA•¹MÑ…Ñ”¡Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¤ì(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹Í•ÑÕÉÍ½È¡¹•ÝA½Ì¤ì(€€€ô((€€€€¼¨¨(€€€€€¨	…­ÍÁ…”°µ½Ù”½¹”ÍÑ•À‰…¬…¹±•…È¡…É…Ñ•È¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ð¹‰…­MÁ…”€ô™Õ¹Ñ¥½¸‰…­MÁ…” ¤ì(€€€€€Ñ¡¥Ì¹µ½Ù•ÕÉÍ½È ´Ä¤ì(€€€€€Ñ¡¥Ì¹¡…ÉÍmÑ¡¥Ì¹Á½Ít¹Í•Ñ¡…È œ€œ°Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹¥¹Í•ÉÑ¡…È€ô™Õ¹Ñ¥½¸¥¹Í•ÉÑ¡…È¡}‰åÑ”È¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€¥˜€¡}‰åÑ”È€øô€ÁàäÀ¤ì(€€€€€€€€¼¼áÑ•¹‘•¡…È(€€€€€€€Ñ¡¥Ì¹‰…­MÁ…” ¤ì(€€€€€ô(€€€€€Ù…È}¡…È€ô•Ñ¡…É½É	åÑ”¡}‰åÑ”È¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹Á½Ì€øô9I}=1L¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ À°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€…¹¹½Ð¥¹Í•ÉÐ€œ€¬}‰åÑ”È¹Ñ½MÑÉ¥¹œ ÄØ¤€¬€œ€ œ€¬}¡…È€¬€œ¤…ÐÁ½Í¥Ñ¥½¸€œ€¬}Ñ¡¥Ì¹Á½Ì€¬€œ¸M­¥ÁÁ¥¹œ¥Ð„œì(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡…ÉÍmÑ¡¥Ì¹Á½Ít¹Í•Ñ¡…È¡}¡…È°Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¤ì(€€€€€Ñ¡¥Ì¹µ½Ù•ÕÉÍ½È Ä¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹±•…ÉÉ½µA½Ì€ô™Õ¹Ñ¥½¸±•…ÉÉ½µA½Ì¡ÍÑ…ÉÑA½Ì¤ì(€€€€€Ù…È¤ì(€€€€€™½È€¡¤€ôÍÑ…ÉÑA½Ìì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹¡…ÉÍm¥t¹É•Í•Ð ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹±•…È€ô™Õ¹Ñ¥½¸±•…È ¤ì(€€€€€Ñ¡¥Ì¹±•…ÉÉ½µA½Ì À¤ì(€€€€€Ñ¡¥Ì¹Á½Ì€ô€Àì(€€€€€Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¹É•Í•Ð ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹±•…ÉQ½¹‘=™I½Ü€ô™Õ¹Ñ¥½¸±•…ÉQ½¹‘=™I½Ü ¤ì(€€€€€Ñ¡¥Ì¹±•…ÉÉ½µA½Ì¡Ñ¡¥Ì¹Á½Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹•ÑQ•áÑMÑÉ¥¹œ€ô™Õ¹Ñ¥½¸•ÑQ•áÑMÑÉ¥¹œ ¤ì(€€€€€Ù…È¡…ÉÌ€ômtì(€€€€€Ù…È•µÁÑä€ôÑÉÕ”ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}=1Lì¤¬¬¤ì(€€€€€€€Ù…È}¡…ÈÈ€ôÑ¡¥Ì¹¡…ÉÍm¥t¹Õ¡…Èì(€€€€€€€¥˜€¡}¡…ÈÈ€„ôô€œ€œ¤ì(€€€€€€€€€•µÁÑä€ô™…±Í”ì(€€€€€€€ô(€€€€€€€¡…ÉÌ¹ÁÕÍ ¡}¡…ÈÈ¤ì(€€€€€ô(€€€€€¥˜€¡•µÁÑä¤ì(€€€€€€€É•ÑÕÉ¸€œœì(€€€€€ô•±Í”ì(€€€€€€€É•ÑÕÉ¸¡…ÉÌ¹©½¥¸ œœ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ð¹Í•ÑA•¹MÑå±•Ì€ô™Õ¹Ñ¥½¸Í•ÑA•¹MÑå±•Ì¡ÍÑå±•Ì¤ì(€€€€€Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¹Í•ÑMÑå±•Ì¡ÍÑå±•Ì¤ì(€€€€€Ù…ÈÕÉÉ¡…È€ôÑ¡¥Ì¹¡…ÉÍmÑ¡¥Ì¹Á½Ítì(€€€€€ÕÉÉ¡…È¹Í•ÑA•¹MÑ…Ñ”¡Ñ¡¥Ì¹ÕÉÉA•¹MÑ…Ñ”¤ì(€€€ôì(€€€É•ÑÕÉ¸I½Üì(€ô ¤ì((€€¼¨¨(€€€¨-••À„´ØÀàÍÉ••¸½˜€ÌÉàÄÔÍÑå±•¡…É…Ñ•ÉÌ(€€€¨½¹ÍÑÉÕÑ½È(€€€¨¼(€Ù…È…ÁÑ¥½¹MÉ••¸€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸…ÁÑ¥½¹MÉ••¸¡±½•È¤ì(€€€€€Ñ¡¥Ì¹É½ÝÌ€ômtì(€€€€€Ñ¡¥Ì¹ÕÉÉI½Ü€ô9I}I=]L€´€Äì(€€€€€Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±½•È€ôÙ½¥€Àì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹É½ÝÌ¹ÁÕÍ ¡¹•ÜI½Ü¡±½•È¤¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È€ô±½•Èì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ô€ô…ÁÑ¥½¹MÉ••¸¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ô¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹É½ÝÍm¥t¹±•…È ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÕÉÉI½Ü€ô9I}I=]L€´€Äì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹•ÅÕ…±Ì€ô™Õ¹Ñ¥½¸•ÅÕ…±Ì¡½Ñ¡•È¤ì(€€€€€Ù…È•ÅÕ…°€ôÑÉÕ”ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹É½ÝÍm¥t¹•ÅÕ…±Ì¡½Ñ¡•È¹É½ÝÍm¥t¤¤ì(€€€€€€€€€•ÅÕ…°€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸•ÅÕ…°ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹½Áä€ô™Õ¹Ñ¥½¸½Áä¡½Ñ¡•È¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹É½ÝÍm¥t¹½Áä¡½Ñ¡•È¹É½ÝÍm¥t¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹¥ÍµÁÑä€ô™Õ¹Ñ¥½¸¥ÍµÁÑä ¤ì(€€€€€Ù…È•µÁÑä€ôÑÉÕ”ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹É½ÝÍm¥t¹¥ÍµÁÑä ¤¤ì(€€€€€€€€€•µÁÑä€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸•µÁÑäì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹‰…­MÁ…”€ô™Õ¹Ñ¥½¸‰…­MÁ…” ¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹‰…­MÁ…” ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹±•…ÉQ½¹‘=™I½Ü€ô™Õ¹Ñ¥½¸±•…ÉQ½¹‘=™I½Ü ¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹±•…ÉQ½¹‘=™I½Ü ¤ì(€€€ô((€€€€¼¨¨(€€€€€¨%¹Í•ÉÐ„¡…É…Ñ•È€¡Ý¥Ñ¡½ÕÐÍÑå±¥¹œ¤¥¸Ñ¡”ÕÉÉ•¹ÐÉ½Ü¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ô¹¥¹Í•ÉÑ¡…È€ô™Õ¹Ñ¥½¸¥¹Í•ÉÑ¡…È¡}¡…ÈÌ¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹¥¹Í•ÉÑ¡…È¡}¡…ÈÌ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹Í•ÑA•¸€ô™Õ¹Ñ¥½¸Í•ÑA•¸¡ÍÑå±•Ì¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹Í•ÑA•¹MÑå±•Ì¡ÍÑå±•Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹µ½Ù•ÕÉÍ½È€ô™Õ¹Ñ¥½¸µ½Ù•ÕÉÍ½È¡É•±A½Ì¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹µ½Ù•ÕÉÍ½È¡É•±A½Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹Í•ÑÕÉÍ½È€ô™Õ¹Ñ¥½¸Í•ÑÕÉÍ½È¡…‰ÍA½Ì¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€Í•ÑÕÉÍ½Èè€œ€¬…‰ÍA½Ì¤ì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€É½Ü¹Í•ÑÕÉÍ½È¡…‰ÍA½Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹Í•ÑA€ô™Õ¹Ñ¥½¸Í•ÑA¡Á……Ñ„¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸€Á……Ñ„€ô€œ€¬ÍÑÉ¥¹¥™ä¡Á……Ñ„¤ì(€€€€€ô¤ì(€€€€€Ù…È¹•ÝI½Ü€ôÁ……Ñ„¹É½Ü€´€Äì(€€€€€¥˜€¡Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€˜˜¹•ÝI½Ü€ðÑ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€´€Ä¤ì(€€€€€€€¹•ÝI½Ü€ôÑ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€´€Äì(€€€€€ô((€€€€€€¼¼5…­”ÍÕÉ”Ñ¡¥Ì½¹±ä…™™•ÑÌI½±°µÕÀ…ÁÑ¥½¹Ì‰ä¡•­¥¹œÑ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ(€€€€€¥˜€¡Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€˜˜Ñ¡¥Ì¹ÕÉÉI½Ü€„ôô¹•ÝI½Ü¤ì(€€€€€€€€¼¼±•…È…±°É½ÝÌ™¥ÉÍÐ(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€€€Ñ¡¥Ì¹É½ÝÍm¥t¹±•…È ¤ì(€€€€€€€ô((€€€€€€€€¼¼½ÁäÑ¡¥Ì¹¹ÉI½±±UÁI½ÝÌÉ½ÝÌ™É½´±…ÍÑ=ÕÑÁÕÑMÉ••¸…¹Á±…”¥Ð¥¸Ñ¡”¹•ÝI½Ü±½…Ñ¥½¸(€€€€€€€€¼¼Ñ½ÁI½Ý%¹‘•à€´Ñ¡”ÍÑ…ÉÐ½˜É½ÝÌÑ¼½Áä€¡¥¹±ÕÍ¥Ù”¥¹‘•à¤(€€€€€€€Ù…ÈÑ½ÁI½Ý%¹‘•à€ôÑ¡¥Ì¹ÕÉÉI½Ü€¬€Ä€´Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌì(€€€€€€€€¼¼]”½¹±ä½Áä¥˜Ñ¡”±…ÍÐÁ½Í¥Ñ¥½¸Ý…Ì…±É•…‘äÍ¡½Ý¸¸(€€€€€€€€¼¼]”ÕÍ”Ñ¡”Õ•MÑ…ÉÑQ¥µ”Ù…±Õ”Ñ¼¡•¬Ñ¡¥Ì¸(€€€€€€€Ù…È±…ÍÑ=ÕÑÁÕÑMÉ••¸€ôÑ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸ì(€€€€€€€¥˜€¡±…ÍÑ=ÕÑÁÕÑMÉ••¸¤ì(€€€€€€€€€Ù…ÈÁÉ•Ù1¥¹•Q¥µ”€ô±…ÍÑ=ÕÑÁÕÑMÉ••¸¹É½ÝÍmÑ½ÁI½Ý%¹‘•át¹Õ•MÑ…ÉÑQ¥µ”ì(€€€€€€€€€Ù…ÈÑ¥µ”€ôÑ¡¥Ì¹±½•È¹Ñ¥µ”ì(€€€€€€€€€¥˜€¡ÁÉ•Ù1¥¹•Q¥µ”€„ôô¹Õ±°€˜˜Ñ¥µ”€„ôô¹Õ±°€˜˜ÁÉ•Ù1¥¹•Q¥µ”€ðÑ¥µ”¤ì(€€€€€€€€€€€™½È€¡Ù…È}¤€ô€Àì}¤€ðÑ¡¥Ì¹¹ÉI½±±UÁI½ÝÌì}¤¬¬¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹É½ÝÍm¹•ÝI½Ü€´Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€¬}¤€¬€Åt¹½Áä¡±…ÍÑ=ÕÑÁÕÑMÉ••¸¹É½ÝÍmÑ½ÁI½Ý%¹‘•à€¬}¥t¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹ÕÉÉI½Ü€ô¹•ÝI½Üì(€€€€€Ù…ÈÉ½Ü€ôÑ¡¥Ì¹É½ÝÍmÑ¡¥Ì¹ÕÉÉI½Ýtì(€€€€€¥˜€¡Á……Ñ„¹¥¹‘•¹Ð€„ôô¹Õ±°¤ì(€€€€€€€Ù…È¥¹‘•¹Ð€ôÁ……Ñ„¹¥¹‘•¹Ðì(€€€€€€€Ù…ÈÁÉ•ÙA½Ì€ô5…Ñ ¹µ…à¡¥¹‘•¹Ð€´€Ä°€À¤ì(€€€€€€€É½Ü¹Í•ÑÕÉÍ½È¡Á……Ñ„¹¥¹‘•¹Ð¤ì(€€€€€€€Á……Ñ„¹½±½È€ôÉ½Ü¹¡…ÉÍmÁÉ•ÙA½Ít¹Á•¹MÑ…Ñ”¹™½É•É½Õ¹ì(€€€€€ô(€€€€€Ù…ÈÍÑå±•Ì€ôì(€€€€€€€™½É•É½Õ¹èÁ……Ñ„¹½±½È°(€€€€€€€Õ¹‘•É±¥¹”èÁ……Ñ„¹Õ¹‘•É±¥¹”°(€€€€€€€¥Ñ…±¥ÌèÁ……Ñ„¹¥Ñ…±¥Ì°(€€€€€€€‰…­É½Õ¹è€‰±…¬œ°(€€€€€€€™±…Í è™…±Í”(€€€€€ôì(€€€€€Ñ¡¥Ì¹Í•ÑA•¸¡ÍÑå±•Ì¤ì(€€€ô((€€€€¼¨¨(€€€€€¨M•Ð‰…­É½Õ¹½•áÑÉ„™½É•É½Õ¹°‰ÕÐ™¥ÉÍÐ‘¼‰…­}ÍÁ…”°…¹Ñ¡•¸¥¹Í•ÉÐÍÁ…”€¡‰…­Ý…É‘Ì½µÁ…Ñ¥‰¥±¥Ñä¤¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ô¹Í•Ñ	­…Ñ„€ô™Õ¹Ñ¥½¸Í•Ñ	­…Ñ„¡‰­…Ñ„¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸€‰­…Ñ„€ô€œ€¬ÍÑÉ¥¹¥™ä¡‰­…Ñ„¤ì(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹‰…­MÁ…” ¤ì(€€€€€Ñ¡¥Ì¹Í•ÑA•¸¡‰­…Ñ„¤ì(€€€€€Ñ¡¥Ì¹¥¹Í•ÉÑ¡…È ÁàÈÀ¤ì€¼¼MÁ…”(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹Í•ÑI½±±UÁI½ÝÌ€ô™Õ¹Ñ¥½¸Í•ÑI½±±UÁI½ÝÌ¡¹ÉI½ÝÌ¤ì(€€€€€Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€ô¹ÉI½ÝÌì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹É½±±UÀ€ô™Õ¹Ñ¥½¸É½±±UÀ ¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌ€ôôô¹Õ±°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ì°€É½±±}ÕÀ‰ÕÐ¹ÉI½±±UÁI½ÝÌ¹½ÐÍ•Ðå•Ðœ¤ì(€€€€€€€É•ÑÕÉ¸ì€¼¼9½ÐÁÉ½Á•É±äÍ•ÑÕÀ(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ä°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸}Ñ¡¥ÌÈ¹•Ñ¥ÍÁ±…åQ•áÐ ¤ì(€€€€€ô¤ì(€€€€€Ù…ÈÑ½ÁI½Ý%¹‘•à€ôÑ¡¥Ì¹ÕÉÉI½Ü€¬€Ä€´Ñ¡¥Ì¹¹ÉI½±±UÁI½ÝÌì(€€€€€Ù…ÈÑ½ÁI½Ü€ôÑ¡¥Ì¹É½ÝÌ¹ÍÁ±¥”¡Ñ½ÁI½Ý%¹‘•à°€Ä¥lÁtì(€€€€€Ñ½ÁI½Ü¹±•…È ¤ì(€€€€€Ñ¡¥Ì¹É½ÝÌ¹ÍÁ±¥”¡Ñ¡¥Ì¹ÕÉÉI½Ü°€À°Ñ½ÁI½Ü¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€I½±±¥¹œÕÀœ¤ì(€€€€€€¼¼Ñ¡¥Ì¹±½•È¹±½œ¡Y•É‰½Í•1•Ù•°¹QaP°Ñ¡¥Ì¹•Ñ}‘¥ÍÁ±…å}Ñ•áÐ ¤¤(€€€ô((€€€€¼¨¨(€€€€€¨•Ð…±°¹½¸µ•µÁÑäÉ½ÝÌÝ¥Ñ …ÌÕ¹¥½‘”Ñ•áÐ¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ô¹•Ñ¥ÍÁ±…åQ•áÐ€ô™Õ¹Ñ¥½¸•Ñ¥ÍÁ±…åQ•áÐ¡…Í=¹•I½Ü¤ì(€€€€€…Í=¹•I½Ü€ô…Í=¹•I½Üñð™…±Í”ì(€€€€€Ù…È‘¥ÍÁ±…åQ•áÐ€ômtì(€€€€€Ù…ÈÑ•áÐ€ô€œœì(€€€€€Ù…ÈÉ½Ý9È€ô€´Äì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð9I}I=]Lì¤¬¬¤ì(€€€€€€€Ù…ÈÉ½ÝQ•áÐ€ôÑ¡¥Ì¹É½ÝÍm¥t¹•ÑQ•áÑMÑÉ¥¹œ ¤ì(€€€€€€€¥˜€¡É½ÝQ•áÐ¤ì(€€€€€€€€€É½Ý9È€ô¤€¬€Äì(€€€€€€€€€¥˜€¡…Í=¹•I½Ü¤ì(€€€€€€€€€€€‘¥ÍÁ±…åQ•áÐ¹ÁÕÍ  I½Ü€œ€¬É½Ý9È€¬€ˆè€œˆ€¬É½ÝQ•áÐ€¬€ˆœˆ¤ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€‘¥ÍÁ±…åQ•áÐ¹ÁÕÍ ¡É½ÝQ•áÐ¹ÑÉ¥´ ¤¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡‘¥ÍÁ±…åQ•áÐ¹±•¹Ñ €ø€À¤ì(€€€€€€€¥˜€¡…Í=¹•I½Ü¤ì(€€€€€€€€€Ñ•áÐ€ô€lœ€¬‘¥ÍÁ±…åQ•áÐ¹©½¥¸ œð€œ¤€¬€tœì(€€€€€€€ô•±Í”ì(€€€€€€€€€Ñ•áÐ€ô‘¥ÍÁ±…åQ•áÐ¹©½¥¸ q¸œ¤ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ•áÐì(€€€ôì(€€€}ÁÉ½Ñ¼Ô¹•ÑQ•áÑ¹‘½Éµ…Ð€ô™Õ¹Ñ¥½¸•ÑQ•áÑ¹‘½Éµ…Ð ¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹É½ÝÌì(€€€ôì(€€€É•ÑÕÉ¸…ÁÑ¥½¹MÉ••¸ì(€ô ¤ì((€€¼¼Ù…Èµ½‘•Ì€ôl5=}I=10µU@œ°€5=}A=@µ=8œ°€5=}A%9Pµ=8œ°€5=}QaPtì(€Ù…È•„ØÀá¡…¹¹•°€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸•„ØÀá¡…¹¹•°¡¡…¹¹•±9Õµ‰•È°½ÕÑÁÕÑ¥±Ñ•È°±½•È¤ì(€€€€€Ñ¡¥Ì¹¡9È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹µ½‘”€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹Ù•É‰½Í”€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÕÉÉI½±±UÁI½Ü€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±½•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¡9È€ô¡…¹¹•±9Õµ‰•Èì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È€ô½ÕÑÁÕÑ¥±Ñ•Èì(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Ù•É‰½Í”€ô€Àì(€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä€ô¹•Ü…ÁÑ¥½¹MÉ••¸¡±½•È¤ì(€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä€ô¹•Ü…ÁÑ¥½¹MÉ••¸¡±½•È¤ì(€€€€€Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸€ô¹•Ü…ÁÑ¥½¹MÉ••¸¡±½•È¤ì(€€€€€Ñ¡¥Ì¹ÕÉÉI½±±UÁI½Ü€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹É½ÝÍm9I}I=]L€´€Åtì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éäì(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ô¹Õ±°ì€¼¼-••ÁÌÑÉ…¬½˜Ý¡•É”„Õ”ÍÑ…ÉÑ•¸(€€€€€Ñ¡¥Ì¹±½•È€ô±½•Èì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ø€ô•„ØÀá¡…¹¹•°¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ø¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä¹É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸¹É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹ÕÉÉI½±±UÁI½Ü€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹É½ÝÍm9I}I=]L€´€Åtì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éäì(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸•Ñ!…¹‘±•È ¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•Èì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Í•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸Í•Ñ!…¹‘±•È¡¹•Ý!…¹‘±•È¤ì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È€ô¹•Ý!…¹‘±•Èì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Í•ÑA€ô™Õ¹Ñ¥½¸Í•ÑA¡Á……Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹Í•ÑA¡Á……Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Í•Ñ	­…Ñ„€ô™Õ¹Ñ¥½¸Í•Ñ	­…Ñ„¡‰­…Ñ„¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹Í•Ñ	­…Ñ„¡‰­…Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Í•Ñ5½‘”€ô™Õ¹Ñ¥½¸Í•Ñ5½‘”¡¹•Ý5½‘”¤ì(€€€€€¥˜€¡¹•Ý5½‘”€ôôôÑ¡¥Ì¹µ½‘”¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹•Ý5½‘”ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸€5=ôœ€¬¹•Ý5½‘”ì(€€€€€ô¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ½‘”€ôôô€5=}A=@µ=8œ¤ì(€€€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éäì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éäì(€€€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹É•Í•Ð ¤ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹µ½‘”€„ôô€5=}I=10µU@œ¤ì(€€€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹¹ÉI½±±UÁI½ÝÌ€ô¹Õ±°ì(€€€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä¹¹ÉI½±±UÁI½ÝÌ€ô¹Õ±°ì(€€€€€ô(€€€€€Ñ¡¥Ì¹µ½‘”€ô¹•Ý5½‘”ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹¥¹Í•ÉÑ¡…ÉÌ€ô™Õ¹Ñ¥½¸¥¹Í•ÉÑ¡…ÉÌ¡¡…ÉÌ¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð¡…ÉÌ¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹¥¹Í•ÉÑ¡…È¡¡…ÉÍm¥t¤ì(€€€€€ô(€€€€€Ù…ÈÍÉ••¸€ôÑ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôôôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä€ü€%M@œ€è€9=9}%M@œì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€É•ÑÕÉ¸ÍÉ••¸€¬€œè€œ€¬}Ñ¡¥ÌÌ¹ÝÉ¥Ñ•MÉ••¸¹•Ñ¥ÍÁ±…åQ•áÐ¡ÑÉÕ”¤ì(€€€€€ô¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ½‘”€ôôô€5=}A%9Pµ=8œñðÑ¡¥Ì¹µ½‘”€ôôô€5=}I=10µU@œ¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ä°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€%MA1eè€œ€¬}Ñ¡¥ÌÌ¹‘¥ÍÁ±…å•‘5•µ½Éä¹•Ñ¥ÍÁ±…åQ•áÐ¡ÑÉÕ”¤ì(€€€€€€€ô¤ì(€€€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ” ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹I0€ô™Õ¹Ñ¥½¸I0 ¤ì(€€€€€€¼¼I•ÍÕµ”…ÁÑ¥½¸1½…‘¥¹œ€¡ÍÝ¥Ñ µ½‘”Ñ¼A½À=¸¤(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€I0€´I•ÍÕµ”…ÁÑ¥½¸1½…‘¥¹œœ¤ì(€€€€€Ñ¡¥Ì¹Í•Ñ5½‘” 5=}A=@µ=8œ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹	L€ô™Õ¹Ñ¥½¸	L ¤ì(€€€€€€¼¼	…­MÁ…”(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€	L€´	…­MÁ…”œ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ½‘”€ôôô€5=}QaPœ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹‰…­MÁ…” ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôôôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¤ì(€€€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ” ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹=€ô™Õ¹Ñ¥½¸= ¤ì(€€€€€€¼¼I•Í•ÉÙ•€¡™½Éµ•É±ä±…É´=™˜¤(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹=8€ô™Õ¹Ñ¥½¸=8 ¤ì(€€€€€€¼¼I•Í•ÉÙ•€¡™½Éµ•É±ä±…É´=¸¤(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹H€ô™Õ¹Ñ¥½¸H ¤ì(€€€€€€¼¼•±•Ñ”Ñ¼¹½˜I½Ü(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€H´•±•Ñ”Ñ¼¹½˜I½Üœ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹±•…ÉQ½¹‘=™I½Ü ¤ì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ” ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹IT€ô™Õ¹Ñ¥½¸IT¡¹ÉI½ÝÌ¤ì(€€€€€€¼¼I½±°µUÀ…ÁÑ¥½¹Ì´È°Ì±½È€ÐI½ÝÌ(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€IT œ€¬¹ÉI½ÝÌ€¬€œ¤€´I½±°UÀœ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éäì(€€€€€Ñ¡¥Ì¹Í•Ñ5½‘” 5=}I=10µU@œ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹Í•ÑI½±±UÁI½ÝÌ¡¹ÉI½ÝÌ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹=8€ô™Õ¹Ñ¥½¸=8 ¤ì(€€€€€€¼¼±…Í =¸(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€=8€´±…Í =¸œ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹Í•ÑA•¸¡ì(€€€€€€€™±…Í èÑÉÕ”(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹I€ô™Õ¹Ñ¥½¸I ¤ì(€€€€€€¼¼I•ÍÕµ”¥É•Ð…ÁÑ¥½¹¥¹œ€¡ÍÝ¥Ñ µ½‘”Ñ¼A…¥¹Ñ=¸¤(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€I€´I•ÍÕµ”¥É•Ð…ÁÑ¥½¹¥¹œœ¤ì(€€€€€Ñ¡¥Ì¹Í•Ñ5½‘” 5=}A%9Pµ=8œ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹QH€ô™Õ¹Ñ¥½¸QH ¤ì(€€€€€€¼¼Q•áÐI•ÍÑ…ÉÐ¥¸Ñ•áÐµ½‘”€¡¹½ÐÍÕÁÁ½ÉÑ•°¡½Ý•Ù•È¤(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€QHœ¤ì(€€€€€Ñ¡¥Ì¹Í•Ñ5½‘” 5=}QaPœ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹IQ€ô™Õ¹Ñ¥½¸IQ ¤ì(€€€€€€¼¼I•ÍÕµ”Q•áÐ¥ÍÁ±…ä¥¸Q•áÐµ½‘”€¡¹½ÐÍÕÁÁ½ÉÑ•°¡½Ý•Ù•È¤(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€IQœ¤ì(€€€€€Ñ¡¥Ì¹Í•Ñ5½‘” 5=}QaPœ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹4€ô™Õ¹Ñ¥½¸4 ¤ì(€€€€€€¼¼É…Í”¥ÍÁ±…å•5•µ½Éä(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€4€´É…Í”¥ÍÁ±…å•5•µ½Éäœ¤ì(€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ”¡ÑÉÕ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹H€ô™Õ¹Ñ¥½¸H ¤ì(€€€€€€¼¼…ÉÉ¥…”I•ÑÕÉ¸(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€H€´…ÉÉ¥…”I•ÑÕÉ¸œ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹É½±±UÀ ¤ì(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ”¡ÑÉÕ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹94€ô™Õ¹Ñ¥½¸94 ¤ì(€€€€€€¼¼É…Í”9½¸µ¥ÍÁ±…å•5•µ½Éä(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€94€´É…Í”9½¸µ‘¥ÍÁ±…å•5•µ½Éäœ¤ì(€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä¹É•Í•Ð ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹=€ô™Õ¹Ñ¥½¸= ¤ì(€€€€€Ù…È}Ñ¡¥ÌÐ€ôÑ¡¥Ìì(€€€€€€¼¼¹½˜…ÁÑ¥½¸€¡±¥À5•µ½É¥•Ì¤(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€=€´¹=˜…ÁÑ¥½¸œ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ½‘”€ôôô€5=}A=@µ=8œ¤ì(€€€€€€€Ù…ÈÑµÀ€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éäì(€€€€€€€Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä€ôÑ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éäì(€€€€€€€Ñ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éä€ôÑµÀì(€€€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸€ôÑ¡¥Ì¹¹½¹¥ÍÁ±…å•‘5•µ½Éäì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ä°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€%M@è€œ€¬}Ñ¡¥ÌÐ¹‘¥ÍÁ±…å•‘5•µ½Éä¹•Ñ¥ÍÁ±…åQ•áÐ ¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ”¡ÑÉÕ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Q<€ô™Õ¹Ñ¥½¸Q<¡¹É½±Ì¤ì(€€€€€€¼¼Q…ˆ=™™Í•Ð€Ä°È°½È€Ì½±Õµ¹Ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€Q< œ€¬¹É½±Ì€¬€œ¤€´Q…ˆ=™™Í•Ðœ¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹µ½Ù•ÕÉÍ½È¡¹É½±Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹5%I=\€ô™Õ¹Ñ¥½¸5%I=\¡Í•½¹‘	åÑ”¤ì(€€€€€€¼¼A…ÉÍ”5%I=\½µµ…¹(€€€€€Ù…ÈÍÑå±•Ì€ôì(€€€€€€€™±…Í è™…±Í”(€€€€€ôì(€€€€€ÍÑå±•Ì¹Õ¹‘•É±¥¹”€ôÍ•½¹‘	åÑ”€”€È€ôôô€Äì(€€€€€ÍÑå±•Ì¹¥Ñ…±¥Ì€ôÍ•½¹‘	åÑ”€øô€ÁàÉ”ì(€€€€€¥˜€ …ÍÑå±•Ì¹¥Ñ…±¥Ì¤ì(€€€€€€€Ù…È½±½É%¹‘•à€ô5…Ñ ¹™±½½È¡Í•½¹‘	åÑ”€¼€È¤€´€ÁàÄÀì(€€€€€€€Ù…È½±½ÉÌ€ôlÝ¡¥Ñ”œ°€É••¸œ°€‰±Õ”œ°€å…¸œ°€É•œ°€å•±±½Üœ°€µ…•¹Ñ„tì(€€€€€€€ÍÑå±•Ì¹™½É•É½Õ¹€ô½±½ÉÍm½±½É%¹‘•átì(€€€€€ô•±Í”ì(€€€€€€€ÍÑå±•Ì¹™½É•É½Õ¹€ô€Ý¡¥Ñ”œì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°€5%I=\è€œ€¬ÍÑÉ¥¹¥™ä¡ÍÑå±•Ì¤¤ì(€€€€€Ñ¡¥Ì¹ÝÉ¥Ñ•MÉ••¸¹Í•ÑA•¸¡ÍÑå±•Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ”€ô™Õ¹Ñ¥½¸½ÕÑÁÕÑ…Ñ…UÁ‘…Ñ”¡‘¥ÍÁ…Ñ ¤ì(€€€€€¥˜€¡‘¥ÍÁ…Ñ €ôôôÙ½¥€À¤ì(€€€€€€€‘¥ÍÁ…Ñ €ô™…±Í”ì(€€€€€ô(€€€€€Ù…ÈÑ¥µ”€ôÑ¡¥Ì¹±½•È¹Ñ¥µ”ì(€€€€€¥˜€¡Ñ¥µ”€ôôô¹Õ±°¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ôôô¹Õ±°€˜˜€…Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹¥ÍµÁÑä ¤¤ì(€€€€€€€€€€¼¼MÑ…ÉÐ½˜„¹•ÜÕ”(€€€€€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ôÑ¥µ”ì(€€€€€€€ô•±Í”ì(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹•ÅÕ…±Ì¡Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸¤¤ì(€€€€€€€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹¹•ÝÕ”¡Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”°Ñ¥µ”°Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸¤ì(€€€€€€€€€€€¥˜€¡‘¥ÍÁ…Ñ €˜˜Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹‘¥ÍÁ…Ñ¡Õ”¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹‘¥ÍÁ…Ñ¡Õ” ¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ôÑ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹¥ÍµÁÑä ¤€ü¹Õ±°€èÑ¥µ”ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±…ÍÑ=ÕÑÁÕÑMÉ••¸¹½Áä¡Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼Ø¹Õ•MÁ±¥ÑÑQ¥µ”€ô™Õ¹Ñ¥½¸Õ•MÁ±¥ÑÑQ¥µ”¡Ð¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¹¥ÍµÁÑä ¤¤ì(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹¹•ÝÕ”¤ì(€€€€€€€€€€€Ñ¡¥Ì¹½ÕÑÁÕÑ¥±Ñ•È¹¹•ÝÕ”¡Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”°Ð°Ñ¡¥Ì¹‘¥ÍÁ±…å•‘5•µ½Éä¤ì(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹Õ•MÑ…ÉÑQ¥µ”€ôÐì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸•„ØÀá¡…¹¹•°ì(€ô ¤ì€¼¼]¥±°‰”€Ä½È€ÈÝ¡•¸Á…ÉÍ¥¹œ…ÁÑ¥½¹Ì(€Ù…È•„ØÀáA…ÉÍ•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸•„ØÀáA…ÉÍ•È¡™¥•±°½ÕÐÄ°½ÕÐÈ¤ì(€€€€€Ñ¡¥Ì¹¡…¹¹•±Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ¡…¹¹•°€ô€Àì(€€€€€Ñ¡¥Ì¹µ‘!¥ÍÑ½Éä€ôÉ•…Ñ•µ‘!¥ÍÑ½Éä ¤ì(€€€€€Ñ¡¥Ì¹±½•È€ôÙ½¥€Àì(€€€€€Ù…È±½•È€ôÑ¡¥Ì¹±½•È€ô¹•Ü…ÁÑ¥½¹Í1½•È ¤ì(€€€€€Ñ¡¥Ì¹¡…¹¹•±Ì€ôm¹Õ±°°¹•Ü•„ØÀá¡…¹¹•°¡™¥•±°½ÕÐÄ°±½•È¤°¹•Ü•„ØÀá¡…¹¹•°¡™¥•±€¬€Ä°½ÕÐÈ°±½•È¥tì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ü€ô•„ØÀáA…ÉÍ•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ü¹•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸•Ñ!…¹‘±•È¡¡…¹¹•°¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡…¹¹•±Ím¡…¹¹•±t¹•Ñ!…¹‘±•È ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼Ü¹Í•Ñ!…¹‘±•È€ô™Õ¹Ñ¥½¸Í•Ñ!…¹‘±•È¡¡…¹¹•°°¹•Ý!…¹‘±•È¤ì(€€€€€Ñ¡¥Ì¹¡…¹¹•±Ím¡…¹¹•±t¹Í•Ñ!…¹‘±•È¡¹•Ý!…¹‘±•È¤ì(€€€ô((€€€€¼¨¨(€€€€€¨‘‘…Ñ„™½ÈÑ¥µ”Ð¥¸™½ÉµÌ½˜±¥ÍÐ½˜‰åÑ•Ì€¡Õ¹Í¥¹•¥¹ÑÌ¤¸Q¡”‰åÑ•Ì…É”ÑÉ•…Ñ•…ÌÁ…¥ÉÌ¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹…‘‘…Ñ„€ô™Õ¹Ñ¥½¸…‘‘…Ñ„¡Ñ¥µ”°‰åÑ•1¥ÍÐ¤ì(€€€€€Ù…È}Ñ¡¥ÌÔ€ôÑ¡¥Ìì(€€€€€Ñ¡¥Ì¹±½•È¹Ñ¥µ”€ôÑ¥µ”ì(€€€€€Ù…È}±½½À€ô™Õ¹Ñ¥½¸}±½½À¡¤¤ì(€€€€€€€€€Ù…È„€ô‰åÑ•1¥ÍÑm¥t€˜€ÁàÝ˜ì(€€€€€€€€€Ù…Èˆ€ô‰åÑ•1¥ÍÑm¤€¬€Åt€˜€ÁàÝ˜ì(€€€€€€€€€Ù…Èµ‘½Õ¹€ô™…±Í”ì(€€€€€€€€€Ù…È¡…ÉÍ½Õ¹€ô¹Õ±°ì(€€€€€€€€€¥˜€¡„€ôôô€À€˜˜ˆ€ôôô€À¤ì(€€€€€€€€€€€É•ÑÕÉ¸€Àì€¼¼½¹Ñ¥¹Õ”(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€}Ñ¡¥ÌÔ¹±½•È¹±½œ Ì°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸€lœ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m‰åÑ•1¥ÍÑm¥t°‰åÑ•1¥ÍÑm¤€¬€Åut¤€¬€t€´ø€ œ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m„°‰t¤€¬€œ¤œì(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€€€Ù…Èµ‘!¥ÍÑ½Éä€ô}Ñ¡¥ÌÔ¹µ‘!¥ÍÑ½Éäì(€€€€€€€€€Ù…È¥Í½¹ÑÉ½±½‘”€ô„€øô€ÁàÄÀ€˜˜„€ðô€ÁàÅ˜ì(€€€€€€€€€¥˜€¡¥Í½¹ÑÉ½±½‘”¤ì(€€€€€€€€€€€€¼¼M­¥ÀÉ•‘Õ¹‘…¹Ð½¹ÑÉ½°½‘•Ì(€€€€€€€€€€€¥˜€¡¡…Íµ‘I•Á•…Ñ•¡„°ˆ°µ‘!¥ÍÑ½Éä¤¤ì(€€€€€€€€€€€€€Í•Ñ1…ÍÑµ¡¹Õ±°°¹Õ±°°µ‘!¥ÍÑ½Éä¤ì(€€€€€€€€€€€€€}Ñ¡¥ÌÔ¹±½•È¹±½œ Ì°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸€I•Á•…Ñ•½µµ…¹€ œ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m„°‰t¤€¬€œ¤¥Ì‘É½ÁÁ•œì(€€€€€€€€€€€€€ô¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸€Àì€¼¼½¹Ñ¥¹Õ”(€€€€€€€€€€€ô(€€€€€€€€€€€Í•Ñ1…ÍÑµ¡„°ˆ°}Ñ¡¥ÌÔ¹µ‘!¥ÍÑ½Éä¤ì(€€€€€€€€€€€µ‘½Õ¹€ô}Ñ¡¥ÌÔ¹Á…ÉÍ•µ¡„°ˆ¤ì(€€€€€€€€€€€¥˜€ …µ‘½Õ¹¤ì(€€€€€€€€€€€€€µ‘½Õ¹€ô}Ñ¡¥ÌÔ¹Á…ÉÍ•5¥‘É½Ü¡„°ˆ¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€ …µ‘½Õ¹¤ì(€€€€€€€€€€€€€µ‘½Õ¹€ô}Ñ¡¥ÌÔ¹Á…ÉÍ•A¡„°ˆ¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€ …µ‘½Õ¹¤ì(€€€€€€€€€€€€€µ‘½Õ¹€ô}Ñ¡¥ÌÔ¹Á…ÉÍ•	…­É½Õ¹‘ÑÑÉ¥‰ÕÑ•Ì¡„°ˆ¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€Í•Ñ1…ÍÑµ¡¹Õ±°°¹Õ±°°µ‘!¥ÍÑ½Éä¤ì(€€€€€€€€€ô(€€€€€€€€€¥˜€ …µ‘½Õ¹¤ì(€€€€€€€€€€€¡…ÉÍ½Õ¹€ô}Ñ¡¥ÌÔ¹Á…ÉÍ•¡…ÉÌ¡„°ˆ¤ì(€€€€€€€€€€€¥˜€¡¡…ÉÍ½Õ¹¤ì(€€€€€€€€€€€€€Ù…ÈÕÉÉ¡9È€ô}Ñ¡¥ÌÔ¹ÕÉÉ•¹Ñ¡…¹¹•°ì(€€€€€€€€€€€€€¥˜€¡ÕÉÉ¡9È€˜˜ÕÉÉ¡9È€ø€À¤ì(€€€€€€€€€€€€€€€Ù…È¡…¹¹•°€ô}Ñ¡¥ÌÔ¹¡…¹¹•±ÍmÕÉÉ¡9Étì(€€€€€€€€€€€€€€€¡…¹¹•°¹¥¹Í•ÉÑ¡…ÉÌ¡¡…ÉÍ½Õ¹¤ì(€€€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€€€}Ñ¡¥ÌÔ¹±½•È¹±½œ È°€9¼¡…¹¹•°™½Õ¹å•Ð¸QaPµ5=üœ¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€¥˜€ …µ‘½Õ¹€˜˜€…¡…ÉÍ½Õ¹¤ì(€€€€€€€€€€€}Ñ¡¥ÌÔ¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸€‰½Õ±‘¸ÐÁ…ÉÍ”±•…¹•‘…Ñ„€ˆ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m„°‰t¤€¬€œ½É¥œè€œ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m‰åÑ•1¥ÍÑm¥t°‰åÑ•1¥ÍÑm¤€¬€Åut¤ì(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€ô°(€€€€€€€}É•Ðì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð‰åÑ•1¥ÍÐ¹±•¹Ñ ì¤€¬ô€È¤ì(€€€€€€€}É•Ð€ô}±½½À¡¤¤ì(€€€€€€€¥˜€¡}É•Ð€ôôô€À¤½¹Ñ¥¹Õ”ì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨A…ÉÍ”½µµ…¹¸(€€€€€¨É•ÑÕÉ¹ÌQÉÕ”¥˜„½µµ…¹Ý…Ì™½Õ¹(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Á…ÉÍ•µ€ô™Õ¹Ñ¥½¸Á…ÉÍ•µ¡„°ˆ¤ì(€€€€€Ù…È½¹Ä€ô€¡„€ôôô€ÁàÄÐñð„€ôôô€ÁàÅŒñð„€ôôô€ÁàÄÔñð„€ôôô€ÁàÅ¤€˜˜ˆ€øô€ÁàÈÀ€˜˜ˆ€ðô€ÁàÉ˜ì(€€€€€Ù…È½¹È€ô€¡„€ôôô€ÁàÄÜñð„€ôôô€ÁàÅ˜¤€˜˜ˆ€øô€ÁàÈÄ€˜˜ˆ€ðô€ÁàÈÌì(€€€€€¥˜€ „¡½¹Äñð½¹È¤¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€Ù…È¡9È€ô„€ôôô€ÁàÄÐñð„€ôôô€ÁàÄÔñð„€ôôô€ÁàÄÜ€ü€Ä€è€Èì(€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¡9Étì(€€€€€¥˜€¡„€ôôô€ÁàÄÐñð„€ôôô€ÁàÄÔñð„€ôôô€ÁàÅŒñð„€ôôô€ÁàÅ¤ì(€€€€€€€¥˜€¡ˆ€ôôô€ÁàÈÀ¤ì(€€€€€€€€€¡…¹¹•°¹I0 ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÄ¤ì(€€€€€€€€€¡…¹¹•°¹	L ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÈ¤ì(€€€€€€€€€¡…¹¹•°¹= ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÌ¤ì(€€€€€€€€€¡…¹¹•°¹=8 ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÐ¤ì(€€€€€€€€€¡…¹¹•°¹H ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÔ¤ì(€€€€€€€€€¡…¹¹•°¹IT È¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈØ¤ì(€€€€€€€€€¡…¹¹•°¹IT Ì¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈÜ¤ì(€€€€€€€€€¡…¹¹•°¹IT Ð¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈà¤ì(€€€€€€€€€¡…¹¹•°¹=8 ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÈä¤ì(€€€€€€€€€¡…¹¹•°¹I ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉ„¤ì(€€€€€€€€€¡…¹¹•°¹QH ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉˆ¤ì(€€€€€€€€€¡…¹¹•°¹IQ ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉŒ¤ì(€€€€€€€€€¡…¹¹•°¹4 ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉ¤ì(€€€€€€€€€¡…¹¹•°¹H ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉ”¤ì(€€€€€€€€€¡…¹¹•°¹94 ¤ì(€€€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉ˜¤ì(€€€€€€€€€¡…¹¹•°¹= ¤ì(€€€€€€€ô(€€€€€ô•±Í”ì(€€€€€€€€¼¼„€ôô€ÁàÄÜñð„€ôô€ÁàÅ(€€€€€€€¡…¹¹•°¹Q<¡ˆ€´€ÁàÈÀ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ¡…¹¹•°€ô¡9Èì(€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€ô((€€€€¼¨¨(€€€€€¨A…ÉÍ”µ¥‘É½ÜÍÑå±¥¹œ½µµ…¹(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Á…ÉÍ•5¥‘É½Ü€ô™Õ¹Ñ¥½¸Á…ÉÍ•5¥‘É½Ü¡„°ˆ¤ì(€€€€€Ù…È¡9È€ô€Àì(€€€€€¥˜€ ¡„€ôôô€ÁàÄÄñð„€ôôô€ÁàÄä¤€˜˜ˆ€øô€ÁàÈÀ€˜˜ˆ€ðô€ÁàÉ˜¤ì(€€€€€€€¥˜€¡„€ôôô€ÁàÄÄ¤ì(€€€€€€€€€¡9È€ô€Äì(€€€€€€€ô•±Í”ì(€€€€€€€€€¡9È€ô€Èì(€€€€€€€ô(€€€€€€€¥˜€¡¡9È€„ôôÑ¡¥Ì¹ÕÉÉ•¹Ñ¡…¹¹•°¤ì(€€€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ À°€5¥Íµ…Ñ ¡…¹¹•°¥¸µ¥‘É½ÜÁ…ÉÍ¥¹œœ¤ì(€€€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€€€ô(€€€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¡9Étì(€€€€€€€¥˜€ …¡…¹¹•°¤ì(€€€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€€€ô(€€€€€€€¡…¹¹•°¹5%I=\¡ˆ¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ì°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€5%I=\€ œ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡m„°‰t¤€¬€œ¤œì(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€€€ô(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ô((€€€€¼¨¨(€€€€€¨A…ÉÍ”AÉ•…‰±”•ÍÌ½‘•Ì€¡Q…‰±”€ÔÌ¤¸(€€€€€¨É•ÑÕÉ¹Ìí	½½±•…¹ôQ•±±Ì¥˜A™½Õ¹(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Á…ÉÍ•A€ô™Õ¹Ñ¥½¸Á…ÉÍ•A¡„°ˆ¤ì(€€€€€Ù…ÈÉ½Üì(€€€€€Ù…È…Í”Ä€ô€¡„€øô€ÁàÄÄ€˜˜„€ðô€ÁàÄÜñð„€øô€ÁàÄä€˜˜„€ðô€ÁàÅ˜¤€˜˜ˆ€øô€ÁàÐÀ€˜˜ˆ€ðô€ÁàÝ˜ì(€€€€€Ù…È…Í”È€ô€¡„€ôôô€ÁàÄÀñð„€ôôô€ÁàÄà¤€˜˜ˆ€øô€ÁàÐÀ€˜˜ˆ€ðô€ÁàÕ˜ì(€€€€€¥˜€ „¡…Í”Äñð…Í”È¤¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€Ù…È¡9È€ô„€ðô€ÁàÄÜ€ü€Ä€è€Èì(€€€€€¥˜€¡ˆ€øô€ÁàÐÀ€˜˜ˆ€ðô€ÁàÕ˜¤ì(€€€€€€€É½Ü€ô¡9È€ôôô€Ä€üÉ½ÝÍ1½Ý Åm…t€èÉ½ÝÍ1½Ý Ém…tì(€€€€€ô•±Í”ì(€€€€€€€€¼¼€ÁàØÀ€ðôˆ€ðô€ÁàÝ(€€€€€€€É½Ü€ô¡9È€ôôô€Ä€üÉ½ÝÍ!¥¡ Åm…t€èÉ½ÝÍ!¥¡ Ém…tì(€€€€€ô(€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¡9Étì(€€€€€¥˜€ …¡…¹¹•°¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€¡…¹¹•°¹Í•ÑA¡Ñ¡¥Ì¹¥¹Ñ•ÉÁÉ•ÑA¡É½Ü°ˆ¤¤ì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ¡…¹¹•°€ô¡9Èì(€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€ô((€€€€¼¨¨(€€€€€¨%¹Ñ•ÉÁÉ•ÐÑ¡”Í•½¹‰åÑ”½˜Ñ¡”Á…Œ°…¹É•ÑÕÉ¸Ñ¡”¥¹™½Éµ…Ñ¥½¸¸(€€€€€¨É•ÑÕÉ¹ÌÁ……Ñ„Ý¥Ñ ÍÑå±”Á…É…µ•Ñ•ÉÌ(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹¥¹Ñ•ÉÁÉ•ÑA€ô™Õ¹Ñ¥½¸¥¹Ñ•ÉÁÉ•ÑA¡É½Ü°}‰åÑ”Ì¤ì(€€€€€Ù…ÈÁ…%¹‘•àì(€€€€€Ù…ÈÁ……Ñ„€ôì(€€€€€€€½±½Èè¹Õ±°°(€€€€€€€¥Ñ…±¥Ìè™…±Í”°(€€€€€€€¥¹‘•¹Ðè¹Õ±°°(€€€€€€€Õ¹‘•É±¥¹”è™…±Í”°(€€€€€€€É½ÜèÉ½Ü(€€€€€ôì(€€€€€¥˜€¡}‰åÑ”Ì€ø€ÁàÕ˜¤ì(€€€€€€€Á…%¹‘•à€ô}‰åÑ”Ì€´€ÁàØÀì(€€€€€ô•±Í”ì(€€€€€€€Á…%¹‘•à€ô}‰åÑ”Ì€´€ÁàÐÀì(€€€€€ô(€€€€€Á……Ñ„¹Õ¹‘•É±¥¹”€ô€¡Á…%¹‘•à€˜€Ä¤€ôôô€Äì(€€€€€¥˜€¡Á…%¹‘•à€ðô€Áá¤ì(€€€€€€€Á……Ñ„¹½±½È€ôlÝ¡¥Ñ”œ°€É••¸œ°€‰±Õ”œ°€å…¸œ°€É•œ°€å•±±½Üœ°€µ…•¹Ñ„œ°€Ý¡¥Ñ”um5…Ñ ¹™±½½È¡Á…%¹‘•à€¼€È¥tì(€€€€€ô•±Í”¥˜€¡Á…%¹‘•à€ðô€Áá˜¤ì(€€€€€€€Á……Ñ„¹¥Ñ…±¥Ì€ôÑÉÕ”ì(€€€€€€€Á……Ñ„¹½±½È€ô€Ý¡¥Ñ”œì(€€€€€ô•±Í”ì(€€€€€€€Á……Ñ„¹¥¹‘•¹Ð€ô5…Ñ ¹™±½½È ¡Á…%¹‘•à€´€ÁàÄÀ¤€¼€È¤€¨€Ðì(€€€€€ô(€€€€€É•ÑÕÉ¸Á……Ñ„ì€¼¼9½Ñ”Ñ¡…ÐÉ½Ü¡…Ìé•É¼½™™Í•Ð¸Q¡”ÍÁ•ŒÕÍ•Ì€Ä¸(€€€ô((€€€€¼¨¨(€€€€€¨A…ÉÍ”¡…É…Ñ•ÉÌ¸(€€€€€¨É•ÑÕÉ¹Ì¸…ÉÉ…äÝ¥Ñ €ÄÑ¼€È½‘•Ì½ÉÉ•ÍÁ½¹‘¥¹œÑ¼¡…ÉÌ°¥˜™½Õ¹¸¹Õ±°½Ñ¡•ÉÝ¥Í”¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Á…ÉÍ•¡…ÉÌ€ô™Õ¹Ñ¥½¸Á…ÉÍ•¡…ÉÌ¡„°ˆ¤ì(€€€€€Ù…È¡…¹¹•±9Èì(€€€€€Ù…È¡…É½‘•Ì€ô¹Õ±°ì(€€€€€Ù…È¡…É½‘”Ä€ô¹Õ±°ì(€€€€€¥˜€¡„€øô€ÁàÄä¤ì(€€€€€€€¡…¹¹•±9È€ô€Èì(€€€€€€€¡…É½‘”Ä€ô„€´€àì(€€€€€ô•±Í”ì(€€€€€€€¡…¹¹•±9È€ô€Äì(€€€€€€€¡…É½‘”Ä€ô„ì(€€€€€ô(€€€€€¥˜€¡¡…É½‘”Ä€øô€ÁàÄÄ€˜˜¡…É½‘”Ä€ðô€ÁàÄÌ¤ì(€€€€€€€€¼¼MÁ•¥…°¡…É…Ñ•È(€€€€€€€Ù…È½¹•½‘”ì(€€€€€€€¥˜€¡¡…É½‘”Ä€ôôô€ÁàÄÄ¤ì(€€€€€€€€€½¹•½‘”€ôˆ€¬€ÁàÔÀì(€€€€€€€ô•±Í”¥˜€¡¡…É½‘”Ä€ôôô€ÁàÄÈ¤ì(€€€€€€€€€½¹•½‘”€ôˆ€¬€ÁàÜÀì(€€€€€€€ô•±Í”ì(€€€€€€€€€½¹•½‘”€ôˆ€¬€ÁàäÀì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ È°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€‰MÁ•¥…°¡…È€œˆ€¬•Ñ¡…É½É	åÑ”¡½¹•½‘”¤€¬€ˆœ¥¸¡…¹¹•°€ˆ€¬¡…¹¹•±9Èì(€€€€€€€ô¤ì(€€€€€€€¡…É½‘•Ì€ôm½¹•½‘•tì(€€€€€ô•±Í”¥˜€¡„€øô€ÁàÈÀ€˜˜„€ðô€ÁàÝ˜¤ì(€€€€€€€¡…É½‘•Ì€ôˆ€ôôô€À€üm…t€èm„°‰tì(€€€€€ô(€€€€€¥˜€¡¡…É½‘•Ì¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ Ì°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€É•ÑÕÉ¸€¡…È½‘•Ì€ô€€œ€¬¹ÕµÉÉ…åQ½!•áÉÉ…ä¡¡…É½‘•Ì¤¹©½¥¸ œ°œ¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸¡…É½‘•Ìì(€€€ô((€€€€¼¨¨(€€€€€¨A…ÉÍ”•áÑ•¹‘•‰…­É½Õ¹…ÑÑÉ¥‰ÕÑ•Ì…ÌÝ•±°…Ì¹•Ü™½É•É½Õ¹½±½È‰±…¬¸(€€€€€¨É•ÑÕÉ¹ÌQÉÕ”¥˜‰…­É½Õ¹…ÑÑÉ¥‰ÕÑ•Ì…É”™½Õ¹(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Á…ÉÍ•	…­É½Õ¹‘ÑÑÉ¥‰ÕÑ•Ì€ô™Õ¹Ñ¥½¸Á…ÉÍ•	…­É½Õ¹‘ÑÑÉ¥‰ÕÑ•Ì¡„°ˆ¤ì(€€€€€Ù…È…Í”Ä€ô€¡„€ôôô€ÁàÄÀñð„€ôôô€ÁàÄà¤€˜˜ˆ€øô€ÁàÈÀ€˜˜ˆ€ðô€ÁàÉ˜ì(€€€€€Ù…È…Í”È€ô€¡„€ôôô€ÁàÄÜñð„€ôôô€ÁàÅ˜¤€˜˜ˆ€øô€ÁàÉ€˜˜ˆ€ðô€ÁàÉ˜ì(€€€€€¥˜€ „¡…Í”Äñð…Í”È¤¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€Ù…È¥¹‘•àì(€€€€€Ù…È‰­…Ñ„€ôíôì(€€€€€¥˜€¡„€ôôô€ÁàÄÀñð„€ôôô€ÁàÄà¤ì(€€€€€€€¥¹‘•à€ô5…Ñ ¹™±½½È ¡ˆ€´€ÁàÈÀ¤€¼€È¤ì(€€€€€€€‰­…Ñ„¹‰…­É½Õ¹€ô‰…­É½Õ¹‘½±½ÉÍm¥¹‘•átì(€€€€€€€¥˜€¡ˆ€”€È€ôôô€Ä¤ì(€€€€€€€€€‰­…Ñ„¹‰…­É½Õ¹€ô‰­…Ñ„¹‰…­É½Õ¹€¬€}Í•µ¤œì(€€€€€€€ô(€€€€€ô•±Í”¥˜€¡ˆ€ôôô€ÁàÉ¤ì(€€€€€€€‰­…Ñ„¹‰…­É½Õ¹€ô€ÑÉ…¹ÍÁ…É•¹Ðœì(€€€€€ô•±Í”ì(€€€€€€€‰­…Ñ„¹™½É•É½Õ¹€ô€‰±…¬œì(€€€€€€€¥˜€¡ˆ€ôôô€ÁàÉ˜¤ì(€€€€€€€€€‰­…Ñ„¹Õ¹‘•É±¥¹”€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô(€€€€€Ù…È¡9È€ô„€ðô€ÁàÄÜ€ü€Ä€è€Èì(€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¡9Étì(€€€€€¡…¹¹•°¹Í•Ñ	­…Ñ„¡‰­…Ñ„¤ì(€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€ô((€€€€¼¨¨(€€€€€¨I•Í•ÐÍÑ…Ñ”½˜Á…ÉÍ•È…¹¥ÑÌ¡…¹¹•±Ì¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð=‰©•Ð¹­•åÌ¡Ñ¡¥Ì¹¡…¹¹•±Ì¤¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¥tì(€€€€€€€¥˜€¡¡…¹¹•°¤ì(€€€€€€€€€¡…¹¹•°¹É•Í•Ð ¤ì(€€€€€€€ô(€€€€€ô(€€€€€Í•Ñ1…ÍÑµ¡¹Õ±°°¹Õ±°°Ñ¡¥Ì¹µ‘!¥ÍÑ½Éä¤ì(€€€ô((€€€€¼¨¨(€€€€€¨QÉ¥•ÈÑ¡”•¹•É…Ñ¥½¸½˜„Õ”°…¹Ñ¡”ÍÑ…ÉÐ½˜„¹•Ü½¹”¥˜‘¥ÍÁ±…åMÉ••¹Ì…É”¹½Ð•µÁÑä¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼Ü¹Õ•MÁ±¥ÑÑQ¥µ”€ô™Õ¹Ñ¥½¸Õ•MÁ±¥ÑÑQ¥µ”¡Ð¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ¡¥Ì¹¡…¹¹•±Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…È¡…¹¹•°€ôÑ¡¥Ì¹¡…¹¹•±Ím¥tì(€€€€€€€¥˜€¡¡…¹¹•°¤ì(€€€€€€€€€¡…¹¹•°¹Õ•MÁ±¥ÑÑQ¥µ”¡Ð¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸•„ØÀáA…ÉÍ•Èì(€ô ¤ì(€™Õ¹Ñ¥½¸Í•Ñ1…ÍÑµ¡„°ˆ°µ‘!¥ÍÑ½Éä¤ì(€€€µ‘!¥ÍÑ½Éä¹„€ô„ì(€€€µ‘!¥ÍÑ½Éä¹ˆ€ôˆì(€ô(€™Õ¹Ñ¥½¸¡…Íµ‘I•Á•…Ñ•¡„°ˆ°µ‘!¥ÍÑ½Éä¤ì(€€€É•ÑÕÉ¸µ‘!¥ÍÑ½Éä¹„€ôôô„€˜˜µ‘!¥ÍÑ½Éä¹ˆ€ôôôˆì(€ô(€™Õ¹Ñ¥½¸É•…Ñ•µ‘!¥ÍÑ½Éä ¤ì(€€€É•ÑÕÉ¸ì(€€€€€„è¹Õ±°°(€€€€€ˆè¹Õ±°(€€€ôì(€ô((€€¼¨¨(€€€¨½ÁåÉ¥¡Ð€ÈÀÄÌÙÑÐ¹©Ì½¹ÑÉ¥‰ÕÑ½ÉÌ(€€€¨(€€€¨1¥•¹Í•Õ¹‘•ÈÑ¡”Á…¡”1¥•¹Í”°Y•ÉÍ¥½¸€È¸À€¡Ñ¡”€1¥•¹Í”œ¤ì(€€€¨å½Ôµ…ä¹½ÐÕÍ”Ñ¡¥Ì™¥±”•á•ÁÐ¥¸½µÁ±¥…¹”Ý¥Ñ Ñ¡”1¥•¹Í”¸(€€€¨e½Ôµ…ä½‰Ñ…¥¸„½Áä½˜Ñ¡”1¥•¹Í”…Ð(€€€¨(€€€¨€€¡ÑÑÀè¼½ÝÝÜ¹…Á…¡”¹½Éœ½±¥•¹Í•Ì½1%9M´È¸À(€€€¨(€€€¨U¹±•ÍÌÉ•ÅÕ¥É•‰ä…ÁÁ±¥…‰±”±…Ü½È…É••Ñ¼¥¸ÝÉ¥Ñ¥¹œ°Í½™ÑÝ…É”(€€€¨‘¥ÍÑÉ¥‰ÕÑ•Õ¹‘•ÈÑ¡”1¥•¹Í”¥Ì‘¥ÍÑÉ¥‰ÕÑ•½¸…¸€L%Lœ	M%L°(€€€¨]%Q!=UP]II9Q%L=H=9%Q%=9L=9d-%9°•¥Ñ¡•È•áÁÉ•ÍÌ½È¥µÁ±¥•¸(€€€¨M•”Ñ¡”1¥•¹Í”™½ÈÑ¡”ÍÁ•¥™¥Œ±…¹Õ…”½Ù•É¹¥¹œÁ•Éµ¥ÍÍ¥½¹Ì…¹(€€€¨±¥µ¥Ñ…Ñ¥½¹ÌÕ¹‘•ÈÑ¡”1¥•¹Í”¸(€€€¨¼((€Ù…ÈYQQÕ”€ô€¡™Õ¹Ñ¥½¸€ ¤ì(€€€¥˜€¡½ÁÑ¥½¹…±M•±˜€„ô¹Õ±°€˜˜½ÁÑ¥½¹…±M•±˜¹YQQÕ”¤ì(€€€€€É•ÑÕÉ¸Í•±˜¹YQQÕ”ì(€€€ô(€€€Ù…È±±½Ý•‘¥É•Ñ¥½¹Ì€ôlœœ°€±Èœ°€É°tì(€€€Ù…È±±½Ý•‘±¥¹µ•¹ÑÌ€ôlÍÑ…ÉÐœ°€µ¥‘‘±”œ°€•¹œ°€±•™Ðœ°€É¥¡Ðtì(€€€™Õ¹Ñ¥½¸¥Í±±½Ý•‘Y…±Õ”¡…±±½Ý•°Ù…±Õ”¤ì(€€€€€¥˜€¡ÑåÁ•½˜Ù…±Õ”€„ôô€ÍÑÉ¥¹œœ¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€€¼¼¹••ÍÍ…Éä™½È…ÍÍÕÉ¥¹œÑ¡”•¹•É¥Œ½¹™½ÉµÌÑ¼Ñ¡”ÉÉ…ä¥¹Ñ•É™…”(€€€€€¥˜€ …ÉÉ…ä¹¥ÍÉÉ…ä¡…±±½Ý•¤¤ì(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô(€€€€€€¼¼É•Í•ÐÑ¡”ÑåÁ”Í¼Ñ¡…ÐÑ¡”¹•áÐ¹…ÉÉ½Ý¥¹œÝ½É­ÌÝ•±°(€€€€€Ù…È±Y…±Õ”€ôÙ…±Õ”¹Ñ½1½Ý•É…Í” ¤ì(€€€€€€¼¼ÕÍ”Ñ¡”…±±½Ü±¥ÍÐÑ¼¹…ÉÉ½ÜÑ¡”ÑåÁ”Ñ¼„ÍÁ•¥™¥ŒÍÕ‰Í•Ð½˜ÍÑÉ¥¹Ì(€€€€€¥˜€¡ù…±±½Ý•¹¥¹‘•á=˜¡±Y…±Õ”¤¤ì(€€€€€€€É•ÑÕÉ¸±Y…±Õ”ì(€€€€€ô(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ô(€€€™Õ¹Ñ¥½¸™¥¹‘¥É•Ñ¥½¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€É•ÑÕÉ¸¥Í±±½Ý•‘Y…±Õ”¡±±½Ý•‘¥É•Ñ¥½¹Ì°Ù…±Õ”¤ì(€€€ô(€€€™Õ¹Ñ¥½¸™¥¹‘±¥¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€É•ÑÕÉ¸¥Í±±½Ý•‘Y…±Õ”¡±±½Ý•‘±¥¹µ•¹ÑÌ°Ù…±Õ”¤ì(€€€ô(€€€™Õ¹Ñ¥½¸•áÑ•¹¡½‰¨¤ì(€€€€€™½È€¡Ù…È}±•¸€ô…ÉÕµ•¹ÑÌ¹±•¹Ñ °É•ÍÐ€ô¹•ÜÉÉ…ä¡}±•¸€ø€Ä€ü}±•¸€´€Ä€è€À¤°}­•ä€ô€Äì}­•ä€ð}±•¸ì}­•ä¬¬¤ì(€€€€€€€É•ÍÑm}­•ä€´€Åt€ô…ÉÕµ•¹ÑÍm}­•åtì(€€€€€ô(€€€€€Ù…È¤€ô€Äì(€€€€€™½È€ ì¤€ð…ÉÕµ•¹ÑÌ¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…È½‰¨€ô…ÉÕµ•¹ÑÍm¥tì(€€€€€€€™½È€¡Ù…ÈÀ¥¸½‰¨¤ì(€€€€€€€€€½‰©mÁt€ô½‰©mÁtì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸½‰¨ì(€€€ô(€€€™Õ¹Ñ¥½¸YQQÕ”¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°Ñ•áÐ¤ì(€€€€€Ù…ÈÕ”€ôÑ¡¥Ìì(€€€€€Ù…È‰…Í•=‰¨€ôì(€€€€€€€•¹Õµ•É…‰±”èÑÉÕ”(€€€€€ôì(€€€€€€¼¨¨(€€€€€€€¨M¡¥´¥µÁ±•µ•¹Ñ…Ñ¥½¸ÍÁ•¥™¥ŒÁÉ½Á•ÉÑ¥•Ì¸Q¡•Í”ÁÉ½Á•ÉÑ¥•Ì…É”¹½Ð¥¸(€€€€€€€¨Ñ¡”ÍÁ•Œ¸(€€€€€€€¨¼((€€€€€€¼¼1•ÑÌÕÌ­¹½ÜÝ¡•¸Ñ¡”YQQÕ”Ì‘…Ñ„¡…Ì¡…¹•¥¸ÍÕ „Ý…äÑ¡…ÐÝ”¹••(€€€€€€¼¼Ñ¼É•½µÁÕÑ”¥ÑÌ‘¥ÍÁ±…äÍÑ…Ñ”¸Q¡¥Ì±•ÑÌÕÌ½µÁÕÑ”¥ÑÌ‘¥ÍÁ±…äÍÑ…Ñ”(€€€€€€¼¼±…é¥±ä¸(€€€€€Õ”¹¡…Í	••¹I•Í•Ð€ô™…±Í”ì((€€€€€€¼¨¨(€€€€€€€¨YQQÕ”…¹Q•áÑQÉ…­Õ”ÁÉ½Á•ÉÑ¥•Ì(€€€€€€€¨¡ÑÑÀè¼½‘•Ø¹ÜÌ¹½Éœ½¡Ñµ°Ô½Ý•‰ÙÑÐ¼ÙÑÑÕ”µ¥¹Ñ•É™…”(€€€€€€€¨¼((€€€€€Ù…È}¥€ô€œœì(€€€€€Ù…È}Á…ÕÍ•=¹á¥Ð€ô™…±Í”ì(€€€€€Ù…È}ÍÑ…ÉÑQ¥µ”€ôÍÑ…ÉÑQ¥µ”ì(€€€€€Ù…È}•¹‘Q¥µ”€ô•¹‘Q¥µ”ì(€€€€€Ù…È}Ñ•áÐ€ôÑ•áÐì(€€€€€Ù…È}É•¥½¸€ô¹Õ±°ì(€€€€€Ù…È}Ù•ÉÑ¥…°€ô€œœì(€€€€€Ù…È}Í¹…ÁQ½1¥¹•Ì€ôÑÉÕ”ì(€€€€€Ù…È}±¥¹”€ô€…ÕÑ¼œì(€€€€€Ù…È}±¥¹•±¥¸€ô€ÍÑ…ÉÐœì(€€€€€Ù…È}Á½Í¥Ñ¥½¸€ô€ÔÀì(€€€€€Ù…È}Á½Í¥Ñ¥½¹±¥¸€ô€µ¥‘‘±”œì(€€€€€Ù…È}Í¥é”€ô€ÔÀì(€€€€€Ù…È}…±¥¸€ô€µ¥‘‘±”œì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€¥œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}¥ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€}¥€ô€œœ€¬Ù…±Õ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Á…ÕÍ•=¹á¥Ðœ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Á…ÕÍ•=¹á¥Ðì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€}Á…ÕÍ•=¹á¥Ð€ô€„…Ù…±Õ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€ÍÑ…ÉÑQ¥µ”œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}ÍÑ…ÉÑQ¥µ”ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€¡ÑåÁ•½˜Ù…±Õ”€„ôô€¹Õµ‰•Èœ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜQåÁ•ÉÉ½È MÑ…ÉÐÑ¥µ”µÕÍÐ‰”Í•ÐÑ¼„¹Õµ‰•È¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}ÍÑ…ÉÑQ¥µ”€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€•¹‘Q¥µ”œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}•¹‘Q¥µ”ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€¡ÑåÁ•½˜Ù…±Õ”€„ôô€¹Õµ‰•Èœ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜQåÁ•ÉÉ½È ¹Ñ¥µ”µÕÍÐ‰”Í•ÐÑ¼„¹Õµ‰•È¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}•¹‘Q¥µ”€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Ñ•áÐœ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Ñ•áÐì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€}Ñ•áÐ€ô€œœ€¬Ù…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì((€€€€€€¼¼Ñ½‘¼è¥µÁ±•µ•¹ÐYQQI•¥½¸Á½±å™¥±°ü(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€É•¥½¸œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}É•¥½¸ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€}É•¥½¸€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Ù•ÉÑ¥…°œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Ù•ÉÑ¥…°ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€Ù…ÈÍ•ÑÑ¥¹œ€ô™¥¹‘¥É•Ñ¥½¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€€€€€€¼¼!…Ù”Ñ¼¡•¬™½È™…±Í”‰•…ÕÍ”Ñ¡”Í•ÑÑ¥¹œ…¸‰”…¸•µÁÑäÍÑÉ¥¹œ¸(€€€€€€€€€¥˜€¡Í•ÑÑ¥¹œ€ôôô™…±Í”¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜMå¹Ñ…áÉÉ½È ¸¥¹Ù…±¥½È¥±±•…°ÍÑÉ¥¹œÝ…ÌÍÁ•¥™¥•¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}Ù•ÉÑ¥…°€ôÍ•ÑÑ¥¹œì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Í¹…ÁQ½1¥¹•Ìœ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Í¹…ÁQ½1¥¹•Ìì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€}Í¹…ÁQ½1¥¹•Ì€ô€„…Ù…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€±¥¹”œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}±¥¹”ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€¡ÑåÁ•½˜Ù…±Õ”€„ôô€¹Õµ‰•Èœ€˜˜Ù…±Õ”€„ôô€…ÕÑ¼œ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜMå¹Ñ…áÉÉ½È ¸¥¹Ù…±¥¹Õµ‰•È½È¥±±•…°ÍÑÉ¥¹œÝ…ÌÍÁ•¥™¥•¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}±¥¹”€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€±¥¹•±¥¸œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}±¥¹•±¥¸ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€Ù…ÈÍ•ÑÑ¥¹œ€ô™¥¹‘±¥¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€ …Í•ÑÑ¥¹œ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜMå¹Ñ…áÉÉ½È ¸¥¹Ù…±¥½È¥±±•…°ÍÑÉ¥¹œÝ…ÌÍÁ•¥™¥•¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}±¥¹•±¥¸€ôÍ•ÑÑ¥¹œì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Á½Í¥Ñ¥½¸œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Á½Í¥Ñ¥½¸ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€¡Ù…±Õ”€ð€ÀñðÙ…±Õ”€ø€ÄÀÀ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È A½Í¥Ñ¥½¸µÕÍÐ‰”‰•ÑÝ••¸€À…¹€ÄÀÀ¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}Á½Í¥Ñ¥½¸€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Á½Í¥Ñ¥½¹±¥¸œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Á½Í¥Ñ¥½¹±¥¸ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€Ù…ÈÍ•ÑÑ¥¹œ€ô™¥¹‘±¥¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€ …Í•ÑÑ¥¹œ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜMå¹Ñ…áÉÉ½È ¸¥¹Ù…±¥½È¥±±•…°ÍÑÉ¥¹œÝ…ÌÍÁ•¥™¥•¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}Á½Í¥Ñ¥½¹±¥¸€ôÍ•ÑÑ¥¹œì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€Í¥é”œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}Í¥é”ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€¡Ù…±Õ”€ð€ÀñðÙ…±Õ”€ø€ÄÀÀ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È M¥é”µÕÍÐ‰”‰•ÑÝ••¸€À…¹€ÄÀÀ¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}Í¥é”€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì(€€€€€=‰©•Ð¹‘•™¥¹•AÉ½Á•ÉÑä¡Õ”°€…±¥¸œ°•áÑ•¹¡íô°‰…Í•=‰¨°ì(€€€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€€É•ÑÕÉ¸}…±¥¸ì(€€€€€€€ô°(€€€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€€€Ù…ÈÍ•ÑÑ¥¹œ€ô™¥¹‘±¥¹M•ÑÑ¥¹œ¡Ù…±Õ”¤ì(€€€€€€€€€¥˜€ …Í•ÑÑ¥¹œ¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜMå¹Ñ…áÉÉ½È ¸¥¹Ù…±¥½È¥±±•…°ÍÑÉ¥¹œÝ…ÌÍÁ•¥™¥•¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}…±¥¸€ôÍ•ÑÑ¥¹œì(€€€€€€€€€Ñ¡¥Ì¹¡…Í	••¹I•Í•Ð€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô¤¤ì((€€€€€€¼¨¨(€€€€€€€¨=Ñ¡•È€ñÑÉ…¬øÍÁ•Œ‘•™¥¹•ÁÉ½Á•ÉÑ¥•Ì(€€€€€€€¨¼((€€€€€€¼¼¡ÑÑÀè¼½ÝÝÜ¹Ý¡…ÑÝœ¹½Éœ½ÍÁ•Ì½Ý•ˆµ…ÁÁÌ½ÕÉÉ•¹ÐµÝ½É¬½µÕ±Ñ¥Á…”½Ñ¡”µÙ¥‘•¼µ•±•µ•¹Ð¹¡Ñµ°Ñ•áÐµÑÉ…¬µÕ”µ‘¥ÍÁ±…äµÍÑ…Ñ”(€€€€€Õ”¹‘¥ÍÁ±…åMÑ…Ñ”€ôÕ¹‘•™¥¹•ì(€€€ô((€€€€¼¨¨(€€€€€¨YQQÕ”µ•Ñ¡½‘Ì(€€€€€¨¼((€€€YQQÕ”¹ÁÉ½Ñ½ÑåÁ”¹•ÑÕ•Í!Q50€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€¼¼ÍÍÕµ”]•‰YQP¹½¹Ù•ÉÑÕ•Q½=5QÉ•”¥Ì½¸Ñ¡”±½‰…°¸(€€€€€Ù…È]•‰YQP€ôÍ•±˜¹]•‰YQPì(€€€€€É•ÑÕÉ¸]•‰YQP¹½¹Ù•ÉÑÕ•Q½=5QÉ•”¡Í•±˜°Ñ¡¥Ì¹Ñ•áÐ¤ì(€€€ôì(€€€€¼¼Ñ¡¥Ì¥Ì„Á½±å™¥±°¡…¬(€€€É•ÑÕÉ¸YQQÕ”ì(€ô¤ ¤ì((€€¼¨(€€€¨M½ÕÉ”è¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½µ½é¥±±„½ÙÑÐ¹©Ì½‰±½ˆ½µ…ÍÑ•È½‘¥ÍÐ½ÙÑÐ¹©Ì(€€€¨¼((€Ù…ÈMÑÉ¥¹•½‘•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸MÑÉ¥¹•½‘•È ¤íô(€€€Ù…È}ÁÉ½Ñ¼€ôMÑÉ¥¹•½‘•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•½‘”€ô™Õ¹Ñ¥½¸‘•½‘”¡‘…Ñ„°½ÁÑ¥½¹Ì¤ì(€€€€€¥˜€ …‘…Ñ„¤ì(€€€€€€€É•ÑÕÉ¸€œœì(€€€€€ô(€€€€€¥˜€¡ÑåÁ•½˜‘…Ñ„€„ôô€ÍÑÉ¥¹œœ¤ì(€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È ÉÉ½È€´•áÁ•Ñ•ÍÑÉ¥¹œ‘…Ñ„¸œ¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸‘•½‘•UI%½µÁ½¹•¹Ð¡•¹½‘•UI%½µÁ½¹•¹Ð¡‘…Ñ„¤¤ì(€€€ôì(€€€É•ÑÕÉ¸MÑÉ¥¹•½‘•Èì(€ô ¤ì€¼¼QÉäÑ¼Á…ÉÍ”¥¹ÁÕÐ…Ì„Ñ¥µ”ÍÑ…µÀ¸(€™Õ¹Ñ¥½¸Á…ÉÍ•Q¥µ•MÑ…µÀ¡¥¹ÁÕÐ¤ì(€€€™Õ¹Ñ¥½¸½µÁÕÑ•M•½¹‘Ì¡ °´°Ì°˜¤ì(€€€€€É•ÑÕÉ¸€¡ ð€À¤€¨€ÌØÀÀ€¬€¡´ð€À¤€¨€ØÀ€¬€¡Ìð€À¤€¬Á…ÉÍ•±½…Ð¡˜ñð€À¤ì(€€€ô(€€€Ù…È´€ô¥¹ÁÕÐ¹µ…Ñ  ½x üè¡q¬¤è¤ü¡q‘ìÉô¤è¡q‘ìÉô¤¡p¹q¬¤ü¼¤ì(€€€¥˜€ …´¤ì(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô(€€€¥˜€¡Á…ÉÍ•±½…Ð¡µlÉt¤€ø€Ôä¤ì(€€€€€€¼¼Q¥µ•ÍÑ…µÀÑ…­•ÌÑ¡”™½É´½˜m¡½ÕÉÍtémµ¥¹ÕÑ•Ít¹mµ¥±±¥Í•½¹‘Ít(€€€€€€¼¼¥ÉÍÐÁ½Í¥Ñ¥½¸¥Ì¡½ÕÉÌ…Ì¥ÐÌ½Ù•È€Ôä¸(€€€€€É•ÑÕÉ¸½µÁÕÑ•M•½¹‘Ì¡µlÉt°µlÍt°€À°µlÑt¤ì(€€€ô(€€€€¼¼Q¥µ•ÍÑ…µÀÑ…­•ÌÑ¡”™½É´½˜m¡½ÕÉÌ€¡½ÁÑ¥½¹…°¥témµ¥¹ÕÑ•ÍtémÍ•½¹‘Ít¹mµ¥±±¥Í•½¹‘Ít(€€€É•ÑÕÉ¸½µÁÕÑ•M•½¹‘Ì¡µlÅt°µlÉt°µlÍt°µlÑt¤ì(€ô((€€¼¼Í•ÑÑ¥¹Ì½‰©•Ð¡½±‘Ì­•ä½Ù…±Õ”Á…¥ÉÌ…¹Ý¥±°¥¹½É”…¹åÑ¡¥¹œ‰ÕÐÑ¡”™¥ÉÍÐ(€€¼¼…ÍÍ¥¹µ•¹ÐÑ¼„ÍÁ•¥™¥Œ­•ä¸(€Ù…ÈM•ÑÑ¥¹Ì€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸M•ÑÑ¥¹Ì ¤ì(€€€€€Ñ¡¥Ì¹Ù…±Õ•Ì€ô=‰©•Ð¹É•…Ñ”¡¹Õ±°¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼È€ôM•ÑÑ¥¹Ì¹ÁÉ½Ñ½ÑåÁ”ì(€€€€¼¼=¹±ä…•ÁÐÑ¡”™¥ÉÍÐ…ÍÍ¥¹µ•¹ÐÑ¼…¹ä­•ä¸(€€€}ÁÉ½Ñ¼È¹Í•Ð€ô™Õ¹Ñ¥½¸Í•Ð¡¬°Ø¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹•Ð¡¬¤€˜˜Ø€„ôô€œœ¤ì(€€€€€€€Ñ¡¥Ì¹Ù…±Õ•Ím­t€ôØì(€€€€€ô(€€€ô(€€€€¼¼I•ÑÕÉ¸Ñ¡”Ù…±Õ”™½È„­•ä°½È„‘•™…Õ±ÐÙ…±Õ”¸(€€€€¼¼%˜€‘•™…Õ±Ñ-•äœ¥ÌÁ…ÍÍ•Ñ¡•¸€‘™±Ðœ¥Ì…ÍÍÕµ•Ñ¼‰”…¸½‰©•ÐÝ¥Ñ (€€€€¼¼„¹Õµ‰•È½˜Á½ÍÍ¥‰±”‘•™…Õ±ÐÙ…±Õ•Ì…ÌÁÉ½Á•ÉÑ¥•ÌÝ¡•É”€‘•™…Õ±Ñ-•äœ¥Ì(€€€€¼¼Ñ¡”­•ä½˜Ñ¡”ÁÉ½Á•ÉÑäÑ¡…ÐÝ¥±°‰”¡½Í•¸ì½Ñ¡•ÉÝ¥Í”¥ÐÌ…ÍÍÕµ•Ñ¼‰”(€€€€¼¼„Í¥¹±”Ù…±Õ”¸(€€€€ì(€€€}ÁÉ½Ñ¼È¹•Ð€ô™Õ¹Ñ¥½¸•Ð¡¬°‘™±Ð°‘•™…Õ±Ñ-•ä¤ì(€€€€€¥˜€¡‘•™…Õ±Ñ-•ä¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡…Ì¡¬¤€üÑ¡¥Ì¹Ù…±Õ•Ím­t€è‘™±Ñm‘•™…Õ±Ñ-•åtì(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡…Ì¡¬¤€üÑ¡¥Ì¹Ù…±Õ•Ím­t€è‘™±Ðì(€€€ô(€€€€¼¼¡•¬Ý¡•Ñ¡•ÈÝ”¡…Ù”„Ù…±Õ”™½È„­•ä¸(€€€€ì(€€€}ÁÉ½Ñ¼È¹¡…Ì€ô™Õ¹Ñ¥½¸¡…Ì¡¬¤ì(€€€€€É•ÑÕÉ¸¬¥¸Ñ¡¥Ì¹Ù…±Õ•Ìì(€€€ô(€€€€¼¼•ÁÐ„Í•ÑÑ¥¹œ¥˜¥ÑÌ½¹”½˜Ñ¡”¥Ù•¸…±Ñ•É¹…Ñ¥Ù•Ì¸(€€€€ì(€€€}ÁÉ½Ñ¼È¹…±Ð€ô™Õ¹Ñ¥½¸…±Ð¡¬°Ø°„¤ì(€€€€€™½È€¡Ù…È¸€ô€Àì¸€ð„¹±•¹Ñ ì€¬­¸¤ì(€€€€€€€¥˜€¡Ø€ôôô…m¹t¤ì(€€€€€€€€€Ñ¡¥Ì¹Í•Ð¡¬°Ø¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€ô(€€€€¼¼•ÁÐ„Í•ÑÑ¥¹œ¥˜¥ÑÌ„Ù…±¥€¡Í¥¹•¤¥¹Ñ••È¸(€€€€ì(€€€}ÁÉ½Ñ¼È¹¥¹Ñ••È€ô™Õ¹Ñ¥½¸¥¹Ñ••È¡¬°Ø¤ì(€€€€€¥˜€ ½x´ýq¬¼¹Ñ•ÍÐ¡Ø¤¤ì(€€€€€€€€¼¼¥¹Ñ••È(€€€€€€€Ñ¡¥Ì¹Í•Ð¡¬°Á…ÉÍ•%¹Ð¡Ø°€ÄÀ¤¤ì(€€€€€ô(€€€ô(€€€€¼¼•ÁÐ„Í•ÑÑ¥¹œ¥˜¥ÑÌ„Ù…±¥Á•É•¹Ñ…”¸(€€€€ì(€€€}ÁÉ½Ñ¼È¹Á•É•¹Ð€ô™Õ¹Ñ¥½¸Á•É•¹Ð¡¬°Ø¤ì(€€€€€¥˜€ ½x¡mq‘uìÄ°Íô¤¡p¹mq‘t¨¤ü”¼¹Ñ•ÍÐ¡Ø¤¤ì(€€€€€€€Ù…È}Á•É•¹Ð€ôÁ…ÉÍ•±½…Ð¡Ø¤ì(€€€€€€€¥˜€¡}Á•É•¹Ð€øô€À€˜˜}Á•É•¹Ð€ðô€ÄÀÀ¤ì(€€€€€€€€€Ñ¡¥Ì¹Í•Ð¡¬°}Á•É•¹Ð¤ì(€€€€€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ôì(€€€É•ÑÕÉ¸M•ÑÑ¥¹Ìì(€ô ¤ì€¼¼!•±Á•È™Õ¹Ñ¥½¸Ñ¼Á…ÉÍ”¥¹ÁÕÐ¥¹Ñ¼É½ÕÁÌÍ•Á…É…Ñ•‰ä€É½ÕÁ•±¥´œ°…¹(€€¼¼¥¹Ñ•ÉÁÉ•Ð•… É½ÕÀ…Ì„­•ä½Ù…±Õ”Á…¥ÈÍ•Á…É…Ñ•‰ä€­•åY…±Õ••±¥´œ¸(€™Õ¹Ñ¥½¸Á…ÉÍ•=ÁÑ¥½¹Ì¡¥¹ÁÕÐ°…±±‰…¬°­•åY…±Õ••±¥´°É½ÕÁ•±¥´¤ì(€€€Ù…ÈÉ½ÕÁÌ€ôÉ½ÕÁ•±¥´€ü¥¹ÁÕÐ¹ÍÁ±¥Ð¡É½ÕÁ•±¥´¤€èm¥¹ÁÕÑtì(€€€™½È€¡Ù…È¤¥¸É½ÕÁÌ¤ì(€€€€€¥˜€¡ÑåÁ•½˜É½ÕÁÍm¥t€„ôô€ÍÑÉ¥¹œœ¤ì(€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€ô(€€€€€Ù…È­Ø€ôÉ½ÕÁÍm¥t¹ÍÁ±¥Ð¡­•åY…±Õ••±¥´¤ì(€€€€€¥˜€¡­Ø¹±•¹Ñ €„ôô€È¤ì(€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€ô(€€€€€Ù…È¬€ô­ÙlÁtì(€€€€€Ù…ÈØ€ô­ÙlÅtì(€€€€€…±±‰…¬¡¬°Ø¤ì(€€€ô(€ô(€Ù…È‘•™…Õ±ÑÌ€ô¹•ÜYQQÕ” À°€À°€œœ¤ì(€€¼¼€µ¥‘‘±”œÝ…Ì¡…¹•Ñ¼€•¹Ñ•Èœ¥¸Ñ¡”ÍÁ•Œè¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½ÜÍŒ½Ý•‰ÙÑÐ½ÁÕ±°¼ÈÐÐ(€€¼¼€M…™…É¤‘½•Í¸Ðå•ÐÍÕÁÁ½ÉÐÑ¡¥Ì¡…¹”°‰ÕÐ…¹¡É½µ”‘¼¸(€Ù…È•¹Ñ•È€ô‘•™…Õ±ÑÌ¹…±¥¸€ôôô€µ¥‘‘±”œ€ü€µ¥‘‘±”œ€è€•¹Ñ•Èœì(€™Õ¹Ñ¥½¸Á…ÉÍ•Õ”¡¥¹ÁÕÐ°Õ”°É•¥½¹1¥ÍÐ¤ì(€€€€¼¼I•µ•µ‰•ÈÑ¡”½É¥¥¹…°¥¹ÁÕÐ¥˜Ý”¹••Ñ¼Ñ¡É½Ü…¸•ÉÉ½È¸(€€€Ù…È½%¹ÁÕÐ€ô¥¹ÁÕÐì(€€€€¼¼€Ð¸Ä]•‰YQPÑ¥µ•ÍÑ…µÀ(€€€™Õ¹Ñ¥½¸½¹ÍÕµ•Q¥µ•MÑ…µÀ ¤ì(€€€€€Ù…ÈÑÌ€ôÁ…ÉÍ•Q¥µ•MÑ…µÀ¡¥¹ÁÕÐ¤ì(€€€€€¥˜€¡ÑÌ€ôôô¹Õ±°¤ì(€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È 5…±™½Éµ•Ñ¥µ•ÍÑ…µÀè€œ€¬½%¹ÁÕÐ¤ì(€€€€€ô((€€€€€€¼¼I•µ½Ù”Ñ¥µ”ÍÑ…µÀ™É½´¥¹ÁÕÐ¸(€€€€€¥¹ÁÕÐ€ô¥¹ÁÕÐ¹É•Á±…” ½ymyqÍ„µéµhµt¬¼°€œœ¤ì(€€€€€É•ÑÕÉ¸ÑÌì(€€€ô((€€€€¼¼€Ð¸Ð¸È]•‰YQPÕ”Í•ÑÑ¥¹Ì(€€€™Õ¹Ñ¥½¸½¹ÍÕµ•Õ•M•ÑÑ¥¹Ì¡¥¹ÁÕÐ°Õ”¤ì(€€€€€Ù…ÈÍ•ÑÑ¥¹Ì€ô¹•ÜM•ÑÑ¥¹Ì ¤ì(€€€€€Á…ÉÍ•=ÁÑ¥½¹Ì¡¥¹ÁÕÐ°™Õ¹Ñ¥½¸€¡¬°Ø¤ì(€€€€€€€Ù…ÈÙ…±Ìì(€€€€€€€ÍÝ¥Ñ €¡¬¤ì(€€€€€€€€€…Í”€É•¥½¸œè(€€€€€€€€€€€€¼¼¥¹Ñ¡”±…ÍÐÉ•¥½¸Ý”Á…ÉÍ•Ý¥Ñ Ñ¡”Í…µ”É•¥½¸¥¸(€€€€€€€€€€€™½È€¡Ù…È¤€ôÉ•¥½¹1¥ÍÐ¹±•¹Ñ €´€Äì¤€øô€Àì¤´´¤ì(€€€€€€€€€€€€€¥˜€¡É•¥½¹1¥ÍÑm¥t¹¥€ôôôØ¤ì(€€€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Í•Ð¡¬°É•¥½¹1¥ÍÑm¥t¹É•¥½¸¤ì(€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€…Í”€Ù•ÉÑ¥…°œè(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹…±Ð¡¬°Ø°lÉ°œ°€±Èt¤ì(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€…Í”€±¥¹”œè(€€€€€€€€€€€Ù…±Ì€ôØ¹ÍÁ±¥Ð œ°œ¤ì(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹¥¹Ñ••È¡¬°Ù…±ÍlÁt¤ì(€€€€€€€€€€€¥˜€¡Í•ÑÑ¥¹Ì¹Á•É•¹Ð¡¬°Ù…±ÍlÁt¤¤ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Í•Ð Í¹…ÁQ½1¥¹•Ìœ°™…±Í”¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹…±Ð¡¬°Ù…±ÍlÁt°l…ÕÑ¼t¤ì(€€€€€€€€€€€¥˜€¡Ù…±Ì¹±•¹Ñ €ôôô€È¤ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹…±Ð ±¥¹•±¥¸œ°Ù…±ÍlÅt°lÍÑ…ÉÐœ°•¹Ñ•È°€•¹t¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€…Í”€Á½Í¥Ñ¥½¸œè(€€€€€€€€€€€Ù…±Ì€ôØ¹ÍÁ±¥Ð œ°œ¤ì(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Á•É•¹Ð¡¬°Ù…±ÍlÁt¤ì(€€€€€€€€€€€¥˜€¡Ù…±Ì¹±•¹Ñ €ôôô€È¤ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹…±Ð Á½Í¥Ñ¥½¹±¥¸œ°Ù…±ÍlÅt°lÍÑ…ÉÐœ°•¹Ñ•È°€•¹œ°€±¥¹”µ±•™Ðœ°€±¥¹”µÉ¥¡Ðœ°€…ÕÑ¼t¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€…Í”€Í¥é”œè(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Á•É•¹Ð¡¬°Ø¤ì(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€…Í”€…±¥¸œè(€€€€€€€€€€€Í•ÑÑ¥¹Ì¹…±Ð¡¬°Ø°lÍÑ…ÉÐœ°•¹Ñ•È°€•¹œ°€±•™Ðœ°€É¥¡Ðt¤ì(€€€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô°€¼è¼°€½qÌ¼¤ì((€€€€€€¼¼ÁÁ±ä‘•™…Õ±ÐÙ…±Õ•Ì™½È…¹äµ¥ÍÍ¥¹œ™¥•±‘Ì¸(€€€€€Õ”¹É•¥½¸€ôÍ•ÑÑ¥¹Ì¹•Ð É•¥½¸œ°¹Õ±°¤ì(€€€€€Õ”¹Ù•ÉÑ¥…°€ôÍ•ÑÑ¥¹Ì¹•Ð Ù•ÉÑ¥…°œ°€œœ¤ì(€€€€€Ù…È±¥¹”€ôÍ•ÑÑ¥¹Ì¹•Ð ±¥¹”œ°€…ÕÑ¼œ¤ì(€€€€€¥˜€¡±¥¹”€ôôô€…ÕÑ¼œ€˜˜‘•™…Õ±ÑÌ¹±¥¹”€ôôô€´Ä¤ì(€€€€€€€€¼¼Í•Ð¹Õµ•É¥Œ±¥¹”¹Õµ‰•È™½ÈM…™…É¤(€€€€€€€±¥¹”€ô€´Äì(€€€€€ô(€€€€€Õ”¹±¥¹”€ô±¥¹”ì(€€€€€Õ”¹±¥¹•±¥¸€ôÍ•ÑÑ¥¹Ì¹•Ð ±¥¹•±¥¸œ°€ÍÑ…ÉÐœ¤ì(€€€€€Õ”¹Í¹…ÁQ½1¥¹•Ì€ôÍ•ÑÑ¥¹Ì¹•Ð Í¹…ÁQ½1¥¹•Ìœ°ÑÉÕ”¤ì(€€€€€Õ”¹Í¥é”€ôÍ•ÑÑ¥¹Ì¹•Ð Í¥é”œ°€ÄÀÀ¤ì(€€€€€Õ”¹…±¥¸€ôÍ•ÑÑ¥¹Ì¹•Ð …±¥¸œ°•¹Ñ•È¤ì(€€€€€Ù…ÈÁ½Í¥Ñ¥½¸€ôÍ•ÑÑ¥¹Ì¹•Ð Á½Í¥Ñ¥½¸œ°€…ÕÑ¼œ¤ì(€€€€€¥˜€¡Á½Í¥Ñ¥½¸€ôôô€…ÕÑ¼œ€˜˜‘•™…Õ±ÑÌ¹Á½Í¥Ñ¥½¸€ôôô€ÔÀ¤ì(€€€€€€€€¼¼Í•Ð¹Õµ•É¥ŒÁ½Í¥Ñ¥½¸™½ÈM…™…É¤(€€€€€€€Á½Í¥Ñ¥½¸€ôÕ”¹…±¥¸€ôôô€ÍÑ…ÉÐœñðÕ”¹…±¥¸€ôôô€±•™Ðœ€ü€À€èÕ”¹…±¥¸€ôôô€•¹œñðÕ”¹…±¥¸€ôôô€É¥¡Ðœ€ü€ÄÀÀ€è€ÔÀì(€€€€€ô(€€€€€Õ”¹Á½Í¥Ñ¥½¸€ôÁ½Í¥Ñ¥½¸ì(€€€ô(€€€™Õ¹Ñ¥½¸Í­¥Á]¡¥Ñ•ÍÁ…” ¤ì(€€€€€¥¹ÁÕÐ€ô¥¹ÁÕÐ¹É•Á±…” ½yqÌ¬¼°€œœ¤ì(€€€ô((€€€€¼¼€Ð¸Ä]•‰YQPÕ”Ñ¥µ¥¹Ì¸(€€€Í­¥Á]¡¥Ñ•ÍÁ…” ¤ì(€€€Õ”¹ÍÑ…ÉÑQ¥µ”€ô½¹ÍÕµ•Q¥µ•MÑ…µÀ ¤ì€¼¼€ Ä¤½±±•ÐÕ”ÍÑ…ÉÐÑ¥µ”(€€€Í­¥Á]¡¥Ñ•ÍÁ…” ¤ì(€€€¥˜€¡¥¹ÁÕÐ¹Í±¥” À°€Ì¤€„ôô€œ´´øœ¤ì(€€€€€€¼¼€ Ì¤¹•áÐ¡…É…Ñ•ÉÌµÕÍÐµ…Ñ €œ´´øœ(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È ‰5…±™½Éµ•Ñ¥µ”ÍÑ…µÀ€¡Ñ¥µ”ÍÑ…µÁÌµÕÍÐ‰”Í•Á…É…Ñ•‰ä€œ´´øœ¤è€ˆ€¬½%¹ÁÕÐ¤ì(€€€ô(€€€¥¹ÁÕÐ€ô¥¹ÁÕÐ¹Í±¥” Ì¤ì(€€€Í­¥Á]¡¥Ñ•ÍÁ…” ¤ì(€€€Õ”¹•¹‘Q¥µ”€ô½¹ÍÕµ•Q¥µ•MÑ…µÀ ¤ì€¼¼€ Ô¤½±±•ÐÕ”•¹Ñ¥µ”((€€€€¼¼€Ð¸Ä]•‰YQPÕ”Í•ÑÑ¥¹Ì±¥ÍÐ¸(€€€Í­¥Á]¡¥Ñ•ÍÁ…” ¤ì(€€€½¹ÍÕµ•Õ•M•ÑÑ¥¹Ì¡¥¹ÁÕÐ°Õ”¤ì(€ô(€™Õ¹Ñ¥½¸™¥á1¥¹•	É•…­Ì¡¥¹ÁÕÐ¤ì(€€€É•ÑÕÉ¸¥¹ÁÕÐ¹É•Á±…” ¼ñ‰È üèp¼¤üø½¤°€q¸œ¤ì(€ô(€Ù…ÈYQQA…ÉÍ•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸YQQA…ÉÍ•È ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ô€%9%Q%0œì(€€€€€Ñ¡¥Ì¹‰Õ™™•È€ô€œœì(€€€€€Ñ¡¥Ì¹‘•½‘•È€ô¹•ÜMÑÉ¥¹•½‘•È ¤ì(€€€€€Ñ¡¥Ì¹É•¥½¹1¥ÍÐ€ômtì(€€€€€Ñ¡¥Ì¹Õ”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹Õ”€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½¹Á…ÉÍ¥¹•ÉÉ½È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½¹™±ÕÍ €ôÙ½¥€Àì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼Ì€ôYQQA…ÉÍ•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼Ì¹Á…ÉÍ”€ô™Õ¹Ñ¥½¸Á…ÉÍ”¡‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì((€€€€€€¼¼%˜Ñ¡•É”¥Ì¹¼‘…Ñ„Ñ¡•¸Ý”Ý½¸Ð‘•½‘”¥Ð°‰ÕÐÝ¥±°©ÕÍÐÑÉäÑ¼Á…ÉÍ”(€€€€€€¼¼Ý¡…Ñ•Ù•È¥Ì¥¸‰Õ™™•È…±É•…‘ä¸Q¡¥Ìµ…ä½ÕÈ¥¸¥ÉÕµÍÑ…¹•Ì°™½È(€€€€€€¼¼•á…µÁ±”Ý¡•¸™±ÕÍ  ¤¥Ì…±±•¸(€€€€€¥˜€¡‘…Ñ„¤ì(€€€€€€€€¼¼QÉäÑ¼‘•½‘”Ñ¡”‘…Ñ„Ñ¡…ÐÝ”É••¥Ù•¸(€€€€€€€}Ñ¡¥Ì¹‰Õ™™•È€¬ô}Ñ¡¥Ì¹‘•½‘•È¹‘•½‘”¡‘…Ñ„°ì(€€€€€€€€€ÍÑÉ•…´èÑÉÕ”(€€€€€€€ô¤ì(€€€€€ô(€€€€€™Õ¹Ñ¥½¸½±±•Ñ9•áÑ1¥¹” ¤ì(€€€€€€€Ù…È‰Õ™™•È€ô}Ñ¡¥Ì¹‰Õ™™•Èì(€€€€€€€Ù…ÈÁ½Ì€ô€Àì(€€€€€€€‰Õ™™•È€ô™¥á1¥¹•	É•…­Ì¡‰Õ™™•È¤ì(€€€€€€€Ý¡¥±”€¡Á½Ì€ð‰Õ™™•È¹±•¹Ñ €˜˜‰Õ™™•ÉmÁ½Ít€„ôô€qÈœ€˜˜‰Õ™™•ÉmÁ½Ít€„ôô€q¸œ¤ì(€€€€€€€€€€¬­Á½Ìì(€€€€€€€ô(€€€€€€€Ù…È±¥¹”€ô‰Õ™™•È¹Í±¥” À°Á½Ì¤ì(€€€€€€€€¼¼‘Ù…¹”Ñ¡”‰Õ™™•È•…É±ä¥¸…Í”Ý”™…¥°‰•±½Ü¸(€€€€€€€¥˜€¡‰Õ™™•ÉmÁ½Ít€ôôô€qÈœ¤ì(€€€€€€€€€€¬­Á½Ìì(€€€€€€€ô(€€€€€€€¥˜€¡‰Õ™™•ÉmÁ½Ít€ôôô€q¸œ¤ì(€€€€€€€€€€¬­Á½Ìì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹‰Õ™™•È€ô‰Õ™™•È¹Í±¥”¡Á½Ì¤ì(€€€€€€€É•ÑÕÉ¸±¥¹”ì(€€€€€ô((€€€€€€¼¼€Ì¸È]•‰YQPµ•Ñ…‘…Ñ„¡•…‘•ÈÍå¹Ñ…à(€€€€€™Õ¹Ñ¥½¸Á…ÉÍ•!•…‘•È¡¥¹ÁÕÐ¤ì(€€€€€€€Á…ÉÍ•=ÁÑ¥½¹Ì¡¥¹ÁÕÐ°™Õ¹Ñ¥½¸€¡¬°Ø¤ì(€€€€€€€€€€¼¼ÍÝ¥Ñ €¡¬¤ì(€€€€€€€€€€¼¼…Í”€É•¥½¸œè(€€€€€€€€€€¼¼€Ì¸Ì]•‰YQPÉ•¥½¸µ•Ñ…‘…Ñ„¡•…‘•ÈÍå¹Ñ…à(€€€€€€€€€€¼¼½¹Í½±”¹±½œ Á…ÉÍ”É•¥½¸œ°Ø¤ì(€€€€€€€€€€¼¼Á…ÉÍ•I•¥½¸¡Ø¤ì(€€€€€€€€€€¼¼‰É•…¬ì(€€€€€€€€€€¼¼ô(€€€€€€€ô°€¼è¼¤ì(€€€€€ô((€€€€€€¼¼€Ô¸Ä]•‰YQP™¥±”Á…ÉÍ¥¹œ¸(€€€€€ÑÉäì(€€€€€€€Ù…È±¥¹”€ô€œœì(€€€€€€€¥˜€¡}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€%9%Q%0œ¤ì(€€€€€€€€€€¼¼]”…¸ÐÍÑ…ÉÐÁ…ÉÍ¥¹œÕ¹Ñ¥°Ý”¡…Ù”Ñ¡”™¥ÉÍÐ±¥¹”¸(€€€€€€€€€¥˜€ „½qÉq¹ñq¸¼¹Ñ•ÍÐ¡}Ñ¡¥Ì¹‰Õ™™•È¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ìì(€€€€€€€€€ô(€€€€€€€€€±¥¹”€ô½±±•Ñ9•áÑ1¥¹” ¤ì(€€€€€€€€€€¼¼ÍÑÉ¥À½˜UQ´à	=4¥˜…¹ä(€€€€€€€€€€¼¼¡ÑÑÁÌè¼½•¸¹Ý¥­¥Á•‘¥„¹½Éœ½Ý¥­¤½	åÑ•}½É‘•É}µ…É¬UQ´à(€€€€€€€€€Ù…È´€ô±¥¹”¹µ…Ñ  ½x£¿
ï
ü¤ý]	YQP¡lqÑt¸¨¤ü¼¤ì(€€€€€€€€€¥˜€ „¡´€„ô¹Õ±°€˜˜µlÁt¤¤ì(€€€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È 5…±™½Éµ•]•‰YQPÍ¥¹…ÑÕÉ”¸œ¤ì(€€€€€€€€€ô(€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€!Hœì(€€€€€€€ô(€€€€€€€Ù…È…±É•…‘å½±±•Ñ•‘1¥¹”€ô™…±Í”ì(€€€€€€€Ý¡¥±”€¡}Ñ¡¥Ì¹‰Õ™™•È¤ì(€€€€€€€€€€¼¼]”…¸ÐÁ…ÉÍ”„±¥¹”Õ¹Ñ¥°Ý”¡…Ù”Ñ¡”™Õ±°±¥¹”¸(€€€€€€€€€¥˜€ „½qÉq¹ñq¸¼¹Ñ•ÍÐ¡}Ñ¡¥Ì¹‰Õ™™•È¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ìì(€€€€€€€€€ô(€€€€€€€€€¥˜€ ……±É•…‘å½±±•Ñ•‘1¥¹”¤ì(€€€€€€€€€€€±¥¹”€ô½±±•Ñ9•áÑ1¥¹” ¤ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€…±É•…‘å½±±•Ñ•‘1¥¹”€ô™…±Í”ì(€€€€€€€€€ô(€€€€€€€€€ÍÝ¥Ñ €¡}Ñ¡¥Ì¹ÍÑ…Ñ”¤ì(€€€€€€€€€€€…Í”€!Hœè(€€€€€€€€€€€€€€¼¼€ÄÌ´Äà€´±±½Ü„¡•…‘•È€¡µ•Ñ…‘…Ñ„¤Õ¹‘•ÈÑ¡”]	YQP±¥¹”¸(€€€€€€€€€€€€€¥˜€ ¼è¼¹Ñ•ÍÐ¡±¥¹”¤¤ì(€€€€€€€€€€€€€€€Á…ÉÍ•!•…‘•È¡±¥¹”¤ì(€€€€€€€€€€€€€ô•±Í”¥˜€ …±¥¹”¤ì(€€€€€€€€€€€€€€€€¼¼¸•µÁÑä±¥¹”Ñ•Éµ¥¹…Ñ•ÌÑ¡”¡•…‘•È…¹ÍÑ…ÉÑÌÑ¡”‰½‘ä€¡Õ•Ì¤¸(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€%œì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€…Í”€9=Qœè(€€€€€€€€€€€€€€¼¼%¹½É”9=Q‰±½­Ì¸(€€€€€€€€€€€€€¥˜€ …±¥¹”¤ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€%œì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€…Í”€%œè(€€€€€€€€€€€€€€¼¼¡•¬™½ÈÑ¡”ÍÑ…ÉÐ½˜9=Q‰±½­Ì¸(€€€€€€€€€€€€€¥˜€ ½y9=Q ‘ñlqÑt¤¼¹Ñ•ÍÐ¡±¥¹”¤¤ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€9=Qœì(€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€¼¼€Ää´Èä€´±±½Ü…¹ä¹Õµ‰•È½˜±¥¹”Ñ•Éµ¥¹…Ñ½ÉÌ°Ñ¡•¸¥¹¥Ñ¥…±¥é”¹•ÜÕ”Ù…±Õ•Ì¸(€€€€€€€€€€€€€¥˜€ …±¥¹”¤ì(€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”€ô¹•ÜYQQÕ” À°€À°€œœ¤ì(€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€Uœì(€€€€€€€€€€€€€€¼¼€ÌÀ´Ìä€´¡•¬¥˜Í•±˜±¥¹”½¹Ñ…¥¹Ì…¸½ÁÑ¥½¹…°¥‘•¹Ñ¥™¥•È½ÈÑ¥µ¥¹œ‘…Ñ„¸(€€€€€€€€€€€€€¥˜€¡±¥¹”¹¥¹‘•á=˜ œ´´øœ¤€ôôô€´Ä¤ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”¹¥€ô±¥¹”ì(€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€¼¼AÉ½•ÍÌ±¥¹”…ÌÍÑ…ÉÐ½˜„Õ”¸(€€€€€€€€€€€€¼¨™…±±ÌÑ¡É½Õ €¨¼(€€€€€€€€€€€…Í”€Uœè(€€€€€€€€€€€€€€¼¼€ÐÀ€´½±±•ÐÕ”Ñ¥µ¥¹Ì…¹Í•ÑÑ¥¹Ì¸(€€€€€€€€€€€€€¥˜€ …}Ñ¡¥Ì¹Õ”¤ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€	Uœì(€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ÑÉäì(€€€€€€€€€€€€€€€Á…ÉÍ•Õ”¡±¥¹”°}Ñ¡¥Ì¹Õ”°}Ñ¡¥Ì¹É•¥½¹1¥ÍÐ¤ì(€€€€€€€€€€€€€ô…Ñ €¡”¤ì(€€€€€€€€€€€€€€€€¼¼%¸…Í”½˜…¸•ÉÉ½È¥¹½É”É•ÍÐ½˜Ñ¡”Õ”¸(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”€ô¹Õ±°ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€	Uœì(€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€UQaPœì(€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€…Í”€UQaPœè(€€€€€€€€€€€€€ì(€€€€€€€€€€€€€€€Ù…È¡…ÍMÕ‰ÍÑÉ¥¹œ€ô±¥¹”¹¥¹‘•á=˜ œ´´øœ¤€„ôô€´Äì(€€€€€€€€€€€€€€€€¼¼€ÌÐ€´%˜Ý”¡…Ù”…¸•µÁÑä±¥¹”Ñ¡•¸É•Á½ÉÐÑ¡”Õ”¸(€€€€€€€€€€€€€€€€¼¼€ÌÔ€´%˜Ý”¡…Ù”Ñ¡”ÍÁ•¥…°ÍÕ‰ÍÑÉ¥¹œ€œ´´øœÑ¡•¸É•Á½ÉÐÑ¡”Õ”°(€€€€€€€€€€€€€€€€¼¼‰ÕÐ‘¼¹½Ð½±±•ÐÑ¡”±¥¹”…ÌÝ”¹••Ñ¼ÁÉ½•ÍÌÑ¡”ÕÉÉ•¹Ð(€€€€€€€€€€€€€€€€¼¼½¹”…Ì„¹•ÜÕ”¸(€€€€€€€€€€€€€€€¥˜€ …±¥¹”ñð¡…ÍMÕ‰ÍÑÉ¥¹œ€˜˜€¡…±É•…‘å½±±•Ñ•‘1¥¹”€ôÑÉÕ”¤¤ì(€€€€€€€€€€€€€€€€€€¼¼]”…É”‘½¹”Á…ÉÍ¥¹œÍ•±˜Õ”¸(€€€€€€€€€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹½¹Õ”€˜˜}Ñ¡¥Ì¹Õ”¤ì(€€€€€€€€€€€€€€€€€€€}Ñ¡¥Ì¹½¹Õ”¡}Ñ¡¥Ì¹Õ”¤ì(€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”€ô¹Õ±°ì(€€€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€%œì(€€€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹Õ”€ôôô¹Õ±°¤ì(€€€€€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹Õ”¹Ñ•áÐ¤ì(€€€€€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”¹Ñ•áÐ€¬ô€q¸œì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹Õ”¹Ñ•áÐ€¬ô±¥¹”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€€€…Í”€	Uœè(€€€€€€€€€€€€€€¼¼€ÔÐ´ØÈ€´½±±•Ð…¹‘¥Í…ÉÑ¡”É•µ…¥¹¥¹œÕ”¸(€€€€€€€€€€€€€¥˜€ …±¥¹”¤ì(€€€€€€€€€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô€%œì(€€€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô…Ñ €¡”¤ì(€€€€€€€€¼¼%˜Ý”…É”ÕÉÉ•¹Ñ±äÁ…ÉÍ¥¹œ„Õ”°É•Á½ÉÐÝ¡…ÐÝ”¡…Ù”¸(€€€€€€€¥˜€¡}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€UQaPœ€˜˜}Ñ¡¥Ì¹Õ”€˜˜}Ñ¡¥Ì¹½¹Õ”¤ì(€€€€€€€€€}Ñ¡¥Ì¹½¹Õ”¡}Ñ¡¥Ì¹Õ”¤ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹Õ”€ô¹Õ±°ì(€€€€€€€€¼¼¹Ñ•È	]	YQPÍÑ…Ñ”¥˜¡•…‘•ÈÝ…Ì¹½ÐÁ…ÉÍ•½ÉÉ•Ñ±ä½Ñ¡•ÉÝ¥Í”(€€€€€€€€¼¼…¹½Ñ¡•È•á•ÁÑ¥½¸½ÕÉÉ•Í¼•¹Ñ•È	UÍÑ…Ñ”¸(€€€€€€€}Ñ¡¥Ì¹ÍÑ…Ñ”€ô}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€%9%Q%0œ€ü€	]	YQPœ€è€	Uœì(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¡¥Ìì(€€€ôì(€€€}ÁÉ½Ñ¼Ì¹™±ÕÍ €ô™Õ¹Ñ¥½¸™±ÕÍ  ¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€ÑÉäì(€€€€€€€€¼¼¥¹¥Í ‘•½‘¥¹œÑ¡”ÍÑÉ•…´¸(€€€€€€€€¼¼}Ñ¡¥Ì¹‰Õ™™•È€¬ô}Ñ¡¥Ì¹‘•½‘•È¹‘•½‘” ¤ì(€€€€€€€€¼¼Må¹Ñ¡•Í¥é”Ñ¡”•¹½˜Ñ¡”ÕÉÉ•¹ÐÕ”½ÈÉ•¥½¸¸(€€€€€€€¥˜€¡}Ñ¡¥Ì¹Õ”ñð}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€!Hœ¤ì(€€€€€€€€€}Ñ¡¥Ì¹‰Õ™™•È€¬ô€q¹q¸œì(€€€€€€€€€}Ñ¡¥Ì¹Á…ÉÍ” ¤ì(€€€€€€€ô(€€€€€€€€¼¼%˜Ý”Ù”™±ÕÍ¡•°Á…ÉÍ•°…¹Ý”É”ÍÑ¥±°½¸Ñ¡”%9%Q%0ÍÑ…Ñ”Ñ¡•¸(€€€€€€€€¼¼Ñ¡…Ðµ•…¹ÌÝ”‘½¸Ð¡…Ù”•¹½Õ ½˜Ñ¡”ÍÑÉ•…´Ñ¼Á…ÉÍ”Ñ¡”™¥ÉÍÐ(€€€€€€€€¼¼±¥¹”¸(€€€€€€€¥˜€¡}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€%9%Q%0œñð}Ñ¡¥Ì¹ÍÑ…Ñ”€ôôô€	]	YQPœ¤ì(€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È 5…±™½Éµ•]•‰YQPÍ¥¹…ÑÕÉ”¸œ¤ì(€€€€€€€ô(€€€€€ô…Ñ €¡”¤ì(€€€€€€€¥˜€¡}Ñ¡¥Ì¹½¹Á…ÉÍ¥¹•ÉÉ½È¤ì(€€€€€€€€€}Ñ¡¥Ì¹½¹Á…ÉÍ¥¹•ÉÉ½È¡”¤ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡}Ñ¡¥Ì¹½¹™±ÕÍ ¤ì(€€€€€€€}Ñ¡¥Ì¹½¹™±ÕÍ  ¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¡¥Ìì(€€€ôì(€€€É•ÑÕÉ¸YQQA…ÉÍ•Èì(€ô ¤ì((€Ù…È1%9	I-L€ô€½qÉq¹ñq¹qÉñq¹ñqÈ½œì((€€¼¼MÑÉ¥¹œ¹ÁÉ½Ñ½ÑåÁ”¹ÍÑ…ÉÑÍ]¥Ñ ¥Ì¹½ÐÍÕÁÁ½ÉÑ•¥¸%ÄÄ(€Ù…ÈÍÑ…ÉÑÍ]¥Ñ €ô™Õ¹Ñ¥½¸ÍÑ…ÉÑÍ]¥Ñ ¡¥¹ÁÕÑMÑÉ¥¹œ°Í•…É¡MÑÉ¥¹œ°Á½Í¥Ñ¥½¸¤ì(€€€¥˜€¡Á½Í¥Ñ¥½¸€ôôôÙ½¥€À¤ì(€€€€€Á½Í¥Ñ¥½¸€ô€Àì(€€€ô(€€€É•ÑÕÉ¸¥¹ÁÕÑMÑÉ¥¹œ¹Í±¥”¡Á½Í¥Ñ¥½¸°Á½Í¥Ñ¥½¸€¬Í•…É¡MÑÉ¥¹œ¹±•¹Ñ ¤€ôôôÍ•…É¡MÑÉ¥¹œì(€ôì(€Ù…ÈÕ•MÑÉ¥¹œÉµ¥±±¥Ì€ô™Õ¹Ñ¥½¸Õ•MÑÉ¥¹œÉµ¥±±¥Ì¡Ñ¥µ•MÑÉ¥¹œ¤ì(€€€Ù…ÈÑÌ€ôÁ…ÉÍ•%¹Ð¡Ñ¥µ•MÑÉ¥¹œ¹Í±¥” ´Ì¤¤ì(€€€Ù…ÈÍ•Ì€ôÁ…ÉÍ•%¹Ð¡Ñ¥µ•MÑÉ¥¹œ¹Í±¥” ´Ø°€´Ð¤¤ì(€€€Ù…Èµ¥¹Ì€ôÁ…ÉÍ•%¹Ð¡Ñ¥µ•MÑÉ¥¹œ¹Í±¥” ´ä°€´Ü¤¤ì(€€€Ù…È¡½ÕÉÌ€ôÑ¥µ•MÑÉ¥¹œ¹±•¹Ñ €ø€ä€üÁ…ÉÍ•%¹Ð¡Ñ¥µ•MÑÉ¥¹œ¹ÍÕ‰ÍÑÉ¥¹œ À°Ñ¥µ•MÑÉ¥¹œ¹¥¹‘•á=˜ œèœ¤¤¤€è€Àì(€€€¥˜€ …¥Í¥¹¥Ñ•9Õµ‰•È¡ÑÌ¤ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡Í•Ì¤ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡µ¥¹Ì¤ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡¡½ÕÉÌ¤¤ì(€€€€€Ñ¡É½ÜÉÉ½È ‰5…±™½Éµ•`µQ%5MQ5@µ5@è1½…°èˆ€¬Ñ¥µ•MÑÉ¥¹œ¤ì(€€€ô(€€€ÑÌ€¬ô€ÄÀÀÀ€¨Í•Ìì(€€€ÑÌ€¬ô€ØÀ€¨€ÄÀÀÀ€¨µ¥¹Ìì(€€€ÑÌ€¬ô€ØÀ€¨€ØÀ€¨€ÄÀÀÀ€¨¡½ÕÉÌì(€€€É•ÑÕÉ¸ÑÌì(€ôì((€€¼¼É•…Ñ”„Õ¹¥ÅÕ”¡…Í ¥™½È„Õ”‰…Í•½¸ÍÑ…ÉÐ½•¹Ñ¥µ•Ì…¹Ñ•áÐ¸(€€¼¼Q¡¥Ì¡•±ÁÌÑ¥µ•±¥¹”µ½¹ÑÉ½±±•ÈÑ¼…Ù½¥Í¡½Ý¥¹œÉ•Á•…Ñ•…ÁÑ¥½¹Ì¸(€™Õ¹Ñ¥½¸•¹•É…Ñ•Õ•%¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°Ñ•áÐ¤ì(€€€É•ÑÕÉ¸¡…Í ¡ÍÑ…ÉÑQ¥µ”¹Ñ½MÑÉ¥¹œ ¤¤€¬¡…Í ¡•¹‘Q¥µ”¹Ñ½MÑÉ¥¹œ ¤¤€¬¡…Í ¡Ñ•áÐ¤ì(€ô(€Ù…È…±Õ±…Ñ•=™™Í•Ð€ô™Õ¹Ñ¥½¸…±Õ±…Ñ•=™™Í•Ð¡ÙÑÑÌ°Œ°ÁÉ•Í•¹Ñ…Ñ¥½¹Q¥µ”¤ì(€€€Ù…ÈÕÉÉ€ôÙÑÑÍmtì(€€€Ù…ÈÁÉ•Ù€ôÙÑÑÍmÕÉÉ¹ÁÉ•Ùtì((€€€€¼¼Q¡¥Ì¥ÌÑ¡”™¥ÉÍÐ‘¥Í½¹Ñ¥¹Õ¥Ñä½ÈÕ•Ì¡…Ù”‰••¸ÁÉ½•ÍÍ•Í¥¹”Ñ¡”±…ÍÐ‘¥Í½¹Ñ¥¹Õ¥Ñä(€€€€¼¼=™™Í•Ð€ôÕÉÉ•¹Ð‘¥Í½¹Ñ¥¹Õ¥ÑäÑ¥µ”(€€€¥˜€ …ÁÉ•Ùñð€…ÁÉ•Ù¹¹•Ü€˜˜ÕÉÉ¹¹•Ü¤ì(€€€€€ÙÑÑÌ¹=™™Í•Ð€ôÙÑÑÌ¹ÁÉ•Í•¹Ñ…Ñ¥½¹=™™Í•Ð€ôÕÉÉ¹ÍÑ…ÉÐì(€€€€€ÕÉÉ¹¹•Ü€ô™…±Í”ì(€€€€€É•ÑÕÉ¸ì(€€€ô((€€€€¼¼Q¡•É”¡…Ù”‰••¸‘¥Í½¹Ñ¥¹Õ¥Ñ¥•ÌÍ¥¹”Õ•ÌÝ•É”±…ÍÐÁ…ÉÍ•¸(€€€€¼¼=™™Í•Ð€ôÑ¥µ”•±…ÁÍ•(€€€Ý¡¥±”€ ¡}ÁÉ•Ù€ôÁÉ•Ù¤€„ô¹Õ±°€˜˜}ÁÉ•Ù¹¹•Ü¤ì(€€€€€Ù…È}ÁÉ•Ùì(€€€€€ÙÑÑÌ¹=™™Í•Ð€¬ôÕÉÉ¹ÍÑ…ÉÐ€´ÁÉ•Ù¹ÍÑ…ÉÐì(€€€€€ÕÉÉ¹¹•Ü€ô™…±Í”ì(€€€€€ÕÉÉ€ôÁÉ•Ùì(€€€€€ÁÉ•Ù€ôÙÑÑÍmÕÉÉ¹ÁÉ•Ùtì(€€€ô(€€€ÙÑÑÌ¹ÁÉ•Í•¹Ñ…Ñ¥½¹=™™Í•Ð€ôÁÉ•Í•¹Ñ…Ñ¥½¹Q¥µ”ì(€ôì(€™Õ¹Ñ¥½¸Á…ÉÍ•]•‰YQP¡ÙÑÑ	åÑ•ÉÉ…ä°¥¹¥ÑAQL°ÙÑÑÌ°Œ°Ñ¥µ•=™™Í•Ð°…±±	…¬°•ÉÉ½É…±±	…¬¤ì(€€€Ù…ÈÁ…ÉÍ•È€ô¹•ÜYQQA…ÉÍ•È ¤ì(€€€€¼¼½¹Ù•ÉÐ‰åÑ•ÉÉ…ä¥¹Ñ¼ÍÑÉ¥¹œ°É•Á±…¥¹œ…¹äÍ½µ•Ý¡…Ð•á½Ñ¥Œ±¥¹•™••‘ÌÝ¥Ñ €‰q¸ˆ°Ñ¡•¸ÍÁ±¥Ð½¸Ñ¡…Ð¡…É…Ñ•È¸(€€€€¼¼U¥¹ÐáÉÉ…ä¹ÁÉ½Ñ½ÑåÁ”¹É•‘Õ”¥Ì¹½Ð¥µÁ±•µ•¹Ñ•¥¸%ÄÄ(€€€Ù…ÈÙÑÑ1¥¹•Ì€ôÕÑ˜áÉÉ…åQ½MÑÈ¡¹•ÜU¥¹ÐáÉÉ…ä¡ÙÑÑ	åÑ•ÉÉ…ä¤¤¹ÑÉ¥´ ¤¹É•Á±…”¡1%9	I-L°€q¸œ¤¹ÍÁ±¥Ð q¸œ¤ì(€€€Ù…ÈÕ•Ì€ômtì(€€€Ù…È¥¹¥ÐäÁ­!è€ô¥¹¥ÑAQL€üÑ½5Á•QÍ±½­É½µQ¥µ•Í…±”¡¥¹¥ÑAQL¹‰…Í•Q¥µ”°¥¹¥ÑAQL¹Ñ¥µ•Í…±”¤€è€Àì(€€€Ù…ÈÕ•Q¥µ”€ô€œÀÀèÀÀ¸ÀÀÀœì(€€€Ù…ÈÑ¥µ•ÍÑ…µÁ5…Á5AQL€ô€Àì(€€€Ù…ÈÑ¥µ•ÍÑ…µÁ5…Á1=0€ô€Àì(€€€Ù…ÈÁ…ÉÍ¥¹ÉÉ½Èì(€€€Ù…È¥¹!•…‘•È€ôÑÉÕ”ì(€€€Á…ÉÍ•È¹½¹Õ”€ô™Õ¹Ñ¥½¸€¡Õ”¤ì(€€€€€€¼¼‘©ÕÍÐÕ”Ñ¥µ¥¹œì±…µÀÕ•ÌÑ¼ÍÑ…ÉÐ¹¼•…É±¥•ÈÑ¡…¸€´…¹‘É½ÀÕ•ÌÑ¡…Ð‘½¸Ð•¹…™Ñ•È€´€À½¸Ñ¥µ•±¥¹”¸(€€€€€Ù…ÈÕÉÉ€ôÙÑÑÍmtì(€€€€€Ù…ÈÕ•=™™Í•Ð€ôÙÑÑÌ¹=™™Í•Ðì((€€€€€€¼¼…±Õ±…Ñ”ÍÕ‰Ñ¥Ñ±”AQL½™™Í•Ð(€€€€€Ù…ÈÝ•‰YÑÑ5Á•QÍ5…Á=™™Í•Ð€ô€¡Ñ¥µ•ÍÑ…µÁ5…Á5AQL€´¥¹¥ÐäÁ­!è¤€¼€äÀÀÀÀì((€€€€€€¼¼UÁ‘…Ñ”½™™Í•ÑÌ™½È¹•Ü‘¥Í½¹Ñ¥¹Õ¥Ñ¥•Ì(€€€€€¥˜€¡ÕÉÉ€„ô¹Õ±°€˜˜ÕÉÉ¹¹•Ü¤ì(€€€€€€€¥˜€¡Ñ¥µ•ÍÑ…µÁ5…Á1=0€„ôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€€¼¼]¡•¸±½…°Ñ¥µ”¥ÌÁÉ½Ù¥‘•°½™™Í•Ð€ô‘¥Í½¹Ñ¥¹Õ¥ÑäÍÑ…ÉÐÑ¥µ”€´±½…°Ñ¥µ”(€€€€€€€€€Õ•=™™Í•Ð€ôÙÑÑÌ¹=™™Í•Ð€ôÕÉÉ¹ÍÑ…ÉÐì(€€€€€€€ô•±Í”ì(€€€€€€€€€…±Õ±…Ñ•=™™Í•Ð¡ÙÑÑÌ°Œ°Ý•‰YÑÑ5Á•QÍ5…Á=™™Í•Ð¤ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡Ý•‰YÑÑ5Á•QÍ5…Á=™™Í•Ð¤ì(€€€€€€€¥˜€ …¥¹¥ÑAQL¤ì(€€€€€€€€€Á…ÉÍ¥¹ÉÉ½È€ô¹•ÜÉÉ½È 5¥ÍÍ¥¹œ¥¹¥ÑAQL™½ÈYQP5AQLœ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼%˜Ý”¡…Ù”5AQL°½™™Í•Ð€ôÁÉ•Í•¹Ñ…Ñ¥½¸Ñ¥µ”€¬‘¥Í½¹Ñ¥¹Õ¥Ñä½™™Í•Ð(€€€€€€€Õ•=™™Í•Ð€ôÝ•‰YÑÑ5Á•QÍ5…Á=™™Í•Ð€´ÙÑÑÌ¹ÁÉ•Í•¹Ñ…Ñ¥½¹=™™Í•Ðì(€€€€€ô(€€€€€Ù…È‘ÕÉ…Ñ¥½¸€ôÕ”¹•¹‘Q¥µ”€´Õ”¹ÍÑ…ÉÑQ¥µ”ì(€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ô¹½Éµ…±¥é•AÑÌ ¡Õ”¹ÍÑ…ÉÑQ¥µ”€¬Õ•=™™Í•Ð€´Ñ¥µ•ÍÑ…µÁ5…Á1=0¤€¨€äÀÀÀÀ°Ñ¥µ•=™™Í•Ð€¨€äÀÀÀÀ¤€¼€äÀÀÀÀì(€€€€€Õ”¹ÍÑ…ÉÑQ¥µ”€ô5…Ñ ¹µ…à¡ÍÑ…ÉÑQ¥µ”°€À¤ì(€€€€€Õ”¹•¹‘Q¥µ”€ô5…Ñ ¹µ…à¡ÍÑ…ÉÑQ¥µ”€¬‘ÕÉ…Ñ¥½¸°€À¤ì((€€€€€€¼½ÑÉ¥´ÑÉ…¥±¥¹œÝ•‰ÙÑÐ‰±½¬Ý¡¥Ñ•ÍÁ…•Ì(€€€€€Ù…ÈÑ•áÐ€ôÕ”¹Ñ•áÐ¹ÑÉ¥´ ¤ì((€€€€€€¼¼¥à•¹½‘¥¹œ½˜ÍÁ•¥…°¡…É…Ñ•ÉÌ(€€€€€Õ”¹Ñ•áÐ€ô‘•½‘•UI%½µÁ½¹•¹Ð¡•¹½‘•UI%½µÁ½¹•¹Ð¡Ñ•áÐ¤¤ì((€€€€€€¼¼%˜Ñ¡”Õ”Ý…Ì¹½Ð…ÍÍ¥¹•…¸¥™É½´Ñ¡”YQP™¥±”€¡±¥¹”…‰½Ù”Ñ¡”½¹Ñ•¹Ð¤°É•…Ñ”½¹”¸(€€€€€¥˜€ …Õ”¹¥¤ì(€€€€€€€Õ”¹¥€ô•¹•É…Ñ•Õ•%¡Õ”¹ÍÑ…ÉÑQ¥µ”°Õ”¹•¹‘Q¥µ”°Ñ•áÐ¤ì(€€€€€ô(€€€€€¥˜€¡Õ”¹•¹‘Q¥µ”€ø€À¤ì(€€€€€€€Õ•Ì¹ÁÕÍ ¡Õ”¤ì(€€€€€ô(€€€ôì(€€€Á…ÉÍ•È¹½¹Á…ÉÍ¥¹•ÉÉ½È€ô™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€Á…ÉÍ¥¹ÉÉ½È€ô•ÉÉ½Èì(€€€ôì(€€€Á…ÉÍ•È¹½¹™±ÕÍ €ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€¥˜€¡Á…ÉÍ¥¹ÉÉ½È¤ì(€€€€€€€•ÉÉ½É…±±	…¬¡Á…ÉÍ¥¹ÉÉ½È¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€…±±	…¬¡Õ•Ì¤ì(€€€ôì((€€€€¼¼¼Ñ¡É½Õ ½¹Ñ•¹ÑÌ±¥¹”‰ä±¥¹”¸(€€€ÙÑÑ1¥¹•Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡±¥¹”¤ì(€€€€€¥˜€¡¥¹!•…‘•È¤ì(€€€€€€€€¼¼1½½¬™½È`µQ%5MQ5@µ5@¥¸¡•…‘•È¸(€€€€€€€¥˜€¡ÍÑ…ÉÑÍ]¥Ñ ¡±¥¹”°€`µQ%5MQ5@µ5@ôœ¤¤ì(€€€€€€€€€€¼¼=¹”™½Õ¹°¹¼µ½É”…É”…±±½Ý•…¹åÝ…ä°Í¼ÍÑ½ÀÍ•…É¡¥¹œ¸(€€€€€€€€€¥¹!•…‘•È€ô™…±Í”ì(€€€€€€€€€€¼¼áÑÉ…Ð1=0…¹5AQL¸(€€€€€€€€€±¥¹”¹Í±¥” ÄØ¤¹ÍÁ±¥Ð œ°œ¤¹™½É… ¡™Õ¹Ñ¥½¸€¡Ñ¥µ•ÍÑ…µÀ¤ì(€€€€€€€€€€€¥˜€¡ÍÑ…ÉÑÍ]¥Ñ ¡Ñ¥µ•ÍÑ…µÀ°€1=0èœ¤¤ì(€€€€€€€€€€€€€Õ•Q¥µ”€ôÑ¥µ•ÍÑ…µÀ¹Í±¥” Ø¤ì(€€€€€€€€€€€ô•±Í”¥˜€¡ÍÑ…ÉÑÍ]¥Ñ ¡Ñ¥µ•ÍÑ…µÀ°€5AQLèœ¤¤ì(€€€€€€€€€€€€€Ñ¥µ•ÍÑ…µÁ5…Á5AQL€ôÁ…ÉÍ•%¹Ð¡Ñ¥µ•ÍÑ…µÀ¹Í±¥” Ü¤¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô¤ì(€€€€€€€€€ÑÉäì(€€€€€€€€€€€€¼¼½¹Ù•ÉÐÕ”Ñ¥µ”Ñ¼Í•½¹‘Ì(€€€€€€€€€€€Ñ¥µ•ÍÑ…µÁ5…Á1=0€ôÕ•MÑÉ¥¹œÉµ¥±±¥Ì¡Õ•Q¥µ”¤€¼€ÄÀÀÀì(€€€€€€€€€ô…Ñ €¡•ÉÉ½È¤ì(€€€€€€€€€€€Á…ÉÍ¥¹ÉÉ½È€ô•ÉÉ½Èì(€€€€€€€€€ô(€€€€€€€€€€¼¼I•ÑÕÉ¸Ý¥Ñ¡½ÕÐÁ…ÉÍ¥¹œ`µQ%5MQ5@µ5@±¥¹”¸(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô•±Í”¥˜€¡±¥¹”€ôôô€œœ¤ì(€€€€€€€€€¥¹!•…‘•È€ô™…±Í”ì(€€€€€€€ô(€€€€€ô(€€€€€€¼¼A…ÉÍ”±¥¹”‰ä‘•™…Õ±Ð¸(€€€€€Á…ÉÍ•È¹Á…ÉÍ”¡±¥¹”€¬€q¸œ¤ì(€€€ô¤ì(€€€Á…ÉÍ•È¹™±ÕÍ  ¤ì(€ô((€Ù…È%5MÅ}=€ô€ÍÑÁÀ¹ÑÑµ°¹¥´ÅÐœì((€€¼¼Q¥µ”™½Éµ…Ðè é´éÌé™É…µ•Ì ¹ÍÕ‰™É…µ•Ì¤(€Ù…È!5M}I`€ô€½x¡q‘ìÈ±ô¤è¡q‘ìÉô¤è¡q‘ìÉô¤è¡q‘ìÉô¥p¸ü¡q¬¤ü¼ì((€€¼¼Q¥µ”™½Éµ…Ðè¡½ÕÉÌ°µ¥¹ÕÑ•Ì°Í•½¹‘Ì°µ¥±±¥Í•½¹‘Ì°™É…µ•Ì°Ñ¥­Ì(€Ù…ÈQ%5}U9%Q}I`€ô€½x¡q¨ üép¹q¨¤ü¤¡¡ñµñÍñµÍñ™ñÐ¤¼ì(€Ù…ÈÑ•áÑ±¥¹Q½1¥¹•±¥¸€ôì(€€€±•™Ðè€ÍÑ…ÉÐœ°(€€€•¹Ñ•Èè€•¹Ñ•Èœ°(€€€É¥¡Ðè€•¹œ°(€€€ÍÑ…ÉÐè€ÍÑ…ÉÐœ°(€€€•¹è€•¹œ(€ôì(€™Õ¹Ñ¥½¸Á…ÉÍ•%5MÄ¡Á…å±½…°¥¹¥ÑAQL°…±±	…¬°•ÉÉ½É…±±	…¬¤ì(€€€Ù…ÈÉ•ÍÕ±ÑÌ€ô™¥¹‘	½à¡¹•ÜU¥¹ÐáÉÉ…ä¡Á…å±½…¤°lµ‘…Ðt¤ì(€€€¥˜€¡É•ÍÕ±ÑÌ¹±•¹Ñ €ôôô€À¤ì(€€€€€•ÉÉ½É…±±	…¬¡¹•ÜÉÉ½È ½Õ±¹½ÐÁ…ÉÍ”%5MÄµ‘…Ðœ¤¤ì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€Ù…ÈÑÑµ±1¥ÍÐ€ôÉ•ÍÕ±ÑÌ¹µ…À¡™Õ¹Ñ¥½¸€¡µ‘…Ð¤ì(€€€€€É•ÑÕÉ¸ÕÑ˜áÉÉ…åQ½MÑÈ¡µ‘…Ð¤ì(€€€ô¤ì(€€€Ù…ÈÍå¹Q¥µ”€ôÑ½Q¥µ•Í…±•É½µM…±”¡¥¹¥ÑAQL¹‰…Í•Q¥µ”°€Ä°¥¹¥ÑAQL¹Ñ¥µ•Í…±”¤ì(€€€ÑÉäì(€€€€€ÑÑµ±1¥ÍÐ¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÑµ°¤ì(€€€€€€€É•ÑÕÉ¸…±±	…¬¡Á…ÉÍ•QQ50¡ÑÑµ°°Íå¹Q¥µ”¤¤ì(€€€€€ô¤ì(€€€ô…Ñ €¡•ÉÉ½È¤ì(€€€€€•ÉÉ½É…±±	…¬¡•ÉÉ½È¤ì(€€€ô(€ô(€™Õ¹Ñ¥½¸Á…ÉÍ•QQ50¡ÑÑµ°°Íå¹Q¥µ”¤ì(€€€Ù…ÈÁ…ÉÍ•È€ô¹•Ü=5A…ÉÍ•È ¤ì(€€€Ù…Èáµ±½Œ€ôÁ…ÉÍ•È¹Á…ÉÍ•É½µMÑÉ¥¹œ¡ÑÑµ°°€Ñ•áÐ½áµ°œ¤ì(€€€Ù…ÈÑÐ€ôáµ±½Œ¹•Ñ±•µ•¹ÑÍ	åQ…9…µ” ÑÐœ¥lÁtì(€€€¥˜€ …ÑÐ¤ì(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È %¹Ù…±¥ÑÑµ°œ¤ì(€€€ô(€€€Ù…È‘•™…Õ±ÑI…Ñ•%¹™¼€ôì(€€€€€™É…µ•I…Ñ”è€ÌÀ°(€€€€€ÍÕ‰É…µ•I…Ñ”è€Ä°(€€€€€™É…µ•I…Ñ•5Õ±Ñ¥Á±¥•Èè€À°(€€€€€Ñ¥­I…Ñ”è€À(€€€ôì(€€€Ù…ÈÉ…Ñ•%¹™¼€ô=‰©•Ð¹­•åÌ¡‘•™…Õ±ÑI…Ñ•%¹™¼¤¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡É•ÍÕ±Ð°­•ä¤ì(€€€€€É•ÍÕ±Ñm­•åt€ôÑÐ¹•ÑÑÑÉ¥‰ÕÑ” ‰ÑÑÀèˆ€¬­•ä¤ñð‘•™…Õ±ÑI…Ñ•%¹™½m­•åtì(€€€€€É•ÑÕÉ¸É•ÍÕ±Ðì(€€€ô°íô¤ì(€€€Ù…ÈÑÉ¥´€ôÑÐ¹•ÑÑÑÉ¥‰ÕÑ” áµ°éÍÁ…”œ¤€„ôô€ÁÉ•Í•ÉÙ”œì(€€€Ù…ÈÍÑå±•±•µ•¹ÑÌ€ô½±±•Ñ¥½¹Q½¥Ñ¥½¹…Éä¡•Ñ±•µ•¹Ñ½±±•Ñ¥½¸¡ÑÐ°€ÍÑå±¥¹œœ°€ÍÑå±”œ¤¤ì(€€€Ù…ÈÉ•¥½¹±•µ•¹ÑÌ€ô½±±•Ñ¥½¹Q½¥Ñ¥½¹…Éä¡•Ñ±•µ•¹Ñ½±±•Ñ¥½¸¡ÑÐ°€±…å½ÕÐœ°€É•¥½¸œ¤¤ì(€€€Ù…ÈÕ•±•µ•¹ÑÌ€ô•Ñ±•µ•¹Ñ½±±•Ñ¥½¸¡ÑÐ°€‰½‘äœ°€m‰•¥¹tœ¤ì(€€€É•ÑÕÉ¸mt¹µ…À¹…±°¡Õ•±•µ•¹ÑÌ°™Õ¹Ñ¥½¸€¡Õ•±•µ•¹Ð¤ì(€€€€€Ù…ÈÕ•Q•áÐ€ô•ÑQ•áÑ½¹Ñ•¹Ð¡Õ•±•µ•¹Ð°ÑÉ¥´¤ì(€€€€€¥˜€ …Õ•Q•áÐñð€…Õ•±•µ•¹Ð¹¡…ÍÑÑÉ¥‰ÕÑ” ‰•¥¸œ¤¤ì(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ôÁ…ÉÍ•QÑµ±Q¥µ”¡Õ•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” ‰•¥¸œ¤°É…Ñ•%¹™¼¤ì(€€€€€Ù…È‘ÕÉ…Ñ¥½¸€ôÁ…ÉÍ•QÑµ±Q¥µ”¡Õ•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” ‘ÕÈœ¤°É…Ñ•%¹™¼¤ì(€€€€€Ù…È•¹‘Q¥µ”€ôÁ…ÉÍ•QÑµ±Q¥µ”¡Õ•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” •¹œ¤°É…Ñ•%¹™¼¤ì(€€€€€¥˜€¡ÍÑ…ÉÑQ¥µ”€ôôô¹Õ±°¤ì(€€€€€€€Ñ¡É½ÜÑ¥µ•ÍÑ…µÁA…ÉÍ¥¹ÉÉ½È¡Õ•±•µ•¹Ð¤ì(€€€€€ô(€€€€€¥˜€¡•¹‘Q¥µ”€ôôô¹Õ±°¤ì(€€€€€€€¥˜€¡‘ÕÉ…Ñ¥½¸€ôôô¹Õ±°¤ì(€€€€€€€€€Ñ¡É½ÜÑ¥µ•ÍÑ…µÁA…ÉÍ¥¹ÉÉ½È¡Õ•±•µ•¹Ð¤ì(€€€€€€€ô(€€€€€€€•¹‘Q¥µ”€ôÍÑ…ÉÑQ¥µ”€¬‘ÕÉ…Ñ¥½¸ì(€€€€€ô(€€€€€Ù…ÈÕ”€ô¹•ÜYQQÕ”¡ÍÑ…ÉÑQ¥µ”€´Íå¹Q¥µ”°•¹‘Q¥µ”€´Íå¹Q¥µ”°Õ•Q•áÐ¤ì(€€€€€Õ”¹¥€ô•¹•É…Ñ•Õ•%¡Õ”¹ÍÑ…ÉÑQ¥µ”°Õ”¹•¹‘Q¥µ”°Õ”¹Ñ•áÐ¤ì(€€€€€Ù…ÈÉ•¥½¸€ôÉ•¥½¹±•µ•¹ÑÍmÕ•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” É•¥½¸œ¥tì(€€€€€Ù…ÈÍÑå±”€ôÍÑå±•±•µ•¹ÑÍmÕ•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” ÍÑå±”œ¥tì((€€€€€€¼¼ÁÁ±äÍÑå±•ÌÑ¼Õ”(€€€€€Ù…ÈÍÑå±•Ì€ô•ÑQÑµ±MÑå±•Ì¡É•¥½¸°ÍÑå±”°ÍÑå±•±•µ•¹ÑÌ¤ì(€€€€€Ù…ÈÑ•áÑ±¥¸€ôÍÑå±•Ì¹Ñ•áÑ±¥¸ì(€€€€€¥˜€¡Ñ•áÑ±¥¸¤ì(€€€€€€€€¼¼Õ”¹Á½Í¥Ñ¥½¹±¥¸¹½ÐÍ•ÑÑ…‰±”¥¸øÈÀÄØ(€€€€€€€Ù…È±¥¹•±¥¸€ôÑ•áÑ±¥¹Q½1¥¹•±¥¹mÑ•áÑ±¥¹tì(€€€€€€€¥˜€¡±¥¹•±¥¸¤ì(€€€€€€€€€Õ”¹±¥¹•±¥¸€ô±¥¹•±¥¸ì(€€€€€€€ô(€€€€€€€Õ”¹…±¥¸€ôÑ•áÑ±¥¸ì(€€€€€ô(€€€€€}•áÑ•¹‘Ì¡Õ”°ÍÑå±•Ì¤ì(€€€€€É•ÑÕÉ¸Õ”ì(€€€ô¤¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡Õ”¤ì(€€€€€É•ÑÕÉ¸Õ”€„ôô¹Õ±°ì(€€€ô¤ì(€ô(€™Õ¹Ñ¥½¸•Ñ±•µ•¹Ñ½±±•Ñ¥½¸¡™É½µ±•µ•¹Ð°Á…É•¹Ñ9…µ”°¡¥±‘9…µ”¤ì(€€€Ù…ÈÁ…É•¹Ð€ô™É½µ±•µ•¹Ð¹•Ñ±•µ•¹ÑÍ	åQ…9…µ”¡Á…É•¹Ñ9…µ”¥lÁtì(€€€¥˜€¡Á…É•¹Ð¤ì(€€€€€É•ÑÕÉ¸mt¹Í±¥”¹…±°¡Á…É•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±°¡¡¥±‘9…µ”¤¤ì(€€€ô(€€€É•ÑÕÉ¸mtì(€ô(€™Õ¹Ñ¥½¸½±±•Ñ¥½¹Q½¥Ñ¥½¹…Éä¡•±•µ•¹ÑÍ]¥Ñ¡%¤ì(€€€É•ÑÕÉ¸•±•µ•¹ÑÍ]¥Ñ¡%¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡‘¥Ð°•±•µ•¹Ð¤ì(€€€€€Ù…È¥€ô•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ” áµ°é¥œ¤ì(€€€€€¥˜€¡¥¤ì(€€€€€€€‘¥Ñm¥‘t€ô•±•µ•¹Ðì(€€€€€ô(€€€€€É•ÑÕÉ¸‘¥Ðì(€€€ô°íô¤ì(€ô(€™Õ¹Ñ¥½¸•ÑQ•áÑ½¹Ñ•¹Ð¡•±•µ•¹Ð°ÑÉ¥´¤ì(€€€É•ÑÕÉ¸mt¹Í±¥”¹…±°¡•±•µ•¹Ð¹¡¥±‘9½‘•Ì¤¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡ÍÑÈ°¹½‘”°¤¤ì(€€€€€Ù…È}¹½‘”‘¡¥±‘9½‘•Ìì(€€€€€¥˜€¡¹½‘”¹¹½‘•9…µ”€ôôô€‰Èœ€˜˜¤¤ì(€€€€€€€É•ÑÕÉ¸ÍÑÈ€¬€q¸œì(€€€€€ô(€€€€€¥˜€ ¡}¹½‘”‘¡¥±‘9½‘•Ì€ô¹½‘”¹¡¥±‘9½‘•Ì¤€„ô¹Õ±°€˜˜}¹½‘”‘¡¥±‘9½‘•Ì¹±•¹Ñ ¤ì(€€€€€€€É•ÑÕÉ¸•ÑQ•áÑ½¹Ñ•¹Ð¡¹½‘”°ÑÉ¥´¤ì(€€€€€ô•±Í”¥˜€¡ÑÉ¥´¤ì(€€€€€€€É•ÑÕÉ¸ÍÑÈ€¬¹½‘”¹Ñ•áÑ½¹Ñ•¹Ð¹ÑÉ¥´ ¤¹É•Á±…” ½qÌ¬½œ°€œ€œ¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸ÍÑÈ€¬¹½‘”¹Ñ•áÑ½¹Ñ•¹Ðì(€€€ô°€œœ¤ì(€ô(€™Õ¹Ñ¥½¸•ÑQÑµ±MÑå±•Ì¡É•¥½¸°ÍÑå±”°ÍÑå±•±•µ•¹ÑÌ¤ì(€€€Ù…ÈÑÑÍ9Ì€ô€¡ÑÑÀè¼½ÝÝÜ¹ÜÌ¹½Éœ½¹Ì½ÑÑµ°ÍÑå±¥¹œœì(€€€Ù…ÈÉ•¥½¹MÑå±”€ô¹Õ±°ì(€€€Ù…ÈÍÑå±•ÑÑÉ¥‰ÕÑ•Ì€ôl‘¥ÍÁ±…å±¥¸œ°€Ñ•áÑ±¥¸œ°€½±½Èœ°€‰…­É½Õ¹‘½±½Èœ°€™½¹ÑM¥é”œ°€™½¹Ñ…µ¥±äœ(€€€€¼¼€™½¹Ñ]•¥¡Ðœ°(€€€€¼¼€±¥¹•!•¥¡Ðœ°(€€€€¼¼€ÝÉ…Á=ÁÑ¥½¸œ°(€€€€¼¼€™½¹ÑMÑå±”œ°(€€€€¼¼€‘¥É•Ñ¥½¸œ°(€€€€¼¼€ÝÉ¥Ñ¥¹5½‘”œ(€€€tì(€€€Ù…ÈÉ•¥½¹MÑå±•9…µ”€ôÉ•¥½¸€„ô¹Õ±°€˜˜É•¥½¸¹¡…ÍÑÑÉ¥‰ÕÑ” ÍÑå±”œ¤€üÉ•¥½¸¹•ÑÑÑÉ¥‰ÕÑ” ÍÑå±”œ¤€è¹Õ±°ì(€€€¥˜€¡É•¥½¹MÑå±•9…µ”€˜˜ÍÑå±•±•µ•¹ÑÌ¹¡…Í=Ý¹AÉ½Á•ÉÑä¡É•¥½¹MÑå±•9…µ”¤¤ì(€€€€€É•¥½¹MÑå±”€ôÍÑå±•±•µ•¹ÑÍmÉ•¥½¹MÑå±•9…µ•tì(€€€ô(€€€É•ÑÕÉ¸ÍÑå±•ÑÑÉ¥‰ÕÑ•Ì¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡ÍÑå±•Ì°¹…µ”¤ì(€€€€€Ù…ÈÙ…±Õ”€ô•ÑÑÑÉ¥‰ÕÑ•9L¡ÍÑå±”°ÑÑÍ9Ì°¹…µ”¤ñð•ÑÑÑÉ¥‰ÕÑ•9L¡É•¥½¸°ÑÑÍ9Ì°¹…µ”¤ñð•ÑÑÑÉ¥‰ÕÑ•9L¡É•¥½¹MÑå±”°ÑÑÍ9Ì°¹…µ”¤ì(€€€€€¥˜€¡Ù…±Õ”¤ì(€€€€€€€ÍÑå±•Ím¹…µ•t€ôÙ…±Õ”ì(€€€€€ô(€€€€€É•ÑÕÉ¸ÍÑå±•Ìì(€€€ô°íô¤ì(€ô(€™Õ¹Ñ¥½¸•ÑÑÑÉ¥‰ÕÑ•9L¡•±•µ•¹Ð°¹Ì°¹…µ”¤ì(€€€¥˜€ …•±•µ•¹Ð¤ì(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô(€€€É•ÑÕÉ¸•±•µ•¹Ð¹¡…ÍÑÑÉ¥‰ÕÑ•9L¡¹Ì°¹…µ”¤€ü•±•µ•¹Ð¹•ÑÑÑÉ¥‰ÕÑ•9L¡¹Ì°¹…µ”¤€è¹Õ±°ì(€ô(€™Õ¹Ñ¥½¸Ñ¥µ•ÍÑ…µÁA…ÉÍ¥¹ÉÉ½È¡¹½‘”¤ì(€€€É•ÑÕÉ¸¹•ÜÉÉ½È ‰½Õ±¹½ÐÁ…ÉÍ”ÑÑµ°Ñ¥µ•ÍÑ…µÀ€ˆ€¬¹½‘”¤ì(€ô(€™Õ¹Ñ¥½¸Á…ÉÍ•QÑµ±Q¥µ”¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”°É…Ñ•%¹™¼¤ì(€€€¥˜€ …Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤ì(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô(€€€Ù…ÈÍ•½¹‘Ì€ôÁ…ÉÍ•Q¥µ•MÑ…µÀ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤ì(€€€¥˜€¡Í•½¹‘Ì€ôôô¹Õ±°¤ì(€€€€€¥˜€¡!5M}I`¹Ñ•ÍÐ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤¤ì(€€€€€€€Í•½¹‘Ì€ôÁ…ÉÍ•!½ÕÉÍ5¥¹ÕÑ•ÍM•½¹‘ÍÉ…µ•Ì¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”°É…Ñ•%¹™¼¤ì(€€€€€ô•±Í”¥˜€¡Q%5}U9%Q}I`¹Ñ•ÍÐ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤¤ì(€€€€€€€Í•½¹‘Ì€ôÁ…ÉÍ•Q¥µ•U¹¥ÑÌ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”°É…Ñ•%¹™¼¤ì(€€€€€ô(€€€ô(€€€É•ÑÕÉ¸Í•½¹‘Ìì(€ô(€™Õ¹Ñ¥½¸Á…ÉÍ•!½ÕÉÍ5¥¹ÕÑ•ÍM•½¹‘ÍÉ…µ•Ì¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”°É…Ñ•%¹™¼¤ì(€€€Ù…È´€ô!5M}I`¹•á•Œ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤ì(€€€Ù…È™É…µ•Ì€ô€¡µlÑtð€À¤€¬€¡µlÕtð€À¤€¼É…Ñ•%¹™¼¹ÍÕ‰É…µ•I…Ñ”ì(€€€É•ÑÕÉ¸€¡µlÅtð€À¤€¨€ÌØÀÀ€¬€¡µlÉtð€À¤€¨€ØÀ€¬€¡µlÍtð€À¤€¬™É…µ•Ì€¼É…Ñ•%¹™¼¹™É…µ•I…Ñ”ì(€ô(€™Õ¹Ñ¥½¸Á…ÉÍ•Q¥µ•U¹¥ÑÌ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”°É…Ñ•%¹™¼¤ì(€€€Ù…È´€ôQ%5}U9%Q}I`¹•á•Œ¡Ñ¥µ•ÑÑÉ¥‰ÕÑ•Y…±Õ”¤ì(€€€Ù…ÈÙ…±Õ”€ô9Õµ‰•È¡µlÅt¤ì(€€€Ù…ÈÕ¹¥Ð€ôµlÉtì(€€€ÍÝ¥Ñ €¡Õ¹¥Ð¤ì(€€€€€…Í”€ œè(€€€€€€€É•ÑÕÉ¸Ù…±Õ”€¨€ÌØÀÀì(€€€€€…Í”€´œè(€€€€€€€É•ÑÕÉ¸Ù…±Õ”€¨€ØÀì(€€€€€…Í”€µÌœè(€€€€€€€É•ÑÕÉ¸Ù…±Õ”€¨€ÄÀÀÀì(€€€€€…Í”€˜œè(€€€€€€€É•ÑÕÉ¸Ù…±Õ”€¼É…Ñ•%¹™¼¹™É…µ•I…Ñ”ì(€€€€€…Í”€Ðœè(€€€€€€€É•ÑÕÉ¸Ù…±Õ”€¼É…Ñ•%¹™¼¹Ñ¥­I…Ñ”ì(€€€ô(€€€É•ÑÕÉ¸Ù…±Õ”ì(€ô((€Ù…È=ÕÑÁÕÑ¥±Ñ•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸=ÕÑÁÕÑ¥±Ñ•È¡Ñ¥µ•±¥¹•½¹ÑÉ½±±•È°ÑÉ…­9…µ”¤ì(€€€€€Ñ¡¥Ì¹Ñ¥µ•±¥¹•½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹Õ•I…¹•Ì€ômtì(€€€€€Ñ¡¥Ì¹ÑÉ…­9…µ”€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹•¹‘Q¥µ”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÍÉ••¸€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Ñ¥µ•±¥¹•½¹ÑÉ½±±•È€ôÑ¥µ•±¥¹•½¹ÑÉ½±±•Èì(€€€€€Ñ¡¥Ì¹ÑÉ…­9…µ”€ôÑÉ…­9…µ”ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô=ÕÑÁÕÑ¥±Ñ•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘¥ÍÁ…Ñ¡Õ”€ô™Õ¹Ñ¥½¸‘¥ÍÁ…Ñ¡Õ” ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ôôô¹Õ±°¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹Ñ¥µ•±¥¹•½¹ÑÉ½±±•È¹…‘‘Õ•Ì¡Ñ¡¥Ì¹ÑÉ…­9…µ”°Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”°Ñ¡¥Ì¹•¹‘Q¥µ”°Ñ¡¥Ì¹ÍÉ••¸°Ñ¡¥Ì¹Õ•I…¹•Ì¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¹•ÝÕ”€ô™Õ¹Ñ¥½¸¹•ÝÕ”¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°ÍÉ••¸¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ôôô¹Õ±°ñðÑ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€øÍÑ…ÉÑQ¥µ”¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ôÍÑ…ÉÑQ¥µ”ì(€€€€€ô(€€€€€Ñ¡¥Ì¹•¹‘Q¥µ”€ô•¹‘Q¥µ”ì(€€€€€Ñ¡¥Ì¹ÍÉ••¸€ôÍÉ••¸ì(€€€€€Ñ¡¥Ì¹Ñ¥µ•±¥¹•½¹ÑÉ½±±•È¹É•…Ñ•…ÁÑ¥½¹ÍQÉ…¬¡Ñ¡¥Ì¹ÑÉ…­9…µ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•Í•Ð€ô™Õ¹Ñ¥½¸É•Í•Ð ¤ì(€€€€€Ñ¡¥Ì¹Õ•I…¹•Ì€ômtì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑQ¥µ”€ô¹Õ±°ì(€€€ôì(€€€É•ÑÕÉ¸=ÕÑÁÕÑ¥±Ñ•Èì(€ô ¤ì((€Ù…ÈQ¥µ•±¥¹•½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸Q¥µ•±¥¹•½¹ÑÉ½±±•È¡¡±Ì¤ì(€€€€€Ñ¡¥Ì¹¡±Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹•¹…‰±•€ôÑÉÕ”ì(€€€€€Ñ¡¥Ì¹Õ•Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹Ñ•áÑQÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹¥¹¥ÑAQL€ômtì(€€€€€Ñ¡¥Ì¹Õ¹Á…ÉÍ•‘YÑÑÉ…Ì€ômtì(€€€€€Ñ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€€€Ñ¡¥Ì¹¹½¹9…Ñ¥Ù•…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±…ÍÑŒ€ô€´Äì(€€€€€€¼¼1…ÍÐÙ¥‘•¼€¡´ØÀà¤™É…µ•¹Ð(€€€€€Ñ¡¥Ì¹±…ÍÑM¸€ô€´Äì(€€€€€€¼¼1…ÍÐÙ¥‘•¼€¡´ØÀà¤™É…µ•¹Ð5M8(€€€€€Ñ¡¥Ì¹±…ÍÑA…ÉÑ%¹‘•à€ô€´Äì(€€€€€€¼¼1…ÍÐÙ¥‘•¼€¡´ØÀà¤™É…µ•¹ÐA…ÉÐ%¹‘•à(€€€€€Ñ¡¥Ì¹ÁÉ•Ù€ô€´Äì(€€€€€€¼¼1…ÍÐÍÕ‰Ñ¥Ñ±”™É…µ•¹Ð(€€€€€Ñ¡¥Ì¹ÙÑÑÌ€ô¹•ÝYQQÌ ¤ì(€€€€€Ñ¡¥Ì¹…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¡±Ì€ô¡±Ìì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô¡±Ì¹½¹™¥œì(€€€€€Ñ¡¥Ì¹Õ•Ì€ô¡±Ì¹½¹™¥œ¹Õ•!…¹‘±•Èì(€€€€€Ñ¡¥Ì¹…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì€ôì(€€€€€€€Ñ•áÑQÉ…¬Äèì(€€€€€€€€€±…‰•°èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Å1…‰•°°(€€€€€€€€€±…¹Õ…•½‘”èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Å1…¹Õ…•½‘”(€€€€€€€ô°(€€€€€€€Ñ•áÑQÉ…¬Èèì(€€€€€€€€€±…‰•°èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬É1…‰•°°(€€€€€€€€€±…¹Õ…•½‘”èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬É1…¹Õ…•½‘”(€€€€€€€ô°(€€€€€€€Ñ•áÑQÉ…¬Ìèì(€€€€€€€€€±…‰•°èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Í1…‰•°°(€€€€€€€€€±…¹Õ…•½‘”èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Í1…¹Õ…•½‘”(€€€€€€€ô°(€€€€€€€Ñ•áÑQÉ…¬Ðèì(€€€€€€€€€±…‰•°èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Ñ1…‰•°°(€€€€€€€€€±…¹Õ…•½‘”èÑ¡¥Ì¹½¹™¥œ¹…ÁÑ¥½¹ÍQ•áÑQÉ…¬Ñ1…¹Õ…•½‘”(€€€€€€€ô(€€€€€ôì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!%9°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}UAQ°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}1=%9°Ñ¡¥Ì¹½¹É…1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}1=°Ñ¡¥Ì¹½¹É…1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}AIM%9}UMIQ°Ñ¡¥Ì¹½¹É…A…ÉÍ¥¹UÍ•É‘…Ñ„°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}IeAQ°Ñ¡¥Ì¹½¹É…•ÉåÁÑ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹%9%Q}AQM}=U9°Ñ¡¥Ì¹½¹%¹¥ÑAÑÍ½Õ¹°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}1I°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­Í±•…É•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ôQ¥µ•±¥¹•½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!%9°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}UAQ°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}1=%9°Ñ¡¥Ì¹½¹É…1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}1=°Ñ¡¥Ì¹½¹É…1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}AIM%9}UMIQ°Ñ¡¥Ì¹½¹É…A…ÉÍ¥¹UÍ•É‘…Ñ„°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}IeAQ°Ñ¡¥Ì¹½¹É…•ÉåÁÑ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹%9%Q}AQM}=U9°Ñ¡¥Ì¹½¹%¹¥ÑAÑÍ½Õ¹°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-M}1I°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­Í±•…É•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹¡±Ì€ôÑ¡¥Ì¹½¹™¥œ€ôÑ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ€ôÑ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ€ôÕ¹‘•™¥¹•ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¥¹¥Ñ•„ØÀáA…ÉÍ•ÉÌ€ô™Õ¹Ñ¥½¸¥¹¥Ñ•„ØÀáA…ÉÍ•ÉÌ ¤ì(€€€€€Ù…È¡…¹¹•°Ä€ô¹•Ü=ÕÑÁÕÑ¥±Ñ•È¡Ñ¡¥Ì°€Ñ•áÑQÉ…¬Äœ¤ì(€€€€€Ù…È¡…¹¹•°È€ô¹•Ü=ÕÑÁÕÑ¥±Ñ•È¡Ñ¡¥Ì°€Ñ•áÑQÉ…¬Èœ¤ì(€€€€€Ù…È¡…¹¹•°Ì€ô¹•Ü=ÕÑÁÕÑ¥±Ñ•È¡Ñ¡¥Ì°€Ñ•áÑQÉ…¬Ìœ¤ì(€€€€€Ù…È¡…¹¹•°Ð€ô¹•Ü=ÕÑÁÕÑ¥±Ñ•È¡Ñ¡¥Ì°€Ñ•áÑQÉ…¬Ðœ¤ì(€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ€ô¹•Ü•„ØÀáA…ÉÍ•È Ä°¡…¹¹•°Ä°¡…¹¹•°È¤ì(€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ€ô¹•Ü•„ØÀáA…ÉÍ•È Ì°¡…¹¹•°Ì°¡…¹¹•°Ð¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹…‘‘Õ•Ì€ô™Õ¹Ñ¥½¸…‘‘Õ•Ì¡ÑÉ…­9…µ”°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°ÍÉ••¸°Õ•I…¹•Ì¤ì(€€€€€€¼¼Í­¥ÀÕ•ÌÝ¡¥ ½Ù•É±…Àµ½É”Ñ¡…¸€ÔÀ”Ý¥Ñ ÁÉ•Ù¥½ÕÍ±äÁ…ÉÍ•Ñ¥µ”É…¹•Ì(€€€€€Ù…Èµ•É•€ô™…±Í”ì(€€€€€™½È€¡Ù…È¤€ôÕ•I…¹•Ì¹±•¹Ñ ì¤´´ì¤ì(€€€€€€€Ù…ÈÕ•I…¹”€ôÕ•I…¹•Ím¥tì(€€€€€€€Ù…È½Ù•É±…À€ô¥¹Ñ•ÉÍ•Ñ¥½¸¡Õ•I…¹•lÁt°Õ•I…¹•lÅt°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”¤ì(€€€€€€€¥˜€¡½Ù•É±…À€øô€À¤ì(€€€€€€€€€Õ•I…¹•lÁt€ô5…Ñ ¹µ¥¸¡Õ•I…¹•lÁt°ÍÑ…ÉÑQ¥µ”¤ì(€€€€€€€€€Õ•I…¹•lÅt€ô5…Ñ ¹µ…à¡Õ•I…¹•lÅt°•¹‘Q¥µ”¤ì(€€€€€€€€€µ•É•€ôÑÉÕ”ì(€€€€€€€€€¥˜€¡½Ù•É±…À€¼€¡•¹‘Q¥µ”€´ÍÑ…ÉÑQ¥µ”¤€ø€À¸Ô¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€¥˜€ …µ•É•¤ì(€€€€€€€Õ•I…¹•Ì¹ÁÕÍ ¡mÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ•t¤ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€Ù…ÈÑÉ…¬€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•tì(€€€€€€€Ñ¡¥Ì¹Õ•Ì¹¹•ÝÕ”¡ÑÉ…¬°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°ÍÉ••¸¤ì(€€€€€ô•±Í”ì(€€€€€€€Ù…ÈÕ•Ì€ôÑ¡¥Ì¹Õ•Ì¹¹•ÝÕ”¡¹Õ±°°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°ÍÉ••¸¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹UM}AIM°ì(€€€€€€€€€ÑåÁ”è€…ÁÑ¥½¹Ìœ°(€€€€€€€€€Õ•ÌèÕ•Ì°(€€€€€€€€€ÑÉ…¬èÑÉ…­9…µ”(€€€€€€€ô¤ì(€€€€€ô(€€€ô((€€€€¼¼QÉ¥•É•Ý¡•¸…¸¥¹¥Ñ¥…°AQL¥Ì™½Õ¹ìÕÍ•™½ÈÍå¹¡É½¹¥Í…Ñ¥½¸½˜]•‰YQP¸(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹%¹¥ÑAÑÍ½Õ¹€ô™Õ¹Ñ¥½¸½¹%¹¥ÑAÑÍ½Õ¹¡•Ù•¹Ð°}É•˜¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ù…È™É…œ€ô}É•˜¹™É…œ°(€€€€€€€¥€ô}É•˜¹¥°(€€€€€€€¥¹¥ÑAQL€ô}É•˜¹¥¹¥ÑAQL°(€€€€€€€Ñ¥µ•Í…±”€ô}É•˜¹Ñ¥µ•Í…±”ì(€€€€€Ù…ÈÕ¹Á…ÉÍ•‘YÑÑÉ…Ì€ôÑ¡¥Ì¹Õ¹Á…ÉÍ•‘YÑÑÉ…Ìì(€€€€€¥˜€¡¥€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€Ñ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹t€ôì(€€€€€€€€€‰…Í•Q¥µ”è¥¹¥ÑAQL°(€€€€€€€€€Ñ¥µ•Í…±”èÑ¥µ•Í…±”(€€€€€€€ôì(€€€€€ô((€€€€€€¼¼Õ”Ñ¼…Íå¹¡É½¹½ÕÌÁÉ½•ÍÍ¥¹œ°¥¹¥Ñ¥…°AQLµ…ä…ÉÉ¥Ù”±…Ñ•ÈÑ¡…¸Ñ¡”™¥ÉÍÐYQP™É…µ•¹ÑÌ…É”±½…‘•¸(€€€€€€¼¼A…ÉÍ”…¹äÕ¹Á…ÉÍ•™É…µ•¹ÑÌÕÁ½¸É••¥Ù¥¹œÑ¡”¥¹¥Ñ¥…°AQL¸(€€€€€¥˜€¡Õ¹Á…ÉÍ•‘YÑÑÉ…Ì¹±•¹Ñ ¤ì(€€€€€€€Ñ¡¥Ì¹Õ¹Á…ÉÍ•‘YÑÑÉ…Ì€ômtì(€€€€€€€Õ¹Á…ÉÍ•‘YÑÑÉ…Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡™É…œ¤ì(€€€€€€€€€}Ñ¡¥Ì¹½¹É…1½…‘•¡Ù•¹ÑÌ¹I}1=°™É…œ¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñá¥ÍÑ¥¹QÉ…¬€ô™Õ¹Ñ¥½¸•Ñá¥ÍÑ¥¹QÉ…¬¡±…‰•°°±…¹Õ…”¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€¡µ•‘¥„¤ì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðµ•‘¥„¹Ñ•áÑQÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€Ù…ÈÑ•áÑQÉ…¬€ôµ•‘¥„¹Ñ•áÑQÉ…­Ím¥tì(€€€€€€€€€¥˜€¡…¹I•ÕÍ•YÑÑQ•áÑQÉ…¬¡Ñ•áÑQÉ…¬°ì(€€€€€€€€€€€¹…µ”è±…‰•°°(€€€€€€€€€€€±…¹œè±…¹Õ…”°(€€€€€€€€€€€¡…É…Ñ•É¥ÍÑ¥Ìè€ÑÉ…¹ÍÉ¥‰•ÌµÍÁ½­•¸µ‘¥…±½œ±‘•ÍÉ¥‰•ÌµµÕÍ¥Œµ…¹µÍ½Õ¹ô¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸Ñ•áÑQÉ…¬ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•…ÁÑ¥½¹ÍQÉ…¬€ô™Õ¹Ñ¥½¸É•…Ñ•…ÁÑ¥½¹ÍQÉ…¬¡ÑÉ…­9…µ”¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€Ñ¡¥Ì¹É•…Ñ•9…Ñ¥Ù•QÉ…¬¡ÑÉ…­9…µ”¤ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹É•…Ñ•9½¹9…Ñ¥Ù•QÉ…¬¡ÑÉ…­9…µ”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•9…Ñ¥Ù•QÉ…¬€ô™Õ¹Ñ¥½¸É•…Ñ•9…Ñ¥Ù•QÉ…¬¡ÑÉ…­9…µ”¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì°(€€€€€€€…ÁÑ¥½¹ÍQÉ…­Ì€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ì°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€Ù…È}…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì‘Ð€ô…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•ÍmÑÉ…­9…µ•t°(€€€€€€€±…‰•°€ô}…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì‘Ð¹±…‰•°°(€€€€€€€±…¹Õ…•½‘”€ô}…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•Ì‘Ð¹±…¹Õ…•½‘”ì(€€€€€€¼¼¹…‰±”É•ÕÍ”½˜•á¥ÍÑ¥¹œÑ•áÐÑÉ…¬¸(€€€€€Ù…È•á¥ÍÑ¥¹QÉ…¬€ôÑ¡¥Ì¹•Ñá¥ÍÑ¥¹QÉ…¬¡±…‰•°°±…¹Õ…•½‘”¤ì(€€€€€¥˜€ …•á¥ÍÑ¥¹QÉ…¬¤ì(€€€€€€€Ù…ÈÑ•áÑQÉ…¬€ôÑ¡¥Ì¹É•…Ñ•Q•áÑQÉ…¬ …ÁÑ¥½¹Ìœ°±…‰•°°±…¹Õ…•½‘”¤ì(€€€€€€€¥˜€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€¼¼M•Ð„ÍÁ•¥…°ÁÉ½Á•ÉÑä½¸Ñ¡”ÑÉ…¬Í¼Ý”­¹½Ü¥ÐÌµ…¹…•‰ä!±Ì¹©Ì(€€€€€€€€€Ñ•áÑQÉ…­mÑÉ…­9…µ•t€ôÑÉÕ”ì(€€€€€€€€€…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t€ôÑ•áÑQÉ…¬ì(€€€€€€€ô(€€€€€ô•±Í”ì(€€€€€€€…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t€ô•á¥ÍÑ¥¹QÉ…¬ì(€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t¤ì(€€€€€€€Í•¹‘‘‘QÉ…­Ù•¹Ð¡…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t°µ•‘¥„¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•9½¹9…Ñ¥Ù•QÉ…¬€ô™Õ¹Ñ¥½¸É•…Ñ•9½¹9…Ñ¥Ù•QÉ…¬¡ÑÉ…­9…µ”¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹¹½¹9…Ñ¥Ù•…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€€¼¼É•…Ñ”„±¥ÍÐ½˜„Í¥¹±”ÑÉ…¬™½ÈÑ¡”ÁÉ½Ù¥‘•ÈÑ¼½¹ÍÕµ”(€€€€€Ù…ÈÑÉ…­AÉ½Á•ÉÑ¥•Ì€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•ÍmÑÉ…­9…µ•tì(€€€€€¥˜€ …ÑÉ…­AÉ½Á•ÉÑ¥•Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±…‰•°€ôÑÉ…­AÉ½Á•ÉÑ¥•Ì¹±…‰•°ì(€€€€€Ù…ÈÑÉ…¬€ôì(€€€€€€€}¥èÑÉ…­9…µ”°(€€€€€€€±…‰•°è±…‰•°°(€€€€€€€­¥¹è€…ÁÑ¥½¹Ìœ°(€€€€€€€‘•™…Õ±ÐèÑÉ…­AÉ½Á•ÉÑ¥•Ì¹µ•‘¥„€ü€„…ÑÉ…­AÉ½Á•ÉÑ¥•Ì¹µ•‘¥„¹‘•™…Õ±Ð€è™…±Í”°(€€€€€€€±½Í•‘…ÁÑ¥½¹ÌèÑÉ…­AÉ½Á•ÉÑ¥•Ì¹µ•‘¥„(€€€€€ôì(€€€€€Ñ¡¥Ì¹¹½¹9…Ñ¥Ù•…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t€ôÑÉ…¬ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹9=9}9Q%Y}QaQ}QI-M}=U9°ì(€€€€€€€ÑÉ…­ÌèmÑÉ…­t(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•Q•áÑQÉ…¬€ô™Õ¹Ñ¥½¸É•…Ñ•Q•áÑQÉ…¬¡­¥¹°±…‰•°°±…¹œ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€É•ÑÕÉ¸µ•‘¥„¹…‘‘Q•áÑQÉ…¬¡­¥¹°±…‰•°°±…¹œ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€¥˜€ …‘…Ñ„¹µ•‘¥…M½ÕÉ”¤ì(€€€€€€€Ñ¡¥Ì¹}±•…¹QÉ…­Ì ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…ÈÑÉ…¹Í™•ÉÉ¥¹5•‘¥„€ô€„…‘…Ñ„¹ÑÉ…¹Í™•É5•‘¥„ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€¥˜€¡ÑÉ…¹Í™•ÉÉ¥¹5•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È…ÁÑ¥½¹ÍQÉ…­Ì€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ìì(€€€€€=‰©•Ð¹­•åÌ¡…ÁÑ¥½¹ÍQÉ…­Ì¤¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…­9…µ”¤ì(€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t¤ì(€€€€€€€‘•±•Ñ”…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•tì(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹¹½¹9…Ñ¥Ù•…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€€¼¼•Ñ•Ð‘¥Í½¹Ñ¥¹Õ¥Ñä¥¸Ù¥‘•¼™É…µ•¹Ð€¡´ØÀà¤Á…ÉÍ¥¹œ(€€€€€Ñ¡¥Ì¹±…ÍÑŒ€ô€´Äì(€€€€€Ñ¡¥Ì¹±…ÍÑM¸€ô€´Äì(€€€€€Ñ¡¥Ì¹±…ÍÑA…ÉÑ%¹‘•à€ô€´Äì(€€€€€€¼¼•Ñ•Ð‘¥Í½¹Ñ¥¹Õ¥Ñä¥¸ÍÕ‰Ñ¥Ñ±”µ…¹¥™•ÍÑÌ(€€€€€Ñ¡¥Ì¹ÁÉ•Ù€ô€´Äì(€€€€€Ñ¡¥Ì¹ÙÑÑÌ€ô¹•ÝYQQÌ ¤ì(€€€€€€¼¼I•Í•ÐÑÉ…­Ì(€€€€€Ñ¡¥Ì¹}±•…¹QÉ…­Ì ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€€€Ñ¡¥Ì¹¹½¹9…Ñ¥Ù•…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€€€Ñ¡¥Ì¹Ñ•áÑQÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹Õ¹Á…ÉÍ•‘YÑÑÉ…Ì€ômtì(€€€€€Ñ¡¥Ì¹¥¹¥ÑAQL€ômtì(€€€€€¥˜€¡Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ€˜˜Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ¤ì(€€€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ¹É•Í•Ð ¤ì(€€€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ¹É•Í•Ð ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}±•…¹QÉ…­Ì€ô™Õ¹Ñ¥½¸}±•…¹QÉ…­Ì ¤ì(€€€€€€¼¼±•…È½ÕÑ‘…Ñ•ÍÕ‰Ñ¥Ñ±•Ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÑ•áÑQÉ…­Ì€ôµ•‘¥„¹Ñ•áÑQÉ…­Ìì(€€€€€¥˜€¡Ñ•áÑQÉ…­Ì¤ì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ•áÑQÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡Ñ•áÑQÉ…­Ím¥t¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­ÍUÁ‘…Ñ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€Ù…ÈÑÉ…­Ì€ô‘…Ñ„¹ÍÕ‰Ñ¥Ñ±•QÉ…­Ìñðmtì(€€€€€Ù…È¡…Í%5MÄ€ôÑÉ…­Ì¹Í½µ”¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€É•ÑÕÉ¸ÑÉ…¬¹Ñ•áÑ½‘•Œ€ôôô%5MÅ}=ì(€€€€€ô¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹•¹…‰±•]•‰YQPñð¡…Í%5MÄ€˜˜Ñ¡¥Ì¹½¹™¥œ¹•¹…‰±•%5MÄ¤ì(€€€€€€€Ù…È±¥ÍÑ%Í%‘•¹Ñ¥…°€ôÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¹Í%‘•¹Ñ¥…°¡Ñ¡¥Ì¹ÑÉ…­Ì°ÑÉ…­Ì¤ì(€€€€€€€¥˜€¡±¥ÍÑ%Í%‘•¹Ñ¥…°¤ì(€€€€€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ôÑÉ…­Ìì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹Ñ•áÑQÉ…­Ì€ômtì(€€€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ôÑÉ…­Ìì(€€€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€€€Ù…È¥¹UÍ•QÉ…­Ì€ôµ•‘¥„€ü™¥±Ñ•ÉMÕ‰Ñ¥Ñ±•QÉ…­Ì¡µ•‘¥„¹Ñ•áÑQÉ…­Ì¤€è¹Õ±°ì(€€€€€€€€€Ñ¡¥Ì¹ÑÉ…­Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…¬°¥¹‘•à¤ì(€€€€€€€€€€€€¼¼I•ÕÍ”ÑÉ…­ÌÝ¥Ñ Ñ¡”Í…µ”±…‰•°…¹±…¹œ°‰ÕÐ‘¼¹½ÐÉ•ÕÍ”€ØÀà¼ÜÀàÑÉ…­Ì(€€€€€€€€€€€Ù…ÈÑ•áÑQÉ…¬ì(€€€€€€€€€€€¥˜€¡¥¹UÍ•QÉ…­Ì¤ì(€€€€€€€€€€€€€Ù…È¥¹UÍ•QÉ…¬€ô¹Õ±°ì(€€€€€€€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð¥¹UÍ•QÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€€€€€€€¥˜€¡¥¹UÍ•QÉ…­Ím¥t€˜˜…¹I•ÕÍ•YÑÑQ•áÑQÉ…¬¡¥¹UÍ•QÉ…­Ím¥t°ÑÉ…¬¤¤ì(€€€€€€€€€€€€€€€€€¥¹UÍ•QÉ…¬€ô¥¹UÍ•QÉ…­Ím¥tì(€€€€€€€€€€€€€€€€€¥¹UÍ•QÉ…­Ím¥t€ô¹Õ±°ì(€€€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€¥˜€¡¥¹UÍ•QÉ…¬¤ì(€€€€€€€€€€€€€€€Ñ•áÑQÉ…¬€ô¥¹UÍ•QÉ…¬ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€Ù…ÈÑ•áÑQÉ…­-¥¹€ô…ÁÑ¥½¹Í=ÉMÕ‰Ñ¥Ñ±•ÍÉ½µ¡…É…Ñ•É¥ÍÑ¥Ì¡ÑÉ…¬¤ì(€€€€€€€€€€€€€Ñ•áÑQÉ…¬€ô}Ñ¡¥ÌÈ¹É•…Ñ•Q•áÑQÉ…¬¡Ñ•áÑQÉ…­-¥¹°ÑÉ…¬¹¹…µ”°ÑÉ…¬¹±…¹œ¤ì(€€€€€€€€€€€€€¥˜€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€€€€€€Ñ•áÑQÉ…¬¹µ½‘”€ô€‘¥Í…‰±•œì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€€€€}Ñ¡¥ÌÈ¹Ñ•áÑQÉ…­Ì¹ÁÕÍ ¡Ñ•áÑQÉ…¬¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô¤ì(€€€€€€€€€€¼¼]…É¸Ý¡•¸Ù¥‘•¼•±•µ•¹Ð¡…Ì…ÁÑ¥½¹Ì½ÈÍÕ‰Ñ¥Ñ±”Q•áÑQÉ…­Ì…ÉÉ¥•½Ù•È™É½´…¹½Ñ¡•ÈÍ½ÕÉ”(€€€€€€€€€¥˜€¡¥¹UÍ•QÉ…­Ì€„ô¹Õ±°€˜˜¥¹UÍ•QÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€€€€Ù…ÈÕ¹ÕÍ•‘Q•áÑQÉ…­Ì€ô¥¹UÍ•QÉ…­Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡Ð¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Ð€„ôô¹Õ±°ì(€€€€€€€€€€€ô¤¹µ…À¡™Õ¹Ñ¥½¸€¡Ð¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸Ð¹±…‰•°ì(€€€€€€€€€€€ô¤ì(€€€€€€€€€€€¥˜€¡Õ¹ÕÍ•‘Q•áÑQÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹Ý…É¸ ‰5•‘¥„•±•µ•¹Ð½¹Ñ…¥¹ÌÕ¹ÕÍ•ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ìè€ˆ€¬Õ¹ÕÍ•‘Q•áÑQÉ…­Ì¹©½¥¸ œ°€œ¤€¬€ˆ¸I•Á±…”µ•‘¥„•±•µ•¹Ð™½È•… Í½ÕÉ”Ñ¼±•…ÈQ•áÑQÉ…­Ì…¹…ÁÑ¥½¹Ìµ•¹Ô¸ˆ¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹ÑÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€€€¼¼É•…Ñ”„±¥ÍÐ½˜ÑÉ…­Ì™½ÈÑ¡”ÁÉ½Ù¥‘•ÈÑ¼½¹ÍÕµ”(€€€€€€€€€Ù…ÈÑÉ…­Í1¥ÍÐ€ôÑ¡¥Ì¹ÑÉ…­Ì¹µ…À¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€€€±…‰•°èÑÉ…¬¹¹…µ”°(€€€€€€€€€€€€€­¥¹èÑÉ…¬¹ÑåÁ”¹Ñ½1½Ý•É…Í” ¤°(€€€€€€€€€€€€€‘•™…Õ±ÐèÑÉ…¬¹‘•™…Õ±Ð°(€€€€€€€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…¬èÑÉ…¬(€€€€€€€€€€€ôì(€€€€€€€€€ô¤ì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹9=9}9Q%Y}QaQ}QI-M}=U9°ì(€€€€€€€€€€€ÑÉ…­ÌèÑÉ…­Í1¥ÍÐ(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘•€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹•¹…‰±•ÜÀá…ÁÑ¥½¹Ì€˜˜‘…Ñ„¹…ÁÑ¥½¹Ì¤ì(€€€€€€€‘…Ñ„¹…ÁÑ¥½¹Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡…ÁÑ¥½¹ÍQÉ…¬¤ì(€€€€€€€€€Ù…È¥¹ÍÑÉ•…µ%‘5…Ñ €ô€¼ üéñMIY%¤¡lÄ´Ñt¤¼¹•á•Œ¡…ÁÑ¥½¹ÍQÉ…¬¹¥¹ÍÑÉ•…µ%¤ì(€€€€€€€€€¥˜€ …¥¹ÍÑÉ•…µ%‘5…Ñ ¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€Ù…ÈÑÉ…­9…µ”€ô€‰Ñ•áÑQÉ…¬ˆ€¬¥¹ÍÑÉ•…µ%‘5…Ñ¡lÅtì(€€€€€€€€€Ù…ÈÑÉ…­AÉ½Á•ÉÑ¥•Ì€ô}Ñ¡¥ÌÌ¹…ÁÑ¥½¹ÍAÉ½Á•ÉÑ¥•ÍmÑÉ…­9…µ•tì(€€€€€€€€€¥˜€ …ÑÉ…­AÉ½Á•ÉÑ¥•Ì¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€ÑÉ…­AÉ½Á•ÉÑ¥•Ì¹±…‰•°€ô…ÁÑ¥½¹ÍQÉ…¬¹¹…µ”ì(€€€€€€€€€¥˜€¡…ÁÑ¥½¹ÍQÉ…¬¹±…¹œ¤ì(€€€€€€€€€€€€¼¼½ÁÑ¥½¹…°…ÑÑÉ¥‰ÕÑ”(€€€€€€€€€€€ÑÉ…­AÉ½Á•ÉÑ¥•Ì¹±…¹Õ…•½‘”€ô…ÁÑ¥½¹ÍQÉ…¬¹±…¹œì(€€€€€€€€€ô(€€€€€€€€€ÑÉ…­AÉ½Á•ÉÑ¥•Ì¹µ•‘¥„€ô…ÁÑ¥½¹ÍQÉ…¬ì(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½Í•‘…ÁÑ¥½¹Í½É1•Ù•°€ô™Õ¹Ñ¥½¸±½Í•‘…ÁÑ¥½¹Í½É1•Ù•°¡™É…œ¤ì(€€€€€Ù…È±•Ù•°€ôÑ¡¥Ì¹¡±Ì¹±•Ù•±Ím™É…œ¹±•Ù•±tì(€€€€€É•ÑÕÉ¸±•Ù•°€ôô¹Õ±°€üÙ½¥€À€è±•Ù•°¹…ÑÑÉÍl1=MµAQ%=9Ltì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹É…1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€€¼¼¥˜Ñ¡¥Ì™É…œ¥Í¸Ð½¹Ñ¥Õ½ÕÌ°±•…ÈÑ¡”Á…ÉÍ•ÈÍ¼Õ•ÌÝ¥Ñ ‰…ÍÑ…ÉÐ½•¹Ñ¥µ•Ì…É•¸Ð…‘‘•Ñ¼Ñ¡”Ñ•áÑQÉ…¬(€€€€€¥˜€¡Ñ¡¥Ì¹•¹…‰±•€˜˜‘…Ñ„¹™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€Ù…È}‘…Ñ„‘Á…ÉÐ‘¥¹‘•à°}‘…Ñ„‘Á…ÉÐì(€€€€€€€Ù…È•„ØÀáA…ÉÍ•ÈÄ€ôÑ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ°(€€€€€€€€€•„ØÀáA…ÉÍ•ÈÈ€ôÑ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ°(€€€€€€€€€±…ÍÑM¸€ôÑ¡¥Ì¹±…ÍÑM¸ì(€€€€€€€Ù…È}‘…Ñ„‘™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€€€Œ€ô}‘…Ñ„‘™É…œ¹Œ°(€€€€€€€€€Í¸€ô}‘…Ñ„‘™É…œ¹Í¸ì(€€€€€€€Ù…ÈÁ…ÉÑ%¹‘•à€ô€¡}‘…Ñ„‘Á…ÉÐ‘¥¹‘•à€ô€¡}‘…Ñ„‘Á…ÉÐ€ô‘…Ñ„¹Á…ÉÐ¤€ôô¹Õ±°€üÙ½¥€À€è}‘…Ñ„‘Á…ÉÐ¹¥¹‘•à¤€„ô¹Õ±°€ü}‘…Ñ„‘Á…ÉÐ‘¥¹‘•à€è€´Äì(€€€€€€€¥˜€¡•„ØÀáA…ÉÍ•ÈÄ€˜˜•„ØÀáA…ÉÍ•ÈÈ¤ì(€€€€€€€€€¥˜€¡Í¸€„ôô±…ÍÑM¸€¬€ÄñðÍ¸€ôôô±…ÍÑM¸€˜˜Á…ÉÑ%¹‘•à€„ôôÑ¡¥Ì¹±…ÍÑA…ÉÑ%¹‘•à€¬€ÄñðŒ€„ôôÑ¡¥Ì¹±…ÍÑŒ¤ì(€€€€€€€€€€€•„ØÀáA…ÉÍ•ÈÄ¹É•Í•Ð ¤ì(€€€€€€€€€€€•„ØÀáA…ÉÍ•ÈÈ¹É•Í•Ð ¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±…ÍÑŒ€ôŒì(€€€€€€€Ñ¡¥Ì¹±…ÍÑM¸€ôÍ¸ì(€€€€€€€Ñ¡¥Ì¹±…ÍÑA…ÉÑ%¹‘•à€ôÁ…ÉÑ%¹‘•àì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…1½…‘•€ô™Õ¹Ñ¥½¸½¹É…1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€Á…å±½…€ô‘…Ñ„¹Á…å±½…ì(€€€€€¥˜€¡™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ì(€€€€€€€€¼¼%˜™É…µ•¹Ð¥ÌÍÕ‰Ñ¥Ñ±”ÑåÁ”°Á…ÉÍ”…Ì]•‰YQP¸(€€€€€€€¥˜€¡Á…å±½…¹‰åÑ•1•¹Ñ ¤ì(€€€€€€€€€Ù…È‘•ÉåÁÑ…Ñ„€ô™É…œ¹‘•ÉåÁÑ‘…Ñ„ì(€€€€€€€€€€¼¼™É…µ•¹Ð…™Ñ•È‘•ÉåÁÑ¥½¸¡…Ì„ÍÑ…ÑÌ½‰©•Ð(€€€€€€€€€Ù…È‘•ÉåÁÑ•€ô€ÍÑ…ÑÌœ¥¸‘…Ñ„ì(€€€€€€€€€€¼¼%˜Ñ¡”ÍÕ‰Ñ¥Ñ±•Ì…É”¹½Ð•¹ÉåÁÑ•°Á…ÉÍ”YQQÌ¹½Ü¸=Ñ¡•ÉÝ¥Í”°Ý”¹••Ñ¼Ý…¥Ð¸(€€€€€€€€€¥˜€¡‘•ÉåÁÑ…Ñ„€ôô¹Õ±°ñð€…‘•ÉåÁÑ…Ñ„¹•¹ÉåÁÑ•ñð‘•ÉåÁÑ•¤ì(€€€€€€€€€€€Ù…ÈÑÉ…­A±…å±¥ÍÑ5•‘¥„€ôÑ¡¥Ì¹ÑÉ…­Ím™É…œ¹±•Ù•±tì(€€€€€€€€€€€Ù…ÈÙÑÑÌ€ôÑ¡¥Ì¹ÙÑÑÌì(€€€€€€€€€€€¥˜€ …ÙÑÑÍm™É…œ¹t¤ì(€€€€€€€€€€€€€ÙÑÑÍm™É…œ¹t€ôì(€€€€€€€€€€€€€€€ÍÑ…ÉÐè™É…œ¹ÍÑ…ÉÐ°(€€€€€€€€€€€€€€€ÁÉ•ÙèÑ¡¥Ì¹ÁÉ•Ù°(€€€€€€€€€€€€€€€¹•ÜèÑÉÕ”(€€€€€€€€€€€€€ôì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÁÉ•Ù€ô™É…œ¹Œì(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€¡ÑÉ…­A±…å±¥ÍÑ5•‘¥„€˜˜ÑÉ…­A±…å±¥ÍÑ5•‘¥„¹Ñ•áÑ½‘•Œ€ôôô%5MÅ}=¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹}Á…ÉÍ•%5MÄ¡™É…œ°Á…å±½…¤ì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€Ñ¡¥Ì¹}Á…ÉÍ•YQQÌ¡‘…Ñ„¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€€¼¼%¸…Í”Ñ¡•É”¥Ì¹¼Á…å±½…°™¥¹¥Í Õ¹ÍÕ•ÍÍ™Õ±±ä¸(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°ì(€€€€€€€€€€€ÍÕ•ÍÌè™…±Í”°(€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€•ÉÉ½Èè¹•ÜÉÉ½È µÁÑäÍÕ‰Ñ¥Ñ±”Á…å±½…œ¤(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}Á…ÉÍ•%5MÄ€ô™Õ¹Ñ¥½¸}Á…ÉÍ•%5MÄ¡™É…œ°Á…å±½…¤ì(€€€€€Ù…È}Ñ¡¥ÌÐ€ôÑ¡¥Ìì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€Á…ÉÍ•%5MÄ¡Á…å±½…°Ñ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹t°™Õ¹Ñ¥½¸€¡Õ•Ì¤ì(€€€€€€€}Ñ¡¥ÌÐ¹}…ÁÁ•¹‘Õ•Ì¡Õ•Ì°™É…œ¹±•Ù•°¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°ì(€€€€€€€€€ÍÕ•ÍÌèÑÉÕ”°(€€€€€€€€€™É…œè™É…œ(€€€€€€€ô¤ì(€€€€€ô°™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€¡±Ì¹±½•È¹±½œ ‰…¥±•Ñ¼Á…ÉÍ”%5MÄè€ˆ€¬•ÉÉ½È¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°ì(€€€€€€€€€ÍÕ•ÍÌè™…±Í”°(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€•ÉÉ½Èè•ÉÉ½È(€€€€€€€ô¤ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}Á…ÉÍ•YQQÌ€ô™Õ¹Ñ¥½¸}Á…ÉÍ•YQQÌ¡‘…Ñ„¤ì(€€€€€Ù…È}™É…œ‘¥¹¥ÑM•µ•¹Ð°(€€€€€€€}Ñ¡¥ÌÔ€ôÑ¡¥Ìì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€Á…å±½…€ô‘…Ñ„¹Á…å±½…ì(€€€€€€¼¼]”¹••…¸¥¹¥Ñ¥…°Íå¹¡É½¹¥Í…Ñ¥½¸AQL¸MÑ½É”™É…µ•¹ÑÌ…Ì±½¹œ…Ì¹½¹”¡…Ì…ÉÉ¥Ù•(€€€€€Ù…È¥¹¥ÑAQL€ôÑ¡¥Ì¹¥¹¥ÑAQL°(€€€€€€€Õ¹Á…ÉÍ•‘YÑÑÉ…Ì€ôÑ¡¥Ì¹Õ¹Á…ÉÍ•‘YÑÑÉ…Ìì(€€€€€Ù…Èµ…áÙ€ô¥¹¥ÑAQL¹±•¹Ñ €´€Äì(€€€€€¥˜€ …¥¹¥ÑAQMm™É…œ¹t€˜˜µ…áÙ€ôôô€´Ä¤ì(€€€€€€€Õ¹Á…ÉÍ•‘YÑÑÉ…Ì¹ÁÕÍ ¡‘…Ñ„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€€¼¼A…ÉÍ”Ñ¡”]•‰YQP™¥±”½¹Ñ•¹ÑÌ¸(€€€€€Ù…ÈÁ…å±½…‘]•‰YQP€ô€¡}™É…œ‘¥¹¥ÑM•µ•¹Ð€ô™É…œ¹¥¹¥ÑM•µ•¹Ð¤€„ô¹Õ±°€˜˜}™É…œ‘¥¹¥ÑM•µ•¹Ð¹‘…Ñ„€ü…ÁÁ•¹‘U¥¹ÐáÉÉ…ä¡™É…œ¹¥¹¥ÑM•µ•¹Ð¹‘…Ñ„°¹•ÜU¥¹ÐáÉÉ…ä¡Á…å±½…¤¤¹‰Õ™™•È€èÁ…å±½…ì(€€€€€Á…ÉÍ•]•‰YQP¡Á…å±½…‘]•‰YQP°Ñ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹t°Ñ¡¥Ì¹ÙÑÑÌ°™É…œ¹Œ°™É…œ¹ÍÑ…ÉÐ°™Õ¹Ñ¥½¸€¡Õ•Ì¤ì(€€€€€€€}Ñ¡¥ÌÔ¹}…ÁÁ•¹‘Õ•Ì¡Õ•Ì°™É…œ¹±•Ù•°¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°ì(€€€€€€€€€ÍÕ•ÍÌèÑÉÕ”°(€€€€€€€€€™É…œè™É…œ(€€€€€€€ô¤ì(€€€€€ô°™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€Ù…Èµ¥ÍÍ¥¹%¹¥ÑAQL€ô•ÉÉ½È¹µ•ÍÍ…”€ôôô€5¥ÍÍ¥¹œ¥¹¥ÑAQL™½ÈYQP5AQLœì(€€€€€€€¥˜€¡µ¥ÍÍ¥¹%¹¥ÑAQL¤ì(€€€€€€€€€Õ¹Á…ÉÍ•‘YÑÑÉ…Ì¹ÁÕÍ ¡‘…Ñ„¤ì(€€€€€€€ô•±Í”ì(€€€€€€€€€}Ñ¡¥ÌÔ¹}™…±±‰…­Q½%5MÄ¡™É…œ°Á…å±½…¤ì(€€€€€€€ô(€€€€€€€€¼¼M½µ•Ñ¡¥¹œÝ•¹ÐÝÉ½¹œÝ¡¥±”Á…ÉÍ¥¹œ¸QÉ¥•È•Ù•¹ÐÝ¥Ñ ÍÕ•ÍÌ™…±Í”¸(€€€€€€€¡±Ì¹±½•È¹±½œ ‰…¥±•Ñ¼Á…ÉÍ”YQPÕ”è€ˆ€¬•ÉÉ½È¤ì(€€€€€€€¥˜€¡µ¥ÍÍ¥¹%¹¥ÑAQL€˜˜µ…áÙ€ø™É…œ¹Œ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}I}AI=MM°ì(€€€€€€€€€ÍÕ•ÍÌè™…±Í”°(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€•ÉÉ½Èè•ÉÉ½È(€€€€€€€ô¤ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}™…±±‰…­Q½%5MÄ€ô™Õ¹Ñ¥½¸}™…±±‰…­Q½%5MÄ¡™É…œ°Á…å±½…¤ì(€€€€€Ù…È}Ñ¡¥ÌØ€ôÑ¡¥Ìì(€€€€€€¼¼%˜Ñ•áÑ½‘•Œ¥ÌÕ¹­¹½Ý¸°ÑÉäÁ…ÉÍ¥¹œ…Ì%5MÄ¸M•ÐÑ•áÑ½‘•Œ‰…Í•½¸Ñ¡”É•ÍÕ±Ð(€€€€€Ù…ÈÑÉ…­A±…å±¥ÍÑ5•‘¥„€ôÑ¡¥Ì¹ÑÉ…­Ím™É…œ¹±•Ù•±tì(€€€€€¥˜€ …ÑÉ…­A±…å±¥ÍÑ5•‘¥„¹Ñ•áÑ½‘•Œ¤ì(€€€€€€€Á…ÉÍ•%5MÄ¡Á…å±½…°Ñ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹t°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€ÑÉ…­A±…å±¥ÍÑ5•‘¥„¹Ñ•áÑ½‘•Œ€ô%5MÅ}=ì(€€€€€€€€€}Ñ¡¥ÌØ¹}Á…ÉÍ•%5MÄ¡™É…œ°Á…å±½…¤ì(€€€€€€€ô°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€ÑÉ…­A±…å±¥ÍÑ5•‘¥„¹Ñ•áÑ½‘•Œ€ô€ÝÙÑÐœì(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}…ÁÁ•¹‘Õ•Ì€ô™Õ¹Ñ¥½¸}…ÁÁ•¹‘Õ•Ì¡Õ•Ì°™É…1•Ù•°¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€Ù…ÈÑ•áÑQÉ…¬€ôÑ¡¥Ì¹Ñ•áÑQÉ…­Ím™É…1•Ù•±tì(€€€€€€€€¼¼]•‰YQQA…ÉÍ•È¹Á…ÉÍ”¥Ì…¸…Íå¹Œµ•Ñ¡½…¹¥˜Ñ¡”ÕÉÉ•¹Ñ±äÍ•±•Ñ•Ñ•áÐÑÉ…¬µ½‘”¥ÌÍ•ÐÑ¼€‰‘¥Í…‰±•ˆ(€€€€€€€€¼¼‰•™½É”Á…ÉÍ¥¹œ¥Ì‘½¹”Ñ¡•¸‘½¸ÐÑÉäÑ¼…•ÍÌÕÉÉ•¹ÑQÉ…¬¹Õ•Ì¹•ÑÕ•	å%…ÌÕ•ÌÝ¥±°‰”¹Õ±°(€€€€€€€€¼¼…¹ÑÉå¥¹œÑ¼…•ÍÌ•ÑÕ•	å%µ•Ñ¡½½˜Õ•ÌÝ¥±°Ñ¡É½Ü…¸•á•ÁÑ¥½¸(€€€€€€€€¼¼	•…ÕÍ”Ý”¡•¬¥˜Ñ¡”µ½‘”¥Ì‘¥Í…‰±•°Ý”…¸™½É”¡•¬Õ•Í€‰•±½Ü¸Q¡•ä…¸Ð‰”¹Õ±°¸(€€€€€€€¥˜€ …Ñ•áÑQÉ…¬ñðÑ•áÑQÉ…¬¹µ½‘”€ôôô€‘¥Í…‰±•œ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Õ•Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡Õ”¤ì(€€€€€€€€€É•ÑÕÉ¸…‘‘Õ•Q½QÉ…¬¡Ñ•áÑQÉ…¬°Õ”¤ì(€€€€€€€ô¤ì(€€€€€ô•±Í”ì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQÉ…¬€ôÑ¡¥Ì¹ÑÉ…­Ím™É…1•Ù•±tì(€€€€€€€¥˜€ …ÕÉÉ•¹ÑQÉ…¬¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…ÈÑÉ…¬€ôÕÉÉ•¹ÑQÉ…¬¹‘•™…Õ±Ð€ü€‘•™…Õ±Ðœ€è€ÍÕ‰Ñ¥Ñ±•Ìœ€¬™É…1•Ù•°ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹UM}AIM°ì(€€€€€€€€€ÑåÁ”è€ÍÕ‰Ñ¥Ñ±•Ìœ°(€€€€€€€€€Õ•ÌèÕ•Ì°(€€€€€€€€€ÑÉ…¬èÑÉ…¬(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…•ÉåÁÑ•€ô™Õ¹Ñ¥½¸½¹É…•ÉåÁÑ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œì(€€€€€¥˜€¡™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1¤ì(€€€€€€€Ñ¡¥Ì¹½¹É…1½…‘•¡Ù•¹ÑÌ¹I}1=°‘…Ñ„¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­Í±•…É•€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­Í±•…É• ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ…­Ì€ômtì(€€€€€Ñ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ì€ôíôì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…A…ÉÍ¥¹UÍ•É‘…Ñ„€ô™Õ¹Ñ¥½¸½¹É…A…ÉÍ¥¹UÍ•É‘…Ñ„¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹•¹…‰±•ñð€…Ñ¡¥Ì¹½¹™¥œ¹•¹…‰±•ÜÀá…ÁÑ¥½¹Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€Í…µÁ±•Ì€ô‘…Ñ„¹Í…µÁ±•Ìì(€€€€€¥˜€¡™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8€˜˜Ñ¡¥Ì¹±½Í•‘…ÁÑ¥½¹Í½É1•Ù•°¡™É…œ¤€ôôô€9=9œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€€¼¼%˜Ñ¡”•Ù•¹Ð½¹Ñ…¥¹Ì…ÁÑ¥½¹Ì€¡™½Õ¹¥¸Ñ¡”‰åÑ•ÌÁÉ½Á•ÉÑä¤°ÁÕÍ …±°‰åÑ•Ì¥¹Ñ¼Ñ¡”Á…ÉÍ•È¥µµ•‘¥…Ñ•±ä(€€€€€€¼¼%ÐÝ¥±°É•…Ñ”Ñ¡”ÁÉ½Á•ÈÑ¥µ•ÍÑ…µÁÌ‰…Í•½¸Ñ¡”AQLÙ…±Õ”(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÍ…µÁ±•Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…È	åÑ•Ì€ôÍ…µÁ±•Ím¥t¹‰åÑ•Ìì(€€€€€€€¥˜€¡	åÑ•Ì¤ì(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ¤ì(€€€€€€€€€€€Ñ¡¥Ì¹¥¹¥Ñ•„ØÀáA…ÉÍ•ÉÌ ¤ì(€€€€€€€€€ô(€€€€€€€€€Ù…È‘…Ñ…Ì€ôÑ¡¥Ì¹•áÑÉ…Ñ•„ØÀá…Ñ„¡	åÑ•Ì¤ì(€€€€€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÄ¹…‘‘…Ñ„¡Í…µÁ±•Ím¥t¹ÁÑÌ°‘…Ñ…ÍlÁt¤ì(€€€€€€€€€Ñ¡¥Ì¹•„ØÀáA…ÉÍ•ÈÈ¹…‘‘…Ñ„¡Í…µÁ±•Ím¥t¹ÁÑÌ°‘…Ñ…ÍlÅt¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•É±ÕÍ¡¥¹œ€ô™Õ¹Ñ¥½¸½¹	Õ™™•É±ÕÍ¡¥¹œ¡•Ù•¹Ð°}É•˜È¤ì(€€€€€Ù…ÈÍÑ…ÉÑ=™™Í•Ð€ô}É•˜È¹ÍÑ…ÉÑ=™™Í•Ð°(€€€€€€€•¹‘=™™Í•Ð€ô}É•˜È¹•¹‘=™™Í•Ð°(€€€€€€€•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì€ô}É•˜È¹•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì°(€€€€€€€ÑåÁ”€ô}É•˜È¹ÑåÁ”ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„ñðµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ð•¹‘=™™Í•Ð¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€€¼¼±•…È€ØÀà…ÁÑ¥½¸Õ•Ì™É½´Ñ¡”…ÁÑ¥½¹ÌQ•áÑQÉ…­ÌÝ¡•¸Ñ¡”Ù¥‘•¼‰…¬‰Õ™™•È¥Ì™±ÕÍ¡•(€€€€€€¼¼½ÉÝ…ÉÕ•Ì…É”¹•Ù•ÈÉ•µ½Ù•‰•…ÕÍ”Ý”…¸±½½Í”ÍÑÉ•…µ•€ØÀà½¹Ñ•¹Ð™É½´É••¹Ð™É…µ•¹ÑÌ(€€€€€¥˜€ …ÑåÁ”ñðÑåÁ”€ôôô€Ù¥‘•¼œ¤ì(€€€€€€€Ù…È…ÁÑ¥½¹ÍQÉ…­Ì€ôÑ¡¥Ì¹…ÁÑ¥½¹ÍQÉ…­Ìì(€€€€€€€=‰©•Ð¹­•åÌ¡…ÁÑ¥½¹ÍQÉ…­Ì¤¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…­9…µ”¤ì(€€€€€€€€€É•ÑÕÉ¸É•µ½Ù•Õ•Í%¹I…¹”¡…ÁÑ¥½¹ÍQÉ…­ÍmÑÉ…­9…µ•t°ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•Ð¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±ä¤ì(€€€€€€€€¼¼±•…ÈYQP½%5MÄÍÕ‰Ñ¥Ñ±”Õ•Ì™É½´Ñ¡”ÍÕ‰Ñ¥Ñ±”Q•áÑQÉ…­ÌÝ¡•¸Ñ¡”‰…¬‰Õ™™•È¥Ì™±ÕÍ¡•(€€€€€€€¥˜€¡ÍÑ…ÉÑ=™™Í•Ð€ôôô€À€˜˜•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì€„ôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€Ù…ÈÑ•áÑQÉ…­Ì€ôÑ¡¥Ì¹Ñ•áÑQÉ…­Ìì(€€€€€€€€€=‰©•Ð¹­•åÌ¡Ñ•áÑQÉ…­Ì¤¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…­9…µ”¤ì(€€€€€€€€€€€É•ÑÕÉ¸É•µ½Ù•Õ•Í%¹I…¹”¡Ñ•áÑQÉ…­ÍmÑÉ…­9…µ•t°ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•ÑMÕ‰Ñ¥Ñ±•Ì¤ì(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹•áÑÉ…Ñ•„ØÀá…Ñ„€ô™Õ¹Ñ¥½¸•áÑÉ…Ñ•„ØÀá…Ñ„¡‰åÑ•ÉÉ…ä¤ì(€€€€€Ù…È…ÑÕ…±	åÑ•Ì€ômmt°mutì(€€€€€Ù…È½Õ¹Ð€ô‰åÑ•ÉÉ…ålÁt€˜€ÁàÅ˜ì(€€€€€Ù…ÈÁ½Í¥Ñ¥½¸€ô€Èì(€€€€€™½È€¡Ù…È¨€ô€Àì¨€ð½Õ¹Ðì¨¬¬¤ì(€€€€€€€Ù…ÈÑµÁ	åÑ”€ô‰åÑ•ÉÉ…åmÁ½Í¥Ñ¥½¸¬­tì(€€€€€€€Ù…È‰åÑ”Ä€ô€ÁàÝ˜€˜‰åÑ•ÉÉ…åmÁ½Í¥Ñ¥½¸¬­tì(€€€€€€€Ù…È‰åÑ”È€ô€ÁàÝ˜€˜‰åÑ•ÉÉ…åmÁ½Í¥Ñ¥½¸¬­tì(€€€€€€€¥˜€¡‰åÑ”Ä€ôôô€À€˜˜‰åÑ”È€ôôô€À¤ì(€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€ô(€€€€€€€Ù…ÈY…±¥€ô€ ÁàÀÐ€˜ÑµÁ	åÑ”¤€„ôô€Àì€¼¼MÕÁÁ½ÉÐ…±°™½ÕÈ¡…¹¹•±Ì(€€€€€€€¥˜€¡Y…±¥¤ì(€€€€€€€€€Ù…ÈQåÁ”€ô€ÁàÀÌ€˜ÑµÁ	åÑ”ì(€€€€€€€€€¥˜€ ÁàÀÀ€¼¨ØÀà™¥•±Ä¨¼€ôôôQåÁ”ñð€ÁàÀÄ€¼¨ØÀà™¥•±È¨¼€ôôôQåÁ”¤ì(€€€€€€€€€€€€¼¼á±Õ‘”ÜÀà‘…Ñ„¸(€€€€€€€€€€€…ÑÕ…±	åÑ•ÍmQåÁ•t¹ÁÕÍ ¡‰åÑ”Ä¤ì(€€€€€€€€€€€…ÑÕ…±	åÑ•ÍmQåÁ•t¹ÁÕÍ ¡‰åÑ”È¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸…ÑÕ…±	åÑ•Ìì(€€€ôì(€€€É•ÑÕÉ¸Q¥µ•±¥¹•½¹ÑÉ½±±•Èì(€ô ¤ì(€™Õ¹Ñ¥½¸…ÁÑ¥½¹Í=ÉMÕ‰Ñ¥Ñ±•ÍÉ½µ¡…É…Ñ•É¥ÍÑ¥Ì¡ÑÉ…¬¤ì(€€€¥˜€¡ÑÉ…¬¹¡…É…Ñ•É¥ÍÑ¥Ì¤ì(€€€€€¥˜€ ½ÑÉ…¹ÍÉ¥‰•ÌµÍÁ½­•¸µ‘¥…±½œ½¤¹Ñ•ÍÐ¡ÑÉ…¬¹¡…É…Ñ•É¥ÍÑ¥Ì¤€˜˜€½‘•ÍÉ¥‰•ÌµµÕÍ¥Œµ…¹µÍ½Õ¹½¤¹Ñ•ÍÐ¡ÑÉ…¬¹¡…É…Ñ•É¥ÍÑ¥Ì¤¤ì(€€€€€€€É•ÑÕÉ¸€…ÁÑ¥½¹Ìœì(€€€€€ô(€€€ô(€€€É•ÑÕÉ¸€ÍÕ‰Ñ¥Ñ±•Ìœì(€ô(€™Õ¹Ñ¥½¸…¹I•ÕÍ•YÑÑQ•áÑQÉ…¬¡¥¹UÍ•QÉ…¬°µ…¹¥™•ÍÑQÉ…¬¤ì(€€€É•ÑÕÉ¸€„…¥¹UÍ•QÉ…¬€˜˜¥¹UÍ•QÉ…¬¹­¥¹€ôôô…ÁÑ¥½¹Í=ÉMÕ‰Ñ¥Ñ±•ÍÉ½µ¡…É…Ñ•É¥ÍÑ¥Ì¡µ…¹¥™•ÍÑQÉ…¬¤€˜˜ÍÕ‰Ñ¥Ñ±•QÉ…­5…Ñ¡•ÍQ•áÑQÉ…¬¡µ…¹¥™•ÍÑQÉ…¬°¥¹UÍ•QÉ…¬¤ì(€ô(€™Õ¹Ñ¥½¸¥¹Ñ•ÉÍ•Ñ¥½¸¡àÄ°àÈ°äÄ°äÈ¤ì(€€€É•ÑÕÉ¸5…Ñ ¹µ¥¸¡àÈ°äÈ¤€´5…Ñ ¹µ…à¡àÄ°äÄ¤ì(€ô(€™Õ¹Ñ¥½¸¹•ÝYQQÌ ¤ì(€€€É•ÑÕÉ¸ì(€€€€€=™™Í•Ðè€À°(€€€€€ÁÉ•Í•¹Ñ…Ñ¥½¹=™™Í•Ðè€À°(€€€€€€Àèì(€€€€€€€ÍÑ…ÉÐè€À°(€€€€€€€ÁÉ•Ùè€´Ä°(€€€€€€€¹•ÜèÑÉÕ”(€€€€€ô(€€€ôì(€ô((€Ù…È]!%QMA}!H€ô€½qÌ¼ì(€Ù…ÈÕ•Ì€ôì(€€€¹•ÝÕ”è™Õ¹Ñ¥½¸¹•ÝÕ”¡ÑÉ…¬°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°…ÁÑ¥½¹MÉ••¸¤ì(€€€€€Ù…ÈÉ•ÍÕ±Ð€ômtì(€€€€€Ù…ÈÉ½Üì(€€€€€€¼¼Ñ¡”ÑåÁ”‘…Ñ„ÍÑ…Ñ•ÌÑ¡¥Ì¥ÌYQQÕ”°‰ÕÐ¥Ð…¸Á½Ñ•¹Ñ¥…±±ä‰”„Q•áÑQÉ…­Õ”½¸½±‰É½ÝÍ•ÉÌ(€€€€€Ù…ÈÕ”ì(€€€€€Ù…È¥¹‘•¹Ñ¥¹œì(€€€€€Ù…È¥¹‘•¹Ðì(€€€€€Ù…ÈÑ•áÐì(€€€€€Ù…ÈÕ”€ôÍ•±˜¹YQQÕ”ñðÍ•±˜¹Q•áÑQÉ…­Õ”ì(€€€€€™½È€¡Ù…ÈÈ€ô€ÀìÈ€ð…ÁÑ¥½¹MÉ••¸¹É½ÝÌ¹±•¹Ñ ìÈ¬¬¤ì(€€€€€€€É½Ü€ô…ÁÑ¥½¹MÉ••¸¹É½ÝÍmÉtì(€€€€€€€¥¹‘•¹Ñ¥¹œ€ôÑÉÕ”ì(€€€€€€€¥¹‘•¹Ð€ô€Àì(€€€€€€€Ñ•áÐ€ô€œœì(€€€€€€€¥˜€ …É½Ü¹¥ÍµÁÑä ¤¤ì(€€€€€€€€€Ù…È}ÑÉ…¬‘Õ•Ìì(€€€€€€€€€™½È€¡Ù…ÈŒ€ô€ÀìŒ€ðÉ½Ü¹¡…ÉÌ¹±•¹Ñ ìŒ¬¬¤ì(€€€€€€€€€€€¥˜€¡]!%QMA}!H¹Ñ•ÍÐ¡É½Ü¹¡…ÉÍmt¹Õ¡…È¤€˜˜¥¹‘•¹Ñ¥¹œ¤ì(€€€€€€€€€€€€€¥¹‘•¹Ð¬¬ì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€Ñ•áÐ€¬ôÉ½Ü¹¡…ÉÍmt¹Õ¡…Èì(€€€€€€€€€€€€€¥¹‘•¹Ñ¥¹œ€ô™…±Í”ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€€¼¼Q¼‰”ÕÍ•™½È±•…¹¥¹œµÕÀ½ÉÁ¡…¹•É½±°µÕÀ…ÁÑ¥½¹Ì(€€€€€€€€€É½Ü¹Õ•MÑ…ÉÑQ¥µ”€ôÍÑ…ÉÑQ¥µ”ì((€€€€€€€€€€¼¼¥Ù”„Í±¥¡Ð‰ÕµÀÑ¼Ñ¡”•¹‘Q¥µ”¥˜¥ÐÌ•ÅÕ…°Ñ¼ÍÑ…ÉÑQ¥µ”Ñ¼…Ù½¥„Må¹Ñ…áÉÉ½È¥¸%(€€€€€€€€€¥˜€¡ÍÑ…ÉÑQ¥µ”€ôôô•¹‘Q¥µ”¤ì(€€€€€€€€€€€•¹‘Q¥µ”€¬ô€À¸ÀÀÀÄì(€€€€€€€€€ô(€€€€€€€€€¥˜€¡¥¹‘•¹Ð€øô€ÄØ¤ì(€€€€€€€€€€€¥¹‘•¹Ð´´ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€¥¹‘•¹Ð¬¬ì(€€€€€€€€€ô(€€€€€€€€€Ù…ÈÕ•Q•áÐ€ô™¥á1¥¹•	É•…­Ì¡Ñ•áÐ¹ÑÉ¥´ ¤¤ì(€€€€€€€€€Ù…È¥€ô•¹•É…Ñ•Õ•%¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°Õ•Q•áÐ¤ì((€€€€€€€€€€¼¼%˜Ñ¡¥ÌÕ”…±É•…‘ä•á¥ÍÑÌ¥¸Ñ¡”ÑÉ…¬‘¼¹½ÐÁÕÍ ¥Ð(€€€€€€€€€¥˜€ „¡ÑÉ…¬€„ô¹Õ±°€˜˜€¡}ÑÉ…¬‘Õ•Ì€ôÑÉ…¬¹Õ•Ì¤€„ô¹Õ±°€˜˜}ÑÉ…¬‘Õ•Ì¹•ÑÕ•	å%¡¥¤¤¤ì(€€€€€€€€€€€Õ”€ô¹•ÜÕ”¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°Õ•Q•áÐ¤ì(€€€€€€€€€€€Õ”¹¥€ô¥ì(€€€€€€€€€€€Õ”¹±¥¹”€ôÈ€¬€Äì(€€€€€€€€€€€Õ”¹…±¥¸€ô€±•™Ðœì(€€€€€€€€€€€€¼¼±…µÀÑ¡”Á½Í¥Ñ¥½¸‰•ÑÝ••¸€ÄÀ…¹€àÀÁ•É•¹Ð€¡´ØÀàA¥¹‘•¹Ð½‘”¤(€€€€€€€€€€€€¼¼¡ÑÑÁÌè¼½‘ÙÌ¹ÜÌ¹½Éœ½¡œ½Ñ•áÐµÑÉ…­Ì½É…Üµ™¥±”½‘•™…Õ±Ð¼ØÀáÑ½YQP¼ØÀáÑ½YQP¹¡Ñµ°Á½Í¥Ñ¥½¹¥¹œµ¥¸µ•„´ØÀà(€€€€€€€€€€€€¼¼¥É•™½àÑ¡É½ÝÌ…¸•á•ÁÑ¥½¸…¹…ÁÑ¥½¹Ì‰É•…¬Ý¥Ñ ½ÕÐ½˜‰½Õ¹‘Ì€À´ÄÀÀÙ…±Õ•Ì(€€€€€€€€€€€Õ”¹Á½Í¥Ñ¥½¸€ô€ÄÀ€¬5…Ñ ¹µ¥¸ àÀ°5…Ñ ¹™±½½È¡¥¹‘•¹Ð€¨€à€¼€ÌÈ¤€¨€ÄÀ¤ì(€€€€€€€€€€€É•ÍÕ±Ð¹ÁÕÍ ¡Õ”¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡ÑÉ…¬€˜˜É•ÍÕ±Ð¹±•¹Ñ ¤ì(€€€€€€€€¼¼M½ÉÐ‰½ÑÑ½´Õ•Ì¥¸É•Ù•ÉÍ”½É‘•ÈÍ¼Ñ¡…ÐÑ¡•äÉ•¹‘•È¥¸±¥¹”½É‘•ÈÝ¡•¸½Ù•É±…ÁÁ¥¹œ¥¸¡É½µ”(€€€€€€€É•ÍÕ±Ð¹Í½ÉÐ¡™Õ¹Ñ¥½¸€¡Õ•°Õ•¤ì(€€€€€€€€€¥˜€¡Õ•¹±¥¹”€ôôô€…ÕÑ¼œñðÕ•¹±¥¹”€ôôô€…ÕÑ¼œ¤ì(€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€ô(€€€€€€€€€¥˜€¡Õ•¹±¥¹”€ø€à€˜˜Õ•¹±¥¹”€ø€à¤ì(€€€€€€€€€€€É•ÑÕÉ¸Õ•¹±¥¹”€´Õ•¹±¥¹”ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸Õ•¹±¥¹”€´Õ•¹±¥¹”ì(€€€€€€€ô¤ì(€€€€€€€É•ÍÕ±Ð¹™½É… ¡™Õ¹Ñ¥½¸€¡Õ”¤ì(€€€€€€€€€É•ÑÕÉ¸…‘‘Õ•Q½QÉ…¬¡ÑÉ…¬°Õ”¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸É•ÍÕ±Ðì(€€€ô(€ôì((€™Õ¹Ñ¥½¸™•Ñ¡MÕÁÁ½ÉÑ• ¤ì(€€€¥˜€ (€€€€¼¼ÑÌµ¥¹½É”(€€€Í•±˜¹™•Ñ €˜˜Í•±˜¹‰½ÉÑ½¹ÑÉ½±±•È€˜˜Í•±˜¹I•…‘…‰±•MÑÉ•…´€˜˜Í•±˜¹I•ÅÕ•ÍÐ¤ì(€€€€€ÑÉäì(€€€€€€€¹•ÜÍ•±˜¹I•…‘…‰±•MÑÉ•…´¡íô¤ì€¼¼•Í±¥¹Ðµ‘¥Í…‰±”µ±¥¹”¹¼µ¹•Ü(€€€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€€€ô…Ñ €¡”¤ì(€€€€€€€€¼¨¹½½À€¨¼(€€€€€ô(€€€ô(€€€É•ÑÕÉ¸™…±Í”ì(€ô(€Ù…È	eQI9€ô€¼¡q¬¤´¡q¬¥p¼¡q¬¤¼ì(€Ù…È•Ñ¡1½…‘•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸•Ñ¡1½…‘•È¡½¹™¥œ¤ì(€€€€€Ñ¡¥Ì¹™•Ñ¡M•ÑÕÀ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹É•ÍÁ½¹Í”€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½¹Ñ•áÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…±±‰…­Ì€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±½…‘•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹™•Ñ¡M•ÑÕÀ€ô½¹™¥œ¹™•Ñ¡M•ÑÕÀñð•ÑI•ÅÕ•ÍÐì(€€€€€Ñ¡¥Ì¹½¹ÑÉ½±±•È€ô¹•ÜÍ•±˜¹‰½ÉÑ½¹ÑÉ½±±•È ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ€ô¹•Ü1½…‘MÑ…ÑÌ ¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô•Ñ¡1½…‘•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹±½…‘•È€ôÑ¡¥Ì¹…±±‰…­Ì€ôÑ¡¥Ì¹½¹Ñ•áÐ€ôÑ¡¥Ì¹½¹™¥œ€ôÑ¡¥Ì¹É•ÅÕ•ÍÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€Ñ¡¥Ì¹É•ÍÁ½¹Í”€ô¹Õ±°ì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹™•Ñ¡M•ÑÕÀ€ôÑ¡¥Ì¹½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÑ…ÑÌ€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹…‰½ÉÑ%¹Ñ•É¹…°€ô™Õ¹Ñ¥½¸…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹ÑÉ½±±•È€˜˜€…Ñ¡¥Ì¹ÍÑ…ÑÌ¹±½…‘¥¹œ¹•¹¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ¹…‰½ÉÑ•€ôÑÉÕ”ì(€€€€€€€Ñ¡¥Ì¹½¹ÑÉ½±±•È¹…‰½ÉÐ ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹…‰½ÉÐ€ô™Õ¹Ñ¥½¸…‰½ÉÐ ¤ì(€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­Ìì(€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€¥˜€ ¡}Ñ¡¥Ì‘…±±‰…­Ì€ôÑ¡¥Ì¹…±±‰…­Ì¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘…±±‰…­Ì¹½¹‰½ÉÐ¤ì(€€€€€€€Ñ¡¥Ì¹…±±‰…­Ì¹½¹‰½ÉÐ¡Ñ¡¥Ì¹ÍÑ…ÑÌ°Ñ¡¥Ì¹½¹Ñ•áÐ°Ñ¡¥Ì¹É•ÍÁ½¹Í”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…€ô™Õ¹Ñ¥½¸±½…¡½¹Ñ•áÐ°½¹™¥œ°…±±‰…­Ì¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ù…ÈÍÑ…ÑÌ€ôÑ¡¥Ì¹ÍÑ…ÑÌì(€€€€€¥˜€¡ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤ì(€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È 1½…‘•È…¸½¹±ä‰”ÕÍ•½¹”¸œ¤ì(€€€€€ô(€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€Ù…È¥¹¥ÑA…É…µÌ€ô•ÑI•ÅÕ•ÍÑA…É…µ•Ñ•ÉÌ¡½¹Ñ•áÐ°Ñ¡¥Ì¹½¹ÑÉ½±±•È¹Í¥¹…°¤ì(€€€€€Ù…È¥ÍÉÉ…å	Õ™™•È€ô½¹Ñ•áÐ¹É•ÍÁ½¹Í•QåÁ”€ôôô€…ÉÉ…å‰Õ™™•Èœì(€€€€€Ù…È19Q €ô¥ÍÉÉ…å	Õ™™•È€ü€‰åÑ•1•¹Ñ œ€è€±•¹Ñ œì(€€€€€Ù…È}½¹™¥œ‘±½…‘A½±¥ä€ô½¹™¥œ¹±½…‘A½±¥ä°(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€ô}½¹™¥œ‘±½…‘A½±¥ä¹µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì°(€€€€€€€µ…á1½…‘Q¥µ•5Ì€ô}½¹™¥œ‘±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ìì(€€€€€Ñ¡¥Ì¹½¹Ñ•áÐ€ô½¹Ñ•áÐì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô½¹™¥œì(€€€€€Ñ¡¥Ì¹…±±‰…­Ì€ô…±±‰…­Ìì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÐ€ôÑ¡¥Ì¹™•Ñ¡M•ÑÕÀ¡½¹Ñ•áÐ°¥¹¥ÑA…É…µÌ¤ì(€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€½¹™¥œ¹Ñ¥µ•½ÕÐ€ôµ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€˜˜¥Í¥¹¥Ñ•9Õµ‰•È¡µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì¤€üµ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€èµ…á1½…‘Q¥µ•5Ìì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÍ•±˜¹Í•ÑQ¥µ•½ÕÐ¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€¥˜€¡}Ñ¡¥Ì¹…±±‰…­Ì¤ì(€€€€€€€€€}Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€€€€€}Ñ¡¥Ì¹…±±‰…­Ì¹½¹Q¥µ•½ÕÐ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°}Ñ¡¥Ì¹É•ÍÁ½¹Í”¤ì(€€€€€€€ô(€€€€€ô°½¹™¥œ¹Ñ¥µ•½ÕÐ¤ì(€€€€€Ù…È™•Ñ¡AÉ½µ¥Í”€ô¥ÍAÉ½µ¥Í”¡Ñ¡¥Ì¹É•ÅÕ•ÍÐ¤€üÑ¡¥Ì¹É•ÅÕ•ÍÐ¹Ñ¡•¸¡Í•±˜¹™•Ñ ¤€èÍ•±˜¹™•Ñ ¡Ñ¡¥Ì¹É•ÅÕ•ÍÐ¤ì(€€€€€™•Ñ¡AÉ½µ¥Í”¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡É•ÍÁ½¹Í”¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÈì(€€€€€€€}Ñ¡¥Ì¹É•ÍÁ½¹Í”€ô}Ñ¡¥Ì¹±½…‘•È€ôÉ•ÍÁ½¹Í”ì(€€€€€€€Ù…È™¥ÉÍÐ€ô5…Ñ ¹µ…à¡Í•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤°ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤ì(€€€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡}Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€€€½¹™¥œ¹Ñ¥µ•½ÕÐ€ôµ…á1½…‘Q¥µ•5Ìì(€€€€€€€}Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÍ•±˜¹Í•ÑQ¥µ•½ÕÐ¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹…±±‰…­Ì¤ì(€€€€€€€€€€€}Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€€€€€€€}Ñ¡¥Ì¹…±±‰…­Ì¹½¹Q¥µ•½ÕÐ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°}Ñ¡¥Ì¹É•ÍÁ½¹Í”¤ì(€€€€€€€€€ô(€€€€€€€ô°µ…á1½…‘Q¥µ•5Ì€´€¡™¥ÉÍÐ€´ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤¤ì(€€€€€€€¥˜€ …É•ÍÁ½¹Í”¹½¬¤ì(€€€€€€€€€Ù…ÈÍÑ…ÑÕÌ€ôÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ°(€€€€€€€€€€€ÍÑ…ÑÕÍQ•áÐ€ôÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÍQ•áÐì(€€€€€€€€€Ñ¡É½Ü¹•Ü•Ñ¡ÉÉ½È¡ÍÑ…ÑÕÍQ•áÐñð€™•Ñ °‰…¹•ÑÝ½É¬É•ÍÁ½¹Í”œ°ÍÑ…ÑÕÌ°É•ÍÁ½¹Í”¤ì(€€€€€€€ô(€€€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ€ô™¥ÉÍÐì(€€€€€€€ÍÑ…ÑÌ¹Ñ½Ñ…°€ô•Ñ½¹Ñ•¹Ñ1•¹Ñ ¡É•ÍÁ½¹Í”¹¡•…‘•ÉÌ¤ñðÍÑ…ÑÌ¹Ñ½Ñ…°ì(€€€€€€€Ù…È½¹AÉ½É•ÍÌ€ô€¡}Ñ¡¥Ì‘…±±‰…­ÌÈ€ô}Ñ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÈ¹½¹AÉ½É•ÍÌì(€€€€€€€¥˜€¡½¹AÉ½É•ÍÌ€˜˜¥Í¥¹¥Ñ•9Õµ‰•È¡½¹™¥œ¹¡¥¡]…Ñ•É5…É¬¤¤ì(€€€€€€€€€É•ÑÕÉ¸}Ñ¡¥Ì¹±½…‘AÉ½É•ÍÍ¥Ù•±ä¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°½¹™¥œ¹¡¥¡]…Ñ•É5…É¬°½¹AÉ½É•ÍÌ¤ì(€€€€€€€ô(€€€€€€€¥˜€¡¥ÍÉÉ…å	Õ™™•È¤ì(€€€€€€€€€É•ÑÕÉ¸É•ÍÁ½¹Í”¹…ÉÉ…å	Õ™™•È ¤ì(€€€€€€€ô(€€€€€€€¥˜€¡½¹Ñ•áÐ¹É•ÍÁ½¹Í•QåÁ”€ôôô€©Í½¸œ¤ì(€€€€€€€€€É•ÑÕÉ¸É•ÍÁ½¹Í”¹©Í½¸ ¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸É•ÍÁ½¹Í”¹Ñ•áÐ ¤ì(€€€€€ô¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡É•ÍÁ½¹Í•…Ñ„¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÌ°}Ñ¡¥Ì‘…±±‰…­ÌÐì(€€€€€€€Ù…ÈÉ•ÍÁ½¹Í”€ô}Ñ¡¥Ì¹É•ÍÁ½¹Í”ì(€€€€€€€¥˜€ …É•ÍÁ½¹Í”¤ì(€€€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È ±½…‘•È‘•ÍÑÉ½å•œ¤ì(€€€€€€€ô(€€€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡}Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹•¹€ô5…Ñ ¹µ…à¡Í•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤°ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ¤ì(€€€€€€€Ù…ÈÑ½Ñ…°€ôÉ•ÍÁ½¹Í•…Ñ…m19Q!tì(€€€€€€€¥˜€¡Ñ½Ñ…°¤ì(€€€€€€€€€ÍÑ…ÑÌ¹±½…‘•€ôÍÑ…ÑÌ¹Ñ½Ñ…°€ôÑ½Ñ…°ì(€€€€€€€ô(€€€€€€€Ù…È±½…‘•ÉI•ÍÁ½¹Í”€ôì(€€€€€€€€€ÕÉ°èÉ•ÍÁ½¹Í”¹ÕÉ°°(€€€€€€€€€‘…Ñ„èÉ•ÍÁ½¹Í•…Ñ„°(€€€€€€€€€½‘”èÉ•ÍÁ½¹Í”¹ÍÑ…ÑÕÌ(€€€€€€€ôì(€€€€€€€Ù…È½¹AÉ½É•ÍÌ€ô€¡}Ñ¡¥Ì‘…±±‰…­ÌÌ€ô}Ñ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÌ¹½¹AÉ½É•ÍÌì(€€€€€€€¥˜€¡½¹AÉ½É•ÍÌ€˜˜€…¥Í¥¹¥Ñ•9Õµ‰•È¡½¹™¥œ¹¡¥¡]…Ñ•É5…É¬¤¤ì(€€€€€€€€€½¹AÉ½É•ÍÌ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°É•ÍÁ½¹Í•…Ñ„°É•ÍÁ½¹Í”¤ì(€€€€€€€ô(€€€€€€€€¡}Ñ¡¥Ì‘…±±‰…­ÌÐ€ô}Ñ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÐ¹½¹MÕ•ÍÌ¡±½…‘•ÉI•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°É•ÍÁ½¹Í”¤ì(€€€€€ô¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÔì(€€€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡}Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€€€¥˜€¡ÍÑ…ÑÌ¹…‰½ÉÑ•¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼=IL•ÉÉ½ÉÌÉ•ÍÕ±Ð¥¸…¸Õ¹‘•™¥¹•½‘”¸M•Ð¥ÐÑ¼€À¡•É”Ñ¼…±¥¸Ý¥Ñ a!HÌ‰•¡…Ù¥½È(€€€€€€€€¼¼Ý¡•¸‘•ÍÑÉ½å¥¹œ°€•ÉÉ½Èœ¥ÑÍ•±˜…¸‰”Õ¹‘•™¥¹•(€€€€€€€Ù…È½‘”€ô€…•ÉÉ½È€ü€À€è•ÉÉ½È¹½‘”ñð€Àì(€€€€€€€Ù…ÈÑ•áÐ€ô€…•ÉÉ½È€ü¹Õ±°€è•ÉÉ½È¹µ•ÍÍ…”ì(€€€€€€€€¡}Ñ¡¥Ì‘…±±‰…­ÌÔ€ô}Ñ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÔ¹½¹ÉÉ½È¡ì(€€€€€€€€€½‘”è½‘”°(€€€€€€€€€Ñ•áÐèÑ•áÐ(€€€€€€€ô°½¹Ñ•áÐ°•ÉÉ½È€ü•ÉÉ½È¹‘•Ñ…¥±Ì€è¹Õ±°°ÍÑ…ÑÌ¤ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ…¡•”€ô™Õ¹Ñ¥½¸•Ñ…¡•” ¤ì(€€€€€Ù…ÈÉ•ÍÕ±Ð€ô¹Õ±°ì(€€€€€¥˜€¡Ñ¡¥Ì¹É•ÍÁ½¹Í”¤ì(€€€€€€€Ù…È…•!•…‘•È€ôÑ¡¥Ì¹É•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð …”œ¤ì(€€€€€€€É•ÍÕ±Ð€ô…•!•…‘•È€üÁ…ÉÍ•±½…Ð¡…•!•…‘•È¤€è¹Õ±°ì(€€€€€ô(€€€€€É•ÑÕÉ¸É•ÍÕ±Ðì(€€€ôì(€€€}ÁÉ½Ñ¼¹•ÑI•ÍÁ½¹Í•!•…‘•È€ô™Õ¹Ñ¥½¸•ÑI•ÍÁ½¹Í•!•…‘•È¡¹…µ”¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹É•ÍÁ½¹Í”€üÑ¡¥Ì¹É•ÍÁ½¹Í”¹¡•…‘•ÉÌ¹•Ð¡¹…µ”¤€è¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘AÉ½É•ÍÍ¥Ù•±ä€ô™Õ¹Ñ¥½¸±½…‘AÉ½É•ÍÍ¥Ù•±ä¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¡¥¡]…Ñ•É5…É¬°½¹AÉ½É•ÍÌ¤ì(€€€€€¥˜€¡¡¥¡]…Ñ•É5…É¬€ôôôÙ½¥€À¤ì(€€€€€€€¡¥¡]…Ñ•É5…É¬€ô€Àì(€€€€€ô(€€€€€Ù…È¡Õ¹­…¡”€ô¹•Ü¡Õ¹­…¡” ¤ì(€€€€€Ù…ÈÉ•…‘•È€ôÉ•ÍÁ½¹Í”¹‰½‘ä¹•ÑI•…‘•È ¤ì(€€€€€Ù…È}ÁÕµÀ€ô™Õ¹Ñ¥½¸ÁÕµÀ ¤ì(€€€€€€€É•ÑÕÉ¸É•…‘•È¹É•… ¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡‘…Ñ„¤ì(€€€€€€€€€¥˜€¡‘…Ñ„¹‘½¹”¤ì(€€€€€€€€€€€¥˜€¡¡Õ¹­…¡”¹‘…Ñ…1•¹Ñ ¤ì(€€€€€€€€€€€€€½¹AÉ½É•ÍÌ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¡Õ¹­…¡”¹™±ÕÍ  ¤¹‰Õ™™•È°É•ÍÁ½¹Í”¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•Í½±Ù”¡¹•ÜÉÉ…å	Õ™™•È À¤¤ì(€€€€€€€€€ô(€€€€€€€€€Ù…È¡Õ¹¬€ô‘…Ñ„¹Ù…±Õ”ì(€€€€€€€€€Ù…È±•¸€ô¡Õ¹¬¹±•¹Ñ ì(€€€€€€€€€ÍÑ…ÑÌ¹±½…‘•€¬ô±•¸ì(€€€€€€€€€¥˜€¡±•¸€ð¡¥¡]…Ñ•É5…É¬ñð¡Õ¹­…¡”¹‘…Ñ…1•¹Ñ ¤ì(€€€€€€€€€€€€¼¼Q¡”ÕÉÉ•¹Ð¡Õ¹¬¥ÌÑ½¼Íµ…±°Ñ¼Ñ¼‰”•µ¥ÑÑ•½ÈÑ¡”…¡”…±É•…‘ä¡…Ì‘…Ñ„(€€€€€€€€€€€€¼¼AÕÍ ¥ÐÑ¼Ñ¡”…¡”(€€€€€€€€€€€¡Õ¹­…¡”¹ÁÕÍ ¡¡Õ¹¬¤ì(€€€€€€€€€€€¥˜€¡¡Õ¹­…¡”¹‘…Ñ…1•¹Ñ €øô¡¥¡]…Ñ•É5…É¬¤ì(€€€€€€€€€€€€€€¼¼™±ÕÍ ¥¸½É‘•ÈÑ¼©½¥¸Ñ¡”ÑåÁ•…ÉÉ…åÌ(€€€€€€€€€€€€€½¹AÉ½É•ÍÌ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¡Õ¹­…¡”¹™±ÕÍ  ¤¹‰Õ™™•È°É•ÍÁ½¹Í”¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€¼¼%˜Ñ¡•É”Ì¹½Ñ¡¥¹œ…¡•…±É•…‘ä°…¹Ñ¡”¡…¡”¥Ì±…É”•¹½Õ (€€€€€€€€€€€€¼¼©ÕÍÐ•µ¥ÐÑ¡”ÁÉ½É•ÍÌ•Ù•¹Ð(€€€€€€€€€€€½¹AÉ½É•ÍÌ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¡Õ¹¬¹‰Õ™™•È°É•ÍÁ½¹Í”¤ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸}ÁÕµÀ ¤ì(€€€€€€€ô¤¹…Ñ ¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€€¼¨…‰½ÉÑ•€¨¼(€€€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•©•Ð ¤ì(€€€€€€€ô¤ì(€€€€€ôì(€€€€€É•ÑÕÉ¸}ÁÕµÀ ¤ì(€€€ôì(€€€É•ÑÕÉ¸•Ñ¡1½…‘•Èì(€ô ¤ì(€™Õ¹Ñ¥½¸•ÑI•ÅÕ•ÍÑA…É…µ•Ñ•ÉÌ¡½¹Ñ•áÐ°Í¥¹…°¤ì(€€€Ù…È¥¹¥ÑA…É…µÌ€ôì(€€€€€µ•Ñ¡½è€Pœ°(€€€€€µ½‘”è€½ÉÌœ°(€€€€€É•‘•¹Ñ¥…±Ìè€Í…µ”µ½É¥¥¸œ°(€€€€€Í¥¹…°èÍ¥¹…°°(€€€€€¡•…‘•ÉÌè¹•ÜÍ•±˜¹!•…‘•ÉÌ¡}•áÑ•¹‘Ì¡íô°½¹Ñ•áÐ¹¡•…‘•ÉÌ¤¤(€€€ôì(€€€¥˜€¡½¹Ñ•áÐ¹É…¹•¹¤ì(€€€€€¥¹¥ÑA…É…µÌ¹¡•…‘•ÉÌ¹Í•Ð I…¹”œ°€‰åÑ•Ìôœ€¬½¹Ñ•áÐ¹É…¹•MÑ…ÉÐ€¬€œ´œ€¬MÑÉ¥¹œ¡½¹Ñ•áÐ¹É…¹•¹€´€Ä¤¤ì(€€€ô(€€€É•ÑÕÉ¸¥¹¥ÑA…É…µÌì(€ô(€™Õ¹Ñ¥½¸•Ñ	åÑ•I…¹•1•¹Ñ ¡‰åÑ•I…¹•!•…‘•È¤ì(€€€Ù…ÈÉ•ÍÕ±Ð€ô	eQI9¹•á•Œ¡‰åÑ•I…¹•!•…‘•È¤ì(€€€¥˜€¡É•ÍÕ±Ð¤ì(€€€€€É•ÑÕÉ¸Á…ÉÍ•%¹Ð¡É•ÍÕ±ÑlÉt¤€´Á…ÉÍ•%¹Ð¡É•ÍÕ±ÑlÅt¤€¬€Äì(€€€ô(€ô(€™Õ¹Ñ¥½¸•Ñ½¹Ñ•¹Ñ1•¹Ñ ¡¡•…‘•ÉÌ¤ì(€€€Ù…È½¹Ñ•¹ÑI…¹”€ô¡•…‘•ÉÌ¹•Ð ½¹Ñ•¹ÐµI…¹”œ¤ì(€€€¥˜€¡½¹Ñ•¹ÑI…¹”¤ì(€€€€€Ù…È‰åÑ•I…¹•1•¹Ñ €ô•Ñ	åÑ•I…¹•1•¹Ñ ¡½¹Ñ•¹ÑI…¹”¤ì(€€€€€¥˜€¡¥Í¥¹¥Ñ•9Õµ‰•È¡‰åÑ•I…¹•1•¹Ñ ¤¤ì(€€€€€€€É•ÑÕÉ¸‰åÑ•I…¹•1•¹Ñ ì(€€€€€ô(€€€ô(€€€Ù…È½¹Ñ•¹Ñ1•¹Ñ €ô¡•…‘•ÉÌ¹•Ð ½¹Ñ•¹Ðµ1•¹Ñ œ¤ì(€€€¥˜€¡½¹Ñ•¹Ñ1•¹Ñ ¤ì(€€€€€É•ÑÕÉ¸Á…ÉÍ•%¹Ð¡½¹Ñ•¹Ñ1•¹Ñ ¤ì(€€€ô(€ô(€™Õ¹Ñ¥½¸•ÑI•ÅÕ•ÍÐ¡½¹Ñ•áÐ°¥¹¥ÑA…É…µÌ¤ì(€€€É•ÑÕÉ¸¹•ÜÍ•±˜¹I•ÅÕ•ÍÐ¡½¹Ñ•áÐ¹ÕÉ°°¥¹¥ÑA…É…µÌ¤ì(€ô(€Ù…È•Ñ¡ÉÉ½È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}ÉÉ½È¤ì(€€€™Õ¹Ñ¥½¸•Ñ¡ÉÉ½È¡µ•ÍÍ…”°½‘”°‘•Ñ…¥±Ì¤ì(€€€€€Ù…È}Ñ¡¥ÌÈì(€€€€€}Ñ¡¥ÌÈ€ô}ÉÉ½È¹…±°¡Ñ¡¥Ì°µ•ÍÍ…”¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥ÌÈ¹½‘”€ôÙ½¥€Àì(€€€€€}Ñ¡¥ÌÈ¹‘•Ñ…¥±Ì€ôÙ½¥€Àì(€€€€€}Ñ¡¥ÌÈ¹½‘”€ô½‘”ì(€€€€€}Ñ¡¥ÌÈ¹‘•Ñ…¥±Ì€ô‘•Ñ…¥±Ìì(€€€€€É•ÑÕÉ¸}Ñ¡¥ÌÈì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡•Ñ¡ÉÉ½È°}ÉÉ½È¤ì(€€€É•ÑÕÉ¸•Ñ¡ÉÉ½Èì(€ô ¼¨}}AUI}|¨½}ÝÉ…Á9…Ñ¥Ù•MÕÁ•È¡ÉÉ½È¤¤ì((€Ù…È}!I}1%9}I`€ô€½y…”éqÌ©mq¹t­qÌ¨½¥´ì(€Ù…Èa¡É1½…‘•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸a¡É1½…‘•È¡½¹™¥œ¤ì(€€€€€Ñ¡¥Ì¹á¡ÉM•ÑÕÀ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹É•ÑÉåQ¥µ•½ÕÐ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹É•ÑÉå•±…ä€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…±±‰…­Ì€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹Ñ•áÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±½…‘•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹á¡ÉM•ÑÕÀ€ô½¹™¥œ€ü½¹™¥œ¹á¡ÉM•ÑÕÀñð¹Õ±°€è¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ€ô¹•Ü1½…‘MÑ…ÑÌ ¤ì(€€€€€Ñ¡¥Ì¹É•ÑÉå•±…ä€ô€Àì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ôa¡É1½…‘•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹…±±‰…­Ì€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€Ñ¡¥Ì¹±½…‘•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹Ñ•áÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹á¡ÉM•ÑÕÀ€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹…‰½ÉÑ%¹Ñ•É¹…°€ô™Õ¹Ñ¥½¸…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹±½…‘•Èì(€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÑÉåQ¥µ•½ÕÐ¤ì(€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€±½…‘•È¹½¹É•…‘åÍÑ…Ñ•¡…¹”€ô¹Õ±°ì(€€€€€€€±½…‘•È¹½¹ÁÉ½É•ÍÌ€ô¹Õ±°ì(€€€€€€€¥˜€¡±½…‘•È¹É•…‘åMÑ…Ñ”€„ôô€Ð¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ¹…‰½ÉÑ•€ôÑÉÕ”ì(€€€€€€€€€±½…‘•È¹…‰½ÉÐ ¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹…‰½ÉÐ€ô™Õ¹Ñ¥½¸…‰½ÉÐ ¤ì(€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­Ìì(€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€¥˜€ ¡}Ñ¡¥Ì‘…±±‰…­Ì€ôÑ¡¥Ì¹…±±‰…­Ì¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘…±±‰…­Ì¹½¹‰½ÉÐ¤ì(€€€€€€€Ñ¡¥Ì¹…±±‰…­Ì¹½¹‰½ÉÐ¡Ñ¡¥Ì¹ÍÑ…ÑÌ°Ñ¡¥Ì¹½¹Ñ•áÐ°Ñ¡¥Ì¹±½…‘•È¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…€ô™Õ¹Ñ¥½¸±½…¡½¹Ñ•áÐ°½¹™¥œ°…±±‰…­Ì¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤ì(€€€€€€€Ñ¡É½Ü¹•ÜÉÉ½È 1½…‘•È…¸½¹±ä‰”ÕÍ•½¹”¸œ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€Ñ¡¥Ì¹½¹Ñ•áÐ€ô½¹Ñ•áÐì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô½¹™¥œì(€€€€€Ñ¡¥Ì¹…±±‰…­Ì€ô…±±‰…­Ìì(€€€€€Ñ¡¥Ì¹±½…‘%¹Ñ•É¹…° ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘%¹Ñ•É¹…°€ô™Õ¹Ñ¥½¸±½…‘%¹Ñ•É¹…° ¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œ°(€€€€€€€½¹Ñ•áÐ€ôÑ¡¥Ì¹½¹Ñ•áÐì(€€€€€¥˜€ …½¹™¥œñð€…½¹Ñ•áÐ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…Èá¡È€ôÑ¡¥Ì¹±½…‘•È€ô¹•ÜÍ•±˜¹a51!ÑÑÁI•ÅÕ•ÍÐ ¤ì(€€€€€Ù…ÈÍÑ…ÑÌ€ôÑ¡¥Ì¹ÍÑ…ÑÌì(€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ€ô€Àì(€€€€€ÍÑ…ÑÌ¹±½…‘•€ô€Àì(€€€€€ÍÑ…ÑÌ¹…‰½ÉÑ•€ô™…±Í”ì(€€€€€Ù…Èá¡ÉM•ÑÕÀ€ôÑ¡¥Ì¹á¡ÉM•ÑÕÀì(€€€€€¥˜€¡á¡ÉM•ÑÕÀ¤ì(€€€€€€€AÉ½µ¥Í”¹É•Í½±Ù” ¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹±½…‘•È€„ôôá¡Èñð}Ñ¡¥Ì¹ÍÑ…ÑÌ¹…‰½ÉÑ•¤É•ÑÕÉ¸ì(€€€€€€€€€É•ÑÕÉ¸á¡ÉM•ÑÕÀ¡á¡È°½¹Ñ•áÐ¹ÕÉ°¤ì(€€€€€€€ô¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹±½…‘•È€„ôôá¡Èñð}Ñ¡¥Ì¹ÍÑ…ÑÌ¹…‰½ÉÑ•¤É•ÑÕÉ¸ì(€€€€€€€€€á¡È¹½Á•¸ Pœ°½¹Ñ•áÐ¹ÕÉ°°ÑÉÕ”¤ì(€€€€€€€€€É•ÑÕÉ¸á¡ÉM•ÑÕÀ¡á¡È°½¹Ñ•áÐ¹ÕÉ°¤ì(€€€€€€€ô¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€¥˜€¡}Ñ¡¥Ì¹±½…‘•È€„ôôá¡Èñð}Ñ¡¥Ì¹ÍÑ…ÑÌ¹…‰½ÉÑ•¤É•ÑÕÉ¸ì(€€€€€€€€€}Ñ¡¥Ì¹½Á•¹¹‘M•¹‘a¡È¡á¡È°½¹Ñ•áÐ°½¹™¥œ¤ì(€€€€€€€ô¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÈì(€€€€€€€€€€¼¼%ÄÄÑ¡É½ÝÌ…¸•á•ÁÑ¥½¸½¸á¡È¹½Á•¸¥˜…ÑÑ•µÁÑ¥¹œÑ¼…•ÍÌ…¸!QQ@É•Í½ÕÉ”½Ù•È!QQAL(€€€€€€€€€€¡}Ñ¡¥Ì‘…±±‰…­ÌÈ€ô}Ñ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÈ¹½¹ÉÉ½È¡ì(€€€€€€€€€€€½‘”èá¡È¹ÍÑ…ÑÕÌ°(€€€€€€€€€€€Ñ•áÐè•ÉÉ½È¹µ•ÍÍ…”(€€€€€€€€€ô°½¹Ñ•áÐ°á¡È°ÍÑ…ÑÌ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô¤ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹½Á•¹¹‘M•¹‘a¡È¡á¡È°½¹Ñ•áÐ°½¹™¥œ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½Á•¹¹‘M•¹‘a¡È€ô™Õ¹Ñ¥½¸½Á•¹¹‘M•¹‘a¡È¡á¡È°½¹Ñ•áÐ°½¹™¥œ¤ì(€€€€€¥˜€ …á¡È¹É•…‘åMÑ…Ñ”¤ì(€€€€€€€á¡È¹½Á•¸ Pœ°½¹Ñ•áÐ¹ÕÉ°°ÑÉÕ”¤ì(€€€€€ô(€€€€€Ù…È¡•…‘•ÉÌ€ô½¹Ñ•áÐ¹¡•…‘•ÉÌì(€€€€€Ù…È}½¹™¥œ‘±½…‘A½±¥ä€ô½¹™¥œ¹±½…‘A½±¥ä°(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€ô}½¹™¥œ‘±½…‘A½±¥ä¹µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì°(€€€€€€€µ…á1½…‘Q¥µ•5Ì€ô}½¹™¥œ‘±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ìì(€€€€€¥˜€¡¡•…‘•ÉÌ¤ì(€€€€€€€™½È€¡Ù…È¡•…‘•È¥¸¡•…‘•ÉÌ¤ì(€€€€€€€€€á¡È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È¡¡•…‘•È°¡•…‘•ÉÍm¡•…‘•Ét¤ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡½¹Ñ•áÐ¹É…¹•¹¤ì(€€€€€€€á¡È¹Í•ÑI•ÅÕ•ÍÑ!•…‘•È I…¹”œ°€‰åÑ•Ìôœ€¬½¹Ñ•áÐ¹É…¹•MÑ…ÉÐ€¬€œ´œ€¬€¡½¹Ñ•áÐ¹É…¹•¹€´€Ä¤¤ì(€€€€€ô(€€€€€á¡È¹½¹É•…‘åÍÑ…Ñ•¡…¹”€ôÑ¡¥Ì¹É•…‘åÍÑ…Ñ•¡…¹”¹‰¥¹¡Ñ¡¥Ì¤ì(€€€€€á¡È¹½¹ÁÉ½É•ÍÌ€ôÑ¡¥Ì¹±½…‘ÁÉ½É•ÍÌ¹‰¥¹¡Ñ¡¥Ì¤ì(€€€€€á¡È¹É•ÍÁ½¹Í•QåÁ”€ô½¹Ñ•áÐ¹É•ÍÁ½¹Í•QåÁ”ì(€€€€€€¼¼Í•ÑÕÀÑ¥µ•½ÕÐ‰•™½É”Ý”Á•É™½É´É•ÅÕ•ÍÐ(€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€½¹™¥œ¹Ñ¥µ•½ÕÐ€ôµ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€˜˜¥Í¥¹¥Ñ•9Õµ‰•È¡µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì¤€üµ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€èµ…á1½…‘Q¥µ•5Ìì(€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÍ•±˜¹Í•ÑQ¥µ•½ÕÐ¡Ñ¡¥Ì¹±½…‘Ñ¥µ•½ÕÐ¹‰¥¹¡Ñ¡¥Ì¤°½¹™¥œ¹Ñ¥µ•½ÕÐ¤ì(€€€€€á¡È¹Í•¹ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…‘åÍÑ…Ñ•¡…¹”€ô™Õ¹Ñ¥½¸É•…‘åÍÑ…Ñ•¡…¹” ¤ì(€€€€€Ù…È½¹Ñ•áÐ€ôÑ¡¥Ì¹½¹Ñ•áÐ°(€€€€€€€á¡È€ôÑ¡¥Ì¹±½…‘•È°(€€€€€€€ÍÑ…ÑÌ€ôÑ¡¥Ì¹ÍÑ…ÑÌì(€€€€€¥˜€ …½¹Ñ•áÐñð€…á¡È¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÉ•…‘åMÑ…Ñ”€ôá¡È¹É•…‘åMÑ…Ñ”ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œì((€€€€€€¼¼‘½¸ÐÁÉ½••¥˜á¡È¡…Ì‰••¸…‰½ÉÑ•(€€€€€¥˜€¡ÍÑ…ÑÌ¹…‰½ÉÑ•¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼€øô!IM}I%Y(€€€€€¥˜€¡É•…‘åMÑ…Ñ”€øô€È¤ì(€€€€€€€¥˜€¡ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ€ôôô€À¤ì(€€€€€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ€ô5…Ñ ¹µ…à¡Í•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤°ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤ì(€€€€€€€€€€¼¼É•…‘åMÑ…Ñ”€øô€È9É•…‘åMÑ…Ñ”€„ôôÐ€¡É•…‘åMÑ…Ñ”€ô!IM}I%Yñð1=%9¤É•…É´Ñ¥µ•½ÕÐ…Ìá¡È¹½Ð™¥¹¥Í¡•å•Ð(€€€€€€€€€¥˜€¡½¹™¥œ¹Ñ¥µ•½ÕÐ€„ôô½¹™¥œ¹±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ì¤ì(€€€€€€€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€€€€€€€½¹™¥œ¹Ñ¥µ•½ÕÐ€ô½¹™¥œ¹±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ìì(€€€€€€€€€€€Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ€ôÍ•±˜¹Í•ÑQ¥µ•½ÕÐ¡Ñ¡¥Ì¹±½…‘Ñ¥µ•½ÕÐ¹‰¥¹¡Ñ¡¥Ì¤°½¹™¥œ¹±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ì€´€¡ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ€´ÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ¤¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€¥˜€¡É•…‘åMÑ…Ñ”€ôôô€Ð¤ì(€€€€€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÅÕ•ÍÑQ¥µ•½ÕÐ¤ì(€€€€€€€€€á¡È¹½¹É•…‘åÍÑ…Ñ•¡…¹”€ô¹Õ±°ì(€€€€€€€€€á¡È¹½¹ÁÉ½É•ÍÌ€ô¹Õ±°ì(€€€€€€€€€Ù…È}ÍÑ…ÑÕÌ€ôá¡È¹ÍÑ…ÑÕÌì(€€€€€€€€€€¼¼¡ÑÑÀÍÑ…ÑÕÌ‰•ÑÝ••¸€ÈÀÀÑ¼€Èää…É”…±°ÍÕ•ÍÍ™Õ°(€€€€€€€€€Ù…ÈÕÍ•I•ÍÁ½¹Í•Q•áÐ€ôá¡È¹É•ÍÁ½¹Í•QåÁ”€ôôô€Ñ•áÐœ€üá¡È¹É•ÍÁ½¹Í•Q•áÐ€è¹Õ±°ì(€€€€€€€€€¥˜€¡}ÍÑ…ÑÕÌ€øô€ÈÀÀ€˜˜}ÍÑ…ÑÕÌ€ð€ÌÀÀ¤ì(€€€€€€€€€€€Ù…È‘…Ñ„€ôÕÍ•I•ÍÁ½¹Í•Q•áÐ€„ô¹Õ±°€üÕÍ•I•ÍÁ½¹Í•Q•áÐ€èá¡È¹É•ÍÁ½¹Í”ì(€€€€€€€€€€€¥˜€¡‘…Ñ„€„ô¹Õ±°¤ì(€€€€€€€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÌ°}Ñ¡¥Ì‘…±±‰…­ÌÐì(€€€€€€€€€€€€€ÍÑ…ÑÌ¹±½…‘¥¹œ¹•¹€ô5…Ñ ¹µ…à¡Í•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤°ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ¤ì(€€€€€€€€€€€€€Ù…È±•¸€ôá¡È¹É•ÍÁ½¹Í•QåÁ”€ôôô€…ÉÉ…å‰Õ™™•Èœ€ü‘…Ñ„¹‰åÑ•1•¹Ñ €è‘…Ñ„¹±•¹Ñ ì(€€€€€€€€€€€€€ÍÑ…ÑÌ¹±½…‘•€ôÍÑ…ÑÌ¹Ñ½Ñ…°€ô±•¸ì(€€€€€€€€€€€€€ÍÑ…ÑÌ¹‰ÝÍÑ¥µ…Ñ”€ôÍÑ…ÑÌ¹Ñ½Ñ…°€¨€àÀÀÀ€¼€¡ÍÑ…ÑÌ¹±½…‘¥¹œ¹•¹€´ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ¤ì(€€€€€€€€€€€€€Ù…È½¹AÉ½É•ÍÌ€ô€¡}Ñ¡¥Ì‘…±±‰…­ÌÌ€ôÑ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÌ¹½¹AÉ½É•ÍÌì(€€€€€€€€€€€€€¥˜€¡½¹AÉ½É•ÍÌ¤ì(€€€€€€€€€€€€€€€½¹AÉ½É•ÍÌ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°‘…Ñ„°á¡È¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€Ù…È}É•ÍÁ½¹Í”€ôì(€€€€€€€€€€€€€€€ÕÉ°èá¡È¹É•ÍÁ½¹Í•UI0°(€€€€€€€€€€€€€€€‘…Ñ„è‘…Ñ„°(€€€€€€€€€€€€€€€½‘”è}ÍÑ…ÑÕÌ(€€€€€€€€€€€€€ôì(€€€€€€€€€€€€€€¡}Ñ¡¥Ì‘…±±‰…­ÌÐ€ôÑ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÐ¹½¹MÕ•ÍÌ¡}É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°á¡È¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€ô(€€€€€€€€€ô((€€€€€€€€€€¼¼!…¹‘±”‰…ÍÑ…ÑÕÌ½È¹Õ±±¥Í É•ÍÁ½¹Í”(€€€€€€€€€Ù…ÈÉ•ÑÉå½¹™¥œ€ô½¹™¥œ¹±½…‘A½±¥ä¹•ÉÉ½ÉI•ÑÉäì(€€€€€€€€€Ù…ÈÉ•ÑÉå½Õ¹Ð€ôÍÑ…ÑÌ¹É•ÑÉäì(€€€€€€€€€€¼¼¥˜µ…à¹ˆ½˜É•ÑÉ¥•ÌÉ•…¡•½È¥˜¡ÑÑÀÍÑ…ÑÕÌ‰•ÑÝ••¸€ÐÀÀ…¹€Ðää€¡ÍÕ •ÉÉ½È…¹¹½Ð‰”É•½Ù•É•°É•ÑÉå¥¹œ¥ÌÕÍ•±•ÍÌ¤°É•ÑÕÉ¸•ÉÉ½È(€€€€€€€€€Ù…ÈÉ•ÍÁ½¹Í”€ôì(€€€€€€€€€€€ÕÉ°è½¹Ñ•áÐ¹ÕÉ°°(€€€€€€€€€€€‘…Ñ„èÕ¹‘•™¥¹•°(€€€€€€€€€€€½‘”è}ÍÑ…ÑÕÌ(€€€€€€€€€ôì(€€€€€€€€€¥˜€¡Í¡½Õ±‘I•ÑÉä¡É•ÑÉå½¹™¥œ°É•ÑÉå½Õ¹Ð°™…±Í”°É•ÍÁ½¹Í”¤¤ì(€€€€€€€€€€€Ñ¡¥Ì¹É•ÑÉä¡É•ÑÉå½¹™¥œ¤ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€Ù…È}Ñ¡¥Ì‘…±±‰…­ÌÔì(€€€€€€€€€€€±½•È¹•ÉÉ½È¡}ÍÑ…ÑÕÌ€¬€ˆÝ¡¥±”±½…‘¥¹œ€ˆ€¬½¹Ñ•áÐ¹ÕÉ°¤ì(€€€€€€€€€€€€¡}Ñ¡¥Ì‘…±±‰…­ÌÔ€ôÑ¡¥Ì¹…±±‰…­Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…±±‰…­ÌÔ¹½¹ÉÉ½È¡ì(€€€€€€€€€€€€€½‘”è}ÍÑ…ÑÕÌ°(€€€€€€€€€€€€€Ñ•áÐèá¡È¹ÍÑ…ÑÕÍQ•áÐ(€€€€€€€€€€€ô°½¹Ñ•áÐ°á¡È°ÍÑ…ÑÌ¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘Ñ¥µ•½ÕÐ€ô™Õ¹Ñ¥½¸±½…‘Ñ¥µ•½ÕÐ ¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹½¹™¥œ¤É•ÑÕÉ¸ì(€€€€€Ù…ÈÉ•ÑÉå½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œ¹±½…‘A½±¥ä¹Ñ¥µ•½ÕÑI•ÑÉäì(€€€€€Ù…ÈÉ•ÑÉå½Õ¹Ð€ôÑ¡¥Ì¹ÍÑ…ÑÌ¹É•ÑÉäì(€€€€€¥˜€¡Í¡½Õ±‘I•ÑÉä¡É•ÑÉå½¹™¥œ°É•ÑÉå½Õ¹Ð°ÑÉÕ”¤¤ì(€€€€€€€Ñ¡¥Ì¹É•ÑÉä¡É•ÑÉå½¹™¥œ¤ì(€€€€€ô•±Í”ì(€€€€€€€Ù…È}Ñ¡¥Ì‘½¹Ñ•áÐì(€€€€€€€±½•È¹Ý…É¸ ‰Ñ¥µ•½ÕÐÝ¡¥±”±½…‘¥¹œ€ˆ€¬€ ¡}Ñ¡¥Ì‘½¹Ñ•áÐ€ôÑ¡¥Ì¹½¹Ñ•áÐ¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘½¹Ñ•áÐ¹ÕÉ°¤¤ì(€€€€€€€Ù…È…±±‰…­Ì€ôÑ¡¥Ì¹…±±‰…­Ìì(€€€€€€€¥˜€¡…±±‰…­Ì¤ì(€€€€€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€€€€€…±±‰…­Ì¹½¹Q¥µ•½ÕÐ¡Ñ¡¥Ì¹ÍÑ…ÑÌ°Ñ¡¥Ì¹½¹Ñ•áÐ°Ñ¡¥Ì¹±½…‘•È¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹É•ÑÉä€ô™Õ¹Ñ¥½¸É•ÑÉä¡É•ÑÉå½¹™¥œ¤ì(€€€€€Ù…È½¹Ñ•áÐ€ôÑ¡¥Ì¹½¹Ñ•áÐ°(€€€€€€€ÍÑ…ÑÌ€ôÑ¡¥Ì¹ÍÑ…ÑÌì(€€€€€Ñ¡¥Ì¹É•ÑÉå•±…ä€ô•ÑI•ÑÉå•±…ä¡É•ÑÉå½¹™¥œ°ÍÑ…ÑÌ¹É•ÑÉä¤ì(€€€€€ÍÑ…ÑÌ¹É•ÑÉä¬¬ì(€€€€€±½•È¹Ý…É¸ ¡ÍÑ…ÑÕÌ€ü€!QQ@MÑ…ÑÕÌ€œ€¬ÍÑ…ÑÕÌ€è€Q¥µ•½ÕÐœ¤€¬€ˆÝ¡¥±”±½…‘¥¹œ€ˆ€¬€¡½¹Ñ•áÐ€ôô¹Õ±°€üÙ½¥€À€è½¹Ñ•áÐ¹ÕÉ°¤€¬€ˆ°É•ÑÉå¥¹œ€ˆ€¬ÍÑ…ÑÌ¹É•ÑÉä€¬€ˆ¼ˆ€¬É•ÑÉå½¹™¥œ¹µ…á9ÕµI•ÑÉä€¬€ˆ¥¸€ˆ€¬Ñ¡¥Ì¹É•ÑÉå•±…ä€¬€‰µÌˆ¤ì(€€€€€€¼¼…‰½ÉÐ…¹É•Í•Ð¥¹Ñ•É¹…°ÍÑ…Ñ”(€€€€€Ñ¡¥Ì¹…‰½ÉÑ%¹Ñ•É¹…° ¤ì(€€€€€Ñ¡¥Ì¹±½…‘•È€ô¹Õ±°ì(€€€€€€¼¼Í¡•‘Õ±”É•ÑÉä(€€€€€Í•±˜¹±•…ÉQ¥µ•½ÕÐ¡Ñ¡¥Ì¹É•ÑÉåQ¥µ•½ÕÐ¤ì(€€€€€Ñ¡¥Ì¹É•ÑÉåQ¥µ•½ÕÐ€ôÍ•±˜¹Í•ÑQ¥µ•½ÕÐ¡Ñ¡¥Ì¹±½…‘%¹Ñ•É¹…°¹‰¥¹¡Ñ¡¥Ì¤°Ñ¡¥Ì¹É•ÑÉå•±…ä¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘ÁÉ½É•ÍÌ€ô™Õ¹Ñ¥½¸±½…‘ÁÉ½É•ÍÌ¡•Ù•¹Ð¤ì(€€€€€Ù…ÈÍÑ…ÑÌ€ôÑ¡¥Ì¹ÍÑ…ÑÌì(€€€€€ÍÑ…ÑÌ¹±½…‘•€ô•Ù•¹Ð¹±½…‘•ì(€€€€€¥˜€¡•Ù•¹Ð¹±•¹Ñ¡½µÁÕÑ…‰±”¤ì(€€€€€€€ÍÑ…ÑÌ¹Ñ½Ñ…°€ô•Ù•¹Ð¹Ñ½Ñ…°ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ…¡•”€ô™Õ¹Ñ¥½¸•Ñ…¡•” ¤ì(€€€€€Ù…ÈÉ•ÍÕ±Ð€ô¹Õ±°ì(€€€€€¥˜€¡Ñ¡¥Ì¹±½…‘•È€˜˜}!I}1%9}I`¹Ñ•ÍÐ¡Ñ¡¥Ì¹±½…‘•È¹•Ñ±±I•ÍÁ½¹Í•!•…‘•ÉÌ ¤¤¤ì(€€€€€€€Ù…È…•!•…‘•È€ôÑ¡¥Ì¹±½…‘•È¹•ÑI•ÍÁ½¹Í•!•…‘•È …”œ¤ì(€€€€€€€É•ÍÕ±Ð€ô…•!•…‘•È€üÁ…ÉÍ•±½…Ð¡…•!•…‘•È¤€è¹Õ±°ì(€€€€€ô(€€€€€É•ÑÕÉ¸É•ÍÕ±Ðì(€€€ôì(€€€}ÁÉ½Ñ¼¹•ÑI•ÍÁ½¹Í•!•…‘•È€ô™Õ¹Ñ¥½¸•ÑI•ÍÁ½¹Í•!•…‘•È¡¹…µ”¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹±½…‘•È€˜˜¹•ÜI•áÀ ‰xˆ€¬¹…µ”€¬€ˆéqqÌ©mqq¹t­qqÌ¨ˆ°€¥´œ¤¹Ñ•ÍÐ¡Ñ¡¥Ì¹±½…‘•È¹•Ñ±±I•ÍÁ½¹Í•!•…‘•ÉÌ ¤¤¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘•È¹•ÑI•ÍÁ½¹Í•!•…‘•È¡¹…µ”¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ôì(€€€É•ÑÕÉ¸a¡É1½…‘•Èì(€ô ¤ì((€€¼¨¨(€€€¨‘•ÁÉ•…Ñ•ÕÍ”™É…1½…‘A½±¥ä¹‘•™…Õ±Ð(€€€¨¼((€€¼¨¨(€€€¨‘•ÁÉ•…Ñ•ÕÍ”µ…¹¥™•ÍÑ1½…‘A½±¥ä¹‘•™…Õ±Ð…¹Á±…å±¥ÍÑ1½…‘A½±¥ä¹‘•™…Õ±Ð(€€€¨¼((€Ù…È‘•™…Õ±Ñ1½…‘A½±¥ä€ôì(€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€àÀÀÀ°(€€€µ…á1½…‘Q¥µ•5Ìè€ÈÀÀÀÀ°(€€€Ñ¥µ•½ÕÑI•ÑÉäè¹Õ±°°(€€€•ÉÉ½ÉI•ÑÉäè¹Õ±°(€ôì((€€¼¨¨(€€€¨¥¹½É”(€€€¨%˜Á½ÍÍ¥‰±”°­••À¡±Í•™…Õ±Ñ½¹™¥œÍ¡…±±½Ü(€€€¨%Ð¥Ì±½¹•Ý¡•¹•Ù•È„¹•Ü!±Ì¥¹ÍÑ…¹”¥ÌÉ•…Ñ•°‰ä­••Á¥¹œÑ¡”½¹™¥œ(€€€¨Í¡…±±½ÜÑ¡”ÁÉ½Á•ÉÑ¥•Ì…É”±½¹•°…¹Ý”‘½¸Ð•¹ÕÀµ…¹¥ÁÕ±…Ñ¥¹œÑ¡”‘•™…Õ±Ð(€€€¨¼(€Ù…È¡±Í•™…Õ±Ñ½¹™¥œ€ô}½‰©•ÑMÁÉ•…È¡}½‰©•ÑMÁÉ•…È¡ì(€€€…ÕÑ½MÑ…ÉÑ1½…èÑÉÕ”°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸è€´Ä°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€‘•™…Õ±ÑÕ‘¥½½‘•ŒèÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€‘•‰Õœè™…±Í”°(€€€€¼¼ÕÍ•‰ä±½•È(€€€…Á1•Ù•±=¹AMÉ½Àè™…±Í”°(€€€€¼¼ÕÍ•‰ä™ÁÌµ½¹ÑÉ½±±•È(€€€…Á1•Ù•±Q½A±…å•ÉM¥é”è™…±Í”°(€€€€¼¼ÕÍ•‰ä…Àµ±•Ù•°µ½¹ÑÉ½±±•È(€€€¥¹½É••Ù¥•A¥á•±I…Ñ¥¼è™…±Í”°(€€€€¼¼ÕÍ•‰ä…Àµ±•Ù•°µ½¹ÑÉ½±±•È(€€€µ…á•Ù¥•A¥á•±I…Ñ¥¼è9Õµ‰•È¹A=M%Q%Y}%9%9%Qd°(€€€€¼¼ÕÍ•‰ä…Àµ±•Ù•°µ½¹ÑÉ½±±•È(€€€ÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”èÑÉÕ”°(€€€¥¹¥Ñ¥…±1¥Ù•5…¹¥™•ÍÑM¥é”è€Ä°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€µ…á	Õ™™•É1•¹Ñ è€ÌÀ°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€‰…­	Õ™™•É1•¹Ñ è%¹™¥¹¥Ñä°(€€€€¼¼ÕÍ•‰ä‰Õ™™•Èµ½¹ÑÉ½±±•È(€€€™É½¹Ñ	Õ™™•É±ÕÍ¡Q¡É•Í¡½±è%¹™¥¹¥Ñä°(€€€µ…á	Õ™™•ÉM¥é”è€ØÀ€¨€ÄÀÀÀ€¨€ÄÀÀÀ°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€µ…áÉ…1½½­UÁQ½±•É…¹”è€À¸ÈÔ°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€µ…á	Õ™™•É!½±”è€À¸Ä°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È…¹…Àµ½¹ÑÉ½±±•È(€€€‘•Ñ•ÑMÑ…±±]¥Ñ¡ÕÉÉ•¹ÑQ¥µ•5Ìè€ÄÈÔÀ°(€€€€¼¼ÕÍ•‰ä…Àµ½¹ÑÉ½±±•È(€€€¡¥¡	Õ™™•É]…Ñ¡‘½A•É¥½è€È°(€€€€¼¼ÕÍ•‰ä…Àµ½¹ÑÉ½±±•È(€€€¹Õ‘•=™™Í•Ðè€À¸Ä°(€€€€¼¼ÕÍ•‰ä…Àµ½¹ÑÉ½±±•È(€€€¹Õ‘•5…áI•ÑÉäè€Ì°(€€€€¼¼ÕÍ•‰ä…Àµ½¹ÑÉ½±±•È(€€€¹Õ‘•=¹Y¥‘•½!½±”èÑÉÕ”°(€€€€¼¼ÕÍ•‰ä…Àµ½¹ÑÉ½±±•È(€€€±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ðè€Ì°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€±¥Ù•Må¹=¹MÑ…±±%¹É•…Í”è€Ä°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ðè%¹™¥¹¥Ñä°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€±¥Ù•Må¹ÕÉ…Ñ¥½¸èÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸èÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€µ…á1¥Ù•Må¹A±…å‰…­I…Ñ”è€Ä°(€€€€¼¼ÕÍ•‰ä±…Ñ•¹äµ½¹ÑÉ½±±•È(€€€±¥Ù•ÕÉ…Ñ¥½¹%¹™¥¹¥Ñäè™…±Í”°(€€€€¼¼ÕÍ•‰ä‰Õ™™•Èµ½¹ÑÉ½±±•È(€€€€¼¨¨(€€€€€¨‘•ÁÉ•…Ñ•ÕÍ”‰…­	Õ™™•É1•¹Ñ (€€€€€¨¼(€€€±¥Ù•	…­	Õ™™•É1•¹Ñ è¹Õ±°°(€€€€¼¼ÕÍ•‰ä‰Õ™™•Èµ½¹ÑÉ½±±•È(€€€µ…á5…á	Õ™™•É1•¹Ñ è€ØÀÀ°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€•¹…‰±•]½É­•ÈèÑÉÕ”°(€€€€¼¼ÕÍ•‰äÑÉ…¹ÍµÕá•È(€€€Ý½É­•ÉA…Ñ è¹Õ±°°(€€€€¼¼ÕÍ•‰äÑÉ…¹ÍµÕá•È(€€€•¹…‰±•M½™ÑÝ…É•LèÑÉÕ”°(€€€€¼¼ÕÍ•‰ä‘•ÉåÁÑ•È(€€€ÍÑ…ÉÑ1•Ù•°èÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä±•Ù•°µ½¹ÑÉ½±±•È(€€€ÍÑ…ÉÑÉ…AÉ•™•Ñ è™…±Í”°(€€€€¼¼ÕÍ•‰äÍÑÉ•…´µ½¹ÑÉ½±±•È(€€€™ÁÍÉ½ÁÁ•‘5½¹¥Ñ½É¥¹A•É¥½è€ÔÀÀÀ°(€€€€¼¼ÕÍ•‰ä™ÁÌµ½¹ÑÉ½±±•È(€€€™ÁÍÉ½ÁÁ•‘5½¹¥Ñ½É¥¹Q¡É•Í¡½±è€À¸È°(€€€€¼¼ÕÍ•‰ä™ÁÌµ½¹ÑÉ½±±•È(€€€…ÁÁ•¹‘ÉÉ½É5…áI•ÑÉäè€Ì°(€€€€¼¼ÕÍ•‰ä‰Õ™™•Èµ½¹ÑÉ½±±•È(€€€¥¹½É•A±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½ÉÌè™…±Í”°(€€€±½…‘•Èèa¡É1½…‘•È°(€€€€¼¼±½…‘•Èè•Ñ¡1½…‘•È°(€€€™1½…‘•ÈèÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä™É…µ•¹Ðµ±½…‘•È(€€€Á1½…‘•ÈèÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰äÁ±…å±¥ÍÐµ±½…‘•È(€€€á¡ÉM•ÑÕÀèÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰äá¡Èµ±½…‘•È(€€€±¥•¹Í•a¡ÉM•ÑÕÀèÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€±¥•¹Í•I•ÍÁ½¹Í•…±±‰…¬èÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€…‰É½¹ÑÉ½±±•Èè‰É½¹ÑÉ½±±•È°(€€€‰Õ™™•É½¹ÑÉ½±±•Èè	Õ™™•É½¹ÑÉ½±±•È°(€€€…Á1•Ù•±½¹ÑÉ½±±•Èè…Á1•Ù•±½¹ÑÉ½±±•È°(€€€•ÉÉ½É½¹ÑÉ½±±•ÈèÉÉ½É½¹ÑÉ½±±•È°(€€€™ÁÍ½¹ÑÉ½±±•ÈèAM½¹ÑÉ½±±•È°(€€€ÍÑÉ•Ñ¡M¡½ÉÑY¥‘•½QÉ…¬è™…±Í”°(€€€€¼¼ÕÍ•‰äµÀÐµÉ•µÕá•È(€€€µ…áÕ‘¥½É…µ•ÍÉ¥™Ðè€Ä°(€€€€¼¼ÕÍ•‰äµÀÐµÉ•µÕá•È(€€€™½É•-•åÉ…µ•=¹¥Í½¹Ñ¥¹Õ¥ÑäèÑÉÕ”°(€€€€¼¼ÕÍ•‰äÑÌµ‘•µÕá•È(€€€…‰ÉÝµ……ÍÑ1¥Ù”è€Ì°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰ÉÝµ…M±½Ý1¥Ù”è€ä°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰ÉÝµ……ÍÑY½è€Ì°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰ÉÝµ…M±½ÝY½è€ä°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”è€Õ”Ô°(€€€€¼¼€ÔÀÀ­‰ÁÌ€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ•5…àè€Õ”Ø°(€€€€¼¼€Ôµ‰ÁÌ(€€€…‰É	…¹‘]¥‘Ñ¡…Ñ½Èè€À¸äÔ°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰É	…¹‘]¥‘Ñ¡UÁ…Ñ½Èè€À¸Ü°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€…‰É5…á]¥Ñ¡I•…±	¥ÑÉ…Ñ”è™…±Í”°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€µ…áMÑ…ÉÙ…Ñ¥½¹•±…äè€Ð°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€µ…á1½…‘¥¹•±…äè€Ð°(€€€€¼¼ÕÍ•‰ä…‰Èµ½¹ÑÉ½±±•È(€€€µ¥¹ÕÑ½	¥ÑÉ…Ñ”è€À°(€€€€¼¼ÕÍ•‰ä¡±Ì(€€€•µ•¹…‰±•è™…±Í”°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€Ý¥‘•Ù¥¹•1¥•¹Í•UÉ°èÕ¹‘•™¥¹•°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€‘ÉµMåÍÑ•µÌèíô°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€‘ÉµMåÍÑ•µ=ÁÑ¥½¹Ìèíô°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€É•ÅÕ•ÍÑ5•‘¥…-•åMåÍÑ•µ•ÍÍÕ¹ŒèÉ•ÅÕ•ÍÑ5•‘¥…-•åMåÍÑ•µ•ÍÌ€°(€€€€¼¼ÕÍ•‰ä•µ”µ½¹ÑÉ½±±•È(€€€Ñ•ÍÑ	…¹‘Ý¥‘Ñ èÑÉÕ”°(€€€ÁÉ½É•ÍÍ¥Ù”è™…±Í”°(€€€±½Ý1…Ñ•¹å5½‘”èÑÉÕ”°(€€€µèÕ¹‘•™¥¹•°(€€€•¹…‰±•…Ñ•I…¹•5•Ñ…‘…Ñ…Õ•ÌèÑÉÕ”°(€€€•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•ÌèÑÉÕ”°(€€€•¹…‰±•µÍ-1Y5•Ñ…‘…Ñ„è™…±Í”°(€€€•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•ÌèÑÉÕ”°(€€€•¹…‰±•%¹Ñ•ÉÍÑ¥Ñ¥…±A±…å‰…¬èÑÉÕ”°(€€€¥¹Ñ•ÉÍÑ¥Ñ¥…±ÁÁ•¹‘%¹A±…”èÑÉÕ”°(€€€¥¹Ñ•ÉÍÑ¥Ñ¥…±1¥Ù•1½½­¡•…è€ÄÀ°(€€€ÕÍ•5•‘¥……Á…‰¥±¥Ñ¥•ÌèÑÉÕ”°(€€€•ÉÑ1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðè‘•™…Õ±Ñ1½…‘A½±¥ä(€€€ô°(€€€­•å1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€àÀÀÀ°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÈÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€Ä°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€ÈÀÀÀÀ°(€€€€€€€€€‰…­½™˜è€±¥¹•…Èœ(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€à°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€ÈÀÀÀÀ°(€€€€€€€€€‰…­½™˜è€±¥¹•…Èœ(€€€€€€€ô(€€€€€ô(€€€ô°(€€€µ…¹¥™•ÍÑ1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè%¹™¥¹¥Ñä°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÈÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€È°(€€€€€€€€€É•ÑÉå•±…å5Ìè€À°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€À(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€Ä°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€àÀÀÀ(€€€€€€€ô(€€€€€ô(€€€ô°(€€€Á±…å±¥ÍÑ1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€ÄÀÀÀÀ°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÈÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€È°(€€€€€€€€€É•ÑÉå•±…å5Ìè€À°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€À(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€È°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€àÀÀÀ(€€€€€€€ô(€€€€€ô(€€€ô°(€€€™É…1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€ÄÀÀÀÀ°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÄÈÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€Ð°(€€€€€€€€€É•ÑÉå•±…å5Ìè€À°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€À(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€Ø°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€àÀÀÀ(€€€€€€€ô(€€€€€ô(€€€ô°(€€€ÍÑ••É¥¹5…¹¥™•ÍÑ1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€ÄÀÀÀÀ°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÈÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€È°(€€€€€€€€€É•ÑÉå•±…å5Ìè€À°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€À(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€Ä°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€àÀÀÀ(€€€€€€€ô(€€€€€ô€(€€€ô°(€€€¥¹Ñ•ÉÍÑ¥Ñ¥…±ÍÍ•Ñ1¥ÍÑ1½…‘A½±¥äèì(€€€€€‘•™…Õ±Ðèì(€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè€ÄÀÀÀÀ°(€€€€€€€µ…á1½…‘Q¥µ•5Ìè€ÌÀÀÀÀ°(€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€À°(€€€€€€€€€É•ÑÉå•±…å5Ìè€À°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€À(€€€€€€€ô°(€€€€€€€•ÉÉ½ÉI•ÑÉäèì(€€€€€€€€€µ…á9ÕµI•ÑÉäè€À°(€€€€€€€€€É•ÑÉå•±…å5Ìè€ÄÀÀÀ°(€€€€€€€€€µ…áI•ÑÉå•±…å5Ìè€àÀÀÀ(€€€€€€€ô(€€€€€ô€(€€€ô°(€€€€¼¼Q¡•Í”‘•™…Õ±ÐÍ•ÑÑ¥¹Ì…É”‘•ÁÉ•…Ñ•¥¸™…Ù½È½˜Ñ¡”…‰½Ù”Á½±¥¥•Ì(€€€€¼¼…¹…É”µ…¥¹Ñ…¥¹•™½È‰…­Ý…É‘Ì½µÁ…Ñ¥‰¥±¥Ñä(€€€µ…¹¥™•ÍÑ1½…‘¥¹Q¥µ•=ÕÐè€ÄÀÀÀÀ°(€€€µ…¹¥™•ÍÑ1½…‘¥¹5…áI•ÑÉäè€Ä°(€€€µ…¹¥™•ÍÑ1½…‘¥¹I•ÑÉå•±…äè€ÄÀÀÀ°(€€€µ…¹¥™•ÍÑ1½…‘¥¹5…áI•ÑÉåQ¥µ•½ÕÐè€ØÐÀÀÀ°(€€€±•Ù•±1½…‘¥¹Q¥µ•=ÕÐè€ÄÀÀÀÀ°(€€€±•Ù•±1½…‘¥¹5…áI•ÑÉäè€Ð°(€€€±•Ù•±1½…‘¥¹I•ÑÉå•±…äè€ÄÀÀÀ°(€€€±•Ù•±1½…‘¥¹5…áI•ÑÉåQ¥µ•½ÕÐè€ØÐÀÀÀ°(€€€™É…1½…‘¥¹Q¥µ•=ÕÐè€ÈÀÀÀÀ°(€€€™É…1½…‘¥¹5…áI•ÑÉäè€Ø°(€€€™É…1½…‘¥¹I•ÑÉå•±…äè€ÄÀÀÀ°(€€€™É…1½…‘¥¹5…áI•ÑÉåQ¥µ•½ÕÐè€ØÐÀÀÀ(€ô°Ñ¥µ•±¥¹•½¹™¥œ ¤¤°íô°ì(€€€ÍÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•ÈèMÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È€°(€€€ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•ÈèMÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€°(€€€Ñ¥µ•±¥¹•½¹ÑÉ½±±•ÈèQ¥µ•±¥¹•½¹ÑÉ½±±•È€°(€€€…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•ÈèÕ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È€°(€€€…Õ‘¥½QÉ…­½¹ÑÉ½±±•ÈèÕ‘¥½QÉ…­½¹ÑÉ½±±•È€°(€€€•µ•½¹ÑÉ½±±•Èè5½¹ÑÉ½±±•È€°(€€€µ‘½¹ÑÉ½±±•Èè5½¹ÑÉ½±±•È€°(€€€½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•Èè½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È€°(€€€¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•Èè%¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€(€ô¤ì(€™Õ¹Ñ¥½¸Ñ¥µ•±¥¹•½¹™¥œ ¤ì(€€€É•ÑÕÉ¸ì(€€€€€Õ•!…¹‘±•ÈèÕ•Ì°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€•¹…‰±•]•‰YQPèÑÉÕ”°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€•¹…‰±•%5MÄèÑÉÕ”°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€•¹…‰±•ÜÀá…ÁÑ¥½¹ÌèÑÉÕ”°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Å1…‰•°è€¹±¥Í œ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Å1…¹Õ…•½‘”è€•¸œ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬É1…‰•°è€MÁ…¹¥Í œ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬É1…¹Õ…•½‘”è€•Ìœ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Í1…‰•°è€U¹­¹½Ý¸œ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Í1…¹Õ…•½‘”è€œœ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Ñ1…‰•°è€U¹­¹½Ý¸œ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€…ÁÑ¥½¹ÍQ•áÑQÉ…¬Ñ1…¹Õ…•½‘”è€œœ°(€€€€€€¼¼ÕÍ•‰äÑ¥µ•±¥¹”µ½¹ÑÉ½±±•È(€€€€€É•¹‘•ÉQ•áÑQÉ…­Í9…Ñ¥Ù•±äèÑÉÕ”(€€€ôì(€ô((€€¼¨¨(€€€¨¥¹½É”(€€€¨¼(€™Õ¹Ñ¥½¸µ•É•½¹™¥œ¡‘•™…Õ±Ñ½¹™¥œ°ÕÍ•É½¹™¥œ°±½•È¤ì(€€€¥˜€ ¡ÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹ÐñðÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð¤€˜˜€¡ÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸ñðÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸¤¤ì(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È ‰%±±•…°¡±Ì¹©Ì½¹™¥œè‘½¸Ðµ¥àÕÀ±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð½±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð…¹±¥Ù•Må¹ÕÉ…Ñ¥½¸½±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸ˆ¤ì(€€€ô(€€€¥˜€¡ÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð€„ôôÕ¹‘•™¥¹•€˜˜€¡ÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð€ôôôÕ¹‘•™¥¹•ñðÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð€ðôÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð¤¤ì(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È %±±•…°¡±Ì¹©Ì½¹™¥œè€‰±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹ÐˆµÕÍÐ‰”É•…Ñ•ÈÑ¡…¸€‰±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ðˆœ¤ì(€€€ô(€€€¥˜€¡ÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€˜˜€¡ÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸€ôôôÕ¹‘•™¥¹•ñðÕÍ•É½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸€ðôÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸¤¤ì(€€€€€Ñ¡É½Ü¹•ÜÉÉ½È %±±•…°¡±Ì¹©Ì½¹™¥œè€‰±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸ˆµÕÍÐ‰”É•…Ñ•ÈÑ¡…¸€‰±¥Ù•Må¹ÕÉ…Ñ¥½¸ˆœ¤ì(€€€ô(€€€Ù…È‘•™…Õ±ÑÍ½Áä€ô‘••ÁÁä¡‘•™…Õ±Ñ½¹™¥œ¤ì((€€€€¼¼	…­Ý…É‘Ì½µÁ…Ñ¥‰¥±¥ÑäÝ¥Ñ ‘•ÁÉ•…Ñ•½¹™¥œÙ…±Õ•Ì(€€€Ù…È‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹QåÁ•Ì€ôlµ…¹¥™•ÍÐœ°€±•Ù•°œ°€™É…œtì(€€€Ù…È‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹Ì€ôlQ¥µ•=ÕÐœ°€5…áI•ÑÉäœ°€I•ÑÉå•±…äœ°€5…áI•ÑÉåQ¥µ•½ÕÐtì(€€€‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹QåÁ•Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑåÁ”¤ì(€€€€€Ù…ÈÁ½±¥å9…µ”€ô€¡ÑåÁ”€ôôô€±•Ù•°œ€ü€Á±…å±¥ÍÐœ€èÑåÁ”¤€¬€‰1½…‘A½±¥äˆì(€€€€€Ù…ÈÁ½±¥å9½ÑM•Ð€ôÕÍ•É½¹™¥mÁ½±¥å9…µ•t€ôôôÕ¹‘•™¥¹•ì(€€€€€Ù…ÈÉ•Á½ÉÐ€ômtì(€€€€€‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡Í•ÑÑ¥¹œ¤ì(€€€€€€€Ù…È‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹œ€ôÑåÁ”€¬€‰1½…‘¥¹œˆ€¬Í•ÑÑ¥¹œì(€€€€€€€Ù…ÈÙ…±Õ”€ôÕÍ•É½¹™¥m‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹tì(€€€€€€€¥˜€¡Ù…±Õ”€„ôôÕ¹‘•™¥¹•€˜˜Á½±¥å9½ÑM•Ð¤ì(€€€€€€€€€É•Á½ÉÐ¹ÁÕÍ ¡‘•ÁÉ•…Ñ•‘M•ÑÑ¥¹œ¤ì(€€€€€€€€€Ù…ÈÍ•ÑÑ¥¹Ì€ô‘•™…Õ±ÑÍ½ÁåmÁ½±¥å9…µ•t¹‘•™…Õ±Ðì(€€€€€€€€€ÕÍ•É½¹™¥mÁ½±¥å9…µ•t€ôì(€€€€€€€€€€€‘•™…Õ±ÐèÍ•ÑÑ¥¹Ì(€€€€€€€€€ôì(€€€€€€€€€ÍÝ¥Ñ €¡Í•ÑÑ¥¹œ¤ì(€€€€€€€€€€€…Í”€Q¥µ•=ÕÐœè(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹µ…á1½…‘Q¥µ•5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€…Í”€5…áI•ÑÉäœè(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹•ÉÉ½ÉI•ÑÉä¹µ…á9ÕµI•ÑÉä€ôÙ…±Õ”ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Ñ¥µ•½ÕÑI•ÑÉä¹µ…á9ÕµI•ÑÉä€ôÙ…±Õ”ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€…Í”€I•ÑÉå•±…äœè(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹•ÉÉ½ÉI•ÑÉä¹É•ÑÉå•±…å5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Ñ¥µ•½ÕÑI•ÑÉä¹É•ÑÉå•±…å5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€…Í”€5…áI•ÑÉåQ¥µ•½ÕÐœè(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹•ÉÉ½ÉI•ÑÉä¹µ…áI•ÑÉå•±…å5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€Í•ÑÑ¥¹Ì¹Ñ¥µ•½ÕÑI•ÑÉä¹µ…áI•ÑÉå•±…å5Ì€ôÙ…±Õ”ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô¤ì(€€€€€¥˜€¡É•Á½ÉÐ¹±•¹Ñ ¤ì(€€€€€€€±½•È¹Ý…É¸ ‰¡±Ì¹©Ì½¹™¥œèpˆˆ€¬É•Á½ÉÐ¹©½¥¸ œˆ°€ˆœ¤€¬€‰pˆÍ•ÑÑ¥¹œ¡Ì¤…É”‘•ÁÉ•…Ñ•°ÕÍ”pˆˆ€¬Á½±¥å9…µ”€¬€‰pˆè€ˆ€¬ÍÑÉ¥¹¥™ä¡ÕÍ•É½¹™¥mÁ½±¥å9…µ•t¤¤ì(€€€€€ô(€€€ô¤ì(€€€É•ÑÕÉ¸}½‰©•ÑMÁÉ•…È¡}½‰©•ÑMÁÉ•…È¡íô°‘•™…Õ±ÑÍ½Áä¤°ÕÍ•É½¹™¥œ¤ì(€ô(€™Õ¹Ñ¥½¸‘••ÁÁä¡½‰¨¤ì(€€€¥˜€¡½‰¨€˜˜ÑåÁ•½˜½‰¨€ôôô€½‰©•Ðœ¤ì(€€€€€¥˜€¡ÉÉ…ä¹¥ÍÉÉ…ä¡½‰¨¤¤ì(€€€€€€€É•ÑÕÉ¸½‰¨¹µ…À¡‘••ÁÁä¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸=‰©•Ð¹­•åÌ¡½‰¨¤¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡É•ÍÕ±Ð°­•ä¤ì(€€€€€€€É•ÍÕ±Ñm­•åt€ô‘••ÁÁä¡½‰©m­•åt¤ì(€€€€€€€É•ÑÕÉ¸É•ÍÕ±Ðì(€€€€€ô°íô¤ì(€€€ô(€€€É•ÑÕÉ¸½‰¨ì(€ô((€€¼¨¨(€€€¨¥¹½É”(€€€¨¼(€™Õ¹Ñ¥½¸•¹…‰±•MÑÉ•…µ¥¹5½‘”¡½¹™¥œ°±½•È¤ì(€€€Ù…ÈÕÉÉ•¹Ñ1½…‘•È€ô½¹™¥œ¹±½…‘•Èì(€€€¥˜€¡ÕÉÉ•¹Ñ1½…‘•È€„ôô•Ñ¡1½…‘•È€˜˜ÕÉÉ•¹Ñ1½…‘•È€„ôôa¡É1½…‘•È¤ì(€€€€€€¼¼%˜„‘•Ù•±½Á•È¡…Ì½¹™¥ÕÉ•Ñ¡•¥È½Ý¸±½…‘•È°É•ÍÁ•ÐÑ¡…Ð¡½¥”(€€€€€±½•È¹±½œ m½¹™¥tèÕÍÑ½´±½…‘•È‘•Ñ•Ñ•°…¹¹½Ð•¹…‰±”ÁÉ½É•ÍÍ¥Ù”ÍÑÉ•…µ¥¹œœ¤ì(€€€€€½¹™¥œ¹ÁÉ½É•ÍÍ¥Ù”€ô™…±Í”ì(€€€ô•±Í”ì(€€€€€Ù…È…¹MÑÉ•…µAÉ½É•ÍÍ¥Ù•±ä€ô™•Ñ¡MÕÁÁ½ÉÑ• ¤ì(€€€€€¥˜€¡…¹MÑÉ•…µAÉ½É•ÍÍ¥Ù•±ä¤ì(€€€€€€€½¹™¥œ¹±½…‘•È€ô•Ñ¡1½…‘•Èì(€€€€€€€½¹™¥œ¹ÁÉ½É•ÍÍ¥Ù”€ôÑÉÕ”ì(€€€€€€€½¹™¥œ¹•¹…‰±•M½™ÑÝ…É•L€ôÑÉÕ”ì(€€€€€€€±½•È¹±½œ m½¹™¥tèAÉ½É•ÍÍ¥Ù”ÍÑÉ•…µ¥¹œ•¹…‰±•°ÕÍ¥¹œ•Ñ¡1½…‘•Èœ¤ì(€€€€€ô(€€€ô(€ô((€Ù…È5a}MQIQ}A})U5@€ô€È¸Àì(€Ù…ÈM-%A}	UI}!=1}MQA}M=9L€ô€À¸Äì(€Ù…ÈM-%A}	UI}I9}MQIP€ô€À¸ÀÔì(€Ù…ÈQ%-}%9QIY0Ä€ô€ÄÀÀì(€Ù…È…Á½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}Q…Í­1½½À¤ì(€€€™Õ¹Ñ¥½¸…Á½¹ÑÉ½±±•È¡¡±Ì°™É…µ•¹ÑQÉ…­•È¤ì(€€€€€Ù…È}Ñ¡¥Ìì(€€€€€}Ñ¡¥Ì€ô}Q…Í­1½½À¹…±°¡Ñ¡¥Ì°€…Àµ½¹ÑÉ½±±•Èœ°¡±Ì¹±½•È¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥Ì¹¡±Ì€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹µ•‘¥…M½ÕÉ”€ôÙ½¥€Àì(€€€€€}Ñ¡¥Ì¹¹Õ‘•I•ÑÉä€ô€Àì(€€€€€}Ñ¡¥Ì¹ÍÑ…±±I•Á½ÉÑ•€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹ÍÑ…±±•€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹µ½Ù•€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹Í••­¥¹œ€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹‰Õ™™•É•€ôíôì(€€€€€}Ñ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”€ô€Àì(€€€€€}Ñ¡¥Ì¹•¹‘•€ô€Àì(€€€€€}Ñ¡¥Ì¹Ý…¥Ñ¥¹œ€ô€Àì(€€€€€}Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€}Ñ¡¥Ì¹•¹‘•€ô€Àì(€€€€€€€}Ñ¡¥Ì¹Ý…¥Ñ¥¹œ€ô€Àì(€€€€€ôì(€€€€€}Ñ¡¥Ì¹½¹5•‘¥…]…¥Ñ¥¹œ€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„ì(€€€€€€€¥˜€ ¡}Ñ¡¥Ì‘µ•‘¥„€ô}Ñ¡¥Ì¹µ•‘¥„¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘µ•‘¥„¹Í••­¥¹œ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹Ý…¥Ñ¥¹œ€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€}Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ôì(€€€€€}Ñ¡¥Ì¹½¹5•‘¥…¹‘•€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€¥˜€¡}Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„Èì(€€€€€€€€€€¼¼•¹‘•¥ÌÍ•ÐÝ¡•¸ÑÉ¥•É¥¹œ5%}9Í¼Ñ¡…ÐÝ”‘¼¹½ÐÑÉ¥•È¥Ð……¥¸½¸ÍÑ…±°½È½¸Ñ¥¬Ý¥Ñ µ•‘¥„¹•¹‘•(€€€€€€€€€}Ñ¡¥Ì¹•¹‘•€ô€ ¡}Ñ¡¥Ì‘µ•‘¥„È€ô}Ñ¡¥Ì¹µ•‘¥„¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘µ•‘¥„È¹ÕÉÉ•¹ÑQ¥µ”¤ñð€Äì(€€€€€€€€€}Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}9°ì(€€€€€€€€€€€ÍÑ…±±•è™…±Í”(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ôì(€€€€€}Ñ¡¥Ì¹¡±Ì€ô¡±Ìì(€€€€€}Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È€ô™É…µ•¹ÑQÉ…­•Èì(€€€€€}Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€É•ÑÕÉ¸}Ñ¡¥Ìì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡…Á½¹ÑÉ½±±•È°}Q…Í­1½½À¤ì(€€€Ù…È}ÁÉ½Ñ¼€ô…Á½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€¡¡±Ì¤ì(€€€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}AA9°Ñ¡¥Ì¹½¹	Õ™™•ÉÁÁ•¹‘•°Ñ¡¥Ì¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€¡¡±Ì¤ì(€€€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}AA9°Ñ¡¥Ì¹½¹	Õ™™•ÉÁÁ•¹‘•°Ñ¡¥Ì¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€}Q…Í­1½½À¹ÁÉ½Ñ½ÑåÁ”¹‘•ÍÑÉ½ä¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ôÑ¡¥Ì¹¡±Ì€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹µ•‘¥…M½ÕÉ”€ôÕ¹‘•™¥¹•ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡•€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÙ…°¡Q%-}%9QIY0Ä¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥…M½ÕÉ”€ô‘…Ñ„¹µ•‘¥…M½ÕÉ”ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Á±…å¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ¤ì(€€€€€…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Ý…¥Ñ¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…]…¥Ñ¥¹œ¤ì(€€€€€…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€•¹‘•œ°Ñ¡¥Ì¹½¹5•‘¥…¹‘•¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹±•…É%¹Ñ•ÉÙ…° ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€¡µ•‘¥„¤ì(€€€€€€€É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Á±…å¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ¤ì(€€€€€€€É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Ý…¥Ñ¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…]…¥Ñ¥¹œ¤ì(€€€€€€€É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€•¹‘•œ°Ñ¡¥Ì¹½¹5•‘¥…¹‘•¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€ô(€€€€€Ñ¡¥Ì¹µ•‘¥…M½ÕÉ”€ôÕ¹‘•™¥¹•ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•ÉÁÁ•¹‘•€ô™Õ¹Ñ¥½¸½¹	Õ™™•ÉÁÁ•¹‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹‰Õ™™•É•€ô‘…Ñ„¹Ñ¥µ•I…¹•Ìì(€€€ôì(€€€}ÁÉ½Ñ¼¹Ñ¥¬€ô™Õ¹Ñ¥½¸Ñ¥¬ ¤ì(€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„Ìì(€€€€€¥˜€ „ ¡}Ñ¡¥Ì‘µ•‘¥„Ì€ôÑ¡¥Ì¹µ•‘¥„¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘µ•‘¥„Ì¹É•…‘åMÑ…Ñ”¤ñð€…Ñ¡¥Ì¹¡…Í	Õ™™•É•¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôÑ¡¥Ì¹µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ñ¡¥Ì¹Á½±°¡ÕÉÉ•¹ÑQ¥µ”°Ñ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€Ñ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”€ôÕÉÉ•¹ÑQ¥µ”ì(€€€ô((€€€€¼¨¨(€€€€€¨¡•­Ì¥˜Ñ¡”Á±…å¡•…¥ÌÍÑÕ¬Ý¥Ñ¡¥¸„…À°…¹¥˜Í¼°…ÑÑ•µÁÑÌÑ¼™É•”¥Ð¸(€€€€€¨…À¥Ì…¸Õ¹‰Õ™™•É•É…¹”‰•ÑÝ••¸ÑÝ¼‰Õ™™•É•É…¹•Ì€¡½ÈÑ¡”ÍÑ…ÉÐ…¹Ñ¡”™¥ÉÍÐ‰Õ™™•É•É…¹”¤¸(€€€€€¨(€€€€€¨Á…É…´±…ÍÑÕÉÉ•¹ÑQ¥µ”€´AÉ•Ù¥½ÕÍ±äÉ•…Á±…å¡•…Á½Í¥Ñ¥½¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Á½±°€ô™Õ¹Ñ¥½¸Á½±°¡ÕÉÉ•¹ÑQ¥µ”°±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì°}Ñ¡¥Ì‘¡±ÌÈì(€€€€€Ù…È½¹™¥œ€ô€¡}Ñ¡¥Ì‘¡±Ì€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±Ì¹½¹™¥œì(€€€€€¥˜€ …½¹™¥œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„°(€€€€€€€ÍÑ…±±•€ôÑ¡¥Ì¹ÍÑ…±±•ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÍ••­¥¹œ€ôµ•‘¥„¹Í••­¥¹œì(€€€€€Ù…ÈÍ••­•€ôÑ¡¥Ì¹Í••­¥¹œ€˜˜€…Í••­¥¹œì(€€€€€Ù…È‰•¥¹M••¬€ô€…Ñ¡¥Ì¹Í••­¥¹œ€˜˜Í••­¥¹œì(€€€€€Ù…ÈÁ…ÕÍ•‘¹‘•‘=É!…±Ñ•€ôµ•‘¥„¹Á…ÕÍ•€˜˜€…Í••­¥¹œñðµ•‘¥„¹•¹‘•ñðµ•‘¥„¹Á±…å‰…­I…Ñ”€ôôô€Àì(€€€€€Ñ¡¥Ì¹Í••­¥¹œ€ôÍ••­¥¹œì((€€€€€€¼¼Q¡”Á±…å¡•…¥Ìµ½Ù¥¹œ°¹¼µ½À(€€€€€¥˜€¡ÕÉÉ•¹ÑQ¥µ”€„ôô±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€¥˜€¡±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€€€Ñ¡¥Ì¹•¹‘•€ô€Àì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹µ½Ù•€ôÑÉÕ”ì(€€€€€€€¥˜€ …Í••­¥¹œ¤ì(€€€€€€€€€Ñ¡¥Ì¹¹Õ‘•I•ÑÉä€ô€Àì(€€€€€€€€€€¼¼]¡•¸É½ÍÍ¥¹œ‰•ÑÝ••¸‰Õ™™•É•Ù¥‘•¼Ñ¥µ”É…¹•Ì°‰ÕÐ¹½Ð…Õ‘¥¼°™±ÕÍ Á¥Á•±¥¹”Ý¥Ñ Í••¬€¡¡É½µ”¤(€€€€€€€€€¥˜€¡½¹™¥œ¹¹Õ‘•=¹Y¥‘•½!½±”€˜˜€…Á…ÕÍ•‘¹‘•‘=É!…±Ñ•€˜˜ÕÉÉ•¹ÑQ¥µ”€ø±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€€€€€Ñ¡¥Ì¹¹Õ‘•=¹Y¥‘•½!½±”¡ÕÉÉ•¹ÑQ¥µ”°±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹Ý…¥Ñ¥¹œ€ôôô€À¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…±±I•Í½±Ù•¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼±•…ÈÍÑ…±±•ÍÑ…Ñ”Ý¡•¸‰•¥¹¹¥¹œ½È™¥¹¥Í¡¥¹œÍ••­¥¹œÍ¼Ñ¡…ÐÝ”‘½¸ÐÉ•Á½ÉÐÍÑ…±±Ì½µ¥¹œ½ÕÐ½˜„Í••¬(€€€€€¥˜€¡‰•¥¹M••¬ñðÍ••­•¤ì(€€€€€€€¥˜€¡Í••­•¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…±±I•Í½±Ù•¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼Q¡”Á±…å¡•…Í¡½Õ±¹½Ð‰”µ½Ù¥¹œ(€€€€€¥˜€¡Á…ÕÍ•‘¹‘•‘=É!…±Ñ•¤ì(€€€€€€€Ñ¡¥Ì¹¹Õ‘•I•ÑÉä€ô€Àì(€€€€€€€Ñ¡¥Ì¹ÍÑ…±±I•Í½±Ù•¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€€¼¼¥É”5%}9Ñ¼Ý½É­…É½Õ¹•Ù•¹Ð¹½Ð‰•¥¹œ‘¥ÍÁ…Ñ¡•‰ä‰É½ÝÍ•È(€€€€€€€¥˜€ …Ñ¡¥Ì¹•¹‘•€˜˜µ•‘¥„¹•¹‘•€˜˜Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€Ñ¡¥Ì¹•¹‘•€ôÕÉÉ•¹ÑQ¥µ”ñð€Äì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}9°ì(€€€€€€€€€€€ÍÑ…±±•è™…±Í”(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€ …	Õ™™•É!•±Á•È¹•Ñ	Õ™™•É•¡µ•‘¥„¤¹±•¹Ñ ¤ì(€€€€€€€Ñ¡¥Ì¹¹Õ‘•I•ÑÉä€ô€Àì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼I•Í½±Ù”ÍÑ…±±Ì…Ð‰Õ™™•È¡½±•ÌÕÍ¥¹œÑ¡”µ…¥¸‰Õ™™•È°Ý¡½Í”É…¹•Ì…É”Ñ¡”¥¹Ñ•ÉÍ•Ñ¥½¹Ì½˜Ñ¡”½XÍ½ÕÉ•‰Õ™™•ÉÌ(€€€€€Ù…È‰Õ™™•É%¹™¼€ô	Õ™™•É!•±Á•È¹‰Õ™™•É%¹™¼¡µ•‘¥„°ÕÉÉ•¹ÑQ¥µ”°€À¤ì(€€€€€Ù…È¹•áÑMÑ…ÉÐ€ô‰Õ™™•É%¹™¼¹¹•áÑMÑ…ÉÐñð€Àì(€€€€€Ù…È™É…µ•¹ÑQÉ…­•È€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•Èì(€€€€€¥˜€¡Í••­¥¹œ€˜˜™É…µ•¹ÑQÉ…­•È€˜˜Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€¼¼%ÌÑ¡•É”„™É…µ•¹Ð±½…‘¥¹œ½Á…ÉÍ¥¹œ½…ÁÁ•¹‘¥¹œ‰•™½É”ÕÉÉ•¹ÑQ¥µ”ü(€€€€€€€Ù…È¥¹±¥¡Ñ•Á•¹‘•¹ä€ô•Ñ%¹±¥¡Ñ•Á•¹‘•¹ä¡Ñ¡¥Ì¹¡±Ì¹¥¹±¥¡ÑÉ…µ•¹ÑÌ°ÕÉÉ•¹ÑQ¥µ”¤ì((€€€€€€€€¼¼]…¥Ñ¥¹œ™½ÈÍ••­¥¹œ¥¸„‰Õ™™•É•É…¹”Ñ¼½µÁ±•Ñ”(€€€€€€€Ù…È¡…Í¹½Õ¡	Õ™™•È€ô‰Õ™™•É%¹™¼¹±•¸€ø5a}MQIQ}A})U5@ì(€€€€€€€€¼¼9•áÐ‰Õ™™•É•É…¹”¥ÌÑ½¼™…È…¡•…Ñ¼©ÕµÀÑ¼Ý¡¥±”ÍÑ¥±°Í••­¥¹œ(€€€€€€€Ù…È¹½	Õ™™•É!½±”€ô€…¹•áÑMÑ…ÉÐñð¥¹±¥¡Ñ•Á•¹‘•¹äñð¹•áÑMÑ…ÉÐ€´ÕÉÉ•¹ÑQ¥µ”€ø5a}MQIQ}A})U5@€˜˜€…™É…µ•¹ÑQÉ…­•È¹•ÑA…ÉÑ¥…±É…µ•¹Ð¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€¥˜€¡¡…Í¹½Õ¡	Õ™™•Èñð¹½	Õ™™•É!½±”¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼I•Í•Ðµ½Ù•ÍÑ…Ñ”Ý¡•¸Í••­¥¹œÑ¼„Á½¥¹Ð¥¸½È‰•™½É”„…À½¡½±”(€€€€€€€Ñ¡¥Ì¹µ½Ù•€ô™…±Í”ì(€€€€€ô((€€€€€€¼¼M­¥ÀÍÑ…ÉÐ…ÁÌ¥˜Ý”¡…Ù•¸ÐÁ±…å•°‰ÕÐÑ¡”±…ÍÐÁ½±°‘•Ñ•Ñ•Ñ¡”ÍÑ…ÉÐ½˜„ÍÑ…±°(€€€€€€¼¼Q¡”…‘‘¥Ñ¥½¸Á½±°¥Ù•ÌÑ¡”‰É½ÝÍ•È„¡…¹”Ñ¼©ÕµÀÑ¡”…À™½ÈÕÌ(€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô€¡}Ñ¡¥Ì‘¡±ÌÈ€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±ÌÈ¹±…Ñ•ÍÑ1•Ù•±•Ñ…¥±Ìì(€€€€€¥˜€ …Ñ¡¥Ì¹µ½Ù•€˜˜Ñ¡¥Ì¹ÍÑ…±±•€„ôô¹Õ±°€˜˜™É…µ•¹ÑQÉ…­•È¤ì(€€€€€€€€¼¼Q¡•É”¥Ì¹¼Á±…å…‰±”‰Õ™™•È€¡Í••­•°Ý…¥Ñ¥¹œ™½È‰Õ™™•È¤(€€€€€€€Ù…È¥Í	Õ™™•É•€ô‰Õ™™•É%¹™¼¹±•¸€ø€Àì(€€€€€€€¥˜€ …¥Í	Õ™™•É•€˜˜€…¹•áÑMÑ…ÉÐ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼)ÕµÀÍÑ…ÉÐ…ÁÌÝ¥Ñ¡¥¸©ÕµÀÑ¡É•Í¡½±(€€€€€€€Ù…ÈÍÑ…ÉÑ)ÕµÀ€ô5…Ñ ¹µ…à¡¹•áÑMÑ…ÉÐ°‰Õ™™•É%¹™¼¹ÍÑ…ÉÐñð€À¤€´ÕÉÉ•¹ÑQ¥µ”ì((€€€€€€€€¼¼]¡•¸©½¥¹¥¹œ„±¥Ù”ÍÑÉ•…´Ý¥Ñ …Õ‘¥¼ÑÉ…­Ì°…½Õ¹Ð™½È±¥Ù”Á±…å±¥ÍÐÝ¥¹‘½ÜÍ±¥‘¥¹œ‰ä…±±½Ý¥¹œ(€€€€€€€€¼¼„±…É•È©ÕµÀ½Ù•ÈÍÑ…ÉÐ…ÁÌ…ÕÍ•‰äÑ¡”…Õ‘¥¼µÍÑÉ•…´µ½¹ÑÉ½±±•È‰Õ™™•É¥¹œ„ÍÑ…ÉÐ™É…µ•¹Ð(€€€€€€€€¼¼Ñ¡…Ð‰•¥¹Ì½Ù•È€ÄÑ…É•Ð‘ÕÉ…Ñ¥½¸…™Ñ•ÈÑ¡”Ù¥‘•¼ÍÑ…ÉÐÁ½Í¥Ñ¥½¸¸(€€€€€€€Ù…È¥Í1¥Ù”€ô€„„¡±•Ù•±•Ñ…¥±Ì€„ô¹Õ±°€˜˜±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€Ù…Èµ…áMÑ…ÉÑ…Á)ÕµÀ€ô¥Í1¥Ù”€ü±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸€¨€È€è5a}MQIQ}A})U5@ì(€€€€€€€Ù…ÈÁ…ÉÑ¥…±=É…À€ô™É…µ•¹ÑQÉ…­•È¹•ÑA…ÉÑ¥…±É…µ•¹Ð¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€¥˜€¡ÍÑ…ÉÑ)ÕµÀ€ø€À€˜˜€¡ÍÑ…ÉÑ)ÕµÀ€ðôµ…áMÑ…ÉÑ…Á)ÕµÀñðÁ…ÉÑ¥…±=É…À¤¤ì(€€€€€€€€€¥˜€ …µ•‘¥„¹Á…ÕÍ•¤ì(€€€€€€€€€€€Ñ¡¥Ì¹}ÑÉåM­¥Á	Õ™™•É!½±”¡Á…ÉÑ¥…±=É…À¤ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¼MÑ…ÉÐÑÉ…­¥¹œÍÑ…±°Ñ¥µ”(€€€€€Ù…È‘•Ñ•ÑMÑ…±±]¥Ñ¡ÕÉÉ•¹ÑQ¥µ•5Ì€ô½¹™¥œ¹‘•Ñ•ÑMÑ…±±]¥Ñ¡ÕÉÉ•¹ÑQ¥µ•5Ìì(€€€€€Ù…ÈÑ¹½Ü€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€Ù…ÈÑ]…¥Ñ¥¹œ€ôÑ¡¥Ì¹Ý…¥Ñ¥¹œì(€€€€€¥˜€¡ÍÑ…±±•€ôôô¹Õ±°¤ì(€€€€€€€€¼¼UÍ”Ñ¥µ”½˜É••¹Ð€‰Ý…¥Ñ¥¹œˆ•Ù•¹Ð(€€€€€€€¥˜€¡Ñ]…¥Ñ¥¹œ€ø€À€˜˜Ñ¹½Ü€´Ñ]…¥Ñ¥¹œ€ð‘•Ñ•ÑMÑ…±±]¥Ñ¡ÕÉÉ•¹ÑQ¥µ•5Ì¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…±±•€ôÑ]…¥Ñ¥¹œì(€€€€€€€ô•±Í”ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…±±•€ôÑ¹½Üì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÍÑ…±±•‘ÕÉ…Ñ¥½¸€ôÑ¹½Ü€´ÍÑ…±±•ì(€€€€€¥˜€ …Í••­¥¹œ€˜˜€¡ÍÑ…±±•‘ÕÉ…Ñ¥½¸€øô‘•Ñ•ÑMÑ…±±]¥Ñ¡ÕÉÉ•¹ÑQ¥µ•5ÌñðÑ]…¥Ñ¥¹œ¤€˜˜Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥…M½ÕÉ”ì(€€€€€€€€¼¼¥ÍÁ…Ñ 5%}9Ý¡•¸µ•‘¥„¹•¹‘•½•¹‘••Ù•¹Ð¥Ì¹½ÐÍ¥¹…±±•…Ð•¹½˜ÍÑÉ•…´(€€€€€€€¥˜€  ¡}Ñ¡¥Ì‘µ•‘¥…M½ÕÉ”€ôÑ¡¥Ì¹µ•‘¥…M½ÕÉ”¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘µ•‘¥…M½ÕÉ”¹É•…‘åMÑ…Ñ”¤€ôôô€•¹‘•œ€˜˜€„¡±•Ù•±•Ñ…¥±Ì€„ô¹Õ±°€˜˜±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤€˜˜5…Ñ ¹…‰Ì¡ÕÉÉ•¹ÑQ¥µ”€´€ ¡±•Ù•±•Ñ…¥±Ì€ôô¹Õ±°€üÙ½¥€À€è±•Ù•±•Ñ…¥±Ì¹•‘”¤ñð€À¤¤€ð€Ä¤ì(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹•¹‘•¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹•¹‘•€ôÕÉÉ•¹ÑQ¥µ”ñð€Äì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}9°ì(€€€€€€€€€€€ÍÑ…±±•èÑÉÕ”(€€€€€€€€€ô¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼I•Á½ÉÐÍÑ…±±¥¹œ…™Ñ•ÈÑÉå¥¹œÑ¼™¥à(€€€€€€€Ñ¡¥Ì¹}É•Á½ÉÑMÑ…±°¡‰Õ™™•É%¹™¼¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„ñð€…Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€ô(€€€€€Ù…È‰Õ™™•É•‘]¥Ñ¡!½±•Ì€ô	Õ™™•É!•±Á•È¹‰Õ™™•É%¹™¼¡µ•‘¥„°ÕÉÉ•¹ÑQ¥µ”°½¹™¥œ¹µ…á	Õ™™•É!½±”¤ì(€€€€€Ñ¡¥Ì¹}ÑÉå¥á	Õ™™•ÉMÑ…±°¡‰Õ™™•É•‘]¥Ñ¡!½±•Ì°ÍÑ…±±•‘ÕÉ…Ñ¥½¸¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÑ…±±I•Í½±Ù•€ô™Õ¹Ñ¥½¸ÍÑ…±±I•Í½±Ù•¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€Ù…ÈÍÑ…±±•€ôÑ¡¥Ì¹ÍÑ…±±•ì(€€€€€¥˜€¡ÍÑ…±±•€˜˜Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…±±•€ô¹Õ±°ì(€€€€€€€€¼¼Q¡”Á±…å¡•…¥Ì¹½Üµ½Ù¥¹œ°‰ÕÐÝ…ÌÁÉ•Ù¥½ÕÍ±äÍÑ…±±•(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…±±I•Á½ÉÑ•¤ì(€€€€€€€€€Ù…ÈÍÑ…±±•‘ÕÉ…Ñ¥½¸€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤€´ÍÑ…±±•ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰Á±…å‰…¬¹½ÐÍÑÕ¬…¹åµ½É” ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆ°…™Ñ•È€ˆ€¬5…Ñ ¹É½Õ¹¡ÍÑ…±±•‘ÕÉ…Ñ¥½¸¤€¬€‰µÌˆ¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…±±I•Á½ÉÑ•€ô™…±Í”ì(€€€€€€€€€Ñ¡¥Ì¹Ý…¥Ñ¥¹œ€ô€Àì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MQ11}IM=1Y°íô¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹¹Õ‘•=¹Y¥‘•½!½±”€ô™Õ¹Ñ¥½¸¹Õ‘•=¹Y¥‘•½!½±”¡ÕÉÉ•¹ÑQ¥µ”°±…ÍÑÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€Ù…È}Ñ¡¥Ì‘‰Õ™™•É•‘…Õ‘¥¼ì(€€€€€€¼¼¡É½µ”Ý¥±°Á±…ä½¹”Í•½¹Á…ÍÐ„¡½±”¥¸Ù¥‘•¼‰Õ™™•É•Ñ¥µ”É…¹•ÌÝ¥Ñ¡½ÕÐÉ•¹‘•É¥¹œ…¹äÙ¥‘•¼™É½´Ñ¡”ÍÕ‰Í•ÅÕ•¹ÐÉ…¹”…¹Ñ¡•¸ÍÑ…±°…Ì±½¹œ…Ì…Õ‘¥¼¥Ì‰Õ™™•É•è(€€€€€€¼¼¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½Ù¥‘•¼µ‘•Ø½¡±Ì¹©Ì½¥ÍÍÕ•Ì¼ÔØÌÄ(€€€€€€¼¼¡ÑÑÁÌè¼½¥ÍÍÕ•Ì¹¡É½µ¥Õ´¹½Éœ½¥ÍÍÕ•Ì¼ÐÀÈàÀØÄÌ½µµ•¹ÐÄÀ(€€€€€€¼¼•Ñ•ÐÑ¡”Á½Ñ•¹Ñ¥…°™½ÈÑ¡¥ÌÍ¥ÑÕ…Ñ¥½¸…¹ÁÉ½…Ñ¥Ù•±äÍ••¬Ñ¼™±ÕÍ Ñ¡”Ù¥‘•¼Á¥Á•±¥¹”½¹”Ñ¡”Á±…å¡•…Á…ÍÍ•ÌÑ¡”ÍÑ…ÉÐ½˜Ñ¡”Ù¥‘•¼¡½±”¸(€€€€€€¼¼]¡•¸Ñ¡•É”…É”…Õ‘¥¼…¹Ù¥‘•¼‰Õ™™•ÉÌ…¹ÕÉÉ•¹ÑQ¥µ”¥ÌÁ…ÍÐÑ¡”•¹½˜Ñ¡”™¥ÉÍÐÙ¥‘•¼‰Õ™™•É•É…¹”¸¸¸(€€€€€Ù…ÈÙ¥‘•½M½ÕÉ•	Õ™™•É•€ôÑ¡¥Ì¹‰Õ™™•É•¹Ù¥‘•¼ì(€€€€€¥˜€¡Ñ¡¥Ì¹¡±Ì€˜˜Ñ¡¥Ì¹µ•‘¥„€˜˜Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È€˜˜€¡}Ñ¡¥Ì‘‰Õ™™•É•‘…Õ‘¥¼€ôÑ¡¥Ì¹‰Õ™™•É•¹…Õ‘¥¼¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘‰Õ™™•É•‘…Õ‘¥¼¹±•¹Ñ €˜˜Ù¥‘•½M½ÕÉ•	Õ™™•É•€˜˜Ù¥‘•½M½ÕÉ•	Õ™™•É•¹±•¹Ñ €ø€Ä€˜˜ÕÉÉ•¹ÑQ¥µ”€øÙ¥‘•½M½ÕÉ•	Õ™™•É•¹•¹ À¤¤ì(€€€€€€€€¼¼…¹…Õ‘¥¼¥Ì‰Õ™™•É•…ÐÑ¡”Á±…å¡•…(€€€€€€€Ù…È…Õ‘¥½	Õ™™•É%¹™¼€ô	Õ™™•É!•±Á•È¹‰Õ™™•É•‘%¹™¼¡	Õ™™•É!•±Á•È¹Ñ¥µ•I…¹•ÍQ½ÉÉ…ä¡Ñ¡¥Ì¹‰Õ™™•É•¹…Õ‘¥¼¤°ÕÉÉ•¹ÑQ¥µ”°€À¤ì(€€€€€€€¥˜€¡…Õ‘¥½	Õ™™•É%¹™¼¹±•¸€ø€Ä€˜˜±…ÍÑÕÉÉ•¹ÑQ¥µ”€øô…Õ‘¥½	Õ™™•É%¹™¼¹ÍÑ…ÉÐ¤ì(€€€€€€€€€Ù…ÈÙ¥‘•½Q¥µ•Ì€ô	Õ™™•É!•±Á•È¹Ñ¥µ•I…¹•ÍQ½ÉÉ…ä¡Ù¥‘•½M½ÕÉ•	Õ™™•É•¤ì(€€€€€€€€€Ù…È±…ÍÑ	Õ™™•É•‘%¹‘•à€ô	Õ™™•É!•±Á•È¹‰Õ™™•É•‘%¹™¼¡Ù¥‘•½Q¥µ•Ì°±…ÍÑÕÉÉ•¹ÑQ¥µ”°€À¤¹‰Õ™™•É•‘%¹‘•àì(€€€€€€€€€€¼¼¹Õ‘”Ý¡•¸É½ÍÍ¥¹œ¥¹Ñ¼…¹½Ñ¡•ÈÙ¥‘•¼‰Õ™™•É•É…¹”€¡¡½±”¤¸(€€€€€€€€€¥˜€¡±…ÍÑ	Õ™™•É•‘%¹‘•à€ø€´Ä€˜˜±…ÍÑ	Õ™™•É•‘%¹‘•à€ðÙ¥‘•½Q¥µ•Ì¹±•¹Ñ €´€Ä¤ì(€€€€€€€€€€€Ù…È‰Õ™™•É•‘%¹‘•à€ô	Õ™™•É!•±Á•È¹‰Õ™™•É•‘%¹™¼¡Ù¥‘•½Q¥µ•Ì°ÕÉÉ•¹ÑQ¥µ”°€À¤¹‰Õ™™•É•‘%¹‘•àì(€€€€€€€€€€€Ù…È¡½±•MÑ…ÉÐ€ôÙ¥‘•½Q¥µ•Ím±…ÍÑ	Õ™™•É•‘%¹‘•át¹•¹ì(€€€€€€€€€€€Ù…È¡½±•¹€ôÙ¥‘•½Q¥µ•Ím±…ÍÑ	Õ™™•É•‘%¹‘•à€¬€Åt¹ÍÑ…ÉÐì(€€€€€€€€€€€¥˜€ ¡‰Õ™™•É•‘%¹‘•à€ôôô€´Äñð‰Õ™™•É•‘%¹‘•à€ø±…ÍÑ	Õ™™•É•‘%¹‘•à¤€˜˜¡½±•¹€´¡½±•MÑ…ÉÐ€ð€Ä€˜˜(€€€€€€€€€€€€¼¼µ…á	Õ™™•É!½±•€µ…ä‰”Ñ½¼Íµ…±°…¹Í•ÑÑ¥¹œ¥ÐÑ¼€ÀÍ¡½Õ±¹½Ð‘¥Í…‰±”Ñ¡¥Ì™•…ÑÕÉ”(€€€€€€€€€€€ÕÉÉ•¹ÑQ¥µ”€´¡½±•MÑ…ÉÐ€ð€È¤ì(€€€€€€€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰¹Õ‘¥¹œÁ±…å¡•…Ñ¼™±ÕÍ Á¥Á•±¥¹”…™Ñ•ÈÙ¥‘•¼¡½±”¸ÕÉÉ•¹ÑQ¥µ”è€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆ¡½±”è€ˆ€¬¡½±•MÑ…ÉÐ€¬€ˆ€´ø€ˆ€¬¡½±•¹€¬€ˆ‰Õ™™•É•¥¹‘•àè€ˆ€¬‰Õ™™•É•‘%¹‘•à¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹Ý…É¸¡•ÉÉ½È¹µ•ÍÍ…”¤ì(€€€€€€€€€€€€€€¼¼5…¥Œ¹Õµ‰•ÈÑ¼™±ÕÍ Ñ¡”Á¥Á•±¥¹”Ý¥Ñ¡½ÕÐ¥¹Ñ•ÉÕÁÑ¥½¸Ñ¼…Õ‘¥¼Á±…å‰…¬è(€€€€€€€€€€€€€Ñ¡¥Ì¹µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€¬ô€À¸ÀÀÀÀÀÄì(€€€€€€€€€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•ÑA…ÉÑ¥…±É…µ•¹Ð¡ÕÉÉ•¹ÑQ¥µ”¤ñðÕ¹‘•™¥¹•ì(€€€€€€€€€€€€€Ù…È‰Õ™™•É%¹™¼€ô	Õ™™•É!•±Á•È¹‰Õ™™•É%¹™¼¡Ñ¡¥Ì¹µ•‘¥„°ÕÉÉ•¹ÑQ¥µ”°€À¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹	UI}M-}=YI}!=1°(€€€€€€€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€€€€€€€É•…Í½¸è•ÉÉ½È¹µ•ÍÍ…”°(€€€€€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€€€€€‰Õ™™•Èè‰Õ™™•É%¹™¼¹±•¸°(€€€€€€€€€€€€€€€‰Õ™™•É%¹™¼è‰Õ™™•É%¹™¼(€€€€€€€€€€€€€ô¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨•Ñ•ÑÌ…¹…ÑÑ•µÁÑÌÑ¼™¥à­¹½Ý¸‰Õ™™•ÈÍÑ…±±¥¹œ¥ÍÍÕ•Ì¸(€€€€€¨Á…É…´‰Õ™™•É%¹™¼€´Q¡”ÁÉ½Á•ÉÑ¥•Ì½˜Ñ¡”ÕÉÉ•¹Ð‰Õ™™•È¸(€€€€€¨Á…É…´ÍÑ…±±•‘ÕÉ…Ñ¥½¹5Ì€´Q¡”…µ½Õ¹Ð½˜Ñ¥µ”!±Ì¹©Ì¡…Ì‰••¸ÍÑ…±±¥¹œ™½È¸(€€€€€¨ÁÉ¥Ù…Ñ”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹}ÑÉå¥á	Õ™™•ÉMÑ…±°€ô™Õ¹Ñ¥½¸}ÑÉå¥á	Õ™™•ÉMÑ…±°¡‰Õ™™•É%¹™¼°ÍÑ…±±•‘ÕÉ…Ñ¥½¹5Ì¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¡±ÌÌ°}Ñ¡¥Ì‘¡±ÌÐì(€€€€€Ù…È™É…µ•¹ÑQÉ…­•È€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•È°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€Ù…È½¹™¥œ€ô€¡}Ñ¡¥Ì‘¡±ÌÌ€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±ÌÌ¹½¹™¥œì(€€€€€¥˜€ …µ•‘¥„ñð€…™É…µ•¹ÑQÉ…­•Èñð€…½¹™¥œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô€¡}Ñ¡¥Ì‘¡±ÌÐ€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±ÌÐ¹±…Ñ•ÍÑ1•Ù•±•Ñ…¥±Ìì(€€€€€Ù…ÈÁ…ÉÑ¥…°€ô™É…µ•¹ÑQÉ…­•È¹•ÑA…ÉÑ¥…±É…µ•¹Ð¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€¥˜€¡Á…ÉÑ¥…°ñð±•Ù•±•Ñ…¥±Ì€„ô¹Õ±°€˜˜±•Ù•±•Ñ…¥±Ì¹±¥Ù”€˜˜ÕÉÉ•¹ÑQ¥µ”€ð±•Ù•±•Ñ…¥±Ì¹™É…µ•¹ÑMÑ…ÉÐ¤ì(€€€€€€€€¼¼QÉäÑ¼Í­¥À½Ù•ÈÑ¡”‰Õ™™•È¡½±”…ÕÍ•‰ä„Á…ÉÑ¥…°™É…µ•¹Ð(€€€€€€€€¼¼Q¡¥Ìµ•Ñ¡½¥Í¸Ð±¥µ¥Ñ•‰äÑ¡”Í¥é”½˜Ñ¡”…À‰•ÑÝ••¸‰Õ™™•É•É…¹•Ì(€€€€€€€Ù…ÈÑ…É•ÑQ¥µ”€ôÑ¡¥Ì¹}ÑÉåM­¥Á	Õ™™•É!½±”¡Á…ÉÑ¥…°¤ì(€€€€€€€€¼¼Ý”É•ÑÕÉ¸¡•É”¥¸Ñ¡¥Ì…Í”°µ•…¹¥¹œ(€€€€€€€€¼¼Ñ¡”‰É…¹ ‰•±½Ü½¹±ä•á•ÕÑ•ÌÝ¡•¸Ý”¡…Ù•¸ÐÍ••­•Ñ¼„¹•ÜÁ½Í¥Ñ¥½¸(€€€€€€€¥˜€¡Ñ…É•ÑQ¥µ”ñð€…Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¼¥˜Ý”¡…Ù•¸Ð¡…Ñ¼Í­¥À½Ù•È„‰Õ™™•È¡½±”½˜„Á…ÉÑ¥…°™É…µ•¹Ð(€€€€€€¼¼Ý”µ…ä©ÕÍÐ¡…Ù”Ñ¼€‰¹Õ‘”ˆÑ¡”Á±…å±¥ÍÐ…ÌÑ¡”‰É½ÝÍ•È‘•½‘¥¹œ½É•¹‘•É¥¹œ•¹¥¹”(€€€€€€¼¼¹••‘ÌÑ¼É½ÍÌÍ½µ”Í½ÉÐ½˜Ñ¡É•Í¡½±½Ù•É¥¹œ…±°Í½ÕÉ”µ‰Õ™™•ÉÌ½¹Ñ•¹Ð(€€€€€€¼¼Ñ¼ÍÑ…ÉÐÁ±…å¥¹œÁÉ½Á•É±ä¸(€€€€€Ù…È‰Õ™™•É•‘I…¹•Ì€ô‰Õ™™•É%¹™¼¹‰Õ™™•É•ì(€€€€€¥˜€ ¡‰Õ™™•É•‘I…¹•Ì€˜˜‰Õ™™•É•‘I…¹•Ì¹±•¹Ñ €ø€Ä€˜˜‰Õ™™•É%¹™¼¹±•¸€ø½¹™¥œ¹µ…á	Õ™™•É!½±”ñð‰Õ™™•É%¹™¼¹¹•áÑMÑ…ÉÐ€˜˜‰Õ™™•É%¹™¼¹¹•áÑMÑ…ÉÐ€´ÕÉÉ•¹ÑQ¥µ”€ð½¹™¥œ¹µ…á	Õ™™•É!½±”¤€˜˜€¡ÍÑ…±±•‘ÕÉ…Ñ¥½¹5Ì€ø½¹™¥œ¹¡¥¡	Õ™™•É]…Ñ¡‘½A•É¥½€¨€ÄÀÀÀñðÑ¡¥Ì¹Ý…¥Ñ¥¹œ¤¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ QÉå¥¹œÑ¼¹Õ‘”Á±…å¡•…½Ù•È‰Õ™™•Èµ¡½±”œ¤ì(€€€€€€€€¼¼QÉäÑ¼¹Õ‘”ÕÉÉ•¹ÑQ¥µ”½Ù•È„‰Õ™™•È¡½±”¥˜Ý”Ù”‰••¸ÍÑ…±±¥¹œ™½ÈÑ¡”½¹™¥ÕÉ•…µ½Õ¹Ð½˜Í•½¹‘Ì(€€€€€€€€¼¼]”½¹±äÑÉäÑ¼©ÕµÀÑ¡”¡½±”¥˜¥ÐÌÕ¹‘•ÈÑ¡”½¹™¥ÕÉ•Í¥é”(€€€€€€€Ñ¡¥Ì¹}ÑÉå9Õ‘•	Õ™™•È¡‰Õ™™•É%¹™¼¤ì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨QÉ¥•ÉÌ„	UI}MQ11}II=H•Ù•¹Ð°‰ÕÐ½¹±ä½¹”Á•ÈÍÑ…±°Á•É¥½¸(€€€€€¨Á…É…´‰Õ™™•É1•¸€´Q¡”Á±…å¡•…‘¥ÍÑ…¹”™É½´Ñ¡”•¹½˜Ñ¡”ÕÉÉ•¹Ð‰Õ™™•ÈÍ•µ•¹Ð¸(€€€€€¨ÁÉ¥Ù…Ñ”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹}É•Á½ÉÑMÑ…±°€ô™Õ¹Ñ¥½¸}É•Á½ÉÑMÑ…±°¡‰Õ™™•É%¹™¼¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ì°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„°(€€€€€€€ÍÑ…±±I•Á½ÉÑ•€ôÑ¡¥Ì¹ÍÑ…±±I•Á½ÉÑ•°(€€€€€€€ÍÑ…±±•€ôÑ¡¥Ì¹ÍÑ…±±•ì(€€€€€¥˜€ …ÍÑ…±±I•Á½ÉÑ•€˜˜ÍÑ…±±•€„ôô¹Õ±°€˜˜µ•‘¥„€˜˜¡±Ì¤ì(€€€€€€€€¼¼I•Á½ÉÐÍÑ…±±••ÉÉ½È½¹”(€€€€€€€Ñ¡¥Ì¹ÍÑ…±±I•Á½ÉÑ•€ôÑÉÕ”ì(€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰A±…å‰…¬ÍÑ…±±¥¹œ…Ð ˆ€¬µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€¬€ˆ‘Õ”Ñ¼±½Ü‰Õ™™•È€ ˆ€¬ÍÑÉ¥¹¥™ä¡‰Õ™™•É%¹™¼¤€¬€ˆ¤ˆ¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸¡•ÉÉ½È¹µ•ÍÍ…”¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹	UI}MQ11}II=H°(€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€‰Õ™™•Èè‰Õ™™•É%¹™¼¹±•¸°(€€€€€€€€€‰Õ™™•É%¹™¼è‰Õ™™•É%¹™¼°(€€€€€€€€€ÍÑ…±±•èì(€€€€€€€€€€€ÍÑ…ÉÐèÍÑ…±±•(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨ÑÑ•µÁÑÌÑ¼™¥à‰Õ™™•ÈÍÑ…±±Ì‰ä©ÕµÁ¥¹œ½Ù•È­¹½Ý¸…ÁÌ…ÕÍ•‰äÁ…ÉÑ¥…°™É…µ•¹ÑÌ(€€€€€¨Á…É…´Á…ÉÑ¥…°€´Q¡”Á…ÉÑ¥…°™É…µ•¹Ð™½Õ¹…ÐÑ¡”ÕÉÉ•¹ÐÑ¥µ”€¡Ý¡•É”Á±…å‰…¬¥ÌÍÑ…±±¥¹œ¤¸(€€€€€¨ÁÉ¥Ù…Ñ”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹}ÑÉåM­¥Á	Õ™™•É!½±”€ô™Õ¹Ñ¥½¸}ÑÉåM­¥Á	Õ™™•É!½±”¡Á…ÉÑ¥…°¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¡±ÌÔì(€€€€€Ù…È™É…µ•¹ÑQÉ…­•È€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•È°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€Ù…È½¹™¥œ€ô€¡}Ñ¡¥Ì‘¡±ÌÔ€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±ÌÔ¹½¹™¥œì(€€€€€¥˜€ …µ•‘¥„ñð€…™É…µ•¹ÑQÉ…­•Èñð€…½¹™¥œ¤ì(€€€€€€€É•ÑÕÉ¸€Àì(€€€€€ô((€€€€€€¼¼¡•¬¥˜ÕÉÉ•¹ÑQ¥µ”¥Ì‰•ÑÝ••¸Õ¹‰Õ™™•É•É•¥½¹Ì½˜Á…ÉÑ¥…°™É…µ•¹ÑÌ(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ù…È‰Õ™™•É%¹™¼€ô	Õ™™•É!•±Á•È¹‰Õ™™•É%¹™¼¡µ•‘¥„°ÕÉÉ•¹ÑQ¥µ”°€À¤ì(€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ôÕÉÉ•¹ÑQ¥µ”€ð‰Õ™™•É%¹™¼¹ÍÑ…ÉÐ€ü‰Õ™™•É%¹™¼¹ÍÑ…ÉÐ€è‰Õ™™•É%¹™¼¹¹•áÑMÑ…ÉÐì(€€€€€¥˜€¡ÍÑ…ÉÑQ¥µ”€˜˜Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€Ù…È‰Õ™™•ÉMÑ…ÉÙ•€ô‰Õ™™•É%¹™¼¹±•¸€ðô½¹™¥œ¹µ…á	Õ™™•É!½±”ì(€€€€€€€Ù…ÈÝ…¥Ñ¥¹œ€ô‰Õ™™•É%¹™¼¹±•¸€ø€À€˜˜‰Õ™™•É%¹™¼¹±•¸€ð€Ä€˜˜µ•‘¥„¹É•…‘åMÑ…Ñ”€ð€Ìì(€€€€€€€Ù…È…Á1•¹Ñ €ôÍÑ…ÉÑQ¥µ”€´ÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€¥˜€¡…Á1•¹Ñ €ø€À€˜˜€¡‰Õ™™•ÉMÑ…ÉÙ•ñðÝ…¥Ñ¥¹œ¤¤ì(€€€€€€€€€€¼¼=¹±ä…±±½Ü±…É”…ÁÌÑ¼‰”Í­¥ÁÁ•¥˜¥Ð¥Ì„ÍÑ…ÉÐ…À°½È…±°™É…µ•¹ÑÌ¥¸Í­¥ÀÉ…¹”…É”Á…ÉÑ¥…°(€€€€€€€€€¥˜€¡…Á1•¹Ñ €ø½¹™¥œ¹µ…á	Õ™™•É!½±”¤ì(€€€€€€€€€€€Ù…ÈÍÑ…ÉÑ…À€ô™…±Í”ì(€€€€€€€€€€€¥˜€¡ÕÉÉ•¹ÑQ¥µ”€ôôô€À¤ì(€€€€€€€€€€€€€Ù…ÈÍÑ…ÉÑÉ…œ€ô™É…µ•¹ÑQÉ…­•È¹•ÑÁÁ•¹‘•‘É…œ À°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€€€€€€€¥˜€¡ÍÑ…ÉÑÉ…œ€˜˜ÍÑ…ÉÑQ¥µ”€ðÍÑ…ÉÑÉ…œ¹•¹¤ì(€€€€€€€€€€€€€€€ÍÑ…ÉÑ…À€ôÑÉÕ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€ …ÍÑ…ÉÑ…À¤ì(€€€€€€€€€€€€€Ù…ÈÍÑ…ÉÑAÉ½Ù¥Í¥½¹•€ôÁ…ÉÑ¥…°ñð™É…µ•¹ÑQÉ…­•È¹•ÑÁÁ•¹‘•‘É…œ¡ÕÉÉ•¹ÑQ¥µ”°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€€€€€€€¥˜€¡ÍÑ…ÉÑAÉ½Ù¥Í¥½¹•¤ì(€€€€€€€€€€€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì‘±½…‘1•Ù•±=ˆì(€€€€€€€€€€€€€€€€¼¼¼¹½ÐÍ••¬Ý¡•¸Í•±•Ñ•Ù…É¥…¹ÐÁ±…å±¥ÍÐ¥ÌÕ¹±½…‘•(€€€€€€€€€€€€€€€¥˜€ „ ¡}Ñ¡¥Ì‘¡±Ì‘±½…‘1•Ù•±=ˆ€ôÑ¡¥Ì¹¡±Ì¹±½…‘1•Ù•±=‰¨¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘¡±Ì‘±½…‘1•Ù•±=ˆ¹‘•Ñ…¥±Ì¤¤ì(€€€€€€€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€€¼¼¼¹½ÐÍ••¬Ý¡•¸É•ÅÕ¥É•™É…µ•¹ÑÌ…É”¥¹™±¥¡Ð½È…ÁÁ•¹‘¥¹œ(€€€€€€€€€€€€€€€Ù…È¥¹±¥¡Ñ•Á•¹‘•¹ä€ô•Ñ%¹±¥¡Ñ•Á•¹‘•¹ä¡Ñ¡¥Ì¹¡±Ì¹¥¹±¥¡ÑÉ…µ•¹ÑÌ°ÍÑ…ÉÑQ¥µ”¤ì(€€€€€€€€€€€€€€€¥˜€¡¥¹±¥¡Ñ•Á•¹‘•¹ä¤ì(€€€€€€€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€€¼¼¼¹½ÐÍ••¬¥˜Ý”…¸ÐÝ…±¬ÑÉ…­•™É…µ•¹ÑÌÑ¼•¹½˜…À(€€€€€€€€€€€€€€€Ù…Èµ½É•Q½1½…€ô™…±Í”ì(€€€€€€€€€€€€€€€Ù…ÈÁ½Ì€ôÍÑ…ÉÑAÉ½Ù¥Í¥½¹•¹•¹ì(€€€€€€€€€€€€€€€Ý¡¥±”€¡Á½Ì€ðÍÑ…ÉÑQ¥µ”¤ì(€€€€€€€€€€€€€€€€€Ù…ÈÁÉ½Ù¥Í¥½¹•€ô™É…µ•¹ÑQÉ…­•È¹•ÑA…ÉÑ¥…±É…µ•¹Ð¡Á½Ì¤ì(€€€€€€€€€€€€€€€€€¥˜€¡ÁÉ½Ù¥Í¥½¹•¤ì(€€€€€€€€€€€€€€€€€€€Á½Ì€¬ôÁÉ½Ù¥Í¥½¹•¹‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€€€€€€€µ½É•Q½1½…€ôÑÉÕ”ì(€€€€€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€€¥˜€¡µ½É•Q½1½…¤ì(€€€€€€€€€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€Ù…ÈÑ…É•ÑQ¥µ”€ô5…Ñ ¹µ…à¡ÍÑ…ÉÑQ¥µ”€¬M-%A}	UI}I9}MQIP°ÕÉÉ•¹ÑQ¥µ”€¬M-%A}	UI}!=1}MQA}M=9L¤ì(€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰Í­¥ÁÁ¥¹œ¡½±”°…‘©ÕÍÑ¥¹œÕÉÉ•¹ÑQ¥µ”™É½´€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆÑ¼€ˆ€¬Ñ…É•ÑQ¥µ”¤ì(€€€€€€€€€Ñ¡¥Ì¹µ½Ù•€ôÑÉÕ”ì(€€€€€€€€€µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ôÑ…É•ÑQ¥µ”ì(€€€€€€€€€¥˜€ „¡Á…ÉÑ¥…°€„ô¹Õ±°€˜˜Á…ÉÑ¥…°¹…À¤¤ì(€€€€€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰™É…µ•¹Ð±½…‘•Ý¥Ñ ‰Õ™™•È¡½±•Ì°Í••­¥¹œ™É½´€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆÑ¼€ˆ€¬Ñ…É•ÑQ¥µ”¤ì(€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹	UI}M-}=YI}!=1°(€€€€€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€€€€€É•…Í½¸è•ÉÉ½È¹µ•ÍÍ…”°(€€€€€€€€€€€€€™É…œèÁ…ÉÑ¥…°ñðÕ¹‘•™¥¹•°(€€€€€€€€€€€€€‰Õ™™•Èè‰Õ™™•É%¹™¼¹±•¸°(€€€€€€€€€€€€€‰Õ™™•É%¹™¼è‰Õ™™•É%¹™¼(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸Ñ…É•ÑQ¥µ”ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸€Àì(€€€ô((€€€€¼¨¨(€€€€€¨ÑÑ•µÁÑÌÑ¼™¥à‰Õ™™•ÈÍÑ…±±Ì‰ä…‘Ù…¹¥¹œÑ¡”µ•‘¥…±•µ•¹ÐÌÕÉÉ•¹ÐÑ¥µ”‰ä„Íµ…±°…µ½Õ¹Ð¸(€€€€€¨ÁÉ¥Ù…Ñ”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹}ÑÉå9Õ‘•	Õ™™•È€ô™Õ¹Ñ¥½¸}ÑÉå9Õ‘•	Õ™™•È¡‰Õ™™•É%¹™¼¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ì°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„°(€€€€€€€¹Õ‘•I•ÑÉä€ôÑ¡¥Ì¹¹Õ‘•I•ÑÉäì(€€€€€Ù…È½¹™¥œ€ô¡±Ì€ôô¹Õ±°€üÙ½¥€À€è¡±Ì¹½¹™¥œì(€€€€€¥˜€ …µ•‘¥„ñð€…½¹™¥œ¤ì(€€€€€€€É•ÑÕÉ¸€Àì(€€€€€ô(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ñ¡¥Ì¹¹Õ‘•I•ÑÉä¬¬ì(€€€€€¥˜€¡¹Õ‘•I•ÑÉä€ð½¹™¥œ¹¹Õ‘•5…áI•ÑÉä¤ì(€€€€€€€Ù…ÈÑ…É•ÑQ¥µ”€ôÕÉÉ•¹ÑQ¥µ”€¬€¡¹Õ‘•I•ÑÉä€¬€Ä¤€¨½¹™¥œ¹¹Õ‘•=™™Í•Ðì(€€€€€€€€¼¼Á±…å‰…¬ÍÑ…±±•¥¸‰Õ™™•É•…É•„€¸¸¸±•ÐÌ¹Õ‘”ÕÉÉ•¹ÑQ¥µ”Ñ¼ÑÉäÑ¼½Ù•É½µ”Ñ¡¥Ì(€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰9Õ‘¥¹œ€ÕÉÉ•¹ÑQ¥µ”œ™É½´€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆÑ¼€ˆ€¬Ñ…É•ÑQ¥µ”¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸¡•ÉÉ½È¹µ•ÍÍ…”¤ì(€€€€€€€µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ôÑ…É•ÑQ¥µ”ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹	UI}9U}=9}MQ10°(€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€‰Õ™™•Èè‰Õ™™•É%¹™¼¹±•¸°(€€€€€€€€€‰Õ™™•É%¹™¼è‰Õ™™•É%¹™¼(€€€€€€€ô¤ì(€€€€€ô•±Í”ì(€€€€€€€Ù…È}•ÉÉ½È€ô¹•ÜÉÉ½È ‰A±…å¡•…ÍÑ¥±°¹½Ðµ½Ù¥¹œÝ¡¥±”•¹½Õ ‘…Ñ„‰Õ™™•É• ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆ…™Ñ•È€ˆ€¬½¹™¥œ¹¹Õ‘•5…áI•ÑÉä€¬€ˆ¹Õ‘•Ìˆ¤ì(€€€€€€€Ñ¡¥Ì¹•ÉÉ½È¡}•ÉÉ½È¹µ•ÍÍ…”¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹	UI}MQ11}II=H°(€€€€€€€€€•ÉÉ½Èè}•ÉÉ½È°(€€€€€€€€€™…Ñ…°èÑÉÕ”°(€€€€€€€€€‰Õ™™•Èè‰Õ™™•É%¹™¼¹±•¸°(€€€€€€€€€‰Õ™™•É%¹™¼è‰Õ™™•É%¹™¼(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡…Á½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰¡…Í	Õ™™•É•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸=‰©•Ð¹­•åÌ¡Ñ¡¥Ì¹‰Õ™™•É•¤¹±•¹Ñ €ø€Àì(€€€€€ô(€€€õt¤ì(€ô¡Q…Í­1½½À¤ì(€™Õ¹Ñ¥½¸•Ñ%¹±¥¡Ñ•Á•¹‘•¹ä¡¥¹±¥¡ÑÉ…µ•¹ÑÌ°ÕÉÉ•¹ÑQ¥µ”¤ì(€€€Ù…Èµ…¥¸€ô¥¹±¥¡Ð¡¥¹±¥¡ÑÉ…µ•¹ÑÌ¹µ…¥¸¤ì(€€€¥˜€¡µ…¥¸€˜˜µ…¥¸¹ÍÑ…ÉÐ€ðôÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€É•ÑÕÉ¸µ…¥¸ì(€€€ô(€€€Ù…È…Õ‘¥¼€ô¥¹±¥¡Ð¡¥¹±¥¡ÑÉ…µ•¹ÑÌ¹…Õ‘¥¼¤ì(€€€¥˜€¡…Õ‘¥¼€˜˜…Õ‘¥¼¹ÍÑ…ÉÐ€ðôÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€É•ÑÕÉ¸…Õ‘¥¼ì(€€€ô(€€€É•ÑÕÉ¸¹Õ±°ì(€ô(€™Õ¹Ñ¥½¸¥¹±¥¡Ð¡¥¹±¥¡Ñ…Ñ„¤ì(€€€¥˜€ …¥¹±¥¡Ñ…Ñ„¤ì(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô(€€€ÍÝ¥Ñ €¡¥¹±¥¡Ñ…Ñ„¹ÍÑ…Ñ”¤ì(€€€€€…Í”MÑ…Ñ”¹%1è(€€€€€…Í”MÑ…Ñ”¹MQ=AAè(€€€€€…Í”MÑ…Ñ”¹9è(€€€€€…Í”MÑ…Ñ”¹II=Hè(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô(€€€É•ÑÕÉ¸¥¹±¥¡Ñ…Ñ„¹™É…œì(€ô((€Ù…È5%9}U}UIQ%=8€ô€À¸ÈÔì(€™Õ¹Ñ¥½¸•ÑÕ•±…ÍÌ ¤ì(€€€¥˜€¡ÑåÁ•½˜Í•±˜€ôôô€Õ¹‘•™¥¹•œ¤É•ÑÕÉ¸Õ¹‘•™¥¹•ì(€€€É•ÑÕÉ¸Í•±˜¹YQQÕ”ñðÍ•±˜¹Q•áÑQÉ…­Õ”ì(€ô(€™Õ¹Ñ¥½¸É•…Ñ•Õ•]¥Ñ¡…Ñ…¥•±‘Ì¡Õ”°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°‘…Ñ„°ÑåÁ”¤ì(€€€Ù…ÈÕ”€ô¹•ÜÕ”¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°€œœ¤ì(€€€ÑÉäì(€€€€€Õ”¹Ù…±Õ”€ô‘…Ñ„ì(€€€€€¥˜€¡ÑåÁ”¤ì(€€€€€€€Õ”¹ÑåÁ”€ôÑåÁ”ì(€€€€€ô(€€€ô…Ñ €¡”¤ì(€€€€€Õ”€ô¹•ÜÕ”¡ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°ÍÑÉ¥¹¥™ä¡ÑåÁ”€ü}½‰©•ÑMÁÉ•…È¡ì(€€€€€€€ÑåÁ”èÑåÁ”(€€€€€ô°‘…Ñ„¤€è‘…Ñ„¤¤ì(€€€ô(€€€É•ÑÕÉ¸Õ”ì(€ô((€€¼¼YQQÕ”±…Ñ•ÍÐ‘É…™Ð…±±½ÝÌ…¸¥¹™¥¹¥Ñ”‘ÕÉ…Ñ¥½¸°™…±±‰…¬(€€¼¼Ñ¼5a}Y1U¥˜¹••ÍÍ…Éä(€Ù…È5a}U}9Q%5€ô™Õ¹Ñ¥½¸€ ¤ì(€€€Ù…ÈÕ”€ô•ÑÕ•±…ÍÌ ¤ì(€€€ÑÉäì(€€€€€Õ”€˜˜¹•ÜÕ” À°9Õµ‰•È¹A=M%Q%Y}%9%9%Qd°€œœ¤ì(€€€ô…Ñ €¡”¤ì(€€€€€É•ÑÕÉ¸9Õµ‰•È¹5a}Y1Uì(€€€ô(€€€É•ÑÕÉ¸9Õµ‰•È¹A=M%Q%Y}%9%9%Qdì(€ô ¤ì(€™Õ¹Ñ¥½¸¡•áQ½ÉÉ…å	Õ™™•È¡ÍÑÈ¤ì(€€€É•ÑÕÉ¸U¥¹ÐáÉÉ…ä¹™É½´¡ÍÑÈ¹É•Á±…” ½xÁà¼°€œœ¤¹É•Á±…” ¼¡mq‘„µ™µuìÉô¤€ü½œ°€œÁàÄ€œ¤¹É•Á±…” ¼€¬¼°€œœ¤¹ÍÁ±¥Ð œ€œ¤¤¹‰Õ™™•Èì(€ô(€Ù…È%ÍQÉ…­½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸%ÍQÉ…­½¹ÑÉ½±±•È¡¡±Ì¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ñ¡¥Ì¹¡±Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôíôì(€€€€€Ñ¡¥Ì¹É•µ½Ù•Õ•Ì€ôÑÉÕ”ì(€€€€€Ñ¡¥Ì¹½¹Ù•¹ÑÕ•¹Ñ•È€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€¥˜€ …}Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹Y9Q}U}9QH°íô¤ì(€€€€€ôì(€€€€€Ñ¡¥Ì¹¡±Ì€ô¡±Ìì(€€€€€Ñ¡¥Ì¹}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô%ÍQÉ…­½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôíôì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹¡±Ì€ôÑ¡¥Ì¹½¹Ù•¹ÑÕ•¹Ñ•È€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!%9°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}AIM%9}5QQ°Ñ¡¥Ì¹½¹É…A…ÉÍ¥¹5•Ñ…‘…Ñ„°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}UAQ°Ñ¡¥Ì¹½¹1•Ù•±UÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}AQM}UAQ°Ñ¡¥Ì¹½¹1•Ù•±AÑÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!%9°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}AIM%9}5QQ°Ñ¡¥Ì¹½¹É…A…ÉÍ¥¹5•Ñ…‘…Ñ„°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}1UM!%9°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}UAQ°Ñ¡¥Ì¹½¹1•Ù•±UÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}AQM}UAQ°Ñ¡¥Ì¹½¹1•Ù•±AÑÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€ôì(€€€€¼¼‘%Ìµ•Ñ…Ñ…‘…Ñ„Ñ•áÐÑÉ…¬¸(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}‘…Ñ„‘½Ù•ÉÉ¥‘•Ìì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€¥˜€  ¡}‘…Ñ„‘½Ù•ÉÉ¥‘•Ì€ô‘…Ñ„¹½Ù•ÉÉ¥‘•Ì¤€ôô¹Õ±°€üÙ½¥€À€è}‘…Ñ„‘½Ù•ÉÉ¥‘•Ì¹Õ•I•µ½Ù…°¤€ôôô™…±Í”¤ì(€€€€€€€Ñ¡¥Ì¹É•µ½Ù•Õ•Ì€ô™…±Í”ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡•€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡• ¤ì(€€€€€Ù…È‘•Ñ…¥±Ì€ôÑ¡¥Ì¹¡±Ì¹±…Ñ•ÍÑ1•Ù•±•Ñ…¥±Ìì(€€€€€¥˜€¡‘•Ñ…¥±Ì¤ì(€€€€€€€Ñ¡¥Ì¹ÕÁ‘…Ñ•…Ñ•I…¹•Õ•Ì¡‘•Ñ…¥±Ì¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ù…ÈÑÉ…¹Í™•ÉÉ¥¹5•‘¥„€ô€„…‘…Ñ„¹ÑÉ…¹Í™•É5•‘¥„ì(€€€€€¥˜€¡ÑÉ…¹Í™•ÉÉ¥¹5•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹¥ÍQÉ…¬¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹É•µ½Ù•Õ•Ì¤ì(€€€€€€€€€±•…ÉÕÉÉ•¹ÑÕ•Ì¡Ñ¡¥Ì¹¥ÍQÉ…¬°Ñ¡¥Ì¹½¹Ù•¹ÑÕ•¹Ñ•È¤ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬€ô¹Õ±°ì(€€€€€ô(€€€€€Ñ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôíôì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€Ñ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôíôì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•QÉ…¬€ô™Õ¹Ñ¥½¸É•…Ñ•QÉ…¬¡µ•‘¥„¤ì(€€€€€Ù…ÈÑÉ…¬€ôÑ¡¥Ì¹•Ñ%ÍQÉ…¬¡µ•‘¥„¹Ñ•áÑQÉ…­Ì¤ì(€€€€€ÑÉ…¬¹µ½‘”€ô€¡¥‘‘•¸œì(€€€€€É•ÑÕÉ¸ÑÉ…¬ì(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ%ÍQÉ…¬€ô™Õ¹Ñ¥½¸•Ñ%ÍQÉ…¬¡Ñ•áÑQÉ…­Ì¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ•áÑQÉ…­Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…ÈÑ•áÑQÉ…¬€ôÑ•áÑQÉ…­Ím¥tì(€€€€€€€¥˜€¡Ñ•áÑQÉ…¬¹­¥¹€ôôô€µ•Ñ…‘…Ñ„œ€˜˜Ñ•áÑQÉ…¬¹±…‰•°€ôôô€¥Ìœ¤ì(€€€€€€€€€€¼¼Í•¹€…‘‘ÑÉ…¬œÝ¡•¸É•ÕÍ¥¹œÑ¡”Ñ•áÑQÉ…¬™½Èµ•Ñ…‘…Ñ„°(€€€€€€€€€€¼¼Í…µ”…ÌÝ¡…ÐÝ”‘¼™½È…ÁÑ¥½¹Ì(€€€€€€€€€Í•¹‘‘‘QÉ…­Ù•¹Ð¡Ñ•áÑQÉ…¬°Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ•áÑQÉ…¬ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹µ•‘¥„¹…‘‘Q•áÑQÉ…¬ µ•Ñ…‘…Ñ„œ°€¥Ìœ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…A…ÉÍ¥¹5•Ñ…‘…Ñ„€ô™Õ¹Ñ¥½¸½¹É…A…ÉÍ¥¹5•Ñ…‘…Ñ„¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œ°(€€€€€€€•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ì€ô}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ¹•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ì°(€€€€€€€•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ì€ô}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ¹•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ìì(€€€€€¥˜€ …•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ì€˜˜€…•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÍ…µÁ±•Ì€ô‘…Ñ„¹Í…µÁ±•Ìì((€€€€€€¼¼É•…Ñ”ÑÉ…¬‘å¹…µ¥…±±ä(€€€€€¥˜€ …Ñ¡¥Ì¹¥ÍQÉ…¬¤ì(€€€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬€ôÑ¡¥Ì¹É•…Ñ•QÉ…¬¡Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€ô(€€€€€Ù…ÈÕ”€ô•ÑÕ•±…ÍÌ ¤ì(€€€€€¥˜€ …Õ”¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÍ…µÁ±•Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ù…ÈÑåÁ”€ôÍ…µÁ±•Ím¥t¹ÑåÁ”ì(€€€€€€€¥˜€¡ÑåÁ”€ôôô5•Ñ…‘…Ñ…M¡•µ„¹•µÍœ€˜˜€…•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ìñð€…•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ì¤ì(€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€ô(€€€€€€€Ù…È™É…µ•Ì€ô•Ñ%ÍÉ…µ•Ì¡Í…µÁ±•Ím¥t¹‘…Ñ„¤ì(€€€€€€€¥˜€¡™É…µ•Ì¤ì(€€€€€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ôÍ…µÁ±•Ím¥t¹ÁÑÌì(€€€€€€€€€Ù…È•¹‘Q¥µ”€ôÍÑ…ÉÑQ¥µ”€¬Í…µÁ±•Ím¥t¹‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€¥˜€¡•¹‘Q¥µ”€ø5a}U}9Q%5¤ì(€€€€€€€€€€€•¹‘Q¥µ”€ô5a}U}9Q%5ì(€€€€€€€€€ô(€€€€€€€€€Ù…ÈÑ¥µ•¥™˜€ô•¹‘Q¥µ”€´ÍÑ…ÉÑQ¥µ”ì(€€€€€€€€€¥˜€¡Ñ¥µ•¥™˜€ðô€À¤ì(€€€€€€€€€€€•¹‘Q¥µ”€ôÍÑ…ÉÑQ¥µ”€¬5%9}U}UIQ%=8ì(€€€€€€€€€ô(€€€€€€€€€™½È€¡Ù…È¨€ô€Àì¨€ð™É…µ•Ì¹±•¹Ñ ì¨¬¬¤ì(€€€€€€€€€€€Ù…È™É…µ”€ô™É…µ•Ím©tì(€€€€€€€€€€€€¼¼M…™…É¤‘½•Í¸ÐÁÕÐÑ¡”Ñ¥µ•ÍÑ…µÀ™É…µ”¥¸Ñ¡”Q•áÑQÉ…¬(€€€€€€€€€€€¥˜€ …¥Í%ÍQ¥µ•ÍÑ…µÁÉ…µ”¡™É…µ”¤¤ì(€€€€€€€€€€€€€€¼¼…‘„‰½Õ¹‘ÌÑ¼…¹äÕ¹‰½Õ¹‘•Õ•Ì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÕÁ‘…Ñ•%ÍÕ•¹‘Ì¡ÍÑ…ÉÑQ¥µ”°ÑåÁ”¤ì(€€€€€€€€€€€€€Ù…ÈÕ”€ôÉ•…Ñ•Õ•]¥Ñ¡…Ñ…¥•±‘Ì¡Õ”°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°™É…µ”°ÑåÁ”¤ì(€€€€€€€€€€€€€¥˜€¡Õ”¤ì(€€€€€€€€€€€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬¹…‘‘Õ”¡Õ”¤ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹ÕÁ‘…Ñ•%ÍÕ•¹‘Ì€ô™Õ¹Ñ¥½¸ÕÁ‘…Ñ•%ÍÕ•¹‘Ì¡ÍÑ…ÉÑQ¥µ”°ÑåÁ”¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¥ÍQÉ…¬ì(€€€€€Ù…ÈÕ•Ì€ô€¡}Ñ¡¥Ì‘¥ÍQÉ…¬€ôÑ¡¥Ì¹¥ÍQÉ…¬¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¥ÍQÉ…¬¹Õ•Ìì(€€€€€¥˜€¡Õ•Ì¤ì(€€€€€€€™½È€¡Ù…È¤€ôÕ•Ì¹±•¹Ñ ì¤´´ì¤ì(€€€€€€€€€Ù…ÈÕ”€ôÕ•Ím¥tì(€€€€€€€€€¥˜€¡Õ”¹ÑåÁ”€ôôôÑåÁ”€˜˜Õ”¹ÍÑ…ÉÑQ¥µ”€ðÍÑ…ÉÑQ¥µ”€˜˜Õ”¹•¹‘Q¥µ”€ôôô5a}U}9Q%5¤ì(€€€€€€€€€€€Õ”¹•¹‘Q¥µ”€ôÍÑ…ÉÑQ¥µ”ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•É±ÕÍ¡¥¹œ€ô™Õ¹Ñ¥½¸½¹	Õ™™•É±ÕÍ¡¥¹œ¡•Ù•¹Ð°}É•˜¤ì(€€€€€Ù…ÈÍÑ…ÉÑ=™™Í•Ð€ô}É•˜¹ÍÑ…ÉÑ=™™Í•Ð°(€€€€€€€•¹‘=™™Í•Ð€ô}É•˜¹•¹‘=™™Í•Ð°(€€€€€€€ÑåÁ”€ô}É•˜¹ÑåÁ”ì(€€€€€Ù…È¥ÍQÉ…¬€ôÑ¡¥Ì¹¥ÍQÉ…¬°(€€€€€€€¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€ …¡±Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È}¡±Ì‘½¹™¥œ€ô¡±Ì¹½¹™¥œ°(€€€€€€€•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ì€ô}¡±Ì‘½¹™¥œ¹•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ì°(€€€€€€€•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ì€ô}¡±Ì‘½¹™¥œ¹•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ìì(€€€€€¥˜€¡¥ÍQÉ…¬€˜˜€¡•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ìñð•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ì¤¤ì(€€€€€€€Ù…ÈÁÉ•‘¥…Ñ”ì(€€€€€€€¥˜€¡ÑåÁ”€ôôô€…Õ‘¥¼œ¤ì(€€€€€€€€€ÁÉ•‘¥…Ñ”€ô™Õ¹Ñ¥½¸ÁÉ•‘¥…Ñ”¡Õ”¤ì(€€€€€€€€€€€É•ÑÕÉ¸Õ”¹ÑåÁ”€ôôô5•Ñ…‘…Ñ…M¡•µ„¹…Õ‘¥½%Ì€˜˜•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•Ìì(€€€€€€€€€ôì(€€€€€€€ô•±Í”¥˜€¡ÑåÁ”€ôôô€Ù¥‘•¼œ¤ì(€€€€€€€€€ÁÉ•‘¥…Ñ”€ô™Õ¹Ñ¥½¸ÁÉ•‘¥…Ñ”¡Õ”¤ì(€€€€€€€€€€€É•ÑÕÉ¸Õ”¹ÑåÁ”€ôôô5•Ñ…‘…Ñ…M¡•µ„¹•µÍœ€˜˜•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ìì(€€€€€€€€€ôì(€€€€€€€ô•±Í”ì(€€€€€€€€€ÁÉ•‘¥…Ñ”€ô™Õ¹Ñ¥½¸ÁÉ•‘¥…Ñ”¡Õ”¤ì(€€€€€€€€€€€É•ÑÕÉ¸Õ”¹ÑåÁ”€ôôô5•Ñ…‘…Ñ…M¡•µ„¹…Õ‘¥½%Ì€˜˜•¹…‰±•%Í5•Ñ…‘…Ñ…Õ•ÌñðÕ”¹ÑåÁ”€ôôô5•Ñ…‘…Ñ…M¡•µ„¹•µÍœ€˜˜•¹…‰±•µÍ5•Ñ…‘…Ñ…Õ•Ìì(€€€€€€€€€ôì(€€€€€€€ô(€€€€€€€É•µ½Ù•Õ•Í%¹I…¹”¡¥ÍQÉ…¬°ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•Ð°ÁÉ•‘¥…Ñ”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±UÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±UÁ‘…Ñ•¡•Ù•¹Ð°}É•˜È¤ì(€€€€€Ù…È‘•Ñ…¥±Ì€ô}É•˜È¹‘•Ñ…¥±Ìì(€€€€€Ñ¡¥Ì¹ÕÁ‘…Ñ•…Ñ•I…¹•Õ•Ì¡‘•Ñ…¥±Ì°ÑÉÕ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±AÑÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±AÑÍUÁ‘…Ñ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€¡5…Ñ ¹…‰Ì¡‘…Ñ„¹‘É¥™Ð¤€ø€À¸ÀÄ¤ì(€€€€€€€Ñ¡¥Ì¹ÕÁ‘…Ñ•…Ñ•I…¹•Õ•Ì¡‘…Ñ„¹‘•Ñ…¥±Ì¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹ÕÁ‘…Ñ•…Ñ•I…¹•Õ•Ì€ô™Õ¹Ñ¥½¸ÕÁ‘…Ñ•…Ñ•I…¹•Õ•Ì¡‘•Ñ…¥±Ì°É•µ½Ù•=±‘Õ•Ì¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€¥˜€ …Ñ¡¥Ì¹µ•‘¥„ñð€…‘•Ñ…¥±Ì¹¡…ÍAÉ½É…µ…Ñ•Q¥µ”ñð€…Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹•¹…‰±•…Ñ•I…¹•5•Ñ…‘…Ñ…Õ•Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È¥ÍQÉ…¬€ôÑ¡¥Ì¹¥ÍQÉ…¬ì(€€€€€Ù…È‘…Ñ•I…¹•Ì€ô‘•Ñ…¥±Ì¹‘…Ñ•I…¹•Ìì(€€€€€Ù…È¥‘Ì€ô=‰©•Ð¹­•åÌ¡‘…Ñ•I…¹•Ì¤ì(€€€€€Ù…È‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôÑ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•ì(€€€€€€¼¼I•µ½Ù”Õ•Ì™É½´ÑÉ…¬¹½Ð™½Õ¹¥¸‘•Ñ…¥±Ì¹‘…Ñ•I…¹•Ì(€€€€€¥˜€¡¥ÍQÉ…¬€˜˜É•µ½Ù•=±‘Õ•Ì¤ì(€€€€€€€Ù…È}¥ÍQÉ…¬‘Õ•Ìì(€€€€€€€¥˜€ ¡}¥ÍQÉ…¬‘Õ•Ì€ô¥ÍQÉ…¬¹Õ•Ì¤€„ô¹Õ±°€˜˜}¥ÍQÉ…¬‘Õ•Ì¹±•¹Ñ ¤ì(€€€€€€€€€Ù…È¥‘ÍQ½I•µ½Ù”€ô=‰©•Ð¹­•åÌ¡‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•¤¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡¥¤ì(€€€€€€€€€€€É•ÑÕÉ¸€…¥‘Ì¹¥¹±Õ‘•Ì¡¥¤ì(€€€€€€€€€ô¤ì(€€€€€€€€€Ù…È}±½½À€ô™Õ¹Ñ¥½¸}±½½À ¤ì(€€€€€€€€€€€Ù…È¥€ô¥‘ÍQ½I•µ½Ù•m¥tì(€€€€€€€€€€€Ù…ÈÕ•Ì€ô‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•‘m¥‘t¹Õ•Ìì(€€€€€€€€€€€‘•±•Ñ”‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•‘m¥‘tì(€€€€€€€€€€€=‰©•Ð¹­•åÌ¡Õ•Ì¤¹™½É… ¡™Õ¹Ñ¥½¸€¡­•ä¤ì(€€€€€€€€€€€€€ÑÉäì(€€€€€€€€€€€€€€€Ù…ÈÕ”€ôÕ•Ím­•åtì(€€€€€€€€€€€€€€€Õ”¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È •¹Ñ•Èœ°}Ñ¡¥ÌÈ¹½¹Ù•¹ÑÕ•¹Ñ•È¤ì(€€€€€€€€€€€€€€€¥ÍQÉ…¬¹É•µ½Ù•Õ”¡Õ”¤ì(€€€€€€€€€€€€€ô…Ñ €¡”¤ì(€€€€€€€€€€€€€€€€¼¨¹¼µ½À€¨¼(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô¤ì(€€€€€€€€€ôì(€€€€€€€€€™½È€¡Ù…È¤€ô¥‘ÍQ½I•µ½Ù”¹±•¹Ñ ì¤´´ì¤ì(€€€€€€€€€€€}±½½À ¤ì(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôÑ¡¥Ì¹‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•€ôíôì(€€€€€€€ô(€€€€€ô(€€€€€€¼¼á¥Ð¥˜Ñ¡”Á±…å±¥ÍÐ‘½•Ì¹½Ð¡…Ù”…Ñ”I…¹•Ì½È‘½•Ì¹½Ð¡…Ù”AÉ½É…´…Ñ”Q¥µ”(€€€€€Ù…È±…ÍÑÉ…µ•¹Ð€ô‘•Ñ…¥±Ì¹™É…µ•¹ÑÍm‘•Ñ…¥±Ì¹™É…µ•¹ÑÌ¹±•¹Ñ €´€Åtì(€€€€€¥˜€¡¥‘Ì¹±•¹Ñ €ôôô€Àñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡±…ÍÑÉ…µ•¹Ð€ôô¹Õ±°€üÙ½¥€À€è±…ÍÑÉ…µ•¹Ð¹ÁÉ½É…µ…Ñ•Q¥µ”¤¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€ …Ñ¡¥Ì¹¥ÍQÉ…¬¤ì(€€€€€€€Ñ¡¥Ì¹¥ÍQÉ…¬€ôÑ¡¥Ì¹É•…Ñ•QÉ…¬¡Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€ô(€€€€€Ù…ÈÕ”€ô•ÑÕ•±…ÍÌ ¤ì(€€€€€Ù…È}±½½ÀÈ€ô™Õ¹Ñ¥½¸}±½½ÀÈ ¤ì(€€€€€€€Ù…È¥€ô¥‘Ím}¥tì(€€€€€€€Ù…È‘…Ñ•I…¹”€ô‘…Ñ•I…¹•Ím¥‘tì(€€€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ô‘…Ñ•I…¹”¹ÍÑ…ÉÑQ¥µ”ì((€€€€€€€€¼¼AÉ½•ÍÌ…Ñ•I…¹•ÌÑ¼‘•Ñ•Éµ¥¹”•¹µÑ¥µ”€¡­¹½Ý¸UIQ%=8°9µQ°½È9µ=8µ9aP¤(€€€€€€€Ù…È…ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì€ô‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•‘m¥‘tì(€€€€€€€Ù…ÈÕ•Ì€ô€¡…ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì€ôô¹Õ±°€üÙ½¥€À€è…ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì¹Õ•Ì¤ñðíôì(€€€€€€€Ù…È‘ÕÉ…Ñ¥½¹-¹½Ý¸€ô€¡…ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì€ôô¹Õ±°€üÙ½¥€À€è…ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì¹‘ÕÉ…Ñ¥½¹-¹½Ý¸¤ñð™…±Í”ì(€€€€€€€Ù…È•¹‘Q¥µ”€ô5a}U}9Q%5ì(€€€€€€€Ù…È‘ÕÉ…Ñ¥½¸€ô‘…Ñ•I…¹”¹‘ÕÉ…Ñ¥½¸°(€€€€€€€€€•¹‘…Ñ”€ô‘…Ñ•I…¹”¹•¹‘…Ñ”ì(€€€€€€€¥˜€¡•¹‘…Ñ”€˜˜‘ÕÉ…Ñ¥½¸€„ôô¹Õ±°¤ì(€€€€€€€€€•¹‘Q¥µ”€ôÍÑ…ÉÑQ¥µ”€¬‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€‘ÕÉ…Ñ¥½¹-¹½Ý¸€ôÑÉÕ”ì(€€€€€€€ô•±Í”¥˜€¡‘…Ñ•I…¹”¹•¹‘=¹9•áÐ€˜˜€…‘ÕÉ…Ñ¥½¹-¹½Ý¸¤ì(€€€€€€€€€Ù…È¹•áÑ…Ñ•I…¹•]¥Ñ¡M…µ•±…ÍÌ€ô¥‘Ì¹É•‘Õ”¡™Õ¹Ñ¥½¸€¡…¹‘¥‘…Ñ•…Ñ•I…¹”°¥¤ì(€€€€€€€€€€€¥˜€¡¥€„ôô‘…Ñ•I…¹”¹¥¤ì(€€€€€€€€€€€€€Ù…È½Ñ¡•É…Ñ•I…¹”€ô‘…Ñ•I…¹•Ím¥‘tì(€€€€€€€€€€€€€¥˜€¡½Ñ¡•É…Ñ•I…¹”¹±…ÍÌ€ôôô‘…Ñ•I…¹”¹±…ÍÌ€˜˜½Ñ¡•É…Ñ•I…¹”¹ÍÑ…ÉÑ…Ñ”€ø‘…Ñ•I…¹”¹ÍÑ…ÉÑ…Ñ”€˜˜€ ……¹‘¥‘…Ñ•…Ñ•I…¹”ñð‘…Ñ•I…¹”¹ÍÑ…ÉÑ…Ñ”€ð…¹‘¥‘…Ñ•…Ñ•I…¹”¹ÍÑ…ÉÑ…Ñ”¤¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸½Ñ¡•É…Ñ•I…¹”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€€€É•ÑÕÉ¸…¹‘¥‘…Ñ•…Ñ•I…¹”ì(€€€€€€€€€ô°¹Õ±°¤ì(€€€€€€€€€¥˜€¡¹•áÑ…Ñ•I…¹•]¥Ñ¡M…µ•±…ÍÌ¤ì(€€€€€€€€€€€•¹‘Q¥µ”€ô¹•áÑ…Ñ•I…¹•]¥Ñ¡M…µ•±…ÍÌ¹ÍÑ…ÉÑQ¥µ”ì(€€€€€€€€€€€‘ÕÉ…Ñ¥½¹-¹½Ý¸€ôÑÉÕ”ì(€€€€€€€€€ô(€€€€€€€ô((€€€€€€€€¼¼É•…Ñ”Q•áÑQÉ…¬Õ•Ì™½È•… 5•Ñ…‘…Ñ…É½ÕÀ%Ñ•´€¡Í•±•Ð…Ñ•I…¹”…ÑÑÉ¥‰ÕÑ”¤(€€€€€€€€¼¼Q¡¥Ì¥ÌÑ¼•µÕ±…Ñ”M…™…É¤!1LÁ±…å‰…¬¡…¹‘±¥¹œ½˜…Ñ•I…¹”Ñ…Ì(€€€€€€€Ù…È…ÑÑÉ¥‰ÕÑ•Ì€ô=‰©•Ð¹­•åÌ¡‘…Ñ•I…¹”¹…ÑÑÈ¤ì(€€€€€€€™½È€¡Ù…È¨€ô€Àì¨€ð…ÑÑÉ¥‰ÕÑ•Ì¹±•¹Ñ ì¨¬¬¤ì(€€€€€€€€€Ù…È­•ä€ô…ÑÑÉ¥‰ÕÑ•Ím©tì(€€€€€€€€€¥˜€ …¥Í…Ñ•I…¹•Õ•ÑÑÉ¥‰ÕÑ”¡­•ä¤¤ì(€€€€€€€€€€€½¹Ñ¥¹Õ”ì(€€€€€€€€€ô(€€€€€€€€€Ù…ÈÕ”€ôÕ•Ím­•åtì(€€€€€€€€€¥˜€¡Õ”¤ì(€€€€€€€€€€€¥˜€¡‘ÕÉ…Ñ¥½¹-¹½Ý¸€˜˜€……ÁÁ•¹‘•‘…Ñ•I…¹•Õ•Ì¹‘ÕÉ…Ñ¥½¹-¹½Ý¸¤ì(€€€€€€€€€€€€€Õ”¹•¹‘Q¥µ”€ô•¹‘Q¥µ”ì(€€€€€€€€€€€ô•±Í”¥˜€¡5…Ñ ¹…‰Ì¡Õ”¹ÍÑ…ÉÑQ¥µ”€´ÍÑ…ÉÑQ¥µ”¤€ø€À¸ÀÄ¤ì(€€€€€€€€€€€€€Õ”¹ÍÑ…ÉÑQ¥µ”€ôÍÑ…ÉÑQ¥µ”ì(€€€€€€€€€€€€€Õ”¹•¹‘Q¥µ”€ô•¹‘Q¥µ”ì(€€€€€€€€€€€ô(€€€€€€€€€ô•±Í”¥˜€¡Õ”¤ì(€€€€€€€€€€€Ù…È‘…Ñ„€ô‘…Ñ•I…¹”¹…ÑÑÉm­•åtì(€€€€€€€€€€€¥˜€¡¥ÍMQÌÕÑÑÉ¥‰ÕÑ”¡­•ä¤¤ì(€€€€€€€€€€€€€‘…Ñ„€ô¡•áQ½ÉÉ…å	Õ™™•È¡‘…Ñ„¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€Ù…ÈÁ…å±½…€ôì(€€€€€€€€€€€€€­•äè­•ä°(€€€€€€€€€€€€€‘…Ñ„è‘…Ñ„(€€€€€€€€€€€ôì(€€€€€€€€€€€Ù…È}Õ”€ôÉ•…Ñ•Õ•]¥Ñ¡…Ñ…¥•±‘Ì¡Õ”°ÍÑ…ÉÑQ¥µ”°•¹‘Q¥µ”°Á…å±½…°5•Ñ…‘…Ñ…M¡•µ„¹‘…Ñ•I…¹”¤ì(€€€€€€€€€€€¥˜€¡}Õ”¤ì(€€€€€€€€€€€€€}Õ”¹¥€ô¥ì(€€€€€€€€€€€€€}Ñ¡¥ÌÈ¹¥ÍQÉ…¬¹…‘‘Õ”¡}Õ”¤ì(€€€€€€€€€€€€€Õ•Ím­•åt€ô}Õ”ì(€€€€€€€€€€€€€¥˜€¡}Ñ¡¥ÌÈ¹¡±Ì¹½¹™¥œ¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È¤ì(€€€€€€€€€€€€€€€¥˜€¡­•ä€ôôô€`µMMPµ1%MPœñð­•ä€ôôô€`µMMPµUI0œ¤ì(€€€€€€€€€€€€€€€€€}Õ”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È •¹Ñ•Èœ°}Ñ¡¥ÌÈ¹½¹Ù•¹ÑÕ•¹Ñ•È¤ì(€€€€€€€€€€€€€€€ô(€€€€€€€€€€€€€ô(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô((€€€€€€€€¼¼-••ÀÑÉ…¬½˜ÁÉ½•ÍÍ•…Ñ•I…¹•Ì‰ä%™½ÈÕÁ‘…Ñ¥¹œÕ•ÌÝ¥Ñ ¹•Ü…Ñ•I…¹”Ñ…œ…ÑÑÉ¥‰ÕÑ•Ì(€€€€€€€‘…Ñ•I…¹•Õ•ÍÁÁ•¹‘•‘m¥‘t€ôì(€€€€€€€€€Õ•ÌèÕ•Ì°(€€€€€€€€€‘…Ñ•I…¹”è‘…Ñ•I…¹”°(€€€€€€€€€‘ÕÉ…Ñ¥½¹-¹½Ý¸è‘ÕÉ…Ñ¥½¹-¹½Ý¸(€€€€€€€ôì(€€€€€ôì(€€€€€™½È€¡Ù…È}¤€ô€Àì}¤€ð¥‘Ì¹±•¹Ñ ì}¤¬¬¤ì(€€€€€€€}±½½ÀÈ ¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸%ÍQÉ…­½¹ÑÉ½±±•Èì(€ô ¤ì((€Ù…È1…Ñ•¹å½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸1…Ñ•¹å½¹ÑÉ½±±•È¡¡±Ì¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ñ¡¥Ì¹¡±Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹ÑQ¥µ”€ô€Àì(€€€€€Ñ¡¥Ì¹ÍÑ…±±½Õ¹Ð€ô€Àì(€€€€€Ñ¡¥Ì¹}±…Ñ•¹ä€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹}Ñ…É•Ñ1…Ñ•¹åUÁ‘…Ñ•€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ”€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€Ù…Èµ•‘¥„€ô}Ñ¡¥Ì¹µ•‘¥„ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô}Ñ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€ …µ•‘¥„ñð€…±•Ù•±•Ñ…¥±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹ÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€Ù…È±…Ñ•¹ä€ô}Ñ¡¥Ì¹½µÁÕÑ•1…Ñ•¹ä ¤ì(€€€€€€€¥˜€¡±…Ñ•¹ä€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹}±…Ñ•¹ä€ô±…Ñ•¹äì((€€€€€€€€¼¼‘…ÁÐÁ±…å‰…­I…Ñ”Ñ¼µ••ÐÑ…É•Ð±…Ñ•¹ä¥¸±½Üµ±…Ñ•¹äµ½‘”(€€€€€€€Ù…È}Ñ¡¥Ì‘½¹™¥œ€ô}Ñ¡¥Ì¹½¹™¥œ°(€€€€€€€€€±½Ý1…Ñ•¹å5½‘”€ô}Ñ¡¥Ì‘½¹™¥œ¹±½Ý1…Ñ•¹å5½‘”°(€€€€€€€€€µ…á1¥Ù•Må¹A±…å‰…­I…Ñ”€ô}Ñ¡¥Ì‘½¹™¥œ¹µ…á1¥Ù•Må¹A±…å‰…­I…Ñ”ì(€€€€€€€¥˜€ …±½Ý1…Ñ•¹å5½‘”ñðµ…á1¥Ù•Må¹A±…å‰…­I…Ñ”€ôôô€Äñð€…±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…ÈÑ…É•Ñ1…Ñ•¹ä€ô}Ñ¡¥Ì¹Ñ…É•Ñ1…Ñ•¹äì(€€€€€€€¥˜€¡Ñ…É•Ñ1…Ñ•¹ä€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È‘¥ÍÑ…¹•É½µQ…É•Ð€ô±…Ñ•¹ä€´Ñ…É•Ñ1…Ñ•¹äì(€€€€€€€€¼¼=¹±ä…‘©ÕÍÐÁ±…å‰…­I…Ñ”Ý¡•¸Ý¥Ñ¡¥¸½¹”Ñ…É•Ð‘ÕÉ…Ñ¥½¸½˜Ñ…É•Ñ1…Ñ•¹ä(€€€€€€€€¼¼…¹µ½É”Ñ¡…¸½¹”Í•½¹™É½´Õ¹‘•Èµ‰Õ™™•É¥¹œ¸(€€€€€€€€¼¼A±…å‰…¬™ÕÉÑ¡•ÈÑ¡…¸½¹”Ñ…É•Ð‘ÕÉ…Ñ¥½¸™É½´Ñ…É•Ð…¸‰”½¹Í¥‘•É•YHÁ±…å‰…¬¸(€€€€€€€Ù…È±¥Ù•5¥¹1…Ñ•¹åÕÉ…Ñ¥½¸€ô5…Ñ ¹µ¥¸¡}Ñ¡¥Ì¹µ…á1…Ñ•¹ä°Ñ…É•Ñ1…Ñ•¹ä€¬±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸¤ì(€€€€€€€Ù…È¥¹1¥Ù•I…¹”€ô‘¥ÍÑ…¹•É½µQ…É•Ð€ð±¥Ù•5¥¹1…Ñ•¹åÕÉ…Ñ¥½¸ì(€€€€€€€¥˜€¡¥¹1¥Ù•I…¹”€˜˜‘¥ÍÑ…¹•É½µQ…É•Ð€ø€À¸ÀÔ€˜˜}Ñ¡¥Ì¹™½ÉÝ…É‘	Õ™™•É1•¹Ñ €ø€Ä¤ì(€€€€€€€€€Ù…Èµ…à€ô5…Ñ ¹µ¥¸ È°5…Ñ ¹µ…à Ä¸À°µ…á1¥Ù•Må¹A±…å‰…­I…Ñ”¤¤ì(€€€€€€€€€Ù…ÈÉ…Ñ”€ô5…Ñ ¹É½Õ¹ È€¼€ Ä€¬5…Ñ ¹•áÀ ´À¸ÜÔ€¨‘¥ÍÑ…¹•É½µQ…É•Ð€´}Ñ¡¥Ì¹•‘•MÑ…±±•¤¤€¨€ÈÀ¤€¼€ÈÀì(€€€€€€€€€Ù…ÈÁ±…å‰…­I…Ñ”€ô5…Ñ ¹µ¥¸¡µ…à°5…Ñ ¹µ…à Ä°É…Ñ”¤¤ì(€€€€€€€€€}Ñ¡¥Ì¹¡…¹•5•‘¥…A±…å‰…­I…Ñ”¡µ•‘¥„°Á±…å‰…­I…Ñ”¤ì(€€€€€€€ô•±Í”¥˜€¡µ•‘¥„¹Á±…å‰…­I…Ñ”€„ôô€Ä€˜˜µ•‘¥„¹Á±…å‰…­I…Ñ”€„ôô€À¤ì(€€€€€€€€€}Ñ¡¥Ì¹¡…¹•5•‘¥…A±…å‰…­I…Ñ”¡µ•‘¥„°€Ä¤ì(€€€€€€€ô(€€€€€ôì(€€€€€Ñ¡¥Ì¹¡±Ì€ô¡±Ìì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô¡±Ì¹½¹™¥œì(€€€€€Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô1…Ñ•¹å½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ ¤ì(€€€€€Ñ¡¥Ì¹¡±Ì€ô¹Õ±°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€ …¡±Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}UAQ°Ñ¡¥Ì¹½¹1•Ù•±UÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¥˜€ …¡±Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}QQ!°Ñ¡¥Ì¹½¹5•‘¥…ÑÑ…¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹5%}Q!%9°Ñ¡¥Ì¹½¹5•‘¥…•Ñ…¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}UAQ°Ñ¡¥Ì¹½¹1•Ù•±UÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡•€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹µ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€Ñ¡¥Ì¹µ•‘¥„¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È Ñ¥µ•ÕÁ‘…Ñ”œ°Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥„¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È Ñ¥µ•ÕÁ‘…Ñ”œ°Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ”¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥„€ô¹Õ±°ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€Ñ¡¥Ì¹}±…Ñ•¹ä€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹ÍÑ…±±½Õ¹Ð€ô€Àì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±UÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±UÁ‘…Ñ•¡•Ù•¹Ð°}É•˜¤ì(€€€€€Ù…È‘•Ñ…¥±Ì€ô}É•˜¹‘•Ñ…¥±Ìì(€€€€€¥˜€¡‘•Ñ…¥±Ì¹…‘Ù…¹•¤ì(€€€€€€€Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ” ¤ì(€€€€€ô(€€€€€¥˜€ …‘•Ñ…¥±Ì¹±¥Ù”€˜˜Ñ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥„¹É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È Ñ¥µ•ÕÁ‘…Ñ”œ°Ñ¡¥Ì¹½¹Q¥µ•ÕÁ‘…Ñ”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥Ì‘±•Ù•±•Ñ…¥±Ìì(€€€€€¥˜€¡‘…Ñ„¹‘•Ñ…¥±Ì€„ôôÉÉ½É•Ñ…¥±Ì¹	UI}MQ11}II=H¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÍÑ…±±½Õ¹Ð¬¬ì(€€€€€¥˜€¡Ñ¡¥Ì¹¡±Ì€˜˜€¡}Ñ¡¥Ì‘±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ì¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹Ý…É¸ m±…Ñ•¹äµ½¹ÑÉ½±±•ÉtèMÑ…±°‘•Ñ•Ñ•°…‘©ÕÍÑ¥¹œÑ…É•Ð±…Ñ•¹äœ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹•5•‘¥…A±…å‰…­I…Ñ”€ô™Õ¹Ñ¥½¸¡…¹•5•‘¥…A±…å‰…­I…Ñ”¡µ•‘¥„°Á±…å‰…­I…Ñ”¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì°}Ñ¡¥Ì‘Ñ…É•Ñ1…Ñ•¹äì(€€€€€¥˜€¡µ•‘¥„¹Á±…å‰…­I…Ñ”€ôôôÁ±…å‰…­I…Ñ”¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€€¡}Ñ¡¥Ì‘¡±Ì€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±Ì¹±½•È¹‘•‰Õœ ‰m±…Ñ•¹äµ½¹ÑÉ½±±•Étè±…Ñ•¹äôˆ€¬Ñ¡¥Ì¹±…Ñ•¹ä¹Ñ½¥á• Ì¤€¬€ˆ°Ñ…É•Ñ1…Ñ•¹äôˆ€¬€ ¡}Ñ¡¥Ì‘Ñ…É•Ñ1…Ñ•¹ä€ôÑ¡¥Ì¹Ñ…É•Ñ1…Ñ•¹ä¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘Ñ…É•Ñ1…Ñ•¹ä¹Ñ½¥á• Ì¤¤€¬€ˆ°™½ÉÝ…É‘	Õ™™•É1•¹Ñ ôˆ€¬Ñ¡¥Ì¹™½ÉÝ…É‘	Õ™™•É1•¹Ñ ¹Ñ½¥á• Ì¤€¬€ˆè…‘©ÕÍÑ¥¹œÁ±…å‰…¬É…Ñ”™É½´€ˆ€¬µ•‘¥„¹Á±…å‰…­I…Ñ”€¬€ˆÑ¼€ˆ€¬Á±…å‰…­I…Ñ”¤ì(€€€€€µ•‘¥„¹Á±…å‰…­I…Ñ”€ôÁ±…å‰…­I…Ñ”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹•ÍÑ¥µ…Ñ•1¥Ù•‘”€ô™Õ¹Ñ¥½¸•ÍÑ¥µ…Ñ•1¥Ù•‘” ¤ì(€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€ôôô¹Õ±°¤ì(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€€€É•ÑÕÉ¸±•Ù•±•Ñ…¥±Ì¹•‘”€¬±•Ù•±•Ñ…¥±Ì¹…”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½µÁÕÑ•1…Ñ•¹ä€ô™Õ¹Ñ¥½¸½µÁÕÑ•1…Ñ•¹ä ¤ì(€€€€€Ù…È±¥Ù•‘”€ôÑ¡¥Ì¹•ÍÑ¥µ…Ñ•1¥Ù•‘” ¤ì(€€€€€¥˜€¡±¥Ù•‘”€ôôô¹Õ±°¤ì(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€€€É•ÑÕÉ¸±¥Ù•‘”€´Ñ¡¥Ì¹ÕÉÉ•¹ÑQ¥µ”ì(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡1…Ñ•¹å½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰±•Ù•±•Ñ…¥±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘¡±ÌÈì(€€€€€€€É•ÑÕÉ¸€ ¡}Ñ¡¥Ì‘¡±ÌÈ€ôÑ¡¥Ì¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±ÌÈ¹±…Ñ•ÍÑ1•Ù•±•Ñ…¥±Ì¤ñð¹Õ±°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰±…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}±…Ñ•¹äñð€Àì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…á1…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œì(€€€€€€€¥˜€¡½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€É•ÑÕÉ¸½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸ì(€€€€€€€ô(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€É•ÑÕÉ¸±•Ù•±•Ñ…¥±Ì€ü½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð€¨±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸€è€Àì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Ñ…É•Ñ1…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€ôôô¹Õ±°ñðÑ¡¥Ì¹¡±Ì€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€ô(€€€€€€€Ù…È¡½±‘	…¬€ô±•Ù•±•Ñ…¥±Ì¹¡½±‘	…¬°(€€€€€€€€€Á…ÉÑ!½±‘	…¬€ô±•Ù•±•Ñ…¥±Ì¹Á…ÉÑ!½±‘	…¬°(€€€€€€€€€Ñ…É•Ñ‘ÕÉ…Ñ¥½¸€ô±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸ì(€€€€€€€Ù…È}Ñ¡¥Ì‘½¹™¥œÈ€ôÑ¡¥Ì¹½¹™¥œ°(€€€€€€€€€±¥Ù•Må¹ÕÉ…Ñ¥½¸€ô}Ñ¡¥Ì‘½¹™¥œÈ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸°(€€€€€€€€€±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð€ô}Ñ¡¥Ì‘½¹™¥œÈ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð°(€€€€€€€€€±½Ý1…Ñ•¹å5½‘”€ô}Ñ¡¥Ì‘½¹™¥œÈ¹±½Ý1…Ñ•¹å5½‘”ì(€€€€€€€Ù…ÈÕÍ•É½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹ÕÍ•É½¹™¥œì(€€€€€€€Ù…ÈÑ…É•Ñ1…Ñ•¹ä€ô±½Ý1…Ñ•¹å5½‘”€üÁ…ÉÑ!½±‘	…¬ñð¡½±‘	…¬€è¡½±‘	…¬ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹}Ñ…É•Ñ1…Ñ•¹åUÁ‘…Ñ•ñðÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸ñðÕÍ•É½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹ÐñðÑ…É•Ñ1…Ñ•¹ä€ôôô€À¤ì(€€€€€€€€€Ñ…É•Ñ1…Ñ•¹ä€ô±¥Ù•Må¹ÕÉ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€ü±¥Ù•Må¹ÕÉ…Ñ¥½¸€è±¥Ù•Må¹ÕÉ…Ñ¥½¹½Õ¹Ð€¨Ñ…É•Ñ‘ÕÉ…Ñ¥½¸ì(€€€€€€€ô(€€€€€€€Ù…Èµ…á1¥Ù•Må¹=¹MÑ…±±%¹É•…Í”€ôÑ…É•Ñ‘ÕÉ…Ñ¥½¸ì(€€€€€€€É•ÑÕÉ¸Ñ…É•Ñ1…Ñ•¹ä€¬5…Ñ ¹µ¥¸¡Ñ¡¥Ì¹ÍÑ…±±½Õ¹Ð€¨Ñ¡¥Ì¹½¹™¥œ¹±¥Ù•Må¹=¹MÑ…±±%¹É•…Í”°µ…á1¥Ù•Må¹=¹MÑ…±±%¹É•…Í”¤ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡±…Ñ•¹ä¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…±±½Õ¹Ð€ô€Àì(€€€€€€€Ñ¡¥Ì¹½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¸€ô±…Ñ•¹äì(€€€€€€€Ñ¡¥Ì¹}Ñ…É•Ñ1…Ñ•¹åUÁ‘…Ñ•€ôÑÉÕ”ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰±¥Ù•Må¹A½Í¥Ñ¥½¸ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±¥Ù•‘”€ôÑ¡¥Ì¹•ÍÑ¥µ…Ñ•1¥Ù•‘” ¤ì(€€€€€€€Ù…ÈÑ…É•Ñ1…Ñ•¹ä€ôÑ¡¥Ì¹Ñ…É•Ñ1…Ñ•¹äì(€€€€€€€¥˜€¡±¥Ù•‘”€ôôô¹Õ±°ñðÑ…É•Ñ1…Ñ•¹ä€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€ô(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€ô(€€€€€€€Ù…È•‘”€ô±•Ù•±•Ñ…¥±Ì¹•‘”ì(€€€€€€€Ù…ÈÍå¹A½Í¥Ñ¥½¸€ô±¥Ù•‘”€´Ñ…É•Ñ1…Ñ•¹ä€´Ñ¡¥Ì¹•‘•MÑ…±±•ì(€€€€€€€Ù…Èµ¥¸€ô•‘”€´±•Ù•±•Ñ…¥±Ì¹Ñ½Ñ…±‘ÕÉ…Ñ¥½¸ì(€€€€€€€Ù…Èµ…à€ô•‘”€´€¡Ñ¡¥Ì¹½¹™¥œ¹±½Ý1…Ñ•¹å5½‘”€˜˜±•Ù•±•Ñ…¥±Ì¹Á…ÉÑQ…É•Ðñð±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸¤ì(€€€€€€€É•ÑÕÉ¸5…Ñ ¹µ¥¸¡5…Ñ ¹µ…à¡µ¥¸°Íå¹A½Í¥Ñ¥½¸¤°µ…à¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰‘É¥™Ðˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸€Äì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸±•Ù•±•Ñ…¥±Ì¹‘É¥™Ðì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰•‘•MÑ…±±•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€ôôô¹Õ±°¤ì(€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€ô(€€€€€€€Ù…Èµ…á1•Ù•±UÁ‘…Ñ•”€ô€¡Ñ¡¥Ì¹½¹™¥œ¹±½Ý1…Ñ•¹å5½‘”€˜˜±•Ù•±•Ñ…¥±Ì¹Á…ÉÑQ…É•Ðñð±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸¤€¨€Ìì(€€€€€€€É•ÑÕÉ¸5…Ñ ¹µ…à¡±•Ù•±•Ñ…¥±Ì¹…”€´µ…á1•Ù•±UÁ‘…Ñ•”°€À¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰™½ÉÝ…É‘	Õ™™•É1•¹Ñ ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€ …µ•‘¥„ñð€…±•Ù•±•Ñ…¥±Ì¤ì(€€€€€€€€€É•ÑÕÉ¸€Àì(€€€€€€€ô(€€€€€€€Ù…È‰Õ™™•É•‘I…¹•Ì€ôµ•‘¥„¹‰Õ™™•É•¹±•¹Ñ ì(€€€€€€€É•ÑÕÉ¸€¡‰Õ™™•É•‘I…¹•Ì€üµ•‘¥„¹‰Õ™™•É•¹•¹¡‰Õ™™•É•‘I…¹•Ì€´€Ä¤€è±•Ù•±•Ñ…¥±Ì¹•‘”¤€´Ñ¡¥Ì¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€ô(€€€õt¤ì(€ô ¤ì((€Ù…È1•Ù•±½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¤ì(€€€™Õ¹Ñ¥½¸1•Ù•±½¹ÑÉ½±±•È¡¡±Ì°½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È¤ì(€€€€€Ù…È}Ñ¡¥Ìì(€€€€€}Ñ¡¥Ì€ô}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹…±°¡Ñ¡¥Ì°¡±Ì°€±•Ù•°µ½¹ÑÉ½±±•Èœ¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥Ì¹}±•Ù•±Ì€ômtì(€€€€€}Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°€ô€´Äì(€€€€€}Ñ¡¥Ì¹}µ…áÕÑ½1•Ù•°€ô€´Äì(€€€€€}Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ôÙ½¥€Àì(€€€€€}Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ô€´Äì(€€€€€}Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ô€´Äì(€€€€€}Ñ¡¥Ì¹ÍÑ••É¥¹œ€ôÙ½¥€Àì(€€€€€}Ñ¡¥Ì¹½¹A…ÉÍ•‘½µÁ±•Ñ”€ôÙ½¥€Àì(€€€€€}Ñ¡¥Ì¹ÍÑ••É¥¹œ€ô½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•Èì(€€€€€}Ñ¡¥Ì¹}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€É•ÑÕÉ¸}Ñ¡¥Ìì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡1•Ù•±½¹ÑÉ½±±•È°}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¤ì(€€€Ù…È}ÁÉ½Ñ¼€ô1•Ù•±½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸}É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}	UI°Ñ¡¥Ì¹½¹É…	Õ™™•É•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}	UI°Ñ¡¥Ì¹½¹É…	Õ™™•É•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹II=H°Ñ¡¥Ì¹½¹ÉÉ½È°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹}Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ••É¥¹œ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹É•Í•Ñ1•Ù•±Ì ¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹‘•ÍÑÉ½ä¹…±°¡Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÑ½Á1½…€ô™Õ¹Ñ¥½¸ÍÑ½Á1½… ¤ì(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹}±•Ù•±Ìì((€€€€€€¼¼±•…¸ÕÀ±¥Ù”±•Ù•°‘•Ñ…¥±ÌÑ¼™½É”É•±½…Ñ¡•´°…¹É•Í•Ð±½…•ÉÉ½ÉÌ(€€€€€±•Ù•±Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡±•Ù•°¤ì(€€€€€€€±•Ù•°¹±½…‘ÉÉ½È€ô€Àì(€€€€€€€±•Ù•°¹™É…µ•¹ÑÉÉ½È€ô€Àì(€€€€€ô¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹ÍÑ½Á1½…¹…±°¡Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•Í•Ñ1•Ù•±Ì€ô™Õ¹Ñ¥½¸É•Í•Ñ1•Ù•±Ì ¤ì(€€€€€Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ôÕ¹‘•™¥¹•ì(€€€€€Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ô€´Äì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ô€´Äì(€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹}±•Ù•±Ì€ômtì(€€€€€Ñ¡¥Ì¹}µ…áÕÑ½1•Ù•°€ô€´Äì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ñ¡¥Ì¹É•Í•Ñ1•Ù•±Ì ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘•€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€Ù…ÈÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”ì(€€€€€Ù…È±•Ù•±Ì€ômtì(€€€€€Ù…ÈÉ•‘Õ¹‘…¹ÑM•Ð€ôíôì(€€€€€Ù…È•¹•É…Ñ•A…Ñ¡Ý…åM•Ð€ôíôì(€€€€€Ù…ÈÉ•Í½±ÕÑ¥½¹½Õ¹€ô™…±Í”ì(€€€€€Ù…ÈÙ¥‘•½½‘•½Õ¹€ô™…±Í”ì(€€€€€Ù…È…Õ‘¥½½‘•½Õ¹€ô™…±Í”ì(€€€€€‘…Ñ„¹±•Ù•±Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡±•Ù•±A…ÉÍ•¤ì(€€€€€€€Ù…È}Ù¥‘•½½‘•Œì(€€€€€€€Ù…È…ÑÑÉ¥‰ÕÑ•Ì€ô±•Ù•±A…ÉÍ•¹…ÑÑÉÌì(€€€€€€€Ù…È…Õ‘¥½½‘•Œ€ô±•Ù•±A…ÉÍ•¹…Õ‘¥½½‘•Œ°(€€€€€€€€€Ù¥‘•½½‘•Œ€ô±•Ù•±A…ÉÍ•¹Ù¥‘•½½‘•Œì(€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ¤ì(€€€€€€€€€€¼¼I•ÑÕÉ¹Ì•µÁÑä…¹Í•ÐÑ¼Õ¹‘•™¥¹•™½È€µÀÑ„¸ÐÀ¸ÌÐœÝ¥Ñ ™…±±‰…¬Ñ¼€…Õ‘¥¼½µÁ•œœM½ÕÉ•	Õ™™•È(€€€€€€€€€±•Ù•±A…ÉÍ•¹…Õ‘¥½½‘•Œ€ô…Õ‘¥½½‘•Œ€ô•Ñ½‘•½µÁ…Ñ¥‰±•9…µ”¡…Õ‘¥½½‘•Œ°ÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”¤ñðÕ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€€€¥˜€  ¡}Ù¥‘•½½‘•Œ€ôÙ¥‘•½½‘•Œ¤€ôô¹Õ±°€üÙ½¥€À€è}Ù¥‘•½½‘•Œ¹¥¹‘•á=˜ …ÙŒÄœ¤¤€ôôô€À¤ì(€€€€€€€€€Ù¥‘•½½‘•Œ€ô±•Ù•±A…ÉÍ•¹Ù¥‘•½½‘•Œ€ô½¹Ù•ÉÑYÅQ½Y=Q$¡Ù¥‘•½½‘•Œ¤ì(€€€€€€€ô((€€€€€€€€¼¼½¹±ä­••À±•Ù•±ÌÝ¥Ñ ÍÕÁÁ½ÉÑ•…Õ‘¥¼½Ù¥‘•¼½‘•Ì(€€€€€€€Ù…ÈÝ¥‘Ñ €ô±•Ù•±A…ÉÍ•¹Ý¥‘Ñ °(€€€€€€€€€¡•¥¡Ð€ô±•Ù•±A…ÉÍ•¹¡•¥¡Ð°(€€€€€€€€€Õ¹­¹½Ý¹½‘•Ì€ô±•Ù•±A…ÉÍ•¹Õ¹­¹½Ý¹½‘•Ìì(€€€€€€€Ù…ÈÕ¹­¹½Ý¹U¹ÍÕÁÁ½ÉÑ•‘½‘•½Õ¹Ð€ôÕ¹­¹½Ý¹½‘•Ì€üÕ¹­¹½Ý¹½‘•Ì¹±•¹Ñ €è€Àì(€€€€€€€¥˜€¡Õ¹­¹½Ý¹½‘•Ì¤ì(€€€€€€€€€€¼¼QÉ•…ÐÕ¹­¹½Ý¸½‘•Œ…Ì…Õ‘¥¼½ÈÙ¥‘•¼½‘•Œ‰…Í•½¸Á…ÍÍ¥¹œ¥ÍQåÁ•MÕÁÁ½ÉÑ•‘€¡•¬(€€€€€€€€€€¼¼€¡…±±½ÝÌ™½ÈÁ±…å‰…¬½˜…¹äÍÕÁÁ½ÉÑ•½‘•Œ•Ù•¸¥˜¹½Ð¥¹‘•á•¥¸ÕÑ¥±Ì½½‘•Ì¤(€€€€€€€€€™½È€¡Ù…È¤€ôÕ¹­¹½Ý¹U¹ÍÕÁÁ½ÉÑ•‘½‘•½Õ¹Ðì¤´´ì¤ì(€€€€€€€€€€€Ù…ÈÕ¹­¹½Ý¹½‘•Œ€ôÕ¹­¹½Ý¹½‘•Ím¥tì(€€€€€€€€€€€¥˜€¡}Ñ¡¥ÌÈ¹¥ÍÕ‘¥½MÕÁÁ½ÉÑ•¡Õ¹­¹½Ý¹½‘•Œ¤¤ì(€€€€€€€€€€€€€±•Ù•±A…ÉÍ•¹…Õ‘¥½½‘•Œ€ô…Õ‘¥½½‘•Œ€ô…Õ‘¥½½‘•Œ€ü…Õ‘¥½½‘•Œ€¬€ˆ°ˆ€¬Õ¹­¹½Ý¹½‘•Œ€èÕ¹­¹½Ý¹½‘•Œì(€€€€€€€€€€€€€Õ¹­¹½Ý¹U¹ÍÕÁÁ½ÉÑ•‘½‘•½Õ¹Ð´´ì(€€€€€€€€€€€€€Í…µÁ±•¹ÑÉå½‘•Í%M<¹…Õ‘¥½m…Õ‘¥½½‘•Œ¹ÍÕ‰ÍÑÉ¥¹œ À°€Ð¥t€ô€Èì(€€€€€€€€€€€ô•±Í”¥˜€¡}Ñ¡¥ÌÈ¹¥ÍY¥‘•½MÕÁÁ½ÉÑ•¡Õ¹­¹½Ý¹½‘•Œ¤¤ì(€€€€€€€€€€€€€±•Ù•±A…ÉÍ•¹Ù¥‘•½½‘•Œ€ôÙ¥‘•½½‘•Œ€ôÙ¥‘•½½‘•Œ€üÙ¥‘•½½‘•Œ€¬€ˆ°ˆ€¬Õ¹­¹½Ý¹½‘•Œ€èÕ¹­¹½Ý¹½‘•Œì(€€€€€€€€€€€€€Õ¹­¹½Ý¹U¹ÍÕÁÁ½ÉÑ•‘½‘•½Õ¹Ð´´ì(€€€€€€€€€€€€€Í…µÁ±•¹ÑÉå½‘•Í%M<¹Ù¥‘•½mÙ¥‘•½½‘•Œ¹ÍÕ‰ÍÑÉ¥¹œ À°€Ð¥t€ô€Èì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€É•Í½±ÕÑ¥½¹½Õ¹ñð€¡É•Í½±ÕÑ¥½¹½Õ¹€ô€„„¡Ý¥‘Ñ €˜˜¡•¥¡Ð¤¤ì(€€€€€€€Ù¥‘•½½‘•½Õ¹ñð€¡Ù¥‘•½½‘•½Õ¹€ô€„…Ù¥‘•½½‘•Œ¤ì(€€€€€€€…Õ‘¥½½‘•½Õ¹ñð€¡…Õ‘¥½½‘•½Õ¹€ô€„……Õ‘¥½½‘•Œ¤ì(€€€€€€€¥˜€¡Õ¹­¹½Ý¹U¹ÍÕÁÁ½ÉÑ•‘½‘•½Õ¹Ðñð…Õ‘¥½½‘•Œ€˜˜€…}Ñ¡¥ÌÈ¹¥ÍÕ‘¥½MÕÁÁ½ÉÑ•¡…Õ‘¥½½‘•Œ¤ñðÙ¥‘•½½‘•Œ€˜˜€…}Ñ¡¥ÌÈ¹¥ÍY¥‘•½MÕÁÁ½ÉÑ•¡Ù¥‘•½½‘•Œ¤¤ì(€€€€€€€€€}Ñ¡¥ÌÈ¹±½œ ‰M½µ”½È…±°=L¹½ÐÍÕÁÁ½ÉÑ•pˆˆ€¬…ÑÑÉ¥‰ÕÑ•Ì¹=L€¬€‰pˆˆ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È=L€ô…ÑÑÉ¥‰ÕÑ•Ì¹=L°(€€€€€€€€€I5IQ€ô…ÑÑÉ¥‰ÕÑ•ÍlI5µIQt°(€€€€€€€€€!@€ô…ÑÑÉ¥‰ÕÑ•Íl!@µ1Y0t°(€€€€€€€€€AQ!]d€ô…ÑÑÉ¥‰ÕÑ•ÍlAQ!]dµ%t°(€€€€€€€€€IM=1UQ%=8€ô…ÑÑÉ¥‰ÕÑ•Ì¹IM=1UQ%=8°(€€€€€€€€€Y%=}I9€ô…ÑÑÉ¥‰ÕÑ•ÍlY%<µI9tì(€€€€€€€Ù…È½¹Ñ•¹ÑMÑ••É¥¹AÉ•™¥à€ô€¡AQ!]dñð€œ¸œ¤€¬€ˆ´ˆì(€€€€€€€Ù…È±•Ù•±-•ä€ô€ˆˆ€¬½¹Ñ•¹ÑMÑ••É¥¹AÉ•™¥à€¬±•Ù•±A…ÉÍ•¹‰¥ÑÉ…Ñ”€¬€ˆ´ˆ€¬IM=1UQ%=8€¬€ˆ´ˆ€¬I5IQ€¬€ˆ´ˆ€¬=L€¬€ˆ´ˆ€¬Y%=}I9€¬€ˆ´ˆ€¬!@ì(€€€€€€€¥˜€ …É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt¤ì(€€€€€€€€€Ù…È±•Ù•°€ô}Ñ¡¥ÌÈ¹É•…Ñ•1•Ù•°¡±•Ù•±A…ÉÍ•¤ì(€€€€€€€€€É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt€ô±•Ù•°ì(€€€€€€€€€•¹•É…Ñ•A…Ñ¡Ý…åM•Ñm±•Ù•±-•åt€ô€Äì(€€€€€€€€€±•Ù•±Ì¹ÁÕÍ ¡±•Ù•°¤ì(€€€€€€€ô•±Í”¥˜€¡É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt¹ÕÉ¤€„ôô±•Ù•±A…ÉÍ•¹ÕÉ°€˜˜€…±•Ù•±A…ÉÍ•¹…ÑÑÉÍlAQ!]dµ%t¤ì(€€€€€€€€€€¼¼ÍÍ¥¸A…Ñ¡Ý…ä%ÌÑ¼I•‘Õ¹‘…¹ÐMÑÉ•…µÌ€¡‘•™…Õ±ÐA…Ñ¡Ý…åÌ¥Ì€ˆ¸ˆ¸I•‘Õ¹‘…¹ÐMÑÉ•…µÌ€ˆ¸¸ˆ°€ˆ¸¸¸ˆ°…¹Í¼½¸¸¤(€€€€€€€€€€¼¼½¹Ñ•¹ÐMÑ••É¥¹œ½¹ÑÉ½±±•ÈÑ¼¡…¹‘±•ÌA…Ñ¡Ý…ä™…±±‰…¬½¸•ÉÉ½È(€€€€€€€€€Ù…ÈÁ…Ñ¡Ý…å½Õ¹Ð€ô•¹•É…Ñ•A…Ñ¡Ý…åM•Ñm±•Ù•±-•åt€¬ô€Äì(€€€€€€€€€±•Ù•±A…ÉÍ•¹…ÑÑÉÍlAQ!]dµ%t€ô¹•ÜÉÉ…ä¡Á…Ñ¡Ý…å½Õ¹Ð€¬€Ä¤¹©½¥¸ œ¸œ¤ì(€€€€€€€€€Ù…È}±•Ù•°€ô}Ñ¡¥ÌÈ¹É•…Ñ•1•Ù•°¡±•Ù•±A…ÉÍ•¤ì(€€€€€€€€€É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt€ô}±•Ù•°ì(€€€€€€€€€±•Ù•±Ì¹ÁÕÍ ¡}±•Ù•°¤ì(€€€€€€€ô•±Í”ì(€€€€€€€€€É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt¹…‘‘É½ÕÁ% …Õ‘¥¼œ°…ÑÑÉ¥‰ÕÑ•Ì¹U%<¤ì(€€€€€€€€€É•‘Õ¹‘…¹ÑM•Ñm±•Ù•±-•åt¹…‘‘É½ÕÁ% Ñ•áÐœ°…ÑÑÉ¥‰ÕÑ•Ì¹MU	Q%Q1L¤ì(€€€€€€€ô(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹™¥±Ñ•É¹‘M½ÉÑ5•‘¥…=ÁÑ¥½¹Ì¡±•Ù•±Ì°‘…Ñ„°É•Í½±ÕÑ¥½¹½Õ¹°Ù¥‘•½½‘•½Õ¹°…Õ‘¥½½‘•½Õ¹¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•1•Ù•°€ô™Õ¹Ñ¥½¸É•…Ñ•1•Ù•°¡±•Ù•±A…ÉÍ•¤ì(€€€€€Ù…È±•Ù•°€ô¹•Ü1•Ù•°¡±•Ù•±A…ÉÍ•¤ì(€€€€€Ù…ÈÍÕÁÁ±•µ•¹Ñ…°€ô±•Ù•±A…ÉÍ•¹ÍÕÁÁ±•µ•¹Ñ…°ì(€€€€€¥˜€¡ÍÕÁÁ±•µ•¹Ñ…°€„ô¹Õ±°€˜˜ÍÕÁÁ±•µ•¹Ñ…°¹Ù¥‘•½½‘•Œ€˜˜€…Ñ¡¥Ì¹¥ÍY¥‘•½MÕÁÁ½ÉÑ•¡ÍÕÁÁ±•µ•¹Ñ…°¹Ù¥‘•½½‘•Œ¤¤ì(€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰MUAA159Q0µ=L¹½ÐÍÕÁÁ½ÉÑ•pˆˆ€¬ÍÕÁÁ±•µ•¹Ñ…°¹Ù¥‘•½½‘•Œ€¬€‰pˆˆ¤ì(€€€€€€€Ñ¡¥Ì¹±½œ¡•ÉÉ½È¹µ•ÍÍ…”¤ì(€€€€€€€±•Ù•°¹ÍÕÁÁ½ÉÑ•‘I•ÍÕ±Ð€ô•ÑU¹ÍÕÁÁ½ÉÑ•‘I•ÍÕ±Ð¡•ÉÉ½È°mt¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸±•Ù•°ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¥ÍÕ‘¥½MÕÁÁ½ÉÑ•€ô™Õ¹Ñ¥½¸¥ÍÕ‘¥½MÕÁÁ½ÉÑ•¡½‘•Œ¤ì(€€€€€É•ÑÕÉ¸…É•½‘•Í5•‘¥…M½ÕÉ•MÕÁÁ½ÉÑ•¡½‘•Œ°€…Õ‘¥¼œ°Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¥ÍY¥‘•½MÕÁÁ½ÉÑ•€ô™Õ¹Ñ¥½¸¥ÍY¥‘•½MÕÁÁ½ÉÑ•¡½‘•Œ¤ì(€€€€€É•ÑÕÉ¸…É•½‘•Í5•‘¥…M½ÕÉ•MÕÁÁ½ÉÑ•¡½‘•Œ°€Ù¥‘•¼œ°Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÁÉ•™•É5…¹…•‘5•‘¥…M½ÕÉ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹™¥±Ñ•É¹‘M½ÉÑ5•‘¥…=ÁÑ¥½¹Ì€ô™Õ¹Ñ¥½¸™¥±Ñ•É¹‘M½ÉÑ5•‘¥…=ÁÑ¥½¹Ì¡™¥±Ñ•É•‘1•Ù•±Ì°‘…Ñ„°É•Í½±ÕÑ¥½¹½Õ¹°Ù¥‘•½½‘•½Õ¹°…Õ‘¥½½‘•½Õ¹¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€Ù…È…Õ‘¥½QÉ…­Ì€ômtì(€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­Ì€ômtì(€€€€€Ù…È±•Ù•±Ì€ô™¥±Ñ•É•‘1•Ù•±Ìì((€€€€€€¼¼É•µ½Ù”…Õ‘¥¼µ½¹±ä…¹¥¹Ù…±¥Ù¥‘•¼µÉ…¹”±•Ù•±Ì¥˜Ý”…±Í¼¡…Ù”±•Ù•±ÌÝ¥Ñ Ù¥‘•¼½‘•Ì½ÈIM=1UQ%=8Í¥¹…±±•(€€€€€¥˜€ ¡É•Í½±ÕÑ¥½¹½Õ¹ñðÙ¥‘•½½‘•½Õ¹¤€˜˜…Õ‘¥½½‘•½Õ¹¤ì(€€€€€€€±•Ù•±Ì€ô±•Ù•±Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡}É•˜¤ì(€€€€€€€€€Ù…ÈÙ¥‘•½½‘•Œ€ô}É•˜¹Ù¥‘•½½‘•Œ°(€€€€€€€€€€€Ù¥‘•½I…¹”€ô}É•˜¹Ù¥‘•½I…¹”°(€€€€€€€€€€€Ý¥‘Ñ €ô}É•˜¹Ý¥‘Ñ °(€€€€€€€€€€€¡•¥¡Ð€ô}É•˜¹¡•¥¡Ðì(€€€€€€€€€É•ÑÕÉ¸€ „…Ù¥‘•½½‘•Œñð€„„¡Ý¥‘Ñ €˜˜¡•¥¡Ð¤¤€˜˜¥ÍY¥‘•½I…¹”¡Ù¥‘•½I…¹”¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€¥˜€¡±•Ù•±Ì¹±•¹Ñ €ôôô€À¤ì(€€€€€€€€¼¼¥ÍÁ…Ñ •ÉÉ½È…™Ñ•È59%MQ}1=¥Ì‘½¹”ÁÉ½Á……Ñ¥¹œ(€€€€€€€AÉ½µ¥Í”¹É•Í½±Ù” ¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€¥˜€¡}Ñ¡¥ÌÌ¹¡±Ì¤ì(€€€€€€€€€€€Ù…Èµ•ÍÍ…”€ô€¹¼±•Ù•°Ý¥Ñ ½µÁ…Ñ¥‰±”½‘•Ì™½Õ¹¥¸µ…¹¥™•ÍÐœì(€€€€€€€€€€€Ù…ÈÉ•…Í½¸€ôµ•ÍÍ…”ì(€€€€€€€€€€€¥˜€¡‘…Ñ„¹±•Ù•±Ì¹±•¹Ñ ¤ì(€€€€€€€€€€€€€É•…Í½¸€ô€‰½¹”½Èµ½É”=L¥¸Ù…É¥…¹Ð¹½ÐÍÕÁÁ½ÉÑ•è€ˆ€¬ÍÑÉ¥¹¥™ä¡‘…Ñ„¹±•Ù•±Ì¹µ…À¡™Õ¹Ñ¥½¸€¡±•Ù•°¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸±•Ù•°¹…ÑÑÉÌ¹=Lì(€€€€€€€€€€€€€ô¤¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡Ù…±Õ”°¥¹‘•à°…ÉÉ…ä¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸…ÉÉ…ä¹¥¹‘•á=˜¡Ù…±Õ”¤€ôôô¥¹‘•àì(€€€€€€€€€€€€€ô¤¤ì(€€€€€€€€€€€€€}Ñ¡¥ÌÌ¹Ý…É¸¡É•…Í½¸¤ì(€€€€€€€€€€€€€µ•ÍÍ…”€¬ô€ˆ€ ˆ€¬É•…Í½¸€¬€ˆ¤ˆì(€€€€€€€€€€€ô(€€€€€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È¡µ•ÍÍ…”¤ì(€€€€€€€€€€€}Ñ¡¥ÌÌ¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹5%}II=H°(€€€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹59%MQ}%9=5AQ%	1}=M}II=H°(€€€€€€€€€€€€€™…Ñ…°èÑÉÕ”°(€€€€€€€€€€€€€ÕÉ°è‘…Ñ„¹ÕÉ°°(€€€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€€€€€É•…Í½¸èÉ•…Í½¸(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡‘…Ñ„¹…Õ‘¥½QÉ…­Ì¤ì(€€€€€€€…Õ‘¥½QÉ…­Ì€ô‘…Ñ„¹…Õ‘¥½QÉ…­Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€€€€€É•ÑÕÉ¸€…ÑÉ…¬¹…Õ‘¥½½‘•Œñð}Ñ¡¥ÌÌ¹¥ÍÕ‘¥½MÕÁÁ½ÉÑ•¡ÑÉ…¬¹…Õ‘¥½½‘•Œ¤ì(€€€€€€€ô¤ì(€€€€€€€€¼¼ÍÍ¥¸¥‘Ì…™Ñ•È™¥±Ñ•É¥¹œ…Ì…ÉÉ…ä¥¹‘¥•Ì‰äÉ½ÕÀµ¥(€€€€€€€…ÍÍ¥¹QÉ…­%‘Í	åÉ½ÕÀ¡…Õ‘¥½QÉ…­Ì¤ì(€€€€€ô(€€€€€¥˜€¡‘…Ñ„¹ÍÕ‰Ñ¥Ñ±•Ì¤ì(€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­Ì€ô‘…Ñ„¹ÍÕ‰Ñ¥Ñ±•Ìì(€€€€€€€…ÍÍ¥¹QÉ…­%‘Í	åÉ½ÕÀ¡ÍÕ‰Ñ¥Ñ±•QÉ…­Ì¤ì(€€€€€ô(€€€€€€¼¼ÍÑ…ÉÐ‰¥ÑÉ…Ñ”¥ÌÑ¡”™¥ÉÍÐ‰¥ÑÉ…Ñ”½˜Ñ¡”µ…¹¥™•ÍÐ(€€€€€Ù…ÈÕ¹Í½ÉÑ•‘1•Ù•±Ì€ô±•Ù•±Ì¹Í±¥” À¤ì(€€€€€€¼¼Í½ÉÐ±•Ù•±Ì™É½´±½Ý•ÍÐÑ¼¡¥¡•ÍÐ(€€€€€±•Ù•±Ì¹Í½ÉÐ¡™Õ¹Ñ¥½¸€¡„°ˆ¤ì(€€€€€€€¥˜€¡„¹…ÑÑÉÍl!@µ1Y0t€„ôôˆ¹…ÑÑÉÍl!@µ1Y0t¤ì(€€€€€€€€€É•ÑÕÉ¸€¡„¹…ÑÑÉÍl!@µ1Y0tñð€œœ¤€ø€¡ˆ¹…ÑÑÉÍl!@µ1Y0tñð€œœ¤€ü€Ä€è€´Äì(€€€€€€€ô(€€€€€€€€¼¼Í½ÉÐ½¸¡•¥¡Ð‰•™½É”‰¥ÑÉ…Ñ”™½È…Àµ±•Ù•°µ½¹ÑÉ½±±•È(€€€€€€€¥˜€¡É•Í½±ÕÑ¥½¹½Õ¹€˜˜„¹¡•¥¡Ð€„ôôˆ¹¡•¥¡Ð¤ì(€€€€€€€€€É•ÑÕÉ¸„¹¡•¥¡Ð€´ˆ¹¡•¥¡Ðì(€€€€€€€ô(€€€€€€€¥˜€¡„¹™É…µ•I…Ñ”€„ôôˆ¹™É…µ•I…Ñ”¤ì(€€€€€€€€€É•ÑÕÉ¸„¹™É…µ•I…Ñ”€´ˆ¹™É…µ•I…Ñ”ì(€€€€€€€ô(€€€€€€€¥˜€¡„¹Ù¥‘•½I…¹”€„ôôˆ¹Ù¥‘•½I…¹”¤ì(€€€€€€€€€É•ÑÕÉ¸Y¥‘•½I…¹•Y…±Õ•Ì¹¥¹‘•á=˜¡„¹Ù¥‘•½I…¹”¤€´Y¥‘•½I…¹•Y…±Õ•Ì¹¥¹‘•á=˜¡ˆ¹Ù¥‘•½I…¹”¤ì(€€€€€€€ô(€€€€€€€¥˜€¡„¹Ù¥‘•½½‘•Œ€„ôôˆ¹Ù¥‘•½½‘•Œ¤ì(€€€€€€€€€Ù…ÈÙ…±Õ•€ôÙ¥‘•½½‘•AÉ•™•É•¹•Y…±Õ”¡„¹Ù¥‘•½½‘•Œ¤ì(€€€€€€€€€Ù…ÈÙ…±Õ•€ôÙ¥‘•½½‘•AÉ•™•É•¹•Y…±Õ”¡ˆ¹Ù¥‘•½½‘•Œ¤ì(€€€€€€€€€¥˜€¡Ù…±Õ•€„ôôÙ…±Õ•¤ì(€€€€€€€€€€€É•ÑÕÉ¸Ù…±Õ•€´Ù…±Õ•ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€¥˜€¡„¹ÕÉ¤€ôôôˆ¹ÕÉ¤€˜˜„¹½‘•M•Ð€„ôôˆ¹½‘•M•Ð¤ì(€€€€€€€€€Ù…È}Ù…±Õ•€ô½‘•ÍM•ÑM•±•Ñ¥½¹AÉ•™•É•¹•Y…±Õ”¡„¹½‘•M•Ð¤ì(€€€€€€€€€Ù…È}Ù…±Õ•€ô½‘•ÍM•ÑM•±•Ñ¥½¹AÉ•™•É•¹•Y…±Õ”¡ˆ¹½‘•M•Ð¤ì(€€€€€€€€€¥˜€¡}Ù…±Õ•€„ôô}Ù…±Õ•¤ì(€€€€€€€€€€€É•ÑÕÉ¸}Ù…±Õ•€´}Ù…±Õ•ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€¥˜€¡„¹…Ù•É…•	¥ÑÉ…Ñ”€„ôôˆ¹…Ù•É…•	¥ÑÉ…Ñ”¤ì(€€€€€€€€€É•ÑÕÉ¸„¹…Ù•É…•	¥ÑÉ…Ñ”€´ˆ¹…Ù•É…•	¥ÑÉ…Ñ”ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸€Àì(€€€€€ô¤ì(€€€€€Ù…È™¥ÉÍÑ1•Ù•±%¹A±…å±¥ÍÐ€ôÕ¹Í½ÉÑ•‘1•Ù•±ÍlÁtì(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ••É¥¹œ¤ì(€€€€€€€±•Ù•±Ì€ôÑ¡¥Ì¹ÍÑ••É¥¹œ¹™¥±Ñ•ÉA…ÉÍ•‘1•Ù•±Ì¡±•Ù•±Ì¤ì(€€€€€€€¥˜€¡±•Ù•±Ì¹±•¹Ñ €„ôôÕ¹Í½ÉÑ•‘1•Ù•±Ì¹±•¹Ñ ¤ì(€€€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÕ¹Í½ÉÑ•‘1•Ù•±Ì¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€€€¥˜€¡Õ¹Í½ÉÑ•‘1•Ù•±Ím¥t¹Á…Ñ¡Ý…å%€ôôô±•Ù•±ÍlÁt¹Á…Ñ¡Ý…å%¤ì(€€€€€€€€€€€€€™¥ÉÍÑ1•Ù•±%¹A±…å±¥ÍÐ€ôÕ¹Í½ÉÑ•‘1•Ù•±Ím¥tì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹}±•Ù•±Ì€ô±•Ù•±Ìì((€€€€€€¼¼™¥¹¥¹‘•à½˜™¥ÉÍÐ±•Ù•°¥¸Í½ÉÑ•±•Ù•±Ì(€€€€€™½È€¡Ù…È}¤€ô€Àì}¤€ð±•Ù•±Ì¹±•¹Ñ ì}¤¬¬¤ì(€€€€€€€¥˜€¡±•Ù•±Ím}¥t€ôôô™¥ÉÍÑ1•Ù•±%¹A±…å±¥ÍÐ¤ì(€€€€€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì‘ÕÍ•É½¹™¥œì(€€€€€€€€€Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°€ô}¤ì(€€€€€€€€€Ù…È™¥ÉÍÑ1•Ù•±	¥ÑÉ…Ñ”€ô™¥ÉÍÑ1•Ù•±%¹A±…å±¥ÍÐ¹‰¥ÑÉ…Ñ”ì(€€€€€€€€€Ù…È‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”€ôÑ¡¥Ì¹¡±Ì¹‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰µ…¹¥™•ÍÐ±½…‘•°€ˆ€¬±•Ù•±Ì¹±•¹Ñ €¬€ˆ±•Ù•°¡Ì¤™½Õ¹°™¥ÉÍÐ‰¥ÑÉ…Ñ”è€ˆ€¬™¥ÉÍÑ1•Ù•±	¥ÑÉ…Ñ”¤ì(€€€€€€€€€€¼¼UÁ‘…Ñ”‘•™…Õ±Ð‰Ý”Ñ¼™¥ÉÍÐÙ…É¥…¹Ð‰¥ÑÉ…Ñ”…Ì±½¹œ¥Ð¡…Ì¹½Ð‰••¸½¹™¥ÕÉ•½ÈÍ•Ð(€€€€€€€€€¥˜€  ¡}Ñ¡¥Ì‘¡±Ì‘ÕÍ•É½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹ÕÍ•É½¹™¥œ¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¡±Ì‘ÕÍ•É½¹™¥œ¹…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”¤€ôôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€€€Ù…ÈÍÑ…ÉÑ¥¹	ÝÍÑ¥µ…Ñ”€ô5…Ñ ¹µ¥¸¡™¥ÉÍÑ1•Ù•±	¥ÑÉ…Ñ”°Ñ¡¥Ì¹¡±Ì¹½¹™¥œ¹…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ•5…à¤ì(€€€€€€€€€€€¥˜€¡ÍÑ…ÉÑ¥¹	ÝÍÑ¥µ…Ñ”€ø‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”€˜˜‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”€ôôôÑ¡¥Ì¹¡±Ì¹…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”€ôÍÑ…ÉÑ¥¹	ÝÍÑ¥µ…Ñ”ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¼Õ‘¥¼¥Ì½¹±ä…±Ñ•É¹…Ñ”¥˜µ…¹¥™•ÍÐ¥¹±Õ‘”„UI$…±½¹œÝ¥Ñ Ñ¡”…Õ‘¥¼É½ÕÀÑ…œ°(€€€€€€¼¼…¹Ñ¡¥Ì¥Ì¹½Ð…¸…Õ‘¥¼µ½¹±äÍÑÉ•…´Ý¡•É”±•Ù•±Ì½¹Ñ…¥¸…Õ‘¥¼µ½¹±ä(€€€€€Ù…È…Õ‘¥½=¹±ä€ô…Õ‘¥½½‘•½Õ¹€˜˜€…Ù¥‘•½½‘•½Õ¹ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œì(€€€€€Ù…È…±ÑÕ‘¥½¹…‰±•€ô€„„¡½¹™¥œ¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È€˜˜½¹™¥œ¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¤ì(€€€€€Ù…È•‘…Ñ„€ôì(€€€€€€€±•Ù•±Ìè±•Ù•±Ì°(€€€€€€€…Õ‘¥½QÉ…­Ìè…Õ‘¥½QÉ…­Ì°(€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­ÌèÍÕ‰Ñ¥Ñ±•QÉ…­Ì°(€€€€€€€Í•ÍÍ¥½¹…Ñ„è‘…Ñ„¹Í•ÍÍ¥½¹…Ñ„°(€€€€€€€Í•ÍÍ¥½¹-•åÌè‘…Ñ„¹Í•ÍÍ¥½¹-•åÌ°(€€€€€€€™¥ÉÍÑ1•Ù•°èÑ¡¥Ì¹}™¥ÉÍÑ1•Ù•°°(€€€€€€€ÍÑ…ÑÌè‘…Ñ„¹ÍÑ…ÑÌ°(€€€€€€€…Õ‘¥¼è…Õ‘¥½½‘•½Õ¹°(€€€€€€€Ù¥‘•¼èÙ¥‘•½½‘•½Õ¹°(€€€€€€€…±ÑÕ‘¥¼è…±ÑÕ‘¥½¹…‰±•€˜˜€……Õ‘¥½=¹±ä€˜˜…Õ‘¥½QÉ…­Ì¹Í½µ”¡™Õ¹Ñ¥½¸€¡Ð¤ì(€€€€€€€€€É•ÑÕÉ¸€„…Ð¹ÕÉ°ì(€€€€€€€ô¤(€€€€€ôì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹59%MQ}AIM°•‘…Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€¡‘…Ñ„¹™…Ñ…°ñð€…‘…Ñ„¹½¹Ñ•áÐ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡‘…Ñ„¹½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0€˜˜‘…Ñ„¹½¹Ñ•áÐ¹±•Ù•°€ôôôÑ¡¥Ì¹±•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹¡•­I•ÑÉä¡‘…Ñ„¤ì(€€€€€ô(€€€ô((€€€€¼¼É•Í•Ð•ÉÉ½ÉÌ½¸Ñ¡”ÍÕ•ÍÍ™Õ°±½…½˜„™É…µ•¹Ð(€€€€ì(€€€}ÁÉ½Ñ¼¹½¹É…	Õ™™•É•€ô™Õ¹Ñ¥½¸½¹É…	Õ™™•É•¡•Ù•¹Ð°}É•˜È¤ì(€€€€€Ù…È™É…œ€ô}É•˜È¹™É…œì(€€€€€¥˜€¡™É…œ€„ôôÕ¹‘•™¥¹•€˜˜™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€Ù…È•°€ô™É…œ¹•±•µ•¹Ñ…ÉåMÑÉ•…µÌì(€€€€€€€¥˜€ …=‰©•Ð¹­•åÌ¡•°¤¹Í½µ”¡™Õ¹Ñ¥½¸€¡ÑåÁ”¤ì(€€€€€€€€€É•ÑÕÉ¸€„…•±mÑåÁ•tì(€€€€€€€ô¤¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È±•Ù•°€ôÑ¡¥Ì¹}±•Ù•±Ím™É…œ¹±•Ù•±tì(€€€€€€€¥˜€¡±•Ù•°€„ô¹Õ±°€˜˜±•Ù•°¹±½…‘ÉÉ½È¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰I•Í•ÑÑ¥¹œ±•Ù•°•ÉÉ½È½Õ¹Ð½˜€ˆ€¬±•Ù•°¹±½…‘ÉÉ½È€¬€ˆ½¸™É…œ‰Õ™™•É•ˆ¤ì(€€€€€€€€€±•Ù•°¹±½…‘ÉÉ½È€ô€Àì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘•€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤Èì(€€€€€Ù…È±•Ù•°€ô‘…Ñ„¹±•Ù•°°(€€€€€€€‘•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ìì(€€€€€Ù…ÈÕÉ1•Ù•°€ô‘…Ñ„¹±•Ù•±%¹™¼ì(€€€€€¥˜€ …ÕÉ1•Ù•°¤ì(€€€€€€€Ù…È}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰%¹Ù…±¥±•Ù•°¥¹‘•à€ˆ€¬±•Ù•°¤ì(€€€€€€€¥˜€ ¡}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤€ô‘…Ñ„¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì¤€„ô¹Õ±°€˜˜}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤¹Í­¥À¤ì(€€€€€€€€€‘•Ñ…¥±Ì¹‘•±Ñ…UÁ‘…Ñ•…¥±•€ôÑÉÕ”ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼½¹±äÁÉ½•ÍÌ±•Ù•°±½…‘••Ù•¹ÑÌµ…Ñ¡¥¹œÝ¥Ñ •áÁ•Ñ•±•Ù•°½ÈÁÉ¥½ÈÑ¼ÍÝ¥Ñ Ý¡•¸µ•‘¥„Á±…å±¥ÍÐ¥Ì±½…‘•‘¥É•Ñ±ä(€€€€€¥˜€¡ÕÉ1•Ù•°€ôôôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°ñð‘…Ñ„¹Ý¥Ñ¡½ÕÑ5Õ±Ñ¥Y…É¥…¹Ð¤ì(€€€€€€€€¼¼É•Í•Ð±•Ù•°±½…•ÉÉ½È½Õ¹Ñ•È½¸ÍÕ•ÍÍ™Õ°±•Ù•°±½…‘•½¹±ä¥˜Ñ¡•É”¥Ì¹¼¥ÍÍÕ•ÌÝ¥Ñ ™É…µ•¹ÑÌ(€€€€€€€¥˜€¡ÕÉ1•Ù•°¹™É…µ•¹ÑÉÉ½È€ôôô€À¤ì(€€€€€€€€€ÕÉ1•Ù•°¹±½…‘ÉÉ½È€ô€Àì(€€€€€€€ô(€€€€€€€€¼¼%¹½É”µ…Ñ¡¥¹œ‘•Ñ…¥±ÌÁ½ÁÕ±…Ñ•‰ä±½…‘¥¹œ„5•‘¥„A±…å±¥ÍÐ‘¥É•Ñ±ä(€€€€€€€Ù…ÈÁÉ•Ù¥½ÕÍ•Ñ…¥±Ì€ôÕÉ1•Ù•°¹‘•Ñ…¥±Ìì(€€€€€€€¥˜€¡ÁÉ•Ù¥½ÕÍ•Ñ…¥±Ì€ôôô‘…Ñ„¹‘•Ñ…¥±Ì€˜˜ÁÉ•Ù¥½ÕÍ•Ñ…¥±Ì¹…‘Ù…¹•¤ì(€€€€€€€€€ÁÉ•Ù¥½ÕÍ•Ñ…¥±Ì€ôÕ¹‘•™¥¹•ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹Á±…å±¥ÍÑ1½…‘•¡±•Ù•°°‘…Ñ„°ÁÉ•Ù¥½ÕÍ•Ñ…¥±Ì¤ì(€€€€€ô•±Í”¥˜€ ¡}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤È€ô‘…Ñ„¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì¤€„ô¹Õ±°€˜˜}‘…Ñ„‘‘•±¥Ù•Éå¥É•Ñ¤È¹Í­¥À¤ì(€€€€€€€€¼¼É••¥Ù•„‘•±Ñ„Á±…å±¥ÍÐÕÁ‘…Ñ”Ñ¡…Ð…¹¹½Ð‰”µ•É•(€€€€€€€‘•Ñ…¥±Ì¹‘•±Ñ…UÁ‘…Ñ•…¥±•€ôÑÉÕ”ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘A±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸±½…‘A±…å±¥ÍÐ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹±½…‘A±…å±¥ÍÐ¹…±°¡Ñ¡¥Ì¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹Í¡½Õ±‘1½…‘A±…å±¥ÍÐ¡Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°¤¤ì(€€€€€€€Ñ¡¥Ì¹Í¡•‘Õ±•1½…‘¥¹œ¡Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘¥¹A±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸±½…‘¥¹A±…å±¥ÍÐ¡ÕÉÉ•¹Ñ1•Ù•°°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€}	…Í•A±…å±¥ÍÑ½¹ÑÉ½±°¹ÁÉ½Ñ½ÑåÁ”¹±½…‘¥¹A±…å±¥ÍÐ¹…±°¡Ñ¡¥Ì°ÕÉÉ•¹Ñ1•Ù•°°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€Ù…ÈÕÉ°€ôÑ¡¥Ì¹•ÑUÉ±]¥Ñ¡¥É•Ñ¥Ù•Ì¡ÕÉÉ•¹Ñ1•Ù•°¹ÕÉ¤°¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€Ù…ÈÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•àì(€€€€€Ù…ÈÁ…Ñ¡Ý…å%€ôÕÉÉ•¹Ñ1•Ù•°¹…ÑÑÉÍlAQ!]dµ%tì(€€€€€Ù…È‘•Ñ…¥±Ì€ôÕÉÉ•¹Ñ1•Ù•°¹‘•Ñ…¥±Ìì(€€€€€Ù…È…”€ô‘•Ñ…¥±Ì€ôô¹Õ±°€üÙ½¥€À€è‘•Ñ…¥±Ì¹…”ì(€€€€€Ñ¡¥Ì¹±½œ ‰1½…‘¥¹œ±•Ù•°¥¹‘•à€ˆ€¬ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€¬€ ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ€ôô¹Õ±°€üÙ½¥€À€è¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹µÍ¸¤€„ôôÕ¹‘•™¥¹•€ü€œ…ÐÍ¸€œ€¬¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹µÍ¸€¬€œÁ…ÉÐ€œ€¬¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¹Á…ÉÐ€è€œœ¤€¬€¡Á…Ñ¡Ý…å%€ü€œA…Ñ¡Ý…ä€œ€¬Á…Ñ¡Ý…å%€è€œœ¤€¬€¡…”€˜˜‘•Ñ…¥±Ì¹±¥Ù”€ü€œ…”€œ€¬…”¹Ñ½¥á• Ä¤€¬€¡‘•Ñ…¥±Ì¹ÑåÁ”€ü€œ€œ€¬‘•Ñ…¥±Ì¹ÑåÁ”ñð€œœ€è€œœ¤€è€œœ¤€¬€ˆ€ˆ€¬ÕÉ°¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1}1=%9°ì(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€±•Ù•°èÕÉÉ•¹Ñ1•Ù•±%¹‘•à°(€€€€€€€±•Ù•±%¹™¼èÕÉÉ•¹Ñ1•Ù•°°(€€€€€€€Á…Ñ¡Ý…å%èÕÉÉ•¹Ñ1•Ù•°¹…ÑÑÉÍlAQ!]dµ%t°(€€€€€€€¥è€À°(€€€€€€€€¼¼•ÁÉ•…Ñ•1•Ù•°ÕÉ±%(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè¡±ÍUÉ±A…É…µ•Ñ•ÉÌñð¹Õ±°(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•µ½Ù•1•Ù•°€ô™Õ¹Ñ¥½¸É•µ½Ù•1•Ù•°¡±•Ù•±%¹‘•à¤ì(€€€€€Ù…È}Ñ¡¥ÌÐ€ôÑ¡¥Ì°(€€€€€€€}Ñ¡¥Ì‘ÕÉÉ•¹Ñ1•Ù•°ì(€€€€€¥˜€¡Ñ¡¥Ì¹}±•Ù•±Ì¹±•¹Ñ €ôôô€Ä¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹}±•Ù•±Ì¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡±•Ù•°°¥¹‘•à¤ì(€€€€€€€¥˜€¡¥¹‘•à€„ôô±•Ù•±%¹‘•à¤ì(€€€€€€€€€É•ÑÕÉ¸ÑÉÕ”ì(€€€€€€€ô(€€€€€€€¥˜€¡}Ñ¡¥ÌÐ¹ÍÑ••É¥¹œ¤ì(€€€€€€€€€}Ñ¡¥ÌÐ¹ÍÑ••É¥¹œ¹É•µ½Ù•1•Ù•°¡±•Ù•°¤ì(€€€€€€€ô(€€€€€€€¥˜€¡±•Ù•°€ôôô}Ñ¡¥ÌÐ¹ÕÉÉ•¹Ñ1•Ù•°¤ì(€€€€€€€€€}Ñ¡¥ÌÐ¹ÕÉÉ•¹Ñ1•Ù•°€ô¹Õ±°ì(€€€€€€€€€}Ñ¡¥ÌÐ¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ô€´Äì(€€€€€€€€€¥˜€¡±•Ù•°¹‘•Ñ…¥±Ì¤ì(€€€€€€€€€€€±•Ù•°¹‘•Ñ…¥±Ì¹™É…µ•¹ÑÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡˜¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸˜¹±•Ù•°€ô€´Äì(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸™…±Í”ì(€€€€€ô¤ì(€€€€€É•…ÍÍ¥¹É…µ•¹Ñ1•Ù•±%¹‘•á•Ì¡±•Ù•±Ì¤ì(€€€€€Ñ¡¥Ì¹}±•Ù•±Ì€ô±•Ù•±Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ø€´Ä€˜˜€¡}Ñ¡¥Ì‘ÕÉÉ•¹Ñ1•Ù•°€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘ÕÉÉ•¹Ñ1•Ù•°¹‘•Ñ…¥±Ì¤ì(€€€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°¹‘•Ñ…¥±Ì¹™É…µ•¹ÑÍlÁt¹±•Ù•°ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ø€´Ä¤ì(€€€€€€€Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•àì(€€€€€ô(€€€€€Ù…Èµ…á1•Ù•°€ô±•Ù•±Ì¹±•¹Ñ €´€Äì(€€€€€Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°€ô5…Ñ ¹µ¥¸¡Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°°µ…á1•Ù•°¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ô5…Ñ ¹µ¥¸¡Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°°µ…á1•Ù•°¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1M}UAQ°ì(€€€€€€€±•Ù•±Ìè±•Ù•±Ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±ÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±ÍUÁ‘…Ñ•¡•Ù•¹Ð°}É•˜Ì¤ì(€€€€€Ù…È±•Ù•±Ì€ô}É•˜Ì¹±•Ù•±Ìì(€€€€€Ñ¡¥Ì¹}±•Ù•±Ì€ô±•Ù•±Ìì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡•­5…áÕÑ½UÁ‘…Ñ•€ô™Õ¹Ñ¥½¸¡•­5…áÕÑ½UÁ‘…Ñ• ¤ì(€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì€ôÑ¡¥Ì¹¡±Ì°(€€€€€€€…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô}Ñ¡¥Ì‘¡±Ì¹…ÕÑ½1•Ù•±…ÁÁ¥¹œ°(€€€€€€€µ…áÕÑ½1•Ù•°€ô}Ñ¡¥Ì‘¡±Ì¹µ…áÕÑ½1•Ù•°°(€€€€€€€µ…á!‘Á1•Ù•°€ô}Ñ¡¥Ì‘¡±Ì¹µ…á!‘Á1•Ù•°ì(€€€€€¥˜€¡Ñ¡¥Ì¹}µ…áÕÑ½1•Ù•°€„ôôµ…áÕÑ½1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹}µ…áÕÑ½1•Ù•°€ôµ…áÕÑ½1•Ù•°ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5a}UQ=}1Y1}UAQ°ì(€€€€€€€€€…ÕÑ½1•Ù•±…ÁÁ¥¹œè…ÕÑ½1•Ù•±…ÁÁ¥¹œ°(€€€€€€€€€±•Ù•±ÌèÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€µ…áÕÑ½1•Ù•°èµ…áÕÑ½1•Ù•°°(€€€€€€€€€µ¥¹ÕÑ½1•Ù•°èÑ¡¥Ì¹¡±Ì¹µ¥¹ÕÑ½1•Ù•°°(€€€€€€€€€µ…á!‘Á1•Ù•°èµ…á!‘Á1•Ù•°(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡1•Ù•±½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰±•Ù•±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹}±•Ù•±Ì¹±•¹Ñ €ôôô€À¤ì(€€€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}±•Ù•±Ìì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰±½…‘1•Ù•±=‰¨ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰±•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•àì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹}±•Ù•±Ìì(€€€€€€€¥˜€¡±•Ù•±Ì¹±•¹Ñ €ôôô€À¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼¡•¬¥˜±•Ù•°¥‘à¥ÌÙ…±¥(€€€€€€€¥˜€¡¹•Ý1•Ù•°€ð€Àñð¹•Ý1•Ù•°€øô±•Ù•±Ì¹±•¹Ñ ¤ì(€€€€€€€€€€¼¼¥¹Ù…±¥±•Ù•°¥¥Ù•¸°ÑÉ¥•È•ÉÉ½È(€€€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ¥¹Ù…±¥±•Ù•°¥‘àœ¤ì(€€€€€€€€€Ù…È™…Ñ…°€ô¹•Ý1•Ù•°€ð€Àì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹=Q!I}II=H°(€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹1Y1}M]%Q!}II=H°(€€€€€€€€€€€±•Ù•°è¹•Ý1•Ù•°°(€€€€€€€€€€€™…Ñ…°è™…Ñ…°°(€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€€€É•…Í½¸è•ÉÉ½È¹µ•ÍÍ…”(€€€€€€€€€ô¤ì(€€€€€€€€€¥˜€¡™…Ñ…°¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€¹•Ý1•Ù•°€ô5…Ñ ¹µ¥¸¡¹•Ý1•Ù•°°±•Ù•±Ì¹±•¹Ñ €´€Ä¤ì(€€€€€€€ô(€€€€€€€Ù…È±…ÍÑ1•Ù•±%¹‘•à€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•àì(€€€€€€€Ù…È±…ÍÑ1•Ù•°€ôÑ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°ì(€€€€€€€Ù…È±…ÍÑA…Ñ¡Ý…å%€ô±…ÍÑ1•Ù•°€ü±…ÍÑ1•Ù•°¹…ÑÑÉÍlAQ!]dµ%t€èÕ¹‘•™¥¹•ì(€€€€€€€Ù…È±•Ù•°€ô±•Ù•±Ím¹•Ý1•Ù•±tì(€€€€€€€Ù…ÈÁ…Ñ¡Ý…å%€ô±•Ù•°¹…ÑÑÉÍlAQ!]dµ%tì(€€€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•±%¹‘•à€ô¹•Ý1•Ù•°ì(€€€€€€€Ñ¡¥Ì¹ÕÉÉ•¹Ñ1•Ù•°€ô±•Ù•°ì(€€€€€€€¥˜€¡±…ÍÑ1•Ù•±%¹‘•à€ôôô¹•Ý1•Ù•°€˜˜±…ÍÑ1•Ù•°€˜˜±…ÍÑA…Ñ¡Ý…å%€ôôôÁ…Ñ¡Ý…å%¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±½œ ‰MÝ¥Ñ¡¥¹œÑ¼±•Ù•°€ˆ€¬¹•Ý1•Ù•°€¬€ˆ€ ˆ€¬€¡±•Ù•°¹¡•¥¡Ð€ü±•Ù•°¹¡•¥¡Ð€¬€À€œ€è€œœ¤€¬€¡±•Ù•°¹Ù¥‘•½I…¹”€ü±•Ù•°¹Ù¥‘•½I…¹”€¬€œ€œ€è€œœ¤€¬€¡±•Ù•°¹½‘•M•Ð€ü±•Ù•°¹½‘•M•Ð€¬€œ€œ€è€œœ¤€¬€‰ ˆ€¬±•Ù•°¹‰¥ÑÉ…Ñ”€¬€ˆ¤ˆ€¬€¡Á…Ñ¡Ý…å%€ü€œÝ¥Ñ A…Ñ¡Ý…ä€œ€¬Á…Ñ¡Ý…å%€è€œœ¤€¬€ˆ™É½´±•Ù•°€ˆ€¬±…ÍÑ1•Ù•±%¹‘•à€¬€¡±…ÍÑA…Ñ¡Ý…å%€ü€œÝ¥Ñ A…Ñ¡Ý…ä€œ€¬±…ÍÑA…Ñ¡Ý…å%€è€œœ¤¤ì(€€€€€€€Ù…È±•Ù•±MÝ¥Ñ¡¥¹…Ñ„€ôì(€€€€€€€€€±•Ù•°è¹•Ý1•Ù•°°(€€€€€€€€€…ÑÑÉÌè±•Ù•°¹…ÑÑÉÌ°(€€€€€€€€€‘•Ñ…¥±Ìè±•Ù•°¹‘•Ñ…¥±Ì°(€€€€€€€€€‰¥ÑÉ…Ñ”è±•Ù•°¹‰¥ÑÉ…Ñ”°(€€€€€€€€€…Ù•É…•	¥ÑÉ…Ñ”è±•Ù•°¹…Ù•É…•	¥ÑÉ…Ñ”°(€€€€€€€€€µ…á	¥ÑÉ…Ñ”è±•Ù•°¹µ…á	¥ÑÉ…Ñ”°(€€€€€€€€€É•…±	¥ÑÉ…Ñ”è±•Ù•°¹É•…±	¥ÑÉ…Ñ”°(€€€€€€€€€Ý¥‘Ñ è±•Ù•°¹Ý¥‘Ñ °(€€€€€€€€€¡•¥¡Ðè±•Ù•°¹¡•¥¡Ð°(€€€€€€€€€½‘•M•Ðè±•Ù•°¹½‘•M•Ð°(€€€€€€€€€…Õ‘¥½½‘•Œè±•Ù•°¹…Õ‘¥½½‘•Œ°(€€€€€€€€€Ù¥‘•½½‘•Œè±•Ù•°¹Ù¥‘•½½‘•Œ°(€€€€€€€€€…Õ‘¥½É½ÕÁÌè±•Ù•°¹…Õ‘¥½É½ÕÁÌ°(€€€€€€€€€ÍÕ‰Ñ¥Ñ±•É½ÕÁÌè±•Ù•°¹ÍÕ‰Ñ¥Ñ±•É½ÕÁÌ°(€€€€€€€€€±½…‘•è±•Ù•°¹±½…‘•°(€€€€€€€€€±½…‘ÉÉ½Èè±•Ù•°¹±½…‘ÉÉ½È°(€€€€€€€€€™É…µ•¹ÑÉÉ½Èè±•Ù•°¹™É…µ•¹ÑÉÉ½È°(€€€€€€€€€¹…µ”è±•Ù•°¹¹…µ”°(€€€€€€€€€¥è±•Ù•°¹¥°(€€€€€€€€€ÕÉ¤è±•Ù•°¹ÕÉ¤°(€€€€€€€€€ÕÉ°è±•Ù•°¹ÕÉ°°(€€€€€€€€€ÕÉ±%è€À°(€€€€€€€€€…Õ‘¥½É½ÕÁ%‘Ìè±•Ù•°¹…Õ‘¥½É½ÕÁ%‘Ì°(€€€€€€€€€Ñ•áÑÉ½ÕÁ%‘Ìè±•Ù•°¹Ñ•áÑÉ½ÕÁ%‘Ì(€€€€€€€ôì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1}M]%Q!%9°±•Ù•±MÝ¥Ñ¡¥¹…Ñ„¤ì(€€€€€€€€¼¼¡•¬¥˜Ý”¹••Ñ¼±½…Á±…å±¥ÍÐ™½ÈÑ¡¥Ì±•Ù•°(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô±•Ù•°¹‘•Ñ…¥±Ìì(€€€€€€€¥˜€ …±•Ù•±•Ñ…¥±Ìñð±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€€€€¼¼±•Ù•°¹½ÐÉ•ÑÉ¥•Ù•å•Ð°½È±¥Ù”Á±…å±¥ÍÐÝ”¹••Ñ¼€¡É”¥±½…¥Ð(€€€€€€€€€Ù…È¡±ÍUÉ±A…É…µ•Ñ•ÉÌ€ôÑ¡¥Ì¹ÍÝ¥Ñ¡A…É…µÌ¡±•Ù•°¹ÕÉ¤°±…ÍÑ1•Ù•°€ôô¹Õ±°€üÙ½¥€À€è±…ÍÑ1•Ù•°¹‘•Ñ…¥±Ì°±•Ù•±•Ñ…¥±Ì¤ì(€€€€€€€€€Ñ¡¥Ì¹±½…‘A±…å±¥ÍÐ¡¡±ÍUÉ±A…É…µ•Ñ•ÉÌ¤ì(€€€€€€€ô(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…¹Õ…±1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•àì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ô¹•Ý1•Ù•°ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ôôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€€€ô(€€€€€€€¥˜€¡¹•Ý1•Ù•°€„ôô€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹±•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€€€ô(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰™¥ÉÍÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹}™¥ÉÍÑ1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÍÑ…ÉÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€€¼¼M•ÑÑ¥¹œ¡±Ì¹ÍÑ…ÉÑ1•Ù•°€¡Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°¤½Ù•ÉÉ¥‘•Ì½¹™¥œ¹ÍÑ…ÉÑ1•Ù•°(€€€€€€€¥˜€¡Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ôôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€Ù…È½¹™¥MÑ…ÉÑ1•Ù•°€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œ¹ÍÑ…ÉÑ1•Ù•°ì(€€€€€€€€€¥˜€¡½¹™¥MÑ…ÉÑ1•Ù•°€„ôôÕ¹‘•™¥¹•¤ì(€€€€€€€€€€€É•ÑÕÉ¸½¹™¥MÑ…ÉÑ1•Ù•°ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡±Ì¹™¥ÉÍÑÕÑ½1•Ù•°ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹}ÍÑ…ÉÑ1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Á…Ñ¡Ý…åÌˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ••É¥¹œ¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ••É¥¹œ¹Á…Ñ¡Ý…åÌ ¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸mtì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Á…Ñ¡Ý…åAÉ¥½É¥Ñäˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ••É¥¹œ¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ••É¥¹œ¹Á…Ñ¡Ý…åAÉ¥½É¥Ñäì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Á…Ñ¡Ý…åAÉ¥½É¥Ñä¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ••É¥¹œ¤ì(€€€€€€€€€Ù…ÈÁ…Ñ¡Ý…åÍ1¥ÍÐ€ôÑ¡¥Ì¹ÍÑ••É¥¹œ¹Á…Ñ¡Ý…åÌ ¤ì(€€€€€€€€€Ù…È™¥±Ñ•É•‘A…Ñ¡Ý…åAÉ¥½É¥Ñä€ôÁ…Ñ¡Ý…åAÉ¥½É¥Ñä¹™¥±Ñ•È¡™Õ¹Ñ¥½¸€¡Á…Ñ¡Ý…å%¤ì(€€€€€€€€€€€É•ÑÕÉ¸Á…Ñ¡Ý…åÍ1¥ÍÐ¹¥¹‘•á=˜¡Á…Ñ¡Ý…å%¤€„ôô€´Äì(€€€€€€€€€ô¤ì(€€€€€€€€€¥˜€¡Á…Ñ¡Ý…åAÉ¥½É¥Ñä¹±•¹Ñ €ð€Ä¤ì(€€€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰Á…Ñ¡Ý…åAÉ¥½É¥Ñä€ˆ€¬Á…Ñ¡Ý…åAÉ¥½É¥Ñä€¬€ˆÍ¡½Õ±½¹Ñ…¥¸…Ð±•…ÍÐ½¹”Á…Ñ¡Ý…ä™É½´±¥ÍÐè€ˆ€¬Á…Ñ¡Ý…åÍ1¥ÍÐ¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹ÍÑ••É¥¹œ¹Á…Ñ¡Ý…åAÉ¥½É¥Ñä€ô™¥±Ñ•É•‘A…Ñ¡Ý…åAÉ¥½É¥Ñäì(€€€€€€€ô(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰¹•áÑ1½…‘1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€„ôô€´Ä¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•àì(€€€€€€€ô•±Í”ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹¡±Ì¹¹•áÑÕÑ½1•Ù•°ì(€€€€€€€ô(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•áÑ1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•°€ô¹•áÑ1•Ù•°ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹µ…¹Õ…±1•Ù•±%¹‘•à€ôôô€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹¹•áÑÕÑ½1•Ù•°€ô¹•áÑ1•Ù•°ì(€€€€€€€ô(€€€€€ô(€€€õt¤ì(€ô¡	…Í•A±…å±¥ÍÑ½¹ÑÉ½±±•È¤ì(€™Õ¹Ñ¥½¸…ÍÍ¥¹QÉ…­%‘Í	åÉ½ÕÀ¡ÑÉ…­Ì¤ì(€€€Ù…ÈÉ½ÕÁÌ€ôíôì(€€€ÑÉ…­Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…¬¤ì(€€€€€Ù…ÈÉ½ÕÁ%€ôÑÉ…¬¹É½ÕÁ%ñð€œœì(€€€€€ÑÉ…¬¹¥€ôÉ½ÕÁÍmÉ½ÕÁ%‘t€ôÉ½ÕÁÍmÉ½ÕÁ%‘tñð€Àì(€€€€€É½ÕÁÍmÉ½ÕÁ%‘t¬¬ì(€€€ô¤ì(€ô((€™Õ¹Ñ¥½¸•ÑM½ÕÉ•	Õ™™•È ¤ì(€€€É•ÑÕÉ¸Í•±˜¹M½ÕÉ•	Õ™™•ÈñðÍ•±˜¹]•‰-¥ÑM½ÕÉ•	Õ™™•Èì(€ô(€™Õ¹Ñ¥½¸¥Í5MMÕÁÁ½ÉÑ• ¤ì(€€€Ù…Èµ•‘¥…M½ÕÉ”€ô•Ñ5•‘¥…M½ÕÉ” ¤ì(€€€¥˜€ …µ•‘¥…M½ÕÉ”¤ì(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ô((€€€€¼¼¥˜M½ÕÉ•	Õ™™•È¥Ì•áÁ½Í••¹ÍÕÉ”¥ÑÌA$¥ÌÙ…±¥(€€€€¼¼=±‘•È‰É½ÝÍ•ÉÌ‘¼¹½Ð•áÁ½Í”M½ÕÉ•	Õ™™•È±½‰…±±äÍ¼¡•­¥¹œM½ÕÉ•	Õ™™•È¹ÁÉ½Ñ½ÑåÁ”¥Ì¥µÁ½ÍÍ¥‰±”(€€€Ù…ÈÍ½ÕÉ•	Õ™™•È€ô•ÑM½ÕÉ•	Õ™™•È ¤ì(€€€É•ÑÕÉ¸€…Í½ÕÉ•	Õ™™•ÈñðÍ½ÕÉ•	Õ™™•È¹ÁÉ½Ñ½ÑåÁ”€˜˜ÑåÁ•½˜Í½ÕÉ•	Õ™™•È¹ÁÉ½Ñ½ÑåÁ”¹…ÁÁ•¹‘	Õ™™•È€ôôô€™Õ¹Ñ¥½¸œ€˜˜ÑåÁ•½˜Í½ÕÉ•	Õ™™•È¹ÁÉ½Ñ½ÑåÁ”¹É•µ½Ù”€ôôô€™Õ¹Ñ¥½¸œì(€ô(€™Õ¹Ñ¥½¸¥ÍMÕÁÁ½ÉÑ• ¤ì(€€€¥˜€ …¥Í5MMÕÁÁ½ÉÑ• ¤¤ì(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ô(€€€Ù…Èµ•‘¥…M½ÕÉ”€ô•Ñ5•‘¥…M½ÕÉ” ¤ì(€€€É•ÑÕÉ¸ÑåÁ•½˜€¡µ•‘¥…M½ÕÉ”€ôô¹Õ±°€üÙ½¥€À€èµ•‘¥…M½ÕÉ”¹¥ÍQåÁ•MÕÁÁ½ÉÑ•¤€ôôô€™Õ¹Ñ¥½¸œ€˜˜€¡l…ÙŒÄ¸ÐÉÀÅ±µÀÑ„¸ÐÀ¸Èœ°€…ØÀÄ¸À¸ÀÅ4¸Ààœ°€ÙÀÀä¸ÀÀ¸ÔÀ¸Ààt¹Í½µ”¡™Õ¹Ñ¥½¸€¡½‘•Í½ÉY¥‘•½½¹Ñ…¥¹•È¤ì(€€€€€É•ÑÕÉ¸µ•‘¥…M½ÕÉ”¹¥ÍQåÁ•MÕÁÁ½ÉÑ•¡µ¥µ•QåÁ•½É½‘•Œ¡½‘•Í½ÉY¥‘•½½¹Ñ…¥¹•È°€Ù¥‘•¼œ¤¤ì(€€€ô¤ñðlµÀÑ„¸ÐÀ¸Èœ°€™1…t¹Í½µ”¡™Õ¹Ñ¥½¸€¡½‘•½ÉÕ‘¥½½¹Ñ…¥¹•È¤ì(€€€€€É•ÑÕÉ¸µ•‘¥…M½ÕÉ”¹¥ÍQåÁ•MÕÁÁ½ÉÑ•¡µ¥µ•QåÁ•½É½‘•Œ¡½‘•½ÉÕ‘¥½½¹Ñ…¥¹•È°€…Õ‘¥¼œ¤¤ì(€€€ô¤¤ì(€ô(€™Õ¹Ñ¥½¸¡…¹•QåÁ•MÕÁÁ½ÉÑ• ¤ì(€€€Ù…È}Í½ÕÉ•	Õ™™•È‘ÁÉ½Ñ½Ñäì(€€€Ù…ÈÍ½ÕÉ•	Õ™™•È€ô•ÑM½ÕÉ•	Õ™™•È ¤ì(€€€É•ÑÕÉ¸ÑåÁ•½˜€¡Í½ÕÉ•	Õ™™•È€ôô¹Õ±°€üÙ½¥€À€è€¡}Í½ÕÉ•	Õ™™•È‘ÁÉ½Ñ½Ñä€ôÍ½ÕÉ•	Õ™™•È¹ÁÉ½Ñ½ÑåÁ”¤€ôô¹Õ±°€üÙ½¥€À€è}Í½ÕÉ•	Õ™™•È‘ÁÉ½Ñ½Ñä¹¡…¹•QåÁ”¤€ôôô€™Õ¹Ñ¥½¸œì(€ô((€Ù…ÈQ%-}%9QIY0€ô€ÄÀÀì€¼¼¡½Ü½™Ñ•¸Ñ¼Ñ¥¬¥¸µÌ(€Ù…ÈMÑÉ•…µ½¹ÑÉ½±±•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€¡}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€™Õ¹Ñ¥½¸MÑÉ•…µ½¹ÑÉ½±±•È¡¡±Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È¤ì(€€€€€Ù…È}Ñ¡¥Ìì(€€€€€}Ñ¡¥Ì€ô}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹…±°¡Ñ¡¥Ì°¡±Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È°€ÍÑÉ•…´µ½¹ÑÉ½±±•Èœ°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ñðÑ¡¥Ìì(€€€€€}Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ…À€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹±•Ù•°€ô€´Äì(€€€€€}Ñ¡¥Ì¹}™½É•MÑ…ÉÑ1½…€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹…±ÑÕ‘¥¼€ô€Àì(€€€€€}Ñ¡¥Ì¹…Õ‘¥½=¹±ä€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹™É…A±…å¥¹œ€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹™É…1…ÍÑ-‰ÁÌ€ô€Àì(€€€€€}Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ¥Ñ €ô™…±Í”ì(€€€€€}Ñ¡¥Ì¹Ù¥‘•½	Õ™™•È€ô¹Õ±°ì(€€€€€}Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€¼¼Ñ¥¬Ñ¼ÍÁ••ÕÀI}!9ÑÉ¥•É¥¹œ(€€€€€€€}Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ôì(€€€€€}Ñ¡¥Ì¹½¹5•‘¥…M••­•€ô™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€Ù…Èµ•‘¥„€ô}Ñ¡¥Ì¹µ•‘¥„ì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„€üµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€è¹Õ±°ì(€€€€€€€¥˜€¡ÕÉÉ•¹ÑQ¥µ”€ôôô¹Õ±°ñð€…¥Í¥¹¥Ñ•9Õµ‰•È¡ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€}Ñ¡¥Ì¹±½œ ‰5•‘¥„Í••­•Ñ¼€ˆ€¬ÕÉÉ•¹ÑQ¥µ”¹Ñ½¥á• Ì¤¤ì((€€€€€€€€¼¼%˜Í••­•Ý…Ì¥ÍÍÕ•‰•™½É”‰Õ™™•ÈÝ…Ì…ÁÁ•¹‘•‘¼¹½ÐÑ¥¬¥µµ•‘¥…Ñ•±ä(€€€€€€€¥˜€ …}Ñ¡¥Ì¹•Ñ	Õ™™•É•‘É…œ¡ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…È‰Õ™™•É%¹™¼€ô}Ñ¡¥Ì¹•ÑÝ‘	Õ™™•É%¹™½ÑA½Ì¡µ•‘¥„°ÕÉÉ•¹ÑQ¥µ”°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8°€À¤ì(€€€€€€€¥˜€¡‰Õ™™•É%¹™¼€ôôô¹Õ±°ñð‰Õ™™•É%¹™¼¹±•¸€ôôô€À¤ì(€€€€€€€€€}Ñ¡¥Ì¹Ý…É¸ ‰5…¥¸™½ÉÝ…É‰Õ™™•È±•¹Ñ …Ð€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆ½¸p‰Í••­•‘pˆ•Ù•¹Ð€ˆ€¬€¡‰Õ™™•É%¹™¼€ü‰Õ™™•É%¹™¼¹±•¸€è€•µÁÑäœ¤€¬€ˆ¤ˆ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô((€€€€€€€€¼¼Ñ¥¬Ñ¼ÍÁ••ÕÀI}!9ÑÉ¥•É¥¹œ(€€€€€€€}Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ôì(€€€€€}Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€É•ÑÕÉ¸}Ñ¡¥Ìì(€€€ô(€€€}¥¹¡•É¥ÑÍ1½½Í”¡MÑÉ•…µ½¹ÑÉ½±±•È°}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€Ù…È}ÁÉ½Ñ¼€ôMÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}AIM°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑA…ÉÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=%9°Ñ¡¥Ì¹½¹1•Ù•±1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}1=}5I9e}	=IQ°Ñ¡¥Ì¹½¹É…1½…‘µ•É•¹å‰½ÉÑ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!%9°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}IQ°Ñ¡¥Ì¹½¹	Õ™™•ÉÉ•…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹	UI}1UM!°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹I}	UI°Ñ¡¥Ì¹½¹É…	Õ™™•É•°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ¹…±°¡Ñ¡¥Ì¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}AIM°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑA…ÉÍ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}1=°Ñ¡¥Ì¹½¹1•Ù•±1½…‘•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}1=}5I9e}	=IQ°Ñ¡¥Ì¹½¹É…1½…‘µ•É•¹å‰½ÉÑ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!%9°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}IQ°Ñ¡¥Ì¹½¹	Õ™™•ÉÉ•…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹	UI}1UM!°Ñ¡¥Ì¹½¹	Õ™™•É±ÕÍ¡•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹I}	UI°Ñ¡¥Ì¹½¹É…	Õ™™•É•°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹!…¹‘±•É•ÍÑÉ½å¥¹œ€ô™Õ¹Ñ¥½¸½¹!…¹‘±•É•ÍÑÉ½å¥¹œ ¤ì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ€ôÑ¡¥Ì¹½¹5•‘¥…M••­•€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹!…¹‘±•É•ÍÑÉ½å¥¹œ¹…±°¡Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÑ…ÉÑ1½…€ô™Õ¹Ñ¥½¸ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸°Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹±•Ù•±Ì¤ì(€€€€€€€Ù…È±…ÍÑÕÉÉ•¹ÑQ¥µ”€ôÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”°(€€€€€€€€€¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€€€Ñ¡¥Ì¹ÍÑ½Á1½… ¤ì(€€€€€€€Ñ¡¥Ì¹Í•Ñ%¹Ñ•ÉÙ…°¡Q%-}%9QIY0¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•°€ô€´Äì(€€€€€€€¥˜€ …Ñ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•¤ì(€€€€€€€€€€¼¼‘•Ñ•Éµ¥¹”±½…±•Ù•°(€€€€€€€€€Ù…ÈÍÑ…ÉÑ1•Ù•°€ô¡±Ì¹ÍÑ…ÉÑ1•Ù•°ì(€€€€€€€€€¥˜€¡ÍÑ…ÉÑ1•Ù•°€ôôô€´Ä¤ì(€€€€€€€€€€€¥˜€¡¡±Ì¹½¹™¥œ¹Ñ•ÍÑ	…¹‘Ý¥‘Ñ €˜˜Ñ¡¥Ì¹±•Ù•±Ì¹±•¹Ñ €ø€Ä¤ì(€€€€€€€€€€€€€€¼¼€´Ä€èÕ•ÍÌÍÑ…ÉÐ1•Ù•°‰ä‘½¥¹œ„‰¥ÑÉ…Ñ”Ñ•ÍÐ‰ä±½…‘¥¹œ™¥ÉÍÐ™É…µ•¹Ð½˜±½Ý•ÍÐÅÕ…±¥Ñä±•Ù•°(€€€€€€€€€€€€€ÍÑ…ÉÑ1•Ù•°€ô€Àì(€€€€€€€€€€€€€Ñ¡¥Ì¹‰¥ÑÉ…Ñ•Q•ÍÐ€ôÑÉÕ”ì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€ÍÑ…ÉÑ1•Ù•°€ô¡±Ì¹™¥ÉÍÑÕÑ½1•Ù•°ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€€¼¼Í•Ð¹•Ü±•Ù•°Ñ¼Á±…å±¥ÍÐ±½…‘•È€èÑ¡¥ÌÝ¥±°ÑÉ¥•ÈÍÑ…ÉÐ±•Ù•°±½…(€€€€€€€€€€¼¼¡±Ì¹¹•áÑ1½…‘1•Ù•°É•µ…¥¹ÌÕ¹Ñ¥°¥Ð¥ÌÍ•ÐÑ¼„¹•ÜÙ…±Õ”½ÈÕ¹Ñ¥°„¹•Ü™É…œ¥ÌÍÕ•ÍÍ™Õ±±ä±½…‘•(€€€€€€€€€¡±Ì¹¹•áÑ1½…‘1•Ù•°€ôÍÑ…ÉÑ1•Ù•°ì(€€€€€€€€€Ñ¡¥Ì¹±•Ù•°€ô¡±Ì¹±½…‘1•Ù•°ì(€€€€€€€€€Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ€ô€„…Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€€ô(€€€€€€€€¼¼¥˜ÍÑ…ÉÑA½Í¥Ñ¥½¸Õ¹‘•™¥¹•‰ÕÐ±…ÍÑÕÉÉ•¹ÑQ¥µ”Í•Ð°Í•ÐÍÑ…ÉÑA½Í¥Ñ¥½¸Ñ¼±…ÍÐÕÉÉ•¹ÑQ¥µ”(€€€€€€€¥˜€¡±…ÍÑÕÉÉ•¹ÑQ¥µ”€ø€À€˜˜ÍÑ…ÉÑA½Í¥Ñ¥½¸€ôôô€´Ä€˜˜€…Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰=Ù•ÉÉ¥‘”ÍÑ…ÉÑA½Í¥Ñ¥½¸Ý¥Ñ ±…ÍÑÕÉÉ•¹ÑQ¥µ” ˆ€¬±…ÍÑÕÉÉ•¹ÑQ¥µ”¹Ñ½¥á• Ì¤¤ì(€€€€€€€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸€ô±…ÍÑÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ôÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”€ôÍÑ…ÉÑA½Í¥Ñ¥½¸€¬Ñ¡¥Ì¹Ñ¥µ•±¥¹•=™™Í•Ðì(€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑA½Í¥Ñ¥½¸€ôÍ­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸€ü€´Ä€èÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹}™½É•MÑ…ÉÑ1½…€ôÑÉÕ”ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹MQ=AAì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÑ½Á1½…€ô™Õ¹Ñ¥½¸ÍÑ½Á1½… ¤ì(€€€€€Ñ¡¥Ì¹}™½É•MÑ…ÉÑ1½…€ô™…±Í”ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹ÍÑ½Á1½…¹…±°¡Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹‘½Q¥¬€ô™Õ¹Ñ¥½¸‘½Q¥¬ ¤ì(€€€€€ÍÝ¥Ñ €¡Ñ¡¥Ì¹ÍÑ…Ñ”¤ì(€€€€€€€…Í”MÑ…Ñ”¹]%Q%9}1Y0è(€€€€€€€€€ì(€€€€€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€€€€€±•Ù•°€ôÑ¡¥Ì¹±•Ù•°ì(€€€€€€€€€€€Ù…ÈÕÉÉ•¹Ñ1•Ù•°€ô±•Ù•±Ì€ôô¹Õ±°€üÙ½¥€À€è±•Ù•±Ím±•Ù•±tì(€€€€€€€€€€€Ù…È‘•Ñ…¥±Ì€ôÕÉÉ•¹Ñ1•Ù•°€ôô¹Õ±°€üÙ½¥€À€èÕÉÉ•¹Ñ1•Ù•°¹‘•Ñ…¥±Ìì(€€€€€€€€€€€¥˜€¡‘•Ñ…¥±Ì€˜˜€ …‘•Ñ…¥±Ì¹±¥Ù”ñðÑ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•€ôôôÕÉÉ•¹Ñ1•Ù•°€˜˜€…Ñ¡¥Ì¹Ý…¥Ñ½É1¥Ù”¡ÕÉÉ•¹Ñ1•Ù•°¤¤¤ì(€€€€€€€€€€€€€¥˜€¡Ñ¡¥Ì¹Ý…¥Ñ½É‘¹QÕ¹•%¸¡‘•Ñ…¥±Ì¤¤ì(€€€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹¡±Ì¹¹•áÑ1½…‘1•Ù•°€„ôôÑ¡¥Ì¹±•Ù•°¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€ô(€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€€€…Í”MÑ…Ñ”¹I}1=%9}]%Q%9}IQIdè(€€€€€€€€€ì(€€€€€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„ì(€€€€€€€€€€€Ù…È¹½Ü€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€€€€€Ù…ÈÉ•ÑÉå…Ñ”€ôÑ¡¥Ì¹É•ÑÉå…Ñ”ì(€€€€€€€€€€€€¼¼¥˜ÕÉÉ•¹ÐÑ¥µ”¥ÌÐÑ¡…¸É•ÑÉå…Ñ”°½È¥˜µ•‘¥„Í••­¥¹œ±•ÐÌÍÝ¥Ñ Ñ¼%1ÍÑ…Ñ”Ñ¼É•ÑÉä±½…‘¥¹œ(€€€€€€€€€€€¥˜€ …É•ÑÉå…Ñ”ñð¹½Ü€øôÉ•ÑÉå…Ñ”ñð€¡}Ñ¡¥Ì‘µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘µ•‘¥„¹Í••­¥¹œ¤ì(€€€€€€€€€€€€€Ù…È}±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€€€€€€€}±•Ù•°€ôÑ¡¥Ì¹±•Ù•°ì(€€€€€€€€€€€€€Ù…È}ÕÉÉ•¹Ñ1•Ù•°€ô}±•Ù•±Ì€ôô¹Õ±°€üÙ½¥€À€è}±•Ù•±Ím}±•Ù•±tì(€€€€€€€€€€€€€Ñ¡¥Ì¹É•Í•ÑMÑ…ÉÑ]¡•¹9½Ñ1½…‘•¡}ÕÉÉ•¹Ñ1•Ù•°ñð¹Õ±°¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€‰É•…¬ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹%1¤ì(€€€€€€€Ñ¡¥Ì¹‘½Q¥­%‘±” ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹½¹Q¥­¹ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹Q¥­¹€ô™Õ¹Ñ¥½¸½¹Q¥­¹ ¤ì(€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„Èì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹Q¥­¹¹…±°¡Ñ¡¥Ì¤ì(€€€€€¥˜€ ¡}Ñ¡¥Ì‘µ•‘¥„È€ôÑ¡¥Ì¹µ•‘¥„¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘µ•‘¥„È¹É•…‘åMÑ…Ñ”€˜˜Ñ¡¥Ì¹µ•‘¥„¹Í••­¥¹œ€ôôô™…±Í”¤ì(€€€€€€€Ñ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”€ôÑ¡¥Ì¹µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡•­É…µ•¹Ñ¡…¹• ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹‘½Q¥­%‘±”€ô™Õ¹Ñ¥½¸‘½Q¥­%‘±” ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ì°(€€€€€€€±•Ù•±1…ÍÑ1½…‘•€ôÑ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•°(€€€€€€€±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì((€€€€€€¼¼¥˜ÍÑ…ÉÐ±•Ù•°¹½ÐÁ…ÉÍ•å•Ð=H(€€€€€€¼¼¥˜Ù¥‘•¼¹½Ð…ÑÑ…¡•9ÍÑ…ÉÐ™É…µ•¹Ð…±É•…‘äÉ•ÅÕ•ÍÑ•=HÍÑ…ÉÐ™É…œÁÉ•™•Ñ ¹½Ð•¹…‰±•(€€€€€€¼¼•á¥Ð±½½À°…ÌÝ”•¥Ñ¡•È¹••µ½É”¥¹™¼€¡±•Ù•°¹½ÐÁ…ÉÍ•¤½ÈÝ”¹••µ•‘¥„Ñ¼‰”…ÑÑ…¡•Ñ¼±½…¹•Ü™É…µ•¹Ð(€€€€€¥˜€¡±•Ù•±1…ÍÑ1½…‘•€ôôô¹Õ±°ñð€…µ•‘¥„€˜˜€…Ñ¡¥Ì¹ÁÉ¥µ…ÉåAÉ•™•Ñ €˜˜€¡Ñ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•ñð€…¡±Ì¹½¹™¥œ¹ÍÑ…ÉÑÉ…AÉ•™•Ñ ¤¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼%˜Ñ¡”€‰µ…¥¸ˆ±•Ù•°¥Ì…Õ‘¥¼µ½¹±ä‰ÕÐÝ”…É”±½…‘¥¹œ…¸…±Ñ•É¹…Ñ”ÑÉ…¬¥¸Ñ¡”Í…µ”É½ÕÀ°‘¼¹½Ð±½……¹åÑ¡¥¹œ(€€€€€¥˜€¡Ñ¡¥Ì¹…±ÑÕ‘¥¼€˜˜Ñ¡¥Ì¹…Õ‘¥½=¹±ä¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±•Ù•°€ôÑ¡¥Ì¹‰Õ™™•É¥¹œ€ü¡±Ì¹¹•áÑ1½…‘1•Ù•°€è¡±Ì¹±½…‘1•Ù•°ì(€€€€€¥˜€ „¡±•Ù•±Ì€„ô¹Õ±°€˜˜±•Ù•±Ím±•Ù•±t¤¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±•Ù•±%¹™¼€ô±•Ù•±Ím±•Ù•±tì((€€€€€€¼¼¥˜‰Õ™™•È±•¹Ñ ¥Ì±•ÍÌÑ¡…¸µ…á	Õ™1•¸ÑÉäÑ¼±½…„¹•Ü™É…µ•¹Ð((€€€€€Ù…È‰Õ™™•É%¹™¼€ôÑ¡¥Ì¹•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼ ¤ì(€€€€€¥˜€¡‰Õ™™•É%¹™¼€ôôô¹Õ±°¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±…ÍÑ•Ñ…¥±Ì€ôÑ¡¥Ì¹•Ñ1•Ù•±•Ñ…¥±Ì ¤ì(€€€€€¥˜€¡±…ÍÑ•Ñ…¥±Ì€˜˜Ñ¡¥Ì¹}ÍÑÉ•…µ¹‘•¡‰Õ™™•É%¹™¼°±…ÍÑ•Ñ…¥±Ì¤¤ì(€€€€€€€Ù…È‘…Ñ„€ôíôì(€€€€€€€¥˜€¡Ñ¡¥Ì¹…±ÑÕ‘¥¼€ôôô€È¤ì(€€€€€€€€€‘…Ñ„¹ÑåÁ”€ô€Ù¥‘•¼œì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹	UI}=L°‘…Ñ„¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹9ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€ …Ñ¡¥Ì¹‰Õ™™•É¥¹œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô((€€€€€€¼¼Í•Ð¹•áÐ±½…±•Ù•°€èÑ¡¥ÌÝ¥±°ÑÉ¥•È„Á±…å±¥ÍÐ±½…¥˜¹••‘•(€€€€€¥˜€¡¡±Ì¹±½…‘1•Ù•°€„ôô±•Ù•°€˜˜¡±Ì¹µ…¹Õ…±1•Ù•°€ôôô€´Ä¤ì(€€€€€€€Ñ¡¥Ì¹±½œ ‰‘…ÁÑ¥¹œÑ¼±•Ù•°€ˆ€¬±•Ù•°€¬€ˆ™É½´±•Ù•°€ˆ€¬Ñ¡¥Ì¹±•Ù•°¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±•Ù•°€ô¡±Ì¹¹•áÑ1½…‘1•Ù•°€ô±•Ù•°ì(€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô±•Ù•±%¹™¼¹‘•Ñ…¥±Ìì(€€€€€€¼¼¥˜±•Ù•°¥¹™¼¹½ÐÉ•ÑÉ¥•Ù•å•Ð°ÍÝ¥Ñ ÍÑ…Ñ”…¹Ý…¥Ð™½È±•Ù•°É•ÑÉ¥•Ù…°(€€€€€€¼¼¥˜±¥Ù”Á±…å±¥ÍÐ°•¹ÍÕÉ”Ñ¡…Ð¹•ÜÁ±…å±¥ÍÐ¡…Ì‰••¸É•™É•Í¡•Ñ¼…Ù½¥±½…‘¥¹œ½ÑÉäÑ¼±½…(€€€€€€¼¼„ÕÍ•±•ÍÌ…¹½ÕÑ‘…Ñ•™É…µ•¹Ð€¡Ñ¡…Ðµ¥¡Ð•Ù•¸¥¹ÑÉ½‘Õ”±½…•ÉÉ½È¥˜¥Ð¥Ì…±É•…‘ä½ÕÐ½˜Ñ¡”±¥Ù”Á±…å±¥ÍÐ¤(€€€€€¥˜€ …±•Ù•±•Ñ…¥±ÌñðÑ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹]%Q%9}1Y0ñðÑ¡¥Ì¹Ý…¥Ñ½É1¥Ù”¡±•Ù•±%¹™¼¤¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•°€ô±•Ù•°ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹]%Q%9}1Y0ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€ô™…±Í”ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È‰Õ™™•É1•¸€ô‰Õ™™•É%¹™¼¹±•¸ì((€€€€€€¼¼½µÁÕÑ”µ…à	Õ™™•È1•¹Ñ Ñ¡…ÐÝ”½Õ±•Ð™É½´Ñ¡¥Ì±½…±•Ù•°°‰…Í•½¸±•Ù•°‰¥ÑÉ…Ñ”¸‘½¸Ð‰Õ™™•Èµ½É”Ñ¡…¸€ØÀ5…¹µ½É”Ñ¡…¸€ÌÁÌ(€€€€€Ù…Èµ…á	Õ™1•¸€ôÑ¡¥Ì¹•Ñ5…á	Õ™™•É1•¹Ñ ¡±•Ù•±%¹™¼¹µ…á	¥ÑÉ…Ñ”¤ì((€€€€€€¼¼MÑ…ä¥‘±”¥˜Ý”…É”ÍÑ¥±°Ý¥Ñ ‰Õ™™•Èµ…É¥¹Ì(€€€€€¥˜€¡‰Õ™™•É1•¸€øôµ…á	Õ™1•¸¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€˜˜Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð¹ÍÑ…ÉÐ€ø‰Õ™™•É%¹™¼¹•¹¤ì(€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€ô(€€€€€Ù…ÈÑ…É•Ñ	Õ™™•ÉQ¥µ”€ôÑ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€üÑ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð¹ÍÑ…ÉÐ€è‰Õ™™•É%¹™¼¹•¹ì(€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹•Ñ9•áÑÉ…µ•¹Ð¡Ñ…É•Ñ	Õ™™•ÉQ¥µ”°±•Ù•±•Ñ…¥±Ì¤ì(€€€€€€¼¼Ù½¥‰…­ÑÉ…­¥¹œ‰ä±½…‘¥¹œ…¸•…É±¥•ÈÍ•µ•¹Ð¥¸ÍÑÉ•…µÌÝ¥Ñ Í•µ•¹ÑÌÑ¡…Ð‘¼¹½ÐÍÑ…ÉÐÝ¥Ñ „­•ä™É…µ”€¡™±…•‰ä½Õ±‘	…­ÑÉ…­€¤(€€€€€¥˜€¡Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€˜˜€…Ñ¡¥Ì¹™É…AÉ•Ù¥½ÕÌ€˜˜™É…œ€˜˜¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤€˜˜Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•ÑMÑ…Ñ”¡™É…œ¤€„ôôÉ…µ•¹ÑMÑ…Ñ”¹=,¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘‰…­ÑÉ…­É…µ”ì(€€€€€€€Ù…È‰…­ÑÉ…­M¸€ô€ ¡}Ñ¡¥Ì‘‰…­ÑÉ…­É…µ”€ôÑ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð¤€„ô¹Õ±°€ü}Ñ¡¥Ì‘‰…­ÑÉ…­É…µ”€è™É…œ¤¹Í¸ì(€€€€€€€Ù…È™É…%‘à€ô‰…­ÑÉ…­M¸€´±•Ù•±•Ñ…¥±Ì¹ÍÑ…ÉÑM8ì(€€€€€€€Ù…È‰…­ÑÉ…­É…œ€ô±•Ù•±•Ñ…¥±Ì¹™É…µ•¹ÑÍm™É…%‘à€´€Åtì(€€€€€€€¥˜€¡‰…­ÑÉ…­É…œ€˜˜™É…œ¹Œ€ôôô‰…­ÑÉ…­É…œ¹Œ¤ì(€€€€€€€€€™É…œ€ô‰…­ÑÉ…­É…œì(€€€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡‰…­ÑÉ…­É…œ¤ì(€€€€€€€ô(€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€˜˜‰Õ™™•É%¹™¼¹±•¸¤ì(€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€ô(€€€€€€¼¼Ù½¥±½½À±½…‘¥¹œ‰äÕÍ¥¹œ¹•áÑ1½…‘A½Í¥Ñ¥½¸Í•Ð™½È‰…­ÑÉ…­¥¹œ…¹Í­¥ÁÁ¥¹œ½¹Í•ÕÑ¥Ù”@Ñ…Ì(€€€€€¥˜€¡™É…œ€˜˜Ñ¡¥Ì¹¥Í1½½Á1½…‘¥¹œ¡™É…œ°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤¤ì(€€€€€€€Ù…È…ÁMÑ…ÉÐ€ô™É…œ¹…Àì(€€€€€€€¥˜€ ……ÁMÑ…ÉÐ¤ì(€€€€€€€€€€¼¼±•…¹ÕÀÑ¡”™É…µ•¹ÐÑÉ…­•È‰•™½É”ÑÉå¥¹œÑ¼™¥¹Ñ¡”¹•áÐÕ¹‰Õ™™•É•™É…µ•¹Ð(€€€€€€€€€Ù…ÈÑåÁ”€ôÑ¡¥Ì¹…Õ‘¥½=¹±ä€˜˜€…Ñ¡¥Ì¹…±ÑÕ‘¥¼€ü±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹U%<€è±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹Y%<ì(€€€€€€€€€Ù…Èµ•‘¥…	Õ™™•È€ô€¡ÑåÁ”€ôôô±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹Y%<€üÑ¡¥Ì¹Ù¥‘•½	Õ™™•È€èÑ¡¥Ì¹µ•‘¥…	Õ™™•È¤ñðÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€€€¥˜€¡µ•‘¥…	Õ™™•È¤ì(€€€€€€€€€€€Ñ¡¥Ì¹…™Ñ•É	Õ™™•É±ÕÍ¡•¡µ•‘¥…	Õ™™•È°ÑåÁ”°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€™É…œ€ôÑ¡¥Ì¹•Ñ9•áÑÉ…µ•¹Ñ1½½Á1½…‘¥¹œ¡™É…œ°±•Ù•±•Ñ…¥±Ì°‰Õ™™•É%¹™¼°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8°µ…á	Õ™1•¸¤ì(€€€€€ô(€€€€€¥˜€ …™É…œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€¡™É…œ¹¥¹¥ÑM•µ•¹Ð€˜˜€…™É…œ¹¥¹¥ÑM•µ•¹Ð¹‘…Ñ„€˜˜€…Ñ¡¥Ì¹‰¥ÑÉ…Ñ•Q•ÍÐ¤ì(€€€€€€€™É…œ€ô™É…œ¹¥¹¥ÑM•µ•¹Ðì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½…‘É…µ•¹Ð¡™É…œ°±•Ù•±%¹™¼°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘É…µ•¹Ð€ô™Õ¹Ñ¥½¸±½…‘É…µ•¹Ð¡™É…œ°±•Ù•°°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€€€€¼¼¡•¬¥˜™É…µ•¹Ð¥Ì¹½Ð±½…‘•(€€€€€Ù…È™É…MÑ…Ñ”€ôÑ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•ÑMÑ…Ñ”¡™É…œ¤ì(€€€€€¥˜€¡™É…MÑ…Ñ”€ôôôÉ…µ•¹ÑMÑ…Ñ”¹9=Q}1=ñð™É…MÑ…Ñ”€ôôôÉ…µ•¹ÑMÑ…Ñ”¹AIQ%0¤ì(€€€€€€€¥˜€ …¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤¤ì(€€€€€€€€€Ñ¡¥Ì¹}±½…‘%¹¥ÑM•µ•¹Ð¡™É…œ°±•Ù•°¤ì(€€€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹‰¥ÑÉ…Ñ•Q•ÍÐ¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰É…µ•¹Ð€ˆ€¬™É…œ¹Í¸€¬€ˆ½˜±•Ù•°€ˆ€¬™É…œ¹±•Ù•°€¬€ˆ¥Ì‰•¥¹œ‘½Ý¹±½…‘•Ñ¼Ñ•ÍÐ‰¥ÑÉ…Ñ”…¹Ý¥±°¹½Ð‰”‰Õ™™•É•ˆ¤ì(€€€€€€€€€Ñ¡¥Ì¹}±½…‘	¥ÑÉ…Ñ•Q•ÍÑÉ…œ¡™É…œ°±•Ù•°¤ì(€€€€€€€ô•±Í”ì(€€€€€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹±½…‘É…µ•¹Ð¹…±°¡Ñ¡¥Ì°™É…œ°±•Ù•°°Ñ…É•Ñ	Õ™™•ÉQ¥µ”¤ì(€€€€€€€ô(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹±•…ÉQÉ…­•É%™9••‘•¡™É…œ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ	Õ™™•É•‘É…œ€ô™Õ¹Ñ¥½¸•Ñ	Õ™™•É•‘É…œ¡Á½Í¥Ñ¥½¸¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹•Ñ	Õ™™•É•‘É…œ¡Á½Í¥Ñ¥½¸°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹™½±±½Ý¥¹	Õ™™•É•‘É…œ€ô™Õ¹Ñ¥½¸™½±±½Ý¥¹	Õ™™•É•‘É…œ¡™É…œ¤ì(€€€€€¥˜€¡™É…œ¤ì(€€€€€€€€¼¼ÑÉäÑ¼•ÐÉ…¹”½˜¹•áÐ™É…µ•¹Ð€ ÔÀÁµÌ…™Ñ•ÈÑ¡¥ÌÉ…¹”¤(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•Ñ	Õ™™•É•‘É…œ¡™É…œ¹•¹€¬€À¸Ô¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô((€€€€¼¨(€€€€€½¸¥µµ•‘¥…Ñ”±•Ù•°ÍÝ¥Ñ €è(€€€€€€€´Á…ÕÍ”Á±…å‰…¬¥˜Á±…å¥¹œ(€€€€€€€´…¹•°…¹äÁ•¹‘¥¹œ±½…É•ÅÕ•ÍÐ(€€€€€€€´…¹ÑÉ¥•È„‰Õ™™•È™±ÕÍ (€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹¥µµ•‘¥…Ñ•1•Ù•±MÝ¥Ñ €ô™Õ¹Ñ¥½¸¥µµ•‘¥…Ñ•1•Ù•±MÝ¥Ñ  ¤ì(€€€€€Ñ¡¥Ì¹…‰½ÉÑÕÉÉ•¹ÑÉ…œ ¤ì(€€€€€Ñ¡¥Ì¹™±ÕÍ¡5…¥¹	Õ™™•È À°9Õµ‰•È¹A=M%Q%Y}%9%9%Qd¤ì(€€€ô((€€€€¼¨¨(€€€€€¨ÑÉäÑ¼ÍÝ¥Ñ M@Ý¥Ñ¡½ÕÐ‰É•…­¥¹œÙ¥‘•¼Á±…å‰…¬è(€€€€€¨¥¸½É‘•ÈÑ¼•¹ÍÕÉ”Íµ½½Ñ ‰ÕÐÅÕ¥¬±•Ù•°ÍÝ¥Ñ¡¥¹œ°(€€€€€¨Ý”¹••Ñ¼™¥¹Ñ¡”¹•áÐ™±ÕÍ¡…‰±”‰Õ™™•ÈÉ…¹”(€€€€€¨Ý”Í¡½Õ±Ñ…­”¥¹Ñ¼…½Õ¹Ð¹•ÜÍ•µ•¹Ð™•Ñ Ñ¥µ”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹¹•áÑ1•Ù•±MÝ¥Ñ €ô™Õ¹Ñ¥½¸¹•áÑ1•Ù•±MÝ¥Ñ  ¤ì(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€€¼¼•¹ÍÕÉ”Ñ¡…Ðµ•‘¥„¥Ì‘•™¥¹•…¹Ñ¡…Ðµ•Ñ…‘…Ñ„…É”…Ù…¥±…‰±”€¡Ñ¼É•ÑÉ¥•Ù”ÕÉÉ•¹ÑQ¥µ”¤(€€€€€¥˜€¡µ•‘¥„€„ô¹Õ±°€˜˜µ•‘¥„¹É•…‘åMÑ…Ñ”¤ì(€€€€€€€Ù…È™•Ñ¡‘•±…äì(€€€€€€€Ù…È™É…A±…å¥¹ÕÉÉ•¹Ð€ôÑ¡¥Ì¹•ÑÁÁ•¹‘•‘É…œ¡µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€¥˜€¡™É…A±…å¥¹ÕÉÉ•¹Ð€˜˜™É…A±…å¥¹ÕÉÉ•¹Ð¹ÍÑ…ÉÐ€ø€Ä¤ì(€€€€€€€€€€¼¼™±ÕÍ ‰Õ™™•ÈÁÉ••‘¥¹œÕÉÉ•¹Ð™É…µ•¹Ð€¡™±ÕÍ Õ¹Ñ¥°ÕÉÉ•¹Ð™É…µ•¹ÐÍÑ…ÉÐ½™™Í•Ð¤(€€€€€€€€€€¼¼µ¥¹ÕÌ€ÅÌÑ¼…Ù½¥Ù¥‘•¼™É••é¥¹œ°Ñ¡…Ð½Õ±¡…ÁÁ•¸¥˜Ý”™±ÕÍ ­•å™É…µ”½˜ÕÉÉ•¹ÐÙ¥‘•¼€¸¸¸(€€€€€€€€€Ñ¡¥Ì¹™±ÕÍ¡5…¥¹	Õ™™•È À°™É…A±…å¥¹ÕÉÉ•¹Ð¹ÍÑ…ÉÐ€´€Ä¤ì(€€€€€€€ô(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹•Ñ1•Ù•±•Ñ…¥±Ì ¤ì(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì€„ô¹Õ±°€˜˜±•Ù•±•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€€€Ù…È‰Õ™™•É%¹™¼€ôÑ¡¥Ì¹•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼ ¤ì(€€€€€€€€€€¼¼¼¹½Ð™±ÕÍ ¥¸±¥Ù”ÍÑÉ•…´Ý¥Ñ ±½Ü‰Õ™™•È(€€€€€€€€€¥˜€ …‰Õ™™•É%¹™¼ñð‰Õ™™•É%¹™¼¹±•¸€ð±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸€¨€È¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€¥˜€ …µ•‘¥„¹Á…ÕÍ•€˜˜±•Ù•±Ì¤ì(€€€€€€€€€€¼¼…‘„Í…™•Ñä‘•±…ä½˜€ÅÌ(€€€€€€€€€Ù…È¹•áÑ1•Ù•±%€ôÑ¡¥Ì¹¡±Ì¹¹•áÑ1½…‘1•Ù•°ì(€€€€€€€€€Ù…È¹•áÑ1•Ù•°€ô±•Ù•±Ím¹•áÑ1•Ù•±%‘tì(€€€€€€€€€Ù…È™É…1…ÍÑ-‰ÁÌ€ôÑ¡¥Ì¹™É…1…ÍÑ-‰ÁÌì(€€€€€€€€€¥˜€¡™É…1…ÍÑ-‰ÁÌ€˜˜Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð¤ì(€€€€€€€€€€€™•Ñ¡‘•±…ä€ôÑ¡¥Ì¹™É…ÕÉÉ•¹Ð¹‘ÕÉ…Ñ¥½¸€¨¹•áÑ1•Ù•°¹µ…á	¥ÑÉ…Ñ”€¼€ ÄÀÀÀ€¨™É…1…ÍÑ-‰ÁÌ¤€¬€Äì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€™•Ñ¡‘•±…ä€ô€Àì(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€™•Ñ¡‘•±…ä€ô€Àì(€€€€€€€ô(€€€€€€€€¼¼Ñ¡¥Ì¹±½œ ™•Ñ¡‘•±…äèœ­™•Ñ¡‘•±…ä¤ì(€€€€€€€€¼¼™¥¹‰Õ™™•ÈÉ…¹”Ñ¡…ÐÝ¥±°‰”É•…¡•½¹”¹•Ü™É…µ•¹ÐÝ¥±°‰”™•Ñ¡•(€€€€€€€Ù…È‰Õ™™•É•‘É…œ€ôÑ¡¥Ì¹•Ñ	Õ™™•É•‘É…œ¡µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€¬™•Ñ¡‘•±…ä¤ì(€€€€€€€¥˜€¡‰Õ™™•É•‘É…œ¤ì(€€€€€€€€€€¼¼Ý”…¸™±ÕÍ ‰Õ™™•ÈÉ…¹”™½±±½Ý¥¹œÑ¡¥Ì½¹”Ý¥Ñ¡½ÕÐÍÑ…±±¥¹œÁ±…å‰…¬(€€€€€€€€€Ù…È¹•áÑ	Õ™™•É•‘É…œ€ôÑ¡¥Ì¹™½±±½Ý¥¹	Õ™™•É•‘É…œ¡‰Õ™™•É•‘É…œ¤ì(€€€€€€€€€¥˜€¡¹•áÑ	Õ™™•É•‘É…œ¤ì(€€€€€€€€€€€€¼¼¥˜Ý”…É”¡•É”°Ý”…¸…±Í¼…¹•°…¹ä±½…‘¥¹œ½‘•µÕá¥¹œ¥¸ÁÉ½É•ÍÌ°…ÌÑ¡•ä…É”ÕÍ•±•ÍÌ(€€€€€€€€€€€Ñ¡¥Ì¹…‰½ÉÑÕÉÉ•¹ÑÉ…œ ¤ì(€€€€€€€€€€€€¼¼ÍÑ…ÉÐ™±ÕÍ Á½Í¥Ñ¥½¸¥Ì¥¸¹•áÐ‰Õ™™•É•™É…œ¸1•…Ù”Í½µ”Á…‘‘¥¹œ™½È¹½¸µ¥¹‘•Á•¹‘•¹ÐÍ•µ•¹ÑÌ…¹Íµ½½Ñ¡•ÈÁ±…å‰…¬¸(€€€€€€€€€€€Ù…Èµ…áMÑ…ÉÐ€ô¹•áÑ	Õ™™•É•‘É…œ¹µ…áMÑ…ÉÑAQL€ü¹•áÑ	Õ™™•É•‘É…œ¹µ…áMÑ…ÉÑAQL€è¹•áÑ	Õ™™•É•‘É…œ¹ÍÑ…ÉÐì(€€€€€€€€€€€Ù…È™É…ÕÉ…Ñ¥½¸€ô¹•áÑ	Õ™™•É•‘É…œ¹‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€€€Ù…ÈÍÑ…ÉÑAÑÌ€ô5…Ñ ¹µ…à¡‰Õ™™•É•‘É…œ¹•¹°µ…áMÑ…ÉÐ€¬5…Ñ ¹µ¥¸¡5…Ñ ¹µ…à¡™É…ÕÉ…Ñ¥½¸€´Ñ¡¥Ì¹½¹™¥œ¹µ…áÉ…1½½­UÁQ½±•É…¹”°™É…ÕÉ…Ñ¥½¸€¨€¡Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ü€À¸Ô€è€À¸ÄÈÔ¤¤°™É…ÕÉ…Ñ¥½¸€¨€¡Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ü€À¸ÜÔ€è€À¸ÈÔ¤¤¤ì(€€€€€€€€€€€Ñ¡¥Ì¹™±ÕÍ¡5…¥¹	Õ™™•È¡ÍÑ…ÉÑAÑÌ°9Õµ‰•È¹A=M%Q%Y}%9%9%Qd¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹…‰½ÉÑÕÉÉ•¹ÑÉ…œ€ô™Õ¹Ñ¥½¸…‰½ÉÑÕÉÉ•¹ÑÉ…œ ¤ì(€€€€€Ù…È™É…ÕÉÉ•¹Ð€ôÑ¡¥Ì¹™É…ÕÉÉ•¹Ðì(€€€€€Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€¥˜€¡™É…ÕÉÉ•¹Ð¤ì(€€€€€€€™É…ÕÉÉ•¹Ð¹…‰½ÉÑI•ÅÕ•ÍÑÌ ¤ì(€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡™É…ÕÉÉ•¹Ð¤ì(€€€€€ô(€€€€€ÍÝ¥Ñ €¡Ñ¡¥Ì¹ÍÑ…Ñ”¤ì(€€€€€€€…Í”MÑ…Ñ”¹-e}1=%9è(€€€€€€€…Í”MÑ…Ñ”¹I}1=%9è(€€€€€€€…Í”MÑ…Ñ”¹I}1=%9}]%Q%9}IQIdè(€€€€€€€…Í”MÑ…Ñ”¹AIM%9è(€€€€€€€…Í”MÑ…Ñ”¹AIMè(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€‰É•…¬ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ôÑ¡¥Ì¹•Ñ1½…‘A½Í¥Ñ¥½¸ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹™±ÕÍ¡5…¥¹	Õ™™•È€ô™Õ¹Ñ¥½¸™±ÕÍ¡5…¥¹	Õ™™•È¡ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•Ð¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹™±ÕÍ¡5…¥¹	Õ™™•È¹…±°¡Ñ¡¥Ì°ÍÑ…ÉÑ=™™Í•Ð°•¹‘=™™Í•Ð°Ñ¡¥Ì¹…±ÑÕ‘¥¼€ôôô€È€ü€Ù¥‘•¼œ€è¹Õ±°¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…ÑÑ…¡•€ô™Õ¹Ñ¥½¸½¹5•‘¥…ÑÑ…¡•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹5•‘¥…ÑÑ…¡•¹…±°¡Ñ¡¥Ì°•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…Èµ•‘¥„€ô‘…Ñ„¹µ•‘¥„ì(€€€€€…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Á±…å¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ¤ì(€€€€€…‘‘Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Í••­•œ°Ñ¡¥Ì¹½¹5•‘¥…M••­•¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5•‘¥…•Ñ…¡¥¹œ€ô™Õ¹Ñ¥½¸½¹5•‘¥…•Ñ…¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€¡µ•‘¥„¤ì(€€€€€€€É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Á±…å¥¹œœ°Ñ¡¥Ì¹½¹5•‘¥…A±…å¥¹œ¤ì(€€€€€€€É•µ½Ù•Ù•¹Ñ1¥ÍÑ•¹•È¡µ•‘¥„°€Í••­•œ°Ñ¡¥Ì¹½¹5•‘¥…M••­•¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹Ù¥‘•½	Õ™™•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹™É…A±…å¥¹œ€ô¹Õ±°ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹5•‘¥…•Ñ…¡¥¹œ¹…±°¡Ñ¡¥Ì°•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…ÈÑÉ…¹Í™•ÉÉ¥¹5•‘¥„€ô€„…‘…Ñ„¹ÑÉ…¹Í™•É5•‘¥„ì(€€€€€¥˜€¡ÑÉ…¹Í™•ÉÉ¥¹5•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ€ô™…±Í”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ ¤ì(€€€€€}	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¹ÁÉ½Ñ½ÑåÁ”¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ¹…±°¡Ñ¡¥Ì¤ì(€€€€€€¼¼É•Í•Ð‰Õ™™•È½¸µ…¹¥™•ÍÐ±½…‘¥¹œ(€€€€€Ñ¡¥Ì¹±½œ QÉ¥•È	UI}IMPœ¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹	UI}IMP°Õ¹‘•™¥¹•¤ì(€€€€€Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ô™…±Í”ì(€€€€€Ñ¡¥Ì¹™É…1…ÍÑ-‰ÁÌ€ô€Àì(€€€€€Ñ¡¥Ì¹™É…A±…å¥¹œ€ôÑ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…±ÑÕ‘¥¼€ô€Àì(€€€€€Ñ¡¥Ì¹…Õ‘¥½=¹±ä€ô™…±Í”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑA…ÉÍ•€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑA…ÉÍ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€€¼¼‘•Ñ•Ð¥˜Ý”¡…Ù”‘¥™™•É•¹Ð­¥¹½˜…Õ‘¥¼½‘•ÌÕÍ•…µ½¹ÍÐÁ±…å±¥ÍÑÌ(€€€€€Ù…È……Œ€ô™…±Í”ì(€€€€€Ù…È¡•……Œ€ô™…±Í”ì(€€€€€‘…Ñ„¹±•Ù•±Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡±•Ù•°¤ì(€€€€€€€Ù…È½‘•Œ€ô±•Ù•°¹…Õ‘¥½½‘•Œì(€€€€€€€¥˜€¡½‘•Œ¤ì(€€€€€€€€€……Œ€ô……Œñð½‘•Œ¹¥¹‘•á=˜ µÀÑ„¸ÐÀ¸Èœ¤€„ôô€´Äì(€€€€€€€€€¡•……Œ€ô¡•……Œñð½‘•Œ¹¥¹‘•á=˜ µÀÑ„¸ÐÀ¸Ôœ¤€„ôô€´Äì(€€€€€€€ô(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ¥Ñ €ô……Œ€˜˜¡•……Œ€˜˜€…¡…¹•QåÁ•MÕÁÁ½ÉÑ• ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ¥Ñ ¤ì(€€€€€€€Ñ¡¥Ì¹±½œ 	½Ñ ½!µ…Õ‘¥¼™½Õ¹¥¸±•Ù•±Ìì‘•±…É¥¹œ±•Ù•°½‘•Œ…Ì!µœ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±•Ù•±Ì€ô‘…Ñ„¹±•Ù•±Ìì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€ô™…±Í”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ìì(€€€€€¥˜€ …±•Ù•±ÌñðÑ¡¥Ì¹ÍÑ…Ñ”€„ôôMÑ…Ñ”¹%1¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±•Ù•°€ô‘…Ñ„¹±•Ù•±%¹™¼ì(€€€€€¥˜€ …±•Ù•°¹‘•Ñ…¥±Ìñð±•Ù•°¹‘•Ñ…¥±Ì¹±¥Ù”€˜˜€¡Ñ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•€„ôô±•Ù•°ñð±•Ù•°¹‘•Ñ…¥±Ì¹•áÁ¥É•¤ñðÑ¡¥Ì¹Ý…¥Ñ½É‘¹QÕ¹•%¸¡±•Ù•°¹‘•Ñ…¥±Ì¤¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹]%Q%9}1Y0ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘•€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}ÕÉ1•Ù•°‘‘•Ñ…¥±Ìì(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€ôÑ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•ì(€€€€€Ù…È¹•Ý1•Ù•±%€ô‘…Ñ„¹±•Ù•°ì(€€€€€Ù…È¹•Ý•Ñ…¥±Ì€ô‘…Ñ„¹‘•Ñ…¥±Ìì(€€€€€Ù…È‘ÕÉ…Ñ¥½¸€ô¹•Ý•Ñ…¥±Ì¹Ñ½Ñ…±‘ÕÉ…Ñ¥½¸ì(€€€€€¥˜€ …±•Ù•±Ì¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰1•Ù•±ÌÝ•É”É•Í•ÐÝ¡¥±”±½…‘¥¹œ±•Ù•°€ˆ€¬¹•Ý1•Ù•±%¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½œ ‰1•Ù•°€ˆ€¬¹•Ý1•Ù•±%€¬€ˆ±½…‘•lˆ€¬¹•Ý•Ñ…¥±Ì¹ÍÑ…ÉÑM8€¬€ˆ°ˆ€¬¹•Ý•Ñ…¥±Ì¹•¹‘M8€¬€‰tˆ€¬€¡¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑM¸€ü€‰mÁ…ÉÐ´ˆ€¬¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑM¸€¬€ˆ´ˆ€¬¹•Ý•Ñ…¥±Ì¹±…ÍÑA…ÉÑ%¹‘•à€¬€‰tˆ€è€œœ¤€¬€ˆ°Œlˆ€¬¹•Ý•Ñ…¥±Ì¹ÍÑ…ÉÑ€¬€ˆ°€ˆ€¬¹•Ý•Ñ…¥±Ì¹•¹‘€¬€‰t‘ÕÉ…Ñ¥½¸èˆ€¬‘ÕÉ…Ñ¥½¸¤ì(€€€€€Ù…ÈÕÉ1•Ù•°€ô‘…Ñ„¹±•Ù•±%¹™¼ì(€€€€€Ù…È™É…ÕÉÉ•¹Ð€ôÑ¡¥Ì¹™É…ÕÉÉ•¹Ðì(€€€€€¥˜€¡™É…ÕÉÉ•¹Ð€˜˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹I}1=%9ñðÑ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹I}1=%9}]%Q%9}IQId¤¤ì(€€€€€€€¥˜€¡™É…ÕÉÉ•¹Ð¹±•Ù•°€„ôô‘…Ñ„¹±•Ù•°€˜˜™É…ÕÉÉ•¹Ð¹±½…‘•È¤ì(€€€€€€€€€Ñ¡¥Ì¹…‰½ÉÑÕÉÉ•¹ÑÉ…œ ¤ì(€€€€€€€ô(€€€€€ô(€€€€€Ù…ÈÍ±¥‘¥¹œ€ô€Àì(€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹±¥Ù”ñð€¡}ÕÉ1•Ù•°‘‘•Ñ…¥±Ì€ôÕÉ1•Ù•°¹‘•Ñ…¥±Ì¤€„ô¹Õ±°€˜˜}ÕÉ1•Ù•°‘‘•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•ì(€€€€€€€Ñ¡¥Ì¹¡•­1¥Ù•UÁ‘…Ñ”¡¹•Ý•Ñ…¥±Ì¤ì(€€€€€€€¥˜€¡¹•Ý•Ñ…¥±Ì¹‘•±Ñ…UÁ‘…Ñ•…¥±•¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Í±¥‘¥¹œ€ôÑ¡¥Ì¹…±¥¹A±…å±¥ÍÑÌ¡¹•Ý•Ñ…¥±Ì°ÕÉ1•Ù•°¹‘•Ñ…¥±Ì°€¡}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•€ôÑ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘±•Ù•±1…ÍÑ1½…‘•¹‘•Ñ…¥±Ì¤ì(€€€€€ô(€€€€€€¼¼½Ù•ÉÉ¥‘”±•Ù•°¥¹™¼(€€€€€ÕÉ1•Ù•°¹‘•Ñ…¥±Ì€ô¹•Ý•Ñ…¥±Ìì(€€€€€Ñ¡¥Ì¹±•Ù•±1…ÍÑ1½…‘•€ôÕÉ1•Ù•°ì(€€€€€¥˜€ …ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•¤ì(€€€€€€€Ñ¡¥Ì¹Í•ÑMÑ…ÉÑA½Í¥Ñ¥½¸¡¹•Ý•Ñ…¥±Ì°Í±¥‘¥¹œ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1}UAQ°ì(€€€€€€€‘•Ñ…¥±Ìè¹•Ý•Ñ…¥±Ì°(€€€€€€€±•Ù•°è¹•Ý1•Ù•±%(€€€€€ô¤ì((€€€€€€¼¼½¹±äÍÝ¥Ñ ‰…¬Ñ¼%1ÍÑ…Ñ”¥˜Ý”Ý•É”Ý…¥Ñ¥¹œ™½È±•Ù•°Ñ¼ÍÑ…ÉÐ‘½Ý¹±½…‘¥¹œ„¹•Ü™É…µ•¹Ð(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹]%Q%9}1Y0¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹Ý…¥Ñ½É‘¹QÕ¹•%¸¡¹•Ý•Ñ…¥±Ì¤¤ì(€€€€€€€€€€¼¼]…¥Ð™½È1½Üµ1…Ñ•¹ä8QÕ¹”µ¥¸(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€ô(€€€€€¥˜€¡ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€˜˜¹•Ý•Ñ…¥±Ì¹±¥Ù”¤ì(€€€€€€€Ñ¡¥Ì¹Íå¹¡É½¹¥é•Q½1¥Ù•‘”¡¹•Ý•Ñ…¥±Ì¤ì(€€€€€ô((€€€€€€¼¼ÑÉ¥•È¡…¹‘±•ÈÉ¥¡Ð¹½Ü(€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Íå¹¡É½¹¥é•Q½1¥Ù•‘”€ô™Õ¹Ñ¥½¸Íå¹¡É½¹¥é•Q½1¥Ù•‘”¡±•Ù•±•Ñ…¥±Ì¤ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œ°(€€€€€€€µ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È±¥Ù•Må¹A½Í¥Ñ¥½¸€ôÑ¡¥Ì¹¡±Ì¹±¥Ù•Må¹A½Í¥Ñ¥½¸ì(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôÑ¡¥Ì¹•Ñ1½…‘A½Í¥Ñ¥½¸ ¤ì(€€€€€Ù…ÈÍÑ…ÉÐ€ô±•Ù•±•Ñ…¥±Ì¹™É…µ•¹ÑMÑ…ÉÐì(€€€€€Ù…È•¹€ô±•Ù•±•Ñ…¥±Ì¹•‘”ì(€€€€€Ù…ÈÝ¥Ñ¡¥¹M±¥‘¥¹]¥¹‘½Ü€ôÕÉÉ•¹ÑQ¥µ”€øôÍÑ…ÉÐ€´½¹™¥œ¹µ…áÉ…1½½­UÁQ½±•É…¹”€˜˜ÕÉÉ•¹ÑQ¥µ”€ðô•¹ì(€€€€€€¼¼½¹Ñ¥¹Õ”¥˜Ý”…¸Í••¬™½ÉÝ…ÉÑ¼Íå¹ŒÁ½Í¥Ñ¥½¸½È¥˜ÕÉÉ•¹ÐÑ¥µ”¥Ì½ÕÑÍ¥‘”½˜Í±¥‘¥¹œÝ¥¹‘½Ü(€€€€€¥˜€¡±¥Ù•Må¹A½Í¥Ñ¥½¸€„ôô¹Õ±°€˜˜µ•‘¥„¹‘ÕÉ…Ñ¥½¸€ø±¥Ù•Må¹A½Í¥Ñ¥½¸€˜˜€¡ÕÉÉ•¹ÑQ¥µ”€ð±¥Ù•Må¹A½Í¥Ñ¥½¸ñð€…Ý¥Ñ¡¥¹M±¥‘¥¹]¥¹‘½Ü¤¤ì(€€€€€€€€¼¼½¹Ñ¥¹Õ”¥˜‰Õ™™•È¥ÌÍÑ…ÉÙ¥¹œ½È¥˜ÕÉÉ•¹ÐÑ¥µ”¥Ì‰•¡¥¹µ…à±…Ñ•¹ä(€€€€€€€Ù…Èµ…á1…Ñ•¹ä€ô½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸€„ôôÕ¹‘•™¥¹•€ü½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¸€è½¹™¥œ¹±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ð€¨±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸ì(€€€€€€€¥˜€ …Ý¥Ñ¡¥¹M±¥‘¥¹]¥¹‘½Ü€˜˜µ•‘¥„¹É•…‘åMÑ…Ñ”€ð€ÐñðÕÉÉ•¹ÑQ¥µ”€ð•¹€´µ…á1…Ñ•¹ä¤ì(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ¤ì(€€€€€€€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ô±¥Ù•Må¹A½Í¥Ñ¥½¸ì(€€€€€€€€€ô(€€€€€€€€€€¼¼=¹±äÍ••¬¥˜É•…‘ä…¹Ñ¡•É”¥Ì¹½Ð„Í¥¹¥™¥…¹Ð™½ÉÝ…É‰Õ™™•È…Ù…¥±…‰±”™½ÈÁ±…å‰…¬(€€€€€€€€€¥˜€¡µ•‘¥„¹É•…‘åMÑ…Ñ”¤ì(€€€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰A±…å‰…¬è€ˆ€¬ÕÉÉ•¹ÑQ¥µ”¹Ñ½¥á• Ì¤€¬€ˆ¥Ì±½…Ñ•Ñ½¼™…È™É½´Ñ¡”•¹½˜±¥Ù”Í±¥‘¥¹œÁ±…å±¥ÍÐè€ˆ€¬•¹€¬€ˆ°É•Í•ÐÕÉÉ•¹ÑQ¥µ”Ñ¼€è€ˆ€¬±¥Ù•Må¹A½Í¥Ñ¥½¸¹Ñ½¥á• Ì¤¤ì(€€€€€€€€€€€µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ô±¥Ù•Må¹A½Í¥Ñ¥½¸ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}¡…¹‘±•É…µ•¹Ñ1½…‘AÉ½É•ÍÌ€ô™Õ¹Ñ¥½¸}¡…¹‘±•É…µ•¹Ñ1½…‘AÉ½É•ÍÌ¡‘…Ñ„¤ì(€€€€€Ù…È}™É…œ‘¥¹¥ÑM•µ•¹Ðì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œì(€€€€€Ù…ÈÁ…ÉÐ€ô‘…Ñ„¹Á…ÉÐ°(€€€€€€€Á…å±½…€ô‘…Ñ„¹Á…å±½…ì(€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ìì(€€€€€¥˜€ …±•Ù•±Ì¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰1•Ù•±ÌÝ•É”É•Í•ÐÝ¡¥±”™É…µ•¹Ð±½…Ý…Ì¥¸ÁÉ½É•ÍÌ¸É…µ•¹Ð€ˆ€¬™É…œ¹Í¸€¬€ˆ½˜±•Ù•°€ˆ€¬™É…œ¹±•Ù•°€¬€ˆÝ¥±°¹½Ð‰”‰Õ™™•É•ˆ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÕÉÉ•¹Ñ1•Ù•°€ô±•Ù•±Ím™É…œ¹±•Ù•±tì(€€€€€¥˜€ …ÕÉÉ•¹Ñ1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰1•Ù•°€ˆ€¬™É…œ¹±•Ù•°€¬€ˆ¹½Ð™½Õ¹½¸ÁÉ½É•ÍÌˆ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È‘•Ñ…¥±Ì€ôÕÉÉ•¹Ñ1•Ù•°¹‘•Ñ…¥±Ìì(€€€€€¥˜€ …‘•Ñ…¥±Ì¤ì(€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰É½ÁÁ¥¹œ™É…µ•¹Ð€ˆ€¬™É…œ¹Í¸€¬€ˆ½˜±•Ù•°€ˆ€¬™É…œ¹±•Ù•°€¬€ˆ…™Ñ•È±•Ù•°‘•Ñ…¥±ÌÝ•É”É•Í•Ðˆ¤ì(€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡™É…œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÙ¥‘•½½‘•Œ€ôÕÉÉ•¹Ñ1•Ù•°¹Ù¥‘•½½‘•Œì((€€€€€€¼¼Ñ¥µ”=™™Í•Ð¥Ì…ÕÉ…Ñ”¥˜±•Ù•°AQL¥Ì­¹½Ý¸°½È¥˜Á±…å±¥ÍÐ¥Ì¹½ÐÍ±¥‘¥¹œ€¡¹½Ð±¥Ù”¤(€€€€€Ù…È…ÕÉ…Ñ•Q¥µ•=™™Í•Ð€ô‘•Ñ…¥±Ì¹AQM-¹½Ý¸ñð€…‘•Ñ…¥±Ì¹±¥Ù”ì(€€€€€Ù…È¥¹¥ÑM•µ•¹Ñ…Ñ„€ô€¡}™É…œ‘¥¹¥ÑM•µ•¹Ð€ô™É…œ¹¥¹¥ÑM•µ•¹Ð¤€ôô¹Õ±°€üÙ½¥€À€è}™É…œ‘¥¹¥ÑM•µ•¹Ð¹‘…Ñ„ì(€€€€€Ù…È…Õ‘¥½½‘•Œ€ôÑ¡¥Ì¹}•ÑÕ‘¥½½‘•Œ¡ÕÉÉ•¹Ñ1•Ù•°¤ì((€€€€€€¼¼ÑÉ…¹ÍµÕàÑ¡”5AµQL‘…Ñ„Ñ¼%M<µ	5Í•µ•¹ÑÌ(€€€€€€¼¼Ñ¡¥Ì¹±½œ¡QÉ…¹ÍµÕá¥¹œ€‘í™É…œ¹Í¹ô½˜l‘í‘•Ñ…¥±Ì¹ÍÑ…ÉÑM9ô€°‘í‘•Ñ…¥±Ì¹•¹‘M9õt±±•Ù•°€‘í™É…œ¹±•Ù•±ô°Œ€‘í™É…œ¹õ€¤ì(€€€€€Ù…ÈÑÉ…¹ÍµÕá•È€ôÑ¡¥Ì¹ÑÉ…¹ÍµÕá•È€ôÑ¡¥Ì¹ÑÉ…¹ÍµÕá•Èñð¹•ÜQÉ…¹ÍµÕá•É%¹Ñ•É™…”¡Ñ¡¥Ì¹¡±Ì°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8°Ñ¡¥Ì¹}¡…¹‘±•QÉ…¹ÍµÕá½µÁ±•Ñ”¹‰¥¹¡Ñ¡¥Ì¤°Ñ¡¥Ì¹}¡…¹‘±•QÉ…¹ÍµÕá•É±ÕÍ ¹‰¥¹¡Ñ¡¥Ì¤¤ì(€€€€€Ù…ÈÁ…ÉÑ%¹‘•à€ôÁ…ÉÐ€üÁ…ÉÐ¹¥¹‘•à€è€´Äì(€€€€€Ù…ÈÁ…ÉÑ¥…°€ôÁ…ÉÑ%¹‘•à€„ôô€´Äì(€€€€€Ù…È¡Õ¹­5•Ñ„€ô¹•Ü¡Õ¹­5•Ñ…‘…Ñ„¡™É…œ¹±•Ù•°°™É…œ¹Í¸°™É…œ¹ÍÑ…ÑÌ¹¡Õ¹­½Õ¹Ð°Á…å±½…¹‰åÑ•1•¹Ñ °Á…ÉÑ%¹‘•à°Á…ÉÑ¥…°¤ì(€€€€€Ù…È¥¹¥ÑAQL€ôÑ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹tì(€€€€€ÑÉ…¹ÍµÕá•È¹ÁÕÍ ¡Á…å±½…°¥¹¥ÑM•µ•¹Ñ…Ñ„°…Õ‘¥½½‘•Œ°Ù¥‘•½½‘•Œ°™É…œ°Á…ÉÐ°‘•Ñ…¥±Ì¹Ñ½Ñ…±‘ÕÉ…Ñ¥½¸°…ÕÉ…Ñ•Q¥µ•=™™Í•Ð°¡Õ¹­5•Ñ„°¥¹¥ÑAQL¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡¥¹œ€ô™Õ¹Ñ¥½¸½¹Õ‘¥½QÉ…­MÝ¥Ñ¡¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€€¼¼¥˜…¹äUI0™½Õ¹½¸¹•Ü…Õ‘¥¼ÑÉ…¬°¥Ð¥Ì…¸…±Ñ•É¹…Ñ”…Õ‘¥¼ÑÉ…¬(€€€€€Ù…È™É½µ±ÑÕ‘¥¼€ôÑ¡¥Ì¹…±ÑÕ‘¥¼€ôôô€Èì(€€€€€Ù…È…±ÑÕ‘¥¼€ôÕÍ•±Ñ•É¹…Ñ•Õ‘¥¼¡‘…Ñ„¹ÕÉ°°¡±Ì¤ì(€€€€€€¼¼¥˜Ý”ÍÝ¥Ñ ½¸µ…¥¸…Õ‘¥¼°•¹ÍÕÉ”Ñ¡…Ðµ…¥¸™É…µ•¹ÐÍ¡•‘Õ±¥¹œ¥ÌÍå¹•Ý¥Ñ µ•‘¥„¹‰Õ™™•É•(€€€€€€¼¼‘½¸Ð‘¼…¹åÑ¡¥¹œ¥˜Ý”ÍÝ¥Ñ Ñ¼…±Ð…Õ‘¥¼è…Õ‘¥¼ÍÑÉ•…´½¹ÑÉ½±±•È¥Ì¡…¹‘±¥¹œ¥Ð¸(€€€€€€¼¼Ý”Ý¥±°©ÕÍÐ¡…Ù”Ñ¼¡…¹”‰Õ™™•ÈÍ¡•‘Õ±¥¹œ½¸…Õ‘¥½QÉ…­MÝ¥Ñ¡•(€€€€€¥˜€ ……±ÑÕ‘¥¼¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€„ôôÑ¡¥Ì¹µ•‘¥„¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ MÝ¥Ñ¡¥¹œ½¸µ…¥¸…Õ‘¥¼°ÕÍ”µ•‘¥„¹‰Õ™™•É•Ñ¼Í¡•‘Õ±”µ…¥¸™É…µ•¹Ð±½…‘¥¹œœ¤ì(€€€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€€€Ù…È™É…ÕÉÉ•¹Ð€ôÑ¡¥Ì¹™É…ÕÉÉ•¹Ðì(€€€€€€€€€€¼¼Ý”¹••Ñ¼É•™¥±°…Õ‘¥¼‰Õ™™•È™É½´µ…¥¸è…¹•°…¹ä™É…œ±½…‘¥¹œÑ¼ÍÁ••ÕÀ…Õ‘¥¼ÍÝ¥Ñ (€€€€€€€€€¥˜€¡™É…ÕÉÉ•¹Ð¤ì(€€€€€€€€€€€Ñ¡¥Ì¹±½œ MÝ¥Ñ¡¥¹œÑ¼µ…¥¸…Õ‘¥¼ÑÉ…¬°…¹•°µ…¥¸™É…µ•¹Ð±½…œ¤ì(€€€€€€€€€€€™É…ÕÉÉ•¹Ð¹…‰½ÉÑI•ÅÕ•ÍÑÌ ¤ì(€€€€€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡™É…ÕÉÉ•¹Ð¤ì(€€€€€€€€€ô(€€€€€€€€€€¼¼‘•ÍÑÉ½äÑÉ…¹ÍµÕá•ÈÑ¼™½É”¥¹¥ÐÍ•µ•¹Ð•¹•É…Ñ¥½¸€¡™½±±½Ý¥¹œ…Õ‘¥¼ÍÝ¥Ñ ¤(€€€€€€€€€Ñ¡¥Ì¹É•Í•ÑQÉ…¹ÍµÕá•È ¤ì(€€€€€€€€€€¼¼ÍÝ¥Ñ Ñ¼%1ÍÑ…Ñ”Ñ¼±½…¹•Ü™É…µ•¹Ð(€€€€€€€€€Ñ¡¥Ì¹É•Í•Ñ1½…‘¥¹MÑ…Ñ” ¤ì(€€€€€€€ô•±Í”¥˜€¡Ñ¡¥Ì¹…Õ‘¥½=¹±ä¤ì(€€€€€€€€€€¼¼I•Í•Ð…Õ‘¥¼ÑÉ…¹ÍµÕá•ÈÍ¼Ý¡•¸ÍÝ¥Ñ¡¥¹œ‰…¬Ñ¼µ…¥¸…Õ‘¥¼Ý”É”¹½ÐÍÑ¥±°…ÁÁ•¹‘¥¹œÝ¡•É”Ý”±•™Ð½™˜(€€€€€€€€€Ñ¡¥Ì¹É•Í•ÑQÉ…¹ÍµÕá•È ¤ì(€€€€€€€ô(€€€€€€€€¼¼%˜ÍÝ¥Ñ¡¥¹œ™É½´…±ÐÑ¼µ…¥¸…Õ‘¥¼°™±ÕÍ …±°…Õ‘¥¼…¹ÑÉ¥•ÈÑÉ…¬ÍÝ¥Ñ¡•(€€€€€€€¥˜€¡™É½µ±ÑÕ‘¥¼¤ì(€€€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•±±É…µ•¹ÑÌ ¤ì(€€€€€€€€€¡±Ì¹½¹”¡Ù•¹ÑÌ¹	UI}1UM!°™Õ¹Ñ¥½¸€ ¤ì(€€€€€€€€€€€Ù…È}Ñ¡¥ÌÈ‘¡±Ìì(€€€€€€€€€€€€¡}Ñ¡¥ÌÈ‘¡±Ì€ô}Ñ¡¥ÌÈ¹¡±Ì¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥ÌÈ‘¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!°‘…Ñ„¤ì(€€€€€€€€€ô¤ì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹	UI}1UM!%9°ì(€€€€€€€€€€€ÍÑ…ÉÑ=™™Í•Ðè€À°(€€€€€€€€€€€•¹‘=™™Í•Ðè9Õµ‰•È¹A=M%Q%Y}%9%9%Qd°(€€€€€€€€€€€ÑåÁ”è¹Õ±°(€€€€€€€€€ô¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹U%=}QI-}M]%Q!°‘…Ñ„¤ì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹…±ÑÕ‘¥¼€ô€Äì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹Õ‘¥½QÉ…­MÝ¥Ñ¡•€ô™Õ¹Ñ¥½¸½¹Õ‘¥½QÉ…­MÝ¥Ñ¡•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È…±ÑÕ‘¥¼€ôÕÍ•±Ñ•É¹…Ñ•Õ‘¥¼¡‘…Ñ„¹ÕÉ°°Ñ¡¥Ì¹¡±Ì¤ì(€€€€€¥˜€¡…±ÑÕ‘¥¼¤ì(€€€€€€€Ù…ÈÙ¥‘•½	Õ™™•È€ôÑ¡¥Ì¹Ù¥‘•½	Õ™™•Èì(€€€€€€€€¼¼¥˜Ý”ÍÝ¥Ñ¡•½¸…±Ñ•É¹…Ñ”…Õ‘¥¼°•¹ÍÕÉ”Ñ¡…Ðµ…¥¸™É…µ•¹ÐÍ¡•‘Õ±¥¹œ¥ÌÍå¹•Ý¥Ñ Ù¥‘•¼Í½ÕÉ•‰Õ™™•È‰Õ™™•É•(€€€€€€€¥˜€¡Ù¥‘•½	Õ™™•È€˜˜Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€„ôôÙ¥‘•½	Õ™™•È¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ MÝ¥Ñ¡¥¹œ½¸…±Ñ•É¹…Ñ”…Õ‘¥¼°ÕÍ”Ù¥‘•¼¹‰Õ™™•É•Ñ¼Í¡•‘Õ±”µ…¥¸™É…µ•¹Ð±½…‘¥¹œœ¤ì(€€€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôÙ¥‘•½	Õ™™•Èì(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹…±ÑÕ‘¥¼€ô…±ÑÕ‘¥¼€ü€È€è€Àì(€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•ÉÉ•…Ñ•€ô™Õ¹Ñ¥½¸½¹	Õ™™•ÉÉ•…Ñ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…ÈÑÉ…­Ì€ô‘…Ñ„¹ÑÉ…­Ìì(€€€€€Ù…Èµ•‘¥…QÉ…¬ì(€€€€€Ù…È¹…µ”ì(€€€€€Ù…È…±Ñ•É¹…Ñ”€ô™…±Í”ì(€€€€€™½È€¡Ù…ÈÑåÁ”¥¸ÑÉ…­Ì¤ì(€€€€€€€Ù…ÈÑÉ…¬€ôÑÉ…­ÍmÑåÁ•tì(€€€€€€€¥˜€¡ÑÉ…¬¹¥€ôôô€µ…¥¸œ¤ì(€€€€€€€€€¹…µ”€ôÑåÁ”ì(€€€€€€€€€µ•‘¥…QÉ…¬€ôÑÉ…¬ì(€€€€€€€€€€¼¼­••ÀÙ¥‘•¼Í½ÕÉ”‰Õ™™•ÈÉ•™•É•¹”(€€€€€€€€€¥˜€¡ÑåÁ”€ôôô€Ù¥‘•¼œ¤ì(€€€€€€€€€€€Ù…ÈÙ¥‘•½QÉ…¬€ôÑÉ…­ÍmÑåÁ•tì(€€€€€€€€€€€¥˜€¡Ù¥‘•½QÉ…¬¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹Ù¥‘•½	Õ™™•È€ôÙ¥‘•½QÉ…¬¹‰Õ™™•Èì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô•±Í”ì(€€€€€€€€€…±Ñ•É¹…Ñ”€ôÑÉÕ”ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡…±Ñ•É¹…Ñ”€˜˜µ•‘¥…QÉ…¬¤ì(€€€€€€€Ñ¡¥Ì¹±½œ ‰±Ñ•É¹…Ñ”ÑÉ…¬™½Õ¹°ÕÍ”€ˆ€¬¹…µ”€¬€ˆ¹‰Õ™™•É•Ñ¼Í¡•‘Õ±”µ…¥¸™É…µ•¹Ð±½…‘¥¹œˆ¤ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôµ•‘¥…QÉ…¬¹‰Õ™™•Èì(€€€€€ô•±Í”ì(€€€€€€€Ñ¡¥Ì¹µ•‘¥…	Õ™™•È€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…	Õ™™•É•€ô™Õ¹Ñ¥½¸½¹É…	Õ™™•É•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È™É…œ€ô‘…Ñ„¹™É…œ°(€€€€€€€Á…ÉÐ€ô‘…Ñ„¹Á…ÉÐì(€€€€€Ù…È‰Õ™™•É•‘5…¥¹É…µ•¹Ð€ô™É…œ¹ÑåÁ”€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8ì(€€€€€¥˜€¡‰Õ™™•É•‘5…¥¹É…µ•¹Ð¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹™É…½¹Ñ•áÑ¡…¹•¡™É…œ¤¤ì(€€€€€€€€€€¼¼%˜„±•Ù•°ÍÝ¥Ñ Ý…ÌÉ•ÅÕ•ÍÑ•Ý¡¥±”„™É…µ•¹ÐÝ…Ì‰Õ™™•É¥¹œ°¥ÐÝ¥±°•µ¥ÐÑ¡”I}	UI•Ù•¹ÐÕÁ½¸½µÁ±•Ñ¥½¸(€€€€€€€€€€¼¼Ù½¥Í•ÑÑ¥¹œÍÑ…Ñ”‰…¬Ñ¼%1°Í¥¹”Ñ¡…ÐÝ¥±°¥¹Ñ•É™•É”Ý¥Ñ „±•Ù•°ÍÝ¥Ñ (€€€€€€€€€Ñ¡¥Ì¹Ý…É¸ ‰É…µ•¹Ð€ˆ€¬™É…œ¹Í¸€¬€¡Á…ÉÐ€ü€œÀè€œ€¬Á…ÉÐ¹¥¹‘•à€è€œœ¤€¬€ˆ½˜±•Ù•°€ˆ€¬™É…œ¹±•Ù•°€¬€ˆ™¥¹¥Í¡•‰Õ™™•É¥¹œ°‰ÕÐÝ…Ì…‰½ÉÑ•¸ÍÑ…Ñ”è€ˆ€¬Ñ¡¥Ì¹ÍÑ…Ñ”¤ì(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹AIM¤ì(€€€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€Ù…ÈÍÑ…ÑÌ€ôÁ…ÉÐ€üÁ…ÉÐ¹ÍÑ…ÑÌ€è™É…œ¹ÍÑ…ÑÌì(€€€€€€€Ñ¡¥Ì¹™É…1…ÍÑ-‰ÁÌ€ô5…Ñ ¹É½Õ¹ à€¨ÍÑ…ÑÌ¹Ñ½Ñ…°€¼€¡ÍÑ…ÑÌ¹‰Õ™™•É¥¹œ¹•¹€´ÍÑ…ÑÌ¹±½…‘¥¹œ¹™¥ÉÍÐ¤¤ì(€€€€€€€¥˜€¡¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤¤ì(€€€€€€€€€Ñ¡¥Ì¹™É…AÉ•Ù¥½ÕÌ€ô™É…œì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹™É…	Õ™™•É•‘½µÁ±•Ñ”¡™É…œ°Á…ÉÐ¤ì(€€€€€ô(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€ …Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ€˜˜	Õ™™•É!•±Á•È¹•Ñ	Õ™™•É•¡µ•‘¥„¤¹±•¹Ñ ¤ì(€€€€€€€Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ€ôÑÉÕ”ì(€€€€€€€Ñ¡¥Ì¹Í••­Q½MÑ…ÉÑA½Ì ¤ì(€€€€€ô(€€€€€¥˜€¡‰Õ™™•É•‘5…¥¹É…µ•¹Ð¤ì(€€€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹ÉÉ½È€ô™Õ¹Ñ¥½¸½¹ÉÉ½È¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È}‘…Ñ„‘½¹Ñ•áÐì(€€€€€¥˜€¡‘…Ñ„¹™…Ñ…°¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹II=Hì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€ÍÝ¥Ñ €¡‘…Ñ„¹‘•Ñ…¥±Ì¤ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹I}@è(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹I}AIM%9}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹I}IeAQ}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹I}1=}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹I}1=}Q%5=UPè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹-e}1=}Q%5=UPè(€€€€€€€€€Ñ¡¥Ì¹½¹É…µ•¹Ñ=É-•å1½…‘ÉÉ½È¡A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8°‘…Ñ„¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹1Y1}1=}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹1Y1}1=}Q%5=UPè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹1Y1}AIM%9}II=Hè(€€€€€€€€€€¼¼¥¸…Í”½˜¹½¸™…Ñ…°•ÉÉ½ÈÝ¡¥±”±½…‘¥¹œ±•Ù•°°¥˜±•Ù•°½¹ÑÉ½±±•È¥Ì¹½ÐÉ•ÑÉå¥¹œÑ¼±½…±•Ù•°°ÍÝ¥Ñ ‰…¬Ñ¼%1(€€€€€€€€€¥˜€ …‘…Ñ„¹±•Ù•±I•ÑÉä€˜˜Ñ¡¥Ì¹ÍÑ…Ñ”€ôôôMÑ…Ñ”¹]%Q%9}1Y0€˜˜€ ¡}‘…Ñ„‘½¹Ñ•áÐ€ô‘…Ñ„¹½¹Ñ•áÐ¤€ôô¹Õ±°€üÙ½¥€À€è}‘…Ñ„‘½¹Ñ•áÐ¹ÑåÁ”¤€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0¤ì(€€€€€€€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€€€ô(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹	UI}}=}II=Hè(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹	UI}AA9}II=Hè(€€€€€€€€€¥˜€¡‘…Ñ„¹Á…É•¹Ð€„ôô€µ…¥¸œ¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹É•Í•Ñ1½…‘¥¹MÑ…Ñ” ¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹	UI}U11}II=Hè(€€€€€€€€€¥˜€¡‘…Ñ„¹Á…É•¹Ð€„ôô€µ…¥¸œ¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹É•‘Õ•1•¹Ñ¡¹‘±ÕÍ¡	Õ™™•È¡‘…Ñ„¤¤ì(€€€€€€€€€€€Ñ¡¥Ì¹™±ÕÍ¡5…¥¹	Õ™™•È À°9Õµ‰•È¹A=M%Q%Y}%9%9%Qd¤ì(€€€€€€€€€ô(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”ÉÉ½É•Ñ…¥±Ì¹%9QI91}aAQ%=8è(€€€€€€€€€Ñ¡¥Ì¹É•½Ù•É]½É­•ÉÉÉ½È¡‘…Ñ„¤ì(€€€€€€€€€‰É•…¬ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹É…1½…‘µ•É•¹å‰½ÉÑ•€ô™Õ¹Ñ¥½¸½¹É…1½…‘µ•É•¹å‰½ÉÑ• ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€¼¼¥˜±½…‘•‘µ•Ñ…‘…Ñ„¥Ì¹½ÐÍ•Ð°¥Ðµ•…¹ÌÑ¡…ÐÝ”…É”•µ•É•¹äÍÝ¥Ñ ‘½Ý¸½¸™¥ÉÍÐ™É…œ(€€€€€€¼¼¥¸Ñ¡…Ð…Í”°É•Í•ÐÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•™±…œ(€€€€€¥˜€ …Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐ¤ì(€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€ô™…±Í”ì(€€€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ôÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”ì(€€€€€ô(€€€€€Ñ¡¥Ì¹Ñ¥­%µµ•‘¥…Ñ” ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹	Õ™™•É±ÕÍ¡•€ô™Õ¹Ñ¥½¸½¹	Õ™™•É±ÕÍ¡•¡•Ù•¹Ð°}É•˜¤ì(€€€€€Ù…ÈÑåÁ”€ô}É•˜¹ÑåÁ”ì(€€€€€¥˜€¡ÑåÁ”€„ôô±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹U%<ñð€…Ñ¡¥Ì¹…±ÑÕ‘¥¼¤ì(€€€€€€€Ù…Èµ•‘¥…	Õ™™•È€ô€¡ÑåÁ”€ôôô±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹Y%<€üÑ¡¥Ì¹Ù¥‘•½	Õ™™•È€èÑ¡¥Ì¹µ•‘¥…	Õ™™•È¤ñðÑ¡¥Ì¹µ•‘¥„ì(€€€€€€€¥˜€¡µ•‘¥…	Õ™™•È¤ì(€€€€€€€€€Ñ¡¥Ì¹…™Ñ•É	Õ™™•É±ÕÍ¡•¡µ•‘¥…	Õ™™•È°ÑåÁ”°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€€€€€€€Ñ¡¥Ì¹Ñ¥¬ ¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±ÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±ÍUÁ‘…Ñ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹±•Ù•°€ø€´Ä€˜˜Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•°€ôÑ¡¥Ì¹™É…ÕÉÉ•¹Ð¹±•Ù•°ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹±•Ù•°€ôôô€´Ä¤ì(€€€€€€€€€Ñ¡¥Ì¹É•Í•Ñ]¡•¹5¥ÍÍ¥¹½¹Ñ•áÐ¡Ñ¡¥Ì¹™É…ÕÉÉ•¹Ð¤ì(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹±•Ù•±Ì€ô‘…Ñ„¹±•Ù•±Ìì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÍÝ…ÁÕ‘¥½½‘•Œ€ô™Õ¹Ñ¥½¸ÍÝ…ÁÕ‘¥½½‘•Œ ¤ì(€€€€€Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ…À€ô€…Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ…Àì(€€€ô((€€€€¼¨¨(€€€€€¨M••­ÌÑ¼Ñ¡”Í•ÐÍÑ…ÉÑA½Í¥Ñ¥½¸¥˜¹½Ð•ÅÕ…°Ñ¼Ñ¡”µ•‘¥…±•µ•¹ÐÌÕÉÉ•¹ÐÑ¥µ”¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Í••­Q½MÑ…ÉÑA½Ì€ô™Õ¹Ñ¥½¸Í••­Q½MÑ…ÉÑA½Ì ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€¥˜€ …µ•‘¥„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ù…ÈÍÑ…ÉÑA½Í¥Ñ¥½¸€ôÑ¡¥Ì¹ÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€¼¼½¹±ä…‘©ÕÍÐÕÉÉ•¹ÑQ¥µ”¥˜‘¥™™•É•¹Ð™É½´ÍÑ…ÉÑA½Í¥Ñ¥½¸½È¥˜ÍÑ…ÉÑA½Í¥Ñ¥½¸¹½Ð‰Õ™™•É•(€€€€€€¼¼…ÐÑ¡…ÐÍÑ…”°Ñ¡•É”Í¡½Õ±‰”½¹±ä½¹”‰Õ™™•É•É…¹”°…ÌÝ”É•… Ñ¡…Ð½‘”…™Ñ•È™¥ÉÍÐ™É…µ•¹Ð¡…Ì‰••¸‰Õ™™•É•(€€€€€¥˜€¡ÍÑ…ÉÑA½Í¥Ñ¥½¸€øô€À€˜˜ÕÉÉ•¹ÑQ¥µ”€ðÍÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€¥˜€¡µ•‘¥„¹Í••­¥¹œ¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰½Õ±¹½ÐÍ••¬Ñ¼€ˆ€¬ÍÑ…ÉÑA½Í¥Ñ¥½¸€¬€ˆ°…±É•…‘äÍ••­¥¹œ…Ð€ˆ€¬ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô((€€€€€€€€¼¼=™™Í•ÐÍÑ…ÉÐÁ½Í¥Ñ¥½¸‰äÑ¥µ•±¥¹”½™™Í•Ð(€€€€€€€Ù…ÈÑ¥µ•±¥¹•=™™Í•Ð€ôÑ¡¥Ì¹Ñ¥µ•±¥¹•=™™Í•Ðì(€€€€€€€¥˜€¡Ñ¥µ•±¥¹•=™™Í•Ð€˜˜ÍÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸€¬ôÑ¥µ•±¥¹•=™™Í•Ðì(€€€€€€€ô(€€€€€€€Ù…È‘•Ñ…¥±Ì€ôÑ¡¥Ì¹•Ñ1•Ù•±•Ñ…¥±Ì ¤ì(€€€€€€€Ù…È‰Õ™™•É•€ô	Õ™™•É!•±Á•È¹•Ñ	Õ™™•É•¡µ•‘¥„¤ì(€€€€€€€Ù…È‰Õ™™•ÉMÑ…ÉÐ€ô‰Õ™™•É•¹±•¹Ñ €ü‰Õ™™•É•¹ÍÑ…ÉÐ À¤€è€Àì(€€€€€€€Ù…È‘•±Ñ„€ô‰Õ™™•ÉMÑ…ÉÐ€´ÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€€Ù…ÈÍ­¥ÁQ½±•É…¹”€ô5…Ñ ¹µ…à¡Ñ¡¥Ì¹½¹™¥œ¹µ…á	Õ™™•É!½±”°Ñ¡¥Ì¹½¹™¥œ¹µ…áÉ…1½½­UÁQ½±•É…¹”¤ì(€€€€€€€¥˜€¡‘•±Ñ„€ø€À€˜˜€¡‘•±Ñ„€ðÍ­¥ÁQ½±•É…¹”ñðÑ¡¥Ì¹±½…‘¥¹A…ÉÑÌ€˜˜‘•±Ñ„€ð€È€¨€ ¡‘•Ñ…¥±Ì€ôô¹Õ±°€üÙ½¥€À€è‘•Ñ…¥±Ì¹Á…ÉÑQ…É•Ð¤ñð€À¤¤¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰…‘©ÕÍÑ¥¹œÍÑ…ÉÐÁ½Í¥Ñ¥½¸‰ä€ˆ€¬‘•±Ñ„€¬€ˆÑ¼µ…Ñ ‰Õ™™•ÈÍÑ…ÉÐˆ¤ì(€€€€€€€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸€¬ô‘•±Ñ„ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑA½Í¥Ñ¥½¸€ôÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€€ô(€€€€€€€¥˜€¡ÕÉÉ•¹ÑQ¥µ”€ðÍÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰Í••¬Ñ¼Ñ…É•ÐÍÑ…ÉÐÁ½Í¥Ñ¥½¸€ˆ€¬ÍÑ…ÉÑA½Í¥Ñ¥½¸€¬€ˆ™É½´ÕÉÉ•¹ÐÑ¥µ”€ˆ€¬ÕÉÉ•¹ÑQ¥µ”€¬€ˆ‰Õ™™•ÈÍÑ…ÉÐ€ˆ€¬‰Õ™™•ÉMÑ…ÉÐ¤ì(€€€€€€€€€µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”€ôÍÑ…ÉÑA½Í¥Ñ¥½¸ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹}•ÑÕ‘¥½½‘•Œ€ô™Õ¹Ñ¥½¸}•ÑÕ‘¥½½‘•Œ¡ÕÉÉ•¹Ñ1•Ù•°¤ì(€€€€€Ù…È…Õ‘¥½½‘•Œ€ôÑ¡¥Ì¹½¹™¥œ¹‘•™…Õ±ÑÕ‘¥½½‘•ŒñðÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œì(€€€€€¥˜€¡Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ…À€˜˜…Õ‘¥½½‘•Œ¤ì(€€€€€€€Ñ¡¥Ì¹±½œ MÝ…ÁÁ¥¹œ…Õ‘¥¼½‘•Œœ¤ì(€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ¹¥¹‘•á=˜ µÀÑ„¸ÐÀ¸Ôœ¤€„ôô€´Ä¤ì(€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Èœì(€€€€€€€ô•±Í”ì(€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Ôœì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸…Õ‘¥½½‘•Œì(€€€ôì(€€€}ÁÉ½Ñ¼¹}±½…‘	¥ÑÉ…Ñ•Q•ÍÑÉ…œ€ô™Õ¹Ñ¥½¸}±½…‘	¥ÑÉ…Ñ•Q•ÍÑÉ…œ¡™É…µ•¹Ð°±•Ù•°¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€™É…µ•¹Ð¹‰¥ÑÉ…Ñ•Q•ÍÐ€ôÑÉÕ”ì(€€€€€Ñ¡¥Ì¹}‘½É…1½…¡™É…µ•¹Ð°±•Ù•°¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡‘…Ñ„¤ì(€€€€€€€Ù…È¡±Ì€ô}Ñ¡¥ÌÌ¹¡±Ìì(€€€€€€€Ù…È™É…œ€ô‘…Ñ„€ôô¹Õ±°€üÙ½¥€À€è‘…Ñ„¹™É…œì(€€€€€€€¥˜€ …™É…œñð}Ñ¡¥ÌÌ¹™É…½¹Ñ•áÑ¡…¹•¡™É…œ¤¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€±•Ù•°¹™É…µ•¹ÑÉÉ½È€ô€Àì(€€€€€€€}Ñ¡¥ÌÌ¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€€€€€}Ñ¡¥ÌÌ¹ÍÑ…ÉÑÉ…I•ÅÕ•ÍÑ•€ô™…±Í”ì(€€€€€€€}Ñ¡¥ÌÌ¹‰¥ÑÉ…Ñ•Q•ÍÐ€ô™…±Í”ì(€€€€€€€Ù…ÈÍÑ…ÑÌ€ô™É…œ¹ÍÑ…ÑÌì(€€€€€€€€¼¼	¥ÑÉ…Ñ”Ñ•ÍÑÌ™É…µ•¹ÑÌ…É”¹•¥Ñ¡•ÈÁ…ÉÍ•¹½È‰Õ™™•É•(€€€€€€€ÍÑ…ÑÌ¹Á…ÉÍ¥¹œ¹ÍÑ…ÉÐ€ôÍÑ…ÑÌ¹Á…ÉÍ¥¹œ¹•¹€ôÍÑ…ÑÌ¹‰Õ™™•É¥¹œ¹ÍÑ…ÉÐ€ôÍÑ…ÑÌ¹‰Õ™™•É¥¹œ¹•¹€ôÍ•±˜¹Á•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}1=°‘…Ñ„¤ì(€€€€€€€™É…œ¹‰¥ÑÉ…Ñ•Q•ÍÐ€ô™…±Í”ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}¡…¹‘±•QÉ…¹ÍµÕá½µÁ±•Ñ”€ô™Õ¹Ñ¥½¸}¡…¹‘±•QÉ…¹ÍµÕá½µÁ±•Ñ”¡ÑÉ…¹ÍµÕáI•ÍÕ±Ð¤ì(€€€€€Ù…È}¥Ì‘Í…µÁ±•Ìì(€€€€€Ù…È¥€ôÑ¡¥Ì¹Á±…å±¥ÍÑQåÁ”ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€Ù…ÈÉ•µÕáI•ÍÕ±Ð€ôÑÉ…¹ÍµÕáI•ÍÕ±Ð¹É•µÕáI•ÍÕ±Ð°(€€€€€€€¡Õ¹­5•Ñ„€ôÑÉ…¹ÍµÕáI•ÍÕ±Ð¹¡Õ¹­5•Ñ„ì(€€€€€Ù…È½¹Ñ•áÐ€ôÑ¡¥Ì¹•ÑÕÉÉ•¹Ñ½¹Ñ•áÐ¡¡Õ¹­5•Ñ„¤ì(€€€€€¥˜€ …½¹Ñ•áÐ¤ì(€€€€€€€Ñ¡¥Ì¹É•Í•Ñ]¡•¹5¥ÍÍ¥¹½¹Ñ•áÐ¡¡Õ¹­5•Ñ„¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È™É…œ€ô½¹Ñ•áÐ¹™É…œ°(€€€€€€€Á…ÉÐ€ô½¹Ñ•áÐ¹Á…ÉÐ°(€€€€€€€±•Ù•°€ô½¹Ñ•áÐ¹±•Ù•°ì(€€€€€Ù…ÈÙ¥‘•¼€ôÉ•µÕáI•ÍÕ±Ð¹Ù¥‘•¼°(€€€€€€€Ñ•áÐ€ôÉ•µÕáI•ÍÕ±Ð¹Ñ•áÐ°(€€€€€€€¥Ì€ôÉ•µÕáI•ÍÕ±Ð¹¥Ì°(€€€€€€€¥¹¥ÑM•µ•¹Ð€ôÉ•µÕáI•ÍÕ±Ð¹¥¹¥ÑM•µ•¹Ðì(€€€€€Ù…È‘•Ñ…¥±Ì€ô±•Ù•°¹‘•Ñ…¥±Ìì(€€€€€€¼¼Q¡”…Õ‘¥¼µÍÑÉ•…´µ½¹ÑÉ½±±•È¡…¹‘±•Ì…Õ‘¥¼‰Õ™™•É¥¹œ¥˜!±Ì¹©Ì¥ÌÁ±…å¥¹œ…¸…±Ñ•É¹…Ñ”…Õ‘¥¼ÑÉ…¬(€€€€€Ù…È…Õ‘¥¼€ôÑ¡¥Ì¹…±ÑÕ‘¥¼€üÕ¹‘•™¥¹•€èÉ•µÕáI•ÍÕ±Ð¹…Õ‘¥¼ì((€€€€€€¼¼¡•¬¥˜Ñ¡”ÕÉÉ•¹Ð™É…µ•¹Ð¡…Ì‰••¸…‰½ÉÑ•¸]”¡•¬Ñ¡¥Ì‰ä™¥ÉÍÐÍ••¥¹œ¥˜Ý”É”ÍÑ¥±°Á±…å¥¹œÑ¡”ÕÉÉ•¹Ð±•Ù•°¸(€€€€€€¼¼%˜Ý”…É”°ÍÕ‰Í•ÅÕ•¹Ñ±ä¡•¬¥˜Ñ¡”ÕÉÉ•¹Ñ±ä±½…‘¥¹œ™É…µ•¹Ð€¡™É…ÕÉÉ•¹Ð¤¡…Ì¡…¹•¸(€€€€€¥˜€¡Ñ¡¥Ì¹™É…½¹Ñ•áÑ¡…¹•¡™É…œ¤¤ì(€€€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡™É…œ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹AIM%9ì(€€€€€¥˜€¡¥¹¥ÑM•µ•¹Ð¤ì(€€€€€€€¥˜€¡¥¹¥ÑM•µ•¹Ð€„ô¹Õ±°€˜˜¥¹¥ÑM•µ•¹Ð¹ÑÉ…­Ì¤ì(€€€€€€€€€Ù…Èµ…ÁÉ…µ•¹Ð€ô™É…œ¹¥¹¥ÑM•µ•¹Ðñð™É…œì(€€€€€€€€€Ñ¡¥Ì¹}‰Õ™™•É%¹¥ÑM•µ•¹Ð¡±•Ù•°°¥¹¥ÑM•µ•¹Ð¹ÑÉ…­Ì°µ…ÁÉ…µ•¹Ð°¡Õ¹­5•Ñ„¤ì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}AIM%9}%9%Q}M59P°ì(€€€€€€€€€€€™É…œèµ…ÁÉ…µ•¹Ð°(€€€€€€€€€€€¥è¥°(€€€€€€€€€€€ÑÉ…­Ìè¥¹¥ÑM•µ•¹Ð¹ÑÉ…­Ì(€€€€€€€€€ô¤ì(€€€€€€€ô((€€€€€€€€¼¼Q¡¥ÌÝ½Õ±‰”¹¥”¥˜9Õµ‰•È¹¥Í¥¹¥Ñ”…Ñ•…Ì„ÑåÁ•Õ…É°‰ÕÐ¥Ð‘½•Í¸Ð¸M•”è¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½5¥É½Í½™Ð½QåÁ•MÉ¥ÁÐ½¥ÍÍÕ•Ì¼ÄÀÀÌà(€€€€€€€Ù…È¥¹¥ÑAQL€ô¥¹¥ÑM•µ•¹Ð¹¥¹¥ÑAQLì(€€€€€€€Ù…ÈÑ¥µ•Í…±”€ô¥¹¥ÑM•µ•¹Ð¹Ñ¥µ•Í…±”ì(€€€€€€€¥˜€¡¥Í¥¹¥Ñ•9Õµ‰•È¡¥¹¥ÑAQL¤¤ì(€€€€€€€€€Ñ¡¥Ì¹¥¹¥ÑAQMm™É…œ¹t€ôì(€€€€€€€€€€€‰…Í•Q¥µ”è¥¹¥ÑAQL°(€€€€€€€€€€€Ñ¥µ•Í…±”èÑ¥µ•Í…±”(€€€€€€€€€ôì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹%9%Q}AQM}=U9°ì(€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€¥è¥°(€€€€€€€€€€€¥¹¥ÑAQLè¥¹¥ÑAQL°(€€€€€€€€€€€Ñ¥µ•Í…±”èÑ¥µ•Í…±”(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¼Ù½¥‰Õ™™•É¥¹œ¥˜‰…­ÑÉ…­¥¹œÑ¡¥Ì™É…µ•¹Ð(€€€€€¥˜€¡Ù¥‘•¼€˜˜‘•Ñ…¥±Ì¤ì(€€€€€€€¥˜€¡…Õ‘¥¼€˜˜Ù¥‘•¼¹ÑåÁ”€ôôô€…Õ‘¥½Ù¥‘•¼œ¤ì(€€€€€€€€€Ñ¡¥Ì¹±½5Õá•‘ÉÈ¡™É…œ¤ì(€€€€€€€ô(€€€€€€€Ù…ÈÁÉ•ÙÉ…œ€ô‘•Ñ…¥±Ì¹™É…µ•¹ÑÍm™É…œ¹Í¸€´€Ä€´‘•Ñ…¥±Ì¹ÍÑ…ÉÑM9tì(€€€€€€€Ù…È¥Í¥ÉÍÑÉ…µ•¹Ð€ô™É…œ¹Í¸€ôôô‘•Ñ…¥±Ì¹ÍÑ…ÉÑM8ì(€€€€€€€Ù…È¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä€ô€…ÁÉ•ÙÉ…œñð™É…œ¹Œ€øÁÉ•ÙÉ…œ¹Œì(€€€€€€€¥˜€¡É•µÕáI•ÍÕ±Ð¹¥¹‘•Á•¹‘•¹Ð€„ôô™…±Í”¤ì(€€€€€€€€€Ù…ÈÍÑ…ÉÑAQL€ôÙ¥‘•¼¹ÍÑ…ÉÑAQL°(€€€€€€€€€€€•¹‘AQL€ôÙ¥‘•¼¹•¹‘AQL°(€€€€€€€€€€€ÍÑ…ÉÑQL€ôÙ¥‘•¼¹ÍÑ…ÉÑQL°(€€€€€€€€€€€•¹‘QL€ôÙ¥‘•¼¹•¹‘QLì(€€€€€€€€€¥˜€¡Á…ÉÐ¤ì(€€€€€€€€€€€Á…ÉÐ¹•±•µ•¹Ñ…ÉåMÑÉ•…µÍmÙ¥‘•¼¹ÑåÁ•t€ôì(€€€€€€€€€€€€€ÍÑ…ÉÑAQLèÍÑ…ÉÑAQL°(€€€€€€€€€€€€€•¹‘AQLè•¹‘AQL°(€€€€€€€€€€€€€ÍÑ…ÉÑQLèÍÑ…ÉÑQL°(€€€€€€€€€€€€€•¹‘QLè•¹‘QL(€€€€€€€€€€€ôì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€¥˜€¡Ù¥‘•¼¹™¥ÉÍÑ-•åÉ…µ”€˜˜Ù¥‘•¼¹¥¹‘•Á•¹‘•¹Ð€˜˜¡Õ¹­5•Ñ„¹¥€ôôô€Ä€˜˜€…¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ôÑÉÕ”ì(€€€€€€€€€€€ô(€€€€€€€€€€€¥˜€¡Ù¥‘•¼¹‘É½ÁÁ•€˜˜Ù¥‘•¼¹¥¹‘•Á•¹‘•¹Ð¤ì(€€€€€€€€€€€€€€¼¼	…­ÑÉ…¬¥˜‘É½ÁÁ•™É…µ•ÌÉ•…Ñ”„…À…™Ñ•ÈÕÉÉ•¹ÑQ¥µ”((€€€€€€€€€€€€€Ù…È‰Õ™™•É%¹™¼€ôÑ¡¥Ì¹•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼ ¤ì(€€€€€€€€€€€€€Ù…ÈÑ…É•Ñ	Õ™™•ÉQ¥µ”€ô€¡‰Õ™™•É%¹™¼€ü‰Õ™™•É%¹™¼¹•¹€èÑ¡¥Ì¹•Ñ1½…‘A½Í¥Ñ¥½¸ ¤¤€¬Ñ¡¥Ì¹½¹™¥œ¹µ…á	Õ™™•É!½±”ì(€€€€€€€€€€€€€Ù…ÈÍÑ…ÉÑQ¥µ”€ôÙ¥‘•¼¹™¥ÉÍÑ-•åÉ…µ•AQL€üÙ¥‘•¼¹™¥ÉÍÑ-•åÉ…µ•AQL€èÍÑ…ÉÑAQLì(€€€€€€€€€€€€€¥˜€ …¥Í¥ÉÍÑÉ…µ•¹Ð€˜˜Ñ…É•Ñ	Õ™™•ÉQ¥µ”€ðÍÑ…ÉÑQ¥µ”€´Ñ¡¥Ì¹½¹™¥œ¹µ…á	Õ™™•É!½±”€˜˜€…¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä¤ì(€€€€€€€€€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…¬¡™É…œ¤ì(€€€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€€€ô•±Í”¥˜€¡¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä¤ì(€€€€€€€€€€€€€€€€¼¼5…É¬Í•µ•¹ÐÝ¥Ñ „…ÀÑ¼…Ù½¥±½½À±½…‘¥¹œ(€€€€€€€€€€€€€€€™É…œ¹…À€ôÑÉÕ”ì(€€€€€€€€€€€€€ô(€€€€€€€€€€€€€€¼¼M•ÐÙ¥‘•¼ÍÑÉ•…´ÍÑ…ÉÐÑ¼™É…µ•¹ÐÍÑ…ÉÐÍ¼Ñ¡…ÐÑÉÕ¹…Ñ•Í…µÁ±•Ì‘¼¹½Ð‘¥ÍÑ½ÉÐÑ¡”Ñ¥µ•±¥¹”°…¹µ…É¬¥ÐÁ…ÉÑ¥…°(€€€€€€€€€€€€€™É…œ¹Í•Ñ±•µ•¹Ñ…ÉåMÑÉ•…µ%¹™¼¡Ù¥‘•¼¹ÑåÁ”°™É…œ¹ÍÑ…ÉÐ°•¹‘AQL°™É…œ¹ÍÑ…ÉÐ°•¹‘QL°ÑÉÕ”¤ì(€€€€€€€€€€€ô•±Í”¥˜€¡¥Í¥ÉÍÑÉ…µ•¹Ð€˜˜ÍÑ…ÉÑAQL€´€¡‘•Ñ…¥±Ì¹…ÁÁ±¥•‘Q¥µ•±¥¹•=™™Í•Ðñð€À¤€ø5a}MQIQ}A})U5@¤ì(€€€€€€€€€€€€€€¼¼5…É¬Í•µ•¹ÐÝ¥Ñ „…ÀÑ¼Í­¥À±…É”ÍÑ…ÉÐ…À(€€€€€€€€€€€€€™É…œ¹…À€ôÑÉÕ”ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€™É…œ¹Í•Ñ±•µ•¹Ñ…ÉåMÑÉ•…µ%¹™¼¡Ù¥‘•¼¹ÑåÁ”°ÍÑ…ÉÑAQL°•¹‘AQL°ÍÑ…ÉÑQL°•¹‘QL¤ì(€€€€€€€€€¥˜€¡Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð¤ì(€€€€€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô™É…œì(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹‰Õ™™•ÉÉ…µ•¹Ñ…Ñ„¡Ù¥‘•¼°™É…œ°Á…ÉÐ°¡Õ¹­5•Ñ„°¥Í¥ÉÍÑÉ…µ•¹Ðñð¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä¤ì(€€€€€€€ô•±Í”¥˜€¡¥Í¥ÉÍÑÉ…µ•¹Ðñð¥Í¥ÉÍÑ%¹¥Í½¹Ñ¥¹Õ¥Ñä¤ì(€€€€€€€€€€¼¼5…É¬Í•µ•¹ÐÝ¥Ñ „…ÀÑ¼…Ù½¥±½½À±½…‘¥¹œ(€€€€€€€€€™É…œ¹…À€ôÑÉÕ”ì(€€€€€€€ô•±Í”ì(€€€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…¬¡™É…œ¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€ô(€€€€€¥˜€¡…Õ‘¥¼¤ì(€€€€€€€Ù…È}ÍÑ…ÉÑAQL€ô…Õ‘¥¼¹ÍÑ…ÉÑAQL°(€€€€€€€€€}•¹‘AQL€ô…Õ‘¥¼¹•¹‘AQL°(€€€€€€€€€}ÍÑ…ÉÑQL€ô…Õ‘¥¼¹ÍÑ…ÉÑQL°(€€€€€€€€€}•¹‘QL€ô…Õ‘¥¼¹•¹‘QLì(€€€€€€€¥˜€¡Á…ÉÐ¤ì(€€€€€€€€€Á…ÉÐ¹•±•µ•¹Ñ…ÉåMÑÉ•…µÍm±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹U%=t€ôì(€€€€€€€€€€€ÍÑ…ÉÑAQLè}ÍÑ…ÉÑAQL°(€€€€€€€€€€€•¹‘AQLè}•¹‘AQL°(€€€€€€€€€€€ÍÑ…ÉÑQLè}ÍÑ…ÉÑQL°(€€€€€€€€€€€•¹‘QLè}•¹‘QL(€€€€€€€€€ôì(€€€€€€€ô(€€€€€€€™É…œ¹Í•Ñ±•µ•¹Ñ…ÉåMÑÉ•…µ%¹™¼¡±•µ•¹Ñ…ÉåMÑÉ•…µQåÁ•Ì¹U%<°}ÍÑ…ÉÑAQL°}•¹‘AQL°}ÍÑ…ÉÑQL°}•¹‘QL¤ì(€€€€€€€Ñ¡¥Ì¹‰Õ™™•ÉÉ…µ•¹Ñ…Ñ„¡…Õ‘¥¼°™É…œ°Á…ÉÐ°¡Õ¹­5•Ñ„¤ì(€€€€€ô(€€€€€¥˜€¡‘•Ñ…¥±Ì€˜˜¥Ì€„ô¹Õ±°€˜˜€¡}¥Ì‘Í…µÁ±•Ì€ô¥Ì¹Í…µÁ±•Ì¤€„ô¹Õ±°€˜˜}¥Ì‘Í…µÁ±•Ì¹±•¹Ñ ¤ì(€€€€€€€Ù…È•µ¥ÑÑ•‘%Ì€ôì(€€€€€€€€€¥è¥°(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€‘•Ñ…¥±Ìè‘•Ñ…¥±Ì°(€€€€€€€€€Í…µÁ±•Ìè¥Ì¹Í…µÁ±•Ì(€€€€€€€ôì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}AIM%9}5QQ°•µ¥ÑÑ•‘%Ì¤ì(€€€€€ô(€€€€€¥˜€¡‘•Ñ…¥±Ì€˜˜Ñ•áÐ¤ì(€€€€€€€Ù…È•µ¥ÑÑ•‘Q•áÐ€ôì(€€€€€€€€€¥è¥°(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€‘•Ñ…¥±Ìè‘•Ñ…¥±Ì°(€€€€€€€€€Í…µÁ±•ÌèÑ•áÐ¹Í…µÁ±•Ì(€€€€€€€ôì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}AIM%9}UMIQ°•µ¥ÑÑ•‘Q•áÐ¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½5Õá•‘ÉÈ€ô™Õ¹Ñ¥½¸±½5Õá•‘ÉÈ¡™É…œ¤ì(€€€€€Ñ¡¥Ì¹Ý…É¸ ¡¥Í5•‘¥…É…µ•¹Ð¡™É…œ¤€ü€5•‘¥„œ€è€%¹¥Ðœ¤€¬€ˆÍ•µ•¹ÐÝ¥Ñ µÕá•…Õ‘¥½Ù¥‘•¼Ý¡•É”½¹±äÙ¥‘•¼•áÁ•Ñ•è€ˆ€¬™É…œ¹ÕÉ°¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹}‰Õ™™•É%¹¥ÑM•µ•¹Ð€ô™Õ¹Ñ¥½¸}‰Õ™™•É%¹¥ÑM•µ•¹Ð¡ÕÉÉ•¹Ñ1•Ù•°°ÑÉ…­Ì°™É…œ°¡Õ¹­5•Ñ„¤ì(€€€€€Ù…È}Ñ¡¥ÌÐ€ôÑ¡¥Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…Ñ”€„ôôMÑ…Ñ”¹AIM%9¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹…Õ‘¥½=¹±ä€ô€„…ÑÉ…­Ì¹…Õ‘¥¼€˜˜€…ÑÉ…­Ì¹Ù¥‘•¼ì((€€€€€€¼¼¥˜…Õ‘¥¼ÑÉ…¬¥Ì•áÁ•Ñ•Ñ¼½µ”™É½´…Õ‘¥¼ÍÑÉ•…´½¹ÑÉ½±±•È°‘¥Í…É…¹ä½µ¥¹œ™É½´µ…¥¸(€€€€€¥˜€¡Ñ¡¥Ì¹…±ÑÕ‘¥¼€˜˜€…Ñ¡¥Ì¹…Õ‘¥½=¹±ä¤ì(€€€€€€€‘•±•Ñ”ÑÉ…­Ì¹…Õ‘¥¼ì(€€€€€€€¥˜€¡ÑÉ…­Ì¹…Õ‘¥½Ù¥‘•¼¤ì(€€€€€€€€€Ñ¡¥Ì¹±½5Õá•‘ÉÈ¡™É…œ¤ì(€€€€€€€ô(€€€€€ô(€€€€€€¼¼¥¹±Õ‘”±•Ù•±½‘•Œ¥¸…Õ‘¥¼…¹Ù¥‘•¼ÑÉ…­Ì(€€€€€Ù…È…Õ‘¥¼€ôÑÉ…­Ì¹…Õ‘¥¼°(€€€€€€€Ù¥‘•¼€ôÑÉ…­Ì¹Ù¥‘•¼°(€€€€€€€…Õ‘¥½Ù¥‘•¼€ôÑÉ…­Ì¹…Õ‘¥½Ù¥‘•¼ì(€€€€€¥˜€¡…Õ‘¥¼¤ì(€€€€€€€Ù…È…Õ‘¥½½‘•Œ€ôÁ¥­5½ÍÑ½µÁ±•Ñ•½‘•9…µ”¡…Õ‘¥¼¹½‘•Œ°ÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œ¤ì(€€€€€€€€¼¼‘±•Ù•°…¹ÁÉ½™¥±”Ñ¼µ…­”ÕÀ™½ÈÁ…ÍÍÑ¡É½Õ µÉ•µÕá•È¹½Ð‰•¥¹œ…‰±”Ñ¼Á…ÉÍ”™Õ±°½‘•Œ(€€€€€€€€¼¼€¡±½•ÈÝ…É¹¥¹œ€‰U¹¡…¹‘±•…Õ‘¥¼½‘•Œ¸¸¸ˆ¤(€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ€ôôô€µÀÑ„œ¤ì(€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Ôœì(€€€€€€€ô(€€€€€€€€¼¼!…¹‘±”…Õ‘¥½½‘•MÝ¥Ñ¡€(€€€€€€€Ù…ÈÕ„€ô¹…Ù¥…Ñ½È¹ÕÍ•É•¹Ð¹Ñ½1½Ý•É…Í” ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹…Õ‘¥½½‘•MÝ¥Ñ ¤ì(€€€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ¤ì(€€€€€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ¹¥¹‘•á=˜ µÀÑ„¸ÐÀ¸Ôœ¤€„ôô€´Ä¤ì(€€€€€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Èœì(€€€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Ôœì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€€€€¼¼%¸Ñ¡”…Í”Ñ¡…Ð…¹!µ…Õ‘¥¼½‘•Ì…É”Í¥¹…±±•¥¸µ…¹¥™•ÍÐ°(€€€€€€€€€€¼¼™½É”!µ°…Ì¥ÐÍ••µÌÑ¡…Ðµ½ÍÐ‰É½ÝÍ•ÉÌÁÉ•™•ÉÌ¥Ð¸(€€€€€€€€€€¼¼‘½¸Ð™½É”!µ¥˜µ½¹¼ÍÑÉ•…´°½È¥¸¥É•™½à(€€€€€€€€€Ù…È…Õ‘¥½5•Ñ…‘…Ñ„€ô…Õ‘¥¼¹µ•Ñ…‘…Ñ„ì(€€€€€€€€€¥˜€¡…Õ‘¥½5•Ñ…‘…Ñ„€˜˜€¡…¹¹•±½Õ¹Ðœ¥¸…Õ‘¥½5•Ñ…‘…Ñ„€˜˜€¡…Õ‘¥½5•Ñ…‘…Ñ„¹¡…¹¹•±½Õ¹Ðñð€Ä¤€„ôô€Ä€˜˜Õ„¹¥¹‘•á=˜ ™¥É•™½àœ¤€ôôô€´Ä¤ì(€€€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Ôœì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€€¼¼!µ¥Ì‰É½­•¸½¸¹‘É½¥°…±Ý…åÌÍ¥¹…°…Õ‘¥¼½‘•Œ…Ì•Ù•¸¥˜Ù…É¥…¹Ðµ…¹¥™•ÍÐÍÑ…Ñ•Ì½Ñ¡•ÉÝ¥Í”(€€€€€€€¥˜€¡…Õ‘¥½½‘•Œ€˜˜…Õ‘¥½½‘•Œ¹¥¹‘•á=˜ µÀÑ„¸ÐÀ¸Ôœ¤€„ôô€´Ä€˜˜Õ„¹¥¹‘•á=˜ …¹‘É½¥œ¤€„ôô€´Ä€˜˜…Õ‘¥¼¹½¹Ñ…¥¹•È€„ôô€…Õ‘¥¼½µÁ•œœ¤ì(€€€€€€€€€€¼¼á±Õ‘”µÁ•œ…Õ‘¥¼(€€€€€€€€€…Õ‘¥½½‘•Œ€ô€µÀÑ„¸ÐÀ¸Èœì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰¹‘É½¥è™½É”…Õ‘¥¼½‘•ŒÑ¼€ˆ€¬…Õ‘¥½½‘•Œ¤ì(€€€€€€€ô(€€€€€€€¥˜€¡ÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œ€˜˜ÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œ€„ôô…Õ‘¥½½‘•Œ¤ì(€€€€€€€€€Ñ¡¥Ì¹±½œ ‰MÝ…ÁÁ¥¹œµ…¹¥™•ÍÐ…Õ‘¥¼½‘•Œpˆˆ€¬ÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œ€¬€‰pˆ™½Èpˆˆ€¬…Õ‘¥½½‘•Œ€¬€‰pˆˆ¤ì(€€€€€€€ô(€€€€€€€…Õ‘¥¼¹±•Ù•±½‘•Œ€ô…Õ‘¥½½‘•Œì(€€€€€€€…Õ‘¥¼¹¥€ôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8ì(€€€€€€€Ñ¡¥Ì¹±½œ ‰%¹¥Ð…Õ‘¥¼‰Õ™™•È°½¹Ñ…¥¹•Èèˆ€¬…Õ‘¥¼¹½¹Ñ…¥¹•È€¬€ˆ°½‘•ÍmÍ•±•Ñ•½±•Ù•°½Á…ÉÍ•‘tõlˆ€¬€¡…Õ‘¥½½‘•Œñð€œœ¤€¬€ˆ¼ˆ€¬€¡ÕÉÉ•¹Ñ1•Ù•°¹…Õ‘¥½½‘•Œñð€œœ¤€¬€ˆ¼ˆ€¬…Õ‘¥¼¹½‘•Œ€¬€‰tˆ¤ì(€€€€€€€‘•±•Ñ”ÑÉ…­Ì¹…Õ‘¥½Ù¥‘•¼ì(€€€€€ô(€€€€€¥˜€¡Ù¥‘•¼¤ì(€€€€€€€Ù¥‘•¼¹±•Ù•±½‘•Œ€ôÕÉÉ•¹Ñ1•Ù•°¹Ù¥‘•½½‘•Œì(€€€€€€€Ù¥‘•¼¹¥€ôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8ì(€€€€€€€Ù…ÈÁ…ÉÍ•‘Y¥‘•½½‘•Œ€ôÙ¥‘•¼¹½‘•Œì(€€€€€€€¥˜€ ¡Á…ÉÍ•‘Y¥‘•½½‘•Œ€ôô¹Õ±°€üÙ½¥€À€èÁ…ÉÍ•‘Y¥‘•½½‘•Œ¹±•¹Ñ ¤€ôôô€Ð¤ì(€€€€€€€€€€¼¼5…­”ÕÀ™½ÈÁ…ÍÍÑ¡É½Õ µÉ•µÕá•È¹½Ð‰•¥¹œ…‰±”Ñ¼Á…ÉÍ”™Õ±°½‘•Œ(€€€€€€€€€€¼¼€¡±½•ÈÝ…É¹¥¹œ€‰U¹¡…¹‘±•Ù¥‘•¼½‘•Œ¸¸¸ˆ¤(€€€€€€€€€ÍÝ¥Ñ €¡Á…ÉÍ•‘Y¥‘•½½‘•Œ¤ì(€€€€€€€€€€€…Í”€¡ÙŒÄœè(€€€€€€€€€€€…Í”€¡•ØÄœè(€€€€€€€€€€€€€Ù¥‘•¼¹½‘•Œ€ô€¡ÙŒÄ¸Ä¸Ø¹0ÄÈÀ¸äÀœì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€…Í”€…ØÀÄœè(€€€€€€€€€€€€€Ù¥‘•¼¹½‘•Œ€ô€…ØÀÄ¸À¸ÀÑ4¸Ààœì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€€€…Í”€…ÙŒÄœè(€€€€€€€€€€€€€Ù¥‘•¼¹½‘•Œ€ô€…ÙŒÄ¸ÐÉ”ÀÅ”œì(€€€€€€€€€€€€€‰É•…¬ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±½œ ‰%¹¥ÐÙ¥‘•¼‰Õ™™•È°½¹Ñ…¥¹•Èèˆ€¬Ù¥‘•¼¹½¹Ñ…¥¹•È€¬€ˆ°½‘•Ím±•Ù•°½Á…ÉÍ•‘tõlˆ€¬€¡ÕÉÉ•¹Ñ1•Ù•°¹Ù¥‘•½½‘•Œñð€œœ¤€¬€ˆ¼ˆ€¬Á…ÉÍ•‘Y¥‘•½½‘•Œ€¬€‰tˆ€¬€¡Ù¥‘•¼¹½‘•Œ€„ôôÁ…ÉÍ•‘Y¥‘•½½‘•Œ€ü€œÁ…ÉÍ•µ½ÉÉ•Ñ•ôœ€¬Ù¥‘•¼¹½‘•Œ€è€œœ¤€¬€¡Ù¥‘•¼¹ÍÕÁÁ±•µ•¹Ñ…°€ü€œÍÕÁÁ±•µ•¹Ñ…°ôœ€¬Ù¥‘•¼¹ÍÕÁÁ±•µ•¹Ñ…°€è€œœ¤¤ì(€€€€€€€‘•±•Ñ”ÑÉ…­Ì¹…Õ‘¥½Ù¥‘•¼ì(€€€€€ô(€€€€€¥˜€¡…Õ‘¥½Ù¥‘•¼¤ì(€€€€€€€Ñ¡¥Ì¹±½œ ‰%¹¥Ð…Õ‘¥½Ù¥‘•¼‰Õ™™•È°½¹Ñ…¥¹•Èèˆ€¬…Õ‘¥½Ù¥‘•¼¹½¹Ñ…¥¹•È€¬€ˆ°½‘•Ím±•Ù•°½Á…ÉÍ•‘tõlˆ€¬ÕÉÉ•¹Ñ1•Ù•°¹½‘•Ì€¬€ˆ¼ˆ€¬…Õ‘¥½Ù¥‘•¼¹½‘•Œ€¬€‰tˆ¤ì(€€€€€€€‘•±•Ñ”ÑÉ…­Ì¹Ù¥‘•¼ì(€€€€€€€‘•±•Ñ”ÑÉ…­Ì¹…Õ‘¥¼ì(€€€€€ô(€€€€€Ù…ÈÑÉ…­QåÁ•Ì€ô=‰©•Ð¹­•åÌ¡ÑÉ…­Ì¤ì(€€€€€¥˜€¡ÑÉ…­QåÁ•Ì¹±•¹Ñ ¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹	UI}=L°ÑÉ…­Ì¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€€€€¼¼á¥Ð…™Ñ•È™…Ñ…°ÑÉ…­Ì•ÉÉ½È(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€€¼¼±½½ÀÑ¡É½Õ ÑÉ…­ÌÑ¡…Ð…É”½¥¹œÑ¼‰”ÁÉ½Ù¥‘•Ñ¼‰Õ™™•É½¹ÑÉ½±±•È(€€€€€€€ÑÉ…­QåÁ•Ì¹™½É… ¡™Õ¹Ñ¥½¸€¡ÑÉ…­9…µ”¤ì(€€€€€€€€€Ù…ÈÑÉ…¬€ôÑÉ…­ÍmÑÉ…­9…µ•tì(€€€€€€€€€Ù…È¥¹¥ÑM•µ•¹Ð€ôÑÉ…¬¹¥¹¥ÑM•µ•¹Ðì(€€€€€€€€€¥˜€¡¥¹¥ÑM•µ•¹Ð€„ô¹Õ±°€˜˜¥¹¥ÑM•µ•¹Ð¹‰åÑ•1•¹Ñ ¤ì(€€€€€€€€€€€}Ñ¡¥ÌÐ¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹	UI}AA9%9°ì(€€€€€€€€€€€€€ÑåÁ”èÑÉ…­9…µ”°(€€€€€€€€€€€€€‘…Ñ„è¥¹¥ÑM•µ•¹Ð°(€€€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€€€Á…ÉÐè¹Õ±°°(€€€€€€€€€€€€€¡Õ¹­5•Ñ„è¡Õ¹­5•Ñ„°(€€€€€€€€€€€€€Á…É•¹Ðè™É…œ¹ÑåÁ”(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€ô(€€€€€€¼¼ÑÉ¥•È¡…¹‘±•ÈÉ¥¡Ð¹½Ü(€€€€€Ñ¡¥Ì¹Ñ¥­%µµ•‘¥…Ñ” ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼€ô™Õ¹Ñ¥½¸•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼ ¤ì(€€€€€€¼¼=‰Í•ÉÙ”Ù¥‘•¼M½ÕÉ•	Õ™™•È€¡Ñ¡¥Ì¹µ•‘¥…	Õ™™•È¤½¹±äÝ¡•¸…±Ðµ…Õ‘¥¼¥ÌÕÍ•°½Ñ¡•ÉÝ¥Í”½‰Í•ÉÙ”½µ‰¥¹•µ•‘¥„‰Õ™™•È(€€€€€Ù…È‰Õ™™•É=ÕÑÁÕÐ€ôÑ¡¥Ì¹µ•‘¥…	Õ™™•È€˜˜Ñ¡¥Ì¹…±ÑÕ‘¥¼€ôôô€È€üÑ¡¥Ì¹µ•‘¥…	Õ™™•È€èÑ¡¥Ì¹µ•‘¥„ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•ÑÝ‘	Õ™™•É%¹™¼¡‰Õ™™•É=ÕÑÁÕÐ°A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹‰…­ÑÉ…¬€ô™Õ¹Ñ¥½¸‰…­ÑÉ…¬¡™É…œ¤ì(€€€€€Ñ¡¥Ì¹½Õ±‘	…­ÑÉ…¬€ôÑÉÕ”ì(€€€€€€¼¼…ÕÍ•Ì™¥¹‘É…µ•¹ÑÌÑ¼‰…­ÑÉ…¬Ñ¡É½Õ ™É…µ•¹ÑÌÑ¼™¥¹Ñ¡”­•å™É…µ”(€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô™É…œì(€€€€€Ñ¡¥Ì¹É•Í•ÑQÉ…¹ÍµÕá•È ¤ì(€€€€€Ñ¡¥Ì¹™±ÕÍ¡	Õ™™•É…À¡™É…œ¤ì(€€€€€Ñ¡¥Ì¹™É…µ•¹ÑQÉ…­•È¹É•µ½Ù•É…µ•¹Ð¡™É…œ¤ì(€€€€€Ñ¡¥Ì¹™É…AÉ•Ù¥½ÕÌ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹¹•áÑ1½…‘A½Í¥Ñ¥½¸€ô™É…œ¹ÍÑ…ÉÐì(€€€€€Ñ¡¥Ì¹ÍÑ…Ñ”€ôMÑ…Ñ”¹%1ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡•­É…µ•¹Ñ¡…¹•€ô™Õ¹Ñ¥½¸¡•­É…µ•¹Ñ¡…¹• ¤ì(€€€€€Ù…ÈÙ¥‘•¼€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€Ù…È™É…A±…å¥¹ÕÉÉ•¹Ð€ô¹Õ±°ì(€€€€€¥˜€¡Ù¥‘•¼€˜˜Ù¥‘•¼¹É•…‘åMÑ…Ñ”€ø€Ä€˜˜Ù¥‘•¼¹Í••­¥¹œ€ôôô™…±Í”¤ì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ôÙ¥‘•¼¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€€¼¨¥˜Ù¥‘•¼•±•µ•¹Ð¥Ì¥¸Í••­•ÍÑ…Ñ”°ÕÉÉ•¹ÑQ¥µ”…¸½¹±ä¥¹É•…Í”¸(€€€€€€€€€€¡…ÍÍÕµ¥¹œÑ¡…ÐÁ±…å‰…¬É…Ñ”¥ÌÁ½Í¥Ñ¥Ù”€¸¸¸¤(€€€€€€€€€ÌÍ½µ•Ñ¥µ•ÌÕÉÉ•¹ÑQ¥µ”©ÕµÁÌ‰…¬Ñ¼é•É¼…™Ñ•È„(€€€€€€€€€µ•‘¥„‘•½‘”•ÉÉ½È°¡•¬Ñ¡¥Ì°Ñ¼…Ù½¥Í••­¥¹œ‰…¬Ñ¼(€€€€€€€€€ÝÉ½¹œÁ½Í¥Ñ¥½¸…™Ñ•È„µ•‘¥„‘•½‘”•ÉÉ½È(€€€€€€€€¨¼((€€€€€€€¥˜€¡	Õ™™•É!•±Á•È¹¥Í	Õ™™•É•¡Ù¥‘•¼°ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€™É…A±…å¥¹ÕÉÉ•¹Ð€ôÑ¡¥Ì¹•ÑÁÁ•¹‘•‘É…œ¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€ô•±Í”¥˜€¡	Õ™™•É!•±Á•È¹¥Í	Õ™™•É•¡Ù¥‘•¼°ÕÉÉ•¹ÑQ¥µ”€¬€À¸Ä¤¤ì(€€€€€€€€€€¼¨•¹ÍÕÉ”Ñ¡…ÐI}!9•Ù•¹Ð¥ÌÑÉ¥•É•…ÐÍÑ…ÉÑÕÀ°(€€€€€€€€€€€Ý¡•¸™¥ÉÍÐÙ¥‘•¼™É…µ”¥Ì‘¥ÍÁ±…å•…¹Á±…å‰…¬¥ÌÁ…ÕÍ•¸(€€€€€€€€€€€…‘„Ñ½±•É…¹”½˜€ÄÀÁµÌ°¥¸…Í”ÕÉÉ•¹ÐÁ½Í¥Ñ¥½¸¥Ì¹½Ð‰Õ™™•É•°(€€€€€€€€€€€¡•¬¥˜ÕÉÉ•¹ÐÁ½Ì¬ÄÀÁµÌ¥Ì‰Õ™™•É•…¹ÕÍ”Ñ¡…Ð‰Õ™™•ÈÉ…¹”(€€€€€€€€€€€™½ÈI}!9•Ù•¹ÐÉ•Á½ÉÑ¥¹œ€¨¼(€€€€€€€€€™É…A±…å¥¹ÕÉÉ•¹Ð€ôÑ¡¥Ì¹•ÑÁÁ•¹‘•‘É…œ¡ÕÉÉ•¹ÑQ¥µ”€¬€À¸Ä¤ì(€€€€€€€ô(€€€€€€€¥˜€¡™É…A±…å¥¹ÕÉÉ•¹Ð¤ì(€€€€€€€€€Ñ¡¥Ì¹‰…­ÑÉ…­É…µ•¹Ð€ô¹Õ±°ì(€€€€€€€€€Ù…È™É…A±…å¥¹œ€ôÑ¡¥Ì¹™É…A±…å¥¹œì(€€€€€€€€€Ù…È™É…ÕÉÉ•¹Ñ1•Ù•°€ô™É…A±…å¥¹ÕÉÉ•¹Ð¹±•Ù•°ì(€€€€€€€€€¥˜€ …™É…A±…å¥¹œñð™É…A±…å¥¹ÕÉÉ•¹Ð¹Í¸€„ôô™É…A±…å¥¹œ¹Í¸ñð™É…A±…å¥¹œ¹±•Ù•°€„ôô™É…ÕÉÉ•¹Ñ1•Ù•°¤ì(€€€€€€€€€€€Ñ¡¥Ì¹™É…A±…å¥¹œ€ô™É…A±…å¥¹ÕÉÉ•¹Ðì(€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹I}!9°ì(€€€€€€€€€€€€€™É…œè™É…A±…å¥¹ÕÉÉ•¹Ð(€€€€€€€€€€€ô¤ì(€€€€€€€€€€€¥˜€ …™É…A±…å¥¹œñð™É…A±…å¥¹œ¹±•Ù•°€„ôô™É…ÕÉÉ•¹Ñ1•Ù•°¤ì(€€€€€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1}M]%Q!°ì(€€€€€€€€€€€€€€€±•Ù•°è™É…ÕÉÉ•¹Ñ1•Ù•°(€€€€€€€€€€€€€ô¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡MÑÉ•…µ½¹ÑÉ½±±•È°mì(€€€€€­•äè€‰¡…Í¹½Õ¡Q½MÑ…ÉÐˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}¡…Í¹½Õ¡Q½MÑ…ÉÐì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…á	Õ™™•É1•¹Ñ ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€±•Ù•°€ôÑ¡¥Ì¹±•Ù•°ì(€€€€€€€Ù…È±•Ù•±%¹™¼€ô±•Ù•±Ì€ôô¹Õ±°€üÙ½¥€À€è±•Ù•±Ím±•Ù•±tì(€€€€€€€¥˜€ …±•Ù•±%¹™¼¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹½¹™¥œ¹µ…á	Õ™™•É1•¹Ñ ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•Ñ5…á	Õ™™•É1•¹Ñ ¡±•Ù•±%¹™¼¹µ…á	¥ÑÉ…Ñ”¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰¹•áÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹¹•áÑ	Õ™™•É•‘É…œì(€€€€€€€¥˜€¡™É…œ¤ì(€€€€€€€€€É•ÑÕÉ¸™É…œ¹±•Ù•°ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸€´Äì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÕÉÉ•¹ÑÉ…œˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„Ìì(€€€€€€€¥˜€¡Ñ¡¥Ì¹™É…A±…å¥¹œ¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™É…A±…å¥¹œì(€€€€€€€ô(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ô€ ¡}Ñ¡¥Ì‘µ•‘¥„Ì€ôÑ¡¥Ì¹µ•‘¥„¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘µ•‘¥„Ì¹ÕÉÉ•¹ÑQ¥µ”¤ñðÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€¥˜€¡¥Í¥¹¥Ñ•9Õµ‰•È¡ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•ÑÁÁ•¹‘•‘É…œ¡ÕÉÉ•¹ÑQ¥µ”¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÕÉÉ•¹ÑAÉ½É…µ…Ñ•Q¥µ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘µ•‘¥„Ðì(€€€€€€€Ù…ÈÕÉÉ•¹ÑQ¥µ”€ô€ ¡}Ñ¡¥Ì‘µ•‘¥„Ð€ôÑ¡¥Ì¹µ•‘¥„¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘µ•‘¥„Ð¹ÕÉÉ•¹ÑQ¥µ”¤ñðÑ¡¥Ì¹±…ÍÑÕÉÉ•¹ÑQ¥µ”ì(€€€€€€€¥˜€¡¥Í¥¹¥Ñ•9Õµ‰•È¡ÕÉÉ•¹ÑQ¥µ”¤¤ì(€€€€€€€€€Ù…È‘•Ñ…¥±Ì€ôÑ¡¥Ì¹•Ñ1•Ù•±•Ñ…¥±Ì ¤ì(€€€€€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑÉ…œñð€¡‘•Ñ…¥±Ì€ü™¥¹‘É…µ•¹Ñ	åAQL¡¹Õ±°°‘•Ñ…¥±Ì¹™É…µ•¹ÑÌ°ÕÉÉ•¹ÑQ¥µ”¤€è¹Õ±°¤ì(€€€€€€€€€¥˜€¡™É…œ¤ì(€€€€€€€€€€€Ù…ÈÁÉ½É…µ…Ñ•Q¥µ”€ô™É…œ¹ÁÉ½É…µ…Ñ•Q¥µ”ì(€€€€€€€€€€€¥˜€¡ÁÉ½É…µ…Ñ•Q¥µ”€„ôô¹Õ±°¤ì(€€€€€€€€€€€€€Ù…È•Á½5Ì€ôÁÉ½É…µ…Ñ•Q¥µ”€¬€¡ÕÉÉ•¹ÑQ¥µ”€´™É…œ¹ÍÑ…ÉÐ¤€¨€ÄÀÀÀì(€€€€€€€€€€€€€É•ÑÕÉ¸¹•Ü…Ñ”¡•Á½5Ì¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÕÉÉ•¹Ñ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑÉ…œì(€€€€€€€¥˜€¡™É…œ¤ì(€€€€€€€€€É•ÑÕÉ¸™É…œ¹±•Ù•°ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸€´Äì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰¹•áÑ	Õ™™•É•‘É…œˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È™É…œ€ôÑ¡¥Ì¹ÕÉÉ•¹ÑÉ…œì(€€€€€€€¥˜€¡™É…œ¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹™½±±½Ý¥¹	Õ™™•É•‘É…œ¡™É…œ¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰™½É•MÑ…ÉÑ1½…ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}™½É•MÑ…ÉÑ1½…ì(€€€€€ô(€€€õt¤ì(€ô¡	…Í•MÑÉ•…µ½¹ÑÉ½±±•È¤ì((€Ù…È-•å1½…‘•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸-•å1½…‘•È¡½¹™¥œ¤ì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™¼€ôíôì(€€€€€Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹™¥œ€ô½¹™¥œì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ô-•å1½…‘•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹…‰½ÉÐ€ô™Õ¹Ñ¥½¸…‰½ÉÐ¡ÑåÁ”¤ì(€€€€€™½È€¡Ù…ÈÕÉ¤¥¸Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™¼¤ì(€€€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥t¹±½…‘•Èì(€€€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€€€Ù…È}±½…‘•È‘½¹Ñ•áÐì(€€€€€€€€€¥˜€¡ÑåÁ”€˜˜ÑåÁ”€„ôô€ ¡}±½…‘•È‘½¹Ñ•áÐ€ô±½…‘•È¹½¹Ñ•áÐ¤€ôô¹Õ±°€üÙ½¥€À€è}±½…‘•È‘½¹Ñ•áÐ¹™É…œ¹ÑåÁ”¤¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€±½…‘•È¹…‰½ÉÐ ¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹‘•Ñ… €ô™Õ¹Ñ¥½¸‘•Ñ…  ¤ì(€€€€€™½È€¡Ù…ÈÕÉ¤¥¸Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™¼¤ì(€€€€€€€Ù…È­•å%¹™¼€ôÑ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥tì(€€€€€€€€¼¼I•µ½Ù”…¡•5­•åÌ½¸‘•Ñ… (€€€€€€€¥˜€¡­•å%¹™¼¹µ•‘¥…-•åM•ÍÍ¥½¹½¹Ñ•áÐñð­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹¥Í½µµ½¹¹ÉåÁÑ¥½¸¤ì(€€€€€€€€€‘•±•Ñ”Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥tì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹‘•Ñ…  ¤ì(€€€€€™½È€¡Ù…ÈÕÉ¤¥¸Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™¼¤ì(€€€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥t¹±½…‘•Èì(€€€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€€€±½…‘•È¹‘•ÍÑÉ½ä ¤ì(€€€€€€€ô(€€€€€ô(€€€€€Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™¼€ôíôì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•…Ñ•-•å1½…‘ÉÉ½È€ô™Õ¹Ñ¥½¸É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°‘•Ñ…¥±Ì°•ÉÉ½È°¹•ÑÝ½É­•Ñ…¥±Ì°É•ÍÁ½¹Í”¤ì(€€€€€¥˜€¡‘•Ñ…¥±Ì€ôôôÙ½¥€À¤ì(€€€€€€€‘•Ñ…¥±Ì€ôÉÉ½É•Ñ…¥±Ì¹-e}1=}II=Hì(€€€€€ô(€€€€€É•ÑÕÉ¸¹•Ü1½…‘ÉÉ½È¡ì(€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹9Q]=I-}II=H°(€€€€€€€‘•Ñ…¥±Ìè‘•Ñ…¥±Ì°(€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€™É…œè™É…œ°(€€€€€€€É•ÍÁ½¹Í”èÉ•ÍÁ½¹Í”°(€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘±•…È€ô™Õ¹Ñ¥½¸±½…‘±•…È¡±½…‘¥¹É…œ°•¹ÉåÁÑ•‘É…µ•¹ÑÌ¤ì(€€€€€Ù…È}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€¥˜€¡Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È€˜˜Ñ¡¥Ì¹½¹™¥œ¹•µ•¹…‰±•¤ì(€€€€€€€€¼¼…•ÍÌ­•äµÍåÍÑ•´Ý¥Ñ ¹•…É•ÍÐ­•ä½¸ÍÑ…ÉÐ€¡±½…¥‘¹œ™É…œ¥ÌÕ¹•¹ÉåÁÑ•¤(€€€€€€€Ù…ÈÍ¸€ô±½…‘¥¹É…œ¹Í¸°(€€€€€€€€€Œ€ô±½…‘¥¹É…œ¹Œì(€€€€€€€Ù…È}±½½À€ô™Õ¹Ñ¥½¸}±½½À ¤ì(€€€€€€€€€Ù…È™É…œ€ô•¹ÉåÁÑ•‘É…µ•¹ÑÍm¥tì(€€€€€€€€€¥˜€¡Œ€ðô™É…œ¹Œ€˜˜€¡Í¸€ôôô€¥¹¥ÑM•µ•¹Ðœñð™É…œ¹Í¸€ôôô€¥¹¥ÑM•µ•¹ÐœñðÍ¸€ð™É…œ¹Í¸¤¤ì(€€€€€€€€€€€}Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È¹Í•±•Ñ-•åMåÍÑ•µ½Éµ…Ð¡™É…œ¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€€€€€€€€€™É…œ¹Í•Ñ-•å½Éµ…Ð¡­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€€€€€€€ô¤ì(€€€€€€€€€€€É•ÑÕÉ¸€Äì€¼¼‰É•…¬(€€€€€€€€€ô(€€€€€€€ôì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð•¹ÉåÁÑ•‘É…µ•¹ÑÌ¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€€€¥˜€¡}±½½À ¤¤‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…€ô™Õ¹Ñ¥½¸±½…¡™É…œ¤ì(€€€€€Ù…È}Ñ¡¥ÌÈ€ôÑ¡¥Ìì(€€€€€¥˜€ …™É…œ¹‘•ÉåÁÑ‘…Ñ„€˜˜™É…œ¹•¹ÉåÁÑ•€˜˜Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È€˜˜Ñ¡¥Ì¹½¹™¥œ¹•µ•¹…‰±•¤ì(€€€€€€€€¼¼5Õ±Ñ¥Á±”­•åÌ°‰ÕÐ¹½¹”Í•±•Ñ•°É•Í½±Ù”¥¸•µ”µ½¹ÑÉ½±±•È(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È¹Í•±•Ñ-•åMåÍÑ•µ½Éµ…Ð¡™É…œ¤¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€€€€€É•ÑÕÉ¸}Ñ¡¥ÌÈ¹±½…‘%¹Ñ•É¹…°¡™É…œ°­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€€€ô¤ì(€€€€€ô(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘%¹Ñ•É¹…°¡™É…œ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘%¹Ñ•É¹…°€ô™Õ¹Ñ¥½¸±½…‘%¹Ñ•É¹…°¡™É…œ°­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€Ù…È}­•å%¹™¼°}­•å%¹™¼Èì(€€€€€¥˜€¡­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€€€™É…œ¹Í•Ñ-•å½Éµ…Ð¡­•åMåÍÑ•µ½Éµ…Ð¤ì(€€€€€ô(€€€€€Ù…È‘•ÉåÁÑ‘…Ñ„€ô™É…œ¹‘•ÉåÁÑ‘…Ñ„ì(€€€€€¥˜€ …‘•ÉåÁÑ‘…Ñ„¤ì(€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È¡­•åMåÍÑ•µ½Éµ…Ð€ü€‰áÁ•Ñ•™É…œ¹‘•ÉåÁÑ‘…Ñ„Ñ¼‰”‘•™¥¹•…™Ñ•ÈÍ•ÑÑ¥¹œ™½Éµ…Ð€ˆ€¬­•åMåÍÑ•µ½Éµ…Ð€è€5¥ÍÍ¥¹œ‘•ÉåÁÑ¥½¸‘…Ñ„½¸™É…µ•¹Ð¥¸½¹-•å1½…‘¥¹œœ¤ì(€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•©•Ð¡Ñ¡¥Ì¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=H°•ÉÉ½È¤¤ì(€€€€€ô(€€€€€Ù…ÈÕÉ¤€ô‘•ÉåÁÑ‘…Ñ„¹ÕÉ¤ì(€€€€€¥˜€ …ÕÉ¤¤ì(€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•©•Ð¡Ñ¡¥Ì¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=H°¹•ÜÉÉ½È ‰%¹Ù…±¥­•äUI$èpˆˆ€¬ÕÉ¤€¬€‰pˆˆ¤¤¤ì(€€€€€ô(€€€€€Ù…È­•å%¹™¼€ôÑ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥tì(€€€€€¥˜€ ¡}­•å%¹™¼€ô­•å%¹™¼¤€„ô¹Õ±°€˜˜}­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹­•ä¤ì(€€€€€€€‘•ÉåÁÑ‘…Ñ„¹­•ä€ô­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹­•äì(€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•Í½±Ù”¡ì(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€­•å%¹™¼è­•å%¹™¼(€€€€€€€ô¤ì(€€€€€ô(€€€€€€¼¼I•ÑÕÉ¸­•ä±½…ÁÉ½µ¥Í”…Ì±½¹œ…Ì¥Ð‘½•Ì¹½Ð¡…Ù”„µ•‘¥…­•äÍ•ÍÍ¥½¸Ý¥Ñ …¸Õ¹ÕÍ…‰±”­•äÍÑ…ÑÕÌ(€€€€€¥˜€ ¡}­•å%¹™¼È€ô­•å%¹™¼¤€„ô¹Õ±°€˜˜}­•å%¹™¼È¹­•å1½…‘AÉ½µ¥Í”¤ì(€€€€€€€Ù…È}­•å%¹™¼‘µ•‘¥…-•åM•ÍÌì(€€€€€€€ÍÝ¥Ñ € ¡}­•å%¹™¼‘µ•‘¥…-•åM•ÍÌ€ô­•å%¹™¼¹µ•‘¥…-•åM•ÍÍ¥½¹½¹Ñ•áÐ¤€ôô¹Õ±°€üÙ½¥€À€è}­•å%¹™¼‘µ•‘¥…-•åM•ÍÌ¹­•åMÑ…ÑÕÌ¤ì(€€€€€€€€€…Í”Õ¹‘•™¥¹•è(€€€€€€€€€…Í”€ÍÑ…ÑÕÌµÁ•¹‘¥¹œœè(€€€€€€€€€…Í”€ÕÍ…‰±”œè(€€€€€€€€€…Í”€ÕÍ…‰±”µ¥¸µ™ÕÑÕÉ”œè(€€€€€€€€€€€É•ÑÕÉ¸­•å%¹™¼¹­•å1½…‘AÉ½µ¥Í”¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡­•å1½…‘•‘…Ñ„¤ì(€€€€€€€€€€€€€€¼¼I•ÑÕÉ¸Ñ¡”½ÉÉ•Ð™É…µ•¹ÐÝ¥Ñ ÕÁ‘…Ñ•‘•ÉåÁÑ‘…Ñ„­•ä…¹±½…‘•­•å%¹™¼(€€€€€€€€€€€€€‘•ÉåÁÑ‘…Ñ„¹­•ä€ô­•å1½…‘•‘…Ñ„¹­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹­•äì(€€€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€€€€€­•å%¹™¼è­•å%¹™¼(€€€€€€€€€€€€€ôì(€€€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€€€€¼¼%˜Ý”¡…Ù”„­•äÍ•ÍÍ¥½¸…¹ÍÑ…ÑÕÌ…¹¥Ð¥Ì¹½ÐÁ•¹‘¥¹œ½ÈÕÍ…‰±”°½¹Ñ¥¹Õ”(€€€€€€€€¼¼Q¡¥ÌÝ¥±°¼‰…¬Ñ¼Ñ¡”•µ”µ½¹ÑÉ½±±•È™½È•áÁ¥É•­•åÌÑ¼•Ð„¹•Ü­•å1½…‘AÉ½µ¥Í”(€€€€€ô((€€€€€€¼¼1½…Ñ¡”­•ä½ÈÉ•ÑÕÉ¸Ñ¡”±½…‘¥¹œÁÉ½µ¥Í”(€€€€€­•å%¹™¼€ôÑ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥t€ôì(€€€€€€€‘•ÉåÁÑ‘…Ñ„è‘•ÉåÁÑ‘…Ñ„°(€€€€€€€­•å1½…‘AÉ½µ¥Í”è¹Õ±°°(€€€€€€€±½…‘•Èè¹Õ±°°(€€€€€€€µ•‘¥…-•åM•ÍÍ¥½¹½¹Ñ•áÐè¹Õ±°(€€€€€ôì(€€€€€ÍÝ¥Ñ €¡‘•ÉåÁÑ‘…Ñ„¹µ•Ñ¡½¤ì(€€€€€€€…Í”€%M<´ÈÌÀÀÄ´Üœè(€€€€€€€…Í”€M5A1µLœè(€€€€€€€…Í”€M5A1µLµ9œè(€€€€€€€…Í”€M5A1µLµQHœè(€€€€€€€€€¥˜€¡‘•ÉåÁÑ‘…Ñ„¹­•å½Éµ…Ð€ôôô€¥‘•¹Ñ¥Ñäœ¤ì(€€€€€€€€€€€€¼¼±½…‘-•å!QQ@¡…¹‘±•Ì¡ÑÑÀ¡Ì¤…¹‘…Ñ„UI1Ì(€€€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘-•å!QQ@¡­•å%¹™¼°™É…œ¤ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘-•å5¡­•å%¹™¼°™É…œ¤ì(€€€€€€€…Í”€L´ÄÈàœè(€€€€€€€…Í”€L´ÈÔØœè(€€€€€€€…Í”€L´ÈÔØµQHœè(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘-•å!QQ@¡­•å%¹™¼°™É…œ¤ì(€€€€€€€‘•™…Õ±Ðè(€€€€€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•©•Ð¡Ñ¡¥Ì¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=H°¹•ÜÉÉ½È ‰-•äÍÕÁÁ±¥•Ý¥Ñ Õ¹ÍÕÁÁ½ÉÑ•5Q!=èpˆˆ€¬‘•ÉåÁÑ‘…Ñ„¹µ•Ñ¡½€¬€‰pˆˆ¤¤¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘-•å5€ô™Õ¹Ñ¥½¸±½…‘-•å5¡­•å%¹™¼°™É…œ¤ì(€€€€€Ù…È­•å1½…‘•‘…Ñ„€ôì(€€€€€€€™É…œè™É…œ°(€€€€€€€­•å%¹™¼è­•å%¹™¼(€€€€€ôì(€€€€€¥˜€¡Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È€˜˜Ñ¡¥Ì¹½¹™¥œ¹•µ•¹…‰±•¤ì(€€€€€€€Ù…È­•åM•ÍÍ¥½¹½¹Ñ•áÑAÉ½µ¥Í”€ôÑ¡¥Ì¹•µ•½¹ÑÉ½±±•È¹±½…‘-•ä¡­•å1½…‘•‘…Ñ„¤ì(€€€€€€€¥˜€¡­•åM•ÍÍ¥½¹½¹Ñ•áÑAÉ½µ¥Í”¤ì(€€€€€€€€€É•ÑÕÉ¸€¡­•å%¹™¼¹­•å1½…‘AÉ½µ¥Í”€ô­•åM•ÍÍ¥½¹½¹Ñ•áÑAÉ½µ¥Í”¹Ñ¡•¸¡™Õ¹Ñ¥½¸€¡­•åM•ÍÍ¥½¹½¹Ñ•áÐ¤ì(€€€€€€€€€€€­•å%¹™¼¹µ•‘¥…-•åM•ÍÍ¥½¹½¹Ñ•áÐ€ô­•åM•ÍÍ¥½¹½¹Ñ•áÐì(€€€€€€€€€€€É•ÑÕÉ¸­•å1½…‘•‘…Ñ„ì(€€€€€€€€€ô¤¤¹…Ñ ¡™Õ¹Ñ¥½¸€¡•ÉÉ½È¤ì(€€€€€€€€€€€€¼¼I•µ½Ù”ÁÉ½µ¥Í”™½È±¥•¹Í”É•¹•Ý…°½ÈÉ•ÑÉä(€€€€€€€€€€€­•å%¹™¼¹­•å1½…‘AÉ½µ¥Í”€ô¹Õ±°ì(€€€€€€€€€€€Ñ¡É½Ü•ÉÉ½Èì(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸AÉ½µ¥Í”¹É•Í½±Ù”¡­•å1½…‘•‘…Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…‘-•å!QQ@€ô™Õ¹Ñ¥½¸±½…‘-•å!QQ@¡­•å%¹™¼°™É…œ¤ì(€€€€€Ù…È}Ñ¡¥ÌÌ€ôÑ¡¥Ìì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œì(€€€€€Ù…È1½…‘•È€ô½¹™¥œ¹±½…‘•Èì(€€€€€Ù…È­•å1½…‘•È€ô¹•Ü1½…‘•È¡½¹™¥œ¤ì(€€€€€™É…œ¹­•å1½…‘•È€ô­•å%¹™¼¹±½…‘•È€ô­•å1½…‘•Èì(€€€€€É•ÑÕÉ¸­•å%¹™¼¹­•å1½…‘AÉ½µ¥Í”€ô¹•ÜAÉ½µ¥Í”¡™Õ¹Ñ¥½¸€¡É•Í½±Ù”°É•©•Ð¤ì(€€€€€€€Ù…È±½…‘•É½¹Ñ•áÐ€ôì(€€€€€€€€€­•å%¹™¼è­•å%¹™¼°(€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€É•ÍÁ½¹Í•QåÁ”è€…ÉÉ…å‰Õ™™•Èœ°(€€€€€€€€€ÕÉ°è­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹ÕÉ¤(€€€€€€€ôì((€€€€€€€€¼¼µ…áI•ÑÉä¥Ì€ÀÍ¼Ñ¡…Ð¥¹ÍÑ•…½˜É•ÑÉå¥¹œÑ¡”Í…µ”­•ä½¸Ñ¡”Í…µ”Ù…É¥…¹ÐµÕ±Ñ¥Á±”Ñ¥µ•Ì°(€€€€€€€€¼¼­•äµ±½…‘•ÈÝ¥±°ÑÉ¥•È…¸•ÉÉ½È…¹É•±ä½¸ÍÑÉ•…´µ½¹ÑÉ½±±•ÈÑ¼¡…¹‘±”É•ÑÉä±½¥Œ¸(€€€€€€€€¼¼Ñ¡¥ÌÝ¥±°…±Í¼…±¥¸É•ÑÉä±½¥ŒÝ¥Ñ ™É…µ•¹Ðµ±½…‘•È(€€€€€€€Ù…È±½…‘A½±¥ä€ô½¹™¥œ¹­•å1½…‘A½±¥ä¹‘•™…Õ±Ðì(€€€€€€€Ù…È±½…‘•É½¹™¥œ€ôì(€€€€€€€€€±½…‘A½±¥äè±½…‘A½±¥ä°(€€€€€€€€€Ñ¥µ•½ÕÐè±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ì°(€€€€€€€€€µ…áI•ÑÉäè€À°(€€€€€€€€€É•ÑÉå•±…äè€À°(€€€€€€€€€µ…áI•ÑÉå•±…äè€À(€€€€€€€ôì(€€€€€€€Ù…È±½…‘•É…±±‰…­Ì€ôì(€€€€€€€€€½¹MÕ•ÍÌè™Õ¹Ñ¥½¸½¹MÕ•ÍÌ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€€€Ù…È™É…œ€ô½¹Ñ•áÐ¹™É…œ°(€€€€€€€€€€€€€­•å%¹™¼€ô½¹Ñ•áÐ¹­•å%¹™¼°(€€€€€€€€€€€€€ÕÉ¤€ô½¹Ñ•áÐ¹ÕÉ°ì(€€€€€€€€€€€¥˜€ …™É…œ¹‘•ÉåÁÑ‘…Ñ„ñð­•å%¹™¼€„ôô}Ñ¡¥ÌÌ¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥t¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸É•©•Ð¡}Ñ¡¥ÌÌ¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=H°¹•ÜÉÉ½È …™Ñ•È­•ä±½…°‘•ÉåÁÑ‘…Ñ„Õ¹Í•Ð½È¡…¹•œ¤°¹•ÑÝ½É­•Ñ…¥±Ì¤¤ì(€€€€€€€€€€€ô(€€€€€€€€€€€­•å%¹™¼¹‘•ÉåÁÑ‘…Ñ„¹­•ä€ô™É…œ¹‘•ÉåÁÑ‘…Ñ„¹­•ä€ô¹•ÜU¥¹ÐáÉÉ…ä¡É•ÍÁ½¹Í”¹‘…Ñ„¤ì((€€€€€€€€€€€€¼¼‘•Ñ… ™É…µ•¹Ð­•ä±½…‘•È½¸±½…ÍÕ•ÍÌ(€€€€€€€€€€€™É…œ¹­•å1½…‘•È€ô¹Õ±°ì(€€€€€€€€€€€­•å%¹™¼¹±½…‘•È€ô¹Õ±°ì(€€€€€€€€€€€É•Í½±Ù”¡ì(€€€€€€€€€€€€€™É…œè™É…œ°(€€€€€€€€€€€€€­•å%¹™¼è­•å%¹™¼(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô°(€€€€€€€€€½¹ÉÉ½Èè™Õ¹Ñ¥½¸½¹ÉÉ½È¡É•ÍÁ½¹Í”°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°ÍÑ…ÑÌ¤ì(€€€€€€€€€€€}Ñ¡¥ÌÌ¹É•Í•Ñ1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€€€€€€€É•©•Ð¡}Ñ¡¥ÌÌ¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}II=H°¹•ÜÉÉ½È ‰!QQ@ÉÉ½È€ˆ€¬É•ÍÁ½¹Í”¹½‘”€¬€ˆ±½…‘¥¹œ­•ä€ˆ€¬É•ÍÁ½¹Í”¹Ñ•áÐ¤°¹•ÑÝ½É­•Ñ…¥±Ì°}½‰©•ÑMÁÉ•…È¡ì(€€€€€€€€€€€€€ÕÉ°è±½…‘•É½¹Ñ•áÐ¹ÕÉ°°(€€€€€€€€€€€€€‘…Ñ„èÕ¹‘•™¥¹•(€€€€€€€€€€€ô°É•ÍÁ½¹Í”¤¤¤ì(€€€€€€€€€ô°(€€€€€€€€€½¹Q¥µ•½ÕÐè™Õ¹Ñ¥½¸½¹Q¥µ•½ÕÐ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€€€}Ñ¡¥ÌÌ¹É•Í•Ñ1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€€€€€€€É•©•Ð¡}Ñ¡¥ÌÌ¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹-e}1=}Q%5=UP°¹•ÜÉÉ½È ­•ä±½…‘¥¹œÑ¥µ•½ÕÐœ¤°¹•ÑÝ½É­•Ñ…¥±Ì¤¤ì(€€€€€€€€€ô°(€€€€€€€€€½¹‰½ÉÐè™Õ¹Ñ¥½¸½¹‰½ÉÐ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€€€}Ñ¡¥ÌÌ¹É•Í•Ñ1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€€€€€€€É•©•Ð¡}Ñ¡¥ÌÌ¹É•…Ñ•-•å1½…‘ÉÉ½È¡™É…œ°ÉÉ½É•Ñ…¥±Ì¹%9QI91}	=IQ°¹•ÜÉÉ½È ­•ä±½…‘¥¹œ…‰½ÉÑ•œ¤°¹•ÑÝ½É­•Ñ…¥±Ì¤¤ì(€€€€€€€€€ô(€€€€€€€ôì(€€€€€€€­•å1½…‘•È¹±½…¡±½…‘•É½¹Ñ•áÐ°±½…‘•É½¹™¥œ°±½…‘•É…±±‰…­Ì¤ì(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•Í•Ñ1½…‘•È€ô™Õ¹Ñ¥½¸É•Í•Ñ1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€Ù…È™É…œ€ô½¹Ñ•áÐ¹™É…œ°(€€€€€€€­•å%¹™¼€ô½¹Ñ•áÐ¹­•å%¹™¼°(€€€€€€€ÕÉ¤€ô½¹Ñ•áÐ¹ÕÉ°ì(€€€€€Ù…È±½…‘•È€ô­•å%¹™¼¹±½…‘•Èì(€€€€€¥˜€¡™É…œ¹­•å1½…‘•È€ôôô±½…‘•È¤ì(€€€€€€€™É…œ¹­•å1½…‘•È€ô¹Õ±°ì(€€€€€€€­•å%¹™¼¹±½…‘•È€ô¹Õ±°ì(€€€€€ô(€€€€€‘•±•Ñ”Ñ¡¥Ì¹­•åUÉ¥Q½-•å%¹™½mÕÉ¥tì(€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€±½…‘•È¹‘•ÍÑÉ½ä ¤ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸-•å1½…‘•Èì(€ô ¤ì((€™Õ¹Ñ¥½¸µ…Á½¹Ñ•áÑQ½1•Ù•±QåÁ”¡½¹Ñ•áÐ¤ì(€€€Ù…ÈÑåÁ”€ô½¹Ñ•áÐ¹ÑåÁ”ì(€€€ÍÝ¥Ñ €¡ÑåÁ”¤ì(€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,è(€€€€€€€É•ÑÕÉ¸A±…å±¥ÍÑ1•Ù•±QåÁ”¹U%<ì(€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,è(€€€€€€€É•ÑÕÉ¸A±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1ì(€€€€€‘•™…Õ±Ðè(€€€€€€€É•ÑÕÉ¸A±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8ì(€€€ô(€ô(€™Õ¹Ñ¥½¸•ÑI•ÍÁ½¹Í•UÉ°¡É•ÍÁ½¹Í”°½¹Ñ•áÐ¤ì(€€€Ù…ÈÕÉ°€ôÉ•ÍÁ½¹Í”¹ÕÉ°ì(€€€€¼¼É•ÍÁ½¹Í•UI0¹½ÐÍÕÁÁ½ÉÑ•½¸Í½µ”‰É½ÝÍ•ÉÌ€¡¥Ð¥ÌÕÍ•Ñ¼‘•Ñ•ÐUI0É•‘¥É•Ñ¥½¸¤(€€€€¼¼‘…Ñ„µÕÉ¤µ½‘”…±Í¼¹½ÐÍÕÁÁ½ÉÑ•€¡‰ÕÐ¹¼¹••Ñ¼‘•Ñ•ÐÉ•‘¥É•Ñ¥½¸¤(€€€¥˜€¡ÕÉ°€ôôôÕ¹‘•™¥¹•ñðÕÉ°¹¥¹‘•á=˜ ‘…Ñ„èœ¤€ôôô€À¤ì(€€€€€€¼¼™…±±‰…¬Ñ¼¥¹¥Ñ¥…°UI0(€€€€€ÕÉ°€ô½¹Ñ•áÐ¹ÕÉ°ì(€€€ô(€€€É•ÑÕÉ¸ÕÉ°ì(€ô(€Ù…ÈA±…å±¥ÍÑ1½…‘•È€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€™Õ¹Ñ¥½¸A±…å±¥ÍÑ1½…‘•È¡¡±Ì¤ì(€€€€€Ñ¡¥Ì¹¡±Ì€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±½…‘•ÉÌ€ô=‰©•Ð¹É•…Ñ”¡¹Õ±°¤ì(€€€€€Ñ¡¥Ì¹Ù…É¥…‰±•1¥ÍÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘•€ôÑ¡¥Ì¹¡•­ÕÑ½ÍÑ…ÉÑ1½…ì(€€€€€Ñ¡¥Ì¹¡±Ì€ô¡±Ìì(€€€€€Ñ¡¥Ì¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€ô(€€€Ù…È}ÁÉ½Ñ¼€ôA±…å±¥ÍÑ1½…‘•È¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹ÍÑ…ÉÑ1½…€ô™Õ¹Ñ¥½¸ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸¤íôì(€€€}ÁÉ½Ñ¼¹ÍÑ½Á1½…€ô™Õ¹Ñ¥½¸ÍÑ½Á1½… ¤ì(€€€€€Ñ¡¥Ì¹‘•ÍÑÉ½å%¹Ñ•É¹…±1½…‘•ÉÌ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1}1=%9°Ñ¡¥Ì¹½¹1•Ù•±1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹U%=}QI-}1=%9°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=%9°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½¸¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹59%MQ}1=%9°Ñ¡¥Ì¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1}1=%9°Ñ¡¥Ì¹½¹1•Ù•±1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹U%=}QI-}1=%9°Ñ¡¥Ì¹½¹Õ‘¥½QÉ…­1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=%9°Ñ¡¥Ì¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘¥¹œ°Ñ¡¥Ì¤ì(€€€€€¡±Ì¹½™˜¡Ù•¹ÑÌ¹1Y1M}UAQ°Ñ¡¥Ì¹½¹1•Ù•±ÍUÁ‘…Ñ•°Ñ¡¥Ì¤ì(€€€ô((€€€€¼¨¨(€€€€€¨I•ÑÕÉ¹Ì‘•™…Õ±ÑÌ½È½¹™¥ÕÉ•±½…‘•ÈµÑåÁ”½Ù•É±½…‘Ì€¡Á1½…‘•È…¹±½…‘•È½¹™¥œÁ…É…µÌ¤(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹É•…Ñ•%¹Ñ•É¹…±1½…‘•È€ô™Õ¹Ñ¥½¸É•…Ñ•%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œì(€€€€€Ù…ÈA1½…‘•È€ô½¹™¥œ¹Á1½…‘•Èì(€€€€€Ù…È1½…‘•È€ô½¹™¥œ¹±½…‘•Èì(€€€€€Ù…È%¹Ñ•É¹…±1½…‘•È€ôA1½…‘•Èñð1½…‘•Èì(€€€€€Ù…È±½…‘•È€ô¹•Ü%¹Ñ•É¹…±1½…‘•È¡½¹™¥œ¤ì(€€€€€Ñ¡¥Ì¹±½…‘•ÉÍm½¹Ñ•áÐ¹ÑåÁ•t€ô±½…‘•Èì(€€€€€É•ÑÕÉ¸±½…‘•Èì(€€€ôì(€€€}ÁÉ½Ñ¼¹•Ñ%¹Ñ•É¹…±1½…‘•È€ô™Õ¹Ñ¥½¸•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±½…‘•ÉÍm½¹Ñ•áÐ¹ÑåÁ•tì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•Í•Ñ%¹Ñ•É¹…±1½…‘•È€ô™Õ¹Ñ¥½¸É•Í•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÑQåÁ”¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹±½…‘•ÉÍm½¹Ñ•áÑQåÁ•t¤ì(€€€€€€€‘•±•Ñ”Ñ¡¥Ì¹±½…‘•ÉÍm½¹Ñ•áÑQåÁ•tì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨…±°‘•ÍÑÉ½å€½¸…±°¥¹Ñ•É¹…°±½…‘•È¥¹ÍÑ…¹•Ìµ…ÁÁ•€¡½¹”Á•È½¹Ñ•áÐÑåÁ”¤(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½å%¹Ñ•É¹…±1½…‘•ÉÌ€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½å%¹Ñ•É¹…±1½…‘•ÉÌ ¤ì(€€€€€™½È€¡Ù…È½¹Ñ•áÑQåÁ”¥¸Ñ¡¥Ì¹±½…‘•ÉÌ¤ì(€€€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹±½…‘•ÉÍm½¹Ñ•áÑQåÁ•tì(€€€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€€€±½…‘•È¹‘•ÍÑÉ½ä ¤ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹É•Í•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÑQåÁ”¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹Ù…É¥…‰±•1¥ÍÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹Õ¹É•¥ÍÑ•É1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹‘•ÍÑÉ½å%¹Ñ•É¹…±1½…‘•ÉÌ ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹5…¹¥™•ÍÑ1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹5…¹¥™•ÍÑ1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…ÈÕÉ°€ô‘…Ñ„¹ÕÉ°ì(€€€€€Ñ¡¥Ì¹Ù…É¥…‰±•1¥ÍÐ€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±½…¡ì(€€€€€€€¥è¹Õ±°°(€€€€€€€±•Ù•°è€À°(€€€€€€€É•ÍÁ½¹Í•QåÁ”è€Ñ•áÐœ°(€€€€€€€ÑåÁ”èA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP°(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè¹Õ±°°(€€€€€€€±•Ù•±=ÉQÉ…¬è¹Õ±°(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹1•Ù•±1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È¥€ô‘…Ñ„¹¥°(€€€€€€€±•Ù•°€ô‘…Ñ„¹±•Ù•°°(€€€€€€€Á…Ñ¡Ý…å%€ô‘…Ñ„¹Á…Ñ¡Ý…å%°(€€€€€€€ÕÉ°€ô‘…Ñ„¹ÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì€ô‘…Ñ„¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€±•Ù•±%¹™¼€ô‘…Ñ„¹±•Ù•±%¹™¼ì(€€€€€Ñ¡¥Ì¹±½…¡ì(€€€€€€€¥è¥°(€€€€€€€±•Ù•°è±•Ù•°°(€€€€€€€Á…Ñ¡Ý…å%èÁ…Ñ¡Ý…å%°(€€€€€€€É•ÍÁ½¹Í•QåÁ”è€Ñ•áÐœ°(€€€€€€€ÑåÁ”èA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0°(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€±•Ù•±=ÉQÉ…¬è±•Ù•±%¹™¼(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹Õ‘¥½QÉ…­1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹Õ‘¥½QÉ…­1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È¥€ô‘…Ñ„¹¥°(€€€€€€€É½ÕÁ%€ô‘…Ñ„¹É½ÕÁ%°(€€€€€€€ÕÉ°€ô‘…Ñ„¹ÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì€ô‘…Ñ„¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€ÑÉ…¬€ô‘…Ñ„¹ÑÉ…¬ì(€€€€€Ñ¡¥Ì¹±½…¡ì(€€€€€€€¥è¥°(€€€€€€€É½ÕÁ%èÉ½ÕÁ%°(€€€€€€€±•Ù•°è¹Õ±°°(€€€€€€€É•ÍÁ½¹Í•QåÁ”è€Ñ•áÐœ°(€€€€€€€ÑåÁ”èA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,°(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€±•Ù•±=ÉQÉ…¬èÑÉ…¬(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘¥¹œ€ô™Õ¹Ñ¥½¸½¹MÕ‰Ñ¥Ñ±•QÉ…­1½…‘¥¹œ¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€Ù…È¥€ô‘…Ñ„¹¥°(€€€€€€€É½ÕÁ%€ô‘…Ñ„¹É½ÕÁ%°(€€€€€€€ÕÉ°€ô‘…Ñ„¹ÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì€ô‘…Ñ„¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€ÑÉ…¬€ô‘…Ñ„¹ÑÉ…¬ì(€€€€€Ñ¡¥Ì¹±½…¡ì(€€€€€€€¥è¥°(€€€€€€€É½ÕÁ%èÉ½ÕÁ%°(€€€€€€€±•Ù•°è¹Õ±°°(€€€€€€€É•ÍÁ½¹Í•QåÁ”è€Ñ•áÐœ°(€€€€€€€ÑåÁ”èA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,°(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€±•Ù•±=ÉQÉ…¬èÑÉ…¬(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹1•Ù•±ÍUÁ‘…Ñ•€ô™Õ¹Ñ¥½¸½¹1•Ù•±ÍUÁ‘…Ñ•¡•Ù•¹Ð°‘…Ñ„¤ì(€€€€€€¼¼…‰½ÉÐ…¹‘•±•Ñ”±½…‘•È½˜É•µ½Ù•±•Ù•±Ì(€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹±½…‘•ÉÍmA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y1tì(€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€Ù…È½¹Ñ•áÐ€ô±½…‘•È¹½¹Ñ•áÐì(€€€€€€€¥˜€¡½¹Ñ•áÐ€˜˜€…‘…Ñ„¹±•Ù•±Ì¹Í½µ”¡™Õ¹Ñ¥½¸€¡±Ù°¤ì(€€€€€€€€€É•ÑÕÉ¸±Ù°€ôôô½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬ì(€€€€€€€ô¤¤ì(€€€€€€€€€±½…‘•È¹…‰½ÉÐ ¤ì(€€€€€€€€€‘•±•Ñ”Ñ¡¥Ì¹±½…‘•ÉÍmA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y1tì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹±½…€ô™Õ¹Ñ¥½¸±½…¡½¹Ñ•áÐ¤ì(€€€€€Ù…È}½¹Ñ•áÐ‘‘•±¥Ù•Éå¥É”°(€€€€€€€}Ñ¡¥Ì€ôÑ¡¥Ìì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹¡±Ì¹½¹™¥œì((€€€€€€¼¼±½•È¹‘•‰Õœ¡mÁ±…å±¥ÍÐµ±½…‘•Étè1½…‘¥¹œÁ±…å±¥ÍÐ½˜ÑåÁ”€‘í½¹Ñ•áÐ¹ÑåÁ•ô°±•Ù•°è€‘í½¹Ñ•áÐ¹±•Ù•±ô°¥è€‘í½¹Ñ•áÐ¹¥‘õ€¤ì((€€€€€€¼¼¡•¬¥˜„±½…‘•È™½ÈÑ¡¥Ì½¹Ñ•áÐ…±É•…‘ä•á¥ÍÑÌ(€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€Ù…È±½•È€ôÑ¡¥Ì¹¡±Ì¹±½•Èì(€€€€€€€Ù…È±½…‘•É½¹Ñ•áÐ€ô±½…‘•È¹½¹Ñ•áÐì(€€€€€€€¥˜€¡±½…‘•É½¹Ñ•áÐ€˜˜±½…‘•É½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬€ôôô½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬€˜˜€¡±½…‘•É½¹Ñ•áÐ¹ÕÉ°€ôôô½¹Ñ•áÐ¹ÕÉ°ñð±½…‘•É½¹Ñ•áÐ¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì€˜˜€…½¹Ñ•áÐ¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì¤¤ì(€€€€€€€€€€¼¼Í…µ”UI0…¸Ð½Ù•É±…À°½ÈÝ…¥Ð™½È‰±½­¥¹œÉ•ÅÕ•ÍÐ(€€€€€€€€€¥˜€¡±½…‘•É½¹Ñ•áÐ¹ÕÉ°€ôôô½¹Ñ•áÐ¹ÕÉ°¤ì(€€€€€€€€€€€±½•È¹±½œ ‰mÁ±…å±¥ÍÐµ±½…‘•Étè¥¹½É”€ˆ€¬½¹Ñ•áÐ¹ÕÉ°€¬€ˆ½¹½¥¹œÉ•ÅÕ•ÍÐˆ¤ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€±½•È¹±½œ ‰mÁ±…å±¥ÍÐµ±½…‘•Étè¥¹½É”€ˆ€¬½¹Ñ•áÐ¹ÕÉ°€¬€ˆ¥¸™…Ù½È½˜€ˆ€¬±½…‘•É½¹Ñ•áÐ¹ÕÉ°¤ì(€€€€€€€€€ô(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€±½•È¹±½œ ‰mÁ±…å±¥ÍÐµ±½…‘•Étè…‰½ÉÑ¥¹œÁÉ•Ù¥½ÕÌ±½…‘•È™½ÈÑåÁ”è€ˆ€¬½¹Ñ•áÐ¹ÑåÁ”¤ì(€€€€€€€±½…‘•È¹…‰½ÉÐ ¤ì(€€€€€ô((€€€€€€¼¼…ÁÁ±ä‘¥™™•É•¹Ð½¹™¥Ì™½ÈÉ•ÑÉ¥•Ì‘•Á•¹‘¥¹œ½¸(€€€€€€¼¼½¹Ñ•áÐ€¡µ…¹¥™•ÍÐ°±•Ù•°°…Õ‘¥¼½ÍÕ‰ÌÁ±…å±¥ÍÐ¤(€€€€€Ù…È±½…‘A½±¥äì(€€€€€¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP¤ì(€€€€€€€±½…‘A½±¥ä€ô½¹™¥œ¹µ…¹¥™•ÍÑ1½…‘A½±¥ä¹‘•™…Õ±Ðì(€€€€€ô•±Í”ì(€€€€€€€±½…‘A½±¥ä€ô}•áÑ•¹‘Ì¡íô°½¹™¥œ¹Á±…å±¥ÍÑ1½…‘A½±¥ä¹‘•™…Õ±Ð°ì(€€€€€€€€€Ñ¥µ•½ÕÑI•ÑÉäè¹Õ±°°(€€€€€€€€€•ÉÉ½ÉI•ÑÉäè¹Õ±°(€€€€€€€ô¤ì(€€€€€ô(€€€€€±½…‘•È€ôÑ¡¥Ì¹É•…Ñ•%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì((€€€€€€¼¼=Ù•ÉÉ¥‘”±•Ù•°½ÑÉ…¬Ñ¥µ•½ÕÐ™½È10µ!1LÉ•ÅÕ•ÍÑÌ(€€€€€€¼¼€¡Ñ¡”‘•™…Õ±Ð½˜€ÄÀÀÀÁµÌ¥Ì½Õ¹Ñ•ÈÁÉ½‘ÕÑ¥Ù”Ñ¼‰±½­¥¹œÁ±…å±¥ÍÐÉ•±½…É•ÅÕ•ÍÑÌ¤(€€€€€¥˜€¡¥Í¥¹¥Ñ•9Õµ‰•È ¡}½¹Ñ•áÐ‘‘•±¥Ù•Éå¥É”€ô½¹Ñ•áÐ¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì¤€ôô¹Õ±°€üÙ½¥€À€è}½¹Ñ•áÐ‘‘•±¥Ù•Éå¥É”¹Á…ÉÐ¤¤ì(€€€€€€€Ù…È±•Ù•±•Ñ…¥±Ìì(€€€€€€€¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0€˜˜½¹Ñ•áÐ¹±•Ù•°€„ôô¹Õ±°¤ì(€€€€€€€€€±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹¡±Ì¹±•Ù•±Ím½¹Ñ•áÐ¹±•Ù•±t¹‘•Ñ…¥±Ìì(€€€€€€€ô•±Í”¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,€˜˜½¹Ñ•áÐ¹¥€„ôô¹Õ±°¤ì(€€€€€€€€€±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹¡±Ì¹…Õ‘¥½QÉ…­Ím½¹Ñ•áÐ¹¥‘t¹‘•Ñ…¥±Ìì(€€€€€€€ô•±Í”¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,€˜˜½¹Ñ•áÐ¹¥€„ôô¹Õ±°¤ì(€€€€€€€€€±•Ù•±•Ñ…¥±Ì€ôÑ¡¥Ì¹¡±Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­Ím½¹Ñ•áÐ¹¥‘t¹‘•Ñ…¥±Ìì(€€€€€€€ô(€€€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì¤ì(€€€€€€€€€Ù…ÈÁ…ÉÑQ…É•Ð€ô±•Ù•±•Ñ…¥±Ì¹Á…ÉÑQ…É•Ðì(€€€€€€€€€Ù…ÈÑ…É•ÑÕÉ…Ñ¥½¸€ô±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸ì(€€€€€€€€€¥˜€¡Á…ÉÑQ…É•Ð€˜˜Ñ…É•ÑÕÉ…Ñ¥½¸¤ì(€€€€€€€€€€€Ù…Èµ…á1½Ý1…Ñ•¹åA±…å±¥ÍÑI•™É•Í €ô5…Ñ ¹µ…à¡Á…ÉÑQ…É•Ð€¨€Ì°Ñ…É•ÑÕÉ…Ñ¥½¸€¨€À¸à¤€¨€ÄÀÀÀì(€€€€€€€€€€€±½…‘A½±¥ä€ô}•áÑ•¹‘Ì¡íô°±½…‘A½±¥ä°ì(€€€€€€€€€€€€€µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ìè5…Ñ ¹µ¥¸¡µ…á1½Ý1…Ñ•¹åA±…å±¥ÍÑI•™É•Í °±½…‘A½±¥ä¹µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì¤°(€€€€€€€€€€€€€µ…á1½…‘Q¥µ•5Ìè5…Ñ ¹µ¥¸¡µ…á1½Ý1…Ñ•¹åA±…å±¥ÍÑI•™É•Í °±½…‘A½±¥ä¹µ…áQ¥µ•Q½¥ÉÍÑ	åÑ•5Ì¤(€€€€€€€€€€€ô¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€Ù…È±•…åI•ÑÉå½µÁ…Ñ¥‰¥±¥Ñä€ô±½…‘A½±¥ä¹•ÉÉ½ÉI•ÑÉäñð±½…‘A½±¥ä¹Ñ¥µ•½ÕÑI•ÑÉäñðíôì(€€€€€Ù…È±½…‘•É½¹™¥œ€ôì(€€€€€€€±½…‘A½±¥äè±½…‘A½±¥ä°(€€€€€€€Ñ¥µ•½ÕÐè±½…‘A½±¥ä¹µ…á1½…‘Q¥µ•5Ì°(€€€€€€€µ…áI•ÑÉäè±•…åI•ÑÉå½µÁ…Ñ¥‰¥±¥Ñä¹µ…á9ÕµI•ÑÉäñð€À°(€€€€€€€É•ÑÉå•±…äè±•…åI•ÑÉå½µÁ…Ñ¥‰¥±¥Ñä¹É•ÑÉå•±…å5Ìñð€À°(€€€€€€€µ…áI•ÑÉå•±…äè±•…åI•ÑÉå½µÁ…Ñ¥‰¥±¥Ñä¹µ…áI•ÑÉå•±…å5Ìñð€À(€€€€€ôì(€€€€€Ù…È±½…‘•É…±±‰…­Ì€ôì(€€€€€€€½¹MÕ•ÍÌè™Õ¹Ñ¥½¸½¹MÕ•ÍÌ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€Ù…È±½…‘•È€ô}Ñ¡¥Ì¹•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€€€€€}Ñ¡¥Ì¹É•Í•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¹ÑåÁ”¤ì(€€€€€€€€€Ù…ÈÍÑÉ¥¹œ€ôÉ•ÍÁ½¹Í”¹‘…Ñ„ì((€€€€€€€€€€¼¼Y…±¥‘…Ñ”¥˜¥Ð¥Ì…¸4ÍTà…Ð…±°(€€€€€€€€€¥˜€¡ÍÑÉ¥¹œ¹¥¹‘•á=˜ œaQ4ÍTœ¤€„ôô€À¤ì(€€€€€€€€€€€}Ñ¡¥Ì¹¡…¹‘±•5…¹¥™•ÍÑA…ÉÍ¥¹ÉÉ½È¡É•ÍÁ½¹Í”°½¹Ñ•áÐ°¹•ÜÉÉ½È ¹¼aQ4ÍT‘•±¥µ¥Ñ•Èœ¤°¹•ÑÝ½É­•Ñ…¥±Ìñð¹Õ±°°ÍÑ…ÑÌ¤ì(€€€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€€€ô(€€€€€€€€€ÍÑ…ÑÌ¹Á…ÉÍ¥¹œ¹ÍÑ…ÉÐ€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì(€€€€€€€€€¥˜€¡4ÍTáA…ÉÍ•È¹¥Í5•‘¥…A±…å±¥ÍÐ¡ÍÑÉ¥¹œ¤ñð½¹Ñ•áÐ¹ÑåÁ”€„ôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP¤ì(€€€€€€€€€€€}Ñ¡¥Ì¹¡…¹‘±•QÉ…­=É1•Ù•±A±…å±¥ÍÐ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ìñð¹Õ±°°±½…‘•È¤ì(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€}Ñ¡¥Ì¹¡…¹‘±•5…ÍÑ•ÉA±…å±¥ÍÐ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€ô(€€€€€€€ô°(€€€€€€€½¹ÉÉ½Èè™Õ¹Ñ¥½¸½¹ÉÉ½È¡É•ÍÁ½¹Í”°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°ÍÑ…ÑÌ¤ì(€€€€€€€€€}Ñ¡¥Ì¹¡…¹‘±•9•ÑÝ½É­ÉÉ½È¡½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°™…±Í”°É•ÍÁ½¹Í”°ÍÑ…ÑÌ¤ì(€€€€€€€ô°(€€€€€€€½¹Q¥µ•½ÕÐè™Õ¹Ñ¥½¸½¹Q¥µ•½ÕÐ¡ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€€€€€}Ñ¡¥Ì¹¡…¹‘±•9•ÑÝ½É­ÉÉ½È¡½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°ÑÉÕ”°Õ¹‘•™¥¹•°ÍÑ…ÑÌ¤ì(€€€€€€€ô(€€€€€ôì((€€€€€€¼¼±½•È¹‘•‰Õœ¡mÁ±…å±¥ÍÐµ±½…‘•Étè…±±¥¹œ¥¹Ñ•É¹…°±½…‘•È‘•±•…Ñ”™½ÈUI0è€‘í½¹Ñ•áÐ¹ÕÉ±õ€¤ì((€€€€€±½…‘•È¹±½…¡½¹Ñ•áÐ°±½…‘•É½¹™¥œ°±½…‘•É…±±‰…­Ì¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡•­ÕÑ½ÍÑ…ÉÑ1½…€ô™Õ¹Ñ¥½¸¡•­ÕÑ½ÍÑ…ÉÑ1½… ¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹¡±Ì¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È}Ñ¡¥Ì‘¡±Ì€ôÑ¡¥Ì¹¡±Ì°(€€€€€€€}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ€ô}Ñ¡¥Ì‘¡±Ì¹½¹™¥œ°(€€€€€€€…ÕÑ½MÑ…ÉÑ1½…€ô}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ¹…ÕÑ½MÑ…ÉÑ1½…°(€€€€€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸€ô}Ñ¡¥Ì‘¡±Ì‘½¹™¥œ¹ÍÑ…ÉÑA½Í¥Ñ¥½¸°(€€€€€€€™½É•MÑ…ÉÑ1½…€ô}Ñ¡¥Ì‘¡±Ì¹™½É•MÑ…ÉÑ1½…ì(€€€€€¥˜€¡…ÕÑ½MÑ…ÉÑ1½…ñð™½É•MÑ…ÉÑ1½…¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹±½œ ¡…ÕÑ½MÑ…ÉÑ1½…€ü€…ÕÑ¼œ€è€™½É”œ¤€¬€ˆÍÑ…ÉÑ1½…Ý¥Ñ ½¹™¥ÕÉ•ÍÑ…ÉÑA½Í¥Ñ¥½¸€ˆ€¬ÍÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹‘±•5…ÍÑ•ÉA±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸¡…¹‘±•5…ÍÑ•ÉA±…å±¥ÍÐ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€Ù…ÈÍÑÉ¥¹œ€ôÉ•ÍÁ½¹Í”¹‘…Ñ„ì(€€€€€Ù…ÈÕÉ°€ô•ÑI•ÍÁ½¹Í•UÉ°¡É•ÍÁ½¹Í”°½¹Ñ•áÐ¤ì(€€€€€Ù…ÈÁ…ÉÍ•‘I•ÍÕ±Ð€ô4ÍTáA…ÉÍ•È¹Á…ÉÍ•5…ÍÑ•ÉA±…å±¥ÍÐ¡ÍÑÉ¥¹œ°ÕÉ°¤ì(€€€€€¥˜€¡Á…ÉÍ•‘I•ÍÕ±Ð¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½È¤ì(€€€€€€€Ñ¡¥Ì¹¡…¹‘±•5…¹¥™•ÍÑA…ÉÍ¥¹ÉÉ½È¡É•ÍÁ½¹Í”°½¹Ñ•áÐ°Á…ÉÍ•‘I•ÍÕ±Ð¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½È°¹•ÑÝ½É­•Ñ…¥±Ì°ÍÑ…ÑÌ¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ù…È½¹Ñ•¹ÑMÑ••É¥¹œ€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹½¹Ñ•¹ÑMÑ••É¥¹œ°(€€€€€€€±•Ù•±Ì€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹±•Ù•±Ì°(€€€€€€€Í•ÍÍ¥½¹…Ñ„€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹Í•ÍÍ¥½¹…Ñ„°(€€€€€€€Í•ÍÍ¥½¹-•åÌ€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹Í•ÍÍ¥½¹-•åÌ°(€€€€€€€ÍÑ…ÉÑQ¥µ•=™™Í•Ð€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹ÍÑ…ÉÑQ¥µ•=™™Í•Ð°(€€€€€€€Ù…É¥…‰±•1¥ÍÐ€ôÁ…ÉÍ•‘I•ÍÕ±Ð¹Ù…É¥…‰±•1¥ÍÐì(€€€€€Ñ¡¥Ì¹Ù…É¥…‰±•1¥ÍÐ€ôÙ…É¥…‰±•1¥ÍÐì(€€€€€Ù…È}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐ€ô4ÍTáA…ÉÍ•È¹Á…ÉÍ•5…ÍÑ•ÉA±…å±¥ÍÑ5•‘¥„¡ÍÑÉ¥¹œ°ÕÉ°°Á…ÉÍ•‘I•ÍÕ±Ð¤°(€€€€€€€}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐÈ€ô}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐ¹U%<°(€€€€€€€…Õ‘¥½QÉ…­Ì€ô}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐÈ€ôôôÙ½¥€À€ümt€è}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐÈ°(€€€€€€€ÍÕ‰Ñ¥Ñ±•Ì€ô}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÐ¹MU	Q%Q1L°(€€€€€€€…ÁÑ¥½¹Ì€ô}4ÍTáA…ÉÍ•È‘Á…ÉÍ•5…ÍÑl1=MµAQ%=9Ltì(€€€€€¥˜€¡…Õ‘¥½QÉ…­Ì¹±•¹Ñ ¤ì(€€€€€€€€¼¼¡•¬¥˜Ý”¡…Ù”™½Õ¹…¸…Õ‘¥¼ÑÉ…¬•µ‰•‘‘•¥¸µ…¥¸Á±…å±¥ÍÐ€¡…Õ‘¥¼ÑÉ…¬Ý¥Ñ¡½ÕÐUI$…ÑÑÉ¥‰ÕÑ”¤(€€€€€€€Ù…È•µ‰•‘‘•‘Õ‘¥½½Õ¹€ô…Õ‘¥½QÉ…­Ì¹Í½µ”¡™Õ¹Ñ¥½¸€¡…Õ‘¥½QÉ…¬¤ì(€€€€€€€€€É•ÑÕÉ¸€……Õ‘¥½QÉ…¬¹ÕÉ°ì(€€€€€€€ô¤ì((€€€€€€€€¼¼¥˜¹¼•µ‰•‘‘•…Õ‘¥¼ÑÉ…¬‘•™¥¹•°‰ÕÐ…Õ‘¥¼½‘•ŒÍ¥¹…±•¥¸ÅÕ…±¥Ñä±•Ù•°°(€€€€€€€€¼¼Ý”¹••Ñ¼Í¥¹…°Ñ¡¥Ìµ…¥¸…Õ‘¥¼ÑÉ…¬Ñ¡¥Ì½Õ±¡…ÁÁ•¸Ý¥Ñ Á±…å±¥ÍÑÌÝ¥Ñ (€€€€€€€€¼¼…±Ð…Õ‘¥¼É•¹‘¥Ñ¥½¸¥¸Ý¡¥ ÅÕ…±¥Ñä±•Ù•±Ì€¡µ…¥¸¤(€€€€€€€€¼¼½¹Ñ…¥¹Ì‰½Ñ …Õ‘¥¼­Ù¥‘•¼¸‰ÕÐÝ¥Ñ µ¥á•…Õ‘¥¼ÑÉ…¬¹½ÐÍ¥¹…±•(€€€€€€€¥˜€ …•µ‰•‘‘•‘Õ‘¥½½Õ¹€˜˜±•Ù•±ÍlÁt¹…Õ‘¥½½‘•Œ€˜˜€…±•Ù•±ÍlÁt¹…ÑÑÉÌ¹U%<¤ì(€€€€€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹±½œ mÁ±…å±¥ÍÐµ±½…‘•Étè…Õ‘¥¼½‘•ŒÍ¥¹…±•¥¸ÅÕ…±¥Ñä±•Ù•°°‰ÕÐ¹¼•µ‰•‘‘•…Õ‘¥¼ÑÉ…¬Í¥¹…±•°É•…Ñ”½¹”œ¤ì(€€€€€€€€€…Õ‘¥½QÉ…­Ì¹Õ¹Í¡¥™Ð¡ì(€€€€€€€€€€€ÑåÁ”è€µ…¥¸œ°(€€€€€€€€€€€¹…µ”è€µ…¥¸œ°(€€€€€€€€€€€É½ÕÁ%è€µ…¥¸œ°(€€€€€€€€€€€‘•™…Õ±Ðè™…±Í”°(€€€€€€€€€€€…ÕÑ½Í•±•Ðè™…±Í”°(€€€€€€€€€€€™½É•è™…±Í”°(€€€€€€€€€€€¥è€´Ä°(€€€€€€€€€€€…ÑÑÉÌè¹•ÜÑÑÉ1¥ÍÐ¡íô¤°(€€€€€€€€€€€‰¥ÑÉ…Ñ”è€À°(€€€€€€€€€€€ÕÉ°è€œœ(€€€€€€€€€ô¤ì(€€€€€€€ô(€€€€€ô(€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹59%MQ}1=°ì(€€€€€€€±•Ù•±Ìè±•Ù•±Ì°(€€€€€€€…Õ‘¥½QÉ…­Ìè…Õ‘¥½QÉ…­Ì°(€€€€€€€ÍÕ‰Ñ¥Ñ±•ÌèÍÕ‰Ñ¥Ñ±•Ì°(€€€€€€€…ÁÑ¥½¹Ìè…ÁÑ¥½¹Ì°(€€€€€€€½¹Ñ•¹ÑMÑ••É¥¹œè½¹Ñ•¹ÑMÑ••É¥¹œ°(€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ°(€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€Í•ÍÍ¥½¹…Ñ„èÍ•ÍÍ¥½¹…Ñ„°(€€€€€€€Í•ÍÍ¥½¹-•åÌèÍ•ÍÍ¥½¹-•åÌ°(€€€€€€€ÍÑ…ÉÑQ¥µ•=™™Í•ÐèÍÑ…ÉÑQ¥µ•=™™Í•Ð°(€€€€€€€Ù…É¥…‰±•1¥ÍÐèÙ…É¥…‰±•1¥ÍÐ(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹‘±•QÉ…­=É1•Ù•±A±…å±¥ÍÐ€ô™Õ¹Ñ¥½¸¡…¹‘±•QÉ…­=É1•Ù•±A±…å±¥ÍÐ¡É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°±½…‘•È¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€Ù…È¥€ô½¹Ñ•áÐ¹¥°(€€€€€€€±•Ù•°€ô½¹Ñ•áÐ¹±•Ù•°°(€€€€€€€ÑåÁ”€ô½¹Ñ•áÐ¹ÑåÁ”ì(€€€€€Ù…ÈÕÉ°€ô•ÑI•ÍÁ½¹Í•UÉ°¡É•ÍÁ½¹Í”°½¹Ñ•áÐ¤ì(€€€€€Ù…È±•Ù•±%€ô¥Í¥¹¥Ñ•9Õµ‰•È¡±•Ù•°¤€ü±•Ù•°€è¥Í¥¹¥Ñ•9Õµ‰•È¡¥¤€ü¥€è€Àì(€€€€€Ù…È±•Ù•±QåÁ”€ôµ…Á½¹Ñ•áÑQ½1•Ù•±QåÁ”¡½¹Ñ•áÐ¤ì(€€€€€Ù…È±•Ù•±•Ñ…¥±Ì€ô4ÍTáA…ÉÍ•È¹Á…ÉÍ•1•Ù•±A±…å±¥ÍÐ¡É•ÍÁ½¹Í”¹‘…Ñ„°ÕÉ°°±•Ù•±%°±•Ù•±QåÁ”°€À°Ñ¡¥Ì¹Ù…É¥…‰±•1¥ÍÐ¤ì((€€€€€€¼¼]”¡…Ù”‘½¹”½ÕÈ™¥ÉÍÐÉ•ÅÕ•ÍÐ€¡5…¹¥™•ÍÐµÑåÁ”¤…¹É••¥Ù”(€€€€€€¼¼¹½Ð„µ…ÍÑ•ÈÁ±…å±¥ÍÐ‰ÕÐ„¡Õ¹¬µ±¥ÍÐ€¡ÑÉ…¬½±•Ù•°¤(€€€€€€¼¼]”™¥É”Ñ¡”µ…¹¥™•ÍÐµ±½…‘••Ù•¹Ð…¹åÝ…äÝ¥Ñ Ñ¡”Á…ÉÍ•±•Ù•°µ‘•Ñ…¥±Ì(€€€€€€¼¼‰äÉ•…Ñ¥¹œ„Í¥¹±”µ±•Ù•°ÍÑÉÕÑÕÉ”™½È¥Ð¸(€€€€€¥˜€¡ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP¤ì(€€€€€€€Ù…ÈÍ¥¹±•1•Ù•°€ôì(€€€€€€€€€…ÑÑÉÌè¹•ÜÑÑÉ1¥ÍÐ¡íô¤°(€€€€€€€€€‰¥ÑÉ…Ñ”è€À°(€€€€€€€€€‘•Ñ…¥±Ìè±•Ù•±•Ñ…¥±Ì°(€€€€€€€€€¹…µ”è€œœ°(€€€€€€€€€ÕÉ°èÕÉ°(€€€€€€€ôì(€€€€€€€±•Ù•±•Ñ…¥±Ì¹É•ÅÕ•ÍÑM¡•‘Õ±•€ôÍÑ…ÑÌ¹±½…‘¥¹œ¹ÍÑ…ÉÐ€¬½µÁÕÑ•I•±½…‘%¹Ñ•ÉÙ…°¡±•Ù•±•Ñ…¥±Ì°€À¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹59%MQ}1=°ì(€€€€€€€€€±•Ù•±ÌèmÍ¥¹±•1•Ù•±t°(€€€€€€€€€…Õ‘¥½QÉ…­Ìèmt°(€€€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ°(€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€Í•ÍÍ¥½¹…Ñ„è¹Õ±°°(€€€€€€€€€Í•ÍÍ¥½¹-•åÌè¹Õ±°°(€€€€€€€€€½¹Ñ•¹ÑMÑ••É¥¹œè¹Õ±°°(€€€€€€€€€ÍÑ…ÉÑQ¥µ•=™™Í•Ðè¹Õ±°°(€€€€€€€€€Ù…É¥…‰±•1¥ÍÐè¹Õ±°(€€€€€€€ô¤ì(€€€€€ô((€€€€€€¼¼Í…Ù”Á…ÉÍ¥¹œÑ¥µ”(€€€€€ÍÑ…ÑÌ¹Á…ÉÍ¥¹œ¹•¹€ôÁ•É™½Éµ…¹”¹¹½Ü ¤ì((€€€€€€¼¼•áÑ•¹Ñ¡”½¹Ñ•áÐÝ¥Ñ Ñ¡”¹•Ü±•Ù•±•Ñ…¥±ÌÁÉ½Á•ÉÑä(€€€€€½¹Ñ•áÐ¹±•Ù•±•Ñ…¥±Ì€ô±•Ù•±•Ñ…¥±Ìì(€€€€€Ñ¡¥Ì¹¡…¹‘±•A±…å±¥ÍÑ1½…‘•¡±•Ù•±•Ñ…¥±Ì°É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°±½…‘•È¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹‘±•5…¹¥™•ÍÑA…ÉÍ¥¹ÉÉ½È€ô™Õ¹Ñ¥½¸¡…¹‘±•5…¹¥™•ÍÑA…ÉÍ¥¹ÉÉ½È¡É•ÍÁ½¹Í”°½¹Ñ•áÐ°•ÉÉ½È°¹•ÑÝ½É­•Ñ…¥±Ì°ÍÑ…ÑÌ¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹9Q]=I-}II=H°(€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹59%MQ}AIM%9}II=H°(€€€€€€€™…Ñ…°è½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP°(€€€€€€€ÕÉ°èÉ•ÍÁ½¹Í”¹ÕÉ°°(€€€€€€€•ÉÈè•ÉÉ½È°(€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€É•…Í½¸è•ÉÉ½È¹µ•ÍÍ…”°(€€€€€€€É•ÍÁ½¹Í”èÉ•ÍÁ½¹Í”°(€€€€€€€½¹Ñ•áÐè½¹Ñ•áÐ°(€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ(€€€€€ô¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹‘±•9•ÑÝ½É­ÉÉ½È€ô™Õ¹Ñ¥½¸¡…¹‘±•9•ÑÝ½É­ÉÉ½È¡½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°Ñ¥µ•½ÕÐ°É•ÍÁ½¹Í”°ÍÑ…ÑÌ¤ì(€€€€€¥˜€¡Ñ¥µ•½ÕÐ€ôôôÙ½¥€À¤ì(€€€€€€€Ñ¥µ•½ÕÐ€ô™…±Í”ì(€€€€€ô(€€€€€Ù…Èµ•ÍÍ…”€ô€‰¹•ÑÝ½É¬€ˆ€¬€¡Ñ¥µ•½ÕÐ€ü€Ñ¥µ•½ÕÐœ€è€•ÉÉ½Èœ€¬€¡É•ÍÁ½¹Í”€ü€œ€¡ÍÑ…ÑÕÌ€œ€¬É•ÍÁ½¹Í”¹½‘”€¬€œ¤œ€è€œœ¤¤€¬€ˆ½ÕÉÉ•Ý¡¥±”±½…‘¥¹œ€ˆ€¬½¹Ñ•áÐ¹ÑåÁ”ì(€€€€€¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0¤ì(€€€€€€€µ•ÍÍ…”€¬ô€ˆè€ˆ€¬½¹Ñ•áÐ¹±•Ù•°€¬€ˆ¥è€ˆ€¬½¹Ñ•áÐ¹¥ì(€€€€€ô•±Í”¥˜€¡½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,ñð½¹Ñ•áÐ¹ÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,¤ì(€€€€€€€µ•ÍÍ…”€¬ô€ˆ¥è€ˆ€¬½¹Ñ•áÐ¹¥€¬€ˆÉ½ÕÀµ¥èpˆˆ€¬½¹Ñ•áÐ¹É½ÕÁ%€¬€‰pˆˆì(€€€€€ô(€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È¡µ•ÍÍ…”¤ì(€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹Ý…É¸ ‰mÁ±…å±¥ÍÐµ±½…‘•Étè€ˆ€¬µ•ÍÍ…”¤ì(€€€€€Ù…È‘•Ñ…¥±Ì€ôÉÉ½É•Ñ…¥±Ì¹U9-9=]8ì(€€€€€Ù…È™…Ñ…°€ô™…±Í”ì(€€€€€Ù…È±½…‘•È€ôÑ¡¥Ì¹•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¤ì(€€€€€ÍÝ¥Ñ €¡½¹Ñ•áÐ¹ÑåÁ”¤ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MPè(€€€€€€€€€‘•Ñ…¥±Ì€ôÑ¥µ•½ÕÐ€üÉÉ½É•Ñ…¥±Ì¹59%MQ}1=}Q%5=UP€èÉÉ½É•Ñ…¥±Ì¹59%MQ}1=}II=Hì(€€€€€€€€€™…Ñ…°€ôÑÉÕ”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0è(€€€€€€€€€‘•Ñ…¥±Ì€ôÑ¥µ•½ÕÐ€üÉÉ½É•Ñ…¥±Ì¹1Y1}1=}Q%5=UP€èÉÉ½É•Ñ…¥±Ì¹1Y1}1=}II=Hì(€€€€€€€€€™…Ñ…°€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,è(€€€€€€€€€‘•Ñ…¥±Ì€ôÑ¥µ•½ÕÐ€üÉÉ½É•Ñ…¥±Ì¹U%=}QI-}1=}Q%5=UP€èÉÉ½É•Ñ…¥±Ì¹U%=}QI-}1=}II=Hì(€€€€€€€€€™…Ñ…°€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,è(€€€€€€€€€‘•Ñ…¥±Ì€ôÑ¥µ•½ÕÐ€üÉÉ½É•Ñ…¥±Ì¹MU	Q%Q1}QI-}1=}Q%5=UP€èÉÉ½É•Ñ…¥±Ì¹MU	Q%Q1}1=}II=Hì(€€€€€€€€€™…Ñ…°€ô™…±Í”ì(€€€€€€€€€‰É•…¬ì(€€€€€ô(€€€€€¥˜€¡±½…‘•È¤ì(€€€€€€€Ñ¡¥Ì¹É•Í•Ñ%¹Ñ•É¹…±1½…‘•È¡½¹Ñ•áÐ¹ÑåÁ”¤ì(€€€€€ô(€€€€€Ù…È•ÉÉ½É…Ñ„€ôì(€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹9Q]=I-}II=H°(€€€€€€€‘•Ñ…¥±Ìè‘•Ñ…¥±Ì°(€€€€€€€™…Ñ…°è™…Ñ…°°(€€€€€€€ÕÉ°è½¹Ñ•áÐ¹ÕÉ°°(€€€€€€€±½…‘•Èè±½…‘•È°(€€€€€€€½¹Ñ•áÐè½¹Ñ•áÐ°(€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ(€€€€€ôì(€€€€€¥˜€¡É•ÍÁ½¹Í”¤ì(€€€€€€€Ù…ÈÕÉ°€ô€¡¹•ÑÝ½É­•Ñ…¥±Ì€ôô¹Õ±°€üÙ½¥€À€è¹•ÑÝ½É­•Ñ…¥±Ì¹ÕÉ°¤ñð½¹Ñ•áÐ¹ÕÉ°ì(€€€€€€€•ÉÉ½É…Ñ„¹É•ÍÁ½¹Í”€ô}½‰©•ÑMÁÉ•…È¡ì(€€€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€€€‘…Ñ„èÕ¹‘•™¥¹•(€€€€€€€ô°É•ÍÁ½¹Í”¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°•ÉÉ½É…Ñ„¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹¡…¹‘±•A±…å±¥ÍÑ1½…‘•€ô™Õ¹Ñ¥½¸¡…¹‘±•A±…å±¥ÍÑ1½…‘•¡±•Ù•±•Ñ…¥±Ì°É•ÍÁ½¹Í”°ÍÑ…ÑÌ°½¹Ñ•áÐ°¹•ÑÝ½É­•Ñ…¥±Ì°±½…‘•È¤ì(€€€€€Ù…È¡±Ì€ôÑ¡¥Ì¹¡±Ìì(€€€€€Ù…ÈÑåÁ”€ô½¹Ñ•áÐ¹ÑåÁ”°(€€€€€€€±•Ù•°€ô½¹Ñ•áÐ¹±•Ù•°°(€€€€€€€¥€ô½¹Ñ•áÐ¹¥°(€€€€€€€É½ÕÁ%€ô½¹Ñ•áÐ¹É½ÕÁ%°(€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì€ô½¹Ñ•áÐ¹‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìì(€€€€€Ù…ÈÕÉ°€ô•ÑI•ÍÁ½¹Í•UÉ°¡É•ÍÁ½¹Í”°½¹Ñ•áÐ¤ì(€€€€€Ù…ÈÁ…É•¹Ð€ôµ…Á½¹Ñ•áÑQ½1•Ù•±QåÁ”¡½¹Ñ•áÐ¤ì(€€€€€Ù…È±•Ù•±%¹‘•à€ôÑåÁ•½˜½¹Ñ•áÐ¹±•Ù•°€ôôô€¹Õµ‰•Èœ€˜˜Á…É•¹Ð€ôôôA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%8€ü±•Ù•°€èÕ¹‘•™¥¹•ì(€€€€€¥˜€ …±•Ù•±•Ñ…¥±Ì¹™É…µ•¹ÑÌ¹±•¹Ñ ¤ì(€€€€€€€Ù…È}•ÉÉ½È€ô±•Ù•±•Ñ…¥±Ì¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½È€ô¹•ÜÉÉ½È 9¼M•µ•¹ÑÌ™½Õ¹¥¸A±…å±¥ÍÐœ¤ì(€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹9Q]=I-}II=H°(€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹1Y1}5AQe}II=H°(€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€€€•ÉÉ½Èè}•ÉÉ½È°(€€€€€€€€€É•…Í½¸è}•ÉÉ½È¹µ•ÍÍ…”°(€€€€€€€€€É•ÍÁ½¹Í”èÉ•ÍÁ½¹Í”°(€€€€€€€€€½¹Ñ•áÐè½¹Ñ•áÐ°(€€€€€€€€€±•Ù•°è±•Ù•±%¹‘•à°(€€€€€€€€€Á…É•¹ÐèÁ…É•¹Ð°(€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€¥˜€ …±•Ù•±•Ñ…¥±Ì¹Ñ…É•Ñ‘ÕÉ…Ñ¥½¸¤ì(€€€€€€€±•Ù•±•Ñ…¥±Ì¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½È€ô¹•ÜÉÉ½È 5¥ÍÍ¥¹œQ…É•ÐÕÉ…Ñ¥½¸œ¤ì(€€€€€ô(€€€€€Ù…È•ÉÉ½È€ô±•Ù•±•Ñ…¥±Ì¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½Èì(€€€€€¥˜€¡•ÉÉ½È¤ì(€€€€€€€Ñ¡¥Ì¹¡±Ì¹±½•È¹Ý…É¸¡•ÉÉ½È¤ì(€€€€€€€¥˜€ …¡±Ì¹½¹™¥œ¹¥¹½É•A±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½ÉÌ¤ì(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹9Q]=I-}II=H°(€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹1Y1}AIM%9}II=H°(€€€€€€€€€€€™…Ñ…°è™…±Í”°(€€€€€€€€€€€ÕÉ°èÕÉ°°(€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È°(€€€€€€€€€€€É•…Í½¸è•ÉÉ½È¹µ•ÍÍ…”°(€€€€€€€€€€€É•ÍÁ½¹Í”èÉ•ÍÁ½¹Í”°(€€€€€€€€€€€½¹Ñ•áÐè½¹Ñ•áÐ°(€€€€€€€€€€€±•Ù•°è±•Ù•±%¹‘•à°(€€€€€€€€€€€Á…É•¹ÐèÁ…É•¹Ð°(€€€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ(€€€€€€€€€ô¤ì(€€€€€€€€€É•ÑÕÉ¸ì(€€€€€€€ô(€€€€€€€±•Ù•±•Ñ…¥±Ì¹Á±…å±¥ÍÑA…ÉÍ¥¹ÉÉ½È€ô¹Õ±°ì(€€€€€ô(€€€€€¥˜€¡±•Ù•±•Ñ…¥±Ì¹±¥Ù”€˜˜±½…‘•È¤ì(€€€€€€€¥˜€¡±½…‘•È¹•Ñ…¡•”¤ì(€€€€€€€€€±•Ù•±•Ñ…¥±Ì¹…•!•…‘•È€ô±½…‘•È¹•Ñ…¡•” ¤ñð€Àì(€€€€€€€ô(€€€€€€€¥˜€ …±½…‘•È¹•Ñ…¡•”ñð¥Í9…8¡±•Ù•±•Ñ…¥±Ì¹…•!•…‘•È¤¤ì(€€€€€€€€€±•Ù•±•Ñ…¥±Ì¹…•!•…‘•È€ô€Àì(€€€€€€€ô(€€€€€ô(€€€€€ÍÝ¥Ñ €¡ÑåÁ”¤ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MPè(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹1Y0è(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹1Y1}1=°ì(€€€€€€€€€€€‘•Ñ…¥±Ìè±•Ù•±•Ñ…¥±Ì°(€€€€€€€€€€€±•Ù•±%¹™¼è½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬ñð¡±Ì¹±•Ù•±ÍlÁt°(€€€€€€€€€€€±•Ù•°è±•Ù•±%¹‘•àñð€À°(€€€€€€€€€€€¥è¥ñð€À°(€€€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ°(€€€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì°(€€€€€€€€€€€Ý¥Ñ¡½ÕÑ5Õ±Ñ¥Y…É¥…¹ÐèÑåÁ”€ôôôA±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹59%MP(€€€€€€€€€ô¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹U%=}QI,è(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹U%=}QI-}1=°ì(€€€€€€€€€€€‘•Ñ…¥±Ìè±•Ù•±•Ñ…¥±Ì°(€€€€€€€€€€€ÑÉ…¬è½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬°(€€€€€€€€€€€¥è¥ñð€À°(€€€€€€€€€€€É½ÕÁ%èÉ½ÕÁ%ñð€œœ°(€€€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ°(€€€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì(€€€€€€€€€ô¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€…Í”A±…å±¥ÍÑ½¹Ñ•áÑQåÁ”¹MU	Q%Q1}QI,è(€€€€€€€€€¡±Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MU	Q%Q1}QI-}1=°ì(€€€€€€€€€€€‘•Ñ…¥±Ìè±•Ù•±•Ñ…¥±Ì°(€€€€€€€€€€€ÑÉ…¬è½¹Ñ•áÐ¹±•Ù•±=ÉQÉ…¬°(€€€€€€€€€€€¥è¥ñð€À°(€€€€€€€€€€€É½ÕÁ%èÉ½ÕÁ%ñð€œœ°(€€€€€€€€€€€ÍÑ…ÑÌèÍÑ…ÑÌ°(€€€€€€€€€€€¹•ÑÝ½É­•Ñ…¥±Ìè¹•ÑÝ½É­•Ñ…¥±Ì°(€€€€€€€€€€€‘•±¥Ù•Éå¥É•Ñ¥Ù•Ìè‘•±¥Ù•Éå¥É•Ñ¥Ù•Ì(€€€€€€€€€ô¤ì(€€€€€€€€€‰É•…¬ì(€€€€€ô(€€€ôì(€€€É•ÑÕÉ¸A±…å±¥ÍÑ1½…‘•Èì(€ô ¤ì((€€¼¨¨(€€€¨Q¡”!±Í€±…ÍÌ¥ÌÑ¡”½É”½˜Ñ¡”!1L¹©Ì±¥‰É…ÉäÕÍ•Ñ¼¥¹ÍÑ…¹Ñ¥…Ñ”Á±…å•È¥¹ÍÑ…¹•Ì¸(€€€¨ÁÕ‰±¥Œ(€€€¨¼(€Ù…È!±Ì€ô€¼¨}}AUI}|¨½™Õ¹Ñ¥½¸€ ¤ì(€€€€¼¨¨(€€€€€¨É•…Ñ•Ì…¸¥¹ÍÑ…¹”½˜…¸!1L±¥•¹ÐÑ¡…Ð…¸…ÑÑ… Ñ¼•á…Ñ±ä½¹”!Q515•‘¥…±•µ•¹Ñ€¸(€€€€€¨Á…É…´ÕÍ•É½¹™¥œ€´½¹™¥ÕÉ…Ñ¥½¸½ÁÑ¥½¹Ì…ÁÁ±¥•½Ù•È!±Ì¹•™…Õ±Ñ½¹™¥€(€€€€€¨¼(€€€™Õ¹Ñ¥½¸!±Ì¡ÕÍ•É½¹™¥œ¤ì(€€€€€¥˜€¡ÕÍ•É½¹™¥œ€ôôôÙ½¥€À¤ì(€€€€€€€ÕÍ•É½¹™¥œ€ôíôì(€€€€€ô(€€€€€€¼¨¨(€€€€€€€¨Q¡”ÉÕ¹Ñ¥µ”½¹™¥ÕÉ…Ñ¥½¸ÕÍ•‰äÑ¡”Á±…å•È¸Ð¥¹ÍÑ…¹Ñ¥…Ñ¥½¸Ñ¡¥Ì¥Ì½µ‰¥¹…Ñ¥½¸½˜¡±Ì¹ÕÍ•É½¹™¥€µ•É•½Ù•È!±Ì¹•™…Õ±Ñ½¹™¥€¸(€€€€€€€¨¼(€€€€€Ñ¡¥Ì¹½¹™¥œ€ôÙ½¥€Àì(€€€€€€¼¨¨(€€€€€€€¨Q¡”½¹™¥ÕÉ…Ñ¥½¸½‰©•ÐÁÉ½Ù¥‘•½¸Á±…å•È¥¹ÍÑ…¹Ñ¥…Ñ¥½¸¸(€€€€€€€¨¼(€€€€€Ñ¡¥Ì¹ÕÍ•É½¹™¥œ€ôÙ½¥€Àì(€€€€€€¼¨¨(€€€€€€€¨Q¡”±½•È™Õ¹Ñ¥½¹ÌÕÍ•‰äÑ¡¥ÌÁ±…å•È¥¹ÍÑ…¹”°½¹™¥ÕÉ•½¸Á±…å•È¥¹ÍÑ…¹Ñ¥…Ñ¥½¸¸(€€€€€€€¨¼(€€€€€Ñ¡¥Ì¹±½•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹½É•½µÁ½¹•¹ÑÌ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹}•µ¥ÑÑ•È€ô¹•ÜÙ•¹Ñµ¥ÑÑ•È ¤ì(€€€€€Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô€´Äì(€€€€€Ñ¡¥Ì¹}µ…á!‘Á1•Ù•°€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹‰Õ™™•É½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹…Á1•Ù•±½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹…Á½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹•µ•½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹µ‘½¹ÑÉ½±±•È€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹}µ•‘¥„€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹}ÕÉ°€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹}Í•ÍÍ¥½¹%€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÑÉ¥•É¥¹á•ÁÑ¥½¸€ôÙ½¥€Àì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑ•€ô™…±Í”ì(€€€€€Ù…È±½•È€ôÑ¡¥Ì¹±½•È€ô•¹…‰±•1½Ì¡ÕÍ•É½¹™¥œ¹‘•‰Õœñð™…±Í”°€!±Ì¥¹ÍÑ…¹”œ°ÕÍ•É½¹™¥œ¹…ÍÍ•ÑA±…å•É%¤ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œ€ôµ•É•½¹™¥œ¡!±Ì¹•™…Õ±Ñ½¹™¥œ°ÕÍ•É½¹™¥œ°±½•È¤ì(€€€€€Ñ¡¥Ì¹ÕÍ•É½¹™¥œ€ôÕÍ•É½¹™¥œì(€€€€€¥˜€¡½¹™¥œ¹ÁÉ½É•ÍÍ¥Ù”¤ì(€€€€€€€•¹…‰±•MÑÉ•…µ¥¹5½‘”¡½¹™¥œ°±½•È¤ì(€€€€€ô((€€€€€€¼¼½É”½¹ÑÉ½±±•ÉÌ…¹¹•ÑÝ½É¬±½…‘•ÉÌ(€€€€€Ù…È}‰É½¹ÑÉ½±±•È€ô½¹™¥œ¹…‰É½¹ÑÉ½±±•È°(€€€€€€€}	Õ™™•É½¹ÑÉ½±±•È€ô½¹™¥œ¹‰Õ™™•É½¹ÑÉ½±±•È°(€€€€€€€}…Á1•Ù•±½¹ÑÉ½±±•È€ô½¹™¥œ¹…Á1•Ù•±½¹ÑÉ½±±•È°(€€€€€€€}ÉÉ½É½¹ÑÉ½±±•È€ô½¹™¥œ¹•ÉÉ½É½¹ÑÉ½±±•È°(€€€€€€€}ÁÍ½¹ÑÉ½±±•È€ô½¹™¥œ¹™ÁÍ½¹ÑÉ½±±•Èì(€€€€€Ù…È•ÉÉ½É½¹ÑÉ½±±•È€ô¹•Ü}ÉÉ½É½¹ÑÉ½±±•È¡Ñ¡¥Ì¤ì(€€€€€Ù…È…‰É½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…‰É½¹ÑÉ½±±•È€ô¹•Ü}‰É½¹ÑÉ½±±•È¡Ñ¡¥Ì¤ì(€€€€€€¼¼É…µ•¹ÑQÉ…­•ÈµÕÍÐ‰”‘•™¥¹•‰•™½É”MÑÉ•…µ½¹ÑÉ½±±•È‰•…ÕÍ”Ñ¡”½É‘•È½˜•Ù•¹Ð¡…¹‘±¥¹œ¥Ì¥µÁ½ÉÑ…¹Ð(€€€€€Ù…È™É…µ•¹ÑQÉ…­•È€ô¹•ÜÉ…µ•¹ÑQÉ…­•È¡Ñ¡¥Ì¤ì(€€€€€Ù…È}%¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€ô½¹™¥œ¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•Èì(€€€€€Ù…È¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€ô}%¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€üÑ¡¥Ì¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È€ô¹•Ü}%¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È¡Ñ¡¥Ì°!±Ì¤€è¹Õ±°ì(€€€€€Ù…È‰Õ™™•É½¹ÑÉ½±±•È€ôÑ¡¥Ì¹‰Õ™™•É½¹ÑÉ½±±•È€ô¹•Ü}	Õ™™•É½¹ÑÉ½±±•È¡Ñ¡¥Ì°™É…µ•¹ÑQÉ…­•È¤ì(€€€€€Ù…È…Á1•Ù•±½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Á1•Ù•±½¹ÑÉ½±±•È€ô¹•Ü}…Á1•Ù•±½¹ÑÉ½±±•È¡Ñ¡¥Ì¤ì(€€€€€Ù…È™ÁÍ½¹ÑÉ½±±•È€ô¹•Ü}ÁÍ½¹ÑÉ½±±•È¡Ñ¡¥Ì¤ì(€€€€€Ù…ÈÁ±…å1¥ÍÑ1½…‘•È€ô¹•ÜA±…å±¥ÍÑ1½…‘•È¡Ñ¡¥Ì¤ì(€€€€€Ù…È}½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È€ô½¹™¥œ¹½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•Èì(€€€€€€¼¼%¹ÍÑ…¹Ñ¥…Ñ”½¹•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È‰•™½É”1•Ù•±½¹ÑÉ½±±•ÈÑ¼É••¥Ù”5Õ±Ñ¥Ù…É¥…¹ÐA±…å±¥ÍÐ•Ù•¹ÑÌ™¥ÉÍÐ(€€€€€Ù…È½¹Ñ•¹ÑMÑ••É¥¹œ€ô}½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È€ü¹•Ü}½¹Ñ•¹ÑMÑ••É¥¹½¹ÑÉ½±±•È¡Ñ¡¥Ì¤€è¹Õ±°ì(€€€€€Ù…È±•Ù•±½¹ÑÉ½±±•È€ôÑ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È€ô¹•Ü1•Ù•±½¹ÑÉ½±±•È¡Ñ¡¥Ì°½¹Ñ•¹ÑMÑ••É¥¹œ¤ì(€€€€€Ù…È¥ÍQÉ…­½¹ÑÉ½±±•È€ô¹•Ü%ÍQÉ…­½¹ÑÉ½±±•È¡Ñ¡¥Ì¤ì(€€€€€Ù…È­•å1½…‘•È€ô¹•Ü-•å1½…‘•È¡Ñ¡¥Ì¹½¹™¥œ¤ì(€€€€€Ù…ÈÍÑÉ•…µ½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È€ô¹•ÜMÑÉ•…µ½¹ÑÉ½±±•È¡Ñ¡¥Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È¤ì(€€€€€Ù…È…Á½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Á½¹ÑÉ½±±•È€ô¹•Ü…Á½¹ÑÉ½±±•È¡Ñ¡¥Ì°™É…µ•¹ÑQÉ…­•È¤ì((€€€€€€¼¼…À±•Ù•°½¹ÑÉ½±±•ÈÕÍ•ÌÍÑÉ•…µ½¹ÑÉ½±±•ÈÑ¼™±ÕÍ Ñ¡”‰Õ™™•È(€€€€€…Á1•Ù•±½¹ÑÉ½±±•È¹Í•ÑMÑÉ•…µ½¹ÑÉ½±±•È¡ÍÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€€€€¼¼™ÁÍ½¹ÑÉ½±±•ÈÕÍ•ÌÍÑÉ•…µ½¹ÑÉ½±±•ÈÑ¼ÍÝ¥Ñ Ý¡•¸™É…µ•Ì…É”‰•¥¹œ‘É½ÁÁ•(€€€€€™ÁÍ½¹ÑÉ½±±•È¹Í•ÑMÑÉ•…µ½¹ÑÉ½±±•È¡ÍÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€€€Ù…È¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ€ômÁ±…å1¥ÍÑ1½…‘•È°±•Ù•±½¹ÑÉ½±±•È°ÍÑÉ•…µ½¹ÑÉ½±±•Étì(€€€€€¥˜€¡¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È¤ì(€€€€€€€¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹ÍÁ±¥” Ä°€À°¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È¤ì(€€€€€ô(€€€€€¥˜€¡½¹Ñ•¹ÑMÑ••É¥¹œ¤ì(€€€€€€€¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹ÍÁ±¥” Ä°€À°½¹Ñ•¹ÑMÑ••É¥¹œ¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ€ô¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌì(€€€€€Ù…È½É•½µÁ½¹•¹ÑÌ€ôm…‰É½¹ÑÉ½±±•È°‰Õ™™•É½¹ÑÉ½±±•È°…Á½¹ÑÉ½±±•È°…Á1•Ù•±½¹ÑÉ½±±•È°™ÁÍ½¹ÑÉ½±±•È°¥ÍQÉ…­½¹ÑÉ½±±•È°™É…µ•¹ÑQÉ…­•Étì(€€€€€Ñ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡½¹™¥œ¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•È°¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¤ì(€€€€€Ù…ÈÕ‘¥½MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ€ô½¹™¥œ¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•Èì(€€€€€¥˜€¡Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ¤ì(€€€€€€€¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹ÁÕÍ ¡Ñ¡¥Ì¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È€ô¹•ÜÕ‘¥½MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ¡Ñ¡¥Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È¤¤ì(€€€€€ô(€€€€€€¼¼%¹ÍÑ…¹Ñ¥…Ñ”ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È‰•™½É”MÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•ÈÑ¼É••¥Ù”±•Ù•°•Ù•¹ÑÌ™¥ÉÍÐ(€€€€€Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡½¹™¥œ¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È°¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¤ì(€€€€€Ù…ÈMÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ€ô½¹™¥œ¹ÍÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•Èì(€€€€€¥˜€¡MÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ¤ì(€€€€€€€¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹ÁÕÍ ¡Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È€ô¹•ÜMÕ‰Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•É±…ÍÌ¡Ñ¡¥Ì°™É…µ•¹ÑQÉ…­•È°­•å1½…‘•È¤¤ì(€€€€€ô(€€€€€Ñ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡½¹™¥œ¹Ñ¥µ•±¥¹•½¹ÑÉ½±±•È°½É•½µÁ½¹•¹ÑÌ¤ì(€€€€€­•å1½…‘•È¹•µ•½¹ÑÉ½±±•È€ôÑ¡¥Ì¹•µ•½¹ÑÉ½±±•È€ôÑ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡½¹™¥œ¹•µ•½¹ÑÉ½±±•È°½É•½µÁ½¹•¹ÑÌ¤ì(€€€€€Ñ¡¥Ì¹µ‘½¹ÑÉ½±±•È€ôÑ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡½¹™¥œ¹µ‘½¹ÑÉ½±±•È°½É•½µÁ½¹•¹ÑÌ¤ì(€€€€€Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È€ôÑ¡¥Ì¹É•…Ñ•½¹ÑÉ½±±•È¡1…Ñ•¹å½¹ÑÉ½±±•È°½É•½µÁ½¹•¹ÑÌ¤ì(€€€€€Ñ¡¥Ì¹½É•½µÁ½¹•¹ÑÌ€ô½É•½µÁ½¹•¹ÑÌì((€€€€€€¼¼ÉÉ½È½¹ÑÉ½±±•È¡…¹‘±•Ì•ÉÉ½ÉÌ‰•™½É”…¹…™Ñ•È…±°½Ñ¡•È½¹ÑÉ½±±•ÉÌ(€€€€€€¼¼Q¡¥Ì±¥ÍÑ•¹•ÈÝ¥±°‰”¥¹Ù½­•…™Ñ•È…±°½Ñ¡•È½¹ÑÉ½±±•ÉÌ•ÉÉ½È±¥ÍÑ•¹•ÉÌ(€€€€€¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹ÁÕÍ ¡•ÉÉ½É½¹ÑÉ½±±•È¤ì(€€€€€Ù…È½¹ÉÉ½É=ÕÐ€ô•ÉÉ½É½¹ÑÉ½±±•È¹½¹ÉÉ½É=ÕÐì(€€€€€¥˜€¡ÑåÁ•½˜½¹ÉÉ½É=ÕÐ€ôôô€™Õ¹Ñ¥½¸œ¤ì(€€€€€€€Ñ¡¥Ì¹½¸¡Ù•¹ÑÌ¹II=H°½¹ÉÉ½É=ÕÐ°•ÉÉ½É½¹ÑÉ½±±•È¤ì(€€€€€ô(€€€€€€¼¼ÕÑ½ÍÑ…ÉÐ±½…¡…¹‘±•È(€€€€€Ñ¡¥Ì¹½¸¡Ù•¹ÑÌ¹59%MQ}1=°Á±…å1¥ÍÑ1½…‘•È¹½¹5…¹¥™•ÍÑ1½…‘•°Á±…å1¥ÍÑ1½…‘•È¤ì(€€€ô(€€€€¼¨¨(€€€€€¨¡•¬¥˜Ñ¡”É•ÅÕ¥É•5•‘¥…M½ÕÉ”áÑ•¹Í¥½¹Ì…É”…Ù…¥±…‰±”¸(€€€€€¨¼(€€€!±Ì¹¥Í5MMÕÁÁ½ÉÑ•€ô™Õ¹Ñ¥½¸¥Í5MMÕÁÁ½ÉÑ•Ä ¤ì(€€€€€É•ÑÕÉ¸¥Í5MMÕÁÁ½ÉÑ• ¤ì(€€€ô((€€€€¼¨¨(€€€€€¨¡•¬¥˜5•‘¥…M½ÕÉ”áÑ•¹Í¥½¹Ì…É”…Ù…¥±…‰±”…¹¥ÍQåÁ•MÕÁÁ½ÉÑ•¡•­ÌÁ…ÍÌ™½È…¹ä‰…Í•±¥¹”½‘•Ì¸(€€€€€¨¼ì(€€€!±Ì¹¥ÍMÕÁÁ½ÉÑ•€ô™Õ¹Ñ¥½¸¥ÍMÕÁÁ½ÉÑ•Ä ¤ì(€€€€€É•ÑÕÉ¸¥ÍMÕÁÁ½ÉÑ• ¤ì(€€€ô((€€€€¼¨¨(€€€€€¨•ÐÑ¡”5•‘¥…M½ÕÉ”±½‰…°ÕÍ•™½È5MÁ±…å‰…¬€¡5…¹…•‘5•‘¥…M½ÕÉ”°5•‘¥…M½ÕÉ”°½È]•‰-¥Ñ5•‘¥…M½ÕÉ”¤¸(€€€€€¨¼ì(€€€!±Ì¹•Ñ5•‘¥…M½ÕÉ”€ô™Õ¹Ñ¥½¸•Ñ5•‘¥…M½ÕÉ”Ä ¤ì(€€€€€É•ÑÕÉ¸•Ñ5•‘¥…M½ÕÉ” ¤ì(€€€ôì(€€€Ù…È}ÁÉ½Ñ¼€ô!±Ì¹ÁÉ½Ñ½ÑåÁ”ì(€€€}ÁÉ½Ñ¼¹É•…Ñ•½¹ÑÉ½±±•È€ô™Õ¹Ñ¥½¸É•…Ñ•½¹ÑÉ½±±•È¡½¹ÑÉ½±±•É±…ÍÌ°½µÁ½¹•¹ÑÌ¤ì(€€€€€¥˜€¡½¹ÑÉ½±±•É±…ÍÌ¤ì(€€€€€€€Ù…È½¹ÑÉ½±±•É%¹ÍÑ…¹”€ô¹•Ü½¹ÑÉ½±±•É±…ÍÌ¡Ñ¡¥Ì¤ì(€€€€€€€¥˜€¡½µÁ½¹•¹ÑÌ¤ì(€€€€€€€€€½µÁ½¹•¹ÑÌ¹ÁÕÍ ¡½¹ÑÉ½±±•É%¹ÍÑ…¹”¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸½¹ÑÉ½±±•É%¹ÍÑ…¹”ì(€€€€€ô(€€€€€É•ÑÕÉ¸¹Õ±°ì(€€€ô((€€€€¼¼•±•…Ñ”Ñ¡”Ù•¹Ñµ¥ÑÑ•ÈÑ¡É½Õ Ñ¡”ÁÕ‰±¥ŒA$½˜!±Ì¹©Ì(€€€€ì(€€€}ÁÉ½Ñ¼¹½¸€ô™Õ¹Ñ¥½¸½¸¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ¤ì(€€€€€¥˜€¡½¹Ñ•áÐ€ôôôÙ½¥€À¤ì(€€€€€€€½¹Ñ•áÐ€ôÑ¡¥Ìì(€€€€€ô(€€€€€Ñ¡¥Ì¹}•µ¥ÑÑ•È¹½¸¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½¹”€ô™Õ¹Ñ¥½¸½¹”¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ¤ì(€€€€€¥˜€¡½¹Ñ•áÐ€ôôôÙ½¥€À¤ì(€€€€€€€½¹Ñ•áÐ€ôÑ¡¥Ìì(€€€€€ô(€€€€€Ñ¡¥Ì¹}•µ¥ÑÑ•È¹½¹”¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹É•µ½Ù•±±1¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸É•µ½Ù•±±1¥ÍÑ•¹•ÉÌ¡•Ù•¹Ð¤ì(€€€€€Ñ¡¥Ì¹}•µ¥ÑÑ•È¹É•µ½Ù•±±1¥ÍÑ•¹•ÉÌ¡•Ù•¹Ð¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹½™˜€ô™Õ¹Ñ¥½¸½™˜¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ°½¹”¤ì(€€€€€¥˜€¡½¹Ñ•áÐ€ôôôÙ½¥€À¤ì(€€€€€€€½¹Ñ•áÐ€ôÑ¡¥Ìì(€€€€€ô(€€€€€Ñ¡¥Ì¹}•µ¥ÑÑ•È¹½™˜¡•Ù•¹Ð°±¥ÍÑ•¹•È°½¹Ñ•áÐ°½¹”¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±¥ÍÑ•¹•ÉÌ€ô™Õ¹Ñ¥½¸±¥ÍÑ•¹•ÉÌ¡•Ù•¹Ð¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}•µ¥ÑÑ•È¹±¥ÍÑ•¹•ÉÌ¡•Ù•¹Ð¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹•µ¥Ð€ô™Õ¹Ñ¥½¸•µ¥Ð¡•Ù•¹Ð°¹…µ”°•Ù•¹Ñ=‰©•Ð¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}•µ¥ÑÑ•È¹•µ¥Ð¡•Ù•¹Ð°¹…µ”°•Ù•¹Ñ=‰©•Ð¤ì(€€€ôì(€€€}ÁÉ½Ñ¼¹ÑÉ¥•È€ô™Õ¹Ñ¥½¸ÑÉ¥•È¡•Ù•¹Ð°•Ù•¹Ñ=‰©•Ð¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹½¹™¥œ¹‘•‰Õœ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•µ¥Ð¡•Ù•¹Ð°•Ù•¹Ð°•Ù•¹Ñ=‰©•Ð¤ì(€€€€€ô•±Í”ì(€€€€€€€ÑÉäì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹•µ¥Ð¡•Ù•¹Ð°•Ù•¹Ð°•Ù•¹Ñ=‰©•Ð¤ì(€€€€€€€ô…Ñ €¡•ÉÉ½È¤ì(€€€€€€€€€Ñ¡¥Ì¹±½•È¹•ÉÉ½È ¸¥¹Ñ•É¹…°•ÉÉ½È¡…ÁÁ•¹•Ý¡¥±”¡…¹‘±¥¹œ•Ù•¹Ð€œ€¬•Ù•¹Ð€¬€œ¸ÉÉ½Èµ•ÍÍ…”è€ˆœ€¬•ÉÉ½È¹µ•ÍÍ…”€¬€œˆ¸!•É”¥Ì„ÍÑ…­ÑÉ…”èœ°•ÉÉ½È¤ì(€€€€€€€€€€¼¼AÉ•Ù•¹ÐÉ•ÕÉÍ¥½¸¥¸•ÉÉ½È•Ù•¹Ð¡…¹‘±•ÉÌÑ¡…ÐÑ¡É½Ü€ŒÔÐäÜ(€€€€€€€€€¥˜€ …Ñ¡¥Ì¹ÑÉ¥•É¥¹á•ÁÑ¥½¸¤ì(€€€€€€€€€€€Ñ¡¥Ì¹ÑÉ¥•É¥¹á•ÁÑ¥½¸€ôÑÉÕ”ì(€€€€€€€€€€€Ù…È™…Ñ…°€ô•Ù•¹Ð€ôôôÙ•¹ÑÌ¹II=Hì(€€€€€€€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹=Q!I}II=H°(€€€€€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹%9QI91}aAQ%=8°(€€€€€€€€€€€€€™…Ñ…°è™…Ñ…°°(€€€€€€€€€€€€€•Ù•¹Ðè•Ù•¹Ð°(€€€€€€€€€€€€€•ÉÉ½Èè•ÉÉ½È(€€€€€€€€€€€ô¤ì(€€€€€€€€€€€Ñ¡¥Ì¹ÑÉ¥•É¥¹á•ÁÑ¥½¸€ô™…±Í”ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€ô(€€€€€É•ÑÕÉ¸™…±Í”ì(€€€ôì(€€€}ÁÉ½Ñ¼¹±¥ÍÑ•¹•É½Õ¹Ð€ô™Õ¹Ñ¥½¸±¥ÍÑ•¹•É½Õ¹Ð¡•Ù•¹Ð¤ì(€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}•µ¥ÑÑ•È¹±¥ÍÑ•¹•É½Õ¹Ð¡•Ù•¹Ð¤ì(€€€ô((€€€€¼¨¨(€€€€€¨¥ÍÁ½Í”½˜Ñ¡”¥¹ÍÑ…¹”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹‘•ÍÑÉ½ä€ô™Õ¹Ñ¥½¸‘•ÍÑÉ½ä ¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‘•ÍÑÉ½äœ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹MQI=e%9°Õ¹‘•™¥¹•¤ì(€€€€€Ñ¡¥Ì¹‘•Ñ…¡5•‘¥„ ¤ì(€€€€€Ñ¡¥Ì¹É•µ½Ù•±±1¥ÍÑ•¹•ÉÌ ¤ì(€€€€€Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô€´Äì(€€€€€Ñ¡¥Ì¹}ÕÉ°€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡½µÁ½¹•¹Ð¤ì(€€€€€€€É•ÑÕÉ¸½µÁ½¹•¹Ð¹‘•ÍÑÉ½ä ¤ì(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹±•¹Ñ €ô€Àì(€€€€€Ñ¡¥Ì¹½É•½µÁ½¹•¹ÑÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡½µÁ½¹•¹Ð¤ì(€€€€€€€É•ÑÕÉ¸½µÁ½¹•¹Ð¹‘•ÍÑÉ½ä ¤ì(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹½É•½µÁ½¹•¹ÑÌ¹±•¹Ñ €ô€Àì(€€€€€€¼¼I•µ½Ù”…¹äÉ•™•É•¹•ÌÑ¡…Ð½Õ±‰”¡•±¥¸½¹™¥œ½ÁÑ¥½¹Ì½È…±±‰…­Ì(€€€€€Ù…È½¹™¥œ€ôÑ¡¥Ì¹½¹™¥œì(€€€€€½¹™¥œ¹á¡ÉM•ÑÕÀ€ô½¹™¥œ¹™•Ñ¡M•ÑÕÀ€ôÕ¹‘•™¥¹•ì(€€€€€€¼¼ÑÌµ¥¹½É”(€€€€€Ñ¡¥Ì¹ÕÍ•É½¹™¥œ€ô¹Õ±°ì(€€€ô((€€€€¼¨¨(€€€€€¨ÑÑ…¡•Ì!±Ì¹©ÌÑ¼„µ•‘¥„•±•µ•¹Ð(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹…ÑÑ…¡5•‘¥„€ô™Õ¹Ñ¥½¸…ÑÑ…¡5•‘¥„¡‘…Ñ„¤ì(€€€€€¥˜€ …‘…Ñ„ñð€µ•‘¥„œ¥¸‘…Ñ„€˜˜€…‘…Ñ„¹µ•‘¥„¤ì(€€€€€€€Ù…È•ÉÉ½È€ô¹•ÜÉÉ½È ‰…ÑÑ…¡5•‘¥„™…¥±•è¥¹Ù…±¥…ÉÕµ•¹Ð€ ˆ€¬‘…Ñ„€¬€ˆ¤ˆ¤ì(€€€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹II=H°ì(€€€€€€€€€ÑåÁ”èÉÉ½ÉQåÁ•Ì¹=Q!I}II=H°(€€€€€€€€€‘•Ñ…¥±ÌèÉÉ½É•Ñ…¥±Ì¹QQ!}5%}II=H°(€€€€€€€€€™…Ñ…°èÑÉÕ”°(€€€€€€€€€•ÉÉ½Èè•ÉÉ½È(€€€€€€€ô¤ì(€€€€€€€É•ÑÕÉ¸ì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰…ÑÑ…¡5•‘¥„ˆ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹}µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹Ý…É¸ ‰µ•‘¥„µÕÍÐ‰”‘•Ñ…¡•‰•™½É”…ÑÑ…¡¥¹œˆ¤ì(€€€€€€€Ñ¡¥Ì¹‘•Ñ…¡5•‘¥„ ¤ì(€€€€€ô(€€€€€Ù…È…ÑÑ…¡5•‘¥…M½ÕÉ”€ô€µ•‘¥„œ¥¸‘…Ñ„ì(€€€€€Ù…Èµ•‘¥„€ô…ÑÑ…¡5•‘¥…M½ÕÉ”€ü‘…Ñ„¹µ•‘¥„€è‘…Ñ„ì(€€€€€Ù…È…ÑÑ…¡¥¹…Ñ„€ô…ÑÑ…¡5•‘¥…M½ÕÉ”€ü‘…Ñ„€èì(€€€€€€€µ•‘¥„èµ•‘¥„(€€€€€ôì(€€€€€Ñ¡¥Ì¹}µ•‘¥„€ôµ•‘¥„ì(€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}QQ!%9°…ÑÑ…¡¥¹…Ñ„¤ì(€€€ô((€€€€¼¨¨(€€€€€¨•Ñ… !±Ì¹©Ì™É½´Ñ¡”µ•‘¥„(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹‘•Ñ…¡5•‘¥„€ô™Õ¹Ñ¥½¸‘•Ñ…¡5•‘¥„ ¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‘•Ñ…¡5•‘¥„œ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}Q!%9°íô¤ì(€€€€€Ñ¡¥Ì¹}µ•‘¥„€ô¹Õ±°ì(€€€ô((€€€€¼¨¨(€€€€€¨•Ñ… !Q515•‘¥…±•µ•¹Ð°5•‘¥…M½ÕÉ”°…¹M½ÕÉ•	Õ™™•ÉÌÝ¥Ñ¡½ÕÐÉ•Í•Ð°™½È…ÑÑ…¡¥¹œÑ¼…¹½Ñ¡•È¥¹ÍÑ…¹”(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹ÑÉ…¹Í™•É5•‘¥„€ô™Õ¹Ñ¥½¸ÑÉ…¹Í™•É5•‘¥„ ¤ì(€€€€€Ñ¡¥Ì¹}µ•‘¥„€ô¹Õ±°ì(€€€€€Ù…ÈÑÉ…¹Í™•É5•‘¥„€ôÑ¡¥Ì¹‰Õ™™•É½¹ÑÉ½±±•È¹ÑÉ…¹Í™•É5•‘¥„ ¤ì(€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹5%}Q!%9°ì(€€€€€€€ÑÉ…¹Í™•É5•‘¥„èÑÉ…¹Í™•É5•‘¥„(€€€€€ô¤ì(€€€€€É•ÑÕÉ¸ÑÉ…¹Í™•É5•‘¥„ì(€€€ô((€€€€¼¨¨(€€€€€¨M•ÐÑ¡”Í½ÕÉ”UI0¸…¸‰”É•±…Ñ¥Ù”½È…‰Í½±ÕÑ”¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹±½…‘M½ÕÉ”€ô™Õ¹Ñ¥½¸±½…‘M½ÕÉ”¡ÕÉ°¤ì(€€€€€Ñ¡¥Ì¹ÍÑ½Á1½… ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹µ•‘¥„ì(€€€€€Ù…È±½…‘•‘M½ÕÉ”€ôÑ¡¥Ì¹}ÕÉ°ì(€€€€€Ù…È±½…‘¥¹M½ÕÉ”€ôÑ¡¥Ì¹}ÕÉ°€ôÕÉ±Q½½±­¥ÑáÁ½ÉÑÌ¹‰Õ¥±‘‰Í½±ÕÑ•UI0¡Í•±˜¹±½…Ñ¥½¸¹¡É•˜°ÕÉ°°ì(€€€€€€€…±Ý…åÍ9½Éµ…±¥é”èÑÉÕ”(€€€€€ô¤ì(€€€€€Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô€´Äì(€€€€€Ñ¡¥Ì¹}µ…á!‘Á1•Ù•°€ô¹Õ±°ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰±½…‘M½ÕÉ”èˆ€¬±½…‘¥¹M½ÕÉ”¤ì(€€€€€¥˜€¡µ•‘¥„€˜˜±½…‘•‘M½ÕÉ”€˜˜€¡±½…‘•‘M½ÕÉ”€„ôô±½…‘¥¹M½ÕÉ”ñðÑ¡¥Ì¹‰Õ™™•É½¹ÑÉ½±±•È¹¡…ÍM½ÕÉ•QåÁ•Ì ¤¤¤ì(€€€€€€€€¼¼I•µ½Ù”…¹É”µÉ•…Ñ”5•‘¥…M½ÕÉ”(€€€€€€€Ñ¡¥Ì¹‘•Ñ…¡5•‘¥„ ¤ì(€€€€€€€Ñ¡¥Ì¹…ÑÑ…¡5•‘¥„¡µ•‘¥„¤ì(€€€€€ô(€€€€€€¼¼Ý¡•¸…ÑÑ…¡¥¹œÑ¼„Í½ÕÉ”UI0°ÑÉ¥•È„Á±…å±¥ÍÐ±½…(€€€€€Ñ¡¥Ì¹ÑÉ¥•È¡Ù•¹ÑÌ¹59%MQ}1=%9°ì(€€€€€€€ÕÉ°èÕÉ°(€€€€€ô¤ì(€€€ô((€€€€¼¨¨(€€€€€¨•ÑÌÑ¡”ÕÉÉ•¹Ñ±ä±½…‘•UI0(€€€€€¨¼ì(€€€€¼¨¨(€€€€€¨MÑ…ÉÐ±½…‘¥¹œ‘…Ñ„™É½´Ñ¡”ÍÑÉ•…´Í½ÕÉ”¸(€€€€€¨•Á•¹‘¥¹œ½¸‘•™…Õ±Ð½¹™¥œ°±¥•¹ÐÍÑ…ÉÑÌ±½…‘¥¹œ…ÕÑ½µ…Ñ¥…±±äÝ¡•¸„Í½ÕÉ”¥ÌÍ•Ð¸(€€€€€¨(€€€€€¨Á…É…´ÍÑ…ÉÑA½Í¥Ñ¥½¸€´M•ÐÑ¡”ÍÑ…ÉÐÁ½Í¥Ñ¥½¸Ñ¼ÍÑÉ•…´™É½´¸(€€€€€¨•™…Õ±ÑÌÑ¼€´Ä€¡9½¹”èÍÑ…ÉÑÌ™É½´•…É±¥•ÍÐÁ½¥¹Ð¤(€€€€€¨¼(€€€}ÁÉ½Ñ¼¹ÍÑ…ÉÑ1½…€ô™Õ¹Ñ¥½¸ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸°Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€¥˜€¡ÍÑ…ÉÑA½Í¥Ñ¥½¸€ôôôÙ½¥€À¤ì(€€€€€€€ÍÑ…ÉÑA½Í¥Ñ¥½¸€ô€´Äì(€€€€€ô(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰ÍÑ…ÉÑ1½… ˆ€¬€¡ÍÑ…ÉÑA½Í¥Ñ¥½¸€¬€¡Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸€ü€œ°€ñÍ­¥ÀÍ••¬Ñ¼ÍÑ…ÉÐøœ€è€œœ¤¤€¬€ˆ¤ˆ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑ•€ôÑÉÕ”ì(€€€€€Ñ¡¥Ì¹É•ÍÕµ•	Õ™™•É¥¹œ ¤ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÍm¥t¹ÍÑ…ÉÑ1½…¡ÍÑ…ÉÑA½Í¥Ñ¥½¸°Í­¥ÁM••­Q½MÑ…ÉÑA½Í¥Ñ¥½¸¤ì(€€€€€€€¥˜€ …Ñ¡¥Ì¹ÍÑ…ÉÑ•ñð€…Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨MÑ½À±½…‘¥¹œ½˜…¹äÍÑÉ•…´‘…Ñ„¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹ÍÑ½Á1½…€ô™Õ¹Ñ¥½¸ÍÑ½Á1½… ¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ÍÑ½Á1½…œ¤ì(€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑ•€ô™…±Í”ì(€€€€€™½È€¡Ù…È¤€ô€Àì¤€ðÑ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹±•¹Ñ ì¤¬¬¤ì(€€€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÍm¥t¹ÍÑ½Á1½… ¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÑ…ÉÑ•ñð€…Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¤ì(€€€€€€€€€‰É•…¬ì(€€€€€€€ô(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨I•ÑÕÉ¹ÌÝ¡•Ñ¡•È±½…‘¥¹œ°Ñ½±•Ý¥Ñ ÍÑ…ÉÑ1½… ¥€…¹ÍÑ½Á1½… ¥€°¥Ì…Ñ¥Ù”½È¹½Ñ€¸(€€€€€¨¼ì(€€€€¼¨¨(€€€€€¨I•ÍÕµ•ÌÍÑÉ•…´½¹ÑÉ½±±•ÈÍ•µ•¹Ð±½…‘¥¹œ…™Ñ•ÈÁ…ÕÍ•	Õ™™•É¥¹€¡…Ì‰••¸…±±•¸(€€€€€¨¼(€€€}ÁÉ½Ñ¼¹É•ÍÕµ•	Õ™™•É¥¹œ€ô™Õ¹Ñ¥½¸É•ÍÕµ•	Õ™™•É¥¹œ ¤ì(€€€€€¥˜€ …Ñ¡¥Ì¹‰Õ™™•É¥¹¹…‰±•¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰É•ÍÕµ”‰Õ™™•É¥¹œˆ¤ì(€€€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡½¹ÑÉ½±±•È¤ì(€€€€€€€€€¥˜€¡½¹ÑÉ½±±•È¹É•ÍÕµ•	Õ™™•É¥¹œ¤ì(€€€€€€€€€€€½¹ÑÉ½±±•È¹É•ÍÕµ•	Õ™™•É¥¹œ ¤ì(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€ô(€€€ô((€€€€¼¨¨(€€€€€¨AÉ•Ù•¹ÑÌÍÑÉ•…´½¹ÑÉ½±±•È™É½´±½…‘¥¹œ¹•ÜÍ•µ•¹ÑÌÕ¹Ñ¥°É•ÍÕµ•	Õ™™•É¥¹€¥Ì…±±•¸(€€€€€¨Q¡¥Ì…±±½ÝÌ™½Èµ•‘¥„‰Õ™™•É¥¹œÑ¼‰”Á…ÕÍ•Ý¥Ñ¡½ÕÐ¥¹Ñ•ÉÕÁÑ¥¹œÁ±…å±¥ÍÐ±½…‘¥¹œ¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Á…ÕÍ•	Õ™™•É¥¹œ€ô™Õ¹Ñ¥½¸Á…ÕÍ•	Õ™™•É¥¹œ ¤ì(€€€€€¥˜€¡Ñ¡¥Ì¹‰Õ™™•É¥¹¹…‰±•¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Á…ÕÍ”‰Õ™™•É¥¹œˆ¤ì(€€€€€€€Ñ¡¥Ì¹¹•ÑÝ½É­½¹ÑÉ½±±•ÉÌ¹™½É… ¡™Õ¹Ñ¥½¸€¡½¹ÑÉ½±±•È¤ì(€€€€€€€€€¥˜€¡½¹ÑÉ½±±•È¹Á…ÕÍ•	Õ™™•É¥¹œ¤ì(€€€€€€€€€€€½¹ÑÉ½±±•È¹Á…ÕÍ•	Õ™™•É¥¹œ ¤ì(€€€€€€€€€ô(€€€€€€€ô¤ì(€€€€€ô(€€€ôì(€€€€¼¨¨(€€€€€¨MÝ…ÀÑ¡É½Õ Á½ÍÍ¥‰±”…Õ‘¥¼½‘•Ì¥¸Ñ¡”ÍÑÉ•…´€¡™½È•á…µÁ±”Ñ¼ÍÝ¥Ñ ™É½´ÍÑ•É•¼Ñ¼€Ô¸Ä¤(€€€€€¨¼(€€€}ÁÉ½Ñ¼¹ÍÝ…ÁÕ‘¥½½‘•Œ€ô™Õ¹Ñ¥½¸ÍÝ…ÁÕ‘¥½½‘•Œ ¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ ÍÝ…ÁÕ‘¥½½‘•Œœ¤ì(€€€€€Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹ÍÝ…ÁÕ‘¥½½‘•Œ ¤ì(€€€ô((€€€€¼¨¨(€€€€€¨]¡•¸Ñ¡”µ•‘¥„µ•±•µ•¹Ð™…¥±Ì°Ñ¡¥Ì…±±½ÝÌÑ¼‘•Ñ… …¹Ñ¡•¸É”µ…ÑÑ… ¥Ð(€€€€€¨…Ì½¹”…±°€¡½¹Ù•¹¥•¹”µ•Ñ¡½¤¸(€€€€€¨(€€€€€¨ÕÑ½µ…Ñ¥ŒÉ•½Ù•Éä½˜µ•‘¥„µ•ÉÉ½ÉÌ‰äÑ¡¥ÌÁÉ½•ÍÌ¥Ì½¹™¥ÕÉ…‰±”¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹É•½Ù•É5•‘¥…ÉÉ½È€ô™Õ¹Ñ¥½¸É•½Ù•É5•‘¥…ÉÉ½È ¤ì(€€€€€Ñ¡¥Ì¹±½•È¹±½œ É•½Ù•É5•‘¥…ÉÉ½Èœ¤ì(€€€€€Ù…Èµ•‘¥„€ôÑ¡¥Ì¹}µ•‘¥„ì(€€€€€Ù…ÈÑ¥µ”€ôµ•‘¥„€ôô¹Õ±°€üÙ½¥€À€èµ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”ì(€€€€€Ñ¡¥Ì¹‘•Ñ…¡5•‘¥„ ¤ì(€€€€€¥˜€¡µ•‘¥„¤ì(€€€€€€€Ñ¡¥Ì¹…ÑÑ…¡5•‘¥„¡µ•‘¥„¤ì(€€€€€€€¥˜€¡Ñ¥µ”¤ì(€€€€€€€€€Ñ¡¥Ì¹ÍÑ…ÉÑ1½…¡Ñ¥µ”¤ì(€€€€€€€ô(€€€€€ô(€€€ôì(€€€}ÁÉ½Ñ¼¹É•µ½Ù•1•Ù•°€ô™Õ¹Ñ¥½¸É•µ½Ù•1•Ù•°¡±•Ù•±%¹‘•à¤ì(€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹É•µ½Ù•1•Ù•°¡±•Ù•±%¹‘•à¤ì(€€€ô((€€€€¼¨¨(€€€€€¨É•ÑÕÉ¹Ì„UU%™½ÈÑ¡¥ÌÁ±…å•È¥¹ÍÑ…¹”(€€€€€¨¼ì(€€€€¼¨¨(€€€€€¨¥¹…¹Í•±•ÐÑ¡”‰•ÍÐµ…Ñ¡¥¹œ…Õ‘¥¼ÑÉ…¬°µ…­¥¹œ„±•Ù•°ÍÝ¥Ñ Ý¡•¸„É½ÕÀ¡…¹”¥Ì¹••ÍÍ…Éä¸(€€€€€¨UÁ‘…Ñ•Ì¡±Ì¹½¹™¥œ¹…Õ‘¥½AÉ•™•É•¹•€¸I•ÑÕÉ¹ÌÑ¡”Í•±•Ñ•ÑÉ…¬°½È¹Õ±°Ý¡•¸¹¼µ…Ñ¡¥¹œÑÉ…¬¥Ì™½Õ¹¸(€€€€€¨¼(€€€}ÁÉ½Ñ¼¹Í•ÑÕ‘¥½=ÁÑ¥½¸€ô™Õ¹Ñ¥½¸Í•ÑÕ‘¥½=ÁÑ¥½¸¡…Õ‘¥½=ÁÑ¥½¸¤ì(€€€€€Ù…È}Ñ¡¥Ì‘…Õ‘¥½QÉ…­½¹ÑÈì(€€€€€É•ÑÕÉ¸€ ¡}Ñ¡¥Ì‘…Õ‘¥½QÉ…­½¹ÑÈ€ôÑ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘…Õ‘¥½QÉ…­½¹ÑÈ¹Í•ÑÕ‘¥½=ÁÑ¥½¸¡…Õ‘¥½=ÁÑ¥½¸¤¤ñð¹Õ±°ì(€€€ô(€€€€¼¨¨(€€€€€¨¥¹…¹Í•±•ÐÑ¡”‰•ÍÐµ…Ñ¡¥¹œÍÕ‰Ñ¥Ñ±”ÑÉ…¬°µ…­¥¹œ„±•Ù•°ÍÝ¥Ñ Ý¡•¸„É½ÕÀ¡…¹”¥Ì¹••ÍÍ…Éä¸(€€€€€¨UÁ‘…Ñ•Ì¡±Ì¹½¹™¥œ¹ÍÕ‰Ñ¥Ñ±•AÉ•™•É•¹•€¸I•ÑÕÉ¹ÌÑ¡”Í•±•Ñ•ÑÉ…¬°½È¹Õ±°Ý¡•¸¹¼µ…Ñ¡¥¹œÑÉ…¬¥Ì™½Õ¹¸(€€€€€¨¼ì(€€€}ÁÉ½Ñ¼¹Í•ÑMÕ‰Ñ¥Ñ±•=ÁÑ¥½¸€ô™Õ¹Ñ¥½¸Í•ÑMÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¤ì(€€€€€Ù…È}Ñ¡¥Ì‘ÍÕ‰Ñ¥Ñ±•QÉ…­¼ì(€€€€€É•ÑÕÉ¸€ ¡}Ñ¡¥Ì‘ÍÕ‰Ñ¥Ñ±•QÉ…­¼€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘ÍÕ‰Ñ¥Ñ±•QÉ…­¼¹Í•ÑMÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¡ÍÕ‰Ñ¥Ñ±•=ÁÑ¥½¸¤¤ñð¹Õ±°ì(€€€ô((€€€€¼¨¨(€€€€€¨•ÐÑ¡”½µÁ±•Ñ”±¥ÍÐ½˜…Õ‘¥¼ÑÉ…­Ì…É½ÍÌ…±°µ•‘¥„É½ÕÁÌ(€€€€€¨¼ì(€€€€¼¨¨(€€€€€¨É•ÑÕÉ¹Ìµ•‘¥……Á…‰¥±¥Ñ¥•Ì¹‘•½‘¥¹%¹™¼™½È„Ù…É¥…¹Ð½É•¹‘¥Ñ¥½¸(€€€€€¨¼(€€€}ÁÉ½Ñ¼¹•Ñ5•‘¥…•½‘¥¹%¹™¼€ô™Õ¹Ñ¥½¸•Ñ5•‘¥…•½‘¥¹%¹™¼¡±•Ù•°°…Õ‘¥½QÉ…­Ì¤ì(€€€€€¥˜€¡…Õ‘¥½QÉ…­Ì€ôôôÙ½¥€À¤ì(€€€€€€€…Õ‘¥½QÉ…­Ì€ôÑ¡¥Ì¹…±±Õ‘¥½QÉ…­Ìì(€€€€€ô(€€€€€Ù…È…Õ‘¥½QÉ…­Í	åÉ½ÕÀ€ô•ÑÕ‘¥½QÉ…­Í	åÉ½ÕÀ¡…Õ‘¥½QÉ…­Ì¤ì(€€€€€É•ÑÕÉ¸•Ñ5•‘¥…•½‘¥¹%¹™½AÉ½µ¥Í”¡±•Ù•°°…Õ‘¥½QÉ…­Í	åÉ½ÕÀ°¹…Ù¥…Ñ½È¹µ•‘¥……Á…‰¥±¥Ñ¥•Ì¤ì(€€€ôì(€€€É•ÑÕÉ¸}É•…Ñ•±…ÍÌ¡!±Ì°mì(€€€€€­•äè€‰ÕÉ°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}ÕÉ°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨]¡•Ñ¡•È½È¹½Ð•¹½Õ ¡…Ì‰••¸‰Õ™™•É•Ñ¼Í••¬Ñ¼ÍÑ…ÉÐÁ½Í¥Ñ¥½¸½ÈÕÍ”µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ•€Ñ¼‘•Ñ•Éµ¥¹”¹•áÐ±½…Á½Í¥Ñ¥½¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰¡…Í¹½Õ¡Q½MÑ…ÉÐˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¡…Í¹½Õ¡Q½MÑ…ÉÐì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”ÍÑ…ÉÑA½Í¥Ñ¥½¸Í•Ð½¸ÍÑ…ÉÑ1½…¡Á½Í¥Ñ¥½¸¤½È½¸…ÕÑ½ÍÑ…ÉÐÝ¥Ñ ½¹™¥œ¹ÍÑ…ÉÑA½Í¥Ñ¥½¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÑ…ÉÑA½Í¥Ñ¥½¸ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹ÍÑ…ÉÑA½Í¥Ñ¥½¹Y…±Õ”ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰±½…‘¥¹¹…‰±•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑ…ÉÑ•ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•ÑÕÉ¹ÌÍÑ…Ñ”½˜™É…µ•¹Ð±½…‘¥¹œÑ½±•‰ä…±±¥¹œÁ…ÕÍ•	Õ™™•É¥¹œ ¥€…¹É•ÍÕµ•	Õ™™•É¥¹œ ¥€¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰‰Õ™™•É¥¹¹…‰±•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹‰Õ™™•É¥¹¹…‰±•ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰¥¹±¥¡ÑÉ…µ•¹ÑÌˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}¥¹±¥¡Ñ…Ñ„ì(€€€€€€€Ù…È¥¹±¥¡Ñ…Ñ„€ô€¡}¥¹±¥¡Ñ…Ñ„€ôíô°}¥¹±¥¡Ñ…Ñ…mA±…å±¥ÍÑ1•Ù•±QåÁ”¹5%9t€ôÑ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¥¹±¥¡ÑÉ…œ°}¥¹±¥¡Ñ…Ñ„¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€€€€€€€¥¹±¥¡Ñ…Ñ…mA±…å±¥ÍÑ1•Ù•±QåÁ”¹U%=t€ôÑ¡¥Ì¹…Õ‘¥½MÑÉ•…µ½¹ÑÉ½±±•È¹¥¹±¥¡ÑÉ…œì(€€€€€€€ô(€€€€€€€¥˜€¡Ñ¡¥Ì¹ÍÕ‰Ñ¥Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È¤ì(€€€€€€€€€¥¹±¥¡Ñ…Ñ…mA±…å±¥ÍÑ1•Ù•±QåÁ”¹MU	Q%Q1t€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ¥Ñ±•MÑÉ•…µ½¹ÑÉ½±±•È¹¥¹±¥¡ÑÉ…œì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸¥¹±¥¡Ñ…Ñ„ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Í•ÍÍ¥½¹%ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Í•ÍÍ¥½¹%€ôÑ¡¥Ì¹}Í•ÍÍ¥½¹%ì(€€€€€€€¥˜€ …}Í•ÍÍ¥½¹%¤ì(€€€€€€€€€}Í•ÍÍ¥½¹%€ôÑ¡¥Ì¹}Í•ÍÍ¥½¹%€ôÕÕ¥ ¤ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸}Í•ÍÍ¥½¹%ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨É•ÑÕÉ¹Ì…¸…ÉÉ…ä½˜±•Ù•±Ì€¡Ù…É¥…¹ÑÌ¤Í½ÉÑ•‰ä!@µ1Y0°IM=1UQ%=8€¡¡•¥¡Ð¤°I5µIQ°=L°Y%<µI9°…¹	9]%Q (€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±•Ù•±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹±•Ù•±Ìì(€€€€€€€É•ÑÕÉ¸±•Ù•±Ì€ü±•Ù•±Ì€èmtì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨É•ÑÕÉ¹Ì1•Ù•±•Ñ…¥±Ì½˜±…ÍÐ±½…‘•±•Ù•°€¡Ù…É¥…¹Ð¤½È¹Õ±±€ÁÉ¥½ÈÑ¼±½…‘¥¹œ„µ•‘¥„Á±…å±¥ÍÐ¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±…Ñ•ÍÑ1•Ù•±•Ñ…¥±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹•Ñ1•Ù•±•Ñ…¥±Ì ¤ñð¹Õ±°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨É•ÑÕÉ¹Ì1•Ù•°½‰©•Ð½˜Í•±•Ñ•±•Ù•°€¡Ù…É¥…¹Ð¤½È¹Õ±±€ÁÉ¥½ÈÑ¼Í•±•Ñ¥¹œ„±•Ù•°½È½¹”Ñ¡”±•Ù•°¥ÌÉ•µ½Ù•¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±½…‘1•Ù•±=‰¨ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹±½…‘1•Ù•±=‰¨ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨%¹‘•à½˜ÅÕ…±¥Ñä±•Ù•°€¡Ù…É¥…¹Ð¤ÕÉÉ•¹Ñ±äÁ±…å•(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÕÉÉ•¹Ñ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹ÕÉÉ•¹Ñ1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨M•ÐÅÕ…±¥Ñä±•Ù•°¥¹‘•à¥µµ•‘¥…Ñ•±ä¸Q¡¥ÌÝ¥±°™±ÕÍ Ñ¡”ÕÉÉ•¹Ð‰Õ™™•ÈÑ¼É•Á±…”Ñ¡”ÅÕ…±¥Ñä…Í…À¸Q¡…Ðµ•…¹ÌÁ±…å‰…¬Ý¥±°¥¹Ñ•ÉÉÕÁÐ…Ð±•…ÍÐÍ¡½ÉÑ±äÑ¼É”µ‰Õ™™•È…¹É”µÍå¹Œ•Ù•¹ÑÕ…±±ä¸M•ÐÑ¼€´Ä™½È…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•ÐÕÉÉ•¹Ñ1•Ù•°èˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹µ…¹Õ…±1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€€€Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¥µµ•‘¥…Ñ•1•Ù•±MÝ¥Ñ  ¤ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨%¹‘•à½˜¹•áÐÅÕ…±¥Ñä±•Ù•°±½…‘•…ÌÍ¡•‘Õ±•‰äÍÑÉ•…´½¹ÑÉ½±±•È¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰¹•áÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¹•áÑ1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨M•ÐÅÕ…±¥Ñä±•Ù•°¥¹‘•à™½È¹•áÐ±½…‘•‘…Ñ„¸(€€€€€€€¨Q¡¥ÌÝ¥±°ÍÝ¥Ñ Ñ¡”Ù¥‘•¼ÅÕ…±¥Ñä…Í…À°Ý¥Ñ¡½ÕÐ¥¹Ñ•ÉÉÕÁÑ¥¹œÁ±…å‰…¬¸(€€€€€€€¨5…ä…‰½ÉÐÕÉÉ•¹Ð±½…‘¥¹œ½˜‘…Ñ„°…¹™±ÕÍ Á…ÉÑÌ½˜‰Õ™™•È€¡½ÕÑÍ¥‘”ÕÉÉ•¹Ñ±äÁ±…å•™É…µ•¹ÐÉ•¥½¸¤¸(€€€€€€€¨Á…É…´¹•Ý1•Ù•°€´A…ÍÌ€´Ä™½È…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•Ð¹•áÑ1•Ù•°èˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹µ…¹Õ…±1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€€€Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¹•áÑ1•Ù•±MÝ¥Ñ  ¤ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•ÑÕÉ¸Ñ¡”ÅÕ…±¥Ñä±•Ù•°½˜Ñ¡”ÕÉÉ•¹Ñ±ä½È±…ÍÐ€¡½˜¹½¹”¥Ì±½…‘•ÕÉÉ•¹Ñ±ä¤Í•µ•¹Ð(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±½…‘1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹±•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨M•ÐÅÕ…±¥Ñä±•Ù•°¥¹‘•à™½È¹•áÐ±½…‘•‘…Ñ„¥¸„½¹Í•ÉÙ…Ñ¥Ù”Ý…ä¸(€€€€€€€¨Q¡¥ÌÝ¥±°ÍÝ¥Ñ Ñ¡”ÅÕ…±¥ÑäÝ¥Ñ¡½ÕÐ™±ÕÍ¡¥¹œ°‰ÕÐ¥¹Ñ•ÉÉÕÁÐÕÉÉ•¹Ð±½…‘¥¹œ¸(€€€€€€€¨Q¡ÕÌÑ¡”µ½µ•¹ÐÝ¡•¸Ñ¡”ÅÕ…±¥ÑäÍÝ¥Ñ Ý¥±°…ÁÁ•…È¥¸•™™•ÐÝ¥±°½¹±ä‰”…™Ñ•ÈÑ¡”…±É•…‘ä•á¥ÍÑ¥¹œ‰Õ™™•È¸(€€€€€€€¨Á…É…´¹•Ý1•Ù•°€´A…ÍÌ€´Ä™½È…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•Ð±½…‘1•Ù•°èˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹µ…¹Õ…±1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•Ð¹•áÐÅÕ…±¥Ñä±•Ù•°±½…‘•(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰¹•áÑ1½…‘1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹¹•áÑ1½…‘1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨M•ÐÅÕ…±¥Ñä±•Ù•°½˜¹•áÐ±½…‘•Í•µ•¹Ð¥¸„™Õ±±ä€‰¹½¸µ‘•ÍÑÉÕÑ¥Ù”ˆÝ…ä¸(€€€€€€€¨M…µ”…Ì±½…‘1•Ù•±€‰ÕÐÝ¥±°Ý…¥Ð™½È¹•áÐÍÝ¥Ñ €¡Õ¹Ñ¥°ÕÉÉ•¹Ð±½…‘¥¹œ¥Ì‘½¹”¤¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡±•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹¹•áÑ1½…‘1•Ù•°€ô±•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•ÑÕÉ¸€‰™¥ÉÍÐ±•Ù•°ˆè±¥­”„‘•™…Õ±Ð±•Ù•°°¥˜¹½ÐÍ•Ð°(€€€€€€€¨™…±±Ì‰…¬Ñ¼¥¹‘•à½˜™¥ÉÍÐ±•Ù•°É•™•É•¹•¥¸µ…¹¥™•ÍÐ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰™¥ÉÍÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸5…Ñ ¹µ…à¡Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹™¥ÉÍÑ1•Ù•°°Ñ¡¥Ì¹µ¥¹ÕÑ½1•Ù•°¤ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨M•ÑÌ€‰™¥ÉÍÐµ±•Ù•°ˆ°Í•”•ÑÑ•È¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•Ð™¥ÉÍÑ1•Ù•°èˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹™¥ÉÍÑ1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•ÑÕÉ¸Ñ¡”‘•Í¥É•ÍÑ…ÉÐ±•Ù•°™½ÈÑ¡”™¥ÉÍÐ™É…µ•¹ÐÑ¡…ÐÝ¥±°‰”±½…‘•¸(€€€€€€€¨Q¡”‘•™…Õ±ÐÙ…±Õ”½˜€´Ä¥¹‘¥…Ñ•Ì…ÕÑ½µ…Ñ¥ŒÍÑ…ÉÐ±•Ù•°Í•±•Ñ¥½¸¸(€€€€€€€¨M•ÑÑ¥¹œ¡±Ì¹¹•áÑÕÑ½1•Ù•°Ý¥Ñ¡½ÕÐÍ•ÑÑ¥¹œ„ÍÑ…ÉÑ1•Ù•°Ý¥±°É•ÍÕ±Ð¥¸(€€€€€€€¨Ñ¡”¹•áÑÕÑ½1•Ù•°Ù…±Õ”‰•¥¹œÕÍ•™½È½¹”™É…µ•¹Ð±½…¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÑ…ÉÑ1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…ÈÍÑ…ÉÑ1•Ù•°€ôÑ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹ÍÑ…ÉÑ1•Ù•°ì(€€€€€€€¥˜€¡ÍÑ…ÉÑ1•Ù•°€ôôô€´Ä€˜˜Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹™½É•‘ÕÑ½1•Ù•°€ø€´Ä¤ì(€€€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹™½É•‘ÕÑ½1•Ù•°ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸ÍÑ…ÉÑ1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Í•Ð€ÍÑ…ÉÐ±•Ù•°€¡±•Ù•°½˜™¥ÉÍÐ™É…µ•¹ÐÑ¡…ÐÝ¥±°‰”Á±…å•‰…¬¤(€€€€€€€¨¥˜¹½Ð½Ù•ÉÉ¥‘•‰äÕÍ•È°™¥ÉÍÐ±•Ù•°…ÁÁ•…É¥¹œ¥¸µ…¹¥™•ÍÐÝ¥±°‰”ÕÍ•…ÌÍÑ…ÉÐ±•Ù•°(€€€€€€€¨¥˜€´Ä€è…ÕÑ½µ…Ñ¥ŒÍÑ…ÉÐ±•Ù•°Í•±•Ñ¥½¸°Á±…å‰…¬Ý¥±°ÍÑ…ÉÐ™É½´±•Ù•°µ…Ñ¡¥¹œ‘½Ý¹±½…‰…¹‘Ý¥‘Ñ (€€€€€€€¨€¡‘•Ñ•Éµ¥¹•™É½´‘½Ý¹±½…½˜™¥ÉÍÐÍ•µ•¹Ð¤(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•ÐÍÑ…ÉÑ1•Ù•°èˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€€¼¼¥˜¹½Ð¥¸…ÕÑ½µ…Ñ¥ŒÍÑ…ÉÐ±•Ù•°‘•Ñ•Ñ¥½¸°•¹ÍÕÉ”ÍÑ…ÉÑ1•Ù•°¥ÌÉ•…Ñ•ÈÑ¡…¸µ¥¹ÕÑ½1•Ù•°(€€€€€€€¥˜€¡¹•Ý1•Ù•°€„ôô€´Ä¤ì(€€€€€€€€€¹•Ý1•Ù•°€ô5…Ñ ¹µ…à¡¹•Ý1•Ù•°°Ñ¡¥Ì¹µ¥¹ÕÑ½1•Ù•°¤ì(€€€€€€€ô(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹ÍÑ…ÉÑ1•Ù•°€ô¹•Ý1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨]¡•Ñ¡•È±•Ù•°…ÁÁ¥¹œ¥Ì•¹…‰±•¸(€€€€€€€¨•™…Õ±ÐÙ…±Õ”¥ÌÍ•ÐÙ¥„½¹™¥œ¹…Á1•Ù•±Q½A±…å•ÉM¥é•€¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…Á1•Ù•±Q½A±…å•ÉM¥é”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹½¹™¥œ¹…Á1•Ù•±Q½A±…å•ÉM¥é”ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¹…‰±•Ì½È‘¥Í…‰±•Ì±•Ù•°…ÁÁ¥¹œ¸%˜‘¥Í…‰±•…™Ñ•ÈÁÉ•Ù¥½ÕÍ±ä•¹…‰±•°¹•áÑ1•Ù•±MÝ¥Ñ¡€Ý¥±°‰”¥µµ•‘¥…Ñ•±ä…±±•¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Í¡½Õ±‘MÑ…ÉÑ…ÁÁ¥¹œ¤ì(€€€€€€€Ù…È¹•Ý…Á1•Ù•±Q½A±…å•ÉM¥é”€ô€„…Í¡½Õ±‘MÑ…ÉÑ…ÁÁ¥¹œì(€€€€€€€¥˜€¡¹•Ý…Á1•Ù•±Q½A±…å•ÉM¥é”€„ôôÑ¡¥Ì¹½¹™¥œ¹…Á1•Ù•±Q½A±…å•ÉM¥é”¤ì(€€€€€€€€€¥˜€¡¹•Ý…Á1•Ù•±Q½A±…å•ÉM¥é”¤ì(€€€€€€€€€€€Ñ¡¥Ì¹…Á1•Ù•±½¹ÑÉ½±±•È¹ÍÑ…ÉÑ…ÁÁ¥¹œ ¤ì€¼¼%˜…ÁÁ¥¹œ½ÕÉÌ°¹•áÑ1•Ù•±MÝ¥Ñ Ý¥±°¡…ÁÁ•¸‰…Í•½¸Í¥é”¸(€€€€€€€€€ô•±Í”ì(€€€€€€€€€€€Ñ¡¥Ì¹…Á1•Ù•±½¹ÑÉ½±±•È¹ÍÑ½Á…ÁÁ¥¹œ ¤ì(€€€€€€€€€€€Ñ¡¥Ì¹…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô€´Äì(€€€€€€€€€€€Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹¹•áÑ1•Ù•±MÝ¥Ñ  ¤ì€¼¼9½ÜÝ”É”Õ¹…ÁÁ•°•ÐÑ¡”¹•áÐ±•Ù•°…Í…À¸(€€€€€€€€€ô(€€€€€€€€€Ñ¡¥Ì¹½¹™¥œ¹…Á1•Ù•±Q½A±…å•ÉM¥é”€ô¹•Ý…Á1•Ù•±Q½A±…å•ÉM¥é”ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨…ÁÁ¥¹œ½µ…à±•Ù•°Ù…±Õ”Ñ¡…ÐÍ¡½Õ±‰”ÕÍ•‰ä…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸…±½É¥Ñ¡´€¡	I½¹ÑÉ½±±•É€¤(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…ÕÑ½1•Ù•±…ÁÁ¥¹œˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•ÑÕÉ¹ÌÑ¡”ÕÉÉ•¹Ð‰…¹‘Ý¥‘Ñ •ÍÑ¥µ…Ñ”¥¸‰¥ÑÌÁ•ÈÍ•½¹°Ý¡•¸…Ù…¥±…‰±”¸=Ñ¡•ÉÝ¥Í”°9…9€¥ÌÉ•ÑÕÉ¹•¸(€€€€€€€¨¼°(€€€€€Í•Ðè(€€€€€€¼¨¨(€€€€€€€¨…ÁÁ¥¹œ½µ…à±•Ù•°Ù…±Õ”Ñ¡…ÐÍ¡½Õ±‰”ÕÍ•‰ä…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸…±½É¥Ñ¡´€¡	I½¹ÑÉ½±±•É€¤(€€€€€€€¨¼(€€€€€™Õ¹Ñ¥½¸Í•Ð¡¹•Ý1•Ù•°¤ì(€€€€€€€¥˜€¡Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œ€„ôô¹•Ý1•Ù•°¤ì(€€€€€€€€€Ñ¡¥Ì¹±½•È¹±½œ ‰Í•Ð…ÕÑ½1•Ù•±…ÁÁ¥¹œèˆ€¬¹•Ý1•Ù•°¤ì(€€€€€€€€€Ñ¡¥Ì¹}…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ô¹•Ý1•Ù•°ì(€€€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹¡•­5…áÕÑ½UÁ‘…Ñ• ¤ì(€€€€€€€ô(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰‰…¹‘Ý¥‘Ñ¡ÍÑ¥µ…Ñ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È‰ÝÍÑ¥µ…Ñ½È€ôÑ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹‰ÝÍÑ¥µ…Ñ½Èì(€€€€€€€¥˜€ …‰ÝÍÑ¥µ…Ñ½È¤ì(€€€€€€€€€É•ÑÕÉ¸9…8ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸‰ÝÍÑ¥µ…Ñ½È¹•ÑÍÑ¥µ…Ñ” ¤ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”¤ì(€€€€€€€Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹É•Í•ÑÍÑ¥µ…Ñ½È¡…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰…‰ÉÝµ…•™…Õ±ÑÍÑ¥µ…Ñ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È‰ÝÍÑ¥µ…Ñ½È€ôÑ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹‰ÝÍÑ¥µ…Ñ½Èì(€€€€€€€¥˜€ …‰ÝÍÑ¥µ…Ñ½È¤ì(€€€€€€€€€É•ÑÕÉ¸9…8ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸‰ÝÍÑ¥µ…Ñ½È¹‘•™…Õ±ÑÍÑ¥µ…Ñ”ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¥µ”Ñ¼™¥ÉÍÐ‰åÑ”•ÍÑ¥µ…Ñ”(€€€€€€€¨ÑåÁ”í¹Õµ‰•Éô(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÑÑ™‰ÍÑ¥µ…Ñ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È‰ÝÍÑ¥µ…Ñ½È€ôÑ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹‰ÝÍÑ¥µ…Ñ½Èì(€€€€€€€¥˜€ …‰ÝÍÑ¥µ…Ñ½È¤ì(€€€€€€€€€É•ÑÕÉ¸9…8ì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸‰ÝÍÑ¥µ…Ñ½È¹•ÑÍÑ¥µ…Ñ•QQ ¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…á!‘Á1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}µ…á!‘Á1•Ù•°ì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€¥˜€¡¥Í!‘Á1•Ù•°¡Ù…±Õ”¤€˜˜Ñ¡¥Ì¹}µ…á!‘Á1•Ù•°€„ôôÙ…±Õ”¤ì(€€€€€€€€€Ñ¡¥Ì¹}µ…á!‘Á1•Ù•°€ôÙ…±Õ”ì(€€€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹¡•­5…áÕÑ½UÁ‘…Ñ• ¤ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨QÉÕ”Ý¡•¸…ÕÑ½µ…Ñ¥Œ±•Ù•°Í•±•Ñ¥½¸•¹…‰±•(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…ÕÑ½1•Ù•±¹…‰±•ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹µ…¹Õ…±1•Ù•°€ôôô€´Äì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨1•Ù•°Í•Ðµ…¹Õ…±±ä€¡¥˜…¹ä¤(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰µ…¹Õ…±1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹µ…¹Õ…±1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨µ¥¸±•Ù•°Í•±•Ñ…‰±”¥¸…ÕÑ¼µ½‘”…½É‘¥¹œÑ¼½¹™¥œ¹µ¥¹ÕÑ½	¥ÑÉ…Ñ”(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰µ¥¹ÕÑ½1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€µ¥¹ÕÑ½	¥ÑÉ…Ñ”€ôÑ¡¥Ì¹½¹™¥œ¹µ¥¹ÕÑ½	¥ÑÉ…Ñ”ì(€€€€€€€¥˜€ …±•Ù•±Ì¤É•ÑÕÉ¸€Àì(€€€€€€€Ù…È±•¸€ô±•Ù•±Ì¹±•¹Ñ ì(€€€€€€€™½È€¡Ù…È¤€ô€Àì¤€ð±•¸ì¤¬¬¤ì(€€€€€€€€€¥˜€¡±•Ù•±Ím¥t¹µ…á	¥ÑÉ…Ñ”€øôµ¥¹ÕÑ½	¥ÑÉ…Ñ”¤ì(€€€€€€€€€€€É•ÑÕÉ¸¤ì(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸€Àì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨µ…à±•Ù•°Í•±•Ñ…‰±”¥¸…ÕÑ¼µ½‘”…½É‘¥¹œÑ¼…ÕÑ½1•Ù•±…ÁÁ¥¹œ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰µ…áÕÑ½1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È±•Ù•±Ì€ôÑ¡¥Ì¹±•Ù•±Ì°(€€€€€€€€€…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ôÑ¡¥Ì¹…ÕÑ½1•Ù•±…ÁÁ¥¹œ°(€€€€€€€€€µ…á!‘Á1•Ù•°€ôÑ¡¥Ì¹µ…á!‘Á1•Ù•°ì(€€€€€€€Ù…Èµ…áÕÑ½1•Ù•°ì(€€€€€€€¥˜€¡…ÕÑ½1•Ù•±…ÁÁ¥¹œ€ôôô€´Ä€˜˜±•Ù•±Ì€„ô¹Õ±°€˜˜±•Ù•±Ì¹±•¹Ñ ¤ì(€€€€€€€€€µ…áÕÑ½1•Ù•°€ô±•Ù•±Ì¹±•¹Ñ €´€Äì(€€€€€€€ô•±Í”ì(€€€€€€€€€µ…áÕÑ½1•Ù•°€ô…ÕÑ½1•Ù•±…ÁÁ¥¹œì(€€€€€€€ô(€€€€€€€¥˜€¡µ…á!‘Á1•Ù•°¤ì(€€€€€€€€€™½È€¡Ù…È¤€ôµ…áÕÑ½1•Ù•°ì¤´´ì¤ì(€€€€€€€€€€€Ù…È¡‘Á1•Ù•°€ô±•Ù•±Ím¥t¹…ÑÑÉÍl!@µ1Y0tì(€€€€€€€€€€€¥˜€¡¡‘Á1•Ù•°€˜˜¡‘Á1•Ù•°€ðôµ…á!‘Á1•Ù•°¤ì(€€€€€€€€€€€€€É•ÑÕÉ¸¤ì(€€€€€€€€€€€ô(€€€€€€€€€ô(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸µ…áÕÑ½1•Ù•°ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰™¥ÉÍÑÕÑ½1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹™¥ÉÍÑÕÑ½1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¹•áÐ…ÕÑ½µ…Ñ¥…±±äÍ•±•Ñ•ÅÕ…±¥Ñä±•Ù•°(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰¹•áÑÕÑ½1•Ù•°ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹¹•áÑÕÑ½1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Ñ¡¥ÌÍ•ÑÑ•È¥ÌÕÍ•Ñ¼™½É”¹•áÐ…ÕÑ¼±•Ù•°¸(€€€€€€€¨Ñ¡¥Ì¥ÌÕÍ•™Õ°Ñ¼™½É”„ÍÝ¥Ñ ‘½Ý¸¥¸…ÕÑ¼µ½‘”è(€€€€€€€¨¥¸…Í”½˜±½…•ÉÉ½È½¸±•Ù•°8°¡±Ì¹©Ì…¸Í•Ð¹•áÑÕÑ½1•Ù•°Ñ¼8´Ä™½È•á…µÁ±”¤(€€€€€€€¨™½É•Ù…±Õ”¥ÌÙ…±¥™½È½¹”™É…µ•¹Ð¸ÕÁ½¸ÍÕ•ÍÍ™Õ°™É…œ±½…‘¥¹œ…Ð™½É•±•Ù•°°(€€€€€€€¨Ñ¡¥ÌÙ…±Õ”Ý¥±°‰”É•Í•ÑÑ•Ñ¼€´Ä‰ä	H½¹ÑÉ½±±•È¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡¹•áÑ1•Ù•°¤ì(€€€€€€€Ñ¡¥Ì¹…‰É½¹ÑÉ½±±•È¹¹•áÑÕÑ½1•Ù•°€ô¹•áÑ1•Ù•°ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”‘…Ñ•Ñ¥µ”Ù…±Õ”É•±…Ñ¥Ù”Ñ¼µ•‘¥„¹ÕÉÉ•¹ÑQ¥µ”™½ÈÑ¡”…Ñ¥Ù”±•Ù•°AÉ½É…´…Ñ”Q¥µ”¥˜ÁÉ•Í•¹Ð(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰Á±…å¥¹…Ñ”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹ÕÉÉ•¹ÑAÉ½É…µ…Ñ•Q¥µ”ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…¥¹½ÉÝ…É‘	Õ™™•É%¹™¼ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹•Ñ5…¥¹Ý‘	Õ™™•É%¹™¼ ¤ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰µ…á	Õ™™•É1•¹Ñ ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹µ…á	Õ™™•É1•¹Ñ ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰…±±Õ‘¥½QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ü…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¹…±±Õ‘¥½QÉ…­Ì€èmtì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”±¥ÍÐ½˜Í•±•Ñ…‰±”…Õ‘¥¼ÑÉ…­Ì(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…Õ‘¥½QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ü…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¹…Õ‘¥½QÉ…­Ì€èmtì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¥¹‘•à½˜Ñ¡”Í•±•Ñ•…Õ‘¥¼ÑÉ…¬€¡¥¹‘•à¥¸…Õ‘¥¼ÑÉ…¬±¥ÍÑÌ¤(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…Õ‘¥½QÉ…¬ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ü…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¹…Õ‘¥½QÉ…¬€è€´Äì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Í•±•ÑÌ…¸…Õ‘¥¼ÑÉ…¬°‰…Í•½¸¥ÑÌ¥¹‘•à¥¸…Õ‘¥¼ÑÉ…¬±¥ÍÑÌ(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡…Õ‘¥½QÉ…­%¤ì(€€€€€€€Ù…È…Õ‘¥½QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹…Õ‘¥½QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€¥˜€¡…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¤ì(€€€€€€€€€…Õ‘¥½QÉ…­½¹ÑÉ½±±•È¹…Õ‘¥½QÉ…¬€ô…Õ‘¥½QÉ…­%ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”½µÁ±•Ñ”±¥ÍÐ½˜ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì…É½ÍÌ…±°µ•‘¥„É½ÕÁÌ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰…±±MÕ‰Ñ¥Ñ±•QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€üÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹…±±MÕ‰Ñ¥Ñ±•QÉ…­Ì€èmtì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•Ð…±Ñ•É¹…Ñ”ÍÕ‰Ñ¥Ñ±”ÑÉ…­Ì±¥ÍÐ™É½´Á±…å±¥ÍÐ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•QÉ…­Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€üÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÍÕ‰Ñ¥Ñ±•QÉ…­Ì€èmtì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¥¹‘•à½˜Ñ¡”Í•±•Ñ•ÍÕ‰Ñ¥Ñ±”ÑÉ…¬€¡¥¹‘•à¥¸ÍÕ‰Ñ¥Ñ±”ÑÉ…¬±¥ÍÑÌ¤(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•QÉ…¬ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€üÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÍÕ‰Ñ¥Ñ±•QÉ…¬€è€´Äì(€€€€€ô°(€€€€€Í•Ðè(€€€€€€¼¨¨(€€€€€€€¨Í•±•Ð…¸ÍÕ‰Ñ¥Ñ±”ÑÉ…¬°‰…Í•½¸¥ÑÌ¥¹‘•à¥¸ÍÕ‰Ñ¥Ñ±”ÑÉ…¬±¥ÍÑÌ(€€€€€€€¨¼(€€€€€™Õ¹Ñ¥½¸Í•Ð¡ÍÕ‰Ñ¥Ñ±•QÉ…­%¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¤ì(€€€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÍÕ‰Ñ¥Ñ±•QÉ…¬€ôÍÕ‰Ñ¥Ñ±•QÉ…­%ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨]¡•Ñ¡•ÈÍÕ‰Ñ¥Ñ±”‘¥ÍÁ±…ä¥Ì•¹…‰±•½È¹½Ð(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰µ•‘¥„ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹}µ•‘¥„ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€É•ÑÕÉ¸ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€üÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…ä€è™…±Í”ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¹…‰±”½‘¥Í…‰±”ÍÕ‰Ñ¥Ñ±”‘¥ÍÁ±…äÉ•¹‘•É¥¹œ(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Ù…±Õ”¤ì(€€€€€€€Ù…ÈÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È€ôÑ¡¥Ì¹ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•Èì(€€€€€€€¥˜€¡ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¤ì(€€€€€€€€€ÍÕ‰Ñ¥Ñ±•QÉ…­½¹ÑÉ½±±•È¹ÍÕ‰Ñ¥Ñ±•¥ÍÁ±…ä€ôÙ…±Õ”ì(€€€€€€€ô(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•Ðµ½‘”™½È1½Üµ1…Ñ•¹ä!1L±½…‘¥¹œ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±½Ý1…Ñ•¹å5½‘”ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹½¹™¥œ¹±½Ý1…Ñ•¹å5½‘”ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨¹…‰±”½‘¥Í…‰±”1½Üµ1…Ñ•¹ä!1LÁ…ÉÐÁ±…å±¥ÍÐ…¹Í•µ•¹Ð±½…‘¥¹œ°…¹ÍÑ…ÉÐ±¥Ù”ÍÑÉ•…µÌ…ÐÁ±…å±¥ÍÐAIPµ!=1µ	,É…Ñ¡•ÈÑ¡…¸!=1µ	,¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡µ½‘”¤ì(€€€€€€€Ñ¡¥Ì¹½¹™¥œ¹±½Ý1…Ñ•¹å5½‘”€ôµ½‘”ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨A½Í¥Ñ¥½¸€¡¥¸Í•½¹‘Ì¤½˜±¥Ù”Íå¹ŒÁ½¥¹Ð€¡¥”•‘”½˜±¥Ù”Á½Í¥Ñ¥½¸µ¥¹ÕÌÍ…™•Ñä‘•±…ä‘•™¥¹•‰ä¡±Ì¹½¹™¥œ¹±¥Ù•Må¹ÕÉ…Ñ¥½¹€¤(€€€€€€€¨É•ÑÕÉ¹Ì¹Õ±°ÁÉ¥½ÈÑ¼±½…‘¥¹œ±¥Ù”A±…å±¥ÍÐ(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±¥Ù•Må¹A½Í¥Ñ¥½¸ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹±¥Ù•Må¹A½Í¥Ñ¥½¸ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨ÍÑ¥µ…Ñ•Á½Í¥Ñ¥½¸€¡¥¸Í•½¹‘Ì¤½˜±¥Ù”•‘”€¡¥”•‘”½˜±¥Ù”Á±…å±¥ÍÐÁ±ÕÌÑ¥µ”Íå¹ŒÁ±…å±¥ÍÐ…‘Ù…¹•¤(€€€€€€€¨É•ÑÕÉ¹Ì€À‰•™½É”™¥ÉÍÐÁ±…å±¥ÍÐ¥Ì±½…‘•(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰±…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹±…Ñ•¹äì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨µ…á¥µÕ´‘¥ÍÑ…¹”™É½´Ñ¡”•‘”‰•™½É”Ñ¡”Á±…å•ÈÍ••­Ì™½ÉÝ…ÉÑ¼¡±Ì¹±¥Ù•Må¹A½Í¥Ñ¥½¹€(€€€€€€€¨½¹™¥ÕÉ•ÕÍ¥¹œ±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹½Õ¹Ñ€€¡µÕ±Ñ¥Á±”½˜Ñ…É•Ð‘ÕÉ…Ñ¥½¸¤½È±¥Ù•5…á1…Ñ•¹åÕÉ…Ñ¥½¹€(€€€€€€€¨É•ÑÕÉ¹Ì€À‰•™½É”™¥ÉÍÐÁ±…å±¥ÍÐ¥Ì±½…‘•(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰µ…á1…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹µ…á1…Ñ•¹äì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Ñ…É•Ð‘¥ÍÑ…¹”™É½´Ñ¡”•‘”…Ì…±Õ±…Ñ•‰äÑ¡”±…Ñ•¹ä½¹ÑÉ½±±•È(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰Ñ…É•Ñ1…Ñ•¹äˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹Ñ…É•Ñ1…Ñ•¹äì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡±…Ñ•¹ä¤ì(€€€€€€€Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹Ñ…É•Ñ1…Ñ•¹ä€ô±…Ñ•¹äì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Ñ¡”É…Ñ”…ÐÝ¡¥ Ñ¡”•‘”½˜Ñ¡”ÕÉÉ•¹Ð±¥Ù”Á±…å±¥ÍÐ¥Ì…‘Ù…¹¥¹œ½È€Ä¥˜Ñ¡•É”¥Ì¹½¹”(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰‘É¥™Ðˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±…Ñ•¹å½¹ÑÉ½±±•È¹‘É¥™Ðì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨Í•ÐÑ¼ÑÉÕ”Ý¡•¸ÍÑ…ÉÑ1½…¥Ì…±±•‰•™½É”59%MQ}AIM•Ù•¹Ð(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰™½É•MÑ…ÉÑ1½…ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹ÍÑÉ•…µ½¹ÑÉ½±±•È¹™½É•MÑ…ÉÑ1½…ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨½¹Ñ•¹ÑMÑ••É¥¹œÁ…Ñ¡Ý…åÌ•ÑÑ•È(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰Á…Ñ¡Ý…åÌˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹Á…Ñ¡Ý…åÌì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨½¹Ñ•¹ÑMÑ••É¥¹œÁ…Ñ¡Ý…åAÉ¥½É¥Ñä•ÑÑ•È½Í•ÑÑ•È(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰Á…Ñ¡Ý…åAÉ¥½É¥Ñäˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹Á…Ñ¡Ý…åAÉ¥½É¥Ñäì(€€€€€ô°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡Á…Ñ¡Ý…åAÉ¥½É¥Ñä¤ì(€€€€€€€Ñ¡¥Ì¹±•Ù•±½¹ÑÉ½±±•È¹Á…Ñ¡Ý…åAÉ¥½É¥Ñä€ôÁ…Ñ¡Ý…åAÉ¥½É¥Ñäì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨É•ÑÕÉ¹ÌÑÉÕ”Ý¡•¸…±°M½ÕÉ•	Õ™™•ÉÌ…É”‰Õ™™•É•Ñ¼Ñ¡”•¹(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰‰Õ™™•É•‘Q½¹ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘‰Õ™™•É½¹ÑÉ½±±”ì(€€€€€€€É•ÑÕÉ¸€„„ ¡}Ñ¡¥Ì‘‰Õ™™•É½¹ÑÉ½±±”€ôÑ¡¥Ì¹‰Õ™™•É½¹ÑÉ½±±•È¤€„ô¹Õ±°€˜˜}Ñ¡¥Ì‘‰Õ™™•É½¹ÑÉ½±±”¹‰Õ™™•É•‘Q½¹¤ì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨É•ÑÕÉ¹Ì%¹Ñ•ÉÍÑ¥Ñ¥…±ÌAÉ½É…´5…¹…•È(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰¥¹Ñ•ÉÍÑ¥Ñ¥…±Í5…¹…•Èˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€Ù…È}Ñ¡¥Ì‘¥¹Ñ•ÉÍÑ¥Ñ¥…±Í¼ì(€€€€€€€É•ÑÕÉ¸€ ¡}Ñ¡¥Ì‘¥¹Ñ•ÉÍÑ¥Ñ¥…±Í¼€ôÑ¡¥Ì¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í½¹ÑÉ½±±•È¤€ôô¹Õ±°€üÙ½¥€À€è}Ñ¡¥Ì‘¥¹Ñ•ÉÍÑ¥Ñ¥…±Í¼¹¥¹Ñ•ÉÍÑ¥Ñ¥…±Í5…¹…•È¤ñð¹Õ±°ì(€€€€€ô(€€€õt°mì(€€€€€­•äè€‰Ù•ÉÍ¥½¸ˆ°(€€€€€•Ðè(€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”Ù¥‘•¼µ‘•Ø½¡±Ì¹©ÌÁ…­…”Ù•ÉÍ¥½¸¸(€€€€€€€¨¼(€€€€€™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ù•ÉÍ¥½¸ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰Ù•¹ÑÌˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸Ù•¹ÑÌì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰5•Ñ…‘…Ñ…M¡•µ„ˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸5•Ñ…‘…Ñ…M¡•µ„ì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÉÉ½ÉQåÁ•Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸ÉÉ½ÉQåÁ•Ìì(€€€€€ô(€€€ô°ì(€€€€€­•äè€‰ÉÉ½É•Ñ…¥±Ìˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€É•ÑÕÉ¸ÉÉ½É•Ñ…¥±Ìì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨•ÐÑ¡”‘•™…Õ±Ð½¹™¥ÕÉ…Ñ¥½¸…ÁÁ±¥•Ñ¼¹•Ü¥¹ÍÑ…¹•Ì¸(€€€€€€€¨¼(€€€ô°ì(€€€€€­•äè€‰•™…Õ±Ñ½¹™¥œˆ°(€€€€€•Ðè™Õ¹Ñ¥½¸•Ð ¤ì(€€€€€€€¥˜€ …!±Ì¹‘•™…Õ±Ñ½¹™¥œ¤ì(€€€€€€€€€É•ÑÕÉ¸¡±Í•™…Õ±Ñ½¹™¥œì(€€€€€€€ô(€€€€€€€É•ÑÕÉ¸!±Ì¹‘•™…Õ±Ñ½¹™¥œì(€€€€€ô((€€€€€€¼¨¨(€€€€€€€¨I•Á±…”Ñ¡”‘•™…Õ±Ð½¹™¥ÕÉ…Ñ¥½¸…ÁÁ±¥•Ñ¼¹•Ü¥¹ÍÑ…¹•Ì¸(€€€€€€€¨¼°(€€€€€Í•Ðè™Õ¹Ñ¥½¸Í•Ð¡‘•™…Õ±Ñ½¹™¥œ¤ì(€€€€€€€!±Ì¹‘•™…Õ±Ñ½¹™¥œ€ô‘•™…Õ±Ñ½¹™¥œì(€€€€€ô(€€€õt¤ì(€ô ¤ì(€!±Ì¹‘•™…Õ±Ñ½¹™¥œ€ôÙ½¥€Àì((€É•ÑÕÉ¸!±Ìì()ô¤¤ì)ô¤¡™…±Í”¤ì(¼¼ŒÍ½ÕÉ•5…ÁÁ¥¹UI0õ¡±Ì¹©Ì¹µ…À(