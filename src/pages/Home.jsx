import Banner from "../components/Banner/Banner.jsx";
import FeatureList from "../components/FeatureList/FeatureList.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const Home = () => {
    return (
        <>
            {/* Banner with Search-bar*/}
            <Banner />
            
            {/*  Feature List  */}
            <FeatureList />
    
            <div className="divider px-20 m-0"></div>
    
    
            {/*  Featured Products   */}
            <div className="container flex flex-col">
                {/*title*/}
                <div className="flex justify-between items-center px-12">
                    <span className="text-xl font-bold">Feature Products</span>
                    
                    <div className="flex gap-8 items-center">
                        {/*  tags   */}
                        <div className="background-gray px-3 py-1 skew-x-[-20deg]">
                            <button className="text-white text-sm skew-x-[20deg]">All</button>
                        </div>
                        <div className="flex">
                            <button className="text-gray-400 text-sm">Power Tools</button>
                        </div>
                        <div className="flex">
                            <button className="text-gray-400 text-sm">Hand Tools</button>
                        </div>
                        <div className="flex">
                            <button className="text-gray-400 text-sm">Plumbing</button>
                        </div>
                        
                        {/*  buttons  */}
                        <div className="flex gap-1">
                            <div className="bg-blue-400 px-2 py-1 -skew-x-[20deg]">
                                <button className="text-white skew-x-[20deg]">&lt;</button>
                            </div>
                            <div className="bg-blue-400 px-2 py-1 -skew-x-[20deg]">
                                <button className="text-white skew-x-[20deg]">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="divider px-12 m-0"></div>
                
                <div className="flex justify-center gap-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    );
}

export default Home