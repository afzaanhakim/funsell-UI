import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
height: 30px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: bolder;

${mobile({ fontSize: "8px" })}
`

const Announcement = () => {
  return <Container><h2>Super Valentines Deal! 50% off on selected items**</h2></Container>;
};

export default Announcement;
