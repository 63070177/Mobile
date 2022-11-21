import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const Finish = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt1}>สาเหตุเบื้องต้นที่พบ</Text>
        <Text style={styles.txt2}>มักเกิดจากแมลงอพยพผ่านมา</Text>
        <View style={styles.box2}>
          <Text style={styles.txt3}>ความเสี่ยง ปานกลาง</Text>
        </View>
        <TouchableOpacity style={styles.box3} onPress={()=>{navigation.navigate("Home")}}>
          <Text style={styles.txt4}>กลับสู่หน้าเมนู</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100
  },
  box: {
    width: '80%',
    height: '50%',
    backgroundColor: 'cyan',
    borderRadius: 10,
    alignItems: 'center'
  },
  txt1: {
    marginTop: 30,
    fontSize: 20,
    margin: 10
  },
  txt2: {
    marginTop: 30,
    marginBottom: 30
  },
  box2: {
    width: 120,
    height: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20
  },
  box3: {
    width: '80%',
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30
  },
  txt4: {
    fontSize: 15,
  }
});

export default Finish;
