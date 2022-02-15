import React from "react";
import styled from "styled-components";

import { Search, ShoppingCartRounded } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(59, 35, 201, 1) 22%,
    rgba(62, 105, 168, 1) 42%,
    rgba(139, 75, 183, 1) 66%,
    rgba(44, 102, 77, 0.9332107843137255) 87%
  );
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  color: white;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;

  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> FUNSELL. </Logo>
        </Center>{" "}
        <Right>
          {" "}
          <MenuItem style={{ color: "white" }}>REGISTER</MenuItem>
          <MenuItem style={{ color: "white" }}>SIGN IN</MenuItem>
          <Badge badgeContent={4} style={{ color: "blue" }}>
            <ShoppingCartRounded />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
