import React, { Component } from 'react';
import Home from './components/Home.js'
import {
    StyleSheet,
    View,
    AppRegistry,
} from 'react-native';

import { 
    NativeRouter,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-native';

import {
    Container,
    Header,
    Content,
    Button,
    Text,
    Footer,
    FooterTab,
    Card,
    CardItem,
    Body,
    Title,
    Subtitle,
} from 'native-base'

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
)


const Approve = withRouter(({ history }) => (
    <Button
        onPress={() => { history.push('/approve') }}
    >
        <Text>Approve</Text>
    </Button>
))

const Calendar = withRouter(({ history }) => (
    <Button
        onPress={() => { history.push('/') }}
    >
        <Text>Calendar</Text>
    </Button>
))

export default class Main extends React.Component {
    constructor(){
        super()
    }
    render() {
        console.log(this.props)
        return (
            <NativeRouter>
                <Container>
                    <Header>
                        <Body style={styles.navItem}>
                            <Title>Title</Title>
                            <Subtitle>Subtitle</Subtitle>
                        </Body>   
                    </Header>
                    <Content>
                        <Route exact path="/" component={Home}/>
                        <Route path="/approve" component={About}/>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Calendar />
                            <Approve />
                        </FooterTab>
                    </Footer>
                </Container>
            </NativeRouter>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})