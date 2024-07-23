import { Link } from "react-router-dom"
import { useLanguageContext } from "../contexts/LanguageContext"

const Header = () => {
    const {language, texts, toggleLanguage} = useLanguageContext()
    return (
        <header className="header">
            <button onClick={toggleLanguage}>{language}</button>
            <Link to={'/'}>{texts.home}</Link>
            <Link to={'/create'}>{texts.create}</Link>
        </header>
    )
}

export default Header