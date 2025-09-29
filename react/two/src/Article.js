import mars from './icons/mars.png';
import female from './icons/female.png';
import './Article.css';

function Article(props) {
    let { db } = props;
 
    return (
        <div className="app">
            {
                db.map((person, index) => { 
                    let icon = person.pol === "female" ? female : mars;
                    
                    return (
                        <div className="card" key={person.surname + index}>
                            <img src={person.photo} alt={person.name} />
                            <div className="name">
                                {person.name} {person.surname}
                            </div>
                            <div className="pol">
                                <img src={icon} alt={person.pol} />
                            </div>
                            <div className="age">
                                {person.age}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
 
export default Article;
 