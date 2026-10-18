import "./HowItWorks.css";
function HowItWorks(){
    const appsteps = [
        {
            icon: 'fa-solid fa-magnifying-glass',
            title: 'Find your dish ',
            body: 'Find recipes by dish name or the ingredients already in your kitchen'
        },
        {
            icon: 'fa-regular fa-heart',
            title: 'Make it yours',
            body: 'Tap the heart to keep your favorites, or add a meal into your weekly planner'
        },
        {
            icon: 'fa-solid fa-utensils',
            title: ' Get cooking',
            body: 'Follow clear, step-by-step instructions and enjoy something new'
        }
    ]

    return(
        <div className="step-grid">
            <div className="container">
                <h2 className="title">How It Works: Easy & Delicious</h2>
                <div className="grid">
                    {appsteps.map((step)=>(
                        <div className="app-step">
                            <i className={step.icon}></i>
                            <h2 className="title">{step.title}</h2>
                            <p>{step.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
export default HowItWorks