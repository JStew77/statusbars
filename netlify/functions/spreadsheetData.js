const axios = require('axios');

exports.handler = async function (event, context){
    const sheetID = process.env.SHEET_ID
    const apiKey = process.env.SHEETS_API_KEY

    const result = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/A:D?key=${apiKey}`)

    // console.log(result.data.values)
    const returnArray = result.data.values.slice(1).map((row, index) => ({
        characterName: row[1],
        maxHealth: row[2],
        currentHealth: row[3],
        rowNumber: index
    }))
    // console.log(returnArray)
    return {
        statusCode: 200,
        body: JSON.stringify(returnArray)
    }
}