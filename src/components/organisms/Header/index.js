import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './styles';
// import AppTitle from '../../atoms/AppTitle';

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.header}>
          <Toolbar>
            <Typography variant='title' color='inherit' className={classes.grow}>
              <img src='../../../../img/logo.png' alt='GITSEARCHER' className={classes.logo} />
            </Typography>
            <Button className={classes.headerButton} color='inherit'>ENTRAR</Button>
            <Button className={classes.headerButton} color='inherit'>REGISTRAR</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
