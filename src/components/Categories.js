import React from 'react';
import styled from "styled-components";

import { categories } from '../data';
import CategoryItem from "./CategoryItem";


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;

`

const Wrapper = styled.div``


const items = categories.map((item) => {
return (<CategoryItem item={item} key={item.id}></CategoryItem>)
})

const Categories = () => {
  return  <Container>{items}</Container>;
};

export default Categories;
