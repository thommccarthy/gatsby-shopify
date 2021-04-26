import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import Logo from '../../images/assets/plantylogo.svg';
import LogoPng from '../../images/plantymcplantpants.png';

export function Header() {
  return (
    <HeaderWrapper>
      <Logo
        style={{
          display: 'block',
          height: '9em',
          paddingBottom: '3em',
        }}
      />

      <Cart />
    </HeaderWrapper>
  );
}
