import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const PostsList = ({ posts, name})=>{
 

     
    const navigator = useNavigate();
    const deleteAction = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then(() => {
            
            navigator('/')
        });
        // const updatedPosts = posts.filter(post=> post.id != id);
        // setPost(updatedPosts)
    }

    return(
        <div className="container">

            <h1>{name}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {  posts.map((post) => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                            <td> {post.body}</td>
                            <td> 
                          <button onClick={() => deleteAction(post.id)} type="button" className="btn btn-danger">Delete</button> 
                             </td>
                            <td>
                                <Link to={"/posts/" + post.id}  className="btn btn-info">More</Link>
                            </td>
                            <td>
                                <Link to={"/edit/" + post.id} className="btn btn-success">Edit</Link>
                            </td>
                             

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default PostsList;