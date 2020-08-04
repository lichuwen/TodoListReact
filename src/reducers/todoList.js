const todoList = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO" : 
            return [...state, {text:action.text, id:state.length, status:false}];
        case "DELETE_TODO" : 
            return [...state.filter((item) => item.id !== action.id)];   
        case "CHANGE_STATUS":
            return [...state.map(item => item.id === action.id ? {...item,status:!item.status} : item)]
        default :
            return state;
    }
}

export default todoList;