/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/admin.js":
/*!********************************!*\
  !*** ./assets/js/src/admin.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__( /*! ./shared/utility/ajax */ \"./assets/js/src/shared/utility/ajax.js\" );\n\n__webpack_require__( /*! ./admin/components/icon-kits */ \"./assets/js/src/admin/components/icon-kits.js\" );\n\n//# sourceURL=webpack:///./assets/js/src/admin.js?");

/***/ }),

/***/ "./assets/js/src/admin/components/icon-kits.js":
/*!*****************************************************!*\
  !*** ./assets/js/src/admin/components/icon-kits.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* window._l10n, window.nonces */\n\nvar $ = window.jQuery,\n\tl10n = window._l10n,\n\tajax = window.ajax;\n\n$( function() {\n\tvar $field = $( '.tailor-icon-kits' );\n\tvar frame = wp.media( {\n\t\tbutton: {\n\t\t\ttext : l10n.selectKit\n\t\t},\n\t\tstates: [\n\t\t\tnew wp.media.controller.Library({\n\t\t\t\ttitle : l10n.selectKit,\n\t\t\t\tlibrary : wp.media.query( { type : [ 'application/zip' ] } ),\n\t\t\t\tmultiple : false,\n\t\t\t\tdate : false\n\t\t\t} )\n\t\t]\n\t} );\n\n\tframe.on( 'select', function( e ) {\n\t\tvar selection = frame.state().get( 'selection' ).toJSON();\n\t\tvar id = _.pluck( selection, 'id' );\n\n\t\t$field\n\t\t\t.find( '.spinner' )\n\t\t\t.addClass( 'is-active' );\n\t\t\n\t\tajax.send( 'tailor_add_icon_kit', {\n\t\t\tdata : {\n\t\t\t\tid : id[0],\n\t\t\t\tname : $field.data( 'name' ),\n\t\t\t\tnonce : window._nonces.saveKit\n\t\t\t},\n\n\t\t\t/**\n\t\t\t * Display an error message when the request is unsuccessful.\n\t\t\t * \n\t\t\t * @since 1.0.0\n\t\t\t * \n\t\t\t * @param response\n\t\t\t */\n\t\t\terror : function( response ) {\n\t\t\t\tvar template = _.template( document.getElementById( 'tmpl-tailor-notice' ).innerHTML );\n\t\t\t\tvar $notice = $( template( { message: response.message } ) );\n\n\t\t\t\t$field\n\t\t\t\t\t.parent()\n\t\t\t\t\t.before( $notice );\n\n\t\t\t\t$notice.on( 'click button', function() {\n\t\t\t\t\t$notice\n\t\t\t\t\t\t.fadeOut()\n\t\t\t\t\t\t.off();\n\t\t\t\t} );\n\n\t\t\t\t$field\n\t\t\t\t\t.find( '.spinner' )\n\t\t\t\t\t.removeClass( 'is-active' );\n\t\t\t},\n\n\t\t\t/**\n\t\t\t * Update the list of icon kits when the request is successful.\n\t\t\t * \n\t\t\t * @since 1.0.0\n\t\t\t * \n\t\t\t * @param response\n\t\t\t */\n\t\t\tsuccess : function( response ) {\n\t\t\t\t$field.html( $( response ).html() );\n\t\t\t}\n\n\t\t} );\n\t} );\n\n\t$field\n\n\t\t// Open the Media Library frame\n\t\t.on( 'click', '.js-select', function( e ) {\n\t\t\tframe.open();\n\t\t} )\n\n\t\t// Delete an icon kit\n\t\t.on( 'click', '.js-delete', function( e ) {\n\n\t\t\t$field\n\t\t\t\t.find( '.spinner' )\n\t\t\t\t.addClass( 'is-active' );\n\n\t\t\tajax.send( 'tailor_delete_icon_kit', {\n\t\t\t\tdata : {\n\t\t\t\t\tid : this.getAttribute( 'data-id' ),\n\t\t\t\t\tname : $field.data( 'name' ),\n\t\t\t\t\tnonce : window._nonces.deleteKit\n\t\t\t\t},\n\n\t\t\t\t/**\n\t\t\t\t * Update the icon kit when the request is successful.\n\t\t\t\t * \n\t\t\t\t * @since 1.0.0\n\t\t\t\t * \n\t\t\t\t * @param response\n\t\t\t\t */\n\t\t\t\tsuccess : function( response ) {\n\t\t\t\t\t$field.html( $( response ).html() );\n\t\t\t\t}\n\t\t\t} );\n\t\n\t\t\te.preventDefault();\n\t} );\n} );\n\n//# sourceURL=webpack:///./assets/js/src/admin/components/icon-kits.js?");

/***/ }),

