import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Copyright() {
  return (
    <Typography variant="body2" align="center" color='white'>
      {'Copyright ©'}
        Alquilar Coche
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
