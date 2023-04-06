import { Container } from "@mui/material";
import * as React from 'react';
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

    const handleClick = () => {
        setOpen(!open);

    };
    const handleClick1 = () => {
        setOpen1(!open1);

    };

    return (
        <Container maxWidth="sm"  >
            <Box width={300} sx={{position: "sticky", top: "8rem"}}>
            <TextField id="standard-basic" label="Search by name" variant="standard" 
            sx={{marginBottom: "24px", width: "100%"}} />
            <p>Filter by price</p>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{color: "#206f82", marginTop: '16px'}}
                />

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <p style={{margin: "16px 0"}}>Nested List Items</p>
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
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Coffee - Espresso" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Tea" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Milk Tea" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Blended Frappes" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Cakes" />
                    </ListItemButton>
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
 
