"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from '@mui/material/colors';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Cupcake', 305, 3.7, 67, 4.3),
];

export default function CustomizedTables() {
  return (
    <div className='h-[800px] w-[100%] bg-[#171F2a] rounded-3xl p-5 overflow-y-auto'>
      <TableContainer component={Paper} sx={ { background:'transparent' , fontWeight:800} }>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' , fontWeight:800}} > Dessert (100g serving)</TableCell>
              <TableCell sx={{ color: 'white' , fontWeight:800}}  align="right">Calories</TableCell>
              <TableCell sx={{ color: 'white' , fontWeight:800}}  align="right">Fat&nbsp;(g)</TableCell>
              <TableCell sx={{ color: 'white' , fontWeight:800}}  align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell sx={{ color: 'white' , fontWeight:800}}  align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ color:'white' ,  '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ color: 'white' }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: 'white' }} align="right">{row.calories}</TableCell>
                <TableCell sx={{ color: 'white' }} align="right"><img src="../666.png" alt="" className='scale-90 flex items-center justify-center translate-x-6' /></TableCell>
                <TableCell sx={{ color: 'white' }} align="right">{row.carbs}</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}