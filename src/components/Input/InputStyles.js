import styled, { css } from "styled-components";

export const FormControl = styled.div`
  margin: 1rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: #f4f4f4;
  border-radius: 15px;
  color: #7d7d7d;
  padding: 4px 0;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);

  &:focus {
    background-color: #ffffff;
    outline-width: 0;
  }

  ${(props) =>
    props.showError
      ? css`
          border-color: red;
          background: #ffd1d1;
        `
      : null}
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 15px;
  background-color: transparent;
  height: 25px;
  padding: 0.15rem 0.35rem;
  color: #7d7d7d;

  &:focus {
    outline: none;
    background-color: transparent;
    border-color: black;
  }
`;

export const StyledLabel = styled.div`
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 0.5rem;
  color: ${({ showError }) => (showError ? "red" : null)};
`;

export const ErrorText = styled.p`
  color: red;
  padding: 4px 0;
  margin: 0 16px;
`;
