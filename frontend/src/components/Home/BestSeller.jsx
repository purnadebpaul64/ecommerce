import React, { useContext, useEffect, useState } from "react";
import Heading from "../ReUseable/Heading";
import { ShopContext } from "../../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const filterProducts = products.filter((items) => items.bestseller);
    setBestSellers(filterProducts.slice(0, 5));
  }, []);
  //   console.log(bestSellers);

  return (
    <section className="my-10">
      <div className="text-center text-2xl mb-10">
        <Heading
          text1={"BEST"}
          text2={"SELLERS"}
          text3={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
          }
        ></Heading>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 items-stretch">
        {bestSellers.map((item, index) => (
          <ProductItem key={index} item={item}></ProductItem>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
