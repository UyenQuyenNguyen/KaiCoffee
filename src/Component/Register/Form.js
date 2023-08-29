import { Button, FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from "react";
import React from "react";
import { signUp } from "../../services/auth";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 100%;
  padding: 24px;
`

const FormCtrl = styled(FormControl)`
  margin-bottom: 20px !important;
  width: 100%;
`

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = (props) => {
  const { theme } = props
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const { firstName, lastName, email, password, passwordRepeat } = user;


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const addUserDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp(user);
      const { status, message } = res.data;
      setStatus(status)
      setMessage(message)
      setOpen(true);
      setTimeout(() => {
        navigate('/sign_in')
      }, 3000);
      
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
  };


  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <MainForm style={{ backgroundColor: theme.palette.background.default }}
      onSubmit={addUserDetails} >
      <div className="flex-column-center">
        <img src="../images/MyLogo.png" style={{ width: '120px', marginBottom: '20px' }} />
        <h2>BECOME A MEMBER</h2>
      </div>
      <FormStyle>
        <div style={{ display: 'flex', width: '100%' }}>
          <FormCtrl style={{ marginRight: '8px ' }}>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input id="first-name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange} />
            {errors.firstName && <p className="form-err">{errors.firstName}</p>}
          </FormCtrl>
          <FormCtrl>
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <Input id="last-name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange} />
            {errors.lastName && <p className="form-err">{errors.lastName}</p>}
          </FormCtrl></div>
        <FormCtrl>
          <InputLabel htmlFor="email" >Email address</InputLabel>
          <Input id="email"
            name="email"
            value={email}
            onChange={handleInputChange} />
          {errors.email && <p className="form-err">{errors.email}</p>}
        </FormCtrl>
        <FormCtrl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange} />
          {errors.pass && <p className="form-err">{errors.pass}</p>}
        </FormCtrl>
        <FormCtrl>
          <InputLabel htmlFor="password-repeat">Password Repeat</InputLabel>
          <Input id="password-repeat"
            name="passwordRepeat"
            type="password"
            value={passwordRepeat}
            onChange={handleInputChange} />
          {errors.passRepeat && <p className="form-err">{errors.passRepeat}</p>}
        </FormCtrl>
        <Button type="submit">Register</Button>
      </FormStyle>
      <p className="text-mute">Have an account? <Link to={'/sign_in'} className="font-bold">Sign In</Link></p>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%', backgroundColor: "#206f82" }}>
          {message}
        </Alert>
      </Snackbar>
    </MainForm>

  );
};
export default Form;
