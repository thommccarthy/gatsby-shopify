import React from 'react';
import { LayoutWrapper } from './styles';
import { Header, Footer } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
