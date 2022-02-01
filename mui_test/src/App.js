import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Ethan's react MUI</h1>
      <TextField id="standard-basic" label="id" variant="standard" />
      <TextField id="standard-basic" label="password" variant="standard" />
      <Button variant="outlined">Log In</Button>
    </div>
  );
}

export default App;
