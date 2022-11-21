import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan1 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>ลักษณะการกระจายตัวของอาการผิดปกติที่พบในแปลง เป็นอย่างไร?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan2")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 1.1 พบอาการผิดปกติเป็นบริเวณกว้าง </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan2")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 1.2 พบอาการผิดปกติเป็นจุด ๆ กระจายทั่วแปลง </Text>
            </TouchableOpacity>
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
    gridItem: {
        flex: 1,
        margin: 'auto',
        height: 200,
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 40,
        borderWidth: 3,
        marginBottom: 20,
        width: 400
    },
    question: {
        fontSize: 25,
        marginTop: 100,
        textAlign: 'center',
        marginBottom: 50
    }
  });

export default Scan1;