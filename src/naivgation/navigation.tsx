import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from '../screens/CourseList/CourseListScreen';
import CourseDetailScreen from '../screens/CourseDetail/CourseDetailScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="CourseListScreen">
      <Stack.Screen
        name="CourseListScreen"
        component={CourseListScreen}
        options={{
          headerShown: true,
          title: 'Courses List',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CourseDetailScreen"
        component={CourseDetailScreen}
        options={{
          headerShown: true,
          title: 'Course Detail',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
