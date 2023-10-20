import CloseIcon from '@mui/icons-material/Close';
import { AlertTitle } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TransitionAlerts({ openAlert, setOpenAlert }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setOpenAlert(false);
  };

  return (
    <Box sx={{ width: '100%', mt: '2rem' }}>
      <Collapse in={open}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, fontSize: '1.2rem' }}
        >
          <AlertTitle>Warning</AlertTitle>
          Please select product or address before payment
          <Link
            to="/address"
            style={{ textDecoration: 'none', fontSize: '1.6rem', display: 'block' }}
          >
            Add Address
          </Link>
        </Alert>
      </Collapse>
    </Box>
  );
}
