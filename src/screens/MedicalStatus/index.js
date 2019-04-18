import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container } from 'native-base';

// Pages
import FooterMenu from '../Components/Common/FooterMenu'

class Map extends Component {
    static navigationOptions = {
        title: 'Hospitais Próximos'
    };

    constructor (props) {
        super (props)
    }

    componentWillMount () {
        this.get();
    }

    get () {
        fetch('http://127.0.0.1:3333/users', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response)
            .then(response => {
                console.warn(response)
            })
    }

    render () {
        return (
            <Container>

                <FooterMenu navigation={this.props.navigation}/>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default Map;