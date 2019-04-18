import React, {Component} from 'react';
import { View } from 'react-native'
import {createStackNavigator, createAppContainer} from "react-navigation";
import {Container} from 'native-base';

// Pages
import Login from './Components/Auth/Login'
import Home from './Components/Home/index'
import Map  from './screens/Map'


class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            autenticado: true,
        }
    }

    render() {

        let navigate = this.props.navigation;

        return (
            <Container>

                <Login navigation={navigate}/>

            </Container>
        );
    }
}

const AppNavigator = createStackNavigator({
    Root: {
        screen: HomeScreen
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home
    },
    Map: {
        screen: Map
    }
});

export default createAppContainer(AppNavigator);
