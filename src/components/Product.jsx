import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  cursor: pointer;
  gap: 20px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  padding: 10px;
  min-width: 300px;
  height: 400px;
  background-color: rgb(205, 228, 231, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255, 0.3);
  z-index: 10;
`;
const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  z-index: 11;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt={item.title} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
