import styled from "styled-components"
import React from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link, NavLink } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { CartContext } from '../Context/cartcontext';
import { LoginContext } from '../Context/logincontext';
import { FavouContext } from '../Context/favoucontext';
import FormatPrice from "../../Helpers/FormatPrice";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BtnFeature = styled.div`
    display: flex;
    width: 10rem;
`

const Des_pro = styled.div`
    width: 24rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
`

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ListView = ({ products, loading }) => {

    const Globalstate = React.useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    const Favoustate = React.useContext(FavouContext);
    const getFavou = Favoustate.dispatch;
    const [open, setOpen] = React.useState(false);
    const Favou = (item) => {
        setOpen(true);
        getFavou({ type: "ADD", payload: item })
    };

    const Cart = (item) => {
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
           {!loading ? (
                <List>
                    {products.map((item, index) => {
                        item.quantity = 1;
                        return (
                            <Card>
                                <Flex>
                                    <div>
                                        <Link to={`/DetailProduct/${item.id}`}><img style={{ width: '250px', marginRight: "2rem" }} src={item.img} alt="" /></Link>
                                    </div>
                                    <Des_pro>
                                        <h3 style={{ margin: "8px 0" }}>{item.name}</h3>
                                        <p style={{ margin: "8px 0" }}>{item.description}</p>
                                        <p><FormatPrice price={item.price} /></p>
                                    </Des_pro>
                                </Flex>
                                <BtnFeature>
                                    <IconButton sx={{ width: '52px', height: "52px" }}
                                        onClick={() => Favou(item)}>
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{ width: '52px', height: "52px" }}
                                        onClick={() => { Cart(item) }}
                                    >
                                        <AddShoppingCartOutlinedIcon />
                                    </IconButton>

                                    <Link to={`/DetailProduct/${item.id}`}><IconButton sx={{ width: '52px', height: "52px" }}>
                                        <VisibilityOutlinedIcon />
                                    </IconButton></Link>
                                </BtnFeature>
                            </Card>
                        )
                    })}
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: "#206f82" }}>
                            Item has been added !
                        </Alert>
                    </Snackbar>
                </List>
            ) : (<div className='process'><CircularProgress /></div>)}
        </>
    )
}

export default ListView