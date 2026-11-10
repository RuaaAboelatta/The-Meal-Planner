import { Link } from 'react-router-dom';
import RandomRecipeCard from '../RandomRecipeCard/RandomRecipeCard';
import './hero.css';

function Hero({ onSurprise, seed }){
    return(
        <div className="hero-sec">
            <div className="hero-info">
                <h2>Find your next <span>favorite meal</span>, made with love.</h2>
                <p>
                    Search thousands of chef-tested recipes by ingredients in your fridge or browse weekly hand-crafted seasonal dishes curated for curious home cooks.
                </p>
                <div className='btns-container'>
                    <Link to="/categories" className='button red-button' onClick={onSurprise}>
                        <i class="fa-solid fa-utensils"></i>
                        Browse Recipes
                    </Link>
                    <button className='button green-button' onClick={onSurprise}>
                        <i class="fa-solid fa-dice-five"></i>
                        Surprise Me
                    </button>
                </div>
            </div>
            <RandomRecipeCard key={seed}></RandomRecipeCard>
        </div>
    )
}
export default Hero