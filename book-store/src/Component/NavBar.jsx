import {Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NavBar = ()=>{
return (

<>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Book Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/category">Category</Link>
      <Nav.Link href="#pricing">Cart</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  
</>


)
}

export default NavBar



