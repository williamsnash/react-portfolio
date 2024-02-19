import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemedSwitch from './ThemedSwitch';

/**
 * Navigation bar for the application
 */
export default function Navbar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        height: '0.01rem',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,

      }}
    >
      <Box sx={{
        ":after": {
          display: 'block',
          content: '""',
          borderBottom: `solid 0.5vh ${theme.palette.primary.main}`,
          borderRadius: '1.5px',
          transform: 'scaleX(0)',
          transition: 'transform 80ms ease-in-out',
          transformOrigin: '0% 50%',

        },
        ":hover": {
          ":after": {
            transform: 'scaleX(1)',
          }
        }

      }}>
        {theme.palette.mode} mode
        <ThemedSwitch />
        
      </Box>
    </Box>
  )
}