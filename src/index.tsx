import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddBook from './components/Book/AddBook';
import BookList from './components/Book/BookList';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import { NotFound } from './components/NotFound';
import BookDetail from './components/Book/BookDetail';
import { UpdateBook } from './components/Book/UpdateBook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Constant } from "./constants/Constant";

import {BookMenu} from './components/Menu/BookMenu';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import UserDetail from './components/User/UserDetail';
import UpdateUser from './components/User/UpdateUser';
import { UserMenu } from './components/Menu/UserMenu';
import { StatusComponent } from './components/StatusComponent';
import AssignedBook from './components/AssignedBook';
import { BookAssign } from './components/BookAssign';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Header } from './components/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);
ReactDOM.render(

  <React.StrictMode>

    <Router>
    <nav className="navbar navbar-expand-sm  navbar-dark">
      <AppBar position="static">
    
        <Header />
        {/* <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
        <BookMenu />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            
        <UserMenu />
          </IconButton>
        
          <IconButton edge="start" color="inherit" aria-label="menu">
            
          <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/login"} style={{ color:"white"}}>Login </Link></Button>

          </IconButton>
          */}
            
         
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
        
          <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/logout"} style={{ color:"white"}}>Logout</Link></Button>

          </IconButton>  */}
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
        
        <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/addUser"} style={{ color:"white"}}>Register</Link></Button>
        
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        
        <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/status"} style={{ color:"white"}}>Details</Link></Button>
        
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        
        <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/assigned"} style={{ color:"white"}}>Assigned</Link></Button>
        
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
        
              <SearchIcon />
            
            <InputBase style={{color:'white'}}
              placeholder=" ⌕ Search…" */}

              {/* // classes={{
              //   root: classes.inputRoot,
              //   input: classes.inputInput,
              // }}
              inputProps={{ 'aria-label': 'search' }}
            />
          
          </IconButton>
        </Toolbar> */}
       
      </AppBar>
      
      </nav>
      <div className="mdc-menu mdc-menu-surface">

        <Switch >
          <Route exact path="/" component={App} />
          <Route exact path="/add" component={AddBook} />
          <Route path="/List" component={BookList} />
          <Route path="/BookDetail/:id" render={(props) => <BookDetail id={props.match.params.id} />} />
          <Route path="/updateBook/:id" render={(props) => <UpdateBook id={props.match.params.id} />} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/addUser" component={AddUser} />
          <Route path="/userList" component={UserList} />
          <Route path="/userDetail/:id" render={(props) => <UserDetail id={props.match.params.id} />} />
          <Route path="/updateUser/:id" render={(props) => <UpdateUser id={props.match.params.id} />} />
          <Route path="/status" component={StatusComponent} />
          <Route path="/assigned" component={AssignedBook} />
          <Route path="/bookAssign/:id" render={(props) => <BookAssign id={props.match.params.id} />}  />
          <Route path="/return/:id" render={(props) => <BookAssign id={props.match.params.id} />}  />

          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
