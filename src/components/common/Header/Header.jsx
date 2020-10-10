import * as React from 'react';
import * as Styled from './styled';

const Header = () => (
  <Styled.HeaderWrap>
    <Styled.ShoppingMallTitle>미미문방구</Styled.ShoppingMallTitle>
    <Styled.MenuWrap>
      <Styled.MenuList>
        <Styled.MenuLink>목록</Styled.MenuLink>
      </Styled.MenuList>
      <Styled.MenuList>
        <Styled.MenuLink>장바구니</Styled.MenuLink>
      </Styled.MenuList>
    </Styled.MenuWrap>
  </Styled.HeaderWrap>
);

export default Header;
