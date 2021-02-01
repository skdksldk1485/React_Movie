import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    body{

        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;

    }
    *{
        box-sizing:border-box;
    }
`;

export default globalStyles;
