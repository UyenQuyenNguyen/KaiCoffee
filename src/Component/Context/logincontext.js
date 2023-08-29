import { createContext, useState } from "react";

export const LoginContext = createContext(null);

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({ firstName: 'Guest' });
    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )

}

export default LoginProvider;