import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { currency } = useContext(ShopContext);
  console.log(item);

  const { _id, image, name, price } = item;
  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer ">
      <div className="overflow-hidden">
        <img
          className="overflow-hidden hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <div className="border p-3">
        <p className="text-sm mb-1">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
