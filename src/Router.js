import React from 'react';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>

                <Scene key="main">
                    <Scene 
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee list" 
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="New Employee" />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
