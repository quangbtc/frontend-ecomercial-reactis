import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
`;
const Text = styled.p`
  height: inherit;
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const Announcement = () => {
  return (
    <Container>
      <Text>Sell off Now ! Please hurry up to catch . </Text>
    </Container>
  );
};

export default Announcement;
