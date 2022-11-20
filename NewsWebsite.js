import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.l1}>
          <FontAwesome5
            name="seedling"
            style={styles.i1}
            onPress={() => {
              Linking.openURL("http://www.ppsf.doae.go.th/wordpress/");
            }}
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
            onPress={() => {
              Linking.openURL("http://www.ppsf.doae.go.th/wordpress/");
            }}
          >
            เว็บไซต์ #1
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => {
              Linking.openURL("http://www.ppsf.doae.go.th/wordpress/");
            }}
          >
            กองส่งเสริมการอารักขาพืชและจัดการดินปุ๋ย
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.l1}>
          <FontAwesome5
            name="leaf"
            style={styles.i1}
            onPress={() => {
              Linking.openURL("https://www.doa.go.th/plprotect/");
            }}
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
            onPress={() => {
              Linking.openURL("https://www.doa.go.th/plprotect/");
            }}
          >
            เว็บไซต์ #2
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => {
              Linking.openURL("https://www.doa.go.th/plprotect/");
            }}
          >
            สำนักวิจัยพัฒนาการอารักขาพืชกรมวิชาการเกษตร
          </Text>
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.l1}>
          <FontAwesome5
            name="bug"
            style={styles.i1}
            onPress={() => {
              Linking.openURL(
                "https://www.dnp.go.th/FOREMIC/WEB%20SITE2/rba_info.php"
              );
            }}
          />
        </View>
        <View style={styles.r1}>
          <Text
            style={styles.txt}
            onPress={() => {
              Linking.openURL(
                "https://www.dnp.go.th/FOREMIC/WEB%20SITE2/rba_info.php"
              );
            }}
          >
            เว็บไซต์ #3
          </Text>
          <Text
            style={styles.txt1}
            onPress={() => {
              Linking.openURL(
                "https://www.dnp.go.th/FOREMIC/WEB%20SITE2/rba_info.php"
              );
            }}
          >
            การควบคุมแมลงศัตรูพืชโดยศูนย์วิจับกีฏวิทยาป่าไม้ที่ 2
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  box1: {
    width: "90%",
    height: 140,
    flexDirection: "row",
    borderWidth: 1,
  },
  box2: {
    width: "90%",
    height: 140,
    marginTop: 50,
    flexDirection: "row",
    borderWidth: 1,
  },
  box3: {
    width: "90%",
    height: 140,
    marginTop: 50,
    flexDirection: "row",
    borderWidth: 1,
  },
  l1: {
    width: "40%",
    height: 130,
  },
  r1: {
    width: "60%",
    height: 130,
    marginTop: 20
  },
  i1: {
    fontSize: 80,
    margin: 22,
  },
  txt: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: -5,
  },
  txt1: {
    marginLeft: 10,
    marginTop: 10,
  },
  cir: {
    width: 30,
    height: 30,
    backgroundColor: "violet",
    flexDirection: "row",
    borderRadius: "50%",
    margin: 10,
  },
  i2: {
    fontSize: 20,
    marginLeft: 7,
    marginTop: 4,
  },
  bookmark: {
    fontSize: 30,
    color: "green",
  },
  unbookmark: {
    fontSize: 30,
    color: "red",
  },
});
