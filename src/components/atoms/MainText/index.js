import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

class MainText extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Typography component='p' className={classes.text}>
          Bem vindo ao GITSEARCHER
        </Typography>
        <Typography component='p' className={classes.text}>
          Este é um projeto de estudo de Gabriel Moraes
        </Typography>
        <Typography component='p' className={classes.text}>
          Aqui você pode procurar por todos os repositórios públicos do GitHub e do BitBucket
        </Typography>
      </div>
    );
  }
}

MainText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainText);
