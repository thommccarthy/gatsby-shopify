import React from 'react';
import { FooterWrapper } from './styles';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export function Footer() {
  return (
    <FooterWrapper>
      <h5>©2021 Planty McPlantpants</h5>
      <h2>
        <FaInstagram />
        <FaFacebook />
      </h2>
      <h5>
        website by{' '}
        <a href="https://github.com/thommccarthy/" target="_blank">
          Thom McCarthy
        </a>
      </h5>
    </FooterWrapper>
  );
}
