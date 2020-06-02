import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
  height: 150px;
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  display: none;
  
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const FooterCard = styled.div`
  height: 100%;
  width: 1200px;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: gray;
`;

export const FooterHead = styled.div`
  height: 100%;
  width: 20%;
  margin: 0;
  padding: 20px;
`;

export const LogoFooter = styled.div`
  height: 100%;
  width: 100%;
  margin: 20px;
  padding: 20px;
`;

export const FooterBody = styled.div`
  height: 100%;
  width: 80%;
  margin: 0;
  padding: 20px;
`;