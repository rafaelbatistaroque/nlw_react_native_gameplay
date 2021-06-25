import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CORES } from "../constants";
import { AppointmentCreate, AppointmentDetails, Home } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: CORES.secondary100 } }}>
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    );
};