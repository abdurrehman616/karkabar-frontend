const Banner = () => {
    return (
        <>
            {/* Banner with Search-bar*/}
            <div className="bg-[url('src/assets/images/finder-1903x500.jpg')]
                        bg-cover h-[60vh]
            ">
                <div className="bg-black h-[60vh] bg-opacity-50">
                    <div className="container flex flex-col justify-center items-center">
                    <span className="text-white text-5xl font-bold">
                        Find Parts For Your Vehicle
                    </span>
                        <span className="text-white">
                        Over hundreds of brands and tens of thousands of parts
                    </span>
                    </div>
                    {/*  Search bar  */}
                </div>
            </div>
        </>
    );
}

export default Banner