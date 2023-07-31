import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

// Styled Components
const Container = styled.div`
  margin: 5px;
  flex: 1;
  min-width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgb(227, 223, 223);
  position: absolute;
  z-index: 2;
`;

const Image = styled.img`
  height: 75%;
  z-index: 3;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.334);
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.5s ease;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="products" />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
