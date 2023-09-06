const { ipcMain } = require("electron")

const pathToTows = require("./pathsToTows")
const prepareData = require("./prepareData")

ipcMain.on("process-subtitles", (e, paths) => {
    console.log(paths)
    pathToTows(paths).then(rows => prepareData(rows))
        .then(preperedData => console.log(preperedData))
        .then(() => {
            e.reply("process-subtitles", [
                { word: "i", amount: 547 },
                { word: "you", amount: 478 },
                { word: "it", amount: 10 }
            ])
        })
})