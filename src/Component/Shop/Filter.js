import { Container } from "@mui/material";
import React from 'react';
import { useContext } from "react";
import { FilterContext } from "../Context/filtercontext"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ListSubheader from '@mui/material/ListSubheader';
import styled from "styled-components";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import FormatPrice from "../../Helpers/FormatPrice";

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

const Filter = () => {
    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const { filters: { text, classtify, price, minPrice, maxPrice }, updateFilterValue, all_products } = useContext(FilterContext)

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
        <Container maxWidth="xs"  >
            <Box width={300} sx={{ position: "sticky", top: "8rem" }}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        id="standard-basic"
                        label="Search by name"
                        variant="standard"
                        name="text"
                        type="text"
                        value={text}
                        onChange={updateFilterValue}
                        sx={{ marginBottom: "24px", width: "100%" }} />
                </form>
                <p>Filter by price</p>
                <p style={{ marginTop: "16px" }}><FormatPrice price={price} /></p>
                <Slider
                    size="small"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={updateFilterValue}
                    defaultValue={maxPrice}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{ color: "#206f82", marginTop: '16px' }}
                />
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <p style={{ margin: "16px 0" }}>Nested List Items</p>
                    }>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon sx={{ color: "#206f82" }} />
                        </ListItemIcon>
                        <ListItemText primary="Classtify" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {categoryOnlyData.map((curElem, index) => {
                                return <Button key={index} sx={{ pl: 4 }} name="classtify" value={curElem} onClick={updateFilterValue}>
                                    <StarBorder sx={{ color: "#206f82", marginRight: "12px" }} />{curElem}
                                </Button>
                            })}
                        </List>
                    </Collapse>
                </List>

            </Box>

        </Container>
    )
}

export default Filter

