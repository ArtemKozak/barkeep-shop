import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const FullScreenDropdownContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  z-index: 5;
`;

export const CloseAlertDropdownContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-color: black;
  z-index: 5;
`;

export const AlertDropdownContainer = styled.div`
  margin: auto;
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  z-index: 6;
  
  @media screen and (max-width: 800px) {
    border: 1px solid grey;
    background-color: #121212;
    width: 92vw;
    height: 70vh;
  }
`;

export const AlertButton = styled(CustomButton)`
  margin-top: auto;
  height: 60px;
`;

export const HeadMessageContainer = styled.span`
  text-align: center;
  margin: 40px 10px 10px 10px;
  font-size: 26px;
  
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const AlertMessageContainer = styled.span`
  text-align: center;
  margin: 20px 10px 40px 10px;
  font-size: 22px;
  color: rgb(100, 100, 100);
  
  @media screen and (max-width: 800px) {
    font-size: 20px;
    color: rgb(150, 150, 150);
  }
`;

export const CloseAlertTextContainer = styled.span`
  font-size: 14px;
  margin-left: auto;
`;

export const AlertItemsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
