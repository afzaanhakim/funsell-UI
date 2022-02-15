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
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 25%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 16px;
cursor: pointer;
text-decoration: underline;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
flex-direction: column;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
`;

const Input = styled.input`
  margin: 18px 0px;;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>{" "}
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot Password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
