import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { getAllUser } from '../../../../redux/user/userAction';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomerTable = () => {
  const dispatch = useAppDispatch();

  const customers = useAppSelector((state) => state.user.userList);
  // console.log('Customers: ', customers);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontSize: '1.6rem' }}>Name</StyledTableCell>
            <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
              Phone
            </StyledTableCell>
            <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
              Email
            </StyledTableCell>
            <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
              Role
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.firstName} {row.lastName}
              </StyledTableCell>
              <StyledTableCell align="">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="">{row.email}</StyledTableCell>
              <StyledTableCell align="">{row.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
