import {Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap'



const NavBar = ()=>{
return (

<>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Book Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/Category">Category</Nav.Link>
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



