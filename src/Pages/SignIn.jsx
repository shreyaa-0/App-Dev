// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../Components/Assets/Preview.png";
// import './SignIn.css';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState(''); // Added username state
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     // Simulate a sign-in process
//     if (email && password && username) { // Updated validation
//       // Navigate to the Home1 page after successful sign-in
//       navigate('/quiz-intro');
//     } else {
//       // Handle sign-in failure (e.g., show an error message)
//       alert('Please enter username, email, and password');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" className="main-container">
//       <Box className="signin-box">
//         <a href="/">
//           <img src={logo} alt="Logo" className="signin-logo" />
//         </a>
//         <Typography component="h1" variant="h5" className="signin-header">
//           Welcome back!
//         </Typography>
//         <Box className="signin-form">
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Username" // Added username field
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Box>
//         <Box className="signin-links">
//           <Link href="/forgot-password" variant="body2" className="forgot-password">
//             Forgot password?
//           </Link>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSignIn}
//             className="signin-button"
//           >
//             Sign In
//           </Button>
//         </Box>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-footer">
//           Don’t have an account?{' '}
//           <Link href="/sign-up">Sign Up</Link>
//         </Typography>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-or">
//           OR
//         </Typography>
//         <Box className="social-login">
//           <Button fullWidth variant="outlined" className="google-button" startIcon={<GoogleIcon />}>
//             Continue with Google
//           </Button>
//           <Button fullWidth variant="outlined" className="facebook-button" startIcon={<FacebookIcon />}>
//             Continue with Facebook
//           </Button>
//           <Button fullWidth variant="outlined" className="twitter-button" startIcon={<TwitterIcon />}>
//             Continue with X (Twitter)
//           </Button>
//         </Box>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-terms">
//           By signing in you agree to the{' '}
//           <Link href="/terms" variant="body2">
//             Terms of Use
//           </Link>
//           ,{' '}
//           <Link href="/privacy" variant="body2">
//             Privacy Policy
//           </Link>
//           , and{' '}
//           <Link href="/cookie" variant="body2">
//             Cookie Policy
//           </Link>
//           .
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default SignIn;

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Components/Assets/Preview.png";
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (email && password && username) {
      try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          navigate('/quiz-intro');
        } else {
          const error = await response.text();
          alert(`Login failed: ${error}`);
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
        alert('An error occurred during sign-in.');
      }
    } else {
      alert('Please enter username, email, and password');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="main-container">
      <Box className="signin-box">
        <a href="/">
          <img src={logo} alt="Logo" className="signin-logo" />
        </a>
        <Typography component="h1" variant="h5" className="signin-header">
          Welcome back!
        </Typography>
        <Box className="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box className="signin-links">
          <Link href="/forgot-password" variant="body2" className="forgot-password">
            Forgot password?
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/quizintro")}            className="signin-button"
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" className="signin-footer">
          Don’t have an account?{' '}
          <Link href="/sign-up">Sign Up</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" className="signin-or">
          OR
        </Typography>
        <Box className="social-login">
          <Button fullWidth variant="outlined" className="google-button" startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>
          <Button fullWidth variant="outlined" className="facebook-button" startIcon={<FacebookIcon />}>
            Continue with Facebook
          </Button>
          <Button fullWidth variant="outlined" className="twitter-button" startIcon={<TwitterIcon />}>
            Continue with X (Twitter)
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" className="signin-terms">
          By signing in you agree to the{' '}
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

export default SignIn;
