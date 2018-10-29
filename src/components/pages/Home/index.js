import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TemplateHome from '../../templates/TemplateHome';

import SearchBar from '../../atoms/SearchBar';
import SearchButton from '../../atoms/SearchButton';
import MainText from '../../atoms/MainText';

import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.changeInput = this.changeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeInput(evt) {
    this.funcName = 'changeInput';
    this.setState({
      inputValue: evt.target.value,
    });
  }

  handleClick() {
    const { inputValue } = this.state;
    this.funcName = 'handleClick';
    alert(inputValue);
  }

  render() {
    const { classes } = this.props;

    return (
      <TemplateHome>
        <div className={classes.body}>
          <div className={classes.textWrapper}>
            <MainText />
          </div>
          <div className={classes.searchWrapper}>
            <SearchBar onChange={evt => this.changeInput(evt)} />
            <SearchButton onClick={() => this.handleClick()} />
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
