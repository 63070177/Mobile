import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <View style={styles.box1}>
          <View style={styles.img1}>
            <FontAwesome5 name="calendar" style={styles.img2}/>
          </View>
          <Text>ข่าวสาร</Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.img1}>
            <FontAwesome5 name="list" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ตามชนิดพืช</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.img1}>
            <FontAwesome5 name="search" style={styles.img2}/>
          </View>
          <Text>เทคนิคอื่นๆ</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.box4}>
          <View style={styles.img1}>
            <FontAwesome5 name="seedling" style={styles.img2}/>
          </View>
          <Text>องค์ความรู้ด้าน</Text>
          <Text>การอารักขาพืช</Text>
        </View>
        <View style={styles.box5}>
          <View style={styles.img1}>
            <FontAwesome5 name="bullhorn" style={styles.img2}/>
          </View>
          <Text>พยากรณ์</Text>
          <Text>เตือนการระบาด</Text>
          <Text>ของศัตรูพืช</Text>
        </View>
        <View style={styles.box6}>
          <View style={styles.img1}>
            <FontAwesome5 name="envelope" style={styles.img2}/>
          </View>
          <Text>ติดต่อ</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.box7}>
          <View style={styles.img1}>
            <FontAwesome5 name="bug" style={styles.img2}/>
          </View>
          <Text>วินิจฉัย</Text>
          <Text>ศัตรูพืชเบื้องต้น</Text>
        </View>
        <View style={styles.box8}>
          <View style={styles.img1}>
            <FontAwesome5 name="cloud" style={styles.img2}/>
          </View>
          <Text>พยากรณ์อากาศ</Text>
        </View>
        <View style={styles.box9}>
          <View style={styles.img1}>
            <FontAwesome5 name="info" style={styles.img2}/>
          </View>
          <Text>คำแนะนำ</Text>
          <Text>ในการใช้งานแอป</Text>
        </View>
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
    height: 120,
    alignItems: 'center'
  },
  box2: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  box3: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  box4: {
    width: 100,
    height: 120,
    alignItems: 'center'
  },
  box5: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  box6: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  box7: {
    width: 100,
    height: 120,
    alignItems: 'center'
  },
  box8: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  box9: {
    width: 100,
    height: 120,
    marginTop: 80,
    alignItems: 'center'
  },
  img1: {
    width: 80,
    height: 100,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  },
  img2: {
    marginTop: 20,
    fontSize: 60,
    alignItems: 'center',
  },
});