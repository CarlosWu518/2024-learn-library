import { createSlice } from '@reduxjs/toolkit';

const createStore = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        inscrement:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        },
        addTONum:(state , action)=>{
            state.count = action.payload;
        }
    }
})

//解构出来actionCreate函数
const {inscrement,decrement,addTONum} = createStore.actions;
//获取reducer
const reducer = createStore.reducer;
//以按需导出的方式导出actionCreate函数
export {inscrement,decrement,addTONum};
//以默认导出的方式导出reducer
export default reducer;