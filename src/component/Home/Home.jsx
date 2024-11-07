import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BarLoader } from "react-spinners";


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <BarLoader className="loader-color"/> : <Outlet />
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;