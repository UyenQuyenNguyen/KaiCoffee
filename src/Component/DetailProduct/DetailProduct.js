import styled from "styled-components"
import * as React from 'react';
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/productcontext";
import { Container } from "@mui/material";
import { CartContext } from "../Context/cartcontext";
import { FavouContext } from "../Context/favoucontext";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FormatPrice from "../../Helpers/FormatPrice";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ViewHeight = styled.div`
    min-height: 68vh;
    display: flex;
    justify-content: center;
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
    margin-right: 16px;
`

const InfoProduct = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

const FeatureBtn = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const API = "https://642c508e208dfe25472d4c1e.mockapi.io/api/v1/Product"
const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = React.useContext(AppContext)

    const { id } = useParams();


    const { id: alias,
        name,
        img,
        price,
        description,
        classtify
    } = singleProduct;


    const Globalstate = React.useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    const Favoustate = React.useContext(FavouContext);
    const getFavou = Favoustate.dispatch;

    const [open, setOpen] = React.useState(false);
    const Favou = () => {
        setOpen(true);
        getFavou({ type: "ADD", payload: singleProduct })
    };

    const Cart = () => {
        setOpen(true);
        dispatch({ type: "ADD", payload: singleProduct })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    React.useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, [])

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "7rem", display: "flex", flexDirection: "column" }}>
            <ViewHeight>
                {isSingleLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <img style={{ marginRight: '1.5rem' }} src={img} />
                        <InfoProduct>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <p><FormatPrice price={price} /></p>
                            <FeatureBtn>
                                <Buy onClick={Cart}>Add to Cart</Buy>
                                <IconButton sx={{ width: '52px', height: "52px" }}
                                    onClick={Favou}   >
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </FeatureBtn>
                            <p>Kai Coffee cung cấp đa dạng thức uống phong phú, từ cà phê espresso, cappuccino, latte đến các loại trà, thức uống đặc biệt và sinh tố tươi. Bạn cũng có thể tùy chọn thêm các loại syrups hương vị như vani, caramel hoặc hạt dẻ để tùy chỉnh thêm hương vị mình thích.


                                Với sự đa dạng trong menu, chúng tôi tự tin sẽ có thức uống phù hợp với mọi khẩu vị và mong muốn của khách hàng. Hãy đến và thưởng thức những thức uống tuyệt vời của chúng tôi trong khung cảnh thân thiện và ấm áp của quán cafe.</p>
                        </InfoProduct>


                    </>
                )}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: "#206f82" }}>
                        Item has been added !
                    </Alert>
                </Snackbar>
            </ViewHeight>
        </Container>

    )
}

export default SingleProduct;
