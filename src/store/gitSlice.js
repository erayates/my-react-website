import {createSlice,createAsyncThunk,EntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGit = createAsyncThunk('git/fetchGit', async () => {
    const response = await axios.get('https://api.github.com/users/erayates');
    return response.data;
});

export const gitSlice = createSlice({
    name: 'git',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchGit.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchGit.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        [fetchGit.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error
     
        }
    }
})

export default gitSlice.reducer;
export const selectAllGit = state => state.git.items;
export const showStatus = state => state.git.status