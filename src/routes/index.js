import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome' //feito
import Albuns from '../pages/albuns' //feito
import Tours from '../pages/Tours' //feito
import TheEras from '../pages/theeras' //feito
import Midnights from '../pages/midnigths' //feito

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="Tours" 
        component= { Tours } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="Albuns" 
        component= {Albuns}
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="TheEras" 
        component= { TheEras } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="Midnights" 
        component= { Midnights }
        options= { {headerShown: false} }
         />
    </Stack.Navigator>
    
  )
}