import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <SEO description="Planty McPlantpants Cart" title="Cart" />
      <CartContents />
    </Layout>
  );
};

export default CartPage;
