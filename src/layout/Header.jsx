const Header = () => {
    return (
        <div className="background-blue">
            <div className="container flex w-full justify-between items-center text-white">
                {/*  Logo  */}
                <div className="flex w-full font-bold text-2xl font-display gap-3 items-center">
                    <i className="fal fa-car text-2xl" />
                    KARKABAR
                </div>
        
                {/*  Navigation  */}
                <div className="flex justify-center w-full">
                    <ul className="flex space-x-5 items-center">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Track Order</li>
                    </ul>
                </div>
        
                {/*  Account And ShoppingCart  */}
                <div className="flex w-full justify-end space-x-4 items-center">
                    <div className="flex">
                        <i className="far fa-heart text-xl" />
                    </div>
                    <div className="flex items-center">
                        <i className="far fa-user text-lg" />
                    </div>
                    <div className="flex items-center">
                        <i className="far fa-shopping-cart text-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header