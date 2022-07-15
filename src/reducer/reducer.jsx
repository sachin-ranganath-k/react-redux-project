import { FETCH_DATA } from "../action/actionTypes";

const initialState={
    loadData:[],
// responseData:{
//     userId:"",
//     title:"",
//     body:""
// }
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA :
            return{
                ...state,
                loadData: action.payload
            }

            default: return state;
    }
}

export default reducer;