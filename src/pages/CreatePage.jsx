import { useNavigate } from "react-router-dom"
import useRequest from "../hooks/useRequest"
import ToDoForm from "../components/ToDoForm"
import { useLanguageContext } from "../contexts/LanguageContext"

const CreatePage = () => {
    const {sendRequest, loading} = useRequest({url: '/api/v1/todos', method: 'POST'})
    const {texts} = useLanguageContext()
    const navigate = useNavigate()

    const onSubmit = (todo) => {
        sendRequest([{todo}])
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }
    if(loading) return <p>{texts.loading}</p>
    return <ToDoForm onFormSubmit={onSubmit}/>
}

export default CreatePage