import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Image, SearchBar } from "@rneui/base";
import firebase from "../database/firebaseDB";

class BookMark extends Component {
  constructor() {
    super();
    this.fruitCollection = firebase.firestore().collection("Fruits");

    this.state = {
      fruit_list: [],
      search_list: [],
      filtered_list: [],
      text: ""
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      const { name, disease, pic, cause, symptom, prevention, type, bookmark } =
        res.data();
      all_data.push({
        key: res.id,
        name,
        disease,
        pic,
        cause,
        symptom,
        prevention,
        type,
        bookmark,
      });
    });
    //console.log("all_data : ", all_data);
    const filtered = all_data.filter((res) => res.bookmark);
    this.setState({
      fruit_list: all_data,
        filtered_list: filtered
    });
  };

  updateBookmark(
    key,
    name,
    disease,
    cause,
    symptom,
    prevention,
    type,
    pic,
    bookmark
  ) {
    const updateBookmarkDoc = firebase
      .firestore()
      .collection("Fruits")
      .doc(key);
    updateBookmarkDoc
      .set({
        name: name,
        disease: disease,
        cause: cause,
        symptom: symptom,
        prevention: prevention,
        type: type,
        bookmark: !bookmark,
        pic: pic,
      })
      .then(() => {
        console.log("update success!");
      });
  }

  componentDidMount() {
    this.unsubscribe = this.fruitCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  Datasearch(){
    const searchText = this.state.text;
    const before = this.state.fruit_list.filter((r) => r.bookmark);
    const copy = this.state.filtered_list;
    const search_filtered = copy.filter((r) => r.name.includes(searchText)
    || r.disease.includes(searchText) || r.cause.includes(searchText) || r.symptom.includes(searchText)
    || r.prevention.includes(searchText) || r.type.includes(searchText));
    if (searchText == "" && search_filtered.length == 0){
        this.setState({filtered_list: before});
        return this.state.filtered_list;
    }
    if (searchText == "" && search_filtered.length != 0) {
        this.setState({filtered_list: before});
        return this.state.filtered_list;
    }
    if (search_filtered.length != 0){
    this.setState({filtered_list: search_filtered});
    return this.state.filtered_list;
    } 
    if (search_filtered.length == 0 && searchText != ""){
        alert('ไม่พบข้อมูล');
        this.setState({filtered_list: before});
        return this.state.filtered_list;
    }
    }
    

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
            <View style={styles.searchBar}>
        <TextInput placeholder="ค้นหา" name="text" keyboardType="default" onChangeText={(text) => this.setState({text:text})} style={styles.search}></TextInput>
        <Button style={styles.searchbtn} onPress={()=>(console.log(this.state.text), this.Datasearch())}><FontAwesome5 style={{fontSize: 20}} name="search"/><Text> ค้นหา</Text></Button>
        </View>
        {this.state.filtered_list.map((item, i) => {
          return (
            
            <TouchableOpacity style={styles.gridItem} key={i}>
              <View style={styles.tab}>
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 5 }}
                  onPress={() => (
                    console.log("click"),
                    this.updateBookmark(
                      item.key,
                      item.name,
                      item.disease,
                      item.cause,
                      item.symptom,
                      item.prevention,
                      item.type,
                      item.pic,
                      item.bookmark
                    )
                  )}
                >
                  <FontAwesome5
                    name="bookmark"
                    style={item.bookmark ? styles.bookmark : styles.unbookmark}
                  />
                </TouchableOpacity>
                <View style={styles.tab}>
                  <Image source={item.pic} style={styles.img} />
                </View>
                <View style={styles.tab}>
                  <Text style={{ fontSize: 20 }}>{item.disease}</Text>
                  <br />
                  <Text style={styles.info1}>
                    {" "}
                    <FontAwesome5 name="newspaper" /> {item.name}{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            
          );
        })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 200,
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
  icon: {
    fontSize: 60,
    padding: 30,
  },
  tab: {
    display: "inline-block",
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  bookmark: {
    fontSize: 30,
    color: "green",
  },
  unbookmark: {
    fontSize: 30,
    color: "red",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  search: {
    backgroundColor: 'lightgray',
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
    width: '100%',
    marginRight: 20
  },
  searchbtn:{
    width: '100%',
    height: 40
  },
  searchBar:{
    flexDirection: 'row', 
    alignSelf:'center',
    margin: 30
  }
});

export default BookMark;
