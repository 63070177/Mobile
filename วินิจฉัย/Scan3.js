import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan3 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>อาการผิดปกติที่เกิดเป็นบริเวณกว้างในระยะเวลาสั้น ๆ นั้น มีการระบาดหรือไม่?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan4")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 3.1 มีการระบาด หรือแพร่ขยายพื้นที่เสียหายออกไป </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan4")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 3.2 ไม่มีการระบาด หรือแพร่ขยายพื้นที่เสียหายออกไป </Text>
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

export default Scan3;