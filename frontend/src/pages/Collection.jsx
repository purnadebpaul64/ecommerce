import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/ReUseable/Title";
import ProductItem from "../components/Home/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Fileter Options */}
      <div className="min-w-60">
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          <p>FILTERS</p>
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${
              showFilter ? "rotate-90" : ""
            } transition-all`}
          />
        </div>
        {/* category filter */}
        <div
          className={`border border-gray-400 p-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Men"}
                className="w-3"
                onChange={toggleCategory}
              />{" "}
              Men
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                className="w-3"
                onChange={toggleCategory}
              />{" "}
              Women
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Kids"}
                className="w-3"
                onChange={toggleCategory}
              />{" "}
              Kids
            </div>
          </div>
        </div>
        {/* sub-category filter */}
        <div
          className={`border border-gray-400 p-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                className="w-3"
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                className="w-3"
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                className="w-3"
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </div>
          </div>
        </div>
      </div>
      {/* Right Side Top Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Product section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} item={item}></ProductItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
