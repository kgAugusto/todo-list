import styled, { css } from "styled-components";

type Props = {
  color?: "blue" | "purple";
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  `}
`;

export const Info = styled.div<Props>`
  ${({ theme, color }) => css`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 19px;

      padding: 2px 8px;
      font-weight: 700;
      font-size: 12px;
      color: ${theme.gray200};
      background: ${theme.gray400};
      border-radius: 50px;
    }

    ${color === "blue" &&
    css`
      p {
        color: ${theme.blue};
      }
    `}
    ${color === "purple" &&
    css`
      p {
        color: ${theme.purple};
      }
    `}
  `}
`;
