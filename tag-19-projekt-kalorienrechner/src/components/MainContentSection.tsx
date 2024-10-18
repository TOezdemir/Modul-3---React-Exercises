import BlogSection from "./BlogSection"
import Calculator from "./Calculator"
import HeroSection from "./HeroSection"

export default function MainContentSection(){
    return(
        <main>
            <HeroSection/>
            <BlogSection/>
            <Calculator/>
        </main>
    )
}