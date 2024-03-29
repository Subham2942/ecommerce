import React from 'react'

import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Anouncements";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/> 
        <Announcement/>
        <Wrapper>
          <Title>YOU BAG</Title>
          <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2) </TopText>
              <TopText>Your Wishlist (0) </TopText>
            </TopTexts>
            <TopButton type="filled" >CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" />
                  <Details>
                    <ProductName><b>Product:</b> RANDOM DISPLAY SHOES </ProductName>
                    <ProductId><b>ID:</b> 147852369 </ProductId>
                    <ProductColor color="pink"/>
                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AiOutlinePlus style={{cursor: 'pointer'}} />
                      <ProductAmount> 1 </ProductAmount>
                    <AiOutlineMinus style={{cursor: 'pointer'}} />
                  </ProductAmountContainer>
                  <ProductPrice>&#8377; 1199</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr/>

              <Product>
                <ProductDetail>
                  <Image src="https://m.media-amazon.com/images/I/7114uGhcy0L._AC_UL600_FMwebp_QL65_.jpg" />
                  <Details>
                    <ProductName><b>Product:</b> RANDOM ANIME T-SHIRT </ProductName>
                    <ProductId><b>ID:</b> 369852147 </ProductId>
                    <ProductColor color="gray"/>
                    <ProductSize><b>Size:</b> M </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AiOutlinePlus style={{cursor: 'pointer'}} />
                      <ProductAmount> 2 </ProductAmount>
                    <AiOutlineMinus style={{cursor: 'pointer'}} />
                  </ProductAmountContainer>
                  <ProductPrice>&#8377; 2399</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SUBTOTAL</SummaryItemText>
                <SummaryItemPrice>&#8377; 6997</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
                <SummaryItemPrice>&#8377; 150</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>DISCOUNT</SummaryItemText>
                <SummaryItemPrice>&#8377; 75</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem variant="total">
                <SummaryItemText >TOTAL</SummaryItemText>
                <SummaryItemPrice>&#8377; 7072</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart