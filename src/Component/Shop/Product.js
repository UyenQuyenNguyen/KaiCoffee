import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Filter from './Filter';
import { CartContext } from '../Context/cartcontext';
import { LoginContext } from '../Context/logincontext';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: 2s;
    :hover{
        box-shadow: 1px 2px 5px rgb(214, 214, 214);
        transition: 0.2s;
    }
`

const Des_pro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
`

const BtnFeature = styled.div`
    height: 100%;
    width: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transition: 2s;
    background-color: #206f82;
`

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    useEffect((() => {
        axios({
            method: "GET",
            url: "https://642c508e208dfe25472d4c1e.mockapi.io/api/v1/Product"
        })
            .then((reponse) => {
                setProduct(reponse.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }), []);

    const Globalstate = React.useContext(CartContext);
    const dispatch = Globalstate.dispatch;

    const { login } = React.useContext(LoginContext)

    return (
        <Container maxWidth="false" sx={{ marginTop: '3rem', display: 'flex' }}>
            <Filter />
            <Box maxWidth="lg" sx={{ flexGrow: 1 }}>
                {loading && (
                    <div>
                        {" "}
                        <h1>Loading...</h1>
                    </div>
                )}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                    {product.map((item, index) => {
                        item.quantity = 1;
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card >
                                    <ImgDiv
                                    >
                                        <img style={{ width: '300px' }} src={item.img} alt="" />
                                        <BtnFeature>
                                            <IconButton sx={{ width: '52px', height: "52px", color: "white" }}
                                                onClick={() => dispatch({ type: "ADD", payload: item })}>
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{ width: '52px', height: "52px", color: "white" }}
                                                onClick={() => {
                                                    if (login === false) {
                                                        dispatch({ type: "ADD", payload: item })
                                                    } else {
                                                        alert("Login, please")
                                                        console.log(login)
                                                    }
                                                }}
                                            >
                                                <AddShoppingCartOutlinedIcon />
                                            </IconButton>
                                            <IconButton sx={{ width: '52px', height: "52px", color: "white" }}>
                                                <VisibilityOutlinedIcon />
                                            </IconButton>
                                        </BtnFeature>
                                    </ImgDiv>
                                    <Des_pro>
                                        <h4 style={{ margin: "8px 0" }}>{item.name}</h4>
                                        <p style={{ margin: "8px 0" }}>{item.description}</p>
                                        <p>{item.price}VND</p>
                                    </Des_pro>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>

    )
}

export default Product;