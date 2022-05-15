import React from "react";

export default function StatusBar(props){    
    console.log(props)
    return (
        <div>
            <h2>{props.characterName}</h2>
            <p>Total:{props.maxHealth}</p>
            <p>Remaining:{props.currentHealth}</p>
        </div>
    )

    // React.useEffect(() =>{
    //     // console.log("effect")
    //     async function getStats(){
    //         const stats = await fetch(`/.netlify/functions/spreadsheetData?sheetID=${props.sheetID}`).then(res => res.json())
    //         return stats
    //     }
    //     getStats().then(stats => setCells({
    //         ...cells,
    //         totalHealth: stats.totalHealth,
    //         currentHealth: stats.currentHealth,
    //         characterName: stats.characterName
    //     }))
    //     // this code refreshes the stats
    //     // setTimeout(() => {
    //     //     console.log(flipper)
    //     //     setFlipper(f => !f)
    //     // }, 150000)
    // }, [flipper])

}