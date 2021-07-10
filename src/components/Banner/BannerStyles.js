import styled from "styled-components";
import { ContainerStyled } from "../../styles/utilities/Container";

export const Support = styled.div`
  width: 100%;
  height: 60px;
`;
export const BannerStyled = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: center;
  background-color: ${(props) =>
    props.background ? props.background : "none"};
  width: 100%;
  height: auto;
  margin-top: -5px;

  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

export const ContainerBanner = styled(ContainerStyled)`
  display: flex;
  height: auto;
  flex-direction: column;
`;

export const BoxFatherBanner = styled.div`
  width: 100%;

  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const BoxChildBanner = styled.div`
  width: 49.9%;
  height: auto;
  min-width: 230px;

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const PedimonText = styled.div`
  background-image: url("img/pedimon-text.png");

  height: 27%;
  background-size: contain;
  background-repeat: no-repeat;
  filter: contrast(100%);

  @media screen and (max-width: 500px) {
    height: 20%;
  }
`;

export const P = styled.p`
  text-align: center;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "")};
  color: ${(props) => (props.color ? props.color : "black")};
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  font-size: ${(props) =>
    props.size ? props.size : "clamp(1rem, 1.5vw, 2rem)"};
  user-select: none;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const PAnimated = styled.p`
  
  width: 100%;
  margin: 0 auto;
  margin-top: ${(props)=> props.marginTop ? props.marginTop : '20px'};
  margin-bottom: ${(props)=> props.marginBotton ? props.marginBotton : ''};
 
  font-size: ${(props) =>
    props.size ? props.size : "clamp(1rem, 1.5vw, 2rem)"};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
/* 
  animation: typewriter 4s steps(36) 1s 1 normal both,
    blinkTextCursor 500ms steps(36) infinite normal; */
  
  animation: ${(props)=> props.animation ? `typewriter 4s steps(36) ${props.animation} 1 normal both,
    blinkTextCursor 500ms steps(36) infinite normal` : ''} ;

  

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 15em;
    }
  }

  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 48%;
  height: auto;

  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
  margin-left: 58px;
`;
export const Button = styled.button`
  cursor: pointer;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-family: "Poppins-SemiBold", Helvetica, Arial, sans-serif;
  background-image: linear-gradient(130deg, #615148 0%, #242066 70%);
`;

//

export const BoxChildPikachu = styled.div`
  width: 40%;
  height: 200px;
  min-width: 230px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const PedimonPikachu = styled.div`
  background-image: url("img/pikachu-hero.png");
  height: 200px;

  background-size: contain;
  background-repeat: no-repeat;
  filter: contrast(100%);
  margin-left: 40px;
`;

// banner 2

export const TituloBanner = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 35px;
`;

export const H3 = styled.h3`
  color: #ffe28a;
  font-size: clamp(1rem, 2vw, 2rem);
`;

export const Container3 = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Caja = styled.div`
  width: 330px;
  height: auto;
  min-width: 250px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  height: auto;
  width: 20%;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
