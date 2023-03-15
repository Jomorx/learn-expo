import { View, Text, Button } from "../../components/Themed";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
const home = () => {
  const router = useRouter();
  return (
    <View style={container}>
      <Text>Home</Text>
      <View style={buttonContainer}>
        <Button title="Search" onPress={()=>router.push("search")}></Button>
      </View>
    </View>
  );
};

export default home;

const { container, buttonContainer } = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  button: {
    width: 200,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
