import React, {Component} from 'react';
import {SocialIcon, Divider, ListItem, Modal, TouchableHighlight, Platform, StyleSheet, Text, View, Image, StatusBar, Alert, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class App extends Component {
  

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{marginLeft:0}}><Image source={require('./img/logoteste.png')}  style={{width:250, height:90, marginLeft:45}}></Image></View>
      
      <View style={{borderWidth: 2, marginTop:20, marginLeft:20, marginRight:200, borderRadius:6, borderColor:"#FF8C00"}}>
        <TouchableOpacity onPress={() => {Alert.alert('Opa!');}} source><Image source={require("./img/c.png")} style={{width:"50%",height:68, marginLeft:32 }}></Image></TouchableOpacity>
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
        <Image source={require("./img/sn.png")} style={{width:"50%",height:68, marginLeft:32 }} />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Deseja fechar o mapa?');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Image source={require("./img/logoteste.png")} style={{width:250, height:90, marginLeft:45, marginTop:-15}}/>
              
              <View style={{borderWidth: 1, borderRadius:6, borderColor:"#FF8C00", marginLeft:5, marginRight:5}}>
              <Text style={{textAlign:"center", display:"flex", justifyContent:"center", fontSize:30, fontWeight:"bold"}}>SOBRE NÓS</Text>
              <Text>   Uma equipe de programadores que já está a 23 anos no mundo do desenvolvimento web mobile.
               Baseamos nossa produção para uma máxima otimização no Google em react native e navegação leve e confortável via celular como foco principal pois levamos em consideração que:
               - 90% da navegação em apps seja ele institucional ou loja virtual começa pelo Google; - 60% de toda navegação hoje em dia é feita pelo celular via internet 3G ou 4G;
               Estar conectado com as ultimas tecnologias do mercado digital atendendo as expectativas de nossos clientes e também de quem visita o site deles fazem do MG Studios uma companhia que esta sempre à frente,
                traduzido no sucesso de mais de 4 mil projetos entregues em 8 estados brasileiros e no exterior nos últimos 10 anos. </Text>
                <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center", display:"flex", justifyContent:"center"}}>MISSÃO</Text>
<Text>  Desenvolver produtos e serviços digitais de qualidade, 
  com foco na satisfação total dos clientes através de práticas
  inovadoras orientadas para a agilidade e excelência do atendimento.</Text>

  <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center", display:"flex", justifyContent:"center"}}>VISÃO</Text>
<Text>  Ser reconhecida como uma empresa inovadora tanto em produtos
   e serviços quanto para seus colaboradores gerando rentabilidade
    e crescimento na carteira de clientes com grau máximo de satisfação 
    dos mesmos no atendimento prestado.</Text>

<Text style={{fontSize:20, fontWeight:"bold", textAlign:"center", display:"flex", justifyContent:"center"}}>VALORES</Text>
<Text>
Qualidade;
Atendimento;
Agilidade;
Inovação;
Ambiente agradável;
Melhoria contínua.
</Text>
              </View>
                  <Button
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);}}
                    title="VOLTAR"
                    color="#FF8C00"
/>
              
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.welcome}>SOBRE NOS</Text>
        </TouchableHighlight>
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
