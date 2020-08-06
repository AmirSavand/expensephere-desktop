const { app, BrowserWindow } = require('electron');

function setup() {
  const window = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 350,
      minHeight: 500,
      autoHideMenuBar: true,
    },
  );
  window.loadURL('https://web.expensephere.savandbros.com').then();
}

app.whenReady().then(setup);
