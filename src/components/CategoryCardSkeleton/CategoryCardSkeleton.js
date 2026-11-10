import "./CategoryCardSkeleton.css";
function CategoryCardSkeleton(){
    return(
        <div className="category-card category-card-skeleton">
                    <div className="card-img"></div>
                    <div className="card-body">
                        <h2 className="title"></h2>
                        <div  className="link-to-recipes">
                            Explore Collection
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
        </div>
    )
}
export default CategoryCardSkeleton