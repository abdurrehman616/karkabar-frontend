import BannerSearchBar from "./BannerSearchBar.jsx";

const Banner = () => {
    return (
        <>
            {/* Banner with Search-bar*/}
            <div className="bg-[url('src/assets/images/finder-1903x500.jpg')]
                        bg-cover h-[60vh]
            ">
                <div className="flex flex-col justify-center items-center bg-black h-[60vh] bg-opacity-60">
                    <div className="container flex flex-col justify-center items-center gap-3">
                        <div className="text-white text-5xl font-bold">
                            Find Parts For Your Vehicle
                        </div>
                        <div className="text-white">
                            Over hundreds of brands and tens of thousands of parts
                        </div>
                    </div>
                    
                    {/*  Search bar  */}
                    <BannerSearchBar/>
                </div>
            </div>
        </>
    );
}

export default Banner