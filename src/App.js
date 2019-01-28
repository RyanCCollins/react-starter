import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'

import { Main } from 'screens'
import store from './store'
import theme from './theme'

const App = () => (
  <Provider store={store}>
    <Grommet theme={theme} full>
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    </Grommet>
  </Provider>
)

export default App
