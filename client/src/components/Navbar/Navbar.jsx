import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Badge } from '@mui/material'

//***************Styled Components******************
const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchArea = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px ;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    outline: none;
`
const Logo = styled.h1`
    margin: 0;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

//*********************************Styled components END****************************** */



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchArea>
                    <Input/>
                    <AiOutlineSearch style={{color: 'gray', fontSize: '16px'}} />
                </SearchArea>
            </Left>
            <Center>
                 <Logo>
                    shopR <AiOutlineShoppingCart/>
                 </Logo>
            </Center>
            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN-IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color="primary">
                        <AiOutlineShoppingCart color="action" style={{fontSize: "30px"}}/>
                    </Badge>
                </MenuItems>
            </Right>

       </Wrapper>
    </Container>
  )
}

export default Navbar