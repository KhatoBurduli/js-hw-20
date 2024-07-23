import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"
import ToDoForm from "../components/ToDoForm"

const UpdatePage = () => {
    const navigate = useNavigate()
    const {taskId} = useParams()
    const {response, loading, error} = useFetch({url: `/api/v1/todos/${taskId}`, method: 'GET'})

    const {sendRequest} = useRequest({url: `/api/v1/todos/${taskId}`, method: 'PUT'})

    const onSubmit = (todo) => {
        sendRequest({todo})
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }

    if(loading && !response) return <p>Loading . . .</p>
    if(error || !response) return <p>Something went wrong</p>

    return <ToDoForm onFormSubmit={onSubmit} todo={response.todo}/>
}

export default UpdatePage