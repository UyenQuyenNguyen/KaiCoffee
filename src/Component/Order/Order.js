import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Context/Context";
import Register from "../Login";

// const ViewHeight = styled.div`
//     min-height: 68vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const OrderDetail = () => {
    const Globalstate = useContext(CartContext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return (
        // <Container maxWidth="lg" sx={{ paddingTop: "7rem", display: "flex", flexDirection: "column" }}>
        //     <ViewHeight>
        <Register />
        //     </ViewHeight>
        // </Container>

    )
}

export default OrderDetail