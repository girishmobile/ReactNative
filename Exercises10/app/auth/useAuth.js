import { useContext } from "react"
import jwtDecode from "jwt-decode";

import authContext from "./context"
import authStorage from "./storage";

export default useAuth = () => {

    const { user, setUser } = useContext(authContext);
    const logIn = (authToken) => {
        console.log('authToken', authToken);

        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }
    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }
    return { user, logIn, logOut, setUser };
}