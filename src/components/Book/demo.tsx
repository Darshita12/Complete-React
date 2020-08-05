import React from "react";
import BookDetail from "./BookDetail";
import BookService from "../../service/BookService";
import { UpdateBook } from "./UpdateBook";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Book } from "../../interfaces/Book";
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
  id: 'name' | 'author';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'author', label: 'Author', minWidth: 100 },

];

interface BookListProps {


}
interface BookListState {
  books: Array<Book>;
  isLoading: boolean;
}
export class BookList extends React.Component<BookListProps, BookListState>{
  constructor(props: BookListProps) {
    super(props);
    this.state = {
      books: [],
      isLoading: true
    };
    this.remove = this.remove.bind(this);
    // this.getState=this.getState.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    BookService.getBook().then((res) => {
      this.setState({ books: res, isLoading: false })
    });

  }
  async remove(id: number) {
    BookService.deleteBook(id).then(
      response => {
        this.setState({})
      }
    )
   

  }

  render() {

    const { books, isLoading } = this.state;
    if (isLoading) {
      return <div>
        <LinearProgress color="secondary" />

      </div>
    }

    return (

      <div style={{ marginLeft: '450px', marginRight: '450px', padding: '50px', alignContent: 'center' }}>
        <br />
        <h2>
          BookList
                </h2>
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="customized table" style={{ marginLeft: '100px;' }}>
            <TableHead>
              <TableRow>
                
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Author</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <StyledTableRow key={book.name}>
                  <StyledTableCell component="th" align="center" scope="row">
                    <img style={{ width: '50px' }} src={book.image}></img>
                    {book.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{book.author}</StyledTableCell>
                  
                  <StyledTableCell align="center">
                    <Button size="small" variant="contained" color="secondary" onClick={() => this.remove(book.id)}>
                    <IconButton size="small" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>Delete</Button>

                   
                    {/* <Button variant="contained" color="primary"><Link className="link" to={"/BookDetail/" + book.id} >Detail</Link></Button> */}
                    {/* <Button variant="contained"
                      color="default" size="small"
                    >
                      <EditIcon />
                      <Link className="link" to={"/updateBook/" + book.id} >Update</Link></Button> */}
                      <Button variant="contained"
                      color="default" size="small"
                    >
                      <EditIcon />
                      <Link className="link" to={"/bookAssign/" + book.id} >Assign</Link></Button></StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default BookList