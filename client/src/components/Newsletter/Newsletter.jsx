import { MdSend } from "react-icons/md"

import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;   
`
const Desc = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`

const InputContainer = styled.form`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 20px;
  flex: 7;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const formSubmitHandler = (e)=>{
  e.preventDefault();
}

const Newsletter = () => {
  return (
    <Container>
      <Title >Newsletter</Title>

      <Desc > Get updates for your favorite products and upcoming sales... </Desc>

      <InputContainer onSubmit={formSubmitHandler}>
        <Input type="text" placeholder="Enter Your Email"/>
        <Button type='submit' >
          <MdSend/>
        </Button>
      </InputContainer>

    </Container>
  )
}

export default Newsletter