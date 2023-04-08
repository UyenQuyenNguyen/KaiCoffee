import styled from "styled-components"
import * as React from 'react';
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/productcontext";

const API = "https://642c508e208dfe25472d4c1e.mockapi.io/api/v1/Product"
const SingleProduct = () =>{
    const { getSingleProduct, isSingleLoading, singleProduct } = React.useContext(AppContext)

    const {id} = useParams();

    const {
        id: name,
        img,
        description,
        price,
        classtify,
    } = singleProduct;


    React.useEffect(() =>{
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    return(
        <h1>Single Page {name}</h1>
    )
}

export default SingleProduct;