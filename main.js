const electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipcMain = electron.ipcMain;
//mainWindow
var mainWindow = null;
//app ready function
app.on('ready',function(){
    mainWindow = new BrowserWindow({
        height:700,
        width:368
    });
    mainWindow.setMenu(null); //No File menu
    mainWindow.loadURL("file://"+__dirname+"/index.html");
});