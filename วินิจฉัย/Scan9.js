import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan9 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>ลักษณะอาการที่พบบนใบอ่อน และมีอาการอื่นด้วยนั้น อาการเป็นอย่างไร?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan10")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 9.1 เส้นใบมีสีเข้ม </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan10")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 9.2 เนื้อใบที่เป็นสีเหลืองแห้งเป็นจุด ๆ </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan10")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 9.3 ปลายใบ และขอบใบยังเป็นสีเขียวตามด้วยอาการเหลืองที่เส้นใบ ทั้งใบแห้งอย่างรวดเร็ว </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan10")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 9.4 ใบมีขนาดเล็กมาก เป็นกระจุก ข้อสั้น เป็นพุ่มเตี้ย </Text>
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

export default Scan9;