import { useState, useEffect } from "react";

const Search = () => {

    const [query, setQuery] = useState("")

    const [posts, setPost] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.ok)
                if (!response.ok) {
                    throw Error('Can not connect to the server!.');
                }
                return response.json();
            }).then(data => {
                console.log(data); 
                setPost(data)
            }).catch(e => {
                console.log(e.message);
            });
    }, []);

    return (
    < div >
            <br />
            <input placeholder="Enter" onChange={event => setQuery(event.target.value)}/><br/>
            {posts &&
                posts.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className="box" key={index}>
                        <p>{post.title}</p>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                    </div>
                ))
            }
    </div >
    );
}



export default  Search;