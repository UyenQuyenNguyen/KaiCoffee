import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const FinalSection = () => {
    return (
        <Container maxWidth="lg" sx={{marginBottom: "5rem",display: "flex", alignItems: "center" }}>
            <iframe width="560" height="315" style={{marginRight: "3rem"}} src="https://www.youtube.com/embed/VJy4L5iAQNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/faTsRV7bkEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Container>
    )
}

export default FinalSection