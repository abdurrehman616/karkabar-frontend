import Banner from "../components/Banner/Banner.jsx";
import FeatureList from "../components/FeatureList/FeatureList.jsx";

const Home = () => {
    return (
        <>
            {/* Banner with Search-bar*/}
            <Banner />
            
            {/*  Feature List  */}
            <FeatureList />
        </>
    );
}

export default Home