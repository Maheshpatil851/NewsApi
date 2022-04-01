
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Switch>
          <Route exact path="/general"><News key='general' country='in' category='general' pageSize = '3' /></Route>
          <Route exact path="/business"><News key='business' country='in' category='business' pageSize = '3' /></Route>
          <Route exact path="/entertainment"><News key='entertainment'  country='in' category='entertainment' pageSize = '3' /></Route>
          <Route exact path="/health"><News key='health' country='in' category='health' pageSize = '3' /></Route>
          <Route exact path="/science"><News key='science' country='in' category='science' pageSize = '3' /></Route>
          <Route exact path="/sports"><News key='sports' country='in' category='sports' pageSize = '3' /></Route>
          <Route exact path="/technology"><News key='technology' country='in' category='technology' pageSize = '3' /></Route>
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
