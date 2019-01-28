import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grommet } from 'grommet'

import { Home, About } from 'screens'
import store from './store'
import theme from './theme'

const App = () => (
  <Provider store={store}>
    <Grommet theme={theme} full>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </Grommet>
  </Provider>
)

export default App
