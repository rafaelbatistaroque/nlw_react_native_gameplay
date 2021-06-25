import React, { ReactNode, useContext } from "react";
import * as AuthSession from "expo-auth-session";
import { api } from "../../services/api";
import { CDN_IMAGEM, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "../../configs";

export type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

type AuthContextData = {
    user: User;
    ehLoading: boolean;
    signOut: () => void;
    signIn: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string;
    };
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [usuario, setUsuario] = React.useState<User>({} as User);
    const [ehLoading, setloading] = React.useState<boolean>(false);

    const signOut = () => {
        setUsuario({} as User);
    };

    const signIn = async () => {
        try {
            setloading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if(type === "success") {

                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get("/users/@me");
                const firstName = userInfo.data.username.split(" ")[0];
                userInfo.data.avatar = `${CDN_IMAGEM}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                setUsuario({
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                });
            }

            setloading(false);

        } catch {
            setloading(false);
            throw new Error("Erro ao autenticar");
        }

    };

    return <AuthContext.Provider value={{ user: usuario, ehLoading, signOut, signIn }}>
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};