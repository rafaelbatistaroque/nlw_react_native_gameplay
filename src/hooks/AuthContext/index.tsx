import React, { ReactNode, useContext } from "react";
import * as AuthSession from "expo-auth-session";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_USER } from "../../configs";

const { CDN_IMAGEM } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

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
    signOut: () => Promise<void>;
    signIn: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    };
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [usuario, setUsuario] = React.useState<User>({} as User);
    const [ehLoading, setloading] = React.useState<boolean>(false);

    const loadUserStoregaData = async (): Promise<void> => {
        const storage = await AsyncStorage.getItem(COLLECTION_USER);
        if(storage) {
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUsuario(userLogged);
        }
    };

    React.useEffect(() => {
        loadUserStoregaData();
    }, []);

    const signOut = async () => {
        setUsuario({} as User);
        await AsyncStorage.removeItem(COLLECTION_USER);
    };

    const signIn = async () => {
        try {
            setloading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if(type === "success" && !params.error) {

                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get("/users/@me");
                const firstName = userInfo.data.username.split(" ")[0];
                userInfo.data.avatar = `${CDN_IMAGEM}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                };

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));
                setUsuario(userData);
            }
        } catch {
            throw new Error("Erro ao autenticar");
        } finally {
            setloading(false);
        }
    };

    return <AuthContext.Provider value={{ user: usuario, ehLoading, signOut, signIn }}>
        {children}
    </AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};