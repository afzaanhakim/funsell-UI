import styled from "styled-components";



const Container = styled.div`
height: 30px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: bolder;
`

const Announcement = () => {
  return <Container><h2>Super Valentines Deal! 50% off on selected items**</h2></Container>;
};

export default Announcement;
