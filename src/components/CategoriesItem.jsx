import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
  border-radius: 3px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  background-color: rgb(0, 128, 128, 0.4);
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  :hover {
    background-color: rgb(0, 128, 128, 0.8);
    color: white;
  }
`;
const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
