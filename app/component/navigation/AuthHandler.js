import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppStack from "./AppNavigator";
import AuthStack from "./AuthNavigator";

const Switcher = createSwitchNavigator({
    AuthStack: AuthStack,
    App: AppStack,
});

export default createAppContainer(Switcher);