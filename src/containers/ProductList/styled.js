import styled from 'styled-components';
import ColorPalette from 'src/styles/colors';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const ProductListWrap = styled.ul`
  width: 100%;
`;

export const CardBox = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  background: ${ColorPalette.WHITE};
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
`;

export const InformationWrapper = styled.div`
  position: absolute;
  left: 130px;
  top: 10px;
  text-align: left;
`;

export const ProductInformation = styled.p`
  margin-bottom: 5px;
`;

export const AddButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 2px 7px;
`;
