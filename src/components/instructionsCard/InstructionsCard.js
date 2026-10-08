import "./instructionsCard.css"
function InstructionsCard({recipe}) {
  const steps = recipe.strInstructions
  .split(/\r\n/)                            
  .map((s) => s.replace(/^[.*0123456789▢■•\-\s]+/, '').trim())   
  .filter(Boolean);        

  return (
    <div className="instructions-card">
      <div >
        <div className="card-top">
          <i class="fa-solid fa-list-check red-icon"></i>
          <h2 className="title">Instructions</h2>
        </div>
        <div className="tutorial-card">
          <i class="fa-solid fa-circle-play red-icon"></i>
          <a href={recipe.strYoutube} target="_blank" > Watch a tutorial</a>
        </div>
      </div>
      <ul className="instructions-list">
        {steps.map((step,i)=>(
          <li className="step" key={i}>{step}</li>
        ))}
     </ul>
    </div>
  );
}

export default InstructionsCard;