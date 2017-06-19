const electron = require('electron');
var app = electron.app;
var browserWindow = electron.BrowserWindow;
//mainWindow
var mainWindow = null;
//app ready function
app.on('ready',function(){
    mainWindow = new BrowserWindow({
        height:700,
        width:368
    });
    mainWindow.loadURL("file://"+__dirname+"/index.html");
});