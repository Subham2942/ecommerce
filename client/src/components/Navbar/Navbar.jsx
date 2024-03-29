import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Badge } from '@mui/material'
import { mobile } from '../../responsive'

//***************Styled Components******************

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchArea = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


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
                    shopR 
                    <AiOutlineShoppingCart/>
                 </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN-IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <AiOutlineShoppingCart color="action" style={{fontSize: "30px"}}/>
                    </Badge>
                </MenuItem>
            </Right>

       </Wrapper>
    </Container>
  )
}

export default Navbar