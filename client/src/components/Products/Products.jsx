import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios"
import { popularProducts } from '../../assets/data';
import Product from './Product';

// Styled Components
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){

      }
    };

    getProducts();

  }, [category]);

  useEffect(()=>{
    category && setFilteredProducts(
      products.filter( (item) => 
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, category, filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev) =>
        prev?.sort((a,b) => a.createdAt - b.createdAt)
      )
      console.log(filteredProducts);
    }else if(sort === "asc"){
      setFilteredProducts((prev) =>
        prev?.sort((a,b) => a.price - b.price)
      )
      console.log(filteredProducts);
    }else{
      setFilteredProducts((prev) =>
        prev?.sort((a,b) => b.price - a.price)
      )
      console.log(filteredProducts);
    }

  }, [sort])
  return (
    <Container>
      {category  ? filteredProducts?.map((product) => (
          <Product item={product} key={product.id} />
      )) : products?.slice(0,8).map((product) => (
        <Product item={product} key={product.id} />
        ))}
    </Container>
  );
};

export default Products;
