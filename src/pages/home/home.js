import { useState } from "react";
import Hero from "../../components/hero/hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
function Home(){
    const [seed, setSeed] = useState(0)
    return(
        <>
            <Hero onSurprise={() => setSeed(s => s + 1)} seed={seed}></Hero>
            <HowItWorks></HowItWorks>
        </>
    )
}
export default Home