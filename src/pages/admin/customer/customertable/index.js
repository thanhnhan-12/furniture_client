import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { getAllUser } from '../../../../redux/user/userAction';
import { Box } from '@mui/material';

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

const columns = [
  {
    id: 'fullName',
    label: 'Full Name',
    minWidth: 150,
  },

  {
    id: 'phoneNumber',
    label: 'Phone',
    minWidth: 150,
  },

  {
    id: 'email',
    label: 'Email',
    minWidth: 150,
  },

  {
    id: 'name',
    label: 'Role',
    minWidth: 150,
  },
];

const CustomerTable = () => {
  const dispatch = useAppDispatch();

  const customers = useAppSelector((state) => state.user.userList);
  // console.log('Customers: ', customers);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell sx={{ fontSize: '1.6rem' }}>Name</StyledTableCell>
    //         <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
    //           Phone
    //         </StyledTableCell>
    //         <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
    //           Email
    //         </StyledTableCell>
    //         <StyledTableCell align="" sx={{ fontSize: '1.6rem' }}>
    //           Role
    //         </StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {customers.map((row, index) => (
    //         <StyledTableRow key={index}>
    //           <StyledTableCell component="th" scope="row">
    //             {row.firstName} {row.lastName}
    //           </StyledTableCell>
    //           <StyledTableCell align="">{row.phoneNumber}</StyledTableCell>
    //           <StyledTableCell align="">{row.email}</StyledTableCell>
    //           <StyledTableCell align="">{row.name}</StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
              sx={{
                '& .MuiTableCell-root': {
                  bgcolor: 'rgb(244, 246, 248)',
                  color: 'rgb(33, 43, 54)',
                  fontSize: '1.6rem',
                },
              }}
            >
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value =
                        column.id === 'fullName'
                          ? `${row.firstName} ${row.lastName}`
                          : row[column.id];
                      return (
                        <TableCell
                          key={index}
                          align={column.align}
                          sx={{ fontSize: '1.6rem' }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomerTable;
