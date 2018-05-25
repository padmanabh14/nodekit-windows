

var electro = {
    'app': io.nodekit.electro.app,
    'autoUpdater': "not implemented",
    'BrowserWindow': io.nodekit.electro.BrowserWindow,
    'contentTracing': "not implemented",
    'dialog': io.nodekit.electro.dialog,
    'ipcMain': io.nodekit.electro.ipcMain,
    'Menu': io.nodekit.electro.Menu,
    'MenuItem': io.nodekit.electro.MenuItem,
    'powerMonitor': "not implemented",
    'powerSaveBlocker': "not implemented",
    'protocol': io.nodekit.electro.protocol || {},
    'session': "not implemented",
    'WebContents': io.nodekit.electro.WebContents,
    'Tray': "not implemented"
}

electro.protocol.createServer = require('electro_protocol').createServer

module.exports = electro