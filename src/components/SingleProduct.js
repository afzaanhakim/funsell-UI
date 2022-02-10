import Announcement from "./Announcement";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const Left = styled.div``;

const Select = styled.select``;

const Option = styled.option``;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border:1px solid black;
display: flex;
align-items:center;
justify-content: center;
margin:5px;`;

const Button = styled.button`

margin-left:50px;;
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor:pointer;
font-weight: 500;

&:hover {
  background-color:green;
  color: white;

}`;

const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Right = styled.div``;

const Title = styled.h1`
  font-weight: 200;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterText = styled.div`
  display: flex;
`;

const FilterSizeOption = styled.option``;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
margin-left:10px;
font-weight:700;`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar></Navbar> <Announcement></Announcement>{" "}
      <Wrapper>
        <ImgContainer>
          <Image src="https://pngimg.com/uploads/jacket/jacket_PNG8049.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jacket</Title>{" "}
          <Description>
            Blue Jacket sheer cotton only one dsfjoisjdflkc shdfkjfhkgjds zddfh
            sdhkdfhkjshf SDdshgf sajklasadahjkd dsfhkfhj dvjkf
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>

              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="green" />
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>

              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove></Remove>
              <Amount>1</Amount>
              <Add></Add>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};

export default SingleProduct;
