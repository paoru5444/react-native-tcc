import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container } from 'native-base';
import MapView from 'react-native-maps';

// Pages
import FooterMenu from '../Components/Common/FooterMenu'

class Map extends Component {
    static navigationOptions = {
        title: 'Hospitais Próximos'
    };

    constructor (props) {
        super (props)
    }

    render () {
        let { width, height} = Dimensions.get('window');

        return (
            <Container>
                <MapView
                    style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -44.138564,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 + (width / height),
                    }}
                />
                {/*<FooterMenu navigation={this.props.navigation}/>*/}
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    mapView: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute'
    }
});

export default Map;