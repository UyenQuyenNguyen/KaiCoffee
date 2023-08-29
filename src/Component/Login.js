import styled from "styled-components"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useRef, useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import { LoginContext } from "./Context/logincontext";
import { signIn } from "../services/auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ResMain = styled.div`
    width: 35vw;
    height: 50vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: wheat; */
    padding-top: 24px;
    justify-content: space-around;
`

const Form = styled.form`
width: 35vw;
    height: 50vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: wheat; */
    padding-top: 24px;
    justify-content: space-around;
`
const LeftSide = styled.div`
    width: 65vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #e8e8e8;
`
const Content = styled.div`
    height: 37vh;
    width: 950px;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
`

const Title = styled.div`
    height: 150px;
    width: 950px;
    background-color: white;
    font-size: 52px;
    margin-top: -75px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #373a3c;
`
const P = styled.p`
    color: gray;
    font-size: 16px;
    font-weight: bolder;
    margin-top: 12px;
`
const PText = styled.p`
    color: #373a3c;
    font-size: 18px;
`

const Icon = styled.div`
    width: 950px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
`
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSucess] = useState(false);
    const { user, setUser } = React.useContext(LoginContext)
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSignIn = async () => {
        try{
            const res = await signIn({ email: email, password: pass })
            const { status, message } = res.data;
            setStatus(status)
            setMessage(message)
            setOpen(true);
            setSucess(true);
            setUser(res.data.user)
            localStorage.setItem('token', res.data.accessToken)
            navigate('/')
        } catch (error) {
            if (error.response) {
                const { status, message } = error.response.data;            
                setStatus(status)
                setMessage(message)
                setOpen(true);
            } else {
                console.error(error);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn();

    }

    return (
        <Main>
            <LeftSide>
                <img style={{ width: "65vw" }} src="https://kaicoffee.vn/wp-content/uploads/2021/10/Place_Website_Cover_LNY2021-copy-copy.jpg" />
                <Title>STAY HEALTHY, STAY SAFE!<P>April 05, 2023</P></Title>
                <Content>
                    <h3>Dear friend, </h3>
                    <br />
                    <PText>We are in a challenging period with negative news every day from the Covid-19 pandemic. We miss you, and are sad to have to leave you during this time. Always keep your spirits and good health, we'll see each other soon ♥</PText>
                    <br />
                    <PText>Best wishes and health to you and your family.</PText>
                    <br />
                    <PText> Stay healthy, Stay safe!</PText>
                    <br />
                    <h3>#KAITeam</h3>
                </Content>
                <Icon>
                    <a style={{ color: 'black', marginRight: '18px', textDecoration: 'none' }} href="https://www.facebook.com/uynwiin2502.03"><FacebookIcon sx={{ fontSize: '32px' }} /></a>
                    <a style={{ color: 'black', marginRight: '18px', textDecoration: 'none' }} href="https://www.instagram.com/only.52hzblue/"> <InstagramIcon sx={{ fontSize: '32px' }} /></a>
                    <a style={{ color: 'black', textDecoration: 'none' }} href="https://github.com/UyenQuyenNguyen"><GitHubIcon sx={{ fontSize: '32px' }} /></a>
                </Icon>
            </LeftSide>
            {success ? (
                <ResMain>
                    <img src='../images/Logged.png' alt="" />
                    <a href="/Shop">
                        <IconButton
                            sx={{
                                width: "5rem", height: "5rem", color: "#206f82", marginBottom: "-4rem",
                                backgroundColor: "transparent", boxShadow: "5px 5px 5px #206f82",
                                '&:hover': {
                                    color: "white",
                                    backgroundColor: "#206f82",
                                    boxShadow: "5px 5px 5px black"
                                }
                            }}
                            type="submit"
                        >
                            <ShoppingCartCheckoutIcon />
                        </IconButton>
                    </a>
                </ResMain>
            ) : (
                <ResMain>
                    <img style={{ width: "150px", marginTop: "-5rem" }} src='../images/MyLogo.png' alt="" />
                    <h1>Welcom to Kai</h1>
                    <Form onSubmit={handleSubmit}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' }, display: "flex",
                                flexDirection: "column"
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                label="Email"
                                type="text"
                                variant="standard"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                variant="standard"
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <p ref={errRef} style={{ color: "red", paddingLeft: "7px" }} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </Box>
                        <IconButton
                            sx={{
                                width: "5rem", height: "5rem", color: "#206f82", marginBottom: "-3rem",
                                backgroundColor: "transparent", boxShadow: "5px 5px 5px #206f82",
                                '&:hover': {
                                    color: "white",
                                    backgroundColor: "#206f82",
                                    boxShadow: "5px 5px 5px black"
                                }
                            }}
                            type="submit"
                        >
                            <LoginIcon />
                        </IconButton>
                    </Form>
                    <p className="text-mute" style={{ marginTop: '4rem' }}>You don't have account? <Link to={'/register'} className="font-bold"> Register</Link></p>
                </ResMain>

            )}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status} sx={{ width: '100%', backgroundColor: "#206f82" }}>
                    {message}
                </Alert>
            </Snackbar>
        </Main>
    )
}

export default Register