import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

class Tab1Screen1Component extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab1 Screen1</Text>
        <Button title="Navigate to Tab1Screen2" onPress={() => { this.props.navigation.navigate("Tab1Screen2"); }} />
      </View>
    );
  }
}

class Tab1Screen2Component extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab1 Screen2</Text>
      </View>
    );
  }
}

const Tab1Stack = createStackNavigator();

class Tab1StackComponent extends React.Component {
  render() {
    return (
      <Tab1Stack.Navigator>
        <Tab1Stack.Screen
          name="Tab1Screen1"
          component={Tab1Screen1Component}
        />
        <Tab1Stack.Screen name="Tab1Screen2" component={Tab1Screen2Component} />
      </Tab1Stack.Navigator>
    );
  }
}

class Tab2Component extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tab2</Text>
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator();

class TabsComponent extends React.Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Tab1"
          component={Tab1StackComponent}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <FontAwesome name="star-o" size={size} color={color} />;
            }
          }}
        />
        <Tabs.Screen
          name="Tab2"
          component={Tab2Component}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <FontAwesome name="adjust" size={size} color={color} />;
            }
          }}
        />
      </Tabs.Navigator>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <TabsComponent />
    </NavigationContainer>
  );
}
