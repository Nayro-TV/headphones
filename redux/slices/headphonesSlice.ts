import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'
import { IHeadPhone } from '@/types'

export const fetchHeadphones = createAsyncThunk<IHeadPhone[]>(
	'headphones/fetchHeadphones',
	async () => {
		const { data } = await axios.get('/headphones')
		return data
	},
)

interface IHeadphonesSlice {
	data: IHeadPhone[]
	loading: boolean
	error: string | null
	search: string
}

const initialState: IHeadphonesSlice = {
	data: [],
	loading: false,
	error: null,
	search: '',
}

const headphonesSlice = createSlice({
	name: 'headphones',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchHeadphones.pending, state => {
				state.loading = true
			})
			.addCase(fetchHeadphones.fulfilled, (state, action) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchHeadphones.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'An error occurred'
			})
	},
})

export const { setSearch } = headphonesSlice.actions
export default headphonesSlice.reducer
