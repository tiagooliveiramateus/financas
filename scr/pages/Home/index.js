import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance/inde';
export default function Home() {
  return (
    <View style={styles.container}> 
         <Header name="Tiago"/>
         <Balance/>


      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
});
