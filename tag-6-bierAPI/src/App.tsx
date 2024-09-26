// import Beer from "./components/Beer"
// import BeerContent from "./components/BeerPage"
// import Header from "./components/Header"

import BeerList from "./components/BeerList"
import Header from "./components/Header"

function App() {


  return (
    <>
    <Header/>
    <div className="flex flex-col">
      <BeerList/>
    </div>
    
    </>
  
  )
}

export default App
