import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({children}) => {
    const [login, setLogin] = useState(false);
    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    )

}

export default LoginProvider;