import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TemplateHome from '../../templates/TemplateHome';

import RepoCard from '../../molecules/RepoCard';

import styles from './styles';

class Search extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <TemplateHome>
        <RepoCard />
      </TemplateHome>
    );
  }
}


Search.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Search);
