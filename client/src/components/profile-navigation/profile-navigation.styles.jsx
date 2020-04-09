import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 30px 50px 30px 50px;
  width: 320px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const NavigationProfileLink = styled(Link)`
  height: 45px;
  width: 100%;
`;

