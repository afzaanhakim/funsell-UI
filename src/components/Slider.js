import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data.js";
import { mobile } from "../responsive.js";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: coral;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * - 100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Description = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Button = styled.div`
  padding: 10;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: solid 2px black;
  width: 20%;
  border-radius: 10px;
  text-align: center;
  font-weight: bolder;
  background: black;
  color: white;
  padding: 6px;
  box-shadow: 5px 10px #888888;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  return (
    <Container>
      {" "}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <ArrowBackIosRounded style={{ color: "white" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((slide) => (
          <Slide bg={slide.bg} key={slide.id}>
            <ImgContainer>
              {" "}
              <Image src={slide.img} />{" "}
            </ImgContainer>
            <InfoContainer>
              <Title>
                <h1>{slide.title}</h1>
              </Title>
              <Description>{slide.description}</Description>{" "}
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosRounded
          style={{ color: "white" }}
          onClick={ () =>  handleClick("left")}
        />
      </Arrow>
    </Container>
  );
};

export default Slider;
