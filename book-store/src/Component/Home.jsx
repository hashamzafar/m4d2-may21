import books from '../json-data/Romantic.json'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'



const Home = ()=>{
    return(
        <Container>
            <Row>
                
        {
          books.map( book =>(<Col sm={6} md={3}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} width= '100' height= '400'  className=''/>
  <Card.Body className='CardBody'>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.Category}
    </Card.Text>
    <Button variant="primary"> Buy{book.price}</Button>
  </Card.Body>
</Card></Col>) 

          )
        }
        
        </Row>
</Container>

    )}
export default Home
