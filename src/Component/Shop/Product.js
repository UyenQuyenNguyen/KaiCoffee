 
import { Container } from '@mui/material';
import styled from "styled-components";
import Sort from "./Sort";
import ProductList from "./ProductList";
import Filter from './Filter';


const Product = () =>{
    return (
        <Container maxWidth="false" sx={{ marginTop: '3rem', display: 'flex' }}>
            <Filter/>
            <ProductList/>
        </Container>
    )


}

export default Product;