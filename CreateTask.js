import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";
import { Card } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";


export default class CreateTask extends Component{
  constructor() {
    super()
    this.state={
      task:[],
      taskdescription:[]
    }
  }

  render(){
    return (
      <View style={styles.container}>

<Card style={styles.card}>
    
          <Text style={styles.txt}>New Task</Text>
          <Text  style={styles.txt}> Task name</Text>
          <TextInput style={styles.inputFont}
          onChangeText={task =>{this.setState({task})} }
          ></TextInput>
 <Text  style={styles.txt}> Task description</Text>
           <TextInput style={styles.inputFont}
          onChangeText={taskdescription =>{this.setState({taskdescription})} }
          ></TextInput>

<TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('DisplayTask',{task:this.state.task,taskdescription:this.state.taskdescription})} > 
Save
</TouchableOpacity>

</Card>
      </View>
    )

    
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7FB5FF"
    },
   
    btn: {
      color:"2155CD",
      width:40,
      height:30,
      borderColor:'#001D6E',
      borderWidth:2,
      borderRadius:10,
      alignSelf:"center",
      justifyContent:"center",
      alignItems:"center",
      margin:20
    },


    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
     inputFont: {
        height: RFValue(40),
        borderWidth:3,
        borderRadius:10,
        paddingLeft: RFValue(10),
        color: "001D6E"
    },
     card:{
      padding:5,
      height:window.innerHeight-20,
    justifyContent:"space-around",
    borderRadius:20,
    margin:10,
    backgroundColor:'#E8F9FD',
    color:'#0AA1DD'
    },
    
     txt:{
    color:"#001D6E",
    fontFamily:"cursive",
    fontSize:20,
    marginLeft:5,
    marginBottom:30

  },
});
