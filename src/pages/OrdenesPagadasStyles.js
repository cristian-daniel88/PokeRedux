import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`

  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 1px;
  

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    background-position-x: -330px;
    margin-bottom: 5px;
 

 
  }

  @media (orientation: landscape) {
    align-items: flex-start;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 109%;
    top: 37px;
    left: 0;
    background: yellow; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f83600,
      yellow
    ); 
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f83600,
      yellow
    ); 
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    mix-blend-mode: color;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 109%;
    top: 37px;
    left: 0;
    background: #000000bd;
  }
`;
