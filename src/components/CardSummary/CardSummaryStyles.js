import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  max-width: 660px;
  width: 100%;
`;

export const CardSummaryStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

export const CardSummaryContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px 15px;
  background-color: beige;
`;

export const UlCard = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #9faab7;
  margin-bottom: 15px;
`;

export const RowCard = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #e5edef;
`;

export const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Botoncito = styled.button`
  font-family: "Montserrat", cursive;
  font-weight: 700;
  z-index: 999;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : "10px")};
  width: ${({ w }) => (w ? w : "200px")};
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: red;
  ${({ disabled }) =>
    disabled &&
    css`
      background: #ccc !important;
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
`;
