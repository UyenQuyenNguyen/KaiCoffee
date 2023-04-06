import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/system';

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

function FirstSection(props) {
    let items =
        [
            {
                id: 1,
                img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/339795745_793490061708875_8156622442199661894_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=wyzEHi3GJgYAX_unfLF&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBXHjuSwwp_UotAPVtw2UiJwCZUC1pFP8SfRsRX4cYJlQ&oe=6431FC8F",
            },
            {
                id: 2,
                img: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/338969693_600010365510472_6322442890277611161_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=6eWLC8961t0AX_jZglj&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCN-omLHsEgZcifmkfPUR96XBAASYcBW7cDlAlt1dNLMw&oe=64333E15",
            },
            {
                id: 3,
                img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/339726223_5829810277116868_6406415956402195174_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=P9abzXmRfNAAX-rutLa&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAsmll4I-aXeXlZHCxGLby7yt3pfE5-L1JqxiMnmVY74A&oe=6432B296",
            }
        ]
    return (

        <Carousel>
            {
                items.map((item) => <Card key={item.id}>
                    <img src={item.img} alt={item.name}/> 
                </Card>)
            }
        </Carousel>
    )
}

export default FirstSection