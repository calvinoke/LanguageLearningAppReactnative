import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

const LessonSelection = () => {
    const [selected, setSelected] = React.useState("");
      
    const data = [
        {key:'Luganda', value:'Luganda'},
        {key:'Ateso', value:'Ateso'},
        {key:'Kishwahili', value:'Kishwahili'},
        {key:'Alur', value:'Alur'},
        {key:'Ngoni', value:'Ngoni'},
        {key:'English', value:'English'},
      ]
    
      return(
        <View style={{paddingHorizontal:15,marginTop:15}}>
            <Dropdown setSelected={(text)=>setSelected(text)} data={data}  />
            
            <View style={{marginTop:50}}>
            <Text>Selected Value : </Text>
            <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
        </View>
          
          
    
        </View>
        
      )
    
    };
    


export default LessonSelection;

const styles = StyleSheet.create({});