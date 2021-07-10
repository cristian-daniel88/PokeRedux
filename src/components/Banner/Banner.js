import React, { useEffect, useMemo, useState } from "react";
import {
  BannerStyled,
  ContainerBanner,
  BoxFatherBanner,
  Support,
  BoxChildBanner,
  PedimonText,
  P,
  ButtonContainer,
  Button,
  BoxChildPikachu,
  PedimonPikachu,
  TituloBanner,
  H3,
  Container3,
  Caja,
  Img,
  PAnimated
} from "./BannerStyles";
import { Link } from "react-router-dom";

function Banner({ openPok, setOpenPok }) {


  return (
    <>
      <Support />

      <BannerStyled background="#ffe28a" alignItems="center" padding="60px">
        <ContainerBanner>
          <BoxFatherBanner>
            <BoxChildBanner>
              <PedimonText />
              {/* <P>
                Buscá tu Pokemón favoritoc y disfruta de los beneficios de tener
                un bicho de estos en tu casa! Hay como inco millones para
                coleccionar!
              </P> */}
              <PAnimated animation="1s" >Buscá tu Pokemón favorito</PAnimated>
              <PAnimated animation="5s" marginTop='5px'> y disfruta de los</PAnimated>
              <PAnimated animation="7.5s" marginTop='5px'> beneficios de tener</PAnimated>
              <PAnimated animation="11s" marginTop='5px'>un bicho de estos</PAnimated>
              <PAnimated animation="14s" marginTop='5px' marginBotton='10px'>en tu casa!</PAnimated>
            
              <ButtonContainer>
                <Link to="/products">
                  <Button>LOS QUIERO ATRAPAR</Button>
                </Link>
              </ButtonContainer>
            </BoxChildBanner>
            <BoxChildPikachu>
              <PedimonPikachu />
            </BoxChildPikachu>
          </BoxFatherBanner>
        </ContainerBanner>
      </BannerStyled>

      <BannerStyled background="#084cb1">
        <ContainerBanner>
          <TituloBanner>
            <H3>NO TE QUEDES SIN TU PEDIDO!</H3>
          </TituloBanner>
          <P color="#fff">
            No te podés quedar sin tu Pédimon! Mirá lo fácil que es
          </P>
          <Container3>
            <Caja>
              <Img src="img/info-icon-1.png" />
              <P color="#fff" size="clamp(1rem, 1vw, 2rem)">
                Elegís el Pedí que vos querés de la lista de acá abajo (si
                hay...)
              </P>
            </Caja>
            <Caja>
              <Img src="img/info-icon-2.png" />
              <P color="#fff" size="clamp(1rem, 1vw, 2rem)">
                Lo agregás al carrito...
              </P>
            </Caja>
            <Caja>
              <Img src="img/info-icon-3.png" />
              <P color="#fff" size="clamp(1rem, 1vw, 2rem)">
                Le das al botón comprar y LISTO! ya tenés tus Pédis en tu casa.
              </P>
            </Caja>
          </Container3>
        </ContainerBanner>
      </BannerStyled>
    </>
  );
}

export default Banner;
