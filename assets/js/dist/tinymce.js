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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/tinymce.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/tinymce.js":
/*!**********************************!*\
  !*** ./assets/js/src/tinymce.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("( function( tinymce, $ ) {\n\n    'use strict';\n\n    tinymce.create( 'tinymce.plugins.tailoricon', {\n\n\t    /**\n\t     * Adds the icon button and action to the WordPress editor.\n\t     *\n\t     * @since 1.0.0\n\t     *\n\t     * @param ed\n\t     * @param url\n\t     */\n        init : function( ed, url ) {\n\n\t\t    // Add the button\n            ed.addButton( 'tailoricon', {\n                title  : ed.getLang( 'tailoricon.title' ),\n                icon : 'wp_code',\n                cmd : 'tailor:add:icon'\n            } );\n\n\t\t    // Add the command/action\n            ed.addCommand( 'tailor:add:icon', function() {\n                var content = ed.selection.getContent();\n\n\t            /**\n\t             * Opens the icon selection dialog.\n\t             *\n\t             * @since 1.0.0\n\t             */\n\t            app.channel.trigger( 'dialog:open', {\n\t\t            title : ed.getLang( 'tailoricon.title' ),\n\t\t            button : ed.getLang( 'tailoricon.select' ),\n\n\t\t            /**\n\t\t             * Returns the content for the Select Icon dialog.\n\t\t             *\n\t\t             * @since 1.0.0\n\t\t             *\n\t\t             * @returns {*}\n\t\t             */\n\t\t            content : function() {\n\t\t\t            var kits = window._kits || {};\n\t\t\t            if ( _.keys( kits ).length ) {\n\t\t\t\t            return _.template( document.getElementById( 'tmpl-tailor-control-icon-select' ).innerHTML)( {\n\t\t\t\t\t            kits : kits,\n\t\t\t\t\t            value : ''\n\t\t\t\t            } );\n\t\t\t            }\n\t\t\t            return document.getElementById( 'tmpl-tailor-control-icon-empty' ).innerHTML;\n\t\t            },\n\n\t\t            /**\n\t\t             * Adds the required event listeners to the dialog window content.\n\t\t             *\n\t\t             * @since 1.0.0\n\t\t             */\n\t\t            onOpen : function() {\n\t\t\t            var $el = this.$el;\n\t\t\t            var $li = $el.find( 'li' );\n\t\t\t            var $kits = $el.find( '.icon-kit' );\n\n\t\t\t            this.$el.find( '.search--icon' ).on( 'input', function( e ) {\n\t\t\t\t            var term =  this.value.replace( /[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&' );\n\t\t\t\t            term = term.replace( / /g, ')(?=.*' );\n\t\t\t\t            var match = new RegExp( '^(?=.*' + term + ').+', 'i' );\n\n\t\t\t\t            $li.each( function() {\n\t\t\t\t\t            this.classList.toggle( 'is-hidden', ! match.test( this.getAttribute( 'title' ) ) );\n\t\t\t\t            } );\n\t\t\t            } );\n\n\t\t\t            this.$el.find( '.select--icon' ).on( 'change', function( e ) {\n\t\t\t\t            var kit = this.value;\n\t\t\t\t            $kits\n\t\t\t\t\t            .removeClass( 'is-hidden' )\n\t\t\t\t\t            .filter( function() {\n\t\t\t\t\t\t            return this.id != kit;\n\t\t\t\t\t            } )\n\t\t\t\t\t            .addClass( 'is-hidden' );\n\t\t\t            } );\n\t\t            },\n\n\t\t            /**\n\t\t             * Returns true if an icon has been selected.\n\t\t             *\n\t\t             * @since 1.0.0\n\t\t             *\n\t\t             * @returns {*}\n\t\t             */\n\t\t            onValidate : function() {\n\t\t\t            return $( 'input[name=icon]:checked' ).val();\n\t\t            },\n\n\t\t            /**\n\t\t             * Inserts the selected icon into the editor.\n\t\t             *\n\t\t             * @since 1.0.0\n\t\t             */\n\t\t            onSave : function() {\n\t\t\t            var icon = '<i class=\"tailor-icon mceNonEditable ' + $( 'input[name=icon]:checked' ).val() + '\"></i>';\n\t\t\t            ed.execCommand( 'mceInsertContent', 0, '<span>' + icon + '&nbsp;&nbsp;' + content + '</span><br>' );\n\t\t            },\n\n\t\t            /**\n\t\t             * Cleans up event listeners.\n\t\t             *\n\t\t             * @since 1.0.0\n\t\t             */\n\t\t            onClose : function() {\n\t\t\t            this.$el.find( '.search--icon' ).off( 'input' );\n\t\t            }\n\t            } );\n            } );\n        }\n    } );\n\n\t// Add the icon selector plugin\n    tinymce.PluginManager.add( 'tailoricon', tinymce.plugins.tailoricon );\n\n} ) ( tinymce, jQuery );\n\n\n//# sourceURL=webpack:///./assets/js/src/tinymce.js?");

/***/ })

/******/ });