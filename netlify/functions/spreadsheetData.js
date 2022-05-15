const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function (event, context){
    const {sheetID} = event.queryStringParameters
    const doc = new GoogleSpreadsheet(sheetID)
    doc.useApiKey(process.env.SHEETS_API_KEY);
    // console.log(doc)
    await doc.loadInfo()
    // console.log(doc)
    const charSheet = doc.sheetsByTitle["Sheet1"]
    // console.log(charSheet)
    const rows = await charSheet.getRows({
        offset: 0,
        limit: 10
    })
    console.log(rows[0])
    // await charSheet.loadCells(["A2:N2"])
    const returnArray = rows.map(row => ({
        characterName: row.character_name,
        maxHealth: row.total_health,
        currentHealth: row.current_health,
        rowNumber: row.rowNumber
    }))
    return {
        statusCode: 200,
        body: JSON.stringify(returnArray)
    }
}