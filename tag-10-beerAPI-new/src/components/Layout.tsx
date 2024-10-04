import { Outlet } from "react-router-dom"


function Layout(){
    return(
        <div>
            {/* <header>
            <h1>The Beer Blog</h1>
            </header> */}
            <Outlet/>
            {/* <footer>
                <button><Link to={"/all"}>ALLE BIERE KNOPF</Link></button>
            </footer> */}
        </div>
    )
}

export default Layout