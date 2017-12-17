import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
