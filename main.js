/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./background2.jpg */ "./src/background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin:0;
    font-family: Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
    font-size: 16px;
}

:root  {

    --newswidth: clamp(220px, 35%, 350px);
    --newsheight: clamp(130px, 40%, 200px);
    

    margin:0;
    padding:0;
 
}

main {
    min-height: 100vh;
    height: 2000px;
    
}



nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    background-color: white;
    position: fixed;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);  
    width: 100%;
    top: 0;
    z-index: 1;

}
nav svg {

    position: absolute;
    left: clamp(10px, 10%, 20px);
    height: 60px;
    width: 60px;
    
}


nav button {

    height: 60px;
    width: clamp(150px,15%, 300px); 
    background-color: white;
    border:none;
 
}

nav button:hover {

    background-color: hsla(0, 0%, 98%, 1);
    cursor:pointer;

}

.menu {

    margin-top: 60px;
    justify-content: center;
    display: none;
    gap: 5px;
    width: 100%;
    background-color: white;
    position: absolute;
    z-index: 5;
    top: 0;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); 
    border-radius: 5px;
    padding-bottom: 30px;
 

}

.menuShow {

    display: flex;
    
}

.menu ul {
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    gap: 40px;
    margin-top: 50px;
}

.menu li {
    width: max(30%,200px);
    display: flex;
    height: 60px;
  justify-content: start;
    gap: 10px;

}

.menu p {


    line-height: 60px;
}

.content {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-size:cover;
    width: clamp(200px, 100%, 1200px);
    height: clamp(200px, 50vw, 600px);
    margin: 0 auto;
    margin-top: 20vh;
    position: relative;
    
}

.content h2 {

    height: calc(0.2*var(--newsheight));
    margin-left: clamp(10px, 15%, 40px);
    font-size: clamp(22px, 3vw, 30px);
}
.news{
    width: var(--newswidth);
    height: var(--newsheight);
    background-color: white;
    position: absolute;
    bottom: 7%;
    left: 5%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);    
    border-radius: 7px;
    display: flex;
    flex-flow: column wrap;
    justify-content:space-around;
}

.news button {
    
    margin-left: clamp(10px, 15%, 40px);
    margin-bottom: clamp(10px, 5%, 30px);
    margin-top:  clamp(10px, 5%, 30px); 
    height: max(25%, 35px);
    width: clamp(70px, 30%, 100px);
    background-color: rgb(255, 209, 72); 
    border: none;
}

.news button:hover {


    background-color:rgb(247, 196, 31);
    cursor: pointer; 
}


.footer-links {

    display: flex;

    gap:15%;
    justify-content: center;
    list-style-type: none; 
    background-color: rgb(247, 245, 245);
    align-items: center;
    height: 10vh;
}


/* ABOUT PAGE */


.h1Content1 {

    font-size: 50px;
    font-weight: 700;
    
    text-align: center;

}


.divContainer{

    margin-top: 15vh;
}
.divContent1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});    
    background-position: center;
    background-size: cover;
    width: 1200px;
    height: 500px;
    margin: 5% auto;
   

}

.divContainer2 {

    width: max(400px,60%);
    margin: 15vh auto;
}

.h2Content2 {

    font-size: 40px;
    font-weight: 600;
    margin: 20px 0;
}


.pContent2 {

    font-size: 20px;
}

