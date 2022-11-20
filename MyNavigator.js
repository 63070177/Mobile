import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../screen/Menu";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mainpage from "../screen/Main";
import { FontAwesome5 } from "@expo/vector-icons";
import BookMark from "../screen/BookMark";
import SettingPage from "../screen/SettingPage";
import NewsWebsite from "../screen/NewsWebsite";

const Tab = createBottomTabNavigator();
const MainNavigation = createNativeStackNavigator();
const MenuNavigation = createNativeStackNavigator();

function MainNavigator() {
  return (
    <MainNavigation.Navigator
      screenOptions={{ headerShown: true}}
      initialRouteName="Home"
    >
      <MainNavigation.Screen name="Home" component={Mainpage} />
      <MainNavigation.Screen name="Menu" component={Menu} />
      <MainNavigation.Screen name="News" component={NewsWebsite}/>
    </MainNavigation.Navigator>
  );
}


const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
});

export default function MyNavigator() {
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor: 'snow'}} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: () => <FontAwesome5 style={styles.icon} name="home" />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 style={styles.icon} name="bars" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
