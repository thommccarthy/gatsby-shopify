import React from 'react';
import { Layout, Filters } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);

  console.log(products);

  return (
    <Layout>
      <h3>{products.length} products</h3>
      <Content>
        <Filters />
        <div>Products</div>
      </Content>
    </Layout>
  );
}
