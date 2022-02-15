import Announcement from "./Announcement";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
margin:20px;
${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
padding: 10px;
margin-right:20px;
${mobile({ margin: "10px 0px" })}`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcement></Announcement>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              black
            </Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>red</Option>
            <Option>green</Option>
            <Option>yellow</Option>
            <Option>pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
            <Option>XXS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>{" "}
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};

export default ProductList;
