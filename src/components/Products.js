import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data.js";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

const productItems = popularProducts.map((p) => {
  return <Product key={p.id} item={p}></Product>;
});

const Products = () => {
  return <Container>{productItems}</Container>;
};

export default Products;
