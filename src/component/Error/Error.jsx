import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
    const navigate = useNavigate(); 

    const gotoHomepage = () => {
        navigate('')
    }
    const error = useRouteError();

    // Uncaught ReferenceError: path is not defined
    return (
        <div>
            <h1> Oops: {error.statusText || error.message} </h1>
            <button onClick={gotoHomepage}>Goto Homepage</button>
        </div>
    );
};

export default Error;