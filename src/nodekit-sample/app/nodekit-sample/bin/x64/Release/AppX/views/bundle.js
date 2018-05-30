(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){

	$(document).ready(function(){
		
		var electron = require('fs');
		function Check_Version(){
    var rv = -1; // Return value assumes failure.

    if (navigator.appName == 'Microsoft Internet Explorer'){

       var ua = navigator.userAgent,
           re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

       if (re.exec(ua) !== null){
         rv = parseFloat( RegExp.$1 );
       }
    }
    else if(navigator.appName == "Netscape"){                       
       /// in IE 11 the navigator.appVersion says 'trident'
       /// in Edge the navigator.appVersion does not say trident
       if(navigator.appVersion.indexOf('Trident') === -1) rv = 12;
       else rv = 11;
    }       

    return rv;          
}

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
   		

   		$('#clickMe').click(function(){


   			if(isEdge)
			$('#fileData').html('Using edge');
		else
			$('#fileData').html('Not edge');


   		});
		
    });
},{"fs":1}]},{},[2]);
