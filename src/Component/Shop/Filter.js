import { Container } from "@mui/material";
import React from 'react';
import { useContext } from "react";
import { FilterContext } from "../Context/filtercontext"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ListSubheader from '@mui/material/ListSubheader';
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


const Filter = () => {
    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const { filters: { text, classtify }, updateFilterValue, all_products } = useContext(FilterContext)

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
console.log(categoryOnlyData);

    return (
        <Container maxWidth="sm"  >
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
                <Slider
                    size="small"
                    defaultValue={70}
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
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Classtify" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {categoryOnlyData.map((curElem, index) => {
                                return <ListItemButton type="button" key={index} sx={{ pl: 4 }} value={curElem} onClick={updateFilterValue}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={curElem} />
                                </ListItemButton>
                            })}
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleClick1}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Savor" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open1} timeout="auto" unmountOnExit>

                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Matcha" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Chocolate" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Blueberry" />
                        </ListItemButton>
                    </Collapse>
                </List>

            </Box>

        </Container>
    )
}

export default Filter

