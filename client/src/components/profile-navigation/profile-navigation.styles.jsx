import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 50px 50px 30px 50px;
  width: 320px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const NavigationProfileLink = styled(Link)`
  height: 45px;
  cursor: pointer;
  color: black;
  padding: 12px 0;
  text-decoration: none;
  display: block;
  
  &:hover {
    color: grey;
  }
`;

