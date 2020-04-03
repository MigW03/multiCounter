import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'
import Double from './pages/Double'
import Single from './pages/Single'
import Quadruple from './pages/Quadruple'
import Sextuple from './pages/Sextuple'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {backgroundColor: '#FFF'},
            headerTintColor: 'rgb(0, 0, 0)'
        }}>
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{
                    title: 'Contador múltiplo',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            />
            <Stack.Screen
                name='Single'
                component={Single}
                options={{
                    title: 'Único',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            />
            <Stack.Screen
                name='Double'
                component={Double}
                options={{
                    title: 'Duplo',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            />
            <Stack.Screen
                name='Quadruple'
                component={Quadruple}
                options={{
                    title: 'Quádruplo',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            />
            <Stack.Screen
                name='Sextuple'
                component={Sextuple}
                options={{
                    title: 'Sextuplo',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            />
        </Stack.Navigator>
    )
}