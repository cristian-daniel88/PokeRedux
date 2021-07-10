import styled, { css } from "styled-components";
import { ContainerStyled } from "../styles/utilities/Container";

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
 
`;

export const GoogleIcon = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const Alink = styled.a`
  color: blue;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LayoutPage = styled.div`
  display: flex;
  height: 80vh;
  background-color: lightblue;
  flex-direction: column;
  align-items: center;
  

  @media screen and (max-width: 500px) {
      height: auto;
      

  }
  
  
`;

export const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  
  
  
  margin-top: 70px;
  margin-bottom: 50px;
  z-index: 6;
  
`;

export const FormContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px;
  background-color: beige;

`;

export const FormStyled = styled.div`
  
  background-color: beige;
  border-radius: 15px;
  width: 400px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  @media screen and (max-width: 500px) {
    width: 250px;

  }
`;

export const Botoncito = styled.button`
  font-family: "Montserrat", cursive;
  font-weight: 600;
  z-index: 3;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : "10px")};
  width: ${({ w }) => (w ? w : "200px")};
  color: white;
  height: 60px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  background-image: linear-gradient(130deg,#403106 0%,#2494ff 70%);
  ${({ disabled }) =>
    disabled &&
    css`
      background: #ccc !important;
     
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}

    
    @media screen and (max-width: 500px) {
    height: 60px;
    padding: 5px;

  }
`;

export const Botoncito2 = styled.button`
  font-family: "Montserrat", cursive;
  font-weight: 600;
  z-index: 3;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : "10px")};
  width: ${({ w }) => (w ? w : "200px")};
  color: #928080e3;
  height: 60px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  /* background-image: linear-gradient(130deg,#403106 0%,#2494ff 70%); */
   `

export const GoogleButton = styled(Botoncito2)`
    display: flex;
    justify-content: space-between;
  /* background-image: linear-gradient(130deg,#403106 0%,#2494ff 70%); */
  /* background-image: url('/img/googleSignIn.png'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  
  @media screen and (max-width: 500px) {
    
    /* background-image: none; */
    

  }

  
`;
