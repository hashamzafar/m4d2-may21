import books from '../json-data/Romantic.json'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'
import SingleComment from './SingleComment'
import React, { Component } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import AddComment from './AddComment';
import CommentList from './CommentList';
class Home extends Component {
  state ={

  }



  render() {
    return(
        <Container Fluid className="body">
          <Row>
            <Col sm={8}>
            <Row>
                
        {
          books.map( book =>(<Col sm={6} md={4} lg={4}  className='my-3 '>
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
  
</Card>

</Col>) 

          )
        }
        
        </Row>
        </Col>
        <Col sm={4}>
          <Button variant="warning"><SingleBook/></Button>
          <AddComment/>
          {/* <CommentList/> */}
        </Col>
        </Row>
        
</Container>

    
    );
      }
}


    
export default Home
