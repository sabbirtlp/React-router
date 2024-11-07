import { useLoaderData, useNavigate } from "react-router-dom";


const SinglePost = () => {
    const navigate = useNavigate();
    const post = useLoaderData(); 
    const {title,body} = post; 
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Title: {title}</h1>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default SinglePost;