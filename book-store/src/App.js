
import './App.css';
import NavBar from './Component/NavBar'
import MyJumbotron from './Component/Jumbotron'
import Home from './Component/Home'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Category from './Component/Category'
import WarningSign from './Component/WarningSign';
import SingleBook from './Component/SingleBook'
import books from './json-data/scifi.json'
import Registration from './Component/Registration'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <WarningSign color='success' text='warning' />

        {/* <Switch> */}
        <Route path="/category" exact >
          <Category />
        </Route>
        <Route path="/" exact>

          <div className="body">
            <MyJumbotron />
            <SingleBook img={books[1].img} title={books[1].title} asin={books[1].asin} />
            <Home />
          </div>
        </Route>
        <Route path="/Rigistration" exact render={(routerProps) => <Registration  {...routerProps} />} />
        {/* </Switch> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
