import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    background: ${theme.gray500};
    margin-bottom: 12px;

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
  `}
`;

type PropsButton = {
  status: boolean;
};

export const ButtonCheck = styled.button<PropsButton>`
  ${({ theme, status }) => css`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid ${theme.blue};
    background: ${theme.gray500};

    ${status &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.gray100};
      border: none;
      background-color: ${theme.purple};
      svg {
        color: ${theme.gray100};
      }
    `}
  `}
`;
