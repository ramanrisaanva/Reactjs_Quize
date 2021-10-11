import React from 'react'
import NavBar from './NavBar';
import InfoCollecter from './InfoCollecter';
import PlayArea from './PlayArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
     <>
  <Router>
      <NavBar/>
     <Switch>
          <Route exact path="/">
            <InfoCollecter/>
          </Route>
          <Route exact path="/PlayArea">
             <PlayArea/>
          </Route>         
     </Switch>
    </Router>
     </>
    )
}

export default App
