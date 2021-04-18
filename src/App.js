import Navigation from './components/navigation';
import Login from './pages/login';
import Register from './pages/register';
import HomePage from './pages/home-page';
import './App.css';
import { Route, Switch } from 'react-router';
import './components/css/fonts.css';
import './components/css/reset.css';
import './components/css/responsive.css';
// import "./components/css/all.css";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
