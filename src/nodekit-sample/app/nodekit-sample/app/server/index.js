
const useHttp = true;


const http = require('http');

var fs = require('fs');
var path = require('path');

const BrowserWindow = require('electro').BrowserWindow,
    nodekit = require('electro').app;

console.log("STARTING SAMPLE APPLICATION");



nodekit.on("ready", function() {
          
                         var p = new BrowserWindow({
                                                   'preloadURL': 'http://localhost:' + port,
                                                   'nk.allowCustomProtocol': false });
                      
           
           
 });
