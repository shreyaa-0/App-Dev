import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import React from 'react';
import logo from "../Components/Assets/Preview.png";
import './SignUp.css';



const SignUp = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const navigate = useNavigate('');

  // const handleSignUp = async () => {
  //   if (email && password && name) {
  //     try {
  //       const response = await axios.post('http://localhost:8080/api/register', {
  //         email: email,
  //         password: password,
  //         name: name
  //       });

  //       if (response.status === 201) {
  //         // Navigate to the SignIn page after successful sign-up
  //         navigate('/sign-in');
  //       }
  //     } catch (error) {
  //       console.error('Error during sign-up:', error);
  //       alert('Email already registered');
  //     }
  //   } else {
  //     alert('Please enter all required fields');
  //   }
  // };
  return (
    <Container component="main" maxWidth="xs" className="main-container">
      <Box className="signup-box">
        <a href="/">
          <img src={logo} alt="Logo" className="signup-logo" />
        </a>
        <Typography component="h1" variant="h5" className="signup-header">
          Create Your Account
        </Typography>
        <Box className="social-login">
          <Button fullWidth variant="contained" className="google-button" startIcon={<GoogleIcon />}>
            Sign Up with Google
          </Button>
          <Button fullWidth variant="contained" className="facebook-button" startIcon={<FacebookIcon />}>
            Sign Up with Facebook
          </Button>
          <Button fullWidth variant="contained" className="twitter-button" startIcon={<TwitterIcon />}>
            Sign Up with Twitter
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" className="signup-footer">
          Already have an account?{' '}
          <Link href="/sign-in" variant="body2">
            Sign in
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" className="signup-terms">
          By signing up you agree to the{' '}
          <Link href="/terms" variant="body2">
            Terms of Use
          </Link>
          ,{' '}
          <Link href="/privacy" variant="body2">
            Privacy Policy
          </Link>
          , and{' '}
          <Link href="/cookie" variant="body2">
            Cookie Policy
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;