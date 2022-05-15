import './App.css';
import StatusBar from './components/StatusBar';
import React, { useEffect } from 'react';

function App() {
  const [flipper, setFlipper] = React.useState(true)
  const [charStats, setCharStats] = React.useState([])

  const charElements = charStats.map(charStat => (
    <StatusBar
      key = {charStat.rowNumber} 
      characterName = {charStat.characterName}
      maxHealth = {charStat.maxHealth}
      currentHealth = {charStat.currentHealth}
    />
  ))

  React.useEffect(() =>{
    // console.log("effect")
    async function getStats(){
        const stats = await fetch(`/.netlify/functions/spreadsheetData?sheetID=1Q48OnP7_MY8kCmUIOb2_0XoRNBnYJQcZGvR0G0yV8Xo`).then(res => res.json())
        console.log(stats)
        return stats
    }
    getStats().then(result => setCharStats(result))

    // this code refreshes the stats
    setTimeout(() => {
        console.log(flipper)
        setFlipper(f => !f)
    }, 30000)
  }, [flipper])  


  return (
    <div className="App">
      {charElements}
    </div>
  );
}

export default App;
