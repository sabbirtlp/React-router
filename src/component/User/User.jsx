import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
const User = ({user}) => {
    console.log(user);
    
    const userStyle = {
        border: '2px solid salmon',
        padding:'15px',
        borderRadius:'10px'
    }
    const {name,phone,email,id} = user;
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h4>{phone}</h4>
            <h5>{email}</h5>
            <Link to={`/user/${id}`}>More Details</Link>
        </div>
    );
};
User.propTypes = {
    user:PropTypes.object.isRequired
}
export default User;