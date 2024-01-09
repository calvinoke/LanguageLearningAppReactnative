import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { useNavigation } from '@react-navigation/native';

const LessonSelection = () => {
    const [selected, setSelected] = React.useState("");
    
    const navigation = useNavigation()


    const datas = [
        {key:'luganda', value:'Luganda'},
        {key:'Ateso', value:'Ateso'},
        {key:'Kishwahili', value:'Kishwahili'},
        {key:'Luo', value:'Luo'},
        {key:'Ngoni', value:'Ngoni'},
        {key:'English', value:'English'},
      ]
    
      return (
        <View style={{paddingHorizontal:15,marginTop:15}}>
        
            <Text style={styles.text}>Language Selection??</Text>
        
            <Dropdown setSelected={(text)=>setSelected(text)} data={datas}  
            
            {...datas.map((data, index) =>{
              return (
                <TouchableOpacity>
                  key={index}
                  onPress = {() => navigation.navigate("luganda", {params:value})}
                  <Text>{data.value}</Text>

                  <Text>or</Text>

                  onPress = {() => navigation.navigate("Luo", {params:value})}
                </TouchableOpacity>
                

               

              )
            })}
            />
            
        
          
          
    
        </View>
        
      )
    
    };
    


export default LessonSelection;

const styles = StyleSheet.create({});