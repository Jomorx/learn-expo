import { useRouter } from "expo-router";
import { Button } from "react-native";
import { Text, View } from "../components/Themed";

const login = () => {
    const router = useRouter()
  return (
    <View>
      <Text>login</Text>
      <Button title="Login" onPress={()=>router.replace("home")}></Button>
    </View>
  );
};

export default login;
