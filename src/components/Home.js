import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    ScrollView,
} from 'react-native';

import {
    Calendar,
    CalendarList,
    Agenda
} from 'react-native-calendars'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component {
  render() {
    return (
        <ScrollView>
            <Calendar
                current={'2017-03-01'}
                minDate={'2015-08-10'}
                maxDate={'2018-05-30'}
                onDayPress={(day) => {console.log('selected day', day)}}
                monthFormat={'yyyy MM'}
                onMonthChange={(month) => {console.log('month changed', month)}}
                hideArrows={true}
                renderArrow={(direction) => (<Arrow />)}
                hideExtraDays={true}
                disableMonthChange={true}
                firstDay={1}
            />
        </ScrollView>
    );
  }
}