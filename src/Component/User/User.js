import React, { useContext, useState } from "react";
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { CustomerContext } from "../Context/customercontext";
import Box from "@mui/material/Box";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Height = styled.div`
    min-height: 70vh;
    display: flex;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
`

const LeftSide = styled.div`
    width: 50vw;
    height: 100%;

`
const RightSide = styled.div`
    width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const Form = styled.form`
    width: 35vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
`

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Buy = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #206f82;
    width: 7rem;
    height: 2.5rem;
    cursor: pointer;
`

const User = () => {
    const [errMsg, setErrMsg] = useState("");

    const { address, setAddress, name, setName, phone, setPhone, setCofirm } = useContext(CustomerContext)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" || address !== "" || phone !== "") {
            setCofirm(true)
        } else {
            setErrMsg("Please enter full information");
        }
    }

    return (
        <Container maxWidth="md" sx={{ height: "100%", paddingTop: '7rem', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' }}>
            <Height>
                <LeftSide>
                    {isLoaded ? (<Map />) : (<div>Loading...</div>)}
                </LeftSide>
                <RightSide>
                    <img style={{ width: '10rem' }} src={require("../../images/MyLogo.png")} alt="" />
                    <Form onSubmit={handleSubmit}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch', color: '#206f82' }, display: "flex",
                                flexDirection: "column"
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="fullname"
                                autoComplete="off"
                                label="Full Name"
                                type="text"
                                variant="standard"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <TextField
                                id="address"
                                label="Address"
                                type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                variant="standard"
                                required
                                InputLabelProps={{ sx: { color: '#206f82' } }}
                            />
                            <PhoneInput
                                id="phonenumber"
                                type="text"
                                defaultCountry="VN"
                                onChange={setPhone}
                                value={phone}
                                style={{ margin: "24px 0" }}

                            />
                            <p style={{ color: "red", paddingLeft: "7px", marginBottom: "14px" }} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </Box>
                        <Link to="/Bill"><Buy>Submit</Buy></Link>
                    </Form>
                </RightSide>
            </Height>
        </Container>
    )
}
export default User


function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <Marker position={center} />
        </GoogleMap>
    );
}