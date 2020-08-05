import React from "react";
import { Book } from "../interfaces/Book";
import BookService from "../service/BookService";
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
import { Constant } from "../constants/Constant";
import UserService from "../service/UserService";
import { User } from "../interfaces/User";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
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
interface AssignedBookProps{
    userId:number;
}
interface AssignedBookState{
    books:Array<Book>
    isLoading:boolean;
    user:User;
}
export class AssignedBook extends React.Component<AssignedBookProps,AssignedBookState>{
    user:User;
    constructor(props:AssignedBookProps){
        super(props);
     this.user={id:0,name:'',email:'',password:'',role:''}
        this.state={
            books:[],
            isLoading:true,
            user:{id:0,name:'',email:'',password:'',role:''}
        }
    }
    
    componentDidMount(){
       // const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwayIsImV4cCI6MTU5NjI4NzAyOCwiaWF0IjoxNTk2MjY5MDI4fQ.jXBvl6_3GB1k6kLK0eJIYybjmmBrvbDvCEXIxCdnoavlPA8rJNQ8uHQ1sJq3yPkoP0R9HGb0ld_X96F-PlXmog';
        const base64Url= Constant.accessToken.split('.')[1];
        const base64=base64Url.replace('-','+').replace('_','/');
       const name= JSON.parse(window.atob(base64));
       console.log(name.sub);
       
       UserService.getUserByName(name.sub).then((res)=>
        {console.log(res)
            this.user=res;
            this.setState({user:res})
            BookService.assignedBook(this.state.user.id).then((res)=>
        this.setState({books:res, isLoading:false}))
        });
              
    }
    async return(book:Book) {
        const base64Url= Constant.accessToken.split('.')[1];
        const base64=base64Url.replace('-','+').replace('_','/');
       const name= JSON.parse(window.atob(base64));
       console.log(name.sub);
       
        UserService.getUserByName(name.sub).then((res)=>
        {console.log(res)
            this.user=res;
            this.setState({user:res})
            BookService.returnBook(this.state.user.id,book).then(res=>console.log(res));
        });
        
        
    }
    render(){
    //     const current_user=jwt_decode(Constant.accessToken);
    
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
             Assigned BookList
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
                      <Button size="small" variant="contained" color="secondary" onClick={() => this.return(book)}>
                    Return</Button>                      </StyledTableCell>
                      </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
    }
}
export default AssignedBook;