import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Form, Label, Item, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Components

let offiline = {
    user: 'offline@tcc.com',
    password: '123456'
};

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#37474F',
        },
        headerTintColor: '#f3f3f3'
    };

    login (form) {
        fetch('', {
            headers: {
            },
            body: JSON.stringify(form)
        })
        .then((repsonse) => response)
        .then(res => {
            console.log(res)
        })
    }
    
    render () {
        console.log(this.props.navigation);

       let { navigate } = this.props.navigation;

        return (
            <Container style={{
                backgroundColor: '#fffafa',
            }}>
                <View style={styles.content}>
                    <Form
                        style={{
                            width: 380, height: 350,
                            marginLeft: 0, top: 20,
                            backgroundColor: '#fffafa',
                            padding: 10,
                        }}
                    >
                        <Text style={{ fontSize: 28, marginBottom: 50,}}>
                            Acessibilidade
                        </Text>
                        <Container style={{ paddingTop: 10, backgroundColor: '#fffafa', }}>
                            {/*<Image source={require('../../../assets/icons/icon.png')} style={{ alignSelf: 'center', position: 'relative', bottom: 50}} />*/}
                            <Label>Usuário</Label>
                            <Item>
                                <Input
                                    onTextChange={(user) => this.setState({ usuario: user})}
                                />
                            </Item>

                            <Text />

                            <Label>Senha</Label>
                            <Item>
                                <Input
                                    style={styles.inputShape}
                                    onTextChange={(password) => this.setState({ senha: password})}
                                />
                            </Item>

                            <Row style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <Col>
                                    <Button
                                        full
                                        style={styles.buttonLogin}
                                        onPress={() => this.props.navigation.navigate('Home', {
                                            navigation: navigate,
                                        })}
                                    >
                                        <Text style={styles.textButtonLogin}>Logar</Text>
                                    </Button>
                                </Col>

                                <Col>
                                    <View style={{ top: 50, }}>
                                        <Text style={{ color: '#333', fontSize: 16, }}>
                                            Cadastre-se
                                        </Text>
                                        <Text style={{ color: '#333', fontSize: 16, top: 5 }}>
                                             Esqueci minha senha
                                        </Text>
                                    </View>
                                </Col>
                            </Row>

                            {/*<Row style={{ justifyContent: 'center', alignItems: 'center', top: 50,}}>*/}
                              {/*<View style={{ alignSelf: 'flex-start'}}>*/}
                                  {/*<Image*/}
                                      {/*style={{ width: 320, height: 70, top: 15,  resizeMode: 'contain'}}*/}
                                      {/*source={require('../../../assets/logar_facebook.png')} />*/}

                                  {/*<Image*/}
                                      {/*style={{ width: 320, height: 70, top: 5,  resizeMode: 'contain'}}*/}

                                      {/*source={require('../../../assets/logar_google.png')} />*/}
                              {/*</View>*/}
                            {/*</Row>*/}
                        </Container>
                    </Form>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 60,
    },

    inputShape: {
        width: 360,
        height: 60,
    },

    buttonLogin: {
        width: 150,
        height: 50,
        top: 20,
        borderRadius: 5,
        backgroundColor: 'teal',
    },

    textButtonLogin: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    }
})

export default Login;