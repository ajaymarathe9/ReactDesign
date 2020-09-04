/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import{
View,
Text,
FlatList
} from 'react-native';

class ApiCall extends React.Component{

    constructor(){
        super();
        this.state= {
            data: []
        }
    }

    componentDidMount(){
          this.CallApi();
    }

    async CallApi(){
        let resp = await fetch('http://reactnative.dev/movies.json');
        let respJson = await resp.json();
        this.setState({data:respJson.movies});
    }
    render(){
        return(
         <View>
             <Text style={{fontSize: 30}}>API Call</Text>
             <FlatList 
             data={this.state.data}
             renderItem={({item})=> <Text style={{fontSize: 20, margin: 10, backgroundColor: 'skyblue'}}>{item.title}, {item.releaseYear}</Text>}
            ></FlatList>
         </View>
        )
    }
}

export default ApiCall;