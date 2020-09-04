/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';


class HandleText extends React.Component{
    constructor(){
        super()
        this.state={
            name: "",
            invalidname: "",
            mobile: "",
            email:"",
            password: "",
            submit: "Succesfully Submit"
        }
    }
    checkname(text){
        let rjx=/^[a-zA-Z]+$/
        if(!rjx.test(text))
        {
            this.setState({invalidname:"Please enter valid name"})
        }
        else{
            this.setState({invalidname:""})
        }
    }

     emailvalidator(){
            if(this.state.email=="")
            {
                this.setState({emailerror:"Email required"})
            }
            else{
                this.setState({emailerror:""})
            }
        }
    
    render (){
        return(
           <View>
               <TextInput 
               maxLength={50}
               placeholder={"Enter your name"} 
               style={Styles.textBox} 
            //    onChangeText={(text) =>{this.setState({name:text})}}
               onChangeText={(text)=> {this.checkname(text), this.setState({name:text})}}>
               </TextInput>
               <Text style={{color:'red', marginLeft: 20}}>{this.state.invalidname}</Text>

               <TextInput 
               maxLength={10}
               keyboardType={'numeric'}
               placeholder={"Enter Mobile No."} 
               style={Styles.textBox} 
               onChangeText={(text)=>{this.setState({mobile:text})} }> 
               </TextInput>

               <TextInput
               onBlur={()=>this.emailvalidator()}
               placeholder={"Enter email"}
               style={Styles.textBox}
               onChangeText={(text)=>{this.setState({email:text})}}
               ></TextInput>
               <Text style={{color:'red', marginLeft: 20}}>{this.state.emailerror}</Text>

               <TextInput
               maxLength={6}
               placeholder={"Enter password"} 
               style={Styles.textBox} 
               secureTextEntry={true}
               onChangeText={(text)=>{this.setState({password:text})} }> 
               </TextInput>
            
               <Button title="Submit" onPress={()=>{alert(this.state.submit)}}>
        
              </Button>
              <Text>
                  Name: {this.state.name}
              </Text>
              <Text>
                  Mobile No.: {this.state.mobile}
              </Text>
              <Text>
                  Email id: {this.state.email}
              </Text>
              <Text>
                  Password: {this.state.password}
              </Text>
           </View>
        )
    }
}

const Styles = StyleSheet.create({
textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
}
})

export default HandleText;