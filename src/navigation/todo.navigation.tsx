import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoStackEnum } from "../enums/todo/todoStack.enum";
import { TodoPage } from "../pages/todo/todo.page";
import { LoginPage } from "../pages/login/login.page";

export const TodoNavigation = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={TodoStackEnum.LOGIN}>
        <Stack.Screen
          name={TodoStackEnum.LOGIN}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          component={LoginPage}
        />
        <Stack.Screen
          name={TodoStackEnum.LIST}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          component={TodoPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
