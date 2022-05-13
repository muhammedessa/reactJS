import { useParams } from "react-router-dom";
import PostsModel from './PostsModel';

const PostInfo = () => {
    const {id} = useParams(); 
    const { isWaiting, serverError, posts } = PostsModel('https://jsonplaceholder.typicode.com/posts/' + id);  

    console.log(posts)
    return (

        <div>
            <br />
            <h1> PostInfo - {id}</h1><br/>

            {serverError && <h1>{serverError} ...</h1>}
            {isWaiting && <h1>Please wait to load data ...</h1>}

            {posts && (
                <div className="card container" >
                    <div className="card-body">
                        <h5 className="card-title">{posts.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">User id: {posts.userId} </h6>
                        <p className="card-text"> {posts.body} </p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            )
                
           }
        </div>

    );
}

export default PostInfo;
