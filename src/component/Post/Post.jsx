import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import './Post.css'
const Post = ({post}) => {
    
    const {id,title,body} = post;
    const navigate = useNavigate(); 
    const showMoreHandler = () => {
        navigate(`${id}`)
    }
    return (
        <div className="post-box">
            <h4>Post Id : {id}</h4>
            <h2>Title: {title}</h2>
            <p>Title: {body}</p>
            <Link to={`/post/${id}`}>Read More</Link>
            <button onClick={showMoreHandler}>Show More</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired,
}
export default Post;