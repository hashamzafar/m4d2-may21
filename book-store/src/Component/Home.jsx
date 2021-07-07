import books from '../json-data/Romantic.json'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'



const Home = ()=>{
    return(
        <Container Fluid className="body">
            <Row>
                
        {
          books.map( book =>(<Col sm={6} md={4} lg={3}  className='my-3'>
              <Card style={{ width: '14rem' }} >
  <Card.Img variant="top" src={book.img} width= '300' height= '300'  />
  <Card.Body className='CardBody'>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.Category}
    </Card.Text>
    
  </Card.Body>
  <Button variant="secondary" className="button"> Buy $ {book.price}</Button>
</Card>
</Col>) 

          )
        }
        
        </Row>
</Container>

    )}
export default Home
