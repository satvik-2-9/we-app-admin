import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Header from './Header';
import Login from './Login';
import './App.css';
import AdminPanel from './AdminPanel';
function App() {
  return (
    <>
    <Header/>  
      <Router>
        <Switch>
          <Route path='/' component={Login}>
         </Route>
         <Route path='/adminpanel' component={AdminPanel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
