import React from "react";
import BookDetail from "../Book/BookDetail";
import BookService from "../../service/BookService";
import { UpdateBook } from "../Book/UpdateBook";
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
import { User } from '../../interfaces/User';
import UserService from "../../service/UserService";
import { Constant } from "../../constants/Constant";
import { EventEmitter } from "events";
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
  id: 'id' | 'name' | 'email';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
const columns: Column[] = [
  { id: 'id', label: 'user_id', minWidth: 170 },

  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },


];

interface UserListProps {


}
interface UserListState {
  users: Array<User>;
  isLoading: boolean;
}
export class UserList extends React.Component<UserListProps, UserListState>{
  constructor(props: UserListProps) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
    this.remove = this.remove.bind(this);
    // this.getState=this.getState.bind(this);
    const eventEmitter=new EventEmitter();
    const Emitter={
      on: (event:any,fn:any) => eventEmitter.on(event,fn),
      once: (event:any,fn:any) => eventEmitter.once(event,fn),
      off: (event:any,fn:any) => eventEmitter.off(event,fn),
      emit: (event:any,payload:any) => eventEmitter.emit(event,payload)
    }
    Object.freeze(Emitter);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    if(Constant.accessToken){
    UserService.getUser().then((res) => {
      this.setState({ users: res, isLoading: false })
    });
    
  }
  }
  async remove(id: number) {
    UserService.deleteUser(id).then(
      response => {
        this.setState({})
      }
    )
    //  await fetch('http://localhost:8080/delBook',{
    //      method: 'DELETE',
    //      headers:{
    //         'Accept':'application/json',
    //          'Content-Type':'application/json'
    //      }
    //  }).then(()=> {
    //      let updatedBooks=[...this.state.books].filter(i=> i.id !==id);
    //      this.setState({books:updatedBooks});
    //  });

  }

  render() {

    const { users, isLoading } = this.state;
    if (isLoading) {
      return <div>
        
        <LinearProgress color="secondary" />
        <h2>Please Login</h2>
        {isLoading && 
                    <div className="form-group">
                        <Button type="submit" variant="contained" size="medium" color="primary">
                        <Link className="link" to={"/login"} style={{ color:"white"}}>
                            LOGIN
                            </Link>
        </Button>
      
                    </div>
                    }
     

      </div>
    }

    return (

      <div style={{ marginLeft: '450px', marginRight: '450px', padding: '50px', alignContent: 'center' }}>
        <br />
        <h2>
          UserList
                </h2>
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="customized table" style={{ marginLeft: '100px;' }}>
            <TableHead>
              <TableRow>
                
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">email</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell align="center">{user.id}</StyledTableCell>

                  <StyledTableCell align="center">{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  
                  <StyledTableCell align="center"><Button size="small" variant="contained" color="secondary" onClick={() => this.remove(user.id)}>
                    <IconButton size="small" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>Delete</Button>

                    
                    <Button variant="contained" color="primary"><Link className="link" to={"/userDetail/" + user.id} >Detail</Link></Button>
                    <Button variant="contained"
                      color="default" size="small"
                    >
                      <EditIcon />
                      <Link className="link" to={"/updateUser/" + user.id} >Update</Link></Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export default UserList