import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  margin: 100px 50px 20px 50px;
  display: flex;

  gap: 20px;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Img = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  padding: 5px 0px;
`;
const Desc = styled.p`
  padding: 5px 0px;
`;
const Price = styled.p`
  font-weight: 500;
  font-size: 40px;
  padding: 5px 0px;
`;
const FilterContainer = styled.div`
  margin: 10px 0px;
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FilterTitle = styled.h4`
  height: 100%;
  display: flex;
  font-size: 18px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
`;
const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const FilterSize = styled.select`
  height: inherit;
  padding: 10px;
  background-color: rgb(0, 100, 128, 0.2);
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
`;
const SizeOption = styled.option``;
const AddContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
const AmountContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0px 5px;
  background-color: rgb(0, 0, 255, 0.2);
  opacity: 0.5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
const Amount = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Button = styled.button`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: rgb(0, 128, 0, 0.5);
  font-size: 16px;
  font-weight: 600;
  opacity: 0.5;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: white;
  }
`;
const ProductDetail = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img
            src="https://i.pinimg.com/originals/72/2f/9b/722f9b8ec1cb22cc29dc7b93ec8a9639.png"
            alt="clothes"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem iusto rem assumenda sint, provident laboriosam ad
            doloribus vitae. Excepturi maxime voluptas doloribus illum, labore
            distinctio. Omnis deleniti asperiores facere quas?
          </Desc>
          <Price>$ 50</Price>
          <FilterContainer>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="red" />
            <FilterColor color="blue" />
            <FilterColor color="pink" />
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <SizeOption disabled selected>
                Size
              </SizeOption>
              <SizeOption>XS</SizeOption>
              <SizeOption>S</SizeOption>
              <SizeOption>M</SizeOption>
              <SizeOption>SM</SizeOption>
              <SizeOption>L</SizeOption>
              <SizeOption>XL</SizeOption>
            </FilterSize>
          </FilterContainer>
          <AddContainer>
            <FilterTitle>Amount</FilterTitle>
            <AmountContainer>
              <IconContainer>
                <Remove />
              </IconContainer>

              <Amount>1</Amount>
              <IconContainer>
                <Add />
              </IconContainer>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
