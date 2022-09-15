import {css, keyframes} from "styled-components";


const rotate = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(180deg);
    }
`;

const rotate_r = keyframes`
    0% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(0);
    }
`


export {rotate, rotate_r}

