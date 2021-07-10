import styled from "styled-components";

import { DialogContent } from "../PokDialog/PokDialogStyles";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 75px;
  width: 340px;
  background-color: white;
  height: calc(100% - 75px);
  z-index: 990;
  box-shadow: 4px 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (!props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  
  @media screen and (max-width: 500px) {
    width: 260px;
  }
`;

export const OrderContent = styled(DialogContent)`
  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

export const OrderContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f7f7f7;
`;

export const OrderItems = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    grid-template-columns: 50px 80px 80px;
  }


`;

export const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
