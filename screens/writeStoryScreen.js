import * as React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elememts';
import db from '../config';
import firebase from 'firebase';

export default class writeStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
           titleText:'',
           authorText:'',
           storyText:'',
        }
    }

    submitStory=async()=>{
        db.collection("story").add({
            'title': this.state.titleText,
            'author' : this.state.authorText,
            'content' : this.state.storyText,
          })
          ToastAndroid.show("Story Submitted!", ToastAndroid.LONG);
          this.setState({
            titleText:'',
            authorText:'',
            storyText:'',
          })
    }
    render(){
        return(
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
            <View style= {styles.container}>
              <Header 
               backgroundColor={'#64d9ba'}
               centerComponent={{
                 text: 'Story Hub',
                 style: { color: '#000000', fontSize: 25 },
               }}
              />
               <TextInput style={styles.titleInput}
                        placeholder="Story Title"
                        value={this.state.titleText} />

                <TextInput style={styles.authorInput}
                        placeholder="Story Author"
                        value={this.state.authorText} />
                 <TextInput 
                        multiline:true
                        style={styles.storyInput}
                        placeholder="Write your story here"
                        value={this.state.storyText} />
                        <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.submitStory}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>

            </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 2 ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleInput:{
        width:200,
        height:40,
        borderWidth: 1.5,
        fontSize: 17,
        marginTop:100
    },
    authorInput:{
        width:200,
        height:40,
        borderWidth: 1.5,
        fontSize: 17,
        marginTop:200
    },
    storyInput:{
        width:200,
        height:300,
        borderWidth: 1.5,
        fontSize: 17,
        marginTop:100
    },
    submitButton:{
        backgroundColor: '#64d9ba',
        padding: 20,
        margin: 50,
        width:50,
    },
    buttonText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center'
    },
})
