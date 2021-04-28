import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import Logo from '../../images/assets/plantylogo.svg';
import LogoPng from '../../images/plantymcplantpants.png';
import { Search } from '../Search';
import { Link } from 'gatsby';

export function Header() {
  return (
    <div>
      <Link to={'/'} style={{}}>
        <Logo
          style={{
            display: 'block',
            height: '8em',
            paddingBottom: '2em',
            paddingTop: '2em',
          }}
        />
      </Link>
      <HeaderWrapper>
        <Search />
        <Cart />
      </HeaderWrapper>
    </div>
  );
}
