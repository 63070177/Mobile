import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, Switch } from "react-native";

const SettingPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{margin: 10}}>
            <Text style={styles.header}>ตั้งค่า</Text>
            <TouchableOpacity style={styles.gridItemS}>
                <Text style={styles.text1}> การแจ้งเตือน </Text>
                <Switch style={styles.switch} trackColor={{false: "lightgray", true: "teal"}}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <Text style={styles.text1}> วิธีการใช้งาน </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem}>
                <Text style={styles.text1}> เกี่ยวกับ </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        padding: 20,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  
    },
    text1: {
        fontSize: 25
    },
    gridItemS:{
        flex: 1,
        margin: 25,
        height: 200,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        marginTop: 50,
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  
    },
    switch:{
        position: 'absolute',
        top: '45%',
        right: 50
    },
    header:{
        fontSize: 30,
        marginTop: 10,
        marginLeft: 20
    }
})

export default SettingPage;
