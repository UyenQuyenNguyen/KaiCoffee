import { useContext } from "react"
import { CartContext } from "../Context/cartcontext"
import styled from "styled-components";
import { Container } from "@mui/material";
import { Link } from 'react-router-dom';
import { FavouContext } from "../Context/favoucontext";


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
    width: 50%;
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
const Buy = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #206f82;
    width: 8rem;
    height: 2.5rem;
    cursor: pointer;
    margin: 0 16px;
`
const RmBtn = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
    width: 8rem;
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
    min-height: 50vh;
`

const Favo = () => {
    const Favoustate = useContext(FavouContext);
    const state = Favoustate.state;
    const dispatch = Favoustate.dispatch;
    const Globalstate = useContext(CartContext);
    const Glodispatch = Globalstate.dispatch;
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
                            <Buy onClick={() => Glodispatch({ type: "ADD", payload: item })}>Add to Cart</Buy>
                            <RmBtn onClick={() => dispatch({ type: "REMOVE", payload: item })}>Remove</RmBtn>
                        </Price>
                    </Card>
                })}
                {state.length === 0 && (
                    <Empty>
                        <img src="https://cdn.dribbble.com/users/463734/screenshots/2016814/no-favourites_shot.png?compress=1&resize=400x300&vertical=top" />
                        <Link to="/Shop"><Buy>Go to Shop</Buy></Link>
                    </Empty>
                )}
            </ViewHeight>
        </Container>
    )
}

export default Favo