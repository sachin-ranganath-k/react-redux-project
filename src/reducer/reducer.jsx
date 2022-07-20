import { FETCH_DATA } from "../action/actionTypes";

const initialState={
    loadData:[],
    
// emptyData:{
//     studReg: "",
//     studName: "",
//     studEmail: "",
//     studMob: "",
// }
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA :
            return{
                ...state,
                loadData: action.payload
            }

        // case RESET_DATA:
        //     return{
        //         ...state,
        //         loadData:initialState.emptyData
        //     }

            default: return state;
    }

   

}

export default reducer;