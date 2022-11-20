import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";


const Main = ({navigation}) => {
    return (
    <View>
        <TouchableOpacity
            style={styles.gridItem}
            onPress={()=>{
                navigation.navigate('Menu')
            }}>
                <View style={styles.tab}>
                    <FontAwesome5 name="elementor" style={styles.icon} />
                    <View style={styles.tab}>
                    <Text style={{fontSize: 35}}>เมนู</Text><br/>
                    <Text style={styles.info1}>  <FontAwesome5 name="newspaper"/> ข้อมูลเบื้องต้น   </Text>
                    <Text style={styles.info2}>  <FontAwesome5 name="clipboard"/> การวินิจฉัยศัตรูพืช   </Text>
                    </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.gridItem}
            onPress={()=>{
                navigation.navigate('News')
            }}>
                <View style={styles.tab}>
                    <FontAwesome5 name="globe" style={styles.icon} />
                    <View style={styles.tab}>
                    <Text style={{fontSize: 35}}>เว็บไซต์</Text><br/>
                    <Text style={styles.info1}>  <FontAwesome5 name="newspaper"/> ข้อมูลจากเว็บไซต์ที่น่าเชื่อถือ   </Text>
                    </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.gridItem}>
                <View style={styles.tab}>
                    <FontAwesome5 name="user-tie" style={styles.icon} />
                    <View style={styles.tab}>
                    <Text style={{fontSize: 35}}>ติดต่อ</Text><br/>
                    <Text style={styles.info1}>  <FontAwesome5 name="comments"/> ติดต่อไปยังผู้เชี่ยวชาญ   </Text>
                    </View>
                </View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 20,
        height: 200,
        backgroundColor: 'white',
        shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  
    },
    icon:{
        fontSize: 60,
        padding: 30
    },
    tab:{
        display: "inline-block",
        paddingTop: 15,
        paddingBottom: 20
    },
    info1:{
        backgroundColor: "greenyellow",
        borderRadius: 10,
    },
    info2:{
        backgroundColor: "red",
        borderRadius: 10,
    },
});

export default Main;
