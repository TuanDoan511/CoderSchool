import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={{flex: 1}}><AntDesign name="arrowleft" size={30}/></TouchableOpacity>
        <TouchableOpacity><Entypo name="dots-three-vertical" size={30}/></TouchableOpacity>
      </View> 

      <View style={styles.container2}>
        <View style={styles.avatar_box}>
          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"}} style={styles.avatar}/>
        </View>

        <View style={styles.id_box}>
          <Text style={{fontSize: 20, textTransform: "uppercase", fontWeight: "bold"}}>Barack Obama</Text>
          <Text>President</Text>
          <View style={styles.follow_box}>
            <TouchableOpacity style={styles.follow_button}><Text style={{fontSize: 20, color: "white", textAlign: "center"}}>Follow</Text></TouchableOpacity>
            <TouchableOpacity style={styles.send_button}><Ionicons style={{fontSize: 23, color: "white", textAlign: "center"}} name="md-send"/></TouchableOpacity>
          </View>
        </View>
      </View>

        <View style={styles.container3}>
          {statistics.map(print_statistic)}
        </View>

        <View style={styles.container4}>
          <ScrollView contentContainerStyle={{flexDirection: "row", justifyContent: "center"}}>
            <View>
              {photos.slice(0, centerImageData).map(item => {return <Image key={item.id} source={item.imgSource} style={{maxHeight: 175, maxWidth: 175, borderRadius: 15, marginRight: 10, marginBottom: 10}} resizeMode="cover"/>})}
            </View>

            <View>
              {photos.slice(centerImageData).map(item => {return <Image key={item.id} source={item.imgSource} style={{maxHeight: 175, maxWidth: 175, borderRadius: 15, marginLeft: 10, marginBottom: 10}} resizeMode="cover"/>})}
            </View> 
          </ScrollView>
        </View>

        <View style={styles.container5}>
          <TouchableOpacity style={styles.bottom_icon}><MaterialCommunityIcons name="menu" size={25}/></TouchableOpacity>
          <TouchableOpacity style={styles.bottom_icon}><Ionicons name="ios-add-circle-outline" size={25}/></TouchableOpacity>
          <TouchableOpacity style={styles.bottom_icon}><AntDesign name="user" size={25}/></TouchableOpacity>
        </View>
    </View>
  );
}

function print_statistic(data){
  return(
    <View style={{flex: 1, alignItems: "center"}}>
      <Text style={{fontWeight: "bold", fontSize: 25}}>{data.count}</Text>
      <Text>{data.name}</Text>
    </View>
  )
}

const statistics = [{name: "Photos", count: 215}, {name: "Follower", count: 150000}, {name: "Following", count: 20}];

const photos = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
];

const centerImageData = Math.floor(photos.length/2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  container2: {
    flex: 2,
    flexDirection: "row",
    paddingLeft: 20,
  },

  container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },

  container4: {
    flex: 5,
  },

  container5: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  avatar_box: {
    flex: 1,
    alignItems: "center",
  }, 
  
  id_box: {
    flex: 2,
    marginLeft: 20,
  },

  avatar: {
    height: 110,
    width: 110,
    borderRadius: 55,
  },

  follow_box: {
    marginTop: 30,
    flexDirection: "row",
  },

  follow_button: {
    backgroundColor: "rgb(71,113,246)",
    height: 30,
    width: 125,
    borderRadius: 25,
  },

  send_button: {
    backgroundColor: 'rgb(120,213,250)',
    width: 55,
    height: 30,
    borderRadius: 25,
    marginLeft: 10,
    justifyContent: "center"
  },

  bottom_icon: {
    flex: 1,
    alignItems: "center"
  }
});
