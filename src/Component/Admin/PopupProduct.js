import React from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { FormGroup } from "@mui/material";
import { useState } from "react";
import { addProduct } from "../../services/product";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'flex-colunm',
    alignItems: 'center'
};

const initialValue = {
    name: "",
    price: 0,
    description: "",
    img: "https://images.foody.vn/res/g29/284303/s400x400/1dbecc14-f421-4fb1-ac05-eadfe9c5-70c084f7-221011201232.jpeg",
    classtify: "",
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PopupCreate = (prop) => {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(initialValue);
    const { name, price, description, img, classtify } = product;
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [open2, setOpen2] = useState(true);
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const addProductDetails = async () => {
        const res = await addProduct(product);
        if (res.status === 200) {
            setOpen(true);
            setStatus("success")
            setMessage(res.data.message)
            setOpen2(false);
            window.location.reload();
        } else {
            setOpen(true);
            setStatus("errorr")
            setMessage(res.data.message)
        }
    };

    const classify_arr = [
        'Coffee - espresso',
        'Tea',
        'Blended Frappes',
        'Milk tea',
        'Cakes'
    ]

    return (
        <>
        <Modal
            open={open2}
            sx={{ style }}
            onClose={prop.handleClose}
            aria-describedby="modal-modal-description"
        >
            <Box sx={{background: 'white'}}>
                <FormGroup id="modal-modal-description" sx={{ width: '30vw', position: 'absolute', top: '30%', left: '38%' }}>
                        <h2>ADD NEW PRODUCT</h2>
                    <FormControl sx={{ marginBottom: '12px' }}>
                        <InputLabel>Name</InputLabel>
                        <Input
                            onChange={(e) => onValueChange(e)}
                            name="name"
                            value={name}
                        />
                    </FormControl>
                    <FormControl sx={{ marginBottom: '12px' }}>
                        <Select
                            value={classtify}
                            name="classtify"
                            onChange={(e) => onValueChange(e)}
                            
                        >
                                <MenuItem disabled value="">
                                    <em>Classify</em>
                                </MenuItem>
                            {classify_arr.map((item, key) => {
                                return <MenuItem key={key} value={item}>{item}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ marginBottom: '12px' }}>
                        <InputLabel>Price</InputLabel>
                        <Input
                            onChange={(e) => onValueChange(e)}
                            name="price"
                            value={price}
                        />
                    </FormControl>
                    <FormControl sx={{ marginBottom: '12px' }}>
                        <InputLabel>Description</InputLabel>
                        <Input
                            onChange={(e) => onValueChange(e)}
                            name="description"
                            value={description}
                        />
                    </FormControl>
                    <Box my={3}>
                        <Button
                            variant="contained"
                            onClick={() => addProductDetails()}
                            color="primary"
                            align="center"
                        >
                            Add Product
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            align="center"
                            style={{ margin: "0px 20px" }}
                            onClick={prop.handleClose}
                        >
                            Cancel
                        </Button>
                    </Box>
                </FormGroup>
            </Box>
        </Modal>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status} sx={{ width: '100%', backgroundColor: "#206f82" }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default PopupCreate