.imgContent2 {

    width: 100%;
    height: 200px;

   
   

}
html {

    display:block;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,+GAA+G;IAC/G,eAAe;AACnB;;AAEA;;IAEI,qCAAqC;IACrC,sCAAsC;;;IAGtC,QAAQ;IACR,SAAS;;AAEb;;AAEA;IACI,iBAAiB;IACjB,cAAc;;AAElB;;;;AAIA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;IACf,2CAA2C;IAC3C,WAAW;IACX,MAAM;IACN,UAAU;;AAEd;AACA;;IAEI,kBAAkB;IAClB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;;AAEf;;;AAGA;;IAEI,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;IACvB,WAAW;;AAEf;;AAEA;;IAEI,qCAAqC;IACrC,cAAc;;AAElB;;AAEA;;IAEI,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,QAAQ;IACR,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,8CAA8C;IAC9C,kBAAkB;IAClB,oBAAoB;;;AAGxB;;AAEA;;IAEI,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,YAAY;EACd,sBAAsB;IACpB,SAAS;;AAEb;;AAEA;;;IAGI,iBAAiB;AACrB;;AAEA;IACI,yDAAyC;IACzC,2BAA2B;IAC3B,qBAAqB;IACrB,iCAAiC;IACjC,iCAAiC;IACjC,cAAc;IACd,gBAAgB;IAChB,kBAAkB;;AAEtB;;AAEA;;IAEI,mCAAmC;IACnC,mCAAmC;IACnC,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;;IAEI,mCAAmC;IACnC,oCAAoC;IACpC,kCAAkC;IAClC,sBAAsB;IACtB,8BAA8B;IAC9B,mCAAmC;IACnC,YAAY;AAChB;;AAEA;;;IAGI,kCAAkC;IAClC,eAAe;AACnB;;;AAGA;;IAEI,aAAa;;IAEb,OAAO;IACP,uBAAuB;IACvB,qBAAqB;IACrB,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;;;AAGA,eAAe;;;AAGf;;IAEI,eAAe;IACf,gBAAgB;;IAEhB,kBAAkB;;AAEtB;;;AAGA;;IAEI,gBAAgB;AACpB;AACA;IACI,yDAA0C;IAC1C,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,eAAe;;;AAGnB;;AAEA;;IAEI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;;AAGA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,aAAa;;;;;AAKjB;AACA;;IAEI,aAAa;AACjB","sourcesContent":["* {\n    margin:0;\n    font-family: Speedee,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;\n    font-size: 16px;\n}\n\n:root  {\n\n    --newswidth: clamp(220px, 35%, 350px);\n    --newsheight: clamp(130px, 40%, 200px);\n    \n\n    margin:0;\n    padding:0;\n \n}\n\nmain {\n    min-height: 100vh;\n    height: 2000px;\n    \n}\n\n\n\nnav {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    background-color: white;\n    position: fixed;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);  \n    width: 100%;\n    top: 0;\n    z-index: 1;\n\n}\nnav svg {\n\n    position: absolute;\n    left: clamp(10px, 10%, 20px);\n    height: 60px;\n    width: 60px;\n    \n}\n\n\nnav button {\n\n    height: 60px;\n    width: clamp(150px,15%, 300px); \n    background-color: white;\n    border:none;\n \n}\n\nnav button:hover {\n\n    background-color: hsla(0, 0%, 98%, 1);\n    cursor:pointer;\n\n}\n\n.menu {\n\n    margin-top: 60px;\n    justify-content: center;\n    display: none;\n    gap: 5px;\n    width: 100%;\n    background-color: white;\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); \n    border-radius: 5px;\n    padding-bottom: 30px;\n \n\n}\n\n.menuShow {\n\n    display: flex;\n    \n}\n\n.menu ul {\n    display: flex;\n    flex-flow: row wrap;\n    width: 60%;\n    gap: 40px;\n    margin-top: 50px;\n}\n\n.menu li {\n    width: max(30%,200px);\n    display: flex;\n    height: 60px;\n  justify-content: start;\n    gap: 10px;\n\n}\n\n.menu p {\n\n\n    line-height: 60px;\n}\n\n.content {\n    background-image: url('./background.jpg');\n    background-position: center;\n    background-size:cover;\n    width: clamp(200px, 100%, 1200px);\n    height: clamp(200px, 50vw, 600px);\n    margin: 0 auto;\n    margin-top: 20vh;\n    position: relative;\n    \n}\n\n.content h2 {\n\n    height: calc(0.2*var(--newsheight));\n    margin-left: clamp(10px, 15%, 40px);\n    font-size: clamp(22px, 3vw, 30px);\n}\n.news{\n    width: var(--newswidth);\n    height: var(--newsheight);\n    background-color: white;\n    position: absolute;\n    bottom: 7%;\n    left: 5%;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);    \n    border-radius: 7px;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content:space-around;\n}\n\n.news button {\n    \n    margin-left: clamp(10px, 15%, 40px);\n    margin-bottom: clamp(10px, 5%, 30px);\n    margin-top:  clamp(10px, 5%, 30px); \n    height: max(25%, 35px);\n    width: clamp(70px, 30%, 100px);\n    background-color: rgb(255, 209, 72); \n    border: none;\n}\n\n.news button:hover {\n\n\n    background-color:rgb(247, 196, 31);\n    cursor: pointer; \n}\n\n\n.footer-links {\n\n    display: flex;\n\n    gap:15%;\n    justify-content: center;\n    list-style-type: none; \n    background-color: rgb(247, 245, 245);\n    align-items: center;\n    height: 10vh;\n}\n\n\n/* ABOUT PAGE */\n\n\n.h1Content1 {\n\n    font-size: 50px;\n    font-weight: 700;\n    \n    text-align: center;\n\n}\n\n\n.divContainer{\n\n    margin-top: 15vh;\n}\n.divContent1 {\n    background-image: url('./background2.jpg');    \n    background-position: center;\n    background-size: cover;\n    width: 1200px;\n    height: 500px;\n    margin: 5% auto;\n   \n\n}\n\n.divContainer2 {\n\n    width: max(400px,60%);\n    margin: 15vh auto;\n}\n\n.h2Content2 {\n\n    font-size: 40px;\n    font-weight: 600;\n    margin: 20px 0;\n}\n\n\n.pContent2 {\n\n    font-size: 20px;\n}\n\n.imgContent2 {\n\n    width: 100%;\n    height: 200px;\n\n   \n   \n\n}\nhtml {\n\n    display:block;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });



