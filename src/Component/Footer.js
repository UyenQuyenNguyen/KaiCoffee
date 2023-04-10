import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

const Footer = () => {
    const aboutus = ["Grift Card", "Our Story", "Partners", "Careers"];
    const quicklink = ["How to Buy", "Payment", "Delivery", "My Account"];
    const help = ["FAQs", "Delivery", "Payment", "Contact Us"];
    return (
        <Container maxWidth="lg" sx={{marginTop: '2rem'}}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ textAlign: "center" }}>
                            <img src={require('../images/Logo2.png')} style={{ width: "50px" }} alt="" />
                            <p style={{fontSize: '14px', margin: "12px 0"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div>
                                <a style={{ color: 'black', marginRight: '8px', textDecoration: 'none' }} href="https://www.facebook.com/uynwiin2502.03"><FacebookIcon sx={{ fontSize: '16px' }} /></a>
                                <a style={{ color: 'black', marginRight: '8px', textDecoration: 'none' }} href="https://www.instagram.com/only.52hzblue/"> <InstagramIcon sx={{ fontSize: '16px' }} /></a>
                                <a style={{ color: 'black', textDecoration: 'none' }} href="https://github.com/UyenQuyenNguyen"><GitHubIcon sx={{ fontSize: '16px' }} /></a>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <h3>Our Store</h3>
                            {aboutus.map((item,id) => (
                                <a key={id} style={{ color: 'black', margin: '8px 0', textDecoration: 'none', fontSize: '14px' }} href="">{item}</a>
                            ))}
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <h3>Quick Links</h3>
                            {quicklink.map((item, id) => (
                                <a key={id} style={{ color: 'black', margin: '8px 0', textDecoration: 'none', fontSize: '14px' }} href="">{item}</a>
                            ))}
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <h3>Help</h3>
                            {help.map((item, id) => (
                                <a key={id} style={{ color: 'black', margin: '8px 0', textDecoration: 'none', fontSize: '14px' }} href="">{item}</a>
                            ))}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer
