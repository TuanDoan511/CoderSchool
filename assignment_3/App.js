import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tie game!",
      title_font: styles.title,
      player_choice: {
        id: -1,
        name: "",
        photo: { uri: "#" }
      },
      comp_choice: {
        id: -1,
        name: "",
        photo: { uri: "#" }
      }
    };
  }

  compare = (player_score, comp_score) => {
    if (player_score != comp_score) {
      let compare_score = player_score - comp_score;
      if (compare_score == 1 || compare_score == -2) {
        this.setState({ title: "win!", title_font: styles.win });
      } else {
        this.setState({ title: "lose!", title_font: styles.lose });
      }
    } else {
      this.setState({ title: "Tie game!", title_font: styles.title });
    }
  };

  choised = ({ choice }, callback) => {
    let random_choice = CHOICES[Math.floor(Math.random() * 3)];
    this.setState({
      player_choice: {
        id: choice.id,
        name: choice.name,
        photo: { uri: choice.uri }
      },
      comp_choice: {
        id: random_choice.id,
        name: random_choice.name,
        photo: { uri: random_choice.uri }
      }
    });
    callback(choice.id, random_choice.id);
  };

  button = choice => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.choised.bind(this, { choice }, this.compare)}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            color: "white"
          }}
        >
          {choice.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title_result}>
          <Text style={this.state.title_font}>{this.state.title}</Text>
        </View>

        <View style={styles.player_box}>
          <View style={styles.choices_box}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textDecorationLine: "underline"
              }}
            >
              YOU
            </Text>
            <Image
              source={this.state.player_choice.photo}
              style={styles.image}
            />
            <Text style={{ fontSize: 30, color: "#250902" }}>
              {this.state.player_choice.name}
            </Text>
          </View>
          <Text style={{ alignSelf: "center", fontSize: 20 }}>vs</Text>
          <View style={styles.choices_box}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textDecorationLine: "underline"
              }}
            >
              COMP
            </Text>
            <Image source={this.state.comp_choice.photo} style={styles.image} />
            <Text style={{ fontSize: 30, color: "#250902" }}>
              {this.state.comp_choice.name}
            </Text>
          </View>
        </View>

        <View style={styles.choices}>{CHOICES.map(this.button)}</View>
      </View>
    );
  }
}

const CHOICES = [
  {
    id: 1,
    name: "Rock",
    uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png"
  },
  {
    id: 2,
    name: "Paper",
    uri: "https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png"
  },
  {
    id: 3,
    name: "Scissors",
    uri:
      "http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },

  title_result: {
    flex: 1
  },

  player_box: {
    flex: 5,
    width: "95%",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center"
  },

  choices: {
    flex: 3
  },

  button: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14"
  },

  choices_box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width: 150,
    height: 150,
    padding: 10
  },

  title: {
    fontSize: 40,
    textAlign: "center"
  },

  win: {
    fontSize: 40,
    textAlign: "center",
    color: "green"
  },

  lose: {
    fontSize: 40,
    textAlign: "center",
    color: "red"
  }
});
