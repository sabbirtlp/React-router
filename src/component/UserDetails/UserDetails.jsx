import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData(); 
    const {name,email} = user;
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Name: {name}</h2>
            <h3>User Email: {email}</h3>
        </div>
    );
};

export default UserDetails;