import React, { Component } from 'react';
import  { Container, } from 'native-base';

import FooterMenu from '../Common/FooterMenu'

class Home extends Component {
    constructor (props) {
        super (props)

    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fffafa'
    };


    render () {
        return (

            <Container>
                <FooterMenu navigation={this.props.navigation}/>
            </Container>
            
        )
    }
}

export default Home;