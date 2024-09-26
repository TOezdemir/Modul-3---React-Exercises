
export interface BeerAPI {
    image_url:         string;
    _id:               string;
    name:              string;
    tagline:           string;
    first_brewed:      string;
    description:       string;
    attenuation_level: number;
    brewers_tips:      string;
    contributed_by:    string;
    expireAt:          Date;
    __v:               number;
}

// export const getBeer = async()=>{
//     const beerURL = "https://ih-beers-api2.herokuapp.com/beers"
//     const response = await fetch(beerURL)
//     const json = (await response.json()) as BeerAPI
//     return json
// }

