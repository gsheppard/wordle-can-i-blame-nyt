import * as React from 'react';
import {
  Box,
} from '@mui/material'

function TabPanel(props) {
  const { children, value, index, sx, ...other } = props;

  return (
    <Box
      sx={sx}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ...sx }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default TabPanel;