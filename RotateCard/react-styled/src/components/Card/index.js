import styled,{css} from "styled-components";
import Front from "./Front";
import Back from "./Back";
import {rotate, rotate_r} from "./Animation/Rotate"

const Card = styled.div.attrs(props=>({
    ani:props.ani==1?rotate:props.ani==-1?rotate_r:""
}))`
    position: relative;
    width: 20rem;
    height: 37rem;
    border-radius: 0.6rem;
    background-color: #fff;
    box-shadow: 0.1rem 0.4rem 2rem rgba(0, 0, 0, .1);
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: ${props=>props.ani} 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    & :is(${Front},${Back}){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 20px;
        backface-visibility: hidden;
    }
`

export {Card, Front, Back};