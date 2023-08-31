import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Anouncements";
import styled from "styled-components";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const loction = useLocation();
  const category = loction.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  console.log(filters);

  const [sort, setSort] = useState("newest");
  console.log(sort);

  const handleFilterChange = (e)=>{
    const value = e.target.value;

    setFilters({
        ...filters,
        [e.target.name]: value,
      })
  }


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products: </FilterText>
          <Select onChange={handleFilterChange} name="color">
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
            <Option>Green</Option>
          </Select>

          <Select onChange={handleFilterChange} name="size">
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>

        </Filter>
        <Filter>
          <FilterText> Sort products: </FilterText>  
          <Select onChange={e=> setSort(e.target.value)} >
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asen)</Option>
            <Option value={"desc"}>Price (desc)</Option>
            
          </Select>
        </Filter> 
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
