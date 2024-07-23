import { createContext, useContext, useMemo, useState } from "react";
import { languages } from "./Languages";

const LanguageContext = createContext(null)

export const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState("en")

    const contextValue = useMemo(() => ({
        language,
        texts: languages[language],
        toggleLanguage: () => setLanguage((prev) => prev === "en" ? "ქა" : "en")
    }), [language])

    return (<LanguageContext.Provider value={contextValue}>
            {children}
    </LanguageContext.Provider>)
}

export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext)

    if(!contextValue) throw new Error("Something went wrong with language context");
    return contextValue
}

export default LanguageContextProvider