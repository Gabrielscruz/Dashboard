import './assets/styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login'
import Main from './pages/main'

const App  = () => {
 

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main}  />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
