import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    AppRegistry,
    ScrollView,
    Picker,
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Button,
    Text,
    Footer,
    Card,
    CardItem,
    Body
} from 'native-base'
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
    constructor(){
        super()
        this.state = {
            user: "john",
            details: { year: '', day: '', timestamp: '', dateString: '', month: '' }
        }
    }

    handleDetails = (det) => {
        this.setState({ details: det })
    }

    render() {
        return (
            <ScrollView>
                <Picker
                    selectedValue={this.state.user}
                    onValueChange={(itemValue, itemIndex) => this.setState({user: itemValue})}
                >
                    <Picker.Item label="Mark" value="mark" />
                    <Picker.Item label="John" value="john" />
                    <Picker.Item label="Peter" value="peter" />
                </Picker>
                <Calendar
                    current={'2017-03-01'}
                    minDate={'2015-08-10'}
                    maxDate={'2018-05-30'}
                    markedDates={{
                        '2017-03-16': {selected: true, marked: true},
                        '2017-03-19': {marked: true},
                        '2017-03-21': {disabled: true}
                    }}
                    onDayPress={this.handleDetails}
                    monthFormat={'yyyy MM'}
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    hideArrows={true}
                    renderArrow={(direction) => (<Arrow />)}
                    hideExtraDays={true}
                    disableMonthChange={true}
                    firstDay={1}
                />
                <Card>
                    <CardItem header>
                        <Text>Details</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Datestring: {this.state.details.dateString}</Text>
                            <Text>Timestamp: {this.state.details.timestamp}</Text>
                            <Text>Day: {this.state.details.day}</Text>
                            <Text>Month: {this.state.details.month}</Text>
                            <Text>Year: {this.state.details.year}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}