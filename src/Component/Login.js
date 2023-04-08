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
import { LoginContext } from "./Context/logincontext";

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

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSucess] = useState(false);
    const username = "UyenQuyen"
    const paswrd = "quyen123"
    const {login, setLogin} = React.useContext(LoginContext)

    useEffect(() => {
        userRef.current.focus();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === username && pass === paswrd) {
            setSucess(true);
            setLogin(true);
            console.log(login);
        } else {
            setErrMsg("Invailid username or password");
        }
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
                    <img src={require('../images/Logged.png')} alt="" />
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
                    <img style={{ width: "150px", marginTop: "-5rem" }} src={require('../images/MyLogo.png')} alt="" />
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
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                label="Username"
                                type="text"
                                variant="filled"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                                variant="filled"
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <p ref={errRef} style={{ color: "red", paddingLeft: "7px" }} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </Box>
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
                            <LoginIcon />
                        </IconButton>
                    </Form>

                </ResMain>
            )}
        </Main>
    )
}

export default Register