import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-size: cover ; */
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background: rgba(255,255,255,0.8);
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
    color: white;
    background-color: teal;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`

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