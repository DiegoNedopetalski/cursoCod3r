module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows
                        .filter(filterValid)
                        .map(removePontuation)
                        .map(removeTags)
                        .reduce(mergeRows)
                        .split(" ")
                        .map(word => word.toLowerCase())

            resolve(data)
        } catch(e) {
            reject(e)
        }
    })
}

function filterValid(row){
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes("-->")
    return notNumber && notEmpty && notInterval;
}

function removePontuation(row) {
    return row.replace(/[,?!:;.']/g,"")
}

function removeTags(row) {
    return row.replace(/(<[^>]+)>/g,"").trim
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`
}