import { FETCH_DATA } from "./actionTypes"

export const dataFetch=(payload)=>{
    return{
        type:FETCH_DATA,
        payload
    }
}

// export const resetData=(payload)=>{
//     return{
//         type:RESET_DATA,
//         payload
//     }
// }