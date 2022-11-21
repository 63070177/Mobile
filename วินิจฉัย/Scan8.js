import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Scan8 = ({navigation}) => {
    return (
        <View>
            <Text style={styles.question}>อาการใบเหลืองที่เกิดขึ้นระหว่างเส้นใบ เกิดกับใบชนิดใด?</Text>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan9")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 8.1 ใบแก่ ด่างเหลือง หรือแดงบริเวณขอบใบ ลามไปโคนใบเป็นรูปตัววี </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate("Scan9")}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}> 8.2 ใบอ่อน แสดงอาการเหลือง และมีอาการอื่นร่วมด้วย </Text>
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

export default Scan8;