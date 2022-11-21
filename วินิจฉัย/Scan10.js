import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan10 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>อาการใบเหลืองที่พบไม่ใช่อาการหลัก พบอาการผิดปกตินั้นอย่างไร?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("finish")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 10.1 มักพบที่โคนต้น </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("finish")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 10.2 มักพบที่ส่วนยอด </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("finish")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 10.3 ปลายใบไหม้ ในบริเวณที่แห้งแล้ง พบอาการทั้งต้น ใบร่วง ต้นตาย </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("finish")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 10.4 อาการไหม้ลามจากปลายใบ โคนใบ ก้าน ลำต้น ราก บางครั้งพบจุดกระจายทั่วแปลง </Text>
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

export default Scan10;