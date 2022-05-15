import React from "react";

export default function StatusBar(props){
    const [cells, setCells] = React.useState({
        totalHealth: 0,
        currentHealth: 0,
        characterName: ""
    })
    const [flipper, setFlipper] = React.useState(true)

    React.useEffect(() =>{
        // console.log("effect")
        async function getStats(){
            const stats = await fetch(`/.netlify/functions/spreadsheetData?sheetID=${props.sheetID}`).then(res => res.json())
            return stats
        }
        getStats().then(stats => setCells({
            ...cells,
            totalHealth: stats.totalHealth,
            currentHealth: stats.currentHealth,
            characterName: stats.characterName
        }))
        // this code refreshes the stats
        // setTimeout(() => {
        //     console.log(flipper)
        //     setFlipper(f => !f)
        // }, 150000)
    }, [flipper])

    return (
        <div>
            <h2>{cells.characterName}</h2>
            <p>Total:{cells.totalHealth}</p>
            <p>Remaining:{cells.currentHealth}</p>
        </div>
    )
}