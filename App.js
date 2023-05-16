import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import * as React from 'react';
import * as Clipboard from 'expo-clipboard';

export default function App() {

const [copiedtext,setcopiedtext]=React.useState('');

const  copyToClipboard=()=>{
  Clipboard.setString(text);
}

const text="hello developers"

const fetchCopiedText=async()=>{
  const text=await Clipboard.getStringAsync();
  setcopiedtext(text);
}

  return (
    <View style={styles.container}>
    <View style={{margin:20}}>
      <Text selectable>{text}</Text>
      <Button title="copy Button" onPress={copyToClipboard}/>
      <Button title="view copied Text" onPress={fetchCopiedText}/>
      <Text style={styles.copiedText}>{copiedtext}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copiedText:{
    margin:10,
    color:'red'
  }
});
