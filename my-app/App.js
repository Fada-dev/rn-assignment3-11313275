import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
          <View style={styles.searchInputContainer}>
            <FontAwesome
              name="search"
              size={24}
              color="#000"
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.searchInput, { paddingLeft: 20, }]}
              placeholder="Search"
            />
          </View>
          <View style={styles.filterIcon}>
            <Image source={require("./Filter.png")} />
          </View>
        </View>
        <View style={styles.categories}>
          <Text>Categories</Text>
          <View style={styles.categoriesTasks}>
            <Text>Exercise</Text>
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
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 49,
    color: 'black',
    placeholderTextColor: 'black', 
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    backgroundColor: "#FBF9F7",
    height: 49,
    width: 300,
  },
  searchIcon: {
    marginLeft: 12,
    marginRight: -17,
  },
  categories: {
    top: 50,
    fontWeight: 700,
    fontStyle: "lato",
    fontSize: 20,
    height: 24,
    fontColor: "black",
    width: 96,
  },
  categoriesTasks: {
    borderWidth: 1,
    borderColor: "black",
  },
});
