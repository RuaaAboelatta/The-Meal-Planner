import "./Search.css"
function Search(){
    return(
        <div className="hero-search">
                <form>
                    <input type='text' placeholder='Search ingredients'></input>
                    <button className='search-button'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </form>
                
        </div>
    )
}
export default Search