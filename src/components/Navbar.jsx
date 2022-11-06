import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 20;
`;
const Wrapper = styled.div`
  flex: 1;
  margin: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`;
//CONTENT LEFT
const Language = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 1px solid;
  padding: 2px;
  padding-left: 10px;
  border-radius: 10px;
`;
const Input = styled.input`
  min-height: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  caret-color: red;
`;
const ButtonIcon = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: teal;
  }
`;
//END CONTENT LEFT

const Center = styled.div`
  flex: 1;
`;
//CONENT CENTER
const TextCenter = styled.h2`
  text-align: center;
  color: teal;
`;
//END CONENT CENTER
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;
//LEFT CONTENT
const MenuItem = styled.div`
  cursor: pointer;
  :hover {
    color: teal;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VI</Language>
          <SearchContainer>
            <Input />
            <ButtonIcon>
              <SearchOutlined />
            </ButtonIcon>
          </SearchContainer>
        </Left>
        <Center>
          <TextCenter>SHOPEE ECOMERCIAL</TextCenter>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
