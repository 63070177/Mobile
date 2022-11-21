import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan4 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>ลักษณะอาการผิดปกติที่เกิดขึ้นกับพืชเป็นอย่างไร?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan5")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 4.1 เนื้อเยื่อส่วนอ่อน เช่น ตาใบ ดอกอ่อน ผลอ่อนของพืชแสดงอาการแห้งตาย </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan5")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 4.2 ใบ และกิ่งหัก พับ ฉีกขาด </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan5")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 4.3 อาการตายระหว่างเส้นใบ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan5")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 4.2 ใบมีจุดชุ่มน้ำหรือเป็นแผลซีดทางสีน้ำตาล มักเกิดระหว่างเส้นใบ หรือขอบใบไหม้ </Text>
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

export default Scan4;