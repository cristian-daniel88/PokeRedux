import styled from "styled-components";
import { ContainerStyled } from "../../styles/utilities/Container";

export const NavbarStyled = styled.div`
padding: 10px;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
background-color:  #ffe28a;
width: 100%;
z-index: 999;
border-bottom: 1px solid #e5edef;
height: 75px;
`;


export const ContainerNavbar = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 100%;
  height: 100%;
 
`;


export const Logo = styled.img`
  max-width: 200px;
  min-width: 150px;
  cursor: pointer;
  height: auto;
  max-height: 100%;

  @media screen and (max-width: 500px) {
   margin-right: 50px;
   max-width: 110px;
  }


`;


export const Divider = styled.div`
display: inline-block;
border-left: 1px solid #dfdddd;
margin: 0 25px ;

height: 25px;

@media screen and (max-width: 500px) {
   margin: 0 15px;
  }


`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding-right: 20px;

  


`;
export const UserContainer = styled.div`
  position: relative;
`;

export const User = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;


export const LoginButton = styled.button`
cursor: pointer;
color: #ffffff;
border-radius: 8px;
padding: 10px 15px;
border: none;
margin: 0 5px;
font-size: 14px;
font-family: "Poppins-SemiBold",  Helvetica, Arial, sans-serif;
background-image: linear-gradient(130deg, #403106 0%,#2494ff 70%);


@media screen and (max-width: 500px) {
  font-size: 10px;
  margin: 0 5px;
  padding: 10px 5px;
  }
`;



