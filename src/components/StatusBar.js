import React from "react";

export default function StatusBar(props){    
    const styles = {
        width: Math.ceil(100*(props.currentHealth/props.maxHealth)) + "%"
    }
    return (
        <div className="StatusBar">
            <div className="StatusBar-info">
                <h2>{props.characterName}</h2>
                <p>{props.currentHealth}/{props.maxHealth}</p>
            </div>
            <div className="StatusBar-health-bar">
                <div className="StatusBar-health-bar-moving-bar" style={styles}></div>
            </div>
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