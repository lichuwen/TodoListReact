import Axios from 'axios';

export function getTodo(){
    return Axios({
        method:'get',
        url: ('https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos')
    }) 
}

export function postTodo(data){
    return Axios({
        method:'post',
        url: ('https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos'),
        data: data
    }) 
}

export function putTodo(id,data){
    return Axios({
        method:'put',
        url: `https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos/${id}`,
        data: data
    }) 
}

export function deleteTodo(id){
    return Axios({
        method:'delete',
        url: `https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos/${id}`
    }) 
}