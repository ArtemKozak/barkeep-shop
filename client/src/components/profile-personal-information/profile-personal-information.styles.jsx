import styled from 'styled-components';

export const PersonalInformationContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 700px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin: 0;
  margin-bottom: 20px;
`;

export const LabelContainer = styled.label`
  padding: 20px;
  color: #505050;
  display: flex;
  width: 35%;
`;

export const FlexTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const TextContainer = styled.p`
  margin: 0;
  padding: 10px;
  display: flex;
  width: 100%;
  
  &:first-child {
    padding-top: 20px;
  }
  
  &:last-child {
    padding-bottom: 20px;
  }
`;

export const UserDataContainer = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
`;