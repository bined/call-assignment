import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Listing(prpos) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Lead Name</TableCell>
                        <TableCell>Lead Email</TableCell>
                        <TableCell>Agent Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prpos.data.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell component="th" scope="row">{row.email}</TableCell>
                            <TableCell component="th" scope="row">{row.agent}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Listing;
