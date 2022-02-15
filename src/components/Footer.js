import { blue, pink } from "@material-ui/core/colors";
import { Facebook, Instagram, MailOutlineOutlined, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  ${mobile({ alignItems: "center" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
 
`;

const Description = styled.p`
margin:20px 0px;`;

const SocialContainer = styled.div`
display: flex;
`;
const Title = styled.h3`
margin-bottom: 30px;`


const List = styled.ul`
margin: 0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;
`


const ListItem = styled.li`
width: 50%;
margin-bottom: 12px;
`;


const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items:center;

`;

const Payment = styled.img``



const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${props=> props.color};
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
color: white;`;

const Logo = styled.h1``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FUNSELL.</Logo>
        <Description>
          jkdhskufdhakjdfhs
        </Description>
        <SocialContainer>
          <SocialIcon color="blue"><Facebook></Facebook></SocialIcon>
          <SocialIcon color="pink"><Instagram></Instagram></SocialIcon>
          <SocialIcon color="blue"><Twitter></Twitter></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
         Useful  Links
        </Title>
        <List><ListItem>Home</ListItem>
       <ListItem>Cart</ListItem>
       <ListItem>Men's</ListItem>
        <ListItem>Women's</ListItem>
        <ListItem>Accessories</ListItem>
       <ListItem>My Account</ListItem>
       <ListItem>Track Your Order</ListItem>
       <ListItem>Wishlist</ListItem>
      <ListItem>Terms</ListItem>
      </List>
      </Center>
      <Right><Title>Contact</Title> <ContactItem><Room style={{marginRight:"10px"}}></Room>123 Front Street, Toronto, ON, M5T2Y7</ContactItem>
      <ContactItem><Phone style={{marginRight:"10px"}}/>+999888777</ContactItem>
      <ContactItem><MailOutlineOutlined  style={{marginRight:"10px"}}></MailOutlineOutlined>CONTACT@FUNSELL.INFO</ContactItem>
      <Payment/></Right>
    </Container>
  );
};

export default Footer;
