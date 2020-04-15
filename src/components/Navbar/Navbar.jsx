import React from 'react';
import { AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange }  from '@material-ui/core/colors';
import { Route, Link, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import NewPoll2 from '../MakePoll/NewPoll2';
import Admin from '../Admin/Admin';
import Jeopardy from '../Team/Jeopardy'
import Massie from '../Team/Massie'
import Quinn from '../Team/Quinn'
import './navbar.css'


const useStyles = makeStyles((theme) => ({
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
  inputRoot: {
    color: 'inherit',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
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
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <div className="left">
            <div className="navContainer">
            <img className="navimg" src="/logotm.png" alt=""/>
            </div>
            <h3 className="navH3">Create A New Poll</h3>
            <Link to='/newPoll'>
            <Button type="submit" variant="contained" color="secondary" className="MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedSecondary" >+</Button>
            </Link>
            <Link to='/'>
            <Button type="submit" variant="contained" color="default" className="MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedDefault" >View Polls</Button>
            </Link>
          </div>
          <div className="right">
            <Link to='/quinn'>
            <Button type="submit" variant="contained" color="default" className="MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedDefault" >Edwards</Button>
            </Link>
            <Link to='/jeopardy'>
            <Button type="submit" variant="contained" color="default" className="MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedDefault" >Lowe</Button>
            </Link>
            
            <Link to='/massie'>
            <Button type="submit" variant="contained" color="default" className="MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedDefault" >Massie</Button>
            </Link>
            
            
            <Button type="submit" variant="contained" color="default" className="signout MuiButtonBase-root MuiButton-root MuiButton-contained submit MuiButton-containedDefault" onClick={props.splash}>Sign Out</Button>
            
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
              <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
              
            <Link to='/admin'>
            <Avatar className={classes.orange}>OP</Avatar>
            </Link>
          </div>       
          
        </Toolbar>
      </AppBar>
      <Switch>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/newPoll'>
        <NewPoll2 />
      </Route>
      <Route exact path='/admin'>
        <Admin />
      </Route>
      <Route exact path='/massie'>
        <Massie />
      </Route>
      <Route exact path='/quinn'>
        <Quinn />
      </Route>
        <Route exact Path='/jeopardy'>
          <Jeopardy/>
        </Route>
    </Switch>
    </div>
  );
}