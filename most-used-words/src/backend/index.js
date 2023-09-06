const {ipcMain} = require("electron")

const pathToTows = require("./pathsToTows")

ipcMain.on("process-subtitles", (e, paths) => {
    console.log(paths)
    pathToTows(paths).then(rows => console.log(rows)).then(()=>{
        e.reply("process-subtitles", [
            { word: "i", amount: 547 },
            { word: "you", amount: 478 },
            { word:"it", amount: 10 }
        ])
    })    
})