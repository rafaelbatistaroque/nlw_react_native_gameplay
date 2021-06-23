import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, SignIn } from "../screens";
import { CORES } from "../constants";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: CORES.secondary100 } }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
};