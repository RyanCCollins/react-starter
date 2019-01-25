import React from 'react'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'

import { Main } from 'screens'
import store from './store'
import theme from './theme'

const App = () => (
  <Provider store={store}>
    <Grommet theme={theme} full>
      <Main />
    </Grommet>
  </Provider>
)

export default App
