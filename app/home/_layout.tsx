import { Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: "#39C5BB" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "home" }}></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
