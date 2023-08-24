const ProductCard = () => {
    return (
      <div className="small-container flex flex-col w-1/6 shadow-lg">
        {/*  Image  */}
          <div className="flex w-full">
              <img src="https://red-parts.html.themeforest.scompiler.ru/themes/blue-ltr/images/products/product-1-245x245.jpg"/>
          </div>
        {/*  SKU  */}
            <span className="text-xs text-gray-400">SKU: 473-75662-R</span>
        {/*  Product Title  */}
          <span>Brandix Spark Plug Kit ASR-400</span>
        {/*  Price and Add To Cart  */}
          <div className="flex justify-between items-center pt-10">
              <span className="text-lg font-semibold">$ 50.0</span>
              <i className="far fa-shopping-cart"/>
          </div>
      </div>
    )
}

export default ProductCard