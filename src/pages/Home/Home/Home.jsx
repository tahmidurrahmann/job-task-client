import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import UserProfiles from "../../UserProfiles/UserProfiles";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | SCC Technovision Inc.</title>
            </Helmet>
            <Banner />
            <UserProfiles />
        </div>
    );
};

export default Home;