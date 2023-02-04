import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const initialState = {
  amount: null,
  from: '',
  to: ''
};

const ExchangeForm = ({isCalculation}) => {

  const [inputValue, setInputValue] = useState('');
  const [conversion, setConversion] = useState(initialState);
  const arrayOfValue = inputValue.split(' ');
  
  useEffect(() => {

    if(arrayOfValue.length === 4) {

      const amount = Number(arrayOfValue[0]);
      const from = arrayOfValue[1].toUpperCase();
      const to = arrayOfValue[3].toUpperCase();
      setConversion({
        amount,
        from,
        to
      })
    // eslint-disable-next-line
  }}, [inputValue])

  const handleChange = ({target}) => {
   if (target.value.length === 0) {
    setConversion(initialState);
   }
   return setInputValue(target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    isCalculation(conversion);
    return (setInputValue(''),
            setConversion(initialState));
  };

    return (
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
      component="form"
      onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            minWidth: 300,
            height: 80,
            marginBottom: 1
          }}
          label='Please enter: example "20 eur in uah"'
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
  
        />
        <Button 
        type='submit' 
        sx={{
          alignSelf: 'center',
          width: 150     

          
        }}
        variant="contained" color="success">
        Start conversion</Button>
      </Box>
    )
};

export default ExchangeForm;

ExchangeForm.propTypes = {
  isCalculation: PropTypes.func.isRequired
}
