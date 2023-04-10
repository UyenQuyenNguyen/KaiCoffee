import { createContext, useState } from "react";

export const CustomerContext = createContext(null);

export const CustomerProvider = ({ children }) => {
    const [address, setAddress] = useState("114/79 To Ngoc Van")
    const [name, setName] = useState("Nguyen Uyen Quyen")
    const [phone, setPhone] = useState("0889331154")
    const [isConfirm, setConfirm] = useState(false);
    const [total, setTotal] = useState(0);
    return (
        <CustomerContext.Provider value={{
            address, setAddress, name, setName, phone, setPhone, isConfirm, setConfirm, total, setTotal
        }}>
            {children}
        </CustomerContext.Provider>
    )

}
export default CustomerProvider;