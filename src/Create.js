import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = ()=>{

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [watingServer, setWatingServer] = useState(false)
    const navigator = useNavigate();
    const mySubmit = (e)=>{
        e.preventDefault();
        const mypost = {
            title ,
            body ,
            userId ,
        }
        console.log(mypost)

        setWatingServer(true);
        setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(mypost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                console.log('new post added');
                setWatingServer(false);
                navigator('/posts')
            });
        }, 2000);
       


    }
    return(
<div className="container">
            <form onSubmit={mySubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput0" className="form-label">User Id  </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput0" 
                    required 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title  </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Body  </label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <div class="col-auto">
           {!watingServer &&<button type="submit" class="btn btn-success mb-3">Create  </button>}
           {watingServer && <button type="button" class="btn btn-success mb-3" disabled>Please wait</button>}
                </div>


                <br/>
                <h3>{userId} </h3>
                <h3>{title} </h3>
                <h3>{body} </h3>
    </form>
         
</div>
    );
}

export default Create;