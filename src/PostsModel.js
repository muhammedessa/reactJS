import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostsModel = (url)=>{
    const [isWaiting, setIsWaiting] = useState(true);
    const [serverError, setServerError] = useState(null);
    const [posts, setPost] = useState(null);
    const navigator = useNavigate();

    const deleteAction = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then(()=>{
            navigator('/posts')
        });
        // const updatedPosts = posts.filter(post=> post.id != id);
        // setPost(updatedPosts)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    console.log(response.ok)
                    if (!response.ok) {
                        throw Error('Can not connect to the server!.');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setPost(data);
                    setIsWaiting(false)
                }).catch(e => {
                    console.log(e.message);
                    setServerError(e.message);
                    setIsWaiting(false)
                });
        }, 2000);

    }, [url]);


    return { isWaiting, serverError, posts}
}

export default PostsModel;