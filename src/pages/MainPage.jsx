import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useLanguageContext } from "../contexts/LanguageContext";

const MainPage = () => {
    const {texts} = useLanguageContext()
    const {response, error, loading, resendRequest} = useFetch({url: '/api/v1/todos', method: 'GET'})
    const {sendRequest} = useRequest({method: 'DELETE'})
    const taskList = response?.items.map(task => {
      return{
        todo: task.todo,
        id: task._uuid
        }
    }) || []

    const onDelete = (taskId) => {
        sendRequest(null, `/api/v1/todos/${taskId}`).then(() => resendRequest())
    }

  if (loading) return <p>{texts.loading}</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      {taskList.map((task) => <div key={task.id} style={{ border: "1px solid gray" }}>
          <h3>{task.todo}</h3>
          <Link to={`/update/${task.id}`}>{texts.edit}</Link>
          <button onClick={() => onDelete(task.id)}>{texts.delete}</button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
