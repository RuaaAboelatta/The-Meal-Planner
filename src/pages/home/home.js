import { useState } from "react";
import Hero from "../../components/hero/hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Footer from "../../components/footer/footer";
function Home(){
    const [seed, setSeed] = useState(0)
    return(
        <>
            <Hero onSurprise={() => setSeed(s => s + 1)} seed={seed}></Hero>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </>
    )
}
export default Home