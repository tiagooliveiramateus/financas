import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance/inde';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '330,90',
    date: '28/07/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '3.350,00',
    date: '23/07/2022',
    type: 1 //receita / entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.330,90',
    date: '25/07/2022',
    type: 1 // receita / entrada
  },
]


export default function Home() {
  return (
    <View style={styles.container}> 
         <Header name="Tiago Mateus"/>
         <Balance saldo="9.350,60" gastos="-650,00" />

        <Actions/>

          <Text style={styles.title}>Últimas movimentções</Text>

          <FlatList
          style={styles.list}
          data={list}
          keyExtractor= { (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data ={item}/> }
          />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
