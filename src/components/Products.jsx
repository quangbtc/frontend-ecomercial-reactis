import styled from "styled-components";

import { popularProducts } from "../data/data";
import Product from "../components/Product";
const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.length > 0 &&
        popularProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
