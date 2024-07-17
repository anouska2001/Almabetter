import React from 'eact';
import { Provider } from 'eact-redux';
import { store } from './store';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Bookmarks from './pages/Bookmarks';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from 'eact-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv-series" component={TVSeries} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
