import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectOptions = ({ value, onChangeHandler, optionArray = [] }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Select Location</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label='Select Location'
          onChange={onChangeHandler}
        >
          {optionArray.map((opt, i) => (
            <MenuItem key={i} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOptions;
