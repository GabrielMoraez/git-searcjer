import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './assets/css/cards.css';



class Cards extends React.Component {
  
  render(){

    var {link, repositoryName, repositoryDescription, forks, stars, photo, ownerLink, username} = this.props;

    return (
      <div className="CardWrapper">
        <Row className="CardBody">
          <Col md={10} className="repoInfo">
            <div className="InfoWrapper reponame-wrapper"><a href={link}>{repositoryName}</a></div>
            <div className="InfoWrapper desc-wrapper">{repositoryDescription}</div>

            <div className="repoStats">
              <div className="InfoWrapper forks-wrapper"><i className="fas fa-code-branch"></i>{forks}</div>
              <div className="InfoWrapper followers-wrapper"><i className="fas fa-star"></i>{stars}</div>
            </div>
          </Col>

          <Col md={2} className="userInfo">
            <div className="InfoWrapper img-wrapper"><img alt="" src={photo} height="75" width="75" /> </div>
            <div className="InfoWrapper username-wrapper"><a href={ownerLink}>{username}</a></div>
          </Col>

        </Row>
      </div>
    );
  }


}

export default Cards;