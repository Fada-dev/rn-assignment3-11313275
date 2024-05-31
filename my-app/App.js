import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
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
        <View style={styles.searchArea}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <View style={styles.filterIcon}>
            <Image source={require("./Filter.png")} />
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
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
    height: 49,
    top: 15,
    left: -10,
  },
  filterIcon: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    height: 49,
  },
  searchInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    width: 300,
    height: 49,
    backgroundColor: "#FBF9F7",
  },
});


