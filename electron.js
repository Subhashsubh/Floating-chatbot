const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: 360,
    height: 520,
    x: width - 380,
    y: height - 540,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // 🔹 LOAD REACT APP INTO ELECTRON
  win.loadURL("http://localhost:3000");

  // OPTIONAL: Open DevTools
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
