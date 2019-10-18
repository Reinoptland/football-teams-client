import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import TeamListContainer from './components/TeamListContainer'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link to='/'> Home </Link>
          <Link to='/teams'> Teams </Link>
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={TeamListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App
