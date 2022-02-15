import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {mobile} from "../responsive"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const TopTexts = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;

const ProductDetail = styled.div`
  flex: 2;
`;

const ProductImage = styled.img`
  width: 200px;
`;

const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TopButton = styled.button`
  font-weight: 200;
  padding: 10px;
  text-align: center;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "transparent")};
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h2``;

const ProductId = styled.h2``;

const ProductDesc = styled.span``;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
  ${mobile({ marginBottom: "20px" })}
`;
const BottomButton = styled.button``;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="filled">Continue Shopping </TopButton>
          <TopTexts>Shopping Bag</TopTexts>
          <TopTexts>Your Wishlist</TopTexts>
          <TopButton type="filled">Checkout now </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ProductImage src="https://www.camouflage.ca/images/products/large/UF5415.jpg" />
                <Details>
                  <ProductName>Product: SWEATER</ProductName>
                  <ProductId></ProductId>
                  <ProductColor color="brown"></ProductColor>
                  <ProductSize>SIZE: Medium</ProductSize>
                  <ProductDesc></ProductDesc>
                </Details>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                      <ProductPrice> $29.99 </ProductPrice>
                    </ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                </PriceDetail>
              </ProductDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <ProductImage src="https://www.myfantasticbags.com/assets/images/341Yellow-3.jpg" />
                <Details>
                  <ProductName>Product: GREEN BAG</ProductName>
                  <ProductId></ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>xs</ProductSize>
                  <ProductDesc></ProductDesc>
                </Details>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                      <ProductPrice> $50 </ProductPrice>
                    </ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                </PriceDetail>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText></SummaryItemText>
              <SummaryItemPrice></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80.00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Cart;
