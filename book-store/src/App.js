import logo from './logo.svg';
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
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <WarningSign color='success' text='warning' />
        <SingleBook img={books[1].img} title={books[1].title} />
        <Switch>
          <Route path="/category" exact >
            <Category />
          </Route>
          <Route path="/" exact>
            <Home />
            <div className="body">
              <MyJumbotron />
              <Home />
            </div>
          </Route>



        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
