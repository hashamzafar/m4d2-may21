import books from '../json-data/Romantic.json'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'



const Home = ()=>{
    return(
        <Container>
            <Row>
                
        {
          books.map( book =>(<Col sm={6} md={4} lg={3}  className='m-3'>
              <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={book.img} width= '800' height= '400'  />
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
