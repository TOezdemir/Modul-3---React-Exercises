import { Link } from "react-router-dom"


function Header(){
    return(
        <header className="App">
            <h1>SuperCarlist</h1>
            <nav>
                <ul>
                  <Link className="navigation-link" to={"/"}>Home</Link>   
                </ul>
            </nav>
        </header>
    )
}

export default Header