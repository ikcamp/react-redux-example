import bindActions from './bindActions';
import {getDispalyedTodos} from './selector';

const mapStateToProps = state => {
    let {filters, todos, baseInfo} = state;
    const {addTodo, compeleteTodo, getTodos, chooseFilter} = bindActions;
    const {isLoading} = baseInfo;
    return {
        isLoading,
        getTodos,
        addTodo,
        params_filter: {
            filters,
            chooseFilter
        },
        params_todos: {
            todos: getDispalyedTodos(todos, filters),
            params_todoItem: {
                compeleteTodo
            }
        },
    };
}
export default mapStateToProps;