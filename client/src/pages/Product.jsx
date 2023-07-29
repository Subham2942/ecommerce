import React from 'react'

import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Anouncements";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Container = styled.div``;

const Wrapper = styled.div``

const ImageContainer = styled.div``

const Image = styled.img``

const InfoContainer = styled.div``

const Title = styled.h1``

const Desc = styled.p``

const Price = styled.span``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum a tenetur nemo possimus adipisci. Aperiam magni tempora 
                    eos magnam veritatis voluptates deleniti molestiae similique 
                    doloremque, numquam exercitationem placeat eius fugit.
                </Desc>
                <Price> &#8377; 1299 </Price>
            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product