import { useState } from "react"
import "./home.css"
import Hero from "../../components/hero/hero"
import SurpriseCard from "../../components/surpriseCard/SurpriseCard"
function Home(){
    const [seed, setSeed] = useState(0)
    return(
        <>
            <Hero onSurprise={() => setSeed(s => s + 1)}></Hero>
            <SurpriseCard key={seed}></SurpriseCard>
        </>
    )
}
export default Home