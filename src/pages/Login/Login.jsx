import React from 'react';
import { useNavigate } from "react-router-dom";

import axiosInstance from '../../axios';

//MUI component imports
import { Container, Box, Avatar, Typography, Button, Link, Paper, Alert, CircularProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 

//Form schema/validator imports
import * as Yup from 'yup';

//Form handler imports
import { Formik, Form } from 'formik';

//Auth import
import { useAuth } from '../../components/AuthProvider/AuthProvider';

//Custom formik form elements
import TextFieldWrapper from '../../components/TextFieldWrapper/TextFieldWrapper';

const validationSchema = Yup.object({
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: Yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

function Login() {

    const { setNewSessionTimed } = useAuth();
    const navigate = useNavigate();

    function navigateToRegister() {
        navigate('/register');
    }

    return (
        // Container centers login card
        <Container component="main" maxWidth="xs"> 
        <Box 
            component="img" 
            alt="Logo"
            sx={{
                height: 175,
                width: 175,
                mb: 0,
            }}
            src="logo_no_bg.png"
        />
        <Paper elevation={4} sx={{ p: 4, borderRadius: 8, }}>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Sign in
                </Typography>

                <Formik
                    initialValues={{...initialValues}}
                    validationSchema={validationSchema}
                    onSubmit={async (values, {setStatus}) => {
                        try {
                            //Dont use login to prevent page reload
                            const response = await axiosInstance.post('/login', values);
                            setNewSessionTimed(response.data, 500);
                        }
                        catch (error) {

                            if (error.response) {
                                setStatus({message: error.response.data['message']});
                            }
                            else {
                                setStatus({message: 'Did not receive response from server'});
                            }
                        }
                    }}
                >
                {({ status, isSubmitting }) => (
                <Form>
                    { (status && status.message) ? <Alert severity="error">{status.message}</Alert> : null }
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <TextFieldWrapper
                            required
                            id="email"
                            name="email"
                            label="Email"
                            sx={{ mb: 2 }}
                        />
                        <TextFieldWrapper
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            sx={{ mb: 2 }}
                        />
                    </Box>
                    { isSubmitting ? 
                            <CircularProgress sx={{ mb: 2}}/> 
                            :
                            <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mb: 2 }}>
                                Submit
                            </Button>
                    }
                </Form>
                )}
                </Formik>
                
                 


                <Link onClick={navigateToRegister} variant="body2">
                    Don't have an account? Sign Up
                </Link>

            </Box>
        </Paper>
        </Container>
    );

}

export default Login;
