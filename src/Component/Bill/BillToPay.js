import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartcontext";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Divider from '@mui/material/Divider';
import { CustomerContext } from "../Context/customercontext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Bill = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Img = styled.img`
    width: 80px;
`
const Des = styled.div`
    width: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1rem;
`

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
`

const Price = styled.div`
    width: 15rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Total = styled.div`
    width: 100%;
    height: 10rem;
    text-align: right;
    border-top: 1px solid black;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
`
const P = styled.p`
    margin: 3px 0;
`

const Thank = styled.div`
    width: 50rem;
    text-align: center;
`
const Title = styled.div`
    display: flex;
`
const Height = styled.div`
    min-height: 65vh;
    display: flex;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
`

const Buy = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #206f82;
    width: 7rem;
    height: 2.5rem;
`
const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BillToPay = () => {
    const { address, name, phone, isConfirm, setConfirm } = useContext(CustomerContext);
    const Globalstate = React.useContext(CartContext);
    const state = Globalstate.state;
    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)
    return (
        <Container maxWidth="md" sx={{ height: "100%", paddingTop: '7rem', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' }}>
            <Height>
                {isConfirm ? (
                    <Column>
                        <img style={{ width: "350px" }} src={require('../../images/delivery.png')} />
                        <h1 style={{ marginBottom: "16px" }}>Your order is being delivered to you <FavoriteBorderIcon /></h1>
                        <Link to="/"><Buy>Go to Home</Buy></Link>
                    </Column>
                ) : (
                    <Bill>
                        <img style={{ width: '8rem' }} src={require("../../images/MyLogo.png")} alt="" />
                        <h1>Kai Coffee</h1>
                        <P>Store: 138 Nguyen Oanh | Phone: (028) 2245.0303</P>
                        <p>Free wifi password: stayhealthy</p>
                        <Divider component="div" sx={{ borderBottomWidth: 1, width: "100%", margin: "1rem 0" }} />
                        <h1>RECEIPT</h1>
                        <Divider component="div" sx={{ borderBottomWidth: 1, width: "100%", margin: "1rem 0" }} />
                        <h4>Customer: {name}</h4>
                        <P>Phone Number: {phone}</P>
                        <P>Address: {address}</P>
                        <P>Date: {new Date().toLocaleString() + ' '}</P>
                        <Divider component="div" sx={{ borderBottomWidth: 1, width: "100%", margin: "1rem 0" }} />
                        <Card><Title style={{ width: '30rem' }}> <p style={{ marginLeft: "32px" }}>No</p><p style={{ marginLeft: "42px" }}>Item</p></Title><p>Price</p></Card>
                        <Divider component="div" sx={{ borderBottomWidth: 1, width: "100%", margin: "1rem 0" }} />
                        {state.map((item, index) => {
                            return <Card key={index}>
                                <p style={{ marginLeft: "32px" }}>{index + 1}</p>
                                <Info>
                                    <Img src={item.img} alt="" />
                                    <Des>
                                        <h4 style={{ marginBottom: "1rem" }}>{item.name}</h4>
                                        <p>{item.description}</p>
                                    </Des>
                                </Info>
                                <Price>
                                    <p>{item.quantity * item.price}</p>
                                </Price>
                            </Card>
                        })}
                        <Total>
                            <h3>Payment: Cash</h3>
                            <div>
                                <h3 style={{ marginBottom: "16px" }}>Total: {total}</h3>
                                <Buy onClick={() => { setConfirm(true) }}>Confirm</Buy></div>
                        </Total>
                        <Thank>In a city filled with so many choices, we thank you for choosing us. Please feel tree to contact us at hotline: +0849031089 (Mr Duc - Brand Manager) if you encounter any problems related to our services. We are happy to serve you!</Thank>
                        <Divider component="div" sx={{ borderBottomWidth: 1, width: "100%", margin: "1rem 0" }} />
                    </Bill>
                )}
            </Height>
        </Container >
    )
}


export default BillToPay;