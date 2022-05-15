import StatusBar from './components/StatusBar';
import Header from './components/Header'
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

  useEffect(() =>{
    // console.log("effect")
    async function getStats(){
        const stats = await fetch(`/.netlify/functions/spreadsheetData`).then(res => res.json())
        // console.log(stats)
        return stats
    }
    getStats().then(result => setCharStats(result.map(stat => ({
      ...stat,
      currentHealth: stat.currentHealth.slice(1)
    }))))

    // this code refreshes the stats
    setTimeout(() => {
        console.log(flipper)
        setFlipper(f => !f)
    }, 10000)
  }, [flipper])  


  return (
    <div className="App">
      <Header />
      <div className='App-bars'>
        {charElements}
      </div>
    </div>
  );
}

export default App;
