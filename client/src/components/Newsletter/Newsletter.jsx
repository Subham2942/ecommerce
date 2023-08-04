import { MdSend } from "react-icons/md"

import styled from "styled-components";
import {mobile} from "../../responsive"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

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