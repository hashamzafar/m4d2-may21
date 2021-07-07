
import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col"


class SingleBook extends Component {

   state = {
     selected : false ,
      ShowForm:false ,

   }
  render(){ 
    return(
        <Container>
        <Row>
        <Col style={{width: "25vw", marginRight: "10px!important", margin:'10px'}}style={{ border: this.state.selected ? '5px solid black' : 'none' }}>
        <Card onClick={() => this.setState({ selected: !this.state.selected })} style={{ width: '18rem' }}>
   
        <Card.Img variant="top" src= {this.props.img} /> 
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
         
        </Card.Body>
      </Card>
      
        </Col>
        </Row>
        </Container>
    )}
   

}
export default SingleBook
