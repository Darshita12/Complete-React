import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export function BookMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color:"white"}}>
        Book
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{color:'white'}}
      >
        {/* <MenuItem onClick={handleClose}>  <HomeIcon fontSize="large" color="primary"   /><NavLink to="/" color="primary" exact  >Home</NavLink></MenuItem> */}
        <MenuItem onClick={handleClose}> <AddIcon fontSize="large" color="primary"/>
                <NavLink to="/add" color="primary"  exact >Add</NavLink>
</MenuItem>
        <MenuItem onClick={handleClose}><ListIcon fontSize="large" color="primary"/>
                <NavLink to="/List" color="primary"  exact >BookList</NavLink>
</MenuItem>
      </Menu>
    </div>
  );
}
