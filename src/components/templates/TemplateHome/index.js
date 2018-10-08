import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../../organisms/Header';

import styles from './styles';

const TemplateHome = (props) => {
  const { children } = props;
  const { classes } = props;

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.main}>
        <Header />
        {children}
      </main>
    </Fragment>
  );
};

TemplateHome.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateHome);
