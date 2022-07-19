import { FETCH_DATA, HANDLE_INPUT } from "./actionTypes"

export const dataFetch=(payload)=>{
    return{
        type:FETCH_DATA,
        payload
    }
}

// export const handleInput=({name, value})=>{
//     return{
//         type:HANDLE_INPUT,
//         payload: {name,value}
//     }
// }