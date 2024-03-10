import React from 'react';
import { useTheme } from '@mui/material/styles';

//MUI component imports
import { Container, Box, Avatar, Typography, TextField, Button, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 

//Form schema/validator imports
import { object, string } from 'yup';

//Form handler imports
import { useFormik } from 'formik';

const validationSchema = object({
    email: string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

function Login() {
    const theme = useTheme();

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        // Container centers login card
        <Container 
            component="main" 
            maxWidth="xs" 
            sx={{ 
                p: 4, 
                borderRadius: 8,
                boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
            }}>
            <Box display="flex" alignItems="center" flexDirection="column">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                    Sign in
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2, mb: 2 }}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        sx={{ mb: 2 }}

                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{ mb: 2 }}

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mb: 2 }}>
                        Submit
                    </Button>
                </Box>

                <Link href="#" variant="body2">
                    Don't have an account? Sign Up
                </Link>

            </Box>
        </Container>
    );

}

export default Login;
