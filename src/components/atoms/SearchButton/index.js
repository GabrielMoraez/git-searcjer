import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './styles';

class SearchButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button className={classes.button}>
          LOOK UP
        </Button>
      </div>
    );
  }
}

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);
