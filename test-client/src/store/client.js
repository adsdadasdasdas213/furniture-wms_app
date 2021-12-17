import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_PATH, tokenHeader} from "../component/Constants";
const clientSlice = createSlice({
    name:'client',
    initialState:{
        client:[],
        showModal:false,
        deleteModal:false
    },
    reducers:{
        getClient:((state, action) => {
            state.client=action.payload
        }),
        modalHandler:(state => {
            state.showModal=!state.showModal
        })
    }
})

export function getClient(){
    return function (dispatch){
        axios.get(API_PATH+'client/list',tokenHeader).then((res)=>{
            dispatch({
                type:'client/getClient',
                payload:res.data
            })
        })
    }
}
export function modalToggle(){
    return function (dispatch){
        dispatch({
            type:'client/modalHandler'
        })
    }
}

export default clientSlice.reducer