import { useRef } from "react"
import { useLanguageContext } from "../contexts/LanguageContext"

const ToDoForm = ({onFormSubmit, todo}) => {

    const todoRef = useRef()
    const {texts} = useLanguageContext()

    const onSubmit = (e) => {
        e.preventDefault()
        if(todoRef.current){
            onFormSubmit(todoRef.current.value)
        }else{
            console.log("Please fill all the information")
        }
    }

    return <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder={texts.placeholder} 
            ref={todoRef}
            defaultValue={todo}
        />
        <button>{texts.submit}</button>
    </form>
}

export default ToDoForm