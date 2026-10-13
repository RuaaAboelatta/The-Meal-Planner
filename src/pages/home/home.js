import { useState } from "react";
import Hero from "../../components/hero/hero";
function Home(){
    const [seed, setSeed] = useState(0)
    return(
        <>
            <Hero onSurprise={() => setSeed(s => s + 1)} seed={seed}></Hero>
        </>
    )
}
export default Home