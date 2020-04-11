import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  display: flex;
  font-size: 14px;
  position: relative;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HorizontalLine = styled.div`
  width: 1 px;
  border-left: 1px solid lightgrey;
`;

export const ProfileDataContainer = styled.div`
  width: 700px;
  
  &:first-child {width: 700 px;}
  
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;