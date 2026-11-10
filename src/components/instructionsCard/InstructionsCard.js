import "./instructionsCard.css";
function InstructionsCard({recipe}) {
  const steps = recipe.strInstructions
  .split(/\r\n/)                            
  .map((s) => s.replace(/^[.*0123456789▢■•\-\s]+/, '').trim())   
  .filter(Boolean)        

  return (
    <div className="instructions-card">
      <div>
        <div className="card-header">
          <i class="fa-solid fa-list-check title-icon"></i>
          <h2 className="title">Instructions</h2>
        </div>
        <div className="tutorial-icon">
          <a href={recipe.strYoutube} target="_blank" >
            <i class="fa-solid fa-circle-play"></i>
          </a>
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

export default InstructionsCard