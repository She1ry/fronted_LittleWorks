import React, { useState } from 'react'
import styled from 'styled-components'
import {Card, Front, Back} from './components/Card'

const Container = styled.div`
    display: grid;
    grid-template: 100vh/100vw;
    place-items: center;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

`
export default function App() {
    const [animation, setAnimation] = useState(0);
  return (
    <Container>
        <Card 
            onMouseEnter={()=>{setAnimation(1)}} 
            onMouseLeave={()=>{setAnimation(-1)}} 
            ani={animation}
            >
            <Front>
                <p>欢迎进入我的世界</p>
            </Front>
            <Back>
                <p>点赞</p>
                <p>关注</p>
                <p>收藏</p>
                <p>找到我</p>
            </Back>
        </Card>
    </Container>
  )
}
