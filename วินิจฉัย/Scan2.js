import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan2 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>ระยะเวลาที่เกิดอาการผิดปกติเป็นอย่างไร?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan3")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 2.1 เกิดอาการผิดปกติในระยะเวลาสั้น ๆ ชั่วข้ามคืน </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan3")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 2.2 ใช้ระยะเวลานานหลายวันจึงสังเกตเห็นอาการผิดปกติมากขึ้น </Text>
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

export default Scan2;