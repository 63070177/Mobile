import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <TouchableOpacity style={styles.box1}>
          <View style={styles.img1}>
            <FontAwesome5 name="calendar" style={styles.img2}/>
          </View>
          <Text>ข่าวสาร</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}>
          <View style={styles.img1}>
            <FontAwesome5 name="list" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ตามชนิดพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box3}>
          <View style={styles.img1}>
            <FontAwesome5 name="search" style={styles.img2}/>
          </View>
          <Text>เทคนิคอื่นๆ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group2}>
        <TouchableOpacity style={styles.box4}>
          <View style={styles.img1}>
            <FontAwesome5 name="seedling" style={styles.img2}/>
          </View>
          <Text>องค์ความรู้ด้าน</Text>
          <Text>การอารักขาพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box5}>
          <View style={styles.img1}>
            <FontAwesome5 name="bullhorn" style={styles.img2}/>
          </View>
          <Text style={{fontSize: 12}}>พยากรณ์</Text>
          <Text style={{fontSize: 12}}>เตือนการระบาด</Text>
          <Text style={{fontSize: 12}}>ของศัตรูพืช</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box6}>
          <View style={styles.img1}>
            <FontAwesome5 name="envelope" style={styles.img2}/>
          </View>
          <Text>ติดต่อ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group3}>
        <TouchableOpacity style={styles.box7}>
          <View style={styles.img1}>
            <FontAwesome5 name="bug" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ศัตรูพืชเบื้องต้น</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box8}>
          <View style={styles.img1}>
            <FontAwesome5 name="cloud" style={styles.img2}/>
          </View>
          <Text>พยากรณ์อากาศ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box9}>
          <View style={styles.img1}>
            <FontAwesome5 name="info" style={styles.img2}/>
          </View>
          <Text>คำแนะนำ</Text>
          <Text>ในการใช้งานแอป</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'snow'
  },
  box1: {
    width: 100,
    height: 130,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box2: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box3: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box4: {
    width: 100,
    height: 130,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box5: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box6: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box7: {
    width: 100,
    height: 130,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box8: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  box9: {
    width: 100,
    height: 130,
    marginTop: 60,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white'
  
  },
  img1: {
    width: 80,
    height: 80,
    alignItems: 'center',
    borderColor: 'black'
  },
  img2: {
    marginTop: 20,
    fontSize: 40,
    alignItems: 'center',
  },
});
