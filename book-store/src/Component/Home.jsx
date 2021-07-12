import books from '../json-data/Romantic.json'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'
import SingleComment from './SingleComment'
import React, { Component } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
class Home extends Component {
  state ={

  }



  render() {
    return(
        <Container Fluid className="body">
          <Row>
            <Col sm={6}>
            <Row>
                
        {
          books.map( book =>(<Col sm={6} md={6} lg={6}  className='my-3 '>
              <Card style={{ width: '14rem' }} >
  <Card.Img variant="top" src={book.img} width= '300' height= '300'  />
  <Card.Body className='CardBody'>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.Category}
    </Card.Text>
    
  </Card.Body>
  <Button variant="secondary" className="button" onClick=''> Buy $ {book.price} </Button>
  {/* <SingleBook/> */}
  <Button variant="danger"><SingleBook/></Button>
</Card>

</Col>) 

          )
        }
        
        </Row>
        </Col>
        <Col sm={6}>
        </Col>
        </Row>
        
</Container>

    
    );
      }
}


    
export default Home
