import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TemplateHome from '../../templates/TemplateHome'

import RepoCard from '../../molecules/RepoCard'

import styles from './styles'

class Search extends React.Component {
  render() {
    return (
      <TemplateHome>
        <RepoCard />
      </TemplateHome>
    )
  }
}

export default withStyles(styles)(Search)
