import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = ()=>{

    const { id } = useParams(); 
    const [isWaiting, setIsWaiting] = useState(true);
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [watingServer, setWatingServer] = useState(false)
    const navigator = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id)
                .then(response => {
                    console.log(response.ok)
                    if (!response.ok) {
                        throw Error('Can not connect to the server!.');
                    }
                    return response.json();
                })
                .then(data => {
                //    console.log(data); 
                    setUserId(data.userId)
                    setTitle(data.title)
                    setBody(data.body)
                    setIsWaiting(false)
                }).catch(e => {
                    console.log(e.message); 
                });
        }, 2000);

    }, []);

    const mySubmit = (e)=>{
        e.preventDefault();
        const mypost = {
            id,
            title ,
            body ,
            userId ,
        }
        console.log(mypost)

        setWatingServer(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
                method: 'PUT',
            body: JSON.stringify(mypost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                console.log('new post updated');
                setWatingServer(false);
                navigator('/posts')
            });
        }, 2000);
       


    }
    return(
<div className="container">
            {isWaiting && <h1>Please wait to load data ...</h1>}

            <form onSubmit={mySubmit}>
                <div className="mb-3">
                    <label  className="form-label">User Id  </label>
                    <input 
                    type="text" 
                    className="form-control"  
                    required 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Title  </label>
                    <input 
                    type="text" 
                    className="form-control"  
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label   className="form-label">Body  </label>
                    <textarea 
                    className="form-control"  
                    rows="3"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="col-auto">
                    {!watingServer && <button type="submit" className="btn btn-success mb-3">Update  </button>}
                    {watingServer && <button type="button" className="btn btn-success mb-3" disabled>Please wait</button>}
                </div>


                <br/>
                <h3>{userId} </h3>
                <h3>{title} </h3>
                <h3>{body} </h3>
    </form>
         
</div>
    );
}

export default Edit;