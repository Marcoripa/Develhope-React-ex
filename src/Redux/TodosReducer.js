const defaultState = []

export function addTodo(todo) {
    return {
        type: 'add',
        payload: todo
    }
}

export function deleteTodo(id) {
    return {
        type: 'delete',
        payload: id
    }
}

export function editTodo(id, title, completed) {
    return {
        type: 'edit',
        payload: {id, title, completed}
    }
}

export function TodosReducer(state = defaultState, action) {
    switch(action.type) {
        case 'add': {
            return [...state, action.payload]
        }
        case 'delete': {
            return state.filter(todo => todo.id !== action.payload)
        }
        case 'edit': {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, ...action.payload.title}
                }
                return todo
            })
        }
        default: {
            return state
        }
    }
}
