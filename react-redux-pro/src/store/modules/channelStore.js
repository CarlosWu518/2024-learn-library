import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList:[]
    },
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload
        }
    }
})

//异步请求
const { setChannelList } = channelStore.actions

const fetchChannelList = () => {
    return async dispatch => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        console.log(res,"res");
        dispatch(setChannelList(res.data.data.channels))
    }
}

export { fetchChannelList }

const reducer = channelStore.reducer

export default reducer