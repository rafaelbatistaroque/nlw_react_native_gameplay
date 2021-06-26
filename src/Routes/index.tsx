import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../hooks/AuthContext";
import { AppRoutes } from "./app.routes";
import { SignIn } from "../screens";

export const Routes = () => {
    const { user } = useAuthContext();

    return <NavigationContainer>
        {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>;
};