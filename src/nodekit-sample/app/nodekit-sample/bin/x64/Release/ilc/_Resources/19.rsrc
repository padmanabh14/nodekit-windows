
const useHttp = true;


const http = require('http');

var fs = require('fs');
var path = require('path');

const BrowserWindow = require('electro').BrowserWindow,
    nodekit = require('electro').app;

const pathHTML = "/index.html";
console.log(pathHTML);

nodekit.on("ready", function () {
    console.log("STARTING SAMPLE APPLICATION");
    var browserWindow = new BrowserWindow({ width: 500, height: 500 });

    browserWindow.webContents.loadURL(`ms-appx-web://${pathHTML}`, {protocol:"file"});

    
 
 });
