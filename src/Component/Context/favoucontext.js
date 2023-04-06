import { createContext, useState } from "react";

const FavouContext = createContext();

export const FavouProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (
        <FavouContext.Provider value={{ auth, setAuth }}>
            {children}
        </FavouContext.Provider>
    )

}

export default FavouProvider;