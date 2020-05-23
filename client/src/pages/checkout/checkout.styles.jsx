import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
    
  @media screen and (max-width: 800px) {
    width: 100%;
    }
  }
  
  @media screen and (max-width: 800px) {
    padding: 15px;
    color: white;
  }
`;

export const CheckoutBlock = styled.div`
  width: 100%;
  min-height: 90vh;
`;

export const CheckoutData = styled.div`
  width: 100%;
  min-height: 55vh;
  display: flex;
  flex-direction: row;
`;

export const ItemsBlock = styled.div`
  width: 35%;
  background-color: green;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const UserDataBlock = styled.div`
  width: 65%;
  background-color: grey;
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
