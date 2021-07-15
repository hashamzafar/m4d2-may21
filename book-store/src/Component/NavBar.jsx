import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <>

      <Navbar bg="dark" variant="dark">
        <Link to='/' className='Link'>
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <Link to="/" className="m-2 Link" >
            Home
          </Link>
          <Link to="/category" className="m-2 Link" >Category</Link>
          <Link to="/pricing" className="m-2 Link" >Cart</Link>
          <Link to='/Rigistration' className="m-2 Link" >
            Risgistration
          </Link>
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



