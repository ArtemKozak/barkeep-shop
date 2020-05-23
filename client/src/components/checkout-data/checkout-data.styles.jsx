import styled from "styled-components";

export const CheckoutDataContainer = styled.div`
  width: 100%;
  min-height: 55vh;
  display: flex;
  flex-direction: row;
`;

export const CheckoutData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ItemsBlock = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const CheckoutFormContainer = styled.form`
`;

export const ItemsGroup = styled.div`
  width: 100%;
  padding: 10px;
  max-height: 440px;
  overflow: scroll;
`;

export const UserDataBlock = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 22px;
  
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const CheckoutUserTitle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 22px;
  
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const CheckoutContactData = styled.div`
  margin: 0px 20px;
  font-size: 22px;
  padding: 20px 40px;
  
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;