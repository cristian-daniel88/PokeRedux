import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const ContainerCartas = styled.div`
width: 100%;
height: auto;
`;

export const SubtitleStyled = styled.h3`
  padding: 10px 0;
  border-bottom: 1px solid #ff8352;
`;

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;

  @media screen and (max-width: 700px) {
    padding: 50px 0;
  }
`;

export const Cart = styled.div`
  height: 200px;
  padding: 10px;
  color: #000;
  border-radius: 7px;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 2px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;
export const CartImage = styled.img`
  filter: contrast(75%);
  position: absolute;
  top: 0;
  left: 20;
  width: 60%;
  height: auto;
  object-fit: cover;
  transition: 0.5s ease;

  &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
`;

export const CartLabel = styled.div`
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;

// tag
export const TitleStyled = styled.h2`
  padding: 10px 30px;
  text-align: center;
  margin-bottom: 20px;
  background: beige ;
  border-radius: 10px;
  color: #79797d;
  margin-top: 20px;
`;

export const TagsMenu = styled(ScrollContainer)`
  display: flex;
  justify-content: space-evenly;
  
  align-items: center;
  overflow-x: scroll;
  margin: 20px 0;
  padding: 20px 0;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const TagCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? "#ab636a52" : "beige")};
  color: gray;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.09);
  }
`;

export const TagImg = styled.div`
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const TagImgTodos = styled.div`
  border-radius: 50%;
  background-image: url('img/pokeball.png');
  width: 30px;
  height: 30px;
  margin-right: 20px;
  background-size: cover;
`;



