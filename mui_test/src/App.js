import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs">
        <h1>Ethan's react MUI</h1>
        <TextField id="email"
        margin="normal"
        label="Email Address"
        autoComplete="email"
        required
        fullWidth
        autoFocus
        name="email"
        variant="standard" />
        <TextField id="password"
        margin="normal"
        label="Password"
        type="password"
        fullWidth
        name="password"
        variant="standard" />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Log In</Button>
        <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
