import bindActions from './bindActions';

const mapState = state => {
    let {filters, todos} = state;
    const {addTodo, compeleteTodo} = bindActions;
    return {
        params_adder: {
            addTodo
        },
        params_filter: {
            filters
        },
        params_todos: {
            todos,
            params_todoItem: {
                compeleteTodo
            }
        },
    };
}
export default mapState;