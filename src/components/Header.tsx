import React from "react";
import { AppBar, Toolbar, IconButton, Button, InputBase } from "@material-ui/core";
import { BookMenu } from "./Menu/BookMenu";
import { UserMenu } from "./Menu/UserMenu";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { Constant } from "../constants/Constant";

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm  navbar-dark">
      <AppBar position="static">
    
        
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
            <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link"  to="/"style={{ color:"white"}}>Home </Link></Button>
  
            </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            
        <BookMenu />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            
        <UserMenu />
          </IconButton>
          {/* {if(Constant.accessToken) */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            
          <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/login"} style={{ color:"white"}}>Login </Link></Button>

          </IconButton>
          {/* // } */}
            
          {Constant.accessToken && 
        //    <IconButton edge="start" color="inherit" aria-label="menu">
        
          <Button aria-controls="simple-menu" aria-haspopup="true" style={{ color:"white", marginTop:'5px'}}><Link className="link" to={"/logout"} style={{ color:"white"}}>Logout</Link></Button>

        //   </IconButton>
           }
          <IconButton edge="start" color="inherit" aria-label="menu">
        
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
              placeholder=" ⌕ Search…"

              // classes={{
              //   root: classes.inputRoot,
              //   input: classes.inputInput,
              // }}
              inputProps={{ 'aria-label': 'search' }}
            />
          
          </IconButton>
        </Toolbar>
       
      </AppBar>
      
      </nav>
        )
    }
}