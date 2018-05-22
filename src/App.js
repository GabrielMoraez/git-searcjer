import React from 'react';
import './components/assets/css/dashboard.css'
import Cards from './components/cards.js'
import {Col, Row} from 'react-bootstrap'



class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentWillMount() {
    fetch("https://api.github.com/search/repositories?q=language:Javascript&sort=stars")
    .then(response => 
      response.json()
    )
    .then(response => {
      this.setState({repos: response.items});
      console.log(this.state.repos);  
    });
  };

 renderItems(item) {
   return item.map((li, i) =>
      (<Cards key={li.id} username={li.owner.login} repositoryName={li.name}
        repositoryDescription={li.description} stars={li.watchers}
        forks={li.forks} photo={li.owner.avatar_url} link={li.html_url}
        />)
   );
  }

  render(){
    return (
      <Row>
        <Col md={2}>
        </Col>
        <Col md={8} className="inner-container-dashboard">
          {this.renderItems(this.state.repos)}
        </Col>
        <Col md={2}>
        </Col>
      </Row>
    )
  }

}

export default Dashboard;