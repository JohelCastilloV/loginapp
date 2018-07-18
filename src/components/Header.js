import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import './HeaderStyle.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '../../node_modules/@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class Header extends Component {

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes ,authenticated } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button  component={Link} color="inherit"  variant="text" className={classes.flex} to="/">Login App </Button>
            
            <div>
              <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
                >
                { !authenticated && ( <MenuItem component={Link} to="/signin" onClick={this.handleClose}>Sign In </MenuItem>)}
                { !authenticated && ( <MenuItem component={Link} to="/signup" onClick={this.handleClose}>Sign Up </MenuItem>)}
                { authenticated && ( <MenuItem component={Link} to="/signout" onClick={this.handleClose}>Sign Out</MenuItem>)}
                { authenticated && ( <MenuItem component={Link} to="/feature" onClick={this.handleClose}>Feature</MenuItem>)}
                </Menu>
            </div>
            </Toolbar>
        </AppBar>  
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps) (withRouter(withStyles(styles)(Header)));