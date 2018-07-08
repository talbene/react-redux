import { Provider } from 'react-redux';
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import AppContainer from './App'
import TestContainer from './containers/test'
 
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/home" component={AppContainer} />
      <Route path="/test" component={TestContainer} />
    </Switch>

    </Router>
  </Provider>)
export default Root

Root.propTypes = {
  store: PropTypes.object.isRequired
}