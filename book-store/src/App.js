import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar'
import MyJumbotron from './Component/Jumbotron'
import Home from './Component/Home'
import Footer from './Component/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <MyJumbotron />
        <Home />
      </div>

      <Footer />
    </div>
  );
}

export default App;
