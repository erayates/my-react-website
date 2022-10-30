import {createSlice,createAsyncThunk,EntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGit = createAsyncThunk('git/fetchGit', async () => {
    const response = await axios.get('https://api.github.com/users/erayates');
    return response.data;
});

export const fetchRepos = createAsyncThunk('git/fetchRepos', async () => {
    const response = await axios.get('https://api.github.com/users/erayates/repos');
    return response.data;
})

export const gitSlice = createSlice({
    name: 'git',
    initialState: {
        items: [],
        repos: [],
        status: 'idle',
        repoStatus: 'idle',
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
        },
        [fetchRepos.pending]: (state, action) => {
            state.repoStatus = 'loading';
        },
        [fetchRepos.fulfilled]: (state, action) => {
            state.repoStatus = 'succeeded';
            state.repos = action.payload;
        },
        [fetchRepos.rejected]: (state, action) => {
            state.repoStatus = 'failed';
            state.error = action.error
        }
    }
})

export default gitSlice.reducer;
export const getData = state => state.git.items;
export const showStatus = state => state.git.status