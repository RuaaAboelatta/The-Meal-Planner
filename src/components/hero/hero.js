import './hero.css'
function Hero(){
    return(
        <div className="hero-sec">
            <div className="hero-info">
                <h2>Find your next <span>favorite meal</span>, made with love.</h2>
                <p>
                    Search thousands of chef-tested recipes by ingredients in your fridge or browse weekly hand-crafted seasonal dishes curated for curious home cooks.
                </p>
            </div>
            <div className="hero-search">
                <form>
                    <input type='text' placeholder='Search ingredients'></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <button>Surprise Me</button>
            </div>
        </div>
    )
}
export default Hero