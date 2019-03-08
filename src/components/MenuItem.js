import React from 'react'
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Ionicons'

export default class MenuItem extends React.Component{
    render(){
        return(
            <View>
                {/* <View style={{height: 200,justifyContent: 'center'}}>
                    <ImageBackground source={require('../img/backgroundImage.jpeg')} style={{height: '100%',width: '100%'}}>
                        
                        <View style={{padding: 20,marginTop: 0}}>
                            <Text style={{fontSize: 14,color: '#fff',fontWeight: 'bold'}}>Pratham Mehra</Text>
                            <Text style={{fontSize: 14,color: '#fff',fontWeight: 'bold'}}>Graphicskart@gmail.com</Text>
                        </View>
                    </ImageBackground>
                </View> */}
                <View style={{height: 70,justifyContent: 'center',paddingLeft: 100,marginTop: 20}}>
                    <View style={{height: 70, width: 70, borderRadius: 35,backgroundColor: '#eee',marginBottom: 10,overflow: 'hidden',position: 'absolute',left: 20}}>
                        <Image source={require('../img/user1.jpeg')} style={{height: '100%', width: '100%'}}/>
                    </View>
                    <Text style={{color: '#000',fontSize: 20,fontWeight: 'bold',marginBottom: 3}}>Maria</Text>
                    <Text style={{color: '#62b8e2',fontSize: 14,fontWeight: 'bold'}}>Tennis Coach</Text>
                </View>
                <View style={{borderWidth: 1,height: 1,borderColor: '#f3f3f3',margin: 20,marginBottom: 0}}></View>
                <View style={{marginTop: 10}}>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <Icon name="inbox" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#62b8e2"/>
                        <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <MaterialIcons name="send" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#62b8e2"/>
                        <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Outbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <Entypo name="emoji-happy" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#62b8e2"/>
                        <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Peoples</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <Icon name="barschart" style={{position: 'absolute',left: 20,top: 17}} size={27} color="#62b8e2"/>
                        <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Statistics</Text>
                        <View style={{position: 'absolute',right: 20,height: 30,width: 30,borderRadius: 15,backgroundColor: '#d76f90',justifyContent: 'center',alignItems: 'center'}}><Text style={{color: '#fff'}}>6</Text></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                    <Icon name="setting" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#62b8e2"/>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                    <Feather name="md-help-circle" style={{position: 'absolute',left: 20,top: 17}} size={27} color="#62b8e2"/>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Help & Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                    <Icon name="logout" style={{position: 'absolute',left: 20,top: 17}} size={23} color="#62b8e2"/>
                    <Text style={{fontSize: 14,fontWeight: 'bold',color: '#8c8f93'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}