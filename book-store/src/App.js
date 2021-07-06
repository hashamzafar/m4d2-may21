import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar'
import MyJumbotron from './Component/Jumbotron'
import Home from './Component/Home'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" render={(routerProps) => <NavBar {...routerProps} />} />
        <div className="body">
          <MyJumbotron />
          <Home />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
