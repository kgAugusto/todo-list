import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.gray100};
`;
