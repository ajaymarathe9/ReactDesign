/* eslint-disable quotes */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Container, Header,  Button, Left, Icon, Title, Body, FooterTab, Right, Content, Text, Footer, Accordion, ActionSheet,  DatePicker} from 'native-base';
const dataArray = [
  {title: "First Element", content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."},
  {title: "Second Element", content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."},
]

// import ActionSheetEX from './components/ActionSheet.js';
// import MainContent from './components/MainContent.js';
// import HandleText from './components/HandleText.js';
import Getaxios from './components/Getaxios.js';
// import UseStateHook from './components/UseStateHook.js';
// import ApiCall from './components/ApiCall.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <Accordion dataArray={dataArray} 
          icon="add" 
          expandedIcon="remove" 
          iconStyle={{color: "green"}}
          expandedIconStyle={{color: "red"}}
          headerStyle={{ backgroundColor: "#b7daf8" }}
          contentStyle={{ backgroundColor: "#ddecf8" }}/>
          <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={this.setDate}
          disabled={false}
      />
      {/* <Text>
        Date: {this.state.chosenDate.toString().substr(4, 12)}
      </Text>
          <ActionSheetEX></ActionSheetEX>
          <MainContent></MainContent> */}
          {/* <HandleText> </HandleText> */}
          {/* <UseStateHook></UseStateHook> */}
          {/* <ApiCall></ApiCall> */}
          <Getaxios></Getaxios>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default App;