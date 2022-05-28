import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthenticationPage } from "../authentication";
import { CalendarPage } from "../calendar";
import { HomePage } from "../home";
import { ProfilePage } from "../profile";


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return <Tab.Navigator
                initialRouteName="Home" screenOptions={{tabBarShowLabel: true}}
    >
        <Tab.Screen name='Home' component={HomePage} options={{ title: 'Welcome' }} />
        <Tab.Screen name='Profile' component={ProfilePage} initialParams={{ name: "Nom" }} />
        <Tab.Screen name='Authentication' component={AuthenticationPage} />
        <Tab.Screen name='Calendar' component={CalendarPage} />
    </Tab.Navigator>;
}