import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <div>
                <div>
                  <img src="" alt="" />
                   <Link to={"/all"}>All Beers!</Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
            <div>
                <div>
                  <img src="" alt="" />
                  <Link to={"/:id"}>Random Beer!</Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </div>
        </div>
    )
}

export default Home