import styled from "styled-components"
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fontSize } from "@mui/system";

const BeforeMain = styled.div`
    width: 100vw;
    height: 30px;
    background-color: black;
    position: fixed;
    z-index: 101;
    color: white;
    display: flex;
    align-items: center;
`
const BeforeFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const P = styled.p`
    font-size: 12px;
`

const A = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 16px;
`
const FAQ = styled.div`
    display: flex;
`


const BeforeHeader = () => {
    return (
        <BeforeMain>
            <Container maxWidth="lg">
                <BeforeFlex>
                    <div>
                        <A href="https://www.facebook.com/uynwiin2502.03"><FacebookIcon sx={{ fontSize: '14px' }} /></A>
                        <A href="https://www.instagram.com/only.52hzblue/"> <InstagramIcon sx={{ fontSize: '14px' }} /></A>
                        <A href="https://github.com/UyenQuyenNguyen"><GitHubIcon sx={{ fontSize: '14px' }} /></A>
                    </div>
                    <P>Free shipping on all orders over $75</P>
                    <FAQ>
                        <A href=""><P>Contact</P></A>
                        <A href=""><P>FAQ</P></A>
                    </FAQ>

                </BeforeFlex>
            </Container>

        </BeforeMain>
    )

}

export default BeforeHeader;