/***/ "./assets/js/src/shared/utility/ajax.js":
/*!**********************************************!*\
  !*** ./assets/js/src/shared/utility/ajax.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * window.ajax\n *\n * Simple AJAX utility module.\n *\n * @class\n */\nvar $ = jQuery,\n    Ajax;\n\nAjax = {\n\n    url : window.ajaxurl,\n\n    /**\n     * Sends a POST request to WordPress.\n     *\n     * @param  {string} action The slug of the action to fire in WordPress.\n     * @param  {object} data   The data to populate $_POST with.\n     * @return {$.promise}     A jQuery promise that represents the request.\n     */\n    post : function( action, data ) {\n        return ajax.send( {\n            data: _.isObject( action ) ? action : _.extend( data || {}, { action: action } )\n        } );\n    },\n\n    /**\n     * Sends a POST request to WordPress.\n     *\n     * Use with wp_send_json_success() and wp_send_json_error().\n     *\n     * @param  {string} action  The slug of the action to fire in WordPress.\n     * @param  {object} options The options passed to jQuery.ajax.\n     * @return {$.promise}      A jQuery promise that represents the request.\n     */\n    send : function( action, options ) {\n\n        if ( _.isObject( action ) ) {\n            options = action;\n        }\n        else {\n            options = options || {};\n            options.data = _.extend( options.data || {}, {\n                action : action,\n                tailor : 1\n            } );\n        }\n\n        options = _.defaults( options || {}, {\n            type : 'POST',\n            url : ajax.url,\n            context : this\n        } );\n\n        return $.Deferred( function( deferred ) {\n\n            if ( options.success ) {\n                deferred.done( options.success );\n            }\n\n            var onError = options.error ? options.error : ajax.onError;\n            deferred.fail( onError );\n\n            delete options.success;\n            delete options.error;\n\n            $.ajax( options )\n                .done( function( response ) {\n\n                    // Treat a response of `1` as successful for backwards compatibility with existing handlers.\n                    if ( response === '1' || response === 1 ) {\n                        response = { success: true };\n                    }\n                    if ( _.isObject( response ) && ! _.isUndefined( response.success ) ) {\n                        deferred[ response.success ? 'resolveWith' : 'rejectWith' ]( this, [ response.data ] );\n                    }\n                    else {\n                        deferred.rejectWith( this, [ response ] );\n                    }\n                } )\n                .fail( function() {\n                    deferred.rejectWith( this, arguments );\n                } );\n\n        } ).promise();\n    },\n\n    /**\n     * General error handler for AJAX requests.\n     *\n     * @since 1.0.0\n     *\n     * @param response\n     */\n    onError : function( response ) {\n\n        // Print the error to the console if the Notify feature is unavailable\n        if ( ! Tailor.Notify ) {\n            console.error( response );\n            return;\n        }\n\n        if ( response && response.hasOwnProperty( 'message' ) ) {  // Display the error from the server\n            Tailor.Notify( response.message );\n        }\n        else if ( '0' == response ) {  // Session expired\n            Tailor.Notify( window._l10n.expired );\n        }\n        else if ( '-1' == response ) {  // Invalid nonce\n            Tailor.Notify( window._l10n.invalid );\n        }\n        else {  // General error condition\n            Tailor.Notify( window._l10n.error );\n        }\n    }\n};\n\nwindow.ajax = Ajax;\n\nmodule.exports = Ajax;\n\n//# sourceURL=webpack:///./assets/js/src/shared/utility/ajax.js?");

/***/ })

/******/ });