function aboutPage () {

const contentMain =  document.querySelector('main')
const divContainer = document.createElement('div')
divContainer.setAttribute('class','divContainer')
const divContent1= document.createElement('div') 
divContent1.setAttribute('class','divContent1')
const h1Content1 = document.createElement('h1')
h1Content1.setAttribute('class','h1Content1')
h1Content1.textContent="Om oss"

contentMain.innerHTML=""

contentMain.appendChild(divContainer)
divContainer
.appendChild(h1Content1)
divContainer
.appendChild(divContent1)


const divContainer2 = document.createElement('div')
divContainer2.setAttribute('class','divContainer2')
const h2Content2 = document.createElement('h2')
h2Content2.setAttribute('class','h2Content2')
h2Content2.textContent="Jalla Jiep"
const pContent2 = document.createElement('p')
pContent2.textContent="Välkommen till 'jalla jiep' – en plats där matlagning möter passion och gemenskap. Vår resa började med en enkel idé: att skapa en miljö där vänner och familj kan samlas och njuta av utsökt mat, inspirerad av både tradition och innovation."
pContent2.setAttribute('class','pContent2')
const imgContent2= document.createElement('img') 
imgContent2.setAttribute('class','imgContent2')
imgContent2.src='./Background3.png'


divContainer.insertAdjacentElement('afterend', divContainer2)
divContainer2.appendChild(h2Content2)
divContainer2.appendChild(pContent2)    
divContainer2.appendChild(imgContent2)



}




/***/ }),

/***/ "./src/initialpageload.js":
/*!********************************!*\
  !*** ./src/initialpageload.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialpageload: () => (/* binding */ initialpageload)
/* harmony export */ });



function initialpageload () {


    const contentMain =  document.querySelector('main')
    contentMain.innerHTML = `
    <div class="content">
        <div class="news">
            <h2> Nyhet! <br> Maskin-burgaren</h2>
            <button>Läs mer</button>
        </div>
    </div>`


    
}




/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8148d0c6e507321babf0.jpg";

/***/ }),

/***/ "./src/background2.jpg":
/*!*****************************!*\
  !*** ./src/background2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac25553598353bae4579.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialpageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialpageload.js */ "./src/initialpageload.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");




function jalla () {

(0,_initialpageload_js__WEBPACK_IMPORTED_MODULE_1__.initialpageload)()

function showMenu () {

    const menuList = document.querySelector('.menu')
    console.log("jiep")
    menuList.classList.toggle('menuShow')
}

const buttonMenu = document.querySelector('#menu')
buttonMenu.addEventListener('click',showMenu)



}

jalla()

const buttonAbout = document.querySelector('#about')
buttonAbout.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage)

