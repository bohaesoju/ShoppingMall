import styled from 'styled-components';
import ColorPalette from 'src/styles/colors';

export const HeaderWrap = styled.header`
  height: 50px;
  line-height: 50px;
  position: fixed;
  padding-left: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  background: #fff;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const ShoppingMallTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const MenuWrap = styled.ul`
  position: absolute;
  right: 10px;
`;

export const MenuList = styled.ul`
  display: inline-block;
  margin-left: 5px;
`;

export const MenuLink = styled.a`
  color: ${ColorPalette.GRAY_333};
`;
