const todoList = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO" : 
            return [...state, {text:action.text, id:state.length}];
        case "DELETE_TODO" : 
            return [...state.filter((item) => item.id !== action.id)];   
        default :
            return state;
    }
}

export default todoList;