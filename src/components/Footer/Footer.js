import React from "react";
import { BannerStyled, Img, Caja, P, Container3 } from "../Banner/BannerStyles";
import {
  CallComponentIcon,
  HouseComponentIcon,
  ContainerFooter,
} from "./FooterStyles";

function Footer() {
  return (
    <BannerStyled background="#084cb1">
      <ContainerFooter style={{}}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderTop: "1px solid #fff",
            paddingTop: "30px",
          }}
        >
          <Img src="img/pedimon-text-white.png" />
        </div>

        <Container3>
          <Caja>
            <P
              color="#fff"
              size="clamp(1rem, 2vw, 2rem)"
              margin="0"
              padding="5px"
            >
              Contacto
            </P>
            <P
              color="#fff"
              size="clamp(1rem, 0.5vw, 2rem)"
              margin="0"
              padding="5px"
            >
              <CallComponentIcon />
              59+849865465
            </P>
            <P
              color="#fff"
              size="clamp(1rem, 0.5vw, 2rem)"
              margin="0"
              padding="5px"
            >
              <HouseComponentIcon />
              manuel rodriguez 565
            </P>
          </Caja>
          <Caja>
            <P
              color="#fff"
              size="clamp(1rem, 2vw, 2rem)"
              margin="0"
              padding="5px"
            >
              Legales
            </P>
            <P
              color="#fff"
              size="clamp(1rem, 0.5vw, 2rem)"
              margin="0"
              padding="5px"
            >
              Cualquier problema dirijase a defensa del consumidor
            </P>
            <P></P>
          </Caja>
        </Container3>
      </ContainerFooter>
    </BannerStyled>
  );
}

export default Footer;
