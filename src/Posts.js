import { useEffect, useState } from "react";
import PostsList from './PostsList';
import PostsModel from './PostsModel';

const Posts = ()=>{

    const { isWaiting, serverError, posts} = PostsModel('https://jsonplaceholder.typicode.com/posts');  
    
    return(

        <div> 
            {serverError && <h1>{serverError} ...</h1>}
            {isWaiting && <h1>Please wait to load data ...</h1>}
            {posts && <PostsList posts={posts} name="Posts"  />}
        </div>

    );
}

export default Posts;









{/* <button type="button" onClick={() => setCheckAuth('true')} className="btn btn-danger">Danger</button>
            <h1>status: {checkAuth}</h1><br/> */}

{/* {posts && <PostsList posts={posts} name="Posts" deleteAction={deleteAction} />} */ }

    // const [checkAuth, setCheckAuth] = useState('false');
    // const [posts1, setPost1] = useState([
    //     {
    //         userId: 1,
    //         id: 1,
    //         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //     },
    //     {
    //         userId: 1,
    //         id: 2,
    //         title: "qui est esse",
    //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //     },
    //     {
    //         userId: 1,
    //         id: 3,
    //         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //     },
    //     {
    //         userId: 1,
    //         id: 4,
    //         title: "eum et est occaecati",
    //         body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    //     },
    //     {
    //         userId: 1,
    //         id: 5,
    //         title: "nesciunt quas odio",
    //         body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    //     },
    // ]);
    // const deleteAction = (id) => {
    //     const updatedPosts = posts.filter(post=> post.id != id);
    //     setPost(updatedPosts)
    // }