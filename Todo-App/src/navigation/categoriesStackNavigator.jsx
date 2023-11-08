import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "@screens/categoriesScreen";
import CategoryScreen from "@screens/categoryScreen";
import CreateCategoryScreen from "@screens/createCategoryScreen";

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        options={{
          headerShown: false,
        }}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="Category"
        options={{
          headerShown: false,
        }}
        component={CategoryScreen}
      />
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
