(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){





const fs = require('fs');


fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
var isEdge = true;

// var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// // Firefox 1.0+
// var isFirefox = typeof InstallTrigger !== 'undefined';

// // Safari 3.0+ "[object HTMLElementConstructor]" 
// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// // Internet Explorer 6-11
// var isIE = /*@cc_on!@*/false || !!document.documentMode;

// // Edge 20+
// var isEdge = !isIE && !!window.StyleMedia;

// // Chrome 1+
// var isChrome = !!window.chrome && !!window.chrome.webstore;

// // Blink engine detection
// var isBlink = (isChrome || isOpera) && !!window.CSS;
   		

document.getElementById("clickMe").onclick = function() {
 

var ele=  document.getElementById('fileData')
    
   			if(isEdge)
		ele.innerHTML = "Edge";
		else
			ele.innerHTML = "Not Edge";

   		}

},{"fs":1}]},{},[2]);
