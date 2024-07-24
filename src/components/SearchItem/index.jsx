import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../api/Data";
import Product from "../Product";

const SearchItem = ({cart , setCart}) => {
  const { term } = useParams();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((product) => {
        return product.title
          .toLocaleLowerCase()
          .includes(term.toLocaleLowerCase());
      });
      setFilteredData(data);
    };

    filteredData();
  }, [term]);

  return (
    <>
      {filteredData.length > 0 ? (
        <Product items={filteredData} cart={cart} setCart={setCart}  />
      ) : (
        <h2 style={{ textAlign: "center", color: "red", marginTop: "50px" }}>
          No data found - (Search with Title of Product)
        </h2>
      )}
    </>
  );
};

export default SearchItem;
