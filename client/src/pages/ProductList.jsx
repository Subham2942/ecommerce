import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement/Anouncements'
import styled from 'styled-components'
import Products from '../components/Products/Products'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter> <FilterText> Filter Products</FilterText> </Filter>
          <Filter> Filter 2 </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList