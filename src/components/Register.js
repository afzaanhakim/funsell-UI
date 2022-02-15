import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-fashion-wallpaper-hd-download.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom:10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap:wrap;
  flex:1;
  min-width: 40%;
  margin:20px 10px 0 0;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;

`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
border-radius: 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>{" "}
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By Creating this account I AGREE TO THE TERMS AND CONDITIONS
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