const buttonHome = document.querySelector('#home')
buttonHome.addEventListener('click', _initialpageload_js__WEBPACK_IMPORTED_MODULE_1__.initialpageload)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FxQjtBQUNnQztBQUNoQjs7QUFFckM7O0FBRUEsb0VBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLGdEQUFTOztBQUUvQztBQUNBLHFDQUFxQyxnRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvLi9zcmMvaW5pdGlhbHBhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46MDtcbiAgICBmb250LWZhbWlseTogU3BlZWRlZSwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsQXJpYWwsTm90byBTYW5zLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG46cm9vdCAge1xuXG4gICAgLS1uZXdzd2lkdGg6IGNsYW1wKDIyMHB4LCAzNSUsIDM1MHB4KTtcbiAgICAtLW5ld3NoZWlnaHQ6IGNsYW1wKDEzMHB4LCA0MCUsIDIwMHB4KTtcbiAgICBcblxuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiBcbn1cblxubWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiAyMDAwcHg7XG4gICAgXG59XG5cblxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG5cbn1cbm5hdiBzdmcge1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNsYW1wKDEwcHgsIDEwJSwgMjBweCk7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIFxufVxuXG5cbm5hdiBidXR0b24ge1xuXG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwxNSUsIDMwMHB4KTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOm5vbmU7XG4gXG59XG5cbm5hdiBidXR0b246aG92ZXIge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgOTglLCAxKTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcblxufVxuXG4ubWVudSB7XG5cbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiAwO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiBcblxufVxuXG4ubWVudVNob3cge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cblxuLm1lbnUgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGdhcDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWVudSBsaSB7XG4gICAgd2lkdGg6IG1heCgzMCUsMjAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcblxufVxuXG4ubWVudSBwIHtcblxuXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDEwMCUsIDEyMDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgyMDBweCwgNTB2dywgNjAwcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxufVxuXG4uY29udGVudCBoMiB7XG5cbiAgICBoZWlnaHQ6IGNhbGMoMC4yKnZhcigtLW5ld3NoZWlnaHQpKTtcbiAgICBtYXJnaW4tbGVmdDogY2xhbXAoMTBweCwgMTUlLCA0MHB4KTtcbiAgICBmb250LXNpemU6IGNsYW1wKDIycHgsIDN2dywgMzBweCk7XG59XG4ubmV3c3tcbiAgICB3aWR0aDogdmFyKC0tbmV3c3dpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5ld3NoZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDclO1xuICAgIGxlZnQ6IDUlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbn1cblxuLm5ld3MgYnV0dG9uIHtcbiAgICBcbiAgICBtYXJnaW4tbGVmdDogY2xhbXAoMTBweCwgMTUlLCA0MHB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCA1JSwgMzBweCk7XG4gICAgbWFyZ2luLXRvcDogIGNsYW1wKDEwcHgsIDUlLCAzMHB4KTsgXG4gICAgaGVpZ2h0OiBtYXgoMjUlLCAzNXB4KTtcbiAgICB3aWR0aDogY2xhbXAoNzBweCwgMzAlLCAxMDBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA5LCA3Mik7IFxuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm5ld3MgYnV0dG9uOmhvdmVyIHtcblxuXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQ3LCAxOTYsIDMxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuXG5cbi5mb290ZXItbGlua3Mge1xuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGdhcDoxNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDUsIDI0NSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG5cblxuLyogQUJPVVQgUEFHRSAqL1xuXG5cbi5oMUNvbnRlbnQxIHtcblxuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5cbi5kaXZDb250YWluZXJ7XG5cbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xufVxuLmRpdkNvbnRlbnQxIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7ICAgIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICBcblxufVxuXG4uZGl2Q29udGFpbmVyMiB7XG5cbiAgICB3aWR0aDogbWF4KDQwMHB4LDYwJSk7XG4gICAgbWFyZ2luOiAxNXZoIGF1dG87XG59XG5cbi5oMkNvbnRlbnQyIHtcblxuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG5cbi5wQ29udGVudDIge1xuXG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW1nQ29udGVudDIge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxuICAgXG4gICBcblxufVxuaHRtbCB7XG5cbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsK0dBQStHO0lBQy9HLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLHNDQUFzQzs7O0lBR3RDLFFBQVE7SUFDUixTQUFTOztBQUViOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsTUFBTTtJQUNOLFVBQVU7O0FBRWQ7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXOztBQUVmOzs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmOztBQUVBOztJQUVJLHFDQUFxQztJQUNyQyxjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLG9CQUFvQjs7O0FBR3hCOztBQUVBOztJQUVJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtFQUNkLHNCQUFzQjtJQUNwQixTQUFTOztBQUViOztBQUVBOzs7SUFHSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5REFBeUM7SUFDekMsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7O0FBR0E7O0lBRUksYUFBYTs7SUFFYixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7OztBQUdBLGVBQWU7OztBQUdmOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLGtCQUFrQjs7QUFFdEI7OztBQUdBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseURBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlOzs7QUFHbkI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUdBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7Ozs7O0FBS2pCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiBTcGVlZGVlLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxOb3RvIFNhbnMsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46cm9vdCAge1xcblxcbiAgICAtLW5ld3N3aWR0aDogY2xhbXAoMjIwcHgsIDM1JSwgMzUwcHgpO1xcbiAgICAtLW5ld3NoZWlnaHQ6IGNsYW1wKDEzMHB4LCA0MCUsIDIwMHB4KTtcXG4gICAgXFxuXFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuIFxcbn1cXG5cXG5tYWluIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMjAwMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5uYXYgc3ZnIHtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBjbGFtcCgxMHB4LCAxMCUsIDIwcHgpO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBcXG59XFxuXFxuXFxubmF2IGJ1dHRvbiB7XFxuXFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LDE1JSwgMzAwcHgpOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjpub25lO1xcbiBcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDk4JSwgMSk7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcblxcbn1cXG5cXG4ubWVudSB7XFxuXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIHRvcDogMDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuIFxcblxcbn1cXG5cXG4ubWVudVNob3cge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG59XFxuXFxuLm1lbnUgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gICAgd2lkdGg6IG1heCgzMCUsMjAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51IHAge1xcblxcblxcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMTAwJSwgMTIwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMDBweCwgNTB2dywgNjAwcHgpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG59XFxuXFxuLmNvbnRlbnQgaDIge1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMC4yKnZhcigtLW5ld3NoZWlnaHQpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IGNsYW1wKDEwcHgsIDE1JSwgNDBweCk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjJweCwgM3Z3LCAzMHB4KTtcXG59XFxuLm5ld3N7XFxuICAgIHdpZHRoOiB2YXIoLS1uZXdzd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5ld3NoZWlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDclO1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm5ld3MgYnV0dG9uIHtcXG4gICAgXFxuICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgxMHB4LCAxNSUsIDQwcHgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCgxMHB4LCA1JSwgMzBweCk7XFxuICAgIG1hcmdpbi10b3A6ICBjbGFtcCgxMHB4LCA1JSwgMzBweCk7IFxcbiAgICBoZWlnaHQ6IG1heCgyNSUsIDM1cHgpO1xcbiAgICB3aWR0aDogY2xhbXAoNzBweCwgMzAlLCAxMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOSwgNzIpOyBcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubmV3cyBidXR0b246aG92ZXIge1xcblxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDcsIDE5NiwgMzEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cXG5cXG5cXG4uZm9vdGVyLWxpbmtzIHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgZ2FwOjE1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NSwgMjQ1KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG5cXG4vKiBBQk9VVCBQQUdFICovXFxuXFxuXFxuLmgxQ29udGVudDEge1xcblxcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcblxcbi5kaXZDb250YWluZXJ7XFxuXFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcbi5kaXZDb250ZW50MSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iYWNrZ3JvdW5kMi5qcGcnKTsgICAgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEyMDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgIFxcblxcbn1cXG5cXG4uZGl2Q29udGFpbmVyMiB7XFxuXFxuICAgIHdpZHRoOiBtYXgoNDAwcHgsNjAlKTtcXG4gICAgbWFyZ2luOiAxNXZoIGF1dG87XFxufVxcblxcbi5oMkNvbnRlbnQyIHtcXG5cXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuXFxuLnBDb250ZW50MiB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmltZ0NvbnRlbnQyIHtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuXFxuICAgXFxuICAgXFxuXFxufVxcbmh0bWwge1xcblxcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCB7YWJvdXRQYWdlfVxuXG5mdW5jdGlvbiBhYm91dFBhZ2UgKCkge1xuXG5jb25zdCBjb250ZW50TWFpbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2RpdkNvbnRhaW5lcicpXG5jb25zdCBkaXZDb250ZW50MT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXG5kaXZDb250ZW50MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGl2Q29udGVudDEnKVxuY29uc3QgaDFDb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmgxQ29udGVudDEuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2gxQ29udGVudDEnKVxuaDFDb250ZW50MS50ZXh0Q29udGVudD1cIk9tIG9zc1wiXG5cbmNvbnRlbnRNYWluLmlubmVySFRNTD1cIlwiXG5cbmNvbnRlbnRNYWluLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcilcbmRpdkNvbnRhaW5lclxuLmFwcGVuZENoaWxkKGgxQ29udGVudDEpXG5kaXZDb250YWluZXJcbi5hcHBlbmRDaGlsZChkaXZDb250ZW50MSlcblxuXG5jb25zdCBkaXZDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpdkNvbnRhaW5lcjIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2RpdkNvbnRhaW5lcjInKVxuY29uc3QgaDJDb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyQ29udGVudDIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2gyQ29udGVudDInKVxuaDJDb250ZW50Mi50ZXh0Q29udGVudD1cIkphbGxhIEppZXBcIlxuY29uc3QgcENvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wQ29udGVudDIudGV4dENvbnRlbnQ9XCJWw6Rsa29tbWVuIHRpbGwgJ2phbGxhIGppZXAnIOKAkyBlbiBwbGF0cyBkw6RyIG1hdGxhZ25pbmcgbcO2dGVyIHBhc3Npb24gb2NoIGdlbWVuc2thcC4gVsOlciByZXNhIGLDtnJqYWRlIG1lZCBlbiBlbmtlbCBpZMOpOiBhdHQgc2thcGEgZW4gbWlsasO2IGTDpHIgdsOkbm5lciBvY2ggZmFtaWxqIGthbiBzYW1sYXMgb2NoIG5qdXRhIGF2IHV0c8O2a3QgbWF0LCBpbnNwaXJlcmFkIGF2IGLDpWRlIHRyYWRpdGlvbiBvY2ggaW5ub3ZhdGlvbi5cIlxucENvbnRlbnQyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwQ29udGVudDInKVxuY29uc3QgaW1nQ29udGVudDI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIFxuaW1nQ29udGVudDIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ltZ0NvbnRlbnQyJylcbmltZ0NvbnRlbnQyLnNyYz0nLi9CYWNrZ3JvdW5kMy5wbmcnXG5cblxuZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBkaXZDb250YWluZXIyKVxuZGl2Q29udGFpbmVyMi5hcHBlbmRDaGlsZChoMkNvbnRlbnQyKVxuZGl2Q29udGFpbmVyMi5hcHBlbmRDaGlsZChwQ29udGVudDIpICAgIFxuZGl2Q29udGFpbmVyMi5hcHBlbmRDaGlsZChpbWdDb250ZW50MilcblxuXG5cbn1cblxuXG4iLCJcbmV4cG9ydCB7aW5pdGlhbHBhZ2Vsb2FkfVxuXG5mdW5jdGlvbiBpbml0aWFscGFnZWxvYWQgKCkge1xuXG5cbiAgICBjb25zdCBjb250ZW50TWFpbiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb250ZW50TWFpbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld3NcIj5cbiAgICAgICAgICAgIDxoMj4gTnloZXQhIDxicj4gTWFza2luLWJ1cmdhcmVuPC9oMj5cbiAgICAgICAgICAgIDxidXR0b24+TMOkcyBtZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuXG5cbiAgICBcbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2luaXRpYWxwYWdlbG9hZH0gZnJvbSAnLi9pbml0aWFscGFnZWxvYWQuanMnO1xuaW1wb3J0IHthYm91dFBhZ2V9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5mdW5jdGlvbiBqYWxsYSAoKSB7XG5cbmluaXRpYWxwYWdlbG9hZCgpXG5cbmZ1bmN0aW9uIHNob3dNZW51ICgpIHtcblxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAgIGNvbnNvbGUubG9nKFwiamllcFwiKVxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVTaG93Jylcbn1cblxuY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JylcbmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dNZW51KVxuXG5cblxufVxuXG5qYWxsYSgpXG5cbmNvbnN0IGJ1dHRvbkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0JylcbmJ1dHRvbkFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXRQYWdlKVxuXG5jb25zdCBidXR0b25Ib21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxuYnV0dG9uSG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYWxwYWdlbG9hZClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=