import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import AmazingCropper from 'react-native-amazing-cropper';

class AmazingCropperPage extends React.Component {
  onDone = (croppedImageUri) => {
    console.log('croppedImageUri = ', croppedImageUri);
    // send image to server for example
  }

  onCancel = () => {
    console.log('Cancel button was pressed');
    // navigate back
  }

  render() {
    return (
      <AmazingCropper
        onDone={this.onDone}
        onCancel={this.onCancel}
        imageUri='https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg'
        imageWidth={1600}
        imageHeight={2396}
        NOT_SELECTED_AREA_OPACITY={0.3}
        BORDER_WIDTH={20}
      />
    );
  }
}

function CenteredText({ text, children }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
      {children}
    </View>
  );
}

function Tab1Component() {
  return <AmazingCropperPage />;
}

function Tab2Component() {
  return <CenteredText text="Tab2" />;
}

const Tabs = createBottomTabNavigator();

class TabsComponent extends React.Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Tab1"
          component={Tab1Component}
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

function FirstStackScreen() {
  return <AmazingCropperPage />;
}

function SecondStackScreen() {
  return <TabsComponent />;
}

const MainStack = createStackNavigator();

function MainStackComponent() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="FirstStackScreen"
        component={FirstStackScreen}
        options={({ navigation, route }) => ({
          headerRight: ({ tintColor }) => {
            return (
              <FontAwesome
                name="arrow-right"
                size={24}
                color={tintColor}
                style={{ paddingRight: 25 }}
                onPress={() => {
                  navigation.navigate("SecondStackScreen");
                }}
              />
            );
          }
        })}
      />
      <MainStack.Screen
        name="SecondStackScreen"
        component={SecondStackScreen}
      />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStackComponent />
    </NavigationContainer>
  );
}
