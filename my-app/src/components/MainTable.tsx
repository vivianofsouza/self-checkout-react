import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

function createData(
    name: string,
    useCard: boolean,
    useCash: boolean,
    inUse: boolean,
    change: number,
  ) {
    return { name, useCard, useCash, inUse, change };
  }

const rows = [
    createData('A', true, false, true, 40.0),
    createData('B', true, false, true, 40.3),
    createData('C', true, false, true, 60.0),
    createData('D', true, false, true, 40.3),
    createData('E', true, false, true, 30.9),
  ];

export default function MainTable() {
    return (
     
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Card</TableCell>
            <TableCell align="left">Cash</TableCell>
            <TableCell align="left">In Use?</TableCell>
            <TableCell align="left">Change</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left"><Checkbox checked={true}/></TableCell>
              <TableCell align="left"><Checkbox checked={true}/></TableCell>
              <TableCell align="left"><Checkbox checked={true}/></TableCell>
              <TableCell align="left">{row.change}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}