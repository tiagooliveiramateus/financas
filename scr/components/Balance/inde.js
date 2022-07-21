import React from 'react';
import { 
    View,
    Text,
    StyleSheet, 
} from 'react-native';

export default function Balance() {
 return (
   <View style={styles.container}>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySmbol}>R$</Text>
                <Text style={styles.balance}>15.000,00</Text>
            </View>
    </View>
    <View style={styles.item}>
        <Text style={styles.itemTitle}>Gasto</Text>
             <View style={styles.content}>
                <Text style={styles.currencySmbol}>R$</Text>
                <Text style={styles.balance}>1.000,00</Text>
            </View>
    </View>

   </View>
 );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,      
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySmbol:{
        color: '#DADADA',
    }
})