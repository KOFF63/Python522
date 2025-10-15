import './Result.css';

function Result({correct, questions}){

    const getAnswerWord = (count) => {
        if (count === 1) {
            return "ответ";
        } else if (count >= 2 && count <= 4) {
            return "ответа";
        } else {
            return "ответов";
        }
    };

    return(
        <div>
            <p className='text'> 
                Вы отгадали <b>{correct}</b> {getAnswerWord(correct)} из <b>{questions.length}</b>
            </p>
            <a href="/" className='but'>Попробовать снова</a>
        </div>
    );
}

export default Result;