import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Footer, Header, FooterTab, Button } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Icons
const maps = <FontAwesome5 name={'map-marked-alt'} solid size={30} />;
const body = <FontAwesome5 name={'user-injured'} solid size={30} />;
const medicalStatus = <FontAwesome5 name={'briefcase-medical'} solid size={30} />;
const user = <FontAwesome5 name={'user-circle'} solid size={30} />;

class FooterMenu extends Component {
    // Models

    // Display
    render() {
        let navigate = this.props.navigation.navigate;

        return (
            <Container>
                    <Content />
                        <Footer>
                             <FooterTab style={{ backgroundColor:"#F5F5F5" }}>
                                <Button
                                    onPress={() => this.props.navigation.navigate('Map', {
                                        navigation: this.props.navigation.navigate,
                                    })}
                                >
                                    {maps}
                                </Button>

                                <Button>
                                    {body}
                                </Button>

                                <Button onPress={() => this.props.navigation.navigate('MedicalStatus', {
                                    navigation: this.props.navigation.navigate,
                                })}>
                                    {medicalStatus}
                                </Button>

                                <Button onPress={() => this.props.navigation.navigate('Login', {
                                    navigation: this.props.navigation.navigate,
                                })}>
                                    {user}
                                </Button>
                             </FooterTab>
                         </Footer>
             </Container>
 
        );
    }
}

export default FooterMenu;