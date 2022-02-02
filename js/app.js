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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/header.scss */ "./src/scss/header.scss");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/menu.scss */ "./src/scss/menu.scss");
/* harmony import */ var _scss_menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_menu_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/brands.scss */ "./src/scss/brands.scss");
/* harmony import */ var _scss_brands_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_brands_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_service_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/service.scss */ "./src/scss/service.scss");
/* harmony import */ var _scss_service_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_service_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_predlozh_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/predlozh.scss */ "./src/scss/predlozh.scss");
/* harmony import */ var _scss_predlozh_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_predlozh_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/footer.scss */ "./src/scss/footer.scss");
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_footer_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scss_modal_right_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/modal_right.scss */ "./src/scss/modal_right.scss");
/* harmony import */ var _scss_modal_right_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_modal_right_scss__WEBPACK_IMPORTED_MODULE_7__);









function init() {
  // удаляем стилевой класс у элемента
  var class_remove = function class_remove(sel, stl) {
    var el = document.querySelector(sel);

    if (el.classList.contains(stl)) {
      el.classList.remove(stl);
    }
  }; // удаляем элемент из родителя


  var element_remove = function element_remove(parent, sel) {
    var prnt = document.querySelector(parent);
    var child = prnt.querySelector(sel);

    if (child) {
      child.remove();
    }
  }; // устанвливаем слушатели на кнопки в модальном окне


  var add_button_listener = function add_button_listener(modal) {
    var buttons = modal.querySelectorAll("button");
    buttons.forEach(function (btn, i) {
      set_listener(btn);
    });
  };

  var show_modal_left = function show_modal_left() {
    var modal = document.querySelector('#div-modal');

    if (!modal.classList.contains('div-modal--block')) {
      modal.classList.add('div-modal--block');
    }

    var left_menu = document.querySelector('.left-menu');
    left_menu = left_menu.cloneNode(true);
    modal.append(left_menu);
    add_button_listener(modal);
  };

  var show_modal_right = function show_modal_right(tmp_cont) {
    // находим контейнер для модального окна
    var modal = document.querySelector('#div-modal'); // если окно открыто - закрываем

    if (modal.classList.contains('div-modal--block')) {
      var _div_blur = modal.querySelector(".div-blur");

      _div_blur.click();
    } // достаем модальное окно


    var tmp_parent = document.querySelector('#tmp-modal-right');
    var clone_parent = tmp_parent.content.cloneNode(true); // находим родительский элемент

    var modal_right = clone_parent.querySelector('.modal-right'); // достаем контент для модального окна

    var tmp_content = document.querySelector(tmp_cont);
    var clone_content = tmp_content.content.cloneNode(true); // вставляем контент в модальное окно

    modal_right.append(clone_content); // добавляем контент в модальное окно на странице

    modal.append(modal_right);

    if (!modal.classList.contains('div-modal--block')) {
      modal.classList.add('div-modal--block');
    }

    add_button_listener(modal);
  };

  var set_listener = function set_listener(element) {
    element.addEventListener('click', function (event) {
      if (event.currentTarget.dataset.action === 'burger') {
        show_modal_left();
      } else if (event.currentTarget.dataset.action === 'call') {
        show_modal_right('#tmp-form-call');
      } else if (event.currentTarget.dataset.action === 'chat') {
        show_modal_right('#tmp-form-chat');
      } else if (event.currentTarget.dataset.action === 'back') {
        element_remove('#div-modal', '.left-menu');
        element_remove('#div-modal', '.modal-right');
        class_remove('#div-modal', 'div-modal--block');
      } else if (event.currentTarget.dataset.action === 'show-more') {
        show_all_click(event);
      } else if (event.currentTarget.dataset.action === 'send-form') {
        event.preventDefault();
      }
    });
  };

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (btn, i) {
    set_listener(btn);
  });
  var div_blur = document.querySelector(".div-blur");

  if (div_blur) {
    div_blur.addEventListener('click', function (e) {
      element_remove('#div-modal', '.left-menu');
      element_remove('#div-modal', '.modal-right');
      class_remove('#div-modal', 'div-modal--block');
    });
  }

  new Swiper('#swiper-container', {
    enabled: true,
    spaceBetween: 1,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });
  new Swiper('.swiper-container-vid', {
    enabled: true,
    spaceBetween: 1,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination-vid',
      clickable: true
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });
  new Swiper('.swiper-container-service', {
    enabled: true,
    spaceBetween: 1,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination-service',
      clickable: true
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });
}

function show_all_click(event) {
  var cont = "swiper-container";
  var fl_all = true;

  if (event.currentTarget.id === "btn-show-more") {
    cont = "text__txt";
    fl_all = false;
  } else if (event.currentTarget.id === "btn-show-all-vid") {
    cont += "-vid";
  }

  var box = document.querySelector("." + cont);

  if (box) {
    box.classList.toggle(cont + "--height");
    var btn = document.querySelector("#" + event.currentTarget.id);
    var btn_img = btn.querySelector("img");
    var btn_text = btn.querySelector("span");

    if (box.classList.contains(cont + "--height")) {
      if (btn_text) {
        btn_text.textContent = "Скрыть";
      }

      if (btn_img) {
        btn_img.src = "./img/str_up.png";
      }

      if (fl_all && btn) {
        btn.classList.add("button-read--pos");
        btn.title = "Скрыть";
      }
    } else {
      if (btn_text) {
        if (fl_all) {
          btn_text.textContent = "Показать все";
        } else {
          btn_text.textContent = "Читать далее";
        }
      }

      if (btn_img) {
        btn_img.src = "./img/str.png";
      }

      if (fl_all && btn) {
        btn.classList.remove("button-read--pos");
        btn.title = "Читать далее";
      }
    }
  } //event.stopPropagation();


  event.preventDefault();
} //window.onload = init;


window.addEventListener('DOMContentLoaded', init, false);

/***/ }),

/***/ "./src/scss/brands.scss":
/*!******************************!*\
  !*** ./src/scss/brands.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/menu.scss":
/*!****************************!*\
  !*** ./src/scss/menu.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/modal_right.scss":
/*!***********************************!*\
  !*** ./src/scss/modal_right.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/predlozh.scss":
/*!********************************!*\
  !*** ./src/scss/predlozh.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/service.scss":
/*!*******************************!*\
  !*** ./src/scss/service.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map