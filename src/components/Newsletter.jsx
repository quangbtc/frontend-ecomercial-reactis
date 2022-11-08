import { PlayArrow } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px;
  padding: 50px 100px;
  background-color: rgb(0, 128, 128, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.div`
  margin: 20px 0px;
  font-size: 18px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 500px;
  background-color: white;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
`;
const Input = styled.input`
  flex: 1;
  margin: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
`;
const Button = styled.button`
  height: inherit;
  width: 80px;
  background-color: rgb(0, 128, 128, 0.8);
  border: none;
  transition: all 0.5s ease;
  opacity: 0.9;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products </Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <PlayArrow />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
