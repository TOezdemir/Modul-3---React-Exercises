export interface NewscardProps{
    author: string,
    description: string,
    title: string,
    url: string,
    urlToImage: string
}


function Newscard(props: NewscardProps){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.urlToImage} alt="" />
            <p>{props.description}</p>
        </div>
    )
}

export default Newscard