import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Hello, Devs</Text>
            <Text style={styles.taskMessage}>15 tasks today</Text>
          </View>
          <View style={styles.profileImage}>
            <Image source={require("./Profile-image.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    textAlign: "center",
  },
  content: {
    margin: 10,
  },
  header: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  headerRow: {
    flexDirection: "column",
    height: 49,
  },
  taskMessage: {
    fontSize: 10,
    marginTop: -3,
    fontWeight: "condensedBold",
  },
  profileImage: {
    flexDirection: "column",
    position: "absolute",
    right: 10,
    height: 49,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "condensedBold",
  },
});
