import './Quizzes.css';

function Quizzes({ question }){
    return(
        <div className="content">
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map((text, index) => <li key={index}>{text}</li>)
                }
            </ul>
        </div>
    )
}

export default Quizzes;