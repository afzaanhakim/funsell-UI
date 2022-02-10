import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories></Categories>
      <Products></Products>
    </div>
  );
};

export default Home;
