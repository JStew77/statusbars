const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async function (event, context){
    const {sheetID} = event.queryStringParameters
    const doc = new GoogleSpreadsheet(sheetID)
    doc.useApiKey(process.env.SHEETS_API_KEY);
    console.log(doc)
    await doc.loadInfo()
    console.log(doc)
    const charSheet = doc.sheetsByTitle["Sheet1"]
    console.log(charSheet)
    await charSheet.loadCells(["A2:N2"])

    return {
        statusCode: 200,
        body: JSON.stringify({
            characterName: charSheet.getCellByA1('B2').value,
            totalHealth: charSheet.getCellByA1('D2').value,
            currentHealth: charSheet.getCellByA1('N2').value,
        })
    }
}