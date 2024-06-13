import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons2({ onClick }) {
  return (
    <Button variant="contained" className='button' onClick={onClick}>Add Another Row</Button>
  );
}
