import Spoiler from "./Components/Spoiler"

function App() {

  return (
    <>
    <div>
     <h1 className="container m-5">Hi!</h1> 
     <p className="container m-5">
     Star Wars (englisch für <Spoiler>Sternkriege</Spoiler>) ist ein Film-Franchise, dessen
      Geschichte mit dem <Spoiler>1977</Spoiler> erschienenen Kinofilm Krieg der Sterne
      (Originaltitel: Star Wars) begann. Schöpfer von Star Wars ist der
      Drehbuchautor, Produzent und Regisseur George Lucas. Im Jahr 2012
      verkaufte Lucas seine Firma <Spoiler>Lucasfilm</Spoiler>, mitsamt den Rechten an Star Wars,
      an die Walt Disney Company.{" "}
     </p>
    </div>
    </>
  )
}

export default App
