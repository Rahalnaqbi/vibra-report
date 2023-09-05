const Stack = createNativeStackNavigator();
import * as React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Pro16 from "./screens/IPhone14Pro16";
import IPhone14Pro11 from "./screens/IPhone14Pro11";
import IPhone14Pro8Edited2 from "./screens/IPhone14Pro8Edited2";
import IPhone14Pro12 from "./screens/IPhone14Pro12";
import Edited215 from "./screens/Edited215";
import IPhone14Pro14 from "./screens/IPhone14Pro14";
import IPhone14Pro13 from "./screens/IPhone14Pro13";
import IPhone14Pro17 from "./screens/IPhone14Pro17";
import IPhone14Pro18 from "./screens/IPhone14Pro18";
import IPhone14Pro1 from "./screens/IPhone14Pro1";
import IPhone14Pro10 from "./screens/IPhone14Pro10";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "FontAwesome5Free-Solid": require("./assets/fonts/FontAwesome5Free-Solid.otf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IPhone14Pro11"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="IPhone14Pro16"
              component={IPhone14Pro16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro11"
              component={IPhone14Pro11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro8Edited2"
              component={IPhone14Pro8Edited2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro12"
              component={IPhone14Pro12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edited215"
              component={Edited215}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro14"
              component={IPhone14Pro14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro13"
              component={IPhone14Pro13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro17"
              component={IPhone14Pro17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro18"
              component={IPhone14Pro18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro1"
              component={IPhone14Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro10"
              component={IPhone14Pro10}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <IPhone14Pro16 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

