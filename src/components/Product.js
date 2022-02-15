import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0
background-color: rgba(0,0,0,0.2);
z-index:3
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
opacity: 1
  }
`;

const Image = styled.img`
  height: 80%;
`;


const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  background-color: green;
  color: black;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5 ease;


  &:hover {
    background-color: yellow;
    transform: scale(1.1)
  }
  
`;

const Circle = styled.div`
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
