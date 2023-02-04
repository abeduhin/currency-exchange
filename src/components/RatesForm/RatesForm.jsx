import { nanoid } from "@reduxjs/toolkit";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';


const RatesForm = ({data}) => {
    
    const arrayOfRates = Object.entries(data.quotes);

    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Actual exchange rate</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {arrayOfRates.map((item) => (
                <TableRow
                key={nanoid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item[0].slice(-3)}
                </TableCell>
                <TableCell align="right">{item[1]}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
};

export default RatesForm;

RatesForm.propTypes = {
    data: PropTypes.shape({
        quotes: PropTypes.objectOf(PropTypes.number).isRequired,
        source: PropTypes.string.isRequired,
        success: PropTypes.bool.isRequired,
        timestamp: PropTypes.number.isRequired
    })
};