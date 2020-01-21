import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './Components/layout/Navbar';
import Index from './Components/layout/Index';
import {Provider} from './Context'
import Lyrics from './Components/tracks/Lyrics'
import Background from '../src/theme.jpg'

var styling ={
  width:"100%",
  // height:"400%",
  backgroundImage:`url(${Background})`,
  WebkitTransition: 'all'
}
function App() {
  return (
    <section style={styling}>
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index}/>  
            <Route exact path="/lyrics/track/:id" component={Lyrics}/>  
          </Switch>
        </div>
      </React.Fragment >
    </Router>
    </Provider>
    </section>
  );
}

export default App;
