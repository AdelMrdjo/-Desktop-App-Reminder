const electron = require('electron');
const { globalShortcut } = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let win;
function createWindow(){
	win = new BrowserWindow({
		width:800,
		height:600,
		resizable:false,
		maiximzable:false,
		icon: __dirname + '/icon.ico',
		autoHideMenuBar:true,
		title:'Reminder',
		frame:false,

		webPreferences:{
			nodeIntegration:true,
			devTools: false
		}
	});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
	win.on('closed', () => {
		win = null;
	})
	globalShortcut.register('CmdOrCtrl+R', () => {});
}
app.on('ready',createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}
})
app.on('activate', () => {
	if(win === null){
		createWindow();
	}
})

