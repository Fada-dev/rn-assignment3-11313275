import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const categoriesData = [
  {
    title: "Exercise",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Study",
    tasks: 12,
    categoryImage: require("./pictures/workingdesk.png"),
  },
  {
    title: "Code",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Travel",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Cook",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Music",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Gardening",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Meditate",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Read",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
  {
    title: "Art",
    tasks: 12,
    categoryImage: require("./pictures/youngwoman.png"),
  },
];

const ongoingTasks = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Database Management",
  "Server Maintenance",
  "API Integration",
  "Testing & QA",
  "Project Planning",
  "Client Meetings",
  "Marketing Strategies",
  "Content Creation",
  "SEO Optimization",
  "Social Media Management",
  "Product Launch",
  "Customer Support",
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <StatusBar style="auto" />
        </View>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Hello , Devs</Text>
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
              style={[styles.searchInput, { paddingLeft: 20, placeholderTextColor: 'black'}]}
              placeholder="Search"
            />
          </View>
          <View style={styles.filterIcon}>
            <Image source={require("./Filter.png")} />
          </View>
        </View>

        <View style={styles.categories}>
          <Text style={styles.categoriesText}>Categories</Text>
        </View>

        <ScrollView horizontal={true} style={styles.categoriesContainer}>
          {categoriesData.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.title}>{category.title}</Text>
              <Text style={styles.tasks}>{category.tasks} Tasks</Text>
              <View style={styles.categoryImage}>
                <Image
                  style={styles.categoryIcons}
                  source={category.categoryImage}
                />
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.ongoingTasksSection}>
          <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
          <ScrollView style={styles.ongoingTasksContainer}>
            {ongoingTasks.map((task, index) => (
              <View key={index} style={styles.task}>
                <Text style={styles.taskTitle}>{task}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    fontSize: 12,
    fontWeight: "bold",
  },
  profileImage: {
    flexDirection: "column",
    position: "absolute",
    right: 10,
    height: 49,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    height: 38,
    fontFamily: 'lato'
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
    fontWeight: 'bold',
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
    marginTop: 40,
  },
  categoriesText: {
    fontWeight: 'bold',
    height: 24,
    fontSize: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  category: {
    marginRight: 20,
    height: 190,
    width: 180,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 15,
  },
  tasks: {
    marginLeft: 20,
    fontSize: 10,
  },
  categoryImage: {
    height: 120,
    width: 130,
    marginLeft: 20,
  },
  categoryIcons: {
    backgroundColor: 'white',
    height: 140,
    width: 140,
  },
  ongoingTasksSection: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ongoingTasksContainer: {
    maxHeight: 300,  // Adjust the height based on your requirement
  },
  task: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 128,
    justifyContent: 'center'
  },
  taskTitle: {
    fontSize: 16,
    height: 19,
    fontWeight: 'bold'

  },
});

export default App;
