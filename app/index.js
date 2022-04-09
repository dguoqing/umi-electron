// app控制应用程序的事件生命周期  BrowserWindow创建和管理应用程序 窗口 
// 主进程运行着Node.js所以可以使用require引用
const { app, BrowserWindow } = require('electron')
const { startServer }  = require('./server/bin/www')
//  创建窗口将index.html加载进一个新的BrowserWindow实例
function createWindow() {
    startServer
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}
// 只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口，app.whenReady()用来监听事件
// 在whenReady()成功后执行createWindow()
app.whenReady().then(() => {
    createWindow()
})
// 关闭所有窗口时退出应用
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
