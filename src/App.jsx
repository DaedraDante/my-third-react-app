import Game from './Game.jsx'

function App() {
  return(
    <>
        <Game name="Minecraft" releaseDate={2011} isFree ={true}/> 
        <Game name="Hello Neighbour" releaseDate={2017} isFree ={false}/> 
        <Game name="Need for Speed:Most Wanted" releaseDate={2012} isFree ={false}/> 
        <Game name="Spiderman 2" releaseDate={2025} isFree ={false}/> 
    </>
  )
}

export default App
