export const getDispalyedTodos = (todos, filters) => {
    const selectedFilterItem = filters.find(v => v.selected);
    switch (selectedFilterItem.text) {
        case 'ALL':
            return todos;
        case 'COMPELETED':
            return todos.filter(v => v.compeleted);
        default:
            return todos.filter(v => !v.compeleted);
    }
}