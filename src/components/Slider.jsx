import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems } from "../data/data";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 90px;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 0.8;
  }
  z-index: 10;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  border: none;
  background-color: #27f5b7;
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlideClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlideClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.length > 0 &&
          sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Img src={item.img} alt={item.title} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlideClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
