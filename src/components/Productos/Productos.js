import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BannerStyled, ContainerBanner, Support } from "../Banner/BannerStyles";
import {
  CartGrid,
  CartImage,
  CartLabel,
  SubtitleStyled,
  Cart,
  TitleStyled,
  TagsMenu,
  TagCard,
  TagImg,
  TagImgTodos
} from "../Productos/ProductosStyles";

function Productos({openPok, setOpenPok}) {

  
  const [section, setSection] = useState(null);

  let cartas = useSelector((state) => state.products.pokemons);

  const categories = useSelector(
    ({ categories: { categories } }) => categories
  );

 
   // en el if la section es tipo agua , fuego o tierra 
  if (section) {
    cartas = { [section]: cartas[section] };
    
  }

  

  



  
  return (
    <>
      <Support />

      <BannerStyled background="#e0e0fd">
        <ContainerBanner>

          <TitleStyled>Productos</TitleStyled>

          <TagsMenu>
            {section && (
              <TagCard onClick={() => setSection(null)}>
                <TagImgTodos />
                <p>Todos</p>
              </TagCard>
            )}

            {categories.map((category, index) => (
              <TagCard
                key={index}
                onClick={() => setSection(category.section)}
                selected={category.section === section}
                
              >
                <TagImg img={category.imgTag} />
                <p>{category.section}</p>
              </TagCard>
            ))}
          </TagsMenu>

          {Object.entries(cartas).map(([section, pokemons], index) => {
            return (
              <div key={index}>
                <SubtitleStyled>{section}</SubtitleStyled>
                <CartGrid>
                  {pokemons.map((pok, index) => (
                    <Cart key={index} onClick={() => setOpenPok(pok)}>
                      <CartImage src={pok.img} />
                      <CartLabel>{pok.name}</CartLabel>
                    </Cart>
                  ))}
                </CartGrid>
              </div>
            );
          })}
        </ContainerBanner>
      </BannerStyled>
    </>
  );
}

export default Productos;
