import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TemplateHome from '../../templates/TemplateHome';

import SearchBar from '../../atoms/SearchBar';
import SearchButton from '../../atoms/SearchButton';
import MainText from '../../atoms/MainText';

import styles from './styles';


class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <TemplateHome>
        <div className={classes.body}>
          <div className={classes.textWrapper}>
            <MainText />
          </div>
          <div className={classes.searchWrapper}>
            <SearchBar />
            <SearchButton />
          </div>
        </div>
      </TemplateHome>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
