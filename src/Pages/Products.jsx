import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Items from "../components/Items";
import Categories from "../components/Categories";
import Filter from "../components/Filter";

const Products = () => {
  const { loading } = useSelector((state) => state.products);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  return (
    <>
      <Categories />
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 w-[300px]">
          <Filter />
        </div>
        <Items />
      </div>
    </>
  );
};

export default Products;
