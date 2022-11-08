import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 50px;
  background-color: rgb(0, 0, 0, 0.4);
  gap: 20px;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-size: 40px;
  color: white;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;

  gap: 20px;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
//================
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3``;
const List = styled.ul`
  list-style: none;
  margin: 20px 0px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin: 0;
  padding: 0;
  width: 50%;
  cursor: pointer;
  &:hover {
    color: #2828f5;
  }
`;
//===============
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  margin: 20px 0px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const Payment = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
const PaymentIcon = styled.div`
  width: 100px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const PaymentImg = styled.img`
  width: 100%;
  height: 40px;
  object-fit: cover;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPEE</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus a
          modi voluptatem ducimus corrupti rem ab consectetur, saepe facilis quo
          eligendi magni aliquid omnis voluptatum alias dolorem earum soluta
          aperiam?
        </Desc>
        <SocialContainer>
          <SocialIcon color="2a8df2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="f2482a">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="a0bd69">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3e2af2">
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Menu</ListItem>
          <ListItem>Man clothes</ListItem>
          <ListItem>Women clothes</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          804/14 Tam hoa, Bien Hoa, Dong Nai Pr.
        </ContactItem>
        <ContactItem>
          <Phone />
          (+84) 988888889
        </ContactItem>
        <ContactItem>
          <Mail />
          shopee@gmail.com
        </ContactItem>
        <Payment>
          <PaymentIcon>
            <PaymentImg
              src="https://inkythuatso.com/uploads/images/2021/09/logo-vietcombank-inkythuatso-10-10-41-18.jpg"
              alt="vietcombank"
            />
          </PaymentIcon>
          <PaymentIcon>
            <PaymentImg
              src="https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png"
              alt="visa"
            />
          </PaymentIcon>
          <PaymentIcon>
            <PaymentImg
              src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
              alt="mastercard"
            />
          </PaymentIcon>
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
