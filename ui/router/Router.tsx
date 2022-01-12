import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationTheme } from '../themes/app-theme';
import Index from '../../src/pages';
import EncontrarDiaristas from '../../src/pages/encontrar-diarista';
import Logo from '@assets/img/logos/e-diaristas-logo.png';

const Stack = createStackNavigator();

export type RootStackParamList = {
     Index: undefined;
     EncontrarDiaristas: undefined;
};

const Router: React.FC = () => {
     return (
          <NavigationContainer theme={NavigationTheme}>
               <Stack.Navigator>
                    <Stack.Screen
                         name={'Index'}
                         component={Index}
                         options={{
                              headerTitleAlign: 'center',
                              headerTitle: () => (
                                   <Image
                                        style={{
                                             width: 150,
                                             height: 50,
                                             resizeMode: 'contain',
                                        }}
                                        source={Logo}
                                   />
                              ),
                         }}
                    />

                    <Stack.Screen
                         name={'EncontrarDiaristas'}
                         component={EncontrarDiaristas}
                         options={{
                              title: 'Encontrar Diarista',
                         }}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     );
};

export default Router;
