import styled, { css } from "styled-components";
type PropsButton = {
  status: boolean;
};

type Props = {
  status: boolean;
};

export const Container = styled.div<Props>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    background: ${theme.gray500};
    margin-bottom: 12px;

    button {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid ${theme.blue};
      background: ${theme.gray500};
    }

    p {
      font-size: 14px;
      font-weight: 400;
      color: ${theme.gray100};
      margin-left: 15px;
    }

    svg {
      color: ${theme.gray300};
      cursor: pointer;
    }

    ${status &&
    css`
      p {
        text-decoration: line-through;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: ${theme.purple};
      }
    `}
  `}
`;
