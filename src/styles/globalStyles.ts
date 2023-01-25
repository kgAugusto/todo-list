import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Inter;
    }
    body {
        background-color: ${theme.gray600};
    }

    button {
        border: 0;
    }
`;
