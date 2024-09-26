import { useEffect,useState } from "react"
import Newscard, { NewscardProps } from "./NewsCard"



function News(){

    console.log("test")
    const[news, setNews] = useState<NewscardProps[]>([])
    useEffect(()=>{
        //                                    {target.value}
        fetch(`http://newsapi.org/v2/everything?q=apple&apiKey=9b2b3c2b412e47c68e79641dd12162b5`)

            .then((response) => response.json())
            .then((json)=>{
                setNews(json.articles)
                console.log(json)
                console.log(news)
            })
                .catch((err)=>{
                    console.error(err)
                })
    }, [])

    const filteredNews = news.filter((el)=>{
        return (el.author !== null && el.urlToImage !== null )
        
    })

    return(
        <div>Hi
        {filteredNews.map((el)=>{
            return <Newscard author={el.author} description={el.description} title={el.title} url={el.url} urlToImage={el.urlToImage}/>
        })}
        </div>
    )
}

export default News