import React, { Component } from 'react'
import { Container, Header, Body, Right, Button, Title } from 'native-base';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const miniMenu = <FontAwesome5 name={'ellipsis-v'} solid size={25} color={'#fff'} />;


// Components

class NavBar extends Component {
    constructor (props) {

        super(props);
    }

    render () {
        return (
            <Container>

                <Header style={{ backgroundColor: '#37474F', }} androidStatusBarColor={'#263238'}>

                <Body>
                    <Title>{this.props.data.name}</Title>
                </Body>

                <Right>

                    <Button transparent>
                        {miniMenu}
                    </Button>

                </Right>

                </Header>
            </Container>
        );
    }
}

export default NavBar;