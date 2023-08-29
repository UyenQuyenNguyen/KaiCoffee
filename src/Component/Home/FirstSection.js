import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import styled, { ThemeContext, ThemeProvider } from 'styled-components';

const Card = styled.div`
    height: 100vh;
    width: 100vw;
`

const Title = styled.div`
    position: absolute;
    top: 50vh;
    left: 20vw;
`
const H2 = styled.h2`
    font-size: 56px;
`

function FirstSection() {
    let items =
        [
            {
                id: 1,
                img: "'/images/1.jpg'",
            },
            {
                id: 2,
                img: "'/images/2.jpg'",
            },
            {
                id: 3,
                img: "'/images/3.jpg'",
            }
        ]
    return (

        <Carousel>
            {
                items.map((item) => <Card key={item.id}>
                    <img src={`/images/${item.id}.jpg`} alt={item.name} />
                </Card>)
            }
        </Carousel>
    )
}

export default FirstSection