// import { BeerAPI, getBeer } from "../lib/api";
// import BeerContent from "./BeerPage";
// import { useEffect, useState } from "react";

// export interface BeerCardProps{
//     image_url: string,
//     name: string,
//     description: string
// }

// function Beer(props: BeerCardProps){
//     console.log("Test")
//     const[beer, setBeer] = useState<BeerCardProps[]>([])
//     getBeer()

//     return(
//         <div>
//             {beer.map((el)=>{
//                 return <BeerContent image_url={el.image_url} name={el.name} description={el.description}/>
//             })}
//         </div>
//     )
// }

// export default Beer