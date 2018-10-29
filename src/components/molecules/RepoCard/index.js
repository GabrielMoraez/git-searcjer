import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import styles from './styles';

function RepoCard(props) {
  const { classes } = props;


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          react
        </Typography>
        <Typography className={classes.user}>
          facebook
        </Typography>
        <Typography className={classes.desc}>
          A declarative, efficient, and flexible JavaScript library for building user interfaces.
        </Typography>
        <Typography component='p' className={classes.tech}>
          JavaScript
        </Typography>
        <Typography className={classes.favs}>
          <i className='fas fa-star' />
          <span className={classes.text}>114266</span>
        </Typography>
        <Typography className={classes.forks}>
          <i className='fas fa-code-branch' />
          <span className={classes.text}>20854</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

RepoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RepoCard);
