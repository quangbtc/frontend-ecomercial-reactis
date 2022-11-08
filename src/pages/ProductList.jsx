import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Products from "../components/Products";
const Container = styled.div``;

const Title = styled.h2`
  margin-top: 90px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  font-weight: bolder;
`;
const FilterContainer = styled.div`
  margin: 20px 50px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: rgb(48, 226, 226, 0.3);
  font-size: 18px;
`;

const Option = styled.option``;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Left>
          <Label>Filter ProductList</Label>
          <SelectContainer>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>Yellow</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>White</Option>
              <Option>Pink</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>M</Option>
              <Option>SM</Option>
              <Option>L</Option>
              <Option>Xl</Option>
            </Select>
          </SelectContainer>
        </Left>
        <Right>
          <Label>Sort Product</Label>
          <Select>
            <Option disabled>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Right>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
