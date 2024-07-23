import { useRef } from "react"

const ToDoForm = ({onFormSubmit, todo}) => {

    const todoRef = useRef()

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
            placeholder="todo task" 
            ref={todoRef}
            defaultValue={todo}
        />
        <button>Submit</button>
    </form>
}

export default ToDoForm