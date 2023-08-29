import * as React from 'react';
import { Container } from "@mui/material";
import { useContext } from "react";
import { FilterContext } from "../Context/filtercontext"
import Box from '@mui/material/Box';
import styled from "styled-components";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppsIcon from '@mui/icons-material/Apps';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

const LeftMenu = (props) => {
    const { theme } = props;
    console.log(theme);

    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const { updateFilterValue, all_products } = useContext(FilterContext)
    const Button = styled.button`
        border: none;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 16px;
        padding: 12px;
        padding-left: 32px;
        background-color: transparent;
        cursor: pointer;
        :hover{
            background-color: #206f828f;
            color: white;
        }

    `

    const handleClick = () => {
        setOpen(!open);

    };
    const handleClick1 = () => {
        setOpen1(!open1);

    };

    const getUniqueData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property];
        });

        return (newVal = ["All", ...new Set(newVal)]);
    }

    const categoryOnlyData = getUniqueData(all_products, "classtify")
    return (
        <Container theme={theme} sx={{ width: '300px', position: 'fixed'}} >
            <img src='/images/KaiCoffee.png' alt="Logo" style={{ width: '100%' }} />
            <Box width={300}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Product" />
                    </ListItemButton>
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <AppsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Category" /> */}
                        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                    {/* </ListItemButton> */}
                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {categoryOnlyData.map((curElem, index) => {
                                return <Button key={index} sx={{ pl: 4 }} name="classtify" value={curElem} onClick={updateFilterValue}>
                                    <StarBorder color="primary" sx={{marginRight: "12px" }} />{curElem}
                                </Button>
                            })}
                        </List>
                    </Collapse> */}
                    {/* <ListItemButton>
                        <ListItemIcon>
                            <LocalShippingIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Delivering" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingCartIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <StorefrontIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Store"  />
                    </ListItemButton> */}
                </List>
            </Box>

        </Container>
    )
}

export default LeftMenu






