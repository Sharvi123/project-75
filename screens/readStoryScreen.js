import * as React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elememts';
import db from '../config';
import firebase from 'firebase';

export default class readStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
          allStories:[],
          dataSourceList:[],
          search:''
        }
    }
    retrieveStories=async()=>{
        const query = await db.collection("story").get()
        query.docs.map((doc)=>{
          this.setState({
            allStories: [...this.state.allStories, doc.data()],
          
          })
        })
    }
    searchFilter=async()=>{
        var text = this.state.search
        var enteredText = text
  
        
        if (enteredText===db.collection("story").where(doc,'==',text)){
            query.docs.map((doc, item)=>{
          this.setState({
           dataSourceList: [item]
          })
        })
      }
      else{
          dataSourceList: [allStories]
      }
       
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={this.searchFilter}
                value={search}
                          />

                 </View>
                 <ScrollView>
                 <FlatList
      data={this.state.dataSourceList}
     renderItem={({item})=>(
       <View style={{borderBottomWidth:2}}>
       <Text>{"Title:"+item.name}</Text>
       <Text>{"Author:"+item.author}</Text>
       </View>
     )}
     keyExtractor={(item,index)=>index.toString()}
     onEndReached={
       this.fetchmoreTransactions
     }
     onEndReachedThreshold={0.7}
      />
                 </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
container:{
    flex: 2 ,
    alignItems: 'center',
    justifyContent: 'center'
}
})