import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDZ3PcK080A9lTfZiBp_BUqp7HilENwNfQ',
            authDomain: 'react-native-manager-49cc5.firebaseapp.com',
            databaseURL: 'https://react-native-manager-49cc5.firebaseio.com',
            projectId: 'react-native-manager-49cc5',
            storageBucket: 'react-native-manager-49cc5.appspot.com',
            messagingSenderId: '499542702344'
          };
        
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
