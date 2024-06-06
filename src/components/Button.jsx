import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="contained" className='button'>Add Another Row</Button>
    </Stack>
  );
}