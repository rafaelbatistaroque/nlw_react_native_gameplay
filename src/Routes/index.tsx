import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../hooks/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { SignIn } from "../screens";

export const Routes = () => {
    const { user } = useAuthContext();

    return <NavigationContainer>
        {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>;
};