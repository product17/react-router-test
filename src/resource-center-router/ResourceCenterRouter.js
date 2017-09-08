import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'; // eslint-disable-line no-unused-vars
import { AssetIndex } from '../asset-index';
import { AssetDisplay } from '../asset-display';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

class ResourceCenterRouter extends Component {
  render () {
    return (
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/resources" component={AssetIndex}/>
            <Route path="/resources/:asset" component={AssetDisplay}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default ResourceCenterRouter;
