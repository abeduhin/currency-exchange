import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

import css from "./RatesSelector.module.css";

const RatesSelector = ({ onChange }) => {
  const [baseCurrency, setbaseCurrency] = useState('UAH');

  const handleChange = (event) => {
    setbaseCurrency(event.target.value);
    onChange(event.target.value)
  };

  return (
    <Box className={css.box}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Base</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={baseCurrency}
          label="Base"
          onChange={handleChange}
        >
          <MenuItem value="UAH">UAH</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="CHF">CHF</MenuItem>
          <MenuItem value="TRY">TRY</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RatesSelector;

RatesSelector.propTypes = {
  onChange: PropTypes.func.isRequired
}