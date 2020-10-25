import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header() {
    return (
    <div id="app-header">
      <AppBar position="static">
        <Toolbar>
          Lit Ratings
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
