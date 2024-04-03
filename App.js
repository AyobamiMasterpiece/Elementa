import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import IconBtn from "./UI/Iconbtn";
import SevenDays from "./Screens/SevenDays";
import SearchInput from "./UI/SearchInput";
import LocationContext from "./Context/LocationContext";
import LocationProvider from "./Context/LocationContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getForecast, useGetForecast } from "./api/weather";
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="sevendays"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#FEB054",
              },
              // contentStyle: { backgroundColor: "red" },
            }}
          >
            <Stack.Screen
              component={HomeScreen}
              name={"Home"}
              options={{
                title: null,
                headerShown: false,

                // headerLeft: () => {
                //   return <IconBtn name={"search"} size={25}></IconBtn>;
                // },
                // headerRight: () => {
                //   return (
                //     <View
                //       style={{
                //         flex: 1,
                //         backgroundColor: "pink",
                //       }}
                //     >
                //       <Text>lll</Text>
                //     </View>
                //   );
                // },
              }}
            ></Stack.Screen>
            <Stack.Screen
              component={SevenDays}
              name="sevendays"
              options={{
                title: "Next 7 Days",
                headerTitleAlign: "center",
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </LocationProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
