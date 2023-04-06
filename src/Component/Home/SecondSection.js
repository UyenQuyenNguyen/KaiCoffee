import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from 'styled-components';


const arrDeal = [
    {
        "id": 1,
        "title": 'UT TICH STORE',
        "address": '50 Ut Tich Street, Ward 04, District Tan Binh, Ho Chi Minh City',
        "phone": '028 22482323',
        "time": '24/7 – Always open',
    },
    {
        "id": 2,
        "title": 'HONG BANG STORE',
        "address": '136 Hong Bang Street, Ward 12, District 5, Ho Chi Minh City',
        "phone": '028 22450202',
        "time": '24/7 – Always open'
    }
    ,
    {
        "id": 3,
        "title": 'NGUYEN OANH STORE',
        "address": '138 Nguyen Oanh Street, Ward 17, District Go Vap, Ho Chi Minh City',
        "phone": '028 2245 0303',
        "time": '24/7 – Always open'
    }
    ,
    {
        "id": 4,
        "title": 'VAN KIEP STORE',
        "address": '288 Van Kiep Street, Ward 13, District Binh Thanh, Ho Chi Minh City',
        "phone": '028 2241 3232',
        "time": '24/7 – Always open'
    }
    ,
    {
        "id": 5,
        "title": 'CONG HOA STORE',
        "address": '01 – C18 Street, Ward 12, District Tan Binh, Ho Chi Minh City',
        "phone": '028 2241 3232',
        "time": '07:00 – 22:30, Everyday'
    }
    ,
    {
        "id": 6,
        "title": 'BAU CAT STORE',
        "address": '117 – 119 Bau Cat Street, Ward 14, District Tan Binh, Ho Chi Minh City',
        "phone": '028 2241 3232',
        "time": '24/7 – Always open'
    }

]

const Store = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export default function RowAndColumnSpacing() {
    return (
        <Container maxWidth="lg" sx={{ padding: '3rem', display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{color: "#206f82"}}>STORE</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                    {arrDeal.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Store key={item.id}>
                                <img style={{ width: "300px" }} src='https://kaicoffee.vn/wp-content/uploads/2021/01/tree-mother-00-hero-scaled.jpg' />
                                <p style={{fontSize: "10px", marginTop: "0.5rem", fontWeight: "900", color: "#206f82"}}>PLACES</p>
                                <h4 style={{marginTop: "1rem"}}>
                                    {item.title}
                                </h4>
                            </Store>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <hr/>
        </Container>
    );
}