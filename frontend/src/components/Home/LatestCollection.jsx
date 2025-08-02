import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Heading from "../ReUseable/Heading";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <section className="my-10">
      <div className="text-center text-2xl mb-10">
        <Heading
          text1={"LATEST"}
          text2={"COLLECTION"}
          text3={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
          }
        ></Heading>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 items-stretch">
        {latestProducts.map((item, index) => (
          <ProductItem key={index} item={item}></ProductItem>
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
