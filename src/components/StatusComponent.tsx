import React from "react";
import { Status } from "../interfaces/Status";
import BookService from "../service/BookService";
import { LinearProgress, Table, TableHead, TableRow, TableBody } from "@material-ui/core";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        marginLeft: '100px',
      },
    },
  }),
)(TableRow);
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      marginLeft: '100px',
    },
  }),
)(TableCell);
const useStylesTable = makeStyles({
  table: {
    minWidth: 700,
  },
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);
interface Column {
  id: 'date' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
const columns: Column[] = [
  { id: 'date', label: 'date', minWidth: 170 },
  { id: 'status', label: 'status', minWidth: 100 },

];
interface AssignedBookProps {

}
interface AssignedBookState {
  status: Array<Status>;
  isLoading: boolean;
}
export class StatusComponent extends React.Component<AssignedBookProps, AssignedBookState>{

  constructor(props: AssignedBookProps) {
    super(props);
    this.state = {
      status: [],
      isLoading: true
    }
  }
  componentDidMount() {
    BookService.assignedStatus().then(res => {
      
      this.setState({ status: res, isLoading: false });
    })
  }
  render() {
    const { status, isLoading } = this.state;
    if (isLoading) {
      return <div>
        <LinearProgress color="secondary" />

      </div>
    }
    return (
      <div style={{ marginLeft: '450px', marginRight: '450px', padding: '50px', alignContent: 'center' }}>
        <br />
        <h2>
          Details
                </h2>
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="customized table" style={{ marginLeft: '100px;' }}>
            <TableHead>
              <TableRow>

                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {status.map((sta) => (
                <StyledTableRow key={sta.status}>

                  <StyledTableCell align="center">{sta.issuedDate}</StyledTableCell>
                  <StyledTableCell align="center">{sta.status}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}