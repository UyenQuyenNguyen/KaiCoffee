import * as React from 'react';
import LeftMenu from './LeftMenu';
import ProductAmdin from './ProductAdmin';
import { Container } from '@mui/material';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = (props) => {
    const { theme } = props;
    const TopMenu = styled.div`
        width: 100%;
        height: 11rem;
        border-radius: 0 0 15px 15px;
        background-image: url('https://kaicoffee.vn/wp-content/uploads/2021/01/tree-mother-00-hero-scaled.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin-bottom: 1rem;
    `
    const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        position: relative;
        left: 350px;
        right: 0;
    `

    return (
        <Container maxWidth="false" sx={{ marginTop: '1rem', display: 'flex', width: '100%', padding: 'unset'}} theme={theme}>
            <LeftMenu theme={theme} />
            <Main>
                <TopMenu />
                <ProductAmdin/>
            </Main>
        </Container>
    )
}

export default Dashboard