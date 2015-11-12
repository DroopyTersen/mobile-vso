import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import Api from '../data/api';
import initialState from '../src/store/initialState';
import rootReducer from '../src/reducers';

var api = new Api("");

var setState = function(prevState, newState) {
    return Object.assign({}, prevState, newState);
}
export var createIndex = function(req, res) {
    api.getMyTasks().then( tasks => {
        var state = setState(initialState, {view: "myTasks", myTasks: tasks });
        var store = createStore(rootReducer, state);
        
        const html = renderToString(
            <Provider store={store}>
              <App />
            </Provider>
        )

        // Grab the initial state from our Redux store
        const initialState = store.getState()

        // Send the rendered page back to the client
        res.send(renderFullPage(html, initialState))
    })
}
 
export var createLogin = function(req, res) {
    var state = setState(initialState, { view: "login" });
    var store = createStore(rootReducer, state);
    
    const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
    )

    // Grab the initial state from our Redux store
    const initialState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, initialState))
}

var renderFullPage = function(html, initialState) {
    return `
    <!DOCTYPE html>
    <html>
        
        <head>
            <title>Mobile VSO</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        
        <body>
            <div id="root">${html}</div>
            <script>
                window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/static/bundle.js"></script>
        </body>
    
    </html>
    `;
}