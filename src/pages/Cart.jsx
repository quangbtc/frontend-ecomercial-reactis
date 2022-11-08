import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  margin: 100px 50px 20px 50px;
`;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
`;
const TopButton = styled.button`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  opacity: ${(props) => props.type === "filled" && "0.5"};
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;
const TopText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Text = styled.p`
  text-decoration: underline;
  font-size: 16px;
`;
const InfoContainer = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const ProductContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const Products = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Img = styled.img`
  width: 200px;
  object-fit: cover;
`;
const ProductDetail = styled.div`
  flex: 2;
`;
const InfoProduct = styled.div`
  padding: 10px 0px;
  display: flex;
  gap: 20px;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AmountIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgb(0, 128, 128, 0.5);
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
const Amount = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 0 20px;
`;
const Price = styled.div`
  margin-top: 10px;
  font-size: 35px;
  font-weight: 400;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
//=======
const SummaryContainer = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
`;
const SummaryTitle = styled.h4`
  font-size: 24px;
  padding: 10px 0px;
`;
const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.div`
  font-size: 20px;
`;
const SummaryItemPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 5px 10px;
  background-color: teal;
  border-radius: 10px;
  opacity: 0.8;
  font-size: 24px;
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAGS</Title>
        <Top>
          <TopButton type="filled">CONTINUE</TopButton>
          <TopText>
            <Text>Shopping bag(2)</Text>
            <Text>Your wishlist(0)</Text>
          </TopText>
          <TopButton>CHECKOUT</TopButton>
        </Top>
        <InfoContainer>
          <ProductContainer>
            <Products>
              <Img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
              <ProductDetail>
                <InfoProduct>
                  <b>Product:</b>JESS THUNDER SHOES
                </InfoProduct>
                <InfoProduct>
                  <b>ID:</b> 939490958398
                </InfoProduct>
                <InfoProduct>
                  <b>Size:</b> M
                </InfoProduct>
                <InfoProduct>
                  <b>Color:</b>
                  <ProductColor color="blue" />
                </InfoProduct>
              </ProductDetail>
              <PriceContainer>
                <AmountContainer>
                  <AmountIcon>
                    <Remove />
                  </AmountIcon>
                  <Amount>2</Amount>
                  <AmountIcon>
                    <Add />
                  </AmountIcon>
                </AmountContainer>
                <Price>$80</Price>
              </PriceContainer>
            </Products>
            <Hr />
            <Products>
              <Img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
              <ProductDetail>
                <InfoProduct>
                  <b>Product:</b>JESS THUNDER SHOES
                </InfoProduct>
                <InfoProduct>
                  <b>ID:</b> 939490958398
                </InfoProduct>
                <InfoProduct>
                  <b>Size:</b> M
                </InfoProduct>
                <InfoProduct>
                  <b>Color:</b>
                  <ProductColor color="blue" />
                </InfoProduct>
              </ProductDetail>
              <PriceContainer>
                <AmountContainer>
                  <AmountIcon>
                    <Remove />
                  </AmountIcon>
                  <Amount>2</Amount>
                  <AmountIcon>
                    <Add />
                  </AmountIcon>
                </AmountContainer>
                <Price>$80</Price>
              </PriceContainer>
            </Products>
          </ProductContainer>

          <SummaryContainer>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </SummaryContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
