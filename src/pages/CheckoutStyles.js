import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`
 
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: calc(100vh - 75px);

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-position-y: 70px;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
  /* top: 75px; */

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(248, 54, 0);
    background: linear-gradient(
      27deg,
      rgba(248, 54, 0, 1) 0%,
      rgba(254, 140, 0, 1) 100%
    );
    mix-blend-mode: color;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000bd;
  }

  @media screen and (max-width: 500px) {
    background-position-y: -55px;
  }
`;

export const CheckoutGridContainer = styled.div`
  max-width: 1440px;
  width: 900px;
  min-height: 600px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  /* background-color: beige; */
  z-index: 50;
`;