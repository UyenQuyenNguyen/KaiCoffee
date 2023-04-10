import styled from "styled-components"
import React from "react";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Context/cartcontext';
import { LoginContext } from '../Context/logincontext';
import { FavouContext } from '../Context/favoucontext';
import FormatPrice from "../../Helpers/FormatPrice";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GridView = ({ products }) => {

    const Globalstate = React.useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    const Favoustate = React.useContext(FavouContext);
    const getFavou = Favoustate.dispatch;

    const [open, setOpen] = React.useState(false);
    const Favou = (item) => {
        setOpen(true);
        getFavou({ type: "ADD", payload: item })
    };

    const Cart = (item) =>{
        setOpen(true);
        dispatch({ type: "ADD", payload: item })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const { login } = React.useContext(LoginContext)
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                {products.map((item, index) => {
                    item.quantity = 1;
                    return (
                        <Grid item xs={12} md={4} key={item.id}>
                            <Card>
                                <ImgDiv
                                >
                                    <Link to={`/DetailProduct/${item.id}`}><img style={{ width: '300px' }} src={item.img} alt="" /></Link>
                                    <BtnFeature>
                                        <IconButton sx={{ width: '52px', height: "52px", color: "white" }}
                                            onClick={()=>Favou(item)}>
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{ width: '52px', height: "52px", color: "white" }}
                                            onClick={() => {Cart(item)}}
                                        >
                                            <AddShoppingCartOutlinedIcon />
                                        </IconButton>

                                        <Link to={`/DetailProduct/${item.id}`}><IconButton sx={{ width: '52px', height: "52px", color: "white" }}>
                                            <VisibilityOutlinedIcon />
                                        </IconButton></Link>
                                    </BtnFeature>
                                </ImgDiv>
                                <Des_pro>
                                    <h4 style={{ margin: "8px 0" }}>{item.name}</h4>
                                    <p style={{ margin: "8px 0" }}>{item.description}</p>
                                    <p><FormatPrice price={item.price} /></p>
                                </Des_pro>
                            </Card>
                        </Grid>
                    )
                })}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: "#206f82"}}>
                    Item has been added !
                    </Alert>
                </Snackbar>
            </Grid>
        </>
    )
}

export default GridView