import React from 'react';

import {Content, Card, CardItem, Text} from 'native-base';

class MainContent extends React.Component {
   
  render() {
    return (
        <Content>
      <Card>
        <CardItem header>
          <Text>Native header</Text>
        </CardItem>
        <CardItem>
          <Text>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Text>
        </CardItem>
        <CardItem footer button onPress={() => alert("This is Card Footer")}>
          <Text>NativeFooter</Text>
        </CardItem>
      </Card>
      
      </Content>
    );
  }
}

export default MainContent;
