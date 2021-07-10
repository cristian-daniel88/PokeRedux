import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

const Title = styled.div`
  font-weight: 700;
  z-index: 999;
`;

export const QuantityManageStyled = styled(Title)`
  min-width: 50px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
 
`;

export const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

export const QuantityButton = styled.div`
  width: 23px;
  color: #ff0038;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;

export const RemoveIconStyled = styled(DeleteIcon)`
  width: 17px !important;
  height: 17px !important;
  cursor: pointer;
  margin: 0 10px;
  color: red;
`;
