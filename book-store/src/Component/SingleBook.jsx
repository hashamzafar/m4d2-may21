
import { useState } from 'react'
import CommentArea from './CommentArea'

import { Container, Col, Row, Card, Button } from 'react-bootstrap/'


const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)
  const [showForm, setShowForm] = useState(false)
  //  state = {
  //    selected : false ,
  //     ShowForm:false ,

  //  }

  return (
    <Container>
      <Row>
        <Col style={{ width: "25vw", marginRight: "10px!important", margin: '10px' }} style={{ border: selected ? '5px solid black' : 'none' }}>
          <Button>  <Card onClick={() => setSelected({ selected: !selected })} style={{ width: '18rem' }}>

            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>

            </Card.Body>
          </Card></Button>
          {
            selected && <CommentArea asin={props.asin} />
          }
        </Col>
      </Row>
    </Container>
  )


}
export default SingleBook
