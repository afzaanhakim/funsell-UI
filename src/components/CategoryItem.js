import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
position: absolute;
width: 100%;
height:100%;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: rgba(255, 205, 0, 0.20);
`;

const Title = styled.h1`
color: blue;
margin-bottom: 20px;
`;

const Button = styled.div`
  padding: 10px;;
  border-radius:5px;
  background-color: rgba(255, 205, 0);
  cursor: pointer;
  font-weight: 600;

`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />{" "}
      <Info>
        <Title>
          {item.title}
        </Title>{" "}
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
