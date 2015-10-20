(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FlexCss"] = factory();
	else
		root["FlexCss"] = factory();
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Form = __webpack_require__(8);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _Tooltip = __webpack_require__(97);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Modal = __webpack_require__(104);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _Toggleable = __webpack_require__(106);
	
	var _Toggleable2 = _interopRequireDefault(_Toggleable);
	
	var _OffCanvas = __webpack_require__(107);
	
	var _OffCanvas2 = _interopRequireDefault(_OffCanvas);
	
	var _Dropdown = __webpack_require__(108);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _LightBox = __webpack_require__(109);
	
	var _LightBox2 = _interopRequireDefault(_LightBox);
	
	var _Showcase = __webpack_require__(110);
	
	var _Showcase2 = _interopRequireDefault(_Showcase);
	
	// default export as component object
	exports['default'] = {
	    Form: _Form2['default'],
	    Tooltip: _Tooltip2['default'],
	    Modal: _Modal2['default'],
	    Widget: _Widget2['default'],
	    Settings: _utilSettings2['default'],
	    Toggleable: _Toggleable2['default'],
	    OffCanvas: _OffCanvas2['default'],
	    Dropdown: _Dropdown2['default'],
	    LightBox: _LightBox2['default'],
	    Showcase: _Showcase2['default']
	};
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL21vZHVsZXMvQWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7b0JBRUksTUFBTTs7Ozt1QkFDSCxTQUFTOzs7O3FCQUNYLE9BQU87Ozs7c0JBQ04sUUFBUTs7Ozs0QkFDTixlQUFlOzs7OzBCQUNiLFlBQVk7Ozs7eUJBQ2IsV0FBVzs7Ozt3QkFDWixVQUFVOzs7O3dCQUNWLFVBQVU7Ozs7d0JBQ1YsVUFBVTs7Ozs7cUJBR2hCO0FBQ1gsUUFBSSxtQkFBTTtBQUNWLFdBQU8sc0JBQVM7QUFDaEIsU0FBSyxvQkFBTztBQUNaLFVBQU0scUJBQVE7QUFDZCxZQUFRLDJCQUFVO0FBQ2xCLGNBQVUseUJBQVk7QUFDdEIsYUFBUyx3QkFBVztBQUNwQixZQUFRLHVCQUFVO0FBQ2xCLFlBQVEsdUJBQVU7QUFDbEIsWUFBUSx1QkFBVTtDQUNyQiIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9tb2R1bGVzL0FsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEZvcm0gZnJvbSAnRm9ybSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdUb29sdGlwJztcbmltcG9ydCBNb2RhbCBmcm9tICdNb2RhbCc7XG5pbXBvcnQgV2lkZ2V0IGZyb20gJ1dpZGdldCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAndXRpbC9TZXR0aW5ncyc7XG5pbXBvcnQgVG9nZ2xlYWJsZSBmcm9tICdUb2dnbGVhYmxlJztcbmltcG9ydCBPZmZDYW52YXMgZnJvbSAnT2ZmQ2FudmFzJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdEcm9wZG93bic7XG5pbXBvcnQgTGlnaHRCb3ggZnJvbSAnTGlnaHRCb3gnO1xuaW1wb3J0IFNob3djYXNlIGZyb20gJ1Nob3djYXNlJztcblxuLy8gZGVmYXVsdCBleHBvcnQgYXMgY29tcG9uZW50IG9iamVjdFxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEZvcm06IEZvcm0sXG4gICAgVG9vbHRpcDogVG9vbHRpcCxcbiAgICBNb2RhbDogTW9kYWwsXG4gICAgV2lkZ2V0OiBXaWRnZXQsXG4gICAgU2V0dGluZ3M6IFNldHRpbmdzLFxuICAgIFRvZ2dsZWFibGU6IFRvZ2dsZWFibGUsXG4gICAgT2ZmQ2FudmFzOiBPZmZDYW52YXMsXG4gICAgRHJvcGRvd246IERyb3Bkb3duLFxuICAgIExpZ2h0Qm94OiBMaWdodEJveCxcbiAgICBTaG93Y2FzZTogU2hvd2Nhc2Vcbn07XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Form
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/*global HTMLFormElement, fetch, FormData, clearTimeout, NodeList*/
	
	var _get = __webpack_require__(9)['default'];
	
	var _inherits = __webpack_require__(23)['default'];
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _Array$from = __webpack_require__(85)['default'];
	
	var _Object$keys = __webpack_require__(88)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	var _defaults = __webpack_require__(91)['default'];
	
	var _interopExportWildcard = __webpack_require__(96)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Tooltip = __webpack_require__(97);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _DestroyableWidget2 = __webpack_require__(99);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	var _isomorphicFetch = __webpack_require__(102);
	
	_defaults(exports, _interopExportWildcard(_isomorphicFetch, _defaults));
	
	var LOADING_CLASS = 'loading';
	var DATA_ELEMENT_INVALID = 'data-flexcss-invalid';
	var REMOTE = 'data-remote';
	var REMOTE_ACTION = 'data-remote-action';
	var ATTR_DISABLE_INLINE = 'data-disable-inline-validation';
	var ATTR_DISABLE_REALTIME = 'data-disable-realtime-validation';
	var ATTR_VALIDATOR = 'data-validate';
	var ATTR_DATA_CUSTOM_MESSAGE = 'data-validation-message';
	var ATTR_DATA_CUSTOM_LABEL = 'data-custom-label';
	var ATTR_VALIDATE_VISIBILITY = 'data-validate-visibility';
	var ATTR_ERROR_TARGET_ID = 'data-error-target';
	var ATTR_DEPENDS = 'data-depends-selector';
	var CONST_USE_JSON = 'json';
	var CONST_REALTIME_EVENT = 'input';
	var FOCUS_TOOLTIP_DELAY = 20;
	var CLICK_TOOLTIP_DELAY = 150;
	/**
	 * Triggered when form is fully initialized and handlers are binded
	 * @type {string}
	 */
	var EVENT_FORM_READY = 'flexcss.form.ready';
	exports.EVENT_FORM_READY = EVENT_FORM_READY;
	/**
	 * Fires when a form is submitted, cancelable
	 * @type {string}
	 */
	var EVENT_FORM_SUBMIT = 'flexcss.form.submit';
	exports.EVENT_FORM_SUBMIT = EVENT_FORM_SUBMIT;
	/**
	 * Fired directly after the form has been submitted via ajax
	 * @type {string}
	 */
	var EVENT_FORM_AFTER_AJAX_SUBMIT = 'flexcss.form.afterAjaxSubmit';
	exports.EVENT_FORM_AFTER_AJAX_SUBMIT = EVENT_FORM_AFTER_AJAX_SUBMIT;
	/**
	 * Fired when ajax events did complete
	 * @type {string}
	 */
	var EVENT_FORM_AJAX_COMPLETED = 'flexcss.form.ajaxCompleted';
	
	exports.EVENT_FORM_AJAX_COMPLETED = EVENT_FORM_AJAX_COMPLETED;
	/**
	 * A HTML5 Form Validation replacement
	 */
	
	var Form = (function (_DestroyableWidget) {
	    _inherits(Form, _DestroyableWidget);
	
	    /**
	     * @param {HTMLElement} form
	     * @param [options] optional options
	     */
	
	    function Form(form, options) {
	        _classCallCheck(this, Form);
	
	        _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this);
	
	        if (!(form instanceof HTMLFormElement)) {
	            throw 'argument {0} form needs to be an form element';
	        }
	
	        /**
	         * The Form
	         * @type {HTMLElement}
	         */
	        this.form = form;
	
	        /**
	         * @type {Tooltip}
	         */
	        this.tooltips = null;
	
	        /**
	         * @type {Promise}
	         */
	        this.currentValidationFuture = new _Promise(function () {});
	
	        /**
	         * Default options
	         * @type {Object}
	         */
	        this.options = {
	            // if true creates tooltips above element, uses FlexCss Tooltips
	            createTooltips: true,
	            // if true appends error message after input element
	            appendError: false,
	            // type of ajax submit
	            ajaxSubmitType: 'POST',
	            // json content type if ajax method is set to json
	            ajaxJsonContentType: 'application/json; charset=utf-8',
	            // allow inline validation
	            inlineValidation: true,
	            // validate in realtime (on `input` event)
	            realtime: true,
	            // timeout when realtime event should be captured
	            realtimeTimeout: 250,
	            // formatting method for an error
	            formatErrorTooltip: function formatErrorTooltip(error) {
	                return '<i class="icon-attention"></i> ' + error;
	            },
	            // the class that will be put on the element to mark it failed validation
	            inputErrorClass: 'invalid',
	            // the container class for error messages below an element
	            containerErrorClass: 'form-error',
	            // additional options for fetch
	            fetchOptions: {
	                credentials: 'include'
	            },
	            // the container for tooltips
	            tooltipContainer: form,
	            // if you have a fixed header, either set a number or function here
	            scrollToElementDiff: 0
	        };
	
	        // overwrite default options
	        _Object$assign(this.options, options);
	
	        // apply settings from attributes
	        _utilUtil2['default'].applyOptionsFromElement(form, this.options);
	
	        // set form class as widget
	        // Forms are very different to classical widgets,
	        // we will not use our base widget class for this but just self
	        form.hfWidgetInstance = this;
	
	        /**
	         * A List of Validators
	         * @type {Object}
	         * @private
	         */
	        this._validators = Form.globalValidators;
	
	        /**
	         * @type {Function}
	         * @private
	         */
	        this._remoteValidationFunction = null;
	
	        this.initFormValidation();
	    }
	
	    /**
	     * Global validators
	     * @type {Array}
	     */
	
	    _createClass(Form, [{
	        key: 'destroy',
	        value: function destroy() {
	            _get(Object.getPrototypeOf(Form.prototype), 'destroy', this).call(this);
	            if (this.tooltips) {
	                this.tooltips.destroy();
	            }
	        }
	
	        /**
	         * Submits this form, either via ajax or just classical (default)
	         * @param {HTMLFormElement} thisForm
	         * @param {Event} e
	         * @private
	         * @returns {Promise|boolean} returns false if submit is cancled
	         */
	    }, {
	        key: '_submitFunction',
	        value: function _submitFunction(thisForm, e) {
	            var shouldUseAjax = thisForm.getAttribute(REMOTE),
	                ajaxPostUrl = thisForm.getAttribute(REMOTE_ACTION) || thisForm.getAttribute('action') || window.location.href,
	                useJson = CONST_USE_JSON === shouldUseAjax,
	                self = this;
	
	            var ev = _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_SUBMIT).withOriginal(e).fire();
	
	            // abort execution is event was prevented
	            if (ev.defaultPrevented) {
	                self._formStopLoading();
	                return false;
	            }
	
	            if (shouldUseAjax === null) {
	                // submit
	                return thisForm.submit();
	            }
	            // prevent form from submit normally
	            e.preventDefault();
	
	            // add information that this is an XMLHttpRequest request (used by some frameworks)
	            var defaultHeaders = {
	                'X-Requested-With': 'XMLHttpRequest'
	            };
	
	            // setup default headers
	            if (useJson) {
	                _Object$assign(defaultHeaders, {
	                    'Content-Type': this.options.ajaxJsonContentType
	                });
	            }
	            var defaultOptions = _Object$assign(this.options.fetchOptions, {
	                headers: defaultHeaders,
	                method: this.options.ajaxSubmitType
	            });
	
	            // support either JSON request payload or normal payload submission
	            var serverCall = useJson ? fetch(ajaxPostUrl, _Object$assign(defaultOptions, {
	                body: JSON.stringify(this.serialize())
	            })) : fetch(ajaxPostUrl, _Object$assign(defaultOptions, {
	                body: new FormData(thisForm)
	            }));
	
	            _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_AFTER_AJAX_SUBMIT).withOriginal(e).fire();
	
	            return serverCall.then(function (r) {
	                (self._remoteValidationFunction || Form.globalRemoteValidationFunction).apply(self, [r]);
	
	                _utilEvent2['default'].dispatch(thisForm, EVENT_FORM_AJAX_COMPLETED).withOriginal(e).withDetail({ response: r }).fire();
	                // always remove error class
	                self._formStopLoading();
	            });
	        }
	
	        /**
	         * Serializes a form to a json object
	         * @returns {Object}
	         */
	    }, {
	        key: 'serialize',
	        value: function serialize() {
	            var selectors = ['input[name]:not([type="radio"]):enabled', 'input[type="radio"][name]:checked', 'select[name]:enabled', 'textarea[name]:enabled'],
	                inputs = this.form.querySelectorAll(selectors.join(',')),
	                result = {};
	
	            Array.prototype.forEach.call(inputs, function (input) {
	                var exists = result[input.name],
	                    value = input.value;
	                if (exists instanceof Array) {
	                    exists.push(value);
	                } else if (exists) {
	                    result[input.name] = [result[input.name], value];
	                } else {
	                    result[input.name] = value;
	                }
	            });
	
	            return result;
	        }
	
	        /**
	         * Handles the chain of validation on given fields
	         *
	         * @param {HTMLElement|Array|NodeList} field
	         * @param [focus] optional focus first error
	         * @returns {Promise}
	         */
	    }, {
	        key: 'handleValidation',
	        value: function handleValidation(field, focus) {
	            var _this = this;
	
	            var fields = field instanceof Array || field instanceof NodeList ? field : [field];
	            return this._handleValidation(fields, focus, true).then((function (r) {
	                if (!r.foundAnyError) {
	                    // remove tooltips
	                    if (_this.tooltips) {
	                        _this.tooltips.removeTooltip();
	                    }
	                }
	                return r;
	            }).bind(this));
	        }
	
	        /**
	         * Handles errors on given node list
	         * @param {NodeList} toValidateFields
	         * @param {boolean} focus
	         * @param {boolean} scoped if true, will only validate the fields `invalidFields`
	         * @returns {Promise}
	         * @private
	         */
	    }, {
	        key: '_handleValidation',
	        value: function _handleValidation(toValidateFields, focus, scoped) {
	            var self = this;
	            var arr = Form._createArrayFromInvalidFieldList(toValidateFields),
	                isLocalInvalid = arr.length > 0;
	            // focus must appear in the same frame for iOS devices
	            if (isLocalInvalid && focus) {
	                self._focusElement(arr[0]);
	            }
	            var validation = scoped ? this._customValidationsForElements(toValidateFields) : self.validateCustomFields();
	            return validation.then(function (r) {
	                if (isLocalInvalid) {
	                    // combine browser and custom validators
	                    r.foundAnyError = true;
	                }
	                // get a unique field list of all fields that need to be checked and rendered
	                // it's possible that we have duplicates in non scoped mode
	                var thisToValidateFields = scoped ? toValidateFields : _Array$from(arr).concat(r.checkedFields);
	                r.checkedFields = thisToValidateFields;
	                var foundInvalidFields = self.prepareErrors(thisToValidateFields, false),
	                    firstInvalidField = foundInvalidFields[0];
	                if (firstInvalidField) {
	                    if (focus) {
	                        self._focusElement(firstInvalidField);
	                        // if element could not be focused:
	                        if (document.activeElement !== firstInvalidField) {
	                            self._handleTooltipHideClickAfterChange();
	                        }
	                    } else {
	                        self._handleTooltipHideClickAfterChange();
	                    }
	                    self.showAndOrCreateTooltip(firstInvalidField);
	                }
	                return r;
	            });
	        }
	
	        /**
	         * @param {HTMLElement} field
	         * @param {ValidityState} validity
	         * @returns {*}
	         * @private
	         */
	
	    }, {
	        key: '_setupErrorMessages',
	        value: function _setupErrorMessages(field, validity) {
	            return Form.globalErrorMessageHandler ? Form.globalErrorMessageHandler.apply(this, [field, validity]) : false;
	        }
	
	        /**
	         * Handles class labels for elements
	         * @param {Object} fields
	         * @private
	         */
	    }, {
	        key: '_handleLabels',
	        value: function _handleLabels(fields) {
	            _Object$keys(fields).forEach((function (id) {
	                var labels = this.getForm().querySelectorAll('[for="' + id + '"]'),
	                    invalid = fields[id];
	                if (labels.length) {
	                    for (var labelsIndex = 0; labelsIndex < labels.length; labelsIndex++) {
	                        var labelEl = labels[labelsIndex];
	                        // we can't use toggle attribute, not supported in IE
	                        if (invalid) {
	                            this._markElementInvalid(labelEl);
	                        } else {
	                            this._markElementValid(labelEl);
	                        }
	                    }
	                }
	            }).bind(this));
	        }
	
	        /**
	         * @param el
	         * @private
	         */
	    }, {
	        key: '_markElementInvalid',
	        value: function _markElementInvalid(el) {
	            el.setAttribute(DATA_ELEMENT_INVALID, "true");
	            el.classList.add(this.options.inputErrorClass);
	        }
	
	        /**
	         * @param el
	         * @private
	         */
	    }, {
	        key: '_markElementValid',
	        value: function _markElementValid(el) {
	            el.removeAttribute(DATA_ELEMENT_INVALID);
	            el.classList.remove(this.options.inputErrorClass);
	        }
	
	        /**
	         * A List of invalid elements (:invalid)
	         * @returns {Array}
	         * @private
	         */
	    }, {
	        key: '_getInvalidElements',
	        value: function _getInvalidElements() {
	            return Array.prototype.filter.call(this.getForm().querySelectorAll(":invalid"), function (r) {
	                return !(r instanceof HTMLFieldSetElement);
	            });
	        }
	
	        /**
	         * @param {HTMLElement} thisParent
	         * @private
	         */
	    }, {
	        key: '_removeElementErrors',
	        value: function _removeElementErrors(thisParent) {
	            var errors = thisParent.querySelectorAll('.' + this.options.containerErrorClass),
	                inputsWithErrorClasses = thisParent.querySelectorAll('[' + DATA_ELEMENT_INVALID + ']');
	            for (var elementErrorIndex = 0; elementErrorIndex < errors.length; elementErrorIndex++) {
	                errors[elementErrorIndex].parentNode.removeChild(errors[elementErrorIndex]);
	            }
	            for (var inputErrorIndex = 0; inputErrorIndex < inputsWithErrorClasses.length; inputErrorIndex++) {
	                var el = inputsWithErrorClasses[inputErrorIndex];
	                this._markElementValid(el);
	            }
	        }
	
	        /**
	         * Registers a custom validator
	         * @param {String} name
	         * @param {Function} validator a validation function should always return either a Future(true) or Future(false)
	         * even when the field has been invalidated with `setCustomValidity`, because of different browser `bugs`
	         * we can't rely on that
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerValidator',
	        value: function registerValidator(name, validator) {
	            this._validators[name] = validator;
	            return this;
	        }
	
	        /**
	         * Runs async validation
	         * @param {String} validationRef
	         * @param {HTMLElement} field
	         * @returns {Promise}
	         * @private
	         */
	    }, {
	        key: '_runValidation',
	        value: function _runValidation(validationRef, field) {
	            if (!this._validators[validationRef]) {
	                throw 'Could not found validator: ' + validationRef;
	            }
	            var cl = field.classList,
	                future = this._validators[validationRef].apply(this, [field, this.form]);
	            cl.add(LOADING_CLASS);
	            future.then(function () {
	                cl.remove(LOADING_CLASS);
	            });
	            return future;
	        }
	
	        /**
	         * Run custom validations for elements, validations are done async do support XHR Requests or other stuff
	         *
	         * @param {Array|NodeList} fields
	         * @returns {Promise} contains either true if validations passed or false if something went wrong
	         * @private
	         */
	    }, {
	        key: '_customValidationsForElements',
	        value: function _customValidationsForElements(fields) {
	            var futures = [],
	                fieldsLength = fields.length,
	                checkedFields = [];
	            for (var iVal = 0; iVal < fieldsLength; iVal++) {
	                var field = fields[iVal],
	                    validationRef = field.getAttribute(ATTR_VALIDATOR),
	                    validity = field.validity;
	                if (this._validators[validationRef]) {
	                    // use local validation first and then continue with custom validations
	                    if (Form._shouldNotValidateField(field) || validity && !validity.customError && !validity.valid) {
	                        continue;
	                    }
	                    checkedFields.push(field);
	                    futures.push(this._runValidation(validationRef, field));
	                } else {
	                    if (validationRef) {
	                        console.warn('data-validate was set but no validator was found');
	                    }
	                }
	            }
	            return _Promise.all(futures).then(function (allFutures) {
	                var l = allFutures.length;
	                var result = {
	                    checkedFields: checkedFields,
	                    foundAnyError: false
	                };
	                for (var fI = 0; fI < l; fI++) {
	                    if (!allFutures[fI]) {
	                        result.foundAnyError = true;
	                        break;
	                    }
	                }
	                return result;
	            });
	        }
	
	        /**
	         * Remove all errors for this form
	         * @returns {Form}
	         */
	    }, {
	        key: 'removeErrors',
	        value: function removeErrors() {
	            this._removeElementErrors(this.form);
	            if (this.tooltips) {
	                this.tooltips.removeTooltip();
	            }
	            return this;
	        }
	
	        /**
	         * Will handle errors for given fields
	         * @param {Array|NodeList} fields
	         * @param {Boolean} removeAllErrors
	         */
	    }, {
	        key: 'prepareErrors',
	        value: function prepareErrors(fields, removeAllErrors) {
	            if (removeAllErrors) {
	                this.removeErrors();
	            }
	            var labelGroups = {},
	                invalidFields = [];
	
	            function handleAdditionalLabels(isInvalid, thisLabelGroup, field) {
	                var additionalLabels = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id,
	                    group = thisLabelGroup[additionalLabels];
	                if (additionalLabels) {
	                    // check additionally if field is currently marked as invalid
	                    // so the label is not marked as error if no field is marked as one
	                    group = group ? group : isInvalid;
	                    thisLabelGroup[additionalLabels] = group;
	                }
	            }
	
	            // We save all validations in an extra property because we need to reset the validity due some
	            // implementation errors in other browsers then chrome
	            for (var i = 0; i < fields.length; i++) {
	                var field = fields[i],
	                    errorTarget = Form._findErrorTarget(field),
	                    _parent = errorTarget.parentNode,
	                    validity = field.validity,
	                    isInvalid = validity && !validity.valid;
	                if (Form._shouldNotValidateField(field)) {
	                    continue;
	                }
	                field.flexFormsSavedValidity = JSON.parse(JSON.stringify(validity));
	                handleAdditionalLabels(isInvalid, labelGroups, field);
	                if (isInvalid) {
	                    if (!removeAllErrors) {
	                        // Remove current errors:
	                        this._removeElementErrors(_parent);
	                    }
	                    // setup custom error messages:
	                    this._setupErrorMessages(field, validity);
	                    var msg = field.validationMessage;
	
	                    // mark fields as invalid
	                    this._markElementInvalid(errorTarget);
	                    this._markElementInvalid(field);
	
	                    if (this.options.appendError) {
	                        _parent.insertAdjacentHTML("beforeend", '<div class="' + this.options.containerErrorClass + '">' + msg + '</div>');
	                    }
	                    invalidFields.push(field);
	                    field.flexFormsSavedValidationMessage = msg;
	                } else {
	                    // restore invalid fields
	                    this._markElementValid(errorTarget);
	                    this._markElementValid(field);
	
	                    // cleanup
	                    delete field.flexFormsSavedValidationMessage;
	
	                    // remove error markup
	                    this._removeElementErrors(_parent);
	                }
	                // We have to reset the custom validity here to allow native validations work again
	                field.setCustomValidity('');
	            }
	            // if validates a single field we need to check the linked fields to a label:
	            if (fields.length === 1) {
	                var field = fields[0];
	                var id = field.getAttribute(ATTR_DATA_CUSTOM_LABEL) || field.id;
	                if (id) {
	                    var linkedFields = _Array$from(this.getForm().querySelectorAll('[' + ATTR_DATA_CUSTOM_LABEL + '="' + id + '"], #' + id));
	                    linkedFields.forEach((function (thisField) {
	                        var validity = thisField.validity,
	                            isInvalid = validity && !validity.valid && this._isElementInvalidElement(thisField);
	                        handleAdditionalLabels(isInvalid, labelGroups, thisField);
	                    }).bind(this));
	                }
	            }
	            this._handleLabels(labelGroups);
	            return invalidFields;
	        }
	
	        /**
	         * Validates all custom fields
	         * @returns {Promise}
	         */
	    }, {
	        key: 'validateCustomFields',
	        value: function validateCustomFields() {
	            return this._customValidationsForElements(this.form.querySelectorAll("[data-validate]"));
	        }
	
	        /**
	         * Tests if a field should be validated
	         * @param {HTMLElement} field
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: 'getForm',
	
	        /**
	         * This form
	         * @returns {HTMLElement}
	         */
	        value: function getForm() {
	            return this.form;
	        }
	
	        /**
	         * Registers a function that handles remote validation
	         * @param {Function} func
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerRemoteValidation',
	        value: function registerRemoteValidation(func) {
	            this._remoteValidationFunction = func;
	            return this;
	        }
	
	        /**
	         * Formats the error content for the tooltip
	         * @param {String} error
	         * @returns {String}
	         * @private
	         */
	    }, {
	        key: '_formatErrorTooltip',
	        value: function _formatErrorTooltip(error) {
	            return this.options.formatErrorTooltip.apply(this, [error]);
	        }
	
	        /**
	         * Tries to find a custom error target on given target
	         * @param target
	         * @returns {HTMLElement}
	         * @private
	         */
	    }, {
	        key: 'showAndOrCreateTooltip',
	
	        /**
	         * Creates a tooltip at given element, will only create a new instance if not created
	         * @param {HTMLElement} target
	         * @param {Boolean} [remove]
	         */
	        value: function showAndOrCreateTooltip(target, remove) {
	            var self = this;
	            if (!this.tooltips && this.options.createTooltips) {
	                this.tooltips = new _Tooltip2['default'](this.options.tooltipContainer, {
	                    containerClass: 'error-tooltip'
	                });
	            }
	            if (!this.options.createTooltips) {
	                return false;
	            }
	
	            if (!target.flexFormsSavedValidity) {
	                return false;
	            }
	            var errorTarget = Form._findErrorTarget(target);
	            if (!target.flexFormsSavedValidity.valid && self._isElementInvalidElement(errorTarget)) {
	                self.tooltips.createTooltip(errorTarget, self._formatErrorTooltip(target.flexFormsSavedValidationMessage), false);
	                return true;
	            } else {
	                if (remove) {
	                    self.tooltips.removeTooltip();
	                }
	            }
	            return false;
	        }
	
	        /**
	         * Checks if element is marked as invalid
	         * @param {HTMLElement} el
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: '_isElementInvalidElement',
	        value: function _isElementInvalidElement(el) {
	            return el.hasAttribute(DATA_ELEMENT_INVALID);
	        }
	
	        /**
	         * Handles invalid event of a form
	         * @param {Event} e
	         * @returns {Promise|boolean}
	         * @private
	         */
	    }, {
	        key: '_checkIsInvalid',
	        value: function _checkIsInvalid(e) {
	            e.preventDefault();
	            var invalidFields = this.getForm().querySelectorAll(":invalid");
	            return this._handleValidation(invalidFields, true, false);
	        }
	
	        /**
	         * Will query dependent fields (by selector) that should be validated with given field
	         * @param field
	         * @returns {NodeList|[]}
	         * @private
	         */
	    }, {
	        key: '_getDependentFields',
	        value: function _getDependentFields(field) {
	            var fieldSelector = field.getAttribute(ATTR_DEPENDS),
	                base = [field];
	            if (fieldSelector) {
	                base.push.apply(base, Array.prototype.slice.apply(this.getForm().querySelectorAll(fieldSelector)));
	            }
	            return base;
	        }
	
	        /**
	         * @private
	         * @param {HTMLElement} [target]
	         */
	    }, {
	        key: '_handleTooltipInline',
	        value: function _handleTooltipInline(target) {
	            if (this.tooltips) {
	                this.tooltips.removeTooltip(target);
	            }
	        }
	
	        /**
	         * Initializes validation for a given form, registers event handlers
	         */
	    }, {
	        key: 'initFormValidation',
	        value: function initFormValidation() {
	            var _this2 = this;
	
	            // Suppress the default bubbles
	            var form = this.getForm(),
	                self = this,
	                invalidEvent = 'invalid';
	
	            /**
	             * Validates if is valid realtime element
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidRealtimeElement(target) {
	                return !target.hasAttribute(ATTR_DISABLE_REALTIME) && !target.hasAttribute(ATTR_DISABLE_INLINE);
	            }
	
	            form.addEventListener(invalidEvent, function (e) {
	                e.preventDefault();
	            }, true);
	
	            _utilUtil2['default'].addEventOnce(invalidEvent, form, function handleInvalid(e) {
	                self._formLoading();
	                var result = self._checkIsInvalid(e);
	                if (result) {
	                    self.currentValidationFuture = new _Promise(function (resolve) {
	                        result.then(function (r) {
	                            setTimeout(function () {
	                                _utilUtil2['default'].addEventOnce(invalidEvent, form, handleInvalid, true);
	                            }, 0);
	                            resolve(r);
	                            self._formStopLoading();
	                            if (!r.foundAnyError) {
	                                self._formLoading();
	                                self._handleSubmit(e);
	                            }
	                        });
	                    });
	                }
	            }, true);
	
	            this.addEventListener(form, 'reset', function () {
	                _this2.removeErrors();
	            });
	
	            // Timeout for keys:
	            var TIMEOUT_KEYDOWN,
	                KEYDOWN_RUNNING = false;
	
	            // resets keydown events
	            function clearKeyDownTimeout() {
	                KEYDOWN_RUNNING = false;
	                clearTimeout(TIMEOUT_KEYDOWN);
	            }
	
	            // setup custom realtime event if given
	            if (self.options.realtime) {
	                this.addEventListener(form, CONST_REALTIME_EVENT, function (e) {
	                    if (self._formIsLoading()) {
	                        return;
	                    }
	                    var target = e.target;
	                    clearTimeout(TIMEOUT_KEYDOWN);
	                    if (KEYDOWN_RUNNING) {
	                        return;
	                    }
	                    TIMEOUT_KEYDOWN = setTimeout(function () {
	                        var isStillTarget = document.activeElement === e.target;
	                        if (!_checkIsValidRealtimeElement(target)) {
	                            return;
	                        }
	                        if (isStillTarget) {
	                            self._handleTooltipInline();
	                        }
	                        KEYDOWN_RUNNING = true;
	                        var dependentFields = self._getDependentFields(target);
	                        self._customValidationsForElements(dependentFields).then(function () {
	                            self.prepareErrors(dependentFields, false);
	                            if (isStillTarget) {
	                                self.showAndOrCreateTooltip(e.target);
	                            }
	                            // future must be resolved before another event can be started
	                            KEYDOWN_RUNNING = false;
	                        });
	                    }, self.options.realtimeTimeout);
	                }, true);
	            }
	
	            /**
	             * Validates if target is a valid input field to check blur and focus events
	             *
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidBlurFocusElement(target) {
	                var attr = target.getAttribute("type");
	                return attr !== "radio" && attr !== "checkbox" && attr !== "submit";
	            }
	
	            /**
	             * Validates if is valid inline-check element
	             * @param {HTMLElement} target
	             * @returns {boolean}
	             * @private
	             */
	            function _checkIsValidInlineCheckElement(target) {
	                return !target.hasAttribute(ATTR_DISABLE_INLINE);
	            }
	
	            this.addEventListener(form, 'blur', function (e) {
	                // do not hide tooltip after change event
	                if (!e.target.flexcssKeepTooltips) {
	                    self._handleTooltipInline(e.target);
	                }
	                delete e.target.flexcssKeepTooltips;
	            }, true);
	
	            // handle focus on input elements
	            // will show an error if field is invalid
	            this.addEventListener(form, "focus", function (e) {
	                if (self._formIsLoading()) {
	                    return;
	                }
	                // do not track errors for checkbox and radios on focus:
	                if (!_checkIsValidBlurFocusElement(e.target)) {
	                    return;
	                }
	                // we need to delay this a little, because Firefox and Safari do not show a tooltip after it
	                // just have been hidden (on blur). Maybe fix this with a queue later
	                setTimeout(function () {
	                    self.showAndOrCreateTooltip(e.target);
	                }, FOCUS_TOOLTIP_DELAY);
	            }, true);
	
	            if (self.options.inlineValidation) {
	                // Handle change for checkbox, radios and selects
	                this.addEventListener(form, "change", function (e) {
	                    var target = e.target;
	                    if (self._formIsLoading() || !_checkIsValidInlineCheckElement(target)) {
	                        return;
	                    }
	                    clearKeyDownTimeout();
	                    var name = target.getAttribute('name');
	                    var inputs = name ? form.querySelectorAll('[name="' + name + '"]') : [target];
	                    // we only support dependent fields for a single widgets right now
	                    if (inputs.length === 1) {
	                        inputs = self._getDependentFields(target);
	                    }
	                    self._customValidationsForElements(inputs).then(function () {
	                        self.prepareErrors(inputs, false);
	                        target.flexcssKeepTooltips = self.showAndOrCreateTooltip(target, true);
	                        if (target.flexcssKeepTooltips) {
	                            self._handleTooltipHideClickAfterChange();
	                        }
	                    });
	                });
	            }
	
	            // prevent default if form is invalid
	            this.addEventListener(form, "submit", function listener(e) {
	                self._submitListener(e, listener);
	            });
	
	            _utilEvent2['default'].dispatchAndFire(form, EVENT_FORM_READY);
	        }
	
	        /* Loading states, unfortunately we can't check if a promise is pending :/*/
	        /* TODO: Maybe wrap promise to extend this functionality */
	
	    }, {
	        key: '_formLoading',
	        value: function _formLoading() {
	            this.getForm().classList.add(LOADING_CLASS);
	        }
	    }, {
	        key: '_formStopLoading',
	        value: function _formStopLoading() {
	            this.getForm().classList.remove(LOADING_CLASS);
	        }
	    }, {
	        key: '_formIsLoading',
	        value: function _formIsLoading() {
	            return this.getForm().classList.contains(LOADING_CLASS);
	        }
	
	        // this defines the logic after a change event when a tooltip is shown
	        // because we call this method inside the change event, the click would be immeditally executed with the change
	        // event when not using setTimeout(). There might be another solution for this...
	    }, {
	        key: '_handleTooltipHideClickAfterChange',
	        value: function _handleTooltipHideClickAfterChange() {
	            var self = this;
	            if (this.options.createTooltips) {
	                setTimeout(function () {
	                    _utilUtil2['default'].addEventOnce(_utilSettings2['default'].getTabEvent(), global.document.body, function (t) {
	                        if (!self._isElementInvalidElement(t.target)) {
	                            self._handleTooltipInline();
	                        }
	                    });
	                }, CLICK_TOOLTIP_DELAY);
	            }
	        }
	    }, {
	        key: '_focusElement',
	        value: function _focusElement(el) {
	            el.focus();
	            _utilUtil2['default'].scrollToElement(el, this.options.scrollToElementDiff);
	        }
	
	        /**
	         * Listener that is executed on form submit
	         * @param e
	         * @param submitListener
	         * @returns {boolean}
	         * @private
	         */
	    }, {
	        key: '_submitListener',
	        value: function _submitListener(e, submitListener) {
	
	            var form = this.getForm(),
	                self = this,
	                submitEvent = 'submit';
	
	            if (this._formIsLoading()) {
	                e.preventDefault();
	                return false;
	            }
	            this._formLoading();
	            form.removeEventListener(submitEvent, submitListener);
	            this.removeErrors();
	            e.preventDefault();
	            // reset:
	            if (form.checkValidity()) {
	                form.addEventListener(submitEvent, submitListener);
	                // It's possible that the form is valid but the custom validations need to be checked again:
	                self.currentValidationFuture = new _Promise(function (resolve) {
	                    var validation = self.validateCustomFields();
	                    validation.then(function (r) {
	                        // because custom validators may mark multiple fields as invalid, we get all of them in the form
	                        var fields = self._getInvalidElements(),
	                            errors = self.prepareErrors(fields, false),
	                            firstError = errors[0];
	                        if (firstError) {
	                            self._focusElement(firstError);
	                            self.showAndOrCreateTooltip(firstError, true);
	                        }
	                        resolve(r);
	                    });
	                });
	                self.currentValidationFuture.then(function (r) {
	                    if (!r.foundAnyError) {
	                        // Handle submitting the form to server:
	                        self._handleSubmit(e);
	                    } else {
	                        self._formStopLoading();
	                    }
	                });
	            } else {
	                self._formStopLoading();
	                form.addEventListener(submitEvent, submitListener);
	            }
	        }
	
	        /**
	         * Handles submitting, optionally allows to stop submitting
	         * @param e
	         * @private
	         */
	    }, {
	        key: '_handleSubmit',
	        value: function _handleSubmit(e) {
	            this._submitFunction(this.form, e);
	        }
	
	        /**
	         * Registers a global event Handler
	         * @param errorFunc
	         */
	    }], [{
	        key: '_shouldNotValidateField',
	        value: function _shouldNotValidateField(field) {
	            var target = Form._findErrorTarget(field);
	            return target instanceof HTMLFieldSetElement || target.hasAttribute(ATTR_VALIDATE_VISIBILITY) && !_utilUtil2['default'].isVisible(target);
	        }
	
	        /**
	         * Creates an array from a node list with invalid items
	         * This Method expicitly checks if field should not be validated so it can be used to foucs a field
	         * @param list
	         * @returns {Array}
	         * @private
	         */
	    }, {
	        key: '_createArrayFromInvalidFieldList',
	        value: function _createArrayFromInvalidFieldList(list) {
	            var arr = [];
	            for (var i = 0; i < list.length; ++i) {
	                var n = list[i];
	                if (n.validity && !n.validity.valid) {
	                    if (!Form._shouldNotValidateField(n)) {
	                        arr.push(n);
	                    }
	                }
	            }
	            return arr;
	        }
	    }, {
	        key: '_findErrorTarget',
	        value: function _findErrorTarget(target) {
	            var el = target.getAttribute(ATTR_ERROR_TARGET_ID) || target,
	                foundTarget = el instanceof HTMLElement ? el : global.document.getElementById(el);
	            if (!foundTarget) {
	                throw 'Given error target did not exsits:' + target;
	            }
	            return foundTarget;
	        }
	    }, {
	        key: 'registerErrorMessageHandler',
	        value: function registerErrorMessageHandler(errorFunc) {
	            Form.globalErrorMessageHandler = errorFunc;
	        }
	
	        /**
	         * Initialize forms for a specific selector
	         * @param {String} selector
	         * @param {Object} [options]
	         * @return {array.<Form>}
	         */
	    }, {
	        key: 'init',
	        value: function init(selector, options) {
	            var forms = selector instanceof HTMLElement ? selector.querySelectorAll('form') : document.querySelectorAll(selector),
	                instances = [];
	            for (var i = 0; i < forms.length; i++) {
	                instances.push(new Form(forms[i], options));
	            }
	            return instances;
	        }
	
	        /**
	         * Registers a global validator that is usable on all form instances
	         * @param {String} name
	         * @param {Function} validator
	         * @returns {Function}
	         */
	    }, {
	        key: 'registerValidator',
	        value: function registerValidator(name, validator) {
	            Form.globalValidators[name] = validator;
	            return Form;
	        }
	
	        /**
	         * Registers a global function that is called when a form should validate the response of a server
	         * @param {Function} func
	         * @returns {Form}
	         */
	    }, {
	        key: 'registerGlobalRemoteValidationFunction',
	        value: function registerGlobalRemoteValidationFunction(func) {
	            Form.globalRemoteValidationFunction = func;
	            return Form;
	        }
	    }]);
	
	    return Form;
	})(_DestroyableWidget3['default']);
	
	exports['default'] = Form;
	Form.globalValidators = [];
	
	/**
	 * Global Remote validation function
	 */
	Form.globalRemoteValidationFunction = function () {};
	
	/**
	 * Handles custom error messages extracts custom message by default
	 */
	Form.globalErrorMessageHandler = function (field, validity) {
	    if (!validity.customError) {
	        var customMsg = field.getAttribute(ATTR_DATA_CUSTOM_MESSAGE);
	        if (customMsg) {
	            field.setCustomValidity(customMsg);
	        }
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtPLFNBQVM7Ozs7eUJBRVgsWUFBWTs7Ozt3QkFDYixXQUFXOzs7OzRCQUNQLGVBQWU7Ozs7a0NBQ04sbUJBQW1COzs7OytCQUpuQyxrQkFBa0I7Ozs7QUFNaEMsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLElBQU0sb0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7QUFDcEQsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDO0FBQzdCLElBQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFDN0QsSUFBTSxxQkFBcUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUNqRSxJQUFNLGNBQWMsR0FBRyxlQUFlLENBQUM7QUFDdkMsSUFBTSx3QkFBd0IsR0FBRyx5QkFBeUIsQ0FBQztBQUMzRCxJQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBQ25ELElBQU0sd0JBQXdCLEdBQUcsMEJBQTBCLENBQUM7QUFDNUQsSUFBTSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNqRCxJQUFNLFlBQVksR0FBRyx1QkFBdUIsQ0FBQztBQUM3QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDOUIsSUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUM7QUFDckMsSUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7Ozs7O0FBS3pCLElBQU0sZ0JBQWdCLEdBQUcsb0JBQW9C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LENBQUMseUJBQXlCLEdBQUcsVUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFLO0FBQ2xELFFBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLFlBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM3RCxZQUFJLFNBQVMsRUFBRTtBQUNYLGlCQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiFcbiAqIEZsZXhDc3MuRm9ybVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qZ2xvYmFsIEhUTUxGb3JtRWxlbWVudCwgZmV0Y2gsIEZvcm1EYXRhLCBjbGVhclRpbWVvdXQsIE5vZGVMaXN0Ki9cblxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnVG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBFdmVudCBmcm9tICd1dGlsL0V2ZW50JztcbmltcG9ydCBVdGlsIGZyb20gJ3V0aWwvVXRpbCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAndXRpbC9TZXR0aW5ncyc7XG5pbXBvcnQgRGVzdHJveWFibGVXaWRnZXQgZnJvbSAnRGVzdHJveWFibGVXaWRnZXQnO1xuXG5jb25zdCBMT0FESU5HX0NMQVNTID0gJ2xvYWRpbmcnO1xuY29uc3QgREFUQV9FTEVNRU5UX0lOVkFMSUQgPSAnZGF0YS1mbGV4Y3NzLWludmFsaWQnO1xuY29uc3QgUkVNT1RFID0gJ2RhdGEtcmVtb3RlJztcbmNvbnN0IFJFTU9URV9BQ1RJT04gPSAnZGF0YS1yZW1vdGUtYWN0aW9uJztcbmNvbnN0IEFUVFJfRElTQUJMRV9JTkxJTkUgPSAnZGF0YS1kaXNhYmxlLWlubGluZS12YWxpZGF0aW9uJztcbmNvbnN0IEFUVFJfRElTQUJMRV9SRUFMVElNRSA9ICdkYXRhLWRpc2FibGUtcmVhbHRpbWUtdmFsaWRhdGlvbic7XG5jb25zdCBBVFRSX1ZBTElEQVRPUiA9ICdkYXRhLXZhbGlkYXRlJztcbmNvbnN0IEFUVFJfREFUQV9DVVNUT01fTUVTU0FHRSA9ICdkYXRhLXZhbGlkYXRpb24tbWVzc2FnZSc7XG5jb25zdCBBVFRSX0RBVEFfQ1VTVE9NX0xBQkVMID0gJ2RhdGEtY3VzdG9tLWxhYmVsJztcbmNvbnN0IEFUVFJfVkFMSURBVEVfVklTSUJJTElUWSA9ICdkYXRhLXZhbGlkYXRlLXZpc2liaWxpdHknO1xuY29uc3QgQVRUUl9FUlJPUl9UQVJHRVRfSUQgPSAnZGF0YS1lcnJvci10YXJnZXQnO1xuY29uc3QgQVRUUl9ERVBFTkRTID0gJ2RhdGEtZGVwZW5kcy1zZWxlY3Rvcic7XG5jb25zdCBDT05TVF9VU0VfSlNPTiA9ICdqc29uJztcbmNvbnN0IENPTlNUX1JFQUxUSU1FX0VWRU5UID0gJ2lucHV0JztcbmNvbnN0IEZPQ1VTX1RPT0xUSVBfREVMQVkgPSAyMDtcbmNvbnN0IENMSUNLX1RPT0xUSVBfREVMQVkgPSAxNTA7XG4vKipcbiAqIFRyaWdnZXJlZCB3aGVuIGZvcm0gaXMgZnVsbHkgaW5pdGlhbGl6ZWQgYW5kIGhhbmRsZXJzIGFyZSBiaW5kZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9GT1JNX1JFQURZID0gJ2ZsZXhjc3MuZm9ybS5yZWFkeSc7XG4vKipcbiAqIEZpcmVzIHdoZW4gYSBmb3JtIGlzIHN1Ym1pdHRlZCwgY2FuY2VsYWJsZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0ZPUk1fU1VCTUlUID0gJ2ZsZXhjc3MuZm9ybS5zdWJtaXQnO1xuLyoqXG4gKiBGaXJlZCBkaXJlY3RseSBhZnRlciB0aGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQgdmlhIGFqYXhcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9GT1JNX0FGVEVSX0FKQVhfU1VCTUlUID0gJ2ZsZXhjc3MuZm9ybS5hZnRlckFqYXhTdWJtaXQnO1xuLyoqXG4gKiBGaXJlZCB3aGVuIGFqYXggZXZlbnRzIGRpZCBjb21wbGV0ZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0ZPUk1fQUpBWF9DT01QTEVURUQgPSAnZmxleGNzcy5mb3JtLmFqYXhDb21wbGV0ZWQnO1xuXG4vKipcbiAqIEEgSFRNTDUgRm9ybSBWYWxpZGF0aW9uIHJlcGxhY2VtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIEZvcm0gZXh0ZW5kcyBEZXN0cm95YWJsZVdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybVxuICAgICAqIEBwYXJhbSBbb3B0aW9uc10gb3B0aW9uYWwgb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZvcm0sIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAoIShmb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgJ2FyZ3VtZW50IHswfSBmb3JtIG5lZWRzIHRvIGJlIGFuIGZvcm0gZWxlbWVudCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEZvcm1cbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Rvb2x0aXB9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRvb2x0aXBzID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWxpZGF0aW9uRnV0dXJlID0gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBpZiB0cnVlIGNyZWF0ZXMgdG9vbHRpcHMgYWJvdmUgZWxlbWVudCwgdXNlcyBGbGV4Q3NzIFRvb2x0aXBzXG4gICAgICAgICAgICBjcmVhdGVUb29sdGlwczogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGlmIHRydWUgYXBwZW5kcyBlcnJvciBtZXNzYWdlIGFmdGVyIGlucHV0IGVsZW1lbnRcbiAgICAgICAgICAgIGFwcGVuZEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHR5cGUgb2YgYWpheCBzdWJtaXRcbiAgICAgICAgICAgIGFqYXhTdWJtaXRUeXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyBqc29uIGNvbnRlbnQgdHlwZSBpZiBhamF4IG1ldGhvZCBpcyBzZXQgdG8ganNvblxuICAgICAgICAgICAgYWpheEpzb25Db250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgLy8gYWxsb3cgaW5saW5lIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGlubGluZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBpbiByZWFsdGltZSAob24gYGlucHV0YCBldmVudClcbiAgICAgICAgICAgIHJlYWx0aW1lOiB0cnVlLFxuICAgICAgICAgICAgLy8gdGltZW91dCB3aGVuIHJlYWx0aW1lIGV2ZW50IHNob3VsZCBiZSBjYXB0dXJlZFxuICAgICAgICAgICAgcmVhbHRpbWVUaW1lb3V0OiAyNTAsXG4gICAgICAgICAgICAvLyBmb3JtYXR0aW5nIG1ldGhvZCBmb3IgYW4gZXJyb3JcbiAgICAgICAgICAgIGZvcm1hdEVycm9yVG9vbHRpcDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8aSBjbGFzcz1cImljb24tYXR0ZW50aW9uXCI+PC9pPiAnICsgZXJyb3I7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGhlIGNsYXNzIHRoYXQgd2lsbCBiZSBwdXQgb24gdGhlIGVsZW1lbnQgdG8gbWFyayBpdCBmYWlsZWQgdmFsaWRhdGlvblxuICAgICAgICAgICAgaW5wdXRFcnJvckNsYXNzOiAnaW52YWxpZCcsXG4gICAgICAgICAgICAvLyB0aGUgY29udGFpbmVyIGNsYXNzIGZvciBlcnJvciBtZXNzYWdlcyBiZWxvdyBhbiBlbGVtZW50XG4gICAgICAgICAgICBjb250YWluZXJFcnJvckNsYXNzOiAnZm9ybS1lcnJvcicsXG4gICAgICAgICAgICAvLyBhZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGZldGNoXG4gICAgICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdGhlIGNvbnRhaW5lciBmb3IgdG9vbHRpcHNcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXI6IGZvcm0sXG4gICAgICAgICAgICAvLyBpZiB5b3UgaGF2ZSBhIGZpeGVkIGhlYWRlciwgZWl0aGVyIHNldCBhIG51bWJlciBvciBmdW5jdGlvbiBoZXJlXG4gICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnREaWZmOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gb3ZlcndyaXRlIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gYXBwbHkgc2V0dGluZ3MgZnJvbSBhdHRyaWJ1dGVzXG4gICAgICAgIFV0aWwuYXBwbHlPcHRpb25zRnJvbUVsZW1lbnQoZm9ybSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBzZXQgZm9ybSBjbGFzcyBhcyB3aWRnZXRcbiAgICAgICAgLy8gRm9ybXMgYXJlIHZlcnkgZGlmZmVyZW50IHRvIGNsYXNzaWNhbCB3aWRnZXRzLFxuICAgICAgICAvLyB3ZSB3aWxsIG5vdCB1c2Ugb3VyIGJhc2Ugd2lkZ2V0IGNsYXNzIGZvciB0aGlzIGJ1dCBqdXN0IHNlbGZcbiAgICAgICAgZm9ybS5oZldpZGdldEluc3RhbmNlID0gdGhpcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBMaXN0IG9mIFZhbGlkYXRvcnNcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSBGb3JtLmdsb2JhbFZhbGlkYXRvcnM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW90ZVZhbGlkYXRpb25GdW5jdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBzKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhpcyBmb3JtLCBlaXRoZXIgdmlhIGFqYXggb3IganVzdCBjbGFzc2ljYWwgKGRlZmF1bHQpXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IHRoaXNGb3JtXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1Byb21pc2V8Ym9vbGVhbn0gcmV0dXJucyBmYWxzZSBpZiBzdWJtaXQgaXMgY2FuY2xlZFxuICAgICAqL1xuICAgIF9zdWJtaXRGdW5jdGlvbih0aGlzRm9ybSwgZSkge1xuICAgICAgICB2YXIgc2hvdWxkVXNlQWpheCA9IHRoaXNGb3JtLmdldEF0dHJpYnV0ZShSRU1PVEUpLCBhamF4UG9zdFVybCA9XG4gICAgICAgICAgICAgICAgdGhpc0Zvcm0uZ2V0QXR0cmlidXRlKFJFTU9URV9BQ1RJT04pIHx8XG4gICAgICAgICAgICAgICAgdGhpc0Zvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZUpzb24gPSBDT05TVF9VU0VfSlNPTiA9PT0gc2hvdWxkVXNlQWpheCwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGV2ID0gRXZlbnQuZGlzcGF0Y2godGhpc0Zvcm0sIEVWRU5UX0ZPUk1fU1VCTUlUKS53aXRoT3JpZ2luYWwoZSkuZmlyZSgpO1xuXG4gICAgICAgIC8vIGFib3J0IGV4ZWN1dGlvbiBpcyBldmVudCB3YXMgcHJldmVudGVkXG4gICAgICAgIGlmIChldi5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRVc2VBamF4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBzdWJtaXRcbiAgICAgICAgICAgIHJldHVybiB0aGlzRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmV2ZW50IGZvcm0gZnJvbSBzdWJtaXQgbm9ybWFsbHlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGFkZCBpbmZvcm1hdGlvbiB0aGF0IHRoaXMgaXMgYW4gWE1MSHR0cFJlcXVlc3QgcmVxdWVzdCAodXNlZCBieSBzb21lIGZyYW1ld29ya3MpXG4gICAgICAgIGxldCBkZWZhdWx0SGVhZGVycyA9IHtcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldHVwIGRlZmF1bHQgaGVhZGVyc1xuICAgICAgICBpZiAodXNlSnNvbikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0SGVhZGVycywge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiB0aGlzLm9wdGlvbnMuYWpheEpzb25Db250ZW50VHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuZmV0Y2hPcHRpb25zLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5vcHRpb25zLmFqYXhTdWJtaXRUeXBlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHN1cHBvcnQgZWl0aGVyIEpTT04gcmVxdWVzdCBwYXlsb2FkIG9yIG5vcm1hbCBwYXlsb2FkIHN1Ym1pc3Npb25cbiAgICAgICAgdmFyIHNlcnZlckNhbGwgPSB1c2VKc29uID8gZmV0Y2goYWpheFBvc3RVcmwsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc2VyaWFsaXplKCkpXG4gICAgICAgIH0pKSA6IGZldGNoKGFqYXhQb3N0VXJsLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpc0Zvcm0pXG4gICAgICAgIH0pKTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaCh0aGlzRm9ybSwgRVZFTlRfRk9STV9BRlRFUl9BSkFYX1NVQk1JVCkud2l0aE9yaWdpbmFsKGUpLmZpcmUoKTtcblxuICAgICAgICByZXR1cm4gc2VydmVyQ2FsbC50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAoc2VsZi5fcmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uIHx8IEZvcm0uZ2xvYmFsUmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uKS5hcHBseShzZWxmLCBbcl0pO1xuXG4gICAgICAgICAgICBFdmVudC5kaXNwYXRjaCh0aGlzRm9ybSwgRVZFTlRfRk9STV9BSkFYX0NPTVBMRVRFRCkud2l0aE9yaWdpbmFsKGUpLndpdGhEZXRhaWwoe3Jlc3BvbnNlOiByfSkuZmlyZSgpO1xuICAgICAgICAgICAgLy8gYWx3YXlzIHJlbW92ZSBlcnJvciBjbGFzc1xuICAgICAgICAgICAgc2VsZi5fZm9ybVN0b3BMb2FkaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgYSBmb3JtIHRvIGEganNvbiBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9ycyA9IFtcbiAgICAgICAgICAgICdpbnB1dFtuYW1lXTpub3QoW3R5cGU9XCJyYWRpb1wiXSk6ZW5hYmxlZCcsXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWVdOmNoZWNrZWQnLFxuICAgICAgICAgICAgJ3NlbGVjdFtuYW1lXTplbmFibGVkJyxcbiAgICAgICAgICAgICd0ZXh0YXJlYVtuYW1lXTplbmFibGVkJ1xuICAgICAgICBdLCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMuam9pbignLCcpKSwgcmVzdWx0ID0ge307XG5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGV4aXN0cyA9IHJlc3VsdFtpbnB1dC5uYW1lXSwgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChleGlzdHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGV4aXN0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2lucHV0Lm5hbWVdID0gW3Jlc3VsdFtpbnB1dC5uYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaW5wdXQubmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBjaGFpbiBvZiB2YWxpZGF0aW9uIG9uIGdpdmVuIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxBcnJheXxOb2RlTGlzdH0gZmllbGRcbiAgICAgKiBAcGFyYW0gW2ZvY3VzXSBvcHRpb25hbCBmb2N1cyBmaXJzdCBlcnJvclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGhhbmRsZVZhbGlkYXRpb24oZmllbGQsIGZvY3VzKSB7XG4gICAgICAgIHZhciBmaWVsZHMgPSAoZmllbGQgaW5zdGFuY2VvZiBBcnJheSB8fCBmaWVsZCBpbnN0YW5jZW9mIE5vZGVMaXN0KSA/IGZpZWxkIDogW2ZpZWxkXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVZhbGlkYXRpb24oZmllbGRzLCBmb2N1cywgdHJ1ZSkudGhlbigoKHIpID0+IHtcbiAgICAgICAgICAgIGlmICghci5mb3VuZEFueUVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRvb2x0aXBzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sdGlwcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZXJyb3JzIG9uIGdpdmVuIG5vZGUgbGlzdFxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9IHRvVmFsaWRhdGVGaWVsZHNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvY3VzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzY29wZWQgaWYgdHJ1ZSwgd2lsbCBvbmx5IHZhbGlkYXRlIHRoZSBmaWVsZHMgYGludmFsaWRGaWVsZHNgXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlVmFsaWRhdGlvbih0b1ZhbGlkYXRlRmllbGRzLCBmb2N1cywgc2NvcGVkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFyciA9IEZvcm0uX2NyZWF0ZUFycmF5RnJvbUludmFsaWRGaWVsZExpc3QodG9WYWxpZGF0ZUZpZWxkcyksIGlzTG9jYWxJbnZhbGlkID0gYXJyLmxlbmd0aCA+IDA7XG4gICAgICAgIC8vIGZvY3VzIG11c3QgYXBwZWFyIGluIHRoZSBzYW1lIGZyYW1lIGZvciBpT1MgZGV2aWNlc1xuICAgICAgICBpZiAoaXNMb2NhbEludmFsaWQgJiYgZm9jdXMpIHtcbiAgICAgICAgICAgIHNlbGYuX2ZvY3VzRWxlbWVudChhcnJbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gc2NvcGVkID8gdGhpcy5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyh0b1ZhbGlkYXRlRmllbGRzKSA6XG4gICAgICAgICAgICBzZWxmLnZhbGlkYXRlQ3VzdG9tRmllbGRzKCk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0xvY2FsSW52YWxpZCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbWJpbmUgYnJvd3NlciBhbmQgY3VzdG9tIHZhbGlkYXRvcnNcbiAgICAgICAgICAgICAgICByLmZvdW5kQW55RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZ2V0IGEgdW5pcXVlIGZpZWxkIGxpc3Qgb2YgYWxsIGZpZWxkcyB0aGF0IG5lZWQgdG8gYmUgY2hlY2tlZCBhbmQgcmVuZGVyZWRcbiAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB3ZSBoYXZlIGR1cGxpY2F0ZXMgaW4gbm9uIHNjb3BlZCBtb2RlXG4gICAgICAgICAgICBsZXQgdGhpc1RvVmFsaWRhdGVGaWVsZHMgPSBzY29wZWQgPyB0b1ZhbGlkYXRlRmllbGRzIDpcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGFycikuY29uY2F0KHIuY2hlY2tlZEZpZWxkcyk7XG4gICAgICAgICAgICByLmNoZWNrZWRGaWVsZHMgPSB0aGlzVG9WYWxpZGF0ZUZpZWxkcztcbiAgICAgICAgICAgIGxldCBmb3VuZEludmFsaWRGaWVsZHMgPSBzZWxmLnByZXBhcmVFcnJvcnModGhpc1RvVmFsaWRhdGVGaWVsZHMsIGZhbHNlKSxcbiAgICAgICAgICAgICAgICBmaXJzdEludmFsaWRGaWVsZCA9IGZvdW5kSW52YWxpZEZpZWxkc1swXTtcbiAgICAgICAgICAgIGlmIChmaXJzdEludmFsaWRGaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmIChmb2N1cykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb2N1c0VsZW1lbnQoZmlyc3RJbnZhbGlkRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlbGVtZW50IGNvdWxkIG5vdCBiZSBmb2N1c2VkOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZmlyc3RJbnZhbGlkRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2hhbmRsZVRvb2x0aXBIaWRlQ2xpY2tBZnRlckNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcEhpZGVDbGlja0FmdGVyQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0FuZE9yQ3JlYXRlVG9vbHRpcChmaXJzdEludmFsaWRGaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge1ZhbGlkaXR5U3RhdGV9IHZhbGlkaXR5XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICAgIF9zZXR1cEVycm9yTWVzc2FnZXMoZmllbGQsIHZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVybiBGb3JtLmdsb2JhbEVycm9yTWVzc2FnZUhhbmRsZXIgP1xuICAgICAgICAgICAgRm9ybS5nbG9iYWxFcnJvck1lc3NhZ2VIYW5kbGVyLmFwcGx5KHRoaXMsIFtmaWVsZCwgdmFsaWRpdHldKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2xhc3MgbGFiZWxzIGZvciBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVMYWJlbHMoZmllbGRzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbHMgPSB0aGlzLmdldEZvcm0oKS5xdWVyeVNlbGVjdG9yQWxsKCdbZm9yPVwiJyArIGlkICsgJ1wiXScpLCBpbnZhbGlkID0gZmllbGRzW2lkXTtcbiAgICAgICAgICAgIGlmIChsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGFiZWxzSW5kZXggPSAwOyBsYWJlbHNJbmRleCA8IGxhYmVscy5sZW5ndGg7IGxhYmVsc0luZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsRWwgPSBsYWJlbHNbbGFiZWxzSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjYW4ndCB1c2UgdG9nZ2xlIGF0dHJpYnV0ZSwgbm90IHN1cHBvcnRlZCBpbiBJRVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRJbnZhbGlkKGxhYmVsRWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRWYWxpZChsYWJlbEVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYXJrRWxlbWVudEludmFsaWQoZWwpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKERBVEFfRUxFTUVOVF9JTlZBTElELCBcInRydWVcIik7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbWFya0VsZW1lbnRWYWxpZChlbCkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoREFUQV9FTEVNRU5UX0lOVkFMSUQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgTGlzdCBvZiBpbnZhbGlkIGVsZW1lbnRzICg6aW52YWxpZClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0SW52YWxpZEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuZ2V0Rm9ybSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6aW52YWxpZFwiKSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHJldHVybiAhKHIgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGhpc1BhcmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3JlbW92ZUVsZW1lbnRFcnJvcnModGhpc1BhcmVudCkge1xuICAgICAgICBsZXQgZXJyb3JzID0gdGhpc1BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMub3B0aW9ucy5jb250YWluZXJFcnJvckNsYXNzKSwgaW5wdXRzV2l0aEVycm9yQ2xhc3NlcyA9XG4gICAgICAgICAgICB0aGlzUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0RBVEFfRUxFTUVOVF9JTlZBTElEfV1gKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudEVycm9ySW5kZXggPSAwOyBlbGVtZW50RXJyb3JJbmRleCA8IGVycm9ycy5sZW5ndGg7IGVsZW1lbnRFcnJvckluZGV4KyspIHtcbiAgICAgICAgICAgIGVycm9yc1tlbGVtZW50RXJyb3JJbmRleF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlcnJvcnNbZWxlbWVudEVycm9ySW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbnB1dEVycm9ySW5kZXggPSAwOyBpbnB1dEVycm9ySW5kZXggPCBpbnB1dHNXaXRoRXJyb3JDbGFzc2VzLmxlbmd0aDsgaW5wdXRFcnJvckluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBlbCA9IGlucHV0c1dpdGhFcnJvckNsYXNzZXNbaW5wdXRFcnJvckluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtFbGVtZW50VmFsaWQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBjdXN0b20gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWxpZGF0b3IgYSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIGVpdGhlciBhIEZ1dHVyZSh0cnVlKSBvciBGdXR1cmUoZmFsc2UpXG4gICAgICogZXZlbiB3aGVuIHRoZSBmaWVsZCBoYXMgYmVlbiBpbnZhbGlkYXRlZCB3aXRoIGBzZXRDdXN0b21WYWxpZGl0eWAsIGJlY2F1c2Ugb2YgZGlmZmVyZW50IGJyb3dzZXIgYGJ1Z3NgXG4gICAgICogd2UgY2FuJ3QgcmVseSBvbiB0aGF0XG4gICAgICogQHJldHVybnMge0Zvcm19XG4gICAgICovXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgYXN5bmMgdmFsaWRhdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0aW9uUmVmXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9ydW5WYWxpZGF0aW9uKHZhbGlkYXRpb25SZWYsIGZpZWxkKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXSkge1xuICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmb3VuZCB2YWxpZGF0b3I6ICcgKyB2YWxpZGF0aW9uUmVmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbCA9IGZpZWxkLmNsYXNzTGlzdCwgZnV0dXJlID0gdGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXS5hcHBseSh0aGlzLCBbZmllbGQsIHRoaXMuZm9ybV0pO1xuICAgICAgICBjbC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgICAgIGZ1dHVyZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNsLnJlbW92ZShMT0FESU5HX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdXR1cmU7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSdW4gY3VzdG9tIHZhbGlkYXRpb25zIGZvciBlbGVtZW50cywgdmFsaWRhdGlvbnMgYXJlIGRvbmUgYXN5bmMgZG8gc3VwcG9ydCBYSFIgUmVxdWVzdHMgb3Igb3RoZXIgc3R1ZmZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl8Tm9kZUxpc3R9IGZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBjb250YWlucyBlaXRoZXIgdHJ1ZSBpZiB2YWxpZGF0aW9ucyBwYXNzZWQgb3IgZmFsc2UgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jdXN0b21WYWxpZGF0aW9uc0ZvckVsZW1lbnRzKGZpZWxkcykge1xuICAgICAgICB2YXIgZnV0dXJlcyA9IFtdLCBmaWVsZHNMZW5ndGggPSBmaWVsZHMubGVuZ3RoLCBjaGVja2VkRmllbGRzID0gW107XG4gICAgICAgIGZvciAodmFyIGlWYWwgPSAwOyBpVmFsIDwgZmllbGRzTGVuZ3RoOyBpVmFsKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tpVmFsXSwgdmFsaWRhdGlvblJlZiA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX1ZBTElEQVRPUiksIHZhbGlkaXR5ID0gZmllbGQudmFsaWRpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsaWRhdG9yc1t2YWxpZGF0aW9uUmVmXSkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSBsb2NhbCB2YWxpZGF0aW9uIGZpcnN0IGFuZCB0aGVuIGNvbnRpbnVlIHdpdGggY3VzdG9tIHZhbGlkYXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKEZvcm0uX3Nob3VsZE5vdFZhbGlkYXRlRmllbGQoZmllbGQpIHx8ICh2YWxpZGl0eSAmJiAhdmFsaWRpdHkuY3VzdG9tRXJyb3IgJiYgIXZhbGlkaXR5LnZhbGlkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hlY2tlZEZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBmdXR1cmVzLnB1c2godGhpcy5fcnVuVmFsaWRhdGlvbih2YWxpZGF0aW9uUmVmLCBmaWVsZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblJlZikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2RhdGEtdmFsaWRhdGUgd2FzIHNldCBidXQgbm8gdmFsaWRhdG9yIHdhcyBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZnV0dXJlcykudGhlbihmdW5jdGlvbiAoYWxsRnV0dXJlcykge1xuICAgICAgICAgICAgbGV0IGwgPSBhbGxGdXR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEZpZWxkczogY2hlY2tlZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBmb3VuZEFueUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIGZJID0gMDsgZkkgPCBsOyBmSSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGxGdXR1cmVzW2ZJXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm91bmRBbnlFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZXJyb3JzIGZvciB0aGlzIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7Rm9ybX1cbiAgICAgKi9cbiAgICByZW1vdmVFcnJvcnMoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUVsZW1lbnRFcnJvcnModGhpcy5mb3JtKTtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgaGFuZGxlIGVycm9ycyBmb3IgZ2l2ZW4gZmllbGRzXG4gICAgICogQHBhcmFtIHtBcnJheXxOb2RlTGlzdH0gZmllbGRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVBbGxFcnJvcnNcbiAgICAgKi9cbiAgICBwcmVwYXJlRXJyb3JzKGZpZWxkcywgcmVtb3ZlQWxsRXJyb3JzKSB7XG4gICAgICAgIGlmIChyZW1vdmVBbGxFcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhYmVsR3JvdXBzID0ge30sIGludmFsaWRGaWVsZHMgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBZGRpdGlvbmFsTGFiZWxzKGlzSW52YWxpZCwgdGhpc0xhYmVsR3JvdXAsIGZpZWxkKSB7XG4gICAgICAgICAgICBsZXQgYWRkaXRpb25hbExhYmVscyA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RBVEFfQ1VTVE9NX0xBQkVMKSB8fFxuICAgICAgICAgICAgICAgIGZpZWxkLmlkLCBncm91cCA9IHRoaXNMYWJlbEdyb3VwW2FkZGl0aW9uYWxMYWJlbHNdO1xuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZGRpdGlvbmFsbHkgaWYgZmllbGQgaXMgY3VycmVudGx5IG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgLy8gc28gdGhlIGxhYmVsIGlzIG5vdCBtYXJrZWQgYXMgZXJyb3IgaWYgbm8gZmllbGQgaXMgbWFya2VkIGFzIG9uZVxuICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGlzSW52YWxpZDtcbiAgICAgICAgICAgICAgICB0aGlzTGFiZWxHcm91cFthZGRpdGlvbmFsTGFiZWxzXSA9IGdyb3VwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugc2F2ZSBhbGwgdmFsaWRhdGlvbnMgaW4gYW4gZXh0cmEgcHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB2YWxpZGl0eSBkdWUgc29tZVxuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiBlcnJvcnMgaW4gb3RoZXIgYnJvd3NlcnMgdGhlbiBjaHJvbWVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9IGZpZWxkc1tpXSwgZXJyb3JUYXJnZXQgPSBGb3JtLl9maW5kRXJyb3JUYXJnZXQoZmllbGQpLCBwYXJlbnQgPSBlcnJvclRhcmdldC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZhbGlkaXR5ID0gZmllbGQudmFsaWRpdHksIGlzSW52YWxpZCA9IHZhbGlkaXR5ICYmICF2YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgIGlmIChGb3JtLl9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGQuZmxleEZvcm1zU2F2ZWRWYWxpZGl0eSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsaWRpdHkpKTtcbiAgICAgICAgICAgIGhhbmRsZUFkZGl0aW9uYWxMYWJlbHMoaXNJbnZhbGlkLCBsYWJlbEdyb3VwcywgZmllbGQpO1xuICAgICAgICAgICAgaWYgKGlzSW52YWxpZCkge1xuICAgICAgICAgICAgICAgIGlmICghcmVtb3ZlQWxsRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IGVycm9yczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRWxlbWVudEVycm9ycyhwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBjdXN0b20gZXJyb3IgbWVzc2FnZXM6XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dXBFcnJvck1lc3NhZ2VzKGZpZWxkLCB2YWxpZGl0eSk7XG4gICAgICAgICAgICAgICAgbGV0IG1zZyA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgLy8gbWFyayBmaWVsZHMgYXMgaW52YWxpZFxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtFbGVtZW50SW52YWxpZChlcnJvclRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya0VsZW1lbnRJbnZhbGlkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXBwZW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5jb250YWluZXJFcnJvckNsYXNzfVwiPiR7bXNnfTwvZGl2PmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGRzLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgICAgIGZpZWxkLmZsZXhGb3Jtc1NhdmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBtc2c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgaW52YWxpZCBmaWVsZHNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrRWxlbWVudFZhbGlkKGVycm9yVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrRWxlbWVudFZhbGlkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNsZWFudXBcbiAgICAgICAgICAgICAgICBkZWxldGUgZmllbGQuZmxleEZvcm1zU2F2ZWRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBlcnJvciBtYXJrdXBcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVFbGVtZW50RXJyb3JzKHBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc2V0IHRoZSBjdXN0b20gdmFsaWRpdHkgaGVyZSB0byBhbGxvdyBuYXRpdmUgdmFsaWRhdGlvbnMgd29yayBhZ2FpblxuICAgICAgICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHZhbGlkYXRlcyBhIHNpbmdsZSBmaWVsZCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBsaW5rZWQgZmllbGRzIHRvIGEgbGFiZWw6XG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgZmllbGQgPSBmaWVsZHNbMF07XG4gICAgICAgICAgICBsZXQgaWQgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoQVRUUl9EQVRBX0NVU1RPTV9MQUJFTCkgfHwgZmllbGQuaWQ7XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlua2VkRmllbGRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGb3JtKCkucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9EQVRBX0NVU1RPTV9MQUJFTH09XCIke2lkfVwiXSwgIyR7aWR9YCkpO1xuICAgICAgICAgICAgICAgIGxpbmtlZEZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uICh0aGlzRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkaXR5ID0gdGhpc0ZpZWxkLnZhbGlkaXR5LCBpc0ludmFsaWQgPSB2YWxpZGl0eSAmJiAhdmFsaWRpdHkudmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KHRoaXNGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZGl0aW9uYWxMYWJlbHMoaXNJbnZhbGlkLCBsYWJlbEdyb3VwcywgdGhpc0ZpZWxkKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUxhYmVscyhsYWJlbEdyb3Vwcyk7XG4gICAgICAgIHJldHVybiBpbnZhbGlkRmllbGRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhbGwgY3VzdG9tIGZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHZhbGlkYXRlQ3VzdG9tRmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhcbiAgICAgICAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdmFsaWRhdGVdXCIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZXN0cyBpZiBhIGZpZWxkIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBGb3JtLl9maW5kRXJyb3JUYXJnZXQoZmllbGQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuICAgICAgICAgICAgKHRhcmdldC5oYXNBdHRyaWJ1dGUoQVRUUl9WQUxJREFURV9WSVNJQklMSVRZKSAmJiAhVXRpbC5pc1Zpc2libGUodGFyZ2V0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhcnJheSBmcm9tIGEgbm9kZSBsaXN0IHdpdGggaW52YWxpZCBpdGVtc1xuICAgICAqIFRoaXMgTWV0aG9kIGV4cGljaXRseSBjaGVja3MgaWYgZmllbGQgc2hvdWxkIG5vdCBiZSB2YWxpZGF0ZWQgc28gaXQgY2FuIGJlIHVzZWQgdG8gZm91Y3MgYSBmaWVsZFxuICAgICAqIEBwYXJhbSBsaXN0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9jcmVhdGVBcnJheUZyb21JbnZhbGlkRmllbGRMaXN0KGxpc3QpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChuLnZhbGlkaXR5ICYmICFuLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFGb3JtLl9zaG91bGROb3RWYWxpZGF0ZUZpZWxkKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBmb3JtXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHJlbW90ZSB2YWxpZGF0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm5zIHtGb3JtfVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUmVtb3RlVmFsaWRhdGlvbihmdW5jKSB7XG4gICAgICAgIHRoaXMuX3JlbW90ZVZhbGlkYXRpb25GdW5jdGlvbiA9IGZ1bmM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0cyB0aGUgZXJyb3IgY29udGVudCBmb3IgdGhlIHRvb2x0aXBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Zvcm1hdEVycm9yVG9vbHRpcChlcnJvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm1hdEVycm9yVG9vbHRpcC5hcHBseSh0aGlzLCBbZXJyb3JdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmllcyB0byBmaW5kIGEgY3VzdG9tIGVycm9yIHRhcmdldCBvbiBnaXZlbiB0YXJnZXRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9maW5kRXJyb3JUYXJnZXQodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9FUlJPUl9UQVJHRVRfSUQpIHx8IHRhcmdldCxcbiAgICAgICAgICAgIGZvdW5kVGFyZ2V0ID0gZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGVsIDogZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcbiAgICAgICAgaWYgKCFmb3VuZFRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgJ0dpdmVuIGVycm9yIHRhcmdldCBkaWQgbm90IGV4c2l0czonICsgdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFRhcmdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdG9vbHRpcCBhdCBnaXZlbiBlbGVtZW50LCB3aWxsIG9ubHkgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGlmIG5vdCBjcmVhdGVkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlXVxuICAgICAqL1xuICAgIHNob3dBbmRPckNyZWF0ZVRvb2x0aXAodGFyZ2V0LCByZW1vdmUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMudG9vbHRpcHMgJiYgdGhpcy5vcHRpb25zLmNyZWF0ZVRvb2x0aXBzKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBzID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zLnRvb2x0aXBDb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzczogJ2Vycm9yLXRvb2x0aXAnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jcmVhdGVUb29sdGlwcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQuZmxleEZvcm1zU2F2ZWRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvclRhcmdldCA9IEZvcm0uX2ZpbmRFcnJvclRhcmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAoIXRhcmdldC5mbGV4Rm9ybXNTYXZlZFZhbGlkaXR5LnZhbGlkICYmIHNlbGYuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KGVycm9yVGFyZ2V0KSkge1xuICAgICAgICAgICAgc2VsZi50b29sdGlwcy5jcmVhdGVUb29sdGlwKGVycm9yVGFyZ2V0LFxuICAgICAgICAgICAgICAgIHNlbGYuX2Zvcm1hdEVycm9yVG9vbHRpcCh0YXJnZXQuZmxleEZvcm1zU2F2ZWRWYWxpZGF0aW9uTWVzc2FnZSksIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZWxlbWVudCBpcyBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaXNFbGVtZW50SW52YWxpZEVsZW1lbnQoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShEQVRBX0VMRU1FTlRfSU5WQUxJRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnZhbGlkIGV2ZW50IG9mIGEgZm9ybVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZXxib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NoZWNrSXNJbnZhbGlkKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaW52YWxpZEZpZWxkcyA9IHRoaXMuZ2V0Rm9ybSgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6aW52YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVZhbGlkYXRpb24oaW52YWxpZEZpZWxkcywgdHJ1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgcXVlcnkgZGVwZW5kZW50IGZpZWxkcyAoYnkgc2VsZWN0b3IpIHRoYXQgc2hvdWxkIGJlIHZhbGlkYXRlZCB3aXRoIGdpdmVuIGZpZWxkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHJldHVybnMge05vZGVMaXN0fFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldERlcGVuZGVudEZpZWxkcyhmaWVsZCkge1xuICAgICAgICBsZXQgZmllbGRTZWxlY3RvciA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RFUEVORFMpLCBiYXNlID0gW2ZpZWxkXTtcbiAgICAgICAgaWYgKGZpZWxkU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGJhc2UucHVzaC5hcHBseShiYXNlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGb3JtKCkucXVlcnlTZWxlY3RvckFsbChmaWVsZFNlbGVjdG9yKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3RhcmdldF1cbiAgICAgKi9cbiAgICBfaGFuZGxlVG9vbHRpcElubGluZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcHMucmVtb3ZlVG9vbHRpcCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdmFsaWRhdGlvbiBmb3IgYSBnaXZlbiBmb3JtLCByZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIC8vIFN1cHByZXNzIHRoZSBkZWZhdWx0IGJ1YmJsZXNcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLmdldEZvcm0oKSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgaW52YWxpZEV2ZW50ID0gJ2ludmFsaWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZXMgaWYgaXMgdmFsaWQgcmVhbHRpbWUgZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2hlY2tJc1ZhbGlkUmVhbHRpbWVFbGVtZW50KHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfRElTQUJMRV9SRUFMVElNRSkgJiYgIXRhcmdldC5oYXNBdHRyaWJ1dGUoQVRUUl9ESVNBQkxFX0lOTElORSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoaW52YWxpZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICBVdGlsLmFkZEV2ZW50T25jZShpbnZhbGlkRXZlbnQsIGZvcm0sIGZ1bmN0aW9uIGhhbmRsZUludmFsaWQoZSkge1xuICAgICAgICAgICAgc2VsZi5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZWxmLl9jaGVja0lzSW52YWxpZChlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRWYWxpZGF0aW9uRnV0dXJlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuYWRkRXZlbnRPbmNlKGludmFsaWRFdmVudCwgZm9ybSwgaGFuZGxlSW52YWxpZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghci5mb3VuZEFueUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZm9ybSwgJ3Jlc2V0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnJvcnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGltZW91dCBmb3Iga2V5czpcbiAgICAgICAgdmFyIFRJTUVPVVRfS0VZRE9XTiwgS0VZRE9XTl9SVU5OSU5HID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXRzIGtleWRvd24gZXZlbnRzXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyS2V5RG93blRpbWVvdXQoKSB7XG4gICAgICAgICAgICBLRVlET1dOX1JVTk5JTkcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChUSU1FT1VUX0tFWURPV04pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dXAgY3VzdG9tIHJlYWx0aW1lIGV2ZW50IGlmIGdpdmVuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMucmVhbHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihmb3JtLCBDT05TVF9SRUFMVElNRV9FVkVOVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fZm9ybUlzTG9hZGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChUSU1FT1VUX0tFWURPV04pO1xuICAgICAgICAgICAgICAgIGlmIChLRVlET1dOX1JVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBUSU1FT1VUX0tFWURPV04gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzU3RpbGxUYXJnZXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfY2hlY2tJc1ZhbGlkUmVhbHRpbWVFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdGlsbFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcElubGluZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEtFWURPV05fUlVOTklORyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRGaWVsZHMgPSBzZWxmLl9nZXREZXBlbmRlbnRGaWVsZHModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhkZXBlbmRlbnRGaWVsZHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmVwYXJlRXJyb3JzKGRlcGVuZGVudEZpZWxkcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RpbGxUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnV0dXJlIG11c3QgYmUgcmVzb2x2ZWQgYmVmb3JlIGFub3RoZXIgZXZlbnQgY2FuIGJlIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEtFWURPV05fUlVOTklORyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBzZWxmLm9wdGlvbnMucmVhbHRpbWVUaW1lb3V0KTtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlcyBpZiB0YXJnZXQgaXMgYSB2YWxpZCBpbnB1dCBmaWVsZCB0byBjaGVjayBibHVyIGFuZCBmb2N1cyBldmVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2NoZWNrSXNWYWxpZEJsdXJGb2N1c0VsZW1lbnQodGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgYXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIChhdHRyICE9PSBcInJhZGlvXCIgJiYgYXR0ciAhPT0gXCJjaGVja2JveFwiICYmIGF0dHIgIT09IFwic3VibWl0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlcyBpZiBpcyB2YWxpZCBpbmxpbmUtY2hlY2sgZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2hlY2tJc1ZhbGlkSW5saW5lQ2hlY2tFbGVtZW50KHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfRElTQUJMRV9JTkxJTkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sICdibHVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBoaWRlIHRvb2x0aXAgYWZ0ZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmZsZXhjc3NLZWVwVG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVUb29sdGlwSW5saW5lKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBlLnRhcmdldC5mbGV4Y3NzS2VlcFRvb2x0aXBzO1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAvLyBoYW5kbGUgZm9jdXMgb24gaW5wdXQgZWxlbWVudHNcbiAgICAgICAgLy8gd2lsbCBzaG93IGFuIGVycm9yIGlmIGZpZWxkIGlzIGludmFsaWRcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sIFwiZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9mb3JtSXNMb2FkaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkbyBub3QgdHJhY2sgZXJyb3JzIGZvciBjaGVja2JveCBhbmQgcmFkaW9zIG9uIGZvY3VzOlxuICAgICAgICAgICAgaWYgKCFfY2hlY2tJc1ZhbGlkQmx1ckZvY3VzRWxlbWVudChlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGRlbGF5IHRoaXMgYSBsaXR0bGUsIGJlY2F1c2UgRmlyZWZveCBhbmQgU2FmYXJpIGRvIG5vdCBzaG93IGEgdG9vbHRpcCBhZnRlciBpdFxuICAgICAgICAgICAgLy8ganVzdCBoYXZlIGJlZW4gaGlkZGVuIChvbiBibHVyKS4gTWF5YmUgZml4IHRoaXMgd2l0aCBhIHF1ZXVlIGxhdGVyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgfSwgRk9DVVNfVE9PTFRJUF9ERUxBWSk7XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuaW5saW5lVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGNoYW5nZSBmb3IgY2hlY2tib3gsIHJhZGlvcyBhbmQgc2VsZWN0c1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZvcm0sIFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX2Zvcm1Jc0xvYWRpbmcoKSB8fCAhX2NoZWNrSXNWYWxpZElubGluZUNoZWNrRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJLZXlEb3duVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0cyA9IG5hbWUgPyBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykgOiBbdGFyZ2V0XTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHN1cHBvcnQgZGVwZW5kZW50IGZpZWxkcyBmb3IgYSBzaW5nbGUgd2lkZ2V0cyByaWdodCBub3dcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMgPSBzZWxmLl9nZXREZXBlbmRlbnRGaWVsZHModGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5fY3VzdG9tVmFsaWRhdGlvbnNGb3JFbGVtZW50cyhpbnB1dHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXBhcmVFcnJvcnMoaW5wdXRzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5mbGV4Y3NzS2VlcFRvb2x0aXBzID0gc2VsZi5zaG93QW5kT3JDcmVhdGVUb29sdGlwKHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZmxleGNzc0tlZXBUb29sdGlwcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcEhpZGVDbGlja0FmdGVyQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGlmIGZvcm0gaXMgaW52YWxpZFxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZm9ybSwgXCJzdWJtaXRcIiwgZnVuY3Rpb24gbGlzdGVuZXIoZSkge1xuICAgICAgICAgICAgc2VsZi5fc3VibWl0TGlzdGVuZXIoZSwgbGlzdGVuZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaEFuZEZpcmUoZm9ybSwgRVZFTlRfRk9STV9SRUFEWSk7XG4gICAgfVxuXG4gICAgLyogTG9hZGluZyBzdGF0ZXMsIHVuZm9ydHVuYXRlbHkgd2UgY2FuJ3QgY2hlY2sgaWYgYSBwcm9taXNlIGlzIHBlbmRpbmcgOi8qL1xuICAgIC8qIFRPRE86IE1heWJlIHdyYXAgcHJvbWlzZSB0byBleHRlbmQgdGhpcyBmdW5jdGlvbmFsaXR5ICovXG5cbiAgICBfZm9ybUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNsYXNzTGlzdC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgfVxuXG4gICAgX2Zvcm1TdG9wTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5nZXRGb3JtKCkuY2xhc3NMaXN0LnJlbW92ZShMT0FESU5HX0NMQVNTKTtcbiAgICB9XG5cbiAgICBfZm9ybUlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybSgpLmNsYXNzTGlzdC5jb250YWlucyhMT0FESU5HX0NMQVNTKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGRlZmluZXMgdGhlIGxvZ2ljIGFmdGVyIGEgY2hhbmdlIGV2ZW50IHdoZW4gYSB0b29sdGlwIGlzIHNob3duXG4gICAgLy8gYmVjYXVzZSB3ZSBjYWxsIHRoaXMgbWV0aG9kIGluc2lkZSB0aGUgY2hhbmdlIGV2ZW50LCB0aGUgY2xpY2sgd291bGQgYmUgaW1tZWRpdGFsbHkgZXhlY3V0ZWQgd2l0aCB0aGUgY2hhbmdlXG4gICAgLy8gZXZlbnQgd2hlbiBub3QgdXNpbmcgc2V0VGltZW91dCgpLiBUaGVyZSBtaWdodCBiZSBhbm90aGVyIHNvbHV0aW9uIGZvciB0aGlzLi4uXG4gICAgX2hhbmRsZVRvb2x0aXBIaWRlQ2xpY2tBZnRlckNoYW5nZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlVG9vbHRpcHMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFV0aWwuYWRkRXZlbnRPbmNlKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIGdsb2JhbC5kb2N1bWVudC5ib2R5LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuX2lzRWxlbWVudEludmFsaWRFbGVtZW50KHQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlVG9vbHRpcElubGluZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBDTElDS19UT09MVElQX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb2N1c0VsZW1lbnQoZWwpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgVXRpbC5zY3JvbGxUb0VsZW1lbnQoZWwsIHRoaXMub3B0aW9ucy5zY3JvbGxUb0VsZW1lbnREaWZmKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciB0aGF0IGlzIGV4ZWN1dGVkIG9uIGZvcm0gc3VibWl0XG4gICAgICogQHBhcmFtIGVcbiAgICAgKiBAcGFyYW0gc3VibWl0TGlzdGVuZXJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zdWJtaXRMaXN0ZW5lcihlLCBzdWJtaXRMaXN0ZW5lcikge1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldEZvcm0oKSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgc3VibWl0RXZlbnQgPSAnc3VibWl0JztcblxuICAgICAgICBpZiAodGhpcy5fZm9ybUlzTG9hZGluZygpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZm9ybUxvYWRpbmcoKTtcbiAgICAgICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKHN1Ym1pdEV2ZW50LCBzdWJtaXRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3JzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gcmVzZXQ6XG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEV2ZW50LCBzdWJtaXRMaXN0ZW5lcik7XG4gICAgICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGZvcm0gaXMgdmFsaWQgYnV0IHRoZSBjdXN0b20gdmFsaWRhdGlvbnMgbmVlZCB0byBiZSBjaGVja2VkIGFnYWluOlxuICAgICAgICAgICAgc2VsZi5jdXJyZW50VmFsaWRhdGlvbkZ1dHVyZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBzZWxmLnZhbGlkYXRlQ3VzdG9tRmllbGRzKCk7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbi50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgY3VzdG9tIHZhbGlkYXRvcnMgbWF5IG1hcmsgbXVsdGlwbGUgZmllbGRzIGFzIGludmFsaWQsIHdlIGdldCBhbGwgb2YgdGhlbSBpbiB0aGUgZm9ybVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0gc2VsZi5fZ2V0SW52YWxpZEVsZW1lbnRzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBzZWxmLnByZXBhcmVFcnJvcnMoZmllbGRzLCBmYWxzZSksIGZpcnN0RXJyb3IgPSBlcnJvcnNbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9mb2N1c0VsZW1lbnQoZmlyc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dBbmRPckNyZWF0ZVRvb2x0aXAoZmlyc3RFcnJvciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50VmFsaWRhdGlvbkZ1dHVyZS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyLmZvdW5kQW55RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdG8gc2VydmVyOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVTdWJtaXQoZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZm9ybVN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLl9mb3JtU3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihzdWJtaXRFdmVudCwgc3VibWl0TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHN1Ym1pdHRpbmcsIG9wdGlvbmFsbHkgYWxsb3dzIHRvIHN0b3Agc3VibWl0dGluZ1xuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0RnVuY3Rpb24odGhpcy5mb3JtLCBlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGdsb2JhbCBldmVudCBIYW5kbGVyXG4gICAgICogQHBhcmFtIGVycm9yRnVuY1xuICAgICAqL1xuICAgIHN0YXRpYyByZWdpc3RlckVycm9yTWVzc2FnZUhhbmRsZXIoZXJyb3JGdW5jKSB7XG4gICAgICAgIEZvcm0uZ2xvYmFsRXJyb3JNZXNzYWdlSGFuZGxlciA9IGVycm9yRnVuYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGZvcm1zIGZvciBhIHNwZWNpZmljIHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2FycmF5LjxGb3JtPn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZm9ybXMgPSBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBpbnN0YW5jZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gobmV3IEZvcm0oZm9ybXNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZ2xvYmFsIHZhbGlkYXRvciB0aGF0IGlzIHVzYWJsZSBvbiBhbGwgZm9ybSBpbnN0YW5jZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbGlkYXRvclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmVnaXN0ZXJWYWxpZGF0b3IobmFtZSwgdmFsaWRhdG9yKSB7XG4gICAgICAgIEZvcm0uZ2xvYmFsVmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvcjtcbiAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgZ2xvYmFsIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBmb3JtIHNob3VsZCB2YWxpZGF0ZSB0aGUgcmVzcG9uc2Ugb2YgYSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybnMge0Zvcm19XG4gICAgICovXG4gICAgc3RhdGljIHJlZ2lzdGVyR2xvYmFsUmVtb3RlVmFsaWRhdGlvbkZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgICAgRm9ybS5nbG9iYWxSZW1vdGVWYWxpZGF0aW9uRnVuY3Rpb24gPSBmdW5jO1xuICAgICAgICByZXR1cm4gRm9ybTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBHbG9iYWwgdmFsaWRhdG9yc1xuICogQHR5cGUge0FycmF5fVxuICovXG5Gb3JtLmdsb2JhbFZhbGlkYXRvcnMgPSBbXTtcblxuLyoqXG4gKiBHbG9iYWwgUmVtb3RlIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAqL1xuRm9ybS5nbG9iYWxSZW1vdGVWYWxpZGF0aW9uRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgY3VzdG9tIGVycm9yIG1lc3NhZ2VzIGV4dHJhY3RzIGN1c3RvbSBtZXNzYWdlIGJ5IGRlZmF1bHRcbiAqL1xuRm9ybS5nbG9iYWxFcnJvck1lc3NhZ2VIYW5kbGVyID0gKGZpZWxkLCB2YWxpZGl0eSkgPT4ge1xuICAgIGlmICghdmFsaWRpdHkuY3VzdG9tRXJyb3IpIHtcbiAgICAgICAgbGV0IGN1c3RvbU1zZyA9IGZpZWxkLmdldEF0dHJpYnV0ZShBVFRSX0RBVEFfQ1VTVE9NX01FU1NBR0UpO1xuICAgICAgICBpZiAoY3VzdG9tTXNnKSB7XG4gICAgICAgICAgICBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eShjdXN0b21Nc2cpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(10)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(13);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(14);
	
	__webpack_require__(18)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(15)
	  , defined = __webpack_require__(17);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(16);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(19)
	    , fn   = (__webpack_require__(21).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(22)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
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
/* 20 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(24)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(26)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = __webpack_require__(21).Object.setPrototypeOf;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(19);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(29).set});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(12).getDesc
	  , isObject = __webpack_require__(30)
	  , anObject = __webpack_require__(31);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(32)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(35)["default"];
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(58);
	__webpack_require__(62);
	module.exports = __webpack_require__(21).Promise;

/***/ },
/* 40 */
/***/ function(module, exports) {



/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(42)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(44)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(43)
	  , defined   = __webpack_require__(17);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(45)
	  , $def            = __webpack_require__(19)
	  , $redef          = __webpack_require__(46)
	  , hide            = __webpack_require__(47)
	  , has             = __webpack_require__(50)
	  , SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , Iterators       = __webpack_require__(54)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(55)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(12).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(56)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(57), NAME, methods);
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(12)
	  , createDesc = __webpack_require__(48);
	module.exports = __webpack_require__(49) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(22)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(52)('wks')
	  , Symbol = __webpack_require__(20).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(53))('Symbol.' + name));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(47)(IteratorPrototype, __webpack_require__(51)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(48)(1,next)});
	  __webpack_require__(56)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(50)
	  , hide = __webpack_require__(47)
	  , TAG  = __webpack_require__(51)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var Iterators = __webpack_require__(54);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(60)
	  , step       = __webpack_require__(61)
	  , Iterators  = __webpack_require__(54)
	  , toIObject  = __webpack_require__(14);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(44)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(12)
	  , LIBRARY    = __webpack_require__(45)
	  , global     = __webpack_require__(20)
	  , ctx        = __webpack_require__(32)
	  , classof    = __webpack_require__(63)
	  , $def       = __webpack_require__(19)
	  , isObject   = __webpack_require__(30)
	  , anObject   = __webpack_require__(31)
	  , aFunction  = __webpack_require__(33)
	  , strictNew  = __webpack_require__(64)
	  , forOf      = __webpack_require__(65)
	  , setProto   = __webpack_require__(29).set
	  , same       = __webpack_require__(70)
	  , species    = __webpack_require__(71)
	  , SPECIES    = __webpack_require__(51)('species')
	  , RECORD     = __webpack_require__(53)('record')
	  , asap       = __webpack_require__(72)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(49)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      asap(function(){
	        if(isUnhandled(record.p)){
	          if(isNode){
	            process.emit('unhandledRejection', value, record.p);
	          } else if(global.console && console.error){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	        record.a = undefined;
	      });
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(77)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = aFunction(res);
	        react.rej = aFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(56)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(21)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(78)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(16)
	  , TAG = __webpack_require__(51)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(32)
	  , call        = __webpack_require__(66)
	  , isArrayIter = __webpack_require__(67)
	  , anObject    = __webpack_require__(31)
	  , toLength    = __webpack_require__(68)
	  , getIterFn   = __webpack_require__(69);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(31);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(51)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(43)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(63)
	  , ITERATOR  = __webpack_require__(51)('iterator')
	  , Iterators = __webpack_require__(54);
	module.exports = __webpack_require__(21).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(12)
	  , SPECIES = __webpack_require__(51)('species');
	module.exports = function(C){
	  if(__webpack_require__(49) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , macrotask = __webpack_require__(73).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , head, last, notify;
	
	function flush(){
	  while(head){
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    head = head.next;
	  } last = undefined;
	}
	
	// Node.js
	if(__webpack_require__(16)(process) == 'process'){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(32)
	  , invoke             = __webpack_require__(74)
	  , html               = __webpack_require__(75)
	  , cel                = __webpack_require__(76)
	  , global             = __webpack_require__(20)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(16)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScript){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "module.exports = require('./$.global').document && document.documentElement;";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(46);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(51)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(19);
	$def($def.S, 'Object', {assign: __webpack_require__(82)});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var toObject = __webpack_require__(83)
	  , IObject  = __webpack_require__(15)
	  , enumKeys = __webpack_require__(84);
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = IObject(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(12);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	__webpack_require__(87);
	module.exports = __webpack_require__(21).Array.from;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(32)
	  , $def        = __webpack_require__(19)
	  , toObject    = __webpack_require__(83)
	  , call        = __webpack_require__(66)
	  , isArrayIter = __webpack_require__(67)
	  , toLength    = __webpack_require__(68)
	  , getIterFn   = __webpack_require__(69);
	$def($def.S + $def.F * !__webpack_require__(78)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      for(result = new C(length = toLength(O.length)); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(21).Object.keys;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(83);
	
	__webpack_require__(18)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyNames = __webpack_require__(92)["default"];
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(10)["default"];
	
	var _Object$defineProperty = __webpack_require__(35)["default"];
	
	exports["default"] = function (obj, defaults) {
	  var keys = _Object$getOwnPropertyNames(defaults);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	
	    var value = _Object$getOwnPropertyDescriptor(defaults, key);
	
	    if (value && value.configurable && obj[key] === undefined) {
	      _Object$defineProperty(obj, key, value);
	    }
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(12);
	__webpack_require__(94);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(18)('getOwnPropertyNames', function(){
	  return __webpack_require__(95).get;
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString  = {}.toString
	  , toIObject = __webpack_require__(14)
	  , getNames  = __webpack_require__(12).getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, defaults) {
	  var newObj = defaults({}, obj);
	  delete newObj["default"];
	  return newObj;
	};
	
	exports.__esModule = true;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Tooltip
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	var _get = __webpack_require__(9)['default'];
	
	var _inherits = __webpack_require__(23)['default'];
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _DestroyableWidget2 = __webpack_require__(99);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	/**
	 * @type {string}
	 */
	var CLASS_NAMES_TOOLTIP = 'tooltip-container';
	/**
	 * @type {string}
	 */
	var CLASS_NAMES_OPEN = 'open';
	
	/**
	 * @type {string}
	 */
	var ATTR_DATA_CLASSNAME = 'data-class';
	
	/**
	 * @type {HTMLDocument}
	 */
	var doc = global.document;
	
	/**
	 * Simple Tooltip
	 */
	
	var Tooltip = (function (_DestroyableWidget) {
	    _inherits(Tooltip, _DestroyableWidget);
	
	    /**
	     * Creates a Tooltip
	     * @param {HTMLElement|String} DelegateContainer
	     * @param {Object} [options]
	     */
	
	    function Tooltip(DelegateContainer, options) {
	        _classCallCheck(this, Tooltip);
	
	        _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this);
	        /**
	         * The Container where possible events are captured
	         */
	        this.container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        if (!this.container) {
	            throw 'Could not create Tooltip, DelegateContainer not found';
	        }
	
	        /**
	         * The Container where tooltips are stored for this instance
	         * @type {HTMLElement}
	         */
	        this.tooltipContainer = null;
	
	        /**
	         * Default Options
	         */
	        this.options = {
	            containerClass: '',
	            selectorAttribute: 'data-tooltip'
	        };
	
	        _Object$assign(this.options, options || {});
	    }
	
	    /**
	     * Creates and shows a tooltip
	     * @param {HTMLElement} target where is this tooltip positioned
	     * @param {String} text text content in tooltip, will be NOT escaped
	     * @param {Boolean} [removeTitle] removes title element if given
	     */
	
	    _createClass(Tooltip, [{
	        key: 'createTooltip',
	        value: function createTooltip(target, text, removeTitle) {
	            // abort if text is empty
	            if (!text || text && text.trim() === '') {
	                return;
	            }
	            var tooltipContainer = this.tooltipContainer;
	
	            if (!tooltipContainer) {
	                tooltipContainer = doc.createElement('div');
	                this.container.appendChild(tooltipContainer);
	                this.tooltipContainer = tooltipContainer;
	            }
	            this._restoreClassNames(tooltipContainer, target);
	
	            tooltipContainer.style.left = 'auto';
	            tooltipContainer.style.top = 'auto';
	            tooltipContainer.innerHTML = text;
	            tooltipContainer.flexTooltipCurrentTarget = target;
	            if (removeTitle) {
	                target.oldTitle = text;
	                target.removeAttribute('title');
	            }
	
	            _utilUtil2['default'].setupPositionNearby(target, tooltipContainer, this.container, true, true);
	
	            tooltipContainer.classList.add(CLASS_NAMES_OPEN);
	        }
	    }, {
	        key: '_restoreClassNames',
	        value: function _restoreClassNames(container, target) {
	            // allow additional classname per tooltip on target element
	            var classNames = [CLASS_NAMES_TOOLTIP, this.options.containerClass],
	                maybeTargetClass = target.getAttribute(ATTR_DATA_CLASSNAME);
	            if (maybeTargetClass) {
	                classNames.push(maybeTargetClass);
	            }
	            container.className = classNames.join(" ");
	            return this;
	        }
	
	        /**
	         * @returns {HTMLElement|null}
	         */
	    }, {
	        key: 'getCurrentTarget',
	        value: function getCurrentTarget() {
	            return this.tooltipContainer ? this.tooltipContainer.flexTooltipCurrentTarget : null;
	        }
	
	        /**
	         * Destroys this Widget
	         * @returns {boolean}
	         */
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            _get(Object.getPrototypeOf(Tooltip.prototype), 'destroy', this).call(this);
	
	            if (this.tooltipContainer) {
	                this.tooltipContainer.parentNode.removeChild(this.tooltipContainer);
	                return true;
	            }
	            return false;
	        }
	
	        /**
	         * Removes a Tooltip on given target
	         * @param {HTMLElement} [target], if not given will remove current open tooltip on this instance
	         */
	    }, {
	        key: 'removeTooltip',
	        value: function removeTooltip(target) {
	            if (!target && this.tooltipContainer) {
	                target = this.tooltipContainer.flexTooltipCurrentTarget;
	            }
	            if (this.tooltipContainer) {
	                if (this.tooltipContainer.flexTooltipCurrentTarget !== target) {
	                    return;
	                }
	                this.tooltipContainer.classList.remove(CLASS_NAMES_OPEN);
	                delete this.tooltipContainer.flexTooltipCurrentTarget;
	            }
	            if (target && target.oldTitle) {
	                target.setAttribute('title', target.oldTitle);
	            }
	        }
	
	        /**
	         * Initilizes mouse events on container element
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents() {
	            var self = this;
	            this.addEventListener(this.container, 'mouseover', function (e) {
	                if (e.target.hasAttribute(self.options.selectorAttribute)) {
	                    self.createTooltip(e.target, e.target.getAttribute('title'), true);
	                }
	            });
	
	            this.addEventListener(this.container, 'mouseout', function (e) {
	                if (e.target.hasAttribute(self.options.selectorAttribute)) {
	                    self.removeTooltip(e.target);
	                }
	            });
	            return this;
	        }
	    }]);
	
	    return Tooltip;
	})(_DestroyableWidget3['default']);
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUVJLFdBQVc7Ozs7a0NBQ0UsbUJBQW1COzs7Ozs7O0FBS2pELElBQU0sbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7Ozs7QUFJaEQsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7Ozs7O0FBS2hDLElBQU0sbUJBQW1CLEdBQUcsWUFBWSxDQUFDOzs7OztBQUt6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUFNdEIsT0FBTztjQUFQLE9BQU87Ozs7Ozs7O0FBT0UsYUFQVCxPQUFPLENBT0csaUJBQWlCLEVBQUUsT0FBTyxFQUFFOzhCQVB0QyxPQUFPOztBQVFMLG1DQVJGLE9BQU8sNkNBUUc7Ozs7QUFJUixZQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixZQUFZLFdBQVcsR0FDckQsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUU5RCxZQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixrQkFBTSx1REFBdUQsQ0FBQztTQUNqRTs7Ozs7O0FBTUQsWUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzs7Ozs7QUFLN0IsWUFBSSxDQUFDLE9BQU8sR0FBRztBQUNYLDBCQUFjLEVBQUUsRUFBRTtBQUNsQiw2QkFBaUIsRUFBRSxjQUFjO1NBQ3BDLENBQUM7O0FBRUYsdUJBQWMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7S0FDOUM7Ozs7Ozs7OztpQkFs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dUJBQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO2FBQ3pEO0FBQ0QsZ0JBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDM0Isc0JBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNKOzs7Ozs7O2VBS2EsMEJBQUc7QUFDYixnQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDNUQsb0JBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0FBQ3ZELHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3RFO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDM0Qsb0JBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0FBQ3ZELHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7YUFDSixDQUFDLENBQUM7QUFDSCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7O1dBNUlDLE9BQU87OztxQkFBUCxPQUFPIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLlRvb2x0aXBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcbmltcG9ydCBEZXN0cm95YWJsZVdpZGdldCBmcm9tICdEZXN0cm95YWJsZVdpZGdldCc7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ0xBU1NfTkFNRVNfVE9PTFRJUCA9ICd0b29sdGlwLWNvbnRhaW5lcic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IENMQVNTX05BTUVTX09QRU4gPSAnb3Blbic7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9EQVRBX0NMQVNTTkFNRSA9ICdkYXRhLWNsYXNzJztcblxuLyoqXG4gKiBAdHlwZSB7SFRNTERvY3VtZW50fVxuICovXG5jb25zdCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbi8qKlxuICogU2ltcGxlIFRvb2x0aXBcbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBEZXN0cm95YWJsZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgVG9vbHRpcFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U3RyaW5nfSBEZWxlZ2F0ZUNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihEZWxlZ2F0ZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENvbnRhaW5lciB3aGVyZSBwb3NzaWJsZSBldmVudHMgYXJlIGNhcHR1cmVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IERlbGVnYXRlQ29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgP1xuICAgICAgICAgICAgRGVsZWdhdGVDb250YWluZXIgOiBkb2MuZ2V0RWxlbWVudEJ5SWQoRGVsZWdhdGVDb250YWluZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93ICdDb3VsZCBub3QgY3JlYXRlIFRvb2x0aXAsIERlbGVnYXRlQ29udGFpbmVyIG5vdCBmb3VuZCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENvbnRhaW5lciB3aGVyZSB0b29sdGlwcyBhcmUgc3RvcmVkIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgT3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M6ICcnLFxuICAgICAgICAgICAgc2VsZWN0b3JBdHRyaWJ1dGU6ICdkYXRhLXRvb2x0aXAnXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHNob3dzIGEgdG9vbHRpcFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCB3aGVyZSBpcyB0aGlzIHRvb2x0aXAgcG9zaXRpb25lZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IHRleHQgY29udGVudCBpbiB0b29sdGlwLCB3aWxsIGJlIE5PVCBlc2NhcGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlVGl0bGVdIHJlbW92ZXMgdGl0bGUgZWxlbWVudCBpZiBnaXZlblxuICAgICAqL1xuICAgIGNyZWF0ZVRvb2x0aXAodGFyZ2V0LCB0ZXh0LCByZW1vdmVUaXRsZSkge1xuICAgICAgICAvLyBhYm9ydCBpZiB0ZXh0IGlzIGVtcHR5XG4gICAgICAgIGlmICghdGV4dCB8fCB0ZXh0ICYmIHRleHQudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b29sdGlwQ29udGFpbmVyID0gdGhpcy50b29sdGlwQ29udGFpbmVyO1xuXG4gICAgICAgIGlmICghdG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyID0gdG9vbHRpcENvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXN0b3JlQ2xhc3NOYW1lcyh0b29sdGlwQ29udGFpbmVyLCB0YXJnZXQpO1xuXG4gICAgICAgIHRvb2x0aXBDb250YWluZXIuc3R5bGUubGVmdCA9ICdhdXRvJztcbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICAgIHRvb2x0aXBDb250YWluZXIuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChyZW1vdmVUaXRsZSkge1xuICAgICAgICAgICAgdGFyZ2V0Lm9sZFRpdGxlID0gdGV4dDtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBVdGlsLnNldHVwUG9zaXRpb25OZWFyYnkodGFyZ2V0LCB0b29sdGlwQ29udGFpbmVyLCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgdG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVTX09QRU4pO1xuXG4gICAgfVxuXG4gICAgX3Jlc3RvcmVDbGFzc05hbWVzKGNvbnRhaW5lciwgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGFsbG93IGFkZGl0aW9uYWwgY2xhc3NuYW1lIHBlciB0b29sdGlwIG9uIHRhcmdldCBlbGVtZW50XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbQ0xBU1NfTkFNRVNfVE9PTFRJUCwgdGhpcy5vcHRpb25zLmNvbnRhaW5lckNsYXNzXSxcbiAgICAgICAgICAgIG1heWJlVGFyZ2V0Q2xhc3MgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFUVFJfREFUQV9DTEFTU05BTUUpO1xuICAgICAgICBpZiAobWF5YmVUYXJnZXRDbGFzcykge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKG1heWJlVGFyZ2V0Q2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sdGlwQ29udGFpbmVyID8gdGhpcy50b29sdGlwQ29udGFpbmVyLmZsZXhUb29sdGlwQ3VycmVudFRhcmdldCA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhpcyBXaWRnZXRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50b29sdGlwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgVG9vbHRpcCBvbiBnaXZlbiB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbdGFyZ2V0XSwgaWYgbm90IGdpdmVuIHdpbGwgcmVtb3ZlIGN1cnJlbnQgb3BlbiB0b29sdGlwIG9uIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmVUb29sdGlwKHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldCAmJiB0aGlzLnRvb2x0aXBDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVTX09QRU4pO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudG9vbHRpcENvbnRhaW5lci5mbGV4VG9vbHRpcEN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQub2xkVGl0bGUpIHtcbiAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGFyZ2V0Lm9sZFRpdGxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpbGl6ZXMgbW91c2UgZXZlbnRzIG9uIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250YWluZXIsICdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShzZWxmLm9wdGlvbnMuc2VsZWN0b3JBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jcmVhdGVUb29sdGlwKGUudGFyZ2V0LCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jb250YWluZXIsICdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKHNlbGYub3B0aW9ucy5zZWxlY3RvckF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)["default"];
	
	var _classCallCheck = __webpack_require__(37)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PFX = ["webkit", "moz", "MS", "o", ""];
	
	var COL_LEFT_CLASS = 'is-collision-left';
	
	var COL_RIGHT_CLASS = 'is-collision-right';
	
	var COL_BOTTOM_CLASS = 'is-collision-bottom';
	
	/**
	 * Provides shared DOM-Utility functions
	 */
	
	var Util = (function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, null, [{
	        key: "prefixedAnimateEvent",
	
	        /**
	         * Will register the right animation event based on browser
	         * @param element
	         * @param type
	         * @param callback
	         */
	        value: function prefixedAnimateEvent(element, type, callback) {
	            var thisFunction = function thisFunction(e) {
	                callback.apply(element, [e, thisFunction]);
	            };
	
	            for (var p = 0; p < PFX.length; p++) {
	                if (!PFX[p]) {
	                    type = type.toLowerCase();
	                }
	                var name = PFX[p] + type;
	                element.addEventListener(name, thisFunction, true);
	            }
	        }
	
	        /**
	         * Get correct transitionend event
	         * @returns {String}
	         * @private
	         */
	    }, {
	        key: "whichTransitionEndEvent",
	        value: function whichTransitionEndEvent() {
	            var t = undefined;
	            var el = document.createElement('fake');
	
	            var transitions = {
	                'transition': 'transitionend',
	                'OTransition': 'oTransitionEnd',
	                'MozTransition': 'transitionend',
	                'WebkitTransition': 'webkitTransitionEnd'
	            };
	
	            for (t in transitions) {
	                if (el.style[t] !== undefined) {
	                    return transitions[t];
	                }
	            }
	        }
	
	        /**
	         * Check if target is part of parent node
	         * @param target
	         * @param parent
	         * @returns {boolean}
	         */
	    }, {
	        key: "isPartOfNode",
	        value: function isPartOfNode(target, parent) {
	            if (!target || !parent) {
	                return false;
	            }
	            var now = target;
	            while (now !== parent && now !== null) {
	                if (now === parent) {
	                    break;
	                }
	                now = now.parentNode;
	            }
	            return now !== null;
	        }
	
	        /**
	         * Walks the tree until func returns true for given argument
	         * @param target
	         * @param func
	         * @returns {boolean|HTMLElement}
	         */
	    }, {
	        key: "parentsUntil",
	        value: function parentsUntil(target, func) {
	            if (!target) {
	                return false;
	            }
	            var now = target;
	            while (!func(now) && now !== null) {
	                now = now.parentNode;
	            }
	
	            return now;
	        }
	
	        /**
	         * Generates a unique id
	         * @return {String}
	         */
	    }, {
	        key: "guid",
	        value: function guid() {
	            function s4() {
	                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	            }
	
	            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	        }
	
	        /**
	         * Detects scrollbar width
	         * @see http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
	         * @returns {number}
	         */
	    }, {
	        key: "getScrollBarWidth",
	        value: function getScrollBarWidth() {
	
	            var doc = global.document,
	                inner = doc.createElement('p');
	            inner.style.width = "100%";
	            inner.style.height = "200px";
	
	            var outer = doc.createElement('div');
	            outer.style.position = "absolute";
	            outer.style.top = "0px";
	            outer.style.left = "0px";
	            outer.style.visibility = "hidden";
	            outer.style.width = "200px";
	            outer.style.height = "150px";
	            outer.style.overflow = "hidden";
	            outer.appendChild(inner);
	
	            doc.body.appendChild(outer);
	            var w1 = inner.offsetWidth;
	            outer.style.overflow = 'scroll';
	            var w2 = inner.offsetWidth;
	            if (w1 === w2) {
	                w2 = outer.clientWidth;
	            }
	            doc.body.removeChild(outer);
	
	            return w1 - w2;
	        }
	
	        /**
	         * Run an event once
	         * @param {String} ev
	         * @param {HTMLElement|HTMLDocument} target
	         * @param {Function} func
	         * @param {boolean} [capture]
	         */
	    }, {
	        key: "addEventOnce",
	        value: function addEventOnce(ev, target, func, capture) {
	            var thisFunction = function thisFunction(event) {
	                func(event, func);
	                target.removeEventListener(ev, thisFunction, capture);
	            };
	            return target.addEventListener(ev, thisFunction, capture);
	        }
	
	        /**
	         * Checks if an element is visible
	         * @param {HTMLElement} element
	         * @returns bool
	         */
	    }, {
	        key: "isVisible",
	        value: function isVisible(element) {
	            return element.offsetWidth > 0 && element.offsetHeight > 0;
	        }
	
	        /**
	         * Creates a camelCaseRepresentation of a dashed string
	         * @param {String} str
	         * @returns String
	         */
	    }, {
	        key: "dashToCamelCase",
	        value: function dashToCamelCase(str) {
	            return str.replace(/-([a-z])/g, function (g) {
	                return g[1].toUpperCase();
	            });
	        }
	
	        /**
	         * Creates a copy of `input`
	         * @param {*} input
	         * @return *
	         */
	    }, {
	        key: "copy",
	        value: function copy(input) {
	            return JSON.parse(JSON.stringify(input));
	        }
	
	        /**
	         * Reads options from element (data attributes) and applies to base
	         * @param {HTMLElement} element
	         * @param {Object} base
	         * @return {Object}
	         */
	    }, {
	        key: "applyOptionsFromElement",
	        value: function applyOptionsFromElement(element, base) {
	            if (!element) {
	                return base;
	            }
	            var attrs = element.attributes;
	            for (var i = 0; i < attrs.length; i++) {
	                var attr = attrs[i];
	                if (attr) {
	                    var s = Util.dashToCamelCase(attr.nodeName.replace('data-', '')),
	                        val = attr.nodeValue;
	                    if (base.hasOwnProperty(s)) {
	                        // skip functions
	                        if (typeof base[s] === 'function') {
	                            continue;
	                        }
	                        if (typeof base[s] === 'boolean') {
	                            base[s] = parseInt(val || 1) === 1;
	                        } else {
	                            base[s] = val;
	                        }
	                    }
	                }
	            }
	            return base;
	        }
	
	        /**
	         * Will position an element directly at given target
	         * Is aware of a given collision container to detect edges
	         * Will put elementToPosition either to left, center or right edge (prefer right)
	         *  and either to bottom or top (prefers bottom)
	         *
	         * You may overwrite preferred positioned with `centerHorizontal` and `positionTop`
	         *
	         * @param {HTMLElement} target the target container to align to
	         * @param {HTMLElement} elementToPosition the element to position
	         * @param {HTMLElement} collisionContainer the outer container to prevent collisions
	         * @param {bool} [centerHorizontal] set true to center element, otherwise it's put on the right border by default
	         * @param {bool} [positionTop] flip top, by default element is positioned to the bottom.
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: "setupPositionNearby",
	        value: function setupPositionNearby(target, elementToPosition, collisionContainer, centerHorizontal, positionTop) {
	
	            // determine relative offsets
	            var amountTop = 0,
	                amountLeft = 0;
	            Util.parentsUntil(target.parentNode, function (el) {
	                if (!(el instanceof HTMLElement)) {
	                    return false;
	                }
	                var style = window.getComputedStyle(el);
	                if (Util.isPartOfNode(elementToPosition, el)) {
	                    if (style && style.position === 'relative') {
	                        amountTop += el.offsetTop || 0;
	                        amountLeft += el.offsetLeft || 0;
	                    }
	                    return false;
	                } else {
	                    return true;
	                }
	            });
	
	            var targetPosition = target.getBoundingClientRect(),
	                elementRect = elementToPosition.getBoundingClientRect(),
	                colRect = collisionContainer.getBoundingClientRect(),
	                targetTop = targetPosition.top - amountTop,
	                targetRight = targetPosition.right,
	                isCollisionTop = targetTop - elementRect.height <= 0,
	                isCollisionBottom = window.innerHeight < targetTop + amountTop + targetPosition.height + elementRect.height,
	                isCollisionLeft = targetRight < elementRect.width,
	                targetLeft = targetPosition.left,
	                isCollisionRight = targetLeft + elementRect.width > colRect.width,
	                classList = elementToPosition.classList;
	
	            classList.remove(COL_RIGHT_CLASS);
	            classList.remove(COL_LEFT_CLASS);
	            classList.remove(COL_BOTTOM_CLASS);
	
	            var calcTop = undefined,
	                calcLeft = undefined;
	            if (isCollisionLeft && !isCollisionRight) {
	                // put element to left if collision with left
	                calcLeft = targetPosition.left - colRect.left - amountLeft + 'px';
	                classList.add(COL_LEFT_CLASS);
	            } else {
	                // maybe center if no collision with either side
	                var rightPosition = targetRight - elementRect.width - colRect.left - amountLeft + 'px',
	                    leftCentered = (targetLeft + targetPosition.width / 2 - elementRect.width / 2 || 0) - colRect.left,
	                    collisionCentered = leftCentered + elementRect.width > colRect.width;
	                if (centerHorizontal && !collisionCentered) {
	                    calcLeft = leftCentered + 'px';
	                } else {
	                    classList.add(COL_RIGHT_CLASS);
	                    calcLeft = rightPosition;
	                }
	            }
	
	            if (isCollisionBottom || positionTop && !isCollisionTop) {
	                // Put Element on top if collision
	                calcTop = targetTop - elementRect.height - colRect.top + 'px';
	                classList.add(COL_BOTTOM_CLASS);
	            } else {
	                calcTop = targetTop + targetPosition.height - colRect.top + 'px';
	            }
	
	            elementToPosition.style.cssText = "top:" + calcTop + ";left:" + calcLeft + ";";
	
	            return elementToPosition;
	        }
	
	        /**
	         * Brings a given element into viewport
	         * @param {HTMLElement} el
	         * @param {int|function}[optionalOffset]
	         */
	    }, {
	        key: "scrollToElement",
	        value: function scrollToElement(el, optionalOffset) {
	            el.scrollIntoView();
	            // optionally use a additional scrollDif
	            if (optionalOffset) {
	                if (typeof optionalOffset === 'function') {
	                    optionalOffset = optionalOffset();
	                }
	                if (optionalOffset > 0) {
	                    var scrolledY = window.scrollY || window.pageYOffset;
	                    if (scrolledY) {
	                        window.scroll(0, scrolledY - optionalOffset);
	                    }
	                }
	            }
	        }
	    }]);
	
	    return Util;
	})();
	
	exports["default"] = Util;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvVXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7QUFFYixJQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFN0MsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUM7O0FBRTNDLElBQU0sZUFBZSxHQUFHLG9CQUFvQixDQUFDOztBQUU3QyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDOzs7Ozs7SUFNekMsSUFBSTthQUFKLElBQUk7OEJBQUosSUFBSTs7O2lCQUFKLElBQUk7Ozs7Ozs7OztlQVFxQiw4QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNqRCxnQkFBTSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQWEsQ0FBQyxFQUFFO0FBQzlCLHdCQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUM7O0FBRUYsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLG9CQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ1Qsd0JBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzdCO0FBQ0Qsb0JBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDekIsdUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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RCxvQkFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLHdCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkQsd0JBQUksU0FBUyxFQUFFO0FBQ1gsOEJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztxQkFDaEQ7aUJBQ0o7YUFDSjtTQUNKOzs7V0FwVEMsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vdXRpbC9VdGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgUEZYID0gW1wid2Via2l0XCIsIFwibW96XCIsIFwiTVNcIiwgXCJvXCIsIFwiXCJdO1xuXG5jb25zdCBDT0xfTEVGVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tbGVmdCc7XG5cbmNvbnN0IENPTF9SSUdIVF9DTEFTUyA9ICdpcy1jb2xsaXNpb24tcmlnaHQnO1xuXG5jb25zdCBDT0xfQk9UVE9NX0NMQVNTID0gJ2lzLWNvbGxpc2lvbi1ib3R0b20nO1xuXG4vKipcbiAqIFByb3ZpZGVzIHNoYXJlZCBET00tVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIFV0aWwge1xuXG4gICAgLyoqXG4gICAgICogV2lsbCByZWdpc3RlciB0aGUgcmlnaHQgYW5pbWF0aW9uIGV2ZW50IGJhc2VkIG9uIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3RhdGljIHByZWZpeGVkQW5pbWF0ZUV2ZW50KGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShlbGVtZW50LCBbZSwgdGhpc0Z1bmN0aW9uXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBQRlgubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGlmICghUEZYW3BdKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuYW1lID0gUEZYW3BdICsgdHlwZTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzRnVuY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvcnJlY3QgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgd2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgICAgIGxldCB0O1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2UnKTtcblxuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgICAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgICAgICAgICBpZiAoZWwuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRhcmdldCBpcyBwYXJ0IG9mIHBhcmVudCBub2RlXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQYXJ0T2ZOb2RlKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAobm93ICE9PSBwYXJlbnQgJiYgbm93ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm93ID09PSBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub3cgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Fsa3MgdGhlIHRyZWUgdW50aWwgZnVuYyByZXR1cm5zIHRydWUgZm9yIGdpdmVuIGFyZ3VtZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBmdW5jXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIHBhcmVudHNVbnRpbCh0YXJnZXQsIGZ1bmMpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93ID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAoIWZ1bmMobm93KSAmJiBub3cgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vdyA9IG5vdy5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgaWRcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGd1aWQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHM0KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVjdHMgc2Nyb2xsYmFyIHdpZHRoXG4gICAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NjkzNy9ob3ctY2FuLWktZ2V0LXRoZS1icm93c2Vycy1zY3JvbGxiYXItc2l6ZXNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcblxuICAgICAgICBjb25zdCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQsIGlubmVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xuXG4gICAgICAgIGNvbnN0IG91dGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMjAwcHhcIjtcbiAgICAgICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xuICAgICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG4gICAgICAgIGNvbnN0IHcxID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgIGxldCB3MiA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAodzEgPT09IHcyKSB7XG4gICAgICAgICAgICB3MiA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGRvYy5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgICAgICByZXR1cm4gKHcxIC0gdzIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUnVuIGFuIGV2ZW50IG9uY2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fEhUTUxEb2N1bWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gICAgICovXG4gICAgc3RhdGljIGFkZEV2ZW50T25jZShldiwgdGFyZ2V0LCBmdW5jLCBjYXB0dXJlKSB7XG4gICAgICAgIGNvbnN0IHRoaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIHRoaXNGdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZnVuYyhldmVudCwgZnVuYyk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgdGhpc0Z1bmN0aW9uLCBjYXB0dXJlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2LCB0aGlzRnVuY3Rpb24sIGNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybnMgYm9vbFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1Zpc2libGUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjYW1lbENhc2VSZXByZXNlbnRhdGlvbiBvZiBhIGRhc2hlZCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMgU3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGRhc2hUb0NhbWVsQ2FzZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykge1xuICAgICAgICAgICAgcmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgYGlucHV0YFxuICAgICAqIEBwYXJhbSB7Kn0gaW5wdXRcbiAgICAgKiBAcmV0dXJuICpcbiAgICAgKi9cbiAgICBzdGF0aWMgY29weShpbnB1dCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnB1dCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWRzIG9wdGlvbnMgZnJvbSBlbGVtZW50IChkYXRhIGF0dHJpYnV0ZXMpIGFuZCBhcHBsaWVzIHRvIGJhc2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJhc2VcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3B0aW9uc0Zyb21FbGVtZW50KGVsZW1lbnQsIGJhc2UpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHIgPSBhdHRyc1tpXTtcbiAgICAgICAgICAgIGlmIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHMgPSBVdGlsLmRhc2hUb0NhbWVsQ2FzZShhdHRyLm5vZGVOYW1lLnJlcGxhY2UoJ2RhdGEtJywgJycpKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gYXR0ci5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlW3NdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Vbc10gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtzXSA9IHBhcnNlSW50KHZhbCB8fCAxKSA9PT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2Vbc10gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBwb3NpdGlvbiBhbiBlbGVtZW50IGRpcmVjdGx5IGF0IGdpdmVuIHRhcmdldFxuICAgICAqIElzIGF3YXJlIG9mIGEgZ2l2ZW4gY29sbGlzaW9uIGNvbnRhaW5lciB0byBkZXRlY3QgZWRnZXNcbiAgICAgKiBXaWxsIHB1dCBlbGVtZW50VG9Qb3NpdGlvbiBlaXRoZXIgdG8gbGVmdCwgY2VudGVyIG9yIHJpZ2h0IGVkZ2UgKHByZWZlciByaWdodClcbiAgICAgKiAgYW5kIGVpdGhlciB0byBib3R0b20gb3IgdG9wIChwcmVmZXJzIGJvdHRvbSlcbiAgICAgKlxuICAgICAqIFlvdSBtYXkgb3ZlcndyaXRlIHByZWZlcnJlZCBwb3NpdGlvbmVkIHdpdGggYGNlbnRlckhvcml6b250YWxgIGFuZCBgcG9zaXRpb25Ub3BgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgdGhlIHRhcmdldCBjb250YWluZXIgdG8gYWxpZ24gdG9cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50VG9Qb3NpdGlvbiB0aGUgZWxlbWVudCB0byBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbGxpc2lvbkNvbnRhaW5lciB0aGUgb3V0ZXIgY29udGFpbmVyIHRvIHByZXZlbnQgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2NlbnRlckhvcml6b250YWxdIHNldCB0cnVlIHRvIGNlbnRlciBlbGVtZW50LCBvdGhlcndpc2UgaXQncyBwdXQgb24gdGhlIHJpZ2h0IGJvcmRlciBieSBkZWZhdWx0XG4gICAgICogQHBhcmFtIHtib29sfSBbcG9zaXRpb25Ub3BdIGZsaXAgdG9wLCBieSBkZWZhdWx0IGVsZW1lbnQgaXMgcG9zaXRpb25lZCB0byB0aGUgYm90dG9tLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0dXBQb3NpdGlvbk5lYXJieSh0YXJnZXQsIGVsZW1lbnRUb1Bvc2l0aW9uLCBjb2xsaXNpb25Db250YWluZXIsIGNlbnRlckhvcml6b250YWwsIHBvc2l0aW9uVG9wKSB7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIHJlbGF0aXZlIG9mZnNldHNcbiAgICAgICAgbGV0IGFtb3VudFRvcCA9IDAsIGFtb3VudExlZnQgPSAwO1xuICAgICAgICBVdGlsLnBhcmVudHNVbnRpbCh0YXJnZXQucGFyZW50Tm9kZSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgICAgIGlmIChVdGlsLmlzUGFydE9mTm9kZShlbGVtZW50VG9Qb3NpdGlvbiwgZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHN0eWxlLnBvc2l0aW9uID09PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvcCArPSBlbC5vZmZzZXRUb3AgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50TGVmdCArPSBlbC5vZmZzZXRMZWZ0IHx8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgZWxlbWVudFJlY3QgPSBlbGVtZW50VG9Qb3NpdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGNvbFJlY3QgPSBjb2xsaXNpb25Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB0YXJnZXRUb3AgPSB0YXJnZXRQb3NpdGlvbi50b3AgLSBhbW91bnRUb3AsIHRhcmdldFJpZ2h0ID0gdGFyZ2V0UG9zaXRpb24ucmlnaHQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblRvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIDw9IDAsXG4gICAgICAgICAgICBpc0NvbGxpc2lvbkJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCA8ICh0YXJnZXRUb3AgKyBhbW91bnRUb3AgKyB0YXJnZXRQb3NpdGlvbi5oZWlnaHQgKyBlbGVtZW50UmVjdC5oZWlnaHQpLFxuICAgICAgICAgICAgaXNDb2xsaXNpb25MZWZ0ID0gdGFyZ2V0UmlnaHQgPCBlbGVtZW50UmVjdC53aWR0aCwgdGFyZ2V0TGVmdCA9IHRhcmdldFBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICBpc0NvbGxpc2lvblJpZ2h0ID0gKHRhcmdldExlZnQgKyBlbGVtZW50UmVjdC53aWR0aCkgPiBjb2xSZWN0LndpZHRoLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gZWxlbWVudFRvUG9zaXRpb24uY2xhc3NMaXN0O1xuXG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX1JJR0hUX0NMQVNTKTtcbiAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDT0xfTEVGVF9DTEFTUyk7XG4gICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoQ09MX0JPVFRPTV9DTEFTUyk7XG5cbiAgICAgICAgbGV0IGNhbGNUb3AsIGNhbGNMZWZ0O1xuICAgICAgICBpZiAoaXNDb2xsaXNpb25MZWZ0ICYmICFpc0NvbGxpc2lvblJpZ2h0KSB7XG4gICAgICAgICAgICAvLyBwdXQgZWxlbWVudCB0byBsZWZ0IGlmIGNvbGxpc2lvbiB3aXRoIGxlZnRcbiAgICAgICAgICAgIGNhbGNMZWZ0ID0gKHRhcmdldFBvc2l0aW9uLmxlZnQgLSBjb2xSZWN0LmxlZnQgLSBhbW91bnRMZWZ0KSArICdweCc7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKENPTF9MRUZUX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG1heWJlIGNlbnRlciBpZiBubyBjb2xsaXNpb24gd2l0aCBlaXRoZXIgc2lkZVxuICAgICAgICAgICAgdmFyIHJpZ2h0UG9zaXRpb24gPSAodGFyZ2V0UmlnaHQgLSBlbGVtZW50UmVjdC53aWR0aCAtIGNvbFJlY3QubGVmdCAtIGFtb3VudExlZnQpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0Q2VudGVyZWQgPSAoKHRhcmdldExlZnQgKyB0YXJnZXRQb3NpdGlvbi53aWR0aCAvIDIpIC1cbiAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnRSZWN0LndpZHRoIC8gMikgfHwgMCkgLSBjb2xSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uQ2VudGVyZWQgPSAobGVmdENlbnRlcmVkICsgZWxlbWVudFJlY3Qud2lkdGgpID4gY29sUmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmIChjZW50ZXJIb3Jpem9udGFsICYmICFjb2xsaXNpb25DZW50ZXJlZCkge1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gbGVmdENlbnRlcmVkICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfUklHSFRfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIGNhbGNMZWZ0ID0gcmlnaHRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NvbGxpc2lvbkJvdHRvbSB8fCAocG9zaXRpb25Ub3AgJiYgIWlzQ29sbGlzaW9uVG9wKSkge1xuICAgICAgICAgICAgLy8gUHV0IEVsZW1lbnQgb24gdG9wIGlmIGNvbGxpc2lvblxuICAgICAgICAgICAgY2FsY1RvcCA9ICh0YXJnZXRUb3AgLSBlbGVtZW50UmVjdC5oZWlnaHQpIC0gY29sUmVjdC50b3AgKyAncHgnO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChDT0xfQk9UVE9NX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGNUb3AgPSAodGFyZ2V0VG9wICsgdGFyZ2V0UG9zaXRpb24uaGVpZ2h0KSAtIGNvbFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRUb1Bvc2l0aW9uLnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7Y2FsY1RvcH07bGVmdDoke2NhbGNMZWZ0fTtgO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Qb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmluZ3MgYSBnaXZlbiBlbGVtZW50IGludG8gdmlld3BvcnRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7aW50fGZ1bmN0aW9ufVtvcHRpb25hbE9mZnNldF1cbiAgICAgKi9cbiAgICBzdGF0aWMgc2Nyb2xsVG9FbGVtZW50KGVsLCBvcHRpb25hbE9mZnNldCkge1xuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAvLyBvcHRpb25hbGx5IHVzZSBhIGFkZGl0aW9uYWwgc2Nyb2xsRGlmXG4gICAgICAgIGlmIChvcHRpb25hbE9mZnNldCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25hbE9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsT2Zmc2V0ID0gb3B0aW9uYWxPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbE9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxlZFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbGVkWSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHNjcm9sbGVkWSAtIG9wdGlvbmFsT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	'use strict';
	
	/**
	 * Provides a Basic Widget
	 */
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var DestroyableWidget = (function () {
	    function DestroyableWidget() {
	        _classCallCheck(this, DestroyableWidget);
	
	        this.listeners = [];
	    }
	
	    /**
	     * Destroys a Widget
	     */
	
	    _createClass(DestroyableWidget, [{
	        key: 'destroy',
	        value: function destroy() {
	            this.listeners.forEach(function (listener) {
	                listener.element.removeEventListener.apply(listener.element, listener.args);
	            });
	            this.listeners = [];
	        }
	
	        /**
	         * Adds an event and registers it later to remove bindings
	         * @param {HTMLElement} element
	         * @param {String} name
	         * @param {Function} listener
	         * @param {boolean} [capture]
	         * @returns {Function}
	         */
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(element, name, listener, capture) {
	            this.listeners.push({
	                element: element,
	                args: [name, listener, capture]
	            });
	            element.addEventListener(name, listener, capture);
	            return listener;
	        }
	    }]);
	
	    return DestroyableWidget;
	})();
	
	exports['default'] = DestroyableWidget;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Rlc3Ryb3lhYmxlV2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBS1EsaUJBQWlCO0FBRXZCLGFBRk0saUJBQWlCLEdBRXBCOzhCQUZHLGlCQUFpQjs7QUFHOUIsWUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDdkI7Ozs7OztpQkFKZ0IsaUJBQWlCOztlQVMzQixtQkFBRztBQUNOLGdCQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUNqQyx3QkFBUSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0UsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCOzs7Ozs7Ozs7Ozs7ZUFVZSwwQkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDL0MsZ0JBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ2hCLHVCQUFPLEVBQUUsT0FBTztBQUNoQixvQkFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDbEMsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7O1dBL0JnQixpQkFBaUI7OztxQkFBakIsaUJBQWlCIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Rlc3Ryb3lhYmxlV2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcm92aWRlcyBhIEJhc2ljIFdpZGdldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95YWJsZVdpZGdldCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhIFdpZGdldFxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkobGlzdGVuZXIuZWxlbWVudCwgbGlzdGVuZXIuYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgYW5kIHJlZ2lzdGVycyBpdCBsYXRlciB0byByZW1vdmUgYmluZGluZ3NcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhcHR1cmVdXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWxlbWVudCwgbmFtZSwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgYXJnczogW25hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxufSJdfQ==

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	/*global CustomEvent*/
	
	'use strict';
	
	// polyfill for custom events to make thinks work in IE
	// The needed polyfill is so small that I embedded it here
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	void (function () {
	    if (!global.CustomEvent || typeof global.CustomEvent !== 'function') {
	        var CustomEvent;
	        CustomEvent = function (event, params) {
	            var evt;
	            params = params || {
	                bubbles: false,
	                cancelable: false,
	                detail: undefined
	            };
	            evt = document.createEvent("CustomEvent");
	            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	            return evt;
	        };
	        CustomEvent.prototype = global.Event.prototype;
	        global.CustomEvent = CustomEvent;
	    }
	})();
	/**
	 * Simpler Event dispatching
	 */
	
	var EventHandler = (function () {
	
	    /**
	     * @param {HTMLElement} target
	     * @param {String} name
	     */
	
	    function EventHandler(target, name) {
	        _classCallCheck(this, EventHandler);
	
	        this.target = target;
	        this.defaultOptions = {
	            bubbles: true,
	            cancelable: true
	        };
	
	        this.name = name;
	    }
	
	    /**
	     * Set more options
	     * @param {Object} options
	     * @returns {EventHandler}
	     */
	
	    _createClass(EventHandler, [{
	        key: 'withOptions',
	        value: function withOptions(options) {
	            _Object$assign(this.defaultOptions, options || {});
	            return this;
	        }
	
	        /**
	         * Call with the originalEvent
	         * @param {Event} e
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withOriginal',
	        value: function withOriginal(e) {
	            return this.withDetail({
	                originalEvent: e
	            });
	        }
	
	        /**
	         * Extends the detail part of the event
	         * @param {Object} o
	         * @returns {EventHandler}
	         */
	    }, {
	        key: 'withDetail',
	        value: function withDetail(o) {
	            if (!this.defaultOptions.detail) {
	                this.defaultOptions.detail = {};
	            }
	            _Object$assign(this.defaultOptions.detail, o);
	            return this;
	        }
	
	        /**
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'fire',
	        value: function fire() {
	            var e = new CustomEvent(this.name, this.defaultOptions);
	            if (this.target) {
	                this.target.dispatchEvent(e);
	            }
	            return e;
	        }
	    }]);
	
	    return EventHandler;
	})();
	
	var Event = (function () {
	    function Event() {
	        _classCallCheck(this, Event);
	    }
	
	    _createClass(Event, null, [{
	        key: 'dispatch',
	
	        /**
	         * Prepares to dispatch a custom event (without firing)
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @returns {EventHandler}
	         */
	        value: function dispatch(target, name) {
	            return new EventHandler(target, name);
	        }
	
	        /**
	         * Dispatches a custom event and fires it directly
	         * @param {HTMLElement} target
	         * @param {String} name
	         * @param {Object} [options]
	         * @returns {Window.CustomEvent}
	         */
	    }, {
	        key: 'dispatchAndFire',
	        value: function dispatchAndFire(target, name, options) {
	            return new EventHandler(target, name).withOptions(options).fire();
	        }
	    }]);
	
	    return Event;
	})();
	
	exports['default'] = Event;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvRXZlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBSWIsS0FBSyxDQUFBLFlBQVk7QUFDYixRQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ2pFLFlBQUksV0FBVyxDQUFDO0FBQ2hCLG1CQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ25DLGdCQUFJLEdBQUcsQ0FBQztBQUNSLGtCQUFNLEdBQUcsTUFBTSxJQUFJO0FBQ1gsdUJBQU8sRUFBRSxLQUFLO0FBQ2QsMEJBQVUsRUFBRSxLQUFLO0FBQ2pCLHNCQUFNLEVBQUUsU0FBUzthQUNwQixDQUFDO0FBQ04sZUFBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsZUFBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RSxtQkFBTyxHQUFHLENBQUM7U0FDZCxDQUFDO0FBQ0YsbUJBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDL0MsY0FBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDcEM7Q0FDSixDQUFBLEVBQUUsQ0FBQzs7Ozs7SUFJRSxZQUFZOzs7Ozs7O0FBTUgsYUFOVCxZQUFZLENBTUYsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFOeEIsWUFBWTs7QUFRVixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLENBQUMsY0FBYyxHQUFHO0FBQ2xCLG1CQUFPLEVBQUUsSUFBSTtBQUNiLHNCQUFVLEVBQUUsSUFBSTtTQUNuQixDQUFDOztBQUVGLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7Ozs7OztpQkFmQyxZQUFZOztlQXNCSCxxQkFBQyxPQUFPLEVBQUU7QUFDakIsMkJBQWMsSUFBSSxDQUFDLGNBQWMsRUFBRyxPQUFPLElBQUksRUFBRSxDQUFFLENBQUM7QUFDcEQsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7Ozs7Ozs7OztlQU9XLHNCQUFDLENBQUMsRUFBRTtBQUNaLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDbkIsNkJBQWEsRUFBRSxDQUFDO2FBQ25CLENBQUMsQ0FBQztTQUNOOzs7Ozs7Ozs7ZUFPUyxvQkFBQyxDQUFDLEVBQUU7QUFDVixnQkFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO0FBQzdCLG9CQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDbkM7QUFDRCwyQkFBYyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QyxtQkFBTyxJQUFJLENBQUM7U0FDZjs7Ozs7OztlQUtHLGdCQUFHO0FBQ0gsZ0JBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDYixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxtQkFBTyxDQUFDLENBQUM7U0FDWjs7O1dBNURDLFlBQVk7OztJQWdFWixLQUFLO2FBQUwsS0FBSzs4QkFBTCxLQUFLOzs7aUJBQUwsS0FBSzs7Ozs7Ozs7O2VBT1Esa0JBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUMxQixtQkFBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekM7Ozs7Ozs7Ozs7O2VBU3FCLHlCQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQzFDLG1CQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckU7OztXQXBCQyxLQUFLOzs7cUJBQUwsS0FBSyIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi91dGlsL0V2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKmdsb2JhbCBDdXN0b21FdmVudCovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gcG9seWZpbGwgZm9yIGN1c3RvbSBldmVudHMgdG8gbWFrZSB0aGlua3Mgd29yayBpbiBJRVxuLy8gVGhlIG5lZWRlZCBwb2x5ZmlsbCBpcyBzbyBzbWFsbCB0aGF0IEkgZW1iZWRkZWQgaXQgaGVyZVxudm9pZCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFnbG9iYWwuQ3VzdG9tRXZlbnQgfHwgdHlwZW9mIGdsb2JhbC5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgQ3VzdG9tRXZlbnQ7XG4gICAgICAgIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgfTtcbiAgICAgICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkV2ZW50LnByb3RvdHlwZTtcbiAgICAgICAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG4gICAgfVxufSgpO1xuLyoqXG4gKiBTaW1wbGVyIEV2ZW50IGRpc3BhdGNoaW5nXG4gKi9cbmNsYXNzIEV2ZW50SGFuZGxlciB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgbmFtZSkge1xuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBtb3JlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIChvcHRpb25zIHx8IHt9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgd2l0aCB0aGUgb3JpZ2luYWxFdmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHdpdGhPcmlnaW5hbChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpdGhEZXRhaWwoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmRzIHRoZSBkZXRhaWwgcGFydCBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb1xuICAgICAqIEByZXR1cm5zIHtFdmVudEhhbmRsZXJ9XG4gICAgICovXG4gICAgd2l0aERldGFpbChvKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0T3B0aW9ucy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMuZGV0YWlsID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRPcHRpb25zLmRldGFpbCwgbyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgZmlyZSgpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB0aGlzLmRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIEV2ZW50IHtcbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyB0byBkaXNwYXRjaCBhIGN1c3RvbSBldmVudCAod2l0aG91dCBmaXJpbmcpXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRIYW5kbGVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBkaXNwYXRjaCh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IGFuZCBmaXJlcyBpdCBkaXJlY3RseVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm5zIHtXaW5kb3cuQ3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgc3RhdGljIGRpc3BhdGNoQW5kRmlyZSh0YXJnZXQsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCBuYW1lKS53aXRoT3B0aW9ucyhvcHRpb25zKS5maXJlKCk7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	'use strict';
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var DOM_COMPLETE = 'complete';
	
	// we attach global settings to global once because settings might be shared a lot of times trough the application
	// Maybe find a better way to handle that scenario
	if (!global.FLEXCSS_GLOBAL_SETTINGS) {
	    (function () {
	
	        global.FLEXCSS_GLOBAL_SETTINGS = {
	            // defined breakpoint for small devices < n
	            smallBreakpoint: 768,
	            // nodes that should be updated when no scrollbar is expected
	            scrollbarUpdateNodes: global.document.body !== null ? [global.document.body] : [],
	            // additional Delay until darkener is fully hidden
	            darkenerFadeDelay: 100,
	            // class that is added if canvas has been toggled
	            canvasToggledClass: 'toggled-canvas'
	        };
	
	        global.FLEXCSS_CONST_IS_IOS = null;
	
	        global.FLEXCSS_CONST_IS_TOUCH = null;
	
	        global.FLEXCSS_CONST_IS_IE = null;
	
	        global.FLEXCSS_CONST_TAB_EVENT = 'click';
	
	        var init = function init() {
	            // Measure scrollbar width
	            global.FLEXCSS_CONST_SCROLLBAR_WIDTH = _utilUtil2['default'].getScrollBarWidth();
	            // detect right transition end event
	            global.FLEXCSS_CONST_TRANSITION_EVENT = _utilUtil2['default'].whichTransitionEndEvent();
	        };
	
	        if (global.document.readyState === DOM_COMPLETE) {
	            init();
	        } else {
	            // it's possible that global.document.body is not available if the document is not
	            // loaded completely
	            document.addEventListener('DOMContentLoaded', function () {
	                init();
	            });
	        }
	    })();
	}
	
	/**
	 * Utility class that setups global settings
	 */
	
	var Settings = (function () {
	    function Settings() {
	        _classCallCheck(this, Settings);
	    }
	
	    _createClass(Settings, null, [{
	        key: 'setup',
	
	        /**
	         * Setup global settings, overwrite default values
	         * @param {Object} settings
	         */
	        value: function setup(settings) {
	            _Object$assign(global.FLEXCSS_GLOBAL_SETTINGS, settings);
	        }
	
	        /**
	         * Access to global settings
	         * @returns {Object}
	         */
	    }, {
	        key: 'get',
	        value: function get() {
	            return global.FLEXCSS_GLOBAL_SETTINGS;
	        }
	
	        /**
	         * Detects a IOS Device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isIosDevice',
	        value: function isIosDevice() {
	            if (!global.FLEXCSS_CONST_IS_IOS) {
	                global.FLEXCSS_CONST_IS_IOS = global.navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
	            }
	
	            return global.FLEXCSS_CONST_IS_IOS;
	        }
	
	        /**
	         * Detects a touch device, caches subsequent calls
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isTouchDevice',
	        value: function isTouchDevice() {
	            if (!global.FLEXCSS_CONST_IS_TOUCH) {
	                global.FLEXCSS_CONST_IS_TOUCH = 'ontouchstart' in window || !!global.navigator.msMaxTouchPoints;
	            }
	            return global.FLEXCSS_CONST_IS_TOUCH;
	        }
	
	        /**
	         * Checks if current browser is Internet Explorer
	         * @returns {boolean|*}
	         */
	    }, {
	        key: 'isIE',
	        value: function isIE() {
	            if (!global.FLEXCSS_CONST_IS_IE) {
	                global.FLEXCSS_CONST_IS_IE = "ActiveXObject" in window;
	            }
	            return global.FLEXCSS_CONST_IS_IE;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTransitionEvent',
	        value: function getTransitionEvent() {
	            return global.FLEXCSS_CONST_TRANSITION_EVENT;
	        }
	
	        /**
	         * @returns {int}
	         */
	    }, {
	        key: 'getScrollbarWidth',
	        value: function getScrollbarWidth() {
	            return global.FLEXCSS_CONST_SCROLLBAR_WIDTH;
	        }
	
	        /**
	         * @returns {String}
	         */
	    }, {
	        key: 'getTabEvent',
	        value: function getTabEvent() {
	            return global.FLEXCSS_CONST_TAB_EVENT;
	        }
	    }]);
	
	    return Settings;
	})();
	
	exports['default'] = Settings;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozt3QkFFSSxXQUFXOzs7O0FBRTVCLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7OztBQUloQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFOzs7QUFFakMsY0FBTSxDQUFDLHVCQUF1QixHQUFHOztBQUU3QiwyQkFBZSxFQUFFLEdBQUc7O0FBRXBCLGdDQUFvQixFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs7QUFFakYsNkJBQWlCLEVBQUUsR0FBRzs7QUFFdEIsOEJBQWtCLEVBQUUsZ0JBQWdCO1NBQ3ZDLENBQUM7O0FBRUYsY0FBTSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQzs7QUFFbkMsY0FBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7QUFFckMsY0FBTSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7QUFFbEMsY0FBTSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQzs7QUFFekMsWUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFJLEdBQVM7O0FBRWYsa0JBQU0sQ0FBQyw2QkFBNkIsR0FBRyxzQkFBSyxpQkFBaUIsRUFBRSxDQUFDOztBQUVoRSxrQkFBTSxDQUFDLDhCQUE4QixHQUFHLHNCQUFLLHVCQUF1QixFQUFFLENBQUM7U0FDMUUsQ0FBQzs7QUFFRixZQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFlBQVksRUFBRTtBQUM3QyxnQkFBSSxFQUFFLENBQUM7U0FDVixNQUFNOzs7QUFHSCxvQkFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07QUFDaEQsb0JBQUksRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ047O0NBQ0o7Ozs7OztJQU1LLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7OztpQkFBUixRQUFROzs7Ozs7O2VBTUUsZUFBQyxRQUFRLEVBQUU7QUFDbkIsMkJBQWMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEOzs7Ozs7OztlQU1TLGVBQUc7QUFDVCxtQkFBTyxNQUFNLENBQUMsdUJBQXVCLENBQUM7U0FDekM7Ozs7Ozs7O2VBTWlCLHVCQUFHO0FBQ2pCLGdCQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO0FBQzlCLHNCQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDekY7O0FBRUQsbUJBQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDO1NBQ3RDOzs7Ozs7OztlQU1tQix5QkFBRztBQUNuQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtBQUNoQyxzQkFBTSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEFBQUMsQ0FBQzthQUNyRztBQUNELG1CQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztTQUN4Qzs7Ozs7Ozs7ZUFNVSxnQkFBRztBQUNWLGdCQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO0FBQzdCLHNCQUFNLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxJQUFJLE1BQU0sQ0FBQzthQUMxRDtBQUNELG1CQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztTQUNyQzs7Ozs7OztlQUt3Qiw4QkFBRztBQUN4QixtQkFBTyxNQUFNLENBQUMsOEJBQThCLENBQUM7U0FDaEQ7Ozs7Ozs7ZUFLdUIsNkJBQUc7QUFDdkIsbUJBQU8sTUFBTSxDQUFDLDZCQUE2QixDQUFDO1NBQy9DOzs7Ozs7O2VBS2lCLHVCQUFHO0FBQ2pCLG1CQUFPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztTQUN6Qzs7O1dBdkVDLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL3V0aWwvU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcblxuY29uc3QgRE9NX0NPTVBMRVRFID0gJ2NvbXBsZXRlJztcblxuLy8gd2UgYXR0YWNoIGdsb2JhbCBzZXR0aW5ncyB0byBnbG9iYWwgb25jZSBiZWNhdXNlIHNldHRpbmdzIG1pZ2h0IGJlIHNoYXJlZCBhIGxvdCBvZiB0aW1lcyB0cm91Z2ggdGhlIGFwcGxpY2F0aW9uXG4vLyBNYXliZSBmaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhhdCBzY2VuYXJpb1xuaWYgKCFnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1MpIHtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUyA9IHtcbiAgICAgICAgLy8gZGVmaW5lZCBicmVha3BvaW50IGZvciBzbWFsbCBkZXZpY2VzIDwgblxuICAgICAgICBzbWFsbEJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgLy8gbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCB3aGVuIG5vIHNjcm9sbGJhciBpcyBleHBlY3RlZFxuICAgICAgICBzY3JvbGxiYXJVcGRhdGVOb2RlczogZ2xvYmFsLmRvY3VtZW50LmJvZHkgIT09IG51bGwgPyBbZ2xvYmFsLmRvY3VtZW50LmJvZHldIDogW10sXG4gICAgICAgIC8vIGFkZGl0aW9uYWwgRGVsYXkgdW50aWwgZGFya2VuZXIgaXMgZnVsbHkgaGlkZGVuXG4gICAgICAgIGRhcmtlbmVyRmFkZURlbGF5OiAxMDAsXG4gICAgICAgIC8vIGNsYXNzIHRoYXQgaXMgYWRkZWQgaWYgY2FudmFzIGhhcyBiZWVuIHRvZ2dsZWRcbiAgICAgICAgY2FudmFzVG9nZ2xlZENsYXNzOiAndG9nZ2xlZC1jYW52YXMnXG4gICAgfTtcblxuICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUyA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRSA9IG51bGw7XG5cbiAgICBnbG9iYWwuRkxFWENTU19DT05TVF9UQUJfRVZFTlQgPSAnY2xpY2snO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGhcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIID0gVXRpbC5nZXRTY3JvbGxCYXJXaWR0aCgpO1xuICAgICAgICAvLyBkZXRlY3QgcmlnaHQgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVFJBTlNJVElPTl9FVkVOVCA9IFV0aWwud2hpY2hUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbC5kb2N1bWVudC5yZWFkeVN0YXRlID09PSBET01fQ09NUExFVEUpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBnbG9iYWwuZG9jdW1lbnQuYm9keSBpcyBub3QgYXZhaWxhYmxlIGlmIHRoZSBkb2N1bWVudCBpcyBub3RcbiAgICAgICAgLy8gbG9hZGVkIGNvbXBsZXRlbHlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgdGhhdCBzZXR1cHMgZ2xvYmFsIHNldHRpbmdzXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBTZXR0aW5ncyB7XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBnbG9iYWwgc2V0dGluZ3MsIG92ZXJ3cml0ZSBkZWZhdWx0IHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXR0aW5nc1xuICAgICAqL1xuICAgIHN0YXRpYyBzZXR1cChzZXR0aW5ncykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGdsb2JhbC5GTEVYQ1NTX0dMT0JBTF9TRVRUSU5HUywgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0byBnbG9iYWwgc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19HTE9CQUxfU0VUVElOR1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIElPUyBEZXZpY2UsIGNhY2hlcyBzdWJzZXF1ZW50IGNhbGxzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzSW9zRGV2aWNlKCkge1xuICAgICAgICBpZiAoIWdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lPUykge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSU9TID0gZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JT1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0cyBhIHRvdWNoIGRldmljZSwgY2FjaGVzIHN1YnNlcXVlbnQgY2FsbHNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUb3VjaERldmljZSgpIHtcbiAgICAgICAgaWYgKCFnbG9iYWwuRkxFWENTU19DT05TVF9JU19UT1VDSCkge1xuICAgICAgICAgICAgZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgISEoZ2xvYmFsLm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfVE9VQ0g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGN1cnJlbnQgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufCp9XG4gICAgICovXG4gICAgc3RhdGljIGlzSUUoKSB7XG4gICAgICAgIGlmICghZ2xvYmFsLkZMRVhDU1NfQ09OU1RfSVNfSUUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5GTEVYQ1NTX0NPTlNUX0lTX0lFID0gXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9JU19JRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUcmFuc2l0aW9uRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuRkxFWENTU19DT05TVF9UUkFOU0lUSU9OX0VWRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldFNjcm9sbGJhcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfU0NST0xMQkFSX1dJRFRIO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldFRhYkV2ZW50KCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsLkZMRVhDU1NfQ09OU1RfVEFCX0VWRU5UO1xuICAgIH1cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(103);
	module.exports = self.fetch.bind(self);


/***/ },
/* 103 */
/***/ function(module, exports) {

	(function() {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(url, options) {
	    options = options || {}
	    this.url = url
	
	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }
	
	  Body.call(Response.prototype)
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function(input, init) {
	    // TODO: Request constructor should accept input, init
	    var request
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input
	    } else {
	      request = new Request(input, init)
	    }
	
	    return new Promise(function(resolve, reject) {
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return;
	      }
	
	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Modal
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/*global KeyboardEvent*/
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	var HTML_ELEMENT = global.document.documentElement;
	var KEY_ESC = 27;
	/* Attribute Names */
	var ATTR_CREATE_NEW = 'data-new-instance';
	var ATTR_CLOSE = 'data-close-modal';
	var ATTR_NAME = 'data-modal';
	
	/* Class names */
	var CLS_CONTAINER_CURRENT = 'front';
	var CLS_OPEN = 'open';
	var CLS_CURRENT = 'current';
	var CLS_PART_OF_STACK = 'part-of-stack';
	var CLS_MODAL_OPEN = 'modal-open';
	var CLS_MODAL_CONTAINER = 'modal-container';
	var CLS_ANIM_END = 'modal-anim-end';
	var CLS_LOADER_CONTAINER = 'loader-container';
	var CLS_LOADER = 'loader';
	
	/* Events */
	
	/**
	 * Event triggered when modal is closed
	 * @type {string}
	 */
	var EVENT_MODAL_CLOSED = 'flexcss.modal.closed';
	exports.EVENT_MODAL_CLOSED = EVENT_MODAL_CLOSED;
	/**
	 * Event triggered before a modal is closed, cancelable
	 * @type {string}
	 */
	var EVENT_MODAL_BEFORE_CLOSED = 'flexcss.modal.beforeClose';
	exports.EVENT_MODAL_BEFORE_CLOSED = EVENT_MODAL_BEFORE_CLOSED;
	/**
	 * Event triggered when a modal is opened
	 * @type {string}
	 */
	var EVENT_MODAL_OPENED = 'flexcss.modal.opened';
	
	exports.EVENT_MODAL_OPENED = EVENT_MODAL_OPENED;
	/**
	 * Event triggered when modal is initilized, called on target
	 * @type {string}
	 */
	var EVENT_MODAL_INIT = 'flexcss.modal.init';
	
	exports.EVENT_MODAL_INIT = EVENT_MODAL_INIT;
	/**
	 * Triggered when the content of an async modal on a target is loaded, called on target
	 * @type {string}
	 */
	var EVENT_MODAL_ASYNC_TARGET_LOADED = 'flexcss.modal.asyncTargetLoaded';
	
	exports.EVENT_MODAL_ASYNC_TARGET_LOADED = EVENT_MODAL_ASYNC_TARGET_LOADED;
	/**
	 * A Modal Implementation
	 */
	
	var Modal = (function () {
	    function Modal(DelegateContainer, options) {
	        _classCallCheck(this, Modal);
	
	        var doc = global.document,
	            container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        // Instance vars:
	        if (!container) {
	            throw 'Could not found container element by given ID/Element: ' + DelegateContainer;
	        }
	
	        this.currentOpen = null;
	
	        this.loading = false;
	
	        this.container = container;
	
	        /**
	         * Default Options
	         */
	        this.options = {
	            classNames: 'modal',
	            closeOnEscape: true,
	            closeOnBackgroundClick: true,
	            destroyOnFinish: false,
	            fixedContainer: true,
	            containerClassNames: ''
	        };
	
	        _Object$assign(this.options, options);
	
	        // Container where events are delegated
	        this.eventContainer = null;
	        this.eventFunction = null;
	
	        this.dataMainPageContainer = global.document.body;
	
	        this.currentScrollTop = 0;
	
	        this.modalContainer = null;
	
	        // Destroy full modal instance when no dialogs are bind to?
	        // Otherwise container is recycled
	        this.destroyOnFinish = this.options.destroyOnFinish;
	    }
	
	    // Static variable that keeps track of all open modals
	
	    /**
	     * Removes this modal from global stack
	     * Will handle fixing main html element too
	     * @private
	     * @param n
	     */
	
	    _createClass(Modal, [{
	        key: '_removeModalFromStack',
	        value: function _removeModalFromStack(n) {
	            var t = Modal._modalInstances.indexOf(n),
	                self = this;
	            if (t > -1) {
	                Modal._modalInstances.splice(t, 1);
	                if (Modal._modalInstances.length === 0) {
	                    // restore scrollPosition:
	                    if (self.dataMainPageContainer) {
	                        setTimeout(function () {
	                            if (self.options.fixedContainer) {
	                                self.dataMainPageContainer.style.position = "static";
	                                self.dataMainPageContainer.style.top = "0px";
	                                // reset scrollTop
	                                document.documentElement.scrollTop = self.currentScrollTop;
	                                document.body.scrollTop = self.currentScrollTop;
	                            }
	                            _utilSettings2['default'].get().scrollbarUpdateNodes.forEach(function (node) {
	                                node.style.paddingRight = '';
	                            });
	                            HTML_ELEMENT.classList.remove(CLS_MODAL_OPEN);
	                        }, 0);
	                    }
	                }
	            }
	        }
	
	        /**
	         * Modal container that contains all `stacked` modals for this instance
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: 'getModalContainer',
	        value: function getModalContainer() {
	            return this.modalContainer;
	        }
	
	        /**
	         * Closes the current open modal of this stack
	         * @params [e], optional event
	         * @returns {*}
	         */
	    }, {
	        key: 'close',
	        value: function close(e) {
	            var self = this;
	
	            var options = self.currentOpen ? _utilUtil2['default'].applyOptionsFromElement(self.currentOpen, _utilUtil2['default'].copy(self.options)) : self.options;
	
	            // close only on keyboard if instance should
	            if (!options.closeOnEscape && e instanceof KeyboardEvent) {
	                return false;
	            }
	
	            // close only on background if instance should
	            if (!options.closeOnBackgroundClick && e && e.type === _utilSettings2['default'].getTabEvent() && !e.target.hasAttribute(ATTR_CLOSE)) {
	                return false;
	            }
	
	            // if an instance is currently loading, prevent from closing
	            if (self.loading) {
	                return false;
	            }
	
	            if (e) {
	                e.preventDefault();
	            }
	
	            if (self.currentOpen) {
	                // dispatch beforeClose event, if prevented prevent modal from closing
	                var ev = _utilEvent2['default'].dispatchAndFire(self.currentOpen, EVENT_MODAL_BEFORE_CLOSED);
	                if (ev.defaultPrevented) {
	                    return false;
	                }
	
	                this._finishState(self.currentOpen);
	                // if there is an previous modal
	                if (self.currentOpen.prevModal) {
	                    // switch to the next modal
	                    return self.switchModals(self.currentOpen.prevModal, self.currentOpen.prevModal.prevModal || null);
	                }
	
	                // finally trigger closed event
	                _utilEvent2['default'].dispatch(self.currentOpen, EVENT_MODAL_CLOSED).withOriginal(e).fire();
	            }
	            self._removeModalFromStack(self.currentOpen);
	
	            // Full stack closed:
	            self.currentOpen = null;
	            if (self.modalContainer) {
	                // setup next open
	                var lastContainer = Modal._modalInstances[Modal._modalInstances.length - 1],
	                    classList = self.modalContainer.classList;
	                classList.remove(CLS_CONTAINER_CURRENT);
	                classList.remove(CLS_OPEN);
	                // Remove all current classes from child-nodes
	                for (var i = 0; i < self.modalContainer.childNodes.length; i++) {
	                    var node = self.modalContainer.childNodes[i],
	                        cl = node.classList;
	                    // remove applied styles
	                    self._finishState(node);
	                    cl.remove(CLS_CURRENT);
	                    cl.remove(CLS_PART_OF_STACK);
	                }
	                if (lastContainer) {
	                    lastContainer.parentNode.classList.add(CLS_CONTAINER_CURRENT);
	                }
	            }
	
	            if (self.destroyOnFinish) {
	                self.destroy();
	            }
	            return self;
	        }
	
	        /**
	         * Resets a target when newly initilizes
	         * @param target
	         * @private
	         */
	    }, {
	        key: '_finishState',
	        value: function _finishState(target) {
	            target.classList.remove(CLS_ANIM_END);
	        }
	
	        /**
	         * Handler called when a Modal has finished an animation
	         * @param e
	         * @param self
	         * @private
	         */
	    }, {
	        key: '_finishAnim',
	        value: function _finishAnim(e, self) {
	            e.target.classList.add(CLS_ANIM_END);
	            e.target.removeEventListener(e.type, self, true);
	        }
	
	        /**
	         * Brings the given modal to front
	         * @param co
	         * @param last
	         */
	    }, {
	        key: 'switchModals',
	        value: function switchModals(co, last) {
	            co.prevModal = last;
	            Modal._modalInstances.push(co);
	
	            if (last) {
	                this._finishState(last);
	                _utilUtil2['default'].prefixedAnimateEvent(last, 'AnimationEnd', this._finishAnim);
	                last.classList.add(CLS_PART_OF_STACK);
	            }
	            // set new currentOpen
	            this.currentOpen = co;
	
	            // bring current container to the front
	            var instances = Modal._modalInstances;
	
	            for (var m = 0; m < instances.length; m++) {
	                instances[m].parentNode.classList.remove(CLS_CONTAINER_CURRENT);
	            }
	            this.modalContainer.classList.add(CLS_CONTAINER_CURRENT);
	            // remove animations if animations has been completed, fixes various bugs:
	            // - fixes nested scrolling element issue in iOS Browsers / Mobile-Safari
	            _utilUtil2['default'].prefixedAnimateEvent(co, 'AnimationEnd', this._finishAnim);
	
	            for (var i = 0; i < this.modalContainer.childNodes.length; i++) {
	                var n = this.modalContainer.childNodes[i],
	                    isCurrent = n.classList.contains(CLS_CURRENT);
	                if (n === co) {
	                    co.classList.add(CLS_CURRENT);
	                    co.classList.remove(CLS_PART_OF_STACK);
	                    this._finishState(co);
	                } else {
	                    n.classList.remove(CLS_CURRENT);
	                    if (isCurrent) {
	                        this._removeModalFromStack(n);
	                        _utilEvent2['default'].dispatchAndFire(n, EVENT_MODAL_CLOSED);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'handleScrollbar',
	        value: function handleScrollbar() {
	            var self = this;
	            if (Modal._modalInstances.length === 0) {
	                // save current scrollTop:
	                var scrollTop = undefined,
	                    c = undefined;
	                if (self.options.fixedContainer) {
	                    scrollTop = global.pageYOffset;
	                    c = self.dataMainPageContainer;
	                    self.currentScrollTop = scrollTop;
	                }
	                // this causes reflow/paint and should be optimized
	                // At lest we write in a batch later
	                _utilSettings2['default'].get().scrollbarUpdateNodes.map(function (n) {
	                    return {
	                        n: n, padding: parseInt(global.getComputedStyle(n).paddingRight) + _utilSettings2['default'].getScrollbarWidth() + 'px'
	                    };
	                }).forEach(function (d) {
	                    d.n.style.paddingRight = d.padding;
	                });
	                if (self.options.fixedContainer) {
	                    if (c) {
	                        c.style.cssText += 'top:' + (scrollTop * -1 + 'px') + ';position:fixed';
	                    }
	                }
	                HTML_ELEMENT.classList.add(CLS_MODAL_OPEN);
	            }
	        }
	
	        /**
	         * Creates a Modal and opens it (later)
	         * @param e
	         * @returns {Promise|boolean}
	         */
	    }, {
	        key: 'createWidget',
	        value: function createWidget(e) {
	            var self = this;
	            if (this.loading) {
	                return false;
	            }
	
	            // check if another modal has registered events on this dom path:
	            if (e && e.target) {
	                var foundInstance = _utilUtil2['default'].parentsUntil(e.target, function (node) {
	                    return node && node.flexModalInstance;
	                });
	
	                // if another instance has been found, abort
	                if (foundInstance !== this.container) {
	                    return false;
	                }
	            }
	            var targetContent,
	                future,
	                widget,
	                target,
	                hasTarget = true,
	                isHtmlElement = e instanceof HTMLElement,
	                isWidget = _Widget2['default'].isWidget(e);
	            if (isHtmlElement || isWidget) {
	                if (isHtmlElement) {
	                    targetContent = e;
	                } else {
	                    widget = e;
	                    targetContent = widget.element;
	                }
	            } else {
	                target = e.target;
	                if (!target) {
	                    throw 'Could not find target, did you pass an event, a HTMLElement or an Widget?';
	                }
	                hasTarget = target.hasAttribute(ATTR_NAME);
	                targetContent = target.getAttribute(ATTR_NAME);
	                widget = _Widget2['default'].findWidget(target);
	                if (target.hasAttribute(ATTR_CREATE_NEW) && !e.newInstance) {
	                    var newInstance = new Modal(this.container).setDestroyOnFinish(true);
	                    e.newInstance = true;
	                    newInstance.fromEvent(e).then(function () {
	                        newInstance.registerEvents(newInstance.getModalContainer());
	                    });
	                    return false;
	                }
	                if (hasTarget) {
	                    e.stopImmediatePropagation();
	                    e.preventDefault();
	                }
	            }
	
	            if (!hasTarget) {
	                return false;
	            }
	
	            var modalContainerClasses = this.modalContainer ? this.modalContainer.classList : [];
	
	            // lazy create modal container
	            if (!this.modalContainer) {
	                this.modalContainer = global.document.createElement('div');
	                this.modalContainer.className = CLS_MODAL_CONTAINER + ' ' + this.options.containerClassNames + ' ' + CLS_OPEN;
	                var closeModalFunction = function closeModalFunction(ce) {
	                    if (self.loading) {
	                        return false;
	                    }
	                    if (_utilUtil2['default'].isPartOfNode(ce.target, self.currentOpen)) {
	                        if (!ce.target.hasAttribute(ATTR_CLOSE)) {
	                            return false;
	                        }
	                    }
	                    self.close(ce);
	                };
	
	                this.modalContainer.addEventListener(_utilSettings2['default'].getTabEvent(), closeModalFunction, false);
	
	                modalContainerClasses = this.modalContainer.classList;
	                this.container.appendChild(this.modalContainer);
	            } else {
	                modalContainerClasses.add(CLS_OPEN);
	            }
	
	            var loader = undefined,
	                doc = global.document,
	                toggleLoader = function toggleLoader(show) {
	                if (show) {
	                    loader = doc.createElement('div');
	                    loader.className = CLS_LOADER_CONTAINER;
	                    var loaderLoader = doc.createElement('div');
	                    loaderLoader.className = CLS_LOADER;
	                    loader.appendChild(loaderLoader);
	                    self.modalContainer.appendChild(loader);
	                } else {
	                    loader.parentNode.removeChild(loader);
	                }
	            };
	
	            this.handleScrollbar();
	
	            modalContainerClasses.add(CLS_CONTAINER_CURRENT);
	            modalContainerClasses.add('loading');
	            this.loading = true;
	            toggleLoader(true);
	            var async = widget ? widget.getAsync() : null;
	            if (_Widget2['default'].isWidget(widget) && async) {
	                future = async.then(function (r) {
	                    var result;
	                    if (r instanceof HTMLElement || r instanceof DocumentFragment) {
	                        result = r;
	                    } else {
	                        // Create container Element:
	                        var element = doc.createElement('div');
	                        element.className = self.options.classNames;
	                        element.innerHTML = r;
	                        element.id = _utilUtil2['default'].guid();
	                        result = element;
	                    }
	                    widget.finalContent = result;
	                    _utilEvent2['default'].dispatchAndFire(target, EVENT_MODAL_ASYNC_TARGET_LOADED);
	                    return result;
	                });
	            } else {
	                var el = targetContent instanceof HTMLElement || targetContent instanceof DocumentFragment ? targetContent : doc.getElementById(targetContent);
	                if (el) {
	                    future = new _Promise(function (resolve) {
	                        resolve(el);
	                    });
	                } else {
	                    throw 'Could not found given modal element (content) with ID: ' + targetContent;
	                }
	            }
	
	            _utilEvent2['default'].dispatchAndFire(target, EVENT_MODAL_INIT);
	
	            return future.then(function (thisEl) {
	                thisEl.hfWidgetInstance = self;
	                self.modalContainer.appendChild(thisEl);
	                modalContainerClasses.remove('loading');
	                self.loading = false;
	                toggleLoader(false);
	
	                self.open(thisEl, true, e);
	
	                return thisEl;
	            });
	        }
	
	        /**
	         * Open's an already rendered modal
	         * @param {HTMLElement} modal
	         * @param {Boolean} [internal], set to true to prevent container management
	         * @param {Boolean} [maybeEvent], optional event-object that triggered open
	         */
	    }, {
	        key: 'open',
	        value: function open(modal, internal, maybeEvent) {
	
	            if (!internal) {
	                this.modalContainer.classList.add('open');
	                this.handleScrollbar();
	            }
	            this.switchModals(modal, this.currentOpen);
	
	            _utilEvent2['default'].dispatch(modal, EVENT_MODAL_OPENED).withOriginal(maybeEvent).fire();
	        }
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents(delegate) {
	            var delegateContainer = delegate || this.container,
	                self = this;
	
	            // register modal instance so we can detect multiple registrars
	            delegateContainer.flexModalInstance = self;
	            self.eventFunction = function () {
	                self.createWidget.apply(self, arguments);
	            };
	            delegateContainer.addEventListener(_utilSettings2['default'].getTabEvent(), self.eventFunction, false);
	
	            self.eventContainer = delegateContainer;
	            return self;
	        }
	
	        /**
	         * Creates a new Dialog Instance either directly from HTML Element or a Widget instance
	         * @param {HTMLElement|Widget} widget instance or html element
	         * @returns {Promise}
	         */
	    }, {
	        key: 'fromWidget',
	        value: function fromWidget(widget) {
	            return this.createWidget(widget);
	        }
	
	        /**
	         * Creates a Widget from event
	         * @param e
	         * @returns {Promise}
	         */
	    }, {
	        key: 'fromEvent',
	        value: function fromEvent(e) {
	            return this.createWidget(e);
	        }
	    }, {
	        key: 'setDestroyOnFinish',
	        value: function setDestroyOnFinish(v) {
	            this.destroyOnFinish = v;
	            return this;
	        }
	
	        /**
	         * Destroy this widget instance, cleans empty DOM nodes
	         * Will use fast MutationObserver if available, otherwise falls back to DOMNodeRemoved event
	         */
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            var self = this,
	                modalContainer = this.modalContainer;
	            var isEmptyContainer = modalContainer.childNodes.length === 0;
	            // Remove event listener on destroy, do not remove DOM node
	            if (self.eventContainer) {
	                self.eventContainer.removeEventListener(_utilSettings2['default'].getTabEvent(), self.eventFunction, true);
	            }
	
	            if (isEmptyContainer) {
	                if (modalContainer.parentNode) {
	                    modalContainer.parentNode.removeChild(modalContainer);
	                }
	            }
	            if (global.MutationObserver) {
	                var observer = new MutationObserver(function (mutations) {
	                    mutations.forEach(function () {
	                        if (isEmptyContainer) {
	                            modalContainer.parentNode.removeChild(modalContainer);
	                            observer.disconnect();
	                        }
	                    });
	                });
	                observer.observe(modalContainer, { childList: true });
	            } else {
	                modalContainer.addEventListener('DOMNodeRemoved', function (e) {
	                    if (e.target !== modalContainer && modalContainer.childNodes.length - 1 === 0) {
	                        modalContainer.parentNode.removeChild(modalContainer);
	                    }
	                });
	            }
	        }
	    }]);
	
	    return Modal;
	})();
	
	exports['default'] = Modal;
	Modal._modalInstances = [];
	
	// Global keydown listener for modal
	global.addEventListener('keydown', function (e) {
	    if (e.keyCode === KEY_ESC) {
	        var lastModal = Modal._modalInstances[Modal._modalInstances.length - 1];
	        if (lastModal) {
	            _Widget2['default'].findWidget(lastModal).close(e);
	        }
	    }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFLUSxlQUFlOzs7O3lCQUNsQixZQUFZOzs7O3dCQUNiLFdBQVc7Ozs7c0JBQ1QsUUFBUTs7OztBQUUzQixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUNyRCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRW5CLElBQU0sZUFBZSxHQUFHLG1CQUFtQixDQUFDO0FBQzVDLElBQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQ3RDLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQzs7O0FBRy9CLElBQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDOUIsSUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUM7QUFDMUMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQ3BDLElBQU0sbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7QUFDOUMsSUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7QUFDdEMsSUFBTSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQztBQUNoRCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7Ozs7Ozs7O0FBUXJCLElBQU0sa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7Ozs7OztBQUtsRCxJQUFNLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDOzs7Ozs7QUFLOUQsSUFBTSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQzs7Ozs7OztBQU1sRCxJ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QUczQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0FBQzVDLFFBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7QUFDdkIsWUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxZQUFJLFNBQVMsRUFBRTtBQUNYLGdDQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiFcbiAqIEZsZXhDc3MuTW9kYWxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKmdsb2JhbCBLZXlib2FyZEV2ZW50Ki9cblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJ3V0aWwvU2V0dGluZ3MnO1xuaW1wb3J0IEV2ZW50IGZyb20gJ3V0aWwvRXZlbnQnO1xuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnV2lkZ2V0JztcblxuY29uc3QgSFRNTF9FTEVNRU5UID0gZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbmNvbnN0IEtFWV9FU0MgPSAyNztcbi8qIEF0dHJpYnV0ZSBOYW1lcyAqL1xuY29uc3QgQVRUUl9DUkVBVEVfTkVXID0gJ2RhdGEtbmV3LWluc3RhbmNlJztcbmNvbnN0IEFUVFJfQ0xPU0UgPSAnZGF0YS1jbG9zZS1tb2RhbCc7XG5jb25zdCBBVFRSX05BTUUgPSAnZGF0YS1tb2RhbCc7XG5cbi8qIENsYXNzIG5hbWVzICovXG5jb25zdCBDTFNfQ09OVEFJTkVSX0NVUlJFTlQgPSAnZnJvbnQnO1xuY29uc3QgQ0xTX09QRU4gPSAnb3Blbic7XG5jb25zdCBDTFNfQ1VSUkVOVCA9ICdjdXJyZW50JztcbmNvbnN0IENMU19QQVJUX09GX1NUQUNLID0gJ3BhcnQtb2Ytc3RhY2snO1xuY29uc3QgQ0xTX01PREFMX09QRU4gPSAnbW9kYWwtb3Blbic7XG5jb25zdCBDTFNfTU9EQUxfQ09OVEFJTkVSID0gJ21vZGFsLWNvbnRhaW5lcic7XG5jb25zdCBDTFNfQU5JTV9FTkQgPSAnbW9kYWwtYW5pbS1lbmQnO1xuY29uc3QgQ0xTX0xPQURFUl9DT05UQUlORVIgPSAnbG9hZGVyLWNvbnRhaW5lcic7XG5jb25zdCBDTFNfTE9BREVSID0gJ2xvYWRlcic7XG5cbi8qIEV2ZW50cyAqL1xuXG4vKipcbiAqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX0NMT1NFRCA9ICdmbGV4Y3NzLm1vZGFsLmNsb3NlZCc7XG4vKipcbiAqIEV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgYSBtb2RhbCBpcyBjbG9zZWQsIGNhbmNlbGFibGVcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9NT0RBTF9CRUZPUkVfQ0xPU0VEID0gJ2ZsZXhjc3MubW9kYWwuYmVmb3JlQ2xvc2UnO1xuLyoqXG4gKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiBhIG1vZGFsIGlzIG9wZW5lZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX09QRU5FRCA9ICdmbGV4Y3NzLm1vZGFsLm9wZW5lZCc7XG5cbi8qKlxuICogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gbW9kYWwgaXMgaW5pdGlsaXplZCwgY2FsbGVkIG9uIHRhcmdldFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX01PREFMX0lOSVQgPSAnZmxleGNzcy5tb2RhbC5pbml0JztcblxuLyoqXG4gKiBUcmlnZ2VyZWQgd2hlbiB0aGUgY29udGVudCBvZiBhbiBhc3luYyBtb2RhbCBvbiBhIHRhcmdldCBpcyBsb2FkZWQsIGNhbGxlZCBvbiB0YXJnZXRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9NT0RBTF9BU1lOQ19UQVJHRVRfTE9BREVEID0gJ2ZsZXhjc3MubW9kYWwuYXN5bmNUYXJnZXRMb2FkZWQnO1xuXG4vKipcbiAqIEEgTW9kYWwgSW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHRcbmNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihEZWxlZ2F0ZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50LCBjb250YWluZXIgPSBEZWxlZ2F0ZUNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID9cbiAgICAgICAgICAgIERlbGVnYXRlQ29udGFpbmVyIDogZG9jLmdldEVsZW1lbnRCeUlkKERlbGVnYXRlQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBJbnN0YW5jZSB2YXJzOlxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmb3VuZCBjb250YWluZXIgZWxlbWVudCBieSBnaXZlbiBJRC9FbGVtZW50OiAnICsgRGVsZWdhdGVDb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVuID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBPcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiAnbW9kYWwnLFxuICAgICAgICAgICAgY2xvc2VPbkVzY2FwZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlT25CYWNrZ3JvdW5kQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBkZXN0cm95T25GaW5pc2g6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWVzOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBDb250YWluZXIgd2hlcmUgZXZlbnRzIGFyZSBkZWxlZ2F0ZWRcbiAgICAgICAgdGhpcy5ldmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRGdW5jdGlvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kYXRhTWFpblBhZ2VDb250YWluZXIgPSBnbG9iYWwuZG9jdW1lbnQuYm9keTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXIgPSBudWxsO1xuXG4gICAgICAgIC8vIERlc3Ryb3kgZnVsbCBtb2RhbCBpbnN0YW5jZSB3aGVuIG5vIGRpYWxvZ3MgYXJlIGJpbmQgdG8/XG4gICAgICAgIC8vIE90aGVyd2lzZSBjb250YWluZXIgaXMgcmVjeWNsZWRcbiAgICAgICAgdGhpcy5kZXN0cm95T25GaW5pc2ggPSB0aGlzLm9wdGlvbnMuZGVzdHJveU9uRmluaXNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhpcyBtb2RhbCBmcm9tIGdsb2JhbCBzdGFja1xuICAgICAqIFdpbGwgaGFuZGxlIGZpeGluZyBtYWluIGh0bWwgZWxlbWVudCB0b29cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSBuXG4gICAgICovXG4gICAgX3JlbW92ZU1vZGFsRnJvbVN0YWNrKG4pIHtcbiAgICAgICAgdmFyIHQgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXMuaW5kZXhPZihuKSwgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0ID4gLTEpIHtcbiAgICAgICAgICAgIE1vZGFsLl9tb2RhbEluc3RhbmNlcy5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICBpZiAoTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc3RvcmUgc2Nyb2xsUG9zaXRpb246XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5maXhlZENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFNYWluUGFnZUNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBzZWxmLmN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzZWxmLmN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5ncy5nZXQoKS5zY3JvbGxiYXJVcGRhdGVOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgSFRNTF9FTEVNRU5ULmNsYXNzTGlzdC5yZW1vdmUoQ0xTX01PREFMX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1vZGFsIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIGFsbCBgc3RhY2tlZGAgbW9kYWxzIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldE1vZGFsQ29udGFpbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGN1cnJlbnQgb3BlbiBtb2RhbCBvZiB0aGlzIHN0YWNrXG4gICAgICogQHBhcmFtcyBbZV0sIG9wdGlvbmFsIGV2ZW50XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY2xvc2UoZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHNlbGYuY3VycmVudE9wZW4gPyBVdGlsLmFwcGx5T3B0aW9uc0Zyb21FbGVtZW50KFxuICAgICAgICAgICAgc2VsZi5jdXJyZW50T3BlbiwgVXRpbC5jb3B5KHNlbGYub3B0aW9ucykpIDogc2VsZi5vcHRpb25zO1xuXG4gICAgICAgIC8vIGNsb3NlIG9ubHkgb24ga2V5Ym9hcmQgaWYgaW5zdGFuY2Ugc2hvdWxkXG4gICAgICAgIGlmICghb3B0aW9ucy5jbG9zZU9uRXNjYXBlICYmIGUgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBvbmx5IG9uIGJhY2tncm91bmQgaWYgaW5zdGFuY2Ugc2hvdWxkXG4gICAgICAgIGlmICghb3B0aW9ucy5jbG9zZU9uQmFja2dyb3VuZENsaWNrICYmIGUgJiZcbiAgICAgICAgICAgIGUudHlwZSA9PT0gU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSAmJiAhZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfQ0xPU0UpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhbiBpbnN0YW5jZSBpcyBjdXJyZW50bHkgbG9hZGluZywgcHJldmVudCBmcm9tIGNsb3NpbmdcbiAgICAgICAgaWYgKHNlbGYubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmN1cnJlbnRPcGVuKSB7XG4gICAgICAgICAgICAvLyBkaXNwYXRjaCBiZWZvcmVDbG9zZSBldmVudCwgaWYgcHJldmVudGVkIHByZXZlbnQgbW9kYWwgZnJvbSBjbG9zaW5nXG4gICAgICAgICAgICB2YXIgZXYgPSBFdmVudC5kaXNwYXRjaEFuZEZpcmUoc2VsZi5jdXJyZW50T3BlbiwgRVZFTlRfTU9EQUxfQkVGT1JFX0NMT1NFRCk7XG4gICAgICAgICAgICBpZiAoZXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZmluaXNoU3RhdGUoc2VsZi5jdXJyZW50T3Blbik7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBwcmV2aW91cyBtb2RhbFxuICAgICAgICAgICAgaWYgKHNlbGYuY3VycmVudE9wZW4ucHJldk1vZGFsKSB7XG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoIHRvIHRoZSBuZXh0IG1vZGFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuc3dpdGNoTW9kYWxzKHNlbGYuY3VycmVudE9wZW4ucHJldk1vZGFsLFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRPcGVuLnByZXZNb2RhbC5wcmV2TW9kYWwgfHwgbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbmFsbHkgdHJpZ2dlciBjbG9zZWQgZXZlbnRcbiAgICAgICAgICAgIEV2ZW50LmRpc3BhdGNoKHNlbGYuY3VycmVudE9wZW4sIEVWRU5UX01PREFMX0NMT1NFRCkud2l0aE9yaWdpbmFsKGUpLmZpcmUoKTtcblxuICAgICAgICB9XG4gICAgICAgIHNlbGYuX3JlbW92ZU1vZGFsRnJvbVN0YWNrKHNlbGYuY3VycmVudE9wZW4pO1xuXG4gICAgICAgIC8vIEZ1bGwgc3RhY2sgY2xvc2VkOlxuICAgICAgICBzZWxmLmN1cnJlbnRPcGVuID0gbnVsbDtcbiAgICAgICAgaWYgKHNlbGYubW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIHNldHVwIG5leHQgb3BlblxuICAgICAgICAgICAgdmFyIGxhc3RDb250YWluZXIgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXNbTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdCA9IHNlbGYubW9kYWxDb250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDTFNfQ09OVEFJTkVSX0NVUlJFTlQpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShDTFNfT1BFTik7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgY2xhc3NlcyBmcm9tIGNoaWxkLW5vZGVzXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYubW9kYWxDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gc2VsZi5tb2RhbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLCBjbCA9IG5vZGUuY2xhc3NMaXN0O1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhcHBsaWVkIHN0eWxlc1xuICAgICAgICAgICAgICAgIHNlbGYuX2ZpbmlzaFN0YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNsLnJlbW92ZShDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgY2wucmVtb3ZlKENMU19QQVJUX09GX1NUQUNLKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgbGFzdENvbnRhaW5lci5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLmRlc3Ryb3lPbkZpbmlzaCkge1xuICAgICAgICAgICAgc2VsZi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIGEgdGFyZ2V0IHdoZW4gbmV3bHkgaW5pdGlsaXplc1xuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5pc2hTdGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0FOSU1fRU5EKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGNhbGxlZCB3aGVuIGEgTW9kYWwgaGFzIGZpbmlzaGVkIGFuIGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHBhcmFtIHNlbGZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9maW5pc2hBbmltKGUsIHNlbGYpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChDTFNfQU5JTV9FTkQpO1xuICAgICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgc2VsZiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJpbmdzIHRoZSBnaXZlbiBtb2RhbCB0byBmcm9udFxuICAgICAqIEBwYXJhbSBjb1xuICAgICAqIEBwYXJhbSBsYXN0XG4gICAgICovXG4gICAgc3dpdGNoTW9kYWxzKGNvLCBsYXN0KSB7XG4gICAgICAgIGNvLnByZXZNb2RhbCA9IGxhc3Q7XG4gICAgICAgIE1vZGFsLl9tb2RhbEluc3RhbmNlcy5wdXNoKGNvKTtcblxuICAgICAgICBpZiAobGFzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmluaXNoU3RhdGUobGFzdCk7XG4gICAgICAgICAgICBVdGlsLnByZWZpeGVkQW5pbWF0ZUV2ZW50KGxhc3QsICdBbmltYXRpb25FbmQnLCB0aGlzLl9maW5pc2hBbmltKTtcbiAgICAgICAgICAgIGxhc3QuY2xhc3NMaXN0LmFkZChDTFNfUEFSVF9PRl9TVEFDSyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IG5ldyBjdXJyZW50T3BlblxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVuID0gY287XG5cbiAgICAgICAgLy8gYnJpbmcgY3VycmVudCBjb250YWluZXIgdG8gdGhlIGZyb250XG4gICAgICAgIHZhciBpbnN0YW5jZXMgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXM7XG5cbiAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBpbnN0YW5jZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAgIGluc3RhbmNlc1ttXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ0xTX0NPTlRBSU5FUl9DVVJSRU5UKTtcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvbnMgaWYgYW5pbWF0aW9ucyBoYXMgYmVlbiBjb21wbGV0ZWQsIGZpeGVzIHZhcmlvdXMgYnVnczpcbiAgICAgICAgLy8gLSBmaXhlcyBuZXN0ZWQgc2Nyb2xsaW5nIGVsZW1lbnQgaXNzdWUgaW4gaU9TIEJyb3dzZXJzIC8gTW9iaWxlLVNhZmFyaVxuICAgICAgICBVdGlsLnByZWZpeGVkQW5pbWF0ZUV2ZW50KGNvLCAnQW5pbWF0aW9uRW5kJywgdGhpcy5fZmluaXNoQW5pbSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGFsQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5tb2RhbENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLCBpc0N1cnJlbnQgPSBuLmNsYXNzTGlzdC5jb250YWlucyhDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICBpZiAobiA9PT0gY28pIHtcbiAgICAgICAgICAgICAgICBjby5jbGFzc0xpc3QuYWRkKENMU19DVVJSRU5UKTtcbiAgICAgICAgICAgICAgICBjby5jbGFzc0xpc3QucmVtb3ZlKENMU19QQVJUX09GX1NUQUNLKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5pc2hTdGF0ZShjbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZShDTFNfQ1VSUkVOVCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVNb2RhbEZyb21TdGFjayhuKTtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnQuZGlzcGF0Y2hBbmRGaXJlKG4sIEVWRU5UX01PREFMX0NMT1NFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChNb2RhbC5fbW9kYWxJbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBzYXZlIGN1cnJlbnQgc2Nyb2xsVG9wOlxuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCwgYztcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZml4ZWRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSBnbG9iYWwucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYyA9IHNlbGYuZGF0YU1haW5QYWdlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMgY2F1c2VzIHJlZmxvdy9wYWludCBhbmQgc2hvdWxkIGJlIG9wdGltaXplZFxuICAgICAgICAgICAgLy8gQXQgbGVzdCB3ZSB3cml0ZSBpbiBhIGJhdGNoIGxhdGVyXG4gICAgICAgICAgICBTZXR0aW5ncy5nZXQoKS5zY3JvbGxiYXJVcGRhdGVOb2Rlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuOiBuLCBwYWRkaW5nOiBwYXJzZUludChnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShuKS5wYWRkaW5nUmlnaHQpICtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3MuZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIGQubi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBkLnBhZGRpbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZml4ZWRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICBjLnN0eWxlLmNzc1RleHQgKz0gYHRvcDoke3Njcm9sbFRvcCAqIC0xICsgJ3B4J307cG9zaXRpb246Zml4ZWRgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEhUTUxfRUxFTUVOVC5jbGFzc0xpc3QuYWRkKENMU19NT0RBTF9PUEVOKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNb2RhbCBhbmQgb3BlbnMgaXQgKGxhdGVyKVxuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHJldHVybnMge1Byb21pc2V8Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjcmVhdGVXaWRnZXQoZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGFub3RoZXIgbW9kYWwgaGFzIHJlZ2lzdGVyZWQgZXZlbnRzIG9uIHRoaXMgZG9tIHBhdGg6XG4gICAgICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgZm91bmRJbnN0YW5jZSA9IFV0aWwucGFyZW50c1VudGlsKGUudGFyZ2V0LCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlICYmIG5vZGUuZmxleE1vZGFsSW5zdGFuY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gaWYgYW5vdGhlciBpbnN0YW5jZSBoYXMgYmVlbiBmb3VuZCwgYWJvcnRcbiAgICAgICAgICAgIGlmIChmb3VuZEluc3RhbmNlICE9PSB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0Q29udGVudCwgZnV0dXJlLCB3aWRnZXQsIHRhcmdldCwgaGFzVGFyZ2V0ID0gdHJ1ZSxcbiAgICAgICAgICAgIGlzSHRtbEVsZW1lbnQgPSBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQsIGlzV2lkZ2V0ID0gV2lkZ2V0LmlzV2lkZ2V0KGUpO1xuICAgICAgICBpZiAoaXNIdG1sRWxlbWVudCB8fCBpc1dpZGdldCkge1xuICAgICAgICAgICAgaWYgKGlzSHRtbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb250ZW50ID0gZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0ID0gZTtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb250ZW50ID0gd2lkZ2V0LmVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmaW5kIHRhcmdldCwgZGlkIHlvdSBwYXNzIGFuIGV2ZW50LCBhIEhUTUxFbGVtZW50IG9yIGFuIFdpZGdldD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFzVGFyZ2V0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgICAgICAgICAgdGFyZ2V0Q29udGVudCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgICAgICAgICAgIHdpZGdldCA9IFdpZGdldC5maW5kV2lkZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX0NSRUFURV9ORVcpICYmICFlLm5ld0luc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0luc3RhbmNlID0gbmV3IE1vZGFsKHRoaXMuY29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzdHJveU9uRmluaXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIGUubmV3SW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5ld0luc3RhbmNlLmZyb21FdmVudChlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5zdGFuY2UucmVnaXN0ZXJFdmVudHMobmV3SW5zdGFuY2UuZ2V0TW9kYWxDb250YWluZXIoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb2RhbENvbnRhaW5lckNsYXNzZXMgPSB0aGlzLm1vZGFsQ29udGFpbmVyID8gdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QgOiBbXTtcblxuICAgICAgICAvLyBsYXp5IGNyZWF0ZSBtb2RhbCBjb250YWluZXJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtDTFNfTU9EQUxfQ09OVEFJTkVSfSAke3RoaXMub3B0aW9ucy5jb250YWluZXJDbGFzc05hbWVzfSAke0NMU19PUEVOfWA7XG4gICAgICAgICAgICBjb25zdCBjbG9zZU1vZGFsRnVuY3Rpb24gPSBmdW5jdGlvbiAoY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuaXNQYXJ0T2ZOb2RlKGNlLnRhcmdldCwgc2VsZi5jdXJyZW50T3BlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfQ0xPU0UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZShjZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgY2xvc2VNb2RhbEZ1bmN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3NlcyA9IHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENvbnRhaW5lcik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3Nlcy5hZGQoQ0xTX09QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvYWRlciwgZG9jID0gZ2xvYmFsLmRvY3VtZW50LCB0b2dnbGVMb2FkZXIgPSBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9IENMU19MT0FERVJfQ09OVEFJTkVSO1xuICAgICAgICAgICAgICAgIHZhciBsb2FkZXJMb2FkZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyTG9hZGVyLmNsYXNzTmFtZSA9IENMU19MT0FERVI7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmFwcGVuZENoaWxkKGxvYWRlckxvYWRlcik7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgbW9kYWxDb250YWluZXJDbGFzc2VzLmFkZChDTFNfQ09OVEFJTkVSX0NVUlJFTlQpO1xuICAgICAgICBtb2RhbENvbnRhaW5lckNsYXNzZXMuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRvZ2dsZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdmFyIGFzeW5jID0gd2lkZ2V0ID8gd2lkZ2V0LmdldEFzeW5jKCkgOiBudWxsO1xuICAgICAgICBpZiAoV2lkZ2V0LmlzV2lkZ2V0KHdpZGdldCkgJiYgYXN5bmMpIHtcbiAgICAgICAgICAgIGZ1dHVyZSA9IGFzeW5jLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgciBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIEVsZW1lbnQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHNlbGYub3B0aW9ucy5jbGFzc05hbWVzO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHI7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBVdGlsLmd1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmZpbmFsQ29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBFdmVudC5kaXNwYXRjaEFuZEZpcmUodGFyZ2V0LCBFVkVOVF9NT0RBTF9BU1lOQ19UQVJHRVRfTE9BREVEKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0YXJnZXRDb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgICAgIHRhcmdldENvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50ID8gdGFyZ2V0Q29udGVudCA6IGRvYy5nZXRFbGVtZW50QnlJZCh0YXJnZXRDb250ZW50KTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGZ1dHVyZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IGZvdW5kIGdpdmVuIG1vZGFsIGVsZW1lbnQgKGNvbnRlbnQpIHdpdGggSUQ6ICcgKyB0YXJnZXRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnQuZGlzcGF0Y2hBbmRGaXJlKHRhcmdldCwgRVZFTlRfTU9EQUxfSU5JVCk7XG5cbiAgICAgICAgcmV0dXJuIGZ1dHVyZS50aGVuKCh0aGlzRWwpID0+IHtcbiAgICAgICAgICAgIHRoaXNFbC5oZldpZGdldEluc3RhbmNlID0gc2VsZjtcbiAgICAgICAgICAgIHNlbGYubW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpc0VsKTtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyQ2xhc3Nlcy5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgIHNlbGYubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdG9nZ2xlTG9hZGVyKGZhbHNlKTtcblxuICAgICAgICAgICAgc2VsZi5vcGVuKHRoaXNFbCwgdHJ1ZSwgZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzRWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4ncyBhbiBhbHJlYWR5IHJlbmRlcmVkIG1vZGFsXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnRlcm5hbF0sIHNldCB0byB0cnVlIHRvIHByZXZlbnQgY29udGFpbmVyIG1hbmFnZW1lbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttYXliZUV2ZW50XSwgb3B0aW9uYWwgZXZlbnQtb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIG9wZW5cbiAgICAgKi9cbiAgICBvcGVuKG1vZGFsLCBpbnRlcm5hbCwgbWF5YmVFdmVudCkge1xuXG5cbiAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbGJhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dpdGNoTW9kYWxzKG1vZGFsLCB0aGlzLmN1cnJlbnRPcGVuKTtcblxuICAgICAgICBFdmVudC5kaXNwYXRjaChtb2RhbCwgRVZFTlRfTU9EQUxfT1BFTkVEKS53aXRoT3JpZ2luYWwobWF5YmVFdmVudCkuZmlyZSgpO1xuICAgIH1cblxuXG4gICAgcmVnaXN0ZXJFdmVudHMoZGVsZWdhdGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlQ29udGFpbmVyID0gZGVsZWdhdGUgfHwgdGhpcy5jb250YWluZXIsIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIG1vZGFsIGluc3RhbmNlIHNvIHdlIGNhbiBkZXRlY3QgbXVsdGlwbGUgcmVnaXN0cmFyc1xuICAgICAgICBkZWxlZ2F0ZUNvbnRhaW5lci5mbGV4TW9kYWxJbnN0YW5jZSA9IHNlbGY7XG4gICAgICAgIHNlbGYuZXZlbnRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY3JlYXRlV2lkZ2V0LmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIGRlbGVnYXRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgc2VsZi5ldmVudEZ1bmN0aW9uLCBmYWxzZSk7XG5cbiAgICAgICAgc2VsZi5ldmVudENvbnRhaW5lciA9IGRlbGVnYXRlQ29udGFpbmVyO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgRGlhbG9nIEluc3RhbmNlIGVpdGhlciBkaXJlY3RseSBmcm9tIEhUTUwgRWxlbWVudCBvciBhIFdpZGdldCBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8V2lkZ2V0fSB3aWRnZXQgaW5zdGFuY2Ugb3IgaHRtbCBlbGVtZW50XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZnJvbVdpZGdldCh3aWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV2lkZ2V0KHdpZGdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFdpZGdldCBmcm9tIGV2ZW50XG4gICAgICogQHBhcmFtIGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBmcm9tRXZlbnQoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVXaWRnZXQoZSk7XG4gICAgfVxuXG4gICAgc2V0RGVzdHJveU9uRmluaXNoKHYpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95T25GaW5pc2ggPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoaXMgd2lkZ2V0IGluc3RhbmNlLCBjbGVhbnMgZW1wdHkgRE9NIG5vZGVzXG4gICAgICogV2lsbCB1c2UgZmFzdCBNdXRhdGlvbk9ic2VydmVyIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGZhbGxzIGJhY2sgdG8gRE9NTm9kZVJlbW92ZWQgZXZlbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsIG1vZGFsQ29udGFpbmVyID0gdGhpcy5tb2RhbENvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgaXNFbXB0eUNvbnRhaW5lciA9IG1vZGFsQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwO1xuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gZGVzdHJveSwgZG8gbm90IHJlbW92ZSBET00gbm9kZVxuICAgICAgICBpZiAoc2VsZi5ldmVudENvbnRhaW5lcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIHNlbGYuZXZlbnRGdW5jdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbXB0eUNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1vZGFsQ29udGFpbmVyLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlUmVtb3ZlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBtb2RhbENvbnRhaW5lciAmJiAobW9kYWxDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBTdGF0aWMgdmFyaWFibGUgdGhhdCBrZWVwcyB0cmFjayBvZiBhbGwgb3BlbiBtb2RhbHNcbk1vZGFsLl9tb2RhbEluc3RhbmNlcyA9IFtdO1xuXG4vLyBHbG9iYWwga2V5ZG93biBsaXN0ZW5lciBmb3IgbW9kYWxcbmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlfRVNDKSB7XG4gICAgICAgIHZhciBsYXN0TW9kYWwgPSBNb2RhbC5fbW9kYWxJbnN0YW5jZXNbTW9kYWwuX21vZGFsSW5zdGFuY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdE1vZGFsKSB7XG4gICAgICAgICAgICBXaWRnZXQuZmluZFdpZGdldChsYXN0TW9kYWwpLmNsb3NlKGUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Widget
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/**
	 * A Widget provides async content on a specific target (e.g. a modal link)
	 */
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var Widget = (function () {
	
	  /**
	   * Creates a new Widget
	   * @param [element], optional define the content of widget
	   */
	
	  function Widget(element) {
	    var _this = this;
	
	    _classCallCheck(this, Widget);
	
	    /**
	     *
	     * @type {Promise}
	     */
	    this.asyncContent = null;
	
	    /**
	     * @type {boolean}
	     */
	    this._isWidget = true;
	
	    if (element) {
	      /**
	       * @type {HTMLElement}
	       */
	      this.element = element instanceof HTMLElement ? element : global.document.getElementById(element);
	      if (this.element) {
	        this.element.hfWidgetInstance = this;
	        this.setAsync((function () {
	          return new _Promise((function (s) {
	            s(_this.element);
	          }).bind(_this));
	        }).bind(this));
	      } else {
	        throw 'Could not found element with ID: ' + element;
	      }
	    }
	    /**
	     * The final resulted content that a widget did create (e.g. a modal container)
	     * @type {HTMLElement}
	     */
	    this.finalContent = null;
	  }
	
	  /**
	   *
	   * @returns {Promise}
	   */
	
	  _createClass(Widget, [{
	    key: 'getAsync',
	    value: function getAsync() {
	      return this.asyncContent();
	    }
	
	    /**
	     * @param {Function.<Promise>} async
	     * @returns {Widget}
	     */
	  }, {
	    key: 'setAsync',
	    value: function setAsync(async) {
	      this.asyncContent = async;
	      return this;
	    }
	
	    /**
	     * @returns {HTMLElement}
	     */
	  }, {
	    key: 'getFinalContent',
	    value: function getFinalContent() {
	      return this.finalContent;
	    }
	
	    /**
	     * @param {HTMLElement} element
	     * @returns {Widget}
	     */
	  }, {
	    key: 'setElement',
	    value: function setElement(element) {
	      this.element = element;
	      return this;
	    }
	
	    /**
	     * Destroys the generated content of this widget
	     * @returns {boolean}
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	
	      if (this.finalContent && this.finalContent.parentNode) {
	        this.finalContent.parentNode.removeChild(this.finalContent);
	        return true;
	      }
	
	      delete this.element;
	      delete this.asyncContent;
	      delete this.finalContent;
	
	      return false;
	    }
	
	    /**
	     * Will find a widget on an Element
	     * @param {HTMLElement} element
	     * @returns {Widget|undefined}
	     */
	  }], [{
	    key: 'findWidget',
	    value: function findWidget(element) {
	      return element ? element.hfWidgetInstance : undefined;
	    }
	
	    /**
	     * Checks if a given object is an instance
	     * @param {Object} self
	     * @returns {boolean}
	     */
	  }, {
	    key: 'isWidget',
	    value: function isWidget(self) {
	      return self instanceof Widget || typeof self === 'object' && self.hasOwnProperty('_isWidget');
	    }
	  }]);
	
	  return Widget;
	})();
	
	exports['default'] = Widget;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBTVAsTUFBTTs7Ozs7OztBQU1HLFdBTlQsTUFBTSxDQU1JLE9BQU8sRUFBRTs7OzBCQU5uQixNQUFNOzs7Ozs7QUFZSixRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7Ozs7QUFLekIsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O0FBRXRCLFFBQUksT0FBTyxFQUFFOzs7O0FBSVQsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLFlBQVksV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRyxVQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxZQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUNyQyxZQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBTTtBQUNqQixpQkFBTyxhQUFZLENBQUMsVUFBQyxDQUFDLEVBQUs7QUFDdkIsYUFBQyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7V0FDbkIsQ0FBQSxDQUFFLElBQUksT0FBTSxDQUFDLENBQUM7U0FDbEIsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ2xCLE1BQU07QUFDSCxjQUFNLG1DQUFtQyxHQUFHLE9BQU8sQ0FBQztPQUN2RDtLQUNKOzs7OztBQUtELFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0dBQzVCOzs7Ozs7O2VBeENDLE1BQU07O1dBOENBLG9CQUFHO0FBQ1AsYUFBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7Ozs7Ozs7O1dBTU8sa0JBQUMsS0FBSyxFQUFFO0FBQ1osVUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDMUIsYUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztXQUtjLDJCQUFHO0FBQ2QsYUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzVCOzs7Ozs7OztXQU1TLG9CQUFDLE9BQU8sRUFBRTtBQUNoQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixhQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztXQU1NLG1CQUFHOztBQUVOLFVBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUNuRCxZQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVELGVBQU8sSUFBSSxDQUFDO09BQ2Y7O0FBRUQsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3BCLGFBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN6QixhQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7O0FBRXpCLGFBQU8sS0FBSyxDQUFDO0tBQ2hCOzs7Ozs7Ozs7V0FPZ0Isb0JBQUMsT0FBTyxFQUFFO0FBQ3ZCLGFBQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7S0FDekQ7Ozs7Ozs7OztXQU9jLGtCQUFDLElBQUksRUFBRTtBQUNsQixhQUFPLElBQUksWUFBWSxNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakc7OztTQTdHQyxNQUFNOzs7cUJBQU4sTUFBTSIsImZpbGUiOiIvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9ub2RlX21vZHVsZXMvZXNsaW50LWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYm93bGluZ3gvUHJvamVrdGUvZmxleGNzcy9zcmMvbWFpbi9XaWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLldpZGdldFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgV2lkZ2V0IHByb3ZpZGVzIGFzeW5jIGNvbnRlbnQgb24gYSBzcGVjaWZpYyB0YXJnZXQgKGUuZy4gYSBtb2RhbCBsaW5rKVxuICovXG5leHBvcnQgZGVmYXVsdFxuY2xhc3MgV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgV2lkZ2V0XG4gICAgICogQHBhcmFtIFtlbGVtZW50XSwgb3B0aW9uYWwgZGVmaW5lIHRoZSBjb250ZW50IG9mIHdpZGdldFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFzeW5jQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNXaWRnZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWxlbWVudCA6IGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaGZXaWRnZXRJbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBc3luYygoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IGZvdW5kIGVsZW1lbnQgd2l0aCBJRDogJyArIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaW5hbCByZXN1bHRlZCBjb250ZW50IHRoYXQgYSB3aWRnZXQgZGlkIGNyZWF0ZSAoZS5nLiBhIG1vZGFsIGNvbnRhaW5lcilcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maW5hbENvbnRlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0QXN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jQ29udGVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb24uPFByb21pc2U+fSBhc3luY1xuICAgICAqIEByZXR1cm5zIHtXaWRnZXR9XG4gICAgICovXG4gICAgc2V0QXN5bmMoYXN5bmMpIHtcbiAgICAgICAgdGhpcy5hc3luY0NvbnRlbnQgPSBhc3luYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldEZpbmFsQ29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluYWxDb250ZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7V2lkZ2V0fVxuICAgICAqL1xuICAgIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGUgZ2VuZXJhdGVkIGNvbnRlbnQgb2YgdGhpcyB3aWRnZXRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmZpbmFsQ29udGVudCAmJiB0aGlzLmZpbmFsQ29udGVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsQ29udGVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmluYWxDb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudDtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXN5bmNDb250ZW50O1xuICAgICAgICBkZWxldGUgdGhpcy5maW5hbENvbnRlbnQ7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpbGwgZmluZCBhIHdpZGdldCBvbiBhbiBFbGVtZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtXaWRnZXR8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kV2lkZ2V0KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmhmV2lkZ2V0SW5zdGFuY2UgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGZcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNXaWRnZXQoc2VsZikge1xuICAgICAgICByZXR1cm4gc2VsZiBpbnN0YW5jZW9mIFdpZGdldCB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5oYXNPd25Qcm9wZXJ0eSgnX2lzV2lkZ2V0Jyk7XG4gICAgfVxufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Toggleable
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	/**
	 * Event that is fired when a tab is closed
	 * @type {string}
	 */
	
	var EVENT_TAB_CLOSED = 'flexcss.tab.closed';
	
	exports.EVENT_TAB_CLOSED = EVENT_TAB_CLOSED;
	/**
	 * Event that is fired when a tab has been opened
	 * @type {string}
	 */
	var EVENT_TAB_OPENED = 'flexcss.tab.opened';
	exports.EVENT_TAB_OPENED = EVENT_TAB_OPENED;
	/**
	 * @type {string}
	 */
	var ATTR_NAME = 'data-toggle';
	/**
	 * @type {string}
	 */
	var ACTIVE_CLASS = 'active';
	/**
	 * @type {string}
	 */
	var LOADING_CLASS = 'loading';
	
	/**
	 * @type {string}
	 */
	var ATTR_TOGGLE_LIST = 'data-toggle-list';
	
	/**
	 * Creates a toggleable element, either for tabs or a single toggle
	 */
	
	var Toggleable = (function () {
	    function Toggleable(ContainerId) {
	        _classCallCheck(this, Toggleable);
	
	        var doc = global.document;
	
	        this.container = ContainerId instanceof HTMLElement ? ContainerId : doc.getElementById(ContainerId);
	
	        this.loading = false;
	
	        if (!this.container) {
	            throw 'Toggleable container with id "' + ContainerId + '" not found';
	        }
	    }
	
	    /**
	     * Listener
	     * @param {Event} e
	     * @private
	     */
	
	    _createClass(Toggleable, [{
	        key: '_listener',
	        value: function _listener(e) {
	            var target = e.target,
	                parent = target.parentNode,
	                doc = global.document;
	
	            // support target child element to clicked
	            if (!target.hasAttribute(ATTR_NAME)) {
	                if (parent && parent.hasAttribute(ATTR_NAME)) {
	                    target = parent;
	                } else {
	                    return;
	                }
	            }
	
	            if (!target.hasAttribute(ATTR_NAME)) {
	                return;
	            }
	
	            var refId = target.getAttribute(ATTR_NAME),
	                ref = doc.getElementById(refId);
	
	            e.preventDefault();
	
	            if (this.loading) {
	                return;
	            }
	
	            this.toggleTarget(ref, target);
	        }
	
	        /**
	         * Registers Events for this instance
	         * @returns {Toggleable}
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents() {
	            this.container.addEventListener(_utilSettings2['default'].getTabEvent(), this._listener.bind(this));
	            return this;
	        }
	
	        /**
	         * Toggles given `ref`
	         * @param {HTMLElement} ref
	         * @param {HTMLElement} [target] optional target node
	         */
	    }, {
	        key: 'toggleTarget',
	        value: function toggleTarget(ref, target) {
	            var _this = this;
	
	            if (!target && !ref) {
	                return;
	            }
	            if (!target) {
	                target = document.querySelector('[' + ATTR_NAME + '="' + ref.id + '"]');
	            }
	
	            var maybeToggleNode,
	                future,
	                elClassList = target.classList,
	                parentClassList,
	                parent = target.parentNode,
	                doc = global.document;
	
	            future = new _Promise(function (resolve, failure) {
	                if (ref) {
	                    resolve(ref);
	                } else {
	                    var widget = _Widget2['default'].findWidget(target),
	                        async = widget ? widget.getAsync() : null;
	                    if (_Widget2['default'].isWidget(widget) && async) {
	                        future = async.then(function (r) {
	                            if (r instanceof HTMLElement) {
	                                var id = _utilUtil2['default'].guid();
	                                r.id = id;
	                                target.setAttribute(ATTR_NAME, id);
	                                resolve(r);
	                            } else {
	                                throw 'Dynamically creating toggle-content is not supported right now. ' + 'Return an HTMLElement instance';
	                            }
	                        });
	                    } else {
	                        failure('Target not given');
	                    }
	                }
	            });
	
	            if (parent) {
	                maybeToggleNode = _utilUtil2['default'].parentsUntil(target, function (node) {
	                    return node && node.hasAttribute && node.hasAttribute(ATTR_TOGGLE_LIST);
	                });
	
	                parentClassList = parent.classList;
	                // Abort if element is already active and if is part of a toggle list
	                if (maybeToggleNode) {
	                    if (!parentClassList.contains(ACTIVE_CLASS)) {
	                        parentClassList.toggle(ACTIVE_CLASS);
	                        parentClassList.add(LOADING_CLASS);
	                    } else {
	                        return;
	                    }
	                }
	
	                if (maybeToggleNode) {
	                    for (var i = 0; i < maybeToggleNode.children.length; i++) {
	                        var n = maybeToggleNode.children[i],
	                            targetRef = n.children[0];
	                        if (n !== parent) {
	                            n.classList.remove(ACTIVE_CLASS);
	                            if (targetRef) {
	                                var attr = targetRef.getAttribute(ATTR_NAME),
	                                    el = attr ? doc.getElementById(attr) : null;
	                                if (el) {
	                                    _utilEvent2['default'].dispatchAndFire(el, EVENT_TAB_CLOSED);
	                                    el.classList.remove(ACTIVE_CLASS);
	                                    targetRef.classList.remove(ACTIVE_CLASS);
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            if (elClassList) {
	                elClassList.toggle(ACTIVE_CLASS);
	                elClassList.add(LOADING_CLASS);
	            }
	            this.loading = true;
	            future.then((function (r) {
	                _utilEvent2['default'].dispatchAndFire(r, EVENT_TAB_OPENED);
	                Toggleable._handleLoaded(target);
	                r.classList.toggle(ACTIVE_CLASS);
	                this.loading = false;
	            }).bind(this))['catch'](function (reason) {
	                _this.loading = false;
	                Toggleable._handleLoaded(target);
	                console.warn(reason);
	            });
	        }
	
	        /**
	         * @param el
	         * @private
	         */
	    }], [{
	        key: '_handleLoaded',
	        value: function _handleLoaded(el) {
	            var parentClassList = el.parentNode.classList;
	            el.classList.remove(LOADING_CLASS);
	            if (parentClassList) {
	                parentClassList.remove(LOADING_CLASS);
	            }
	        }
	    }]);
	
	    return Toggleable;
	})();
	
	exports['default'] = Toggleable;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1RvZ2dsZWFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7NEJBRVEsZUFBZTs7OztzQkFDakIsUUFBUTs7Ozt3QkFDVixXQUFXOzs7O3lCQUNWLFlBQVk7Ozs7Ozs7OztBQU92QixJQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDOzs7Ozs7O0FBTTlDLElBQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7Ozs7O0FBSXJELElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQzs7OztBQUloQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7Ozs7QUFJOUIsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDOzs7OztBQUtoQyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDOzs7Ozs7SUFNdEMsVUFBVTtBQUNELGFBRFQsVUFBVSxDQUNBLFdBQVcsRUFBRTs4QkFEdkIsVUFBVTs7QUFHUixZQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOztBQUUxQixZQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsWUFBWSxXQUFXLEdBQUcsV0FBVyxHQUM3RCxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUVwQyxZQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsWUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsa0JBQU0sZ0NBQWdDLEdBQUcsV0FBVyxHQUFHLGFBQWEsQ0FBQztTQUN4RTtLQUNKOzs7Ozs7OztpQkFiQyxVQUFVOztlQW9CSCxtQkFBQyxDQUFDLEVBQUU7QUFDVCxnQkFBSSxNQUFNLEdBQUcsQ0FB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aEtDLFVBQVU7OztxQkFBVixVQUFVIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1RvZ2dsZWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLlRvZ2dsZWFibGVcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJ3V0aWwvU2V0dGluZ3MnO1xuaW1wb3J0IFdpZGdldCBmcm9tICdXaWRnZXQnO1xuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcbmltcG9ydCBFdmVudCBmcm9tICd1dGlsL0V2ZW50JztcblxuLyoqXG4gKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gYSB0YWIgaXMgY2xvc2VkXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5cbmV4cG9ydCBjb25zdCBFVkVOVF9UQUJfQ0xPU0VEID0gJ2ZsZXhjc3MudGFiLmNsb3NlZCc7XG5cbi8qKlxuICogRXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIGEgdGFiIGhhcyBiZWVuIG9wZW5lZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX1RBQl9PUEVORUQgPSAnZmxleGNzcy50YWIub3BlbmVkJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9OQU1FID0gJ2RhdGEtdG9nZ2xlJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQUNUSVZFX0NMQVNTID0gJ2FjdGl2ZSc7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IExPQURJTkdfQ0xBU1MgPSAnbG9hZGluZyc7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9UT0dHTEVfTElTVCA9ICdkYXRhLXRvZ2dsZS1saXN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9nZ2xlYWJsZSBlbGVtZW50LCBlaXRoZXIgZm9yIHRhYnMgb3IgYSBzaW5nbGUgdG9nZ2xlXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBUb2dnbGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihDb250YWluZXJJZCkge1xuXG4gICAgICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBDb250YWluZXJJZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gQ29udGFpbmVySWQgOlxuICAgICAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKENvbnRhaW5lcklkKTtcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyAnVG9nZ2xlYWJsZSBjb250YWluZXIgd2l0aCBpZCBcIicgKyBDb250YWluZXJJZCArICdcIiBub3QgZm91bmQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbGlzdGVuZXIoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbiAgICAgICAgLy8gc3VwcG9ydCB0YXJnZXQgY2hpbGQgZWxlbWVudCB0byBjbGlja2VkXG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5oYXNBdHRyaWJ1dGUoQVRUUl9OQU1FKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHBhcmVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWZJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKSxcbiAgICAgICAgICAgIHJlZiA9IGRvYy5nZXRFbGVtZW50QnlJZChyZWZJZCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlVGFyZ2V0KHJlZiwgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgRXZlbnRzIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge1RvZ2dsZWFibGV9XG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgdGhpcy5fbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgZ2l2ZW4gYHJlZmBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbdGFyZ2V0XSBvcHRpb25hbCB0YXJnZXQgbm9kZVxuICAgICAqL1xuICAgIHRvZ2dsZVRhcmdldChyZWYsIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldCAmJiAhcmVmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgQVRUUl9OQU1FICsgJz1cIicgKyByZWYuaWQgKyAnXCJdJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF5YmVUb2dnbGVOb2RlLCBmdXR1cmUsXG4gICAgICAgICAgICBlbENsYXNzTGlzdCA9IHRhcmdldC5jbGFzc0xpc3QsIHBhcmVudENsYXNzTGlzdCxcbiAgICAgICAgICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLCBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbiAgICAgICAgZnV0dXJlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIGZhaWx1cmUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSBXaWRnZXQuZmluZFdpZGdldCh0YXJnZXQpLCBhc3luYyA9IHdpZGdldCA/IHdpZGdldC5nZXRBc3luYygpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoV2lkZ2V0LmlzV2lkZ2V0KHdpZGdldCkgJiYgYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgZnV0dXJlID0gYXN5bmMudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IFV0aWwuZ3VpZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaWQgPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFUVFJfTkFNRSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93ICdEeW5hbWljYWxseSBjcmVhdGluZyB0b2dnbGUtY29udGVudCBpcyBub3Qgc3VwcG9ydGVkIHJpZ2h0IG5vdy4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JldHVybiBhbiBIVE1MRWxlbWVudCBpbnN0YW5jZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoJ1RhcmdldCBub3QgZ2l2ZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIG1heWJlVG9nZ2xlTm9kZSA9IFV0aWwucGFyZW50c1VudGlsKHRhcmdldCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLmhhc0F0dHJpYnV0ZSAmJiBub2RlLmhhc0F0dHJpYnV0ZShBVFRSX1RPR0dMRV9MSVNUKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwYXJlbnRDbGFzc0xpc3QgPSBwYXJlbnQuY2xhc3NMaXN0O1xuICAgICAgICAgICAgLy8gQWJvcnQgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGFjdGl2ZSBhbmQgaWYgaXMgcGFydCBvZiBhIHRvZ2dsZSBsaXN0XG4gICAgICAgICAgICBpZiAobWF5YmVUb2dnbGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDbGFzc0xpc3QuY29udGFpbnMoQUNUSVZFX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbGFzc0xpc3QudG9nZ2xlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENsYXNzTGlzdC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1heWJlVG9nZ2xlTm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5YmVUb2dnbGVOb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gbWF5YmVUb2dnbGVOb2RlLmNoaWxkcmVuW2ldLCB0YXJnZXRSZWYgPSBuLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiAhPT0gcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IHRhcmdldFJlZi5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSBhdHRyID8gZG9jLmdldEVsZW1lbnRCeUlkKGF0dHIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnQuZGlzcGF0Y2hBbmRGaXJlKGVsLCBFVkVOVF9UQUJfQ0xPU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZWYuY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmIChlbENsYXNzTGlzdCkge1xuICAgICAgICAgICAgZWxDbGFzc0xpc3QudG9nZ2xlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICBlbENsYXNzTGlzdC5hZGQoTE9BRElOR19DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZnV0dXJlLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIEV2ZW50LmRpc3BhdGNoQW5kRmlyZShyLCBFVkVOVF9UQUJfT1BFTkVEKTtcbiAgICAgICAgICAgIFRvZ2dsZWFibGUuX2hhbmRsZUxvYWRlZCh0YXJnZXQpO1xuICAgICAgICAgICAgci5jbGFzc0xpc3QudG9nZ2xlKEFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICB9LmJpbmQodGhpcykpLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgVG9nZ2xlYWJsZS5faGFuZGxlTG9hZGVkKHRhcmdldCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX2hhbmRsZUxvYWRlZChlbCkge1xuICAgICAgICB2YXIgcGFyZW50Q2xhc3NMaXN0ID0gZWwucGFyZW50Tm9kZS5jbGFzc0xpc3Q7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoTE9BRElOR19DTEFTUyk7XG4gICAgICAgIGlmIChwYXJlbnRDbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIHBhcmVudENsYXNzTGlzdC5yZW1vdmUoTE9BRElOR19DTEFTUyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.OffCanvas
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	/**
	 * @type {string}
	 */
	var ATTR_CLOSE_SIDEBAR = 'data-close-offcanvas';
	
	/**
	 * @type {string}
	 */
	var ATTR_TARGET = 'data-offcanvas';
	/**
	 * @type {string}
	 */
	var TOGGLE_CLASS = 'toggled-canvas';
	/**
	 * @type {string}
	 */
	var INIT_CLASS = 'init';
	/**
	 * @type {string}
	 */
	var OPEN_CLASS = 'open';
	/**
	 * @type {number}
	 */
	var HIDE_FACTOR = 3;
	
	/**
	 * A OffCanvas Implementation
	 */
	
	var OffCanvas = (function () {
	
	    /**
	     * Creates an off-canvas navigation
	     * @param {HTMLElement|String} NavigationId
	     * @param {HTMLElement|String} Darkener
	     * @param {int} factor positive will expect right sidebar, positive left
	     * @param {bool} [disableTouch] if true all touch events are disabled
	     * @constructor
	     */
	
	    function OffCanvas(NavigationId, Darkener, factor, disableTouch) {
	        _classCallCheck(this, OffCanvas);
	
	        var doc = global.document,
	            touched = 0,
	            navigationContainer = NavigationId instanceof HTMLElement ? NavigationId : doc.getElementById(NavigationId),
	            darkener = Darkener instanceof HTMLElement ? Darkener : doc.getElementById(Darkener),
	            DARKENER_CLASS_TOGGLE = 'toggle-' + darkener.id || 'darkener',
	            DARKENER_CLASS_INSTANT_TOGGLE = DARKENER_CLASS_TOGGLE + '-open',
	            resetStyles = function resetStyles(s) {
	            s.transform = '';
	            s.transition = '';
	            s.webkitTransform = '';
	            s.webkitTransition = '';
	        },
	            shouldNotTouch = function shouldNotTouch() {
	            return window.innerWidth >= _utilSettings2['default'].get().smallBreakpoint;
	        };
	
	        if (!darkener || !navigationContainer) {
	            throw 'Could not find needed elements (Darkener and/or NavigationId)';
	        }
	
	        this.darkener = darkener;
	        this.darkenerClassToggle = DARKENER_CLASS_TOGGLE;
	        this.darkenerClassToggleInstant = DARKENER_CLASS_INSTANT_TOGGLE;
	
	        this.navigationContainer = navigationContainer;
	        this.navigationContainerId = navigationContainer.id;
	
	        // create id if id does not exist
	        if (!this.navigationContainerId) {
	            this.navigationContainerId = _utilUtil2['default'].guid();
	            navigationContainer.id = this.navigationContainerId;
	        }
	
	        if (!disableTouch) {
	            navigationContainer.addEventListener('touchstart', function (e) {
	                requestAnimationFrame(function () {
	                    if (shouldNotTouch()) {
	                        return;
	                    }
	                    touched = e.touches[0].clientX;
	                    var target = navigationContainer,
	                        style = target.style;
	                    target.mustHide = false;
	                    style.transition = 'transform 0s ease';
	                    style.webkitTransition = '-webkit-transform 0s ease';
	                });
	            });
	            navigationContainer.addEventListener('touchmove', function (e) {
	
	                if (shouldNotTouch()) {
	                    return;
	                }
	                var x = e.touches[0].clientX,
	                    target = navigationContainer,
	                    style = target.style,
	                    calc = touched - x,
	                    bounds = target.getBoundingClientRect(),
	                    compare = factor > 0 ? calc <= 0 : calc >= 0;
	                if (compare) {
	                    target.mustHide = factor > 0 ? calc * -1 > bounds.width / HIDE_FACTOR : calc > bounds.width / HIDE_FACTOR;
	                    style.transform = 'translate3d(' + calc * -1 + 'px,0,0)';
	                    style.webkitTransform = 'translate3d(' + calc * -1 + 'px,0,0)';
	                }
	            });
	            navigationContainer.addEventListener('touchend', (function () {
	                requestAnimationFrame((function () {
	                    if (shouldNotTouch()) {
	                        return;
	                    }
	                    var target = navigationContainer,
	                        style = target.style;
	                    if (target.mustHide) {
	                        var width = target.getBoundingClientRect().width * factor;
	                        style.transition = 'transform .2s ease';
	                        style.webkitTransition = '-webkit-transform .2s ease';
	
	                        style.transform = 'translate3d(' + width + 'px,0,0)';
	                        style.webkitTransform = 'translate3d(' + width + 'px,0,0)';
	                        this._remove(function () {
	                            resetStyles(style);
	                        });
	                        this._removeInstant();
	                    } else {
	                        resetStyles(style);
	                    }
	                }).bind(this));
	            }).bind(this));
	        }
	    }
	
	    /**
	     * @private
	     */
	
	    _createClass(OffCanvas, [{
	        key: '_remove',
	        value: function _remove(callback) {
	            _utilUtil2['default'].addEventOnce(_utilSettings2['default'].getTransitionEvent(), this.navigationContainer, (function () {
	                // add timeout because transition event fires a little to early
	                setTimeout((function () {
	                    requestAnimationFrame((function () {
	                        var body = global.document.body;
	                        OffCanvas.currentOpen = null;
	                        body.classList.remove(TOGGLE_CLASS);
	                        body.classList.remove(this.darkenerClassToggle);
	                        if (callback) {
	                            callback();
	                        }
	                    }).bind(this));
	                }).bind(this), _utilSettings2['default'].get().darkenerFadeDelay);
	            }).bind(this));
	        }
	
	        /**
	         * @private
	         */
	    }, {
	        key: '_removeInstant',
	        value: function _removeInstant() {
	            this.navigationContainer.classList.remove(OPEN_CLASS);
	            global.document.body.classList.remove(this.darkenerClassToggleInstant);
	            this.darkener.classList.remove(INIT_CLASS);
	        }
	
	        /**
	         * Toggles a an off-canvas element
	         * @param e
	         * @private
	         */
	    }, {
	        key: '_toggle',
	        value: function _toggle(e) {
	            e.preventDefault();
	            var bodyClass = global.document.body.classList,
	                darkenerClass = this.darkener.classList,
	                DARKENER_CLASS_TOGGLE = this.darkenerClassToggle,
	                DARKENER_CLASS_INSTANT_TOGGLE = this.darkenerClassToggleInstant,
	                navigationControllerClassList = this.navigationContainer.classList;
	            if (this.navigationContainer.classList.contains(OPEN_CLASS)) {
	                this._remove();
	                this._removeInstant(navigationControllerClassList);
	            } else if (!OffCanvas.currentOpen) {
	                OffCanvas.currentOpen = this;
	                bodyClass.add(DARKENER_CLASS_INSTANT_TOGGLE);
	                bodyClass.add(TOGGLE_CLASS);
	                bodyClass.add(DARKENER_CLASS_TOGGLE);
	                darkenerClass.add(INIT_CLASS);
	                navigationControllerClassList.add(OPEN_CLASS);
	            }
	        }
	
	        /**
	         * Register events
	         * @param [delegate]
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents(delegate) {
	            delegate = delegate || global.document;
	            delegate.addEventListener(_utilSettings2['default'].getTabEvent(), (function (e) {
	                if (OffCanvas.currentOpen && OffCanvas.currentOpen !== this) {
	                    return;
	                }
	                var id = this.navigationContainerId,
	                    validTarget = e.target.getAttribute(ATTR_TARGET) === id;
	                if (!_utilUtil2['default'].isPartOfNode(e.target, this.navigationContainer)) {
	                    if (validTarget || OffCanvas.currentOpen === this && e.target === this.darkener) {
	                        this._toggle(e);
	                    }
	                } else {
	                    if (e.target.hasAttribute(ATTR_CLOSE_SIDEBAR)) {
	                        this._toggle(e);
	                    }
	                }
	            }).bind(this));
	        }
	    }]);
	
	    return OffCanvas;
	})();
	
	exports['default'] = OffCanvas;
	
	OffCanvas.currentOpen = null;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL09mZkNhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7NEJBRVEsZUFBZTs7Ozt3QkFDbkIsV0FBVzs7Ozs7OztBQUs1QixJQUFNLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDOzs7OztBQUtsRCxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQzs7OztBQUlyQyxJQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQzs7OztBQUl0QyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7Ozs7QUFJMUIsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDOzs7O0FBSTFCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0lBTWhCLFNBQVM7Ozs7Ozs7Ozs7O0FBVUEsYUFWVCxTQUFTLENBVUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFOzhCQVZ4RCxTQUFTOztBQVlQLFlBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRO1lBQUUsT0FBTyxHQUFHLENBQUM7WUFDbEMsbUJBQW1CLEdBQUcsWUFBWSxZQUFZLFdBQVcsR0FDckQsWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ25ELFFBQVEsR0FBRyxRQUFRLFlBQVksV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUNwRixxQkFBcUIsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFBSSxVQUFVO1lBQzdELDZCQUE2QixHQUFNLHFCQUFxQixVQUFPO1lBQy9ELFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBYSxDQUFD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QyxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDeEQsd0JBQUksV0FBVyxJQUFLLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQUFBQyxFQUFFO0FBQy9FLDRCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuQjtpQkFDSixNQUFNO0FBQ0gsd0JBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUMzQyw0QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbkI7aUJBQ0o7YUFDSixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakI7OztXQTlLQyxTQUFTOzs7cUJBQVQsU0FBUzs7QUFpTGYsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vT2ZmQ2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIVxuICogRmxleENzcy5PZmZDYW52YXNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJ3V0aWwvU2V0dGluZ3MnO1xuaW1wb3J0IFV0aWwgZnJvbSAndXRpbC9VdGlsJztcblxuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBBVFRSX0NMT1NFX1NJREVCQVIgPSAnZGF0YS1jbG9zZS1vZmZjYW52YXMnO1xuXG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IEFUVFJfVEFSR0VUID0gJ2RhdGEtb2ZmY2FudmFzJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgVE9HR0xFX0NMQVNTID0gJ3RvZ2dsZWQtY2FudmFzJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgSU5JVF9DTEFTUyA9ICdpbml0Jztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgT1BFTl9DTEFTUyA9ICdvcGVuJztcbi8qKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgSElERV9GQUNUT1IgPSAzO1xuXG4vKipcbiAqIEEgT2ZmQ2FudmFzIEltcGxlbWVudGF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBPZmZDYW52YXMge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvZmYtY2FudmFzIG5hdmlnYXRpb25cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fFN0cmluZ30gTmF2aWdhdGlvbklkXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxTdHJpbmd9IERhcmtlbmVyXG4gICAgICogQHBhcmFtIHtpbnR9IGZhY3RvciBwb3NpdGl2ZSB3aWxsIGV4cGVjdCByaWdodCBzaWRlYmFyLCBwb3NpdGl2ZSBsZWZ0XG4gICAgICogQHBhcmFtIHtib29sfSBbZGlzYWJsZVRvdWNoXSBpZiB0cnVlIGFsbCB0b3VjaCBldmVudHMgYXJlIGRpc2FibGVkXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoTmF2aWdhdGlvbklkLCBEYXJrZW5lciwgZmFjdG9yLCBkaXNhYmxlVG91Y2gpIHtcblxuICAgICAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50LCB0b3VjaGVkID0gMCxcbiAgICAgICAgICAgIG5hdmlnYXRpb25Db250YWluZXIgPSBOYXZpZ2F0aW9uSWQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/XG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvbklkIDogZG9jLmdldEVsZW1lbnRCeUlkKE5hdmlnYXRpb25JZCksXG4gICAgICAgICAgICBkYXJrZW5lciA9IERhcmtlbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBEYXJrZW5lciA6IGRvYy5nZXRFbGVtZW50QnlJZChEYXJrZW5lciksXG4gICAgICAgICAgICBEQVJLRU5FUl9DTEFTU19UT0dHTEUgPSAndG9nZ2xlLScgKyBkYXJrZW5lci5pZCB8fCAnZGFya2VuZXInLFxuICAgICAgICAgICAgREFSS0VORVJfQ0xBU1NfSU5TVEFOVF9UT0dHTEUgPSBgJHtEQVJLRU5FUl9DTEFTU19UT0dHTEV9LW9wZW5gLFxuICAgICAgICAgICAgcmVzZXRTdHlsZXMgPSBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHMudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICAgICAgcy50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgcy53ZWJraXRUcmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgICAgICBzLndlYmtpdFRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG91bGROb3RUb3VjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPj0gU2V0dGluZ3MuZ2V0KCkuc21hbGxCcmVha3BvaW50O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWRhcmtlbmVyIHx8ICFuYXZpZ2F0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyAnQ291bGQgbm90IGZpbmQgbmVlZGVkIGVsZW1lbnRzIChEYXJrZW5lciBhbmQvb3IgTmF2aWdhdGlvbklkKSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhcmtlbmVyID0gZGFya2VuZXI7XG4gICAgICAgIHRoaXMuZGFya2VuZXJDbGFzc1RvZ2dsZSA9IERBUktFTkVSX0NMQVNTX1RPR0dMRTtcbiAgICAgICAgdGhpcy5kYXJrZW5lckNsYXNzVG9nZ2xlSW5zdGFudCA9IERBUktFTkVSX0NMQVNTX0lOU1RBTlRfVE9HR0xFO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkNvbnRhaW5lciA9IG5hdmlnYXRpb25Db250YWluZXI7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbkNvbnRhaW5lcklkID0gbmF2aWdhdGlvbkNvbnRhaW5lci5pZDtcblxuICAgICAgICAvLyBjcmVhdGUgaWQgaWYgaWQgZG9lcyBub3QgZXhpc3RcbiAgICAgICAgaWYgKCF0aGlzLm5hdmlnYXRpb25Db250YWluZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uQ29udGFpbmVySWQgPSBVdGlsLmd1aWQoKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb25Db250YWluZXIuaWQgPSB0aGlzLm5hdmlnYXRpb25Db250YWluZXJJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGlzYWJsZVRvdWNoKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RUb3VjaCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbmF2aWdhdGlvbkNvbnRhaW5lciwgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5tdXN0SGlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAwcyBlYXNlJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICctd2Via2l0LXRyYW5zZm9ybSAwcyBlYXNlJztcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90VG91Y2goKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB4ID0gZS50b3VjaGVzWzBdLmNsaWVudFgsIHRhcmdldCA9IG5hdmlnYXRpb25Db250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLCBjYWxjID0gdG91Y2hlZCAtIHgsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZSA9IGZhY3RvciA+IDAgPyBjYWxjIDw9IDAgOiBjYWxjID49IDA7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm11c3RIaWRlID0gZmFjdG9yID4gMCA/IGNhbGMgKiAtMSA+XG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy53aWR0aCAvIEhJREVfRkFDVE9SIDogY2FsYyA+IGJvdW5kcy53aWR0aCAvIEhJREVfRkFDVE9SO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIChjYWxjICogLTEpICsgJ3B4LDAsMCknO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIChjYWxjICogLTEpICsgJ3B4LDAsMCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmF2aWdhdGlvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90VG91Y2goKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBuYXZpZ2F0aW9uQ29udGFpbmVyLCBzdHlsZSA9IHRhcmdldC5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5tdXN0SGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjJzIGVhc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICctd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgd2lkdGggKyAncHgsMCwwKSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHdpZHRoICsgJ3B4LDAsMCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFN0eWxlcyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUluc3RhbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0U3R5bGVzKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVtb3ZlKGNhbGxiYWNrKSB7XG4gICAgICAgIFV0aWwuYWRkRXZlbnRPbmNlKFNldHRpbmdzLmdldFRyYW5zaXRpb25FdmVudCgpLCB0aGlzLm5hdmlnYXRpb25Db250YWluZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGFkZCB0aW1lb3V0IGJlY2F1c2UgdHJhbnNpdGlvbiBldmVudCBmaXJlcyBhIGxpdHRsZSB0byBlYXJseVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBnbG9iYWwuZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgT2ZmQ2FudmFzLmN1cnJlbnRPcGVuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFRPR0dMRV9DTEFTUyk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhcmtlbmVyQ2xhc3NUb2dnbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIFNldHRpbmdzLmdldCgpLmRhcmtlbmVyRmFkZURlbGF5KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9yZW1vdmVJbnN0YW50KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShPUEVOX0NMQVNTKTtcbiAgICAgICAgZ2xvYmFsLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhcmtlbmVyQ2xhc3NUb2dnbGVJbnN0YW50KTtcbiAgICAgICAgdGhpcy5kYXJrZW5lci5jbGFzc0xpc3QucmVtb3ZlKElOSVRfQ0xBU1MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYSBhbiBvZmYtY2FudmFzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3RvZ2dsZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGJvZHlDbGFzcyA9IGdsb2JhbC5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCwgZGFya2VuZXJDbGFzcyA9IHRoaXMuZGFya2VuZXIuY2xhc3NMaXN0LFxuICAgICAgICAgICAgREFSS0VORVJfQ0xBU1NfVE9HR0xFID0gdGhpcy5kYXJrZW5lckNsYXNzVG9nZ2xlLFxuICAgICAgICAgICAgREFSS0VORVJfQ0xBU1NfSU5TVEFOVF9UT0dHTEUgPSB0aGlzLmRhcmtlbmVyQ2xhc3NUb2dnbGVJbnN0YW50LFxuICAgICAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xsZXJDbGFzc0xpc3QgPSB0aGlzLm5hdmlnYXRpb25Db250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhPUEVOX0NMQVNTKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJbnN0YW50KG5hdmlnYXRpb25Db250cm9sbGVyQ2xhc3NMaXN0KTtcbiAgICAgICAgfSBlbHNlIGlmKCFPZmZDYW52YXMuY3VycmVudE9wZW4pIHtcbiAgICAgICAgICAgIE9mZkNhbnZhcy5jdXJyZW50T3BlbiA9IHRoaXM7XG4gICAgICAgICAgICBib2R5Q2xhc3MuYWRkKERBUktFTkVSX0NMQVNTX0lOU1RBTlRfVE9HR0xFKTtcbiAgICAgICAgICAgIGJvZHlDbGFzcy5hZGQoVE9HR0xFX0NMQVNTKTtcbiAgICAgICAgICAgIGJvZHlDbGFzcy5hZGQoREFSS0VORVJfQ0xBU1NfVE9HR0xFKTtcbiAgICAgICAgICAgIGRhcmtlbmVyQ2xhc3MuYWRkKElOSVRfQ0xBU1MpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xsZXJDbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgZXZlbnRzXG4gICAgICogQHBhcmFtIFtkZWxlZ2F0ZV1cbiAgICAgKi9cbiAgICByZWdpc3RlckV2ZW50cyhkZWxlZ2F0ZSkge1xuICAgICAgICBkZWxlZ2F0ZSA9IGRlbGVnYXRlIHx8IGdsb2JhbC5kb2N1bWVudDtcbiAgICAgICAgZGVsZWdhdGUuYWRkRXZlbnRMaXN0ZW5lcihTZXR0aW5ncy5nZXRUYWJFdmVudCgpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYoT2ZmQ2FudmFzLmN1cnJlbnRPcGVuICYmIE9mZkNhbnZhcy5jdXJyZW50T3BlbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMubmF2aWdhdGlvbkNvbnRhaW5lcklkLCB2YWxpZFRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShBVFRSX1RBUkdFVCkgPT09IGlkO1xuICAgICAgICAgICAgaWYgKCFVdGlsLmlzUGFydE9mTm9kZShlLnRhcmdldCwgdGhpcy5uYXZpZ2F0aW9uQ29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZFRhcmdldCB8fCAoT2ZmQ2FudmFzLmN1cnJlbnRPcGVuID09PSB0aGlzICYmIGUudGFyZ2V0ID09PSB0aGlzLmRhcmtlbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfQ0xPU0VfU0lERUJBUikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbk9mZkNhbnZhcy5jdXJyZW50T3BlbiA9IG51bGw7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.Dropdown
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilUtil = __webpack_require__(98);
	
	var _utilUtil2 = _interopRequireDefault(_utilUtil);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _utilEvent = __webpack_require__(100);
	
	var _utilEvent2 = _interopRequireDefault(_utilEvent);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	/**
	 * @type {string}
	 */
	var ATTR_CC = 'data-collision-container';
	/**
	 * @type {string}
	 */
	var ATTR_DARKENER = 'data-darkener-container';
	/**
	 * @type {string}
	 */
	var DARKENER_INIT = 'init';
	/**
	 * @type {string}
	 */
	var ATTR_DATA_TARGET = 'data-target';
	/**
	 * @type {string}
	 */
	var ATTR_CLOSE_DROPDOWN = 'data-close-dropdown';
	/**
	 * @type {string}
	 */
	var ATTR_NAME = 'data-dropdown';
	/**
	 * @type {string}
	 */
	var STATE_LOADING = 'loading';
	
	var CLS_DARKENER_DROPDOWN = 'darkener-dropdown';
	/**
	 * @type {string}
	 */
	var CLS_OPEN = 'open';
	
	/**
	 * @type {string}
	 */
	var CLS_DROPDOWN = 'dropdown';
	
	/**
	 * @type {string}
	 */
	var EVENT_DROPDOWN_CLOSED = 'flexcss.dropdown.closed';
	
	exports.EVENT_DROPDOWN_CLOSED = EVENT_DROPDOWN_CLOSED;
	/**
	 * A Dropdown
	 */
	
	var Dropdown = (function () {
	    function Dropdown(DelegateContainer, Darkener) {
	        _classCallCheck(this, Dropdown);
	
	        var doc = global.document;
	
	        /**
	         * Container Element
	         * @type {HTMLElement}
	         */
	        this.container = DelegateContainer instanceof HTMLElement ? DelegateContainer : doc.getElementById(DelegateContainer);
	
	        this.currentOpen = null;
	        this.currentTarget = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this.darkener = Darkener instanceof HTMLElement ? Darkener : document.getElementById(Darkener);
	
	        this.destroyOnClose = false;
	
	        if (!this.darkener || !this.container) {
	            throw 'required elements not found (darkener and container element)';
	        }
	    }
	
	    /**
	     * Method that handles delegation events for dropdowns
	     * @param e
	     * @returns {boolean}
	     * @private
	     */
	
	    _createClass(Dropdown, [{
	        key: '_delegateFunction',
	        value: function _delegateFunction(e) {
	            var currentOpen = this.currentOpen,
	                targetHas = e.target.hasAttribute(ATTR_NAME),
	                parentHas = e.target.parentNode ? e.target.parentNode.hasAttribute(ATTR_NAME) : false,
	                target = targetHas ? e.target : e.target.parentNode,
	                targetIsCurrent = target === this.currentTarget;
	
	            if (currentOpen && !_utilUtil2['default'].isPartOfNode(e.target, currentOpen) || targetIsCurrent) {
	                this.close();
	                if (targetIsCurrent) {
	                    e.preventDefault();
	                }
	                return targetIsCurrent ? false : this._delegateFunction(e);
	            }
	
	            if (targetHas || parentHas && !currentOpen) {
	                e.preventDefault();
	                e.stopImmediatePropagation();
	
	                if (target.isLoading) {
	                    return false;
	                }
	                this.createDropdown(target);
	            } else {
	                if (currentOpen) {
	                    if (e.target.hasAttribute(ATTR_CLOSE_DROPDOWN)) {
	                        e.preventDefault();
	                        this.close();
	                    }
	                    if (!_utilUtil2['default'].isPartOfNode(e.target, currentOpen)) {
	                        this.close();
	                    }
	                }
	            }
	        }
	
	        /**
	         * Register Events for this dropdown container
	         * @returns {Dropdown}
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents() {
	            this.container.addEventListener(_utilSettings2['default'].getTabEvent(), this._delegateFunction.bind(this), true);
	            return this;
	        }
	
	        /**
	         * Destroys this instance, unbinds events
	         * @returns {Dropdown}
	         */
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.container.removeEventListener(_utilSettings2['default'].getTabEvent(), this._delegateFunction.bind(this), true);
	            return this;
	        }
	
	        /**
	         * Destroys instance on close of dropdown
	         * @param v
	         * @returns {Dropdown}
	         */
	    }, {
	        key: 'setDestroyOnClose',
	        value: function setDestroyOnClose(v) {
	            this.destroyOnClose = v;
	            return this;
	        }
	
	        /**
	         * Will add the right class to container for specific darkener id
	         * @param instance
	         * @param show
	         */
	    }, {
	        key: 'toggleDarkenerToggler',
	        value: function toggleDarkenerToggler(instance, show) {
	            var cls = 'toggle-' + (instance.id || CLS_DARKENER_DROPDOWN),
	                classList = this.container.classList;
	            if (show) {
	                classList.add(cls);
	            } else {
	                classList.remove(cls);
	            }
	        }
	
	        /**
	         * Closes Dropdown on current instance
	         * @return {Boolean|Promise}
	         */
	    }, {
	        key: 'close',
	        value: function close() {
	            var _this = this;
	
	            var currentOpen = this.currentOpen;
	            if (!currentOpen) {
	                return false;
	            }
	            var future,
	                darkenerInstance = currentOpen.flexDarkenerInstance || this.darkener,
	                thisCurrentOpen = currentOpen;
	
	            future = new _Promise(function (resolve) {
	                if (window.getComputedStyle(currentOpen).position === 'fixed') {
	                    _utilUtil2['default'].addEventOnce(_utilSettings2['default'].getTransitionEvent(), currentOpen, (function () {
	                        setTimeout((function () {
	                            _utilEvent2['default'].dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
	                            // if a new dropdown has been opened in the meantime, do not remove darkener
	                            if (this.currentOpen !== null) {
	                                return false;
	                            }
	                            this.toggleDarkenerToggler(darkenerInstance, false);
	                            this.container.classList.remove(_utilSettings2['default'].get().canvasToggledClass);
	                            resolve(true);
	                        }).bind(this), _utilSettings2['default'].get().darkenerFadeDelay);
	                    }).bind(_this));
	                } else {
	                    resolve(true);
	                    _utilEvent2['default'].dispatchAndFire(thisCurrentOpen, EVENT_DROPDOWN_CLOSED);
	                }
	            });
	
	            currentOpen.classList.remove(CLS_OPEN);
	
	            if (currentOpen.flexDarkenerInstance) {
	                currentOpen.flexDarkenerInstance.classList.remove(DARKENER_INIT);
	            } else {
	                this.darkener.classList.remove(DARKENER_INIT);
	            }
	
	            this.currentOpen = null;
	            this.currentTarget = null;
	
	            if (this.destroyOnClose) {
	                this.destroy();
	            }
	
	            return future;
	        }
	
	        /**
	         * Creates a dropdown on given target and opens it
	         * @param {HTMLElement} target target where this dropdown is placed
	         * @param {FlexCss.Widget} [thisWidget] if given will use widget instead of widget instance
	         * @return {FlexCss.Dropdown}
	         */
	    }, {
	        key: 'createDropdown',
	        value: function createDropdown(target, thisWidget) {
	            var doc = global.document;
	
	            if (!target) {
	                throw 'Dropdown target not found';
	            }
	
	            var widget = thisWidget || _Widget2['default'].findWidget(target),
	                future,
	                data = target.getAttribute(ATTR_NAME),
	                dropdownContainerElement = doc.getElementById(data),
	                async = !dropdownContainerElement && _Widget2['default'].isWidget(widget) ? widget.getAsync() : false;
	
	            if (async) {
	                target.classList.add(STATE_LOADING);
	                target.isLoading = true;
	                future = async.then(function (r) {
	                    if (r instanceof HTMLElement) {
	                        if (r.id) {
	                            target.setAttribute(ATTR_NAME, r.id);
	                        }
	                        return r;
	                    } else {
	                        // Create container Element:
	                        var element = doc.createElement('div');
	                        element.className = CLS_DROPDOWN;
	                        element.innerHTML = r;
	                        element.id = _utilUtil2['default'].guid();
	                        // Cache target for later use:
	                        target.setAttribute(ATTR_NAME, element.id);
	                        this.container.appendChild(element);
	                        return element;
	                    }
	                }).then(function (r) {
	                    target.isLoading = false;
	                    target.classList.remove(STATE_LOADING);
	                    return r;
	                });
	            } else {
	                if (!dropdownContainerElement) {
	                    throw 'Could not found Dropdown container with ID "' + data + '"';
	                }
	                future = new _Promise(function (r) {
	                    r(dropdownContainerElement);
	                });
	            }
	
	            future.then((function (dropdownContent) {
	                if (this.currentOpen) {
	                    this.close();
	                }
	                // Skip one frame to show animation
	                target.dropdownContent = dropdownContent;
	                var isAbsolute = global.getComputedStyle(dropdownContent).position === 'absolute';
	
	                if (!target.flexCollisionContainer) {
	                    var collisionC = target.getAttribute(ATTR_CC);
	                    target.flexCollisionContainer = collisionC ? doc.getElementById(collisionC) || document.documentElement : document.documentElement;
	                }
	
	                dropdownContent.classList.toggle(CLS_OPEN);
	                if (dropdownContent.classList.contains(CLS_OPEN)) {
	                    this.currentOpen = dropdownContent;
	                    this.currentTarget = target;
	                }
	                if (isAbsolute) {
	                    // Check collision:
	                    var selfTarget = target.getAttribute(ATTR_DATA_TARGET);
	                    selfTarget = selfTarget ? doc.getElementById(selfTarget) : target;
	                    _utilUtil2['default'].setupPositionNearby(selfTarget, dropdownContent, target.flexCollisionContainer);
	                } else {
	                    this.container.classList.add(_utilSettings2['default'].get().canvasToggledClass);
	                    // optionally get custom darkener container for target
	                    var d = target.getAttribute(ATTR_DARKENER);
	                    if (d) {
	                        dropdownContent.flexDarkenerInstance = doc.getElementById(d);
	                        (dropdownContent.flexDarkenerInstance || this.darkener).classList.toggle(DARKENER_INIT);
	                    } else {
	                        this.darkener.classList.toggle(DARKENER_INIT);
	                    }
	
	                    this.toggleDarkenerToggler(dropdownContent.flexDarkenerInstance || this.darkener, true);
	
	                    dropdownContent.style.left = '0';
	                    dropdownContent.style.top = 'auto';
	                }
	            }).bind(this));
	        }
	    }]);
	
	    return Dropdown;
	})();
	
	exports['default'] = Dropdown;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O3dCQUVJLFdBQVc7Ozs7NEJBQ1AsZUFBZTs7Ozt5QkFDbEIsWUFBWTs7OztzQkFDWCxRQUFROzs7Ozs7O0FBSzNCLElBQU0sT0FBTyxHQUFHLDBCQUEwQixDQUFDOzs7O0FBSTNDLElBQU0sYUFBYSxHQUFHLHlCQUF5QixDQUFDOzs7O0FBSWhELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQzs7OztBQUk3QixJQUFNLGdCQUFnQixHQUFHLGFBQWEsQ0FBQzs7OztBQUl2QyxJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDOzs7O0FBSWxELElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQzs7OztBQUlsQyxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUM7O0FBRWhDLElBQU0scUJBQXFCLEdBQUcsbUJBQW1CLENBQUM7Ozs7QUFJbEQsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDOzs7OztBQUt4QixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7Ozs7O0FBS3pCLElBQU0scUJBQXFCLEdBQUcseUJBQXlCLENBQUM7Ozs7Ozs7SUFNekQsUUFBUTtBQUNDLGFBRFQsUUFBUSxDQUNFLGlCQUFpQixFQUFFLFFBQVEsRUFBRTs4QkFEdkMsUUFBUTs7QUFHTixZQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOzs7Ozs7QUFNMUIsWUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsWUFBWSxXQUFXLEdBQ3JELGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7QUFF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LEdBQUcsR0FBRyxNQUFNLENBQUM7aUJBQ3RDO2FBQ0osQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pCOzs7V0FoUUMsUUFBUTs7O3FCQUFSLFFBQVEiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vRHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IERhdmlkIEhlaWRyaWNoLCBCb3dsaW5nWCA8bWVAYm93bGluZ3guY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyohXG4gKiBGbGV4Q3NzLkRyb3Bkb3duXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBVdGlsIGZyb20gJ3V0aWwvVXRpbCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAndXRpbC9TZXR0aW5ncyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAndXRpbC9FdmVudCc7XG5pbXBvcnQgV2lkZ2V0IGZyb20gJ1dpZGdldCc7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9DQyA9ICdkYXRhLWNvbGxpc2lvbi1jb250YWluZXInO1xuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBBVFRSX0RBUktFTkVSID0gJ2RhdGEtZGFya2VuZXItY29udGFpbmVyJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgREFSS0VORVJfSU5JVCA9ICdpbml0Jztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQVRUUl9EQVRBX1RBUkdFVCA9ICdkYXRhLXRhcmdldCc7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IEFUVFJfQ0xPU0VfRFJPUERPV04gPSAnZGF0YS1jbG9zZS1kcm9wZG93bic7XG4vKipcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLWRyb3Bkb3duJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgU1RBVEVfTE9BRElORyA9ICdsb2FkaW5nJztcblxuY29uc3QgQ0xTX0RBUktFTkVSX0RST1BET1dOID0gJ2RhcmtlbmVyLWRyb3Bkb3duJztcbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ0xTX09QRU4gPSAnb3Blbic7XG5cbi8qKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ0xTX0RST1BET1dOID0gJ2Ryb3Bkb3duJztcblxuLyoqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRVZFTlRfRFJPUERPV05fQ0xPU0VEID0gJ2ZsZXhjc3MuZHJvcGRvd24uY2xvc2VkJztcblxuLyoqXG4gKiBBIERyb3Bkb3duXG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBEcm9wZG93biB7XG4gICAgY29uc3RydWN0b3IoRGVsZWdhdGVDb250YWluZXIsIERhcmtlbmVyKSB7XG5cbiAgICAgICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbmVyIEVsZW1lbnRcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBEZWxlZ2F0ZUNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID9cbiAgICAgICAgICAgIERlbGVnYXRlQ29udGFpbmVyIDogZG9jLmdldEVsZW1lbnRCeUlkKERlbGVnYXRlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRPcGVuID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGFya2VuZXIgPSBEYXJrZW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gRGFya2VuZXIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChEYXJrZW5lcik7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95T25DbG9zZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGhpcy5kYXJrZW5lciB8fCAhdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93ICdyZXF1aXJlZCBlbGVtZW50cyBub3QgZm91bmQgKGRhcmtlbmVyIGFuZCBjb250YWluZXIgZWxlbWVudCknO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdGhhdCBoYW5kbGVzIGRlbGVnYXRpb24gZXZlbnRzIGZvciBkcm9wZG93bnNcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2RlbGVnYXRlRnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgY3VycmVudE9wZW4gPSB0aGlzLmN1cnJlbnRPcGVuLFxuICAgICAgICAgICAgdGFyZ2V0SGFzID0gZS50YXJnZXQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSksXG4gICAgICAgICAgICBwYXJlbnRIYXMgPSBlLnRhcmdldC5wYXJlbnROb2RlID9cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpIDogZmFsc2UsXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRIYXMgPyBlLnRhcmdldCA6IGUudGFyZ2V0LnBhcmVudE5vZGUsXG4gICAgICAgICAgICB0YXJnZXRJc0N1cnJlbnQgPSB0YXJnZXQgPT09IHRoaXMuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoY3VycmVudE9wZW4gJiYgIVV0aWwuaXNQYXJ0T2ZOb2RlKGUudGFyZ2V0LCBjdXJyZW50T3BlbikgfHwgdGFyZ2V0SXNDdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICBpZih0YXJnZXRJc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0SXNDdXJyZW50ID8gZmFsc2UgOiB0aGlzLl9kZWxlZ2F0ZUZ1bmN0aW9uKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldEhhcyB8fCBwYXJlbnRIYXMgJiYgIWN1cnJlbnRPcGVuKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJvcGRvd24odGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoQVRUUl9DTE9TRV9EUk9QRE9XTikpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghVXRpbC5pc1BhcnRPZk5vZGUoZS50YXJnZXQsIGN1cnJlbnRPcGVuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgRXZlbnRzIGZvciB0aGlzIGRyb3Bkb3duIGNvbnRhaW5lclxuICAgICAqIEByZXR1cm5zIHtEcm9wZG93bn1cbiAgICAgKi9cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihTZXR0aW5ncy5nZXRUYWJFdmVudCgpLCB0aGlzLl9kZWxlZ2F0ZUZ1bmN0aW9uLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGlzIGluc3RhbmNlLCB1bmJpbmRzIGV2ZW50c1xuICAgICAqIEByZXR1cm5zIHtEcm9wZG93bn1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIHRoaXMuX2RlbGVnYXRlRnVuY3Rpb24uYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgaW5zdGFuY2Ugb24gY2xvc2Ugb2YgZHJvcGRvd25cbiAgICAgKiBAcGFyYW0gdlxuICAgICAqIEByZXR1cm5zIHtEcm9wZG93bn1cbiAgICAgKi9cbiAgICBzZXREZXN0cm95T25DbG9zZSh2KSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU9uQ2xvc2UgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFdpbGwgYWRkIHRoZSByaWdodCBjbGFzcyB0byBjb250YWluZXIgZm9yIHNwZWNpZmljIGRhcmtlbmVyIGlkXG4gICAgICogQHBhcmFtIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHNob3dcbiAgICAgKi9cbiAgICB0b2dnbGVEYXJrZW5lclRvZ2dsZXIoaW5zdGFuY2UsIHNob3cpIHtcbiAgICAgICAgdmFyIGNscyA9ICd0b2dnbGUtJyArIChpbnN0YW5jZS5pZCB8fCBDTFNfREFSS0VORVJfRFJPUERPV04pLFxuICAgICAgICAgICAgY2xhc3NMaXN0ID0gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0O1xuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIERyb3Bkb3duIG9uIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufFByb21pc2V9XG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHZhciBjdXJyZW50T3BlbiA9IHRoaXMuY3VycmVudE9wZW47XG4gICAgICAgIGlmICghY3VycmVudE9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnV0dXJlLCBkYXJrZW5lckluc3RhbmNlID0gY3VycmVudE9wZW4uZmxleERhcmtlbmVySW5zdGFuY2UgfHwgdGhpcy5kYXJrZW5lciwgdGhpc0N1cnJlbnRPcGVuID0gY3VycmVudE9wZW47XG5cbiAgICAgICAgZnV0dXJlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50T3BlbikucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgICAgICBVdGlsLmFkZEV2ZW50T25jZShTZXR0aW5ncy5nZXRUcmFuc2l0aW9uRXZlbnQoKSwgY3VycmVudE9wZW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudC5kaXNwYXRjaEFuZEZpcmUodGhpc0N1cnJlbnRPcGVuLCBFVkVOVF9EUk9QRE9XTl9DTE9TRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYSBuZXcgZHJvcGRvd24gaGFzIGJlZW4gb3BlbmVkIGluIHRoZSBtZWFudGltZSwgZG8gbm90IHJlbW92ZSBkYXJrZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURhcmtlbmVyVG9nZ2xlcihkYXJrZW5lckluc3RhbmNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFNldHRpbmdzLmdldCgpLmNhbnZhc1RvZ2dsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIFNldHRpbmdzLmdldCgpLmRhcmtlbmVyRmFkZURlbGF5KTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIEV2ZW50LmRpc3BhdGNoQW5kRmlyZSh0aGlzQ3VycmVudE9wZW4sIEVWRU5UX0RST1BET1dOX0NMT1NFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRPcGVuLmNsYXNzTGlzdC5yZW1vdmUoQ0xTX09QRU4pO1xuXG4gICAgICAgIGlmIChjdXJyZW50T3Blbi5mbGV4RGFya2VuZXJJbnN0YW5jZSkge1xuICAgICAgICAgICAgY3VycmVudE9wZW4uZmxleERhcmtlbmVySW5zdGFuY2UuY2xhc3NMaXN0LnJlbW92ZShEQVJLRU5FUl9JTklUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGFya2VuZXIuY2xhc3NMaXN0LnJlbW92ZShEQVJLRU5FUl9JTklUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudE9wZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3lPbkNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdXR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGRyb3Bkb3duIG9uIGdpdmVuIHRhcmdldCBhbmQgb3BlbnMgaXRcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgdGFyZ2V0IHdoZXJlIHRoaXMgZHJvcGRvd24gaXMgcGxhY2VkXG4gICAgICogQHBhcmFtIHtGbGV4Q3NzLldpZGdldH0gW3RoaXNXaWRnZXRdIGlmIGdpdmVuIHdpbGwgdXNlIHdpZGdldCBpbnN0ZWFkIG9mIHdpZGdldCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0ZsZXhDc3MuRHJvcGRvd259XG4gICAgICovXG4gICAgY3JlYXRlRHJvcGRvd24odGFyZ2V0LCB0aGlzV2lkZ2V0KSB7XG4gICAgICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRocm93ICdEcm9wZG93biB0YXJnZXQgbm90IGZvdW5kJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWRnZXQgPSB0aGlzV2lkZ2V0IHx8IFdpZGdldC5maW5kV2lkZ2V0KHRhcmdldCksIGZ1dHVyZSxcbiAgICAgICAgICAgIGRhdGEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSksIGRyb3Bkb3duQ29udGFpbmVyRWxlbWVudCA9IGRvYy5nZXRFbGVtZW50QnlJZChkYXRhKSxcbiAgICAgICAgICAgIGFzeW5jID0gIWRyb3Bkb3duQ29udGFpbmVyRWxlbWVudCAmJiBXaWRnZXQuaXNXaWRnZXQod2lkZ2V0KSA/IHdpZGdldC5nZXRBc3luYygpIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGFzeW5jKSB7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChTVEFURV9MT0FESU5HKTtcbiAgICAgICAgICAgIHRhcmdldC5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZnV0dXJlID0gYXN5bmMudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIGlmIChyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoQVRUUl9OQU1FLCByLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIEVsZW1lbnQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IENMU19EUk9QRE9XTjtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSByO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gVXRpbC5ndWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhY2hlIHRhcmdldCBmb3IgbGF0ZXIgdXNlOlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKEFUVFJfTkFNRSwgZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFNUQVRFX0xPQURJTkcpO1xuICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRocm93ICdDb3VsZCBub3QgZm91bmQgRHJvcGRvd24gY29udGFpbmVyIHdpdGggSUQgXCInICsgZGF0YSArICdcIic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdXR1cmUgPSBuZXcgUHJvbWlzZSgocikgPT4ge1xuICAgICAgICAgICAgICAgIHIoZHJvcGRvd25Db250YWluZXJFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnV0dXJlLnRoZW4oZnVuY3Rpb24gKGRyb3Bkb3duQ29udGVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTa2lwIG9uZSBmcmFtZSB0byBzaG93IGFuaW1hdGlvblxuICAgICAgICAgICAgdGFyZ2V0LmRyb3Bkb3duQ29udGVudCA9IGRyb3Bkb3duQ29udGVudDtcbiAgICAgICAgICAgIHZhciBpc0Fic29sdXRlID0gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoZHJvcGRvd25Db250ZW50KS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcblxuICAgICAgICAgICAgaWYgKCF0YXJnZXQuZmxleENvbGxpc2lvbkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb25DID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBVFRSX0NDKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuZmxleENvbGxpc2lvbkNvbnRhaW5lciA9IGNvbGxpc2lvbkMgP1xuICAgICAgICAgICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChjb2xsaXNpb25DKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKENMU19PUEVOKTtcbiAgICAgICAgICAgIGlmIChkcm9wZG93bkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMU19PUEVOKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wZW4gPSBkcm9wZG93bkNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBjb2xsaXNpb246XG4gICAgICAgICAgICAgICAgdmFyIHNlbGZUYXJnZXQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKEFUVFJfREFUQV9UQVJHRVQpO1xuICAgICAgICAgICAgICAgIHNlbGZUYXJnZXQgPSBzZWxmVGFyZ2V0ID8gZG9jLmdldEVsZW1lbnRCeUlkKHNlbGZUYXJnZXQpIDogdGFyZ2V0O1xuICAgICAgICAgICAgICAgIFV0aWwuc2V0dXBQb3NpdGlvbk5lYXJieShzZWxmVGFyZ2V0LCBkcm9wZG93bkNvbnRlbnQsIHRhcmdldC5mbGV4Q29sbGlzaW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChTZXR0aW5ncy5nZXQoKS5jYW52YXNUb2dnbGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbmFsbHkgZ2V0IGN1c3RvbSBkYXJrZW5lciBjb250YWluZXIgZm9yIHRhcmdldFxuICAgICAgICAgICAgICAgIHZhciBkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShBVFRSX0RBUktFTkVSKTtcbiAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuZmxleERhcmtlbmVySW5zdGFuY2UgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoZCk7XG4gICAgICAgICAgICAgICAgICAgIChkcm9wZG93bkNvbnRlbnQuZmxleERhcmtlbmVySW5zdGFuY2UgfHwgdGhpcy5kYXJrZW5lcikuY2xhc3NMaXN0LnRvZ2dsZShEQVJLRU5FUl9JTklUKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhcmtlbmVyLmNsYXNzTGlzdC50b2dnbGUoREFSS0VORVJfSU5JVCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEYXJrZW5lclRvZ2dsZXIoZHJvcGRvd25Db250ZW50LmZsZXhEYXJrZW5lckluc3RhbmNlIHx8IHRoaXMuZGFya2VuZXIsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLnRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	/*!
	 * FlexCss.LightBox
	 * Licensed under the MIT License (MIT)
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 */
	
	'use strict';
	
	/* global Image, TouchEvent*/
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _Object$assign = __webpack_require__(79)['default'];
	
	var _Promise = __webpack_require__(38)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Modal = __webpack_require__(104);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _utilSettings = __webpack_require__(101);
	
	var _utilSettings2 = _interopRequireDefault(_utilSettings);
	
	var _Widget = __webpack_require__(105);
	
	var _Widget2 = _interopRequireDefault(_Widget);
	
	var ATTR_MAX_WIDTH = 'data-original-width';
	var ATTR_MAX_HEIGHT = 'data-original-height';
	var ATTR_SRC = 'data-src';
	
	var CLS_HAS_PREV = 'has-prev';
	var CLS_HAS_NEXT = 'has-next';
	var CLS_LOADING = 'loading';
	
	var ATTR_NO_THUMBNAIL = 'data-no-thumbnail';
	var ATTR_DATA_HREF = 'data-href';
	var ATTR_HREF = 'href';
	
	var KEY_NEXT = 39;
	var KEY_PREV = 37;
	var ATTR_CLOSE = 'data-close-modal';
	/**
	 * A Simple LightBox
	 */
	
	var LightBox = (function () {
	
	    /**
	     * Creates a new Lightbox
	     * @param DelegateContainer
	     * @param AttributeSelector
	     * @param ModalAppend
	     * @param [options]
	     */
	
	    function LightBox(DelegateContainer, AttributeSelector, ModalAppend, options) {
	        _classCallCheck(this, LightBox);
	
	        var thisDelegateContainer = DelegateContainer instanceof HTMLElement ? DelegateContainer : document.getElementById(DelegateContainer);
	
	        this._modalAppend = ModalAppend || DelegateContainer;
	        /**
	         * @type {Function}
	         */
	        this._resizeEvent = null;
	        /**
	         * @type {Function}
	         */
	        this._keyboardNextEvent = null;
	        /**
	         * @type {Promise}
	         */
	        this._future = null;
	        /**
	         * @type {Promise}
	         */
	        this._nextFuture = this._future;
	        /**
	         * @type {HTMLElement}
	         */
	        this._imageContainer = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this._modalContainerDiv = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this._contentContainer = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this._closerContainerDiv = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this._delegateContainer = thisDelegateContainer;
	        /**
	         * @type {HTMLElement}
	         */
	        this._attributeSelector = AttributeSelector;
	        /**
	         * @type {Widget}
	         */
	        this._widget = null;
	        /**
	         * @type {boolean}
	         */
	        this._isOpen = false;
	        /**
	         * @type {HTMLElement}
	         */
	        this.target = null;
	        /**
	         * @type {HTMLElement}
	         */
	        this.img = null;
	        /**
	         * @type {boolean}
	         */
	        this._isLoading = false;
	
	        /**
	         * Default options
	         */
	        this.options = {
	            // set if prev and next should be available
	            registerPrevNextEvents: true,
	            // set if modal should be closed after last image
	            closeOnLast: true,
	            // called when next image is requested (either by keyboard or click), return false to abort
	            onNext: function onNext() {
	                return true;
	            },
	            onClose: function onClose() {},
	            getNext: null,
	            getPrev: null,
	            // called when underlying target changed
	            onSwitchImage: function onSwitchImage() {}
	        };
	
	        _Object$assign(this.options, options);
	    }
	
	    /**
	     * @param {HTMLElement} node
	     * @returns {HTMLElement|null}
	     */
	
	    _createClass(LightBox, [{
	        key: 'findImmediateNextTarget',
	        value: function findImmediateNextTarget(node) {
	            if (node && node.children[0].hasAttribute(this._attributeSelector)) {
	                return node.children[0];
	            }
	            return null;
	        }
	
	        /**
	         * Will fetch the next element of a lightBox
	         * @param {HTMLElement} target
	         * @returns {null|HTMLElement}
	         */
	    }, {
	        key: 'getNext',
	        value: function getNext(target) {
	            if (this.options.getNext) {
	                return this.options.getNext.apply(this, [target]);
	            }
	            return this.findImmediateNextTarget(target.parentNode.nextElementSibling);
	        }
	
	        /**
	         * Will fetch the previous element of a lightBox
	         * @param {HTMLElement} target
	         * @returns {null|HTMLElement}
	         */
	    }, {
	        key: 'getPrev',
	        value: function getPrev(target) {
	            if (this.options.getPrev) {
	                return this.options.getPrev.apply(this, [target]);
	            }
	            return this.findImmediateNextTarget(target.parentNode.previousElementSibling);
	        }
	
	        /**
	         * Registers events for delegate container
	         */
	    }, {
	        key: 'registerEvents',
	        value: function registerEvents(onOpen) {
	            var _this = this;
	
	            this._delegateContainer.addEventListener(_utilSettings2['default'].getTabEvent(), function (e) {
	                var target = e.target,
	                    parent = target.parentNode,
	                    validTarget = target.hasAttribute(_this._attributeSelector),
	                    parentIsValid = parent && parent.hasAttribute(_this._attributeSelector);
	                if (!validTarget && parentIsValid) {
	                    validTarget = true;
	                    target = parent;
	                }
	                if (validTarget) {
	                    e.preventDefault();
	                    _this.open(target).then(function (r) {
	                        if (onOpen) {
	                            onOpen.apply(_this, [r, target]);
	                        }
	                    });
	                }
	            });
	        }
	
	        /**
	         * @returns {HTMLElement}
	         */
	    }, {
	        key: 'getContentContainer',
	        value: function getContentContainer() {
	            return this._contentContainer;
	        }
	
	        /**
	         * Setup max-width and max-height
	         * @param {HTMLElement} target
	         * @param {HTMLElement} img
	         * @param {HTMLElement} loadedImage
	         * @private
	         */
	    }, {
	        key: 'switchImageByDirection',
	
	        /**
	         * Switches to the next image
	         * @param {boolean} direction
	         */
	        value: function switchImageByDirection(direction) {
	            var next = direction ? this.getPrev(this.target) : this.getNext(this.target);
	            if (this.options.onNext.apply(this, [next])) {
	                return this.switchImage(next);
	            }
	            return new _Promise(function (_, reject) {
	                return reject(next);
	            });
	        }
	
	        /**
	         * Checks if lightbox is currently loading
	         * @returns {boolean}
	         */
	    }, {
	        key: 'isLoading',
	        value: function isLoading() {
	            return this._isLoading;
	        }
	
	        /**
	         * Checks if modal should be closed
	         * @private
	         */
	    }, {
	        key: '_runOptionalClose',
	        value: function _runOptionalClose() {
	            if (this.options.closeOnLast) {
	                this.modal.close();
	            }
	        }
	    }, {
	        key: '_setupPrevNextStates',
	        value: function _setupPrevNextStates() {
	            var target = this.target,
	                hasPrev = this.getPrev(target),
	                hasNext = this.getNext(target),
	                hasPrevClass = CLS_HAS_PREV,
	                hasNextClass = CLS_HAS_NEXT;
	            // because IE does not support the second toggle parameter, we need to do this manually
	            if (hasPrev) {
	                this._imageContainer.classList.add(hasPrevClass);
	            } else {
	                this._imageContainer.classList.remove(hasPrevClass);
	            }
	            if (hasNext) {
	                this._imageContainer.classList.add(hasNextClass);
	            } else {
	                this._imageContainer.classList.remove(hasNextClass);
	            }
	        }
	
	        /**
	         * @param img
	         * @private
	         */
	    }, {
	        key: '_calculateContainer',
	        value: function _calculateContainer(img) {
	            if (_utilSettings2['default'].isIE()) {
	                setTimeout((function () {
	                    this._imageContainer.style.height = img.offsetHeight + 'px';
	                }).bind(this), 0);
	            }
	        }
	
	        /**
	         * Switch to a specific image
	         * @param next
	         * @returns {*}
	         */
	    }, {
	        key: 'switchImage',
	        value: function switchImage(next) {
	            var _this2 = this;
	
	            var self = this,
	                img = this.img;
	            this._isLoading = true;
	            self._nextFuture = new _Promise((function (resolve, reject) {
	                // notify observers about image switching
	                self.options.onSwitchImage.apply(self, [self._nextFuture]);
	                if (next) {
	                    var nextThumb = next.hasAttribute(ATTR_NO_THUMBNAIL) ? next : next.children[0] || next,
	                        nextHighRes = next.getAttribute(ATTR_DATA_HREF) || next.getAttribute(ATTR_HREF),
	                        nextSource = nextThumb.getAttribute(ATTR_SRC) || nextThumb.src || nextHighRes,
	                        nextImgObject = new Image();
	
	                    if (!nextSource) {
	                        reject(next);
	                        return;
	                    }
	                    // set new target to next element
	                    _this2.target = next;
	                    nextImgObject.src = nextSource;
	                    self._imageContainer.classList.add(CLS_LOADING);
	                    nextImgObject.addEventListener('load', (function () {
	                        img.src = nextSource;
	                        self._imageContainer.style.backgroundImage = 'url(' + nextSource + ')';
	                        LightBox._setupMaxWidthHeight(next, img, nextImgObject);
	                        self._calculateContainer(img);
	                        self.highRes(nextThumb, nextHighRes);
	                        self._setupPrevNextStates();
	                        self._imageContainer.classList.remove(CLS_LOADING);
	                        this._isLoading = false;
	                        resolve(nextSource, this.target);
	                    }).bind(_this2));
	                } else {
	                    reject(_this2);
	                }
	            }).bind(this));
	            return self._nextFuture;
	        }
	
	        /**
	         * Setup High-Resolution picture
	         * @param {HTMLElement} thisThumbnail
	         * @param {String} thisImgHighResolution
	         */
	    }, {
	        key: 'highRes',
	        value: function highRes(thisThumbnail, thisImgHighResolution) {
	
	            if (thisImgHighResolution && thisThumbnail.src !== thisImgHighResolution) {
	                var highImageObj = new Image();
	                highImageObj.src = thisImgHighResolution;
	                highImageObj.addEventListener('load', (function () {
	                    // if current image is still available
	                    if (this._getSrc(thisThumbnail) === this.img.src) {
	                        this.img.src = thisImgHighResolution;
	                        this._imageContainer.style.backgroundImage = 'url(' + thisImgHighResolution + ')';
	                    }
	                }).bind(this));
	            }
	        }
	
	        /**
	         * Extracts the source of an image
	         * @param target
	         * @returns {String|null}
	         * @private
	         */
	    }, {
	        key: '_getSrc',
	        value: function _getSrc(target) {
	            return target.getAttribute(ATTR_SRC) || target.src;
	        }
	
	        /**
	         * Will show a lightBox on given target
	         * @param {HTMLElement} target
	         * @returns {$.Deferred|*}
	         */
	    }, {
	        key: 'open',
	        value: function open(target) {
	            var self = this;
	
	            if (!target) {
	                return false;
	            }
	
	            this.target = target;
	
	            // if lightBox is open, we just switch to the new target image
	            if (this._isOpen && target) {
	                return this.switchImage(target).then((function () {
	                    return this;
	                }).bind(this));
	            }
	
	            this._isOpen = true;
	
	            /**
	             * Setup Widget for modal
	             * @type {Widget}
	             */
	            this._widget = new _Widget2['default']().setAsync((function () {
	                var _this3 = this;
	
	                // thumbnail is either target itself or expected to be first childNode
	                var thumbnail = target.hasAttribute(ATTR_NO_THUMBNAIL) ? target : target.children[0] || target;
	
	                var imgHighResolution = target.getAttribute(ATTR_DATA_HREF) || target.getAttribute(ATTR_HREF),
	                    imgSrc = this._getSrc(thumbnail) || imgHighResolution;
	
	                var imageObj = new Image();
	                imageObj.src = imgSrc;
	                this._imageContainer = document.createElement('div');
	                this._modalContainerDiv = document.createElement('div');
	                this._closerContainerDiv = document.createElement('i');
	                this._contentContainer = document.createElement('div');
	
	                this._closerContainerDiv.className = 'modal-close modal-close-lightbox icon-cancel-1';
	                this._closerContainerDiv.setAttribute(ATTR_CLOSE, ATTR_CLOSE);
	
	                this._modalContainerDiv.className = 'modal image-modal';
	                this._modalContainerDiv.appendChild(this._imageContainer);
	                this._modalContainerDiv.appendChild(this._contentContainer);
	                this._modalContainerDiv.appendChild(this._closerContainerDiv);
	                this._contentContainer.className = 'content-container';
	                this._isLoading = true;
	                this._future = new _Promise((function (resolve) {
	                    imageObj.addEventListener('load', (function () {
	                        this._imageContainer.className = 'image-container';
	                        var img = document.createElement('img');
	                        // current image
	                        this.img = img;
	
	                        img.src = imgSrc;
	                        LightBox._setupMaxWidthHeight(target, img, imageObj);
	                        this._imageContainer.appendChild(img);
	                        this._imageContainer.style.backgroundImage = 'url(' + imgSrc + ')';
	
	                        resolve(self._modalContainerDiv);
	                        this._isLoading = false;
	
	                        if (_utilSettings2['default'].isIE()) {
	                            self._resizeEvent = global.addEventListener('resize', function () {
	                                setTimeout(function () {
	                                    self._imageContainer.style.height = img.offsetHeight + 'px';
	                                }, 0);
	                            });
	                        }
	
	                        if (self.options.registerPrevNextEvents) {
	                            self._setupPrevNextStates();
	                            // prev or next on touch/click
	                            self._imageContainer.addEventListener(_utilSettings2['default'].getTabEvent(), function (e) {
	                                if (self.isLoading()) {
	                                    return;
	                                }
	                                e.preventDefault();
	
	                                var ev = e;
	                                var pageX = global.TouchEvent && ev instanceof TouchEvent ? ev.changedTouches[0].pageX : ev.pageX;
	                                var rect = self._imageContainer.getBoundingClientRect(),
	                                    imgX = rect.left,
	                                    wrapperWidth = rect.width,
	                                    posX = pageX - imgX;
	
	                                self.switchImageByDirection(wrapperWidth / 2 > posX)['catch'](function () {
	                                    self._runOptionalClose();
	                                });
	                            });
	
	                            // register keyboard events
	                            self._keyboardNextEvent = function (e) {
	                                if (e.keyCode === KEY_NEXT || e.keyCode === KEY_PREV) {
	                                    if (self.isLoading()) {
	                                        return;
	                                    }
	                                    self.switchImageByDirection(e.keyCode === KEY_PREV)['catch'](function () {
	                                        self._runOptionalClose();
	                                    });
	                                }
	                            };
	                            global.addEventListener('keydown', self._keyboardNextEvent);
	                        } else {
	                            self._imageContainer.addEventListener(_utilSettings2['default'].getTabEvent(), function () {
	                                self._runOptionalClose();
	                            });
	                        }
	
	                        self.highRes(thumbnail, imgHighResolution);
	                    }).bind(_this3));
	                }).bind(this));
	                this._future.then((function () {
	                    self._calculateContainer(this.img);
	                }).bind(this));
	                self._modalContainerDiv.addEventListener(_Modal.EVENT_MODAL_CLOSED, (function () {
	                    // cleanup:
	                    this._modalContainerDiv.parentNode.removeChild(this._modalContainerDiv);
	                    this.options.onClose.apply(self);
	                    this._isOpen = false;
	                    this.modal.destroy();
	                    // unbind events
	                    if (this._keyboardNextEvent) {
	                        global.removeEventListener('keydown', self._keyboardNextEvent);
	                    }
	                    if (this._resizeEvent) {
	                        global.removeEventListener('resize', self._resizeEvent);
	                    }
	                }).bind(this));
	
	                return this._future;
	            }).bind(this));
	
	            this._nextFuture = this._future;
	
	            if (self._widget) {
	                this.modal = new _Modal2['default'](this._modalAppend);
	                // make sure we close stack before
	                return this.modal.close().fromWidget(self._widget).then(function () {
	                    return self._future.then(function () {
	                        return self;
	                    });
	                });
	            } else {
	                return false;
	            }
	        }
	    }], [{
	        key: '_setupMaxWidthHeight',
	        value: function _setupMaxWidthHeight(target, img, loadedImage) {
	            var nextMaxWidth = target.getAttribute(ATTR_MAX_WIDTH),
	                nextMaxHeight = target.getAttribute(ATTR_MAX_HEIGHT);
	            if (nextMaxWidth && nextMaxHeight) {
	                img.style.maxWidth = nextMaxWidth + "px";
	                img.style.maxHeight = nextMaxHeight + "px";
	            } else {
	                img.style.maxWidth = loadedImage.width + "px";
	                img.style.maxHeight = loadedImage.height + "px";
	            }
	        }
	    }]);
	
	    return LightBox;
	})();
	
	exports['default'] = LightBox;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0xpZ2h0Qm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFJSyxPQUFPOzs7OzRCQUVKLGVBQWU7Ozs7c0JBQ2pCLFFBQVE7Ozs7QUFFM0IsSUFBTSxjQUFjLEdBQUcscUJBQXFCLENBQUM7QUFDN0MsSUFBTSxlQUFlLEdBQUcsc0JBQXNCLENBQUM7QUFDL0MsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDOztBQUU1QixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7QUFDaEMsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQzs7QUFFOUIsSUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztBQUM5QyxJQUFNLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFDbkMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDOztBQUV6QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDcEIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLElBQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDOzs7OztJQUtoQyxRQUFROzs7Ozs7Ozs7O0FBU0MsYUFUVCxRQUFRLENBU0UsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTs4QkFUdEUsUUFBUTs7QUFXTixZQUFJLHFCQUFxQixHQUFHLGlCQUFpQixZQUFZLFdBQVcsR0FBRyxpQkFBaUIsR0FDcEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUUvQyxZQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsSUFBSSxpQkFB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LFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUM5QyxtQkFBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDbkQ7U0FDSjs7O1dBdExDLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6Ii9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL0xpZ2h0Qm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBEYXZpZCBIZWlkcmljaCwgQm93bGluZ1ggPG1lQGJvd2xpbmd4LmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIVxuICogRmxleENzcy5MaWdodEJveFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgSW1hZ2UsIFRvdWNoRXZlbnQqL1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnTW9kYWwnO1xuaW1wb3J0IHtFVkVOVF9NT0RBTF9DTE9TRUR9IGZyb20gJ01vZGFsJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICd1dGlsL1NldHRpbmdzJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnV2lkZ2V0JztcblxuY29uc3QgQVRUUl9NQVhfV0lEVEggPSAnZGF0YS1vcmlnaW5hbC13aWR0aCc7XG5jb25zdCBBVFRSX01BWF9IRUlHSFQgPSAnZGF0YS1vcmlnaW5hbC1oZWlnaHQnO1xuY29uc3QgQVRUUl9TUkMgPSAnZGF0YS1zcmMnO1xuXG5jb25zdCBDTFNfSEFTX1BSRVYgPSAnaGFzLXByZXYnO1xuY29uc3QgQ0xTX0hBU19ORVhUID0gJ2hhcy1uZXh0JztcbmNvbnN0IENMU19MT0FESU5HID0gJ2xvYWRpbmcnO1xuXG5jb25zdCBBVFRSX05PX1RIVU1CTkFJTCA9ICdkYXRhLW5vLXRodW1ibmFpbCc7XG5jb25zdCBBVFRSX0RBVEFfSFJFRiA9ICdkYXRhLWhyZWYnO1xuY29uc3QgQVRUUl9IUkVGID0gJ2hyZWYnO1xuXG5jb25zdCBLRVlfTkVYVCA9IDM5O1xuY29uc3QgS0VZX1BSRVYgPSAzNztcbmNvbnN0IEFUVFJfQ0xPU0UgPSAnZGF0YS1jbG9zZS1tb2RhbCc7XG4vKipcbiAqIEEgU2ltcGxlIExpZ2h0Qm94XG4gKi9cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBMaWdodEJveCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IExpZ2h0Ym94XG4gICAgICogQHBhcmFtIERlbGVnYXRlQ29udGFpbmVyXG4gICAgICogQHBhcmFtIEF0dHJpYnV0ZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIE1vZGFsQXBwZW5kXG4gICAgICogQHBhcmFtIFtvcHRpb25zXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKERlbGVnYXRlQ29udGFpbmVyLCBBdHRyaWJ1dGVTZWxlY3RvciwgTW9kYWxBcHBlbmQsIG9wdGlvbnMpIHtcblxuICAgICAgICB2YXIgdGhpc0RlbGVnYXRlQ29udGFpbmVyID0gRGVsZWdhdGVDb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IERlbGVnYXRlQ29udGFpbmVyIDpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERlbGVnYXRlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLl9tb2RhbEFwcGVuZCA9IE1vZGFsQXBwZW5kIHx8IERlbGVnYXRlQ29udGFpbmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVzaXplRXZlbnQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fa2V5Ym9hcmROZXh0RXZlbnQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9mdXR1cmUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1Byb21pc2V9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9uZXh0RnV0dXJlID0gdGhpcy5fZnV0dXJlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXIgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbW9kYWxDb250YWluZXJEaXYgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29udGVudENvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jbG9zZXJDb250YWluZXJEaXYgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGVsZWdhdGVDb250YWluZXIgPSB0aGlzRGVsZWdhdGVDb250YWluZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVTZWxlY3RvciA9IEF0dHJpYnV0ZVNlbGVjdG9yO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1dpZGdldH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3dpZGdldCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWcgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBzZXQgaWYgcHJldiBhbmQgbmV4dCBzaG91bGQgYmUgYXZhaWxhYmxlXG4gICAgICAgICAgICByZWdpc3RlclByZXZOZXh0RXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgLy8gc2V0IGlmIG1vZGFsIHNob3VsZCBiZSBjbG9zZWQgYWZ0ZXIgbGFzdCBpbWFnZVxuICAgICAgICAgICAgY2xvc2VPbkxhc3Q6IHRydWUsXG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBuZXh0IGltYWdlIGlzIHJlcXVlc3RlZCAoZWl0aGVyIGJ5IGtleWJvYXJkIG9yIGNsaWNrKSwgcmV0dXJuIGZhbHNlIHRvIGFib3J0XG4gICAgICAgICAgICBvbk5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TmV4dDogbnVsbCxcbiAgICAgICAgICAgIGdldFByZXY6IG51bGwsXG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB1bmRlcmx5aW5nIHRhcmdldCBjaGFuZ2VkXG4gICAgICAgICAgICBvblN3aXRjaEltYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSW1tZWRpYXRlTmV4dFRhcmdldChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuY2hpbGRyZW5bMF0uaGFzQXR0cmlidXRlKHRoaXMuX2F0dHJpYnV0ZVNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBmZXRjaCB0aGUgbmV4dCBlbGVtZW50IG9mIGEgbGlnaHRCb3hcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyB7bnVsbHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXROZXh0KHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdldE5leHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0TmV4dC5hcHBseSh0aGlzLCBbdGFyZ2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEltbWVkaWF0ZU5leHRUYXJnZXQodGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWxsIGZldGNoIHRoZSBwcmV2aW91cyBlbGVtZW50IG9mIGEgbGlnaHRCb3hcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyB7bnVsbHxIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRQcmV2KHRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdldFByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0UHJldi5hcHBseSh0aGlzLCBbdGFyZ2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEltbWVkaWF0ZU5leHRUYXJnZXQodGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGV2ZW50cyBmb3IgZGVsZWdhdGUgY29udGFpbmVyXG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudHMob25PcGVuKSB7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCwgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdmFsaWRUYXJnZXQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKHRoaXMuX2F0dHJpYnV0ZVNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJc1ZhbGlkID0gcGFyZW50ICYmIHBhcmVudC5oYXNBdHRyaWJ1dGUodGhpcy5fYXR0cmlidXRlU2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZFRhcmdldCAmJiBwYXJlbnRJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRUYXJnZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZFRhcmdldCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4odGFyZ2V0KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbk9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbi5hcHBseSh0aGlzLCBbciwgdGFyZ2V0XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIG1heC13aWR0aCBhbmQgbWF4LWhlaWdodFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGltZ1xuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGxvYWRlZEltYWdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX3NldHVwTWF4V2lkdGhIZWlnaHQodGFyZ2V0LCBpbWcsIGxvYWRlZEltYWdlKSB7XG4gICAgICAgIGNvbnN0IG5leHRNYXhXaWR0aCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9NQVhfV0lEVEgpLFxuICAgICAgICAgICAgbmV4dE1heEhlaWdodCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9NQVhfSEVJR0hUKTtcbiAgICAgICAgaWYgKG5leHRNYXhXaWR0aCAmJiBuZXh0TWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBpbWcuc3R5bGUubWF4V2lkdGggPSBuZXh0TWF4V2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBpbWcuc3R5bGUubWF4SGVpZ2h0ID0gbmV4dE1heEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltZy5zdHlsZS5tYXhXaWR0aCA9IGxvYWRlZEltYWdlLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgaW1nLnN0eWxlLm1heEhlaWdodCA9IGxvYWRlZEltYWdlLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRvIHRoZSBuZXh0IGltYWdlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBzd2l0Y2hJbWFnZUJ5RGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBuZXh0ID0gZGlyZWN0aW9uID8gdGhpcy5nZXRQcmV2KHRoaXMudGFyZ2V0KSA6IHRoaXMuZ2V0TmV4dCh0aGlzLnRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25OZXh0LmFwcGx5KHRoaXMsIFtuZXh0XSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN3aXRjaEltYWdlKG5leHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiByZWplY3QobmV4dCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBsaWdodGJveCBpcyBjdXJyZW50bHkgbG9hZGluZ1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgbW9kYWwgc2hvdWxkIGJlIGNsb3NlZFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3J1bk9wdGlvbmFsQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkxhc3QpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zZXR1cFByZXZOZXh0U3RhdGVzKCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldCwgaGFzUHJldiA9IHRoaXMuZ2V0UHJldih0YXJnZXQpLCBoYXNOZXh0ID0gdGhpcy5nZXROZXh0KHRhcmdldCksXG4gICAgICAgICAgICBoYXNQcmV2Q2xhc3MgPSBDTFNfSEFTX1BSRVYsIGhhc05leHRDbGFzcyA9IENMU19IQVNfTkVYVDtcbiAgICAgICAgLy8gYmVjYXVzZSBJRSBkb2VzIG5vdCBzdXBwb3J0IHRoZSBzZWNvbmQgdG9nZ2xlIHBhcmFtZXRlciwgd2UgbmVlZCB0byBkbyB0aGlzIG1hbnVhbGx5XG4gICAgICAgIGlmIChoYXNQcmV2KSB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGhhc1ByZXZDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGhhc1ByZXZDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaGFzTmV4dENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoaGFzTmV4dENsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpbWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jYWxjdWxhdGVDb250YWluZXIoaW1nKSB7XG4gICAgICAgIGlmIChTZXR0aW5ncy5pc0lFKCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGltZy5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaCB0byBhIHNwZWNpZmljIGltYWdlXG4gICAgICogQHBhcmFtIG5leHRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzd2l0Y2hJbWFnZShuZXh0KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLCBpbWcgPSB0aGlzLmltZztcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5fbmV4dEZ1dHVyZSA9IG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBub3RpZnkgb2JzZXJ2ZXJzIGFib3V0IGltYWdlIHN3aXRjaGluZ1xuICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uU3dpdGNoSW1hZ2UuYXBwbHkoc2VsZiwgW3NlbGYuX25leHRGdXR1cmVdKTtcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRUaHVtYiA9IG5leHQuaGFzQXR0cmlidXRlKEFUVFJfTk9fVEhVTUJOQUlMKSA/IG5leHQgOiAobmV4dC5jaGlsZHJlblswXSB8fCBuZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEhpZ2hSZXMgPSBuZXh0LmdldEF0dHJpYnV0ZShBVFRSX0RBVEFfSFJFRikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuZ2V0QXR0cmlidXRlKEFUVFJfSFJFRiksXG4gICAgICAgICAgICAgICAgICAgIG5leHRTb3VyY2UgPSBuZXh0VGh1bWIuZ2V0QXR0cmlidXRlKEFUVFJfU1JDKSB8fCBuZXh0VGh1bWIuc3JjIHx8IG5leHRIaWdoUmVzLFxuICAgICAgICAgICAgICAgICAgICBuZXh0SW1nT2JqZWN0ID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5leHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHNldCBuZXcgdGFyZ2V0IHRvIG5leHQgZWxlbWVudFxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV4dDtcbiAgICAgICAgICAgICAgICBuZXh0SW1nT2JqZWN0LnNyYyA9IG5leHRTb3VyY2U7XG4gICAgICAgICAgICAgICAgc2VsZi5faW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChDTFNfTE9BRElORyk7XG4gICAgICAgICAgICAgICAgbmV4dEltZ09iamVjdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gbmV4dFNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faW1hZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgbmV4dFNvdXJjZSArICcpJztcbiAgICAgICAgICAgICAgICAgICAgTGlnaHRCb3guX3NldHVwTWF4V2lkdGhIZWlnaHQobmV4dCwgaW1nLCBuZXh0SW1nT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsY3VsYXRlQ29udGFpbmVyKGltZyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaGlnaFJlcyhuZXh0VGh1bWIsIG5leHRIaWdoUmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2V0dXBQcmV2TmV4dFN0YXRlcygpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKENMU19MT0FESU5HKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV4dFNvdXJjZSwgdGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBzZWxmLl9uZXh0RnV0dXJlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgSGlnaC1SZXNvbHV0aW9uIHBpY3R1cmVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0aGlzVGh1bWJuYWlsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRoaXNJbWdIaWdoUmVzb2x1dGlvblxuICAgICAqL1xuICAgIGhpZ2hSZXModGhpc1RodW1ibmFpbCwgdGhpc0ltZ0hpZ2hSZXNvbHV0aW9uKSB7XG5cbiAgICAgICAgaWYgKHRoaXNJbWdIaWdoUmVzb2x1dGlvbiAmJiB0aGlzVGh1bWJuYWlsLnNyYyAhPT0gdGhpc0ltZ0hpZ2hSZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaGlnaEltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBoaWdoSW1hZ2VPYmouc3JjID0gdGhpc0ltZ0hpZ2hSZXNvbHV0aW9uO1xuICAgICAgICAgICAgaGlnaEltYWdlT2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgY3VycmVudCBpbWFnZSBpcyBzdGlsbCBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2V0U3JjKHRoaXNUaHVtYm5haWwpID09PSB0aGlzLmltZy5zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWcuc3JjID0gdGhpc0ltZ0hpZ2hSZXNvbHV0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB0aGlzSW1nSGlnaFJlc29sdXRpb24gKyAnKSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzb3VyY2Ugb2YgYW4gaW1hZ2VcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldFNyYyh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9TUkMpIHx8IHRhcmdldC5zcmM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBzaG93IGEgbGlnaHRCb3ggb24gZ2l2ZW4gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMgeyQuRGVmZXJyZWR8Kn1cbiAgICAgKi9cbiAgICBvcGVuKHRhcmdldCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgICAgIC8vIGlmIGxpZ2h0Qm94IGlzIG9wZW4sIHdlIGp1c3Qgc3dpdGNoIHRvIHRoZSBuZXcgdGFyZ2V0IGltYWdlXG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4gJiYgdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zd2l0Y2hJbWFnZSh0YXJnZXQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHVwIFdpZGdldCBmb3IgbW9kYWxcbiAgICAgICAgICogQHR5cGUge1dpZGdldH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3dpZGdldCA9IG5ldyBXaWRnZXQoKS5zZXRBc3luYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0aHVtYm5haWwgaXMgZWl0aGVyIHRhcmdldCBpdHNlbGYgb3IgZXhwZWN0ZWQgdG8gYmUgZmlyc3QgY2hpbGROb2RlXG4gICAgICAgICAgICB2YXIgdGh1bWJuYWlsID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZShBVFRSX05PX1RIVU1CTkFJTCkgPyB0YXJnZXQgOiAodGFyZ2V0LmNoaWxkcmVuWzBdIHx8IHRhcmdldCk7XG5cbiAgICAgICAgICAgIHZhciBpbWdIaWdoUmVzb2x1dGlvbiA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9EQVRBX0hSRUYpIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoQVRUUl9IUkVGKSxcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSB0aGlzLl9nZXRTcmModGh1bWJuYWlsKSB8fCBpbWdIaWdoUmVzb2x1dGlvbjtcblxuICAgICAgICAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZU9iai5zcmMgPSBpbWdTcmM7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5fbW9kYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlckNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgdGhpcy5fY2xvc2VyQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdtb2RhbC1jbG9zZSBtb2RhbC1jbG9zZS1saWdodGJveCBpY29uLWNhbmNlbC0xJztcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlckNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoQVRUUl9DTE9TRSwgQVRUUl9DTE9TRSk7XG5cbiAgICAgICAgICAgIHRoaXMuX21vZGFsQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdtb2RhbCBpbWFnZS1tb2RhbCc7XG4gICAgICAgICAgICB0aGlzLl9tb2RhbENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLl9pbWFnZUNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLl9tb2RhbENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aGlzLl9jb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX21vZGFsQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRoaXMuX2Nsb3NlckNvbnRhaW5lckRpdik7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250ZW50LWNvbnRhaW5lcic7XG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZnV0dXJlID0gbmV3IFByb21pc2UoKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXIuY2xhc3NOYW1lID0gJ2ltYWdlLWNvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZyA9IGltZztcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgICAgICAgICAgICAgICAgICBMaWdodEJveC5fc2V0dXBNYXhXaWR0aEhlaWdodCh0YXJnZXQsIGltZywgaW1hZ2VPYmopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWdTcmMgKyAnKSc7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9tb2RhbENvbnRhaW5lckRpdik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTZXR0aW5ncy5pc0lFKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc2l6ZUV2ZW50ID0gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faW1hZ2VDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaW1nLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMucmVnaXN0ZXJQcmV2TmV4dEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2V0dXBQcmV2TmV4dFN0YXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldiBvciBuZXh0IG9uIHRvdWNoL2NsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9pbWFnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFNldHRpbmdzLmdldFRhYkV2ZW50KCksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNMb2FkaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXYgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdlWCA9IGdsb2JhbC5Ub3VjaEV2ZW50ICYmIGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXYucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmLl9pbWFnZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgaW1nWCA9IHJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcldpZHRoID0gcmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zWCA9IHBhZ2VYIC0gaW1nWDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3dpdGNoSW1hZ2VCeURpcmVjdGlvbih3cmFwcGVyV2lkdGggLyAyID4gcG9zWCkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9ydW5PcHRpb25hbENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVnaXN0ZXIga2V5Ym9hcmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9rZXlib2FyZE5leHRFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX05FWFQgfHwgZS5rZXlDb2RlID09PSBLRVlfUFJFVikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc0xvYWRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3dpdGNoSW1hZ2VCeURpcmVjdGlvbihlLmtleUNvZGUgPT09IEtFWV9QUkVWKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9ydW5PcHRpb25hbENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNlbGYuX2tleWJvYXJkTmV4dEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2ltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoU2V0dGluZ3MuZ2V0VGFiRXZlbnQoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3J1bk9wdGlvbmFsQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWdoUmVzKHRodW1ibmFpbCwgaW1nSGlnaFJlc29sdXRpb24pO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuX2Z1dHVyZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jYWxjdWxhdGVDb250YWluZXIodGhpcy5pbWcpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHNlbGYuX21vZGFsQ29udGFpbmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfTU9EQUxfQ0xPU0VELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2xlYW51cDpcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbENvbnRhaW5lckRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX21vZGFsQ29udGFpbmVyRGl2KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZS5hcHBseShzZWxmKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAvLyB1bmJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tleWJvYXJkTmV4dEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2VsZi5fa2V5Ym9hcmROZXh0RXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVzaXplRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNlbGYuX3Jlc2l6ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnV0dXJlO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuX25leHRGdXR1cmUgPSB0aGlzLl9mdXR1cmU7XG5cbiAgICAgICAgaWYgKHNlbGYuX3dpZGdldCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbCh0aGlzLl9tb2RhbEFwcGVuZCk7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgY2xvc2Ugc3RhY2sgYmVmb3JlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RhbC5jbG9zZSgpLmZyb21XaWRnZXQoc2VsZi5fd2lkZ2V0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZnV0dXJlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 */
	
	var _get = __webpack_require__(9)['default'];
	
	var _inherits = __webpack_require__(23)['default'];
	
	var _createClass = __webpack_require__(34)['default'];
	
	var _classCallCheck = __webpack_require__(37)['default'];
	
	var _interopRequireDefault = __webpack_require__(7)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _DestroyableWidget2 = __webpack_require__(99);
	
	var _DestroyableWidget3 = _interopRequireDefault(_DestroyableWidget2);
	
	var Showcase = (function (_DestroyableWidget) {
	    _inherits(Showcase, _DestroyableWidget);
	
	    function Showcase(container) {
	        _classCallCheck(this, Showcase);
	
	        _get(Object.getPrototypeOf(Showcase.prototype), 'constructor', this).call(this);
	
	        this.container = container;
	
	        this.registerEvents();
	    }
	
	    _createClass(Showcase, [{
	        key: 'registerEvents',
	        value: function registerEvents() {
	            var _this = this;
	
	            var innerContainer = this.container.children[0],
	                containerWidth = innerContainer.getBoundingClientRect().width,
	                parentContainerWidth = this.container.getBoundingClientRect().width;
	            var diff = containerWidth - parentContainerWidth;
	
	            var lastX = 0,
	                lastMove = undefined;
	
	            this.container.addEventListener('mouseenter', function (e) {
	                var rect = _this.container.getBoundingClientRect();
	
	                lastX = e.clientX;
	            });
	
	            this.container.addEventListener('mousemove', function (e) {
	                var rect = _this.container.getBoundingClientRect();
	                var nextX = e.clientX;
	                var normalizedRight = Math.abs(nextX - rect.left) / (rect.width / 2);
	                requestAnimationFrame(function () {
	                    var moveX = (1 - normalizedRight) * diff;
	                    innerContainer.style.webkitTransform = 'translate3d(' + moveX + 'px,0,0)';
	                    innerContainer.style.transform = 'translate3d(' + moveX + 'px,0,0)';
	                    lastMove = moveX;
	                });
	            });
	        }
	    }], [{
	        key: 'init',
	        value: function init(selector) {
	            var elements = document.querySelectorAll(selector);
	            return Array.prototype.slice.call(elements).map(function (el) {
	                return new Showcase(el);
	            });
	        }
	    }]);
	
	    return Showcase;
	})(_DestroyableWidget3['default']);
	
	exports['default'] = Showcase;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL25vZGVfbW9kdWxlcy9lc2xpbnQtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9ib3dsaW5neC9Qcm9qZWt0ZS9mbGV4Y3NzL3NyYy9tYWluL1Nob3djYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0EwQmlCLG1CQUFtQjs7OztJQUU1QixRQUFRO2NBQVIsUUFBUTs7QUFHZCxhQUhNLFFBQVEsQ0FHYixTQUFTLEVBQUU7OEJBSE4sUUFBUTs7QUFJckIsbUNBSmEsUUFBUSw2Q0FJYjs7QUFFUixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsWUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3pCOztpQkFUZ0IsUUFBUTs7ZUFZWCwwQkFBRzs7O0FBQ2IsZ0JBQU0sY0FBYyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7Z0JBQzdELG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDMUUsZ0JBQU0sSUFBSSxHQUFJLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzs7QUFFcEQsZ0JBQUksS0FBSyxHQUFHLENBQUM7Z0JBQUUsUUFBUSxZQUFBLENBQUM7O0FBRXhCLGdCQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDLENBQUMsRUFBSztBQUNqRCxvQkFBTSxJQUFJLEdBQUcsTUFBSyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7QUFFcEQscUJBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3JCLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDaEQsb0JBQU0sSUFBSSxHQUFHLE1BQUssU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDcEQsb0JBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDeEIsb0JBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7QUFDeEUscUNBQXFCLENBQUMsWUFBTTtBQUN4Qix3QkFBTSxLQUFLLEdBQUksQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFBLEdBQUksSUFBSSxBQUFDLENBQUM7QUFDN0Msa0NBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxvQkFBa0IsS0FBSyxZQUFTLENBQUM7QUFDckUsa0NBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxvQkFBa0IsS0FBSyxZQUFTLENBQUM7QUFDL0QsNEJBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3BCLENBQUMsQ0FBQzthQUNOLENBQUMsQ0FBQTtTQUNMOzs7ZUFFVSxjQUFDLFFBQVEsRUFBRTtBQUNsQixnQkFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELG1CQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFLEVBQUs7QUFDcEQsdUJBQU8sSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ047OztXQTVDZ0IsUUFBUTs7O3FCQUFSLFFBQVEiLCJmaWxlIjoiL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvbm9kZV9tb2R1bGVzL2VzbGludC1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2Jvd2xpbmd4L1Byb2pla3RlL2ZsZXhjc3Mvc3JjL21haW4vU2hvd2Nhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgRGF2aWQgSGVpZHJpY2gsIEJvd2xpbmdYIDxtZUBib3dsaW5neC5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgRGVzdHJveWFibGVXaWRnZXQgZnJvbSAnRGVzdHJveWFibGVXaWRnZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93Y2FzZSBleHRlbmRzIERlc3Ryb3lhYmxlV2lkZ2V0IHtcblxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGlubmVyQ29udGFpbmVyID0gIHRoaXMuY29udGFpbmVyLmNoaWxkcmVuWzBdLFxuICAgICAgICAgICAgICBjb250YWluZXJXaWR0aCA9IGlubmVyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICBwYXJlbnRDb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjb25zdCBkaWZmID0gIGNvbnRhaW5lcldpZHRoIC0gcGFyZW50Q29udGFpbmVyV2lkdGg7XG5cbiAgICAgICAgbGV0IGxhc3RYID0gMCwgbGFzdE1vdmU7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxhc3RYID0gZS5jbGllbnRYO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbmV4dFggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUmlnaHQgPSBNYXRoLmFicyhuZXh0WCAtIHJlY3QubGVmdCkgLyAgKHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZVggPSAoKDEgLSBub3JtYWxpemVkUmlnaHQpICogZGlmZik7XG4gICAgICAgICAgICAgICAgaW5uZXJDb250YWluZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bW92ZVh9cHgsMCwwKWA7XG4gICAgICAgICAgICAgICAgaW5uZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bW92ZVh9cHgsMCwwKWA7XG4gICAgICAgICAgICAgICAgbGFzdE1vdmUgPSBtb3ZlWDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cykubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaG93Y2FzZShlbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==

/***/ }
/******/ ])
});
;
//# sourceMappingURL=../maps/flexcss.map