import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Map } from 'immutable';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { Header } from './components/layout';

import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';
import './App.css';

// Code splitting: https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
    loader: () => import('pages/Home').then(m => m.Home),
    loading: () => null,
});

const DestinationDetail = Loadable({
    loader: () => import('pages/DestinationDetail').then(m => m.DestinationDetail),
    loading: () => null,
});


const HookExample1 = Loadable({
    loader: () => import('pages/Hooks').then(m => m.Example1),
    loading: () => null,
});

const history = createHistory();
history.listen(() => {
    window.scrollTo(0, 0);
});

// We use Immutable that why innit state is a Map not {}
const initialState = Map();

// Logger use for debugging on browser dev tool
const logger = createLogger({
    colors: {
        title: () => 'green',
        nextState: () => '#4CAF50',
    },
    stateTransformer: state => {
        return state.toJS();
    }
});

const epicMiddleware = createEpicMiddleware();
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(logger, epicMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
epicMiddleware.run(rootEpic);

function App () {
    return (
        <Provider store={store}>
            <Router history={history}>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/destination/:slug" component={DestinationDetail}/>
                        <Route path="/hooks" component={HookExample1}/>
                    </Switch>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default App;
