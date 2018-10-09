import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

import styled from "styled-components"

const TitleLink = styled(Link)`
    background-image: none;
    font-size: 55px;
    color: black;
    margin-right: 10px;
    min-height: 60px;
`;

const MenuLink = styled(Link)`
  margin-right: 5px;
  color: black;
  margin-top: 5px;
`

const StyledNav = styled.nav`
  display: flex ;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
`

const StyledH1 = styled.h6`
  margin-top:5px;
`

const MenuLinks = styled.div`
`

const Navbar = (props) => (
  <StyledNav>
    <div>
      <StyledH1>
        <TitleLink to="/" style={{ textDecoration: 'none !important'}}>
          {props.title}
        </TitleLink>
      </StyledH1>
    </div>
    <MenuLinks>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/products">Products</MenuLink>
    </MenuLinks>
  </StyledNav>
)

export default Navbar
