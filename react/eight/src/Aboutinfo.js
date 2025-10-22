import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

function Aboutinfo(){

    let {id} = useParams();
    let [post, setPost] = useState(null);
    let navigate = useNavigate();

    let goBack= () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id]);

    return(
        <div className="content">
            {
                post && (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={goBack}>Назад</button>
                    </>
                )
            }
                              
        </div>
    )
}

export default Aboutinfo;