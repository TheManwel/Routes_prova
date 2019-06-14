import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      <View style={{marginLeft:0}}><Image source={require('./img/logoteste.png')}  style={{width:250, height:90, marginLeft:45}}></Image></View>
      
      <View style={{borderWidth: 2, marginTop:20, marginLeft:20, marginRight:200, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/c.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={styles.welcome}>VER MAPAS</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:-91, marginLeft:200, marginRight:20, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/R.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={{marginLeft:20, color:"#000"}}>BUSCAR ROTAS</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:20, marginLeft:20, marginRight:200, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/T.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={{marginLeft:36, color:"#000"}}>TURISMO</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:-91, marginLeft:200, marginRight:20, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/M.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={styles.welcome}>MERCADOS</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:20, marginLeft:20, marginRight:200, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/Res.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={{marginLeft:15, color:"#000", }}>RESTAURANTES</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:-91, marginLeft:200, marginRight:20, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity source><Image source={require("./img/sn.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
        <Text style={styles.welcome}>SOBRE NOS</Text>
        </View>

        <View style={{borderWidth: 2, marginTop:40, marginLeft:35, marginRight:35, borderRadius:6, borderColor:"#000"}}>
          <Image source={require("./img/bannertransito.png")} style={{width:270, height:100, marginLeft:10, marginTop:5}}></Image>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  welcome:{
    marginLeft:30,
    color:"#000"
  },

  
});
