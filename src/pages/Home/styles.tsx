import styled, { css } from "styled-components";

export const Section = styled.div`
  ${({ theme }) => css`
    width: 736px;
    margin: 0 auto;

    .input {
      display: flex;
      gap: 8px;
      margin-top: -20px;

      input {
        width: 100%;

        background: ${theme.gray500};
        color: ${theme.gray300};

        padding: 1rem;
        border: none;
        border-radius: 8px;
      }
    }
  `}
`;

export const InfoNone = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex-direction: column;
    color: ${theme.gray300};
    margin-top: 24px;
    padding-top: 64px;
    p {
      font-weight: 700;
      margin-top: 1rem;
    }
    span {
      font-weight: 400;
    }
    width: 100%;
    border-top: 1px solid #3333;
    border-radius: 8px;
  `}
`;

export const List = styled.div`
  margin-top: 24px;
`;
