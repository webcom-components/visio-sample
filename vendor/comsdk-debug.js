(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ComSDK"] = factory();
	else
		root["ComSDK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Polyfills for WebRTC
	
	// TODO 19k minified, we can do less maybe
	/*eslint-disable no-unused-vars*/
	//import adapterjs from 'adapterjs';
	'use strict';
	
	var _createClass = __webpack_require__(1)['default'];
	
	var _classCallCheck = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _adapter = __webpack_require__(7);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	/*eslint-enable no-unused-vars*/
	
	var _actions = __webpack_require__(8);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _datarefs = __webpack_require__(9);
	
	var _datarefs2 = _interopRequireDefault(_datarefs);
	
	var _reach = __webpack_require__(10);
	
	var _reach2 = _interopRequireDefault(_reach);
	
	var _room = __webpack_require__(22);
	
	var _room2 = _interopRequireDefault(_room);
	
	var _webrtcmngrJs = __webpack_require__(24);
	
	var _webrtcmngrJs2 = _interopRequireDefault(_webrtcmngrJs);
	
	var ComSDK = (function () {
		function ComSDK() {
			var url = arguments.length <= 0 || arguments[0] === undefined ? 'http://webcom.orange.com/base/webrtc' : arguments[0];
	
			_classCallCheck(this, ComSDK);
	
			this.datarefs = (0, _datarefs2['default'])(url);
			this.webrtcmngr = (0, _webrtcmngrJs2['default'])(this.datarefs);
		}
	
		_createClass(ComSDK, [{
			key: 'Room',
			value: function Room() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				return _room2['default'].apply(undefined, args.concat([this.datarefs, this.webrtcmngr]));
			}
		}, {
			key: 'Reach',
			value: function Reach() {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}
	
				return _reach2['default'].apply(undefined, args.concat([this.datarefs]));
			}
		}], [{
			key: 'version',
			get: function get() {
				return '0.0.1';
			}
		}, {
			key: 'actions',
			get: function get() {
				return _actions2['default'];
			}
		}]);
	
		return ComSDK;
	})();
	
	exports['default'] = ComSDK;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(2)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
	 * #%L
	 * Webcom service
	 *
	 * Module name: com.orange.webrtc:webcom-service
	 * Version:     0.0.1-SNAPSHOT
	 * Created:     2014-04-01
	 * %%
	 * Copyright (C) 2013 - 2015 Orange Labs
	 * %%
	 * This software is confidential and proprietary information of Orange.
	 * You shall not disclose such Confidential Information and shall use it only in
	 * accordance with the terms of the agreement you entered into.
	 * Unauthorized copying of this file, via any medium is strictly prohibited.
	 *
	 * If you are Orange employee you shall use this software in accordance with
	 * the Orange Source Charter (http://opensource.itn.ftgroup/index.php/Orange_Source).
	 * #L%
	 */
	
	/* global MediaStream, webkitRTCPeerConnection, mozRTCPeerConnection, mozRTCIceCandidate, mozRTCSessionDescription */
	
	/**
	 * @file adapt.js - JS file to use so as to get some adapted methods
	 * @description This file provides methods to handle ICE servers, user medias or RTC Peer Connection for example. Media stream
	 * methods are also provided so as to attach, rreattach or remove existing streams.
	 * @author Webcom
	 * @copyright Orange Labs (C) 2013 - 2014
	 * @licence Orange
	 *
	 * Version doc : 1.3.0
	 */
	
	/* ********* *
	 * Variables *
	 * ********* */
	
	/**
	 * @description The RTC Peer Connection to use. This object provides the channels to use
	 * to establish the communication and send data between participants. This object
	 * is available only on up to date web browsers (Chrome 31, Firefox 35, Opera 27).
	 */
	'use strict';
	
	window.RTCPeerConnection = null;
	/**
	 * @description The user media picked from the web browser containing the video and audio streams gotten from the
	 * webcams and microphones. This media retrievment is available only for modern web browsers since Firefox 17, Chrome 21 or Opera 18.
	 */
	window.getUserMedia = null;
	/*
	 * @description Function to use to attach the media stream which will be integrated to an HTML object as a video.
	 */
	window.attachMediaStream = null;
	/*
	 * @description Function to use to reattach the media stream
	 */
	window.reattachMediaStream = null;
	/**
	 * @description The detected browser suporting WebRTC (Firefox or Chrome)
	 */
	window.webrtcDetectedBrowser = null;
	/**
	 * @description The detected version of the WebRTC capable detected brower. This version will be used to manage networks aspects like TURN.
	 */
	window.webrtcDetectedVersion = null;
	
	/**
	 * Fix ice server config object
	 * @param iceServer
	 */
	function fixIceServer(iceServer) {
		if (iceServer.hasOwnProperty('urls')) {
			iceServer.url = iceServer.urls;
			delete iceServer.urls;
		}
		if (iceServer.hasOwnProperty('url') && iceServer.url.toLowerCase().startsWith('turns') && navigator.mozGetUserMedia) {
			console.warn('(webcomSDK::maybeFixConfiguration) ' + 'turns detected on firefox -> ignore this entry');
		}
	}
	
	/**
	 * Fix peer connection configuration issues if needed, specially about ICE servers
	 * @param pcConfig - The peer connection configuration to fix if not null
	 */
	function maybeFixConfiguration(pcConfig) {
		if (pcConfig === null) {
			return;
		}
	
		if (pcConfig.iceServers && pcConfig.iceServers.length > 0) {
			var mTempsServers = [];
			for (var i = pcConfig.iceServers.length - 1; i >= 0; i--) {
				var iceServer = pcConfig.iceServers[i];
				fixIceServer(iceServer);
				mTempsServers.push(iceServer);
			}
			pcConfig.iceServers = mTempsServers;
		}
	}
	
	/**
	 * Returns turn config object
	 * @param {String} url
	 * @param {String} username
	 * @param {String} password
	 * @param {Boolean} legacy
	 * @returns {Object}
	 */
	function createTurnServerConfig(url, username, password) {
		var legacy = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
		var iceServer = undefined;
	
		if (legacy) {
			// Create iceServer with turn url.
			// Ignore the transport parameter from TURN url for FF version <=27.
			var turn_url_parts = url.split('?');
			// Return null for createIceServer if transport=tcp.
			if (turn_url_parts.length === 1 || turn_url_parts[1].indexOf('transport=udp') === 0) {
				iceServer = {
					url: turn_url_parts[0],
					credential: password,
					username: username
				};
			}
		} else {
			// FF 27 and above supports transport parameters in TURN url,
			// So passing in the full url to create iceServer.
			iceServer = {
				url: url,
				credential: password,
				username: username
			};
		}
	
		return iceServer;
	}
	
	/* ********* *
	 * Scripting *
	 * ********* */
	
	/*
	 * If the web browser in use is Firefox
	 */
	if (navigator.mozGetUserMedia) {
		window.webrtcDetectedBrowser = 'firefox';
	
		window.webrtcDetectedVersion = parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1], 10);
	
		/**
	  * The RTCPeerConnection objet based on mozkit.
	  * If needed, the configuration of the peer connection will be fixed.
	  * @param pcConfig - The peer connection config
	  * @param pcConstraints - The peer connection constraints
	  */
		window.RTCPeerConnection = function (pcConfig, pcConstraints) {
			// .urls is not supported in FF yet.
			maybeFixConfiguration(pcConfig);
			return new mozRTCPeerConnection(pcConfig, pcConstraints);
		};
	
		// The RTCSessionDescription object.
		window.RTCSessionDescription = mozRTCSessionDescription;
	
		// The RTCIceCandidate object.
		window.RTCIceCandidate = mozRTCIceCandidate;
	
		// Get UserMedia (only difference is the prefix).
		window.getUserMedia = navigator.mozGetUserMedia.bind(navigator);
		navigator.getUserMedia = getUserMedia;
	
		/**
	  * Creates the ICE server for the URL for Firefox.
	  * The STUN and TURN servers will be considered. In case of a TURN server is in use, credentials and usernames will be got.
	  * @param {string} url - The url to use to get the ICE server
	  * @param {string} username - The username
	  * @param {string} password - The password
	  */
		window.createIceServer = function (url, username, password) {
			var iceServer = null;
			var url_parts = url.split(':');
			if (url_parts[0].indexOf('stun') === 0) {
				// Create iceServer with stun url.
				iceServer = {
					url: url
				};
			} else if (url_parts[0].indexOf('turn') === 0) {
				iceServer = createTurnServerConfig(url, username, password, window.webrtcDetectedVersion < 27);
			}
			return iceServer;
		};
	
		/**
	  * Creates the ICE servers from some URLs. The STUN and TURN severs constraints will be handled.
	  * @param {array} urls - The urls to use to get the ICE server
	  * @param {string} username - The username
	  * @param {string} password - The password
	  */
		window.createIceServers = function (urls, username, password) {
			var iceServers = [];
			// Use .url for FireFox.
			for (var i = 0; i < urls.length; i++) {
				var iceServer = window.createIceServer(urls[i], username, password);
				if (iceServer !== null) {
					iceServers.push(iceServer);
				}
			}
			return iceServers;
		};
	
		/**
	  * Detach the media stream from the element.
	  * The element will have its src content changed to null and will be paused.
	  * @param {video tag} element - The video tag where the stream is displayed
	  */
		window.detachMediaStream = function (element) {
			if (element) {
				element.mozSrcObject = null;
				element.pause();
			}
		};
	
		/**
	  * Attach a media stream to an element.
	  * The src attribute of the element will be defined with the stream and will be played.
	  * @param {video tag} element - The video tag where the stream is displayed
	  * @param stream - The stream to attach to the element
	  */
		window.attachMediaStream = function (element, stream) {
			try {
				if (element && stream) {
					element.mozSrcObject = stream;
					if (element.play && typeof element.play == 'function') {
						element.play();
					} else {
						console.warn('(webcomSDK::attachMediaStream)element.play not available');
					}
				} else {
					console.error('webcomSDK::attachMediaStream->parameters not valid');
				}
			} catch (e) {
				console.error('(webcomSDK::attachMediaStream)Exception=' + e);
			}
		};
	
		/**
	  * Attach again a media stream to an element.
	  * The "from" element will have its src value copied to the "to" object before playing it.
	  * @param {video tag} to - The video tag where the stream should be put
	  * @param {video tag} from - The video tag where the stream should be taken
	  */
		window.reattachMediaStream = function (to, from) {
			if (to && from) {
				to.mozSrcObject = from.mozSrcObject;
				to.play();
			} else {
				console.error('webcomSDK::reattachMediaStream->parameters not valid');
			}
		};
	
		// Fake get{Video,Audio}Tracks
		if (!MediaStream.prototype.getVideoTracks) {
			MediaStream.prototype.getVideoTracks = function () {
				return [];
			};
		}
	
		if (!MediaStream.prototype.getAudioTracks) {
			MediaStream.prototype.getAudioTracks = function () {
				return [];
			};
		}
	
		/*
	  * If the web browser in use is Chrome
	  */
	} else if (navigator.webkitGetUserMedia) {
			window.webrtcDetectedBrowser = 'chrome';
			window.webrtcDetectedVersion = parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10);
	
			/**
	   * Creates the ICE server from the URL and handles STUN / TURN servers constraints by retrieving credentials and usernames if needed.
	   * @param {string} url - The url to use to get the ICE server
	   * @param {string} username - The username
	   * @param {string} password - The password
	   */
			window.createIceServer = function (url, username, password) {
				var iceServer = null;
				var url_parts = url.split(':');
				if (url_parts[0].indexOf('stun') === 0) {
					// Create iceServer with stun url.
					iceServer = {
						url: url
					};
				} else if (url_parts[0].indexOf('turn') === 0) {
					// Chrome M28 & above uses below TURN format.
					iceServer = createTurnServerConfig(url, password, username);
				}
				return iceServer;
			};
	
			/**
	   * Creates the ICE servers from the URL for Chrome M34 and above
	   * @param {array} urls - The urls to use to get the ICE server
	   * @param {string} username - The username
	   * @param {string} password - The password
	   */
			window.createIceServers = function (urls, username, password) {
				var iceServers = [];
				if (window.webrtcDetectedVersion >= 34) {
					// .urls is supported since Chrome M34.
					iceServers = {
						urls: urls,
						credential: password,
						username: username
					};
				} else {
					for (var i = 0; i < urls.length; i++) {
						var iceServer = window.createIceServer(urls[i], username, password);
						if (iceServer !== null) {
							iceServers.push(iceServer);
						}
					}
				}
				return iceServers;
			};
	
			/**
	   * The RTC Peer Connection object. If needed, its peer connection configuration will be fixed
	   * @param pcConfig - The peer connection config
	   * @param pcConstraints - The peer connection constraints
	   */
			window.RTCPeerConnection = function (pcConfig, pcConstraints) {
				// .urls is supported since Chrome M34.
				if (window.webrtcDetectedVersion < 34) {
					maybeFixConfiguration(pcConfig);
				}
				return new webkitRTCPeerConnection(pcConfig, pcConstraints);
			};
	
			// Get UserMedia (only difference is the prefix).
			// Code from Adam Barth.
			window.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
			navigator.getUserMedia = getUserMedia;
	
			//  // Attach a media stream to an element.
			//  attachMediaStream = function(element, stream) {
			//    if (typeof element.srcObject !== 'undefined') {
			//      element.srcObject = stream;
			//    } else if (typeof element.mozSrcObject !== 'undefined') {
			//      element.mozSrcObject = stream;
			//    } else if (typeof element.src !== 'undefined') {
			//      element.src = URL.createObjectURL(stream);
			//    } else {
			//      console.log('Error attaching stream to element.');
			//    }
			//  };
	
			/**
	   * Attach a media stream to an element.
	   * The src attribute of the element will be defined with the stream and will be played.
	   * @param {video tag} element - The video tag where the stream is displayed
	   * @param stream - The stream to attach to the element
	   */
			window.attachMediaStream = function (element, stream) {
				try {
					if (element && stream) {
						// element.src = webkitURL.createObjectURL(stream);
						element.src = URL.createObjectURL(stream);
						element.autoplay = true;
					} else {
						console.error('webcomSDK::attachMediaStream ->parameters not valid');
					}
				} catch (e) {
					console.error('(webcomSDK::attachMediaStream)Exception=' + e);
				}
			};
	
			/**
	   * Detach the media stream from the element by assinged null value to its src attribute.
	   * @param {video tag} element - The video tag where the stream is displayed
	   */
			window.detachMediaStream = function (element) {
				if (element) {
					if (typeof element.srcObject !== 'undefined') {
						element.srcObject = '';
					} else if (typeof element.mozSrcObject !== 'undefined') {
						element.mozSrcObject = '';
					} else if (typeof element.src !== 'undefined') {
						element.src = '';
					} else {
						console.log('Error attaching stream to element.');
					}
				}
			};
	
			/**
	   * Attach again a media stream to an element.
	   * The "from" element will have its src value copied to the "to" object before playing it.
	   * @param {video tag} to - The video tag where the stream should be put
	   * @param {video tag} from - The video tag where the stream should be taken
	   */
			window.reattachMediaStream = function (to, from) {
				if (to && from) {
					to.src = from.src;
				} else {
					console.error('webcomSDK::reattachMediaStream media stream->parameters not valid');
				}
			};
		} else {
			throw new Error('Browser does not appear to be WebRTC-capable');
		}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = {
	
		/**
	  * Audio communication service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_AUDIO: 'audio',
		/**
	  * Video communication service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_VIDEO: 'video',
		/**
	  * Chat communication service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_CHAT: 'chat',
		/**
	  * Audio and video communication service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_AUDIO_VIDEO: 'audio-video',
		/**
	  * Screen-sharing service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_SCREEN_SHARING: 'screen-sharing',
		/**
	  * Call communication service
	  * @constant
	  * @type {string}
	  */
		ACTION_TYPE_CALL: 'call'
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * @file datarefs.js - JS file modelizing a dataref, i.e. a pointer to the Webcom xwith dedicated nodes for rooms, reach service and WebRTC communications.
	 * @author Webcom
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	exports['default'] = function (WEBCOMBASE_URL) {
	
		/**
	  * @description The datastore in the main object which can be considered has the root node of the base.
	  * It contains the instanciated Webcom defined by a WEBCOMBASE_URL
	  * The main nodes containing the rooms, the SIP phone numbers and the reach and WebRTC data are children of this node.
	  */
		var _datastore = null;
		/**
	  * @description A node containing all the rooms of the communication system.
	  * Each "room" node possesses the participants and the exchanged instant messages for example.
	  * In the database, this node is identified by "roomsList".
	  */
		var _rooms = null;
		/**
	  * @description A node containing all the data about the reach service used to put in relation users.
	  * In the database, this node is identified by "reach".
	  */
		var _reach = null;
		/**
	  * @description A node containing all the data about the WebRTC feature.
	  * In the database, this node is identified by "webrtc".
	  */
		var _webrtc = null;
		/**
	  * @description A node containing all the data about the SIP phone numbers.
	  * In the database, this node is identified by "sipPhoneNumbers".
	  */
		var _sipPhoneNumbers = null;
	
		/**
	  * The initialization function which instantiates the Webcom stored in the data store.
	  * All the children nodesnare defines here.
	  */
	
		/**
	  * Defines the children nodes, i.e. creates for each of them a dedicated node in the database
	  * under the main node (data store). Created nodes are "roomsList", "reach", "webrtc", "sipPhoneNumbers".
	  */
		function _initChildren() {
			_rooms = _datastore.child('roomsList');
			_reach = _datastore.child('reach');
			_webrtc = _datastore.child('webrtc');
			_sipPhoneNumbers = _datastore.child('sipPhoneNumbers');
		}
	
		/**
	  * Defines the Webcom URL and reinit the children.
	  * @param {string} p_webcombase_url - The URL of the Webcom
	  */
		function _setWebcomBaseUrl(p_webcombase_url) {
			_datastore = new Webcom(p_webcombase_url);
			_initChildren();
		}
	
		/**
	  * return the Webcom URL.
	  */
		function _getWebcomBaseUrl() {
			if (_datastore) {
				return _datastore.toString();
			} else {
				return undefined;
			}
		}
	
		/**
	  * Defines the datastore and reinit the children.
	  * @param {Webcom} p_datastore - A Webcom object which is the new data store
	  */
		function _setDatastore(p_datastore) {
			_datastore = p_datastore;
			_initChildren();
		}
	
		/**
	  * Returns the datastore
	  * @return {Webcom} - The data store as a Webcom
	  */
		function _getDatastore() {
			return _datastore;
		}
	
		/**
	  * Defines a new rooms node
	  * @param p_rooms - A node containing all the rooms
	  */
		function _setRooms(p_rooms) {
			_rooms = p_rooms;
		}
	
		/**
	  * Returns the root node of the rooms.
	  * @return - The node containing all the rooms list
	  */
		function _getRooms() {
			return _rooms;
		}
	
		/**
	  * Defines a new reach node
	  * @param p_reach - A node containing all the data about the reach service
	  */
		function _setReach(p_reach) {
			_reach = p_reach;
		}
	
		/**
	  * Returns the reach node of the rooms.
	  * @return - The node containing all the information about the reach service
	  */
		function _getReach() {
			return _reach;
		}
	
		/**
	  * Defines a new webrtc node
	  * @param p_webrtc - A node containing all the data about the WebRTC feature
	  */
		function _setWebrtc(p_webrtc) {
			_webrtc = p_webrtc;
		}
	
		/**
	  * Returns the WebRTC node
	  * @return - The node containig all the data about the WebRTC feature
	  */
		function _getWebrtc() {
			return _webrtc;
		}
	
		/**
	  * Defines a node containing the SIP phone numbers
	  * @param p_sipPhoneNumbers - The root node containing the SIP phone numbers
	  */
		function _setSipPhoneNumbers(p_sipPhoneNumbers) {
			_sipPhoneNumbers = p_sipPhoneNumbers;
		}
	
		/**
	  * Returns the root node containing the SIP phone numbers
	  * @return - The root node with the SIP numbers
	  */
		function _getSipPhoneNumbers() {
			return _sipPhoneNumbers;
		}
	
		(function _init() {
			_datastore = new Webcom(WEBCOMBASE_URL);
			_initChildren();
		})();
	
		return {
			/**
	   * Defines the Webcom URL and reinit the children.
	   * @param {string} p_webcombase_url - The URL of the Webcom
	   */
			setWebcomBaseUrl: function setWebcomBaseUrl(p_webcombase_url) {
				return _setWebcomBaseUrl(p_webcombase_url);
			},
			/**
	   * return the Webcom URL.
	  	 */
			getWebcomBaseUrl: function getWebcomBaseUrl() {
				return _getWebcomBaseUrl();
			},
			/**
	   * Defines the datastore and reinit the children.
	   * @param {Webcom} p_datastore - A Webcom object which is the new data store
	   */
			setDatastore: function setDatastore(p_datastore) {
				return _setDatastore(p_datastore);
			},
			/**
	   * Returns the datastore
	   * @return {Webcom} - The data store as a Webcom
	   */
			getDatastore: function getDatastore() {
				return _getDatastore();
			},
			/**
	   * Defines a new rooms node
	   * @param p_rooms - A node containing all the rooms
	   */
			setRooms: function setRooms(p_rooms) {
				return _setRooms(p_rooms);
			},
			/**
	   * Returns the root node of the rooms.
	   * @return - The node containing all the rooms list
	   */
			getRooms: function getRooms() {
				return _getRooms();
			},
			/**
	   * Defines a new reach node
	   * @param p_reach - A node containing all the data about the reach service
	   */
			setReach: function setReach(p_reach) {
				return _setReach(p_reach);
			},
			/**
	   * Returns the reach node of the rooms.
	   * @return - The node containing all the information about the reach service
	   */
			getReach: function getReach() {
				return _getReach();
			},
			/**
	   * Defines a new webrtc node
	   * @param p_webrtc - A node containing all the data about the WebRTC feature
	   */
			setWebrtc: function setWebrtc(p_webrtc) {
				return _setWebrtc(p_webrtc);
			},
			/**
	   * Returns the WebRTC node
	   * @return - The node containig all the data about the WebRTC feature
	   */
			getWebrtc: function getWebrtc() {
				return _getWebrtc();
			},
			/**
	   * Defines a node containing the SIP phone numbers
	   * @param p_sipPhoneNumbers - The root node containing the SIP phone numbers
	   */
			setSipPhoneNumbers: function setSipPhoneNumbers(p_sipPhoneNumbers) {
				return _setSipPhoneNumbers(p_sipPhoneNumbers);
			},
			/**
	   * Returns the root node containing the SIP phone numbers
	   * @return - The root node with the SIP numbers
	   */
			getSipPhoneNumbers: function getSipPhoneNumbers() {
				return _getSipPhoneNumbers();
			}
		};
	};
	
	module.exports = exports['default'];
	/**
	 * Represents a dataref with several nodes in it which are pointing to some locations in the database.
	 * The datarefs can be considered as a Webcom object pointing to a base URL. This node contains children nodes for
	 * reach service, rooms and WebRTC communications.
	 *
	 * Warning : when used with demo UI, this file is not imported:  demo UI hase its own configuration system (import json config with a php server module)
	 * These nodes are :
	 *       - rooms
	 *       - reach
	 *       - webrtc
	 *       - sipPhoneNumbers
	 *       - datastore, i.e. the Webcom object
	 * @constructor
	 */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file reach.js - JS file to use for the reach service. This service allows to create a dedicated room for users so as to provide them a communication suite.
	 * @author Webcom
	 */
	
	'use strict';
	
	var _Object$keys = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _utils = __webpack_require__(21);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	/**
	 * INVITE status : ongoing status
	 * @constant
	 * @type {string}
	 */
	var INVITATION_ONGOING = 'ONGOING';
	
	/**
	 * INVITE status : accepted status
	 * @constant
	 * @type {string}
	 */
	
	/**
	 * INVITE status : refused status
	 * @constant
	 * @type {string}
	 */
	var INVITATION_REJECTED = 'REJECTED';
	
	/**
	 * INVITE status : canceled status
	 * @constant
	 * @type {string}
	 */
	var INVITATION_CANCELED = 'CANCELED';
	
	/**
	 * DEVICE_STATUS_CONNETED status : connected status
	 * @constant
	 * @type {string}
	 */
	
	/**
	 * ROOM_STATUS_OPEN status : room is open / active
	 * @constant
	 * @type {string}
	 */
	var ROOM_STATUS_OPEN = 'OPEN';
	
	/**
	 * @constructor
	 * @description The reach object with its streams, flags and callbacks.
	 * This object is used so as to make in connection several users. The room Invites management (accept / refuse / cancel), the user management (add / remove) and
	 * the Invite are handled here.
	 * @param {string} p_me - The user identifier
	 */
	var reach = function reach(p_me, datarefs) {
	
		/**
	  * @description The user identifier. This identifier will be use to create a dedicated node in the database for this user.
	  */
		var me = p_me;
		/**
	  * @description The data ref pointer for the reach part. It can be considered as a pointer to the database to use to navigate into it and modify its content.
	  */
		var dataref = datarefs.getReach();
		/**
	  * @description Callback handling the user adding
	  */
		var onUserAddedCb = null;
		/**
	  * @description Callback handling the user changes
	  */
		var onUserChangedCb = null;
		/**
	  * @description Callback handling the user removal
	  */
		var onUserRemovedCb = null;
		/**
	  * @description Callback for new Invite received
	  */
		var newInviteCb = null;
		/**
	  * @description Callback for Invite received changes
	  */
		var onRoomInviteChangedCb = null;
	
		/**
	  * @description An array containing all outgoing Invite
	  */
		var mOutgoingInvites = [];
		/**
	  * @description An array containing all incoming Invitation
	  */
		var mIncomingInvitation = [];
		/**
	  * @description the timeout to reject automatically the Invite
	  */
		var automaticRejectTimeOut = null;
	
		/**
	  * @description the reason to reject automatically the Invite
	  */
		var automaticRejectReason = null;
	
		/**
	  * @description the current device Id
	  */
		var mDeviceId = null;
	
		/**
	 * Initialisation fonction. Updates the dataref about the user identifier in the user list :
	 * it will disconnect and reconnect it.
	 */
	
		/**
	  * check if a user is connected
	  * @param {string} p_userId - the user Id
	  * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
	  */
		function _isConnected(p_userId, p_cb) {
			console.log('(webcomSDK::reach::_isConnected)userId' + p_userId);
			var onUserConnectedCb = function onUserConnectedCb(snapshot) {
				var connected = snapshot.val() !== null;
				if (p_cb && typeof p_cb == 'function') p_cb(connected);
			};
			dataref.child('userList').child(p_userId).child('connectedList').once('value', onUserConnectedCb);
		}
	
		/**
	  * check if a user is register
	  * @param {string} p_userId - the user Id
	  * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
	  */
		function _isRegistered(p_userId, p_cb) {
			console.log('(webcomSDK::reach::_isRegistered)userId' + p_userId);
			var onUserRegisteredCb = function onUserRegisteredCb(snapshot) {
				var registered = snapshot.val() !== null;
				if (p_cb && typeof p_cb == 'function') {
					p_cb(registered);
				}
			};
			dataref.child('userList').child(p_userId).child('wasInsideReach').once('value', onUserRegisteredCb);
		}
	
		/**
	  * set the device status (DEVICE_STATUS_CONNECTED)
	  * @param {string} p_status - the new status
	  */
		function _setConnectedStatus(p_status) {
			if (mDeviceId) mDeviceId.child('status').set(p_status);
		}
	
		/**
	  * Defines the callback to trigger when a new user is added
	  * @param {function} p_cb - The callback to use
	  */
		function _setOnUserAdded(p_cb) {
			if (onUserAddedCb) {
				dataref.child('userList').off('child_added', onUserAddedCb);
				onUserAddedCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				onUserAddedCb = function (snapshot) {
					console.log('(webcomSDK::reach::onUserAddedCb)' + snapshot.name() + '=' + JSON.stringify(snapshot.val()));
					var obj = {};
					obj[snapshot.name()] = snapshot.val();
					p_cb(obj);
				};
				dataref.child('userList').on('child_added', onUserAddedCb);
			}
		}
		/**
	  * Defines the callback to trigger when the user has changed
	  * @param {function} p_cb - The callback to use
	  */
		function _setOnUserChanged(p_cb) {
			if (onUserChangedCb) {
				dataref.child('userList').off('child_changed', onUserChangedCb);
				onUserChangedCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				onUserChangedCb = function (snapshot) {
					console.log('(webcomSDK::reach::onUserChangedCb)' + snapshot.name() + '=' + JSON.stringify(snapshot.val()));
					var obj = {};
					obj[snapshot.name()] = snapshot.val();
					p_cb(obj);
				};
				dataref.child('userList').on('child_changed', onUserChangedCb);
			}
		}
		/**
	  * Defines the callback to trigger when a user has been removed.
	  * @param {function} p_cb - The callback to use
	  */
		function _setOnUserRemoved(p_cb) {
			if (onUserRemovedCb) {
				dataref.child('userList').off('child_removed', onUserRemovedCb);
				onUserRemovedCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				onUserRemovedCb = function (snapshot) {
					console.log('(webcomSDK::reach::onUserRemovedCb)' + snapshot.name() + '=' + JSON.stringify(snapshot.val()));
					var obj = {};
					obj[snapshot.name()] = snapshot.val();
					p_cb(obj);
				};
				dataref.child('userList').on('child_removed', onUserRemovedCb);
			}
		}
	
		/**
	  * Defines the callback to trigger when a room Invite has been received.
	  * Other callbacks will be triggered about Invite lists.
	  * @param {function} p_onNewRoomInviteCb - The callback triggers when a Invite is received (status = on going)
	  */
		function _setOnNewRoomInvitation(p_onNewRoomInviteCb) {
	
			if (newInviteCb) {
				dataref.child('invitationList').child(me).off('child_added', newInviteCb);
				newInviteCb = null;
			}
			if (p_onNewRoomInviteCb && typeof p_onNewRoomInviteCb == 'function') {
				newInviteCb = function (snapshot) {
					if (snapshot.val().status === INVITATION_ONGOING) {
						console.log('(webcomSDK::reach::_setOnNewRoomInvitation)new Invite received,id)' + snapshot.name() + ',content=' + JSON.stringify(snapshot.val()));
						var invitationId = snapshot.name();
						if (!mIncomingInvitation) mIncomingInvitation = [];
						if (mIncomingInvitation[invitationId]) {
							if (mIncomingInvitation[invitationId].timeout) {
								clearTimeout(mIncomingInvitation[invitationId].timeout);
							}
							delete mIncomingInvitation[invitationId];
						}
						mIncomingInvitation[invitationId] = {};
	
						var obj = {};
						obj[invitationId] = snapshot.val();
						p_onNewRoomInviteCb(obj);
	
						if (automaticRejectTimeOut) {
							var mTimeout_action = setTimeout(function () {
								if (automaticRejectTimeOut) {
									console.log('(webcomSDK::reach::_setOnNewRoomInvitation)automatic reject of Invite received=' + JSON.stringify(snapshot.val()));
									dataref.child('invitationList').child(me).child(invitationId).onDisconnect().cancel();
									if (automaticRejectReason) {
										dataref.child('invitationList').child(me).child(invitationId).update({
											timestamp_end: Webcom.ServerValue.TIMESTAMP,
											status: INVITATION_REJECTED,
											status_info: automaticRejectReason
										});
									} else {
										dataref.child('invitationList').child(me).child(invitationId).update({
											timestamp_end: Webcom.ServerValue.TIMESTAMP,
											status: INVITATION_REJECTED
										});
									}
								}
							}, automaticRejectTimeOut);
							mIncomingInvitation[invitationId].timeout = mTimeout_action;
						}
	
						var onInvitationChangeCb = function onInvitationChangeCb(snapshot) {
							if (snapshot && snapshot.name() === 'status') {
								snapshot.ref().parent().once('value', function (snapshot2) {
									var cb_invitationId, cb_obj_content;
									if (snapshot2) {
										cb_invitationId = snapshot.ref().parent().name();
										cb_obj_content = snapshot2.val();
										var cb_obj = {};
										cb_obj[cb_invitationId] = cb_obj_content;
										if (mIncomingInvitation && mIncomingInvitation[cb_invitationId] && mIncomingInvitation[cb_invitationId].timeout) {
											clearTimeout(mIncomingInvitation[cb_invitationId].timeout);
										}
										console.log('(webcomSDK::reach::_setOnNewRoomInvitation)Invite changed,id=)' + cb_invitationId, '\'new content=' + JSON.stringify(cb_obj_content));
										if (cb_obj && onRoomInviteChangedCb) {
											onRoomInviteChangedCb(cb_obj);
										}
										delete mIncomingInvitation[cb_invitationId];
									}
								});
							}
						};
						dataref.child('invitationList').child(me).child(invitationId).once('child_changed', onInvitationChangeCb);
					}
				};
				dataref.child('invitationList').child(me).on('child_added', newInviteCb);
			}
		}
	
		/**
	  * Defines the callback to trigger when a room Invite has been changed.
	  * Other callbacks will be triggered about Invite lists.
	  * @param {function} p_onRoomInviteChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
	  */
		function _setOnRoomInvitationChanged(p_onRoomInviteChangedCb) {
	
			if (onRoomInviteChangedCb) {
				onRoomInviteChangedCb = null;
			}
	
			if (p_onRoomInviteChangedCb && typeof p_onRoomInviteChangedCb == 'function') {
				onRoomInviteChangedCb = p_onRoomInviteChangedCb;
			}
		}
	
		/**
	  * Defines a timeout to reject automatically the incoming Invite
	  * @param {integer} p_timeout - The delay
	  * @param {string} p_reason - optional info about the reject
	  */
		function _setNewRoomInvitationTimeout(p_timeout, p_reason) {
			if (automaticRejectTimeOut) {
				automaticRejectTimeOut = null;
			}
			if (automaticRejectReason) {
				automaticRejectReason = null;
			}
	
			if (p_timeout && p_timeout === parseInt(p_timeout, 10) && p_timeout > 0) {
				console.log('(webcomSDK::reach::_setNewRoomInvitationTimeout)timeout=' + p_timeout);
				automaticRejectTimeOut = p_timeout;
			}
			if (p_reason) {
				automaticRejectReason = p_reason;
			}
		}
	
		/**
	  * test if p_user  is already present in the participant list of the room p_roomId
	  *
	  * @param {string} p_roomId - The room used as the name of a branch is the database
	  * @param {string} p_user - The user Id
	  * @param {function} p_cb - the callback function to tigger to get the result. It will containts a parameter = true is already present, false either.
	  */
		function _isUserPresentInRoom(p_roomId, p_user, p_cb) {
			console.log('(webcomSDK::reach::_isUserPresentInRoom)p_roomId=' + p_roomId + ' p_user=' + p_user);
			if (!(p_roomId && typeof p_roomId == 'string')) {
				console.error('(webcomSDK::reach::_isUserPresentInRoom)parameter p_roomid is incorrect. Expecting non empty string');
				return;
			}
			if (!(p_user && typeof p_user == 'string')) {
				console.error('(webcomSDK::reach::_isUserPresentInRoom)parameter p_user is incorrect. Expecting non empty string');
				return;
			}
			if (!(p_cb && typeof p_cb == 'function')) {
				console.error('(webcomSDK::reach::_isUserPresentInRoom)parameter p_cb is incorrect. if defined, expecting a function');
				return;
			}
			var isUserAlreadyPresentCB = function isUserAlreadyPresentCB(snapshot) {
				var wasPresent = snapshot.val() !== null;
				console.log('(webcomSDK::reach::_isUserPresentInRoom)p_roomId=' + p_roomId + ',p_user=' + p_user + ',result=' + wasPresent);
				p_cb(wasPresent, p_roomId, p_user);
			};
			datarefs.getRooms().child(p_roomId).child('participantList').child(p_user).child('wasInsideRoom').once('value', isUserAlreadyPresentCB);
		}
	
		/**
	  * Gather the invitees to the room.
	  * Defines a callback to trigger for Invite changes, and calls callbacks for room invite acceptation or refuse.
	  * For each invitee a node is created in the database about the Invite list.
	  * In addtion, a node is created too for each invitee about the participantList.
	  * @param {string} p_roomId - The room used as the name of a branch is the database
	  * @param {array[sting]} p_guestIds - An array possessing the identifiers of the invitees
	  * @param {string} p_topic - custom message for invitation
	  * @param {function} p_statusChangedCb - optional : callback function when an invitee accepts/rejected/canceled the Invite
	  */
		function _inviteToRoom(p_roomId, p_guestIds, p_topic, p_statusChangedCb) {
			if (!(p_roomId && typeof p_roomId == 'string')) {
				console.error('(webcomSDK::reach::inviteToRoom)parameter p_roomid is incorrect. Expecting non empty string');
				return;
			}
			if (!(p_topic && typeof p_topic == 'string')) {
				console.error('(webcomSDK::reach::inviteToRoom)parameter p_topic is incorrect. Expecting non empty string');
				return;
			}
			if (p_statusChangedCb && typeof p_statusChangedCb != 'function') {
				console.warn('(webcomSDK::reach::inviteToRoom)parameter p_statusChangedCb is incorrect. if defined, expecting a function');
			}
			if (!(p_guestIds && p_guestIds instanceof Array)) {
				console.error('(webcomSDK::reach::inviteToRoom)parameter p_guestIds is incorrect. Expecting an Array');
				return;
			}
			datarefs.getRooms().child(p_roomId).child('commonDataList').update({
				status: ROOM_STATUS_OPEN,
				owner: me
			});
	
			var _isUserPresentInRoomCb = function _isUserPresentInRoomCb(isAlreadyPresent, p_roomId2, p_guestId2) {
				if (!isAlreadyPresent) {
					datarefs.getRooms().child(p_roomId2).child('participantList').child(p_guestId2).update({
						connected: false,
						wasInsideRoom: false
					});
				}
			};
	
			var _InviteChangedCb = function _InviteChangedCb(snapshot) {
				console.log('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)');
				if (snapshot && snapshot.name() === 'status') {
					var cb_guestId2 = snapshot.ref().parent().parent().name();
					console.log('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cb_guestId2=' + cb_guestId2);
					if (mOutgoingInvites && mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][cb_guestId2] && mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb) {
						mOutgoingInvites[p_roomId][cb_guestId2].InviteDataref.off('child_changed', mOutgoingInvites[p_roomId][cb_guestId2].InviteChangedCb);
					}
					snapshot.ref().parent().once('value', function (snapshot2) {
						var cb_status, cb_guestId, cb_roomId, cb_status_info;
						if (snapshot2) {
							cb_status = snapshot2.val().status;
							cb_roomId = snapshot2.val().room;
							cb_status_info = snapshot2.val().status_info;
							cb_guestId = snapshot2.ref().parent().name();
							console.log('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)roomId=' + cb_roomId + ' invitee=' + cb_guestId + ' new invitation status=' + cb_status + ' status info=' + cb_status_info);
							if (mOutgoingInvites && mOutgoingInvites[cb_roomId] && mOutgoingInvites[cb_roomId][cb_guestId] && mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref) {
								mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.onDisconnect().cancel();
								//   	                    	if (mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb)
								//   				         		mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.parent().off("child_removed",mOutgoingInvites[cb_roomId][cb_guestId].InviteRemoveCb);
								if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') {
									mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId, cb_guestId, cb_status, cb_status_info);
								} else {
									console.warn('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing p_statusChangedCb');
								}
								delete mOutgoingInvites[cb_roomId][cb_guestId];
							} else {
								console.warn('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve mathing mOutgoingInvite');
							}
						} else {
							console.warn('(webcomSDK::reach::inviteToRoom::_InviteChangedCb)cannot retrieve invitation');
						}
					});
				}
			};
	
			for (var i = 0; i < p_guestIds.length; i++) {
				var mGuestId = p_guestIds[i];
				if (!(mGuestId && typeof mGuestId == 'string')) {
					console.error('(webcomSDK::reach::inviteToRoom)parameter p_guestIds[' + i + '] is incorrect. Expecting non empty string');
				} else {
					console.log('(webcomSDK::reach::inviteToRoom)roomId=' + p_roomId + ' invitee=' + mGuestId.toString());
	
					if (mOutgoingInvites[p_roomId] && mOutgoingInvites[p_roomId][mGuestId]) {
						//invitation is already existing -> cancel it
						//if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb)  mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
						//if (mOutgoingInvites[p_roomId][mGuestId].InviteDataref && mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb) mOutgoingInvites[p_roomId][mGuestId].InviteDataref.off("child_changed",mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
						_cancelInvitation(p_roomId, [mGuestId], function (p_guestId) {
							if (p_guestId && p_guestId === mGuestId) {
								_inviteToRoom(p_roomId, [p_guestId], p_topic, p_statusChangedCb);
							}
						});
						return;
					}
					if (!mOutgoingInvites[p_roomId]) {
						mOutgoingInvites[p_roomId] = [];
					}
					//if (!mOutgoingInvites[p_roomId][mGuestId]) {
					mOutgoingInvites[p_roomId][mGuestId] = {};
					//}
	
					_isUserPresentInRoom(p_roomId, mGuestId, _isUserPresentInRoomCb);
	
					mOutgoingInvites[p_roomId][mGuestId].InviteDataref = dataref.child('invitationList').child(mGuestId).push({
						from: me,
						room: p_roomId,
						timestamp_creation: Webcom.ServerValue.TIMESTAMP,
						topic: p_topic,
						status: INVITATION_ONGOING
					});
					console.log('(webcomSDK::reach::inviteToRoom)InviteDataref=' + mOutgoingInvites[p_roomId][mGuestId].InviteDataref.toString());
	
					//mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb=_InvitationRemoveCb;
					mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb = _InviteChangedCb;
					mOutgoingInvites[p_roomId][mGuestId].InviteDataref.on('child_changed', mOutgoingInvites[p_roomId][mGuestId].InviteChangedCb);
					//mOutgoingInvites[p_roomId][mGuestId].InviteDataref.parent().on("child_removed",mOutgoingInvites[p_roomId][mGuestId].InviteRemoveCb);
					mOutgoingInvites[p_roomId][mGuestId].statusChangedCb = p_statusChangedCb;
	
					// canceled Invite on disconnection
					mOutgoingInvites[p_roomId][mGuestId].InviteDataref.onDisconnect().update({
						timestamp_end: Webcom.ServerValue.TIMESTAMP,
						status: INVITATION_CANCELED
					});
				}
			}
		}
	
		/**
	  * Cancels the Invite
	  * @param {string} p_roomId - The room Id of the Invite
	  * @param {array[sting]} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
	  * @param {string} inviteId - The invite identifier
	  * @param {function} p_cb - The callback triggered when the operation is complete . this callback will containt as parameter the related guestId
	  */
		function _cancelInvitation(p_roomId, p_guestIds, p_cb) {
			if (!(p_roomId && typeof p_roomId == 'string')) {
				console.error('(webcomSDK::reach::_cancelInvitation)parameter p_roomid is incorrect. Expecting non empty string');
				return;
			}
			if (p_guestIds && !p_guestIds instanceof Array) {
				console.error('(webcomSDK::reach::_cancelInvitation)parameter p_guestIds is incorrect. Expecting an Array');
				return;
			}
			console.log('(webcomSDK::reach::_cancelInvitation)p_roomId=' + p_roomId + ',p_guestIds=' + JSON.stringify(p_guestIds));
			if (mOutgoingInvites && mOutgoingInvites[p_roomId]) {
				if (p_guestIds) {
					for (var i = 0; i < p_guestIds.length; i++) {
						var guestId = p_guestIds[i];
						if (!(guestId && typeof guestId == 'string')) {
							console.error('(webcomSDK::reach::inviteToRoom)parameter p_guestIds[' + i + '] is incorrect. Expecting non empty string');
						} else {
							if (mOutgoingInvites[p_roomId][guestId]) {
								if (mOutgoingInvites[p_roomId][guestId].InviteDataref) {
									mOutgoingInvites[p_roomId][guestId].InviteDataref.onDisconnect().cancel();
									if (mOutgoingInvites[p_roomId][guestId].InviteChangedCb && typeof mOutgoingInvites[p_roomId][guestId].InviteChangedCb == 'function') {
										mOutgoingInvites[p_roomId][guestId].InviteDataref.off('child_changed', mOutgoingInvites[p_roomId][guestId].InviteChangedCb);
									}
	
									mOutgoingInvites[p_roomId][guestId].InviteDataref.once('value', function (dataSnapshot) {
	
										var cb_status, cb_guestId, cb_roomId;
										if (dataSnapshot && dataSnapshot.val()) {
											cb_status = dataSnapshot.val().status;
											cb_roomId = dataSnapshot.val().room;
											cb_guestId = dataSnapshot.ref().parent().name();
											if (cb_status && cb_status === INVITATION_ONGOING) {
												mOutgoingInvites[cb_roomId][cb_guestId].InviteDataref.update({
													timestamp_end: Webcom.ServerValue.TIMESTAMP,
													status: INVITATION_CANCELED
												});
												if (mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb && typeof mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb == 'function') mOutgoingInvites[cb_roomId][cb_guestId].statusChangedCb(cb_roomId, cb_guestId, INVITATION_CANCELED);
												console.log('(webcomSDK::reach::_cancelInvitation)deleting Invite to room ' + cb_roomId + ' for invitee ' + cb_guestId);
											} else {
												console.warn('(webcomSDK::reach::_cancelInvitation)cannot delete intivation to room ' + cb_roomId + ' for guest ' + cb_guestId + ' Invitation has been removed/rejected/accepted');
											}
										}
										delete mOutgoingInvites[p_roomId][guestId];
										if (p_cb && typeof p_cb == 'function') p_cb(guestId);
									});
								} else {
									delete mOutgoingInvites[p_roomId][guestId];
									if (p_cb && typeof p_cb == 'function') p_cb(guestId);
								}
							} else {
								if (p_cb && typeof p_cb == 'function') p_cb(guestId);
							}
						}
					}
				} else {
					for (var invitee in mOutgoingInvites[p_roomId]) {
						_cancelInvitation(p_roomId, [invitee], p_cb);
					}
				}
			} else {
				console.warn('(webcomSDK::reach::_cancelInvitation) Invite to room ' + p_roomId + ' not found');
			}
		}
	
		/**
	  * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
	  * @param p_invitation -
	  */
		function _acceptInvitation(p_invitation) {
			var inviteId = _Object$keys(p_invitation)[0];
			if (!inviteId) {
				console.error('(webcomSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation Id');
				return;
			}
			if (!p_invitation[inviteId]) {
				console.error('(webcomSDK::reach::_acceptInvitation)parameter p_invitation is incorrect. cannot get invitation data');
				return;
			}
			dataref.child('invitationList').child(me).child(inviteId).once('value', function (dataSnapshot) {
				var cb_status, cb_guestId, cb_invitationId;
	
				if (dataSnapshot && dataSnapshot.val()) {
					cb_invitationId = dataSnapshot.name();
					cb_status = dataSnapshot.val().status;
					cb_guestId = dataSnapshot.ref().parent().name();
					if (cb_status && cb_status === INVITATION_ONGOING) {
						console.log('(webcomSDK::reach::_acceptInvitation)inviteId=' + inviteId + ',data=' + JSON.stringify(p_invitation[inviteId]));
						dataref.child('invitationList').child(cb_guestId).child(cb_invitationId).update({
							timestamp_end: Webcom.ServerValue.TIMESTAMP,
							status: 'ACCEPTED'
						});
					} else {
						console.warn('(webcomSDK::reach::_acceptInvitation)inviteId=' + cb_invitationId + ',data=' + JSON.stringify(p_invitation[inviteId]) + ', cannot be accepted. It has been removed or canceled');
					}
				}
			});
		}
	
		/**
	  * Refuses the invite and set the "accepted" flag of this invite in the database to false
	  * @param p_invitation - The invite data
	  * @param {string} p_reason - optional info about the reject
	  */
		function _rejectInvitation(p_invitation, p_reason) {
			var inviteId = _Object$keys(p_invitation)[0];
			if (!inviteId) {
				console.error('(webcomSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation Id');
				return;
			}
			if (!p_invitation[inviteId]) {
				console.error('(webcomSDK::reach::_rejectInvitation)parameter p_invitation is incorrect. cannot get invitation data');
				return;
			}
			dataref.child('invitationList').child(me).child(inviteId).once('value', function (dataSnapshot) {
				var cb_status, cb_guestId, cb_invitationId;
				if (dataSnapshot && dataSnapshot.val()) {
					cb_invitationId = dataSnapshot.name();
					cb_status = dataSnapshot.val().status;
					cb_guestId = dataSnapshot.ref().parent().name();
					if (cb_status && cb_status === INVITATION_ONGOING) {
						console.log('(webcomSDK::reach::_rejectInvitation)inviteId=' + inviteId + ',data=' + JSON.stringify(p_invitation[inviteId]));
						if (p_reason) {
							dataref.child('invitationList').child(cb_guestId).child(cb_invitationId).update({
								timestamp_end: Webcom.ServerValue.TIMESTAMP,
								status_info: p_reason,
								status: INVITATION_REJECTED
							});
						} else {
							dataref.child('invitationList').child(cb_guestId).child(cb_invitationId).update({
								timestamp_end: Webcom.ServerValue.TIMESTAMP,
								status: INVITATION_REJECTED
							});
						}
					} else {
						console.warn('(webcomSDK::reach::_rejectInvitation)inviteId=' + cb_invitationId + ',data=' + JSON.stringify(p_invitation[inviteId]) + ', cannot be rejected. It has been removed or canceled');
					}
				}
			});
		}
	
		/**
	  * move all the non active invitations processed of an user to the invitation List History:
	  * All invitations with status Canceled or Rejected will be archived
	  * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
	  * If an invitation with status "Ongoing" is archived, its status will be set to canceled
	  * @param user - The user Id
	  * @param p_cb - This callback is trigger when archive is complete
	  */
		function _archiveInvitations(p_userId, p_cb) {
			console.log('(webcomSDK::reach::_archiveInvitations)userId=' + p_userId);
			dataref.child('invitationList').child(me).once('value', function (snapshot) {
				if (snapshot && snapshot.hasChildren()) {
					var nbChildren = snapshot.numChildren();
					var nbChildrenProcessed = 0;
					snapshot.forEach(function (childSnapshot) {
						if (childSnapshot && childSnapshot.val()) {
							console.log('(webcomSDK::reach::_archiveInvitations)userId=' + p_userId + ' inviteId=' + childSnapshot.name());
							if (childSnapshot.val().status === INVITATION_REJECTED || childSnapshot.val().status === INVITATION_CANCELED) {
								dataref.child('invitationListHistory').child(p_userId).child(childSnapshot.name()).update(childSnapshot.val());
								childSnapshot.ref().remove();
								nbChildrenProcessed++;
								if (nbChildrenProcessed >= nbChildren && p_cb && typeof p_cb == 'function') {
									p_cb();
								}
							} else {
								var inviteData = {};
								inviteData[childSnapshot.name()] = childSnapshot.val();
								var cb2 = function cb2(isActive) {
									if (isActive) {
										nbChildrenProcessed++;
										if (nbChildrenProcessed >= nbChildren && p_cb && typeof p_cb == 'function') {
											p_cb();
										}
									} else {
										if (childSnapshot.val().status === INVITATION_ONGOING) {
											var newValue = childSnapshot.val();
											newValue.status = INVITATION_CANCELED;
											dataref.child('invitationListHistory').child(p_userId).child(childSnapshot.name()).set(newValue);
										} else {
											dataref.child('invitationListHistory').child(p_userId).child(childSnapshot.name()).set(childSnapshot.val());
										}
										childSnapshot.ref().remove();
										nbChildrenProcessed++;
										if (nbChildrenProcessed >= nbChildren && p_cb && typeof p_cb == 'function') {
											p_cb();
										}
									}
								};
								_isRoomActive(inviteData, cb2);
							}
						} else {
							if (p_cb && typeof p_cb == 'function') {
								p_cb();
							}
						}
					});
				} else {
					if (p_cb && typeof p_cb == 'function') {
						p_cb();
					}
				}
			});
		}
	
		/**
	  * check if the room corresponding to the invitation is active
	  * @param p_invitation - The invitation Data
	  * @param p_cb - The callback to trigger to get the result. this callback will contains the parameter true is the room is active
	  */
		function _isRoomActive(p_invitation, p_cb) {
			if (p_invitation && p_cb && typeof p_cb == 'function') {
				var inviteId = _Object$keys(p_invitation)[0];
				console.log('(webcomSDK::reach::_isRoomActive)inviteId=' + inviteId);
				var roomId = p_invitation[inviteId].room;
				var onRoomStatus = function onRoomStatus(snapshot) {
					if (snapshot && snapshot.val() && snapshot.val() === ROOM_STATUS_OPEN) {
						console.log('(webcomSDK::reach::_isRoomActive)inviteId=' + inviteId + ' result=true');
						p_cb(true);
					} else {
						console.log('(webcomSDK::reach::_isRoomActive)inviteId=' + inviteId + ' result=false');
						p_cb(false);
					}
				};
				datarefs.getRooms().child(roomId).child('commonDataList').child('status').once('value', onRoomStatus);
			}
		}
	
		/**
	  * Close the reach service,
	  * disables and deletes any listeners/callback defined.
	  * cancel all outgoing invite not already processed
	  * do not impact incoming invite
	  */
		function _close() {
			console.log('(webcomSDK::reach::_close)');
	
			if (newInviteCb) {
				dataref.child('invitationList').child(me).off('child_added', newInviteCb);
				newInviteCb = null;
			}
			//		if (onRoomInviteChangedCb) {
			//			dataref.child("invitationList").child(me).off("child_changed",InviteChangedCb);
			//			onRoomInviteChangedCb=null;
			//		}
			//
			//		if (mTimeoutOnNewInviteCb) {
			//			dataref.child("invitationList").child(me).off("child_added",mTimeoutOnNewInviteCb);
			//			mTimeoutOnNewInviteCb=null;
			//		}
			//		if (mTimeoutOnInviteChangedCb) {
			//			dataref.child("invitationList").child(me).off("child_changed",mTimeoutOnInviteChangedCb);
			//			mTimeoutOnInviteChangedCb=null;
			//		}
	
			if (onUserAddedCb) {
				dataref.child('userList').off('child_added', onUserAddedCb);
				onUserAddedCb = null;
			}
			if (onUserChangedCb) {
				dataref.child('userList').off('child_changed', onUserChangedCb);
				onUserChangedCb = null;
			}
			if (onUserRemovedCb) {
				dataref.child('userList').off('child_removed', onUserRemovedCb);
				onUserRemovedCb = null;
			}
	
			if (mOutgoingInvites) {
	
				mOutgoingInvites.forEach(function (roomId) {
					mOutgoingInvites[roomId].forEach(function (invitee) {
						if (invitee.InviteDataref) {
							invitee.InviteDataref.onDisconnect().cancel();
							invitee.InviteDataref.update({
								status: INVITATION_CANCELED,
								timestamp_end: Webcom.ServerValue.TIMESTAMP
	
							});
						}
					});
				});
				mOutgoingInvites = [];
			}
	
			if (automaticRejectTimeOut) automaticRejectTimeOut = null;
			if (automaticRejectReason) automaticRejectReason = null;
	
			if (mDeviceId) {
				mDeviceId.remove();
				mDeviceId = null;
			}
		}
	
		(function init() {
			mDeviceId = dataref.child('userList').child(me).child('connectedList').child(_utils2['default'].appInstanceId);
			mDeviceId.onDisconnect().remove();
			mDeviceId.child('status').set('CONNECTED');
			try {
				if (_utils2['default'].appInstanceId) mDeviceId.child('description').child('appInstanceId').set(_utils2['default'].appInstanceId);
				if (navigator.appCodeName) mDeviceId.child('description').child('navigator').child('appCodeName').set(navigator.appCodeName);
				if (navigator.appName) mDeviceId.child('description').child('navigator').child('appName').set(navigator.appName);
				if (navigator.appVersion) mDeviceId.child('description').child('navigator').child('appVersion').set(navigator.appVersion);
				if (navigator.buildID) mDeviceId.child('description').child('navigator').child('buildID').set(navigator.buildID);
				if (navigator.cookieEnabled) mDeviceId.child('description').child('navigator').child('cookieEnabled').set(navigator.cookieEnabled);
				//			if (navigator.geolocation) mDeviceId.child("description").child("navigator").child("geolocation").set(navigator.geolocation);
				if (navigator.language) mDeviceId.child('description').child('navigator').child('language').set(navigator.language);
				//			if (navigator.mimeTypes) mDeviceId.child("description").child("navigator").child("mimeTypes").set(navigator.mimeTypes.toString());
				if (navigator.onLine) mDeviceId.child('description').child('navigator').child('onLine').set(navigator.onLine);
				if (navigator.oscpu) mDeviceId.child('description').child('navigator').child('onLine').set(navigator.oscpu);
				if (navigator.platform) mDeviceId.child('description').child('navigator').child('platform').set(navigator.platform);
				//			if (navigator.cookieEnabled) mDeviceId.child("description").child("navigator").child("plugins").set(navigator.plugins.toString());
				if (navigator.product) mDeviceId.child('description').child('navigator').child('product').set(navigator.product);
				if (navigator.productSub) mDeviceId.child('description').child('navigator').child('productSub').set(navigator.productSub);
				if (navigator.securityPolicy) mDeviceId.child('description').child('navigator').child('securityPolicy').set(navigator.securityPolicy);
				if (navigator.userAgent) mDeviceId.child('description').child('navigator').child('userAgent').set(navigator.userAgent);
				if (navigator.vendor) mDeviceId.child('description').child('navigator').child('vendor').set(navigator.vendor);
				if (navigator.vendorSub) mDeviceId.child('description').child('navigator').child('vendorSub').set(navigator.vendorSub);
			} catch (e) {
				console.error('(webcomSDK::reach::init)failed to get information about device. error=' + e);
			}
			dataref.child('userList').child(me).child('wasInsideReach').set(true);
		})();
		return {
			/**
	   * Returns the user identifier used in the database. This value
	   * identifies the user if the Webcombase.
	   * @return {string} - The user ID
	   */
			getMe: function getMe() {
				return me;
			},
			/**
	   * check if a user is connected
	   * @param {string} p_userId - the user Id
	   * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = connected / false = not connected
	   */
			isConnected: function isConnected(p_userId, p_cb) {
				_isConnected(p_userId, p_cb);
			},
			/**
	   * check if a user is register
	   * @param {string} p_userId - the user Id
	   * @param {function} p_cb - the callback triggers to return the result. The result will be passed in parameter as boolean : true = registered / false = not registered
	   */
			isRegistered: function isRegistered(p_userId, p_cb) {
				_isRegistered(p_userId, p_cb);
			},
			/**
	   * set the device status (DEVICE_STATUS_CONNECTED)
	   * @param {string} status - the new status
	   */
			setConnectedStatus: function setConnectedStatus(p_status) {
				return _setConnectedStatus(p_status);
			},
			/**
	   * Defines the callback to trigger when a new user is added
	   * @param {function} p_cb - The callback to use
	   */
			setOnUserAdded: function setOnUserAdded(p_cb) {
				return _setOnUserAdded(p_cb);
			},
			/**
	   * Defines the callback to trigger when the user has changed
	   * @param {function} p_cb - The callback to use
	   */
			setOnUserChanged: function setOnUserChanged(p_cb) {
				return _setOnUserChanged(p_cb);
			},
			/**
	   * Defines the callback to trigger when a user has been removed.
	   * @param {function} p_cb - The callback to use
	   */
			setOnUserRemoved: function setOnUserRemoved(p_cb) {
				return _setOnUserRemoved(p_cb);
			},
			/**
	   * Gather the invitees to the room.
	   * Defines a callback to trigger for Invite changes, and calls callbacks for room invite acceptation or refuse.
	   * For each invitee a node is created in the database about the Invite list.
	   * In addtion, a node is created too for each invitee about the participantList.
	   * @param {string} p_roomId - The room used as the name of a branch is the database
	   * @param {array} p_guestIds - An array possessing the identifiers of the invitees
	   * @param {string} p_topic - custom message for the invitation
	   * @param {function} p_statusChangedCb - optional : callback function when an invitee accepts/rejected/canceled the Invite
	   */
			inviteToRoom: function inviteToRoom(p_roomId, p_guestIds, p_topic, p_statusChangedCb) {
				return _inviteToRoom(p_roomId, p_guestIds, p_topic, p_statusChangedCb);
			},
			/**
	   * Cancels the Invite
	   * @param {string} p_roomId - The room Id of the Invite
	   * @param {sting} p_guestIds - optional : An array possessing the identifiers of the invitees. (if undefined ,  all invitee will have their Invite canceled)
	   * @param {string} inviteId - The invite identifier
	   */
			cancelInvitation: function cancelInvitation(p_roomId, p_guestIds) {
				return _cancelInvitation(p_roomId, p_guestIds);
			},
			/**
	   * Defines the callback to trigger when a room invite has been received.
	   * Other callbacks will be triggered about Invite lists.
	   * @param {function} onNewRoomInvitationCb - The callback triggers when a Invite is received (status = on going)
	   */
			setOnNewRoomInvitation: function setOnNewRoomInvitation(p_onNewRoomInvitationCb) {
				return _setOnNewRoomInvitation(p_onNewRoomInvitationCb);
			},
			/**
	   * Defines the callback to trigger when a room invite has been received.
	   * Other callbacks will be triggered about Invite lists.
	   * @param {function} onRoomInvitationChangedCb - The callback triggers when the satus on the Invite received has changed (status = accepted/rejected/canceled)
	   */
			setOnRoomInvitationChanged: function setOnRoomInvitationChanged(p_onRoomInvitationChangedCb) {
				return _setOnRoomInvitationChanged(p_onRoomInvitationChangedCb);
			},
			/**
	   * Defines a timeout to reject automatically the Invite
	   * Other callbacks will be triggered about Invite lists.
	   * @param {integer} p_timeout - The delay
	   * @param {string} p_reason - optional info about the reject
	   */
			setNewRoomInvitationTimeout: function setNewRoomInvitationTimeout(p_timeout, p_reason) {
				return _setNewRoomInvitationTimeout(p_timeout, p_reason);
			},
	
			/**
	   * move all the non active invitations processed of an user to the invitation List History:
	   * All invitations with status Canceled or Rejected will be archived
	   * All invitation with status Ongoing or Accepted Will be archived if the corresponding room is closed
	   * If an invitation with status "Ongoing" is archived, its status will be set to canceled
	   * @param p_cb - This callback is trigger when archive is complete
	   */
			archiveMyInvitations: function archiveMyInvitations(p_cb) {
				return _archiveInvitations(me, p_cb);
			},
			/**
	   * Makes an invite accepted, and defines the "accepted" flag of this invite at true in the database.
	   * @param p_invitationData -
	   */
			acceptInvitation: function acceptInvitation(p_invitationData) {
				return _acceptInvitation(p_invitationData);
			},
	
			/**
	   * Refuses the invite and set the "accepted" flag of this invite in the database to false
	   * @param p_invitationData - The invite data
	   * @param {string} p_reason - optional info about the reject
	   */
			rejectInvitation: function rejectInvitation(p_invitationData, p_reason) {
				return _rejectInvitation(p_invitationData, p_reason);
			},
			/**
	   * Defines a callback for a particular event
	   * @param {string} event - To choose between "roomInvite", "roomInviteAccepted", "roomInviteCanceled", "user" and "userRemoval"
	   * @parm {function} p_cb - The callback to rise
	   */
			on: function on(p_evt, p_cb) {
				switch (p_evt) {
					case 'newRoomInvitation':
						this.setOnNewRoomInvitation(p_cb);
						break;
					case 'roomInvitationChanged':
						this.setOnRoomInvitationChanged(p_cb);
						break;
					case 'userAdded':
						this.setOnUserAdded(p_cb);
						break;
					case 'userChanged':
						this.setOnUserChanged(p_cb);
						break;
					case 'userRemoved':
						this.setOnUserRemoved(p_cb);
						break;
					default:
						console.error('reach.set: no such event');
						return -1;
				}
			},
			/**
	   * Closes and removes callbacks
	   */
			close: function close() {
				return _close();
			}
		};
	};
	
	exports['default'] = reach;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(19).Object.keys;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(14);
	
	__webpack_require__(16)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(17)
	    , fn   = (__webpack_require__(19).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(20)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	
	/**
	 * @file utils.js - JS file for utils methods.
	 * @author Webcom
	 */
	
	/**
	 * @constructor
	 * @description The utils class
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var utils = (function () {
		/**
	  *
	  */
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		/**
	  * Generates an identifier. Two calls of this methode may not return the same identifier
	  * @return {string} - The identifier
	  */
	
		/**
	  * @description The application instance indentifier
	  */
		var _appInstanceId = (function _guid() {
			return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
		})();
	
		return {
			appInstanceId: _appInstanceId
		};
	})();
	
	exports["default"] = utils;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file room.js - JS file to use for the room service.
	 * @author Webcom
	 */
	
	'use strict';
	
	/**
	 * ROOM_STATUS_CLOSE status : room is CLOSE / inactive
	 * @constant
	 * @type {string}
	 */
	
	var _Object$keys = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _actions = __webpack_require__(8);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _localstream = __webpack_require__(23);
	
	var _localstream2 = _interopRequireDefault(_localstream);
	
	var _utils = __webpack_require__(21);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	/**
	 * @constructor
	 * @description The room object with its streams, messages, flags and callbacks. The published media streams, the WebRTC stacks, the instant messages, and the participant lists
	 * are managed in this data structure.
	 * @param p_me - The user identifier, identifying the current user in the database
	 * @param p_roomId - The room identifier, identifying in the database the room in use
	 */
	
	exports['default'] = function (p_me, p_roomId, datarefs, webrtcmngr) {
	
		/**
	  * @description The room identifier, identifying a room in the database
	  */
		var roomId = p_roomId;
		/**
	  * @description The user identifier
	  */
		var me = p_me;
		/**
	  * @description A dataref pointer pointing to a node identified by the room identifier under the rooms node
	  */
		var dataref = datarefs.getRooms().child(roomId);
		/**
	  * @description The WebRTC stacks used in this room
	  */
		var roomWebrtcStacks = {};
		/**
	  * @description The available streams
	  */
		var mAvailableStreams = [];
		/**
	  * @description An array containing data structures for streams which possess callbacks to trigger in JSON format.
	  * These callbacks are addSubscriberListCb and removeSubscribersListCb.
	  */
		var mStreams = [];
	
		/**
	  * @description An array containing all the stream marked as muted
	  */
		var mMutedStreams = [];
	
		/**
	  * @description A callback to trigger for unpublished remote objects
	  */
		var remoteUnpublishedtCb = null;
	
		/**
	  * @description Callback triggered when a list of instant messages has been received
	  */
		var instantMessageListCb = null;
		/**
	  * @description User's callback triggered when a list of medias has been published
	  */
		var publishedMediaListCb = null;
	
		/**
	  * @description room's callback triggered when a list of medias has been published
	  */
		var publishedMediaListCbForAvailableStream = null;
		/**
	  * @description user's callback triggered when a list of medias has been unpublished
	  */
		var unPublishedMediaListCb = null;
		/**
	  * @description room's callback triggered when a list of medias has been published
	  */
		var unPublishedMediaListCbForAvailableStream = null;
		/**
	  * @description Callback triggered when a list of participants joins the room (added)
	  */
		var participantListJoinAddedCb = null;
		/**
	  * @description Callback triggered when a list of participants joins the room (changed)
	  */
		var participantListJoinChangedCb = null;
		/**
	  * @description Callback triggered when a list of participants leaves the room
	  */
		var participantListLeaveCb = null;
	
		/**
	  * Initializes the room object by adding a new value in a child identified by the user identifier under
	  * the participantList node
	  */
	
		/**
	  * Initializes a Firebase listener.
	  * Defines callbacks (if not already defined) for : instant messages, media list and participants.
	  * These callbacks are called if a new value is added or if a value has been removed in the database.
	  */
		function initFirebaseListener() {
	
			if (!publishedMediaListCbForAvailableStream) {
				publishedMediaListCbForAvailableStream = function (snapshot) {
					console.log('(webcomSDK::room[' + roomId + ']::onPublishedStreamForAvailableStream)stream=' + JSON.stringify(snapshot.val()));
					var obj = {};
					obj[snapshot.name()] = snapshot.val();
					obj[snapshot.name()].roomId = roomId;
					_addAvailableStream(obj);
				};
				dataref.child('publishedMediaList').on('child_added', publishedMediaListCbForAvailableStream);
			}
	
			if (!unPublishedMediaListCbForAvailableStream) {
				unPublishedMediaListCbForAvailableStream = function (snapshot) {
					var streamId = snapshot.name();
					console.log('(webcomSDK::room[' + roomId + ']::onUnPublishedStreamForAvailableStream)stream=' + streamId);
					_removeAvailableStream(streamId);
				};
				dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCbForAvailableStream);
			}
		}
	
		/**
	  * Return the room identifier
	  * @return {string} - The room identifier
	  */
		function _getRoomId() {
			return roomId;
		}
	
		/**
	  * Returns the user identifier
	  * @return {string} - The user identifier
	  */
		function _getMe() {
			return me;
		}
	
		/**
	  * Initializes the Participants added listener.
	  * Defines callback (remove any existing one) for the participants.
	  * This callback is called, first for any existing connected participants, then when a new participant is added.
	  */
		function _setOnParticipantJoin(p_cb) {
	
			if (participantListJoinAddedCb) {
				dataref.child('participantList').off('child_added', participantListJoinAddedCb);
				participantListJoinAddedCb = null;
			}
			if (participantListJoinChangedCb) {
				dataref.child('participantList').off('child_changed', participantListJoinChangedCb);
				participantListJoinChangedCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				participantListJoinAddedCb = function (snapshot) {
					var user = snapshot.name();
					if (snapshot.val() && snapshot.val().connected && snapshot.val().wasInsideRoom) {
						console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin) user has joined: ' + user);
						p_cb(user);
					}
				};
				dataref.child('participantList').on('child_added', participantListJoinAddedCb);
	
				participantListJoinChangedCb = function (snapshot) {
					var user = snapshot.name();
					if (snapshot.val() && (snapshot.val().connected && snapshot.val().wasInsideRoom)) {
						console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin) user has joined: ' + user);
						p_cb(user);
					}
				};
				dataref.child('participantList').on('child_changed', participantListJoinChangedCb);
			} else {
				console.error('(webcomSDK::room[' + roomId + ']::_setOnParticipantJoin)parameter incorrect. Expected function');
			}
		}
	
		/**
	  * Initializes the Participants left listener.
	  * Defines callback (remove any existing one) for the participants.
	  * This callback is called when a new participant is removed.
	  */
		function _setOnParticipantLeave(p_cb) {
	
			if (participantListLeaveCb) {
				dataref.child('participantList').off('child_changed', participantListLeaveCb);
				participantListLeaveCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				participantListLeaveCb = function (snapshot) {
					var user = snapshot.name();
					if (snapshot.val() && (!snapshot.val().connected && snapshot.val().wasInsideRoom)) {
						console.log('(webcomSDK::room[' + roomId + ']::_setOnParticipantLeave) user has left: ' + user);
						p_cb(user);
					}
				};
				dataref.child('participantList').on('child_changed', participantListLeaveCb);
			} else {
				console.error('(webcomSDK::room[' + roomId + ']::_setOnParticipantLeave)parameter incorrect. Expected function');
			}
		}
	
		/**
	  * Sends an instant message by pushing an new element in the database with a timestamp, the message and its author (i.e. the current user)
	  * @param {string}message - The message to send
	  */
		function _sendInstantMessage(message) {
			if (message !== '') {
				console.log('(webcomSDK::room[' + roomId + ']::sendInstantMessage)message=' + message);
				dataref.child('instantMessageList').push({
					from: me,
					message: message,
					timestamp: Webcom.ServerValue.TIMESTAMP
				});
			}
		}
	
		/**
	  * Initializes the instant message listener.
	  * Defines callback (remove any existing one) for : instant messages.
	  * This callback is called, first for any existing instant messages, then when a new value is added in the database.
	  */
		function _setOnInstantMessage(p_cb) {
	
			if (instantMessageListCb) {
				dataref.child('instantMessageList').off('child_added', instantMessageListCb);
				instantMessageListCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				instantMessageListCb = function (snapshot) {
					var obj = snapshot.val();
					console.log('(webcomSDK::room[' + roomId + ']::_setOnInstantMessage)receive InstantMessage=' + JSON.stringify(obj));
					p_cb(obj);
				};
				dataref.child('instantMessageList').on('child_added', instantMessageListCb);
			} else {
				console.error('(webcomSDK::room[' + roomId + ']::_setOnInstantMessage)parameter incorrect. Expected function');
			}
		}
	
		/**
	  * Publishes the stream
	  * @param streamId - The identifier of the stream to publish
	  * @param localVid - The local video
	  * @param actionType - A value determining the type of stream in use (video, audio, video and audio, screen-sharing).
	  * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	  */
		function _publishStream(streamId, localVid, actionType, getLocalStreamCb) {
			console.log('(webcomSDK::room[' + roomId + ']::publishStream)roomId=' + roomId + ',streamId=' + streamId + ',me=' + me + ',actionType=' + actionType);
			if (!(streamId && typeof streamId == 'string')) {
				console.error('(webcomSDK::reach::inviteToRoom)parameter streamId is incorrect. Expecting non empty string');
				return;
			}
			var localDataRef = dataref.child('publishedMediaList').child(streamId);
			var remoteDataRef = localDataRef.child('subscribersList');
	
			function pubAndSubscribe() {
				// publish the stream
				localDataRef.set({ from: me, appInstanceId: _utils2['default'].appInstanceId, actionType: actionType });
				localDataRef.onDisconnect().remove();
	
				// subscribe to stream updates for add
				var addSubscribersListCb = function addSubscribersListCb(snapshot) {
					var remoteAppInstanceId = snapshot.name();
					var data = snapshot.val();
					var subscriberId = data.userId;
					var _peercoId = data.peercoId;
					var _peercoRef = data.peercoRef;
					console.log('(webcomSDK::room[' + roomId + ']::publishStream::addSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' added ' + JSON.stringify(data));
					if (!roomWebrtcStacks[streamId + '_pub']) {
						roomWebrtcStacks[streamId + '_pub'] = [];
					}
					var isAudioMute = false;
					var isVideoMute = false;
					if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute = true;
					if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute = true;
					var mStackId = webrtcmngr.createWebrtc(localVid, remoteAppInstanceId, function () {
						console.log('(webcomSDK::room[' + roomId + ']::publishStream::addSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' connection lost');
						//				onUnPublishedStream(localVid, remoteVid);
					}, true, actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute);
	
					roomWebrtcStacks[streamId + '_pub'].push({
						stackId: mStackId,
						subscriberId: subscriberId,
						isPublish: true,
						peercoId: _peercoId,
						peercoRef: _peercoRef
					});
					//delete roomWebrtcStacks[streamId+"_pub"];
					//$("div#videoButton_"+roomId+".videoButton, div#micButton_"+roomId+".micButton").removeClass("disabled");
				};
				// subscribe to stream updates for remove
				var removeSubscribersListCb = function removeSubscribersListCb(snapshot) {
					var subscriberId = snapshot.name();
					if (subscriberId) {
						console.log('(webcomSDK::room[' + roomId + ']::publishStream::removeSubscribersListCb)subscriber ' + subscriberId + ' to stream ' + streamId + ' removed');
						if (roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
							for (var i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
								if (roomWebrtcStacks[streamId + '_pub'][i].subscriberId === subscriberId) {
									webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_pub'][i].stackId, true);
								}
							}
							delete roomWebrtcStacks[streamId + '_pub'];
						}
					}
				};
	
				mStreams[streamId] = {
					addSubscribersListCb: addSubscribersListCb,
					removeSubscribersListCb: removeSubscribersListCb
				};
	
				remoteDataRef.on('child_added', addSubscribersListCb);
				remoteDataRef.on('child_removed', removeSubscribersListCb);
			}
	
			//init local stream
			if (actionType) {
				if (actionType === _actions2['default'].ACTION_TYPE_VIDEO) {
					_localstream2['default'].connectLocalVideoStream(localVid, pubAndSubscribe, getLocalStreamCb);
				} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO) {
					_localstream2['default'].connectLocalAudioStream(localVid, pubAndSubscribe, getLocalStreamCb);
				} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO_VIDEO) {
					_localstream2['default'].connectLocalAudioVideoStream(localVid, pubAndSubscribe, getLocalStreamCb);
				}
			}
		}
	
		/**
	  * Initializes the Published MediaList listener.
	  * Defines callback (remove any existing one) for : published Media.
	  * This callback is called, first for any existing published media, then when a new value is added in the database.
	  */
		function _setOnPublishedStream(p_cb) {
	
			if (publishedMediaListCb) {
				dataref.child('publishedMediaList').off('child_added', publishedMediaListCb);
				publishedMediaListCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				publishedMediaListCb = function (snapshot) {
					var obj = {};
					obj[snapshot.name()] = snapshot.val();
					obj[snapshot.name()].roomId = roomId;
					p_cb(obj);
				};
				dataref.child('publishedMediaList').on('child_added', publishedMediaListCb);
			} else {
				console.error('(webcomSDK::room[' + roomId + ']::_setOnPublishedStream)parameter incorrect. Expected function');
			}
		}
	
		/**
	  * Unpublishes the stream
	  * @param streamId - The stream identifier
	  * @param {function} callback - The callback to trigger
	  */
		function _unPublishStream(streamId, callback) {
			console.log('(webcomSDK::room[' + roomId + ']::unPublishStream)streamId ' + streamId);
			var localDataRef = dataref.child('publishedMediaList').child(streamId);
			var remoteDataRef = localDataRef.child('subscribersList');
			if (mStreams[streamId] && mStreams[streamId].addSubscribersListCb) {
				remoteDataRef.off('child_added', mStreams[streamId].addSubscribersListCb);
			}
			if (mStreams[streamId] && mStreams[streamId].removeSubscribersListCb) {
				remoteDataRef.off('child_removed', mStreams[streamId].removeSubscribersListCb);
			}
			delete mStreams[streamId];
			delete mMutedStreams[streamId];
			localDataRef.onDisconnect().cancel();
			localDataRef.remove();
			if (roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
				var nbStack = roomWebrtcStacks[streamId + '_pub'].length;
				for (var i = nbStack - 1; i >= 0; i--) {
	
					webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_pub'][i].stackId, true, function () {
						nbStack--;
						if (nbStack < 1) {
							delete roomWebrtcStacks[streamId + '_pub'];
	
							if (callback && typeof callback == 'function') callback();
						}
					});
				}
			} else {
				delete roomWebrtcStacks[streamId + '_pub'];
				if (callback && typeof callback == 'function') callback();
			}
		}
	
		/**
	  * Initializes the unPublished MediaList listener.
	  * Defines callback (remove any exinting one) for : unpublished Media.
	  * This callback is called when a media is unpublish.
	  */
		function _setOnUnPublishedStream(p_cb) {
	
			if (unPublishedMediaListCb) {
				dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCb);
				unPublishedMediaListCb = null;
			}
			if (p_cb && typeof p_cb == 'function') {
				unPublishedMediaListCb = function (snapshot) {
					var streamId = snapshot.name();
					p_cb(streamId);
				};
				dataref.child('publishedMediaList').on('child_removed', unPublishedMediaListCb);
			} else {
				console.error('(webcomSDK::room[' + roomId + ']::_setOnUnPublishedStream)parameter incorrect. Expected function');
			}
		}
	
		/**
	  * Subscribes to a stream and adds callbacks to the dedicated node according to the action type of the stream data.
	  * @param streamData - The stream data
	  * @param remoteVid - The remote video
	  * @param getRemoteStreamCb - a callback function to retrieve the mediastream object
	  */
		function _subscribeToStream(streamData, remoteVid, getRemoteStreamCb) {
			var streamId = _Object$keys(streamData)[0];
			var actionType = streamData[streamId].actionType;
			console.log('(webcomSDK::room[' + roomId + ']::subscribeToStream)streamId ' + streamId);
			//test if stream is not our
			if (mStreams && mStreams[streamId]) {
				//it is our stream -> subscribe to localStream
				if (actionType) {
					if (actionType === _actions2['default'].ACTION_TYPE_VIDEO) {
						_localstream2['default'].connectLocalVideoStream(remoteVid, getRemoteStreamCb);
					} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO) {
						_localstream2['default'].connectLocalAudioStream(remoteVid, getRemoteStreamCb);
					} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO_VIDEO) {
						_localstream2['default'].connectLocalAudioVideoStream(remoteVid, getRemoteStreamCb);
					}
				}
				return streamId;
			}
	
			var appInstanceId = streamData[streamId].appInstanceId;
	
			var localDataRef = dataref.child('publishedMediaList').child(streamId);
			var remoteDataRef = localDataRef.child('subscribersList');
			var _peercoId = null;
			var _peercoRef = null;
			if (!roomWebrtcStacks[streamId + '_sub']) {
				roomWebrtcStacks[streamId + '_sub'] = [];
			} else if (roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'][0] && roomWebrtcStacks[streamId + '_sub'][0].peercoId) {
				_peercoId = roomWebrtcStacks[streamId + '_sub'][0].peercoId;
			}
	
			// Returns a random integer between min (included) and max (included)
			// Using Math.round() will give you a non-uniform distribution!
			function getRandomIntInclusive(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
	
			if (!_peercoId) {
				_peercoId = Math.floor(Date.now()).toString() + getRandomIntInclusive(0, 1000000);
			}
	
			_peercoRef = datarefs.getWebrtc().push().name();
	
			remoteDataRef.child(_utils2['default'].appInstanceId).set({
				ts: Webcom.ServerValue.TIMESTAMP,
				userId: me,
				peercoId: _peercoId,
				peercoRef: _peercoRef
			});
			var isAudioMute = false;
			var isVideoMute = false;
			if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) isAudioMute = true;
			if (mMutedStreams[streamId] && mMutedStreams[streamId].video) isVideoMute = true;
	
			var mStackId = webrtcmngr.createWebrtc(remoteVid, appInstanceId, function () {
				//	onUnPublishedStream(localVid, remoteVid);
			}, false, actionType, _peercoId, _peercoRef, isAudioMute, isVideoMute, getRemoteStreamCb);
	
			//handle remote unpublish
			if (!remoteUnpublishedtCb) {
				remoteUnpublishedtCb = function (snapshot) {
					var removedStreamId = _Object$keys(snapshot)[0];
					if (roomWebrtcStacks[removedStreamId + '_sub']) {
						var i = 0;
						while (i < roomWebrtcStacks[streamId + '_sub'].length) {
							webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_sub'][i].stackId, false);
							i++;
						}
						delete roomWebrtcStacks[removedStreamId + '_sub'];
					}
				};
				dataref.child('publishedMediaList').on('child_removed', remoteUnpublishedtCb);
			}
	
			roomWebrtcStacks[streamId + '_sub'].push({
				stackId: mStackId,
				isPublish: false,
				peercoId: _peercoId,
				peercoRef: _peercoRef
			});
			return streamId;
		}
	
		/**
	  * Unsubscribe from a stream
	  * @param streamId - The stream identifier from which the unsubscription have to be done
	  */
		function _unSubscribeFromStream(streamId) {
			console.log('(webcomSDK::room[' + roomId + ']::unSubscribeFromStream)streamId ' + streamId);
			var localDataRef = dataref.child('publishedMediaList').child(streamId);
			var remoteDataRef = localDataRef.child('subscribersList');
			remoteDataRef.child(_utils2['default'].appInstanceId).remove();
	
			if (roomWebrtcStacks[streamId + '_sub']) {
				var i = 0;
				while (i < roomWebrtcStacks[streamId + '_sub'].length) {
					if (roomWebrtcStacks[streamId + '_sub'][i]) {
						webrtcmngr.closeWebrtc(roomWebrtcStacks[streamId + '_sub'][i].stackId, false);
					}
					i++;
				}
				delete roomWebrtcStacks[streamId + '_sub'];
			}
			delete mMutedStreams[streamId];
		}
	
		/**
	  * Returns all the available streams
	  * @return {array}
	  */
		function _getAvailableStreams() {
			console.log('(webcomSDK::room[' + roomId + ']::_getAvailableStreams)');
			return mAvailableStreams;
		}
	
		/**
	  * Returns an available stream having the identifier
	  * @param streamId - The stream identifier
	  * @return - A stream
	  */
		function _getAvailableStream(streamId) {
			console.log('(webcomSDK::room[' + roomId + ']::_getAvailableStream)streamId=' + streamId);
			if (mAvailableStreams && streamId) {
				for (var i = mAvailableStreams.length - 1; i >= 0; i--) {
					if (mAvailableStreams[i] && _Object$keys(mAvailableStreams[i])[0] && _Object$keys(mAvailableStreams[i])[0] === streamId) {
						return mAvailableStreams[i];
					}
				}
			}
			return null;
		}
	
		/**
	  * Adds an available stream
	  * @param data - The stream to add
	  */
		function _addAvailableStream(data) {
			console.log('(webcomSDK::room[' + roomId + ']::_addAvailableStream)data=' + JSON.stringify(data));
			mAvailableStreams.push(data);
		}
	
		/**
	  * Removes an available stream
	  * @param stream - The streamId to remove
	  */
		function _removeAvailableStream(streamId) {
			console.log('(webcomSDK::room[' + roomId + ']::_removeAvailableStream)streamId=' + streamId);
			if (mAvailableStreams && streamId) {
				for (var i = mAvailableStreams.length - 1; i >= 0; i--) {
					if (mAvailableStreams[i] && _Object$keys(mAvailableStreams[i])[0] && _Object$keys(mAvailableStreams[i])[0] === streamId) {
						delete mAvailableStreams[i];
					}
				}
			}
		}
	
		/**
	  * Removes all the streams by deleting the array containing them without triggerring callbacks
	  */
		function _removeAllAvailableStreams() {
			console.log('(webcomSDK::room[' + roomId + ']::_removeAllAvailableStreams');
			mAvailableStreams = [];
		}
	
		/**
	  * Audio mute the stream streamId
	  * @param streamId - The stream identifier to mute
	  */
		function _muteAudioStream(streamId) {
			if (!(streamId && typeof streamId == 'string')) {
				console.error('(webcomSDK::room[' + roomId + ']::_muteAudioStream)parameter streamId is incorrect. Expecting non empty string');
				return;
			}
			console.log('(webcomSDK::room[' + roomId + ']::_muteAudioStream)streamId=' + streamId);
			if (!mMutedStreams[streamId]) mMutedStreams[streamId] = {};
			mMutedStreams[streamId].audio = true;
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
					webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
				}
			}
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
					webrtcmngr.muteAudioWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
				}
			}
		}
	
		/**
	  * Audio unmuteStream the stream streamId
	  * @param streamId - The stream identifier to unmute
	  */
		function _unmuteAudioStream(streamId) {
			if (!(streamId && typeof streamId == 'string')) {
				console.error('(webcomSDK::room[' + roomId + ']::_unmuteAudioStream)parameter streamId is incorrect. Expecting non empty string');
				return;
			}
			if (mMutedStreams[streamId] && mMutedStreams[streamId].audio) mMutedStreams[streamId].audio = false;
			console.log('(webcomSDK::room[' + roomId + ']::_unmuteAudioStream)streamId=' + streamId);
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
					webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
				}
			}
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
					webrtcmngr.unmuteAudioWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
				}
			}
		}
	
		/**
	  * Video mute the stream streamId
	  * @param streamId - The stream identifier to mute
	  */
		function _muteVideoStream(streamId) {
			if (!(streamId && typeof streamId == 'string')) {
				console.error('(webcomSDK::room[' + roomId + ']::_muteVideoStream)parameter streamId is incorrect. Expecting non empty string');
				return;
			}
			console.log('(webcomSDK::room[' + roomId + ']::_muteVideoStream)streamId=' + streamId);
			if (!mMutedStreams[streamId]) mMutedStreams[streamId] = {};
			mMutedStreams[streamId].video = true;
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
					webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
				}
			}
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
					webrtcmngr.muteVideoWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
				}
			}
		}
	
		/**
	  * Video unmuteStream the stream streamId
	  * @param streamId - The stream identifier to unmute
	  */
		function _unmuteVideoStream(streamId) {
			if (!(streamId && typeof streamId == 'string')) {
				console.error('(webcomSDK::room[' + roomId + ']::_unmuteVideoStream)parameter streamId is incorrect. Expecting non empty string');
				return;
			}
			if (mMutedStreams[streamId] && mMutedStreams[streamId].video) mMutedStreams[streamId].video = false;
			console.log('(webcomSDK::room[' + roomId + ']::_unmuteVideoStream)streamId=' + streamId);
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_pub'] && roomWebrtcStacks[streamId + '_pub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_pub'].length - 1; i >= 0; i--) {
					webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId + '_pub'][i].stackId);
				}
			}
			if (roomWebrtcStacks && roomWebrtcStacks[streamId + '_sub'] && roomWebrtcStacks[streamId + '_sub'].length > 0) {
				for (var i = roomWebrtcStacks[streamId + '_sub'].length - 1; i >= 0; i--) {
					webrtcmngr.unmuteVideoWebrtcStack(roomWebrtcStacks[streamId + '_sub'][i].stackId);
				}
			}
		}
	
		/**
	  * Closes the room.
	  * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
	  * @param updateRoomStatusToClose - true if the room should be marked as closed
	  */
		function _close(updateRoomStatusToClose) {
			console.log('(webcomSDK::room[' + roomId + ']::_close)room ' + roomId + ', detroyRoom=' + updateRoomStatusToClose);
			// mark as disconnected when the room is left
			dataref.child('participantList').child(me).child('connected').set(false);
			// remove webcom callbacks
			for (var stream in mStreams) {
				_unPublishStream(stream);
			}
			mStreams = [];
			if (instantMessageListCb) {
				dataref.child('instantMessageList').off('child_added', instantMessageListCb);
				instantMessageListCb = null;
			}
			if (publishedMediaListCb) {
				dataref.child('publishedMediaList').off('child_added', publishedMediaListCb);
				publishedMediaListCb = null;
			}
			if (publishedMediaListCbForAvailableStream) {
				dataref.child('publishedMediaList').off('child_added', publishedMediaListCbForAvailableStream);
				publishedMediaListCbForAvailableStream = null;
			}
	
			if (unPublishedMediaListCb) {
				dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCb);
				unPublishedMediaListCb = null;
			}
	
			if (unPublishedMediaListCbForAvailableStream) {
				dataref.child('publishedMediaList').off('child_removed', unPublishedMediaListCbForAvailableStream);
				unPublishedMediaListCbForAvailableStream = null;
			}
	
			if (participantListJoinAddedCb) {
				dataref.child('participantList').off('child_added', participantListJoinAddedCb);
				participantListJoinAddedCb = null;
			}
	
			if (participantListJoinChangedCb) {
				dataref.child('participantList').off('child_changed', participantListJoinChangedCb);
				participantListJoinChangedCb = null;
			}
	
			if (participantListLeaveCb) {
				dataref.child('participantList').off('child_changed', participantListLeaveCb);
				participantListLeaveCb = null;
			}
	
			if (remoteUnpublishedtCb) {
				dataref.child('publishedMediaList').off('child_removed', remoteUnpublishedtCb);
				remoteUnpublishedtCb = null;
			}
	
			// close all webrtc stacks
			for (var i in roomWebrtcStacks) {
				for (var j = 0; j < roomWebrtcStacks[i].length; j++) {
					if (roomWebrtcStacks[i][j]) {
						if (roomWebrtcStacks[i][j].isPublish) {
							webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId, true);
						} else {
							webrtcmngr.closeWebrtc(roomWebrtcStacks[i][j].stackId, false);
						}
						webrtcmngr.clearWebrtcStacks(roomWebrtcStacks[i][j].stackId);
					}
				}
			}
			roomWebrtcStacks = {};
	
			mMutedStreams = [];
	
			_removeAllAvailableStreams();
			if (updateRoomStatusToClose && updateRoomStatusToClose === true) {
				dataref.child('commonDataList').child('status').set('CLOSE');
			}
		}
	
		(function init() {
			dataref.child('participantList').child(me).update({
				connected: true,
				wasInsideRoom: true
			});
	
			dataref.child('participantList').child(me).child('connected').onDisconnect().set(false);
	
			initFirebaseListener();
		})();
	
		return {
			/**
	   * Return the room identifier
	   * @return {string} - The room identifier
	   */
			getRoomId: function getRoomId() {
				return _getRoomId();
			},
			/**
	   * Returns the user identifier
	   * @return {string} - The user identifier
	   */
			getMe: function getMe() {
				return _getMe();
			},
			/**
	   * Defines the callback to trigger when a participant has joined the room
	   * @param {function} p_cb - The callback
	   */
			setOnParticipantJoin: function setOnParticipantJoin(p_cb) {
				_setOnParticipantJoin(p_cb);
			},
			/**
	   * Defines the callback to trigger when a aprticipant has leaft the room
	   * @param {function} p_cb - The callback
	   */
			setOnParticipantLeave: function setOnParticipantLeave(p_cb) {
				_setOnParticipantLeave(p_cb);
			},
			/**
	   * Sends an instant message
	   * @param {string} message - The emssage to send
	   * @return nothing
	   */
			sendInstantMessage: function sendInstantMessage(message) {
				return _sendInstantMessage(message);
			},
			/**
	   * Defines the callback to trigger to send an instant message
	   * @param {function} p_cb - The callback
	   */
			setOnInstantMessage: function setOnInstantMessage(p_cb) {
				_setOnInstantMessage(p_cb);
			},
			/**
	   * Publishes a stream
	   * @param streamId - The identifier of the stream to publish
	   * @param localVid - The local video
	   * @param actionType -
	   * @param getStreamCb - a callback function to retrieve the mediastream object
	   * @return nothing
	   */
			publishStream: function publishStream(streamId, localVid, actionType, getStreamCb) {
				return _publishStream(streamId, localVid, actionType, getStreamCb);
			},
			/**
	   * Defines the callback to triggerwhen a stream has been published
	   * @param {function} p_cb - The callback
	   */
			setOnPublishedStream: function setOnPublishedStream(p_cb) {
				_setOnPublishedStream(p_cb);
			},
			/**
	   * Unpublishes the stream
	   * @param streamId - The identifier of the stream to unpublish
	   * @param callback - The clalback to trigger when the stream has been unpublished
	   */
			unPublishStream: function unPublishStream(streamId, callback) {
				return _unPublishStream(streamId, callback);
			},
			/**
	   * Defines the callback to trigger when a stream has been unpublished
	   * @param {function} p_cb - The callback
	   */
			setOnUnPublishedStream: function setOnUnPublishedStream(p_cb) {
				_setOnUnPublishedStream(p_cb);
			},
	
			/**
	   * Subscribes to a stream
	   * @param streamData - The stream data
	   * @param remoteVid - The remote video
	   * @param getStreamCb - a callback function to retrieve the mediastream object
	   * @return nothing
	   */
			subscribeToStream: function subscribeToStream(streamData, remoteVid, getStreamCb) {
				return _subscribeToStream(streamData, remoteVid, getStreamCb);
			},
			/**
	   * Unsubcribes from a stream
	   * @param streamId - The identifier of the stream to unsubscribe
	   */
			unSubscribeFromStream: function unSubscribeFromStream(streamId) {
				return _unSubscribeFromStream(streamId);
			},
			/**
	   * Returns all the available streams
	   * @return {array} - The available streams
	   */
			getAvailableStreams: function getAvailableStreams() {
				return _getAvailableStreams();
			},
			/**
	   * Returns the stream matching the identifier
	   * @param stream - The stream identifier
	   */
			getAvailableStream: function getAvailableStream(stream) {
				return _getAvailableStream(stream);
			},
			/**
	   *  mute audio the stream streamId
	   * @param streamId - The stream identifier to mute
	   */
			muteAudioStream: function muteAudioStream(streamId) {
				_muteAudioStream(streamId);
			},
			/**
	   * unmute audio the stream streamId
	   * @param streamId - The stream identifier to mute
	   */
			unmuteAudioStream: function unmuteAudioStream(streamId) {
				_unmuteAudioStream(streamId);
			},
			/**
	   *  mute Video the stream streamId
	   * @param streamId - The stream identifier to mute
	   */
			muteVideoStream: function muteVideoStream(streamId) {
				_muteVideoStream(streamId);
			},
			/**
	   * unmute Video the stream streamId
	   * @param streamId - The stream identifier to mute
	   */
			unmuteVideoStream: function unmuteVideoStream(streamId) {
				_unmuteVideoStream(streamId);
			},
			/**
	   * Closes the room.
	   * Sets the connected status of the current participant to false, deletes medias and callbacks, then close WebRTC stacks in use.
	   * @param updateRoomStatusToClose - true if the room should be marked as closed
	   */
			close: function close(updateRoomStatusToClose) {
				return _close(updateRoomStatusToClose);
			},
			/**
	   * Calls the maching function for a dedicated event
	   * @param {string} evt - The event, in "instantMessage", "publishedStream", "unPublishedStream", "participantJoin", "participantLeave"
	   * @param {function} p_cb - The callback to call
	   */
			on: function on(evt, p_cb) {
				switch (evt) {
					case 'instantMessage':
						_setOnInstantMessage(p_cb);
						break;
					case 'publishedStream':
						_setOnPublishedStream(p_cb);
						break;
					case 'unPublishedStream':
						_setOnUnPublishedStream(p_cb);
						break;
					case 'participantJoin':
						_setOnParticipantJoin(p_cb);
						break;
					case 'participantLeave':
						_setOnParticipantLeave(p_cb);
						break;
					default:
						console.err('(webcomSDK::room[' + roomId + ']::on)unsupported ' + evt + ' event');
						break;
				}
			}
		};
	};
	
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * @file localstream.js - JS file to handle local streams.
	 * @description Provides data structures to store and handle video, audio and video-and-audio streams. The audio and video streams are managed too.
	 * Initialization methods are provided, stream connections and listeners too.
	 * @author Webcom
	 */
	
	/**
	 * @constructor
	 * @description The local stream object with its streams, flags and callbacks. It is a singleton.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var localstream = (function () {
	
		/**
	  * @description The local video streams, as HTML video objects, in an array
	  */
		var localVideoStreams = [];
		/**
	  * @description The local audio streams, as HTML video objects, in an array
	  */
		var localAudioStreams = [];
		/**
	  * @description The local audio and video streams, as HTML video objects, in an array
	  */
		var localAudioVideoStreams = [];
		/**
	  * @description The video stream object
	  */
		var streamVideo = null;
		/**
	  * @description The audio stream object
	  */
		var streamAudio = null;
		/**
	  * @description The video and audio stream object
	  */
		var streamAudioVideo = null;
		/**
	  * @description An array containing video listeners as functions. These listeners will be triggered if the video stream is established.
	  */
		var listenersVideo = [];
		/**
	  * @description An array containing audio listeners as functions. These listeners will be triggered if the audio stream is established.
	  */
		var listenersAudio = [];
		/**
	  * @description An array containing audio and video listeners as functions. These listeners will be triggered if the vide-and-audio stream is established.
	  */
		var listenersAudioVideo = [];
		/**
	  * @description The local video stream, as an HTML video element
	  */
		var mLocalStreamVideo = null;
		/**
	  * @description The local audio stream, as an HTML video element
	  */
		var mLocalStreamAudio = null;
		/**
	  * @description The local audio and video stream, as an HTML video element
	  */
		var mLocalStreamAudioVideo = null;
		/**
	  * @description Flag indicating if the video initialisation is in progress
	  */
		var initVideoProgress = false;
		/**
	  * @description Flag indicating if the audio initialisation is in progress
	  */
		var initAudioProgress = false;
		/**
	  * @description Flag indicating if the audio and video initialisation is in progress
	  */
		var initAudioVideoProgress = false;
	
		/**
	  * Initializes the video local stream.
	  * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	  * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
	  * Listeners will also be called.
	  */
		function _initVideo(callback) {
			console.log('(webcomSDK::localstream::initVideo)');
			if (!initVideoProgress) {
				initVideoProgress = true;
	
				navigator.getMedia = getUserMedia;
				mLocalStreamVideo = document.createElement('VIDEO');
				mLocalStreamVideo.muted = true;
				localVideoStreams.push(mLocalStreamVideo);
	
				if (streamVideo === null) {
					navigator.getMedia({ audio: false, video: true }, function (s) {
						streamVideo = s;
						for (var i = 0; i < localVideoStreams.length; i++) {
							attachMediaStream(localVideoStreams[i], streamVideo);
						}
						localVideoStreams = [];
						for (var j = 0; j < listenersVideo.length; j++) {
							listenersVideo[j](streamVideo);
						}
						listenersVideo = [];
						initVideoProgress = false;
	
						if (callback) {
							callback();
						}
					}, function (error) {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initVideoProgress = false;
	
						if (callback) {
							callback(error);
						}
					});
				} else {
					for (var i = 0; i < localVideoStreams.length; i++) {
						attachMediaStream(localVideoStreams[i], streamVideo);
					}
					localVideoStreams = [];
					for (var j = 0; j < listenersVideo.length; j++) {
						listenersVideo[j](streamVideo);
					}
					listenersVideo = [];
					initVideoProgress = false;
				}
			}
		}
	
		/**
	  * Initializes the video local stream.
	  * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	  * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	  * Listeners will also be called.
	  */
		function _initAudio(callback) {
			console.log('(webcomSDK::localstream::initAudio)');
			if (!initAudioProgress) {
				initAudioProgress = true;
	
				navigator.getMedia = getUserMedia;
				mLocalStreamAudio = document.createElement('AUDIO');
				mLocalStreamAudio.muted = true;
				localAudioStreams.push(mLocalStreamAudio);
	
				if (streamAudio === null) {
					navigator.getMedia({ audio: true, video: false }, function (s) {
						streamAudio = s;
						for (var i = 0; i < localAudioStreams.length; i++) {
							attachMediaStream(localAudioStreams[i], streamAudio);
						}
						localAudioStreams = [];
						for (var j = 0; j < listenersAudio.length; j++) {
							listenersAudio[j](streamAudio);
						}
						listenersAudio = [];
						initAudioProgress = false;
	
						if (callback) {
							callback();
						}
					}, function (error) {
						console.error('Error on webrtcLocalStream - webkitGetUserMedia :error=');
						console.dir(error);
						initAudioProgress = false;
	
						if (callback) {
							callback(error);
						}
					});
				} else {
					for (var i = 0; i < localAudioStreams.length; i++) {
						attachMediaStream(localAudioStreams[i], streamAudio);
					}
					localAudioStreams = [];
					for (var j = 0; j < listenersAudio.length; j++) {
						listenersAudio[j](streamAudio);
					}
					listenersAudio = [];
					initAudioProgress = false;
				}
			}
		}
	
		/**
	  * Initializes the audio-and-video local stream.
	  * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	  * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	  * Listeners will also be called.
	  */
		function _initAudioVideo(callback) {
			console.log('(webcomSDK::localstream::initAudioVideo)');
			if (!initAudioVideoProgress) {
				initAudioVideoProgress = true;
	
				navigator.getMedia = getUserMedia;
				mLocalStreamAudioVideo = document.createElement('AUDIOVIDEO');
				mLocalStreamAudioVideo.muted = true;
				localAudioVideoStreams.push(mLocalStreamAudioVideo);
	
				if (streamAudioVideo === null) {
					navigator.getMedia({ audio: true, video: true }, function (s) {
	
						streamAudioVideo = s;
						for (var i = 0; i < localAudioVideoStreams.length; i++) {
							attachMediaStream(localAudioVideoStreams[i], streamAudioVideo);
						}
						localAudioVideoStreams = [];
						for (var j = 0; j < listenersAudioVideo.length; j++) {
							listenersAudioVideo[j](streamAudioVideo);
						}
						listenersAudioVideo = [];
						initAudioVideoProgress = false;
	
						if (callback) {
							callback();
						}
					}, function (error) {
						console.error('(webcomSDK::localstream::initAudioVideo::Error on webrtcLocalStream - webkitGetUserMedia : error=');
						console.dir(error);
						initAudioVideoProgress = false;
	
						if (callback) {
							callback(error);
						}
					});
				} else {
					for (var i = 0; i < localAudioVideoStreams.length; i++) {
						attachMediaStream(localAudioVideoStreams[i], streamAudioVideo);
					}
					localAudioVideoStreams = [];
					for (var j = 0; j < listenersAudioVideo.length; j++) {
						listenersAudioVideo[j](streamAudioVideo);
					}
					listenersAudioVideo = [];
					initAudioVideoProgress = false;
				}
			}
		}
	
		/**
	  * Closes all the streams.
	  * Set all the initProgress flags to false, detach all the streams after stopping them.
	  */
		function _close() {
			console.log('(webcomSDK::localstream::close)');
			if (mLocalStreamVideo) {
				detachMediaStream(mLocalStreamVideo);
				mLocalStreamVideo = null;
			}
			if (streamAudioVideo) {
				streamAudioVideo.stop();
				streamAudioVideo = null;
			}
			if (streamVideo) {
				streamVideo.stop();
				streamVideo = null;
			}
			initVideoProgress = false;
	
			if (mLocalStreamAudio) {
				detachMediaStream(mLocalStreamAudio);
				mLocalStreamAudio = null;
			}
			if (streamAudio) {
				streamAudio.stop();
				streamAudio = null;
			}
	
			initAudioProgress = false;
	
			if (mLocalStreamAudioVideo) {
				detachMediaStream(mLocalStreamAudioVideo);
				mLocalStreamAudioVideo = null;
			}
			if (streamAudioVideo) {
				streamAudioVideo.stop();
				streamAudioVideo = null;
			}
	
			initAudioVideoProgress = false;
		}
	
		return {
			/**
	   * Returns the video stream
	   */
			getVideoStream: function getVideoStream() {
				return streamVideo;
			},
			/**
	   * Adds a video listener which will be called after the video stream is established.
	   * @param {function} cb - The listener to add
	   */
			addVideoListener: function addVideoListener(cb) {
				listenersVideo.push(cb);
			},
			/**
	   * Initializes the video local stream.
	   * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	   * A video element will be created, and pushed to the local streams objects. The catched video and audio stream will be attached to the created HTML element.
	   * Listeners will also be called.
	   */
			initVideo: function initVideo() {
				_initVideo();
			},
			/**
	   * Makes the connection to the local video stream, and attach the local video stream to the video element if defined.
	   * If the video element is not defined, the video local stream will be initialized and a dedicated HTML video tag will be created.
	   * @param videoElt - The video element where place the connected local video stream. if null, a new one will be created.
	   * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	   */
			connectLocalVideoStream: function connectLocalVideoStream(videoElt, publishStreamCb, getLocalStreamCb) {
				if (videoElt) {
					videoElt.muted = true;
					if (streamVideo) {
						console.log('(webcomSDK::localstream::connectLocalVideoStream)use existing streamVideo');
						attachMediaStream(videoElt, streamVideo);
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							getLocalStreamCb(streamVideo);
						}
					} else {
						localVideoStreams.push(videoElt);
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersVideo.push(getLocalStreamCb);
						}
						_initVideo(publishStreamCb);
					}
				} else {
					if (!streamVideo) {
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersVideo.push(getLocalStreamCb);
						}
						_initVideo(publishStreamCb);
					} else {
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							getLocalStreamCb(streamVideo);
						}
					}
				}
			},
			/**
	   * Returns the audio stream
	   * @return - An audio stream
	   */
			getAudioStream: function getAudioStream() {
				return streamAudio;
			},
			/**
	   * Adds an audio listener which will be called after the audio stream is established.
	   * @param {function} cb - The listener to add
	   */
			addAudioListener: function addAudioListener(cb) {
				listenersAudio.push(cb);
			},
			/**
	   * Initializes the audio local stream.
	   * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	   * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	   * Listeners will also be called.
	   */
			initAudio: function initAudio() {
				_initAudio();
			},
			/**
	   * Connects to the local audio stream and sets it to the audio element if defined.
	   * If not, a dedicated HTML video will be created. The audio media stream will be attached to the element in use.
	   * @param AudioElt - The audio element in use possessing the attached local audio stream
	   * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	   */
			connectLocalAudioStream: function connectLocalAudioStream(AudioElt, publishStreamCb, getLocalStreamCb) {
				if (AudioElt) {
					AudioElt.muted = true;
					if (streamAudio) {
						console.log('(webcomSDK::localstream::connectLocalAudioStream)use existing streamAudio');
						attachMediaStream(AudioElt, streamAudio);
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							getLocalStreamCb(streamAudio);
						}
					} else {
						localAudioStreams.push(AudioElt);
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersAudio.push(getLocalStreamCb);
						}
						_initAudio(publishStreamCb);
					}
				} else {
					if (!streamAudio) {
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersAudio.push(getLocalStreamCb);
						}
						_initAudio(publishStreamCb);
					} else {
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							getLocalStreamCb(streamAudio);
						}
					}
				}
			},
			/**
	   * Returns the audio video stream
	   * @return - The audio and video stream
	   */
			getAudioVideoStream: function getAudioVideoStream() {
				return streamAudioVideo;
			},
			/**
	   * Adds the audio-and-video listener which will be called after the audi-and-video stream is established.
	   * @param cb - The audio and video listener to add
	   */
			addAudioVideoListener: function addAudioVideoListener(cb) {
				listenersAudioVideo.push(cb);
			},
			/**
	   * Initializes the audio-and-video local stream.
	   * The web browser's user media will be called, so the browser in use must be recent (Firefox 17, Chrome 21, Opera 18 and later versions).
	   * A video element will be created, and pushed to the local streams objects. The catched audio stream will be attached to the created HTML element.
	   * Listeners will also be called.
	   */
			initAudioVideo: function initAudioVideo() {
				_initAudioVideo();
			},
			/**
	   * Connects the local audio and video streams and assigns them to the audio and video element if needed.
	   * If no HTML element is passed to the functionn a new element is created
	   * @param AudioVideoElt - The element where to place the audio and video local streams
	   * @param getLocalStreamCb - a callback function to retrieve the mediastream object
	   */
			connectLocalAudioVideoStream: function connectLocalAudioVideoStream(AudioVideoElt, publishStreamCb, getLocalStreamCb) {
				if (AudioVideoElt) {
					AudioVideoElt.muted = true;
					if (streamAudioVideo) {
						console.log('(webcomSDK::localstream::connectLocalAudioVideoStream)use existing streamAudioVideo');
						attachMediaStream(AudioVideoElt, streamAudioVideo);
						if (getLocalStreamCb) {
							getLocalStreamCb(streamAudioVideo);
						}
					} else {
						localAudioVideoStreams.push(AudioVideoElt);
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersAudioVideo.push(getLocalStreamCb);
						}
						_initAudioVideo(publishStreamCb);
					}
				} else {
					if (!streamAudioVideo) {
						if (getLocalStreamCb && typeof getLocalStreamCb == 'function') {
							listenersAudioVideo.push(getLocalStreamCb);
						}
						_initAudioVideo(publishStreamCb);
					} else {
						if (getLocalStreamCb) {
							getLocalStreamCb(streamAudioVideo);
						}
					}
				}
			},
	
			/**
	   * Detaches streams and deletes listeners
	   */
			close: function close() {
				_close();
			}
		};
	})();
	
	exports['default'] = localstream;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file webrtcmngr.js - JS file for a WebRTC manager
	 * @author Webcom
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _utils = __webpack_require__(21);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _webrtc = __webpack_require__(25);
	
	var _webrtc2 = _interopRequireDefault(_webrtc);
	
	var _localstream = __webpack_require__(23);
	
	var _localstream2 = _interopRequireDefault(_localstream);
	
	/**
	 * @constructor
	 * @description WebRTC manager handling the WebRTC stacks in use
	 */
	var webrtcmngr = function webrtcmngr(datarefs) {
	
		/**
	  * @description An array containg the WebRTC stacks in use
	  */
		var webrtcStacks = [];
		/**
	  * @description An array containt the virtual WebRTC stacks
	  */
		var virtualWebrtcStacks = [];
	
		/**
	  * Creates a WebRTC object
	  * @param p_Vid - the video container linked to the peerconnection
	  * @param p_remoteAppInstId - the remote application instance identifier
	  * @param p_onCloseCb - A callback to trigger when the connection is closed
	  * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
	  * @param p_actionType - The action type (audio, video, audio-video)
	  * @param p_peercoId - The PeerConnection Id
	  * @param p_peercoRef - The PeerConnection Ref in the webrtc node
	  * @param p_peercoRef - The PeerConnection Id in the webrtc node
	  * @param p_mutedAudio - optional - if true peerconnection will be created muted
	  * @param p_muteVideo - optional - if true peerconnection will be created with video muted
	  * @param p_getStreamCb - a callback function to retrieve the mediastream object
	  */
		function _createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb, p_isPublish, p_actionType, p_peercoId, p_peercoRef, p_mutedAudio, p_muteVideo, p_getStreamCb) {
			var webrtcStackId = p_peercoId;
			//    	 if (p_isPublish) {
			//    		 webrtcStackId=utils.appInstanceId+"_"+p_remoteAppInstId;
			//         } else {
			//        	 webrtcStackId=p_remoteAppInstId+"_"+utils.appInstanceId;
			//         }
			var localDataRef = datarefs.getWebrtc().child(p_peercoRef).child(_utils2['default'].appInstanceId);
			var remoteDataRef = datarefs.getWebrtc().child(p_peercoRef).child(p_remoteAppInstId);
			var virtualWebrtcStack;
			// create the virtual webrtcstack
			if (p_isPublish) {
				virtualWebrtcStack = {
					webRtcStackId: webrtcStackId,
					localVid: p_Vid
				};
			} else {
				virtualWebrtcStack = {
					webRtcStackId: webrtcStackId,
					remoteVid: p_Vid
				};
			}
			var id = virtualWebrtcStacks.push(virtualWebrtcStack) - 1;
	
			// create the real webrtcstack if it does not already exist
			if (!webrtcStacks[webrtcStackId]) {
				console.debug('webcomSDK::webrtcmngr::createWebrtc->create a new real webrtcStack');
				// create the real webrtcstack
				var webRtcStack;
				webRtcStack = (0, _webrtc2['default'])(this, p_isPublish, localDataRef, remoteDataRef, webrtcStackId, p_actionType, p_mutedAudio, p_muteVideo);
				webRtcStack.setOnClose(p_onCloseCb);
				if (p_isPublish) {
					webrtcStacks[webrtcStackId] = {
						stack: webRtcStack,
						isPublished: 1,
						isSubscribed: 0
					};
					webRtcStack.connectLocalStream(p_Vid, p_getStreamCb);
				} else {
					webrtcStacks[webrtcStackId] = {
						stack: webRtcStack,
						isPublished: 0,
						isSubscribed: 1
					};
					webRtcStack.connectRemoteStream(p_Vid, p_getStreamCb);
				}
			} else {
				console.debug('webcomSDK::webrtcmngr::createWebrtc->use existing real webrtcStack');
				// increment ref counter
				if (p_isPublish) {
					webrtcStacks[webrtcStackId].isPublished++;
					webrtcStacks[webrtcStackId].stack.connectLocalStream(p_Vid, p_getStreamCb);
				} else {
					webrtcStacks[webrtcStackId].isSubscribed++;
					webrtcStacks[webrtcStackId].stack.connectRemoteStream(p_Vid, p_getStreamCb);
				}
			}
			console.debug('webcomSDK::webrtcmngr::createWebrtc->webrtcStack:' + webrtcStackId + ' new isPublished count =' + webrtcStacks[webrtcStackId].isPublished + ' new isSubscribed count =' + webrtcStacks[webrtcStackId].isSubscribed);
			return id;
		}
	
		/**
	  * Close WebRTC features : detach media streams and unpublish stacks.
	  * @param id -
	  * @param p_isUnPublish
	  * @param callback -
	  */
		function _closeWebrtc(id, p_isUnPublish, callback) {
			console.debug('webcomSDK::webrtcmngr::closeWebrtc->id=' + id);
			if (!virtualWebrtcStacks[id]) {
				console.warn('webcomSDK::webrtcmngr::closeWebrtc: virtualstack ' + id + ' not found');
				if (callback && typeof callback == 'function') {
					callback();
				}
				return false;
			}
	
			var webrtcStackId = virtualWebrtcStacks[id].webRtcStackId;
			if (webrtcStackId && webrtcStacks[webrtcStackId]) {
				if (p_isUnPublish && webrtcStacks[webrtcStackId].isPublished > 0) {
					webrtcStacks[webrtcStackId].isPublished--;
				} else if (!p_isUnPublish && webrtcStacks[webrtcStackId].isSubscribed > 0) {
					webrtcStacks[webrtcStackId].isSubscribed--;
				}
				if (webrtcStacks[webrtcStackId].isPublished < 1 && webrtcStacks[webrtcStackId].isSubscribed < 1) {
					console.debug('webcomSDK::webrtcmngr::closeWebrtc->destroy  real webrtcStack:' + webrtcStackId);
					// destroy the stack
					webrtcStacks[webrtcStackId].stack.close(callback);
					webrtcStacks[webrtcStackId] = null;
				} else {
					console.debug('webcomSDK::webrtcmngr::closeWebrtc->decrement  real webrtcStack:' + webrtcStackId + ' new isPublished count =' + webrtcStacks[webrtcStackId].isPublished + ' new isSubscribed count =' + webrtcStacks[webrtcStackId].isSubscribed);
					if (callback && typeof callback == 'function') {
						callback();
					}
				}
			} else {
				if (callback && typeof callback == 'function') {
					callback();
				}
				console.warn('webcomSDK::webrtcmngr::closeWebrtc cannot found real stack');
			}
	
			if (virtualWebrtcStacks[id].localVid) {
				_localstream2['default'].close();
				detachMediaStream(virtualWebrtcStacks[id].localVid);
			}
			if (virtualWebrtcStacks[id].remoteVid) {
				detachMediaStream(virtualWebrtcStacks[id].remoteVid);
			}
	
			return true;
		}
	
		/**
	  * Clears a specifical WebRTC stack by setting it to null.
	  * @param webrtcStackId - The WebRTC stack ID to clear
	  */
		function _clearWebrtcStacks(webrtcStackId) {
			console.debug('webcomSDK::webrtcmngr::clearWebrtcStacks id=' + webrtcStackId);
			if (webrtcStackId && webrtcStacks && webrtcStacks[webrtcStackId]) {
				webrtcStacks[webrtcStackId] = null;
			}
			return true;
		}
	
		/**
	  * Audio mute the webrtc peerconnection
	  * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	  */
		function _muteAudioWebrtcStack(virtualWebrtcStackId) {
			console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId);
	
			if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
				var webRtcStackId = virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
				console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'webRtcStackId=' + webRtcStackId);
				if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
					webrtcStacks[webRtcStackId].stack.muteAudio();
				} else {
					console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack=' + webRtcStackId + 'not found');
				}
			} else {
				console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'not found');
			}
		}
	
		/**
	  * Audio unmute the webrtc peerconnection
	  * @param webrtcStackId - The WebRTC stack ID to unmute
	  */
		function _unmuteAudioWebrtcStack(virtualWebrtcStackId) {
			console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId);
	
			if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
				var webRtcStackId = virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
				console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + ',webRtcStackId=' + webRtcStackId);
				if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
					webrtcStacks[webRtcStackId].stack.unmuteAudio();
				} else {
					console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack=' + webRtcStackId + 'not found');
				}
			} else {
				console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'not found');
			}
		}
	
		/**
	  * Video mute the webrtc peerconnection
	  * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	  */
		function _muteVideoWebrtcStack(virtualWebrtcStackId) {
			console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId);
	
			if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
				var webRtcStackId = virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
				console.log('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'webRtcStackId=' + webRtcStackId);
				if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
					webrtcStacks[webRtcStackId].stack.muteVideo();
				} else {
					console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) webrtcStack=' + webRtcStackId + 'not found');
				}
			} else {
				console.warn('(webcomSDK::webrtcmngr::muteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'not found');
			}
		}
	
		/**
	  * Video unmute the webrtc peerconnection
	  * @param webrtcStackId - The WebRTC stack ID to unmute
	  */
		function _unmuteVideoWebrtcStack(virtualWebrtcStackId) {
			console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId);
	
			if (virtualWebrtcStacks && virtualWebrtcStacks[virtualWebrtcStackId] && virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId) {
				var webRtcStackId = virtualWebrtcStacks[virtualWebrtcStackId].webRtcStackId;
				console.log('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + ',webRtcStackId=' + webRtcStackId);
				if (webrtcStacks && webrtcStacks[webRtcStackId] && webrtcStacks[webRtcStackId].stack) {
					webrtcStacks[webRtcStackId].stack.unmuteVideo();
				} else {
					console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) webrtcStack=' + webRtcStackId + 'not found');
				}
			} else {
				console.warn('(webcomSDK::webrtcmngr::_unmuteAudioWebrtcStack) virtualWebrtcStackId=' + virtualWebrtcStackId + 'not found');
			}
		}
	
		return {
	
			/**
	   * Creates a WebRTC object
	   * @param p_Vid - the video container linked to the peerconnection
	   * @param p_remoteAppInstId - the remote application instance identifier
	   * @param p_onCloseCb - A callback to trigger when the connection is closed
	   * @param p_isPublish - true if it's a peerconnection related to a publishStream, false if it's relatated to a subscribe
	   * @param p_actionType - The action type (audio, video, audio-video)
	   * @param p_peercoId - The PeerConnection Id in the webrtc node
	   */
			createWebrtc: function createWebrtc(p_Vid, p_remoteAppInstId, p_onCloseCb, p_isPublish, p_actionType, p_peercoId, p_mutedAudio, p_muteVideo, p_getStreamCb) {
				return _createWebrtc.bind(this)(p_Vid, p_remoteAppInstId, p_onCloseCb, p_isPublish, p_actionType, p_peercoId, p_mutedAudio, p_muteVideo, p_getStreamCb);
			},
	
			/**
	   * Close WebRTC features : detach media streams and unpublish stacks.
	   * @param id -
	   * @param p_isUnPublish
	   * @param callback -
	   */
			closeWebrtc: function closeWebrtc(id, p_isUnPublish, callback) {
				return _closeWebrtc(id, p_isUnPublish, callback);
			},
	
			/**
	   * Clears a specifical WebRTC stack by setting it to null.
	   * @param webrtcStackId - The WebRTC stack ID to clear
	   */
			clearWebrtcStacks: function clearWebrtcStacks(webrtcStackId) {
				return _clearWebrtcStacks(webrtcStackId);
			},
			/**
	   * audio mute the webrtc peerconnection
	   * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	   */
			muteAudioWebrtcStack: function muteAudioWebrtcStack(virtualWebrtcStackId) {
				return _muteAudioWebrtcStack(virtualWebrtcStackId);
			},
			/**
	   *  audio unmute the webrtc peerconnection
	   * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
	   */
			unmuteAudioWebrtcStack: function unmuteAudioWebrtcStack(virtualWebrtcStackId) {
				return _unmuteAudioWebrtcStack(virtualWebrtcStackId);
			},
			/**
	   * video mute the webrtc peerconnection
	   * @param virtualWebrtcStackId - The WebRTC stack ID to mute
	   */
			muteVideoWebrtcStack: function muteVideoWebrtcStack(virtualWebrtcStackId) {
				return _muteVideoWebrtcStack(virtualWebrtcStackId);
			},
			/**
	   * video unmute the webrtc peerconnection
	   * @param virtualWebrtcStackId - The WebRTC stack ID to unmute
	   */
			unmuteVideoWebrtcStack: function unmuteVideoWebrtcStack(virtualWebrtcStackId) {
				return _unmuteVideoWebrtcStack(virtualWebrtcStackId);
			}
		};
	};
	
	exports['default'] = webrtcmngr;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file webrtc.js - JS file used for WebRTC aspects
	 * @author Webcom
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(6)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _actions = __webpack_require__(8);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _localstream = __webpack_require__(23);
	
	var _localstream2 = _interopRequireDefault(_localstream);
	
	var _actions3 = _interopRequireDefault(_actions);
	
	/**
	 * ICE connection status : disconnected
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_DISCONNECTED = 'disconnected';
	
	/**
	 * ICE connection status : connected
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_CONNECTED = 'connected';
	
	/**
	 * ICE connection status : completed
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_COMPLETED = 'completed';
	
	/**
	 * ICE connection status : checking
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_CHECKING = 'checking';
	
	/**
	 * ICE connection status : closed
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_CLOSED = 'closed';
	
	/**
	 * ICE connection status : failed
	 * @constant
	 * @type {string}
	 */
	var ICE_CONNECTION_STATE_FAILED = 'failed';
	
	/**
	 * ICE connection status : another status
	 * @constant
	 * @type {string}
	 */
	
	/**
	 * The default ICE configuration for TURN and STUN servers to use for WebRTC communicationx
	 * NB : these configuration will be overwriten by the configuration on the Webcom server if present
	 * @constant
	 * @type {json}
	 */
	
	var DEFAULT_ICE_CONFIG = {
		iceServers: [{
			url: 'turns:turn1.webcom.orange.com:443',
			username: 'admin',
			credential: 'webcom1234'
		}, {
			url: 'turn:turn1.webcom.orange.com:3478',
			username: 'admin',
			credential: 'webcom1234'
		}, {
			url: 'turns:webcom1.orange-labs.fr:443',
			username: 'admin',
			credential: 'webcom1234'
		}]
	};
	
	/**
	 * @constructor
	 * @description WebRTC connection object. Manages a WebRTC connection, i.e. one peerconnection
	 * @param p_webrtcmngr - Reference to WebRTCManager
	 * @param p_isPublish - Flag indicating if there is a plublish action
	 * @param p_localDataRef - The local data ref
	 * @param p_remoteDataRef - The remote data ref
	 * @param p_webrtcStackId - The stack ID in use
	 * @param p_actionType -
	 * @param p_muteAudio - optional - if true peerconnection will be created with audio muted
	 * @param p_muteVideo - optional - if true peerconnection will be created with video muted
	
	 */
	var webrtc = function webrtc(p_webrtcmngr, p_isPublish, p_localDataRef, p_remoteDataRef, p_webrtcStackId, p_actionType, p_muteAudio, p_muteVideo) {
	
		/**
	  * @description WebRTC manager object. Useful to clear webrtc stack
	  */
		var webrtcmngr = p_webrtcmngr;
		/**
	  * @description The WebRTC stack identifier, here the current timestamp
	  */
		var stackId = new Date().getTime();
		/**
	  * @description If there is a publish action or not
	  */
		var isPublish = p_isPublish;
		/**
	  * @description The peer connection
	  */
		var pc = null;
		/**
	  * @description The local data ref
	  */
		var localDataRef = p_localDataRef;
		/**
	  * @description The remtoe data ref
	  */
		var remoteDataRef = p_remoteDataRef;
		/**
	  * @description A callback to trigger where a list of ICE candidates is provided
	  */
		var iceCandidatesListCb = null;
		/**
	  * @description A callback triggered when a SDP offer has been received
	  */
		var sdpOfferCb = null;
		/**
	  * @description A callback triggered when a SDP answer has been received
	  */
		var sdpAnswerCb = null;
		/**
	  * @description A callback triggered on a remote dataref event
	  */
		var remotedatarefCb = null;
		/**
	  * @description A callback triggered when the connection is closing
	  */
		var onCloseCb = null;
		/**
	  * @description The WebRTC stack ID
	  */
		var webrtcStackId = p_webrtcStackId;
		/**
	  * @description The action type to process
	  */
		var actionType = p_actionType;
		/**
	  * @description The configuration
	  */
		var config = null;
	
		/**
	  * @description A peer connection object, for cross browsers compatibilities
	  */
		var myPeerConnection = null;
		//var myCreateObjectURL = null;
		/**
	  * @description An RTC session description, for cross browsers compatibilities
	  */
		var myRTCSessionDescription = null;
		/**
	  * @description An RTC ICE candidate, for cross browsers compatibilities
	  */
		var myRTCIceCandidate = null;
	
		/**
	  * @description An array containing local streams
	  */
		var localStreams = [];
		/**
	  * @description An array containing remote streams
	  */
		var remoteStreams = [];
		/**
	  * @description An array containing remote streams CB
	  */
		var remoteStreamsCb = [];
		/**
	  * @description The received stream
	  */
		var receivedStream = null;
		/**
	  * @description The sent stream
	  */
		var sentStream = null;
		/**
	  * @description Flag indicating if the connection is closed
	  */
		var isClosed = false;
		/**
	  * @description Flag indicating if the close process is on going
	  */
		var closeInProgress = false;
		/**
	  * @description The ICE connection state
	  */
		var iceConnectionState = null;
		/**
	  * @description Another callback to trigger when the connection should be closed
	  */
		var onCloseCb2 = null;
	
		var isAudioMute = false;
	
		var isVideoMute = false;
	
		console.log('(webcomSDK::webrtc::)stackId=' + stackId + ' isPublish=' + isPublish + ',localDataRef=' + localDataRef + ',remoteDataRef=' + remoteDataRef + ')');
	
		/**
	  * @description A Datagram Transport Layer Security (DTLS) key agreement
	  */
	
		/**
	  * @description - Some options
	  */
	
		/**
	  * @description The publisher media constraints as a JSON array
	  */
	
		/**
	  * Callback to trigger when an error occurs
	  * @param e - The error
	  */
	
		/**
	  * @description The subscriber media constraints as a JSON array
	  */
		function onError(e) {
			console.log('(webcomSDK::webrtc::)stackId=' + stackId + 'error=' + e);
			console.dir(e);
		}
	
		/**
	  * Initializes the object
	  */
	
		/**
	  * Initializes the peer connection
	  */
		function init_pc() {
			console.log('(webcomSDK::webrtc::init_pc)stackId=' + stackId + '_config=', JSON.stringify(config));
			// TODO test is config is malformated or empty
			pc = new myPeerConnection(config, {
				optional: [{
					DtlsSrtpKeyAgreement: true
				}]
			});
	
			// ------------------------------------------------------------------
			// Received Ice candidate from the stack: send it to the peer
			// ------------------------------------------------------------------
			pc.onicecandidate = function (e) {
				if (e.candidate) {
					console.log('(webcomSDK::webrtc::pc.onicecandidate)stackId=' + stackId + ' send ice candidate=' + JSON.stringify(e.candidate));
					localDataRef.child('iceCandidatesList').push({
						label: e.candidate.sdpMLineIndex,
						id: e.candidate.sdpMid,
						candidate: e.candidate.candidate
					});
				}
			};
	
			// ------------------------------------------------------------------
			// Received a remote stream from the stack: play it on the video player
			// ------------------------------------------------------------------
			pc.onaddstream = function (e) {
				console.debug('(webcomSDK::webrtc::onaddstream)stackId=' + stackId + '-' + 'stream:' + JSON.stringify(e.stream));
				if (e && e.stream) {
					receivedStream = e.stream;
					if (isAudioMute) _muteAudio();
					if (isVideoMute) _muteVideo();
				}
				//            _remoteStream = e.stream;
				//
				//			for (var i=0;i<remoteStreams.length;i++) {
				//			    if (remoteStreams[i]) {
				//			    	  console.debug("(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId="+stackId + "-" +"rendering remote vid to "+remoteStreams[i].id);
				//			    	  attachMediaStream( remoteStreams[i],_remoteStream);
				//			    }
				//			}
			};
	
			pc.oniceconnectionstatechange = function () {
	
				if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CHECKING) {
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'checking');
					iceConnectionState = ICE_CONNECTION_STATE_CHECKING;
				} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CONNECTED) {
					iceConnectionState = ICE_CONNECTION_STATE_CONNECTED;
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'connected');
					if (receivedStream) {
						for (var i = 0; i < remoteStreams.length; i++) {
							if (remoteStreams[i]) {
								console.debug('(webcomSDK::webrtc::onaddstream)pc.onaddstream stackId=' + stackId + '-' + 'rendering remote vid to ' + remoteStreams[i].id);
								attachMediaStream(remoteStreams[i], receivedStream);
							}
						}
						for (var j = 0; j < remoteStreamsCb.length; j++) {
							if (remoteStreamsCb[j]) {
								remoteStreamsCb[j](receivedStream);
							}
						}
						remoteStreamsCb = [];
					}
					stopListeningToRemoteIceCandidate();
				} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_COMPLETED) {
					iceConnectionState = ICE_CONNECTION_STATE_COMPLETED;
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + ICE_CONNECTION_STATE_COMPLETED);
					stopListeningToRemoteIceCandidate();
				}
				if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED) {
					iceConnectionState = ICE_CONNECTION_STATE_DISCONNECTED;
					console.log('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'remote disconnection, closing peer connection');
					_close();
				} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_CLOSED) {
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'closed');
					iceConnectionState = ICE_CONNECTION_STATE_CLOSED;
					_close();
				} else if (!!pc && pc.iceConnectionState === ICE_CONNECTION_STATE_FAILED) {
					console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + 'failed');
					iceConnectionState = ICE_CONNECTION_STATE_FAILED;
					_close();
				} else {
					if (pc) {
						console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-' + pc.iceConnectionState);
					} else {
						console.debug('(webcomSDK::webrtc::oniceconnectionstatechange)stackId=' + stackId + '-pc = null');
					}
	
					iceConnectionState = 'other';
				}
	
				if (isClosed && (iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState === ICE_CONNECTION_STATE_CLOSED || iceConnectionState === ICE_CONNECTION_STATE_FAILED)) {
					console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closed webrtc stack complete');
					pc = null;
					closeInProgress = false;
					webrtcmngr.clearWebrtcStacks(webrtcStackId);
					if (onCloseCb && typeof onCloseCb == 'function') {
						onCloseCb();
					}
					if (onCloseCb2 && typeof onCloseCb2 == 'function') {
						onCloseCb2();
					}
				}
			};
	
			// subscribe to remote data
			iceCandidatesListCb = function (snapshot) {
				var data = snapshot.val();
				var candidate = new myRTCIceCandidate({
					sdpMLineIndex: data.label,
					candidate: data.candidate,
					sdpMid: data.id
				});
				console.log('(webcomSDK::webrtc::iceCandidatesListCb)stackId=' + stackId + 'received ice candidate=' + JSON.stringify(candidate));
	
				pc.addIceCandidate(candidate);
				// remove candidate from webcom
				//snapshot.ref().remove();
			};
	
			if (isPublish) {
				_initlocalStream(function () {
					_initSdpCallbacks();
					sendOffer();
				});
			} else {
				_initSdpCallbacks();
			}
		}
	
		/**
	  * Gets the ICE servers configuration
	  * @param callbackOk - The callback to trigger when the config retrievement is done
	  * @param callbackKo - The callback to trigger when an error occurs
	  */
		function getIceServersConfigFromServer(callbackOk, callbackKo) {
			console.log('webcomSDK::webrtc::getIceServersConfigFromServer');
			var _config;
			if (localDataRef) {
				var fireConfig = localDataRef.root().child('config');
				fireConfig.once('value', function (snapshot) {
					if (snapshot && snapshot.val()) {
						_config = snapshot.val();
						if (typeof callbackOk == 'function') callbackOk(_config);
					} else {
						if (typeof callbackKo == 'function') callbackKo();
					}
				}, function (error) {
					if (typeof callbackKo == 'function') callbackKo(error);
				});
			} else {
				if (typeof callbackKo == 'function') callbackKo();
			}
		}
	
		/**
	  * Starts the listing to a remote ICE candidate by enabling the dedicated callback
	  * for the "child_added" event on the "iceCandidatesList" node in the database.
	  */
		function startListeningToRemoteIceCandidate() {
			remoteDataRef.child('iceCandidatesList').on('child_added', iceCandidatesListCb);
		}
	
		/**
	  * Stops the listening to remote ICE candisdate by disabling the dedicated callback
	  * for the "child_added" event on the "iceCandidatesList" node in the database.
	  */
		function stopListeningToRemoteIceCandidate() {
			remoteDataRef.child('iceCandidatesList').off('child_added', iceCandidatesListCb);
		}
	
		/**
	  * Initializes the local stream
	  * @param callback - A callback to trigger when the initialisation is done
	  */
		function _initlocalStream(callback) {
			// get local video stream and renders to localVid
			console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' get local video stream and renders to local video');
			if (actionType) {
				var initlocalStream;
				if (actionType === _actions3['default'].ACTION_TYPE_VIDEO) {
					initlocalStream = function () {
						console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_video');
						if (_localstream2['default'].getVideoStream() && _localstream2['default'].getVideoStream().clone && typeof _localstream2['default'].getVideoStream().clone == 'function') {
							sentStream = _localstream2['default'].getVideoStream().clone();
						} else {
							sentStream = _localstream2['default'].getVideoStream();
						}
						if (isAudioMute) _muteAudio();
						if (isVideoMute) _muteVideo();
						pc.addStream(sentStream);
						for (var i = 0; i < localStreams.length; i++) {
							console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local video to ' + localStreams[i].id);
							attachMediaStream(localStreams[i], _localstream2['default'].getVideoStream());
						}
	
						if (callback && typeof callback == 'function') {
							callback();
						}
					};
					if (_localstream2['default'].getVideoStream()) {
						initlocalStream();
					} else {
						_localstream2['default'].addVideoListener(initlocalStream);
						_localstream2['default'].initVideo();
					}
				} else if (actionType === _actions3['default'].ACTION_TYPE_AUDIO) {
					initlocalStream = function () {
						console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio');
						if (_localstream2['default'].getAudioStream() && _localstream2['default'].getAudioStream().clone && typeof _localstream2['default'].getAudioStream().clone == 'function') {
							sentStream = _localstream2['default'].getAudioStream().clone();
						} else {
							sentStream = _localstream2['default'].getAudioStream();
						}
						if (isAudioMute) _muteAudio();
						if (isVideoMute) _muteVideo();
						pc.addStream(sentStream);
						for (var i = 0; i < localStreams.length; i++) {
							console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local Audio to ' + localStreams[i].id);
							attachMediaStream(localStreams[i], _localstream2['default'].getAudioStream());
						}
	
						if (callback && typeof callback == 'function') {
							callback();
						}
					};
					if (_localstream2['default'].getAudioStream()) {
						initlocalStream();
					} else {
						_localstream2['default'].addAudioListener(initlocalStream);
						_localstream2['default'].initAudio();
					}
				} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO_VIDEO) {
					initlocalStream = function () {
						console.log('(webcomSDK::webrtc::_initlocalStream)initlocalStream_audio_video');
						if (_localstream2['default'].getAudioVideoStream() && _localstream2['default'].getAudioVideoStream().clone && typeof _localstream2['default'].getAudioVideoStream().clone == 'function') {
							sentStream = _localstream2['default'].getAudioVideoStream().clone();
						} else {
							sentStream = _localstream2['default'].getAudioVideoStream();
						}
						if (isAudioMute) _muteAudio();
						if (isVideoMute) _muteVideo();
	
						pc.addStream(sentStream);
	
						for (var i = 0; i < localStreams.length; i++) {
							console.log('(webcomSDK::webrtc::_initlocalStream)stackId=' + stackId + ' rendering local AudioVideo to ' + localStreams[i].id);
							attachMediaStream(localStreams[i], _localstream2['default'].getAudioVideoStream());
						}
	
						if (callback && typeof callback == 'function') {
							callback();
						}
					};
					if (_localstream2['default'].getAudioVideoStream()) {
						initlocalStream();
					} else {
						_localstream2['default'].addAudioVideoListener(initlocalStream);
						_localstream2['default'].initAudioVideo();
					}
				}
			} else {
				console.warn('(webcomSDK::webrtc::_initlocalStream)no actionType specified');
			}
		}
	
		/**
	  * Prepares the SDP callbacks.
	  * Remote description will by defined for the peer connection and callbacks are defined for SDP answser and response management.
	  * If there is no publishing, local description will be defined.
	  */
		function _initSdpCallbacks() {
			console.debug('(webcomSDK::webrtc::_initSdpCallbacks)stackId=' + stackId);
			if (isPublish) {
				if (sdpOfferCb) remoteDataRef.off('child_added', sdpOfferCb);
				sdpAnswerCb = function (snapshot) {
					if (!isClosed && snapshot.name() === 'sdpAnswer') {
						var data = snapshot.val();
						console.debug('(webcomSDK::webrtc::sdpAnswerCb)stackId=' + stackId + '-' + 'received sdpAnswer: ' + JSON.stringify(data));
						pc.setRemoteDescription(new myRTCSessionDescription(data), function () {
							console.debug('(webcomSDK::webrtc::sdpAnswerCb)stackId=' + stackId + '-' + 'remote description set');
							// remove sdpAnswer from webcom
							//snapshot.ref().remove();
							startListeningToRemoteIceCandidate();
						}, onError);
						remoteDataRef.off('child_added', sdpAnswerCb);
					}
				};
				remoteDataRef.on('child_added', sdpAnswerCb);
			} else {
				if (sdpAnswerCb) remoteDataRef.off('child_added', sdpAnswerCb);
				sdpOfferCb = function (snapshot) {
					if (!isClosed && snapshot.name() === 'sdpOffer') {
						var data = snapshot.val();
						console.debug('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'received sdpOffer: ' + JSON.stringify(data));
						pc.setRemoteDescription(new myRTCSessionDescription(data), function () {
							pc.createAnswer(function (description) {
								console.log('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'sending answer');
								pc.setLocalDescription(description, function () {
									console.debug('(webcomSDK::webrtc::sdpOfferCb)stackId=' + stackId + '-' + 'set sdpAnswer in base : ' + JSON.stringify(description));
									localDataRef.child('sdpAnswer').set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
									// remove sdpOffer from webcom
									//snapshot.ref().remove();
									startListeningToRemoteIceCandidate();
								}, onError);
							}, onError, {
								mandatory: {
									OfferToReceiveAudio: true,
									OfferToReceiveVideo: true
								}
							});
						}, onError);
						remoteDataRef.off('child_added', sdpOfferCb);
					}
				};
				remoteDataRef.on('child_added', sdpOfferCb);
			}
		}
	
		/**
	  * Closes the SDP callbacks by disabling callbacks for the "child_added" event and by defining them to null.
	  */
		function _closeSdpCallbacks() {
			if (sdpAnswerCb) {
				remoteDataRef.off('child_added', sdpAnswerCb);
				sdpAnswerCb = null;
			}
			if (sdpOfferCb) {
				remoteDataRef.off('child_added', sdpOfferCb);
				sdpOfferCb = null;
			}
		}
	
		/**
	  * Sends an SDP offer through the peer connection.
	  * An SDP offer is created, with a local description, and is sent.
	  * The description is both decoded and encoded because of Firefox bugs.
	  */
		function sendOffer() {
			// ------------------------------------------------------------------
			// publie l'offre initiale
			// ------------------------------------------------------------------
			console.log('(webrtc::sendOffer)stackid=' + stackId + '-' + 'creating sdpOffer');
			pc.createOffer(function (description) {
				pc.setLocalDescription(description, function () {
					console.debug('(webcomSDK::webrtc::createOffer)stackId=' + stackId + '-' + 'set sdpOffer in base : ' + JSON.stringify(description));
					localDataRef.child('sdpOffer').set(JSON.parse(JSON.stringify(description))); // decoding/encoding because of Firefox bug
				}, onError);
			}, onError, {
				mandatory: {
					OfferToReceiveAudio: false,
					OfferToReceiveVideo: false
				}
			});
		}
	
		/**
	  * Closes the connection and triggers the callback when the operation is done
	  * @param callback
	  */
		function _close(callback) {
	
			if (!closeInProgress && !isClosed) {
				closeInProgress = true;
				onCloseCb2 = callback;
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack');
				if (pc) {
					pc.close();
				}
	
				// remove webcom callbacks
				if (remotedatarefCb) {
					remoteDataRef.off('child_added', remotedatarefCb);
					remotedatarefCb = null;
				}
	
				if (iceCandidatesListCb) {
					stopListeningToRemoteIceCandidate();
					iceCandidatesListCb = null;
				}
				_closeSdpCallbacks();
	
				// remove webcom data
				//			localDataRef.parent().onDisconnect().cancel();
				//			localDataRef.parent().onDisconnect().remove();
				//remoteDataRef.remove();
	
				// stop video
				for (var i = 0; i < localStreams.length; i++) {
					if (localStreams[i]) {
						//localStreams[i].src=""; not supported by Firefox
						detachMediaStream(localStreams[i]);
						//localStreams[i].removeAttribute("src");
						console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'stopping local video to ' + localStreams[i].id);
					}
				}
				for (var j = 0; j < remoteStreams.length; j++) {
					if (remoteStreams[j]) {
						//remoteStreams[j].src=""; not supported by Firefox
						detachMediaStream(remoteStreams[j]);
						//remoteStreams[j].removeAttribute("src");
						console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'stopping remote vid to ' + remoteStreams[j].id);
					}
				}
	
				isClosed = true;
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack -> waiting for ICE_CONNECTION_STATE_DISCONNECTED');
				if (isClosed && (iceConnectionState === ICE_CONNECTION_STATE_DISCONNECTED || iceConnectionState === ICE_CONNECTION_STATE_CLOSED || iceConnectionState === ICE_CONNECTION_STATE_FAILED)) {
					console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closed webrtc stack complete');
					pc = null;
					closeInProgress = false;
					webrtcmngr.clearWebrtcStacks(webrtcStackId);
					if (onCloseCb2 && typeof onCloseCb2 == 'function') {
						onCloseCb2();
					}
				}
			} else {
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-' + 'closing webrtc stack already in progress');
			}
		}
	
		function _muteAudio() {
			console.log('(webcomSDK::webrtc::_muteAudio)stackId=' + stackId);
			isAudioMute = true;
			var audioTracks;
			if (isPublish && sentStream) {
				audioTracks = sentStream.getAudioTracks();
				if (audioTracks && audioTracks.length > 0) {
					for (var i = 0; i < audioTracks.length; i++) {
						if (audioTracks[i]) audioTracks[i].enabled = false;
					}
				}
			} else if (!isPublish && receivedStream) {
				audioTracks = receivedStream.getAudioTracks();
				if (audioTracks && audioTracks.length > 0) {
					for (var j = 0; j < audioTracks.length; j++) {
						if (audioTracks[j]) audioTracks[j].enabled = false;
					}
				}
			}
		}
	
		function _unmuteAudio() {
			console.log('(webcomSDK::webrtc::_unmuteAudio)stackId=' + stackId);
			isAudioMute = false;
			var audioTracks;
			if (isPublish && sentStream) {
				audioTracks = sentStream.getAudioTracks();
				if (audioTracks && audioTracks.length > 0) {
					for (var i = 0; i < audioTracks.length; i++) {
						if (audioTracks[i]) audioTracks[i].enabled = true;
					}
				}
			} else if (!isPublish && receivedStream) {
				audioTracks = receivedStream.getAudioTracks();
				if (audioTracks && audioTracks.length > 0) {
					for (var j = 0; j < audioTracks.length; j++) {
						if (audioTracks[j]) audioTracks[j].enabled = true;
					}
				}
			}
		}
	
		function _muteVideo() {
			console.log('(webcomSDK::webrtc::_muteVideo)stackId=' + stackId);
			isVideoMute = true;
			var videoTracks;
			if (isPublish && sentStream) {
				videoTracks = sentStream.getVideoTracks();
				if (videoTracks && videoTracks.length > 0) {
					for (var i = 0; i < videoTracks.length; i++) {
						if (videoTracks[i]) videoTracks[i].enabled = false;
					}
				}
			} else if (!isPublish && receivedStream) {
				videoTracks = receivedStream.getVideoTracks();
				if (videoTracks && videoTracks.length > 0) {
					for (var j = 0; j < videoTracks.length; j++) {
						if (videoTracks[j]) videoTracks[j].enabled = false;
					}
				}
			}
		}
	
		function _unmuteVideo() {
			console.log('(webcomSDK::webrtc::_unmuteVideo)stackId=' + stackId);
			isVideoMute = false;
			var videoTracks;
			if (isPublish && sentStream) {
				videoTracks = sentStream.getVideoTracks();
				if (videoTracks && videoTracks.length > 0) {
					for (var i = 0; i < videoTracks.length; i++) {
						if (videoTracks[i]) videoTracks[i].enabled = true;
					}
				}
			} else if (!isPublish && receivedStream) {
				videoTracks = receivedStream.getVideoTracks();
				if (videoTracks && videoTracks.length > 0) {
					for (var j = 0; j < videoTracks.length; j++) {
						if (videoTracks[j]) videoTracks[j].enabled = true;
					}
				}
			}
		}
	
		function _connectLocalStream(videoElt, getStreamCb) {
			if (actionType) {
				if (actionType === _actions2['default'].ACTION_TYPE_VIDEO) {
					_localstream2['default'].connectLocalVideoStream(videoElt, getStreamCb);
				} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO) {
					_localstream2['default'].connectLocalAudioStream(videoElt, getStreamCb);
				} else if (actionType === _actions2['default'].ACTION_TYPE_AUDIO_VIDEO) {
					_localstream2['default'].connectLocalAudioVideoStream(videoElt, getStreamCb);
				}
			}
		}
	
		function _connectRemoteStream(videoElt, getStreamCb) {
			if (videoElt) {
				if (receivedStream) {
					attachMediaStream(videoElt, receivedStream);
					if (getStreamCb && typeof getStreamCb == 'function') {
						getStreamCb(receivedStream);
					}
				} else {
					remoteStreams.push(videoElt);
					if (getStreamCb && typeof getStreamCb == 'function') {
						remoteStreamsCb.push(getStreamCb);
					}
				}
			} else {
				if (receivedStream) {
					if (getStreamCb && typeof getStreamCb == 'function') {
						getStreamCb(receivedStream);
					}
				} else {
					if (getStreamCb && typeof getStreamCb == 'function') {
						remoteStreamsCb.push(getStreamCb);
					}
				}
			}
		}
	
		(function init() {
			console.log('(webcomSDK::webrtc::init)stackId=' + stackId);
			// peerconnection
			if (typeof RTCPeerConnection === 'function') {
				myPeerConnection = RTCPeerConnection;
			} else {
				console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error=Webrtc is not supported on this browser !');
				throw new Error('Webrtc is not supported on this browser !');
			}
	
			if (typeof RTCSessionDescription === 'function') {
				myRTCSessionDescription = RTCSessionDescription;
			} else {
				console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error2=Webrtc is not supported on this browser !');
				throw new Error('Webrtc is not supported on this browser !');
			}
	
			if (typeof RTCIceCandidate === 'function') {
				myRTCIceCandidate = RTCIceCandidate;
			} else {
				console.error('(webcomSDK::webrtc::init)stackId=' + stackId + ' error3=Webrtc is not supported on this browser !');
				throw new Error('Webrtc is not supported on this browser !');
			}
	
			if (p_muteAudio) isAudioMute = true;
			if (p_muteVideo) isVideoMute = true;
	
			getIceServersConfigFromServer(function (_config) {
				config = _config;
				console.log('(webcomSDK::webrtc::) use server config=', JSON.stringify(config));
				init_pc();
			}, function () {
				if (typeof DEFAULT_ICE_CONFIG !== 'undefined') {
					config = DEFAULT_ICE_CONFIG;
					console.log('(webcomSDK::webrtc::) use DEFAULT_ICE_CONFIG config=', JSON.stringify(config));
				} else {
					console.log('(webcomSDK::webrtc::) no ice  config');
				}
				init_pc();
			});
		})();
	
		return {
	
			/**
	   * Defines the callback to trigger so as to close the communication
	   * @param {function} cb - The callback to trigger
	   */
			setOnClose: function setOnClose(cb) {
				onCloseCb = cb;
			},
			/**
	   * Closes a callback
	   * @param {function} cb - The callback to close
	   */
			close: function close(cb) {
				console.debug('(webcomSDK::webrtc::_close)stackId=' + stackId + '-close requested');
				_close(cb);
			},
	
			/**
	   * Connect a local stream to an element according to the action type in use (ACTION_TYPE_VIDEO, ACTION_TYPE_AUDIO, ACTION_TYPE_AUDIO_VIDEO)
	   * @param videoElt - The video element
	   * @param getStreamCb - a callback function to retrieve the mediastream object
	   */
			connectLocalStream: function connectLocalStream(videoElt, getStreamCb) {
				_connectLocalStream(videoElt, getStreamCb);
			},
			/**
	   * Connect a remote stream to an element
	   * @param videoElt - The video element
	   * @param getStreamCb - a callback function to retrieve the mediastream object
	   */
			connectRemoteStream: function connectRemoteStream(videoElt, getStreamCb) {
				_connectRemoteStream(videoElt, getStreamCb);
			},
			/**
	   * mute Audio
	   */
			muteAudio: function muteAudio() {
				_muteAudio();
			},
			/**
	   * unmute Audio
	   */
			unmuteAudio: function unmuteAudio() {
				_unmuteAudio();
			},
			/**
	   * mute Video
	   */
			muteVideo: function muteVideo() {
				_muteVideo();
			},
			/**
	   * unmute Video
	   */
			unmuteVideo: function unmuteVideo() {
				_unmuteVideo();
			}
		};
	};
	
	exports['default'] = webrtc;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYzBiNjA1NTk3Y2I0MTFmNTI2OSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhcmVmcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnJ0Y21uZ3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnJ0Yy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0NoQ3NCLENBQVc7Ozs7OztvQ0FHYixDQUFXOzs7O3FDQUNWLENBQVk7Ozs7a0NBQ2YsRUFBUzs7OztpQ0FDVixFQUFROzs7O3lDQUNGLEVBQWlCOzs7O0tBSW5CLE1BQU07QUFDZixXQURTLE1BQU0sR0FDK0I7T0FBN0MsR0FBRyx5REFBRSxzQ0FBc0M7O3lCQURuQyxNQUFNOztBQUV6QixPQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE9BQUksQ0FBQyxVQUFVLEdBQUcsK0JBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQzVDOztlQUptQixNQUFNOztVQU10QixnQkFBVTtzQ0FBTixJQUFJO0FBQUosU0FBSTs7O0FBQ1gsV0FBTyxtQ0FBUSxJQUFJLFNBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFDLENBQUM7SUFDckQ7OztVQUVJLGlCQUFVO3VDQUFOLElBQUk7QUFBSixTQUFJOzs7QUFDWixXQUFPLG9DQUFTLElBQUksU0FBRSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUM7SUFDckM7OztRQUVpQixlQUFHO0FBQ3BCLFdBakJrQixPQUFPLENBaUJOO0lBQ25COzs7UUFDaUIsZUFBRztBQUNwQixnQ0FBZTtJQUNmOzs7U0FuQm1CLE1BQU07OztzQkFBTixNQUFNOzs7Ozs7O0FDakIzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsMkI7Ozs7OztBQ3ZCQSxtQkFBa0IsdUQ7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7OztBQ1JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDb0NBLE9BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7O0FBS2hDLE9BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOzs7O0FBSTNCLE9BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7QUFJaEMsT0FBTSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7OztBQUlsQyxPQUFNLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDOzs7O0FBSXBDLE9BQU0sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU1wQyxVQUFTLFlBQVksQ0FBQyxTQUFTLEVBQUU7QUFDaEMsTUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3JDLFlBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztBQUMvQixVQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7R0FDdEI7QUFDRCxNQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQ2xDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUMvQyxTQUFTLENBQUMsZUFBZSxFQUFFO0FBQzNCLFVBQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLEdBQ2xELGdEQUFnRCxDQUFDLENBQUM7R0FDbEQ7RUFDRDs7Ozs7O0FBTUQsVUFBUyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUU7QUFDeEMsTUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3RCLFVBQU87R0FDUDs7QUFFRCxNQUFJLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFELE9BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pELFFBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsZ0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QixpQkFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QjtBQUNELFdBQVEsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO0dBQ3BDO0VBQ0Q7Ozs7Ozs7Ozs7QUFVRCxVQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFpQjtNQUFmLE1BQU0seURBQUUsS0FBSzs7QUFDckUsTUFBSSxTQUFTLGFBQUM7O0FBRWQsTUFBSSxNQUFNLEVBQUU7OztBQUdYLE9BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLE9BQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQzlCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2xELGFBQVMsR0FBRztBQUNYLFFBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLGlCQUFjLFFBQVE7QUFDdEIsYUFBUSxFQUFSLFFBQVE7S0FDUixDQUFDO0lBQ0Y7R0FDRCxNQUFNOzs7QUFHTixZQUFTLEdBQUc7QUFDWCxPQUFHLEVBQUgsR0FBRztBQUNILGNBQVUsRUFBRSxRQUFRO0FBQ3BCLFlBQVEsRUFBUixRQUFRO0lBQ1IsQ0FBQztHQUNGOztBQUVELFNBQU8sU0FBUyxDQUFDO0VBQ2pCOzs7Ozs7Ozs7QUFVRCxLQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUU7QUFDOUIsUUFBTSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQzs7QUFFekMsUUFBTSxDQUFDLHFCQUFxQixHQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRbkUsUUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsUUFBUSxFQUFFLGFBQWEsRUFBRTs7QUFFN0Qsd0JBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsVUFBTyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztHQUN6RCxDQUFDOzs7QUFHRixRQUFNLENBQUMscUJBQXFCLEdBQUcsd0JBQXdCLENBQUM7OztBQUd4RCxRQUFNLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDOzs7QUFHNUMsUUFBTSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRSxXQUFTLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQzs7Ozs7Ozs7O0FBV3RDLFFBQU0sQ0FBQyxlQUFlLEdBQUcsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBSztBQUNyRCxPQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsT0FBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxPQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFOztBQUV2QyxhQUFTLEdBQUc7QUFDWCxRQUFHLEVBQUgsR0FBRztLQUNILENBQUM7SUFDRixNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDOUMsYUFBUyxHQUFHLHNCQUFzQixDQUFFLEdBQUcsRUFDOUIsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUM7QUFDRCxVQUFPLFNBQVMsQ0FBQztHQUNqQixDQUFDOzs7Ozs7OztBQVFGLFFBQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzdELE9BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsUUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQy9DLFFBQVEsRUFDUixRQUFRLENBQUMsQ0FBQztBQUNYLFFBQUksU0FBUyxLQUFLLElBQUksRUFBRTtBQUN2QixlQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNCO0lBQ0Q7QUFDRCxVQUFPLFVBQVUsQ0FBQztHQUNsQixDQUFDOzs7Ozs7O0FBT0YsUUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQzdDLE9BQUksT0FBTyxFQUFFO0FBQ1osV0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDNUIsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCO0dBQ0QsQ0FBQzs7Ozs7Ozs7QUFRRixRQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3JELE9BQUk7QUFDSCxRQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7QUFDdEIsWUFBTyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDOUIsU0FBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDdEQsYUFBTyxDQUFDLElBQUksRUFBRSxDQUFDO01BQ2YsTUFBTTtBQUNOLGFBQU8sQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUMsQ0FBQztNQUN6RTtLQUNELE1BQU07QUFDTixZQUFPLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7S0FDcEU7SUFDRCxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1gsV0FBTyxDQUFDLEtBQUssOENBQTRDLENBQUMsQ0FBRyxDQUFDO0lBQzlEO0dBR0QsQ0FBQzs7Ozs7Ozs7QUFRRixRQUFNLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQ2hELE9BQUksRUFBRSxJQUFJLElBQUksRUFBRTtBQUNmLE1BQUUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUNwQyxNQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixNQUFNO0FBQ04sV0FBTyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQ3RFO0dBQ0QsQ0FBQzs7O0FBR0YsTUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO0FBQzFDLGNBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDbEQsV0FBTyxFQUFFLENBQUM7SUFDVixDQUFDO0dBQ0Y7O0FBRUQsTUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO0FBQzFDLGNBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDbEQsV0FBTyxFQUFFLENBQUM7SUFDVixDQUFDO0dBQ0Y7Ozs7O0VBS0QsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtBQUN4QyxTQUFNLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDO0FBQ3hDLFNBQU0sQ0FBQyxxQkFBcUIsR0FDM0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7O0FBUXhFLFNBQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMzRCxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsUUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxRQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFOztBQUV2QyxjQUFTLEdBQUc7QUFDWCxTQUFHLEVBQUgsR0FBRztNQUNILENBQUM7S0FDRixNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7O0FBRTlDLGNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzVEO0FBQ0QsV0FBTyxTQUFTLENBQUM7SUFDakIsQ0FBQzs7Ozs7Ozs7QUFRRixTQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM3RCxRQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDcEIsUUFBSSxNQUFNLENBQUMscUJBQXFCLElBQUksRUFBRSxFQUFFOztBQUV2QyxlQUFVLEdBQUc7QUFDWixVQUFJLEVBQUosSUFBSTtBQUNKLGdCQUFVLEVBQUUsUUFBUTtBQUNwQixjQUFRLEVBQVIsUUFBUTtNQUNSLENBQUM7S0FDRixNQUFNO0FBQ04sVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsVUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQy9DLFFBQVEsRUFDUixRQUFRLENBQUMsQ0FBQztBQUNYLFVBQUksU0FBUyxLQUFLLElBQUksRUFBRTtBQUN2QixpQkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUMzQjtNQUNEO0tBQ0Q7QUFDRCxXQUFPLFVBQVUsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0FBT0YsU0FBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsUUFBUSxFQUFFLGFBQWEsRUFBRTs7QUFFN0QsUUFBSSxNQUFNLENBQUMscUJBQXFCLEdBQUcsRUFBRSxFQUFFO0FBQ3RDLDBCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsV0FBTyxJQUFJLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0FBSUYsU0FBTSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25FLFlBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnRDLFNBQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDckQsUUFBSTtBQUNILFNBQUksT0FBTyxJQUFJLE1BQU0sRUFBRTs7QUFFdEIsYUFBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLGFBQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO01BQ3hCLE1BQU07QUFDTixhQUFPLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7TUFDckU7S0FDRCxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1gsWUFBTyxDQUFDLEtBQUssOENBQTRDLENBQUMsQ0FBRyxDQUFDO0tBQzlEO0lBQ0QsQ0FBQzs7Ozs7O0FBTUYsU0FBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQzdDLFFBQUksT0FBTyxFQUFFO0FBQ1osU0FBSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUFFO0FBQzdDLGFBQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO01BQ3ZCLE1BQU0sSUFBSSxPQUFPLE9BQU8sQ0FBQyxZQUFZLEtBQUssV0FBVyxFQUFFO0FBQ3ZELGFBQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO01BQzFCLE1BQU0sSUFBSSxPQUFPLE9BQU8sQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFO0FBQzlDLGFBQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO01BQ2pCLE1BQU07QUFDTixhQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7TUFDbEQ7S0FDRDtJQUVELENBQUM7Ozs7Ozs7O0FBUUYsU0FBTSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUNoRCxRQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDZixPQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDbEIsTUFBTTtBQUNOLFlBQU8sQ0FBQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztLQUNuRjtJQUNELENBQUM7R0FFRixNQUFNO0FBQ04sU0FBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7c0JDOWFsRDs7Ozs7OztBQU9kLG1CQUFpQixFQUFFLE9BQU87Ozs7OztBQU0xQixtQkFBaUIsRUFBRSxPQUFPOzs7Ozs7QUFNMUIsa0JBQWdCLEVBQUUsTUFBTTs7Ozs7O0FBTXhCLHlCQUF1QixFQUFFLGFBQWE7Ozs7OztBQU10Qyw0QkFBMEIsRUFBRSxnQkFBZ0I7Ozs7OztBQU01QyxrQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDbkJjLFVBQVMsY0FBYyxFQUFFOzs7Ozs7O0FBT3ZDLE1BQUksVUFBVSxHQUFHLElBQUksQ0FBQzs7Ozs7O0FBTXRCLE1BQUksTUFBTSxHQUFHLElBQUksQ0FBQzs7Ozs7QUFLbEIsTUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7OztBQUtsQixNQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7O0FBS25CLE1BQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7OztBQWU1QixXQUFTLGFBQWEsR0FBRztBQUN4QixTQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxTQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxVQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxtQkFBZ0IsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7R0FDdkQ7Ozs7OztBQU1ELFdBQVMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7QUFDNUMsYUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDMUMsZ0JBQWEsRUFBRSxDQUFDO0dBQ2hCOzs7OztBQUtELFdBQVMsaUJBQWlCLEdBQUc7QUFDNUIsT0FBSSxVQUFVLEVBQUU7QUFDZixXQUFPLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixNQUFNO0FBQ04sV0FBTyxTQUFTLENBQUM7SUFDakI7R0FDRDs7Ozs7O0FBTUQsV0FBUyxhQUFhLENBQUMsV0FBVyxFQUFFO0FBQ25DLGFBQVUsR0FBQyxXQUFXLENBQUM7QUFDdkIsZ0JBQWEsRUFBRSxDQUFDO0dBQ2hCOzs7Ozs7QUFNRCxXQUFTLGFBQWEsR0FBRztBQUN4QixVQUFPLFVBQVUsQ0FBQztHQUNsQjs7Ozs7O0FBT0QsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQzNCLFNBQU0sR0FBQyxPQUFPLENBQUM7R0FDZjs7Ozs7O0FBTUQsV0FBUyxTQUFTLEdBQUc7QUFDcEIsVUFBTyxNQUFNLENBQUM7R0FDZDs7Ozs7O0FBTUQsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQzNCLFNBQU0sR0FBQyxPQUFPLENBQUM7R0FDZjs7Ozs7O0FBTUQsV0FBUyxTQUFTLEdBQUc7QUFDcEIsVUFBTyxNQUFNLENBQUM7R0FDZDs7Ozs7O0FBTUQsV0FBUyxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQzdCLFVBQU8sR0FBQyxRQUFRLENBQUM7R0FDakI7Ozs7OztBQU1ELFdBQVMsVUFBVSxHQUFHO0FBQ3JCLFVBQU8sT0FBTyxDQUFDO0dBQ2Y7Ozs7OztBQU1ELFdBQVMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUU7QUFDL0MsbUJBQWdCLEdBQUMsaUJBQWlCLENBQUM7R0FDbkM7Ozs7OztBQU1ELFdBQVMsbUJBQW1CLEdBQUc7QUFDOUIsVUFBTyxnQkFBZ0IsQ0FBQztHQUN4Qjs7QUFJRCxHQXhIQSxTQUFTLEtBQUssR0FBRztBQUNoQixhQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEMsZ0JBQWEsRUFBRSxDQUFDO0dBQ2hCLEdBcUhNLENBQUM7O0FBRVIsU0FBTzs7Ozs7QUFLTixtQkFBZ0IsRUFBRywwQkFBUyxnQkFBZ0IsRUFBRTtBQUM3QyxXQUFPLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0M7Ozs7QUFLRCxtQkFBZ0IsRUFBRyw0QkFBVztBQUM3QixXQUFPLGlCQUFpQixFQUFFLENBQUM7SUFDM0I7Ozs7O0FBS0QsZUFBWSxFQUFHLHNCQUFTLFdBQVcsRUFBRTtBQUNwQyxXQUFPLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQzs7Ozs7QUFLRCxlQUFZLEVBQUcsd0JBQVc7QUFDekIsV0FBTyxhQUFhLEVBQUUsQ0FBQztJQUN2Qjs7Ozs7QUFLRCxXQUFRLEVBQUcsa0JBQVMsT0FBTyxFQUFFO0FBQzVCLFdBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCOzs7OztBQUtELFdBQVEsRUFBRyxvQkFBVztBQUNyQixXQUFPLFNBQVMsRUFBRSxDQUFDO0lBQ25COzs7OztBQUtELFdBQVEsRUFBRyxrQkFBUyxPQUFPLEVBQUU7QUFDNUIsV0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUI7Ozs7O0FBS0QsV0FBUSxFQUFHLG9CQUFXO0FBQ3JCLFdBQU8sU0FBUyxFQUFFLENBQUM7SUFDbkI7Ozs7O0FBS0QsWUFBUyxFQUFHLG1CQUFTLFFBQVEsRUFBRTtBQUM5QixXQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1Qjs7Ozs7QUFLRCxZQUFTLEVBQUcscUJBQVc7QUFDdEIsV0FBTyxVQUFVLEVBQUUsQ0FBQztJQUNwQjs7Ozs7QUFLRCxxQkFBa0IsRUFBRyw0QkFBUyxpQkFBaUIsRUFBRTtBQUNoRCxXQUFPLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUM7Ozs7O0FBS0QscUJBQWtCLEVBQUcsOEJBQVc7QUFDL0IsV0FBTyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCO0dBQ0QsQ0FBQztFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2hRaUIsRUFBUzs7Ozs7Ozs7O0FBTzNCLEtBQU0sa0JBQWtCLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3JDLEtBQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDOzs7Ozs7O0FBT3ZDLEtBQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3ZDLEtBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7QUFXaEMsS0FBSSxLQUFLLEdBQUcsU0FBUixLQUFLLENBQWEsSUFBSSxFQUFFLFFBQVEsRUFBRTs7Ozs7QUFLckMsTUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOzs7O0FBSWQsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7O0FBSWxDLE1BQUksYUFBYSxHQUFHLElBQUksQ0FBQzs7OztBQUl6QixNQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJM0IsTUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDOzs7O0FBSTNCLE1BQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7OztBQUl2QixNQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQzs7Ozs7QUFLakMsTUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7QUFJMUIsTUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7Ozs7QUFJN0IsTUFBSSxzQkFBc0IsR0FBRyxJQUFJLENBQUM7Ozs7O0FBS2xDLE1BQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDOzs7OztBQUtqQyxNQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztBQXlDckIsV0FBUyxZQUFZLENBQUMsUUFBUSxFQUFDLElBQUksRUFBRTtBQUNwQyxVQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELE9BQUksaUJBQWlCLEdBQUcsU0FBcEIsaUJBQWlCLENBQVksUUFBUSxFQUFFO0FBQzFDLFFBQUksU0FBUyxHQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLENBQUM7QUFDMUMsUUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0FBQ0YsVUFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztHQUNqRzs7Ozs7OztBQU9ELFdBQVMsYUFBYSxDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUU7QUFDckMsVUFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRSxPQUFJLGtCQUFrQixHQUFHLFNBQXJCLGtCQUFrQixDQUFZLFFBQVEsRUFBRTtBQUMzQyxRQUFJLFVBQVUsR0FBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxDQUFDO0FBQzNDLFFBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUN0QyxTQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDakI7SUFDRCxDQUFDO0FBQ0YsVUFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO0dBQ25HOzs7Ozs7QUFNRCxXQUFTLG1CQUFtQixDQUFDLFFBQVEsRUFBRTtBQUN0QyxPQUFJLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUN2RDs7Ozs7O0FBTUQsV0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFO0FBQzlCLE9BQUksYUFBYSxFQUFFO0FBQ2xCLFdBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxhQUFhLENBQUMsQ0FBQztBQUMzRCxpQkFBYSxHQUFDLElBQUksQ0FBQztJQUNuQjtBQUNELE9BQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUN0QyxpQkFBYSxHQUFHLFVBQVMsUUFBUSxFQUFFO0FBQ2xDLFlBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDcEcsU0FBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwQyxTQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVixDQUFDO0FBQ0YsV0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFEO0dBQ0Q7Ozs7O0FBS0QsV0FBUyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7QUFDaEMsT0FBSSxlQUFlLEVBQUU7QUFDcEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELG1CQUFlLEdBQUMsSUFBSSxDQUFDO0lBQ3JCO0FBQ0QsT0FBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3RDLG1CQUFlLEdBQUcsVUFBUyxRQUFRLEVBQUU7QUFDcEMsWUFBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RyxTQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDYixRQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLFNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNWLENBQUM7QUFDRixXQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUQ7R0FFRDs7Ozs7QUFLRCxXQUFTLGlCQUFpQixDQUFDLElBQUksRUFBRTtBQUNoQyxPQUFJLGVBQWUsRUFBRTtBQUNwQixXQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0QsbUJBQWUsR0FBQyxJQUFJLENBQUM7SUFDckI7QUFDRCxPQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDdEMsbUJBQWUsR0FBRyxVQUFTLFFBQVEsRUFBRTtBQUNwQyxZQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RHLFNBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEMsU0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1YsQ0FBQztBQUNGLFdBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUM5RDtHQUVEOzs7Ozs7O0FBT0QsV0FBUyx1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRTs7QUFFckQsT0FBSSxXQUFXLEVBQUU7QUFDaEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pFLGVBQVcsR0FBQyxJQUFJLENBQUM7SUFDakI7QUFDRCxPQUFJLG1CQUFtQixJQUFJLE9BQU8sbUJBQW1CLElBQUksVUFBVSxFQUFFO0FBQ3BFLGVBQVcsR0FBRyxVQUFTLFFBQVEsRUFBRTtBQUNoQyxTQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUksa0JBQWtCLEVBQUU7QUFDaEQsYUFBTyxDQUFDLEdBQUcsQ0FBQyxvRUFBb0UsR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3SSxVQUFJLFlBQVksR0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsVUFBSSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixHQUFDLEVBQUUsQ0FBQztBQUNqRCxVQUFJLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQ3RDLFdBQUksbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQzlDLG9CQUFZLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQ7QUFDRCxjQUFPLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3pDO0FBQ0QseUJBQW1CLENBQUMsWUFBWSxDQUFDLEdBQUMsRUFBRSxDQUFDOztBQUVyQyxVQUFJLEdBQUcsR0FBQyxFQUFFLENBQUM7QUFDWCxTQUFHLENBQUMsWUFBWSxDQUFDLEdBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pDLHlCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV6QixVQUFJLHNCQUFzQixFQUFFO0FBQzNCLFdBQUksZUFBZSxHQUFDLFVBQVUsQ0FBQyxZQUFXO0FBQ3pDLFlBQUksc0JBQXNCLEVBQUU7QUFDM0IsZ0JBQU8sQ0FBQyxHQUFHLENBQUMsaUZBQWlGLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlILGdCQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0RixhQUFJLHFCQUFxQixFQUFFO0FBQzFCLGlCQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEUsd0JBQWEsRUFBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDMUMsaUJBQU0sRUFBQyxtQkFBbUI7QUFDMUIsc0JBQVcsRUFBQyxxQkFBcUI7V0FDakMsQ0FBQyxDQUFDO1VBQ0gsTUFBTTtBQUNOLGlCQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEUsd0JBQWEsRUFBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDMUMsaUJBQU0sRUFBQyxtQkFBbUI7V0FDMUIsQ0FBQyxDQUFDO1VBQ0g7U0FDRDtRQUNELEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMxQiwwQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLEdBQUMsZUFBZSxDQUFDO09BQzFEOztBQUVELFVBQUksb0JBQW9CLEdBQUcsU0FBdkIsb0JBQW9CLENBQVksUUFBUSxFQUFFO0FBQzdDLFdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBRyxRQUFRLEVBQUU7QUFDMUMsZ0JBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFVBQVMsU0FBUyxFQUFFO0FBQ3hELGFBQUksZUFBZSxFQUFDLGNBQWMsQ0FBQztBQUNuQyxhQUFJLFNBQVMsRUFBRTtBQUNkLHlCQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pELHdCQUFjLEdBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLGNBQUksTUFBTSxHQUFDLEVBQUUsQ0FBQztBQUNkLGdCQUFNLENBQUMsZUFBZSxDQUFDLEdBQUMsY0FBYyxDQUFDO0FBQ3ZDLGNBQUksbUJBQW1CLElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDLElBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxFQUFFO0FBQy9HLHVCQUFZLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDM0Q7QUFDRCxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsR0FBQyxlQUFlLEVBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlJLGNBQUksTUFBTSxJQUFJLHFCQUFxQixFQUFHO0FBQ3JDLGdDQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQzlCO0FBQ0QsaUJBQU8sbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7VUFDNUM7U0FDRCxDQUFDLENBQUM7UUFDSDtPQUNELENBQUM7QUFDRixhQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLG9CQUFvQixDQUFDLENBQUM7TUFFekc7S0FDRCxDQUFDO0FBQ0YsV0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFO0dBQ0Q7Ozs7Ozs7QUFPRCxXQUFTLDJCQUEyQixDQUFDLHVCQUF1QixFQUFFOztBQUU3RCxPQUFJLHFCQUFxQixFQUFFO0FBQzFCLHlCQUFxQixHQUFDLElBQUksQ0FBQztJQUMzQjs7QUFFRCxPQUFJLHVCQUF1QixJQUFJLE9BQU8sdUJBQXVCLElBQUksVUFBVSxFQUFFO0FBQzVFLHlCQUFxQixHQUFDLHVCQUF1QixDQUFDO0lBQzlDO0dBQ0Q7Ozs7Ozs7QUFPRCxXQUFTLDRCQUE0QixDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUU7QUFDekQsT0FBSSxzQkFBc0IsRUFBRTtBQUMzQiwwQkFBc0IsR0FBQyxJQUFJLENBQUM7SUFDNUI7QUFDRCxPQUFJLHFCQUFxQixFQUFFO0FBQzFCLHlCQUFxQixHQUFDLElBQUksQ0FBQztJQUMzQjs7QUFFRCxPQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxTQUFTLEdBQUMsQ0FBQyxFQUFFO0FBQ3RFLFdBQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEYsMEJBQXNCLEdBQUMsU0FBUyxDQUFDO0lBQ2pDO0FBQ0QsT0FBSSxRQUFRLEVBQUU7QUFDYix5QkFBcUIsR0FBQyxRQUFRLENBQUM7SUFDL0I7R0FDRDs7Ozs7Ozs7O0FBVUQsV0FBUyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRTtBQUNuRCxVQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFDLFFBQVEsR0FBQyxVQUFVLEdBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUYsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLHFHQUFxRyxDQUFDLENBQUM7QUFDckgsV0FBTztJQUNQO0FBQ0QsT0FBSSxFQUFFLE1BQU0sSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMzQyxXQUFPLENBQUMsS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7QUFDbkgsV0FBTztJQUNQO0FBQ0QsT0FBSSxFQUFFLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLENBQUMsRUFBRTtBQUN6QyxXQUFPLENBQUMsS0FBSyxDQUFDLHVHQUF1RyxDQUFDLENBQUM7QUFDdkgsV0FBTztJQUNQO0FBQ0QsT0FBSSxzQkFBc0IsR0FBRyxTQUF6QixzQkFBc0IsQ0FBWSxRQUFRLEVBQUU7QUFDL0MsUUFBSSxVQUFVLEdBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssQ0FBQztBQUMzQyxXQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFDLFFBQVEsR0FBQyxVQUFVLEdBQUMsTUFBTSxHQUFDLFVBQVUsR0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsSCxRQUFJLENBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0YsV0FBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztHQUV2STs7Ozs7Ozs7Ozs7O0FBWUQsV0FBUyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUU7QUFDdkUsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLDZGQUE2RixDQUFDLENBQUM7QUFDN0csV0FBTztJQUNQO0FBQ0QsT0FBSSxFQUFFLE9BQU8sSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRLENBQUMsRUFBRTtBQUM3QyxXQUFPLENBQUMsS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUM7QUFDNUcsV0FBTztJQUNQO0FBQ0QsT0FBSSxpQkFBaUIsSUFBSSxPQUFPLGlCQUFpQixJQUFJLFVBQVUsRUFBRTtBQUNoRSxXQUFPLENBQUMsSUFBSSxDQUFDLDRHQUE0RyxDQUFDLENBQUM7SUFDM0g7QUFDRCxPQUFJLEVBQUUsVUFBVSxJQUFJLFVBQVUsWUFBWSxLQUFLLENBQUUsRUFBRTtBQUNsRCxXQUFPLENBQUMsS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7QUFDdkcsV0FBTztJQUNQO0FBQ0QsV0FBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbEUsVUFBTSxFQUFDLGdCQUFnQjtBQUN2QixTQUFLLEVBQUMsRUFBRTtJQUNSLENBQUMsQ0FBQzs7QUFHSCxPQUFJLHNCQUFzQixHQUFDLFNBQXZCLHNCQUFzQixDQUFVLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUU7QUFDMUUsUUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ3RCLGFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0RixlQUFTLEVBQUUsS0FBSztBQUNoQixtQkFBYSxFQUFFLEtBQUs7TUFDcEIsQ0FBQyxDQUFDO0tBQ0g7SUFDRCxDQUFDOztBQUVGLE9BQUksZ0JBQWdCLEdBQUUsU0FBbEIsZ0JBQWdCLENBQVcsUUFBUSxFQUFFO0FBQ3hDLFdBQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUNsRSxRQUFHLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUcsUUFBUSxFQUFFO0FBQzFDLFNBQUksV0FBVyxHQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RCxZQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxHQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFGLFNBQUksZ0JBQWdCLElBQUssZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsZUFBZSxFQUFHO0FBQzNKLHNCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQ25JO0FBQ0QsYUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsVUFBUyxTQUFTLEVBQUU7QUFDeEQsVUFBSSxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxjQUFjLENBQUM7QUFDbEQsVUFBSSxTQUFTLEVBQUU7QUFDZCxnQkFBUyxHQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDbEMsZ0JBQVMsR0FBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ2hDLHFCQUFjLEdBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztBQUM1QyxpQkFBVSxHQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1QyxjQUFPLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxHQUFDLFNBQVMsR0FBQyxXQUFXLEdBQUMsVUFBVSxHQUFFLHlCQUF5QixHQUFDLFNBQVMsR0FBRSxlQUFlLEdBQUMsY0FBYyxDQUFDLENBQUM7QUFDL0ssV0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUU7QUFDeEosd0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7QUFHOUUsWUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLElBQUksT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLElBQUksVUFBVSxFQUFFO0FBQzVJLHlCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxjQUFjLENBQUMsQ0FBQztTQUN2RyxNQUFNO0FBQ04sZ0JBQU8sQ0FBQyxJQUFJLENBQUMsNkZBQTZGLENBQUMsQ0FBQztTQUM1RztBQUNELGVBQU8sZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsTUFBTTtBQUNOLGVBQU8sQ0FBQyxJQUFJLENBQUMsMkZBQTJGLENBQUMsQ0FBQztRQUMxRztPQUNELE1BQU07QUFDTixjQUFPLENBQUMsSUFBSSxDQUFDLDhFQUE4RSxDQUFDLENBQUM7T0FDN0Y7TUFDRCxDQUFDLENBQUM7S0FDSDtJQUNELENBQUM7O0FBRUYsUUFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdkMsUUFBSSxRQUFRLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLFFBQUksRUFBRSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUU7QUFDL0MsWUFBTyxDQUFDLEtBQUssQ0FBQyx1REFBdUQsR0FBQyxDQUFDLEdBQUMsNENBQTRDLENBQUMsQ0FBQztLQUN0SCxNQUFNO0FBQ04sWUFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBQyxRQUFRLEdBQUMsV0FBVyxHQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOztBQUVoRyxTQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzs7O0FBSXZFLHVCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVMsU0FBUyxFQUFDO0FBQ3pELFdBQUksU0FBUyxJQUFJLFNBQVMsS0FBRyxRQUFRLEVBQUU7QUFDdEMscUJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRTtPQUNELENBQUMsQ0FBQztBQUNILGFBQU87TUFDUDtBQUNELFNBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNoQyxzQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBQyxFQUFFLENBQUM7TUFDOUI7O0FBRUQscUJBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUMsRUFBRSxDQUFDOzs7QUFHeEMseUJBQW9CLENBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUUvRCxxQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEdBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0csVUFBSSxFQUFDLEVBQUU7QUFDUCxVQUFJLEVBQUMsUUFBUTtBQUNiLHdCQUFrQixFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztBQUMvQyxXQUFLLEVBQUMsT0FBTztBQUNiLFlBQU0sRUFBQyxrQkFBa0I7TUFDekIsQ0FBQyxDQUFDO0FBQ0gsWUFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7O0FBRzVILHFCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsR0FBQyxnQkFBZ0IsQ0FBQztBQUN0RSxxQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFNUgscUJBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxHQUFDLGlCQUFpQixDQUFDOzs7QUFHdkUscUJBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUN4RSxtQkFBYSxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztBQUMxQyxZQUFNLEVBQUMsbUJBQW1CO01BQzFCLENBQUMsQ0FBQztLQUNIO0lBQ0Q7R0FDRDs7Ozs7Ozs7O0FBU0QsV0FBUyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLElBQUksRUFBRTtBQUNyRCxPQUFJLEVBQUUsUUFBUSxJQUFJLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFO0FBQy9DLFdBQU8sQ0FBQyxLQUFLLENBQUMsa0dBQWtHLENBQUMsQ0FBQztBQUNsSCxXQUFPO0lBQ1A7QUFDRCxPQUFJLFVBQVUsSUFBSSxDQUFFLFVBQVUsWUFBWSxLQUFLLEVBQUc7QUFDakQsV0FBTyxDQUFDLEtBQUssQ0FBQyw0RkFBNEYsQ0FBQyxDQUFDO0FBQzVHLFdBQU87SUFDUDtBQUNELFVBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEdBQUMsUUFBUSxHQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDakgsT0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUNuRCxRQUFJLFVBQVUsRUFBRTtBQUNmLFVBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLFVBQUksT0FBTyxHQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixVQUFJLEVBQUUsT0FBTyxJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsQ0FBQyxFQUFFO0FBQzdDLGNBQU8sQ0FBQyxLQUFLLENBQUMsdURBQXVELEdBQUMsQ0FBQyxHQUFDLDRDQUE0QyxDQUFDLENBQUM7T0FDdEgsTUFBTTtBQUNOLFdBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDeEMsWUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUU7QUFDdEQseUJBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzFFLGFBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxJQUFJLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxJQUFJLFVBQVUsRUFBRTtBQUNwSSwwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztVQUMzSDs7QUFFRCx5QkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxVQUFTLFlBQVksRUFBRTs7QUFFckYsY0FBSSxTQUFTLEVBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQztBQUNuQyxjQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDdkMsb0JBQVMsR0FBRSxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQ3JDLG9CQUFTLEdBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztBQUNuQyxxQkFBVSxHQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQyxlQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUcsa0JBQWtCLEVBQUU7QUFDaEQsNEJBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUM1RCwwQkFBYSxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztBQUMxQyxtQkFBTSxFQUFDLG1CQUFtQjthQUMxQixDQUFDLENBQUM7QUFDSCxnQkFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLElBQUksT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLElBQUksVUFBVSxFQUMxSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25HLG1CQUFPLENBQUMsR0FBRyxDQUFDLCtEQUErRCxHQUFDLFNBQVMsR0FBQyxlQUFlLEdBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEgsTUFBTTtBQUNOLG1CQUFPLENBQUMsSUFBSSxDQUFDLHdFQUF3RSxHQUFDLFNBQVMsR0FBQyxhQUFhLEdBQUMsVUFBVSxHQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDM0s7V0FDRDtBQUNELGlCQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLGNBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7VUFDbkQsQ0FBQyxDQUFDO1NBRUgsTUFBTTtBQUNOLGdCQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNDLGFBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxNQUFNO0FBQ04sWUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRDtPQUNEO01BQ0Q7S0FHRCxNQUFNO0FBQ04sVUFBSyxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMvQyx1QkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztNQUM1QztLQUNEO0lBQ0QsTUFBTTtBQUNOLFdBQU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELEdBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVGO0dBQ0Q7Ozs7OztBQU1ELFdBQVMsaUJBQWlCLENBQUMsWUFBWSxFQUFFO0FBQ3hDLE9BQUksUUFBUSxHQUFDLGFBQVksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsT0FBSSxDQUFDLFFBQVEsRUFBRTtBQUNkLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0dBQW9HLENBQUMsQ0FBQztBQUNwSCxXQUFPO0lBQ1A7QUFDRCxPQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzVCLFdBQU8sQ0FBQyxLQUFLLENBQUMsc0dBQXNHLENBQUMsQ0FBQztBQUN0SCxXQUFPO0lBQ1A7QUFDRCxVQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFVBQVMsWUFBWSxFQUFFO0FBQzdGLFFBQUksU0FBUyxFQUNaLFVBQVUsRUFDVixlQUFlLENBQUM7O0FBRWpCLFFBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUN2QyxvQkFBZSxHQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQyxjQUFTLEdBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxlQUFVLEdBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9DLFNBQUksU0FBUyxJQUFJLFNBQVMsS0FBRyxrQkFBa0IsRUFBRTtBQUNoRCxhQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxHQUFDLFFBQVEsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZILGFBQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMvRSxvQkFBYSxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztBQUMxQyxhQUFNLEVBN2xCZ0IsVUE2bEJJO09BQzFCLENBQUMsQ0FBQztNQUNILE1BQU07QUFDTixhQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxHQUFDLGVBQWUsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyx1REFBdUQsQ0FBQyxDQUFDO01BQ3ZMO0tBQ0Q7SUFDRCxDQUFDLENBQUM7R0FDSDs7Ozs7OztBQU9ELFdBQVMsaUJBQWlCLENBQUMsWUFBWSxFQUFDLFFBQVEsRUFBRTtBQUNqRCxPQUFJLFFBQVEsR0FBQyxhQUFZLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLE9BQUksQ0FBQyxRQUFRLEVBQUU7QUFDZCxXQUFPLENBQUMsS0FBSyxDQUFDLG9HQUFvRyxDQUFDLENBQUM7QUFDcEgsV0FBTztJQUNQO0FBQ0QsT0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM1QixXQUFPLENBQUMsS0FBSyxDQUFDLHNHQUFzRyxDQUFDLENBQUM7QUFDdEgsV0FBTztJQUNQO0FBQ0QsVUFBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxVQUFTLFlBQVksRUFBRTtBQUM3RixRQUFJLFNBQVMsRUFBQyxVQUFVLEVBQUMsZUFBZSxDQUFDO0FBQ3pDLFFBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRTtBQUN2QyxvQkFBZSxHQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQyxjQUFTLEdBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxlQUFVLEdBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9DLFNBQUksU0FBUyxJQUFJLFNBQVMsS0FBRyxrQkFBa0IsRUFBRTtBQUNoRCxhQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxHQUFDLFFBQVEsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZILFVBQUksUUFBUSxFQUFFO0FBQ2IsY0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQy9FLHFCQUFhLEVBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTO0FBQzFDLG1CQUFXLEVBQUMsUUFBUTtBQUNwQixjQUFNLEVBQUMsbUJBQW1CO1FBQzFCLENBQUMsQ0FBQztPQUNILE1BQU07QUFDTixjQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0UscUJBQWEsRUFBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDMUMsY0FBTSxFQUFDLG1CQUFtQjtRQUMxQixDQUFDLENBQUM7T0FDSDtNQUNELE1BQU07QUFDTixhQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxHQUFDLGVBQWUsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyx1REFBdUQsQ0FBQyxDQUFDO01BQ3ZMO0tBQ0Q7SUFDRCxDQUFDLENBQUM7R0FDSDs7Ozs7Ozs7OztBQVVELFdBQVMsbUJBQW1CLENBQUMsUUFBUSxFQUFDLElBQUksRUFBRTtBQUMzQyxVQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxHQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZFLFVBQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxVQUFTLFFBQVEsRUFBRTtBQUN6RSxRQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDdkMsU0FBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3hDLFNBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLGFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBUyxhQUFhLEVBQUU7QUFDeEMsVUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQ3pDLGNBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEdBQUMsUUFBUSxHQUFFLFlBQVksR0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMxRyxXQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUcsbUJBQW1CLElBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sS0FBRyxtQkFBbUIsRUFBRztBQUMxRyxlQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDL0cscUJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM3QiwyQkFBbUIsRUFBRSxDQUFDO0FBQ3RCLFlBQUksbUJBQW1CLElBQUUsVUFBVSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDekUsYUFBSSxFQUFFLENBQUM7U0FDUDtRQUNELE1BQU07QUFDTixZQUFJLFVBQVUsR0FBQyxFQUFFLENBQUM7QUFDbEIsa0JBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDckQsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQVksUUFBUSxFQUFFO0FBQzVCLGFBQUksUUFBUSxFQUFFO0FBQ2IsNkJBQW1CLEVBQUUsQ0FBQztBQUN0QixjQUFJLG1CQUFtQixJQUFFLFVBQVUsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3pFLGVBQUksRUFBRSxDQUFDO1dBQ1A7VUFDRCxNQUFNO0FBQ04sY0FBSSxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxLQUFHLGtCQUFrQixFQUFFO0FBQ3BELGVBQUksUUFBUSxHQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQyxtQkFBUSxDQUFDLE1BQU0sR0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxrQkFBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ2pHLE1BQU07QUFDTixrQkFBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1dBQzVHO0FBQ0QsdUJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM3Qiw2QkFBbUIsRUFBRSxDQUFDO0FBQ3RCLGNBQUksbUJBQW1CLElBQUUsVUFBVSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDekUsZUFBSSxFQUFFLENBQUM7V0FDUDtVQUNEO1NBQ0QsQ0FBQztBQUNGLHFCQUFhLENBQUMsVUFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCO09BQ0QsTUFBTTtBQUNOLFdBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUN0QyxZQUFJLEVBQUUsQ0FBQztRQUNQO09BQ0Q7TUFDRCxDQUFDLENBQUM7S0FFSCxNQUFNO0FBQ04sU0FBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxDQUFDO01BQ1A7S0FDRDtJQUVELENBQUMsQ0FBQztHQUNIOzs7Ozs7O0FBT0QsV0FBUyxhQUFhLENBQUMsWUFBWSxFQUFDLElBQUksRUFBRTtBQUN6QyxPQUFJLFlBQVksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3RELFFBQUksUUFBUSxHQUFHLGFBQVksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsV0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRSxRQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pDLFFBQUksWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFZLFFBQVEsRUFBRTtBQUNyQyxTQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFHLGdCQUFnQixFQUFFO0FBQ3BFLGFBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLEdBQUMsUUFBUSxHQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ25GLFVBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNYLE1BQU07QUFDTixhQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxHQUFDLFFBQVEsR0FBRSxlQUFlLENBQUMsQ0FBQztBQUNwRixVQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDWjtLQUNELENBQUM7QUFDRixZQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JHO0dBQ0Q7Ozs7Ozs7O0FBV0QsV0FBUyxNQUFNLEdBQUc7QUFDakIsVUFBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUUxQyxPQUFJLFdBQVcsRUFBRTtBQUNoQixXQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDekUsZUFBVyxHQUFDLElBQUksQ0FBQztJQUNqQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUQsT0FBSSxhQUFhLEVBQUU7QUFDbEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNELGlCQUFhLEdBQUMsSUFBSSxDQUFDO0lBQ25CO0FBQ0QsT0FBSSxlQUFlLEVBQUU7QUFDcEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELG1CQUFlLEdBQUMsSUFBSSxDQUFDO0lBQ3JCO0FBQ0QsT0FBSSxlQUFlLEVBQUU7QUFDcEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELG1CQUFlLEdBQUMsSUFBSSxDQUFDO0lBQ3JCOztBQUVELE9BQUksZ0JBQWdCLEVBQUU7O0FBRXJCLG9CQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFTLE1BQU0sRUFBRTtBQUN6QyxxQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUU7QUFDbEQsVUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO0FBQzFCLGNBQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUMsY0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDNUIsY0FBTSxFQUFDLG1CQUFtQjtBQUMxQixxQkFBYSxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUzs7UUFFMUMsQ0FBQyxDQUFDO09BQ0g7TUFDRCxDQUFDLENBQUM7S0FDSCxDQUFDLENBQUM7QUFDSCxvQkFBZ0IsR0FBQyxFQUFFLENBQUM7SUFDcEI7O0FBRUQsT0FBSSxzQkFBc0IsRUFBRSxzQkFBc0IsR0FBQyxJQUFJLENBQUM7QUFDeEQsT0FBSSxxQkFBcUIsRUFBRSxxQkFBcUIsR0FBQyxJQUFJLENBQUM7O0FBRXRELE9BQUksU0FBUyxFQUFFO0FBQ2QsYUFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLGFBQVMsR0FBQyxJQUFJLENBQUM7SUFDZjtHQUVEOztBQUVELEdBOXNCQSxTQUFTLElBQUksR0FBRztBQUNmLFlBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFNLGFBQWEsQ0FBQyxDQUFDO0FBQ2xHLFlBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQyxZQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0EvRUMsV0FBVyxDQStFYSxDQUFDO0FBQ3ZELE9BQUk7QUFDSCxRQUFJLG1CQUFNLGFBQWEsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsbUJBQU0sYUFBYSxDQUFDLENBQUM7QUFDeEcsUUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdILFFBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqSCxRQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUgsUUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pILFFBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFbkksUUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVwSCxRQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUcsUUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVHLFFBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFcEgsUUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pILFFBQUksU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxSCxRQUFJLFNBQVMsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0SSxRQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkgsUUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlHLFFBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2SCxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1gsV0FBTyxDQUFDLEtBQUssQ0FBQyx3RUFBd0UsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRjtBQUNELFVBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUN0RSxHQWtyQkssQ0FBQztBQUNQLFNBQU87Ozs7OztBQU1OLFFBQUssRUFBRSxpQkFBVztBQUNqQixXQUFPLEVBQUUsQ0FBQztJQUNWOzs7Ozs7QUFNRCxjQUFXLEVBQUUscUJBQVMsUUFBUSxFQUFDLElBQUksRUFBRTtBQUNwQyxnQkFBWSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1Qjs7Ozs7O0FBTUQsZUFBWSxFQUFFLHNCQUFTLFFBQVEsRUFBQyxJQUFJLEVBQUU7QUFDckMsaUJBQWEsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0I7Ozs7O0FBS0QscUJBQWtCLEVBQUUsNEJBQVMsUUFBUSxFQUFFO0FBQ3RDLFdBQU8sbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFckM7Ozs7O0FBS0QsaUJBQWMsRUFBRSx3QkFBUyxJQUFJLEVBQUU7QUFDOUIsV0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0I7Ozs7O0FBS0QsbUJBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQ2hDLFdBQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0I7Ozs7O0FBS0QsbUJBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQ2hDLFdBQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0I7Ozs7Ozs7Ozs7O0FBV0QsZUFBWSxFQUFFLHNCQUFTLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGlCQUFpQixFQUFFO0FBQ3ZFLFdBQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEU7Ozs7Ozs7QUFPRCxtQkFBZ0IsRUFBRSwwQkFBUyxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ2hELFdBQU8saUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9DOzs7Ozs7QUFNRCx5QkFBc0IsRUFBRSxnQ0FBUyx1QkFBdUIsRUFBRTtBQUN6RCxXQUFPLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDeEQ7Ozs7OztBQU1ELDZCQUEwQixFQUFFLG9DQUFTLDJCQUEyQixFQUFFO0FBQ2pFLFdBQU8sMkJBQTJCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNoRTs7Ozs7OztBQU9ELDhCQUEyQixFQUFFLHFDQUFTLFNBQVMsRUFBQyxRQUFRLEVBQUU7QUFDekQsV0FBTyw0QkFBNEIsQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQ7Ozs7Ozs7OztBQVNELHVCQUFvQixFQUFFLDhCQUFTLElBQUksRUFBRTtBQUNwQyxXQUFPLG1CQUFtQixDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwQzs7Ozs7QUFLRCxtQkFBZ0IsRUFBRSwwQkFBUyxnQkFBZ0IsRUFBRTtBQUM1QyxXQUFPLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0M7Ozs7Ozs7QUFPRCxtQkFBZ0IsRUFBRSwwQkFBUyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUU7QUFDckQsV0FBTyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNwRDs7Ozs7O0FBTUQsS0FBRSxFQUFFLFlBQVMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QixZQUFRLEtBQUs7QUFDYixVQUFLLG1CQUFtQjtBQUN2QixVQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsWUFBTTtBQUNQLFVBQUssdUJBQXVCO0FBQzNCLFVBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxZQUFNO0FBQ1AsVUFBSyxXQUFXO0FBQ2YsVUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixZQUFNO0FBQ1AsVUFBSyxhQUFhO0FBQ2pCLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixZQUFNO0FBQ1AsVUFBSyxhQUFhO0FBQ2pCLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixZQUFNO0FBQ1A7QUFDQyxhQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDMUMsYUFBTyxDQUFDLENBQUMsQ0FBQztBQUFBLEtBQ1Y7SUFDRDs7OztBQUlELFFBQUssRUFBRSxpQkFBVztBQUNqQixXQUFPLE1BQU0sRUFBRSxDQUFDO0lBQ2hCO0dBQ0QsQ0FBQztFQUNGLENBQUM7O3NCQUVhLEtBQUs7Ozs7Ozs7QUMxK0JwQixtQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBLHNEOzs7Ozs7QUNEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsbURBQThDO0FBQzlDO0FBQ0E7QUFDQSw2REFBeUQsT0FBTyxFQUFFO0FBQ2xFLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDO0FBQzVDLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsWUFBVztBQUNYLFlBQVc7QUFDWCxZQUFXO0FBQ1gsYUFBWTtBQUNaLGFBQVk7QUFDWix1Qjs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGdDOzs7Ozs7QUNKdkM7QUFDQSxzQ0FBcUMsZ0M7Ozs7OztBQ0RyQztBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBLEtBQU0sS0FBSyxHQUFHLGFBQVc7Ozs7QUFJeEIsV0FBUyxFQUFFLEdBQUc7QUFDYixVQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDM0U7Ozs7Ozs7OztBQVdELE1BQU0sY0FBYyxHQUFHLENBTnZCLFNBQVMsS0FBSyxHQUFHO0FBQ2hCLGVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQUksRUFBRSxFQUFFLFNBQUksRUFBRSxFQUFFLFNBQUksRUFBRSxFQUFFLFNBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUc7R0FDdEUsR0FJNkIsQ0FBQzs7QUFFL0IsU0FBTztBQUNOLGdCQUFhLEVBQUUsY0FBYztHQUM3QixDQUFDO0VBQ0YsR0FBRSxDQUFDOztzQkFFVyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQzdCQSxDQUFXOzs7O3dDQUNQLEVBQWU7Ozs7a0NBQ3JCLEVBQVM7Ozs7Ozs7Ozs7OztzQkFnQlosVUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7O0FBSzlELE1BQUksTUFBTSxHQUFHLFFBQVEsQ0FBQzs7OztBQUl0QixNQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJZCxNQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7O0FBSWhELE1BQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOzs7O0FBSTFCLE1BQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDOzs7OztBQUszQixNQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7O0FBS2xCLE1BQUksYUFBYSxHQUFHLEVBQUUsQ0FBQzs7Ozs7QUFLdkIsTUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUM7Ozs7O0FBS2hDLE1BQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDOzs7O0FBSWhDLE1BQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDOzs7OztBQUtoQyxNQUFJLHNDQUFzQyxHQUFHLElBQUksQ0FBQzs7OztBQUlsRCxNQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7OztBQUlsQyxNQUFJLHdDQUF3QyxHQUFHLElBQUksQ0FBQzs7OztBQUlwRCxNQUFJLDBCQUEwQixHQUFHLElBQUksQ0FBQzs7OztBQUl0QyxNQUFJLDRCQUE0QixHQUFHLElBQUksQ0FBQzs7OztBQUl4QyxNQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FBdUJsQyxXQUFTLG9CQUFvQixHQUFHOztBQUUvQixPQUFJLENBQUMsc0NBQXNDLEVBQUU7QUFDNUMsMENBQXNDLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDNUQsWUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsZ0RBQWdELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlILFNBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEMsUUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckMsd0JBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekIsQ0FBQztBQUNGLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7SUFDOUY7O0FBRUQsT0FBSSxDQUFDLHdDQUF3QyxFQUFFO0FBQzlDLDRDQUF3QyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQzlELFNBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMvQixZQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxrREFBa0QsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUMxRywyQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqQyxDQUFDO0FBQ0YsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztJQUNsRztHQUdEOzs7Ozs7QUFNRCxXQUFTLFVBQVUsR0FBRztBQUNyQixVQUFPLE1BQU0sQ0FBQztHQUNkOzs7Ozs7QUFNRCxXQUFTLE1BQU0sR0FBRztBQUNqQixVQUFPLEVBQUUsQ0FBQztHQUNWOzs7Ozs7O0FBT0QsV0FBUyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUU7O0FBRXBDLE9BQUksMEJBQTBCLEVBQUU7QUFDL0IsV0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUNoRiw4QkFBMEIsR0FBRyxJQUFJLENBQUM7SUFDbEM7QUFDRCxPQUFJLDRCQUE0QixFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDRCQUE0QixDQUFDLENBQUM7QUFDcEYsZ0NBQTRCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDO0FBQ0QsT0FBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3RDLDhCQUEwQixHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ2hELFNBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixTQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUU7QUFDL0UsYUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsNkNBQTZDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakcsVUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ1g7S0FDRCxDQUFDO0FBQ0YsV0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzs7QUFFL0UsZ0NBQTRCLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDbEQsU0FBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNCLFNBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2pGLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLDZDQUE2QyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pHLFVBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNYO0tBQ0QsQ0FBQztBQUNGLFdBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDbkYsTUFBTTtBQUNOLFdBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLGlFQUFpRSxDQUFDLENBQUM7SUFDaEg7R0FDRDs7Ozs7OztBQU9ELFdBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFOztBQUVyQyxPQUFJLHNCQUFzQixFQUFFO0FBQzNCLFdBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDOUUsMEJBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQzlCO0FBQ0QsT0FBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksVUFBVSxFQUFFO0FBQ3RDLDBCQUFzQixHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQzVDLFNBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixTQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2xGLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLDRDQUE0QyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2hHLFVBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNYO0tBQ0QsQ0FBQztBQUNGLFdBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDN0UsTUFBTTtBQUNOLFdBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLGtFQUFrRSxDQUFDLENBQUM7SUFDakg7R0FDRDs7Ozs7O0FBTUQsV0FBUyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7QUFDckMsT0FBSSxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQ25CLFdBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLGdDQUFnQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZGLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDeEMsU0FBSSxFQUFFLEVBQUU7QUFDUixZQUFPLEVBQUUsT0FBTztBQUNoQixjQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTO0tBQ3ZDLENBQUMsQ0FBQztJQUNIO0dBQ0Q7Ozs7Ozs7QUFPRCxXQUFTLG9CQUFvQixDQUFDLElBQUksRUFBRTs7QUFFbkMsT0FBSSxvQkFBb0IsRUFBRTtBQUN6QixXQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdFLHdCQUFvQixHQUFHLElBQUksQ0FBQztJQUM1QjtBQUNELE9BQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUN0Qyx3QkFBb0IsR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUMxQyxTQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDekIsWUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsaURBQWlELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BILFNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNWLENBQUM7QUFDRixXQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVFLE1BQU07QUFDTixXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxnRUFBZ0UsQ0FBQyxDQUFDO0lBQy9HO0dBQ0Q7Ozs7Ozs7OztBQVVELFdBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFO0FBQ3pFLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLDBCQUEwQixHQUFHLE1BQU0sR0FBRyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUcsY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQ3RKLE9BQUksRUFBRSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLEVBQUU7QUFDL0MsV0FBTyxDQUFDLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO0FBQzdHLFdBQU87SUFDUDtBQUNELE9BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekUsT0FBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUU1RCxZQUFTLGVBQWUsR0FBRzs7QUFFMUIsZ0JBQVksQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxtQkFBTSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7QUFDekYsZ0JBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O0FBSXJDLFFBQUksb0JBQW9CLEdBQUcsU0FBdkIsb0JBQW9CLENBQWEsUUFBUSxFQUFFO0FBQzlDLFNBQUksbUJBQW1CLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFDLFNBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixTQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQy9CLFNBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDOUIsU0FBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNoQyxZQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxvREFBb0QsR0FBRyxZQUFZLEdBQUcsYUFBYSxHQUFHLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlLLFNBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDekMsc0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztNQUN6QztBQUNELFNBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN4QixTQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsU0FBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ2pGLFNBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztBQUNqRixTQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxZQUFZO0FBQ2pGLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLG9EQUFvRCxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixDQUFDLENBQUM7O01BRWhLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFdEUscUJBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QyxhQUFPLEVBQUUsUUFBUTtBQUNqQixrQkFBWSxFQUFFLFlBQVk7QUFDMUIsZUFBUyxFQUFFLElBQUk7QUFDZixjQUFRLEVBQUUsU0FBUztBQUNuQixlQUFTLEVBQUUsVUFBVTtNQUNyQixDQUFDLENBQUM7OztLQUdILENBQUM7O0FBRUYsUUFBSSx1QkFBdUIsR0FBRyxTQUExQix1QkFBdUIsQ0FBYSxRQUFRLEVBQUU7QUFDakQsU0FBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25DLFNBQUksWUFBWSxFQUFFO0FBQ2pCLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLHVEQUF1RCxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQzNKLFVBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFGLFlBQUssSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RSxZQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUFFO0FBQ3pFLG1CQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0U7UUFDRDtBQUNELGNBQU8sZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO09BQzNDO01BQ0Q7S0FDRCxDQUFDOztBQUdGLFlBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRztBQUNwQix5QkFBb0IsRUFBcEIsb0JBQW9CO0FBQ3BCLDRCQUF1QixFQUF2Qix1QkFBdUI7S0FDdkIsQ0FBQzs7QUFFRixpQkFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUN0RCxpQkFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUMzRDs7O0FBR0QsT0FBSSxVQUFVLEVBQUU7QUFDZixRQUFJLFVBQVUsS0FBSyxxQkFBUSxpQkFBaUIsRUFBRTtBQUM3Qyw4QkFBWSx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDakYsTUFBTSxJQUFJLFVBQVUsS0FBSyxxQkFBUSxpQkFBaUIsRUFBRTtBQUNwRCw4QkFBWSx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDakYsTUFBTSxJQUFJLFVBQVUsS0FBSyxxQkFBUSx1QkFBdUIsRUFBRTtBQUMxRCw4QkFBWSw0QkFBNEIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDdEY7SUFDRDtHQUNEOzs7Ozs7O0FBT0QsV0FBUyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUU7O0FBRXBDLE9BQUksb0JBQW9CLEVBQUU7QUFDekIsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUM3RSx3QkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDNUI7QUFDRCxPQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDdEMsd0JBQW9CLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDMUMsU0FBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QyxRQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQyxTQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDVixDQUFDO0FBQ0YsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM1RSxNQUFNO0FBQ04sV0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsaUVBQWlFLENBQUMsQ0FBQztJQUNoSDtHQUNEOzs7Ozs7O0FBT0QsV0FBUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQzdDLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLDhCQUE4QixHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ3RGLE9BQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkUsT0FBSSxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFELE9BQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTtBQUNsRSxpQkFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDMUU7QUFDRCxPQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLEVBQUU7QUFDckUsaUJBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQy9FO0FBQ0QsVUFBTyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsVUFBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsZUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLGVBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixPQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMxRixRQUFJLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3pELFNBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUV0QyxlQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVk7QUFDeEYsYUFBTyxFQUFFLENBQUM7QUFDVixVQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7QUFDaEIsY0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7O0FBRTNDLFdBQUksUUFBUSxJQUFJLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBRyxRQUFRLEVBQUUsQ0FBQztPQUMzRDtNQUNELENBQUMsQ0FBQztLQUNIO0lBQ0QsTUFBTTtBQUNOLFdBQU8sZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFFBQUksUUFBUSxJQUFJLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBSyxRQUFRLEVBQUUsQ0FBQztJQUM3RDtHQUdEOzs7Ozs7O0FBT0QsV0FBUyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUU7O0FBRXRDLE9BQUksc0JBQXNCLEVBQUU7QUFDM0IsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNqRiwwQkFBc0IsR0FBRyxJQUFJLENBQUM7SUFDOUI7QUFDRCxPQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDdEMsMEJBQXNCLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDNUMsU0FBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9CLFNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNmLENBQUM7QUFDRixXQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2hGLE1BQU07QUFDTixXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ2xIO0dBQ0Q7Ozs7Ozs7O0FBUUQsV0FBUyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO0FBQ3JFLE9BQUksUUFBUSxHQUFHLGFBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsT0FBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUNqRCxVQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxnQ0FBZ0MsR0FBRyxRQUFRLENBQUMsQ0FBQzs7QUFFeEYsT0FBSSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztBQUVuQyxRQUFJLFVBQVUsRUFBRTtBQUNmLFNBQUksVUFBVSxLQUFLLHFCQUFRLGlCQUFpQixFQUFFO0FBQzdDLCtCQUFZLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO01BQ2xFLE1BQU0sSUFBSSxVQUFVLEtBQUsscUJBQVEsaUJBQWlCLEVBQUU7QUFDcEQsK0JBQVksdUJBQXVCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7TUFDbEUsTUFBTSxJQUFJLFVBQVUsS0FBSyxxQkFBUSx1QkFBdUIsRUFBRTtBQUMxRCwrQkFBWSw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztNQUN2RTtLQUNEO0FBQ0QsV0FBTyxRQUFRLENBQUM7SUFDaEI7O0FBR0QsT0FBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7QUFFdkQsT0FBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RSxPQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDMUQsT0FBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLE9BQUksVUFBVSxHQUFHLElBQUksQ0FBQztBQUN0QixPQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQ3pDLG9CQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekMsTUFBTSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtBQUM1SSxhQUFTLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM1RDs7OztBQUlELFlBQVMscUJBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUN4QyxXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekQ7O0FBRUQsT0FBSSxDQUFDLFNBQVMsRUFBRTtBQUNmLGFBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLHFCQUFxQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRjs7QUFFRCxhQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDOztBQUdoRCxnQkFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBTSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDNUMsUUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7QUFDbEMsWUFBVSxFQUFFO0FBQ1osY0FBWSxTQUFTO0FBQ3JCLGVBQWEsVUFBVTtJQUN2QixDQUFDLENBQUM7QUFDSCxPQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDeEIsT0FBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLE9BQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztBQUNqRixPQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUM7O0FBRWpGLE9BQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxZQUFZOztJQUU1RSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7OztBQUcxRixPQUFJLENBQUMsb0JBQW9CLEVBQUU7QUFDMUIsd0JBQW9CLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDMUMsU0FBSSxlQUFlLEdBQUcsYUFBWSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxTQUFJLGdCQUFnQixDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUMvQyxVQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixhQUFPLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3RELGlCQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUUsUUFBQyxFQUFFLENBQUM7T0FDSjtBQUNELGFBQU8sZ0JBQWdCLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDO01BQ2xEO0tBQ0QsQ0FBQztBQUNGLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUU7O0FBR0QsbUJBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QyxXQUFPLEVBQUUsUUFBUTtBQUNqQixhQUFTLEVBQUUsS0FBSztBQUNoQixZQUFRLEVBQUUsU0FBUztBQUNuQixhQUFTLEVBQUUsVUFBVTtJQUNyQixDQUFDLENBQUM7QUFDSCxVQUFPLFFBQVEsQ0FBQztHQUNoQjs7Ozs7O0FBTUQsV0FBUyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUU7QUFDekMsVUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsb0NBQW9DLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDNUYsT0FBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RSxPQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDMUQsZ0JBQWEsQ0FBQyxLQUFLLENBQUMsbUJBQU0sYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7O0FBRWxELE9BQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQ3hDLFFBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFdBQU8sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDdEQsU0FBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztNQUM5RTtBQUNELE1BQUMsRUFBRSxDQUFDO0tBQ0o7QUFDRCxXQUFPLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzQztBQUNELFVBQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQy9COzs7Ozs7QUFNRCxXQUFTLG9CQUFvQixHQUFHO0FBQy9CLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLDBCQUEwQixDQUFDLENBQUM7QUFDdkUsVUFBTyxpQkFBaUIsQ0FBQztHQUN6Qjs7Ozs7OztBQU9ELFdBQVMsbUJBQW1CLENBQUMsUUFBUSxFQUFFO0FBQ3RDLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLGtDQUFrQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzFGLE9BQUksaUJBQWlCLElBQUksUUFBUSxFQUFFO0FBQ2xDLFNBQUssSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELFNBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7QUFDdEgsYUFBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM1QjtLQUNEO0lBQ0Q7QUFDRCxVQUFPLElBQUksQ0FBQztHQUNaOzs7Ozs7QUFNRCxXQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRTtBQUNsQyxVQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEcsb0JBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzdCOzs7Ozs7QUFNRCxXQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUN6QyxVQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxxQ0FBcUMsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUM3RixPQUFJLGlCQUFpQixJQUFJLFFBQVEsRUFBRTtBQUNsQyxTQUFLLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCxTQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO0FBQ3RILGFBQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUI7S0FDRDtJQUNEO0dBQ0Q7Ozs7O0FBS0QsV0FBUywwQkFBMEIsR0FBRztBQUNyQyxVQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQzVFLG9CQUFpQixHQUFHLEVBQUUsQ0FBQztHQUN2Qjs7Ozs7O0FBTUQsV0FBUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7QUFDbkMsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxpRkFBaUYsQ0FBQyxDQUFDO0FBQ2hJLFdBQU87SUFDUDtBQUNELFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLCtCQUErQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZGLE9BQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzRCxnQkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDckMsT0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUcsU0FBSyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLGVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEY7SUFDRDtBQUNELE9BQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlHLFNBQUssSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RSxlQUFVLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hGO0lBQ0Q7R0FHRDs7Ozs7O0FBTUQsV0FBUyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7QUFDckMsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxtRkFBbUYsQ0FBQyxDQUFDO0FBQ2xJLFdBQU87SUFDUDtBQUNELE9BQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEcsVUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsaUNBQWlDLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDekYsT0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUcsU0FBSyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLGVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEY7SUFDRDtBQUNELE9BQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlHLFNBQUssSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RSxlQUFVLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xGO0lBQ0Q7R0FFRDs7Ozs7O0FBTUQsV0FBUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7QUFDbkMsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxpRkFBaUYsQ0FBQyxDQUFDO0FBQ2hJLFdBQU87SUFDUDtBQUNELFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLCtCQUErQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZGLE9BQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzRCxnQkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDckMsT0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUcsU0FBSyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLGVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEY7SUFDRDtBQUNELE9BQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlHLFNBQUssSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RSxlQUFVLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hGO0lBQ0Q7R0FHRDs7Ozs7O0FBTUQsV0FBUyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7QUFDckMsT0FBSSxFQUFFLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsRUFBRTtBQUMvQyxXQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxtRkFBbUYsQ0FBQyxDQUFDO0FBQ2xJLFdBQU87SUFDUDtBQUNELE9BQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEcsVUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsaUNBQWlDLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDekYsT0FBSSxnQkFBZ0IsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDOUcsU0FBSyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLGVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEY7SUFDRDtBQUNELE9BQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlHLFNBQUssSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RSxlQUFVLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xGO0lBQ0Q7R0FFRDs7Ozs7OztBQVFELFdBQVMsTUFBTSxDQUFDLHVCQUF1QixFQUFFO0FBQ3hDLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixHQUFHLE1BQU0sR0FBRyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsQ0FBQzs7QUFFbkgsVUFBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUV6RSxRQUFLLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtBQUM1QixvQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QjtBQUNELFdBQVEsR0FBRyxFQUFFLENBQUM7QUFDZCxPQUFJLG9CQUFvQixFQUFFO0FBQ3pCLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDN0Usd0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQzVCO0FBQ0QsT0FBSSxvQkFBb0IsRUFBRTtBQUN6QixXQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzdFLHdCQUFvQixHQUFHLElBQUksQ0FBQztJQUM1QjtBQUNELE9BQUksc0NBQXNDLEVBQUU7QUFDM0MsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztBQUMvRiwwQ0FBc0MsR0FBRyxJQUFJLENBQUM7SUFDOUM7O0FBRUQsT0FBSSxzQkFBc0IsRUFBRTtBQUMzQixXQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2pGLDBCQUFzQixHQUFHLElBQUksQ0FBQztJQUM5Qjs7QUFFRCxPQUFJLHdDQUF3QyxFQUFFO0FBQzdDLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHdDQUF3QyxDQUFDLENBQUM7QUFDbkcsNENBQXdDLEdBQUcsSUFBSSxDQUFDO0lBQ2hEOztBQUVELE9BQUksMEJBQTBCLEVBQUU7QUFDL0IsV0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUNoRiw4QkFBMEIsR0FBRyxJQUFJLENBQUM7SUFDbEM7O0FBRUQsT0FBSSw0QkFBNEIsRUFBRTtBQUNqQyxXQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0FBQ3BGLGdDQUE0QixHQUFHLElBQUksQ0FBQztJQUNwQzs7QUFFRCxPQUFJLHNCQUFzQixFQUFFO0FBQzNCLFdBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDOUUsMEJBQXNCLEdBQUcsSUFBSSxDQUFDO0lBQzlCOztBQUVELE9BQUksb0JBQW9CLEVBQUU7QUFDekIsV0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUMvRSx3QkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDNUI7OztBQUdELFFBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUU7QUFDL0IsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwRCxTQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzNCLFVBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ3JDLGlCQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztPQUM3RCxNQUFNO0FBQ04saUJBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQzlEO0FBQ0QsZ0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUM3RDtLQUNEO0lBQ0Q7QUFDRCxtQkFBZ0IsR0FBRyxFQUFFLENBQUM7O0FBR3RCLGdCQUFhLEdBQUcsRUFBRSxDQUFDOztBQUVuQiw2QkFBMEIsRUFBRSxDQUFDO0FBQzdCLE9BQUksdUJBQXVCLElBQUksdUJBQXVCLEtBQUssSUFBSSxFQUFFO0FBQ2hFLFdBQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQXB3QjVCLE9BQU8sQ0Fvd0J3QyxDQUFDO0lBQ3ZFO0dBRUQ7O0FBRUQsR0FuckJBLFNBQVMsSUFBSSxHQUFHO0FBQ2YsVUFBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakQsYUFBUyxFQUFFLElBQUk7QUFDZixpQkFBYSxFQUFFLElBQUk7SUFDbkIsQ0FBQyxDQUFDOztBQUVILFVBQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFeEYsdUJBQW9CLEVBQUUsQ0FBQztHQUN2QixHQTBxQkssQ0FBQzs7QUFFUCxTQUFPOzs7OztBQUtOLFlBQVMsRUFBRSxxQkFBWTtBQUN0QixXQUFPLFVBQVUsRUFBRSxDQUFDO0lBQ3BCOzs7OztBQUtELFFBQUssRUFBRSxpQkFBWTtBQUNsQixXQUFPLE1BQU0sRUFBRSxDQUFDO0lBQ2hCOzs7OztBQUtELHVCQUFvQixFQUFFLDhCQUFVLElBQUksRUFBRTtBQUNyQyx5QkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1Qjs7Ozs7QUFLRCx3QkFBcUIsRUFBRSwrQkFBVSxJQUFJLEVBQUU7QUFDdEMsMEJBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0I7Ozs7OztBQU1ELHFCQUFrQixFQUFFLDRCQUFVLE9BQU8sRUFBRTtBQUN0QyxXQUFPLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDOzs7OztBQUtELHNCQUFtQixFQUFFLDZCQUFVLElBQUksRUFBRTtBQUNwQyx3QkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQjs7Ozs7Ozs7O0FBU0QsZ0JBQWEsRUFBRSx1QkFBVSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFDckUsV0FBTyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkU7Ozs7O0FBS0QsdUJBQW9CLEVBQUUsOEJBQVUsSUFBSSxFQUFFO0FBQ3JDLHlCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCOzs7Ozs7QUFNRCxrQkFBZSxFQUFFLHlCQUFVLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDOUMsV0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUM7Ozs7O0FBS0QseUJBQXNCLEVBQUUsZ0NBQVUsSUFBSSxFQUFFO0FBQ3ZDLDJCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCOzs7Ozs7Ozs7QUFTRCxvQkFBaUIsRUFBRSwyQkFBVSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtBQUNoRSxXQUFPLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUQ7Ozs7O0FBS0Qsd0JBQXFCLEVBQUUsK0JBQVUsUUFBUSxFQUFFO0FBQzFDLFdBQU8sc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEM7Ozs7O0FBS0Qsc0JBQW1CLEVBQUUsK0JBQVk7QUFDaEMsV0FBTyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCOzs7OztBQUtELHFCQUFrQixFQUFFLDRCQUFVLE1BQU0sRUFBRTtBQUNyQyxXQUFPLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DOzs7OztBQUtELGtCQUFlLEVBQUUseUJBQVUsUUFBUSxFQUFFO0FBQ3BDLG9CQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCOzs7OztBQUtELG9CQUFpQixFQUFFLDJCQUFVLFFBQVEsRUFBRTtBQUN0QyxzQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3Qjs7Ozs7QUFLRCxrQkFBZSxFQUFFLHlCQUFVLFFBQVEsRUFBRTtBQUNwQyxvQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQjs7Ozs7QUFLRCxvQkFBaUIsRUFBRSwyQkFBVSxRQUFRLEVBQUU7QUFDdEMsc0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0I7Ozs7OztBQU1ELFFBQUssRUFBRSxlQUFVLHVCQUF1QixFQUFFO0FBQ3pDLFdBQU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkM7Ozs7OztBQU1ELEtBQUUsRUFBRSxZQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDeEIsWUFBUSxHQUFHO0FBQ1gsVUFBSyxnQkFBZ0I7QUFDcEIsMEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsWUFBTTtBQUNQLFVBQUssaUJBQWlCO0FBQ3JCLDJCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLFlBQU07QUFDUCxVQUFLLG1CQUFtQjtBQUN2Qiw2QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixZQUFNO0FBQ1AsVUFBSyxpQkFBaUI7QUFDckIsMkJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsWUFBTTtBQUNQLFVBQUssa0JBQWtCO0FBQ3RCLDRCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLFlBQU07QUFDUDtBQUNDLGFBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxHQUFHLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUNsRixZQUFNO0FBQUEsS0FDTjtJQUNEO0dBQ0QsQ0FBQztFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzN0JELEtBQUksV0FBVyxHQUFHLENBQUMsWUFBVzs7Ozs7QUFLN0IsTUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Ozs7QUFJM0IsTUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Ozs7QUFJM0IsTUFBSSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7Ozs7QUFJaEMsTUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDOzs7O0FBSXZCLE1BQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7OztBQUl2QixNQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7OztBQUk1QixNQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7Ozs7QUFJeEIsTUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDOzs7O0FBSXhCLE1BQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDOzs7O0FBSTdCLE1BQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDOzs7O0FBSTdCLE1BQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDOzs7O0FBSTdCLE1BQUksc0JBQXNCLEdBQUcsSUFBSSxDQUFDOzs7O0FBSWxDLE1BQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDOzs7O0FBSTlCLE1BQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDOzs7O0FBSTlCLE1BQUksc0JBQXNCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztBQVFuQyxXQUFTLFVBQVMsQ0FBQyxRQUFRLEVBQUM7QUFDM0IsVUFBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ25ELE9BQUksQ0FBRSxpQkFBaUIsRUFBRTtBQUN4QixxQkFBaUIsR0FBQyxJQUFJLENBQUM7O0FBRXZCLGFBQVMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBQ2xDLHFCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQscUJBQWlCLENBQUMsS0FBSyxHQUFFLElBQUksQ0FBQztBQUM5QixxQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFFMUMsUUFBRyxXQUFXLEtBQUssSUFBSSxFQUFDO0FBQ3ZCLGNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUcsS0FBSyxFQUFDLEtBQUssRUFBRyxJQUFJLEVBQUMsRUFDOUMsVUFBUyxDQUFDLEVBQUU7QUFDWCxpQkFBVyxHQUFHLENBQUMsQ0FBQztBQUNoQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xELHdCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ3BEO0FBQ0QsdUJBQWlCLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3pDLHFCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDL0I7QUFDRCxvQkFBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQix1QkFBaUIsR0FBQyxLQUFLLENBQUM7O0FBRXhCLFVBQUksUUFBUSxFQUFFO0FBQ2IsZUFBUSxFQUFFLENBQUM7T0FDWDtNQUNELEVBQ0QsVUFBUyxLQUFLLEVBQUU7QUFDZixhQUFPLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7QUFDMUUsYUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQix1QkFBaUIsR0FBQyxLQUFLLENBQUM7O0FBRXhCLFVBQUksUUFBUSxFQUFFO0FBQ2IsZUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ2hCO01BQ0QsQ0FDRCxDQUFDO0tBQ0YsTUFBTTtBQUNOLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEQsdUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUMsV0FBVyxDQUFDLENBQUM7TUFDcEQ7QUFDRCxzQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDdkIsVUFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDekMsb0JBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztNQUMvQjtBQUNELG1CQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLHNCQUFpQixHQUFDLEtBQUssQ0FBQztLQUN4QjtJQUNEO0dBQ0Q7Ozs7Ozs7O0FBUUQsV0FBUyxVQUFTLENBQUMsUUFBUSxFQUFFO0FBQzVCLFVBQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUNuRCxPQUFJLENBQUUsaUJBQWlCLEVBQUU7QUFDeEIscUJBQWlCLEdBQUMsSUFBSSxDQUFDOztBQUV2QixhQUFTLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztBQUNsQyxxQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELHFCQUFpQixDQUFDLEtBQUssR0FBRSxJQUFJLENBQUM7QUFDOUIscUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRTFDLFFBQUcsV0FBVyxLQUFLLElBQUksRUFBQztBQUN2QixjQUFTLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFHLElBQUksRUFBQyxLQUFLLEVBQUcsS0FBSyxFQUFDLEVBQzlDLFVBQVMsQ0FBQyxFQUFFO0FBQ1gsaUJBQVcsR0FBRyxDQUFDLENBQUM7QUFDaEIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsRCx3QkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxXQUFXLENBQUMsQ0FBQztPQUNwRDtBQUNELHVCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUN2QixXQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUN6QyxxQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQy9CO0FBQ0Qsb0JBQWMsR0FBRyxFQUFFLENBQUM7QUFDcEIsdUJBQWlCLEdBQUMsS0FBSyxDQUFDOztBQUV4QixVQUFJLFFBQVEsRUFBRTtBQUNiLGVBQVEsRUFBRSxDQUFDO09BQ1g7TUFDRCxFQUNELFVBQVMsS0FBSyxFQUFFO0FBQ2YsYUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO0FBQ3pFLGFBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsdUJBQWlCLEdBQUMsS0FBSyxDQUFDOztBQUV4QixVQUFJLFFBQVEsRUFBRTtBQUNiLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNoQjtNQUNELENBQ0QsQ0FBQztLQUNGLE1BQU07QUFDTixVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xELHVCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ3BEO0FBQ0Qsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLFVBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3pDLG9CQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDL0I7QUFDRCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQixzQkFBaUIsR0FBQyxLQUFLLENBQUM7S0FDeEI7SUFDRDtHQUNEOzs7Ozs7OztBQVFELFdBQVMsZUFBYyxDQUFDLFFBQVEsRUFBRTtBQUNqQyxVQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDeEQsT0FBSSxDQUFDLHNCQUFzQixFQUFFO0FBQzVCLDBCQUFzQixHQUFDLElBQUksQ0FBQzs7QUFFNUIsYUFBUyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7QUFDbEMsMEJBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RCwwQkFBc0IsQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDO0FBQ25DLDBCQUFzQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUVwRCxRQUFHLGdCQUFnQixLQUFLLElBQUksRUFBQztBQUM1QixjQUFTLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFHLElBQUksRUFBQyxLQUFLLEVBQUcsSUFBSSxFQUFDLEVBQzdDLFVBQUMsQ0FBQyxFQUFLOztBQUVOLHNCQUFnQixHQUFHLENBQUMsQ0FBQztBQUNyQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELHdCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFDLGdCQUFnQixDQUFDLENBQUM7T0FDOUQ7QUFDRCw0QkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDNUIsV0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRTtBQUM5QywwQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ3pDO0FBQ0QseUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLDRCQUFzQixHQUFDLEtBQUssQ0FBQzs7QUFFN0IsVUFBSSxRQUFRLEVBQUU7QUFDYixlQUFRLEVBQUUsQ0FBQztPQUNYO01BQ0QsRUFDRCxVQUFDLEtBQUssRUFBSztBQUNWLGFBQU8sQ0FBQyxLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztBQUNuSCxhQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLDRCQUFzQixHQUFDLEtBQUssQ0FBQzs7QUFFN0IsVUFBSSxRQUFRLEVBQUU7QUFDYixlQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDaEI7TUFDRCxDQUNELENBQUM7S0FDRixNQUFNO0FBQ04sVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCx1QkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO01BQzlEO0FBQ0QsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLFVBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDOUMseUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztNQUN6QztBQUNELHdCQUFtQixHQUFHLEVBQUUsQ0FBQztBQUN6QiwyQkFBc0IsR0FBQyxLQUFLLENBQUM7S0FDN0I7SUFFRDtHQUNEOzs7Ozs7QUFNRCxXQUFTLE1BQUssR0FBRztBQUNoQixVQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDL0MsT0FBSSxpQkFBaUIsRUFBRTtBQUN0QixxQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JDLHFCQUFpQixHQUFDLElBQUksQ0FBQztJQUN2QjtBQUNELE9BQUksZ0JBQWdCLEVBQUU7QUFDckIsb0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsb0JBQWdCLEdBQUMsSUFBSSxDQUFDO0lBQ3RCO0FBQ0QsT0FBSSxXQUFXLEVBQUU7QUFDaEIsZUFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25CLGVBQVcsR0FBRyxJQUFJLENBQUM7SUFDbkI7QUFDRCxvQkFBaUIsR0FBQyxLQUFLLENBQUM7O0FBRXhCLE9BQUksaUJBQWlCLEVBQUU7QUFDdEIscUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyQyxxQkFBaUIsR0FBQyxJQUFJLENBQUM7SUFDdkI7QUFDRCxPQUFJLFdBQVcsRUFBRTtBQUNoQixlQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkIsZUFBVyxHQUFHLElBQUksQ0FBQztJQUNuQjs7QUFFRCxvQkFBaUIsR0FBQyxLQUFLLENBQUM7O0FBRXhCLE9BQUksc0JBQXNCLEVBQUU7QUFDM0IscUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMxQywwQkFBc0IsR0FBQyxJQUFJLENBQUM7SUFDNUI7QUFDRCxPQUFJLGdCQUFnQixFQUFFO0FBQ3JCLG9CQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLG9CQUFnQixHQUFHLElBQUksQ0FBQztJQUN4Qjs7QUFFRCx5QkFBc0IsR0FBQyxLQUFLLENBQUM7R0FDN0I7O0FBR0QsU0FBTzs7OztBQUlOLGlCQUFjLEVBQUMsMEJBQVk7QUFDMUIsV0FBTyxXQUFXLENBQUM7SUFDbkI7Ozs7O0FBS0QsbUJBQWdCLEVBQUUsMEJBQVMsRUFBRSxFQUFFO0FBQzlCLGtCQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCOzs7Ozs7O0FBT0QsWUFBUyxFQUFFLHFCQUFXO0FBQ3JCLGNBQVMsRUFBRSxDQUFDO0lBQ1o7Ozs7Ozs7QUFPRCwwQkFBdUIsRUFBQyxpQ0FBVSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQzlFLFFBQUksUUFBUSxFQUFFO0FBQ2IsYUFBUSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7QUFDcEIsU0FBSSxXQUFXLEVBQUU7QUFDaEIsYUFBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO0FBQ3pGLHVCQUFpQixDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxVQUFJLGdCQUFnQixJQUFJLE9BQU8sZ0JBQWdCLElBQUUsVUFBVSxFQUFFO0FBQzVELHVCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQzlCO01BQ0QsTUFBTTtBQUNOLHVCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxVQUFJLGdCQUFnQixJQUFJLE9BQU8sZ0JBQWdCLElBQUUsVUFBVSxFQUFFO0FBQzVELHFCQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7T0FDdEM7QUFDRCxnQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQzNCO0tBQ0QsTUFBTTtBQUNOLFNBQUksQ0FBQyxXQUFXLEVBQUU7QUFDakIsVUFBSSxnQkFBZ0IsSUFBSSxPQUFPLGdCQUFnQixJQUFFLFVBQVUsRUFBRTtBQUM1RCxxQkFBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ3RDO0FBQ0QsZ0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUMzQixNQUFNO0FBQ04sVUFBSSxnQkFBZ0IsSUFBSSxPQUFPLGdCQUFnQixJQUFFLFVBQVUsRUFBRTtBQUM1RCx1QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUM5QjtNQUNEO0tBQ0Q7SUFDRDs7Ozs7QUFLRCxpQkFBYyxFQUFDLDBCQUFZO0FBQzFCLFdBQU8sV0FBVyxDQUFDO0lBQ25COzs7OztBQUtELG1CQUFnQixFQUFFLDBCQUFTLEVBQUUsRUFBRTtBQUM5QixrQkFBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4Qjs7Ozs7OztBQU9ELFlBQVMsRUFBRSxxQkFBVztBQUNyQixjQUFTLEVBQUUsQ0FBQztJQUNaOzs7Ozs7O0FBT0QsMEJBQXVCLEVBQUMsaUNBQVUsUUFBUSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUM5RSxRQUFJLFFBQVEsRUFBRTtBQUNiLGFBQVEsQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO0FBQ3BCLFNBQUksV0FBVyxFQUFFO0FBQ2hCLGFBQU8sQ0FBQyxHQUFHLENBQUMsMkVBQTJFLENBQUMsQ0FBQztBQUN6Rix1QkFBaUIsQ0FBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsVUFBSSxnQkFBZ0IsSUFBSSxPQUFPLGdCQUFnQixJQUFFLFVBQVUsRUFBRTtBQUM1RCx1QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUM5QjtNQUNELE1BQU07QUFDTix1QkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsVUFBSSxnQkFBZ0IsSUFBSSxPQUFPLGdCQUFnQixJQUFFLFVBQVUsRUFBRTtBQUM1RCxxQkFBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ3RDO0FBQ0QsZ0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUMzQjtLQUNELE1BQU07QUFDTixTQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2pCLFVBQUksZ0JBQWdCLElBQUksT0FBTyxnQkFBZ0IsSUFBRSxVQUFVLEVBQUU7QUFDNUQscUJBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztPQUN0QztBQUNELGdCQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7TUFDM0IsTUFBTTtBQUNOLFVBQUksZ0JBQWdCLElBQUksT0FBTyxnQkFBZ0IsSUFBRSxVQUFVLEVBQUU7QUFDNUQsdUJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDOUI7TUFDRDtLQUNEO0lBQ0Q7Ozs7O0FBS0Qsc0JBQW1CLEVBQUMsK0JBQVk7QUFDL0IsV0FBTyxnQkFBZ0IsQ0FBQztJQUN4Qjs7Ozs7QUFLRCx3QkFBcUIsRUFBRSwrQkFBUyxFQUFFLEVBQUU7QUFDbkMsdUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCOzs7Ozs7O0FBT0QsaUJBQWMsRUFBRSwwQkFBVztBQUMxQixtQkFBYyxFQUFFLENBQUM7SUFDakI7Ozs7Ozs7QUFPRCwrQkFBNEIsRUFBQyxzQ0FBVSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ3hGLFFBQUksYUFBYSxFQUFFO0FBQ2xCLGtCQUFhLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztBQUN6QixTQUFJLGdCQUFnQixFQUFFO0FBQ3JCLGFBQU8sQ0FBQyxHQUFHLENBQUMscUZBQXFGLENBQUMsQ0FBQztBQUNuRyx1QkFBaUIsQ0FBQyxhQUFhLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxVQUFJLGdCQUFnQixFQUFFO0FBQ3JCLHVCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7T0FDbkM7TUFDRCxNQUFNO0FBQ04sNEJBQXNCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLFVBQUksZ0JBQWdCLElBQUksT0FBTyxnQkFBZ0IsSUFBSSxVQUFVLEVBQUU7QUFDOUQsMEJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7T0FDM0M7QUFDRCxxQkFBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQ2hDO0tBQ0QsTUFBTTtBQUNOLFNBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN0QixVQUFJLGdCQUFnQixJQUFJLE9BQU8sZ0JBQWdCLElBQUksVUFBVSxFQUFFO0FBQzlELDBCQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQzNDO0FBQ0QscUJBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUNoQyxNQUFNO0FBQ04sVUFBSSxnQkFBZ0IsRUFBRTtBQUNyQix1QkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO09BQ25DO01BQ0Q7S0FDRDtJQUNEOzs7OztBQUtELFFBQUssRUFBRSxpQkFBVztBQUNqQixVQUFLLEVBQUUsQ0FBQztJQUNSO0dBQ0QsQ0FBQztFQUVGLEdBQUcsQ0FBQzs7c0JBRVUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDM2RSLEVBQVM7Ozs7bUNBQ1IsRUFBVTs7Ozt3Q0FDTCxFQUFlOzs7Ozs7OztBQU12QyxLQUFJLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBWSxRQUFRLEVBQUU7Ozs7O0FBS25DLE1BQUksWUFBWSxHQUFHLEVBQUUsQ0FBQzs7OztBQUl0QixNQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0IsV0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUU7QUFDcEosT0FBSSxhQUFhLEdBQUMsVUFBVSxDQUFFOzs7Ozs7QUFNOUIsT0FBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQU0sYUFBYSxDQUFDLENBQUM7QUFDdEYsT0FBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyRixPQUFJLGtCQUFrQixDQUFFOztBQUV4QixPQUFJLFdBQVcsRUFBRTtBQUNoQixzQkFBa0IsR0FBRztBQUNwQixrQkFBYSxFQUFFLGFBQWE7QUFDNUIsYUFBUSxFQUFFLEtBQUs7S0FDZixDQUFDO0lBQ0YsTUFBTTtBQUNOLHNCQUFrQixHQUFHO0FBQ3BCLGtCQUFhLEVBQUUsYUFBYTtBQUM1QixjQUFTLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0Y7QUFDRCxPQUFJLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7OztBQUcxRCxPQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQzs7QUFFcEYsUUFBSSxXQUFXLENBQUM7QUFDaEIsZUFBVyxHQUFHLHlCQUFPLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxXQUFXLENBQUMsQ0FBQztBQUN6SCxlQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLFFBQUksV0FBVyxFQUFFO0FBQ2hCLGlCQUFZLENBQUMsYUFBYSxDQUFDLEdBQUc7QUFDN0IsV0FBSyxFQUFDLFdBQVc7QUFDakIsaUJBQVcsRUFBQyxDQUFDO0FBQ2Isa0JBQVksRUFBQyxDQUFDO01BQ2QsQ0FBQztBQUNGLGdCQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3BELE1BQU07QUFDTixpQkFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHO0FBQzdCLFdBQUssRUFBQyxXQUFXO0FBQ2pCLGlCQUFXLEVBQUMsQ0FBQztBQUNiLGtCQUFZLEVBQUMsQ0FBQztNQUNkLENBQUM7QUFDRixnQkFBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBQyxhQUFhLENBQUMsQ0FBQztLQUNyRDtJQUlELE1BQU07QUFDTixXQUFPLENBQUMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7O0FBRXBGLFFBQUksV0FBVyxFQUFFO0FBQ2hCLGlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUMsaUJBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFFLE1BQU07QUFDTixpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzNDLGlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBQyxhQUFhLENBQUMsQ0FBQztLQUMzRTtJQUdEO0FBQ0QsVUFBTyxDQUFDLEtBQUssQ0FBQyxtREFBbUQsR0FBQyxhQUFhLEdBQUUsMEJBQTBCLEdBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsR0FBQywyQkFBMkIsR0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMU4sVUFBTyxFQUFFLENBQUM7R0FDVjs7Ozs7Ozs7QUFRRCxXQUFTLFlBQVksQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBRTtBQUNoRCxVQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxHQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVELE9BQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM3QixXQUFPLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxHQUFDLEVBQUUsR0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsRixRQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDOUMsYUFBUSxFQUFFLENBQUM7S0FDWDtBQUNELFdBQU8sS0FBSyxDQUFDO0lBQ2I7O0FBRUQsT0FBSSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzFELE9BQUksYUFBYSxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBSTtBQUNuRCxRQUFJLGFBQWEsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxHQUFDLENBQUMsRUFBRTtBQUMvRCxpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxHQUFDLENBQUMsRUFBRTtBQUN4RSxpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzNDO0FBQ0QsUUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxHQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxHQUFDLENBQUMsRUFBRTtBQUM1RixZQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxHQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUU5RixpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEQsaUJBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDbkMsTUFBTTtBQUNOLFlBQU8sQ0FBQyxLQUFLLENBQUMsa0VBQWtFLEdBQUMsYUFBYSxHQUFFLDBCQUEwQixHQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEdBQUMsMkJBQTJCLEdBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pPLFNBQUksUUFBUSxJQUFJLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBRTtBQUM5QyxjQUFRLEVBQUUsQ0FBQztNQUNYO0tBQ0Q7SUFDRCxNQUFNO0FBQ04sUUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksVUFBVSxFQUFFO0FBQzlDLGFBQVEsRUFBRSxDQUFDO0tBQ1g7QUFDRCxXQUFPLENBQUMsSUFBSSxDQUFDLDREQUE0RCxDQUFDLENBQUM7SUFDM0U7O0FBRUQsT0FBSSxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7QUFDckMsNkJBQVksS0FBSyxFQUFFLENBQUM7QUFDcEIscUJBQWlCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQ7QUFDRCxPQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUFFLHFCQUFpQixDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQUM7O0FBRS9GLFVBQU8sSUFBSSxDQUFDO0dBQ1o7Ozs7OztBQU1ELFdBQVMsa0JBQWtCLENBQUMsYUFBYSxFQUFFO0FBQzFDLFVBQU8sQ0FBQyxLQUFLLENBQUMsOENBQThDLEdBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUUsT0FBSSxhQUFhLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtBQUNqRSxnQkFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQztBQUNELFVBQU8sSUFBSSxDQUFDO0dBQ1o7Ozs7OztBQU1ELFdBQVMscUJBQXFCLENBQUMsb0JBQW9CLEVBQUU7QUFDcEQsVUFBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsR0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztBQUV4RyxPQUFJLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxhQUFhLEVBQUU7QUFDaEksUUFBSSxhQUFhLEdBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDMUUsV0FBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsR0FBQyxvQkFBb0IsR0FBRSxnQkFBZ0IsR0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4SSxRQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNyRixpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUM5QyxNQUFPO0FBQ1AsWUFBTyxDQUFDLElBQUksQ0FBQyw0REFBNEQsR0FBQyxhQUFhLEdBQUUsV0FBVyxDQUFDLENBQUM7S0FDdEc7SUFDRCxNQUFNO0FBQ04sV0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBcUUsR0FBQyxvQkFBb0IsR0FBRSxXQUFXLENBQUMsQ0FBQztJQUN0SDtHQUdEOzs7Ozs7QUFNRCxXQUFVLHVCQUF1QixDQUFFLG9CQUFvQixFQUFFO0FBQ3hELFVBQU8sQ0FBQyxHQUFHLENBQUMsd0VBQXdFLEdBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFM0csT0FBSSxtQkFBbUIsSUFBSSxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLENBQUMsYUFBYSxFQUFFO0FBQ2hJLFFBQUksYUFBYSxHQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLENBQUMsYUFBYSxDQUFDO0FBQzFFLFdBQU8sQ0FBQyxHQUFHLENBQUMsd0VBQXdFLEdBQUMsb0JBQW9CLEdBQUUsaUJBQWlCLEdBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUksUUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDckYsaUJBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDaEQsTUFBTztBQUNQLFlBQU8sQ0FBQyxJQUFJLENBQUMsK0RBQStELEdBQUMsYUFBYSxHQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3pHO0lBQ0QsTUFBTTtBQUNOLFdBQU8sQ0FBQyxJQUFJLENBQUMsd0VBQXdFLEdBQUMsb0JBQW9CLEdBQUUsV0FBVyxDQUFDLENBQUM7SUFDekg7R0FFRDs7Ozs7O0FBT0QsV0FBUyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBRTtBQUNwRCxVQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxHQUFDLG9CQUFvQixDQUFDLENBQUM7O0FBRXhHLE9BQUksbUJBQW1CLElBQUksbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGFBQWEsRUFBRTtBQUNoSSxRQUFJLGFBQWEsR0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMxRSxXQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxHQUFDLG9CQUFvQixHQUFFLGdCQUFnQixHQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hJLFFBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFO0FBQ3JGLGlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzlDLE1BQU87QUFDUCxZQUFPLENBQUMsSUFBSSxDQUFDLDREQUE0RCxHQUFDLGFBQWEsR0FBRSxXQUFXLENBQUMsQ0FBQztLQUN0RztJQUNELE1BQU07QUFDTixXQUFPLENBQUMsSUFBSSxDQUFDLHFFQUFxRSxHQUFDLG9CQUFvQixHQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RIO0dBR0Q7Ozs7OztBQU1ELFdBQVUsdUJBQXVCLENBQUUsb0JBQW9CLEVBQUU7QUFDeEQsVUFBTyxDQUFDLEdBQUcsQ0FBQyx3RUFBd0UsR0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztBQUUzRyxPQUFJLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLElBQUksbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxhQUFhLEVBQUU7QUFDaEksUUFBSSxhQUFhLEdBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDMUUsV0FBTyxDQUFDLEdBQUcsQ0FBQyx3RUFBd0UsR0FBQyxvQkFBb0IsR0FBRSxpQkFBaUIsR0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1SSxRQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTtBQUNyRixpQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNoRCxNQUFPO0FBQ1AsWUFBTyxDQUFDLElBQUksQ0FBQywrREFBK0QsR0FBQyxhQUFhLEdBQUUsV0FBVyxDQUFDLENBQUM7S0FDekc7SUFDRCxNQUFNO0FBQ04sV0FBTyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsR0FBQyxvQkFBb0IsR0FBRSxXQUFXLENBQUMsQ0FBQztJQUN6SDtHQUVEOztBQUdELFNBQU87Ozs7Ozs7Ozs7O0FBV04sZUFBWSxFQUFFLHNCQUFTLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUU7QUFDeEksV0FBUSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLENBQUMsQ0FBQztJQUNuSjs7Ozs7Ozs7QUFRRCxjQUFXLEVBQUUscUJBQVMsRUFBRSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUU7QUFDaEQsV0FBUSxZQUFZLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNoRDs7Ozs7O0FBTUQsb0JBQWlCLEVBQUUsMkJBQVMsYUFBYSxFQUFFO0FBQzFDLFdBQU8sa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekM7Ozs7O0FBS0QsdUJBQW9CLEVBQUUsOEJBQVMsb0JBQW9CLEVBQUU7QUFDcEQsV0FBTyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRW5EOzs7OztBQUtELHlCQUFzQixFQUFFLGdDQUFTLG9CQUFvQixFQUFFO0FBQ3RELFdBQU8sdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRDs7Ozs7QUFLRCx1QkFBb0IsRUFBRSw4QkFBUyxvQkFBb0IsRUFBRTtBQUNwRCxXQUFPLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFbkQ7Ozs7O0FBS0QseUJBQXNCLEVBQUUsZ0NBQVMsb0JBQW9CLEVBQUU7QUFDdEQsV0FBTyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JEO0dBQ0QsQ0FBQztFQUNGLENBQUM7O3NCQUVhLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQzFUTCxDQUFXOzs7O3dDQUNQLEVBQWU7Ozs7Ozs7Ozs7O0FBUXZDLEtBQU0saUNBQWlDLEdBQUcsY0FBYyxDQUFDOzs7Ozs7O0FBT3pELEtBQU0sOEJBQThCLEdBQUUsV0FBVyxDQUFDOzs7Ozs7O0FBT2xELEtBQU0sOEJBQThCLEdBQUUsV0FBVyxDQUFDOzs7Ozs7O0FBT2xELEtBQU0sNkJBQTZCLEdBQUUsVUFBVSxDQUFDOzs7Ozs7O0FBT2hELEtBQU0sMkJBQTJCLEdBQUUsUUFBUSxDQUFDOzs7Ozs7O0FBTzVDLEtBQU0sMkJBQTJCLEdBQUUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFpQjVDLEtBQU0sa0JBQWtCLEdBQUc7QUFDMUIsWUFBVSxFQUFFLENBQ1g7QUFDQyxRQUFPLG1DQUFtQztBQUMxQyxhQUFZLE9BQU87QUFDbkIsZUFBYyxZQUFZO0dBQzFCLEVBQ0Q7QUFDQyxRQUFPLG1DQUFtQztBQUMxQyxhQUFZLE9BQU87QUFDbkIsZUFBYyxZQUFZO0dBQzFCLEVBQ0Q7QUFDQyxRQUFPLGtDQUFrQztBQUN6QyxhQUFZLE9BQU87QUFDbkIsZUFBYyxZQUFZO0dBQzFCLENBQ0Q7RUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFnQkYsS0FBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQWEsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTs7Ozs7QUFLM0ksTUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDOzs7O0FBSTlCLE1BQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7QUFJbkMsTUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDOzs7O0FBSTVCLE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7OztBQUlkLE1BQUksWUFBWSxHQUFHLGNBQWMsQ0FBQzs7OztBQUlsQyxNQUFJLGFBQWEsR0FBRyxlQUFlLENBQUM7Ozs7QUFJcEMsTUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUM7Ozs7QUFJL0IsTUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDOzs7O0FBSXRCLE1BQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7OztBQUl2QixNQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJM0IsTUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7O0FBSXJCLE1BQUksYUFBYSxHQUFHLGVBQWUsQ0FBQzs7OztBQUlwQyxNQUFJLFVBQVUsR0FBRyxZQUFZLENBQUM7Ozs7QUFJOUIsTUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7OztBQUtsQixNQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7Ozs7QUFLNUIsTUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7Ozs7QUFJbkMsTUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7O0FBSzdCLE1BQUksWUFBWSxHQUFHLEVBQUUsQ0FBQzs7OztBQUl0QixNQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7Ozs7QUFJdkIsTUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDOzs7O0FBSXpCLE1BQUksY0FBYyxHQUFHLElBQUksQ0FBQzs7OztBQUkxQixNQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdEIsTUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDOzs7O0FBSXJCLE1BQUksZUFBZSxHQUFHLEtBQUssQ0FBQzs7OztBQUk1QixNQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQzs7OztBQUk5QixNQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7O0FBRXRCLE1BQUksV0FBVyxHQUFHLEtBQUssQ0FBQzs7QUFFeEIsTUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDOztBQUd4QixTQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLE9BQU8sR0FBRyxhQUFhLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixHQUFHLFlBQVksR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Qy9KLFdBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUNuQixVQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEUsVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNmOzs7Ozs7Ozs7QUFzREQsV0FBUyxPQUFPLEdBQUc7QUFDbEIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsR0FBRyxPQUFPLEdBQUcsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFbkcsS0FBRSxHQUFHLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQXhGbEI7QUFDZCxZQUFRLEVBQUUsQ0FSZ0I7QUFDMUIseUJBQW9CLEVBQUUsSUFBSTtLQUMxQixDQU1nQztJQUNoQyxDQXNGMkMsQ0FBQzs7Ozs7QUFNNUMsS0FBRSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsRUFBRTtBQUNoQyxRQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsWUFBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsR0FBRyxPQUFPLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMvSCxpQkFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM1QyxXQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhO0FBQ2hDLFFBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdEIsZUFBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUztNQUNoQyxDQUFDLENBQUM7S0FDSDtJQUNELENBQUM7Ozs7O0FBS0YsS0FBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsRUFBRTtBQUM3QixXQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDakgsUUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUNsQixtQkFBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUIsU0FBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDOUIsU0FBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7S0FDOUI7Ozs7Ozs7OztJQVNELENBQUM7O0FBRUYsS0FBRSxDQUFDLDBCQUEwQixHQUFHLFlBQVk7O0FBRTNDLFFBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEtBQUssNkJBQTZCLEVBQUU7QUFDcEUsWUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQ3RHLHVCQUFrQixHQUFHLDZCQUE2QixDQUFDO0tBQ25ELE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyw4QkFBOEIsRUFBRTtBQUM1RSx1QkFBa0IsR0FBRyw4QkFBOEIsQ0FBQztBQUNwRCxZQUFPLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDdkcsU0FBSSxjQUFjLEVBQUU7QUFDbkIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUMsV0FBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDckIsZUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLDBCQUEwQixHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1SSx5QkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDcEQ7T0FDRDtBQUNELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hELFdBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLHVCQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkM7T0FDRDtBQUNELHFCQUFlLEdBQUcsRUFBRSxDQUFDO01BQ3JCO0FBQ0Qsc0NBQWlDLEVBQUUsQ0FBQztLQUNwQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEtBQUssOEJBQThCLEVBQUU7QUFDNUUsdUJBQWtCLEdBQUcsOEJBQThCLENBQUM7QUFDcEQsWUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLDhCQUE4QixDQUFDLENBQUM7QUFDMUgsc0NBQWlDLEVBQUUsQ0FBQztLQUNwQztBQUNELFFBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEtBQUssaUNBQWlDLEVBQUU7QUFDeEUsdUJBQWtCLEdBQUcsaUNBQWlDLENBQUM7QUFDdkQsWUFBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLCtDQUErQyxDQUFDLENBQUM7QUFDekksV0FBTSxFQUFFLENBQUM7S0FDVCxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEtBQUssMkJBQTJCLEVBQUU7QUFDekUsWUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ3BHLHVCQUFrQixHQUFHLDJCQUEyQixDQUFDO0FBQ2pELFdBQU0sRUFBRSxDQUFDO0tBQ1QsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLGtCQUFrQixLQUFLLDJCQUEyQixFQUFFO0FBQ3pFLFlBQU8sQ0FBQyxLQUFLLENBQUMseURBQXlELEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUNwRyx1QkFBa0IsR0FBRywyQkFBMkIsQ0FBQztBQUNqRCxXQUFNLEVBQUUsQ0FBQztLQUNULE1BQU07QUFDTixTQUFJLEVBQUUsRUFBRTtBQUNQLGFBQU8sQ0FBQyxLQUFLLENBQUMseURBQXlELEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztNQUNqSCxNQUFNO0FBQ04sYUFBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsR0FBRyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUM7TUFDbEc7O0FBRUQsdUJBQWtCLEdBdlZZLE9BdVZpQixDQUFDO0tBQ2hEOztBQUVELFFBQUksUUFBUSxLQUFLLGtCQUFrQixLQUFLLGlDQUFpQyxJQUFJLGtCQUFrQixLQUFLLDJCQUEyQixJQUFJLGtCQUFrQixLQUFLLDJCQUEyQixDQUFDLEVBQUU7QUFDdkwsWUFBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLDhCQUE4QixDQUFDLENBQUM7QUFDdEcsT0FBRSxHQUFHLElBQUksQ0FBQztBQUNWLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1QyxTQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsSUFBSSxVQUFVLEVBQUU7QUFDaEQsZUFBUyxFQUFFLENBQUM7TUFDWjtBQUNELFNBQUksVUFBVSxJQUFJLE9BQU8sVUFBVSxJQUFJLFVBQVUsRUFBRTtBQUNsRCxnQkFBVSxFQUFFLENBQUM7TUFDYjtLQUVEO0lBQ0QsQ0FBQzs7O0FBR0Ysc0JBQW1CLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDekMsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLFFBQUksU0FBUyxHQUFHLElBQUksaUJBQWlCLENBQUM7QUFDckMsa0JBQWEsRUFBRSxJQUFJLENBQUMsS0FBSztBQUN6QixjQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDekIsV0FBTSxFQUFFLElBQUksQ0FBQyxFQUFFO0tBQ2YsQ0FBQyxDQUFDO0FBQ0gsV0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsR0FBRyxPQUFPLEdBQUcseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztBQUVsSSxNQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7SUFHOUIsQ0FBQzs7QUFFRixPQUFJLFNBQVMsRUFBRTtBQUNkLG9CQUFnQixDQUFDLFlBQVk7QUFDNUIsc0JBQWlCLEVBQUUsQ0FBQztBQUNwQixjQUFTLEVBQUUsQ0FBQztLQUVaLENBQUMsQ0FBQztJQUNILE1BQU07QUFDTixxQkFBaUIsRUFBRSxDQUFDO0lBQ3BCO0dBR0Q7Ozs7Ozs7QUFPRCxXQUFTLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDOUQsVUFBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0FBQ2hFLE9BQUksT0FBTyxDQUFDO0FBQ1osT0FBSSxZQUFZLEVBQUU7QUFDakIsUUFBSSxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxjQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLFFBQVEsRUFBRTtBQUM1QyxTQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUU7QUFDL0IsYUFBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN6QixVQUFJLE9BQU8sVUFBVSxJQUFJLFVBQVUsRUFDbEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO01BQ3JCLE1BQU07QUFDTixVQUFJLE9BQU8sVUFBVSxJQUFJLFVBQVUsRUFDbEMsVUFBVSxFQUFFLENBQUM7TUFDZDtLQUNELEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDbkIsU0FBSSxPQUFPLFVBQVUsSUFBSSxVQUFVLEVBQ2xDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQixDQUFDLENBQUM7SUFDSCxNQUFNO0FBQ04sUUFBSSxPQUFPLFVBQVUsSUFBSSxVQUFVLEVBQ2xDLFVBQVUsRUFBRSxDQUFDO0lBQ2Q7R0FDRDs7Ozs7O0FBTUQsV0FBUyxrQ0FBa0MsR0FBRztBQUM3QyxnQkFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztHQUNoRjs7Ozs7O0FBTUQsV0FBUyxpQ0FBaUMsR0FBRztBQUM1QyxnQkFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztHQUNqRjs7Ozs7O0FBTUQsV0FBUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7O0FBRW5DLFVBQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLEdBQUcsT0FBTyxHQUFHLG9EQUFvRCxDQUFDLENBQUM7QUFDOUgsT0FBSSxVQUFVLEVBQUU7QUFDZixRQUFJLGVBQWUsQ0FBQztBQUNwQixRQUFJLFVBQVUsS0FBSyxxQkFBSyxpQkFBaUIsRUFBRTtBQUMxQyxvQkFBZSxHQUFHLFlBQVk7QUFDN0IsYUFBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0FBQzFFLFVBQUkseUJBQVksY0FBYyxFQUFFLElBQUkseUJBQVksY0FBYyxFQUFFLENBQUMsS0FBSyxJQUFJLE9BQU8seUJBQVksY0FBYyxFQUFFLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtBQUNsSSxpQkFBVSxHQUFHLHlCQUFZLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO09BQ2xELE1BQU07QUFDTixpQkFBVSxHQUFHLHlCQUFZLGNBQWMsRUFBRSxDQUFDO09BQzFDO0FBQ0QsVUFBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDOUIsVUFBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDOUIsUUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6QixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxjQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxHQUFHLE9BQU8sR0FBRyw0QkFBNEIsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0gsd0JBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFZLGNBQWMsRUFBRSxDQUFDLENBQUM7T0FDakU7O0FBRUQsVUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksVUFBVSxFQUFFO0FBQzlDLGVBQVEsRUFBRSxDQUFDO09BQ1g7TUFDRCxDQUFDO0FBQ0YsU0FBSSx5QkFBWSxjQUFjLEVBQUUsRUFBRTtBQUNqQyxxQkFBZSxFQUFFLENBQUM7TUFDbEIsTUFBTTtBQUNOLCtCQUFZLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLCtCQUFZLFNBQVMsRUFBRSxDQUFDO01BQ3hCO0tBQ0QsTUFBTSxJQUFJLFVBQVUsS0FBSyxxQkFBSyxpQkFBaUIsRUFBRTtBQUNqRCxvQkFBZSxHQUFHLFlBQVk7QUFDN0IsYUFBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0FBQzFFLFVBQUkseUJBQVksY0FBYyxFQUFFLElBQUkseUJBQVksY0FBYyxFQUFFLENBQUMsS0FBSyxJQUFJLE9BQU8seUJBQVksY0FBYyxFQUFFLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtBQUNsSSxpQkFBVSxHQUFHLHlCQUFZLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO09BQ2xELE1BQU07QUFDTixpQkFBVSxHQUFHLHlCQUFZLGNBQWMsRUFBRSxDQUFDO09BQzFDO0FBQ0QsVUFBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDOUIsVUFBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFDOUIsUUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6QixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxjQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxHQUFHLE9BQU8sR0FBRyw0QkFBNEIsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0gsd0JBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFZLGNBQWMsRUFBRSxDQUFDLENBQUM7T0FDakU7O0FBRUQsVUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksVUFBVSxFQUFFO0FBQzlDLGVBQVEsRUFBRSxDQUFDO09BQ1g7TUFDRCxDQUFDO0FBQ0YsU0FBSSx5QkFBWSxjQUFjLEVBQUUsRUFBRTtBQUNqQyxxQkFBZSxFQUFFLENBQUM7TUFDbEIsTUFBTTtBQUNOLCtCQUFZLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLCtCQUFZLFNBQVMsRUFBRSxDQUFDO01BQ3hCO0tBQ0QsTUFBTSxJQUFJLFVBQVUsS0FBSyxxQkFBUSx1QkFBdUIsRUFBRTtBQUMxRCxvQkFBZSxHQUFHLFlBQVk7QUFDN0IsYUFBTyxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO0FBQ2hGLFVBQUkseUJBQVksbUJBQW1CLEVBQUUsSUFBSSx5QkFBWSxtQkFBbUIsRUFBRSxDQUFDLEtBQUssSUFBSSxPQUFPLHlCQUFZLG1CQUFtQixFQUFFLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtBQUNqSixpQkFBVSxHQUFHLHlCQUFZLG1CQUFtQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDdkQsTUFBTTtBQUNOLGlCQUFVLEdBQUcseUJBQVksbUJBQW1CLEVBQUUsQ0FBQztPQUMvQztBQUNELFVBQUksV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQzlCLFVBQUksV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDOztBQUU5QixRQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV6QixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxjQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxHQUFHLE9BQU8sR0FBRyxpQ0FBaUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEksd0JBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFZLG1CQUFtQixFQUFFLENBQUMsQ0FBQztPQUN0RTs7QUFFRCxVQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDOUMsZUFBUSxFQUFFLENBQUM7T0FDWDtNQUdELENBQUM7QUFDRixTQUFJLHlCQUFZLG1CQUFtQixFQUFFLEVBQUU7QUFDdEMscUJBQWUsRUFBRSxDQUFDO01BQ2xCLE1BQU07QUFDTiwrQkFBWSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuRCwrQkFBWSxjQUFjLEVBQUUsQ0FBQztNQUM3QjtLQUNEO0lBQ0QsTUFBTTtBQUNOLFdBQU8sQ0FBQyxJQUFJLENBQUMsOERBQThELENBQUMsQ0FBQztJQUM3RTtHQUVEOzs7Ozs7O0FBT0QsV0FBUyxpQkFBaUIsR0FBRztBQUM1QixVQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLE9BQUksU0FBUyxFQUFFO0FBQ2QsUUFBSSxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0QsZUFBVyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ2pDLFNBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLFdBQVcsRUFBRTtBQUNqRCxVQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxSCxRQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZO0FBQ3RFLGNBQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDOzs7QUFHckcseUNBQWtDLEVBQUUsQ0FBQztPQUNyQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ1osbUJBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO01BQzlDO0tBQ0QsQ0FBQztBQUNGLGlCQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3QyxNQUFNO0FBQ04sUUFBSSxXQUFXLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0QsY0FBVSxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ2hDLFNBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUNoRCxVQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4SCxRQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZO0FBQ3RFLFNBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxXQUFXLEVBQUU7QUFDdEMsZUFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUM7QUFDMUYsVUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxZQUFZO0FBQy9DLGdCQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ3BJLHFCQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFHN0UsMkNBQWtDLEVBQUUsQ0FBQztTQUNyQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ1osRUFBRSxPQUFPLEVBL1hrQjtBQUNoQyxtQkFBYTtBQUNaLDhCQUF1QixJQUFJO0FBQzNCLDhCQUF1QixJQUFJO1NBQzNCO1FBQ0QsQ0EwWDJDLENBQUM7T0FDeEMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNaLG1CQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUM3QztLQUNELENBQUM7QUFDRixpQkFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUM7R0FDRDs7Ozs7QUFLRCxXQUFTLGtCQUFrQixHQUFHO0FBQzdCLE9BQUksV0FBVyxFQUFFO0FBQ2hCLGlCQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM5QyxlQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CO0FBQ0QsT0FBSSxVQUFVLEVBQUU7QUFDZixpQkFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0MsY0FBVSxHQUFHLElBQUksQ0FBQztJQUNsQjtHQUNEOzs7Ozs7O0FBT0QsV0FBUyxTQUFTLEdBQUc7Ozs7QUFJcEIsVUFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUM7QUFDakYsS0FBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLFdBQVcsRUFBRTtBQUNyQyxNQUFFLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFlBQVk7QUFDL0MsWUFBTyxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNwSSxpQkFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1RSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ1osRUFBRSxPQUFPLEVBL2FxQjtBQUMvQixlQUFhO0FBQ1osMEJBQXVCLEtBQUs7QUFDNUIsMEJBQXVCLEtBQUs7S0FDNUI7SUFDRCxDQTBhc0MsQ0FBQztHQUN2Qzs7Ozs7O0FBTUQsV0FBUyxNQUFNLENBQUMsUUFBUSxFQUFFOztBQUV6QixPQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2xDLG1CQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGNBQVUsR0FBRyxRQUFRLENBQUM7QUFDdEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHNCQUFzQixDQUFDLENBQUM7QUFDOUYsUUFBSSxFQUFFLEVBQUU7QUFDUCxPQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7S0FFWDs7O0FBR0QsUUFBSSxlQUFlLEVBQUU7QUFDcEIsa0JBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2xELG9CQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCOztBQUVELFFBQUksbUJBQW1CLEVBQUU7QUFDeEIsc0NBQWlDLEVBQUUsQ0FBQztBQUNwQyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7S0FDM0I7QUFDRCxzQkFBa0IsRUFBRSxDQUFDOzs7Ozs7OztBQVFyQixTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxTQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFcEIsdUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5DLGFBQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRywwQkFBMEIsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDdkg7S0FDRDtBQUNELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLFNBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFOztBQUVyQix1QkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFcEMsYUFBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHlCQUF5QixHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN2SDtLQUNEOztBQUdELFlBQVEsR0FBRyxJQUFJLENBQUM7QUFDaEIsV0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHVFQUF1RSxDQUFDLENBQUM7QUFDL0ksUUFBSSxRQUFRLEtBQUssa0JBQWtCLEtBQUssaUNBQWlDLElBQUksa0JBQWtCLEtBQUssMkJBQTJCLElBQUksa0JBQWtCLEtBQUssMkJBQTJCLENBQUMsRUFBRTtBQUN2TCxZQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsOEJBQThCLENBQUMsQ0FBQztBQUN0RyxPQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ1Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7QUFDeEIsZUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVDLFNBQUksVUFBVSxJQUFJLE9BQU8sVUFBVSxJQUFJLFVBQVUsRUFBRTtBQUNsRCxnQkFBVSxFQUFFLENBQUM7TUFDYjtLQUNEO0lBQ0QsTUFBTTtBQUNOLFdBQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ2xIO0dBQ0Q7O0FBRUQsV0FBUyxVQUFVLEdBQUc7QUFDckIsVUFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNqRSxjQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE9BQUksV0FBVyxDQUFDO0FBQ2hCLE9BQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtBQUM1QixlQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLFFBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFDLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFVBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO01BQ25EO0tBQ0Q7SUFDRCxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxFQUFFO0FBQ3hDLGVBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUMsUUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDMUMsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsVUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7TUFDbkQ7S0FDRDtJQUNEO0dBQ0Q7O0FBRUQsV0FBUyxZQUFZLEdBQUc7QUFDdkIsVUFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNuRSxjQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLE9BQUksV0FBVyxDQUFDO0FBQ2hCLE9BQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtBQUM1QixlQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLFFBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFDLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFVBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO01BQ2xEO0tBQ0Q7SUFDRCxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxFQUFFO0FBQ3hDLGVBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUMsUUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDMUMsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsVUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7TUFDbEQ7S0FDRDtJQUNEO0dBQ0Q7O0FBRUQsV0FBUyxVQUFVLEdBQUc7QUFDckIsVUFBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNqRSxjQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE9BQUksV0FBVyxDQUFDO0FBQ2hCLE9BQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtBQUM1QixlQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLFFBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFDLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFVBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO01BQ25EO0tBQ0Q7SUFDRCxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxFQUFFO0FBQ3hDLGVBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUMsUUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDMUMsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsVUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7TUFDbkQ7S0FDRDtJQUNEO0dBQ0Q7O0FBRUQsV0FBUyxZQUFZLEdBQUc7QUFDdkIsVUFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNuRSxjQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLE9BQUksV0FBVyxDQUFDO0FBQ2hCLE9BQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtBQUM1QixlQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFDLFFBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzFDLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFVBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO01BQ2xEO0tBQ0Q7SUFDRCxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksY0FBYyxFQUFFO0FBQ3hDLGVBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDOUMsUUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDMUMsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsVUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7TUFDbEQ7S0FDRDtJQUNEO0dBQ0Q7O0FBR0QsV0FBUyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQ25ELE9BQUksVUFBVSxFQUFFO0FBQ2YsUUFBSSxVQUFVLEtBQUsscUJBQVEsaUJBQWlCLEVBQUU7QUFDN0MsOEJBQVksdUJBQXVCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQzNELE1BQU0sSUFBSSxVQUFVLEtBQUsscUJBQVEsaUJBQWlCLEVBQUU7QUFDcEQsOEJBQVksdUJBQXVCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQzNELE1BQU0sSUFBSSxVQUFVLEtBQUsscUJBQVEsdUJBQXVCLEVBQUU7QUFDMUQsOEJBQVksNEJBQTRCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFO0lBQ0Q7R0FDRDs7QUFHRCxXQUFTLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUU7QUFDcEQsT0FBSSxRQUFRLEVBQUU7QUFDYixRQUFJLGNBQWMsRUFBRTtBQUNuQixzQkFBaUIsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDNUMsU0FBSSxXQUFXLElBQUksT0FBTyxXQUFXLElBQUksVUFBVSxFQUFFO0FBQ3BELGlCQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7TUFDNUI7S0FDRCxNQUFNO0FBQ04sa0JBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0IsU0FBSSxXQUFXLElBQUksT0FBTyxXQUFXLElBQUksVUFBVSxFQUFFO0FBQ3BELHFCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ2xDO0tBQ0Q7SUFDRCxNQUFNO0FBQ04sUUFBSSxjQUFjLEVBQUU7QUFDbkIsU0FBSSxXQUFXLElBQUksT0FBTyxXQUFXLElBQUksVUFBVSxFQUFFO0FBQ3BELGlCQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7TUFDNUI7S0FDRCxNQUFNO0FBQ04sU0FBSSxXQUFXLElBQUksT0FBTyxXQUFXLElBQUksVUFBVSxFQUFFO0FBQ3BELHFCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ2xDO0tBQ0Q7SUFFRDtHQUNEOztBQUVELEdBcmxCQSxTQUFTLElBQUksR0FBRztBQUNmLFVBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxDQUFDLENBQUM7O0FBRTNELE9BQUksT0FBTyxpQkFBa0IsS0FBSyxVQUFVLEVBQUU7QUFDN0Msb0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsTUFDSTtBQUNKLFdBQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxHQUFHLGtEQUFrRCxDQUFDLENBQUM7QUFDbEgsVUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQzdEOztBQUVELE9BQUksT0FBTyxxQkFBc0IsS0FBSyxVQUFVLEVBQUU7QUFDakQsMkJBQXVCLEdBQUcscUJBQXFCLENBQUM7SUFDaEQsTUFDSTtBQUNKLFdBQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxHQUFHLG1EQUFtRCxDQUFDLENBQUM7QUFDbkgsVUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQzdEOztBQUVELE9BQUksT0FBTyxlQUFnQixLQUFLLFVBQVUsRUFBRTtBQUMzQyxxQkFBaUIsR0FBRyxlQUFlLENBQUM7SUFDcEMsTUFDSTtBQUNKLFdBQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxHQUFHLG1EQUFtRCxDQUFDLENBQUM7QUFDbkgsVUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQzdEOztBQUVELE9BQUksV0FBVyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDcEMsT0FBSSxXQUFXLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQzs7QUFFcEMsZ0NBQTZCLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDaEQsVUFBTSxHQUFHLE9BQU8sQ0FBQztBQUNqQixXQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNoRixXQUFPLEVBQUUsQ0FBQztJQUNWLEVBQUUsWUFBWTtBQUNkLFFBQUksT0FBTyxrQkFBa0IsS0FBSyxXQUFXLEVBQUU7QUFDOUMsV0FBTSxHQUFHLGtCQUFrQixDQUFDO0FBQzVCLFlBQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzVGLE1BQU07QUFDTixZQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDcEQ7QUFDRCxXQUFPLEVBQUUsQ0FBQztJQUNWLENBQUMsQ0FBQztHQUVILEdBeWlCSyxDQUFDOztBQUVQLFNBQU87Ozs7OztBQU1OLGFBQVUsRUFBRSxvQkFBVSxFQUFFLEVBQUU7QUFDekIsYUFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmOzs7OztBQUtELFFBQUssRUFBRSxlQUFVLEVBQUUsRUFBRTtBQUNwQixXQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BGLFVBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYOzs7Ozs7O0FBT0QscUJBQWtCLEVBQUUsNEJBQVUsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUNwRCx1QkFBbUIsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFM0M7Ozs7OztBQU1ELHNCQUFtQixFQUFFLDZCQUFVLFFBQVEsRUFBRSxXQUFXLEVBQUU7QUFDckQsd0JBQW9CLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDOzs7O0FBSUQsWUFBUyxFQUFFLHFCQUFZO0FBQ3RCLGNBQVUsRUFBRSxDQUFDO0lBQ2I7Ozs7QUFJRCxjQUFXLEVBQUUsdUJBQVk7QUFDeEIsZ0JBQVksRUFBRSxDQUFDO0lBQ2Y7Ozs7QUFJRCxZQUFTLEVBQUUscUJBQVk7QUFDdEIsY0FBVSxFQUFFLENBQUM7SUFDYjs7OztBQUlELGNBQVcsRUFBRSx1QkFBWTtBQUN4QixnQkFBWSxFQUFFLENBQUM7SUFDZjtHQUNELENBQUM7RUFDRixDQUFDOztzQkFFYSxNQUFNIiwiZmlsZSI6ImNvbXNkay1kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNvbVNES1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb21TREtcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJjMGI2MDU1OTdjYjQxMWY1MjY5XG4gKiovIiwiLy8gUG9seWZpbGxzIGZvciBXZWJSVENcblxuXG4vLyBUT0RPIDE5ayBtaW5pZmllZCwgd2UgY2FuIGRvIGxlc3MgbWF5YmVcbi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuLy9pbXBvcnQgYWRhcHRlcmpzIGZyb20gJ2FkYXB0ZXJqcyc7XG5pbXBvcnQgYWRhcHRlcmpzIGZyb20gJy4vYWRhcHRlcic7XG4vKmVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMqL1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IGRhdGFyZWZzIGZyb20gJy4vZGF0YXJlZnMnO1xuaW1wb3J0IHJlYWNoIGZyb20gJy4vcmVhY2gnO1xuaW1wb3J0IHJvb20gZnJvbSAnLi9yb29tJztcbmltcG9ydCB3ZWJydGNtbmdyIGZyb20gJy4vd2VicnRjbW5nci5qcyc7XG5cbmNvbnN0IFNES19WRVJTSU9OID0gJzAuMC4xJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tU0RLIHtcblx0Y29uc3RydWN0b3IodXJsPSAnaHR0cDovL3dlYmNvbS5vcmFuZ2UuY29tL2Jhc2Uvd2VicnRjJykge1xuXHRcdHRoaXMuZGF0YXJlZnMgPSBkYXRhcmVmcyh1cmwpO1xuXHRcdHRoaXMud2VicnRjbW5nciA9IHdlYnJ0Y21uZ3IodGhpcy5kYXRhcmVmcyk7XG5cdH1cblxuXHRSb29tKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gcm9vbSguLi5hcmdzLCB0aGlzLmRhdGFyZWZzLCB0aGlzLndlYnJ0Y21uZ3IpO1xuXHR9XG5cblx0UmVhY2goLi4uYXJncykge1xuXHRcdHJldHVybiByZWFjaCguLi5hcmdzLCB0aGlzLmRhdGFyZWZzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcblx0XHRyZXR1cm4gU0RLX1ZFUlNJT047XG5cdH1cblx0c3RhdGljIGdldCBhY3Rpb25zKCkge1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICogIyVMXG4gKiBXZWJjb20gc2VydmljZVxuICpcbiAqIE1vZHVsZSBuYW1lOiBjb20ub3JhbmdlLndlYnJ0Yzp3ZWJjb20tc2VydmljZVxuICogVmVyc2lvbjogICAgIDAuMC4xLVNOQVBTSE9UXG4gKiBDcmVhdGVkOiAgICAgMjAxNC0wNC0wMVxuICogJSVcbiAqIENvcHlyaWdodCAoQykgMjAxMyAtIDIwMTUgT3JhbmdlIExhYnNcbiAqICUlXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGNvbmZpZGVudGlhbCBhbmQgcHJvcHJpZXRhcnkgaW5mb3JtYXRpb24gb2YgT3JhbmdlLlxuICogWW91IHNoYWxsIG5vdCBkaXNjbG9zZSBzdWNoIENvbmZpZGVudGlhbCBJbmZvcm1hdGlvbiBhbmQgc2hhbGwgdXNlIGl0IG9ubHkgaW5cbiAqIGFjY29yZGFuY2Ugd2l0aCB0aGUgdGVybXMgb2YgdGhlIGFncmVlbWVudCB5b3UgZW50ZXJlZCBpbnRvLlxuICogVW5hdXRob3JpemVkIGNvcHlpbmcgb2YgdGhpcyBmaWxlLCB2aWEgYW55IG1lZGl1bSBpcyBzdHJpY3RseSBwcm9oaWJpdGVkLlxuICpcbiAqIElmIHlvdSBhcmUgT3JhbmdlIGVtcGxveWVlIHlvdSBzaGFsbCB1c2UgdGhpcyBzb2Z0d2FyZSBpbiBhY2NvcmRhbmNlIHdpdGhcbiAqIHRoZSBPcmFuZ2UgU291cmNlIENoYXJ0ZXIgKGh0dHA6Ly9vcGVuc291cmNlLml0bi5mdGdyb3VwL2luZGV4LnBocC9PcmFuZ2VfU291cmNlKS5cbiAqICNMJVxuICovXG5cblxuLyogZ2xvYmFsIE1lZGlhU3RyZWFtLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIG1velJUQ0ljZUNhbmRpZGF0ZSwgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICovXG5cbi8qKlxuICogQGZpbGUgYWRhcHQuanMgLSBKUyBmaWxlIHRvIHVzZSBzbyBhcyB0byBnZXQgc29tZSBhZGFwdGVkIG1ldGhvZHNcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGZpbGUgcHJvdmlkZXMgbWV0aG9kcyB0byBoYW5kbGUgSUNFIHNlcnZlcnMsIHVzZXIgbWVkaWFzIG9yIFJUQyBQZWVyIENvbm5lY3Rpb24gZm9yIGV4YW1wbGUuIE1lZGlhIHN0cmVhbVxuICogbWV0aG9kcyBhcmUgYWxzbyBwcm92aWRlZCBzbyBhcyB0byBhdHRhY2gsIHJyZWF0dGFjaCBvciByZW1vdmUgZXhpc3Rpbmcgc3RyZWFtcy5cbiAqIEBhdXRob3IgV2ViY29tXG4gKiBAY29weXJpZ2h0IE9yYW5nZSBMYWJzIChDKSAyMDEzIC0gMjAxNFxuICogQGxpY2VuY2UgT3JhbmdlXG4gKlxuICogVmVyc2lvbiBkb2MgOiAxLjMuMFxuICovXG5cblxuLyogKioqKioqKioqICpcbiAqIFZhcmlhYmxlcyAqXG4gKiAqKioqKioqKiogKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhlIFJUQyBQZWVyIENvbm5lY3Rpb24gdG8gdXNlLiBUaGlzIG9iamVjdCBwcm92aWRlcyB0aGUgY2hhbm5lbHMgdG8gdXNlXG4gKiB0byBlc3RhYmxpc2ggdGhlIGNvbW11bmljYXRpb24gYW5kIHNlbmQgZGF0YSBiZXR3ZWVuIHBhcnRpY2lwYW50cy4gVGhpcyBvYmplY3RcbiAqIGlzIGF2YWlsYWJsZSBvbmx5IG9uIHVwIHRvIGRhdGUgd2ViIGJyb3dzZXJzIChDaHJvbWUgMzEsIEZpcmVmb3ggMzUsIE9wZXJhIDI3KS5cbiAqL1xud2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gbnVsbDtcbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoZSB1c2VyIG1lZGlhIHBpY2tlZCBmcm9tIHRoZSB3ZWIgYnJvd3NlciBjb250YWluaW5nIHRoZSB2aWRlbyBhbmQgYXVkaW8gc3RyZWFtcyBnb3R0ZW4gZnJvbSB0aGVcbiAqIHdlYmNhbXMgYW5kIG1pY3JvcGhvbmVzLiBUaGlzIG1lZGlhIHJldHJpZXZtZW50IGlzIGF2YWlsYWJsZSBvbmx5IGZvciBtb2Rlcm4gd2ViIGJyb3dzZXJzIHNpbmNlIEZpcmVmb3ggMTcsIENocm9tZSAyMSBvciBPcGVyYSAxOC5cbiAqL1xud2luZG93LmdldFVzZXJNZWRpYSA9IG51bGw7XG4vKlxuICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIHRvIHVzZSB0byBhdHRhY2ggdGhlIG1lZGlhIHN0cmVhbSB3aGljaCB3aWxsIGJlIGludGVncmF0ZWQgdG8gYW4gSFRNTCBvYmplY3QgYXMgYSB2aWRlby5cbiAqL1xud2luZG93LmF0dGFjaE1lZGlhU3RyZWFtID0gbnVsbDtcbi8qXG4gKiBAZGVzY3JpcHRpb24gRnVuY3Rpb24gdG8gdXNlIHRvIHJlYXR0YWNoIHRoZSBtZWRpYSBzdHJlYW1cbiAqL1xud2luZG93LnJlYXR0YWNoTWVkaWFTdHJlYW0gPSBudWxsO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhlIGRldGVjdGVkIGJyb3dzZXIgc3Vwb3J0aW5nIFdlYlJUQyAoRmlyZWZveCBvciBDaHJvbWUpXG4gKi9cbndpbmRvdy53ZWJydGNEZXRlY3RlZEJyb3dzZXIgPSBudWxsO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhlIGRldGVjdGVkIHZlcnNpb24gb2YgdGhlIFdlYlJUQyBjYXBhYmxlIGRldGVjdGVkIGJyb3dlci4gVGhpcyB2ZXJzaW9uIHdpbGwgYmUgdXNlZCB0byBtYW5hZ2UgbmV0d29ya3MgYXNwZWN0cyBsaWtlIFRVUk4uXG4gKi9cbndpbmRvdy53ZWJydGNEZXRlY3RlZFZlcnNpb24gPSBudWxsO1xuXG4vKipcbiAqIEZpeCBpY2Ugc2VydmVyIGNvbmZpZyBvYmplY3RcbiAqIEBwYXJhbSBpY2VTZXJ2ZXJcbiAqL1xuZnVuY3Rpb24gZml4SWNlU2VydmVyKGljZVNlcnZlcikge1xuXHRpZiAoaWNlU2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykpIHtcblx0XHRpY2VTZXJ2ZXIudXJsID0gaWNlU2VydmVyLnVybHM7XG5cdFx0ZGVsZXRlIGljZVNlcnZlci51cmxzO1xuXHR9XG5cdGlmIChpY2VTZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmXG5cdFx0aWNlU2VydmVyLnVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ3R1cm5zJykgJiZcblx0XHRuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG5cdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjptYXliZUZpeENvbmZpZ3VyYXRpb24pICcgK1xuXHRcdCd0dXJucyBkZXRlY3RlZCBvbiBmaXJlZm94IC0+IGlnbm9yZSB0aGlzIGVudHJ5Jyk7XG5cdH1cbn1cblxuLyoqXG4gKiBGaXggcGVlciBjb25uZWN0aW9uIGNvbmZpZ3VyYXRpb24gaXNzdWVzIGlmIG5lZWRlZCwgc3BlY2lhbGx5IGFib3V0IElDRSBzZXJ2ZXJzXG4gKiBAcGFyYW0gcGNDb25maWcgLSBUaGUgcGVlciBjb25uZWN0aW9uIGNvbmZpZ3VyYXRpb24gdG8gZml4IGlmIG5vdCBudWxsXG4gKi9cbmZ1bmN0aW9uIG1heWJlRml4Q29uZmlndXJhdGlvbihwY0NvbmZpZykge1xuXHRpZiAocGNDb25maWcgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocGNDb25maWcuaWNlU2VydmVycyAmJiBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aCA+IDApIHtcblx0XHRjb25zdCBtVGVtcHNTZXJ2ZXJzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IHBjQ29uZmlnLmljZVNlcnZlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGNvbnN0IGljZVNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG5cdFx0XHRmaXhJY2VTZXJ2ZXIoaWNlU2VydmVyKTtcblx0XHRcdG1UZW1wc1NlcnZlcnMucHVzaChpY2VTZXJ2ZXIpO1xuXHRcdH1cblx0XHRwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbVRlbXBzU2VydmVycztcblx0fVxufVxuXG4vKipcbiAqIFJldHVybnMgdHVybiBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlcm5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzd29yZFxuICogQHBhcmFtIHtCb29sZWFufSBsZWdhY3lcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVR1cm5TZXJ2ZXJDb25maWcodXJsLCB1c2VybmFtZSwgcGFzc3dvcmQsIGxlZ2FjeT0gZmFsc2UpIHtcblx0bGV0IGljZVNlcnZlcjtcblxuXHRpZiAobGVnYWN5KSB7XG5cdFx0Ly8gQ3JlYXRlIGljZVNlcnZlciB3aXRoIHR1cm4gdXJsLlxuXHRcdC8vIElnbm9yZSB0aGUgdHJhbnNwb3J0IHBhcmFtZXRlciBmcm9tIFRVUk4gdXJsIGZvciBGRiB2ZXJzaW9uIDw9MjcuXG5cdFx0Y29uc3QgdHVybl91cmxfcGFydHMgPSB1cmwuc3BsaXQoJz8nKTtcblx0XHQvLyBSZXR1cm4gbnVsbCBmb3IgY3JlYXRlSWNlU2VydmVyIGlmIHRyYW5zcG9ydD10Y3AuXG5cdFx0aWYgKHR1cm5fdXJsX3BhcnRzLmxlbmd0aCA9PT0gMSB8fFxuXHRcdFx0dHVybl91cmxfcGFydHNbMV0uaW5kZXhPZigndHJhbnNwb3J0PXVkcCcpID09PSAwKSB7XG5cdFx0XHRpY2VTZXJ2ZXIgPSB7XG5cdFx0XHRcdHVybDogdHVybl91cmxfcGFydHNbMF0sXG5cdFx0XHRcdCdjcmVkZW50aWFsJzogcGFzc3dvcmQsXG5cdFx0XHRcdHVzZXJuYW1lXG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBGRiAyNyBhbmQgYWJvdmUgc3VwcG9ydHMgdHJhbnNwb3J0IHBhcmFtZXRlcnMgaW4gVFVSTiB1cmwsXG5cdFx0Ly8gU28gcGFzc2luZyBpbiB0aGUgZnVsbCB1cmwgdG8gY3JlYXRlIGljZVNlcnZlci5cblx0XHRpY2VTZXJ2ZXIgPSB7XG5cdFx0XHR1cmwsXG5cdFx0XHRjcmVkZW50aWFsOiBwYXNzd29yZCxcblx0XHRcdHVzZXJuYW1lXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBpY2VTZXJ2ZXI7XG59XG5cblxuLyogKioqKioqKioqICpcbiAqIFNjcmlwdGluZyAqXG4gKiAqKioqKioqKiogKi9cblxuLypcbiAqIElmIHRoZSB3ZWIgYnJvd3NlciBpbiB1c2UgaXMgRmlyZWZveFxuICovXG5pZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuXHR3aW5kb3cud2VicnRjRGV0ZWN0ZWRCcm93c2VyID0gJ2ZpcmVmb3gnO1xuXG5cdHdpbmRvdy53ZWJydGNEZXRlY3RlZFZlcnNpb24gPVxuXHRcdHBhcnNlSW50KG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC8oWzAtOV0rKVxcLi8pWzFdLCAxMCk7XG5cblx0LyoqXG5cdCAqIFRoZSBSVENQZWVyQ29ubmVjdGlvbiBvYmpldCBiYXNlZCBvbiBtb3praXQuXG5cdCAqIElmIG5lZWRlZCwgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHBlZXIgY29ubmVjdGlvbiB3aWxsIGJlIGZpeGVkLlxuXHQgKiBAcGFyYW0gcGNDb25maWcgLSBUaGUgcGVlciBjb25uZWN0aW9uIGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGNDb25zdHJhaW50cyAtIFRoZSBwZWVyIGNvbm5lY3Rpb24gY29uc3RyYWludHNcblx0ICovXG5cdHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuXHRcdC8vIC51cmxzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRkYgeWV0LlxuXHRcdG1heWJlRml4Q29uZmlndXJhdGlvbihwY0NvbmZpZyk7XG5cdFx0cmV0dXJuIG5ldyBtb3pSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG5cdH07XG5cblx0Ly8gVGhlIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiBvYmplY3QuXG5cdHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG5cblx0Ly8gVGhlIFJUQ0ljZUNhbmRpZGF0ZSBvYmplY3QuXG5cdHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG5cblx0Ly8gR2V0IFVzZXJNZWRpYSAob25seSBkaWZmZXJlbmNlIGlzIHRoZSBwcmVmaXgpLlxuXHR3aW5kb3cuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYS5iaW5kKG5hdmlnYXRvcik7XG5cdG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWE7XG5cblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBJQ0Ugc2VydmVyIGZvciB0aGUgVVJMIGZvciBGaXJlZm94LlxuXHQgKiBUaGUgU1RVTiBhbmQgVFVSTiBzZXJ2ZXJzIHdpbGwgYmUgY29uc2lkZXJlZC4gSW4gY2FzZSBvZiBhIFRVUk4gc2VydmVyIGlzIGluIHVzZSwgY3JlZGVudGlhbHMgYW5kIHVzZXJuYW1lcyB3aWxsIGJlIGdvdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB1cmwgdG8gdXNlIHRvIGdldCB0aGUgSUNFIHNlcnZlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSBUaGUgdXNlcm5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gVGhlIHBhc3N3b3JkXG5cdCAqL1xuXHR3aW5kb3cuY3JlYXRlSWNlU2VydmVyID0gKHVybCwgdXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG5cdFx0bGV0IGljZVNlcnZlciA9IG51bGw7XG5cdFx0Y29uc3QgdXJsX3BhcnRzID0gdXJsLnNwbGl0KCc6Jyk7XG5cdFx0aWYgKHVybF9wYXJ0c1swXS5pbmRleE9mKCdzdHVuJykgPT09IDApIHtcblx0XHRcdC8vIENyZWF0ZSBpY2VTZXJ2ZXIgd2l0aCBzdHVuIHVybC5cblx0XHRcdGljZVNlcnZlciA9IHtcblx0XHRcdFx0dXJsXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodXJsX3BhcnRzWzBdLmluZGV4T2YoJ3R1cm4nKSA9PT0gMCkge1xuXHRcdFx0aWNlU2VydmVyID0gY3JlYXRlVHVyblNlcnZlckNvbmZpZyhcdHVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2VicnRjRGV0ZWN0ZWRWZXJzaW9uIDwgMjcpO1xuXHRcdH1cblx0XHRyZXR1cm4gaWNlU2VydmVyO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBJQ0Ugc2VydmVycyBmcm9tIHNvbWUgVVJMcy4gVGhlIFNUVU4gYW5kIFRVUk4gc2V2ZXJzIGNvbnN0cmFpbnRzIHdpbGwgYmUgaGFuZGxlZC5cblx0ICogQHBhcmFtIHthcnJheX0gdXJscyAtIFRoZSB1cmxzIHRvIHVzZSB0byBnZXQgdGhlIElDRSBzZXJ2ZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gVGhlIHVzZXJuYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCAtIFRoZSBwYXNzd29yZFxuXHQgKi9cblx0d2luZG93LmNyZWF0ZUljZVNlcnZlcnMgPSBmdW5jdGlvbiAodXJscywgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdFx0Y29uc3QgaWNlU2VydmVycyA9IFtdO1xuXHRcdC8vIFVzZSAudXJsIGZvciBGaXJlRm94LlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaWNlU2VydmVyID0gd2luZG93LmNyZWF0ZUljZVNlcnZlcih1cmxzW2ldLFxuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQpO1xuXHRcdFx0aWYgKGljZVNlcnZlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRpY2VTZXJ2ZXJzLnB1c2goaWNlU2VydmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGljZVNlcnZlcnM7XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGFjaCB0aGUgbWVkaWEgc3RyZWFtIGZyb20gdGhlIGVsZW1lbnQuXG5cdCAqIFRoZSBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgc3JjIGNvbnRlbnQgY2hhbmdlZCB0byBudWxsIGFuZCB3aWxsIGJlIHBhdXNlZC5cblx0ICogQHBhcmFtIHt2aWRlbyB0YWd9IGVsZW1lbnQgLSBUaGUgdmlkZW8gdGFnIHdoZXJlIHRoZSBzdHJlYW0gaXMgZGlzcGxheWVkXG5cdCAqL1xuXHR3aW5kb3cuZGV0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1velNyY09iamVjdCA9IG51bGw7XG5cdFx0XHRlbGVtZW50LnBhdXNlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBBdHRhY2ggYSBtZWRpYSBzdHJlYW0gdG8gYW4gZWxlbWVudC5cblx0ICogVGhlIHNyYyBhdHRyaWJ1dGUgb2YgdGhlIGVsZW1lbnQgd2lsbCBiZSBkZWZpbmVkIHdpdGggdGhlIHN0cmVhbSBhbmQgd2lsbCBiZSBwbGF5ZWQuXG5cdCAqIEBwYXJhbSB7dmlkZW8gdGFnfSBlbGVtZW50IC0gVGhlIHZpZGVvIHRhZyB3aGVyZSB0aGUgc3RyZWFtIGlzIGRpc3BsYXllZFxuXHQgKiBAcGFyYW0gc3RyZWFtIC0gVGhlIHN0cmVhbSB0byBhdHRhY2ggdG8gdGhlIGVsZW1lbnRcblx0ICovXG5cdHdpbmRvdy5hdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHJlYW0pIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgc3RyZWFtKSB7XG5cdFx0XHRcdGVsZW1lbnQubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5wbGF5ICYmIHR5cGVvZiBlbGVtZW50LnBsYXkgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGVsZW1lbnQucGxheSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignKHdlYmNvbVNESzo6YXR0YWNoTWVkaWFTdHJlYW0pZWxlbWVudC5wbGF5IG5vdCBhdmFpbGFibGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignd2ViY29tU0RLOjphdHRhY2hNZWRpYVN0cmVhbS0+cGFyYW1ldGVycyBub3QgdmFsaWQnKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAod2ViY29tU0RLOjphdHRhY2hNZWRpYVN0cmVhbSlFeGNlcHRpb249JHtlfWApO1xuXHRcdH1cblxuXG5cdH07XG5cblx0LyoqXG5cdCAqIEF0dGFjaCBhZ2FpbiBhIG1lZGlhIHN0cmVhbSB0byBhbiBlbGVtZW50LlxuXHQgKiBUaGUgXCJmcm9tXCIgZWxlbWVudCB3aWxsIGhhdmUgaXRzIHNyYyB2YWx1ZSBjb3BpZWQgdG8gdGhlIFwidG9cIiBvYmplY3QgYmVmb3JlIHBsYXlpbmcgaXQuXG5cdCAqIEBwYXJhbSB7dmlkZW8gdGFnfSB0byAtIFRoZSB2aWRlbyB0YWcgd2hlcmUgdGhlIHN0cmVhbSBzaG91bGQgYmUgcHV0XG5cdCAqIEBwYXJhbSB7dmlkZW8gdGFnfSBmcm9tIC0gVGhlIHZpZGVvIHRhZyB3aGVyZSB0aGUgc3RyZWFtIHNob3VsZCBiZSB0YWtlblxuXHQgKi9cblx0d2luZG93LnJlYXR0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbiAodG8sIGZyb20pIHtcblx0XHRpZiAodG8gJiYgZnJvbSkge1xuXHRcdFx0dG8ubW96U3JjT2JqZWN0ID0gZnJvbS5tb3pTcmNPYmplY3Q7XG5cdFx0XHR0by5wbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3dlYmNvbVNESzo6cmVhdHRhY2hNZWRpYVN0cmVhbS0+cGFyYW1ldGVycyBub3QgdmFsaWQnKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gRmFrZSBnZXR7VmlkZW8sQXVkaW99VHJhY2tzXG5cdGlmICghTWVkaWFTdHJlYW0ucHJvdG90eXBlLmdldFZpZGVvVHJhY2tzKSB7XG5cdFx0TWVkaWFTdHJlYW0ucHJvdG90eXBlLmdldFZpZGVvVHJhY2tzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH07XG5cdH1cblxuXHRpZiAoIU1lZGlhU3RyZWFtLnByb3RvdHlwZS5nZXRBdWRpb1RyYWNrcykge1xuXHRcdE1lZGlhU3RyZWFtLnByb3RvdHlwZS5nZXRBdWRpb1RyYWNrcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9O1xuXHR9XG5cblx0Lypcblx0ICogSWYgdGhlIHdlYiBicm93c2VyIGluIHVzZSBpcyBDaHJvbWVcblx0ICovXG59IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHtcblx0d2luZG93LndlYnJ0Y0RldGVjdGVkQnJvd3NlciA9ICdjaHJvbWUnO1xuXHR3aW5kb3cud2VicnRjRGV0ZWN0ZWRWZXJzaW9uID1cblx0XHRwYXJzZUludChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pWzJdLCAxMCk7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIElDRSBzZXJ2ZXIgZnJvbSB0aGUgVVJMIGFuZCBoYW5kbGVzIFNUVU4gLyBUVVJOIHNlcnZlcnMgY29uc3RyYWludHMgYnkgcmV0cmlldmluZyBjcmVkZW50aWFscyBhbmQgdXNlcm5hbWVzIGlmIG5lZWRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFRoZSB1cmwgdG8gdXNlIHRvIGdldCB0aGUgSUNFIHNlcnZlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSBUaGUgdXNlcm5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gVGhlIHBhc3N3b3JkXG5cdCAqL1xuXHR3aW5kb3cuY3JlYXRlSWNlU2VydmVyID0gZnVuY3Rpb24gKHVybCwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdFx0bGV0IGljZVNlcnZlciA9IG51bGw7XG5cdFx0Y29uc3QgdXJsX3BhcnRzID0gdXJsLnNwbGl0KCc6Jyk7XG5cdFx0aWYgKHVybF9wYXJ0c1swXS5pbmRleE9mKCdzdHVuJykgPT09IDApIHtcblx0XHRcdC8vIENyZWF0ZSBpY2VTZXJ2ZXIgd2l0aCBzdHVuIHVybC5cblx0XHRcdGljZVNlcnZlciA9IHtcblx0XHRcdFx0dXJsXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodXJsX3BhcnRzWzBdLmluZGV4T2YoJ3R1cm4nKSA9PT0gMCkge1xuXHRcdFx0Ly8gQ2hyb21lIE0yOCAmIGFib3ZlIHVzZXMgYmVsb3cgVFVSTiBmb3JtYXQuXG5cdFx0XHRpY2VTZXJ2ZXIgPSBjcmVhdGVUdXJuU2VydmVyQ29uZmlnKHVybCwgcGFzc3dvcmQsIHVzZXJuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIGljZVNlcnZlcjtcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgSUNFIHNlcnZlcnMgZnJvbSB0aGUgVVJMIGZvciBDaHJvbWUgTTM0IGFuZCBhYm92ZVxuXHQgKiBAcGFyYW0ge2FycmF5fSB1cmxzIC0gVGhlIHVybHMgdG8gdXNlIHRvIGdldCB0aGUgSUNFIHNlcnZlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSBUaGUgdXNlcm5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIC0gVGhlIHBhc3N3b3JkXG5cdCAqL1xuXHR3aW5kb3cuY3JlYXRlSWNlU2VydmVycyA9IGZ1bmN0aW9uICh1cmxzLCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcblx0XHRsZXQgaWNlU2VydmVycyA9IFtdO1xuXHRcdGlmICh3aW5kb3cud2VicnRjRGV0ZWN0ZWRWZXJzaW9uID49IDM0KSB7XG5cdFx0XHQvLyAudXJscyBpcyBzdXBwb3J0ZWQgc2luY2UgQ2hyb21lIE0zNC5cblx0XHRcdGljZVNlcnZlcnMgPSB7XG5cdFx0XHRcdHVybHMsXG5cdFx0XHRcdGNyZWRlbnRpYWw6IHBhc3N3b3JkLFxuXHRcdFx0XHR1c2VybmFtZVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGljZVNlcnZlciA9IHdpbmRvdy5jcmVhdGVJY2VTZXJ2ZXIodXJsc1tpXSxcblx0XHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0XHRwYXNzd29yZCk7XG5cdFx0XHRcdGlmIChpY2VTZXJ2ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHRpY2VTZXJ2ZXJzLnB1c2goaWNlU2VydmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaWNlU2VydmVycztcblx0fTtcblxuXHQvKipcblx0ICogVGhlIFJUQyBQZWVyIENvbm5lY3Rpb24gb2JqZWN0LiBJZiBuZWVkZWQsIGl0cyBwZWVyIGNvbm5lY3Rpb24gY29uZmlndXJhdGlvbiB3aWxsIGJlIGZpeGVkXG5cdCAqIEBwYXJhbSBwY0NvbmZpZyAtIFRoZSBwZWVyIGNvbm5lY3Rpb24gY29uZmlnXG5cdCAqIEBwYXJhbSBwY0NvbnN0cmFpbnRzIC0gVGhlIHBlZXIgY29ubmVjdGlvbiBjb25zdHJhaW50c1xuXHQgKi9cblx0d2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG5cdFx0Ly8gLnVybHMgaXMgc3VwcG9ydGVkIHNpbmNlIENocm9tZSBNMzQuXG5cdFx0aWYgKHdpbmRvdy53ZWJydGNEZXRlY3RlZFZlcnNpb24gPCAzNCkge1xuXHRcdFx0bWF5YmVGaXhDb25maWd1cmF0aW9uKHBjQ29uZmlnKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7XG5cdH07XG5cblx0Ly8gR2V0IFVzZXJNZWRpYSAob25seSBkaWZmZXJlbmNlIGlzIHRoZSBwcmVmaXgpLlxuXHQvLyBDb2RlIGZyb20gQWRhbSBCYXJ0aC5cblx0d2luZG93LmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEuYmluZChuYXZpZ2F0b3IpO1xuXHRuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZ2V0VXNlck1lZGlhO1xuXG4vLyAgLy8gQXR0YWNoIGEgbWVkaWEgc3RyZWFtIHRvIGFuIGVsZW1lbnQuXG4vLyAgYXR0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbihlbGVtZW50LCBzdHJlYW0pIHtcbi8vICAgIGlmICh0eXBlb2YgZWxlbWVudC5zcmNPYmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuLy8gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5tb3pTcmNPYmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgIGVsZW1lbnQubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuLy8gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5zcmMgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgIGVsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuLy8gICAgfSBlbHNlIHtcbi8vICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGFjaGluZyBzdHJlYW0gdG8gZWxlbWVudC4nKTtcbi8vICAgIH1cbi8vICB9O1xuXG5cdC8qKlxuXHQgKiBBdHRhY2ggYSBtZWRpYSBzdHJlYW0gdG8gYW4gZWxlbWVudC5cblx0ICogVGhlIHNyYyBhdHRyaWJ1dGUgb2YgdGhlIGVsZW1lbnQgd2lsbCBiZSBkZWZpbmVkIHdpdGggdGhlIHN0cmVhbSBhbmQgd2lsbCBiZSBwbGF5ZWQuXG5cdCAqIEBwYXJhbSB7dmlkZW8gdGFnfSBlbGVtZW50IC0gVGhlIHZpZGVvIHRhZyB3aGVyZSB0aGUgc3RyZWFtIGlzIGRpc3BsYXllZFxuXHQgKiBAcGFyYW0gc3RyZWFtIC0gVGhlIHN0cmVhbSB0byBhdHRhY2ggdG8gdGhlIGVsZW1lbnRcblx0ICovXG5cdHdpbmRvdy5hdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHJlYW0pIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgc3RyZWFtKSB7XG5cdFx0XHRcdC8vIGVsZW1lbnQuc3JjID0gd2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuXHRcdFx0XHRlbGVtZW50LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcblx0XHRcdFx0ZWxlbWVudC5hdXRvcGxheSA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCd3ZWJjb21TREs6OmF0dGFjaE1lZGlhU3RyZWFtIC0+cGFyYW1ldGVycyBub3QgdmFsaWQnKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGAod2ViY29tU0RLOjphdHRhY2hNZWRpYVN0cmVhbSlFeGNlcHRpb249JHtlfWApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGV0YWNoIHRoZSBtZWRpYSBzdHJlYW0gZnJvbSB0aGUgZWxlbWVudCBieSBhc3NpbmdlZCBudWxsIHZhbHVlIHRvIGl0cyBzcmMgYXR0cmlidXRlLlxuXHQgKiBAcGFyYW0ge3ZpZGVvIHRhZ30gZWxlbWVudCAtIFRoZSB2aWRlbyB0YWcgd2hlcmUgdGhlIHN0cmVhbSBpcyBkaXNwbGF5ZWRcblx0ICovXG5cdHdpbmRvdy5kZXRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudC5zcmNPYmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3JjT2JqZWN0ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50Lm1velNyY09iamVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0ZWxlbWVudC5tb3pTcmNPYmplY3QgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuc3JjICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRlbGVtZW50LnNyYyA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGF0dGFjaGluZyBzdHJlYW0gdG8gZWxlbWVudC4nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fTtcblxuXHQvKipcblx0ICogQXR0YWNoIGFnYWluIGEgbWVkaWEgc3RyZWFtIHRvIGFuIGVsZW1lbnQuXG5cdCAqIFRoZSBcImZyb21cIiBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgc3JjIHZhbHVlIGNvcGllZCB0byB0aGUgXCJ0b1wiIG9iamVjdCBiZWZvcmUgcGxheWluZyBpdC5cblx0ICogQHBhcmFtIHt2aWRlbyB0YWd9IHRvIC0gVGhlIHZpZGVvIHRhZyB3aGVyZSB0aGUgc3RyZWFtIHNob3VsZCBiZSBwdXRcblx0ICogQHBhcmFtIHt2aWRlbyB0YWd9IGZyb20gLSBUaGUgdmlkZW8gdGFnIHdoZXJlIHRoZSBzdHJlYW0gc2hvdWxkIGJlIHRha2VuXG5cdCAqL1xuXHR3aW5kb3cucmVhdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uICh0bywgZnJvbSkge1xuXHRcdGlmICh0byAmJiBmcm9tKSB7XG5cdFx0XHR0by5zcmMgPSBmcm9tLnNyYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignd2ViY29tU0RLOjpyZWF0dGFjaE1lZGlhU3RyZWFtIG1lZGlhIHN0cmVhbS0+cGFyYW1ldGVycyBub3QgdmFsaWQnKTtcblx0XHR9XG5cdH07XG5cbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcignQnJvd3NlciBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgV2ViUlRDLWNhcGFibGUnKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FkYXB0ZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG5cblx0LyoqXG5cdCAqIEF1ZGlvIGNvbW11bmljYXRpb24gc2VydmljZVxuXHQgKiBAY29uc3RhbnRcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdEFDVElPTl9UWVBFX0FVRElPOiAnYXVkaW8nLFxuXHQvKipcblx0ICogVmlkZW8gY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0QUNUSU9OX1RZUEVfVklERU86ICd2aWRlbycsXG5cdC8qKlxuXHQgKiBDaGF0IGNvbW11bmljYXRpb24gc2VydmljZVxuXHQgKiBAY29uc3RhbnRcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdEFDVElPTl9UWVBFX0NIQVQ6ICdjaGF0Jyxcblx0LyoqXG5cdCAqIEF1ZGlvIGFuZCB2aWRlbyBjb21tdW5pY2F0aW9uIHNlcnZpY2Vcblx0ICogQGNvbnN0YW50XG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRBQ1RJT05fVFlQRV9BVURJT19WSURFTzogJ2F1ZGlvLXZpZGVvJyxcblx0LyoqXG5cdCAqIFNjcmVlbi1zaGFyaW5nIHNlcnZpY2Vcblx0ICogQGNvbnN0YW50XG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRBQ1RJT05fVFlQRV9TQ1JFRU5fU0hBUklORzogJ3NjcmVlbi1zaGFyaW5nJyxcblx0LyoqXG5cdCAqIENhbGwgY29tbXVuaWNhdGlvbiBzZXJ2aWNlXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0QUNUSU9OX1RZUEVfQ0FMTDogJ2NhbGwnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlIGRhdGFyZWZzLmpzIC0gSlMgZmlsZSBtb2RlbGl6aW5nIGEgZGF0YXJlZiwgaS5lLiBhIHBvaW50ZXIgdG8gdGhlIFdlYmNvbSB4d2l0aCBkZWRpY2F0ZWQgbm9kZXMgZm9yIHJvb21zLCByZWFjaCBzZXJ2aWNlIGFuZCBXZWJSVEMgY29tbXVuaWNhdGlvbnMuXG4gKiBAYXV0aG9yIFdlYmNvbVxuICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRhdGFyZWYgd2l0aCBzZXZlcmFsIG5vZGVzIGluIGl0IHdoaWNoIGFyZSBwb2ludGluZyB0byBzb21lIGxvY2F0aW9ucyBpbiB0aGUgZGF0YWJhc2UuXG4gKiBUaGUgZGF0YXJlZnMgY2FuIGJlIGNvbnNpZGVyZWQgYXMgYSBXZWJjb20gb2JqZWN0IHBvaW50aW5nIHRvIGEgYmFzZSBVUkwuIFRoaXMgbm9kZSBjb250YWlucyBjaGlsZHJlbiBub2RlcyBmb3JcbiAqIHJlYWNoIHNlcnZpY2UsIHJvb21zIGFuZCBXZWJSVEMgY29tbXVuaWNhdGlvbnMuXG4gKlxuICogV2FybmluZyA6IHdoZW4gdXNlZCB3aXRoIGRlbW8gVUksIHRoaXMgZmlsZSBpcyBub3QgaW1wb3J0ZWQ6ICBkZW1vIFVJIGhhc2UgaXRzIG93biBjb25maWd1cmF0aW9uIHN5c3RlbSAoaW1wb3J0IGpzb24gY29uZmlnIHdpdGggYSBwaHAgc2VydmVyIG1vZHVsZSlcbiAqIFRoZXNlIG5vZGVzIGFyZSA6XG4gKiAgICAgICAtIHJvb21zXG4gKiAgICAgICAtIHJlYWNoXG4gKiAgICAgICAtIHdlYnJ0Y1xuICogICAgICAgLSBzaXBQaG9uZU51bWJlcnNcbiAqICAgICAgIC0gZGF0YXN0b3JlLCBpLmUuIHRoZSBXZWJjb20gb2JqZWN0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oV0VCQ09NQkFTRV9VUkwpIHtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBkYXRhc3RvcmUgaW4gdGhlIG1haW4gb2JqZWN0IHdoaWNoIGNhbiBiZSBjb25zaWRlcmVkIGhhcyB0aGUgcm9vdCBub2RlIG9mIHRoZSBiYXNlLlxuXHQgKiBJdCBjb250YWlucyB0aGUgaW5zdGFuY2lhdGVkIFdlYmNvbSBkZWZpbmVkIGJ5IGEgV0VCQ09NQkFTRV9VUkxcblx0ICogVGhlIG1haW4gbm9kZXMgY29udGFpbmluZyB0aGUgcm9vbXMsIHRoZSBTSVAgcGhvbmUgbnVtYmVycyBhbmQgdGhlIHJlYWNoIGFuZCBXZWJSVEMgZGF0YSBhcmUgY2hpbGRyZW4gb2YgdGhpcyBub2RlLlxuXHQgKi9cblx0dmFyIF9kYXRhc3RvcmUgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEEgbm9kZSBjb250YWluaW5nIGFsbCB0aGUgcm9vbXMgb2YgdGhlIGNvbW11bmljYXRpb24gc3lzdGVtLlxuXHQgKiBFYWNoIFwicm9vbVwiIG5vZGUgcG9zc2Vzc2VzIHRoZSBwYXJ0aWNpcGFudHMgYW5kIHRoZSBleGNoYW5nZWQgaW5zdGFudCBtZXNzYWdlcyBmb3IgZXhhbXBsZS5cblx0ICogSW4gdGhlIGRhdGFiYXNlLCB0aGlzIG5vZGUgaXMgaWRlbnRpZmllZCBieSBcInJvb21zTGlzdFwiLlxuXHQgKi9cblx0dmFyIF9yb29tcyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSBkYXRhIGFib3V0IHRoZSByZWFjaCBzZXJ2aWNlIHVzZWQgdG8gcHV0IGluIHJlbGF0aW9uIHVzZXJzLlxuXHQgKiBJbiB0aGUgZGF0YWJhc2UsIHRoaXMgbm9kZSBpcyBpZGVudGlmaWVkIGJ5IFwicmVhY2hcIi5cblx0ICovXG5cdHZhciBfcmVhY2ggPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEEgbm9kZSBjb250YWluaW5nIGFsbCB0aGUgZGF0YSBhYm91dCB0aGUgV2ViUlRDIGZlYXR1cmUuXG5cdCAqIEluIHRoZSBkYXRhYmFzZSwgdGhpcyBub2RlIGlzIGlkZW50aWZpZWQgYnkgXCJ3ZWJydGNcIi5cblx0ICovXG5cdHZhciBfd2VicnRjID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIG5vZGUgY29udGFpbmluZyBhbGwgdGhlIGRhdGEgYWJvdXQgdGhlIFNJUCBwaG9uZSBudW1iZXJzLlxuXHQgKiBJbiB0aGUgZGF0YWJhc2UsIHRoaXMgbm9kZSBpcyBpZGVudGlmaWVkIGJ5IFwic2lwUGhvbmVOdW1iZXJzXCIuXG5cdCAqL1xuXHR2YXIgX3NpcFBob25lTnVtYmVycyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBpbml0aWFsaXphdGlvbiBmdW5jdGlvbiB3aGljaCBpbnN0YW50aWF0ZXMgdGhlIFdlYmNvbSBzdG9yZWQgaW4gdGhlIGRhdGEgc3RvcmUuXG5cdCAqIEFsbCB0aGUgY2hpbGRyZW4gbm9kZXNuYXJlIGRlZmluZXMgaGVyZS5cblx0ICovXG5cdGZ1bmN0aW9uIF9pbml0KCkge1xuXHRcdF9kYXRhc3RvcmUgPSBuZXcgV2ViY29tKFdFQkNPTUJBU0VfVVJMKTtcblx0XHRfaW5pdENoaWxkcmVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgY2hpbGRyZW4gbm9kZXMsIGkuZS4gY3JlYXRlcyBmb3IgZWFjaCBvZiB0aGVtIGEgZGVkaWNhdGVkIG5vZGUgaW4gdGhlIGRhdGFiYXNlXG5cdCAqIHVuZGVyIHRoZSBtYWluIG5vZGUgKGRhdGEgc3RvcmUpLiBDcmVhdGVkIG5vZGVzIGFyZSBcInJvb21zTGlzdFwiLCBcInJlYWNoXCIsIFwid2VicnRjXCIsIFwic2lwUGhvbmVOdW1iZXJzXCIuXG5cdCAqL1xuXHRmdW5jdGlvbiBfaW5pdENoaWxkcmVuKCkge1xuXHRcdF9yb29tcyA9IF9kYXRhc3RvcmUuY2hpbGQoJ3Jvb21zTGlzdCcpO1xuXHRcdF9yZWFjaCA9IF9kYXRhc3RvcmUuY2hpbGQoJ3JlYWNoJyk7XG5cdFx0X3dlYnJ0YyA9IF9kYXRhc3RvcmUuY2hpbGQoJ3dlYnJ0YycpO1xuXHRcdF9zaXBQaG9uZU51bWJlcnMgPSBfZGF0YXN0b3JlLmNoaWxkKCdzaXBQaG9uZU51bWJlcnMnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZpbmVzIHRoZSBXZWJjb20gVVJMIGFuZCByZWluaXQgdGhlIGNoaWxkcmVuLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcF93ZWJjb21iYXNlX3VybCAtIFRoZSBVUkwgb2YgdGhlIFdlYmNvbVxuXHQgKi9cblx0ZnVuY3Rpb24gX3NldFdlYmNvbUJhc2VVcmwocF93ZWJjb21iYXNlX3VybCkge1xuXHRcdF9kYXRhc3RvcmUgPSBuZXcgV2ViY29tKHBfd2ViY29tYmFzZV91cmwpO1xuXHRcdF9pbml0Q2hpbGRyZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm4gdGhlIFdlYmNvbSBVUkwuXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0V2ViY29tQmFzZVVybCgpIHtcblx0XHRpZiAoX2RhdGFzdG9yZSkge1xuXHRcdFx0cmV0dXJuIF9kYXRhc3RvcmUudG9TdHJpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgZGF0YXN0b3JlIGFuZCByZWluaXQgdGhlIGNoaWxkcmVuLlxuXHQgKiBAcGFyYW0ge1dlYmNvbX0gcF9kYXRhc3RvcmUgLSBBIFdlYmNvbSBvYmplY3Qgd2hpY2ggaXMgdGhlIG5ldyBkYXRhIHN0b3JlXG5cdCAqL1xuXHRmdW5jdGlvbiBfc2V0RGF0YXN0b3JlKHBfZGF0YXN0b3JlKSB7XG5cdFx0X2RhdGFzdG9yZT1wX2RhdGFzdG9yZTtcblx0XHRfaW5pdENoaWxkcmVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZGF0YXN0b3JlXG5cdCAqIEByZXR1cm4ge1dlYmNvbX0gLSBUaGUgZGF0YSBzdG9yZSBhcyBhIFdlYmNvbVxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldERhdGFzdG9yZSgpIHtcblx0XHRyZXR1cm4gX2RhdGFzdG9yZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIERlZmluZXMgYSBuZXcgcm9vbXMgbm9kZVxuXHQgKiBAcGFyYW0gcF9yb29tcyAtIEEgbm9kZSBjb250YWluaW5nIGFsbCB0aGUgcm9vbXNcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRSb29tcyhwX3Jvb21zKSB7XG5cdFx0X3Jvb21zPXBfcm9vbXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgcm9vdCBub2RlIG9mIHRoZSByb29tcy5cblx0ICogQHJldHVybiAtIFRoZSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSByb29tcyBsaXN0XG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0Um9vbXMoKSB7XG5cdFx0cmV0dXJuIF9yb29tcztcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZpbmVzIGEgbmV3IHJlYWNoIG5vZGVcblx0ICogQHBhcmFtIHBfcmVhY2ggLSBBIG5vZGUgY29udGFpbmluZyBhbGwgdGhlIGRhdGEgYWJvdXQgdGhlIHJlYWNoIHNlcnZpY2Vcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRSZWFjaChwX3JlYWNoKSB7XG5cdFx0X3JlYWNoPXBfcmVhY2g7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgcmVhY2ggbm9kZSBvZiB0aGUgcm9vbXMuXG5cdCAqIEByZXR1cm4gLSBUaGUgbm9kZSBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlYWNoIHNlcnZpY2Vcblx0ICovXG5cdGZ1bmN0aW9uIF9nZXRSZWFjaCgpIHtcblx0XHRyZXR1cm4gX3JlYWNoO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmluZXMgYSBuZXcgd2VicnRjIG5vZGVcblx0ICogQHBhcmFtIHBfd2VicnRjIC0gQSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSBkYXRhIGFib3V0IHRoZSBXZWJSVEMgZmVhdHVyZVxuXHQgKi9cblx0ZnVuY3Rpb24gX3NldFdlYnJ0YyhwX3dlYnJ0Yykge1xuXHRcdF93ZWJydGM9cF93ZWJydGM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgV2ViUlRDIG5vZGVcblx0ICogQHJldHVybiAtIFRoZSBub2RlIGNvbnRhaW5pZyBhbGwgdGhlIGRhdGEgYWJvdXQgdGhlIFdlYlJUQyBmZWF0dXJlXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0V2VicnRjKCkge1xuXHRcdHJldHVybiBfd2VicnRjO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmluZXMgYSBub2RlIGNvbnRhaW5pbmcgdGhlIFNJUCBwaG9uZSBudW1iZXJzXG5cdCAqIEBwYXJhbSBwX3NpcFBob25lTnVtYmVycyAtIFRoZSByb290IG5vZGUgY29udGFpbmluZyB0aGUgU0lQIHBob25lIG51bWJlcnNcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRTaXBQaG9uZU51bWJlcnMocF9zaXBQaG9uZU51bWJlcnMpIHtcblx0XHRfc2lwUGhvbmVOdW1iZXJzPXBfc2lwUGhvbmVOdW1iZXJzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHJvb3Qgbm9kZSBjb250YWluaW5nIHRoZSBTSVAgcGhvbmUgbnVtYmVyc1xuXHQgKiBAcmV0dXJuIC0gVGhlIHJvb3Qgbm9kZSB3aXRoIHRoZSBTSVAgbnVtYmVyc1xuXHQgKi9cblx0ZnVuY3Rpb24gX2dldFNpcFBob25lTnVtYmVycygpIHtcblx0XHRyZXR1cm4gX3NpcFBob25lTnVtYmVycztcblx0fVxuXG5cblxuXHRfaW5pdCgpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgV2ViY29tIFVSTCBhbmQgcmVpbml0IHRoZSBjaGlsZHJlbi5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcF93ZWJjb21iYXNlX3VybCAtIFRoZSBVUkwgb2YgdGhlIFdlYmNvbVxuXHRcdCAqL1xuXHRcdHNldFdlYmNvbUJhc2VVcmwgOiBmdW5jdGlvbihwX3dlYmNvbWJhc2VfdXJsKSB7XG5cdFx0XHRyZXR1cm4gX3NldFdlYmNvbUJhc2VVcmwocF93ZWJjb21iYXNlX3VybCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiByZXR1cm4gdGhlIFdlYmNvbSBVUkwuXG5cblx0XHQgKi9cblx0XHRnZXRXZWJjb21CYXNlVXJsIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gX2dldFdlYmNvbUJhc2VVcmwoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgdGhlIGRhdGFzdG9yZSBhbmQgcmVpbml0IHRoZSBjaGlsZHJlbi5cblx0XHQgKiBAcGFyYW0ge1dlYmNvbX0gcF9kYXRhc3RvcmUgLSBBIFdlYmNvbSBvYmplY3Qgd2hpY2ggaXMgdGhlIG5ldyBkYXRhIHN0b3JlXG5cdFx0ICovXG5cdFx0c2V0RGF0YXN0b3JlIDogZnVuY3Rpb24ocF9kYXRhc3RvcmUpIHtcblx0XHRcdHJldHVybiBfc2V0RGF0YXN0b3JlKHBfZGF0YXN0b3JlKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGRhdGFzdG9yZVxuXHRcdCAqIEByZXR1cm4ge1dlYmNvbX0gLSBUaGUgZGF0YSBzdG9yZSBhcyBhIFdlYmNvbVxuXHRcdCAqL1xuXHRcdGdldERhdGFzdG9yZSA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIF9nZXREYXRhc3RvcmUoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgYSBuZXcgcm9vbXMgbm9kZVxuXHRcdCAqIEBwYXJhbSBwX3Jvb21zIC0gQSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSByb29tc1xuXHRcdCAqL1xuXHRcdHNldFJvb21zIDogZnVuY3Rpb24ocF9yb29tcykge1xuXHRcdFx0cmV0dXJuIF9zZXRSb29tcyhwX3Jvb21zKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgcm9vbXMuXG5cdFx0ICogQHJldHVybiAtIFRoZSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSByb29tcyBsaXN0XG5cdFx0ICovXG5cdFx0Z2V0Um9vbXMgOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBfZ2V0Um9vbXMoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgYSBuZXcgcmVhY2ggbm9kZVxuXHRcdCAqIEBwYXJhbSBwX3JlYWNoIC0gQSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSBkYXRhIGFib3V0IHRoZSByZWFjaCBzZXJ2aWNlXG5cdFx0ICovXG5cdFx0c2V0UmVhY2ggOiBmdW5jdGlvbihwX3JlYWNoKSB7XG5cdFx0XHRyZXR1cm4gX3NldFJlYWNoKHBfcmVhY2gpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgcmVhY2ggbm9kZSBvZiB0aGUgcm9vbXMuXG5cdFx0ICogQHJldHVybiAtIFRoZSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVhY2ggc2VydmljZVxuXHRcdCAqL1xuXHRcdGdldFJlYWNoIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gX2dldFJlYWNoKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZWZpbmVzIGEgbmV3IHdlYnJ0YyBub2RlXG5cdFx0ICogQHBhcmFtIHBfd2VicnRjIC0gQSBub2RlIGNvbnRhaW5pbmcgYWxsIHRoZSBkYXRhIGFib3V0IHRoZSBXZWJSVEMgZmVhdHVyZVxuXHRcdCAqL1xuXHRcdHNldFdlYnJ0YyA6IGZ1bmN0aW9uKHBfd2VicnRjKSB7XG5cdFx0XHRyZXR1cm4gX3NldFdlYnJ0YyhwX3dlYnJ0Yyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBXZWJSVEMgbm9kZVxuXHRcdCAqIEByZXR1cm4gLSBUaGUgbm9kZSBjb250YWluaWcgYWxsIHRoZSBkYXRhIGFib3V0IHRoZSBXZWJSVEMgZmVhdHVyZVxuXHRcdCAqL1xuXHRcdGdldFdlYnJ0YyA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIF9nZXRXZWJydGMoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgYSBub2RlIGNvbnRhaW5pbmcgdGhlIFNJUCBwaG9uZSBudW1iZXJzXG5cdFx0ICogQHBhcmFtIHBfc2lwUGhvbmVOdW1iZXJzIC0gVGhlIHJvb3Qgbm9kZSBjb250YWluaW5nIHRoZSBTSVAgcGhvbmUgbnVtYmVyc1xuXHRcdCAqL1xuXHRcdHNldFNpcFBob25lTnVtYmVycyA6IGZ1bmN0aW9uKHBfc2lwUGhvbmVOdW1iZXJzKSB7XG5cdFx0XHRyZXR1cm4gX3NldFNpcFBob25lTnVtYmVycyhwX3NpcFBob25lTnVtYmVycyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSByb290IG5vZGUgY29udGFpbmluZyB0aGUgU0lQIHBob25lIG51bWJlcnNcblx0XHQgKiBAcmV0dXJuIC0gVGhlIHJvb3Qgbm9kZSB3aXRoIHRoZSBTSVAgbnVtYmVyc1xuXHRcdCAqL1xuXHRcdGdldFNpcFBob25lTnVtYmVycyA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIF9nZXRTaXBQaG9uZU51bWJlcnMoKTtcblx0XHR9XG5cdH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGF0YXJlZnMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlIHJlYWNoLmpzIC0gSlMgZmlsZSB0byB1c2UgZm9yIHRoZSByZWFjaCBzZXJ2aWNlLiBUaGlzIHNlcnZpY2UgYWxsb3dzIHRvIGNyZWF0ZSBhIGRlZGljYXRlZCByb29tIGZvciB1c2VycyBzbyBhcyB0byBwcm92aWRlIHRoZW0gYSBjb21tdW5pY2F0aW9uIHN1aXRlLlxuICogQGF1dGhvciBXZWJjb21cbiAqL1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogSU5WSVRFIHN0YXR1cyA6IG9uZ29pbmcgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElOVklUQVRJT05fT05HT0lORyA9ICdPTkdPSU5HJztcblxuLyoqXG4gKiBJTlZJVEUgc3RhdHVzIDogYWNjZXB0ZWQgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElOVklUQVRJT05fQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuXG4vKipcbiAqIElOVklURSBzdGF0dXMgOiByZWZ1c2VkIHN0YXR1c1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBJTlZJVEFUSU9OX1JFSkVDVEVEID0gJ1JFSkVDVEVEJztcblxuLyoqXG4gKiBJTlZJVEUgc3RhdHVzIDogY2FuY2VsZWQgc3RhdHVzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElOVklUQVRJT05fQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuXG4vKipcbiAqIERFVklDRV9TVEFUVVNfQ09OTkVURUQgc3RhdHVzIDogY29ubmVjdGVkIHN0YXR1c1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBERVZJQ0VfU1RBVFVTX0NPTk5FQ1RFRCA9ICdDT05ORUNURUQnO1xuXG4vKipcbiAqIFJPT01fU1RBVFVTX09QRU4gc3RhdHVzIDogcm9vbSBpcyBvcGVuIC8gYWN0aXZlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IFJPT01fU1RBVFVTX09QRU4gPSAnT1BFTic7XG5cblxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGRlc2NyaXB0aW9uIFRoZSByZWFjaCBvYmplY3Qgd2l0aCBpdHMgc3RyZWFtcywgZmxhZ3MgYW5kIGNhbGxiYWNrcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHVzZWQgc28gYXMgdG8gbWFrZSBpbiBjb25uZWN0aW9uIHNldmVyYWwgdXNlcnMuIFRoZSByb29tIEludml0ZXMgbWFuYWdlbWVudCAoYWNjZXB0IC8gcmVmdXNlIC8gY2FuY2VsKSwgdGhlIHVzZXIgbWFuYWdlbWVudCAoYWRkIC8gcmVtb3ZlKSBhbmRcbiAqIHRoZSBJbnZpdGUgYXJlIGhhbmRsZWQgaGVyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwX21lIC0gVGhlIHVzZXIgaWRlbnRpZmllclxuICovXG52YXIgcmVhY2ggPSBmdW5jdGlvbiAocF9tZSwgZGF0YXJlZnMpIHtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSB1c2VyIGlkZW50aWZpZXIuIFRoaXMgaWRlbnRpZmllciB3aWxsIGJlIHVzZSB0byBjcmVhdGUgYSBkZWRpY2F0ZWQgbm9kZSBpbiB0aGUgZGF0YWJhc2UgZm9yIHRoaXMgdXNlci5cblx0ICovXG5cdHZhciBtZSA9IHBfbWU7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIGRhdGEgcmVmIHBvaW50ZXIgZm9yIHRoZSByZWFjaCBwYXJ0LiBJdCBjYW4gYmUgY29uc2lkZXJlZCBhcyBhIHBvaW50ZXIgdG8gdGhlIGRhdGFiYXNlIHRvIHVzZSB0byBuYXZpZ2F0ZSBpbnRvIGl0IGFuZCBtb2RpZnkgaXRzIGNvbnRlbnQuXG5cdCAqL1xuXHR2YXIgZGF0YXJlZiA9IGRhdGFyZWZzLmdldFJlYWNoKCk7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgaGFuZGxpbmcgdGhlIHVzZXIgYWRkaW5nXG5cdCAqL1xuXHR2YXIgb25Vc2VyQWRkZWRDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgaGFuZGxpbmcgdGhlIHVzZXIgY2hhbmdlc1xuXHQgKi9cblx0dmFyIG9uVXNlckNoYW5nZWRDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgaGFuZGxpbmcgdGhlIHVzZXIgcmVtb3ZhbFxuXHQgKi9cblx0dmFyIG9uVXNlclJlbW92ZWRDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZm9yIG5ldyBJbnZpdGUgcmVjZWl2ZWRcblx0ICovXG5cdHZhciBuZXdJbnZpdGVDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgZm9yIEludml0ZSByZWNlaXZlZCBjaGFuZ2VzXG5cdCAqL1xuXHR2YXIgb25Sb29tSW52aXRlQ2hhbmdlZENiID0gbnVsbDtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG91dGdvaW5nIEludml0ZVxuXHQgKi9cblx0dmFyIG1PdXRnb2luZ0ludml0ZXMgPSBbXTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBjb250YWluaW5nIGFsbCBpbmNvbWluZyBJbnZpdGF0aW9uXG5cdCAqL1xuXHR2YXIgbUluY29taW5nSW52aXRhdGlvbiA9IFtdO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIHRoZSB0aW1lb3V0IHRvIHJlamVjdCBhdXRvbWF0aWNhbGx5IHRoZSBJbnZpdGVcblx0ICovXG5cdHZhciBhdXRvbWF0aWNSZWplY3RUaW1lT3V0ID0gbnVsbDtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIHRoZSByZWFzb24gdG8gcmVqZWN0IGF1dG9tYXRpY2FsbHkgdGhlIEludml0ZVxuXHQgKi9cblx0dmFyIGF1dG9tYXRpY1JlamVjdFJlYXNvbiA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiB0aGUgY3VycmVudCBkZXZpY2UgSWRcblx0ICovXG5cdHZhciBtRGV2aWNlSWQgPSBudWxsO1xuXG5cdC8qKlxuXHQqIEluaXRpYWxpc2F0aW9uIGZvbmN0aW9uLiBVcGRhdGVzIHRoZSBkYXRhcmVmIGFib3V0IHRoZSB1c2VyIGlkZW50aWZpZXIgaW4gdGhlIHVzZXIgbGlzdCA6XG5cdCogaXQgd2lsbCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3QgaXQuXG5cdCovXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0bURldmljZUlkID0gZGF0YXJlZi5jaGlsZCgndXNlckxpc3QnKS5jaGlsZChtZSkuY2hpbGQoJ2Nvbm5lY3RlZExpc3QnKS5jaGlsZCh1dGlscy5hcHBJbnN0YW5jZUlkKTtcblx0XHRtRGV2aWNlSWQub25EaXNjb25uZWN0KCkucmVtb3ZlKCk7XG5cdFx0bURldmljZUlkLmNoaWxkKCdzdGF0dXMnKS5zZXQoREVWSUNFX1NUQVRVU19DT05ORUNURUQpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodXRpbHMuYXBwSW5zdGFuY2VJZCkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCdhcHBJbnN0YW5jZUlkJykuc2V0KHV0aWxzLmFwcEluc3RhbmNlSWQpO1xuXHRcdFx0aWYgKG5hdmlnYXRvci5hcHBDb2RlTmFtZSkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgnYXBwQ29kZU5hbWUnKS5zZXQobmF2aWdhdG9yLmFwcENvZGVOYW1lKTtcblx0XHRcdGlmIChuYXZpZ2F0b3IuYXBwTmFtZSkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgnYXBwTmFtZScpLnNldChuYXZpZ2F0b3IuYXBwTmFtZSk7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmFwcFZlcnNpb24pIG1EZXZpY2VJZC5jaGlsZCgnZGVzY3JpcHRpb24nKS5jaGlsZCgnbmF2aWdhdG9yJykuY2hpbGQoJ2FwcFZlcnNpb24nKS5zZXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xuXHRcdFx0aWYgKG5hdmlnYXRvci5idWlsZElEKSBtRGV2aWNlSWQuY2hpbGQoJ2Rlc2NyaXB0aW9uJykuY2hpbGQoJ25hdmlnYXRvcicpLmNoaWxkKCdidWlsZElEJykuc2V0KG5hdmlnYXRvci5idWlsZElEKTtcblx0XHRcdGlmIChuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgnY29va2llRW5hYmxlZCcpLnNldChuYXZpZ2F0b3IuY29va2llRW5hYmxlZCk7XG4vL1x0XHRcdGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIG1EZXZpY2VJZC5jaGlsZChcImRlc2NyaXB0aW9uXCIpLmNoaWxkKFwibmF2aWdhdG9yXCIpLmNoaWxkKFwiZ2VvbG9jYXRpb25cIikuc2V0KG5hdmlnYXRvci5nZW9sb2NhdGlvbik7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmxhbmd1YWdlKSBtRGV2aWNlSWQuY2hpbGQoJ2Rlc2NyaXB0aW9uJykuY2hpbGQoJ25hdmlnYXRvcicpLmNoaWxkKCdsYW5ndWFnZScpLnNldChuYXZpZ2F0b3IubGFuZ3VhZ2UpO1xuLy9cdFx0XHRpZiAobmF2aWdhdG9yLm1pbWVUeXBlcykgbURldmljZUlkLmNoaWxkKFwiZGVzY3JpcHRpb25cIikuY2hpbGQoXCJuYXZpZ2F0b3JcIikuY2hpbGQoXCJtaW1lVHlwZXNcIikuc2V0KG5hdmlnYXRvci5taW1lVHlwZXMudG9TdHJpbmcoKSk7XG5cdFx0XHRpZiAobmF2aWdhdG9yLm9uTGluZSkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgnb25MaW5lJykuc2V0KG5hdmlnYXRvci5vbkxpbmUpO1xuXHRcdFx0aWYgKG5hdmlnYXRvci5vc2NwdSkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgnb25MaW5lJykuc2V0KG5hdmlnYXRvci5vc2NwdSk7XG5cdFx0XHRpZiAobmF2aWdhdG9yLnBsYXRmb3JtKSBtRGV2aWNlSWQuY2hpbGQoJ2Rlc2NyaXB0aW9uJykuY2hpbGQoJ25hdmlnYXRvcicpLmNoaWxkKCdwbGF0Zm9ybScpLnNldChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuLy9cdFx0XHRpZiAobmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIG1EZXZpY2VJZC5jaGlsZChcImRlc2NyaXB0aW9uXCIpLmNoaWxkKFwibmF2aWdhdG9yXCIpLmNoaWxkKFwicGx1Z2luc1wiKS5zZXQobmF2aWdhdG9yLnBsdWdpbnMudG9TdHJpbmcoKSk7XG5cdFx0XHRpZiAobmF2aWdhdG9yLnByb2R1Y3QpIG1EZXZpY2VJZC5jaGlsZCgnZGVzY3JpcHRpb24nKS5jaGlsZCgnbmF2aWdhdG9yJykuY2hpbGQoJ3Byb2R1Y3QnKS5zZXQobmF2aWdhdG9yLnByb2R1Y3QpO1xuXHRcdFx0aWYgKG5hdmlnYXRvci5wcm9kdWN0U3ViKSBtRGV2aWNlSWQuY2hpbGQoJ2Rlc2NyaXB0aW9uJykuY2hpbGQoJ25hdmlnYXRvcicpLmNoaWxkKCdwcm9kdWN0U3ViJykuc2V0KG5hdmlnYXRvci5wcm9kdWN0U3ViKTtcblx0XHRcdGlmIChuYXZpZ2F0b3Iuc2VjdXJpdHlQb2xpY3kpIG1EZXZpY2VJZC5jaGlsZCgnZGVzY3JpcHRpb24nKS5jaGlsZCgnbmF2aWdhdG9yJykuY2hpbGQoJ3NlY3VyaXR5UG9saWN5Jykuc2V0KG5hdmlnYXRvci5zZWN1cml0eVBvbGljeSk7XG5cdFx0XHRpZiAobmF2aWdhdG9yLnVzZXJBZ2VudCkgbURldmljZUlkLmNoaWxkKCdkZXNjcmlwdGlvbicpLmNoaWxkKCduYXZpZ2F0b3InKS5jaGlsZCgndXNlckFnZW50Jykuc2V0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXHRcdFx0aWYgKG5hdmlnYXRvci52ZW5kb3IpIG1EZXZpY2VJZC5jaGlsZCgnZGVzY3JpcHRpb24nKS5jaGlsZCgnbmF2aWdhdG9yJykuY2hpbGQoJ3ZlbmRvcicpLnNldChuYXZpZ2F0b3IudmVuZG9yKTtcblx0XHRcdGlmIChuYXZpZ2F0b3IudmVuZG9yU3ViKSBtRGV2aWNlSWQuY2hpbGQoJ2Rlc2NyaXB0aW9uJykuY2hpbGQoJ25hdmlnYXRvcicpLmNoaWxkKCd2ZW5kb3JTdWInKS5zZXQobmF2aWdhdG9yLnZlbmRvclN1Yik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6OmluaXQpZmFpbGVkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCBkZXZpY2UuIGVycm9yPScrZSk7XG5cdFx0fVxuXHRcdGRhdGFyZWYuY2hpbGQoJ3VzZXJMaXN0JykuY2hpbGQobWUpLmNoaWxkKCd3YXNJbnNpZGVSZWFjaCcpLnNldCh0cnVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiBhIHVzZXIgaXMgY29ubmVjdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwX3VzZXJJZCAtIHRoZSB1c2VyIElkXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfY2IgLSB0aGUgY2FsbGJhY2sgdHJpZ2dlcnMgdG8gcmV0dXJuIHRoZSByZXN1bHQuIFRoZSByZXN1bHQgd2lsbCBiZSBwYXNzZWQgaW4gcGFyYW1ldGVyIGFzIGJvb2xlYW4gOiB0cnVlID0gY29ubmVjdGVkIC8gZmFsc2UgPSBub3QgY29ubmVjdGVkXG5cdCAqL1xuXHRmdW5jdGlvbiBfaXNDb25uZWN0ZWQocF91c2VySWQscF9jYikge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6X2lzQ29ubmVjdGVkKXVzZXJJZCcrcF91c2VySWQpO1xuXHRcdHZhciBvblVzZXJDb25uZWN0ZWRDYiA9IGZ1bmN0aW9uKHNuYXBzaG90KSB7XG5cdFx0XHR2YXIgY29ubmVjdGVkID0gKHNuYXBzaG90LnZhbCgpICE9PSBudWxsKTtcblx0XHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHBfY2IoY29ubmVjdGVkKTtcblx0XHR9O1xuXHRcdGRhdGFyZWYuY2hpbGQoJ3VzZXJMaXN0JykuY2hpbGQocF91c2VySWQpLmNoaWxkKCdjb25uZWN0ZWRMaXN0Jykub25jZSgndmFsdWUnLG9uVXNlckNvbm5lY3RlZENiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBjaGVjayBpZiBhIHVzZXIgaXMgcmVnaXN0ZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBfdXNlcklkIC0gdGhlIHVzZXIgSWRcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIHRoZSBjYWxsYmFjayB0cmlnZ2VycyB0byByZXR1cm4gdGhlIHJlc3VsdC4gVGhlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCBpbiBwYXJhbWV0ZXIgYXMgYm9vbGVhbiA6IHRydWUgPSByZWdpc3RlcmVkIC8gZmFsc2UgPSBub3QgcmVnaXN0ZXJlZFxuXHQgKi9cblx0ZnVuY3Rpb24gX2lzUmVnaXN0ZXJlZChwX3VzZXJJZCxwX2NiKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfaXNSZWdpc3RlcmVkKXVzZXJJZCcrcF91c2VySWQpO1xuXHRcdHZhciBvblVzZXJSZWdpc3RlcmVkQ2IgPSBmdW5jdGlvbihzbmFwc2hvdCkge1xuXHRcdFx0dmFyIHJlZ2lzdGVyZWQgPSAoc25hcHNob3QudmFsKCkgIT09IG51bGwpO1xuXHRcdFx0aWYgKHBfY2IgJiYgdHlwZW9mIHBfY2IgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwX2NiKHJlZ2lzdGVyZWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZGF0YXJlZi5jaGlsZCgndXNlckxpc3QnKS5jaGlsZChwX3VzZXJJZCkuY2hpbGQoJ3dhc0luc2lkZVJlYWNoJykub25jZSgndmFsdWUnLG9uVXNlclJlZ2lzdGVyZWRDYik7XG5cdH1cblxuXHQvKipcblx0ICogc2V0IHRoZSBkZXZpY2Ugc3RhdHVzIChERVZJQ0VfU1RBVFVTX0NPTk5FQ1RFRClcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBfc3RhdHVzIC0gdGhlIG5ldyBzdGF0dXNcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRDb25uZWN0ZWRTdGF0dXMocF9zdGF0dXMpIHtcblx0XHRpZiAobURldmljZUlkKSBtRGV2aWNlSWQuY2hpbGQoJ3N0YXR1cycpLnNldChwX3N0YXR1cyk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIGEgbmV3IHVzZXIgaXMgYWRkZWRcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byB1c2Vcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblVzZXJBZGRlZChwX2NiKSB7XG5cdFx0aWYgKG9uVXNlckFkZGVkQ2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3VzZXJMaXN0Jykub2ZmKCdjaGlsZF9hZGRlZCcsb25Vc2VyQWRkZWRDYik7XG5cdFx0XHRvblVzZXJBZGRlZENiPW51bGw7XG5cdFx0fVxuXHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdG9uVXNlckFkZGVkQ2IgPSBmdW5jdGlvbihzbmFwc2hvdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Om9uVXNlckFkZGVkQ2IpJytzbmFwc2hvdC5uYW1lKCkrJz0nK0pTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XG5cdFx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0b2JqW3NuYXBzaG90Lm5hbWUoKV09c25hcHNob3QudmFsKCk7XG5cdFx0XHRcdHBfY2Iob2JqKTtcblx0XHRcdH07XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9uKCdjaGlsZF9hZGRlZCcsb25Vc2VyQWRkZWRDYik7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBEZWZpbmVzIHRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHdoZW4gdGhlIHVzZXIgaGFzIGNoYW5nZWRcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byB1c2Vcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblVzZXJDaGFuZ2VkKHBfY2IpIHtcblx0XHRpZiAob25Vc2VyQ2hhbmdlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9mZignY2hpbGRfY2hhbmdlZCcsb25Vc2VyQ2hhbmdlZENiKTtcblx0XHRcdG9uVXNlckNoYW5nZWRDYj1udWxsO1xuXHRcdH1cblx0XHRpZiAocF9jYiAmJiB0eXBlb2YgcF9jYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvblVzZXJDaGFuZ2VkQ2IgPSBmdW5jdGlvbihzbmFwc2hvdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Om9uVXNlckNoYW5nZWRDYiknK3NuYXBzaG90Lm5hbWUoKSsnPScrSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcblx0XHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0XHRvYmpbc25hcHNob3QubmFtZSgpXT1zbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0cF9jYihvYmopO1xuXHRcdFx0fTtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3VzZXJMaXN0Jykub24oJ2NoaWxkX2NoYW5nZWQnLG9uVXNlckNoYW5nZWRDYik7XG5cdFx0fVxuXG5cdH1cblx0LyoqXG5cdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhIHVzZXIgaGFzIGJlZW4gcmVtb3ZlZC5cblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byB1c2Vcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblVzZXJSZW1vdmVkKHBfY2IpIHtcblx0XHRpZiAob25Vc2VyUmVtb3ZlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9mZignY2hpbGRfcmVtb3ZlZCcsb25Vc2VyUmVtb3ZlZENiKTtcblx0XHRcdG9uVXNlclJlbW92ZWRDYj1udWxsO1xuXHRcdH1cblx0XHRpZiAocF9jYiAmJiB0eXBlb2YgcF9jYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvblVzZXJSZW1vdmVkQ2IgPSBmdW5jdGlvbihzbmFwc2hvdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Om9uVXNlclJlbW92ZWRDYiknK3NuYXBzaG90Lm5hbWUoKSsnPScrSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcblx0XHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0XHRvYmpbc25hcHNob3QubmFtZSgpXT1zbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0cF9jYihvYmopO1xuXHRcdFx0fTtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3VzZXJMaXN0Jykub24oJ2NoaWxkX3JlbW92ZWQnLG9uVXNlclJlbW92ZWRDYik7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIGEgcm9vbSBJbnZpdGUgaGFzIGJlZW4gcmVjZWl2ZWQuXG5cdCAqIE90aGVyIGNhbGxiYWNrcyB3aWxsIGJlIHRyaWdnZXJlZCBhYm91dCBJbnZpdGUgbGlzdHMuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfb25OZXdSb29tSW52aXRlQ2IgLSBUaGUgY2FsbGJhY2sgdHJpZ2dlcnMgd2hlbiBhIEludml0ZSBpcyByZWNlaXZlZCAoc3RhdHVzID0gb24gZ29pbmcpXG5cdCAqL1xuXHRmdW5jdGlvbiBfc2V0T25OZXdSb29tSW52aXRhdGlvbihwX29uTmV3Um9vbUludml0ZUNiKSB7XG5cblx0XHRpZiAobmV3SW52aXRlQ2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ2ludml0YXRpb25MaXN0JykuY2hpbGQobWUpLm9mZignY2hpbGRfYWRkZWQnLG5ld0ludml0ZUNiKTtcblx0XHRcdG5ld0ludml0ZUNiPW51bGw7XG5cdFx0fVxuXHRcdGlmIChwX29uTmV3Um9vbUludml0ZUNiICYmIHR5cGVvZiBwX29uTmV3Um9vbUludml0ZUNiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdG5ld0ludml0ZUNiID0gZnVuY3Rpb24oc25hcHNob3QpIHtcblx0XHRcdFx0aWYgKHNuYXBzaG90LnZhbCgpLnN0YXR1cz09PSBJTlZJVEFUSU9OX09OR09JTkcpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9zZXRPbk5ld1Jvb21JbnZpdGF0aW9uKW5ldyBJbnZpdGUgcmVjZWl2ZWQsaWQpJytzbmFwc2hvdC5uYW1lKCkrJyxjb250ZW50PScrSlNPTi5zdHJpbmdpZnkoc25hcHNob3QudmFsKCkpKTtcblx0XHRcdFx0XHR2YXIgaW52aXRhdGlvbklkPXNuYXBzaG90Lm5hbWUoKTtcblx0XHRcdFx0XHRpZiAoIW1JbmNvbWluZ0ludml0YXRpb24pIG1JbmNvbWluZ0ludml0YXRpb249W107XG5cdFx0XHRcdFx0aWYgKG1JbmNvbWluZ0ludml0YXRpb25baW52aXRhdGlvbklkXSkge1xuXHRcdFx0XHRcdFx0aWYgKG1JbmNvbWluZ0ludml0YXRpb25baW52aXRhdGlvbklkXS50aW1lb3V0KSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChtSW5jb21pbmdJbnZpdGF0aW9uW2ludml0YXRpb25JZF0udGltZW91dCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkZWxldGUgbUluY29taW5nSW52aXRhdGlvbltpbnZpdGF0aW9uSWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtSW5jb21pbmdJbnZpdGF0aW9uW2ludml0YXRpb25JZF09e307XG5cblx0XHRcdFx0XHR2YXIgb2JqPXt9O1xuXHRcdFx0XHRcdG9ialtpbnZpdGF0aW9uSWRdPXNuYXBzaG90LnZhbCgpO1xuXHRcdFx0XHRcdHBfb25OZXdSb29tSW52aXRlQ2Iob2JqKTtcblxuXHRcdFx0XHRcdGlmIChhdXRvbWF0aWNSZWplY3RUaW1lT3V0KSB7XG5cdFx0XHRcdFx0XHR2YXIgbVRpbWVvdXRfYWN0aW9uPXNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChhdXRvbWF0aWNSZWplY3RUaW1lT3V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfc2V0T25OZXdSb29tSW52aXRhdGlvbilhdXRvbWF0aWMgcmVqZWN0IG9mIEludml0ZSByZWNlaXZlZD0nK0pTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YXJlZi5jaGlsZCgnaW52aXRhdGlvbkxpc3QnKS5jaGlsZChtZSkuY2hpbGQoaW52aXRhdGlvbklkKS5vbkRpc2Nvbm5lY3QoKS5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYXV0b21hdGljUmVqZWN0UmVhc29uKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKG1lKS5jaGlsZChpbnZpdGF0aW9uSWQpLnVwZGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpbWVzdGFtcF9lbmQ6V2ViY29tLlNlcnZlclZhbHVlLlRJTUVTVEFNUCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzOklOVklUQVRJT05fUkVKRUNURUQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1c19pbmZvOmF1dG9tYXRpY1JlamVjdFJlYXNvblxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFyZWYuY2hpbGQoJ2ludml0YXRpb25MaXN0JykuY2hpbGQobWUpLmNoaWxkKGludml0YXRpb25JZCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGltZXN0YW1wX2VuZDpXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM6SU5WSVRBVElPTl9SRUpFQ1RFRFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LGF1dG9tYXRpY1JlamVjdFRpbWVPdXQpO1xuXHRcdFx0XHRcdFx0bUluY29taW5nSW52aXRhdGlvbltpbnZpdGF0aW9uSWRdLnRpbWVvdXQ9bVRpbWVvdXRfYWN0aW9uO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBvbkludml0YXRpb25DaGFuZ2VDYiA9IGZ1bmN0aW9uKHNuYXBzaG90KSB7XG5cdFx0XHRcdFx0XHRpZihzbmFwc2hvdCAmJiBzbmFwc2hvdC5uYW1lKCk9PT0nc3RhdHVzJykge1xuXHRcdFx0XHRcdFx0XHRzbmFwc2hvdC5yZWYoKS5wYXJlbnQoKS5vbmNlKCd2YWx1ZScsZnVuY3Rpb24oc25hcHNob3QyKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNiX2ludml0YXRpb25JZCxjYl9vYmpfY29udGVudDtcblx0XHRcdFx0XHRcdFx0XHRpZiAoc25hcHNob3QyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYl9pbnZpdGF0aW9uSWQgPSBzbmFwc2hvdC5yZWYoKS5wYXJlbnQoKS5uYW1lKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYl9vYmpfY29udGVudD0gc25hcHNob3QyLnZhbCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNiX29iaj17fTtcblx0XHRcdFx0XHRcdFx0XHRcdGNiX29ialtjYl9pbnZpdGF0aW9uSWRdPWNiX29ial9jb250ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG1JbmNvbWluZ0ludml0YXRpb24gJiYgbUluY29taW5nSW52aXRhdGlvbltjYl9pbnZpdGF0aW9uSWRdJiYgbUluY29taW5nSW52aXRhdGlvbltjYl9pbnZpdGF0aW9uSWRdLnRpbWVvdXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG1JbmNvbWluZ0ludml0YXRpb25bY2JfaW52aXRhdGlvbklkXS50aW1lb3V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6X3NldE9uTmV3Um9vbUludml0YXRpb24pSW52aXRlIGNoYW5nZWQsaWQ9KScrY2JfaW52aXRhdGlvbklkLCdcXCduZXcgY29udGVudD0nK0pTT04uc3RyaW5naWZ5KGNiX29ial9jb250ZW50KSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2Jfb2JqICYmIG9uUm9vbUludml0ZUNoYW5nZWRDYiApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25Sb29tSW52aXRlQ2hhbmdlZENiKGNiX29iaik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgbUluY29taW5nSW52aXRhdGlvbltjYl9pbnZpdGF0aW9uSWRdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKG1lKS5jaGlsZChpbnZpdGF0aW9uSWQpLm9uY2UoJ2NoaWxkX2NoYW5nZWQnLG9uSW52aXRhdGlvbkNoYW5nZUNiKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgnaW52aXRhdGlvbkxpc3QnKS5jaGlsZChtZSkub24oJ2NoaWxkX2FkZGVkJyxuZXdJbnZpdGVDYik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhIHJvb20gSW52aXRlIGhhcyBiZWVuIGNoYW5nZWQuXG5cdCAqIE90aGVyIGNhbGxiYWNrcyB3aWxsIGJlIHRyaWdnZXJlZCBhYm91dCBJbnZpdGUgbGlzdHMuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfb25Sb29tSW52aXRlQ2hhbmdlZENiIC0gVGhlIGNhbGxiYWNrIHRyaWdnZXJzIHdoZW4gdGhlIHNhdHVzIG9uIHRoZSBJbnZpdGUgcmVjZWl2ZWQgaGFzIGNoYW5nZWQgKHN0YXR1cyA9IGFjY2VwdGVkL3JlamVjdGVkL2NhbmNlbGVkKVxuXHQgKi9cblx0ZnVuY3Rpb24gX3NldE9uUm9vbUludml0YXRpb25DaGFuZ2VkKHBfb25Sb29tSW52aXRlQ2hhbmdlZENiKSB7XG5cblx0XHRpZiAob25Sb29tSW52aXRlQ2hhbmdlZENiKSB7XG5cdFx0XHRvblJvb21JbnZpdGVDaGFuZ2VkQ2I9bnVsbDtcblx0XHR9XG5cblx0XHRpZiAocF9vblJvb21JbnZpdGVDaGFuZ2VkQ2IgJiYgdHlwZW9mIHBfb25Sb29tSW52aXRlQ2hhbmdlZENiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdG9uUm9vbUludml0ZUNoYW5nZWRDYj1wX29uUm9vbUludml0ZUNoYW5nZWRDYjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGVmaW5lcyBhIHRpbWVvdXQgdG8gcmVqZWN0IGF1dG9tYXRpY2FsbHkgdGhlIGluY29taW5nIEludml0ZVxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IHBfdGltZW91dCAtIFRoZSBkZWxheVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcF9yZWFzb24gLSBvcHRpb25hbCBpbmZvIGFib3V0IHRoZSByZWplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIF9zZXROZXdSb29tSW52aXRhdGlvblRpbWVvdXQocF90aW1lb3V0LHBfcmVhc29uKSB7XG5cdFx0aWYgKGF1dG9tYXRpY1JlamVjdFRpbWVPdXQpIHtcblx0XHRcdGF1dG9tYXRpY1JlamVjdFRpbWVPdXQ9bnVsbDtcblx0XHR9XG5cdFx0aWYgKGF1dG9tYXRpY1JlamVjdFJlYXNvbikge1xuXHRcdFx0YXV0b21hdGljUmVqZWN0UmVhc29uPW51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHBfdGltZW91dFx0JiYgcF90aW1lb3V0ID09PSBwYXJzZUludChwX3RpbWVvdXQsIDEwKSAmJiBwX3RpbWVvdXQ+MCkge1xuXHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfc2V0TmV3Um9vbUludml0YXRpb25UaW1lb3V0KXRpbWVvdXQ9JytwX3RpbWVvdXQpO1xuXHRcdFx0YXV0b21hdGljUmVqZWN0VGltZU91dD1wX3RpbWVvdXQ7XG5cdFx0fVxuXHRcdGlmIChwX3JlYXNvbikge1xuXHRcdFx0YXV0b21hdGljUmVqZWN0UmVhc29uPXBfcmVhc29uO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIHRlc3QgaWYgcF91c2VyICBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHBhcnRpY2lwYW50IGxpc3Qgb2YgdGhlIHJvb20gcF9yb29tSWRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBfcm9vbUlkIC0gVGhlIHJvb20gdXNlZCBhcyB0aGUgbmFtZSBvZiBhIGJyYW5jaCBpcyB0aGUgZGF0YWJhc2Vcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBfdXNlciAtIFRoZSB1c2VyIElkXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfY2IgLSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGlnZ2VyIHRvIGdldCB0aGUgcmVzdWx0LiBJdCB3aWxsIGNvbnRhaW50cyBhIHBhcmFtZXRlciA9IHRydWUgaXMgYWxyZWFkeSBwcmVzZW50LCBmYWxzZSBlaXRoZXIuXG5cdCAqL1xuXHRmdW5jdGlvbiBfaXNVc2VyUHJlc2VudEluUm9vbShwX3Jvb21JZCxwX3VzZXIscF9jYikge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6X2lzVXNlclByZXNlbnRJblJvb20pcF9yb29tSWQ9JytwX3Jvb21JZCsnIHBfdXNlcj0nK3BfdXNlcik7XG5cdFx0aWYgKCEocF9yb29tSWQgJiYgdHlwZW9mIHBfcm9vbUlkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Ol9pc1VzZXJQcmVzZW50SW5Sb29tKXBhcmFtZXRlciBwX3Jvb21pZCBpcyBpbmNvcnJlY3QuIEV4cGVjdGluZyBub24gZW1wdHkgc3RyaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghKHBfdXNlciAmJiB0eXBlb2YgcF91c2VyID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Ol9pc1VzZXJQcmVzZW50SW5Sb29tKXBhcmFtZXRlciBwX3VzZXIgaXMgaW5jb3JyZWN0LiBFeHBlY3Rpbmcgbm9uIGVtcHR5IHN0cmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIShwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyZWFjaDo6X2lzVXNlclByZXNlbnRJblJvb20pcGFyYW1ldGVyIHBfY2IgaXMgaW5jb3JyZWN0LiBpZiBkZWZpbmVkLCBleHBlY3RpbmcgYSBmdW5jdGlvbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgaXNVc2VyQWxyZWFkeVByZXNlbnRDQiA9IGZ1bmN0aW9uKHNuYXBzaG90KSB7XG5cdFx0XHR2YXIgd2FzUHJlc2VudCA9IChzbmFwc2hvdC52YWwoKSAhPT0gbnVsbCk7XG5cdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9pc1VzZXJQcmVzZW50SW5Sb29tKXBfcm9vbUlkPScrcF9yb29tSWQrJyxwX3VzZXI9JytwX3VzZXIrJyxyZXN1bHQ9Jyt3YXNQcmVzZW50KTtcblx0XHRcdHBfY2Iod2FzUHJlc2VudCxwX3Jvb21JZCxwX3VzZXIpO1xuXHRcdH07XG5cdFx0ZGF0YXJlZnMuZ2V0Um9vbXMoKS5jaGlsZChwX3Jvb21JZCkuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLmNoaWxkKHBfdXNlcikuY2hpbGQoJ3dhc0luc2lkZVJvb20nKS5vbmNlKCd2YWx1ZScsaXNVc2VyQWxyZWFkeVByZXNlbnRDQik7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBHYXRoZXIgdGhlIGludml0ZWVzIHRvIHRoZSByb29tLlxuXHQgKiBEZWZpbmVzIGEgY2FsbGJhY2sgdG8gdHJpZ2dlciBmb3IgSW52aXRlIGNoYW5nZXMsIGFuZCBjYWxscyBjYWxsYmFja3MgZm9yIHJvb20gaW52aXRlIGFjY2VwdGF0aW9uIG9yIHJlZnVzZS5cblx0ICogRm9yIGVhY2ggaW52aXRlZSBhIG5vZGUgaXMgY3JlYXRlZCBpbiB0aGUgZGF0YWJhc2UgYWJvdXQgdGhlIEludml0ZSBsaXN0LlxuXHQgKiBJbiBhZGR0aW9uLCBhIG5vZGUgaXMgY3JlYXRlZCB0b28gZm9yIGVhY2ggaW52aXRlZSBhYm91dCB0aGUgcGFydGljaXBhbnRMaXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcF9yb29tSWQgLSBUaGUgcm9vbSB1c2VkIGFzIHRoZSBuYW1lIG9mIGEgYnJhbmNoIGlzIHRoZSBkYXRhYmFzZVxuXHQgKiBAcGFyYW0ge2FycmF5W3N0aW5nXX0gcF9ndWVzdElkcyAtIEFuIGFycmF5IHBvc3Nlc3NpbmcgdGhlIGlkZW50aWZpZXJzIG9mIHRoZSBpbnZpdGVlc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcF90b3BpYyAtIGN1c3RvbSBtZXNzYWdlIGZvciBpbnZpdGF0aW9uXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfc3RhdHVzQ2hhbmdlZENiIC0gb3B0aW9uYWwgOiBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIGFuIGludml0ZWUgYWNjZXB0cy9yZWplY3RlZC9jYW5jZWxlZCB0aGUgSW52aXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBfaW52aXRlVG9Sb29tKHBfcm9vbUlkLCBwX2d1ZXN0SWRzLCBwX3RvcGljLHBfc3RhdHVzQ2hhbmdlZENiKSB7XG5cdFx0aWYgKCEocF9yb29tSWQgJiYgdHlwZW9mIHBfcm9vbUlkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Omludml0ZVRvUm9vbSlwYXJhbWV0ZXIgcF9yb29taWQgaXMgaW5jb3JyZWN0LiBFeHBlY3Rpbmcgbm9uIGVtcHR5IHN0cmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIShwX3RvcGljICYmIHR5cGVvZiBwX3RvcGljID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Omludml0ZVRvUm9vbSlwYXJhbWV0ZXIgcF90b3BpYyBpcyBpbmNvcnJlY3QuIEV4cGVjdGluZyBub24gZW1wdHkgc3RyaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwX3N0YXR1c0NoYW5nZWRDYiAmJiB0eXBlb2YgcF9zdGF0dXNDaGFuZ2VkQ2IgIT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tKXBhcmFtZXRlciBwX3N0YXR1c0NoYW5nZWRDYiBpcyBpbmNvcnJlY3QuIGlmIGRlZmluZWQsIGV4cGVjdGluZyBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmICghKHBfZ3Vlc3RJZHMgJiYgcF9ndWVzdElkcyBpbnN0YW5jZW9mIEFycmF5ICkpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJlYWNoOjppbnZpdGVUb1Jvb20pcGFyYW1ldGVyIHBfZ3Vlc3RJZHMgaXMgaW5jb3JyZWN0LiBFeHBlY3RpbmcgYW4gQXJyYXknKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGF0YXJlZnMuZ2V0Um9vbXMoKS5jaGlsZChwX3Jvb21JZCkuY2hpbGQoJ2NvbW1vbkRhdGFMaXN0JykudXBkYXRlKHtcblx0XHRcdHN0YXR1czpST09NX1NUQVRVU19PUEVOLFxuXHRcdFx0b3duZXI6bWVcblx0XHR9KTtcblxuXG5cdFx0dmFyIF9pc1VzZXJQcmVzZW50SW5Sb29tQ2I9ZnVuY3Rpb24oaXNBbHJlYWR5UHJlc2VudCxwX3Jvb21JZDIscF9ndWVzdElkMikge1xuXHRcdFx0aWYgKCFpc0FscmVhZHlQcmVzZW50KSB7XG5cdFx0XHRcdGRhdGFyZWZzLmdldFJvb21zKCkuY2hpbGQocF9yb29tSWQyKS5jaGlsZCgncGFydGljaXBhbnRMaXN0JykuY2hpbGQocF9ndWVzdElkMikudXBkYXRlKHtcblx0XHRcdFx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdHdhc0luc2lkZVJvb206IGZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgX0ludml0ZUNoYW5nZWRDYj0gZnVuY3Rpb24oc25hcHNob3QpIHtcblx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tOjpfSW52aXRlQ2hhbmdlZENiKScpO1xuXHRcdFx0aWYoc25hcHNob3QgJiYgc25hcHNob3QubmFtZSgpPT09J3N0YXR1cycpIHtcblx0XHRcdFx0dmFyIGNiX2d1ZXN0SWQyPSBzbmFwc2hvdC5yZWYoKS5wYXJlbnQoKS5wYXJlbnQoKS5uYW1lKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tOjpfSW52aXRlQ2hhbmdlZENiKWNiX2d1ZXN0SWQyPScrY2JfZ3Vlc3RJZDIpO1xuXHRcdFx0XHRpZiAobU91dGdvaW5nSW52aXRlcyAmJiAgbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF0gJiYgbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bY2JfZ3Vlc3RJZDJdICYmIG1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW2NiX2d1ZXN0SWQyXS5JbnZpdGVDaGFuZ2VkQ2IgKSB7XG5cdFx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bY2JfZ3Vlc3RJZDJdLkludml0ZURhdGFyZWYub2ZmKCdjaGlsZF9jaGFuZ2VkJyxtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVtjYl9ndWVzdElkMl0uSW52aXRlQ2hhbmdlZENiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzbmFwc2hvdC5yZWYoKS5wYXJlbnQoKS5vbmNlKCd2YWx1ZScsZnVuY3Rpb24oc25hcHNob3QyKSB7XG5cdFx0XHRcdFx0dmFyIGNiX3N0YXR1cyxjYl9ndWVzdElkLGNiX3Jvb21JZCxjYl9zdGF0dXNfaW5mbztcblx0XHRcdFx0XHRpZiAoc25hcHNob3QyKSB7XG5cdFx0XHRcdFx0XHRjYl9zdGF0dXM9IHNuYXBzaG90Mi52YWwoKS5zdGF0dXM7XG5cdFx0XHRcdFx0XHRjYl9yb29tSWQ9IHNuYXBzaG90Mi52YWwoKS5yb29tO1xuXHRcdFx0XHRcdFx0Y2Jfc3RhdHVzX2luZm89IHNuYXBzaG90Mi52YWwoKS5zdGF0dXNfaW5mbztcblx0XHRcdFx0XHRcdGNiX2d1ZXN0SWQ9IHNuYXBzaG90Mi5yZWYoKS5wYXJlbnQoKS5uYW1lKCk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Omludml0ZVRvUm9vbTo6X0ludml0ZUNoYW5nZWRDYilyb29tSWQ9JytjYl9yb29tSWQrJyBpbnZpdGVlPScrY2JfZ3Vlc3RJZCsgJyBuZXcgaW52aXRhdGlvbiBzdGF0dXM9JytjYl9zdGF0dXMrICcgc3RhdHVzIGluZm89JytjYl9zdGF0dXNfaW5mbyk7XG5cdFx0XHRcdFx0XHRpZiAobU91dGdvaW5nSW52aXRlcyYmICBtT3V0Z29pbmdJbnZpdGVzW2NiX3Jvb21JZF0gJiYgbU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdICYmIG1PdXRnb2luZ0ludml0ZXNbY2Jfcm9vbUlkXVtjYl9ndWVzdElkXS5JbnZpdGVEYXRhcmVmKSB7XG5cdFx0XHRcdFx0XHRcdG1PdXRnb2luZ0ludml0ZXNbY2Jfcm9vbUlkXVtjYl9ndWVzdElkXS5JbnZpdGVEYXRhcmVmLm9uRGlzY29ubmVjdCgpLmNhbmNlbCgpO1xuLy8gICBcdCAgICAgICAgICAgICAgICAgICAgXHRpZiAobU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdLkludml0ZVJlbW92ZUNiKVxuLy8gICBcdFx0XHRcdCAgICAgICAgIFx0XHRtT3V0Z29pbmdJbnZpdGVzW2NiX3Jvb21JZF1bY2JfZ3Vlc3RJZF0uSW52aXRlRGF0YXJlZi5wYXJlbnQoKS5vZmYoXCJjaGlsZF9yZW1vdmVkXCIsbU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdLkludml0ZVJlbW92ZUNiKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1PdXRnb2luZ0ludml0ZXNbY2Jfcm9vbUlkXVtjYl9ndWVzdElkXS5zdGF0dXNDaGFuZ2VkQ2IgJiYgdHlwZW9mIG1PdXRnb2luZ0ludml0ZXNbY2Jfcm9vbUlkXVtjYl9ndWVzdElkXS5zdGF0dXNDaGFuZ2VkQ2IgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRcdG1PdXRnb2luZ0ludml0ZXNbY2Jfcm9vbUlkXVtjYl9ndWVzdElkXS5zdGF0dXNDaGFuZ2VkQ2IoY2Jfcm9vbUlkLGNiX2d1ZXN0SWQsY2Jfc3RhdHVzLGNiX3N0YXR1c19pbmZvKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OnJlYWNoOjppbnZpdGVUb1Jvb206Ol9JbnZpdGVDaGFuZ2VkQ2IpY2Fubm90IHJldHJpZXZlIG1hdGhpbmcgcF9zdGF0dXNDaGFuZ2VkQ2InKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgbU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tOjpfSW52aXRlQ2hhbmdlZENiKWNhbm5vdCByZXRyaWV2ZSBtYXRoaW5nIG1PdXRnb2luZ0ludml0ZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OnJlYWNoOjppbnZpdGVUb1Jvb206Ol9JbnZpdGVDaGFuZ2VkQ2IpY2Fubm90IHJldHJpZXZlIGludml0YXRpb24nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmb3IgKHZhciBpPTA7IGk8cF9ndWVzdElkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG1HdWVzdElkPXBfZ3Vlc3RJZHNbaV07XG5cdFx0XHRpZiAoIShtR3Vlc3RJZCAmJiB0eXBlb2YgbUd1ZXN0SWQgPT0gJ3N0cmluZycpKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJlYWNoOjppbnZpdGVUb1Jvb20pcGFyYW1ldGVyIHBfZ3Vlc3RJZHNbJytpKyddIGlzIGluY29ycmVjdC4gRXhwZWN0aW5nIG5vbiBlbXB0eSBzdHJpbmcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tKXJvb21JZD0nK3Bfcm9vbUlkKycgaW52aXRlZT0nK21HdWVzdElkLnRvU3RyaW5nKCkpO1xuXG5cdFx0XHRcdGlmIChtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXSAmJiBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0pIHtcblx0XHRcdFx0XHQvL2ludml0YXRpb24gaXMgYWxyZWFkeSBleGlzdGluZyAtPiBjYW5jZWwgaXRcblx0XHRcdFx0XHQvL2lmIChtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZiAmJiBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlUmVtb3ZlQ2IpICBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZi5vZmYoXCJjaGlsZF9yZW1vdmVkXCIsbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZVJlbW92ZUNiKTtcblx0XHRcdFx0XHQvL2lmIChtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZiAmJiBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlQ2hhbmdlZENiKSBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZi5vZmYoXCJjaGlsZF9jaGFuZ2VkXCIsbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZUNoYW5nZWRDYik7XG5cdFx0XHRcdFx0X2NhbmNlbEludml0YXRpb24ocF9yb29tSWQsIFttR3Vlc3RJZF0sZnVuY3Rpb24ocF9ndWVzdElkKXtcblx0XHRcdFx0XHRcdGlmIChwX2d1ZXN0SWQgJiYgcF9ndWVzdElkPT09bUd1ZXN0SWQpIHtcblx0XHRcdFx0XHRcdFx0X2ludml0ZVRvUm9vbShwX3Jvb21JZCwgW3BfZ3Vlc3RJZF0sIHBfdG9waWMscF9zdGF0dXNDaGFuZ2VkQ2IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIW1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdKSB7XG5cdFx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF09W107XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9pZiAoIW1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW21HdWVzdElkXSkge1xuXHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF09e307XG5cdFx0XHRcdC8vfVxuXG5cdFx0XHRcdF9pc1VzZXJQcmVzZW50SW5Sb29tKHBfcm9vbUlkLG1HdWVzdElkLF9pc1VzZXJQcmVzZW50SW5Sb29tQ2IpO1xuXG5cdFx0XHRcdG1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW21HdWVzdElkXS5JbnZpdGVEYXRhcmVmICA9ICBkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKG1HdWVzdElkKS5wdXNoKHtcblx0XHRcdFx0XHRmcm9tOm1lLFxuXHRcdFx0XHRcdHJvb206cF9yb29tSWQsXG5cdFx0XHRcdFx0dGltZXN0YW1wX2NyZWF0aW9uOldlYmNvbS5TZXJ2ZXJWYWx1ZS5USU1FU1RBTVAsXG5cdFx0XHRcdFx0dG9waWM6cF90b3BpYyxcblx0XHRcdFx0XHRzdGF0dXM6SU5WSVRBVElPTl9PTkdPSU5HXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Omludml0ZVRvUm9vbSlJbnZpdGVEYXRhcmVmPScrbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZURhdGFyZWYudG9TdHJpbmcoKSk7XG5cblx0XHRcdFx0Ly9tT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlUmVtb3ZlQ2I9X0ludml0YXRpb25SZW1vdmVDYjtcblx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZUNoYW5nZWRDYj1fSW52aXRlQ2hhbmdlZENiO1xuXHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZi5vbignY2hpbGRfY2hhbmdlZCcsbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZUNoYW5nZWRDYik7XG5cdFx0XHRcdC8vbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZURhdGFyZWYucGFyZW50KCkub24oXCJjaGlsZF9yZW1vdmVkXCIsbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLkludml0ZVJlbW92ZUNiKTtcblx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bbUd1ZXN0SWRdLnN0YXR1c0NoYW5nZWRDYj1wX3N0YXR1c0NoYW5nZWRDYjtcblxuXHRcdFx0XHQvLyBjYW5jZWxlZCBJbnZpdGUgb24gZGlzY29ubmVjdGlvblxuXHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVttR3Vlc3RJZF0uSW52aXRlRGF0YXJlZi5vbkRpc2Nvbm5lY3QoKS51cGRhdGUoe1xuXHRcdFx0XHRcdHRpbWVzdGFtcF9lbmQ6V2ViY29tLlNlcnZlclZhbHVlLlRJTUVTVEFNUCxcblx0XHRcdFx0XHRzdGF0dXM6SU5WSVRBVElPTl9DQU5DRUxFRFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2FuY2VscyB0aGUgSW52aXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwX3Jvb21JZCAtIFRoZSByb29tIElkIG9mIHRoZSBJbnZpdGVcblx0ICogQHBhcmFtIHthcnJheVtzdGluZ119IHBfZ3Vlc3RJZHMgLSBvcHRpb25hbCA6IEFuIGFycmF5IHBvc3Nlc3NpbmcgdGhlIGlkZW50aWZpZXJzIG9mIHRoZSBpbnZpdGVlcy4gKGlmIHVuZGVmaW5lZCAsICBhbGwgaW52aXRlZSB3aWxsIGhhdmUgdGhlaXIgSW52aXRlIGNhbmNlbGVkKVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaW52aXRlSWQgLSBUaGUgaW52aXRlIGlkZW50aWZpZXJcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlIC4gdGhpcyBjYWxsYmFjayB3aWxsIGNvbnRhaW50IGFzIHBhcmFtZXRlciB0aGUgcmVsYXRlZCBndWVzdElkXG5cdCAqL1xuXHRmdW5jdGlvbiBfY2FuY2VsSW52aXRhdGlvbihwX3Jvb21JZCwgcF9ndWVzdElkcyxwX2NiKSB7XG5cdFx0aWYgKCEocF9yb29tSWQgJiYgdHlwZW9mIHBfcm9vbUlkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Ol9jYW5jZWxJbnZpdGF0aW9uKXBhcmFtZXRlciBwX3Jvb21pZCBpcyBpbmNvcnJlY3QuIEV4cGVjdGluZyBub24gZW1wdHkgc3RyaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwX2d1ZXN0SWRzICYmICEgcF9ndWVzdElkcyBpbnN0YW5jZW9mIEFycmF5ICkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Ol9jYW5jZWxJbnZpdGF0aW9uKXBhcmFtZXRlciBwX2d1ZXN0SWRzIGlzIGluY29ycmVjdC4gRXhwZWN0aW5nIGFuIEFycmF5Jyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6X2NhbmNlbEludml0YXRpb24pcF9yb29tSWQ9JytwX3Jvb21JZCsnLHBfZ3Vlc3RJZHM9JytKU09OLnN0cmluZ2lmeShwX2d1ZXN0SWRzKSk7XG5cdFx0aWYgKG1PdXRnb2luZ0ludml0ZXMgJiYgbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF0pIHtcblx0XHRcdGlmIChwX2d1ZXN0SWRzKSB7XG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaTxwX2d1ZXN0SWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGd1ZXN0SWQ9cF9ndWVzdElkc1tpXTtcblx0XHRcdFx0XHRpZiAoIShndWVzdElkICYmIHR5cGVvZiBndWVzdElkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Omludml0ZVRvUm9vbSlwYXJhbWV0ZXIgcF9ndWVzdElkc1snK2krJ10gaXMgaW5jb3JyZWN0LiBFeHBlY3Rpbmcgbm9uIGVtcHR5IHN0cmluZycpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAobU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bZ3Vlc3RJZF0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKG1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW2d1ZXN0SWRdLkludml0ZURhdGFyZWYpIHtcblx0XHRcdFx0XHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVtndWVzdElkXS5JbnZpdGVEYXRhcmVmLm9uRGlzY29ubmVjdCgpLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVtndWVzdElkXS5JbnZpdGVDaGFuZ2VkQ2IgJiYgdHlwZW9mIG1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW2d1ZXN0SWRdLkludml0ZUNoYW5nZWRDYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVtndWVzdElkXS5JbnZpdGVEYXRhcmVmLm9mZignY2hpbGRfY2hhbmdlZCcsbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bZ3Vlc3RJZF0uSW52aXRlQ2hhbmdlZENiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXVtndWVzdElkXS5JbnZpdGVEYXRhcmVmLm9uY2UoJ3ZhbHVlJyxmdW5jdGlvbihkYXRhU25hcHNob3QpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNiX3N0YXR1cyxjYl9ndWVzdElkLGNiX3Jvb21JZDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhU25hcHNob3QgJiYgZGF0YVNuYXBzaG90LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNiX3N0YXR1cz0gZGF0YVNuYXBzaG90LnZhbCgpLnN0YXR1cztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2Jfcm9vbUlkPSBkYXRhU25hcHNob3QudmFsKCkucm9vbTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2JfZ3Vlc3RJZD0gZGF0YVNuYXBzaG90LnJlZigpLnBhcmVudCgpLm5hbWUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNiX3N0YXR1cyAmJiBjYl9zdGF0dXM9PT1JTlZJVEFUSU9OX09OR09JTkcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtT3V0Z29pbmdJbnZpdGVzW2NiX3Jvb21JZF1bY2JfZ3Vlc3RJZF0uSW52aXRlRGF0YXJlZi51cGRhdGUoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGltZXN0YW1wX2VuZDpXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzOklOVklUQVRJT05fQ0FOQ0VMRURcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdLnN0YXR1c0NoYW5nZWRDYiAmJiB0eXBlb2YgbU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdLnN0YXR1c0NoYW5nZWRDYiA9PSAnZnVuY3Rpb24nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1tjYl9yb29tSWRdW2NiX2d1ZXN0SWRdLnN0YXR1c0NoYW5nZWRDYihjYl9yb29tSWQsY2JfZ3Vlc3RJZCxJTlZJVEFUSU9OX0NBTkNFTEVEKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9jYW5jZWxJbnZpdGF0aW9uKWRlbGV0aW5nIEludml0ZSB0byByb29tICcrY2Jfcm9vbUlkKycgZm9yIGludml0ZWUgJytjYl9ndWVzdElkKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OnJlYWNoOjpfY2FuY2VsSW52aXRhdGlvbiljYW5ub3QgZGVsZXRlIGludGl2YXRpb24gdG8gcm9vbSAnK2NiX3Jvb21JZCsnIGZvciBndWVzdCAnK2NiX2d1ZXN0SWQrJyBJbnZpdGF0aW9uIGhhcyBiZWVuIHJlbW92ZWQvcmVqZWN0ZWQvYWNjZXB0ZWQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIG1PdXRnb2luZ0ludml0ZXNbcF9yb29tSWRdW2d1ZXN0SWRdO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHBfY2IgJiYgdHlwZW9mIHBfY2I9PSdmdW5jdGlvbicpIHBfY2IoZ3Vlc3RJZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgbU91dGdvaW5nSW52aXRlc1twX3Jvb21JZF1bZ3Vlc3RJZF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBfY2IgJiYgdHlwZW9mIHBfY2I9PSdmdW5jdGlvbicpIHBfY2IoZ3Vlc3RJZCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHBfY2IgJiYgdHlwZW9mIHBfY2I9PSdmdW5jdGlvbicpIHBfY2IoZ3Vlc3RJZCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgaW52aXRlZSBpbiBtT3V0Z29pbmdJbnZpdGVzW3Bfcm9vbUlkXSkge1xuXHRcdFx0XHRcdF9jYW5jZWxJbnZpdGF0aW9uKHBfcm9vbUlkLCBbaW52aXRlZV0scF9jYik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjpyZWFjaDo6X2NhbmNlbEludml0YXRpb24pIEludml0ZSB0byByb29tICcrcF9yb29tSWQrJyBub3QgZm91bmQnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTWFrZXMgYW4gaW52aXRlIGFjY2VwdGVkLCBhbmQgZGVmaW5lcyB0aGUgXCJhY2NlcHRlZFwiIGZsYWcgb2YgdGhpcyBpbnZpdGUgYXQgdHJ1ZSBpbiB0aGUgZGF0YWJhc2UuXG5cdCAqIEBwYXJhbSBwX2ludml0YXRpb24gLVxuXHQgKi9cblx0ZnVuY3Rpb24gX2FjY2VwdEludml0YXRpb24ocF9pbnZpdGF0aW9uKSB7XG5cdFx0dmFyIGludml0ZUlkPU9iamVjdC5rZXlzKHBfaW52aXRhdGlvbilbMF07XG5cdFx0aWYgKCFpbnZpdGVJZCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cmVhY2g6Ol9hY2NlcHRJbnZpdGF0aW9uKXBhcmFtZXRlciBwX2ludml0YXRpb24gaXMgaW5jb3JyZWN0LiBjYW5ub3QgZ2V0IGludml0YXRpb24gSWQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFwX2ludml0YXRpb25baW52aXRlSWRdKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyZWFjaDo6X2FjY2VwdEludml0YXRpb24pcGFyYW1ldGVyIHBfaW52aXRhdGlvbiBpcyBpbmNvcnJlY3QuIGNhbm5vdCBnZXQgaW52aXRhdGlvbiBkYXRhJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRhdGFyZWYuY2hpbGQoJ2ludml0YXRpb25MaXN0JykuY2hpbGQobWUpLmNoaWxkKGludml0ZUlkKS5vbmNlKCd2YWx1ZScsZnVuY3Rpb24oZGF0YVNuYXBzaG90KSB7XG5cdFx0XHR2YXIgY2Jfc3RhdHVzLFxuXHRcdFx0XHRjYl9ndWVzdElkLFxuXHRcdFx0XHRjYl9pbnZpdGF0aW9uSWQ7XG5cblx0XHRcdGlmIChkYXRhU25hcHNob3QgJiYgZGF0YVNuYXBzaG90LnZhbCgpKSB7XG5cdFx0XHRcdGNiX2ludml0YXRpb25JZD1kYXRhU25hcHNob3QubmFtZSgpO1xuXHRcdFx0XHRjYl9zdGF0dXM9IGRhdGFTbmFwc2hvdC52YWwoKS5zdGF0dXM7XG5cdFx0XHRcdGNiX2d1ZXN0SWQ9IGRhdGFTbmFwc2hvdC5yZWYoKS5wYXJlbnQoKS5uYW1lKCk7XG5cdFx0XHRcdGlmIChjYl9zdGF0dXMgJiYgY2Jfc3RhdHVzPT09SU5WSVRBVElPTl9PTkdPSU5HKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfYWNjZXB0SW52aXRhdGlvbilpbnZpdGVJZD0nK2ludml0ZUlkKycsZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBfaW52aXRhdGlvbltpbnZpdGVJZF0pKTtcblx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKGNiX2d1ZXN0SWQpLmNoaWxkKGNiX2ludml0YXRpb25JZCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcF9lbmQ6V2ViY29tLlNlcnZlclZhbHVlLlRJTUVTVEFNUCxcblx0XHRcdFx0XHRcdHN0YXR1czpJTlZJVEFUSU9OX0FDQ0VQVEVEXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjpyZWFjaDo6X2FjY2VwdEludml0YXRpb24paW52aXRlSWQ9JytjYl9pbnZpdGF0aW9uSWQrJyxkYXRhPScrSlNPTi5zdHJpbmdpZnkocF9pbnZpdGF0aW9uW2ludml0ZUlkXSkrJywgY2Fubm90IGJlIGFjY2VwdGVkLiBJdCBoYXMgYmVlbiByZW1vdmVkIG9yIGNhbmNlbGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWZ1c2VzIHRoZSBpbnZpdGUgYW5kIHNldCB0aGUgXCJhY2NlcHRlZFwiIGZsYWcgb2YgdGhpcyBpbnZpdGUgaW4gdGhlIGRhdGFiYXNlIHRvIGZhbHNlXG5cdCAqIEBwYXJhbSBwX2ludml0YXRpb24gLSBUaGUgaW52aXRlIGRhdGFcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBfcmVhc29uIC0gb3B0aW9uYWwgaW5mbyBhYm91dCB0aGUgcmVqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiBfcmVqZWN0SW52aXRhdGlvbihwX2ludml0YXRpb24scF9yZWFzb24pIHtcblx0XHR2YXIgaW52aXRlSWQ9T2JqZWN0LmtleXMocF9pbnZpdGF0aW9uKVswXTtcblx0XHRpZiAoIWludml0ZUlkKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyZWFjaDo6X3JlamVjdEludml0YXRpb24pcGFyYW1ldGVyIHBfaW52aXRhdGlvbiBpcyBpbmNvcnJlY3QuIGNhbm5vdCBnZXQgaW52aXRhdGlvbiBJZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXBfaW52aXRhdGlvbltpbnZpdGVJZF0pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJlYWNoOjpfcmVqZWN0SW52aXRhdGlvbilwYXJhbWV0ZXIgcF9pbnZpdGF0aW9uIGlzIGluY29ycmVjdC4gY2Fubm90IGdldCBpbnZpdGF0aW9uIGRhdGEnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGF0YXJlZi5jaGlsZCgnaW52aXRhdGlvbkxpc3QnKS5jaGlsZChtZSkuY2hpbGQoaW52aXRlSWQpLm9uY2UoJ3ZhbHVlJyxmdW5jdGlvbihkYXRhU25hcHNob3QpIHtcblx0XHRcdHZhciBjYl9zdGF0dXMsY2JfZ3Vlc3RJZCxjYl9pbnZpdGF0aW9uSWQ7XG5cdFx0XHRpZiAoZGF0YVNuYXBzaG90ICYmIGRhdGFTbmFwc2hvdC52YWwoKSkge1xuXHRcdFx0XHRjYl9pbnZpdGF0aW9uSWQ9ZGF0YVNuYXBzaG90Lm5hbWUoKTtcblx0XHRcdFx0Y2Jfc3RhdHVzPSBkYXRhU25hcHNob3QudmFsKCkuc3RhdHVzO1xuXHRcdFx0XHRjYl9ndWVzdElkPSBkYXRhU25hcHNob3QucmVmKCkucGFyZW50KCkubmFtZSgpO1xuXHRcdFx0XHRpZiAoY2Jfc3RhdHVzICYmIGNiX3N0YXR1cz09PUlOVklUQVRJT05fT05HT0lORykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyZWFjaDo6X3JlamVjdEludml0YXRpb24paW52aXRlSWQ9JytpbnZpdGVJZCsnLGRhdGE9JytKU09OLnN0cmluZ2lmeShwX2ludml0YXRpb25baW52aXRlSWRdKSk7XG5cdFx0XHRcdFx0aWYgKHBfcmVhc29uKSB7XG5cdFx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKGNiX2d1ZXN0SWQpLmNoaWxkKGNiX2ludml0YXRpb25JZCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdFx0dGltZXN0YW1wX2VuZDpXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXNfaW5mbzpwX3JlYXNvbixcblx0XHRcdFx0XHRcdFx0c3RhdHVzOklOVklUQVRJT05fUkVKRUNURURcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKGNiX2d1ZXN0SWQpLmNoaWxkKGNiX2ludml0YXRpb25JZCkudXBkYXRlKHtcblx0XHRcdFx0XHRcdFx0dGltZXN0YW1wX2VuZDpXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXM6SU5WSVRBVElPTl9SRUpFQ1RFRFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignKHdlYmNvbVNESzo6cmVhY2g6Ol9yZWplY3RJbnZpdGF0aW9uKWludml0ZUlkPScrY2JfaW52aXRhdGlvbklkKycsZGF0YT0nK0pTT04uc3RyaW5naWZ5KHBfaW52aXRhdGlvbltpbnZpdGVJZF0pKycsIGNhbm5vdCBiZSByZWplY3RlZC4gSXQgaGFzIGJlZW4gcmVtb3ZlZCBvciBjYW5jZWxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogbW92ZSBhbGwgdGhlIG5vbiBhY3RpdmUgaW52aXRhdGlvbnMgcHJvY2Vzc2VkIG9mIGFuIHVzZXIgdG8gdGhlIGludml0YXRpb24gTGlzdCBIaXN0b3J5OlxuXHQgKiBBbGwgaW52aXRhdGlvbnMgd2l0aCBzdGF0dXMgQ2FuY2VsZWQgb3IgUmVqZWN0ZWQgd2lsbCBiZSBhcmNoaXZlZFxuXHQgKiBBbGwgaW52aXRhdGlvbiB3aXRoIHN0YXR1cyBPbmdvaW5nIG9yIEFjY2VwdGVkIFdpbGwgYmUgYXJjaGl2ZWQgaWYgdGhlIGNvcnJlc3BvbmRpbmcgcm9vbSBpcyBjbG9zZWRcblx0ICogSWYgYW4gaW52aXRhdGlvbiB3aXRoIHN0YXR1cyBcIk9uZ29pbmdcIiBpcyBhcmNoaXZlZCwgaXRzIHN0YXR1cyB3aWxsIGJlIHNldCB0byBjYW5jZWxlZFxuXHQgKiBAcGFyYW0gdXNlciAtIFRoZSB1c2VyIElkXG5cdCAqIEBwYXJhbSBwX2NiIC0gVGhpcyBjYWxsYmFjayBpcyB0cmlnZ2VyIHdoZW4gYXJjaGl2ZSBpcyBjb21wbGV0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gX2FyY2hpdmVJbnZpdGF0aW9ucyhwX3VzZXJJZCxwX2NiKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfYXJjaGl2ZUludml0YXRpb25zKXVzZXJJZD0nK3BfdXNlcklkKTtcblx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdCcpLmNoaWxkKG1lKS5vbmNlKCd2YWx1ZScsZnVuY3Rpb24oc25hcHNob3QpIHtcblx0XHRcdGlmIChzbmFwc2hvdCAmJiBzbmFwc2hvdC5oYXNDaGlsZHJlbigpKSB7XG5cdFx0XHRcdHZhciBuYkNoaWxkcmVuID0gc25hcHNob3QubnVtQ2hpbGRyZW4oKTtcblx0XHRcdFx0dmFyIG5iQ2hpbGRyZW5Qcm9jZXNzZWQgPSAwO1xuXHRcdFx0XHRzbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkU25hcHNob3QpIHtcblx0XHRcdFx0XHRpZiAoY2hpbGRTbmFwc2hvdCAmJiBjaGlsZFNuYXBzaG90LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9hcmNoaXZlSW52aXRhdGlvbnMpdXNlcklkPScrcF91c2VySWQrICcgaW52aXRlSWQ9JytjaGlsZFNuYXBzaG90Lm5hbWUoKSk7XG5cdFx0XHRcdFx0XHRpZiAoY2hpbGRTbmFwc2hvdC52YWwoKS5zdGF0dXM9PT1JTlZJVEFUSU9OX1JFSkVDVEVEIHx8IGNoaWxkU25hcHNob3QudmFsKCkuc3RhdHVzPT09SU5WSVRBVElPTl9DQU5DRUxFRCApIHtcblx0XHRcdFx0XHRcdFx0ZGF0YXJlZi5jaGlsZCgnaW52aXRhdGlvbkxpc3RIaXN0b3J5JykuY2hpbGQocF91c2VySWQpLmNoaWxkKGNoaWxkU25hcHNob3QubmFtZSgpKS51cGRhdGUoY2hpbGRTbmFwc2hvdC52YWwoKSk7XG5cdFx0XHRcdFx0XHRcdGNoaWxkU25hcHNob3QucmVmKCkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdG5iQ2hpbGRyZW5Qcm9jZXNzZWQrKztcblx0XHRcdFx0XHRcdFx0aWYgKG5iQ2hpbGRyZW5Qcm9jZXNzZWQ+PW5iQ2hpbGRyZW4gJiYgcF9jYiAmJiB0eXBlb2YgcF9jYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRcdFx0cF9jYigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgaW52aXRlRGF0YT17fTtcblx0XHRcdFx0XHRcdFx0aW52aXRlRGF0YVtjaGlsZFNuYXBzaG90Lm5hbWUoKV09Y2hpbGRTbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0XHRcdFx0dmFyIGNiMiA9IGZ1bmN0aW9uKGlzQWN0aXZlKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzQWN0aXZlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYkNoaWxkcmVuUHJvY2Vzc2VkKys7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobmJDaGlsZHJlblByb2Nlc3NlZD49bmJDaGlsZHJlbiAmJiBwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cF9jYigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRTbmFwc2hvdC52YWwoKS5zdGF0dXM9PT1JTlZJVEFUSU9OX09OR09JTkcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld1ZhbHVlPWNoaWxkU25hcHNob3QudmFsKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlLnN0YXR1cz1JTlZJVEFUSU9OX0NBTkNFTEVEO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdEhpc3RvcnknKS5jaGlsZChwX3VzZXJJZCkuY2hpbGQoY2hpbGRTbmFwc2hvdC5uYW1lKCkpLnNldChuZXdWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnZpdGF0aW9uTGlzdEhpc3RvcnknKS5jaGlsZChwX3VzZXJJZCkuY2hpbGQoY2hpbGRTbmFwc2hvdC5uYW1lKCkpLnNldChjaGlsZFNuYXBzaG90LnZhbCgpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkU25hcHNob3QucmVmKCkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYkNoaWxkcmVuUHJvY2Vzc2VkKys7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobmJDaGlsZHJlblByb2Nlc3NlZD49bmJDaGlsZHJlbiAmJiBwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cF9jYigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0X2lzUm9vbUFjdGl2ZShpbnZpdGVEYXRhLGNiMik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0cF9jYigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRwX2NiKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNoZWNrIGlmIHRoZSByb29tIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGludml0YXRpb24gaXMgYWN0aXZlXG5cdCAqIEBwYXJhbSBwX2ludml0YXRpb24gLSBUaGUgaW52aXRhdGlvbiBEYXRhXG5cdCAqIEBwYXJhbSBwX2NiIC0gVGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgdG8gZ2V0IHRoZSByZXN1bHQuIHRoaXMgY2FsbGJhY2sgd2lsbCBjb250YWlucyB0aGUgcGFyYW1ldGVyIHRydWUgaXMgdGhlIHJvb20gaXMgYWN0aXZlXG5cdCAqL1xuXHRmdW5jdGlvbiBfaXNSb29tQWN0aXZlKHBfaW52aXRhdGlvbixwX2NiKSB7XG5cdFx0aWYgKHBfaW52aXRhdGlvbiAmJiBwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHZhciBpbnZpdGVJZCA9IE9iamVjdC5rZXlzKHBfaW52aXRhdGlvbilbMF07XG5cdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9pc1Jvb21BY3RpdmUpaW52aXRlSWQ9JytpbnZpdGVJZCk7XG5cdFx0XHR2YXIgcm9vbUlkID0gcF9pbnZpdGF0aW9uW2ludml0ZUlkXS5yb29tO1xuXHRcdFx0dmFyIG9uUm9vbVN0YXR1cyA9IGZ1bmN0aW9uKHNuYXBzaG90KSB7XG5cdFx0XHRcdGlmIChzbmFwc2hvdCAmJiBzbmFwc2hvdC52YWwoKSAmJiBzbmFwc2hvdC52YWwoKT09PVJPT01fU1RBVFVTX09QRU4pIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9pc1Jvb21BY3RpdmUpaW52aXRlSWQ9JytpbnZpdGVJZCsgJyByZXN1bHQ9dHJ1ZScpO1xuXHRcdFx0XHRcdHBfY2IodHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJlYWNoOjpfaXNSb29tQWN0aXZlKWludml0ZUlkPScraW52aXRlSWQrICcgcmVzdWx0PWZhbHNlJyk7XG5cdFx0XHRcdFx0cF9jYihmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkYXRhcmVmcy5nZXRSb29tcygpLmNoaWxkKHJvb21JZCkuY2hpbGQoJ2NvbW1vbkRhdGFMaXN0JykuY2hpbGQoJ3N0YXR1cycpLm9uY2UoJ3ZhbHVlJyxvblJvb21TdGF0dXMpO1xuXHRcdH1cblx0fVxuXG5cblxuXG5cdC8qKlxuXHQgKiBDbG9zZSB0aGUgcmVhY2ggc2VydmljZSxcblx0ICogZGlzYWJsZXMgYW5kIGRlbGV0ZXMgYW55IGxpc3RlbmVycy9jYWxsYmFjayBkZWZpbmVkLlxuXHQgKiBjYW5jZWwgYWxsIG91dGdvaW5nIGludml0ZSBub3QgYWxyZWFkeSBwcm9jZXNzZWRcblx0ICogZG8gbm90IGltcGFjdCBpbmNvbWluZyBpbnZpdGVcblx0ICovXG5cdGZ1bmN0aW9uIF9jbG9zZSgpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cmVhY2g6Ol9jbG9zZSknKTtcblxuXHRcdGlmIChuZXdJbnZpdGVDYikge1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgnaW52aXRhdGlvbkxpc3QnKS5jaGlsZChtZSkub2ZmKCdjaGlsZF9hZGRlZCcsbmV3SW52aXRlQ2IpO1xuXHRcdFx0bmV3SW52aXRlQ2I9bnVsbDtcblx0XHR9XG4vL1x0XHRpZiAob25Sb29tSW52aXRlQ2hhbmdlZENiKSB7XG4vL1x0XHRcdGRhdGFyZWYuY2hpbGQoXCJpbnZpdGF0aW9uTGlzdFwiKS5jaGlsZChtZSkub2ZmKFwiY2hpbGRfY2hhbmdlZFwiLEludml0ZUNoYW5nZWRDYik7XG4vL1x0XHRcdG9uUm9vbUludml0ZUNoYW5nZWRDYj1udWxsO1xuLy9cdFx0fVxuLy9cbi8vXHRcdGlmIChtVGltZW91dE9uTmV3SW52aXRlQ2IpIHtcbi8vXHRcdFx0ZGF0YXJlZi5jaGlsZChcImludml0YXRpb25MaXN0XCIpLmNoaWxkKG1lKS5vZmYoXCJjaGlsZF9hZGRlZFwiLG1UaW1lb3V0T25OZXdJbnZpdGVDYik7XG4vL1x0XHRcdG1UaW1lb3V0T25OZXdJbnZpdGVDYj1udWxsO1xuLy9cdFx0fVxuLy9cdFx0aWYgKG1UaW1lb3V0T25JbnZpdGVDaGFuZ2VkQ2IpIHtcbi8vXHRcdFx0ZGF0YXJlZi5jaGlsZChcImludml0YXRpb25MaXN0XCIpLmNoaWxkKG1lKS5vZmYoXCJjaGlsZF9jaGFuZ2VkXCIsbVRpbWVvdXRPbkludml0ZUNoYW5nZWRDYik7XG4vL1x0XHRcdG1UaW1lb3V0T25JbnZpdGVDaGFuZ2VkQ2I9bnVsbDtcbi8vXHRcdH1cblxuXHRcdGlmIChvblVzZXJBZGRlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9mZignY2hpbGRfYWRkZWQnLG9uVXNlckFkZGVkQ2IpO1xuXHRcdFx0b25Vc2VyQWRkZWRDYj1udWxsO1xuXHRcdH1cblx0XHRpZiAob25Vc2VyQ2hhbmdlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9mZignY2hpbGRfY2hhbmdlZCcsb25Vc2VyQ2hhbmdlZENiKTtcblx0XHRcdG9uVXNlckNoYW5nZWRDYj1udWxsO1xuXHRcdH1cblx0XHRpZiAob25Vc2VyUmVtb3ZlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCd1c2VyTGlzdCcpLm9mZignY2hpbGRfcmVtb3ZlZCcsb25Vc2VyUmVtb3ZlZENiKTtcblx0XHRcdG9uVXNlclJlbW92ZWRDYj1udWxsO1xuXHRcdH1cblxuXHRcdGlmIChtT3V0Z29pbmdJbnZpdGVzKSB7XG5cblx0XHRcdG1PdXRnb2luZ0ludml0ZXMuZm9yRWFjaChmdW5jdGlvbihyb29tSWQpIHtcblx0XHRcdFx0bU91dGdvaW5nSW52aXRlc1tyb29tSWRdLmZvckVhY2goZnVuY3Rpb24oaW52aXRlZSkge1xuXHRcdFx0XHRcdGlmIChpbnZpdGVlLkludml0ZURhdGFyZWYpIHtcblx0XHRcdFx0XHRcdGludml0ZWUuSW52aXRlRGF0YXJlZi5vbkRpc2Nvbm5lY3QoKS5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdGludml0ZWUuSW52aXRlRGF0YXJlZi51cGRhdGUoe1xuXHRcdFx0XHRcdFx0XHRzdGF0dXM6SU5WSVRBVElPTl9DQU5DRUxFRCxcblx0XHRcdFx0XHRcdFx0dGltZXN0YW1wX2VuZDpXZWJjb20uU2VydmVyVmFsdWUuVElNRVNUQU1QXG5cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdG1PdXRnb2luZ0ludml0ZXM9W107XG5cdFx0fVxuXG5cdFx0aWYgKGF1dG9tYXRpY1JlamVjdFRpbWVPdXQpIGF1dG9tYXRpY1JlamVjdFRpbWVPdXQ9bnVsbDtcblx0XHRpZiAoYXV0b21hdGljUmVqZWN0UmVhc29uKSBhdXRvbWF0aWNSZWplY3RSZWFzb249bnVsbDtcblxuXHRcdGlmIChtRGV2aWNlSWQpIHtcblx0XHRcdG1EZXZpY2VJZC5yZW1vdmUoKTtcblx0XHRcdG1EZXZpY2VJZD1udWxsO1xuXHRcdH1cblxuXHR9XG5cblx0aW5pdCgpO1xuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHVzZXIgaWRlbnRpZmllciB1c2VkIGluIHRoZSBkYXRhYmFzZS4gVGhpcyB2YWx1ZVxuXHRcdCAqIGlkZW50aWZpZXMgdGhlIHVzZXIgaWYgdGhlIFdlYmNvbWJhc2UuXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB1c2VyIElEXG5cdFx0ICovXG5cdFx0Z2V0TWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG1lO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogY2hlY2sgaWYgYSB1c2VyIGlzIGNvbm5lY3RlZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwX3VzZXJJZCAtIHRoZSB1c2VyIElkXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIHRoZSBjYWxsYmFjayB0cmlnZ2VycyB0byByZXR1cm4gdGhlIHJlc3VsdC4gVGhlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCBpbiBwYXJhbWV0ZXIgYXMgYm9vbGVhbiA6IHRydWUgPSBjb25uZWN0ZWQgLyBmYWxzZSA9IG5vdCBjb25uZWN0ZWRcblx0XHQgKi9cblx0XHRpc0Nvbm5lY3RlZDogZnVuY3Rpb24ocF91c2VySWQscF9jYikge1xuXHRcdFx0X2lzQ29ubmVjdGVkKHBfdXNlcklkLHBfY2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogY2hlY2sgaWYgYSB1c2VyIGlzIHJlZ2lzdGVyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBfdXNlcklkIC0gdGhlIHVzZXIgSWRcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwX2NiIC0gdGhlIGNhbGxiYWNrIHRyaWdnZXJzIHRvIHJldHVybiB0aGUgcmVzdWx0LiBUaGUgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIGluIHBhcmFtZXRlciBhcyBib29sZWFuIDogdHJ1ZSA9IHJlZ2lzdGVyZWQgLyBmYWxzZSA9IG5vdCByZWdpc3RlcmVkXG5cdFx0ICovXG5cdFx0aXNSZWdpc3RlcmVkOiBmdW5jdGlvbihwX3VzZXJJZCxwX2NiKSB7XG5cdFx0XHRfaXNSZWdpc3RlcmVkKHBfdXNlcklkLHBfY2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogc2V0IHRoZSBkZXZpY2Ugc3RhdHVzIChERVZJQ0VfU1RBVFVTX0NPTk5FQ1RFRClcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gdGhlIG5ldyBzdGF0dXNcblx0XHQgKi9cblx0XHRzZXRDb25uZWN0ZWRTdGF0dXM6IGZ1bmN0aW9uKHBfc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gX3NldENvbm5lY3RlZFN0YXR1cyhwX3N0YXR1cyk7XG5cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhIG5ldyB1c2VyIGlzIGFkZGVkXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byB1c2Vcblx0XHQgKi9cblx0XHRzZXRPblVzZXJBZGRlZDogZnVuY3Rpb24ocF9jYikge1xuXHRcdFx0cmV0dXJuIF9zZXRPblVzZXJBZGRlZChwX2NiKTtcblxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIHRoZSB1c2VyIGhhcyBjaGFuZ2VkXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byB1c2Vcblx0XHQgKi9cblx0XHRzZXRPblVzZXJDaGFuZ2VkOiBmdW5jdGlvbihwX2NiKSB7XG5cdFx0XHRyZXR1cm4gX3NldE9uVXNlckNoYW5nZWQocF9jYik7XG5cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhIHVzZXIgaGFzIGJlZW4gcmVtb3ZlZC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwX2NiIC0gVGhlIGNhbGxiYWNrIHRvIHVzZVxuXHRcdCAqL1xuXHRcdHNldE9uVXNlclJlbW92ZWQ6IGZ1bmN0aW9uKHBfY2IpIHtcblx0XHRcdHJldHVybiBfc2V0T25Vc2VyUmVtb3ZlZChwX2NiKTtcblxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2F0aGVyIHRoZSBpbnZpdGVlcyB0byB0aGUgcm9vbS5cblx0XHQgKiBEZWZpbmVzIGEgY2FsbGJhY2sgdG8gdHJpZ2dlciBmb3IgSW52aXRlIGNoYW5nZXMsIGFuZCBjYWxscyBjYWxsYmFja3MgZm9yIHJvb20gaW52aXRlIGFjY2VwdGF0aW9uIG9yIHJlZnVzZS5cblx0XHQgKiBGb3IgZWFjaCBpbnZpdGVlIGEgbm9kZSBpcyBjcmVhdGVkIGluIHRoZSBkYXRhYmFzZSBhYm91dCB0aGUgSW52aXRlIGxpc3QuXG5cdFx0ICogSW4gYWRkdGlvbiwgYSBub2RlIGlzIGNyZWF0ZWQgdG9vIGZvciBlYWNoIGludml0ZWUgYWJvdXQgdGhlIHBhcnRpY2lwYW50TGlzdC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcF9yb29tSWQgLSBUaGUgcm9vbSB1c2VkIGFzIHRoZSBuYW1lIG9mIGEgYnJhbmNoIGlzIHRoZSBkYXRhYmFzZVxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IHBfZ3Vlc3RJZHMgLSBBbiBhcnJheSBwb3NzZXNzaW5nIHRoZSBpZGVudGlmaWVycyBvZiB0aGUgaW52aXRlZXNcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcF90b3BpYyAtIGN1c3RvbSBtZXNzYWdlIGZvciB0aGUgaW52aXRhdGlvblxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfc3RhdHVzQ2hhbmdlZENiIC0gb3B0aW9uYWwgOiBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIGFuIGludml0ZWUgYWNjZXB0cy9yZWplY3RlZC9jYW5jZWxlZCB0aGUgSW52aXRlXG5cdFx0ICovXG5cdFx0aW52aXRlVG9Sb29tOiBmdW5jdGlvbihwX3Jvb21JZCwgcF9ndWVzdElkcywgcF90b3BpYyxwX3N0YXR1c0NoYW5nZWRDYikge1xuXHRcdFx0cmV0dXJuIF9pbnZpdGVUb1Jvb20ocF9yb29tSWQsIHBfZ3Vlc3RJZHMsIHBfdG9waWMscF9zdGF0dXNDaGFuZ2VkQ2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2FuY2VscyB0aGUgSW52aXRlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBfcm9vbUlkIC0gVGhlIHJvb20gSWQgb2YgdGhlIEludml0ZVxuXHRcdCAqIEBwYXJhbSB7c3Rpbmd9IHBfZ3Vlc3RJZHMgLSBvcHRpb25hbCA6IEFuIGFycmF5IHBvc3Nlc3NpbmcgdGhlIGlkZW50aWZpZXJzIG9mIHRoZSBpbnZpdGVlcy4gKGlmIHVuZGVmaW5lZCAsICBhbGwgaW52aXRlZSB3aWxsIGhhdmUgdGhlaXIgSW52aXRlIGNhbmNlbGVkKVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnZpdGVJZCAtIFRoZSBpbnZpdGUgaWRlbnRpZmllclxuXHRcdCAqL1xuXHRcdGNhbmNlbEludml0YXRpb246IGZ1bmN0aW9uKHBfcm9vbUlkLCBwX2d1ZXN0SWRzKSB7XG5cdFx0XHRyZXR1cm4gX2NhbmNlbEludml0YXRpb24ocF9yb29tSWQsIHBfZ3Vlc3RJZHMpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIGEgcm9vbSBpbnZpdGUgaGFzIGJlZW4gcmVjZWl2ZWQuXG5cdFx0ICogT3RoZXIgY2FsbGJhY2tzIHdpbGwgYmUgdHJpZ2dlcmVkIGFib3V0IEludml0ZSBsaXN0cy5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbk5ld1Jvb21JbnZpdGF0aW9uQ2IgLSBUaGUgY2FsbGJhY2sgdHJpZ2dlcnMgd2hlbiBhIEludml0ZSBpcyByZWNlaXZlZCAoc3RhdHVzID0gb24gZ29pbmcpXG5cdFx0ICovXG5cdFx0c2V0T25OZXdSb29tSW52aXRhdGlvbjogZnVuY3Rpb24ocF9vbk5ld1Jvb21JbnZpdGF0aW9uQ2IpIHtcblx0XHRcdHJldHVybiBfc2V0T25OZXdSb29tSW52aXRhdGlvbihwX29uTmV3Um9vbUludml0YXRpb25DYik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZWZpbmVzIHRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHdoZW4gYSByb29tIGludml0ZSBoYXMgYmVlbiByZWNlaXZlZC5cblx0XHQgKiBPdGhlciBjYWxsYmFja3Mgd2lsbCBiZSB0cmlnZ2VyZWQgYWJvdXQgSW52aXRlIGxpc3RzLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUm9vbUludml0YXRpb25DaGFuZ2VkQ2IgLSBUaGUgY2FsbGJhY2sgdHJpZ2dlcnMgd2hlbiB0aGUgc2F0dXMgb24gdGhlIEludml0ZSByZWNlaXZlZCBoYXMgY2hhbmdlZCAoc3RhdHVzID0gYWNjZXB0ZWQvcmVqZWN0ZWQvY2FuY2VsZWQpXG5cdFx0ICovXG5cdFx0c2V0T25Sb29tSW52aXRhdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKHBfb25Sb29tSW52aXRhdGlvbkNoYW5nZWRDYikge1xuXHRcdFx0cmV0dXJuIF9zZXRPblJvb21JbnZpdGF0aW9uQ2hhbmdlZChwX29uUm9vbUludml0YXRpb25DaGFuZ2VkQ2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyBhIHRpbWVvdXQgdG8gcmVqZWN0IGF1dG9tYXRpY2FsbHkgdGhlIEludml0ZVxuXHRcdCAqIE90aGVyIGNhbGxiYWNrcyB3aWxsIGJlIHRyaWdnZXJlZCBhYm91dCBJbnZpdGUgbGlzdHMuXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSBwX3RpbWVvdXQgLSBUaGUgZGVsYXlcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcF9yZWFzb24gLSBvcHRpb25hbCBpbmZvIGFib3V0IHRoZSByZWplY3Rcblx0XHQgKi9cblx0XHRzZXROZXdSb29tSW52aXRhdGlvblRpbWVvdXQ6IGZ1bmN0aW9uKHBfdGltZW91dCxwX3JlYXNvbikge1xuXHRcdFx0cmV0dXJuIF9zZXROZXdSb29tSW52aXRhdGlvblRpbWVvdXQocF90aW1lb3V0LHBfcmVhc29uKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogbW92ZSBhbGwgdGhlIG5vbiBhY3RpdmUgaW52aXRhdGlvbnMgcHJvY2Vzc2VkIG9mIGFuIHVzZXIgdG8gdGhlIGludml0YXRpb24gTGlzdCBIaXN0b3J5OlxuXHRcdCAqIEFsbCBpbnZpdGF0aW9ucyB3aXRoIHN0YXR1cyBDYW5jZWxlZCBvciBSZWplY3RlZCB3aWxsIGJlIGFyY2hpdmVkXG5cdFx0ICogQWxsIGludml0YXRpb24gd2l0aCBzdGF0dXMgT25nb2luZyBvciBBY2NlcHRlZCBXaWxsIGJlIGFyY2hpdmVkIGlmIHRoZSBjb3JyZXNwb25kaW5nIHJvb20gaXMgY2xvc2VkXG5cdFx0ICogSWYgYW4gaW52aXRhdGlvbiB3aXRoIHN0YXR1cyBcIk9uZ29pbmdcIiBpcyBhcmNoaXZlZCwgaXRzIHN0YXR1cyB3aWxsIGJlIHNldCB0byBjYW5jZWxlZFxuXHRcdCAqIEBwYXJhbSBwX2NiIC0gVGhpcyBjYWxsYmFjayBpcyB0cmlnZ2VyIHdoZW4gYXJjaGl2ZSBpcyBjb21wbGV0ZVxuXHRcdCAqL1xuXHRcdGFyY2hpdmVNeUludml0YXRpb25zOiBmdW5jdGlvbihwX2NiKSB7XG5cdFx0XHRyZXR1cm4gX2FyY2hpdmVJbnZpdGF0aW9ucyhtZSxwX2NiKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE1ha2VzIGFuIGludml0ZSBhY2NlcHRlZCwgYW5kIGRlZmluZXMgdGhlIFwiYWNjZXB0ZWRcIiBmbGFnIG9mIHRoaXMgaW52aXRlIGF0IHRydWUgaW4gdGhlIGRhdGFiYXNlLlxuXHRcdCAqIEBwYXJhbSBwX2ludml0YXRpb25EYXRhIC1cblx0XHQgKi9cblx0XHRhY2NlcHRJbnZpdGF0aW9uOiBmdW5jdGlvbihwX2ludml0YXRpb25EYXRhKSB7XG5cdFx0XHRyZXR1cm4gX2FjY2VwdEludml0YXRpb24ocF9pbnZpdGF0aW9uRGF0YSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlZnVzZXMgdGhlIGludml0ZSBhbmQgc2V0IHRoZSBcImFjY2VwdGVkXCIgZmxhZyBvZiB0aGlzIGludml0ZSBpbiB0aGUgZGF0YWJhc2UgdG8gZmFsc2Vcblx0XHQgKiBAcGFyYW0gcF9pbnZpdGF0aW9uRGF0YSAtIFRoZSBpbnZpdGUgZGF0YVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwX3JlYXNvbiAtIG9wdGlvbmFsIGluZm8gYWJvdXQgdGhlIHJlamVjdFxuXHRcdCAqL1xuXHRcdHJlamVjdEludml0YXRpb246IGZ1bmN0aW9uKHBfaW52aXRhdGlvbkRhdGEscF9yZWFzb24pIHtcblx0XHRcdHJldHVybiBfcmVqZWN0SW52aXRhdGlvbihwX2ludml0YXRpb25EYXRhLHBfcmVhc29uKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgYSBjYWxsYmFjayBmb3IgYSBwYXJ0aWN1bGFyIGV2ZW50XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVG8gY2hvb3NlIGJldHdlZW4gXCJyb29tSW52aXRlXCIsIFwicm9vbUludml0ZUFjY2VwdGVkXCIsIFwicm9vbUludml0ZUNhbmNlbGVkXCIsIFwidXNlclwiIGFuZCBcInVzZXJSZW1vdmFsXCJcblx0XHQgKiBAcGFybSB7ZnVuY3Rpb259IHBfY2IgLSBUaGUgY2FsbGJhY2sgdG8gcmlzZVxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbihwX2V2dCwgcF9jYikge1xuXHRcdFx0c3dpdGNoIChwX2V2dCkge1xuXHRcdFx0Y2FzZSAnbmV3Um9vbUludml0YXRpb24nOlxuXHRcdFx0XHR0aGlzLnNldE9uTmV3Um9vbUludml0YXRpb24ocF9jYik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncm9vbUludml0YXRpb25DaGFuZ2VkJzpcblx0XHRcdFx0dGhpcy5zZXRPblJvb21JbnZpdGF0aW9uQ2hhbmdlZChwX2NiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1c2VyQWRkZWQnOlxuXHRcdFx0XHR0aGlzLnNldE9uVXNlckFkZGVkKHBfY2IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJDaGFuZ2VkJzpcblx0XHRcdFx0dGhpcy5zZXRPblVzZXJDaGFuZ2VkKHBfY2IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJSZW1vdmVkJzpcblx0XHRcdFx0dGhpcy5zZXRPblVzZXJSZW1vdmVkKHBfY2IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlYWNoLnNldDogbm8gc3VjaCBldmVudCcpO1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgYW5kIHJlbW92ZXMgY2FsbGJhY2tzXG5cdFx0ICovXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIF9jbG9zZSgpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlYWNoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlYWNoLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgICAsIGZuICAgPSAocmVxdWlyZSgnLi8kLmNvcmUnKS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgY3R4ID0gZnVuY3Rpb24oZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG52YXIgJGRlZiA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJylleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHBbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZGVmO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIFVOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSBVTkRFRklORUQgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9IFVOREVGSU5FRCAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogQGZpbGUgdXRpbHMuanMgLSBKUyBmaWxlIGZvciB1dGlscyBtZXRob2RzLlxuICogQGF1dGhvciBXZWJjb21cbiAqL1xuXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVzY3JpcHRpb24gVGhlIHV0aWxzIGNsYXNzXG4gKi9cbmNvbnN0IHV0aWxzID0gZnVuY3Rpb24oKSB7XG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG5cdH1cblx0LyoqXG5cdCAqIEdlbmVyYXRlcyBhbiBpZGVudGlmaWVyLiBUd28gY2FsbHMgb2YgdGhpcyBtZXRob2RlIG1heSBub3QgcmV0dXJuIHRoZSBzYW1lIGlkZW50aWZpZXJcblx0ICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSBpZGVudGlmaWVyXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ3VpZCgpIHtcblx0XHRyZXR1cm4gYCR7czQoKX0ke3M0KCl9LSR7czQoKX0tJHtzNCgpfS0ke3M0KCl9LSR7czQoKX0ke3M0KCl9JHtzNCgpfWA7XG5cdH1cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgYXBwbGljYXRpb24gaW5zdGFuY2UgaW5kZW50aWZpZXJcblx0ICovXG5cdGNvbnN0IF9hcHBJbnN0YW5jZUlkID0gX2d1aWQoKTtcblxuXHRyZXR1cm4ge1xuXHRcdGFwcEluc3RhbmNlSWQ6IF9hcHBJbnN0YW5jZUlkXG5cdH07XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZSByb29tLmpzIC0gSlMgZmlsZSB0byB1c2UgZm9yIHRoZSByb29tIHNlcnZpY2UuXG4gKiBAYXV0aG9yIFdlYmNvbVxuICovXG5cblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBsb2NhbHN0cmVhbSBmcm9tICcuL2xvY2Fsc3RyZWFtJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBST09NX1NUQVRVU19DTE9TRSBzdGF0dXMgOiByb29tIGlzIENMT1NFIC8gaW5hY3RpdmVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgUk9PTV9TVEFUVVNfQ0xPU0UgPSAnQ0xPU0UnO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGRlc2NyaXB0aW9uIFRoZSByb29tIG9iamVjdCB3aXRoIGl0cyBzdHJlYW1zLCBtZXNzYWdlcywgZmxhZ3MgYW5kIGNhbGxiYWNrcy4gVGhlIHB1Ymxpc2hlZCBtZWRpYSBzdHJlYW1zLCB0aGUgV2ViUlRDIHN0YWNrcywgdGhlIGluc3RhbnQgbWVzc2FnZXMsIGFuZCB0aGUgcGFydGljaXBhbnQgbGlzdHNcbiAqIGFyZSBtYW5hZ2VkIGluIHRoaXMgZGF0YSBzdHJ1Y3R1cmUuXG4gKiBAcGFyYW0gcF9tZSAtIFRoZSB1c2VyIGlkZW50aWZpZXIsIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW50IHVzZXIgaW4gdGhlIGRhdGFiYXNlXG4gKiBAcGFyYW0gcF9yb29tSWQgLSBUaGUgcm9vbSBpZGVudGlmaWVyLCBpZGVudGlmeWluZyBpbiB0aGUgZGF0YWJhc2UgdGhlIHJvb20gaW4gdXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwX21lLCBwX3Jvb21JZCwgZGF0YXJlZnMsIHdlYnJ0Y21uZ3IpIHtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSByb29tIGlkZW50aWZpZXIsIGlkZW50aWZ5aW5nIGEgcm9vbSBpbiB0aGUgZGF0YWJhc2Vcblx0ICovXG5cdHZhciByb29tSWQgPSBwX3Jvb21JZDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgdXNlciBpZGVudGlmaWVyXG5cdCAqL1xuXHR2YXIgbWUgPSBwX21lO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEEgZGF0YXJlZiBwb2ludGVyIHBvaW50aW5nIHRvIGEgbm9kZSBpZGVudGlmaWVkIGJ5IHRoZSByb29tIGlkZW50aWZpZXIgdW5kZXIgdGhlIHJvb21zIG5vZGVcblx0ICovXG5cdHZhciBkYXRhcmVmID0gZGF0YXJlZnMuZ2V0Um9vbXMoKS5jaGlsZChyb29tSWQpO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBXZWJSVEMgc3RhY2tzIHVzZWQgaW4gdGhpcyByb29tXG5cdCAqL1xuXHR2YXIgcm9vbVdlYnJ0Y1N0YWNrcyA9IHt9O1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBhdmFpbGFibGUgc3RyZWFtc1xuXHQgKi9cblx0dmFyIG1BdmFpbGFibGVTdHJlYW1zID0gW107XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgY29udGFpbmluZyBkYXRhIHN0cnVjdHVyZXMgZm9yIHN0cmVhbXMgd2hpY2ggcG9zc2VzcyBjYWxsYmFja3MgdG8gdHJpZ2dlciBpbiBKU09OIGZvcm1hdC5cblx0ICogVGhlc2UgY2FsbGJhY2tzIGFyZSBhZGRTdWJzY3JpYmVyTGlzdENiIGFuZCByZW1vdmVTdWJzY3JpYmVyc0xpc3RDYi5cblx0ICovXG5cdHZhciBtU3RyZWFtcyA9IFtdO1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHN0cmVhbSBtYXJrZWQgYXMgbXV0ZWRcblx0ICovXG5cdHZhciBtTXV0ZWRTdHJlYW1zID0gW107XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRvIHRyaWdnZXIgZm9yIHVucHVibGlzaGVkIHJlbW90ZSBvYmplY3RzXG5cdCAqL1xuXHR2YXIgcmVtb3RlVW5wdWJsaXNoZWR0Q2IgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYSBsaXN0IG9mIGluc3RhbnQgbWVzc2FnZXMgaGFzIGJlZW4gcmVjZWl2ZWRcblx0ICovXG5cdHZhciBpbnN0YW50TWVzc2FnZUxpc3RDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVXNlcidzIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGEgbGlzdCBvZiBtZWRpYXMgaGFzIGJlZW4gcHVibGlzaGVkXG5cdCAqL1xuXHR2YXIgcHVibGlzaGVkTWVkaWFMaXN0Q2IgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gcm9vbSdzIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGEgbGlzdCBvZiBtZWRpYXMgaGFzIGJlZW4gcHVibGlzaGVkXG5cdCAqL1xuXHR2YXIgcHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0gPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIHVzZXIncyBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiBhIGxpc3Qgb2YgbWVkaWFzIGhhcyBiZWVuIHVucHVibGlzaGVkXG5cdCAqL1xuXHR2YXIgdW5QdWJsaXNoZWRNZWRpYUxpc3RDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gcm9vbSdzIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGEgbGlzdCBvZiBtZWRpYXMgaGFzIGJlZW4gcHVibGlzaGVkXG5cdCAqL1xuXHR2YXIgdW5QdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYSBsaXN0IG9mIHBhcnRpY2lwYW50cyBqb2lucyB0aGUgcm9vbSAoYWRkZWQpXG5cdCAqL1xuXHR2YXIgcGFydGljaXBhbnRMaXN0Sm9pbkFkZGVkQ2IgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIENhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGEgbGlzdCBvZiBwYXJ0aWNpcGFudHMgam9pbnMgdGhlIHJvb20gKGNoYW5nZWQpXG5cdCAqL1xuXHR2YXIgcGFydGljaXBhbnRMaXN0Sm9pbkNoYW5nZWRDYiA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYSBsaXN0IG9mIHBhcnRpY2lwYW50cyBsZWF2ZXMgdGhlIHJvb21cblx0ICovXG5cdHZhciBwYXJ0aWNpcGFudExpc3RMZWF2ZUNiID0gbnVsbDtcblxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgcm9vbSBvYmplY3QgYnkgYWRkaW5nIGEgbmV3IHZhbHVlIGluIGEgY2hpbGQgaWRlbnRpZmllZCBieSB0aGUgdXNlciBpZGVudGlmaWVyIHVuZGVyXG5cdCAqIHRoZSBwYXJ0aWNpcGFudExpc3Qgbm9kZVxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRkYXRhcmVmLmNoaWxkKCdwYXJ0aWNpcGFudExpc3QnKS5jaGlsZChtZSkudXBkYXRlKHtcblx0XHRcdGNvbm5lY3RlZDogdHJ1ZSxcblx0XHRcdHdhc0luc2lkZVJvb206IHRydWVcblx0XHR9KTtcblxuXHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLmNoaWxkKG1lKS5jaGlsZCgnY29ubmVjdGVkJykub25EaXNjb25uZWN0KCkuc2V0KGZhbHNlKTtcblxuXHRcdGluaXRGaXJlYmFzZUxpc3RlbmVyKCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYSBGaXJlYmFzZSBsaXN0ZW5lci5cblx0ICogRGVmaW5lcyBjYWxsYmFja3MgKGlmIG5vdCBhbHJlYWR5IGRlZmluZWQpIGZvciA6IGluc3RhbnQgbWVzc2FnZXMsIG1lZGlhIGxpc3QgYW5kIHBhcnRpY2lwYW50cy5cblx0ICogVGhlc2UgY2FsbGJhY2tzIGFyZSBjYWxsZWQgaWYgYSBuZXcgdmFsdWUgaXMgYWRkZWQgb3IgaWYgYSB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkIGluIHRoZSBkYXRhYmFzZS5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXRGaXJlYmFzZUxpc3RlbmVyKCkge1xuXG5cdFx0aWYgKCFwdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSkge1xuXHRcdFx0cHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0gPSBmdW5jdGlvbiAoc25hcHNob3QpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpvblB1Ymxpc2hlZFN0cmVhbUZvckF2YWlsYWJsZVN0cmVhbSlzdHJlYW09JyArIEpTT04uc3RyaW5naWZ5KHNuYXBzaG90LnZhbCgpKSk7XG5cdFx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0b2JqW3NuYXBzaG90Lm5hbWUoKV0gPSBzbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0b2JqW3NuYXBzaG90Lm5hbWUoKV0ucm9vbUlkID0gcm9vbUlkO1xuXHRcdFx0XHRfYWRkQXZhaWxhYmxlU3RyZWFtKG9iaik7XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub24oJ2NoaWxkX2FkZGVkJywgcHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0pO1xuXHRcdH1cblxuXHRcdGlmICghdW5QdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSkge1xuXHRcdFx0dW5QdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSA9IGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuXHRcdFx0XHR2YXIgc3RyZWFtSWQgPSBzbmFwc2hvdC5uYW1lKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6b25VblB1Ymxpc2hlZFN0cmVhbUZvckF2YWlsYWJsZVN0cmVhbSlzdHJlYW09JyArIHN0cmVhbUlkKTtcblx0XHRcdFx0X3JlbW92ZUF2YWlsYWJsZVN0cmVhbShzdHJlYW1JZCk7XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub24oJ2NoaWxkX3JlbW92ZWQnLCB1blB1Ymxpc2hlZE1lZGlhTGlzdENiRm9yQXZhaWxhYmxlU3RyZWFtKTtcblx0XHR9XG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgcm9vbSBpZGVudGlmaWVyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgcm9vbSBpZGVudGlmaWVyXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0Um9vbUlkKCkge1xuXHRcdHJldHVybiByb29tSWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdXNlciBpZGVudGlmaWVyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgdXNlciBpZGVudGlmaWVyXG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0TWUoKSB7XG5cdFx0cmV0dXJuIG1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBQYXJ0aWNpcGFudHMgYWRkZWQgbGlzdGVuZXIuXG5cdCAqIERlZmluZXMgY2FsbGJhY2sgKHJlbW92ZSBhbnkgZXhpc3Rpbmcgb25lKSBmb3IgdGhlIHBhcnRpY2lwYW50cy5cblx0ICogVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQsIGZpcnN0IGZvciBhbnkgZXhpc3RpbmcgY29ubmVjdGVkIHBhcnRpY2lwYW50cywgdGhlbiB3aGVuIGEgbmV3IHBhcnRpY2lwYW50IGlzIGFkZGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gX3NldE9uUGFydGljaXBhbnRKb2luKHBfY2IpIHtcblxuXHRcdGlmIChwYXJ0aWNpcGFudExpc3RKb2luQWRkZWRDYikge1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncGFydGljaXBhbnRMaXN0Jykub2ZmKCdjaGlsZF9hZGRlZCcsIHBhcnRpY2lwYW50TGlzdEpvaW5BZGRlZENiKTtcblx0XHRcdHBhcnRpY2lwYW50TGlzdEpvaW5BZGRlZENiID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHBhcnRpY2lwYW50TGlzdEpvaW5DaGFuZ2VkQ2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLm9mZignY2hpbGRfY2hhbmdlZCcsIHBhcnRpY2lwYW50TGlzdEpvaW5DaGFuZ2VkQ2IpO1xuXHRcdFx0cGFydGljaXBhbnRMaXN0Sm9pbkNoYW5nZWRDYiA9IG51bGw7XG5cdFx0fVxuXHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHBhcnRpY2lwYW50TGlzdEpvaW5BZGRlZENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciB1c2VyID0gc25hcHNob3QubmFtZSgpO1xuXHRcdFx0XHRpZiAoc25hcHNob3QudmFsKCkgJiYgc25hcHNob3QudmFsKCkuY29ubmVjdGVkICYmIHNuYXBzaG90LnZhbCgpLndhc0luc2lkZVJvb20pIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9zZXRPblBhcnRpY2lwYW50Sm9pbikgdXNlciBoYXMgam9pbmVkOiAnICsgdXNlcik7XG5cdFx0XHRcdFx0cF9jYih1c2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLm9uKCdjaGlsZF9hZGRlZCcsIHBhcnRpY2lwYW50TGlzdEpvaW5BZGRlZENiKTtcblxuXHRcdFx0cGFydGljaXBhbnRMaXN0Sm9pbkNoYW5nZWRDYiA9IGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuXHRcdFx0XHR2YXIgdXNlciA9IHNuYXBzaG90Lm5hbWUoKTtcblx0XHRcdFx0aWYgKHNuYXBzaG90LnZhbCgpICYmIChzbmFwc2hvdC52YWwoKS5jb25uZWN0ZWQgJiYgc25hcHNob3QudmFsKCkud2FzSW5zaWRlUm9vbSkpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9zZXRPblBhcnRpY2lwYW50Sm9pbikgdXNlciBoYXMgam9pbmVkOiAnICsgdXNlcik7XG5cdFx0XHRcdFx0cF9jYih1c2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLm9uKCdjaGlsZF9jaGFuZ2VkJywgcGFydGljaXBhbnRMaXN0Sm9pbkNoYW5nZWRDYik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfc2V0T25QYXJ0aWNpcGFudEpvaW4pcGFyYW1ldGVyIGluY29ycmVjdC4gRXhwZWN0ZWQgZnVuY3Rpb24nKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIFBhcnRpY2lwYW50cyBsZWZ0IGxpc3RlbmVyLlxuXHQgKiBEZWZpbmVzIGNhbGxiYWNrIChyZW1vdmUgYW55IGV4aXN0aW5nIG9uZSkgZm9yIHRoZSBwYXJ0aWNpcGFudHMuXG5cdCAqIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gYSBuZXcgcGFydGljaXBhbnQgaXMgcmVtb3ZlZC5cblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblBhcnRpY2lwYW50TGVhdmUocF9jYikge1xuXG5cdFx0aWYgKHBhcnRpY2lwYW50TGlzdExlYXZlQ2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLm9mZignY2hpbGRfY2hhbmdlZCcsIHBhcnRpY2lwYW50TGlzdExlYXZlQ2IpO1xuXHRcdFx0cGFydGljaXBhbnRMaXN0TGVhdmVDYiA9IG51bGw7XG5cdFx0fVxuXHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHBhcnRpY2lwYW50TGlzdExlYXZlQ2IgPSBmdW5jdGlvbiAoc25hcHNob3QpIHtcblx0XHRcdFx0dmFyIHVzZXIgPSBzbmFwc2hvdC5uYW1lKCk7XG5cdFx0XHRcdGlmIChzbmFwc2hvdC52YWwoKSAmJiAoIXNuYXBzaG90LnZhbCgpLmNvbm5lY3RlZCAmJiBzbmFwc2hvdC52YWwoKS53YXNJbnNpZGVSb29tKSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X3NldE9uUGFydGljaXBhbnRMZWF2ZSkgdXNlciBoYXMgbGVmdDogJyArIHVzZXIpO1xuXHRcdFx0XHRcdHBfY2IodXNlcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwYXJ0aWNpcGFudExpc3QnKS5vbignY2hpbGRfY2hhbmdlZCcsIHBhcnRpY2lwYW50TGlzdExlYXZlQ2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X3NldE9uUGFydGljaXBhbnRMZWF2ZSlwYXJhbWV0ZXIgaW5jb3JyZWN0LiBFeHBlY3RlZCBmdW5jdGlvbicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kcyBhbiBpbnN0YW50IG1lc3NhZ2UgYnkgcHVzaGluZyBhbiBuZXcgZWxlbWVudCBpbiB0aGUgZGF0YWJhc2Ugd2l0aCBhIHRpbWVzdGFtcCwgdGhlIG1lc3NhZ2UgYW5kIGl0cyBhdXRob3IgKGkuZS4gdGhlIGN1cnJlbnQgdXNlcilcblx0ICogQHBhcmFtIHtzdHJpbmd9bWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIHNlbmRcblx0ICovXG5cdGZ1bmN0aW9uIF9zZW5kSW5zdGFudE1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdGlmIChtZXNzYWdlICE9PSAnJykge1xuXHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpzZW5kSW5zdGFudE1lc3NhZ2UpbWVzc2FnZT0nICsgbWVzc2FnZSk7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnN0YW50TWVzc2FnZUxpc3QnKS5wdXNoKHtcblx0XHRcdFx0ZnJvbTogbWUsXG5cdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG5cdFx0XHRcdHRpbWVzdGFtcDogV2ViY29tLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBpbnN0YW50IG1lc3NhZ2UgbGlzdGVuZXIuXG5cdCAqIERlZmluZXMgY2FsbGJhY2sgKHJlbW92ZSBhbnkgZXhpc3Rpbmcgb25lKSBmb3IgOiBpbnN0YW50IG1lc3NhZ2VzLlxuXHQgKiBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCwgZmlyc3QgZm9yIGFueSBleGlzdGluZyBpbnN0YW50IG1lc3NhZ2VzLCB0aGVuIHdoZW4gYSBuZXcgdmFsdWUgaXMgYWRkZWQgaW4gdGhlIGRhdGFiYXNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gX3NldE9uSW5zdGFudE1lc3NhZ2UocF9jYikge1xuXG5cdFx0aWYgKGluc3RhbnRNZXNzYWdlTGlzdENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnN0YW50TWVzc2FnZUxpc3QnKS5vZmYoJ2NoaWxkX2FkZGVkJywgaW5zdGFudE1lc3NhZ2VMaXN0Q2IpO1xuXHRcdFx0aW5zdGFudE1lc3NhZ2VMaXN0Q2IgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAocF9jYiAmJiB0eXBlb2YgcF9jYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW50TWVzc2FnZUxpc3RDYiA9IGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuXHRcdFx0XHR2YXIgb2JqID0gc25hcHNob3QudmFsKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X3NldE9uSW5zdGFudE1lc3NhZ2UpcmVjZWl2ZSBJbnN0YW50TWVzc2FnZT0nICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0XHRcdHBfY2Iob2JqKTtcblx0XHRcdH07XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdpbnN0YW50TWVzc2FnZUxpc3QnKS5vbignY2hpbGRfYWRkZWQnLCBpbnN0YW50TWVzc2FnZUxpc3RDYik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfc2V0T25JbnN0YW50TWVzc2FnZSlwYXJhbWV0ZXIgaW5jb3JyZWN0LiBFeHBlY3RlZCBmdW5jdGlvbicpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFB1Ymxpc2hlcyB0aGUgc3RyZWFtXG5cdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBzdHJlYW0gdG8gcHVibGlzaFxuXHQgKiBAcGFyYW0gbG9jYWxWaWQgLSBUaGUgbG9jYWwgdmlkZW9cblx0ICogQHBhcmFtIGFjdGlvblR5cGUgLSBBIHZhbHVlIGRldGVybWluaW5nIHRoZSB0eXBlIG9mIHN0cmVhbSBpbiB1c2UgKHZpZGVvLCBhdWRpbywgdmlkZW8gYW5kIGF1ZGlvLCBzY3JlZW4tc2hhcmluZykuXG5cdCAqIEBwYXJhbSBnZXRMb2NhbFN0cmVhbUNiIC0gYSBjYWxsYmFjayBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbWVkaWFzdHJlYW0gb2JqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiBfcHVibGlzaFN0cmVhbShzdHJlYW1JZCwgbG9jYWxWaWQsIGFjdGlvblR5cGUsIGdldExvY2FsU3RyZWFtQ2IpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106OnB1Ymxpc2hTdHJlYW0pcm9vbUlkPScgKyByb29tSWQgKyAnLHN0cmVhbUlkPScgKyBzdHJlYW1JZCArICcsbWU9JyArIG1lICsgJyxhY3Rpb25UeXBlPScgKyBhY3Rpb25UeXBlKTtcblx0XHRpZiAoIShzdHJlYW1JZCAmJiB0eXBlb2Ygc3RyZWFtSWQgPT0gJ3N0cmluZycpKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyZWFjaDo6aW52aXRlVG9Sb29tKXBhcmFtZXRlciBzdHJlYW1JZCBpcyBpbmNvcnJlY3QuIEV4cGVjdGluZyBub24gZW1wdHkgc3RyaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxvY2FsRGF0YVJlZiA9IGRhdGFyZWYuY2hpbGQoJ3B1Ymxpc2hlZE1lZGlhTGlzdCcpLmNoaWxkKHN0cmVhbUlkKTtcblx0XHRjb25zdCByZW1vdGVEYXRhUmVmID0gbG9jYWxEYXRhUmVmLmNoaWxkKCdzdWJzY3JpYmVyc0xpc3QnKTtcblxuXHRcdGZ1bmN0aW9uIHB1YkFuZFN1YnNjcmliZSgpIHtcblx0XHRcdC8vIHB1Ymxpc2ggdGhlIHN0cmVhbVxuXHRcdFx0bG9jYWxEYXRhUmVmLnNldCh7ZnJvbTogbWUsIGFwcEluc3RhbmNlSWQ6IHV0aWxzLmFwcEluc3RhbmNlSWQsIGFjdGlvblR5cGU6IGFjdGlvblR5cGV9KTtcblx0XHRcdGxvY2FsRGF0YVJlZi5vbkRpc2Nvbm5lY3QoKS5yZW1vdmUoKTtcblxuXG5cdFx0XHQvLyBzdWJzY3JpYmUgdG8gc3RyZWFtIHVwZGF0ZXMgZm9yIGFkZFxuXHRcdFx0dmFyIGFkZFN1YnNjcmliZXJzTGlzdENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciByZW1vdGVBcHBJbnN0YW5jZUlkID0gc25hcHNob3QubmFtZSgpO1xuXHRcdFx0XHR2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuXHRcdFx0XHR2YXIgc3Vic2NyaWJlcklkID0gZGF0YS51c2VySWQ7XG5cdFx0XHRcdHZhciBfcGVlcmNvSWQgPSBkYXRhLnBlZXJjb0lkO1xuXHRcdFx0XHR2YXIgX3BlZXJjb1JlZiA9IGRhdGEucGVlcmNvUmVmO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106OnB1Ymxpc2hTdHJlYW06OmFkZFN1YnNjcmliZXJzTGlzdENiKXN1YnNjcmliZXIgJyArIHN1YnNjcmliZXJJZCArICcgdG8gc3RyZWFtICcgKyBzdHJlYW1JZCArICcgYWRkZWQgJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHRcdFx0aWYgKCFyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXSkge1xuXHRcdFx0XHRcdHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGlzQXVkaW9NdXRlID0gZmFsc2U7XG5cdFx0XHRcdHZhciBpc1ZpZGVvTXV0ZSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAobU11dGVkU3RyZWFtc1tzdHJlYW1JZF0gJiYgbU11dGVkU3RyZWFtc1tzdHJlYW1JZF0uYXVkaW8pIGlzQXVkaW9NdXRlID0gdHJ1ZTtcblx0XHRcdFx0aWYgKG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdICYmIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdLnZpZGVvKSBpc1ZpZGVvTXV0ZSA9IHRydWU7XG5cdFx0XHRcdHZhciBtU3RhY2tJZCA9IHdlYnJ0Y21uZ3IuY3JlYXRlV2VicnRjKGxvY2FsVmlkLCByZW1vdGVBcHBJbnN0YW5jZUlkLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpwdWJsaXNoU3RyZWFtOjphZGRTdWJzY3JpYmVyc0xpc3RDYilzdWJzY3JpYmVyICcgKyBzdWJzY3JpYmVySWQgKyAnIHRvIHN0cmVhbSAnICsgc3RyZWFtSWQgKyAnIGNvbm5lY3Rpb24gbG9zdCcpO1xuLy9cdFx0XHRcdG9uVW5QdWJsaXNoZWRTdHJlYW0obG9jYWxWaWQsIHJlbW90ZVZpZCk7XG5cdFx0XHRcdH0sIHRydWUsIGFjdGlvblR5cGUsIF9wZWVyY29JZCwgX3BlZXJjb1JlZiwgaXNBdWRpb011dGUsIGlzVmlkZW9NdXRlKTtcblxuXHRcdFx0XHRyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXS5wdXNoKHtcblx0XHRcdFx0XHRzdGFja0lkOiBtU3RhY2tJZCxcblx0XHRcdFx0XHRzdWJzY3JpYmVySWQ6IHN1YnNjcmliZXJJZCxcblx0XHRcdFx0XHRpc1B1Ymxpc2g6IHRydWUsXG5cdFx0XHRcdFx0cGVlcmNvSWQ6IF9wZWVyY29JZCxcblx0XHRcdFx0XHRwZWVyY29SZWY6IF9wZWVyY29SZWZcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vZGVsZXRlIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQrXCJfcHViXCJdO1xuXHRcdFx0XHQvLyQoXCJkaXYjdmlkZW9CdXR0b25fXCIrcm9vbUlkK1wiLnZpZGVvQnV0dG9uLCBkaXYjbWljQnV0dG9uX1wiK3Jvb21JZCtcIi5taWNCdXR0b25cIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblx0XHRcdH07XG5cdFx0XHQvLyBzdWJzY3JpYmUgdG8gc3RyZWFtIHVwZGF0ZXMgZm9yIHJlbW92ZVxuXHRcdFx0dmFyIHJlbW92ZVN1YnNjcmliZXJzTGlzdENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciBzdWJzY3JpYmVySWQgPSBzbmFwc2hvdC5uYW1lKCk7XG5cdFx0XHRcdGlmIChzdWJzY3JpYmVySWQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106OnB1Ymxpc2hTdHJlYW06OnJlbW92ZVN1YnNjcmliZXJzTGlzdENiKXN1YnNjcmliZXIgJyArIHN1YnNjcmliZXJJZCArICcgdG8gc3RyZWFtICcgKyBzdHJlYW1JZCArICcgcmVtb3ZlZCcpO1xuXHRcdFx0XHRcdGlmIChyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXSAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdFx0aWYgKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddW2ldLnN1YnNjcmliZXJJZCA9PT0gc3Vic2NyaWJlcklkKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2VicnRjbW5nci5jbG9zZVdlYnJ0Yyhyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXVtpXS5zdGFja0lkLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGVsZXRlIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXG5cdFx0XHRtU3RyZWFtc1tzdHJlYW1JZF0gPSB7XG5cdFx0XHRcdGFkZFN1YnNjcmliZXJzTGlzdENiLFxuXHRcdFx0XHRyZW1vdmVTdWJzY3JpYmVyc0xpc3RDYlxuXHRcdFx0fTtcblxuXHRcdFx0cmVtb3RlRGF0YVJlZi5vbignY2hpbGRfYWRkZWQnLCBhZGRTdWJzY3JpYmVyc0xpc3RDYik7XG5cdFx0XHRyZW1vdGVEYXRhUmVmLm9uKCdjaGlsZF9yZW1vdmVkJywgcmVtb3ZlU3Vic2NyaWJlcnNMaXN0Q2IpO1xuXHRcdH1cblxuXHRcdC8vaW5pdCBsb2NhbCBzdHJlYW1cblx0XHRpZiAoYWN0aW9uVHlwZSkge1xuXHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbnMuQUNUSU9OX1RZUEVfVklERU8pIHtcblx0XHRcdFx0bG9jYWxzdHJlYW0uY29ubmVjdExvY2FsVmlkZW9TdHJlYW0obG9jYWxWaWQsIHB1YkFuZFN1YnNjcmliZSwgZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbnMuQUNUSU9OX1RZUEVfQVVESU8pIHtcblx0XHRcdFx0bG9jYWxzdHJlYW0uY29ubmVjdExvY2FsQXVkaW9TdHJlYW0obG9jYWxWaWQsIHB1YkFuZFN1YnNjcmliZSwgZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbnMuQUNUSU9OX1RZUEVfQVVESU9fVklERU8pIHtcblx0XHRcdFx0bG9jYWxzdHJlYW0uY29ubmVjdExvY2FsQXVkaW9WaWRlb1N0cmVhbShsb2NhbFZpZCwgcHViQW5kU3Vic2NyaWJlLCBnZXRMb2NhbFN0cmVhbUNiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlZCBNZWRpYUxpc3QgbGlzdGVuZXIuXG5cdCAqIERlZmluZXMgY2FsbGJhY2sgKHJlbW92ZSBhbnkgZXhpc3Rpbmcgb25lKSBmb3IgOiBwdWJsaXNoZWQgTWVkaWEuXG5cdCAqIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkLCBmaXJzdCBmb3IgYW55IGV4aXN0aW5nIHB1Ymxpc2hlZCBtZWRpYSwgdGhlbiB3aGVuIGEgbmV3IHZhbHVlIGlzIGFkZGVkIGluIHRoZSBkYXRhYmFzZS5cblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblB1Ymxpc2hlZFN0cmVhbShwX2NiKSB7XG5cblx0XHRpZiAocHVibGlzaGVkTWVkaWFMaXN0Q2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3B1Ymxpc2hlZE1lZGlhTGlzdCcpLm9mZignY2hpbGRfYWRkZWQnLCBwdWJsaXNoZWRNZWRpYUxpc3RDYik7XG5cdFx0XHRwdWJsaXNoZWRNZWRpYUxpc3RDYiA9IG51bGw7XG5cdFx0fVxuXHRcdGlmIChwX2NiICYmIHR5cGVvZiBwX2NiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHB1Ymxpc2hlZE1lZGlhTGlzdENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0b2JqW3NuYXBzaG90Lm5hbWUoKV0gPSBzbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0b2JqW3NuYXBzaG90Lm5hbWUoKV0ucm9vbUlkID0gcm9vbUlkO1xuXHRcdFx0XHRwX2NiKG9iaik7XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub24oJ2NoaWxkX2FkZGVkJywgcHVibGlzaGVkTWVkaWFMaXN0Q2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X3NldE9uUHVibGlzaGVkU3RyZWFtKXBhcmFtZXRlciBpbmNvcnJlY3QuIEV4cGVjdGVkIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVucHVibGlzaGVzIHRoZSBzdHJlYW1cblx0ICogQHBhcmFtIHN0cmVhbUlkIC0gVGhlIHN0cmVhbSBpZGVudGlmaWVyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIHRvIHRyaWdnZXJcblx0ICovXG5cdGZ1bmN0aW9uIF91blB1Ymxpc2hTdHJlYW0oc3RyZWFtSWQsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjp1blB1Ymxpc2hTdHJlYW0pc3RyZWFtSWQgJyArIHN0cmVhbUlkKTtcblx0XHR2YXIgbG9jYWxEYXRhUmVmID0gZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0JykuY2hpbGQoc3RyZWFtSWQpO1xuXHRcdHZhciByZW1vdGVEYXRhUmVmID0gbG9jYWxEYXRhUmVmLmNoaWxkKCdzdWJzY3JpYmVyc0xpc3QnKTtcblx0XHRpZiAobVN0cmVhbXNbc3RyZWFtSWRdICYmIG1TdHJlYW1zW3N0cmVhbUlkXS5hZGRTdWJzY3JpYmVyc0xpc3RDYikge1xuXHRcdFx0cmVtb3RlRGF0YVJlZi5vZmYoJ2NoaWxkX2FkZGVkJywgbVN0cmVhbXNbc3RyZWFtSWRdLmFkZFN1YnNjcmliZXJzTGlzdENiKTtcblx0XHR9XG5cdFx0aWYgKG1TdHJlYW1zW3N0cmVhbUlkXSAmJiBtU3RyZWFtc1tzdHJlYW1JZF0ucmVtb3ZlU3Vic2NyaWJlcnNMaXN0Q2IpIHtcblx0XHRcdHJlbW90ZURhdGFSZWYub2ZmKCdjaGlsZF9yZW1vdmVkJywgbVN0cmVhbXNbc3RyZWFtSWRdLnJlbW92ZVN1YnNjcmliZXJzTGlzdENiKTtcblx0XHR9XG5cdFx0ZGVsZXRlIG1TdHJlYW1zW3N0cmVhbUlkXTtcblx0XHRkZWxldGUgbU11dGVkU3RyZWFtc1tzdHJlYW1JZF07XG5cdFx0bG9jYWxEYXRhUmVmLm9uRGlzY29ubmVjdCgpLmNhbmNlbCgpO1xuXHRcdGxvY2FsRGF0YVJlZi5yZW1vdmUoKTtcblx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10ubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIG5iU3RhY2sgPSByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXS5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gbmJTdGFjayAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cblx0XHRcdFx0d2VicnRjbW5nci5jbG9zZVdlYnJ0Yyhyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXVtpXS5zdGFja0lkLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bmJTdGFjay0tO1xuXHRcdFx0XHRcdGlmIChuYlN0YWNrIDwgMSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddO1xuXG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpICBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlbGV0ZSByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXTtcblx0XHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgICAgY2FsbGJhY2soKTtcblx0XHR9XG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSB1blB1Ymxpc2hlZCBNZWRpYUxpc3QgbGlzdGVuZXIuXG5cdCAqIERlZmluZXMgY2FsbGJhY2sgKHJlbW92ZSBhbnkgZXhpbnRpbmcgb25lKSBmb3IgOiB1bnB1Ymxpc2hlZCBNZWRpYS5cblx0ICogVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBhIG1lZGlhIGlzIHVucHVibGlzaC5cblx0ICovXG5cdGZ1bmN0aW9uIF9zZXRPblVuUHVibGlzaGVkU3RyZWFtKHBfY2IpIHtcblxuXHRcdGlmICh1blB1Ymxpc2hlZE1lZGlhTGlzdENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwdWJsaXNoZWRNZWRpYUxpc3QnKS5vZmYoJ2NoaWxkX3JlbW92ZWQnLCB1blB1Ymxpc2hlZE1lZGlhTGlzdENiKTtcblx0XHRcdHVuUHVibGlzaGVkTWVkaWFMaXN0Q2IgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAocF9jYiAmJiB0eXBlb2YgcF9jYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR1blB1Ymxpc2hlZE1lZGlhTGlzdENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciBzdHJlYW1JZCA9IHNuYXBzaG90Lm5hbWUoKTtcblx0XHRcdFx0cF9jYihzdHJlYW1JZCk7XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub24oJ2NoaWxkX3JlbW92ZWQnLCB1blB1Ymxpc2hlZE1lZGlhTGlzdENiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9zZXRPblVuUHVibGlzaGVkU3RyZWFtKXBhcmFtZXRlciBpbmNvcnJlY3QuIEV4cGVjdGVkIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzdHJlYW0gYW5kIGFkZHMgY2FsbGJhY2tzIHRvIHRoZSBkZWRpY2F0ZWQgbm9kZSBhY2NvcmRpbmcgdG8gdGhlIGFjdGlvbiB0eXBlIG9mIHRoZSBzdHJlYW0gZGF0YS5cblx0ICogQHBhcmFtIHN0cmVhbURhdGEgLSBUaGUgc3RyZWFtIGRhdGFcblx0ICogQHBhcmFtIHJlbW90ZVZpZCAtIFRoZSByZW1vdGUgdmlkZW9cblx0ICogQHBhcmFtIGdldFJlbW90ZVN0cmVhbUNiIC0gYSBjYWxsYmFjayBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgbWVkaWFzdHJlYW0gb2JqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiBfc3Vic2NyaWJlVG9TdHJlYW0oc3RyZWFtRGF0YSwgcmVtb3RlVmlkLCBnZXRSZW1vdGVTdHJlYW1DYikge1xuXHRcdHZhciBzdHJlYW1JZCA9IE9iamVjdC5rZXlzKHN0cmVhbURhdGEpWzBdO1xuXHRcdHZhciBhY3Rpb25UeXBlID0gc3RyZWFtRGF0YVtzdHJlYW1JZF0uYWN0aW9uVHlwZTtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106OnN1YnNjcmliZVRvU3RyZWFtKXN0cmVhbUlkICcgKyBzdHJlYW1JZCk7XG5cdFx0Ly90ZXN0IGlmIHN0cmVhbSBpcyBub3Qgb3VyXG5cdFx0aWYgKG1TdHJlYW1zICYmIG1TdHJlYW1zW3N0cmVhbUlkXSkge1xuXHRcdFx0Ly9pdCBpcyBvdXIgc3RyZWFtIC0+IHN1YnNjcmliZSB0byBsb2NhbFN0cmVhbVxuXHRcdFx0aWYgKGFjdGlvblR5cGUpIHtcblx0XHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbnMuQUNUSU9OX1RZUEVfVklERU8pIHtcblx0XHRcdFx0XHRsb2NhbHN0cmVhbS5jb25uZWN0TG9jYWxWaWRlb1N0cmVhbShyZW1vdGVWaWQsIGdldFJlbW90ZVN0cmVhbUNiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25zLkFDVElPTl9UWVBFX0FVRElPKSB7XG5cdFx0XHRcdFx0bG9jYWxzdHJlYW0uY29ubmVjdExvY2FsQXVkaW9TdHJlYW0ocmVtb3RlVmlkLCBnZXRSZW1vdGVTdHJlYW1DYik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9ucy5BQ1RJT05fVFlQRV9BVURJT19WSURFTykge1xuXHRcdFx0XHRcdGxvY2Fsc3RyZWFtLmNvbm5lY3RMb2NhbEF1ZGlvVmlkZW9TdHJlYW0ocmVtb3RlVmlkLCBnZXRSZW1vdGVTdHJlYW1DYik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJlYW1JZDtcblx0XHR9XG5cblxuXHRcdHZhciBhcHBJbnN0YW5jZUlkID0gc3RyZWFtRGF0YVtzdHJlYW1JZF0uYXBwSW5zdGFuY2VJZDtcblxuXHRcdHZhciBsb2NhbERhdGFSZWYgPSBkYXRhcmVmLmNoaWxkKCdwdWJsaXNoZWRNZWRpYUxpc3QnKS5jaGlsZChzdHJlYW1JZCk7XG5cdFx0dmFyIHJlbW90ZURhdGFSZWYgPSBsb2NhbERhdGFSZWYuY2hpbGQoJ3N1YnNjcmliZXJzTGlzdCcpO1xuXHRcdHZhciBfcGVlcmNvSWQgPSBudWxsO1xuXHRcdHZhciBfcGVlcmNvUmVmID0gbnVsbDtcblx0XHRpZiAoIXJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddKSB7XG5cdFx0XHRyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXSA9IFtdO1xuXHRcdH0gZWxzZSBpZiAocm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ10gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ11bMF0gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ11bMF0ucGVlcmNvSWQpIHtcblx0XHRcdF9wZWVyY29JZCA9IHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddWzBdLnBlZXJjb0lkO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuXHRcdC8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuXHRcdGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cdFx0fVxuXG5cdFx0aWYgKCFfcGVlcmNvSWQpIHtcblx0XHRcdF9wZWVyY29JZCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkudG9TdHJpbmcoKSArIGdldFJhbmRvbUludEluY2x1c2l2ZSgwLCAxMDAwMDAwKTtcblx0XHR9XG5cblx0XHRfcGVlcmNvUmVmID0gZGF0YXJlZnMuZ2V0V2VicnRjKCkucHVzaCgpLm5hbWUoKTtcblxuXG5cdFx0cmVtb3RlRGF0YVJlZi5jaGlsZCh1dGlscy5hcHBJbnN0YW5jZUlkKS5zZXQoe1xuXHRcdFx0J3RzJzogV2ViY29tLlNlcnZlclZhbHVlLlRJTUVTVEFNUCxcblx0XHRcdCd1c2VySWQnOiBtZSxcblx0XHRcdCdwZWVyY29JZCc6IF9wZWVyY29JZCxcblx0XHRcdCdwZWVyY29SZWYnOiBfcGVlcmNvUmVmXG5cdFx0fSk7XG5cdFx0dmFyIGlzQXVkaW9NdXRlID0gZmFsc2U7XG5cdFx0dmFyIGlzVmlkZW9NdXRlID0gZmFsc2U7XG5cdFx0aWYgKG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdICYmIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdLmF1ZGlvKSBpc0F1ZGlvTXV0ZSA9IHRydWU7XG5cdFx0aWYgKG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdICYmIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdLnZpZGVvKSBpc1ZpZGVvTXV0ZSA9IHRydWU7XG5cblx0XHR2YXIgbVN0YWNrSWQgPSB3ZWJydGNtbmdyLmNyZWF0ZVdlYnJ0YyhyZW1vdGVWaWQsIGFwcEluc3RhbmNlSWQsIGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vXHRvblVuUHVibGlzaGVkU3RyZWFtKGxvY2FsVmlkLCByZW1vdGVWaWQpO1xuXHRcdH0sIGZhbHNlLCBhY3Rpb25UeXBlLCBfcGVlcmNvSWQsIF9wZWVyY29SZWYsIGlzQXVkaW9NdXRlLCBpc1ZpZGVvTXV0ZSwgZ2V0UmVtb3RlU3RyZWFtQ2IpO1xuXG5cdFx0Ly9oYW5kbGUgcmVtb3RlIHVucHVibGlzaFxuXHRcdGlmICghcmVtb3RlVW5wdWJsaXNoZWR0Q2IpIHtcblx0XHRcdHJlbW90ZVVucHVibGlzaGVkdENiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdHZhciByZW1vdmVkU3RyZWFtSWQgPSBPYmplY3Qua2V5cyhzbmFwc2hvdClbMF07XG5cdFx0XHRcdGlmIChyb29tV2VicnRjU3RhY2tzW3JlbW92ZWRTdHJlYW1JZCArICdfc3ViJ10pIHtcblx0XHRcdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKGkgPCByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdlYnJ0Y21uZ3IuY2xvc2VXZWJydGMocm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ11baV0uc3RhY2tJZCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWxldGUgcm9vbVdlYnJ0Y1N0YWNrc1tyZW1vdmVkU3RyZWFtSWQgKyAnX3N1YiddO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub24oJ2NoaWxkX3JlbW92ZWQnLCByZW1vdGVVbnB1Ymxpc2hlZHRDYik7XG5cdFx0fVxuXG5cblx0XHRyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXS5wdXNoKHtcblx0XHRcdHN0YWNrSWQ6IG1TdGFja0lkLFxuXHRcdFx0aXNQdWJsaXNoOiBmYWxzZSxcblx0XHRcdHBlZXJjb0lkOiBfcGVlcmNvSWQsXG5cdFx0XHRwZWVyY29SZWY6IF9wZWVyY29SZWZcblx0XHR9KTtcblx0XHRyZXR1cm4gc3RyZWFtSWQ7XG5cdH1cblxuXHQvKipcblx0ICogVW5zdWJzY3JpYmUgZnJvbSBhIHN0cmVhbVxuXHQgKiBAcGFyYW0gc3RyZWFtSWQgLSBUaGUgc3RyZWFtIGlkZW50aWZpZXIgZnJvbSB3aGljaCB0aGUgdW5zdWJzY3JpcHRpb24gaGF2ZSB0byBiZSBkb25lXG5cdCAqL1xuXHRmdW5jdGlvbiBfdW5TdWJzY3JpYmVGcm9tU3RyZWFtKHN0cmVhbUlkKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjp1blN1YnNjcmliZUZyb21TdHJlYW0pc3RyZWFtSWQgJyArIHN0cmVhbUlkKTtcblx0XHR2YXIgbG9jYWxEYXRhUmVmID0gZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0JykuY2hpbGQoc3RyZWFtSWQpO1xuXHRcdHZhciByZW1vdGVEYXRhUmVmID0gbG9jYWxEYXRhUmVmLmNoaWxkKCdzdWJzY3JpYmVyc0xpc3QnKTtcblx0XHRyZW1vdGVEYXRhUmVmLmNoaWxkKHV0aWxzLmFwcEluc3RhbmNlSWQpLnJlbW92ZSgpO1xuXG5cdFx0aWYgKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHR3aGlsZSAoaSA8IHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddLmxlbmd0aCkge1xuXHRcdFx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ11baV0pIHtcblx0XHRcdFx0XHR3ZWJydGNtbmdyLmNsb3NlV2VicnRjKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddW2ldLnN0YWNrSWQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ107XG5cdFx0fVxuXHRcdGRlbGV0ZSBtTXV0ZWRTdHJlYW1zW3N0cmVhbUlkXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCB0aGUgYXZhaWxhYmxlIHN0cmVhbXNcblx0ICogQHJldHVybiB7YXJyYXl9XG5cdCAqL1xuXHRmdW5jdGlvbiBfZ2V0QXZhaWxhYmxlU3RyZWFtcygpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9nZXRBdmFpbGFibGVTdHJlYW1zKScpO1xuXHRcdHJldHVybiBtQXZhaWxhYmxlU3RyZWFtcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIGF2YWlsYWJsZSBzdHJlYW0gaGF2aW5nIHRoZSBpZGVudGlmaWVyXG5cdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBzdHJlYW0gaWRlbnRpZmllclxuXHQgKiBAcmV0dXJuIC0gQSBzdHJlYW1cblx0ICovXG5cdGZ1bmN0aW9uIF9nZXRBdmFpbGFibGVTdHJlYW0oc3RyZWFtSWQpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9nZXRBdmFpbGFibGVTdHJlYW0pc3RyZWFtSWQ9JyArIHN0cmVhbUlkKTtcblx0XHRpZiAobUF2YWlsYWJsZVN0cmVhbXMgJiYgc3RyZWFtSWQpIHtcblx0XHRcdGZvciAodmFyIGkgPSBtQXZhaWxhYmxlU3RyZWFtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRpZiAobUF2YWlsYWJsZVN0cmVhbXNbaV0gJiYgT2JqZWN0LmtleXMobUF2YWlsYWJsZVN0cmVhbXNbaV0pWzBdICYmIE9iamVjdC5rZXlzKG1BdmFpbGFibGVTdHJlYW1zW2ldKVswXSA9PT0gc3RyZWFtSWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbUF2YWlsYWJsZVN0cmVhbXNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhbiBhdmFpbGFibGUgc3RyZWFtXG5cdCAqIEBwYXJhbSBkYXRhIC0gVGhlIHN0cmVhbSB0byBhZGRcblx0ICovXG5cdGZ1bmN0aW9uIF9hZGRBdmFpbGFibGVTdHJlYW0oZGF0YSkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X2FkZEF2YWlsYWJsZVN0cmVhbSlkYXRhPScgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdFx0bUF2YWlsYWJsZVN0cmVhbXMucHVzaChkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFuIGF2YWlsYWJsZSBzdHJlYW1cblx0ICogQHBhcmFtIHN0cmVhbSAtIFRoZSBzdHJlYW1JZCB0byByZW1vdmVcblx0ICovXG5cdGZ1bmN0aW9uIF9yZW1vdmVBdmFpbGFibGVTdHJlYW0oc3RyZWFtSWQpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9yZW1vdmVBdmFpbGFibGVTdHJlYW0pc3RyZWFtSWQ9JyArIHN0cmVhbUlkKTtcblx0XHRpZiAobUF2YWlsYWJsZVN0cmVhbXMgJiYgc3RyZWFtSWQpIHtcblx0XHRcdGZvciAobGV0IGkgPSBtQXZhaWxhYmxlU3RyZWFtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRpZiAobUF2YWlsYWJsZVN0cmVhbXNbaV0gJiYgT2JqZWN0LmtleXMobUF2YWlsYWJsZVN0cmVhbXNbaV0pWzBdICYmIE9iamVjdC5rZXlzKG1BdmFpbGFibGVTdHJlYW1zW2ldKVswXSA9PT0gc3RyZWFtSWQpIHtcblx0XHRcdFx0XHRkZWxldGUgbUF2YWlsYWJsZVN0cmVhbXNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbGwgdGhlIHN0cmVhbXMgYnkgZGVsZXRpbmcgdGhlIGFycmF5IGNvbnRhaW5pbmcgdGhlbSB3aXRob3V0IHRyaWdnZXJyaW5nIGNhbGxiYWNrc1xuXHQgKi9cblx0ZnVuY3Rpb24gX3JlbW92ZUFsbEF2YWlsYWJsZVN0cmVhbXMoKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfcmVtb3ZlQWxsQXZhaWxhYmxlU3RyZWFtcycpO1xuXHRcdG1BdmFpbGFibGVTdHJlYW1zID0gW107XG5cdH1cblxuXHQvKipcblx0ICogQXVkaW8gbXV0ZSB0aGUgc3RyZWFtIHN0cmVhbUlkXG5cdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBzdHJlYW0gaWRlbnRpZmllciB0byBtdXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBfbXV0ZUF1ZGlvU3RyZWFtKHN0cmVhbUlkKSB7XG5cdFx0aWYgKCEoc3RyZWFtSWQgJiYgdHlwZW9mIHN0cmVhbUlkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol9tdXRlQXVkaW9TdHJlYW0pcGFyYW1ldGVyIHN0cmVhbUlkIGlzIGluY29ycmVjdC4gRXhwZWN0aW5nIG5vbiBlbXB0eSBzdHJpbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfbXV0ZUF1ZGlvU3RyZWFtKXN0cmVhbUlkPScgKyBzdHJlYW1JZCk7XG5cdFx0aWYgKCFtTXV0ZWRTdHJlYW1zW3N0cmVhbUlkXSkgbU11dGVkU3RyZWFtc1tzdHJlYW1JZF0gPSB7fTtcblx0XHRtTXV0ZWRTdHJlYW1zW3N0cmVhbUlkXS5hdWRpbyA9IHRydWU7XG5cdFx0aWYgKHJvb21XZWJydGNTdGFja3MgJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10ubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHdlYnJ0Y21uZ3IubXV0ZUF1ZGlvV2VicnRjU3RhY2socm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ11baV0uc3RhY2tJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChyb29tV2VicnRjU3RhY2tzICYmIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddICYmIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHR3ZWJydGNtbmdyLm11dGVBdWRpb1dlYnJ0Y1N0YWNrKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddW2ldLnN0YWNrSWQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cdH1cblxuXHQvKipcblx0ICogQXVkaW8gdW5tdXRlU3RyZWFtIHRoZSBzdHJlYW0gc3RyZWFtSWRcblx0ICogQHBhcmFtIHN0cmVhbUlkIC0gVGhlIHN0cmVhbSBpZGVudGlmaWVyIHRvIHVubXV0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gX3VubXV0ZUF1ZGlvU3RyZWFtKHN0cmVhbUlkKSB7XG5cdFx0aWYgKCEoc3RyZWFtSWQgJiYgdHlwZW9mIHN0cmVhbUlkID09ICdzdHJpbmcnKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Ol91bm11dGVBdWRpb1N0cmVhbSlwYXJhbWV0ZXIgc3RyZWFtSWQgaXMgaW5jb3JyZWN0LiBFeHBlY3Rpbmcgbm9uIGVtcHR5IHN0cmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAobU11dGVkU3RyZWFtc1tzdHJlYW1JZF0gJiYgbU11dGVkU3RyZWFtc1tzdHJlYW1JZF0uYXVkaW8pIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdLmF1ZGlvID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfdW5tdXRlQXVkaW9TdHJlYW0pc3RyZWFtSWQ9JyArIHN0cmVhbUlkKTtcblx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrcyAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXSAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0d2VicnRjbW5nci51bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddW2ldLnN0YWNrSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrcyAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXSAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ10ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0d2VicnRjbW5nci51bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddW2ldLnN0YWNrSWQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFZpZGVvIG11dGUgdGhlIHN0cmVhbSBzdHJlYW1JZFxuXHQgKiBAcGFyYW0gc3RyZWFtSWQgLSBUaGUgc3RyZWFtIGlkZW50aWZpZXIgdG8gbXV0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gX211dGVWaWRlb1N0cmVhbShzdHJlYW1JZCkge1xuXHRcdGlmICghKHN0cmVhbUlkICYmIHR5cGVvZiBzdHJlYW1JZCA9PSAnc3RyaW5nJykpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfbXV0ZVZpZGVvU3RyZWFtKXBhcmFtZXRlciBzdHJlYW1JZCBpcyBpbmNvcnJlY3QuIEV4cGVjdGluZyBub24gZW1wdHkgc3RyaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X211dGVWaWRlb1N0cmVhbSlzdHJlYW1JZD0nICsgc3RyZWFtSWQpO1xuXHRcdGlmICghbU11dGVkU3RyZWFtc1tzdHJlYW1JZF0pIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdID0ge307XG5cdFx0bU11dGVkU3RyZWFtc1tzdHJlYW1JZF0udmlkZW8gPSB0cnVlO1xuXHRcdGlmIChyb29tV2VicnRjU3RhY2tzICYmIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddICYmIHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAobGV0IGkgPSByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHR3ZWJydGNtbmdyLm11dGVWaWRlb1dlYnJ0Y1N0YWNrKHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddW2ldLnN0YWNrSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrcyAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXSAmJiByb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ10ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0d2VicnRjbW5nci5tdXRlVmlkZW9XZWJydGNTdGFjayhyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXVtpXS5zdGFja0lkKTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIFZpZGVvIHVubXV0ZVN0cmVhbSB0aGUgc3RyZWFtIHN0cmVhbUlkXG5cdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBzdHJlYW0gaWRlbnRpZmllciB0byB1bm11dGVcblx0ICovXG5cdGZ1bmN0aW9uIF91bm11dGVWaWRlb1N0cmVhbShzdHJlYW1JZCkge1xuXHRcdGlmICghKHN0cmVhbUlkICYmIHR5cGVvZiBzdHJlYW1JZCA9PSAnc3RyaW5nJykpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfdW5tdXRlVmlkZW9TdHJlYW0pcGFyYW1ldGVyIHN0cmVhbUlkIGlzIGluY29ycmVjdC4gRXhwZWN0aW5nIG5vbiBlbXB0eSBzdHJpbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdICYmIG1NdXRlZFN0cmVhbXNbc3RyZWFtSWRdLnZpZGVvKSBtTXV0ZWRTdHJlYW1zW3N0cmVhbUlkXS52aWRlbyA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpyb29tWycgKyByb29tSWQgKyAnXTo6X3VubXV0ZVZpZGVvU3RyZWFtKXN0cmVhbUlkPScgKyBzdHJlYW1JZCk7XG5cdFx0aWYgKHJvb21XZWJydGNTdGFja3MgJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfcHViJ10ubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3B1YiddLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHdlYnJ0Y21uZ3IudW5tdXRlVmlkZW9XZWJydGNTdGFjayhyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19wdWInXVtpXS5zdGFja0lkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHJvb21XZWJydGNTdGFja3MgJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ10gJiYgcm9vbVdlYnJ0Y1N0YWNrc1tzdHJlYW1JZCArICdfc3ViJ10ubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IHJvb21XZWJydGNTdGFja3Nbc3RyZWFtSWQgKyAnX3N1YiddLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHdlYnJ0Y21uZ3IudW5tdXRlVmlkZW9XZWJydGNTdGFjayhyb29tV2VicnRjU3RhY2tzW3N0cmVhbUlkICsgJ19zdWInXVtpXS5zdGFja0lkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgcm9vbS5cblx0ICogU2V0cyB0aGUgY29ubmVjdGVkIHN0YXR1cyBvZiB0aGUgY3VycmVudCBwYXJ0aWNpcGFudCB0byBmYWxzZSwgZGVsZXRlcyBtZWRpYXMgYW5kIGNhbGxiYWNrcywgdGhlbiBjbG9zZSBXZWJSVEMgc3RhY2tzIGluIHVzZS5cblx0ICogQHBhcmFtIHVwZGF0ZVJvb21TdGF0dXNUb0Nsb3NlIC0gdHJ1ZSBpZiB0aGUgcm9vbSBzaG91bGQgYmUgbWFya2VkIGFzIGNsb3NlZFxuXHQgKi9cblx0ZnVuY3Rpb24gX2Nsb3NlKHVwZGF0ZVJvb21TdGF0dXNUb0Nsb3NlKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OnJvb21bJyArIHJvb21JZCArICddOjpfY2xvc2Upcm9vbSAnICsgcm9vbUlkICsgJywgZGV0cm95Um9vbT0nICsgdXBkYXRlUm9vbVN0YXR1c1RvQ2xvc2UpO1xuXHRcdC8vIG1hcmsgYXMgZGlzY29ubmVjdGVkIHdoZW4gdGhlIHJvb20gaXMgbGVmdFxuXHRcdGRhdGFyZWYuY2hpbGQoJ3BhcnRpY2lwYW50TGlzdCcpLmNoaWxkKG1lKS5jaGlsZCgnY29ubmVjdGVkJykuc2V0KGZhbHNlKTtcblx0XHQvLyByZW1vdmUgd2ViY29tIGNhbGxiYWNrc1xuXHRcdGZvciAodmFyIHN0cmVhbSBpbiBtU3RyZWFtcykge1xuXHRcdFx0X3VuUHVibGlzaFN0cmVhbShzdHJlYW0pO1xuXHRcdH1cblx0XHRtU3RyZWFtcyA9IFtdO1xuXHRcdGlmIChpbnN0YW50TWVzc2FnZUxpc3RDYikge1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgnaW5zdGFudE1lc3NhZ2VMaXN0Jykub2ZmKCdjaGlsZF9hZGRlZCcsIGluc3RhbnRNZXNzYWdlTGlzdENiKTtcblx0XHRcdGluc3RhbnRNZXNzYWdlTGlzdENiID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHB1Ymxpc2hlZE1lZGlhTGlzdENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwdWJsaXNoZWRNZWRpYUxpc3QnKS5vZmYoJ2NoaWxkX2FkZGVkJywgcHVibGlzaGVkTWVkaWFMaXN0Q2IpO1xuXHRcdFx0cHVibGlzaGVkTWVkaWFMaXN0Q2IgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAocHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0pIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3B1Ymxpc2hlZE1lZGlhTGlzdCcpLm9mZignY2hpbGRfYWRkZWQnLCBwdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSk7XG5cdFx0XHRwdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHVuUHVibGlzaGVkTWVkaWFMaXN0Q2IpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3B1Ymxpc2hlZE1lZGlhTGlzdCcpLm9mZignY2hpbGRfcmVtb3ZlZCcsIHVuUHVibGlzaGVkTWVkaWFMaXN0Q2IpO1xuXHRcdFx0dW5QdWJsaXNoZWRNZWRpYUxpc3RDYiA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHVuUHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0pIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ3B1Ymxpc2hlZE1lZGlhTGlzdCcpLm9mZignY2hpbGRfcmVtb3ZlZCcsIHVuUHVibGlzaGVkTWVkaWFMaXN0Q2JGb3JBdmFpbGFibGVTdHJlYW0pO1xuXHRcdFx0dW5QdWJsaXNoZWRNZWRpYUxpc3RDYkZvckF2YWlsYWJsZVN0cmVhbSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcnRpY2lwYW50TGlzdEpvaW5BZGRlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwYXJ0aWNpcGFudExpc3QnKS5vZmYoJ2NoaWxkX2FkZGVkJywgcGFydGljaXBhbnRMaXN0Sm9pbkFkZGVkQ2IpO1xuXHRcdFx0cGFydGljaXBhbnRMaXN0Sm9pbkFkZGVkQ2IgPSBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChwYXJ0aWNpcGFudExpc3RKb2luQ2hhbmdlZENiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwYXJ0aWNpcGFudExpc3QnKS5vZmYoJ2NoaWxkX2NoYW5nZWQnLCBwYXJ0aWNpcGFudExpc3RKb2luQ2hhbmdlZENiKTtcblx0XHRcdHBhcnRpY2lwYW50TGlzdEpvaW5DaGFuZ2VkQ2IgPSBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChwYXJ0aWNpcGFudExpc3RMZWF2ZUNiKSB7XG5cdFx0XHRkYXRhcmVmLmNoaWxkKCdwYXJ0aWNpcGFudExpc3QnKS5vZmYoJ2NoaWxkX2NoYW5nZWQnLCBwYXJ0aWNpcGFudExpc3RMZWF2ZUNiKTtcblx0XHRcdHBhcnRpY2lwYW50TGlzdExlYXZlQ2IgPSBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChyZW1vdGVVbnB1Ymxpc2hlZHRDYikge1xuXHRcdFx0ZGF0YXJlZi5jaGlsZCgncHVibGlzaGVkTWVkaWFMaXN0Jykub2ZmKCdjaGlsZF9yZW1vdmVkJywgcmVtb3RlVW5wdWJsaXNoZWR0Q2IpO1xuXHRcdFx0cmVtb3RlVW5wdWJsaXNoZWR0Q2IgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIGNsb3NlIGFsbCB3ZWJydGMgc3RhY2tzXG5cdFx0Zm9yICh2YXIgaSBpbiByb29tV2VicnRjU3RhY2tzKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHJvb21XZWJydGNTdGFja3NbaV0ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKHJvb21XZWJydGNTdGFja3NbaV1bal0pIHtcblx0XHRcdFx0XHRpZiAocm9vbVdlYnJ0Y1N0YWNrc1tpXVtqXS5pc1B1Ymxpc2gpIHtcblx0XHRcdFx0XHRcdHdlYnJ0Y21uZ3IuY2xvc2VXZWJydGMocm9vbVdlYnJ0Y1N0YWNrc1tpXVtqXS5zdGFja0lkLCB0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d2VicnRjbW5nci5jbG9zZVdlYnJ0Yyhyb29tV2VicnRjU3RhY2tzW2ldW2pdLnN0YWNrSWQsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0d2VicnRjbW5nci5jbGVhcldlYnJ0Y1N0YWNrcyhyb29tV2VicnRjU3RhY2tzW2ldW2pdLnN0YWNrSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJvb21XZWJydGNTdGFja3MgPSB7fTtcblxuXG5cdFx0bU11dGVkU3RyZWFtcyA9IFtdO1xuXG5cdFx0X3JlbW92ZUFsbEF2YWlsYWJsZVN0cmVhbXMoKTtcblx0XHRpZiAodXBkYXRlUm9vbVN0YXR1c1RvQ2xvc2UgJiYgdXBkYXRlUm9vbVN0YXR1c1RvQ2xvc2UgPT09IHRydWUpIHtcblx0XHRcdGRhdGFyZWYuY2hpbGQoJ2NvbW1vbkRhdGFMaXN0JykuY2hpbGQoJ3N0YXR1cycpLnNldChST09NX1NUQVRVU19DTE9TRSk7XG5cdFx0fVxuXG5cdH1cblxuXHRpbml0KCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZXR1cm4gdGhlIHJvb20gaWRlbnRpZmllclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgcm9vbSBpZGVudGlmaWVyXG5cdFx0ICovXG5cdFx0Z2V0Um9vbUlkOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX2dldFJvb21JZCgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgdXNlciBpZGVudGlmaWVyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSAtIFRoZSB1c2VyIGlkZW50aWZpZXJcblx0XHQgKi9cblx0XHRnZXRNZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9nZXRNZSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIGEgcGFydGljaXBhbnQgaGFzIGpvaW5lZCB0aGUgcm9vbVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfY2IgLSBUaGUgY2FsbGJhY2tcblx0XHQgKi9cblx0XHRzZXRPblBhcnRpY2lwYW50Sm9pbjogZnVuY3Rpb24gKHBfY2IpIHtcblx0XHRcdF9zZXRPblBhcnRpY2lwYW50Sm9pbihwX2NiKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhIGFwcnRpY2lwYW50IGhhcyBsZWFmdCB0aGUgcm9vbVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHBfY2IgLSBUaGUgY2FsbGJhY2tcblx0XHQgKi9cblx0XHRzZXRPblBhcnRpY2lwYW50TGVhdmU6IGZ1bmN0aW9uIChwX2NiKSB7XG5cdFx0XHRfc2V0T25QYXJ0aWNpcGFudExlYXZlKHBfY2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2VuZHMgYW4gaW5zdGFudCBtZXNzYWdlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBUaGUgZW1zc2FnZSB0byBzZW5kXG5cdFx0ICogQHJldHVybiBub3RoaW5nXG5cdFx0ICovXG5cdFx0c2VuZEluc3RhbnRNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdFx0cmV0dXJuIF9zZW5kSW5zdGFudE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZWZpbmVzIHRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHRvIHNlbmQgYW4gaW5zdGFudCBtZXNzYWdlXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFja1xuXHRcdCAqL1xuXHRcdHNldE9uSW5zdGFudE1lc3NhZ2U6IGZ1bmN0aW9uIChwX2NiKSB7XG5cdFx0XHRfc2V0T25JbnN0YW50TWVzc2FnZShwX2NiKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFB1Ymxpc2hlcyBhIHN0cmVhbVxuXHRcdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBzdHJlYW0gdG8gcHVibGlzaFxuXHRcdCAqIEBwYXJhbSBsb2NhbFZpZCAtIFRoZSBsb2NhbCB2aWRlb1xuXHRcdCAqIEBwYXJhbSBhY3Rpb25UeXBlIC1cblx0XHQgKiBAcGFyYW0gZ2V0U3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0XHQgKiBAcmV0dXJuIG5vdGhpbmdcblx0XHQgKi9cblx0XHRwdWJsaXNoU3RyZWFtOiBmdW5jdGlvbiAoc3RyZWFtSWQsIGxvY2FsVmlkLCBhY3Rpb25UeXBlLCBnZXRTdHJlYW1DYikge1xuXHRcdFx0cmV0dXJuIF9wdWJsaXNoU3RyZWFtKHN0cmVhbUlkLCBsb2NhbFZpZCwgYWN0aW9uVHlwZSwgZ2V0U3RyZWFtQ2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlcndoZW4gYSBzdHJlYW0gaGFzIGJlZW4gcHVibGlzaGVkXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFja1xuXHRcdCAqL1xuXHRcdHNldE9uUHVibGlzaGVkU3RyZWFtOiBmdW5jdGlvbiAocF9jYikge1xuXHRcdFx0X3NldE9uUHVibGlzaGVkU3RyZWFtKHBfY2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5wdWJsaXNoZXMgdGhlIHN0cmVhbVxuXHRcdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBzdHJlYW0gdG8gdW5wdWJsaXNoXG5cdFx0ICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNsYWxiYWNrIHRvIHRyaWdnZXIgd2hlbiB0aGUgc3RyZWFtIGhhcyBiZWVuIHVucHVibGlzaGVkXG5cdFx0ICovXG5cdFx0dW5QdWJsaXNoU3RyZWFtOiBmdW5jdGlvbiAoc3RyZWFtSWQsIGNhbGxiYWNrKSB7XG5cdFx0XHRyZXR1cm4gX3VuUHVibGlzaFN0cmVhbShzdHJlYW1JZCwgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lcyB0aGUgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIGEgc3RyZWFtIGhhcyBiZWVuIHVucHVibGlzaGVkXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFja1xuXHRcdCAqL1xuXHRcdHNldE9uVW5QdWJsaXNoZWRTdHJlYW06IGZ1bmN0aW9uIChwX2NiKSB7XG5cdFx0XHRfc2V0T25VblB1Ymxpc2hlZFN0cmVhbShwX2NiKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogU3Vic2NyaWJlcyB0byBhIHN0cmVhbVxuXHRcdCAqIEBwYXJhbSBzdHJlYW1EYXRhIC0gVGhlIHN0cmVhbSBkYXRhXG5cdFx0ICogQHBhcmFtIHJlbW90ZVZpZCAtIFRoZSByZW1vdGUgdmlkZW9cblx0XHQgKiBAcGFyYW0gZ2V0U3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0XHQgKiBAcmV0dXJuIG5vdGhpbmdcblx0XHQgKi9cblx0XHRzdWJzY3JpYmVUb1N0cmVhbTogZnVuY3Rpb24gKHN0cmVhbURhdGEsIHJlbW90ZVZpZCwgZ2V0U3RyZWFtQ2IpIHtcblx0XHRcdHJldHVybiBfc3Vic2NyaWJlVG9TdHJlYW0oc3RyZWFtRGF0YSwgcmVtb3RlVmlkLCBnZXRTdHJlYW1DYik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbnN1YmNyaWJlcyBmcm9tIGEgc3RyZWFtXG5cdFx0ICogQHBhcmFtIHN0cmVhbUlkIC0gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHN0cmVhbSB0byB1bnN1YnNjcmliZVxuXHRcdCAqL1xuXHRcdHVuU3Vic2NyaWJlRnJvbVN0cmVhbTogZnVuY3Rpb24gKHN0cmVhbUlkKSB7XG5cdFx0XHRyZXR1cm4gX3VuU3Vic2NyaWJlRnJvbVN0cmVhbShzdHJlYW1JZCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIGFsbCB0aGUgYXZhaWxhYmxlIHN0cmVhbXNcblx0XHQgKiBAcmV0dXJuIHthcnJheX0gLSBUaGUgYXZhaWxhYmxlIHN0cmVhbXNcblx0XHQgKi9cblx0XHRnZXRBdmFpbGFibGVTdHJlYW1zOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX2dldEF2YWlsYWJsZVN0cmVhbXMoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHN0cmVhbSBtYXRjaGluZyB0aGUgaWRlbnRpZmllclxuXHRcdCAqIEBwYXJhbSBzdHJlYW0gLSBUaGUgc3RyZWFtIGlkZW50aWZpZXJcblx0XHQgKi9cblx0XHRnZXRBdmFpbGFibGVTdHJlYW06IGZ1bmN0aW9uIChzdHJlYW0pIHtcblx0XHRcdHJldHVybiBfZ2V0QXZhaWxhYmxlU3RyZWFtKHN0cmVhbSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiAgbXV0ZSBhdWRpbyB0aGUgc3RyZWFtIHN0cmVhbUlkXG5cdFx0ICogQHBhcmFtIHN0cmVhbUlkIC0gVGhlIHN0cmVhbSBpZGVudGlmaWVyIHRvIG11dGVcblx0XHQgKi9cblx0XHRtdXRlQXVkaW9TdHJlYW06IGZ1bmN0aW9uIChzdHJlYW1JZCkge1xuXHRcdFx0X211dGVBdWRpb1N0cmVhbShzdHJlYW1JZCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiB1bm11dGUgYXVkaW8gdGhlIHN0cmVhbSBzdHJlYW1JZFxuXHRcdCAqIEBwYXJhbSBzdHJlYW1JZCAtIFRoZSBzdHJlYW0gaWRlbnRpZmllciB0byBtdXRlXG5cdFx0ICovXG5cdFx0dW5tdXRlQXVkaW9TdHJlYW06IGZ1bmN0aW9uIChzdHJlYW1JZCkge1xuXHRcdFx0X3VubXV0ZUF1ZGlvU3RyZWFtKHN0cmVhbUlkKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqICBtdXRlIFZpZGVvIHRoZSBzdHJlYW0gc3RyZWFtSWRcblx0XHQgKiBAcGFyYW0gc3RyZWFtSWQgLSBUaGUgc3RyZWFtIGlkZW50aWZpZXIgdG8gbXV0ZVxuXHRcdCAqL1xuXHRcdG11dGVWaWRlb1N0cmVhbTogZnVuY3Rpb24gKHN0cmVhbUlkKSB7XG5cdFx0XHRfbXV0ZVZpZGVvU3RyZWFtKHN0cmVhbUlkKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIHVubXV0ZSBWaWRlbyB0aGUgc3RyZWFtIHN0cmVhbUlkXG5cdFx0ICogQHBhcmFtIHN0cmVhbUlkIC0gVGhlIHN0cmVhbSBpZGVudGlmaWVyIHRvIG11dGVcblx0XHQgKi9cblx0XHR1bm11dGVWaWRlb1N0cmVhbTogZnVuY3Rpb24gKHN0cmVhbUlkKSB7XG5cdFx0XHRfdW5tdXRlVmlkZW9TdHJlYW0oc3RyZWFtSWQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSByb29tLlxuXHRcdCAqIFNldHMgdGhlIGNvbm5lY3RlZCBzdGF0dXMgb2YgdGhlIGN1cnJlbnQgcGFydGljaXBhbnQgdG8gZmFsc2UsIGRlbGV0ZXMgbWVkaWFzIGFuZCBjYWxsYmFja3MsIHRoZW4gY2xvc2UgV2ViUlRDIHN0YWNrcyBpbiB1c2UuXG5cdFx0ICogQHBhcmFtIHVwZGF0ZVJvb21TdGF0dXNUb0Nsb3NlIC0gdHJ1ZSBpZiB0aGUgcm9vbSBzaG91bGQgYmUgbWFya2VkIGFzIGNsb3NlZFxuXHRcdCAqL1xuXHRcdGNsb3NlOiBmdW5jdGlvbiAodXBkYXRlUm9vbVN0YXR1c1RvQ2xvc2UpIHtcblx0XHRcdHJldHVybiBfY2xvc2UodXBkYXRlUm9vbVN0YXR1c1RvQ2xvc2UpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2FsbHMgdGhlIG1hY2hpbmcgZnVuY3Rpb24gZm9yIGEgZGVkaWNhdGVkIGV2ZW50XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV2dCAtIFRoZSBldmVudCwgaW4gXCJpbnN0YW50TWVzc2FnZVwiLCBcInB1Ymxpc2hlZFN0cmVhbVwiLCBcInVuUHVibGlzaGVkU3RyZWFtXCIsIFwicGFydGljaXBhbnRKb2luXCIsIFwicGFydGljaXBhbnRMZWF2ZVwiXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gcF9jYiAtIFRoZSBjYWxsYmFjayB0byBjYWxsXG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIChldnQsIHBfY2IpIHtcblx0XHRcdHN3aXRjaCAoZXZ0KSB7XG5cdFx0XHRjYXNlICdpbnN0YW50TWVzc2FnZSc6XG5cdFx0XHRcdF9zZXRPbkluc3RhbnRNZXNzYWdlKHBfY2IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3B1Ymxpc2hlZFN0cmVhbSc6XG5cdFx0XHRcdF9zZXRPblB1Ymxpc2hlZFN0cmVhbShwX2NiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1blB1Ymxpc2hlZFN0cmVhbSc6XG5cdFx0XHRcdF9zZXRPblVuUHVibGlzaGVkU3RyZWFtKHBfY2IpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3BhcnRpY2lwYW50Sm9pbic6XG5cdFx0XHRcdF9zZXRPblBhcnRpY2lwYW50Sm9pbihwX2NiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwYXJ0aWNpcGFudExlYXZlJzpcblx0XHRcdFx0X3NldE9uUGFydGljaXBhbnRMZWF2ZShwX2NiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmVycignKHdlYmNvbVNESzo6cm9vbVsnICsgcm9vbUlkICsgJ106Om9uKXVuc3VwcG9ydGVkICcgKyBldnQgKyAnIGV2ZW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb29tLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZSBsb2NhbHN0cmVhbS5qcyAtIEpTIGZpbGUgdG8gaGFuZGxlIGxvY2FsIHN0cmVhbXMuXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgZGF0YSBzdHJ1Y3R1cmVzIHRvIHN0b3JlIGFuZCBoYW5kbGUgdmlkZW8sIGF1ZGlvIGFuZCB2aWRlby1hbmQtYXVkaW8gc3RyZWFtcy4gVGhlIGF1ZGlvIGFuZCB2aWRlbyBzdHJlYW1zIGFyZSBtYW5hZ2VkIHRvby5cbiAqIEluaXRpYWxpemF0aW9uIG1ldGhvZHMgYXJlIHByb3ZpZGVkLCBzdHJlYW0gY29ubmVjdGlvbnMgYW5kIGxpc3RlbmVycyB0b28uXG4gKiBAYXV0aG9yIFdlYmNvbVxuICovXG5cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBUaGUgbG9jYWwgc3RyZWFtIG9iamVjdCB3aXRoIGl0cyBzdHJlYW1zLCBmbGFncyBhbmQgY2FsbGJhY2tzLiBJdCBpcyBhIHNpbmdsZXRvbi5cbiAqL1xudmFyIGxvY2Fsc3RyZWFtID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIGxvY2FsIHZpZGVvIHN0cmVhbXMsIGFzIEhUTUwgdmlkZW8gb2JqZWN0cywgaW4gYW4gYXJyYXlcblx0ICovXG5cdHZhciBsb2NhbFZpZGVvU3RyZWFtcyA9IFtdO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBsb2NhbCBhdWRpbyBzdHJlYW1zLCBhcyBIVE1MIHZpZGVvIG9iamVjdHMsIGluIGFuIGFycmF5XG5cdCAqL1xuXHR2YXIgbG9jYWxBdWRpb1N0cmVhbXMgPSBbXTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgbG9jYWwgYXVkaW8gYW5kIHZpZGVvIHN0cmVhbXMsIGFzIEhUTUwgdmlkZW8gb2JqZWN0cywgaW4gYW4gYXJyYXlcblx0ICovXG5cdHZhciBsb2NhbEF1ZGlvVmlkZW9TdHJlYW1zID0gW107XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIHZpZGVvIHN0cmVhbSBvYmplY3Rcblx0ICovXG5cdHZhciBzdHJlYW1WaWRlbyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIGF1ZGlvIHN0cmVhbSBvYmplY3Rcblx0ICovXG5cdHZhciBzdHJlYW1BdWRpbyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIHZpZGVvIGFuZCBhdWRpbyBzdHJlYW0gb2JqZWN0XG5cdCAqL1xuXHR2YXIgc3RyZWFtQXVkaW9WaWRlbyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgY29udGFpbmluZyB2aWRlbyBsaXN0ZW5lcnMgYXMgZnVuY3Rpb25zLiBUaGVzZSBsaXN0ZW5lcnMgd2lsbCBiZSB0cmlnZ2VyZWQgaWYgdGhlIHZpZGVvIHN0cmVhbSBpcyBlc3RhYmxpc2hlZC5cblx0ICovXG5cdHZhciBsaXN0ZW5lcnNWaWRlbyA9IFtdO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEFuIGFycmF5IGNvbnRhaW5pbmcgYXVkaW8gbGlzdGVuZXJzIGFzIGZ1bmN0aW9ucy4gVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgdHJpZ2dlcmVkIGlmIHRoZSBhdWRpbyBzdHJlYW0gaXMgZXN0YWJsaXNoZWQuXG5cdCAqL1xuXHR2YXIgbGlzdGVuZXJzQXVkaW8gPSBbXTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBjb250YWluaW5nIGF1ZGlvIGFuZCB2aWRlbyBsaXN0ZW5lcnMgYXMgZnVuY3Rpb25zLiBUaGVzZSBsaXN0ZW5lcnMgd2lsbCBiZSB0cmlnZ2VyZWQgaWYgdGhlIHZpZGUtYW5kLWF1ZGlvIHN0cmVhbSBpcyBlc3RhYmxpc2hlZC5cblx0ICovXG5cdHZhciBsaXN0ZW5lcnNBdWRpb1ZpZGVvID0gW107XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIGxvY2FsIHZpZGVvIHN0cmVhbSwgYXMgYW4gSFRNTCB2aWRlbyBlbGVtZW50XG5cdCAqL1xuXHR2YXIgbUxvY2FsU3RyZWFtVmlkZW8gPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBsb2NhbCBhdWRpbyBzdHJlYW0sIGFzIGFuIEhUTUwgdmlkZW8gZWxlbWVudFxuXHQgKi9cblx0dmFyIG1Mb2NhbFN0cmVhbUF1ZGlvID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgbG9jYWwgYXVkaW8gYW5kIHZpZGVvIHN0cmVhbSwgYXMgYW4gSFRNTCB2aWRlbyBlbGVtZW50XG5cdCAqL1xuXHR2YXIgbUxvY2FsU3RyZWFtQXVkaW9WaWRlbyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSB2aWRlbyBpbml0aWFsaXNhdGlvbiBpcyBpbiBwcm9ncmVzc1xuXHQgKi9cblx0dmFyIGluaXRWaWRlb1Byb2dyZXNzID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBhdWRpbyBpbml0aWFsaXNhdGlvbiBpcyBpbiBwcm9ncmVzc1xuXHQgKi9cblx0dmFyIGluaXRBdWRpb1Byb2dyZXNzID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSBhdWRpbyBhbmQgdmlkZW8gaW5pdGlhbGlzYXRpb24gaXMgaW4gcHJvZ3Jlc3Ncblx0ICovXG5cdHZhciBpbml0QXVkaW9WaWRlb1Byb2dyZXNzID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSB2aWRlbyBsb2NhbCBzdHJlYW0uXG5cdCAqIFRoZSB3ZWIgYnJvd3NlcidzIHVzZXIgbWVkaWEgd2lsbCBiZSBjYWxsZWQsIHNvIHRoZSBicm93c2VyIGluIHVzZSBtdXN0IGJlIHJlY2VudCAoRmlyZWZveCAxNywgQ2hyb21lIDIxLCBPcGVyYSAxOCBhbmQgbGF0ZXIgdmVyc2lvbnMpLlxuXHQgKiBBIHZpZGVvIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkLCBhbmQgcHVzaGVkIHRvIHRoZSBsb2NhbCBzdHJlYW1zIG9iamVjdHMuIFRoZSBjYXRjaGVkIHZpZGVvIGFuZCBhdWRpbyBzdHJlYW0gd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgY3JlYXRlZCBIVE1MIGVsZW1lbnQuXG5cdCAqIExpc3RlbmVycyB3aWxsIGFsc28gYmUgY2FsbGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdFZpZGVvKGNhbGxiYWNrKXtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6bG9jYWxzdHJlYW06OmluaXRWaWRlbyknKTtcblx0XHRpZiAoISBpbml0VmlkZW9Qcm9ncmVzcykge1xuXHRcdFx0aW5pdFZpZGVvUHJvZ3Jlc3M9dHJ1ZTtcblxuXHRcdFx0bmF2aWdhdG9yLmdldE1lZGlhID0gZ2V0VXNlck1lZGlhO1xuXHRcdFx0bUxvY2FsU3RyZWFtVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdWSURFTycpO1xuXHRcdFx0bUxvY2FsU3RyZWFtVmlkZW8ubXV0ZWQ9IHRydWU7XG5cdFx0XHRsb2NhbFZpZGVvU3RyZWFtcy5wdXNoKG1Mb2NhbFN0cmVhbVZpZGVvKTtcblxuXHRcdFx0aWYoc3RyZWFtVmlkZW8gPT09IG51bGwpe1xuXHRcdFx0XHRuYXZpZ2F0b3IuZ2V0TWVkaWEoe2F1ZGlvIDogZmFsc2UsdmlkZW8gOiB0cnVlfSxcblx0XHRcdFx0XHRmdW5jdGlvbihzKSB7XG5cdFx0XHRcdFx0XHRzdHJlYW1WaWRlbyA9IHM7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsVmlkZW9TdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdGF0dGFjaE1lZGlhU3RyZWFtKGxvY2FsVmlkZW9TdHJlYW1zW2ldLHN0cmVhbVZpZGVvKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxvY2FsVmlkZW9TdHJlYW1zID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqPTA7ajxsaXN0ZW5lcnNWaWRlby5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyc1ZpZGVvW2pdKHN0cmVhbVZpZGVvKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxpc3RlbmVyc1ZpZGVvID0gW107XG5cdFx0XHRcdFx0XHRpbml0VmlkZW9Qcm9ncmVzcz1mYWxzZTtcblxuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3Igb24gd2VicnRjTG9jYWxTdHJlYW0gLSB3ZWJraXRHZXRVc2VyTWVkaWEgOiBlcnJvcj0nKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGlyKGVycm9yKTtcblx0XHRcdFx0XHRcdGluaXRWaWRlb1Byb2dyZXNzPWZhbHNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxWaWRlb1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRhdHRhY2hNZWRpYVN0cmVhbShsb2NhbFZpZGVvU3RyZWFtc1tpXSxzdHJlYW1WaWRlbyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9jYWxWaWRlb1N0cmVhbXMgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaj0wO2o8bGlzdGVuZXJzVmlkZW8ubGVuZ3RoO2orKykge1xuXHRcdFx0XHRcdGxpc3RlbmVyc1ZpZGVvW2pdKHN0cmVhbVZpZGVvKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0ZW5lcnNWaWRlbyA9IFtdO1xuXHRcdFx0XHRpbml0VmlkZW9Qcm9ncmVzcz1mYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIHZpZGVvIGxvY2FsIHN0cmVhbS5cblx0ICogVGhlIHdlYiBicm93c2VyJ3MgdXNlciBtZWRpYSB3aWxsIGJlIGNhbGxlZCwgc28gdGhlIGJyb3dzZXIgaW4gdXNlIG11c3QgYmUgcmVjZW50IChGaXJlZm94IDE3LCBDaHJvbWUgMjEsIE9wZXJhIDE4IGFuZCBsYXRlciB2ZXJzaW9ucykuXG5cdCAqIEEgdmlkZW8gZWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQsIGFuZCBwdXNoZWQgdG8gdGhlIGxvY2FsIHN0cmVhbXMgb2JqZWN0cy4gVGhlIGNhdGNoZWQgYXVkaW8gc3RyZWFtIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlIGNyZWF0ZWQgSFRNTCBlbGVtZW50LlxuXHQgKiBMaXN0ZW5lcnMgd2lsbCBhbHNvIGJlIGNhbGxlZC5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXRBdWRpbyhjYWxsYmFjaykge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpsb2NhbHN0cmVhbTo6aW5pdEF1ZGlvKScpO1xuXHRcdGlmICghIGluaXRBdWRpb1Byb2dyZXNzKSB7XG5cdFx0XHRpbml0QXVkaW9Qcm9ncmVzcz10cnVlO1xuXG5cdFx0XHRuYXZpZ2F0b3IuZ2V0TWVkaWEgPSBnZXRVc2VyTWVkaWE7XG5cdFx0XHRtTG9jYWxTdHJlYW1BdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0FVRElPJyk7XG5cdFx0XHRtTG9jYWxTdHJlYW1BdWRpby5tdXRlZD0gdHJ1ZTtcblx0XHRcdGxvY2FsQXVkaW9TdHJlYW1zLnB1c2gobUxvY2FsU3RyZWFtQXVkaW8pO1xuXG5cdFx0XHRpZihzdHJlYW1BdWRpbyA9PT0gbnVsbCl7XG5cdFx0XHRcdG5hdmlnYXRvci5nZXRNZWRpYSh7YXVkaW8gOiB0cnVlLHZpZGVvIDogZmFsc2V9LFxuXHRcdFx0XHRcdGZ1bmN0aW9uKHMpIHtcblx0XHRcdFx0XHRcdHN0cmVhbUF1ZGlvID0gcztcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxBdWRpb1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxBdWRpb1N0cmVhbXNbaV0sc3RyZWFtQXVkaW8pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bG9jYWxBdWRpb1N0cmVhbXMgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGo9MDtqPGxpc3RlbmVyc0F1ZGlvLmxlbmd0aDtqKyspIHtcblx0XHRcdFx0XHRcdFx0bGlzdGVuZXJzQXVkaW9bal0oc3RyZWFtQXVkaW8pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGlzdGVuZXJzQXVkaW8gPSBbXTtcblx0XHRcdFx0XHRcdGluaXRBdWRpb1Byb2dyZXNzPWZhbHNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBvbiB3ZWJydGNMb2NhbFN0cmVhbSAtIHdlYmtpdEdldFVzZXJNZWRpYSA6ZXJyb3I9Jyk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmRpcihlcnJvcik7XG5cdFx0XHRcdFx0XHRpbml0QXVkaW9Qcm9ncmVzcz1mYWxzZTtcblxuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsQXVkaW9TdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxBdWRpb1N0cmVhbXNbaV0sc3RyZWFtQXVkaW8pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxvY2FsQXVkaW9TdHJlYW1zID0gW107XG5cdFx0XHRcdGZvciAodmFyIGo9MDtqPGxpc3RlbmVyc0F1ZGlvLmxlbmd0aDtqKyspIHtcblx0XHRcdFx0XHRsaXN0ZW5lcnNBdWRpb1tqXShzdHJlYW1BdWRpbyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdGVuZXJzQXVkaW8gPSBbXTtcblx0XHRcdFx0aW5pdEF1ZGlvUHJvZ3Jlc3M9ZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBhdWRpby1hbmQtdmlkZW8gbG9jYWwgc3RyZWFtLlxuXHQgKiBUaGUgd2ViIGJyb3dzZXIncyB1c2VyIG1lZGlhIHdpbGwgYmUgY2FsbGVkLCBzbyB0aGUgYnJvd3NlciBpbiB1c2UgbXVzdCBiZSByZWNlbnQgKEZpcmVmb3ggMTcsIENocm9tZSAyMSwgT3BlcmEgMTggYW5kIGxhdGVyIHZlcnNpb25zKS5cblx0ICogQSB2aWRlbyBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCwgYW5kIHB1c2hlZCB0byB0aGUgbG9jYWwgc3RyZWFtcyBvYmplY3RzLiBUaGUgY2F0Y2hlZCBhdWRpbyBzdHJlYW0gd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgY3JlYXRlZCBIVE1MIGVsZW1lbnQuXG5cdCAqIExpc3RlbmVycyB3aWxsIGFsc28gYmUgY2FsbGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdEF1ZGlvVmlkZW8oY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6bG9jYWxzdHJlYW06OmluaXRBdWRpb1ZpZGVvKScpO1xuXHRcdGlmICghaW5pdEF1ZGlvVmlkZW9Qcm9ncmVzcykge1xuXHRcdFx0aW5pdEF1ZGlvVmlkZW9Qcm9ncmVzcz10cnVlO1xuXG5cdFx0XHRuYXZpZ2F0b3IuZ2V0TWVkaWEgPSBnZXRVc2VyTWVkaWE7XG5cdFx0XHRtTG9jYWxTdHJlYW1BdWRpb1ZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQVVESU9WSURFTycpO1xuXHRcdFx0bUxvY2FsU3RyZWFtQXVkaW9WaWRlby5tdXRlZD0gdHJ1ZTtcblx0XHRcdGxvY2FsQXVkaW9WaWRlb1N0cmVhbXMucHVzaChtTG9jYWxTdHJlYW1BdWRpb1ZpZGVvKTtcblxuXHRcdFx0aWYoc3RyZWFtQXVkaW9WaWRlbyA9PT0gbnVsbCl7XG5cdFx0XHRcdG5hdmlnYXRvci5nZXRNZWRpYSh7YXVkaW8gOiB0cnVlLHZpZGVvIDogdHJ1ZX0sXG5cdFx0XHRcdFx0KHMpID0+IHtcblxuXHRcdFx0XHRcdFx0c3RyZWFtQXVkaW9WaWRlbyA9IHM7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsQXVkaW9WaWRlb1N0cmVhbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxBdWRpb1ZpZGVvU3RyZWFtc1tpXSxzdHJlYW1BdWRpb1ZpZGVvKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxvY2FsQXVkaW9WaWRlb1N0cmVhbXMgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAobGV0IGo9MDtqPGxpc3RlbmVyc0F1ZGlvVmlkZW8ubGVuZ3RoO2orKykge1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lcnNBdWRpb1ZpZGVvW2pdKHN0cmVhbUF1ZGlvVmlkZW8pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGlzdGVuZXJzQXVkaW9WaWRlbyA9IFtdO1xuXHRcdFx0XHRcdFx0aW5pdEF1ZGlvVmlkZW9Qcm9ncmVzcz1mYWxzZTtcblxuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OmxvY2Fsc3RyZWFtOjppbml0QXVkaW9WaWRlbzo6RXJyb3Igb24gd2VicnRjTG9jYWxTdHJlYW0gLSB3ZWJraXRHZXRVc2VyTWVkaWEgOiBlcnJvcj0nKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGlyKGVycm9yKTtcblx0XHRcdFx0XHRcdGluaXRBdWRpb1ZpZGVvUHJvZ3Jlc3M9ZmFsc2U7XG5cblx0XHRcdFx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbEF1ZGlvVmlkZW9TdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxBdWRpb1ZpZGVvU3RyZWFtc1tpXSxzdHJlYW1BdWRpb1ZpZGVvKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhbEF1ZGlvVmlkZW9TdHJlYW1zID0gW107XG5cdFx0XHRcdGZvciAobGV0IGo9MDtqPGxpc3RlbmVyc0F1ZGlvVmlkZW8ubGVuZ3RoO2orKykge1xuXHRcdFx0XHRcdGxpc3RlbmVyc0F1ZGlvVmlkZW9bal0oc3RyZWFtQXVkaW9WaWRlbyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdGVuZXJzQXVkaW9WaWRlbyA9IFtdO1xuXHRcdFx0XHRpbml0QXVkaW9WaWRlb1Byb2dyZXNzPWZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlcyBhbGwgdGhlIHN0cmVhbXMuXG5cdCAqIFNldCBhbGwgdGhlIGluaXRQcm9ncmVzcyBmbGFncyB0byBmYWxzZSwgZGV0YWNoIGFsbCB0aGUgc3RyZWFtcyBhZnRlciBzdG9wcGluZyB0aGVtLlxuXHQgKi9cblx0ZnVuY3Rpb24gY2xvc2UoKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OmxvY2Fsc3RyZWFtOjpjbG9zZSknKTtcblx0XHRpZiAobUxvY2FsU3RyZWFtVmlkZW8pIHtcblx0XHRcdGRldGFjaE1lZGlhU3RyZWFtKG1Mb2NhbFN0cmVhbVZpZGVvKTtcblx0XHRcdG1Mb2NhbFN0cmVhbVZpZGVvPW51bGw7XG5cdFx0fVxuXHRcdGlmIChzdHJlYW1BdWRpb1ZpZGVvKSB7XG5cdFx0XHRzdHJlYW1BdWRpb1ZpZGVvLnN0b3AoKTtcblx0XHRcdHN0cmVhbUF1ZGlvVmlkZW89bnVsbDtcblx0XHR9XG5cdFx0aWYgKHN0cmVhbVZpZGVvKSB7XG5cdFx0XHRzdHJlYW1WaWRlby5zdG9wKCk7XG5cdFx0XHRzdHJlYW1WaWRlbyA9IG51bGw7XG5cdFx0fVxuXHRcdGluaXRWaWRlb1Byb2dyZXNzPWZhbHNlO1xuXG5cdFx0aWYgKG1Mb2NhbFN0cmVhbUF1ZGlvKSB7XG5cdFx0XHRkZXRhY2hNZWRpYVN0cmVhbShtTG9jYWxTdHJlYW1BdWRpbyk7XG5cdFx0XHRtTG9jYWxTdHJlYW1BdWRpbz1udWxsO1xuXHRcdH1cblx0XHRpZiAoc3RyZWFtQXVkaW8pIHtcblx0XHRcdHN0cmVhbUF1ZGlvLnN0b3AoKTtcblx0XHRcdHN0cmVhbUF1ZGlvID0gbnVsbDtcblx0XHR9XG5cblx0XHRpbml0QXVkaW9Qcm9ncmVzcz1mYWxzZTtcblxuXHRcdGlmIChtTG9jYWxTdHJlYW1BdWRpb1ZpZGVvKSB7XG5cdFx0XHRkZXRhY2hNZWRpYVN0cmVhbShtTG9jYWxTdHJlYW1BdWRpb1ZpZGVvKTtcblx0XHRcdG1Mb2NhbFN0cmVhbUF1ZGlvVmlkZW89bnVsbDtcblx0XHR9XG5cdFx0aWYgKHN0cmVhbUF1ZGlvVmlkZW8pIHtcblx0XHRcdHN0cmVhbUF1ZGlvVmlkZW8uc3RvcCgpO1xuXHRcdFx0c3RyZWFtQXVkaW9WaWRlbyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0aW5pdEF1ZGlvVmlkZW9Qcm9ncmVzcz1mYWxzZTtcblx0fVxuXG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSB2aWRlbyBzdHJlYW1cblx0XHQgKi9cblx0XHRnZXRWaWRlb1N0cmVhbTpmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc3RyZWFtVmlkZW87XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgdmlkZW8gbGlzdGVuZXIgd2hpY2ggd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHZpZGVvIHN0cmVhbSBpcyBlc3RhYmxpc2hlZC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIFRoZSBsaXN0ZW5lciB0byBhZGRcblx0XHQgKi9cblx0XHRhZGRWaWRlb0xpc3RlbmVyOiBmdW5jdGlvbihjYikge1xuXHRcdFx0bGlzdGVuZXJzVmlkZW8ucHVzaChjYik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyB0aGUgdmlkZW8gbG9jYWwgc3RyZWFtLlxuXHRcdCAqIFRoZSB3ZWIgYnJvd3NlcidzIHVzZXIgbWVkaWEgd2lsbCBiZSBjYWxsZWQsIHNvIHRoZSBicm93c2VyIGluIHVzZSBtdXN0IGJlIHJlY2VudCAoRmlyZWZveCAxNywgQ2hyb21lIDIxLCBPcGVyYSAxOCBhbmQgbGF0ZXIgdmVyc2lvbnMpLlxuXHRcdCAqIEEgdmlkZW8gZWxlbWVudCB3aWxsIGJlIGNyZWF0ZWQsIGFuZCBwdXNoZWQgdG8gdGhlIGxvY2FsIHN0cmVhbXMgb2JqZWN0cy4gVGhlIGNhdGNoZWQgdmlkZW8gYW5kIGF1ZGlvIHN0cmVhbSB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBjcmVhdGVkIEhUTUwgZWxlbWVudC5cblx0XHQgKiBMaXN0ZW5lcnMgd2lsbCBhbHNvIGJlIGNhbGxlZC5cblx0XHQgKi9cblx0XHRpbml0VmlkZW86IGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdFZpZGVvKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBNYWtlcyB0aGUgY29ubmVjdGlvbiB0byB0aGUgbG9jYWwgdmlkZW8gc3RyZWFtLCBhbmQgYXR0YWNoIHRoZSBsb2NhbCB2aWRlbyBzdHJlYW0gdG8gdGhlIHZpZGVvIGVsZW1lbnQgaWYgZGVmaW5lZC5cblx0XHQgKiBJZiB0aGUgdmlkZW8gZWxlbWVudCBpcyBub3QgZGVmaW5lZCwgdGhlIHZpZGVvIGxvY2FsIHN0cmVhbSB3aWxsIGJlIGluaXRpYWxpemVkIGFuZCBhIGRlZGljYXRlZCBIVE1MIHZpZGVvIHRhZyB3aWxsIGJlIGNyZWF0ZWQuXG5cdFx0ICogQHBhcmFtIHZpZGVvRWx0IC0gVGhlIHZpZGVvIGVsZW1lbnQgd2hlcmUgcGxhY2UgdGhlIGNvbm5lY3RlZCBsb2NhbCB2aWRlbyBzdHJlYW0uIGlmIG51bGwsIGEgbmV3IG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG5cdFx0ICogQHBhcmFtIGdldExvY2FsU3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0XHQgKi9cblx0XHRjb25uZWN0TG9jYWxWaWRlb1N0cmVhbTpmdW5jdGlvbiAodmlkZW9FbHQsIHB1Ymxpc2hTdHJlYW1DYiwgZ2V0TG9jYWxTdHJlYW1DYikge1xuXHRcdFx0aWYgKHZpZGVvRWx0KSB7XG5cdFx0XHRcdHZpZGVvRWx0Lm11dGVkPXRydWU7XG5cdFx0XHRcdGlmIChzdHJlYW1WaWRlbykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpsb2NhbHN0cmVhbTo6Y29ubmVjdExvY2FsVmlkZW9TdHJlYW0pdXNlIGV4aXN0aW5nIHN0cmVhbVZpZGVvJyk7XG5cdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0odmlkZW9FbHQsc3RyZWFtVmlkZW8pO1xuXHRcdFx0XHRcdGlmIChnZXRMb2NhbFN0cmVhbUNiICYmIHR5cGVvZiBnZXRMb2NhbFN0cmVhbUNiPT0nZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRnZXRMb2NhbFN0cmVhbUNiKHN0cmVhbVZpZGVvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYWxWaWRlb1N0cmVhbXMucHVzaCh2aWRlb0VsdCk7XG5cdFx0XHRcdFx0aWYgKGdldExvY2FsU3RyZWFtQ2IgJiYgdHlwZW9mIGdldExvY2FsU3RyZWFtQ2I9PSdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyc1ZpZGVvLnB1c2goZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGluaXRWaWRlbyhwdWJsaXNoU3RyZWFtQ2IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXN0cmVhbVZpZGVvKSB7XG5cdFx0XHRcdFx0aWYgKGdldExvY2FsU3RyZWFtQ2IgJiYgdHlwZW9mIGdldExvY2FsU3RyZWFtQ2I9PSdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyc1ZpZGVvLnB1c2goZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGluaXRWaWRlbyhwdWJsaXNoU3RyZWFtQ2IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChnZXRMb2NhbFN0cmVhbUNiICYmIHR5cGVvZiBnZXRMb2NhbFN0cmVhbUNiPT0nZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRnZXRMb2NhbFN0cmVhbUNiKHN0cmVhbVZpZGVvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGF1ZGlvIHN0cmVhbVxuXHRcdCAqIEByZXR1cm4gLSBBbiBhdWRpbyBzdHJlYW1cblx0XHQgKi9cblx0XHRnZXRBdWRpb1N0cmVhbTpmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc3RyZWFtQXVkaW87XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGFuIGF1ZGlvIGxpc3RlbmVyIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRoZSBhdWRpbyBzdHJlYW0gaXMgZXN0YWJsaXNoZWQuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBUaGUgbGlzdGVuZXIgdG8gYWRkXG5cdFx0ICovXG5cdFx0YWRkQXVkaW9MaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcblx0XHRcdGxpc3RlbmVyc0F1ZGlvLnB1c2goY2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZXMgdGhlIGF1ZGlvIGxvY2FsIHN0cmVhbS5cblx0XHQgKiBUaGUgd2ViIGJyb3dzZXIncyB1c2VyIG1lZGlhIHdpbGwgYmUgY2FsbGVkLCBzbyB0aGUgYnJvd3NlciBpbiB1c2UgbXVzdCBiZSByZWNlbnQgKEZpcmVmb3ggMTcsIENocm9tZSAyMSwgT3BlcmEgMTggYW5kIGxhdGVyIHZlcnNpb25zKS5cblx0XHQgKiBBIHZpZGVvIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkLCBhbmQgcHVzaGVkIHRvIHRoZSBsb2NhbCBzdHJlYW1zIG9iamVjdHMuIFRoZSBjYXRjaGVkIGF1ZGlvIHN0cmVhbSB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBjcmVhdGVkIEhUTUwgZWxlbWVudC5cblx0XHQgKiBMaXN0ZW5lcnMgd2lsbCBhbHNvIGJlIGNhbGxlZC5cblx0XHQgKi9cblx0XHRpbml0QXVkaW86IGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdEF1ZGlvKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb25uZWN0cyB0byB0aGUgbG9jYWwgYXVkaW8gc3RyZWFtIGFuZCBzZXRzIGl0IHRvIHRoZSBhdWRpbyBlbGVtZW50IGlmIGRlZmluZWQuXG5cdFx0ICogSWYgbm90LCBhIGRlZGljYXRlZCBIVE1MIHZpZGVvIHdpbGwgYmUgY3JlYXRlZC4gVGhlIGF1ZGlvIG1lZGlhIHN0cmVhbSB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBlbGVtZW50IGluIHVzZS5cblx0XHQgKiBAcGFyYW0gQXVkaW9FbHQgLSBUaGUgYXVkaW8gZWxlbWVudCBpbiB1c2UgcG9zc2Vzc2luZyB0aGUgYXR0YWNoZWQgbG9jYWwgYXVkaW8gc3RyZWFtXG5cdFx0ICogQHBhcmFtIGdldExvY2FsU3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0XHQgKi9cblx0XHRjb25uZWN0TG9jYWxBdWRpb1N0cmVhbTpmdW5jdGlvbiAoQXVkaW9FbHQsIHB1Ymxpc2hTdHJlYW1DYiwgZ2V0TG9jYWxTdHJlYW1DYikge1xuXHRcdFx0aWYgKEF1ZGlvRWx0KSB7XG5cdFx0XHRcdEF1ZGlvRWx0Lm11dGVkPXRydWU7XG5cdFx0XHRcdGlmIChzdHJlYW1BdWRpbykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpsb2NhbHN0cmVhbTo6Y29ubmVjdExvY2FsQXVkaW9TdHJlYW0pdXNlIGV4aXN0aW5nIHN0cmVhbUF1ZGlvJyk7XG5cdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0oQXVkaW9FbHQsc3RyZWFtQXVkaW8pO1xuXHRcdFx0XHRcdGlmIChnZXRMb2NhbFN0cmVhbUNiICYmIHR5cGVvZiBnZXRMb2NhbFN0cmVhbUNiPT0nZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRnZXRMb2NhbFN0cmVhbUNiKHN0cmVhbUF1ZGlvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYWxBdWRpb1N0cmVhbXMucHVzaChBdWRpb0VsdCk7XG5cdFx0XHRcdFx0aWYgKGdldExvY2FsU3RyZWFtQ2IgJiYgdHlwZW9mIGdldExvY2FsU3RyZWFtQ2I9PSdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyc0F1ZGlvLnB1c2goZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGluaXRBdWRpbyhwdWJsaXNoU3RyZWFtQ2IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXN0cmVhbUF1ZGlvKSB7XG5cdFx0XHRcdFx0aWYgKGdldExvY2FsU3RyZWFtQ2IgJiYgdHlwZW9mIGdldExvY2FsU3RyZWFtQ2I9PSdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyc0F1ZGlvLnB1c2goZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGluaXRBdWRpbyhwdWJsaXNoU3RyZWFtQ2IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChnZXRMb2NhbFN0cmVhbUNiICYmIHR5cGVvZiBnZXRMb2NhbFN0cmVhbUNiPT0nZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRnZXRMb2NhbFN0cmVhbUNiKHN0cmVhbUF1ZGlvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGF1ZGlvIHZpZGVvIHN0cmVhbVxuXHRcdCAqIEByZXR1cm4gLSBUaGUgYXVkaW8gYW5kIHZpZGVvIHN0cmVhbVxuXHRcdCAqL1xuXHRcdGdldEF1ZGlvVmlkZW9TdHJlYW06ZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHN0cmVhbUF1ZGlvVmlkZW87XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSBhdWRpby1hbmQtdmlkZW8gbGlzdGVuZXIgd2hpY2ggd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGF1ZGktYW5kLXZpZGVvIHN0cmVhbSBpcyBlc3RhYmxpc2hlZC5cblx0XHQgKiBAcGFyYW0gY2IgLSBUaGUgYXVkaW8gYW5kIHZpZGVvIGxpc3RlbmVyIHRvIGFkZFxuXHRcdCAqL1xuXHRcdGFkZEF1ZGlvVmlkZW9MaXN0ZW5lcjogZnVuY3Rpb24oY2IpIHtcblx0XHRcdGxpc3RlbmVyc0F1ZGlvVmlkZW8ucHVzaChjYik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplcyB0aGUgYXVkaW8tYW5kLXZpZGVvIGxvY2FsIHN0cmVhbS5cblx0XHQgKiBUaGUgd2ViIGJyb3dzZXIncyB1c2VyIG1lZGlhIHdpbGwgYmUgY2FsbGVkLCBzbyB0aGUgYnJvd3NlciBpbiB1c2UgbXVzdCBiZSByZWNlbnQgKEZpcmVmb3ggMTcsIENocm9tZSAyMSwgT3BlcmEgMTggYW5kIGxhdGVyIHZlcnNpb25zKS5cblx0XHQgKiBBIHZpZGVvIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkLCBhbmQgcHVzaGVkIHRvIHRoZSBsb2NhbCBzdHJlYW1zIG9iamVjdHMuIFRoZSBjYXRjaGVkIGF1ZGlvIHN0cmVhbSB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBjcmVhdGVkIEhUTUwgZWxlbWVudC5cblx0XHQgKiBMaXN0ZW5lcnMgd2lsbCBhbHNvIGJlIGNhbGxlZC5cblx0XHQgKi9cblx0XHRpbml0QXVkaW9WaWRlbzogZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0QXVkaW9WaWRlbygpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29ubmVjdHMgdGhlIGxvY2FsIGF1ZGlvIGFuZCB2aWRlbyBzdHJlYW1zIGFuZCBhc3NpZ25zIHRoZW0gdG8gdGhlIGF1ZGlvIGFuZCB2aWRlbyBlbGVtZW50IGlmIG5lZWRlZC5cblx0XHQgKiBJZiBubyBIVE1MIGVsZW1lbnQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbm4gYSBuZXcgZWxlbWVudCBpcyBjcmVhdGVkXG5cdFx0ICogQHBhcmFtIEF1ZGlvVmlkZW9FbHQgLSBUaGUgZWxlbWVudCB3aGVyZSB0byBwbGFjZSB0aGUgYXVkaW8gYW5kIHZpZGVvIGxvY2FsIHN0cmVhbXNcblx0XHQgKiBAcGFyYW0gZ2V0TG9jYWxTdHJlYW1DYiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIG1lZGlhc3RyZWFtIG9iamVjdFxuXHRcdCAqL1xuXHRcdGNvbm5lY3RMb2NhbEF1ZGlvVmlkZW9TdHJlYW06ZnVuY3Rpb24gKEF1ZGlvVmlkZW9FbHQsIHB1Ymxpc2hTdHJlYW1DYiwgZ2V0TG9jYWxTdHJlYW1DYikge1xuXHRcdFx0aWYgKEF1ZGlvVmlkZW9FbHQpIHtcblx0XHRcdFx0QXVkaW9WaWRlb0VsdC5tdXRlZD10cnVlO1xuXHRcdFx0XHRpZiAoc3RyZWFtQXVkaW9WaWRlbykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjpsb2NhbHN0cmVhbTo6Y29ubmVjdExvY2FsQXVkaW9WaWRlb1N0cmVhbSl1c2UgZXhpc3Rpbmcgc3RyZWFtQXVkaW9WaWRlbycpO1xuXHRcdFx0XHRcdGF0dGFjaE1lZGlhU3RyZWFtKEF1ZGlvVmlkZW9FbHQsc3RyZWFtQXVkaW9WaWRlbyk7XG5cdFx0XHRcdFx0aWYgKGdldExvY2FsU3RyZWFtQ2IpIHtcblx0XHRcdFx0XHRcdGdldExvY2FsU3RyZWFtQ2Ioc3RyZWFtQXVkaW9WaWRlbyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2FsQXVkaW9WaWRlb1N0cmVhbXMucHVzaChBdWRpb1ZpZGVvRWx0KTtcblx0XHRcdFx0XHRpZiAoZ2V0TG9jYWxTdHJlYW1DYiAmJiB0eXBlb2YgZ2V0TG9jYWxTdHJlYW1DYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRsaXN0ZW5lcnNBdWRpb1ZpZGVvLnB1c2goZ2V0TG9jYWxTdHJlYW1DYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGluaXRBdWRpb1ZpZGVvKHB1Ymxpc2hTdHJlYW1DYik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghc3RyZWFtQXVkaW9WaWRlbykge1xuXHRcdFx0XHRcdGlmIChnZXRMb2NhbFN0cmVhbUNiICYmIHR5cGVvZiBnZXRMb2NhbFN0cmVhbUNiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyc0F1ZGlvVmlkZW8ucHVzaChnZXRMb2NhbFN0cmVhbUNiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5pdEF1ZGlvVmlkZW8ocHVibGlzaFN0cmVhbUNiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoZ2V0TG9jYWxTdHJlYW1DYikge1xuXHRcdFx0XHRcdFx0Z2V0TG9jYWxTdHJlYW1DYihzdHJlYW1BdWRpb1ZpZGVvKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRGV0YWNoZXMgc3RyZWFtcyBhbmQgZGVsZXRlcyBsaXN0ZW5lcnNcblx0XHQgKi9cblx0XHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjbG9zZSgpO1xuXHRcdH1cblx0fTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxzdHJlYW07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9jYWxzdHJlYW0uanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlIHdlYnJ0Y21uZ3IuanMgLSBKUyBmaWxlIGZvciBhIFdlYlJUQyBtYW5hZ2VyXG4gKiBAYXV0aG9yIFdlYmNvbVxuICovXG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB3ZWJydGMgZnJvbSAnLi93ZWJydGMnO1xuaW1wb3J0IGxvY2Fsc3RyZWFtIGZyb20gJy4vbG9jYWxzdHJlYW0nO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGRlc2NyaXB0aW9uIFdlYlJUQyBtYW5hZ2VyIGhhbmRsaW5nIHRoZSBXZWJSVEMgc3RhY2tzIGluIHVzZVxuICovXG52YXIgd2VicnRjbW5nciA9IGZ1bmN0aW9uKGRhdGFyZWZzKSB7XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBjb250YWluZyB0aGUgV2ViUlRDIHN0YWNrcyBpbiB1c2Vcblx0ICovXG5cdHZhciB3ZWJydGNTdGFja3MgPSBbXTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBjb250YWludCB0aGUgdmlydHVhbCBXZWJSVEMgc3RhY2tzXG5cdCAqL1xuXHR2YXIgdmlydHVhbFdlYnJ0Y1N0YWNrcyA9IFtdO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgV2ViUlRDIG9iamVjdFxuXHQgKiBAcGFyYW0gcF9WaWQgLSB0aGUgdmlkZW8gY29udGFpbmVyIGxpbmtlZCB0byB0aGUgcGVlcmNvbm5lY3Rpb25cblx0ICogQHBhcmFtIHBfcmVtb3RlQXBwSW5zdElkIC0gdGhlIHJlbW90ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBpZGVudGlmaWVyXG5cdCAqIEBwYXJhbSBwX29uQ2xvc2VDYiAtIEEgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuXHQgKiBAcGFyYW0gcF9pc1B1Ymxpc2ggLSB0cnVlIGlmIGl0J3MgYSBwZWVyY29ubmVjdGlvbiByZWxhdGVkIHRvIGEgcHVibGlzaFN0cmVhbSwgZmFsc2UgaWYgaXQncyByZWxhdGF0ZWQgdG8gYSBzdWJzY3JpYmVcblx0ICogQHBhcmFtIHBfYWN0aW9uVHlwZSAtIFRoZSBhY3Rpb24gdHlwZSAoYXVkaW8sIHZpZGVvLCBhdWRpby12aWRlbylcblx0ICogQHBhcmFtIHBfcGVlcmNvSWQgLSBUaGUgUGVlckNvbm5lY3Rpb24gSWRcblx0ICogQHBhcmFtIHBfcGVlcmNvUmVmIC0gVGhlIFBlZXJDb25uZWN0aW9uIFJlZiBpbiB0aGUgd2VicnRjIG5vZGVcblx0ICogQHBhcmFtIHBfcGVlcmNvUmVmIC0gVGhlIFBlZXJDb25uZWN0aW9uIElkIGluIHRoZSB3ZWJydGMgbm9kZVxuXHQgKiBAcGFyYW0gcF9tdXRlZEF1ZGlvIC0gb3B0aW9uYWwgLSBpZiB0cnVlIHBlZXJjb25uZWN0aW9uIHdpbGwgYmUgY3JlYXRlZCBtdXRlZFxuXHQgKiBAcGFyYW0gcF9tdXRlVmlkZW8gLSBvcHRpb25hbCAtIGlmIHRydWUgcGVlcmNvbm5lY3Rpb24gd2lsbCBiZSBjcmVhdGVkIHdpdGggdmlkZW8gbXV0ZWRcblx0ICogQHBhcmFtIHBfZ2V0U3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIF9jcmVhdGVXZWJydGMocF9WaWQsIHBfcmVtb3RlQXBwSW5zdElkLCBwX29uQ2xvc2VDYixwX2lzUHVibGlzaCxwX2FjdGlvblR5cGUscF9wZWVyY29JZCxwX3BlZXJjb1JlZixwX211dGVkQXVkaW8scF9tdXRlVmlkZW8scF9nZXRTdHJlYW1DYikge1xuXHRcdHZhciB3ZWJydGNTdGFja0lkPXBfcGVlcmNvSWQgO1xuLy8gICAgXHQgaWYgKHBfaXNQdWJsaXNoKSB7XG4vLyAgICBcdFx0IHdlYnJ0Y1N0YWNrSWQ9dXRpbHMuYXBwSW5zdGFuY2VJZCtcIl9cIitwX3JlbW90ZUFwcEluc3RJZDtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICBcdCB3ZWJydGNTdGFja0lkPXBfcmVtb3RlQXBwSW5zdElkK1wiX1wiK3V0aWxzLmFwcEluc3RhbmNlSWQ7XG4vLyAgICAgICAgIH1cblx0XHR2YXIgbG9jYWxEYXRhUmVmID0gZGF0YXJlZnMuZ2V0V2VicnRjKCkuY2hpbGQocF9wZWVyY29SZWYpLmNoaWxkKHV0aWxzLmFwcEluc3RhbmNlSWQpO1xuXHRcdHZhciByZW1vdGVEYXRhUmVmID0gZGF0YXJlZnMuZ2V0V2VicnRjKCkuY2hpbGQocF9wZWVyY29SZWYpLmNoaWxkKHBfcmVtb3RlQXBwSW5zdElkKTtcblx0XHR2YXIgdmlydHVhbFdlYnJ0Y1N0YWNrIDtcblx0XHQvLyBjcmVhdGUgdGhlIHZpcnR1YWwgd2VicnRjc3RhY2tcblx0XHRpZiAocF9pc1B1Ymxpc2gpIHtcblx0XHRcdHZpcnR1YWxXZWJydGNTdGFjayA9IHtcblx0XHRcdFx0d2ViUnRjU3RhY2tJZDogd2VicnRjU3RhY2tJZCxcblx0XHRcdFx0bG9jYWxWaWQ6IHBfVmlkXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aXJ0dWFsV2VicnRjU3RhY2sgPSB7XG5cdFx0XHRcdHdlYlJ0Y1N0YWNrSWQ6IHdlYnJ0Y1N0YWNrSWQsXG5cdFx0XHRcdHJlbW90ZVZpZDogcF9WaWRcblx0XHRcdH07XG5cdFx0fVxuXHRcdHZhciBpZCA9IHZpcnR1YWxXZWJydGNTdGFja3MucHVzaCh2aXJ0dWFsV2VicnRjU3RhY2spIC0gMTtcblxuXHRcdC8vIGNyZWF0ZSB0aGUgcmVhbCB3ZWJydGNzdGFjayBpZiBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XG5cdFx0aWYgKCF3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0pIHtcblx0XHRcdGNvbnNvbGUuZGVidWcoJ3dlYmNvbVNESzo6d2VicnRjbW5ncjo6Y3JlYXRlV2VicnRjLT5jcmVhdGUgYSBuZXcgcmVhbCB3ZWJydGNTdGFjaycpO1xuXHRcdFx0Ly8gY3JlYXRlIHRoZSByZWFsIHdlYnJ0Y3N0YWNrXG5cdFx0XHR2YXIgd2ViUnRjU3RhY2s7XG5cdFx0XHR3ZWJSdGNTdGFjayA9IHdlYnJ0Yyh0aGlzLCBwX2lzUHVibGlzaCwgbG9jYWxEYXRhUmVmLCByZW1vdGVEYXRhUmVmLHdlYnJ0Y1N0YWNrSWQscF9hY3Rpb25UeXBlLHBfbXV0ZWRBdWRpbyxwX211dGVWaWRlbyk7XG5cdFx0XHR3ZWJSdGNTdGFjay5zZXRPbkNsb3NlKHBfb25DbG9zZUNiKTtcblx0XHRcdGlmIChwX2lzUHVibGlzaCkge1xuXHRcdFx0XHR3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0gPSB7XG5cdFx0XHRcdFx0c3RhY2s6d2ViUnRjU3RhY2ssXG5cdFx0XHRcdFx0aXNQdWJsaXNoZWQ6MSxcblx0XHRcdFx0XHRpc1N1YnNjcmliZWQ6MFxuXHRcdFx0XHR9O1xuXHRcdFx0XHR3ZWJSdGNTdGFjay5jb25uZWN0TG9jYWxTdHJlYW0ocF9WaWQscF9nZXRTdHJlYW1DYik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0gPSB7XG5cdFx0XHRcdFx0c3RhY2s6d2ViUnRjU3RhY2ssXG5cdFx0XHRcdFx0aXNQdWJsaXNoZWQ6MCxcblx0XHRcdFx0XHRpc1N1YnNjcmliZWQ6MVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR3ZWJSdGNTdGFjay5jb25uZWN0UmVtb3RlU3RyZWFtKHBfVmlkLHBfZ2V0U3RyZWFtQ2IpO1xuXHRcdFx0fVxuXG5cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmRlYnVnKCd3ZWJjb21TREs6OndlYnJ0Y21uZ3I6OmNyZWF0ZVdlYnJ0Yy0+dXNlIGV4aXN0aW5nIHJlYWwgd2VicnRjU3RhY2snKTtcblx0XHRcdC8vIGluY3JlbWVudCByZWYgY291bnRlclxuXHRcdFx0aWYgKHBfaXNQdWJsaXNoKSB7XG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1B1Ymxpc2hlZCsrO1xuXHRcdFx0XHR3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0uc3RhY2suY29ubmVjdExvY2FsU3RyZWFtKHBfVmlkLHBfZ2V0U3RyZWFtQ2IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2VicnRjU3RhY2tzW3dlYnJ0Y1N0YWNrSWRdLmlzU3Vic2NyaWJlZCsrO1xuXHRcdFx0XHR3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0uc3RhY2suY29ubmVjdFJlbW90ZVN0cmVhbShwX1ZpZCxwX2dldFN0cmVhbUNiKTtcblx0XHRcdH1cblxuXG5cdFx0fVxuXHRcdGNvbnNvbGUuZGVidWcoJ3dlYmNvbVNESzo6d2VicnRjbW5ncjo6Y3JlYXRlV2VicnRjLT53ZWJydGNTdGFjazonK3dlYnJ0Y1N0YWNrSWQrICcgbmV3IGlzUHVibGlzaGVkIGNvdW50ID0nK3dlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1B1Ymxpc2hlZCsnIG5ldyBpc1N1YnNjcmliZWQgY291bnQgPScrd2VicnRjU3RhY2tzW3dlYnJ0Y1N0YWNrSWRdLmlzU3Vic2NyaWJlZCk7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlIFdlYlJUQyBmZWF0dXJlcyA6IGRldGFjaCBtZWRpYSBzdHJlYW1zIGFuZCB1bnB1Ymxpc2ggc3RhY2tzLlxuXHQgKiBAcGFyYW0gaWQgLVxuXHQgKiBAcGFyYW0gcF9pc1VuUHVibGlzaFxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgLVxuXHQgKi9cblx0ZnVuY3Rpb24gX2Nsb3NlV2VicnRjKGlkLHBfaXNVblB1Ymxpc2gsY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmRlYnVnKCd3ZWJjb21TREs6OndlYnJ0Y21uZ3I6OmNsb3NlV2VicnRjLT5pZD0nK2lkKTtcblx0XHRpZiAoIXZpcnR1YWxXZWJydGNTdGFja3NbaWRdKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ3dlYmNvbVNESzo6d2VicnRjbW5ncjo6Y2xvc2VXZWJydGM6IHZpcnR1YWxzdGFjayAnK2lkKycgbm90IGZvdW5kJyk7XG5cdFx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgd2VicnRjU3RhY2tJZCA9IHZpcnR1YWxXZWJydGNTdGFja3NbaWRdLndlYlJ0Y1N0YWNrSWQ7XG5cdFx0aWYgKHdlYnJ0Y1N0YWNrSWQgJiYgd2VicnRjU3RhY2tzW3dlYnJ0Y1N0YWNrSWRdICApIHtcblx0XHRcdGlmIChwX2lzVW5QdWJsaXNoICYmIHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1B1Ymxpc2hlZD4wKSB7XG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1B1Ymxpc2hlZC0tO1xuXHRcdFx0fSBlbHNlIGlmICghcF9pc1VuUHVibGlzaCAmJiB3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0uaXNTdWJzY3JpYmVkPjApIHtcblx0XHRcdFx0d2VicnRjU3RhY2tzW3dlYnJ0Y1N0YWNrSWRdLmlzU3Vic2NyaWJlZC0tO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1B1Ymxpc2hlZDwxICYmIHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1N1YnNjcmliZWQ8MSkge1xuXHRcdFx0XHRjb25zb2xlLmRlYnVnKCd3ZWJjb21TREs6OndlYnJ0Y21uZ3I6OmNsb3NlV2VicnRjLT5kZXN0cm95ICByZWFsIHdlYnJ0Y1N0YWNrOicrd2VicnRjU3RhY2tJZCk7XG5cdFx0XHRcdC8vIGRlc3Ryb3kgdGhlIHN0YWNrXG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5zdGFjay5jbG9zZShjYWxsYmFjayk7XG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXSA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmRlYnVnKCd3ZWJjb21TREs6OndlYnJ0Y21uZ3I6OmNsb3NlV2VicnRjLT5kZWNyZW1lbnQgIHJlYWwgd2VicnRjU3RhY2s6Jyt3ZWJydGNTdGFja0lkKyAnIG5ldyBpc1B1Ymxpc2hlZCBjb3VudCA9Jyt3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0uaXNQdWJsaXNoZWQrJyBuZXcgaXNTdWJzY3JpYmVkIGNvdW50ID0nK3dlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXS5pc1N1YnNjcmliZWQpO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS53YXJuKCd3ZWJjb21TREs6OndlYnJ0Y21uZ3I6OmNsb3NlV2VicnRjIGNhbm5vdCBmb3VuZCByZWFsIHN0YWNrJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHZpcnR1YWxXZWJydGNTdGFja3NbaWRdLmxvY2FsVmlkKSB7XG5cdFx0XHRsb2NhbHN0cmVhbS5jbG9zZSgpO1xuXHRcdFx0ZGV0YWNoTWVkaWFTdHJlYW0odmlydHVhbFdlYnJ0Y1N0YWNrc1tpZF0ubG9jYWxWaWQpO1xuXHRcdH1cblx0XHRpZiAodmlydHVhbFdlYnJ0Y1N0YWNrc1tpZF0ucmVtb3RlVmlkKSB7IGRldGFjaE1lZGlhU3RyZWFtKHZpcnR1YWxXZWJydGNTdGFja3NbaWRdLnJlbW90ZVZpZCk7fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYXJzIGEgc3BlY2lmaWNhbCBXZWJSVEMgc3RhY2sgYnkgc2V0dGluZyBpdCB0byBudWxsLlxuXHQgKiBAcGFyYW0gd2VicnRjU3RhY2tJZCAtIFRoZSBXZWJSVEMgc3RhY2sgSUQgdG8gY2xlYXJcblx0ICovXG5cdGZ1bmN0aW9uIF9jbGVhcldlYnJ0Y1N0YWNrcyh3ZWJydGNTdGFja0lkKSB7XG5cdFx0Y29uc29sZS5kZWJ1Zygnd2ViY29tU0RLOjp3ZWJydGNtbmdyOjpjbGVhcldlYnJ0Y1N0YWNrcyBpZD0nK3dlYnJ0Y1N0YWNrSWQpO1xuXHRcdGlmICh3ZWJydGNTdGFja0lkICYmIHdlYnJ0Y1N0YWNrcyAmJiB3ZWJydGNTdGFja3Nbd2VicnRjU3RhY2tJZF0pIHtcblx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJydGNTdGFja0lkXSA9IG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF1ZGlvIG11dGUgdGhlIHdlYnJ0YyBwZWVyY29ubmVjdGlvblxuXHQgKiBAcGFyYW0gdmlydHVhbFdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIG11dGVcblx0ICovXG5cdGZ1bmN0aW9uIF9tdXRlQXVkaW9XZWJydGNTdGFjayh2aXJ0dWFsV2VicnRjU3RhY2tJZCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGNtbmdyOjptdXRlQXVkaW9XZWJydGNTdGFjaykgdmlydHVhbFdlYnJ0Y1N0YWNrSWQ9Jyt2aXJ0dWFsV2VicnRjU3RhY2tJZCk7XG5cblx0XHRpZiAodmlydHVhbFdlYnJ0Y1N0YWNrcyAmJiB2aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXSAmJiB2aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXS53ZWJSdGNTdGFja0lkKSB7XG5cdFx0XHR2YXIgd2ViUnRjU3RhY2tJZD12aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXS53ZWJSdGNTdGFja0lkO1xuXHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Om11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKyAnd2ViUnRjU3RhY2tJZD0nK3dlYlJ0Y1N0YWNrSWQpO1xuXHRcdFx0aWYgKHdlYnJ0Y1N0YWNrcyAmJiB3ZWJydGNTdGFja3Nbd2ViUnRjU3RhY2tJZF0gJiYgd2VicnRjU3RhY2tzW3dlYlJ0Y1N0YWNrSWRdLnN0YWNrKSB7XG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJSdGNTdGFja0lkXS5zdGFjay5tdXRlQXVkaW8oKTtcblx0XHRcdH0gIGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Om11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB3ZWJydGNTdGFjaz0nK3dlYlJ0Y1N0YWNrSWQrICdub3QgZm91bmQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjp3ZWJydGNtbmdyOjptdXRlQXVkaW9XZWJydGNTdGFjaykgdmlydHVhbFdlYnJ0Y1N0YWNrSWQ9Jyt2aXJ0dWFsV2VicnRjU3RhY2tJZCsgJ25vdCBmb3VuZCcpO1xuXHRcdH1cblxuXG5cdH1cblxuXHQvKipcblx0ICogQXVkaW8gdW5tdXRlIHRoZSB3ZWJydGMgcGVlcmNvbm5lY3Rpb25cblx0ICogQHBhcmFtIHdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIHVubXV0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gIF91bm11dGVBdWRpb1dlYnJ0Y1N0YWNrICh2aXJ0dWFsV2VicnRjU3RhY2tJZCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGNtbmdyOjpfdW5tdXRlQXVkaW9XZWJydGNTdGFjaykgdmlydHVhbFdlYnJ0Y1N0YWNrSWQ9Jyt2aXJ0dWFsV2VicnRjU3RhY2tJZCk7XG5cblx0XHRpZiAodmlydHVhbFdlYnJ0Y1N0YWNrcyAmJiB2aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXSAmJiB2aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXS53ZWJSdGNTdGFja0lkKSB7XG5cdFx0XHR2YXIgd2ViUnRjU3RhY2tJZD12aXJ0dWFsV2VicnRjU3RhY2tzW3ZpcnR1YWxXZWJydGNTdGFja0lkXS53ZWJSdGNTdGFja0lkO1xuXHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Ol91bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKyAnLHdlYlJ0Y1N0YWNrSWQ9Jyt3ZWJSdGNTdGFja0lkKTtcblx0XHRcdGlmICh3ZWJydGNTdGFja3MgJiYgd2VicnRjU3RhY2tzW3dlYlJ0Y1N0YWNrSWRdICYmIHdlYnJ0Y1N0YWNrc1t3ZWJSdGNTdGFja0lkXS5zdGFjaykge1xuXHRcdFx0XHR3ZWJydGNTdGFja3Nbd2ViUnRjU3RhY2tJZF0uc3RhY2sudW5tdXRlQXVkaW8oKTtcblx0XHRcdH0gIGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Ol91bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB3ZWJydGNTdGFjaz0nK3dlYlJ0Y1N0YWNrSWQrICdub3QgZm91bmQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCcod2ViY29tU0RLOjp3ZWJydGNtbmdyOjpfdW5tdXRlQXVkaW9XZWJydGNTdGFjaykgdmlydHVhbFdlYnJ0Y1N0YWNrSWQ9Jyt2aXJ0dWFsV2VicnRjU3RhY2tJZCsgJ25vdCBmb3VuZCcpO1xuXHRcdH1cblxuXHR9XG5cblxuXHQvKipcblx0ICogVmlkZW8gbXV0ZSB0aGUgd2VicnRjIHBlZXJjb25uZWN0aW9uXG5cdCAqIEBwYXJhbSB2aXJ0dWFsV2VicnRjU3RhY2tJZCAtIFRoZSBXZWJSVEMgc3RhY2sgSUQgdG8gbXV0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gX211dGVWaWRlb1dlYnJ0Y1N0YWNrKHZpcnR1YWxXZWJydGNTdGFja0lkKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Om11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKTtcblxuXHRcdGlmICh2aXJ0dWFsV2VicnRjU3RhY2tzICYmIHZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdICYmIHZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdLndlYlJ0Y1N0YWNrSWQpIHtcblx0XHRcdHZhciB3ZWJSdGNTdGFja0lkPXZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdLndlYlJ0Y1N0YWNrSWQ7XG5cdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjbW5ncjo6bXV0ZUF1ZGlvV2VicnRjU3RhY2spIHZpcnR1YWxXZWJydGNTdGFja0lkPScrdmlydHVhbFdlYnJ0Y1N0YWNrSWQrICd3ZWJSdGNTdGFja0lkPScrd2ViUnRjU3RhY2tJZCk7XG5cdFx0XHRpZiAod2VicnRjU3RhY2tzICYmIHdlYnJ0Y1N0YWNrc1t3ZWJSdGNTdGFja0lkXSAmJiB3ZWJydGNTdGFja3Nbd2ViUnRjU3RhY2tJZF0uc3RhY2spIHtcblx0XHRcdFx0d2VicnRjU3RhY2tzW3dlYlJ0Y1N0YWNrSWRdLnN0YWNrLm11dGVWaWRlbygpO1xuXHRcdFx0fSAgZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignKHdlYmNvbVNESzo6d2VicnRjbW5ncjo6bXV0ZUF1ZGlvV2VicnRjU3RhY2spIHdlYnJ0Y1N0YWNrPScrd2ViUnRjU3RhY2tJZCsgJ25vdCBmb3VuZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Om11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKyAnbm90IGZvdW5kJyk7XG5cdFx0fVxuXG5cblx0fVxuXG5cdC8qKlxuXHQgKiBWaWRlbyB1bm11dGUgdGhlIHdlYnJ0YyBwZWVyY29ubmVjdGlvblxuXHQgKiBAcGFyYW0gd2VicnRjU3RhY2tJZCAtIFRoZSBXZWJSVEMgc3RhY2sgSUQgdG8gdW5tdXRlXG5cdCAqL1xuXHRmdW5jdGlvbiAgX3VubXV0ZVZpZGVvV2VicnRjU3RhY2sgKHZpcnR1YWxXZWJydGNTdGFja0lkKSB7XG5cdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Ol91bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKTtcblxuXHRcdGlmICh2aXJ0dWFsV2VicnRjU3RhY2tzICYmIHZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdICYmIHZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdLndlYlJ0Y1N0YWNrSWQpIHtcblx0XHRcdHZhciB3ZWJSdGNTdGFja0lkPXZpcnR1YWxXZWJydGNTdGFja3NbdmlydHVhbFdlYnJ0Y1N0YWNrSWRdLndlYlJ0Y1N0YWNrSWQ7XG5cdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjbW5ncjo6X3VubXV0ZUF1ZGlvV2VicnRjU3RhY2spIHZpcnR1YWxXZWJydGNTdGFja0lkPScrdmlydHVhbFdlYnJ0Y1N0YWNrSWQrICcsd2ViUnRjU3RhY2tJZD0nK3dlYlJ0Y1N0YWNrSWQpO1xuXHRcdFx0aWYgKHdlYnJ0Y1N0YWNrcyAmJiB3ZWJydGNTdGFja3Nbd2ViUnRjU3RhY2tJZF0gJiYgd2VicnRjU3RhY2tzW3dlYlJ0Y1N0YWNrSWRdLnN0YWNrKSB7XG5cdFx0XHRcdHdlYnJ0Y1N0YWNrc1t3ZWJSdGNTdGFja0lkXS5zdGFjay51bm11dGVWaWRlbygpO1xuXHRcdFx0fSAgZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignKHdlYmNvbVNESzo6d2VicnRjbW5ncjo6X3VubXV0ZUF1ZGlvV2VicnRjU3RhY2spIHdlYnJ0Y1N0YWNrPScrd2ViUnRjU3RhY2tJZCsgJ25vdCBmb3VuZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OndlYnJ0Y21uZ3I6Ol91bm11dGVBdWRpb1dlYnJ0Y1N0YWNrKSB2aXJ0dWFsV2VicnRjU3RhY2tJZD0nK3ZpcnR1YWxXZWJydGNTdGFja0lkKyAnbm90IGZvdW5kJyk7XG5cdFx0fVxuXG5cdH1cblxuXG5cdHJldHVybiB7XG5cblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgV2ViUlRDIG9iamVjdFxuXHRcdCAqIEBwYXJhbSBwX1ZpZCAtIHRoZSB2aWRlbyBjb250YWluZXIgbGlua2VkIHRvIHRoZSBwZWVyY29ubmVjdGlvblxuXHRcdCAqIEBwYXJhbSBwX3JlbW90ZUFwcEluc3RJZCAtIHRoZSByZW1vdGUgYXBwbGljYXRpb24gaW5zdGFuY2UgaWRlbnRpZmllclxuXHRcdCAqIEBwYXJhbSBwX29uQ2xvc2VDYiAtIEEgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZFxuXHRcdCAqIEBwYXJhbSBwX2lzUHVibGlzaCAtIHRydWUgaWYgaXQncyBhIHBlZXJjb25uZWN0aW9uIHJlbGF0ZWQgdG8gYSBwdWJsaXNoU3RyZWFtLCBmYWxzZSBpZiBpdCdzIHJlbGF0YXRlZCB0byBhIHN1YnNjcmliZVxuXHRcdCAqIEBwYXJhbSBwX2FjdGlvblR5cGUgLSBUaGUgYWN0aW9uIHR5cGUgKGF1ZGlvLCB2aWRlbywgYXVkaW8tdmlkZW8pXG5cdFx0ICogQHBhcmFtIHBfcGVlcmNvSWQgLSBUaGUgUGVlckNvbm5lY3Rpb24gSWQgaW4gdGhlIHdlYnJ0YyBub2RlXG5cdFx0ICovXG5cdFx0Y3JlYXRlV2VicnRjOiBmdW5jdGlvbihwX1ZpZCwgcF9yZW1vdGVBcHBJbnN0SWQsIHBfb25DbG9zZUNiLHBfaXNQdWJsaXNoLHBfYWN0aW9uVHlwZSxwX3BlZXJjb0lkLHBfbXV0ZWRBdWRpbyxwX211dGVWaWRlbyxwX2dldFN0cmVhbUNiKSB7XG5cdFx0XHRyZXR1cm4gIF9jcmVhdGVXZWJydGMuYmluZCh0aGlzKShwX1ZpZCwgcF9yZW1vdGVBcHBJbnN0SWQsIHBfb25DbG9zZUNiLHBfaXNQdWJsaXNoLHBfYWN0aW9uVHlwZSxwX3BlZXJjb0lkLHBfbXV0ZWRBdWRpbyxwX211dGVWaWRlbyxwX2dldFN0cmVhbUNiKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2UgV2ViUlRDIGZlYXR1cmVzIDogZGV0YWNoIG1lZGlhIHN0cmVhbXMgYW5kIHVucHVibGlzaCBzdGFja3MuXG5cdFx0ICogQHBhcmFtIGlkIC1cblx0XHQgKiBAcGFyYW0gcF9pc1VuUHVibGlzaFxuXHRcdCAqIEBwYXJhbSBjYWxsYmFjayAtXG5cdFx0ICovXG5cdFx0Y2xvc2VXZWJydGM6IGZ1bmN0aW9uKGlkLHBfaXNVblB1Ymxpc2gsY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiAgX2Nsb3NlV2VicnRjKGlkLHBfaXNVblB1Ymxpc2gsY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDbGVhcnMgYSBzcGVjaWZpY2FsIFdlYlJUQyBzdGFjayBieSBzZXR0aW5nIGl0IHRvIG51bGwuXG5cdFx0ICogQHBhcmFtIHdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIGNsZWFyXG5cdFx0ICovXG5cdFx0Y2xlYXJXZWJydGNTdGFja3M6IGZ1bmN0aW9uKHdlYnJ0Y1N0YWNrSWQpIHtcblx0XHRcdHJldHVybiBfY2xlYXJXZWJydGNTdGFja3Mod2VicnRjU3RhY2tJZCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBhdWRpbyBtdXRlIHRoZSB3ZWJydGMgcGVlcmNvbm5lY3Rpb25cblx0XHQgKiBAcGFyYW0gdmlydHVhbFdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIG11dGVcblx0XHQgKi9cblx0XHRtdXRlQXVkaW9XZWJydGNTdGFjazogZnVuY3Rpb24odmlydHVhbFdlYnJ0Y1N0YWNrSWQpIHtcblx0XHRcdHJldHVybiBfbXV0ZUF1ZGlvV2VicnRjU3RhY2sodmlydHVhbFdlYnJ0Y1N0YWNrSWQpO1xuXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiAgYXVkaW8gdW5tdXRlIHRoZSB3ZWJydGMgcGVlcmNvbm5lY3Rpb25cblx0XHQgKiBAcGFyYW0gdmlydHVhbFdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIHVubXV0ZVxuXHRcdCAqL1xuXHRcdHVubXV0ZUF1ZGlvV2VicnRjU3RhY2s6IGZ1bmN0aW9uKHZpcnR1YWxXZWJydGNTdGFja0lkKSB7XG5cdFx0XHRyZXR1cm4gX3VubXV0ZUF1ZGlvV2VicnRjU3RhY2sodmlydHVhbFdlYnJ0Y1N0YWNrSWQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogdmlkZW8gbXV0ZSB0aGUgd2VicnRjIHBlZXJjb25uZWN0aW9uXG5cdFx0ICogQHBhcmFtIHZpcnR1YWxXZWJydGNTdGFja0lkIC0gVGhlIFdlYlJUQyBzdGFjayBJRCB0byBtdXRlXG5cdFx0ICovXG5cdFx0bXV0ZVZpZGVvV2VicnRjU3RhY2s6IGZ1bmN0aW9uKHZpcnR1YWxXZWJydGNTdGFja0lkKSB7XG5cdFx0XHRyZXR1cm4gX211dGVWaWRlb1dlYnJ0Y1N0YWNrKHZpcnR1YWxXZWJydGNTdGFja0lkKTtcblxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogdmlkZW8gdW5tdXRlIHRoZSB3ZWJydGMgcGVlcmNvbm5lY3Rpb25cblx0XHQgKiBAcGFyYW0gdmlydHVhbFdlYnJ0Y1N0YWNrSWQgLSBUaGUgV2ViUlRDIHN0YWNrIElEIHRvIHVubXV0ZVxuXHRcdCAqL1xuXHRcdHVubXV0ZVZpZGVvV2VicnRjU3RhY2s6IGZ1bmN0aW9uKHZpcnR1YWxXZWJydGNTdGFja0lkKSB7XG5cdFx0XHRyZXR1cm4gX3VubXV0ZVZpZGVvV2VicnRjU3RhY2sodmlydHVhbFdlYnJ0Y1N0YWNrSWQpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnJ0Y21uZ3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd2VicnRjbW5nci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGUgd2VicnRjLmpzIC0gSlMgZmlsZSB1c2VkIGZvciBXZWJSVEMgYXNwZWN0c1xuICogQGF1dGhvciBXZWJjb21cbiAqL1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IGxvY2Fsc3RyZWFtIGZyb20gJy4vbG9jYWxzdHJlYW0nO1xuaW1wb3J0IHZhcnMgZnJvbSAnLi9hY3Rpb25zJztcblxuLyoqXG4gKiBJQ0UgY29ubmVjdGlvbiBzdGF0dXMgOiBkaXNjb25uZWN0ZWRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfRElTQ09OTkVDVEVEID0gJ2Rpc2Nvbm5lY3RlZCc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY29ubmVjdGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRD0gJ2Nvbm5lY3RlZCc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY29tcGxldGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRD0gJ2NvbXBsZXRlZCc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2hlY2tpbmdcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0hFQ0tJTkc9ICdjaGVja2luZyc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogY2xvc2VkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRD0gJ2Nsb3NlZCc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogZmFpbGVkXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRD0gJ2ZhaWxlZCc7XG5cbi8qKlxuICogSUNFIGNvbm5lY3Rpb24gc3RhdHVzIDogYW5vdGhlciBzdGF0dXNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSUNFX0NPTk5FQ1RJT05fU1RBVEVfT1RIRVI9ICdvdGhlcic7XG5cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBJQ0UgY29uZmlndXJhdGlvbiBmb3IgVFVSTiBhbmQgU1RVTiBzZXJ2ZXJzIHRvIHVzZSBmb3IgV2ViUlRDIGNvbW11bmljYXRpb254XG4gKiBOQiA6IHRoZXNlIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSBvdmVyd3JpdGVuIGJ5IHRoZSBjb25maWd1cmF0aW9uIG9uIHRoZSBXZWJjb20gc2VydmVyIGlmIHByZXNlbnRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge2pzb259XG4gKi9cblxuY29uc3QgREVGQVVMVF9JQ0VfQ09ORklHID0ge1xuXHRpY2VTZXJ2ZXJzOiBbXG5cdFx0e1xuXHRcdFx0J3VybCc6ICd0dXJuczp0dXJuMS53ZWJjb20ub3JhbmdlLmNvbTo0NDMnLFxuXHRcdFx0J3VzZXJuYW1lJzogJ2FkbWluJyxcblx0XHRcdCdjcmVkZW50aWFsJzogJ3dlYmNvbTEyMzQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHQndXJsJzogJ3R1cm46dHVybjEud2ViY29tLm9yYW5nZS5jb206MzQ3OCcsXG5cdFx0XHQndXNlcm5hbWUnOiAnYWRtaW4nLFxuXHRcdFx0J2NyZWRlbnRpYWwnOiAnd2ViY29tMTIzNCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdCd1cmwnOiAndHVybnM6d2ViY29tMS5vcmFuZ2UtbGFicy5mcjo0NDMnLFxuXHRcdFx0J3VzZXJuYW1lJzogJ2FkbWluJyxcblx0XHRcdCdjcmVkZW50aWFsJzogJ3dlYmNvbTEyMzQnXG5cdFx0fVxuXHRdXG59O1xuXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZGVzY3JpcHRpb24gV2ViUlRDIGNvbm5lY3Rpb24gb2JqZWN0LiBNYW5hZ2VzIGEgV2ViUlRDIGNvbm5lY3Rpb24sIGkuZS4gb25lIHBlZXJjb25uZWN0aW9uXG4gKiBAcGFyYW0gcF93ZWJydGNtbmdyIC0gUmVmZXJlbmNlIHRvIFdlYlJUQ01hbmFnZXJcbiAqIEBwYXJhbSBwX2lzUHVibGlzaCAtIEZsYWcgaW5kaWNhdGluZyBpZiB0aGVyZSBpcyBhIHBsdWJsaXNoIGFjdGlvblxuICogQHBhcmFtIHBfbG9jYWxEYXRhUmVmIC0gVGhlIGxvY2FsIGRhdGEgcmVmXG4gKiBAcGFyYW0gcF9yZW1vdGVEYXRhUmVmIC0gVGhlIHJlbW90ZSBkYXRhIHJlZlxuICogQHBhcmFtIHBfd2VicnRjU3RhY2tJZCAtIFRoZSBzdGFjayBJRCBpbiB1c2VcbiAqIEBwYXJhbSBwX2FjdGlvblR5cGUgLVxuICogQHBhcmFtIHBfbXV0ZUF1ZGlvIC0gb3B0aW9uYWwgLSBpZiB0cnVlIHBlZXJjb25uZWN0aW9uIHdpbGwgYmUgY3JlYXRlZCB3aXRoIGF1ZGlvIG11dGVkXG4gKiBAcGFyYW0gcF9tdXRlVmlkZW8gLSBvcHRpb25hbCAtIGlmIHRydWUgcGVlcmNvbm5lY3Rpb24gd2lsbCBiZSBjcmVhdGVkIHdpdGggdmlkZW8gbXV0ZWRcblxuICovXG52YXIgd2VicnRjID0gZnVuY3Rpb24gKHBfd2VicnRjbW5nciwgcF9pc1B1Ymxpc2gsIHBfbG9jYWxEYXRhUmVmLCBwX3JlbW90ZURhdGFSZWYsIHBfd2VicnRjU3RhY2tJZCwgcF9hY3Rpb25UeXBlLCBwX211dGVBdWRpbywgcF9tdXRlVmlkZW8pIHtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFdlYlJUQyBtYW5hZ2VyIG9iamVjdC4gVXNlZnVsIHRvIGNsZWFyIHdlYnJ0YyBzdGFja1xuXHQgKi9cblx0dmFyIHdlYnJ0Y21uZ3IgPSBwX3dlYnJ0Y21uZ3I7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIFdlYlJUQyBzdGFjayBpZGVudGlmaWVyLCBoZXJlIHRoZSBjdXJyZW50IHRpbWVzdGFtcFxuXHQgKi9cblx0dmFyIHN0YWNrSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBJZiB0aGVyZSBpcyBhIHB1Ymxpc2ggYWN0aW9uIG9yIG5vdFxuXHQgKi9cblx0dmFyIGlzUHVibGlzaCA9IHBfaXNQdWJsaXNoO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBwZWVyIGNvbm5lY3Rpb25cblx0ICovXG5cdHZhciBwYyA9IG51bGw7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIGxvY2FsIGRhdGEgcmVmXG5cdCAqL1xuXHR2YXIgbG9jYWxEYXRhUmVmID0gcF9sb2NhbERhdGFSZWY7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIHJlbXRvZSBkYXRhIHJlZlxuXHQgKi9cblx0dmFyIHJlbW90ZURhdGFSZWYgPSBwX3JlbW90ZURhdGFSZWY7XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQSBjYWxsYmFjayB0byB0cmlnZ2VyIHdoZXJlIGEgbGlzdCBvZiBJQ0UgY2FuZGlkYXRlcyBpcyBwcm92aWRlZFxuXHQgKi9cblx0dmFyIGljZUNhbmRpZGF0ZXNMaXN0Q2IgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEEgY2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYSBTRFAgb2ZmZXIgaGFzIGJlZW4gcmVjZWl2ZWRcblx0ICovXG5cdHZhciBzZHBPZmZlckNiID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGEgU0RQIGFuc3dlciBoYXMgYmVlbiByZWNlaXZlZFxuXHQgKi9cblx0dmFyIHNkcEFuc3dlckNiID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRyaWdnZXJlZCBvbiBhIHJlbW90ZSBkYXRhcmVmIGV2ZW50XG5cdCAqL1xuXHR2YXIgcmVtb3RlZGF0YXJlZkNiID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3Npbmdcblx0ICovXG5cdHZhciBvbkNsb3NlQ2IgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBXZWJSVEMgc3RhY2sgSURcblx0ICovXG5cdHZhciB3ZWJydGNTdGFja0lkID0gcF93ZWJydGNTdGFja0lkO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBhY3Rpb24gdHlwZSB0byBwcm9jZXNzXG5cdCAqL1xuXHR2YXIgYWN0aW9uVHlwZSA9IHBfYWN0aW9uVHlwZTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgY29uZmlndXJhdGlvblxuXHQgKi9cblx0dmFyIGNvbmZpZyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBIHBlZXIgY29ubmVjdGlvbiBvYmplY3QsIGZvciBjcm9zcyBicm93c2VycyBjb21wYXRpYmlsaXRpZXNcblx0ICovXG5cdHZhciBteVBlZXJDb25uZWN0aW9uID0gbnVsbDtcblx0Ly92YXIgbXlDcmVhdGVPYmplY3RVUkwgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEFuIFJUQyBzZXNzaW9uIGRlc2NyaXB0aW9uLCBmb3IgY3Jvc3MgYnJvd3NlcnMgY29tcGF0aWJpbGl0aWVzXG5cdCAqL1xuXHR2YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEFuIFJUQyBJQ0UgY2FuZGlkYXRlLCBmb3IgY3Jvc3MgYnJvd3NlcnMgY29tcGF0aWJpbGl0aWVzXG5cdCAqL1xuXHR2YXIgbXlSVENJY2VDYW5kaWRhdGUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgY29udGFpbmluZyBsb2NhbCBzdHJlYW1zXG5cdCAqL1xuXHR2YXIgbG9jYWxTdHJlYW1zID0gW107XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQW4gYXJyYXkgY29udGFpbmluZyByZW1vdGUgc3RyZWFtc1xuXHQgKi9cblx0dmFyIHJlbW90ZVN0cmVhbXMgPSBbXTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBBbiBhcnJheSBjb250YWluaW5nIHJlbW90ZSBzdHJlYW1zIENCXG5cdCAqL1xuXHR2YXIgcmVtb3RlU3RyZWFtc0NiID0gW107XG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIHJlY2VpdmVkIHN0cmVhbVxuXHQgKi9cblx0dmFyIHJlY2VpdmVkU3RyZWFtID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgc2VudCBzdHJlYW1cblx0ICovXG5cdHZhciBzZW50U3RyZWFtID0gbnVsbDtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBGbGFnIGluZGljYXRpbmcgaWYgdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkXG5cdCAqL1xuXHR2YXIgaXNDbG9zZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBGbGFnIGluZGljYXRpbmcgaWYgdGhlIGNsb3NlIHByb2Nlc3MgaXMgb24gZ29pbmdcblx0ICovXG5cdHZhciBjbG9zZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBUaGUgSUNFIGNvbm5lY3Rpb24gc3RhdGVcblx0ICovXG5cdHZhciBpY2VDb25uZWN0aW9uU3RhdGUgPSBudWxsO1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIEFub3RoZXIgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIHRoZSBjb25uZWN0aW9uIHNob3VsZCBiZSBjbG9zZWRcblx0ICovXG5cdHZhciBvbkNsb3NlQ2IyID0gbnVsbDtcblxuXHR2YXIgaXNBdWRpb011dGUgPSBmYWxzZTtcblxuXHR2YXIgaXNWaWRlb011dGUgPSBmYWxzZTtcblxuXG5cdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OilzdGFja0lkPScgKyBzdGFja0lkICsgJyBpc1B1Ymxpc2g9JyArIGlzUHVibGlzaCArICcsbG9jYWxEYXRhUmVmPScgKyBsb2NhbERhdGFSZWYgKyAnLHJlbW90ZURhdGFSZWY9JyArIHJlbW90ZURhdGFSZWYgKyAnKScpO1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gQSBEYXRhZ3JhbSBUcmFuc3BvcnQgTGF5ZXIgU2VjdXJpdHkgKERUTFMpIGtleSBhZ3JlZW1lbnRcblx0ICovXG5cdHZhciBEdGxzU3J0cEtleUFncmVlbWVudCA9IHtcblx0XHREdGxzU3J0cEtleUFncmVlbWVudDogdHJ1ZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gLSBTb21lIG9wdGlvbnNcblx0ICovXG5cdHZhciBvcHRpb25hbCA9IHtcblx0XHRvcHRpb25hbDogW0R0bHNTcnRwS2V5QWdyZWVtZW50XVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gVGhlIHB1Ymxpc2hlciBtZWRpYSBjb25zdHJhaW50cyBhcyBhIEpTT04gYXJyYXlcblx0ICovXG5cdHZhciBwdWJsaXNoZXJNZWRpYUNvbnN0cmFpbnRzID0ge1xuXHRcdCdtYW5kYXRvcnknOiB7XG5cdFx0XHQnT2ZmZXJUb1JlY2VpdmVBdWRpbyc6IGZhbHNlLFxuXHRcdFx0J09mZmVyVG9SZWNlaXZlVmlkZW8nOiBmYWxzZVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFRoZSBzdWJzY3JpYmVyIG1lZGlhIGNvbnN0cmFpbnRzIGFzIGEgSlNPTiBhcnJheVxuXHQgKi9cblx0dmFyIHN1YnNjcmliZXJNZWRpYUNvbnN0cmFpbnRzID0ge1xuXHRcdCdtYW5kYXRvcnknOiB7XG5cdFx0XHQnT2ZmZXJUb1JlY2VpdmVBdWRpbyc6IHRydWUsXG5cdFx0XHQnT2ZmZXJUb1JlY2VpdmVWaWRlbyc6IHRydWVcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIHRvIHRyaWdnZXIgd2hlbiBhbiBlcnJvciBvY2N1cnNcblx0ICogQHBhcmFtIGUgLSBUaGUgZXJyb3Jcblx0ICovXG5cdGZ1bmN0aW9uIG9uRXJyb3IoZSkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OilzdGFja0lkPScgKyBzdGFja0lkICsgJ2Vycm9yPScgKyBlKTtcblx0XHRjb25zb2xlLmRpcihlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgb2JqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OmluaXQpc3RhY2tJZD0nICsgc3RhY2tJZCk7XG5cdFx0Ly8gcGVlcmNvbm5lY3Rpb25cblx0XHRpZiAodHlwZW9mKFJUQ1BlZXJDb25uZWN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bXlQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJyh3ZWJjb21TREs6OndlYnJ0Yzo6aW5pdClzdGFja0lkPScgKyBzdGFja0lkICsgJyBlcnJvcj1XZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YoUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBSVENTZXNzaW9uRGVzY3JpcHRpb247XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6d2VicnRjOjppbml0KXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnIGVycm9yMj1XZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YoUlRDSWNlQ2FuZGlkYXRlKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bXlSVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignKHdlYmNvbVNESzo6d2VicnRjOjppbml0KXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnIGVycm9yMz1XZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXZWJydGMgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIgIScpO1xuXHRcdH1cblxuXHRcdGlmIChwX211dGVBdWRpbykgaXNBdWRpb011dGUgPSB0cnVlO1xuXHRcdGlmIChwX211dGVWaWRlbykgaXNWaWRlb011dGUgPSB0cnVlO1xuXG5cdFx0Z2V0SWNlU2VydmVyc0NvbmZpZ0Zyb21TZXJ2ZXIoZnVuY3Rpb24gKF9jb25maWcpIHtcblx0XHRcdGNvbmZpZyA9IF9jb25maWc7XG5cdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjopIHVzZSBzZXJ2ZXIgY29uZmlnPScsIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuXHRcdFx0aW5pdF9wYygpO1xuXHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgREVGQVVMVF9JQ0VfQ09ORklHICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25maWcgPSBERUZBVUxUX0lDRV9DT05GSUc7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OikgdXNlIERFRkFVTFRfSUNFX0NPTkZJRyBjb25maWc9JywgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjopIG5vIGljZSAgY29uZmlnJyk7XG5cdFx0XHR9XG5cdFx0XHRpbml0X3BjKCk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgcGVlciBjb25uZWN0aW9uXG5cdCAqL1xuXHRmdW5jdGlvbiBpbml0X3BjKCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OmluaXRfcGMpc3RhY2tJZD0nICsgc3RhY2tJZCArICdfY29uZmlnPScsIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuXHRcdC8vIFRPRE8gdGVzdCBpcyBjb25maWcgaXMgbWFsZm9ybWF0ZWQgb3IgZW1wdHlcblx0XHRwYyA9IG5ldyBteVBlZXJDb25uZWN0aW9uKGNvbmZpZywgb3B0aW9uYWwpO1xuXG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBSZWNlaXZlZCBJY2UgY2FuZGlkYXRlIGZyb20gdGhlIHN0YWNrOiBzZW5kIGl0IHRvIHRoZSBwZWVyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0cGMub25pY2VjYW5kaWRhdGUgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUuY2FuZGlkYXRlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OnBjLm9uaWNlY2FuZGlkYXRlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnIHNlbmQgaWNlIGNhbmRpZGF0ZT0nICsgSlNPTi5zdHJpbmdpZnkoZS5jYW5kaWRhdGUpKTtcblx0XHRcdFx0bG9jYWxEYXRhUmVmLmNoaWxkKCdpY2VDYW5kaWRhdGVzTGlzdCcpLnB1c2goe1xuXHRcdFx0XHRcdGxhYmVsOiBlLmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuXHRcdFx0XHRcdGlkOiBlLmNhbmRpZGF0ZS5zZHBNaWQsXG5cdFx0XHRcdFx0Y2FuZGlkYXRlOiBlLmNhbmRpZGF0ZS5jYW5kaWRhdGVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIFJlY2VpdmVkIGEgcmVtb3RlIHN0cmVhbSBmcm9tIHRoZSBzdGFjazogcGxheSBpdCBvbiB0aGUgdmlkZW8gcGxheWVyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0cGMub25hZGRzdHJlYW0gPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpvbmFkZHN0cmVhbSlzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ3N0cmVhbTonICsgSlNPTi5zdHJpbmdpZnkoZS5zdHJlYW0pKTtcblx0XHRcdGlmIChlICYmIGUuc3RyZWFtKSB7XG5cdFx0XHRcdHJlY2VpdmVkU3RyZWFtID0gZS5zdHJlYW07XG5cdFx0XHRcdGlmIChpc0F1ZGlvTXV0ZSkgX211dGVBdWRpbygpO1xuXHRcdFx0XHRpZiAoaXNWaWRlb011dGUpIF9tdXRlVmlkZW8oKTtcblx0XHRcdH1cbi8vICAgICAgICAgICAgX3JlbW90ZVN0cmVhbSA9IGUuc3RyZWFtO1xuLy9cbi8vXHRcdFx0Zm9yICh2YXIgaT0wO2k8cmVtb3RlU3RyZWFtcy5sZW5ndGg7aSsrKSB7XG4vL1x0XHRcdCAgICBpZiAocmVtb3RlU3RyZWFtc1tpXSkge1xuLy9cdFx0XHQgICAgXHQgIGNvbnNvbGUuZGVidWcoXCIod2ViY29tU0RLOjp3ZWJydGM6Om9uYWRkc3RyZWFtKXBjLm9uYWRkc3RyZWFtIHN0YWNrSWQ9XCIrc3RhY2tJZCArIFwiLVwiICtcInJlbmRlcmluZyByZW1vdGUgdmlkIHRvIFwiK3JlbW90ZVN0cmVhbXNbaV0uaWQpO1xuLy9cdFx0XHQgICAgXHQgIGF0dGFjaE1lZGlhU3RyZWFtKCByZW1vdGVTdHJlYW1zW2ldLF9yZW1vdGVTdHJlYW0pO1xuLy9cdFx0XHQgICAgfVxuLy9cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoISFwYyAmJiBwYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0NIRUNLSU5HKSB7XG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjaGVja2luZycpO1xuXHRcdFx0XHRpY2VDb25uZWN0aW9uU3RhdGUgPSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DSEVDS0lORztcblx0XHRcdH0gZWxzZSBpZiAoISFwYyAmJiBwYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTk5FQ1RFRCkge1xuXHRcdFx0XHRpY2VDb25uZWN0aW9uU3RhdGUgPSBJQ0VfQ09OTkVDVElPTl9TVEFURV9DT05ORUNURUQ7XG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjb25uZWN0ZWQnKTtcblx0XHRcdFx0aWYgKHJlY2VpdmVkU3RyZWFtKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVTdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3RlU3RyZWFtc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Om9uYWRkc3RyZWFtKXBjLm9uYWRkc3RyZWFtIHN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAncmVuZGVyaW5nIHJlbW90ZSB2aWQgdG8gJyArIHJlbW90ZVN0cmVhbXNbaV0uaWQpO1xuXHRcdFx0XHRcdFx0XHRhdHRhY2hNZWRpYVN0cmVhbShyZW1vdGVTdHJlYW1zW2ldLCByZWNlaXZlZFN0cmVhbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcmVtb3RlU3RyZWFtc0NiLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3RlU3RyZWFtc0NiW2pdKSB7XG5cdFx0XHRcdFx0XHRcdHJlbW90ZVN0cmVhbXNDYltqXShyZWNlaXZlZFN0cmVhbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW90ZVN0cmVhbXNDYiA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BMaXN0ZW5pbmdUb1JlbW90ZUljZUNhbmRpZGF0ZSgpO1xuXHRcdFx0fSBlbHNlIGlmICghIXBjICYmIHBjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEKSB7XG5cdFx0XHRcdGljZUNvbm5lY3Rpb25TdGF0ZSA9IElDRV9DT05ORUNUSU9OX1NUQVRFX0NPTVBMRVRFRDtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSlzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ09NUExFVEVEKTtcblx0XHRcdFx0c3RvcExpc3RlbmluZ1RvUmVtb3RlSWNlQ2FuZGlkYXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoISFwYyAmJiBwYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCkge1xuXHRcdFx0XHRpY2VDb25uZWN0aW9uU3RhdGUgPSBJQ0VfQ09OTkVDVElPTl9TVEFURV9ESVNDT05ORUNURUQ7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Om9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAncmVtb3RlIGRpc2Nvbm5lY3Rpb24sIGNsb3NpbmcgcGVlciBjb25uZWN0aW9uJyk7XG5cdFx0XHRcdF9jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIGlmICghIXBjICYmIHBjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEKSB7XG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjbG9zZWQnKTtcblx0XHRcdFx0aWNlQ29ubmVjdGlvblN0YXRlID0gSUNFX0NPTk5FQ1RJT05fU1RBVEVfQ0xPU0VEO1xuXHRcdFx0XHRfY2xvc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAoISFwYyAmJiBwYy5pY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRCkge1xuXHRcdFx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Om9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAnZmFpbGVkJyk7XG5cdFx0XHRcdGljZUNvbm5lY3Rpb25TdGF0ZSA9IElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRDtcblx0XHRcdFx0X2Nsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAocGMpIHtcblx0XHRcdFx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Om9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyBwYy5pY2VDb25uZWN0aW9uU3RhdGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6b25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctcGMgPSBudWxsJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpY2VDb25uZWN0aW9uU3RhdGUgPSBJQ0VfQ09OTkVDVElPTl9TVEFURV9PVEhFUjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ2xvc2VkICYmIChpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCB8fCBpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRCB8fCBpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRCkpIHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpfY2xvc2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjbG9zZWQgd2VicnRjIHN0YWNrIGNvbXBsZXRlJyk7XG5cdFx0XHRcdHBjID0gbnVsbDtcblx0XHRcdFx0Y2xvc2VJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdHdlYnJ0Y21uZ3IuY2xlYXJXZWJydGNTdGFja3Mod2VicnRjU3RhY2tJZCk7XG5cdFx0XHRcdGlmIChvbkNsb3NlQ2IgJiYgdHlwZW9mIG9uQ2xvc2VDYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0b25DbG9zZUNiKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9uQ2xvc2VDYjIgJiYgdHlwZW9mIG9uQ2xvc2VDYjIgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdG9uQ2xvc2VDYjIoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIHN1YnNjcmliZSB0byByZW1vdGUgZGF0YVxuXHRcdGljZUNhbmRpZGF0ZXNMaXN0Q2IgPSBmdW5jdGlvbiAoc25hcHNob3QpIHtcblx0XHRcdHZhciBkYXRhID0gc25hcHNob3QudmFsKCk7XG5cdFx0XHR2YXIgY2FuZGlkYXRlID0gbmV3IG15UlRDSWNlQ2FuZGlkYXRlKHtcblx0XHRcdFx0c2RwTUxpbmVJbmRleDogZGF0YS5sYWJlbCxcblx0XHRcdFx0Y2FuZGlkYXRlOiBkYXRhLmNhbmRpZGF0ZSxcblx0XHRcdFx0c2RwTWlkOiBkYXRhLmlkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6OmljZUNhbmRpZGF0ZXNMaXN0Q2Ipc3RhY2tJZD0nICsgc3RhY2tJZCArICdyZWNlaXZlZCBpY2UgY2FuZGlkYXRlPScgKyBKU09OLnN0cmluZ2lmeShjYW5kaWRhdGUpKTtcblxuXHRcdFx0cGMuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG5cdFx0XHQvLyByZW1vdmUgY2FuZGlkYXRlIGZyb20gd2ViY29tXG5cdFx0XHQvL3NuYXBzaG90LnJlZigpLnJlbW92ZSgpO1xuXHRcdH07XG5cblx0XHRpZiAoaXNQdWJsaXNoKSB7XG5cdFx0XHRfaW5pdGxvY2FsU3RyZWFtKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X2luaXRTZHBDYWxsYmFja3MoKTtcblx0XHRcdFx0c2VuZE9mZmVyKCk7XG5cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfaW5pdFNkcENhbGxiYWNrcygpO1xuXHRcdH1cblxuXG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgSUNFIHNlcnZlcnMgY29uZmlndXJhdGlvblxuXHQgKiBAcGFyYW0gY2FsbGJhY2tPayAtIFRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHdoZW4gdGhlIGNvbmZpZyByZXRyaWV2ZW1lbnQgaXMgZG9uZVxuXHQgKiBAcGFyYW0gY2FsbGJhY2tLbyAtIFRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIHdoZW4gYW4gZXJyb3Igb2NjdXJzXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRJY2VTZXJ2ZXJzQ29uZmlnRnJvbVNlcnZlcihjYWxsYmFja09rLCBjYWxsYmFja0tvKSB7XG5cdFx0Y29uc29sZS5sb2coJ3dlYmNvbVNESzo6d2VicnRjOjpnZXRJY2VTZXJ2ZXJzQ29uZmlnRnJvbVNlcnZlcicpO1xuXHRcdHZhciBfY29uZmlnO1xuXHRcdGlmIChsb2NhbERhdGFSZWYpIHtcblx0XHRcdHZhciBmaXJlQ29uZmlnID0gbG9jYWxEYXRhUmVmLnJvb3QoKS5jaGlsZCgnY29uZmlnJyk7XG5cdFx0XHRmaXJlQ29uZmlnLm9uY2UoJ3ZhbHVlJywgZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdGlmIChzbmFwc2hvdCAmJiBzbmFwc2hvdC52YWwoKSkge1xuXHRcdFx0XHRcdF9jb25maWcgPSBzbmFwc2hvdC52YWwoKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrT2sgPT0gJ2Z1bmN0aW9uJylcblx0XHRcdFx0XHRcdGNhbGxiYWNrT2soX2NvbmZpZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFja0tvID09ICdmdW5jdGlvbicpXG5cdFx0XHRcdFx0XHRjYWxsYmFja0tvKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrS28gPT0gJ2Z1bmN0aW9uJylcblx0XHRcdFx0XHRjYWxsYmFja0tvKGVycm9yKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrS28gPT0gJ2Z1bmN0aW9uJylcblx0XHRcdFx0Y2FsbGJhY2tLbygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGxpc3RpbmcgdG8gYSByZW1vdGUgSUNFIGNhbmRpZGF0ZSBieSBlbmFibGluZyB0aGUgZGVkaWNhdGVkIGNhbGxiYWNrXG5cdCAqIGZvciB0aGUgXCJjaGlsZF9hZGRlZFwiIGV2ZW50IG9uIHRoZSBcImljZUNhbmRpZGF0ZXNMaXN0XCIgbm9kZSBpbiB0aGUgZGF0YWJhc2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvUmVtb3RlSWNlQ2FuZGlkYXRlKCkge1xuXHRcdHJlbW90ZURhdGFSZWYuY2hpbGQoJ2ljZUNhbmRpZGF0ZXNMaXN0Jykub24oJ2NoaWxkX2FkZGVkJywgaWNlQ2FuZGlkYXRlc0xpc3RDYik7XG5cdH1cblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGxpc3RlbmluZyB0byByZW1vdGUgSUNFIGNhbmRpc2RhdGUgYnkgZGlzYWJsaW5nIHRoZSBkZWRpY2F0ZWQgY2FsbGJhY2tcblx0ICogZm9yIHRoZSBcImNoaWxkX2FkZGVkXCIgZXZlbnQgb24gdGhlIFwiaWNlQ2FuZGlkYXRlc0xpc3RcIiBub2RlIGluIHRoZSBkYXRhYmFzZS5cblx0ICovXG5cdGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdUb1JlbW90ZUljZUNhbmRpZGF0ZSgpIHtcblx0XHRyZW1vdGVEYXRhUmVmLmNoaWxkKCdpY2VDYW5kaWRhdGVzTGlzdCcpLm9mZignY2hpbGRfYWRkZWQnLCBpY2VDYW5kaWRhdGVzTGlzdENiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgbG9jYWwgc3RyZWFtXG5cdCAqIEBwYXJhbSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gdHJpZ2dlciB3aGVuIHRoZSBpbml0aWFsaXNhdGlvbiBpcyBkb25lXG5cdCAqL1xuXHRmdW5jdGlvbiBfaW5pdGxvY2FsU3RyZWFtKGNhbGxiYWNrKSB7XG5cdFx0Ly8gZ2V0IGxvY2FsIHZpZGVvIHN0cmVhbSBhbmQgcmVuZGVycyB0byBsb2NhbFZpZFxuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9pbml0bG9jYWxTdHJlYW0pc3RhY2tJZD0nICsgc3RhY2tJZCArICcgZ2V0IGxvY2FsIHZpZGVvIHN0cmVhbSBhbmQgcmVuZGVycyB0byBsb2NhbCB2aWRlbycpO1xuXHRcdGlmIChhY3Rpb25UeXBlKSB7XG5cdFx0XHR2YXIgaW5pdGxvY2FsU3RyZWFtO1xuXHRcdFx0aWYgKGFjdGlvblR5cGUgPT09IHZhcnMuQUNUSU9OX1RZUEVfVklERU8pIHtcblx0XHRcdFx0aW5pdGxvY2FsU3RyZWFtID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9pbml0bG9jYWxTdHJlYW0paW5pdGxvY2FsU3RyZWFtX3ZpZGVvJyk7XG5cdFx0XHRcdFx0aWYgKGxvY2Fsc3RyZWFtLmdldFZpZGVvU3RyZWFtKCkgJiYgbG9jYWxzdHJlYW0uZ2V0VmlkZW9TdHJlYW0oKS5jbG9uZSAmJiB0eXBlb2YgbG9jYWxzdHJlYW0uZ2V0VmlkZW9TdHJlYW0oKS5jbG9uZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRzZW50U3RyZWFtID0gbG9jYWxzdHJlYW0uZ2V0VmlkZW9TdHJlYW0oKS5jbG9uZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZW50U3RyZWFtID0gbG9jYWxzdHJlYW0uZ2V0VmlkZW9TdHJlYW0oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGlzQXVkaW9NdXRlKSBfbXV0ZUF1ZGlvKCk7XG5cdFx0XHRcdFx0aWYgKGlzVmlkZW9NdXRlKSBfbXV0ZVZpZGVvKCk7XG5cdFx0XHRcdFx0cGMuYWRkU3RyZWFtKHNlbnRTdHJlYW0pO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpfaW5pdGxvY2FsU3RyZWFtKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnIHJlbmRlcmluZyBsb2NhbCB2aWRlbyB0byAnICsgbG9jYWxTdHJlYW1zW2ldLmlkKTtcblx0XHRcdFx0XHRcdGF0dGFjaE1lZGlhU3RyZWFtKGxvY2FsU3RyZWFtc1tpXSwgbG9jYWxzdHJlYW0uZ2V0VmlkZW9TdHJlYW0oKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGxvY2Fsc3RyZWFtLmdldFZpZGVvU3RyZWFtKCkpIHtcblx0XHRcdFx0XHRpbml0bG9jYWxTdHJlYW0oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhbHN0cmVhbS5hZGRWaWRlb0xpc3RlbmVyKGluaXRsb2NhbFN0cmVhbSk7XG5cdFx0XHRcdFx0bG9jYWxzdHJlYW0uaW5pdFZpZGVvKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gdmFycy5BQ1RJT05fVFlQRV9BVURJTykge1xuXHRcdFx0XHRpbml0bG9jYWxTdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJyh3ZWJjb21TREs6OndlYnJ0Yzo6X2luaXRsb2NhbFN0cmVhbSlpbml0bG9jYWxTdHJlYW1fYXVkaW8nKTtcblx0XHRcdFx0XHRpZiAobG9jYWxzdHJlYW0uZ2V0QXVkaW9TdHJlYW0oKSAmJiBsb2NhbHN0cmVhbS5nZXRBdWRpb1N0cmVhbSgpLmNsb25lICYmIHR5cGVvZiBsb2NhbHN0cmVhbS5nZXRBdWRpb1N0cmVhbSgpLmNsb25lID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHNlbnRTdHJlYW0gPSBsb2NhbHN0cmVhbS5nZXRBdWRpb1N0cmVhbSgpLmNsb25lKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbnRTdHJlYW0gPSBsb2NhbHN0cmVhbS5nZXRBdWRpb1N0cmVhbSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaXNBdWRpb011dGUpIF9tdXRlQXVkaW8oKTtcblx0XHRcdFx0XHRpZiAoaXNWaWRlb011dGUpIF9tdXRlVmlkZW8oKTtcblx0XHRcdFx0XHRwYy5hZGRTdHJlYW0oc2VudFN0cmVhbSk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0cmVhbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9pbml0bG9jYWxTdHJlYW0pc3RhY2tJZD0nICsgc3RhY2tJZCArICcgcmVuZGVyaW5nIGxvY2FsIEF1ZGlvIHRvICcgKyBsb2NhbFN0cmVhbXNbaV0uaWQpO1xuXHRcdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxTdHJlYW1zW2ldLCBsb2NhbHN0cmVhbS5nZXRBdWRpb1N0cmVhbSgpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAobG9jYWxzdHJlYW0uZ2V0QXVkaW9TdHJlYW0oKSkge1xuXHRcdFx0XHRcdGluaXRsb2NhbFN0cmVhbSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2Fsc3RyZWFtLmFkZEF1ZGlvTGlzdGVuZXIoaW5pdGxvY2FsU3RyZWFtKTtcblx0XHRcdFx0XHRsb2NhbHN0cmVhbS5pbml0QXVkaW8oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25zLkFDVElPTl9UWVBFX0FVRElPX1ZJREVPKSB7XG5cdFx0XHRcdGluaXRsb2NhbFN0cmVhbSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpfaW5pdGxvY2FsU3RyZWFtKWluaXRsb2NhbFN0cmVhbV9hdWRpb192aWRlbycpO1xuXHRcdFx0XHRcdGlmIChsb2NhbHN0cmVhbS5nZXRBdWRpb1ZpZGVvU3RyZWFtKCkgJiYgbG9jYWxzdHJlYW0uZ2V0QXVkaW9WaWRlb1N0cmVhbSgpLmNsb25lICYmIHR5cGVvZiBsb2NhbHN0cmVhbS5nZXRBdWRpb1ZpZGVvU3RyZWFtKCkuY2xvbmUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0c2VudFN0cmVhbSA9IGxvY2Fsc3RyZWFtLmdldEF1ZGlvVmlkZW9TdHJlYW0oKS5jbG9uZSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZW50U3RyZWFtID0gbG9jYWxzdHJlYW0uZ2V0QXVkaW9WaWRlb1N0cmVhbSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaXNBdWRpb011dGUpIF9tdXRlQXVkaW8oKTtcblx0XHRcdFx0XHRpZiAoaXNWaWRlb011dGUpIF9tdXRlVmlkZW8oKTtcblxuXHRcdFx0XHRcdHBjLmFkZFN0cmVhbShzZW50U3RyZWFtKTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpfaW5pdGxvY2FsU3RyZWFtKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnIHJlbmRlcmluZyBsb2NhbCBBdWRpb1ZpZGVvIHRvICcgKyBsb2NhbFN0cmVhbXNbaV0uaWQpO1xuXHRcdFx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0obG9jYWxTdHJlYW1zW2ldLCBsb2NhbHN0cmVhbS5nZXRBdWRpb1ZpZGVvU3RyZWFtKCkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAobG9jYWxzdHJlYW0uZ2V0QXVkaW9WaWRlb1N0cmVhbSgpKSB7XG5cdFx0XHRcdFx0aW5pdGxvY2FsU3RyZWFtKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYWxzdHJlYW0uYWRkQXVkaW9WaWRlb0xpc3RlbmVyKGluaXRsb2NhbFN0cmVhbSk7XG5cdFx0XHRcdFx0bG9jYWxzdHJlYW0uaW5pdEF1ZGlvVmlkZW8oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJyh3ZWJjb21TREs6OndlYnJ0Yzo6X2luaXRsb2NhbFN0cmVhbSlubyBhY3Rpb25UeXBlIHNwZWNpZmllZCcpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFByZXBhcmVzIHRoZSBTRFAgY2FsbGJhY2tzLlxuXHQgKiBSZW1vdGUgZGVzY3JpcHRpb24gd2lsbCBieSBkZWZpbmVkIGZvciB0aGUgcGVlciBjb25uZWN0aW9uIGFuZCBjYWxsYmFja3MgYXJlIGRlZmluZWQgZm9yIFNEUCBhbnN3c2VyIGFuZCByZXNwb25zZSBtYW5hZ2VtZW50LlxuXHQgKiBJZiB0aGVyZSBpcyBubyBwdWJsaXNoaW5nLCBsb2NhbCBkZXNjcmlwdGlvbiB3aWxsIGJlIGRlZmluZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBfaW5pdFNkcENhbGxiYWNrcygpIHtcblx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9pbml0U2RwQ2FsbGJhY2tzKXN0YWNrSWQ9JyArIHN0YWNrSWQpO1xuXHRcdGlmIChpc1B1Ymxpc2gpIHtcblx0XHRcdGlmIChzZHBPZmZlckNiKSByZW1vdGVEYXRhUmVmLm9mZignY2hpbGRfYWRkZWQnLCBzZHBPZmZlckNiKTtcblx0XHRcdHNkcEFuc3dlckNiID0gZnVuY3Rpb24gKHNuYXBzaG90KSB7XG5cdFx0XHRcdGlmICghaXNDbG9zZWQgJiYgc25hcHNob3QubmFtZSgpID09PSAnc2RwQW5zd2VyJykge1xuXHRcdFx0XHRcdHZhciBkYXRhID0gc25hcHNob3QudmFsKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpzZHBBbnN3ZXJDYilzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ3JlY2VpdmVkIHNkcEFuc3dlcjogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHRcdFx0XHRwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24oZGF0YSksIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6c2RwQW5zd2VyQ2Ipc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdyZW1vdGUgZGVzY3JpcHRpb24gc2V0Jyk7XG5cdFx0XHRcdFx0XHQvLyByZW1vdmUgc2RwQW5zd2VyIGZyb20gd2ViY29tXG5cdFx0XHRcdFx0XHQvL3NuYXBzaG90LnJlZigpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0c3RhcnRMaXN0ZW5pbmdUb1JlbW90ZUljZUNhbmRpZGF0ZSgpO1xuXHRcdFx0XHRcdH0sIG9uRXJyb3IpO1xuXHRcdFx0XHRcdHJlbW90ZURhdGFSZWYub2ZmKCdjaGlsZF9hZGRlZCcsIHNkcEFuc3dlckNiKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHJlbW90ZURhdGFSZWYub24oJ2NoaWxkX2FkZGVkJywgc2RwQW5zd2VyQ2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc2RwQW5zd2VyQ2IpIHJlbW90ZURhdGFSZWYub2ZmKCdjaGlsZF9hZGRlZCcsIHNkcEFuc3dlckNiKTtcblx0XHRcdHNkcE9mZmVyQ2IgPSBmdW5jdGlvbiAoc25hcHNob3QpIHtcblx0XHRcdFx0aWYgKCFpc0Nsb3NlZCAmJiBzbmFwc2hvdC5uYW1lKCkgPT09ICdzZHBPZmZlcicpIHtcblx0XHRcdFx0XHR2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuXHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6c2RwT2ZmZXJDYilzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ3JlY2VpdmVkIHNkcE9mZmVyOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdFx0XHRcdHBjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkYXRhKSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cGMuY3JlYXRlQW5zd2VyKGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpzZHBPZmZlckNiKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAnc2VuZGluZyBhbnN3ZXInKTtcblx0XHRcdFx0XHRcdFx0cGMuc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6c2RwT2ZmZXJDYilzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ3NldCBzZHBBbnN3ZXIgaW4gYmFzZSA6ICcgKyBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpO1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGF0YVJlZi5jaGlsZCgnc2RwQW5zd2VyJykuc2V0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pKSk7IC8vIGRlY29kaW5nL2VuY29kaW5nIGJlY2F1c2Ugb2YgRmlyZWZveCBidWdcblx0XHRcdFx0XHRcdFx0XHQvLyByZW1vdmUgc2RwT2ZmZXIgZnJvbSB3ZWJjb21cblx0XHRcdFx0XHRcdFx0XHQvL3NuYXBzaG90LnJlZigpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0TGlzdGVuaW5nVG9SZW1vdGVJY2VDYW5kaWRhdGUoKTtcblx0XHRcdFx0XHRcdFx0fSwgb25FcnJvcik7XG5cdFx0XHRcdFx0XHR9LCBvbkVycm9yLCBzdWJzY3JpYmVyTWVkaWFDb25zdHJhaW50cyk7XG5cdFx0XHRcdFx0fSwgb25FcnJvcik7XG5cdFx0XHRcdFx0cmVtb3RlRGF0YVJlZi5vZmYoJ2NoaWxkX2FkZGVkJywgc2RwT2ZmZXJDYik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZW1vdGVEYXRhUmVmLm9uKCdjaGlsZF9hZGRlZCcsIHNkcE9mZmVyQ2IpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgdGhlIFNEUCBjYWxsYmFja3MgYnkgZGlzYWJsaW5nIGNhbGxiYWNrcyBmb3IgdGhlIFwiY2hpbGRfYWRkZWRcIiBldmVudCBhbmQgYnkgZGVmaW5pbmcgdGhlbSB0byBudWxsLlxuXHQgKi9cblx0ZnVuY3Rpb24gX2Nsb3NlU2RwQ2FsbGJhY2tzKCkge1xuXHRcdGlmIChzZHBBbnN3ZXJDYikge1xuXHRcdFx0cmVtb3RlRGF0YVJlZi5vZmYoJ2NoaWxkX2FkZGVkJywgc2RwQW5zd2VyQ2IpO1xuXHRcdFx0c2RwQW5zd2VyQ2IgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoc2RwT2ZmZXJDYikge1xuXHRcdFx0cmVtb3RlRGF0YVJlZi5vZmYoJ2NoaWxkX2FkZGVkJywgc2RwT2ZmZXJDYik7XG5cdFx0XHRzZHBPZmZlckNiID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2VuZHMgYW4gU0RQIG9mZmVyIHRocm91Z2ggdGhlIHBlZXIgY29ubmVjdGlvbi5cblx0ICogQW4gU0RQIG9mZmVyIGlzIGNyZWF0ZWQsIHdpdGggYSBsb2NhbCBkZXNjcmlwdGlvbiwgYW5kIGlzIHNlbnQuXG5cdCAqIFRoZSBkZXNjcmlwdGlvbiBpcyBib3RoIGRlY29kZWQgYW5kIGVuY29kZWQgYmVjYXVzZSBvZiBGaXJlZm94IGJ1Z3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBzZW5kT2ZmZXIoKSB7XG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gcHVibGllIGwnb2ZmcmUgaW5pdGlhbGVcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRjb25zb2xlLmxvZygnKHdlYnJ0Yzo6c2VuZE9mZmVyKXN0YWNraWQ9JyArIHN0YWNrSWQgKyAnLScgKyAnY3JlYXRpbmcgc2RwT2ZmZXInKTtcblx0XHRwYy5jcmVhdGVPZmZlcihmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcblx0XHRcdHBjLnNldExvY2FsRGVzY3JpcHRpb24oZGVzY3JpcHRpb24sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpjcmVhdGVPZmZlcilzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ3NldCBzZHBPZmZlciBpbiBiYXNlIDogJyArIEpTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uKSk7XG5cdFx0XHRcdGxvY2FsRGF0YVJlZi5jaGlsZCgnc2RwT2ZmZXInKS5zZXQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpKTsgLy8gZGVjb2RpbmcvZW5jb2RpbmcgYmVjYXVzZSBvZiBGaXJlZm94IGJ1Z1xuXHRcdFx0fSwgb25FcnJvcik7XG5cdFx0fSwgb25FcnJvciwgcHVibGlzaGVyTWVkaWFDb25zdHJhaW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uIGFuZCB0cmlnZ2VycyB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGRvbmVcblx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdCAqL1xuXHRmdW5jdGlvbiBfY2xvc2UoY2FsbGJhY2spIHtcblxuXHRcdGlmICghY2xvc2VJblByb2dyZXNzICYmICFpc0Nsb3NlZCkge1xuXHRcdFx0Y2xvc2VJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRcdG9uQ2xvc2VDYjIgPSBjYWxsYmFjaztcblx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6X2Nsb3NlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAnY2xvc2luZyB3ZWJydGMgc3RhY2snKTtcblx0XHRcdGlmIChwYykge1xuXHRcdFx0XHRwYy5jbG9zZSgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSB3ZWJjb20gY2FsbGJhY2tzXG5cdFx0XHRpZiAocmVtb3RlZGF0YXJlZkNiKSB7XG5cdFx0XHRcdHJlbW90ZURhdGFSZWYub2ZmKCdjaGlsZF9hZGRlZCcsIHJlbW90ZWRhdGFyZWZDYik7XG5cdFx0XHRcdHJlbW90ZWRhdGFyZWZDYiA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpY2VDYW5kaWRhdGVzTGlzdENiKSB7XG5cdFx0XHRcdHN0b3BMaXN0ZW5pbmdUb1JlbW90ZUljZUNhbmRpZGF0ZSgpO1xuXHRcdFx0XHRpY2VDYW5kaWRhdGVzTGlzdENiID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdF9jbG9zZVNkcENhbGxiYWNrcygpO1xuXG5cdFx0XHQvLyByZW1vdmUgd2ViY29tIGRhdGFcbi8vXHRcdFx0bG9jYWxEYXRhUmVmLnBhcmVudCgpLm9uRGlzY29ubmVjdCgpLmNhbmNlbCgpO1xuLy9cdFx0XHRsb2NhbERhdGFSZWYucGFyZW50KCkub25EaXNjb25uZWN0KCkucmVtb3ZlKCk7XG5cdFx0XHQvL3JlbW90ZURhdGFSZWYucmVtb3ZlKCk7XG5cblx0XHRcdC8vIHN0b3AgdmlkZW9cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChsb2NhbFN0cmVhbXNbaV0pIHtcblx0XHRcdFx0XHQvL2xvY2FsU3RyZWFtc1tpXS5zcmM9XCJcIjsgbm90IHN1cHBvcnRlZCBieSBGaXJlZm94XG5cdFx0XHRcdFx0ZGV0YWNoTWVkaWFTdHJlYW0obG9jYWxTdHJlYW1zW2ldKTtcblx0XHRcdFx0XHQvL2xvY2FsU3RyZWFtc1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpfY2xvc2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdzdG9wcGluZyBsb2NhbCB2aWRlbyB0byAnICsgbG9jYWxTdHJlYW1zW2ldLmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCByZW1vdGVTdHJlYW1zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChyZW1vdGVTdHJlYW1zW2pdKSB7XG5cdFx0XHRcdFx0Ly9yZW1vdGVTdHJlYW1zW2pdLnNyYz1cIlwiOyBub3Qgc3VwcG9ydGVkIGJ5IEZpcmVmb3hcblx0XHRcdFx0XHRkZXRhY2hNZWRpYVN0cmVhbShyZW1vdGVTdHJlYW1zW2pdKTtcblx0XHRcdFx0XHQvL3JlbW90ZVN0cmVhbXNbal0ucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUuZGVidWcoJyh3ZWJjb21TREs6OndlYnJ0Yzo6X2Nsb3NlKXN0YWNrSWQ9JyArIHN0YWNrSWQgKyAnLScgKyAnc3RvcHBpbmcgcmVtb3RlIHZpZCB0byAnICsgcmVtb3RlU3RyZWFtc1tqXS5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXG5cdFx0XHRpc0Nsb3NlZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9jbG9zZSlzdGFja0lkPScgKyBzdGFja0lkICsgJy0nICsgJ2Nsb3Npbmcgd2VicnRjIHN0YWNrIC0+IHdhaXRpbmcgZm9yIElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCcpO1xuXHRcdFx0aWYgKGlzQ2xvc2VkICYmIChpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0RJU0NPTk5FQ1RFRCB8fCBpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0NMT1NFRCB8fCBpY2VDb25uZWN0aW9uU3RhdGUgPT09IElDRV9DT05ORUNUSU9OX1NUQVRFX0ZBSUxFRCkpIHtcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpfY2xvc2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjbG9zZWQgd2VicnRjIHN0YWNrIGNvbXBsZXRlJyk7XG5cdFx0XHRcdHBjID0gbnVsbDtcblx0XHRcdFx0Y2xvc2VJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRcdHdlYnJ0Y21uZ3IuY2xlYXJXZWJydGNTdGFja3Mod2VicnRjU3RhY2tJZCk7XG5cdFx0XHRcdGlmIChvbkNsb3NlQ2IyICYmIHR5cGVvZiBvbkNsb3NlQ2IyID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRvbkNsb3NlQ2IyKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZygnKHdlYmNvbVNESzo6d2VicnRjOjpfY2xvc2Upc3RhY2tJZD0nICsgc3RhY2tJZCArICctJyArICdjbG9zaW5nIHdlYnJ0YyBzdGFjayBhbHJlYWR5IGluIHByb2dyZXNzJyk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX211dGVBdWRpbygpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpfbXV0ZUF1ZGlvKXN0YWNrSWQ9JyArIHN0YWNrSWQpO1xuXHRcdGlzQXVkaW9NdXRlID0gdHJ1ZTtcblx0XHR2YXIgYXVkaW9UcmFja3M7XG5cdFx0aWYgKGlzUHVibGlzaCAmJiBzZW50U3RyZWFtKSB7XG5cdFx0XHRhdWRpb1RyYWNrcyA9IHNlbnRTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKTtcblx0XHRcdGlmIChhdWRpb1RyYWNrcyAmJiBhdWRpb1RyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXVkaW9UcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoYXVkaW9UcmFja3NbaV0pIGF1ZGlvVHJhY2tzW2ldLmVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWlzUHVibGlzaCAmJiByZWNlaXZlZFN0cmVhbSkge1xuXHRcdFx0YXVkaW9UcmFja3MgPSByZWNlaXZlZFN0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0aWYgKGF1ZGlvVHJhY2tzICYmIGF1ZGlvVHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhdWRpb1RyYWNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChhdWRpb1RyYWNrc1tqXSkgYXVkaW9UcmFja3Nbal0uZW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX3VubXV0ZUF1ZGlvKCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Ol91bm11dGVBdWRpbylzdGFja0lkPScgKyBzdGFja0lkKTtcblx0XHRpc0F1ZGlvTXV0ZSA9IGZhbHNlO1xuXHRcdHZhciBhdWRpb1RyYWNrcztcblx0XHRpZiAoaXNQdWJsaXNoICYmIHNlbnRTdHJlYW0pIHtcblx0XHRcdGF1ZGlvVHJhY2tzID0gc2VudFN0cmVhbS5nZXRBdWRpb1RyYWNrcygpO1xuXHRcdFx0aWYgKGF1ZGlvVHJhY2tzICYmIGF1ZGlvVHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhdWRpb1RyYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChhdWRpb1RyYWNrc1tpXSkgYXVkaW9UcmFja3NbaV0uZW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFpc1B1Ymxpc2ggJiYgcmVjZWl2ZWRTdHJlYW0pIHtcblx0XHRcdGF1ZGlvVHJhY2tzID0gcmVjZWl2ZWRTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKTtcblx0XHRcdGlmIChhdWRpb1RyYWNrcyAmJiBhdWRpb1RyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXVkaW9UcmFja3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAoYXVkaW9UcmFja3Nbal0pIGF1ZGlvVHJhY2tzW2pdLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX211dGVWaWRlbygpIHtcblx0XHRjb25zb2xlLmxvZygnKHdlYmNvbVNESzo6d2VicnRjOjpfbXV0ZVZpZGVvKXN0YWNrSWQ9JyArIHN0YWNrSWQpO1xuXHRcdGlzVmlkZW9NdXRlID0gdHJ1ZTtcblx0XHR2YXIgdmlkZW9UcmFja3M7XG5cdFx0aWYgKGlzUHVibGlzaCAmJiBzZW50U3RyZWFtKSB7XG5cdFx0XHR2aWRlb1RyYWNrcyA9IHNlbnRTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcblx0XHRcdGlmICh2aWRlb1RyYWNrcyAmJiB2aWRlb1RyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmlkZW9UcmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodmlkZW9UcmFja3NbaV0pIHZpZGVvVHJhY2tzW2ldLmVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWlzUHVibGlzaCAmJiByZWNlaXZlZFN0cmVhbSkge1xuXHRcdFx0dmlkZW9UcmFja3MgPSByZWNlaXZlZFN0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0aWYgKHZpZGVvVHJhY2tzICYmIHZpZGVvVHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB2aWRlb1RyYWNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmICh2aWRlb1RyYWNrc1tqXSkgdmlkZW9UcmFja3Nbal0uZW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX3VubXV0ZVZpZGVvKCkge1xuXHRcdGNvbnNvbGUubG9nKCcod2ViY29tU0RLOjp3ZWJydGM6Ol91bm11dGVWaWRlbylzdGFja0lkPScgKyBzdGFja0lkKTtcblx0XHRpc1ZpZGVvTXV0ZSA9IGZhbHNlO1xuXHRcdHZhciB2aWRlb1RyYWNrcztcblx0XHRpZiAoaXNQdWJsaXNoICYmIHNlbnRTdHJlYW0pIHtcblx0XHRcdHZpZGVvVHJhY2tzID0gc2VudFN0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0aWYgKHZpZGVvVHJhY2tzICYmIHZpZGVvVHJhY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2aWRlb1RyYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICh2aWRlb1RyYWNrc1tpXSkgdmlkZW9UcmFja3NbaV0uZW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFpc1B1Ymxpc2ggJiYgcmVjZWl2ZWRTdHJlYW0pIHtcblx0XHRcdHZpZGVvVHJhY2tzID0gcmVjZWl2ZWRTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcblx0XHRcdGlmICh2aWRlb1RyYWNrcyAmJiB2aWRlb1RyYWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdmlkZW9UcmFja3MubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRpZiAodmlkZW9UcmFja3Nbal0pIHZpZGVvVHJhY2tzW2pdLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBfY29ubmVjdExvY2FsU3RyZWFtKHZpZGVvRWx0LCBnZXRTdHJlYW1DYikge1xuXHRcdGlmIChhY3Rpb25UeXBlKSB7XG5cdFx0XHRpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9ucy5BQ1RJT05fVFlQRV9WSURFTykge1xuXHRcdFx0XHRsb2NhbHN0cmVhbS5jb25uZWN0TG9jYWxWaWRlb1N0cmVhbSh2aWRlb0VsdCwgZ2V0U3RyZWFtQ2IpO1xuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25zLkFDVElPTl9UWVBFX0FVRElPKSB7XG5cdFx0XHRcdGxvY2Fsc3RyZWFtLmNvbm5lY3RMb2NhbEF1ZGlvU3RyZWFtKHZpZGVvRWx0LCBnZXRTdHJlYW1DYik7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbnMuQUNUSU9OX1RZUEVfQVVESU9fVklERU8pIHtcblx0XHRcdFx0bG9jYWxzdHJlYW0uY29ubmVjdExvY2FsQXVkaW9WaWRlb1N0cmVhbSh2aWRlb0VsdCwgZ2V0U3RyZWFtQ2IpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX2Nvbm5lY3RSZW1vdGVTdHJlYW0odmlkZW9FbHQsIGdldFN0cmVhbUNiKSB7XG5cdFx0aWYgKHZpZGVvRWx0KSB7XG5cdFx0XHRpZiAocmVjZWl2ZWRTdHJlYW0pIHtcblx0XHRcdFx0YXR0YWNoTWVkaWFTdHJlYW0odmlkZW9FbHQsIHJlY2VpdmVkU3RyZWFtKTtcblx0XHRcdFx0aWYgKGdldFN0cmVhbUNiICYmIHR5cGVvZiBnZXRTdHJlYW1DYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Z2V0U3RyZWFtQ2IocmVjZWl2ZWRTdHJlYW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdGVTdHJlYW1zLnB1c2godmlkZW9FbHQpO1xuXHRcdFx0XHRpZiAoZ2V0U3RyZWFtQ2IgJiYgdHlwZW9mIGdldFN0cmVhbUNiID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRyZW1vdGVTdHJlYW1zQ2IucHVzaChnZXRTdHJlYW1DYik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHJlY2VpdmVkU3RyZWFtKSB7XG5cdFx0XHRcdGlmIChnZXRTdHJlYW1DYiAmJiB0eXBlb2YgZ2V0U3RyZWFtQ2IgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGdldFN0cmVhbUNiKHJlY2VpdmVkU3RyZWFtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGdldFN0cmVhbUNiICYmIHR5cGVvZiBnZXRTdHJlYW1DYiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0cmVtb3RlU3RyZWFtc0NiLnB1c2goZ2V0U3RyZWFtQ2IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblxuXHRpbml0KCk7XG5cblx0cmV0dXJuIHtcblxuXHRcdC8qKlxuXHRcdCAqIERlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgc28gYXMgdG8gY2xvc2UgdGhlIGNvbW11bmljYXRpb25cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIFRoZSBjYWxsYmFjayB0byB0cmlnZ2VyXG5cdFx0ICovXG5cdFx0c2V0T25DbG9zZTogZnVuY3Rpb24gKGNiKSB7XG5cdFx0XHRvbkNsb3NlQ2IgPSBjYjtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENsb3NlcyBhIGNhbGxiYWNrXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBUaGUgY2FsbGJhY2sgdG8gY2xvc2Vcblx0XHQgKi9cblx0XHRjbG9zZTogZnVuY3Rpb24gKGNiKSB7XG5cdFx0XHRjb25zb2xlLmRlYnVnKCcod2ViY29tU0RLOjp3ZWJydGM6Ol9jbG9zZSlzdGFja0lkPScgKyBzdGFja0lkICsgJy1jbG9zZSByZXF1ZXN0ZWQnKTtcblx0XHRcdF9jbG9zZShjYik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENvbm5lY3QgYSBsb2NhbCBzdHJlYW0gdG8gYW4gZWxlbWVudCBhY2NvcmRpbmcgdG8gdGhlIGFjdGlvbiB0eXBlIGluIHVzZSAoQUNUSU9OX1RZUEVfVklERU8sIEFDVElPTl9UWVBFX0FVRElPLCBBQ1RJT05fVFlQRV9BVURJT19WSURFTylcblx0XHQgKiBAcGFyYW0gdmlkZW9FbHQgLSBUaGUgdmlkZW8gZWxlbWVudFxuXHRcdCAqIEBwYXJhbSBnZXRTdHJlYW1DYiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIG1lZGlhc3RyZWFtIG9iamVjdFxuXHRcdCAqL1xuXHRcdGNvbm5lY3RMb2NhbFN0cmVhbTogZnVuY3Rpb24gKHZpZGVvRWx0LCBnZXRTdHJlYW1DYikge1xuXHRcdFx0X2Nvbm5lY3RMb2NhbFN0cmVhbSh2aWRlb0VsdCwgZ2V0U3RyZWFtQ2IpO1xuXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb25uZWN0IGEgcmVtb3RlIHN0cmVhbSB0byBhbiBlbGVtZW50XG5cdFx0ICogQHBhcmFtIHZpZGVvRWx0IC0gVGhlIHZpZGVvIGVsZW1lbnRcblx0XHQgKiBAcGFyYW0gZ2V0U3RyZWFtQ2IgLSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBtZWRpYXN0cmVhbSBvYmplY3Rcblx0XHQgKi9cblx0XHRjb25uZWN0UmVtb3RlU3RyZWFtOiBmdW5jdGlvbiAodmlkZW9FbHQsIGdldFN0cmVhbUNiKSB7XG5cdFx0XHRfY29ubmVjdFJlbW90ZVN0cmVhbSh2aWRlb0VsdCwgZ2V0U3RyZWFtQ2IpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogbXV0ZSBBdWRpb1xuXHRcdCAqL1xuXHRcdG11dGVBdWRpbzogZnVuY3Rpb24gKCkge1xuXHRcdFx0X211dGVBdWRpbygpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogdW5tdXRlIEF1ZGlvXG5cdFx0ICovXG5cdFx0dW5tdXRlQXVkaW86IGZ1bmN0aW9uICgpIHtcblx0XHRcdF91bm11dGVBdWRpbygpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogbXV0ZSBWaWRlb1xuXHRcdCAqL1xuXHRcdG11dGVWaWRlbzogZnVuY3Rpb24gKCkge1xuXHRcdFx0X211dGVWaWRlbygpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogdW5tdXRlIFZpZGVvXG5cdFx0ICovXG5cdFx0dW5tdXRlVmlkZW86IGZ1bmN0aW9uICgpIHtcblx0XHRcdF91bm11dGVWaWRlbygpO1xuXHRcdH1cblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnJ0YztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy93ZWJydGMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9