import "./FeedbackMessage.css";
function FeedbackMessage({msg}){
    return(
        <div className="feedback-msg">
            <h2>{msg}</h2>
        </div>
    )
}
export default FeedbackMessage