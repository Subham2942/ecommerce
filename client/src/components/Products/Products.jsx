import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../assets/data';
import Product from './Product';

// Styled Components
const Container = styled.div`
  padding: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem 1rem;
`;

const ProductDiv = styled.div`
  /* If there are any specific styles for the product wrapper, add them here. */
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <ProductDiv key={product.id}>
          <Product item={product} />
        </ProductDiv>
      ))}
    </Container>
  );
};

export default Products;
