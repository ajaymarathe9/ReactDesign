/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import {
View,
Text
} from 'react-native';

class Getaxios extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       this.getapiData()
    }
    async getapiData(){
        let resp= await axios.get('http://reactnative.dev/movies.json')
        this.setState({data:resp.data.movies})
    }
    render(){
        return(
              <View>
                  <Text style={{fontSize: 30}}>Get Axios Call</Text>
                      {
                       this.state.data.map((item)=><Text>{item.title}</Text>)
                      }
                 </View>      
        )
    }
}

export default Getaxios;