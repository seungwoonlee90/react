import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <h1>Ethan's react MUI</h1>
        <TextField id="standard-basic" label="id" variant="standard" />
        <TextField id="standard-basic" label="password" variant="standard" />
        <Button variant="outlined">Log In</Button>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </Container>
    </div>
  );
}

export default App;
