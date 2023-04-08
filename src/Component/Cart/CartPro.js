import { useContext } from "react"
import { CartContext } from "../Context/cartcontext"
import styled from "styled-components";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Card = styled.div`
    width: 100%;
    height: 10rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Img = styled.img`
    width: 120px;
`
const Des = styled.div`
    width: 20rem;
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

const Price = styled.div`
    width: 15rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Quantity = styled.div`
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    width: 1.5rem;
    height: 2rem;
    border: none;
    background-color: transparent;
    font-size: 18px;
    cursor: pointer;
`

const Total = styled.div`
    width: 100%;
    height: 10rem;
    text-align: right;
    border-top: 1px solid black;
    padding-top: 1rem
`
const Buy = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #206f82;
    width: 7rem;
    height: 2.5rem;
    cursor: pointer;
`
const Empty = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ViewHeight = styled.div`
    min-height: 70vh;
`

const CartPro = () => {
    const Globalstate = useContext(CartContext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)
    return (
        <Container maxWidth="lg" sx={{ paddingTop: "7rem", display: "flex", flexDirection: "column" }}>
            <ViewHeight>
                {state.map((item, index) => {
                    return <Card>
                        <Info>
                            <Img src={item.img} alt="" />
                            <Des>
                                <h4 style={{ marginBottom: "1rem" }}>{item.name}</h4>
                                <p>{item.description}</p>
                            </Des>
                        </Info>
                        <Price>
                            <p>{item.quantity * item.price}</p>
                            <Quantity>
                                <Button onClick={() => dispatch({ type: "INSCREASE", payload: item })}>+</Button>
                                <p style={{ margin: "0 16px" }}>{item.quantity}</p>
                                <Button onClick={() => {
                                    if (item.quantity > 1) {
                                        dispatch({ type: "DESCREASE", payload: item })
                                    } else {
                                        dispatch({ type: "REMOVE", payload: item })
                                    }
                                }
                                }>-</Button>
                            </Quantity>
                            <h5 style={{ color: "red", cursor: "pointer" }} onClick={() => dispatch({ type: "REMOVE", payload: item })}>Remove</h5>
                        </Price>
                    </Card>
                })}
                {state.length == 0 && (
                    <Empty>
                        <img src="https://www.clickscreative.com/images/empty-cart.png" />
                        <Link to="/Shop"><Buy>Go to Shop</Buy></Link>
                    </Empty>
                )}
                {state.length > 0 && (
                    <Total>
                        <h3 style={{ margin: "16px 0" }}>Total: {total}</h3>
                        <Link to="/Bill"><Buy>Order</Buy></Link>
                    </Total>
                )
                }
            </ViewHeight>
        </Container>
    )
}

export default CartPro

