import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from "./src/screens/ComponentScreen";
import MyComponent from "./src/screens/MyComponent";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentScreen,
        MyComponent: MyComponent,
        List: ListScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App',
        },
    }
);

export default createAppContainer(navigator);
