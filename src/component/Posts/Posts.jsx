import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            <div className="post-wrapper">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;