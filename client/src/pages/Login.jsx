import React from 'react'

import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                url("https://plus.unsplash.com/premium_photo-1668485968681-fa4a97d09331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80") center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-size: cover ; */
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255,255,255,0.70);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN-IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>DO NOT REMEBER YOUR PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login