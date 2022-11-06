import styled from "styled-components";
import { categories } from "../data/data";
import CategoriesItem from "./CategoriesItem";
const Container = styled.div`
  margin: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.length > 0 &&
        categories.map((item) => <CategoriesItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Categories;
