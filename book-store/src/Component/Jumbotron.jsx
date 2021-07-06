import {Jumbotron, Button} from 'react-bootstrap'
import '../App.css'



const MyJumbotron = () => {
    return(
        <Jumbotron className='jumbotron'>
  <h1>  Welcome to our Books Store</h1>
  <p>
  Bookselling is a wonderful and fulfilling profession. Owning your own store may seem a natural and attractive idea if you love and know books. However, your love and knowledge have to be combined with business acumen if your bookstore is to succeed. Like any other retail business, you will have to meet the cost of rent, compensation, and utilities, not to mention payments to your vendors.
  </p>
  <p>
    <Button variant="secondary">Learn more</Button>
  </p>
</Jumbotron>
    )
}
export default MyJumbotron

